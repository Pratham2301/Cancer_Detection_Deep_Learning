from google.cloud import storage
import tensorflow as tf
from tensorflow import keras
from keras.models import load_model
from PIL import Image
import numpy as np
import functions_framework


model = None
interpreter = None
input_index = None
output_index = None

CLASS_NAMES = ["Benign", "Malignant"]

BUCKET_NAME = "fastapi-cancer-detection-backend" # Here you need to put the name of your GCP bucket


def download_blob(bucket_name="", source_blob_name="", destination_file_name=""):
    """Downloads a blob from the bucket."""
    storage_client = storage.Client()
    bucket = storage_client.get_bucket(bucket_name)
    blob = bucket.blob(source_blob_name)

    blob.download_to_filename(destination_file_name)

    print(f"Blob {source_blob_name} downloaded to {destination_file_name}.")



@functions_framework.http
def predict(request):
    
    print("before setup")
    
    # if request.method == 'OPTIONS':
    #     headers = {
    #         'Access-Control-Allow-Origin': '*',
    #         'Access-Control-Allow-Methods': 'GET',
    #         'Access-Control-Allow-Headers': 'Content-Type',
    #         'Access-Control-Max-Age': '3600'
    #     }

    #     return ('', 204, headers)

    # headers = {
    #     'Access-Control-Allow-Origin': '*'
    # }
    # return ('Hello World!', 200, headers)
    
    
    
    
    
    origins = [
        "http://localhost",
        "http://localhost:3000",
        "http://localhost:8000",
        "http://127.0.0.1",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:3001",
        "http://127.0.0.1:8000",
    ]
    
    if request.method == 'OPTIONS':
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '36000'
        }
        return ('', 204, headers)

    # Set CORS headers for the main request
    headers = {
        'Access-Control-Allow-Origin': '*',
    }
    
    print("after setup - called successfully")
    
    global model
    if model is None:
        download_blob(
            BUCKET_NAME,
            "models/final.h5",
            "/tmp/final.h5",
        )
        model = load_model("/tmp/final.h5")

    image = request.files["file"]

    print(image)

    image = np.array(
        Image.open(image).convert("RGB").resize((224, 224)) # image resizing
    )

    image = image/224 # normalize the image in 0 to 1 range

    img_array = tf.expand_dims(image, 0)
    predictions = model.predict(img_array)
    
    print(predictions)

    print("Predictions:",predictions)

    predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
    confidence = round(100 * (np.max(predictions[0])), 2)
    
    return (
        {
            "class": predicted_class, 
            "confidence": confidence,
            "headers": headers,
        },
        200, headers)
