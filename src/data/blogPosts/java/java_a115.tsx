
export const java_a115 = {
  id: 'java_a115',
  title: "Building a Reactive REST API with Spring WebFlux and Project Reactor",
  author: "Hemant Kumar",
  date: "2025-04-13",
  category: "Java",
  keywords: [
    "Non-blocking REST API",
    "Project Reactor",
    "Java WebFlux",
    "Java Reactive Systems",
    "Spring WebFlux",
    "Reactive Programming Java",
    "Spring Boot",
    "Spring WebFlux Tutorial",
    "Building REST APIs",
    "Reactive REST API"
  ],
  content: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Building a Reactive REST API with Spring WebFlux and Project Reactor</title>
  <meta name="description" content="Learn how to build a scalable and non-blocking REST API using Spring WebFlux and Project Reactor. Perfect for high-performance applications." />
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
    table {
      width: 100%;
      border-collapse: collapse;
    }
    table, th, td {
      border: 1px solid #ccc;
    }
    th, td {
      padding: 0.75rem;
      text-align: left;
    }
    th {
      background: #f4f4f4;
    }
    a {
      color: #2980b9;
      text-decoration: none;
    }
  </style>
</head>
<body>

  <p>In modern application development, especially for scalable, high-performance systems, reactive programming has become an essential paradigm. With the help of tools like **Spring WebFlux** and **Project Reactor**, you can build efficient, non-blocking, and asynchronous REST APIs. This blog post will guide you through creating a **Reactive REST API** using **Spring WebFlux** and **Project Reactor**.</p>

  <section>
    <h2>🌍 What is Reactive Programming?</h2>
    <p>Reactive programming allows you to write code that reacts to asynchronous data streams. Instead of waiting for each task to complete before moving on to the next, reactive programming handles tasks concurrently and asynchronously. This is especially useful when building scalable, high-performance systems like REST APIs.</p>

    <p>The core components of reactive programming are:</p>
    <ul>
      <li><strong>Observable Streams</strong>: Data that is emitted asynchronously.</li>
      <li><strong>Operators</strong>: Functions that help manipulate and transform streams.</li>
      <li><strong>Backpressure</strong>: Handling situations when a producer generates data faster than the consumer can handle.</li>
    </ul>
  </section>

  <section>
    <h2>🔧 Setting Up Spring WebFlux</h2>
    <p>Before we dive into coding, let’s set up our project. You can use **Spring Boot** with **Spring WebFlux** for building your reactive REST API.</p>

    <h3>1. Set Up Spring Boot Project</h3>
    <p>Head over to <a href="https://start.spring.io" target="_blank">Spring Initializr</a> and create a new Spring Boot project with the following dependencies:</p>
    <ul>
      <li><strong>Spring WebFlux</strong></li>
      <li><strong>Spring Boot DevTools</strong></li>
      <li><strong>Project Lombok</strong> (for reducing boilerplate code)</li>
      <li><strong>Spring Data MongoDB</strong> (optional, for database integration)</li>
    </ul>
    <p>Download and unzip the project, then open it in your favorite IDE.</p>

    <h3>2. Add Dependencies in pom.xml</h3>
    <pre>&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-webflux&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-data-mongodb&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-logging&lt;/artifactId&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;</pre>
  </section>

  <section>
    <h2>👨‍💻 Building the Reactive Controller</h2>
    <p>Now that our project is set up, let’s build a **Reactive REST Controller**. We'll create an API for managing books in a library using **Project Reactor**'s <code>Mono</code> and <code>Flux</code> types to handle single and multiple values asynchronously.</p>

    <h3>1. Create a Book Model</h3>
    <pre>import lombok.Data;

@Data
public class Book {
    private String id;
    private String title;
    private String author;
}</pre>

    <h3>2. Create a Reactive Repository</h3>
    <p>Next, let’s create a repository to interact with the database in a reactive manner. We will use **MongoDB** for this example.</p>
    <pre>import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface BookRepository extends ReactiveMongoRepository<Book, String> {
}</pre>

    <h3>3. Build the Reactive Controller</h3>
    <pre>import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;
import reactor.core.publisher.Flux;

@RestController
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @GetMapping("/books")
    public Flux<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @PostMapping("/books")
    public Mono<Book> addBook(@RequestBody Book book) {
        return bookRepository.save(book);
    }
}
</pre>

    <p>In the code above:</p>
    <ul>
      <li><code>@GetMapping</code> returns a <code>Flux</code>, which represents a stream of books.</li>
      <li><code>@PostMapping</code> accepts a <code>Mono</code>, representing a single book.</li>
    </ul>
  </section>

  <section>
    <h2>🔌 Running the Application</h2>
    <p>To run the application, simply run the <code>SpringApplication.run</code> method in your main class:</p>

    <pre>import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ReactiveApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(ReactiveApiApplication.class, args);
    }
}
</pre>

    <p>Once the application is running, you can interact with the API at:</p>
    <ul>
      <li>GET <code>/books</code> to fetch all books.</li>
      <li>POST <code>/books</code> to add a new book.</li>
    </ul>
    <p>You can test the API using **Postman** or **cURL**.</p>
  </section>

  <section>
    <h2>⚡ Key Features of Reactive REST API</h2>
    <ul>
      <li><strong>Non-blocking I/O:</strong> The API responds without blocking threads, allowing for high concurrency.</li>
      <li><strong>Backpressure Handling:</strong> Reactive APIs can deal with a situation where the consumer can't keep up with the rate of data production.</li>
      <li><strong>Scalability:</strong> Since the application doesn't block threads, it can scale efficiently with minimal hardware resources.</li>
    </ul>
  </section>

  <section>
    <h2>🔚 Conclusion</h2>
    <p>In this post, we’ve built a simple **Reactive REST API** using **Spring WebFlux** and **Project Reactor**. We explored how reactive programming helps with building non-blocking, scalable systems. With this setup, you can now handle large amounts of traffic in your applications without worrying about thread contention.</p>

    <p>Want to dive deeper into **WebFlux** or integrate other databases like **Cassandra** or **Redis**? Let me know in the comments!</p>
  </section>

</body>
</html>
  `
};
