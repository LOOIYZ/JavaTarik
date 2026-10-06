"""
JavaTarik 3D Asset Production - Blender Python Automation Script
================================================================
Stack Role: Python -> Blender -> GLB / glTF / WebP / PNG
Generates the 10 Chapter Floating Islands in Blender, sets up materials,
lighting, camera, renders preview artwork, and exports to assets/islands.glb.

To run inside Blender:
  blender --background --python scratch/blender_export_islands.py
Or open Blender Scripting Workspace, paste this script and click Run Script.
"""

try:
    import bpy
    import math
    import os
    IS_BLENDER = True
except ImportError:
    IS_BLENDER = False

def create_blender_island_scene():
    if not IS_BLENDER:
        print("Note: This script is designed to run within Blender's Python environment (bpy).")
        return

    # 1. Reset Scene
    bpy.ops.wm.read_factory_settings(use_empty=True)
    scene = bpy.context.scene

    # 2. World Lighting & Peach Twilight Background
    world = bpy.data.worlds.new("PeachTwilightWorld")
    scene.world = world
    world.use_nodes = True
    bg_node = world.node_tree.nodes.get("Background")
    if bg_node:
        bg_node.inputs[0].default_value = (0.95, 0.82, 0.78, 1.0) # Peach twilight sky tint
        bg_node.inputs[1].default_value = 1.2 # Strength

    # 3. Materials
    def get_or_create_mat(name, color, roughness=0.8, metallic=0.0):
        mat = bpy.data.materials.new(name=name)
        mat.use_nodes = True
        bsdf = mat.node_tree.nodes.get("Principled BSDF")
        if bsdf:
            bsdf.inputs['Base Color'].default_value = (*color, 1.0)
            bsdf.inputs['Roughness'].default_value = roughness
            bsdf.inputs['Metallic'].default_value = metallic
        return mat

    mat_grass = get_or_create_mat("IslandGrass", (0.45, 0.76, 0.42))
    mat_rock = get_or_create_mat("IslandRock", (0.35, 0.30, 0.28), roughness=0.9)
    mat_trunk = get_or_create_mat("TreeTrunk", (0.40, 0.28, 0.18), roughness=0.9)
    mat_sakura = get_or_create_mat("SakuraFoliage", (0.96, 0.62, 0.72))
    mat_peach = get_or_create_mat("PeachFoliage", (0.98, 0.72, 0.48))
    mat_bridge = get_or_create_mat("BridgePlank", (0.82, 0.74, 0.62))

    # 4. Islands Configuration
    island_configs = [
        {"name": "Ch0_JavaPrimer", "pos": (-38.0, -2.0, 1.0), "r": 3.6, "label": "Java Study Primer"},
        {"name": "Ch1_Fundamentals", "pos": (-29.0, -14.0, -0.5), "r": 3.4, "label": "Fundamentals"},
        {"name": "Ch2_Selection", "pos": (-20.0, 10.0, 0.8), "r": 3.5, "label": "Selection Controls"},
        {"name": "Ch3_Repetition", "pos": (-10.0, -9.0, -0.4), "r": 3.6, "label": "Repetition Control"},
        {"name": "Ch4_Arrays", "pos": (0.0, 14.0, 1.2), "r": 3.8, "label": "Array Sanctuary"},
        {"name": "Ch5_StringsIO", "pos": (10.0, -11.0, -0.6), "r": 3.5, "label": "String & File I/O"},
        {"name": "Ch6_MethodsOOP", "pos": (21.0, 9.0, 0.7), "r": 3.7, "label": "Methods & OOP"},
        {"name": "Ch7_Inheritance", "pos": (31.0, -10.0, 0.0), "r": 4.0, "label": "Inheritance Spire"},
        {"name": "Ch8_Interfaces", "pos": (40.0, 11.0, 1.3), "r": 3.5, "label": "Interfaces & Abstract"},
        {"name": "Ch9_Exceptions", "pos": (49.0, -1.0, 0.5), "r": 3.8, "label": "Exception Citadel"}
    ]

    for cfg in island_configs:
        x, y, z = cfg["pos"]
        r = cfg["r"]

        # Island Top Grass
        bpy.ops.mesh.primitive_cylinder_add(radius=r, depth=0.6, location=(x, y, z))
        top_mesh = bpy.context.active_object
        top_mesh.name = f"{cfg['name']}_Grass"
        top_mesh.data.materials.append(mat_grass)

        # Island Rocky Underside (Inverted Cone)
        bpy.ops.mesh.primitive_cone_add(radius1=r * 0.95, radius2=0.2, depth=3.5, location=(x, y, z - 2.0), rotation=(math.pi, 0, 0))
        cone_mesh = bpy.context.active_object
        cone_mesh.name = f"{cfg['name']}_RockBase"
        cone_mesh.data.materials.append(mat_rock)

        # Trees on Island
        for t in range(3):
            ang = t * (2 * math.pi / 3) + 0.5
            tx = x + (r * 0.5) * math.cos(ang)
            ty = y + (r * 0.5) * math.sin(ang)
            tz = z + 0.3

            # Trunk
            bpy.ops.mesh.primitive_cylinder_add(radius=0.15, depth=1.2, location=(tx, ty, tz + 0.6))
            trunk = bpy.context.active_object
            trunk.name = f"{cfg['name']}_Trunk_{t}"
            trunk.data.materials.append(mat_trunk)

            # Foliage Sphere
            bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=2, radius=0.8, location=(tx, ty, tz + 1.6))
            foliage = bpy.context.active_object
            foliage.name = f"{cfg['name']}_Foliage_{t}"
            foliage.data.materials.append(mat_sakura if t % 2 == 0 else mat_peach)

    # 5. Sun Light
    bpy.ops.object.light_add(type='SUN', location=(10, -20, 30))
    sun = bpy.context.active_object
    sun.data.energy = 3.5
    sun.data.color = (1.0, 0.92, 0.85)

    # 6. Camera
    bpy.ops.object.camera_add(location=(10, -55, 28), rotation=(math.radians(65), 0, math.radians(10)))
    cam = bpy.context.active_object
    scene.camera = cam

    # 7. GLB Export
    base_dir = os.path.dirname(os.path.abspath(__file__))
    assets_dir = os.path.join(base_dir, "..", "assets")
    os.makedirs(assets_dir, exist_ok=True)
    glb_out = os.path.join(assets_dir, "islands.glb")

    bpy.ops.export_scene.gltf(
        filepath=glb_out,
        export_format='GLB',
        export_apply=True,
        export_colors=True,
        export_materials='EXPORT'
    )
    print(f"Blender asset production completed: {glb_out}")

if __name__ == "__main__":
    if IS_BLENDER:
        create_blender_island_scene()
    else:
        print("Blender Python script ready. Run with Blender: blender -b -P scratch/blender_export_islands.py")
