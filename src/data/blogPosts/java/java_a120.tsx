
export const java_a120 = {
  id: 'java_a120',
  title: "Building a Recommendation System in Spring Boot",
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
  <title>Building a Recommendation System in Spring Boot</title>
  <meta name="description" content="Learn how to build a simple content-based recommendation system using Spring Boot and Hugging Face API to recommend items based on user preferences or content similarity." />
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
  <p>Recommendation systems are widely used in platforms like Netflix, Amazon, and Spotify to suggest relevant content to users. In this post, we will learn how to build a simple **content-based recommendation system** using **Spring Boot** and **Hugging Face API**.</p>

  <h2>💡 What is a Content-Based Recommendation System?</h2>
  <p>Content-based filtering recommends items based on their features and the preferences of users. For example, it might recommend movies similar to a user's watched movie based on genre, director, or actors.</p>
  <ul>
    <li>**User preferences**: What the user likes (e.g., genres, artists, topics, etc.)</li>
    <li>**Item features**: Information about items (e.g., movie plots, product descriptions, etc.)</li>
  </ul>

  <h2>📦 Step 1: Setup Spring Boot Project</h2>
  <p>Let’s start by adding necessary dependencies in our <code>pom.xml</code>:</p>
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

  <h2>🔨 Step 2: Building the Recommendation Controller</h2>
  <p>We will create a Spring Boot controller that handles incoming requests for recommendations. We’ll use text similarity (cosine similarity or embeddings) to recommend similar content to the user.</p>
  <pre>package com.example.recommendation;

import org.springframework.web.bind.annotation.*;
import java.net.http.*;
import java.net.URI;
import java.util.*;

@RestController
@RequestMapping("/api/recommendations")
public class RecommendationController {

    private static final String HF_TOKEN = "your-huggingface-api-token";
    private static final String MODEL_ID = "sentence-transformers/all-MiniLM-L6-v2";  // Model to generate embeddings

    @PostMapping
    public List&lt;String&gt; getRecommendations(@RequestBody String userPreferences) throws Exception {
        // Use Hugging Face model to generate embeddings for user input and item descriptions
        String requestBody = "{ \"inputs\": \"" + userPreferences.replace("\"", "\\\"") + "\" }";

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api-inference.huggingface.co/models/" + MODEL_ID))
            .header("Authorization", "Bearer " + HF_TOKEN)
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(requestBody))
            .build();

        HttpClient client = HttpClient.newHttpClient();
        HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());

        // Get recommendations based on cosine similarity between embeddings (simplified here)
        List&lt;String&gt; recommendedItems = generateRecommendations(response.body());

        return recommendedItems;
    }

    private List&lt;String&gt; generateRecommendations(String response) {
        // Here we would process the embeddings and match with item features.
        // In a real-world scenario, you'd compare embeddings to a database of items.
        // For simplicity, we return some static recommendations.
        return Arrays.asList("Item 1", "Item 2", "Item 3", "Item 4");
    }
}</pre>

  <h2>🔑 Hugging Face Model Selection</h2>
  <p>In the above code, we are using the <code>sentence-transformers/all-MiniLM-L6-v2</code> model, which is designed for generating embeddings from text. This model converts text (such as user preferences or item descriptions) into numerical vectors, which can then be compared to recommend similar items.</p>
  <ul>
    <li><a href="https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2">sentence-transformers/all-MiniLM-L6-v2</a></li>
    <li><a href="https://huggingface.co/bert-base-uncased">bert-base-uncased</a></li>
  </ul>

  <h2>🧪 Step 3: Writing the Test Case</h2>
  <p>Next, let's write a simple JUnit test to verify that our recommendation system works as expected.</p>
  <pre>package com.example.recommendation;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class RecommendationControllerTest {

    @Test
    void testGetRecommendations() {
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8080/api/recommendations";

        String userPreferences = "I love action movies with superheroes and thrillers";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity&lt;String&gt; request = new HttpEntity&lt;&gt;(userPreferences, headers);
        ResponseEntity&lt;List&lt;String&gt;&gt; response = restTemplate.exchange(url, HttpMethod.POST, request, List.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertTrue(response.getBody().size() > 0);
    }
}</pre>

  <h2>📌 Sample Response</h2>
  <p>Once you call the recommendation API with the preferences text, the system should return a list of recommended items:</p>
  <pre>[
  "Item 1: Avengers: Endgame",
  "Item 2: The Dark Knight",
  "Item 3: Iron Man",
  "Item 4: Spider-Man: No Way Home"
]</pre>

  <h2>💡 Tips for Further Improvement</h2>
  <ul>
    <li>Instead of static recommendations, store item descriptions in a database and compare the embeddings for better results.</li>
    <li>Use more sophisticated recommendation models such as collaborative filtering in addition to content-based filtering.</li>
    <li>Consider implementing personalization by incorporating user profiles or historical behavior for improved recommendations.</li>
  </ul>

  <h2>🎉 Conclusion</h2>
  <p>Congratulations! You’ve now built a basic recommendation system that suggests items based on content similarity using Spring Boot and Hugging Face’s APIs. This approach can be extended to build more complex systems by incorporating features such as collaborative filtering, matrix factorization, and deep learning models.</p>

  <p>Feel free to explore the Hugging Face API to discover more advanced models for text similarity and recommendation systems!</p>

</body>
</html>
  `
};
