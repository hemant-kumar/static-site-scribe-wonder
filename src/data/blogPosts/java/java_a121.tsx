
export const java_a121 = {
  id: 'java_a121',
  title: "Image Recognition with Deep Learning Frameworks",
  author: "Hemant Kumar",
  date: "2025-04-13",
  category: "Java",
  keywords: [
    "Image Classification",
    "TensorFlow Image Recognition",
    "CNN Models",
    "Deep Learning Frameworks",
    "AI Image Processing",
    "Image Recognition",
    "Computer Vision",
    "PyTorch Image Recognition",
    "Deep Learning"
  ],
  content: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Image Recognition with Deep Learning Frameworks</title>
  <meta name="description" content="Learn how to build an image recognition system using deep learning frameworks like TensorFlow and PyTorch, with Java and Python integration." />
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
    ul {
      margin-left: 1.5rem;
    }
  </style>
</head>
<body>
  <p>Image recognition is at the heart of many real-world AI applications—from facial recognition to autonomous vehicles. In this post, we'll walk through building an image recognition system using Python-based deep learning frameworks like TensorFlow and PyTorch. We'll also touch on integrating it with a Java backend using REST APIs.</p>

  <h2>🚀 Tools & Frameworks</h2>
  <ul>
    <li><strong>TensorFlow / PyTorch</strong> – for deep learning model development</li>
    <li><strong>Flask</strong> – for serving the model as an API</li>
    <li><strong>Java (Spring Boot)</strong> – to consume the image recognition service</li>
  </ul>

  <h2>🧰 Step 1: Training or Using a Pretrained Model</h2>
  <p>We'll use a pretrained model like <code>ResNet50</code> from TensorFlow or PyTorch's torchvision.</p>

  <h3>🧠 Using ResNet50 with TensorFlow</h3>
  <pre>import tensorflow as tf
from tensorflow.keras.applications import resnet50
from tensorflow.keras.preprocessing import image
import numpy as np

model = resnet50.ResNet50(weights='imagenet')

def predict_image(img_path):
    img = image.load_img(img_path, target_size=(224, 224))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = resnet50.preprocess_input(x)
    preds = model.predict(x)
    return resnet50.decode_predictions(preds, top=3)[0]</pre>

  <h2>🌐 Step 2: Serving the Model via Flask</h2>
  <p>Wrap the model into a REST API using Flask:</p>

  <pre>from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    file = request.files['file']
    file.save("input.jpg")
    preds = predict_image("input.jpg")
    return jsonify(preds)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)</pre>

  <h2>☕ Step 3: Consuming API from Java (Spring Boot)</h2>
  <p>Send an image file to the Flask service from your Spring Boot app:</p>

  <pre>@RestController
public class ImageController {

    @PostMapping("/analyze")
    public String analyzeImage() throws IOException {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        MultiValueMap&lt;String, Object&gt; body = new LinkedMultiValueMap&lt;&gt;();
        body.add("file", new FileSystemResource("src/main/resources/image.jpg"));

        HttpEntity&lt;MultiValueMap&lt;String, Object&gt;&gt; requestEntity = new HttpEntity&lt;&gt;(body, headers);
        ResponseEntity&lt;String&gt; response = restTemplate.postForEntity("http://localhost:5000/predict", requestEntity, String.class);

        return response.getBody();
    }
}</pre>

  <h2>📷 Try It Out</h2>
  <ul>
    <li>Download any sample image (e.g., cat, car, etc.)</li>
    <li>Start the Flask server: <code>python app.py</code></li>
    <li>Run your Spring Boot app</li>
    <li>Call the endpoint: <code>POST /analyze</code></li>
  </ul>

  <h2>💡 Optional: PyTorch Alternative</h2>
  <p>Here's how you can use PyTorch for the same task:</p>
  <pre>from torchvision import models, transforms
from PIL import Image
import torch

model = models.resnet50(pretrained=True)
model.eval()

def predict(img_path):
    img = Image.open(img_path)
    transform = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
    ])
    img_tensor = transform(img).unsqueeze(0)
    output = model(img_tensor)
    probs = torch.nn.functional.softmax(output[0], dim=0)
    return probs.topk(3)</pre>

  <h2>📌 Use Cases</h2>
  <ul>
    <li>Retail: Product image recognition</li>
    <li>Security: Surveillance & facial recognition</li>
    <li>Healthcare: Medical image diagnosis</li>
    <li>Automotive: Road sign & obstacle detection</li>
  </ul>

  <h2>🎯 Conclusion</h2>
  <p>We’ve successfully built an image recognition pipeline using deep learning frameworks and integrated it into a Java-based system via REST APIs. This hybrid approach lets you use Python’s ML ecosystem and Java’s backend power together.</p>

  <p>Next steps? Try adding custom models or real-time streaming input!</p>

</body>
</html>
  `
};
