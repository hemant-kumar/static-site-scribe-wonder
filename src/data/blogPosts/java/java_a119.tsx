
export const java_a119 = {
  id: 'java_a119',
  title: "Sentiment Analysis Using Hugging Face API in Spring Boot",
  author: "Hemant Kumar",
  date: "2025-04-13",
  category: "Java",
  readTime: "2 min read",
  content: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Sentiment Analysis Using Hugging Face API in Spring Boot</title>
  <meta name="description" content="Learn how to use Hugging Face’s Sentiment Analysis models in your Spring Boot app and expose a simple REST API for sentiment analysis." />
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
  <p>In this post, we'll demonstrate how to perform sentiment analysis using Hugging Face's pre-trained models in a Spring Boot application. The app will expose a simple REST API endpoint where users can submit text, and the API will return whether the sentiment of the text is positive or negative.</p>

  <h2>📦 Step 1: Maven Dependencies</h2>
  <p>To get started, we'll add the necessary dependencies to our <code>pom.xml</code> file for Spring Boot and HTTP client support:</p>
  <pre>&lt;dependencies&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
  &lt;/dependency&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
    &lt;scope&gt;test&lt;/scope&gt;
  &lt;/dependency&gt;
&lt;/dependencies&gt;</pre>

  <h2>⚡ Step 2: Controller for Sentiment Analysis</h2>
  <p>In this step, we will create a Spring Boot <code>RestController</code> that will handle the sentiment analysis requests. It will communicate with the Hugging Face API to analyze the text.</p>
  <pre>package com.example.huggingface;

import org.springframework.web.bind.annotation.*;
import java.net.http.*;
import java.net.URI;

@RestController
@RequestMapping("/api/sentiment")
public class SentimentController {

    private static final String HF_TOKEN = "your-huggingface-api-token";
    private static final String MODEL_ID = "distilbert-base-uncased-finetuned-sst-2-english"; // Hugging Face model for sentiment analysis

    @PostMapping
    public String analyzeSentiment(@RequestBody String text) throws Exception {
        String requestBody = "{ \"inputs\": \"" + text.replace("\"", "\\\"") + "\" }";

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api-inference.huggingface.co/models/" + MODEL_ID))
            .header("Authorization", "Bearer " + HF_TOKEN)
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(requestBody))
            .build();

        HttpClient client = HttpClient.newHttpClient();
        HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());

        return response.body();
    }
}</pre>

  <h2>🔑 Hugging Face Model Selection</h2>
  <p>For sentiment analysis, we’re using the <code>distilbert-base-uncased-finetuned-sst-2-english</code> model from Hugging Face. This model is fine-tuned specifically for sentiment analysis (positive or negative) on the SST-2 dataset, but you can choose other models if needed.</p>
  <ul>
    <li><a href="https://huggingface.co/distilbert-base-uncased-finetuned-sst-2-english">distilbert-base-uncased-finetuned-sst-2-english</a></li>
    <li><a href="https://huggingface.co/bert-base-uncased">bert-base-uncased</a></li>
  </ul>

  <h2>🧪 Step 3: Writing the Test Case</h2>
  <p>Let's write a simple JUnit test to ensure our sentiment analysis API works correctly.</p>
  <pre>package com.example.huggingface;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class SentimentControllerTest {

    @Test
    void testSentimentAnalysis() {
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8080/api/sentiment";

        String text = "I love using Hugging Face models! They are amazing!";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity&lt;String&gt; request = new HttpEntity&lt;&gt;(text, headers);
        ResponseEntity&lt;String&gt; response = restTemplate.postForEntity(url, request, String.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(response.getBody().toLowerCase().contains("positive"));
    }
}</pre>

  <h2>📌 Sample Response</h2>
  <p>When you send a request with the text "I love using Hugging Face models! They are amazing!", you should get a response indicating that the sentiment is positive:</p>
  <pre>[
  {
    "label": "POSITIVE",
    "score": 0.9998547439575195
  }
]</pre>

  <h2>💡 Tips for Improvement</h2>
  <ul>
    <li>Use the Hugging Face API’s <code>multi-class</code> classification for more nuanced sentiment analysis (e.g., Happy, Sad, Angry, etc.)</li>
    <li>Store your API token in a secure location (like environment variables or Spring's <code>application.yml</code>)</li>
    <li>Use <code>WebClient</code> in Spring for asynchronous requests if the model takes longer than usual to respond</li>
  </ul>

  <h2>🎉 Conclusion</h2>
  <p>By following this tutorial, you've successfully built a Spring Boot API that integrates with Hugging Face's powerful NLP models for sentiment analysis. This could easily be expanded to classify text sentiment in real-world applications like reviews, social media, or customer feedback.</p>

  <p>Feel free to explore Hugging Face's library for other models suited to your needs!</p>

</body>
</html>
  `
};
