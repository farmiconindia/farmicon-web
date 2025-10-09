from ultralytics import YOLO

def main():
    """
    Exports a YOLOv8 model to the ONNX format using the ultralytics library.
    """
    try:
        # Load the YOLOv8 model. This will download yolov8n.pt if it's not present.
        print("Loading YOLOv8 model...")
        model = YOLO('yolov8n.pt')
        
        # Export the model to ONNX format
        print("Exporting model to ONNX format...")
        model.export(format='onnx', imgsz=640, opset=12)
        
        print("\nModel successfully exported to 'yolov8n.onnx'")
        print("You can now use this file in the web application.")

    except Exception as e:
        print(f"An error occurred during model export: {e}")
        print("Please ensure you have a working internet connection and that 'ultralytics' is installed correctly.")

if __name__ == '__main__':
    main()
