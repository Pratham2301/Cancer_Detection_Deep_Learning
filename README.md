# SkinGenics - An application to classify your cancerious lesions into benign or malignant

## <a href="https://skingenics.netlify.app/" >View Deployment</a>

## SkinGenics helps you to predict your skin cancer between Benign and Malignant. It integrates Deep Learning technology with your device’s camera to help you capture and analyse skin lesions with more than 96% accuracy

`Please Note: This application is built for learning purpose `

# How it Works
SkinGenics is a Skin-Cancer prediction application that uses CNN and Deep learning technology to calculate the probability that a skin lesions is Benign or Malignant, by comparing its appearance to thousands of other lesion images. SkinGenics has more than 96% accuracy

1. Upload Picture of Your Skin Lesion

2. SkinGenics will compare it with thousands of similar lesion images

3. SkinGenics will predict the class of cancer


# Google Cloud 

  <ol type="I">
  
  <li> 'Google-Cloud-Functions' is used to serve backend (GCP Service) <br>
        Backend URL - https://us-central1-cancer-detection-deep-learning.cloudfunctions.net/predict </li> <br>
      
  <li> Model is built using Jupyter Notebook on 'GCP VM Instance - AMD Machine' <br>
        Instance IP - http://34.168.91.133:5000 (SSH Commands) </li> <br>
  
  <li> GCP Buckets are used to store dataset and save models (.h5) </li>
  
  </ol>
  
  

# Folder Structure

1. Dataset : Contains `ISIC 2018-HAM10000 Kaggle Dataset` (nearly 33%)

2. Backend : Contains `Fast-Api` configuration to serve model

3. Frontend : Contains `React.js` codebase to serve UI

4. Google-Cloud : Contains GCP Configuration to serve backend
  
5. SavedModels : Stores model versions with various epochs and model architecture

6. Training : Stores notebook for current `Convolutional Neural Network (CNN)` Model
