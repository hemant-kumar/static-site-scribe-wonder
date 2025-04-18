
export const java_a123 = {
  id: 'java_a123',
  title: "Real-Time Camera Input for Image Recognition",
  author: "Hemant Kumar",
  date: "2025-04-13",
  category: "Java",
  readTime: "2 min read",
  content: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Real-Time Camera Input for Image Recognition</title>
  <meta name="description" content="Build an AI-powered image recognition system using real-time camera input via browser and Python-based deep learning." />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #2d3748;
    }
    h1, h2 {
      color: #1a202c;
    }
    pre {
      background: #2d2d2d;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #edf2f7;
      padding: 2px 5px;
      border-radius: 4px;
    }
    video, canvas {
      border: 2px solid #ccc;
      border-radius: 8px;
      margin-top: 1rem;
    }
    button {
      margin-top: 1rem;
      padding: 0.6rem 1.2rem;
      font-size: 1rem;
      background: #2b6cb0;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background: #2c5282;
    }
  </style>
</head>
<body>

  <p>Imagine pointing your webcam at an object and instantly getting a prediction of what it is—just like Google Lens! In this guide, we’ll connect your browser's camera to a backend AI model built using TensorFlow or PyTorch, all in real-time.</p>

  <h2>🔧 Tech Stack</h2>
  <ul>
    <li><strong>HTML5 + JavaScript</strong> – to access webcam and capture frames</li>
    <li><strong>Flask</strong> (Python) – to serve the model and process images</li>
    <li><strong>TensorFlow or PyTorch</strong> – for the image classification model</li>
  </ul>

  <h2>🎬 Step 1: HTML + JS for Webcam Input</h2>
  <p>Use the <code>getUserMedia()</code> API to stream webcam video, and capture frames as images.</p>

  <pre>&lt;video id="video" width="480" height="360" autoplay&gt;&lt;/video&gt;
&lt;canvas id="canvas" width="480" height="360" style="display:none;"&gt;&lt;/canvas&gt;
&lt;br&gt;
&lt;button onclick="captureImage()"&gt;📷 Capture & Analyze&lt;/button&gt;
&lt;p id="result"&gt;&lt;/p&gt;

&lt;script&gt;
  const video = document.getElementById('video');
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream =&gt; { video.srcObject = stream; });

  function captureImage() {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob(blob =&gt; {
      const formData = new FormData();
      formData.append('file', blob, 'frame.jpg');

      fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData
      })
      .then(response =&gt; response.json())
      .then(data =&gt; {
        document.getElementById('result').innerText = "🔍 Prediction: " + data[0][1];
      });
    }, 'image/jpeg');
  }
&lt;/script&gt;</pre>

  <h2>🧠 Step 2: Flask Backend with AI Model</h2>
  <p>This Python backend uses <code>ResNet50</code> to classify the uploaded frame.</p>

  <pre>from flask import Flask, request, jsonify
from tensorflow.keras.applications.resnet50 import ResNet50, preprocess_input, decode_predictions
from tensorflow.keras.preprocessing import image
import numpy as np
import os

app = Flask(__name__)
model = ResNet50(weights='imagenet')

@app.route('/predict', methods=['POST'])
def predict():
    file = request.files['file']
    file_path = 'temp.jpg'
    file.save(file_path)

    img = image.load_img(file_path, target_size=(224, 224))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x)
    preds = model.predict(x)

    os.remove(file_path)
    return jsonify(decode_predictions(preds, top=3)[0])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)</pre>

  <h2>🧪 Testing It Out</h2>
  <ol>
    <li>Start your Python server: <code>python app.py</code></li>
    <li>Open the HTML file in your browser (localhost or deploy)</li>
    <li>Allow camera access and click <strong>Capture & Analyze</strong></li>
    <li>See the object prediction result instantly!</li>
  </ol>

  <h2>🎯 Use Cases</h2>
  <ul>
    <li>Retail – Identify product SKUs visually</li>
    <li>Education – Real-time object identification</li>
    <li>Healthcare – Medical object detection</li>
    <li>Manufacturing – Real-time defect recognition</li>
  </ul>

  <h2>💡 Bonus Ideas</h2>
  <ul>
    <li>Use YOLO or MobileNet for object detection (not just classification)</li>
    <li>Stream predictions continuously while the video plays</li>
    <li>Build a full-stack app with Spring Boot as the orchestrator</li>
  </ul>

  <p>Now your browser is a real-time AI-powered lens! 📸</p>

</body>
</html>
  `
};
