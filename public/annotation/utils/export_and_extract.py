import json
from pathlib import Path
from ultralytics import YOLO

def export_model_and_names(model_path_str):
    """
    Exports a YOLOv8 model to ONNX and saves its class names to a JSON file.

    Args:
        model_path_str (str): The path to the .pt model file.
    """
    model_path = Path(model_path_str)
    if not model_path.exists():
        print(f"Error: Model file not found at '{model_path_str}'")
        # Attempt to download if it's a standard name
        if model_path.name in ['yolov8n.pt', 'yolov5s.pt']:
             print(f"Attempting to download '{model_path.name}'...")
             YOLO(model_path.name) # This will trigger a download
             if not model_path.exists():
                 print("Download failed. Please place the model file manually.")
                 return
        else:
            return

    try:
        # Load the model
        print(f"\n--- Processing model: {model_path.name} ---")
        model = YOLO(model_path)

        # --- 1. Export the model to ONNX ---
        onnx_path = model_path.with_suffix('.onnx')
        print(f"Exporting to ONNX format at '{onnx_path}'...")
        model.export(format='onnx', imgsz=640, opset=12)
        print("ONNX export successful.")

        # --- 2. Extract and save class names ---
        class_names = model.names
        json_path = model_path.with_suffix('.json')
        print(f"Extracting {len(class_names)} class names to '{json_path}'...")
        with open(json_path, 'w') as f:
            json.dump(class_names, f, indent=4)
        print("Class names saved successfully.")

    except Exception as e:
        print(f"An error occurred while processing {model_path.name}: {e}")

if __name__ == '__main__':
    # List of models to process
    models_to_process = [
        'yolov8n.pt',          # Standard model
        'model/yolo11s.pt'     # Your custom model
    ]

    for model_file in models_to_process:
        export_model_and_names(model_file)
    
    print("\n--- All models processed. ---")
