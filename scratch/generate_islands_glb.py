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
    
    # Grass colors (warm green, pastel mint, lush emerald)
    grass_palettes = [
        (0.48, 0.78, 0.45), # Fresh Green
        (0.55, 0.82, 0.52), # Mint Lime
        (0.85, 0.65, 0.55), # Peach Twilight
        (0.42, 0.72, 0.58), # Soft Teal
        (0.60, 0.80, 0.40), # Golden Meadow
        (0.50, 0.75, 0.60), # Sage Garden
        (0.70, 0.60, 0.80), # Lavender Field
        (0.82, 0.55, 0.45), # Autumn Terraces
        (0.45, 0.65, 0.82), # Celestial Blue
        (0.68, 0.58, 0.75)  # Amethyst Plateau
    ]
    grass_col = grass_palettes[island_idx % len(grass_palettes)]
    rock_dark = (0.28, 0.24, 0.22)
    rock_mid = (0.42, 0.38, 0.35)

    segments = 14
    
    # 1. Top Grass Plateau (slight bevel cylinder)
    add_cylinder(builder, (cx, cy, cz), radius, radius * 0.95, 0.6, segments, grass_col, grass_col, grass_col)
    
    # 2. Dirt Layer directly beneath grass
    add_cylinder(builder, (cx, cy - 0.5, cz), radius * 0.95, radius * 0.85, 0.7, segments, (0.50, 0.38, 0.28), rock_mid)

    # 3. Craggy Inverted Rocky Underside (cones down to a tip)
    add_cylinder(builder, (cx, cy - 2.0, cz), radius * 0.85, radius * 0.4, 2.3, segments, rock_mid, rock_dark)
    add_cylinder(builder, (cx, cy - 3.8, cz), radius * 0.4, 0.1, 1.6, 7, rock_dark, (0.18, 0.15, 0.14))

    # 4. Stylized Trees
    num_trees = 3 + (island_idx % 3)
    tree_colors = [
        (0.95, 0.60, 0.68), # Sakura pink
        (0.98, 0.72, 0.48), # Peach
        (0.40, 0.78, 0.55), # Emerald
        (0.95, 0.82, 0.45), # Gold
        (0.65, 0.55, 0.85)  # Purple
    ]

    for t in range(num_trees):
        angle = t * (2 * math.pi / num_trees) + 0.3
        dist = radius * 0.45 + (t % 2) * (radius * 0.2)
        tx = cx + dist * math.cos(angle)
        tz = cz + dist * math.sin(angle)
        ty = cy + 0.3

        trunk_h = 1.0 + (t % 2) * 0.4
        # Tree trunk
        add_cylinder(builder, (tx, ty + trunk_h/2, tz), 0.12, 0.18, trunk_h, 6, (0.45, 0.30, 0.20), (0.35, 0.22, 0.15))
        # Tree foliage tiers
        f_col = tree_colors[(island_idx + t) % len(tree_colors)]
        f_base = ty + trunk_h
        add_cylinder(builder, (tx, f_base + 0.4, tz), 0.8, 0.9, 0.7, 7, f_col, f_col)
        add_cylinder(builder, (tx, f_base + 0.9, tz), 0.5, 0.7, 0.6, 6, f_col, f_col)
        add_cylinder(builder, (tx, f_base + 1.3, tz), 0.1, 0.4, 0.5, 5, f_col, f_col)

    # 5. Distinctive Island Centerpiece
    if island_idx == 0:
        # Coffee Cup monument (Java Primer)
        add_cylinder(builder, (cx, cy + 0.7, cz), 0.5, 0.4, 0.8, 10, (0.92, 0.88, 0.82), (0.85, 0.80, 0.75))
        add_cylinder(builder, (cx, cy + 1.05, cz), 0.45, 0.45, 0.1, 8, (0.32, 0.18, 0.10), (0.32, 0.18, 0.10)) # Coffee liquid
    elif island_idx == 1:
        # Glowing Variable Crystals
        add_cylinder(builder, (cx - 0.3, cy + 0.8, cz), 0.15, 0.25, 1.2, 5, (0.4, 0.9, 0.7), (0.2, 0.7, 0.5))
        add_cylinder(builder, (cx + 0.4, cy + 0.6, cz + 0.2), 0.12, 0.20, 0.9, 5, (0.4, 0.9, 0.7), (0.2, 0.7, 0.5))
    elif island_idx == 2:
        # Forking Stone Gate (If/Else)
        add_cylinder(builder, (cx - 0.6, cy + 0.9, cz), 0.15, 0.18, 1.5, 6, (0.7, 0.7, 0.7), (0.6, 0.6, 0.6))
        add_cylinder(builder, (cx + 0.6, cy + 0.9, cz), 0.15, 0.18, 1.5, 6, (0.7, 0.7, 0.7), (0.6, 0.6, 0.6))
        add_cylinder(builder, (cx, cy + 1.7, cz), 0.8, 0.8, 0.2, 4, (0.8, 0.4, 0.3), (0.8, 0.4, 0.3))
    elif island_idx == 3:
        # Stone Circle Shrine (Loops)
        for s in range(5):
            th = s * 2 * math.pi / 5
            add_cylinder(builder, (cx + 0.8*math.cos(th), cy + 0.6, cz + 0.8*math.sin(th)), 0.15, 0.18, 0.8, 5, (0.65, 0.65, 0.7), (0.5, 0.5, 0.55))
    elif island_idx == 4:
        # Matrix Blocks (Arrays)
        for dx in [-0.5, 0.5]:
            for dz in [-0.5, 0.5]:
                add_cylinder(builder, (cx + dx, cy + 0.5, cz + dz), 0.3, 0.3, 0.5, 4, (0.3, 0.6, 0.85), (0.2, 0.5, 0.75))
    elif island_idx == 5:
        # Library Pagoda (Strings & IO)
        add_cylinder(builder, (cx, cy + 0.6, cz), 0.7, 0.8, 0.8, 6, (0.85, 0.75, 0.65), (0.7, 0.6, 0.5))
        add_cylinder(builder, (cx, cy + 1.2, cz), 1.0, 0.7, 0.4, 6, (0.75, 0.3, 0.25), (0.75, 0.3, 0.25))
    elif island_idx == 6:
        # Blueprint Gazebo (OOP)
        add_cylinder(builder, (cx, cy + 0.5, cz), 0.8, 0.85, 0.4, 8, (0.9, 0.9, 0.92), (0.8, 0.8, 0.85))
        add_cylinder(builder, (cx, cy + 1.3, cz), 0.9, 0.1, 0.7, 6, (0.25, 0.6, 0.75), (0.25, 0.6, 0.75))
    elif island_idx == 7:
        # Ancient Ancestral Tree (Inheritance)
        add_cylinder(builder, (cx, cy + 1.2, cz), 0.35, 0.5, 2.0, 7, (0.4, 0.28, 0.18), (0.3, 0.2, 0.12))
        add_cylinder(builder, (cx, cy + 2.5, cz), 1.5, 1.8, 1.2, 8, (0.95, 0.70, 0.85), (0.95, 0.70, 0.85))
    elif island_idx == 8:
        # Abstract Portal Spire (Interfaces)
        add_cylinder(builder, (cx, cy + 1.5, cz), 0.2, 0.3, 2.4, 4, (0.75, 0.85, 0.98), (0.5, 0.65, 0.9))
        add_cylinder(builder, (cx, cy + 2.8, cz), 0.4, 0.05, 0.6, 4, (1.0, 0.85, 0.4), (1.0, 0.85, 0.4))
    elif island_idx == 9:
        # Citadel Shield Tower (Exceptions)
        add_cylinder(builder, (cx, cy + 0.9, cz), 0.7, 0.8, 1.4, 8, (0.6, 0.65, 0.7), (0.45, 0.5, 0.55))
        add_cylinder(builder, (cx, cy + 1.8, cz), 0.4, 0.7, 0.7, 8, (0.9, 0.45, 0.35), (0.9, 0.45, 0.35))

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
