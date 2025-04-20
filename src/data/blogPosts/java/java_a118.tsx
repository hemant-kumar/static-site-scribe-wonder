
export const java_a118 = {
  id: 'java_a118',
  title: "Spring Boot with AI",
  author: "Hemant Kumar",
  date: "2025-04-13",
  category: "Java",
  readTime: "2 min read",
  keywords: [
    "AI with Spring Boot",
    "Java ML",
    "Spring Boot AI",
    "Spring Boot Machine Learning",
    "Java AI",
    "ML with Spring Boot",
    "AI Integration Java",
    "REST API for AI"
  ],
  content: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Spring Boot with AI – Bringing Intelligence to Your Backend</title>
  <meta name="description" content="Learn how to integrate AI with Spring Boot using APIs like OpenAI and libraries like DL4J for intelligent applications." />
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #333;
      line-height: 1.6;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    pre {
      background: #1e1e1e;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #eee;
      padding: 3px 6px;
      border-radius: 4px;
      font-family: Consolas, monospace;
    }
    ul {
      margin-left: 1.5rem;
    }
    a {
      color: #2980b9;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <p>Spring Boot is a popular framework for building robust Java applications. What if we could add intelligence to those apps? With the rise of AI APIs and Java ML libraries, integrating AI into your backend is easier than ever.</p>

  <section>
    <h2>🤖 What Kind of AI Can You Add to Spring Boot?</h2>
    <ul>
      <li><a href="https://codejava4u.blogspot.com/2025/04/using-openai-api-in-spring-boot.html" target="_blank"><strong>Text Generation</strong> – ChatGPT-style prompts via OpenAI</a></li>
      <li><a href="https://codejava4u.blogspot.com/2025/04/sentiment-analysis-using-hugging-face.html" target="_blank"><strong>Sentiment Analysis</strong> – Using Hugging Face APIs</a></li>
      <li><a href="https://codejava4u.blogspot.com/2025/04/building-recommendation-system-in.html" target="_blank"><strong>Recommendation Systems</strong></a></li>
      <li><a href="https://codejava4u.blogspot.com/2025/04/image-recognition-with-deep-learning.html" target="_blank"><strong>Image Recognition</strong> – With deep learning frameworks</a></li>
      <li><a href="https://codejava4u.blogspot.com/2025/04/voice-chatbots-ai-assisted.html" target="_blank"><strong>Voice & Chatbots</strong> – AI-assisted conversational apps</a></li>
    </ul>
  </section>

  <section>
    <h2>🔌 Example 1: Using OpenAI API in Spring Boot</h2>
    <h3>1. Add dependencies (Maven)</h3>
    <pre>&lt;dependency&gt;
  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
&lt;/dependency&gt;</pre>

    <h3>2. Create a REST controller to call the AI API</h3>
    <pre>import org.springframework.web.bind.annotation.*;
import java.net.http.*;
import java.net.URI;
import java.net.http.HttpRequest.*;
import java.util.Map;

@RestController
@RequestMapping("/ai")
public class AiController {

    private static final String API_KEY = "your-openai-api-key";

    @PostMapping("/generate")
    public String generateText(@RequestBody Map&lt;String, String&gt; payload) throws Exception {
        String prompt = payload.get("prompt");

        String requestBody = """
            {
              "model": "gpt-3.5-turbo",
              "messages": [{"role": "user", "content": "%s"}]
            }
        """.formatted(prompt);

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.openai.com/v1/chat/completions"))
            .header("Authorization", "Bearer " + API_KEY)
            .header("Content-Type", "application/json")
            .POST(BodyPublishers.ofString(requestBody))
            .build();

        HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
        return response.body();
    }
}
</pre>

    <h3>3. Test with cURL or Postman</h3>
    <pre>curl -X POST http://localhost:8080/ai/generate \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Write a Java joke."}'</pre>
  </section>

  <section>
    <h2>🧠 Example 2: Sentiment Analysis Using Hugging Face API</h2>
    <p>You can use the Hugging Face Inference API similarly to analyze sentiment.</p>
    <pre>HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english"))
    .header("Authorization", "Bearer YOUR_HF_API_KEY")
    .POST(HttpRequest.BodyPublishers.ofString("{\"inputs\": \"This product is amazing!\"}"))
    .build();</pre>
  </section>

  <section>
    <h2>🧮 Example 3: Train Your Own ML Model (Deeplearning4j)</h2>
    <p>Want to train a model right inside your Java app? Use DL4J (Deeplearning4j):</p>
    <pre>// Configure a neural network
MultiLayerConfiguration conf = new NeuralNetConfiguration.Builder()
  .list()
  .layer(new DenseLayer.Builder().nIn(10).nOut(5).build())
  .layer(new OutputLayer.Builder().nIn(5).nOut(2).build())
  .build();
</pre>
    <p>Train the model and expose it via a Spring Boot REST endpoint.</p>
  </section>

  <section>
    <h2>💡 Real-World Use Cases for Spring + AI</h2>
    <ul>
      <li>🛍 E-commerce: Product recommendations, smart search</li>
      <li>🏦 FinTech: Fraud detection, predictive analysis</li>
      <li>📞 Customer Support: Chatbots and voice assistants</li>
      <li>📃 Docs & Content: Summarization, translation, classification</li>
    </ul>
  </section>

  <section>
    <h2>📦 Bonus: Spring AI Project (Preview)</h2>
    <p><strong>Spring AI</strong> is an experimental project from the Spring team that makes it easier to integrate LLMs into Spring Boot apps. Stay tuned!</p>
    <p>GitHub: <a href="https://github.com/spring-projects/spring-ai" target="_blank">spring-projects/spring-ai</a></p>
  </section>

  <section>
    <h2>🧭 Conclusion</h2>
    <p>Spring Boot is a rock-solid platform for building backends, and now with AI integrations, it’s also smart. Whether you’re consuming APIs like OpenAI or training models yourself with DL4J, Java devs have powerful tools to build intelligent apps at scale.</p>
    <p>🔥 Want to see a chatbot with Spring Boot and WebSocket? Or a LangChain-style app in Java? Let me know!</p>
  </section>

</body>
</html>
  `
};
