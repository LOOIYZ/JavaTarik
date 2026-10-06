import struct
import json
import math
import os

"""
JavaTarik 3D Islands GLB Generator
Generates glTF 2.0 Binary (.glb) file containing 10 floating islands
corresponding to the 10 Java Chapters (Ch 0 - Ch 9).
Part of the Python -> Blender -> GLB 3D asset production pipeline.
"""

class GLBBuilder:
    def __init__(self):
        self.vertices = []      # (x, y, z)
        self.normals = []       # (nx, ny, nz)
        self.colors = []        # (r, g, b)
        self.indices = []       # int indices
        self.nodes = []
        self.materials = []
        self.meshes = []

    def add_mesh_primitive(self, name, verts, norms, cols, inds, mat_idx=0):
        # verts: list of (x,y,z), norms: list of (nx,ny,nz), cols: list of (r,g,b), inds: list of (i0,i1,i2)
        base_v = len(self.vertices)
        self.vertices.extend(verts)
        self.normals.extend(norms)
        self.colors.extend(cols)
        for i in inds:
            self.indices.append(base_v + i)

    def build_glb(self, filepath):
        # Pack binary buffer:
        # BufferView 0: POSITION (FLOAT VEC3)
        # BufferView 1: NORMAL (FLOAT VEC3)
        # BufferView 2: COLOR_0 (FLOAT VEC3)
        # BufferView 3: INDICES (UNSIGNED_INT SCALAR)
        
        pos_bytes = bytearray()
        norm_bytes = bytearray()
        col_bytes = bytearray()
        ind_bytes = bytearray()

        min_pos = [float('inf')]*3
        max_pos = [-float('inf')]*3

        for v in self.vertices:
            pos_bytes.extend(struct.pack('<fff', v[0], v[1], v[2]))
            for k in range(3):
                if v[k] < min_pos[k]: min_pos[k] = v[k]
                if v[k] > max_pos[k]: max_pos[k] = v[k]

        for n in self.normals:
            norm_bytes.extend(struct.pack('<fff', n[0], n[1], n[2]))

        for c in self.colors:
            col_bytes.extend(struct.pack('<fff', c[0], c[1], c[2]))

        min_idx = 0
        max_idx = len(self.indices) - 1 if self.indices else 0
        for i in self.indices:
            ind_bytes.extend(struct.pack('<I', i))

        def pad4(b):
            rem = len(b) % 4
            if rem != 0:
                b.extend(b'\x00' * (4 - rem))
            return b

        pos_bytes = pad4(pos_bytes)
        norm_bytes = pad4(norm_bytes)
        col_bytes = pad4(col_bytes)
        ind_bytes = pad4(ind_bytes)

        bin_buffer = bytearray()
        bv_pos_offset = len(bin_buffer)
        bin_buffer.extend(pos_bytes)
        bv_norm_offset = len(bin_buffer)
        bin_buffer.extend(norm_bytes)
        bv_col_offset = len(bin_buffer)
        bin_buffer.extend(col_bytes)
        bv_ind_offset = len(bin_buffer)
        bin_buffer.extend(ind_bytes)

        num_verts = len(self.vertices)
        num_inds = len(self.indices)

        gltf = {
            "asset": {
                "version": "2.0",
                "generator": "JavaTarik Python GLB Generator"
            },
            "scene": 0,
            "scenes": [{"name": "JavaTarikArchipelago", "nodes": [0]}],
            "nodes": [
                {
                    "name": "ArchipelagoMesh",
                    "mesh": 0
                }
            ],
            "meshes": [
                {
                    "name": "FloatingIslandsCombined",
                    "primitives": [
                        {
                            "attributes": {
                                "POSITION": 0,
                                "NORMAL": 1,
                                "COLOR_0": 2
                            },
                            "indices": 3,
                            "material": 0
                        }
                    ]
                }
            ],
            "materials": [
                {
                    "name": "StylizedIslandMat",
                    "pbrMetallicRoughness": {
                        "roughnessFactor": 0.85,
                        "metallicFactor": 0.05
                    },
                    "doubleSided": True
                }
            ],
            "accessors": [
                {
                    "bufferView": 0,
                    "byteOffset": 0,
                    "componentType": 5126, # FLOAT
                    "count": num_verts,
                    "type": "VEC3",
                    "min": min_pos,
                    "max": max_pos
                },
                {
                    "bufferView": 1,
                    "byteOffset": 0,
                    "componentType": 5126, # FLOAT
                    "count": num_verts,
                    "type": "VEC3"
                },
                {
                    "bufferView": 2,
                    "byteOffset": 0,
                    "componentType": 5126, # FLOAT
                    "count": num_verts,
                    "type": "VEC3"
                },
                {
                    "bufferView": 3,
                    "byteOffset": 0,
                    "componentType": 5125, # UNSIGNED_INT
                    "count": num_inds,
                    "type": "SCALAR",
                    "min": [min_idx],
                    "max": [max_idx]
                }
            ],
            "bufferViews": [
                {
                    "buffer": 0,
                    "byteOffset": bv_pos_offset,
                    "byteLength": len(pos_bytes),
                    "target": 34962 # ARRAY_BUFFER
                },
                {
                    "buffer": 0,
                    "byteOffset": bv_norm_offset,
                    "byteLength": len(norm_bytes),
                    "target": 34962
                },
                {
                    "buffer": 0,
                    "byteOffset": bv_col_offset,
                    "byteLength": len(col_bytes),
                    "target": 34962
                },
                {
                    "buffer": 0,
                    "byteOffset": bv_ind_offset,
                    "byteLength": len(ind_bytes),
                    "target": 34963 # ELEMENT_ARRAY_BUFFER
                }
            ],
            "buffers": [
                {
                    "byteLength": len(bin_buffer)
                }
            ]
        }

        json_str = json.dumps(gltf, separators=(',', ':'))
        json_bytes = bytearray(json_str.encode('utf-8'))
        # Pad json_bytes with 0x20 spaces to 4 bytes boundary
        rem_j = len(json_bytes) % 4
        if rem_j != 0:
            json_bytes.extend(b' ' * (4 - rem_j))

        # Pad bin_buffer with 0x00 to 4 bytes boundary
        rem_b = len(bin_buffer) % 4
        if rem_b != 0:
            bin_buffer.extend(b'\x00' * (4 - rem_b))

        total_length = 12 + 8 + len(json_bytes) + 8 + len(bin_buffer)

        with open(filepath, 'wb') as f:
            # Header
            f.write(struct.pack('<III', 0x46546C67, 2, total_length)) # 'glTF', ver 2, length
            # Chunk 0: JSON
            f.write(struct.pack('<II', len(json_bytes), 0x4E4F534A)) # length, 'JSON'
            f.write(json_bytes)
            # Chunk 1: BIN
            f.write(struct.pack('<II', len(bin_buffer), 0x004E4942)) # length, 'BIN\0'
            f.write(bin_buffer)

        print(f"Successfully wrote GLB to {filepath} ({total_length} bytes)")


# Helpers to generate procedural low-poly 3D shapes
def add_cylinder(builder, center, r_top, r_bot, height, segments, col_top, col_bot, col_side=None):
    if col_side is None: col_side = col_bot
    cx, cy, cz = center
    verts = []
    norms = []
    cols = []
    inds = []

    # Top center vertex
    top_center_idx = len(verts)
    verts.append((cx, cy + height/2, cz))
    norms.append((0, 1, 0))
    cols.append(col_top)

    # Top ring
    top_ring_start = len(verts)
    for i in range(segments):
        theta = i * 2 * math.pi / segments
        px = cx + r_top * math.cos(theta)
        pz = cz + r_top * math.sin(theta)
        verts.append((px, cy + height/2, pz))
        norms.append((0, 1, 0))
        cols.append(col_top)

    # Top fan indices
    for i in range(segments):
        nxt = (i + 1) % segments
        inds.extend([top_center_idx, top_ring_start + i, top_ring_start + nxt])

    # Bottom center vertex
    bot_center_idx = len(verts)
    verts.append((cx, cy - height/2, cz))
    norms.append((0, -1, 0))
    cols.append(col_bot)

    # Bottom ring
    bot_ring_start = len(verts)
    for i in range(segments):
        theta = i * 2 * math.pi / segments
        px = cx + r_bot * math.cos(theta)
        pz = cz + r_bot * math.sin(theta)
        verts.append((px, cy - height/2, pz))
        norms.append((0, -1, 0))
        cols.append(col_bot)

    # Bottom fan indices
    for i in range(segments):
        nxt = (i + 1) % segments
        inds.extend([bot_center_idx, bot_ring_start + nxt, bot_ring_start + i])

    # Side quads
    for i in range(segments):
        nxt = (i + 1) % segments
        t1 = top_ring_start + i
        t2 = top_ring_start + nxt
        b1 = bot_ring_start + i
        b2 = bot_ring_start + nxt

        # Calculate normal
        mid_theta = (i + 0.5) * 2 * math.pi / segments
        nx = math.cos(mid_theta)
        nz = math.sin(mid_theta)

        # Create separate vertices for smooth side shading
        si = len(verts)
        verts.append(verts[t1])
        verts.append(verts[t2])
        verts.append(verts[b2])
        verts.append(verts[b1])
        norms.extend([(nx, 0.2, nz), (nx, 0.2, nz), (nx, -0.2, nz), (nx, -0.2, nz)])
        cols.extend([col_side, col_side, col_bot, col_bot])
        inds.extend([si, si+2, si+1, si, si+3, si+2])

    builder.add_mesh_primitive("cylinder", verts, norms, cols, inds)


def add_floating_island(builder, center, radius, island_idx):
    # center: (cx, cy, cz)
    cx, cy, cz = center
    
    # Distinct Island Themes matching the 10 chapters:
    # 0: Sakura Spring, 1: Golden Autumn, 2: Turquoise Mushroom, 3: Coral Sunset Palm,
    # 4: Purple Cloud Pine, 5: Azure Weeping Willow, 6: Alabaster World Tree, 7: Pagoda Autumn Vista,
    # 8: Prismatic Ghost Woods, 9: Starlight Midnight Citadel
    theme_palettes = [
        {"grass": (0.55, 0.91, 0.60), "dirt": (0.49, 0.31, 0.25), "rock": (0.24, 0.16, 0.13), "flora": "sakura"},
        {"grass": (0.90, 0.62, 0.23), "dirt": (0.43, 0.24, 0.09), "rock": (0.26, 0.16, 0.08), "flora": "autumn_oak"},
        {"grass": (0.07, 0.72, 0.52), "dirt": (0.14, 0.23, 0.21), "rock": (0.10, 0.18, 0.16), "flora": "mushroom"},
        {"grass": (0.96, 0.68, 0.33), "dirt": (0.71, 0.33, 0.04), "rock": (0.27, 0.10, 0.02), "flora": "sunset_palm"},
        {"grass": (0.59, 0.46, 0.98), "dirt": (0.36, 0.24, 0.58), "rock": (0.18, 0.11, 0.32), "flora": "cloud_pine"},
        {"grass": (0.22, 0.74, 0.97), "dirt": (0.01, 0.52, 0.78), "rock": (0.06, 0.09, 0.16), "flora": "weeping_willow"},
        {"grass": (0.32, 0.81, 0.40), "dirt": (0.36, 0.25, 0.20), "rock": (0.20, 0.23, 0.25), "flora": "world_tree"},
        {"grass": (0.76, 0.25, 0.05), "dirt": (0.49, 0.18, 0.07), "rock": (0.25, 0.11, 0.08), "flora": "pagoda_vista"},
        {"grass": (0.18, 0.83, 0.75), "dirt": (0.06, 0.46, 0.43), "rock": (0.07, 0.31, 0.29), "flora": "ghost_tree"},
        {"grass": (0.19, 0.18, 0.51), "dirt": (0.12, 0.11, 0.29), "rock": (0.06, 0.05, 0.15), "flora": "midnight_citadel"}
    ]
    pal = theme_palettes[island_idx % len(theme_palettes)]
    grass_col = pal["grass"]
    dirt_col = pal["dirt"]
    rock_dark = pal["rock"]
    rock_mid = tuple(min(1.0, c * 1.5) for c in rock_dark)

    segments = 14
    
    # 1. Top Grass Plateau (slight bevel cylinder)
    add_cylinder(builder, (cx, cy, cz), radius, radius * 0.95, 0.6, segments, grass_col, grass_col, grass_col)
    
    # 2. Dirt Layer directly beneath grass
    add_cylinder(builder, (cx, cy - 0.5, cz), radius * 0.95, radius * 0.85, 0.7, segments, dirt_col, rock_mid)

    # 3. Craggy Inverted Rocky Underside (cones down to a tip)
    add_cylinder(builder, (cx, cy - 2.0, cz), radius * 0.85, radius * 0.4, 2.3, segments, rock_mid, rock_dark)
    add_cylinder(builder, (cx, cy - 3.8, cz), radius * 0.4, 0.1, 1.6, 7, rock_dark, rock_dark)

    # 4. Stylized Trees matching Island's Flora Theme
    flora_kind = pal["flora"]
    num_trees = 3 + (island_idx % 2)

    for t in range(num_trees):
        angle = t * (2 * math.pi / num_trees) + 0.3
        dist = radius * 0.48 + (t % 2) * (radius * 0.15)
        tx = cx + dist * math.cos(angle)
        tz = cz + dist * math.sin(angle)
        ty = cy + 0.3

        if flora_kind == "sakura":
            # Sakura Cherry Blossom: dark trunk + pink blossom tiers
            add_cylinder(builder, (tx, ty + 0.6, tz), 0.12, 0.18, 1.2, 5, (0.35, 0.22, 0.15), (0.35, 0.22, 0.15))
            f_col = (1.0, 0.65, 0.72)
            add_cylinder(builder, (tx, ty + 1.5, tz), 0.75, 0.85, 0.6, 7, f_col, f_col)
            add_cylinder(builder, (tx, ty + 2.0, tz), 0.45, 0.65, 0.5, 6, (1.0, 0.75, 0.80), f_col)
        elif flora_kind == "autumn_oak":
            # Golden Autumn Oak: thick trunk + puffy golden-amber crown
            add_cylinder(builder, (tx, ty + 0.7, tz), 0.20, 0.32, 1.4, 6, (0.38, 0.26, 0.18), (0.38, 0.26, 0.18))
            f_col = (0.96, 0.62, 0.0) if t % 2 == 0 else (0.99, 0.77, 0.10)
            add_cylinder(builder, (tx, ty + 1.7, tz), 0.95, 1.05, 0.8, 8, f_col, f_col)
            add_cylinder(builder, (tx, ty + 2.3, tz), 0.6, 0.8, 0.6, 7, (1.0, 0.72, 0.2), f_col)
        elif flora_kind == "mushroom":
            # Giant Turquoise Spotted Mushroom: cream stalk + turquoise dome cap
            add_cylinder(builder, (tx, ty + 0.7, tz), 0.22, 0.38, 1.4, 7, (0.98, 0.92, 0.84), (0.98, 0.92, 0.84))
            add_cylinder(builder, (tx, ty + 1.6, tz), 0.2, 1.1, 0.9, 9, (0.07, 0.72, 0.52), (0.07, 0.72, 0.52))
        elif flora_kind == "sunset_palm":
            # Curved Sunset Palm: leaning segmented trunk + coral fronds
            add_cylinder(builder, (tx, ty + 0.8, tz), 0.12, 0.16, 1.6, 5, (0.55, 0.42, 0.34), (0.55, 0.42, 0.34))
            add_cylinder(builder, (tx, ty + 1.8, tz), 0.8, 0.2, 0.5, 6, (0.98, 0.42, 0.42), (0.98, 0.42, 0.42))
        elif flora_kind == "cloud_pine":
            # Purple Cloud Pine: slender trunk + 3 lavender/purple horizontal cloud pads
            add_cylinder(builder, (tx, ty + 0.8, tz), 0.10, 0.16, 1.6, 5, (0.35, 0.22, 0.15), (0.35, 0.22, 0.15))
            add_cylinder(builder, (tx, ty + 1.2, tz), 0.4, 0.85, 0.25, 6, (0.59, 0.46, 0.98), (0.59, 0.46, 0.98))
            add_cylinder(builder, (tx, ty + 1.7, tz), 0.3, 0.65, 0.22, 6, (0.52, 0.37, 0.97), (0.52, 0.37, 0.97))
            add_cylinder(builder, (tx, ty + 2.1, tz), 0.1, 0.45, 0.20, 6, (0.69, 0.59, 0.99), (0.69, 0.59, 0.99))
        elif flora_kind == "weeping_willow":
            # Azure Weeping Willow: grey trunk + cascading cyan tendrils
            add_cylinder(builder, (tx, ty + 0.8, tz), 0.22, 0.35, 1.6, 6, (0.42, 0.38, 0.36), (0.42, 0.38, 0.36))
            add_cylinder(builder, (tx, ty + 1.8, tz), 0.85, 0.95, 0.7, 8, (0.45, 0.75, 0.99), (0.45, 0.75, 0.99))
            add_cylinder(builder, (tx, ty + 1.2, tz), 0.7, 0.3, 1.0, 8, (0.65, 0.85, 1.0), (0.65, 0.85, 1.0))
        elif flora_kind == "world_tree" or flora_kind == "ghost_tree":
            # Alabaster Ghost Tree: bone white silver branches
            add_cylinder(builder, (tx, ty + 0.9, tz), 0.22, 0.40, 1.8, 6, (0.96, 0.97, 0.98), (0.96, 0.97, 0.98))
            add_cylinder(builder, (tx, ty + 2.0, tz), 0.7, 0.2, 0.8, 6, (0.92, 0.95, 0.98), (0.92, 0.95, 0.98))
        else:
            add_cylinder(builder, (tx, ty + 0.6, tz), 0.12, 0.18, 1.2, 5, (0.35, 0.22, 0.15), (0.35, 0.22, 0.15))
            add_cylinder(builder, (tx, ty + 1.4, tz), 0.7, 0.8, 0.6, 6, (0.45, 0.78, 0.55), (0.45, 0.78, 0.55))

    # 5. Distinctive Island Centerpiece
    if island_idx == 0:
        # Coffee Cup monument (Java Primer) + Steam
        add_cylinder(builder, (cx, cy + 0.7, cz), 0.5, 0.4, 0.8, 10, (0.95, 0.95, 0.95), (0.90, 0.90, 0.90))
        add_cylinder(builder, (cx, cy + 1.05, cz), 0.45, 0.45, 0.1, 8, (0.24, 0.14, 0.08), (0.24, 0.14, 0.08))
    elif island_idx == 1:
        # Glowing Variable Crystals
        add_cylinder(builder, (cx - 0.3, cy + 0.8, cz), 0.15, 0.25, 1.2, 5, (0.37, 0.92, 0.83), (0.08, 0.72, 0.65))
        add_cylinder(builder, (cx + 0.4, cy + 0.6, cz + 0.2), 0.12, 0.20, 0.9, 5, (0.37, 0.92, 0.83), (0.08, 0.72, 0.65))
    elif island_idx == 2:
        # Forking Stone Gate (If/Else)
        add_cylinder(builder, (cx - 0.6, cy + 0.9, cz), 0.12, 0.15, 1.6, 6, (0.02, 0.59, 0.41), (0.02, 0.59, 0.41))
        add_cylinder(builder, (cx + 0.6, cy + 0.9, cz), 0.12, 0.15, 1.6, 6, (0.02, 0.59, 0.41), (0.02, 0.59, 0.41))
        add_cylinder(builder, (cx, cy + 1.8, cz), 0.9, 0.9, 0.2, 4, (0.02, 0.59, 0.41), (0.02, 0.59, 0.41))
    elif island_idx == 3:
        # Stepped Matrix Blocks (Arrays)
        for dx in [-0.4, 0.4]:
            for dz in [-0.4, 0.4]:
                add_cylinder(builder, (cx + dx, cy + 0.5, cz + dz), 0.3, 0.3, 0.45, 4, (0.97, 0.45, 0.09), (0.97, 0.45, 0.09))
    elif island_idx == 4:
        # Clockwork Watchtower (Methods)
        add_cylinder(builder, (cx, cy + 1.1, cz), 0.35, 0.45, 2.0, 6, (0.49, 0.23, 0.93), (0.49, 0.23, 0.93))
        add_cylinder(builder, (cx, cy + 2.3, cz), 0.6, 0.1, 0.7, 6, (0.96, 0.62, 0.04), (0.96, 0.62, 0.04))
    elif island_idx == 5:
        # Open-air Stream Pavilion & Waterfall (Streams & IO)
        add_cylinder(builder, (cx, cy + 0.6, cz), 0.7, 0.8, 0.8, 6, (0.88, 0.95, 1.0), (0.88, 0.95, 1.0))
        add_cylinder(builder, (cx, cy - 1.0, cz + radius * 0.85), 0.6, 0.6, 2.2, 4, (0.40, 0.91, 0.98), (0.40, 0.91, 0.98))
    elif island_idx == 6:
        # Central Gathering Gazebo (OOP)
        add_cylinder(builder, (cx, cy + 0.6, cz), 0.85, 0.95, 0.7, 8, (0.97, 0.98, 0.99), (0.97, 0.98, 0.99))
        add_cylinder(builder, (cx, cy + 1.3, cz), 1.1, 0.2, 0.7, 8, (0.06, 0.73, 0.51), (0.06, 0.73, 0.51))
    elif island_idx == 7:
        # Multi-tiered Pagoda Tower (Inheritance)
        add_cylinder(builder, (cx, cy + 0.7, cz), 0.9, 0.9, 0.6, 4, (0.73, 0.11, 0.11), (0.73, 0.11, 0.11))
        add_cylinder(builder, (cx, cy + 1.2, cz), 1.2, 0.3, 0.4, 4, (0.85, 0.47, 0.02), (0.85, 0.47, 0.02))
        add_cylinder(builder, (cx, cy + 1.6, cz), 0.65, 0.65, 0.5, 4, (0.73, 0.11, 0.11), (0.73, 0.11, 0.11))
        add_cylinder(builder, (cx, cy + 2.0, cz), 0.9, 0.2, 0.4, 4, (0.85, 0.47, 0.02), (0.85, 0.47, 0.02))
    elif island_idx == 8:
        # Prismatic Quartz Crystals (Interfaces)
        add_cylinder(builder, (cx - 0.3, cy + 1.1, cz), 0.18, 0.28, 1.8, 5, (0.88, 0.91, 1.0), (0.65, 0.71, 0.99))
        add_cylinder(builder, (cx + 0.4, cy + 0.8, cz + 0.2), 0.15, 0.22, 1.3, 5, (0.88, 0.91, 1.0), (0.65, 0.71, 0.99))
    elif island_idx == 9:
        # Starlight Warning Beacon Citadel (Exceptions)
        add_cylinder(builder, (cx, cy + 1.1, cz), 0.65, 0.85, 2.0, 8, (0.19, 0.18, 0.51), (0.19, 0.18, 0.51))
        add_cylinder(builder, (cx, cy + 2.3, cz), 0.4, 0.4, 0.5, 6, (0.22, 0.74, 0.97), (0.22, 0.74, 0.97))

    # 6. Floating Satellite Mini-Rocks
    for r in range(2):
        s_angle = r * 3.14 + island_idx * 0.7
        rx = cx + (radius + 1.2) * math.cos(s_angle)
        rz = cz + (radius + 1.2) * math.sin(s_angle)
        ry = cy - 0.8 + (r % 2) * 0.5
        add_cylinder(builder, (rx, ry, rz), 0.3, 0.05, 0.6, 5, rock_mid, rock_dark)


def generate_archipelago():
    builder = GLBBuilder()

    # Coordinates for the 10 islands across a scenic sky archipelago
    # Inspired by Photo 1 ("Island Life") layout
    island_positions = [
        (-38.0, 1.0, -2.0, 3.6),   # Ch 0: Primer Isle
        (-29.0, -0.5, -14.0, 3.4), # Ch 1: Fundamentals
        (-20.0, 0.8, 10.0, 3.5),   # Ch 2: Selection
        (-10.0, -0.4, -9.0, 3.6),  # Ch 3: Repetition
        (0.0, 1.2, 14.0, 3.8),     # Ch 4: Arrays
        (10.0, -0.6, -11.0, 3.5),  # Ch 5: Strings & Streams
        (21.0, 0.7, 9.0, 3.7),     # Ch 6: OOP Citadel
        (31.0, 0.0, -10.0, 4.0),   # Ch 7: Inheritance Haven (Grand Gathering Isle)
        (40.0, 1.3, 11.0, 3.5),    # Ch 8: Interface Spire
        (49.0, 0.5, -1.0, 3.8)     # Ch 9: Exception Fortress
    ]

    for idx, (x, y, z, r) in enumerate(island_positions):
        add_floating_island(builder, (x, y, z), r, idx)

    # Connecting bridges between sequential islands
    for i in range(len(island_positions) - 1):
        x1, y1, z1, r1 = island_positions[i]
        x2, y2, z2, r2 = island_positions[i+1]
        
        # Add 5 arch stepping stones / bridge planks
        steps = 5
        for s in range(1, steps):
            t = s / steps
            bx = x1 + (x2 - x1) * t
            bz = z1 + (z2 - z1) * t
            # Gentle hanging arc
            arc_drop = math.sin(t * math.pi) * 0.6
            by = y1 + (y2 - y1) * t - arc_drop
            add_cylinder(builder, (bx, by, bz), 0.45, 0.35, 0.15, 6, (0.85, 0.78, 0.65), (0.55, 0.48, 0.38))

    output_dir = os.path.join(os.path.dirname(__file__), "..", "assets")
    os.makedirs(output_dir, exist_ok=True)
    out_path = os.path.join(output_dir, "islands.glb")
    builder.build_glb(out_path)


if __name__ == "__main__":
    generate_archipelago()
