
export const java_a117 = {
  id: 'java_a117',
  title: "Using OpenAI API in Spring Boot",
  author: "Hemant Kumar",
  date: "2025-04-13",
  category: "Java",
  keywords: [
    "OpenAI API",
    "Spring Boot OpenAI",
    "Spring Boot AI",
    "ChatGPT API Java",
    "Java OpenAI Integration",
    "OpenAI Java Client",
    "OpenAI with Spring Boot"
  ],
  content: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Using OpenAI API in Spring Boot – Multi-Step Conversation</title>
  <meta name="description" content="Build a multi-turn chat endpoint in Spring Boot using OpenAI's API and test it with JUnit." />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #2c3e50;
      line-height: 1.6;
    }
    h1, h2, h3 {
      color: #1a202c;
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
      color: #3182ce;
      text-decoration: none;
    }
  </style>
</head>
<body>

  <p>Want to build a Java backend that can hold a real conversation with OpenAI’s GPT model? Let’s go beyond single-turn prompts and add support for multi-turn chat using Spring Boot and the OpenAI API. We’ll also include a test that covers a 3–4 step conversation!</p>

  <h2>📦 Step 1: Maven Dependencies</h2>
  <pre>&lt;dependencies&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
  &lt;/dependency&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;com.fasterxml.jackson.core&lt;/groupId&gt;
    &lt;artifactId&gt;jackson-databind&lt;/artifactId&gt;
  &lt;/dependency&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
    &lt;scope&gt;test&lt;/scope&gt;
  &lt;/dependency&gt;
&lt;/dependencies&gt;</pre>

  <h2>🧠 Step 2: ChatController.java</h2>
  <pre>package com.example.openai;

import org.springframework.web.bind.annotation.*;
import java.net.http.*;
import java.net.URI;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/chat")
public class ChatController {

    private static final String OPENAI_API_KEY = "your-openai-api-key";

    @PostMapping
    public String chat(@RequestBody List&lt;Map&lt;String, String&gt;&gt; messages) throws Exception {
        String formattedMessages = messages.stream()
            .map(msg -&gt; String.format("{\\"role\\": \\"%s\\", \\"content\\": \\"%s\\"}",
                    msg.get("role"), msg.get("content")))
            .collect(Collectors.joining(","));

        String requestBody = """
        {
          "model": "gpt-3.5-turbo",
          "messages": [%s]
        }
        """.formatted(formattedMessages);

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.openai.com/v1/chat/completions"))
            .header("Authorization", "Bearer " + OPENAI_API_KEY)
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(requestBody))
            .build();

        HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
        return response.body();
    }
}</pre>

  <h2>🧪 Step 3: JUnit Test – Multi-Turn Chat</h2>
  <pre>package com.example.openai;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class ChatControllerTest {

    @Test
    void testMultiStepChat() {
        RestTemplate restTemplate = new RestTemplate();

        String url = "http://localhost:8080/api/chat";

        List&lt;Map&lt;String, String&gt;&gt; conversation = new ArrayList&lt;&gt;();
        conversation.add(Map.of("role", "user", "content", "Hi, who are you?"));
        conversation.add(Map.of("role", "assistant", "content", "I'm an AI trained by OpenAI. How can I help?"));
        conversation.add(Map.of("role", "user", "content", "What's the capital of Germany?"));
        conversation.add(Map.of("role", "assistant", "content", "The capital of Germany is Berlin."));
        conversation.add(Map.of("role", "user", "content", "Is it a good place to visit?"));

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity&lt;List&lt;Map&lt;String, String&gt;&gt;&gt; request = new HttpEntity&lt;&gt;(conversation, headers);

        ResponseEntity&lt;String&gt; response = restTemplate.postForEntity(url, request, String.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(response.getBody().contains("Berlin") || response.getBody().toLowerCase().contains("yes"));
    }
}</pre>

  <h2>✅ Expected Result</h2>
  <p>You should get a response that continues the conversation naturally, like:</p>
  <pre>{
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "Yes, Berlin is a vibrant city with rich history and culture!"
      }
    }
  ]
}</pre>

  <h2>💡 Tips</h2>
  <ul>
    <li>Use a logging library to persist message history.</li>
    <li>Store your API key in <code>application.yml</code> securely.</li>
    <li>Add streaming response support with WebClient for real-time output.</li>
  </ul>

  <h2>📌 Conclusion</h2>
  <p>You now have a Spring Boot app that can maintain chat history and simulate real conversations with OpenAI’s Chat API. Expand this to a full chatbot, integrate into Slack, or embed in web apps!</p>

</body>
</html>
  `
};
