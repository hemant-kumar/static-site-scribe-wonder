
export const java_a114 = {
  id: 'java_a114',
  title: "Reactive Programming – with Project Reactor or RxJava",
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
  <title>Reactive Programming – with Project Reactor or RxJava</title>
  <meta name="description" content="A deep dive into Reactive Programming using Project Reactor and RxJava. Learn the differences, use cases, and get hands-on examples." />
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

  <p>Reactive programming is a programming paradigm that deals with asynchronous data streams. Instead of executing tasks in a sequential manner, reactive programming allows you to manage streams of data asynchronously, making your programs more efficient and scalable. Two of the most popular libraries for reactive programming in Java are <strong>Project Reactor</strong> and <strong>RxJava</strong>.</p>

  <section>
    <h2>🌍 What is Reactive Programming?</h2>
    <p>Reactive programming focuses on building systems that are event-driven, non-blocking, and scalable. It allows for handling asynchronous data streams (such as events, network responses, or user input) in a declarative way. Reactive systems are inherently more responsive, resilient, and elastic.</p>

    <p>The key concepts in reactive programming are:</p>
    <ul>
      <li><strong>Observable Streams</strong>: Data that is asynchronously emitted over time.</li>
      <li><strong>Operators</strong>: Functions that allow you to manipulate the streams.</li>
      <li><strong>Backpressure</strong>: Handling the situation where the stream producer is faster than the consumer.</li>
    </ul>
  </section>

  <section>
    <h2>🚀 Project Reactor vs RxJava</h2>
    <p>Both Project Reactor and RxJava are libraries that implement the Reactive Streams specification, but they have different approaches, use cases, and features. Let's compare them based on several criteria.</p>

    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Project Reactor</th>
          <th>RxJava</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Developed by</td>
          <td>Spring Team</td>
          <td>ReactiveX Community</td>
        </tr>
        <tr>
          <td>JVM Compatibility</td>
          <td>Designed for JVM (Java, Kotlin, etc.)</td>
          <td>Supports JVM and other platforms (JavaScript, RxJS, etc.)</td>
        </tr>
        <tr>
          <td>Core Concepts</td>
          <td>Mono, Flux (Publisher types)</td>
          <td>Observable, Flowable</td>
        </tr>
        <tr>
          <td>Integration with Spring</td>
          <td>Perfect for Spring WebFlux and Spring Boot</td>
          <td>Can be integrated with Spring but not as seamless as Reactor</td>
        </tr>
        <tr>
          <td>Backpressure Support</td>
          <td>Fully integrated with backpressure handling</td>
          <td>Backpressure handling available in Flowable</td>
        </tr>
        <tr>
          <td>Popularity</td>
          <td>More common in Spring-based projects</td>
          <td>Widely used in general Java-based projects</td>
        </tr>
      </tbody>
    </table>

    <p><strong>Conclusion:</strong> If you're working within the Spring ecosystem, <strong>Project Reactor</strong> is the better choice as it integrates seamlessly with Spring WebFlux. On the other hand, <strong>RxJava</strong> is a more general-purpose reactive library and is widely used in non-Spring-based applications.</p>
  </section>

  <section>
    <h2>🔧 Basic Usage Examples</h2>

    <h3>1. Project Reactor Example</h3>
    <p>Let's look at a simple example using Project Reactor with <code>Mono</code> (single value) and <code>Flux</code> (multiple values).</p>

    <pre>import reactor.core.publisher.Mono;
import reactor.core.publisher.Flux;

public class ReactorExample {
    public static void main(String[] args) {
        // Mono: Emit a single value
        Mono<String> mono = Mono.just("Hello, Reactor!");
        mono.subscribe(System.out::println);

        // Flux: Emit multiple values
        Flux<Integer> flux = Flux.just(1, 2, 3, 4, 5);
        flux.map(i -> i * 2)
            .subscribe(System.out::println);
    }
}</pre>

    <p>In this example, <code>Mono.just</code> emits a single value, while <code>Flux.just</code> emits multiple values, which can be manipulated using operators like <code>map</code>.</p>

    <h3>2. RxJava Example</h3>
    <p>Here's a similar example in RxJava using <code>Observable</code>:</p>

    <pre>import io.reactivex.Observable;

public class RxJavaExample {
    public static void main(String[] args) {
        // Observable: Emit multiple values
        Observable<Integer> observable = Observable.just(1, 2, 3, 4, 5);
        observable.map(i -> i * 2)
                  .subscribe(System.out::println);

        // Single: Emit a single value
        Observable<String> single = Observable.just("Hello, RxJava!");
        single.subscribe(System.out::println);
    }
}</pre>

    <p>RxJava uses <code>Observable</code> to represent streams of data and supports various operators like <code>map</code> and <code>subscribe</code>.</p>
  </section>

  <section>
    <h2>⚡ Advanced Features</h2>

    <h3>Backpressure Handling</h3>
    <p>Both Project Reactor and RxJava support backpressure, allowing you to control the flow of data when the consumer cannot keep up with the producer. For example, in Reactor, you can use the <code>onBackpressureBuffer</code> operator to buffer elements if the downstream consumer is slow.</p>

    <pre>Flux<Integer> flux = Flux.range(1, 1000)
        .onBackpressureBuffer();
    flux.subscribe(System.out::println);
</pre>

    <p>In RxJava, backpressure can be controlled using <code>Flowable</code>:</p>

    <pre>Flowable<Integer> flowable = Flowable.range(1, 1000)
        .onBackpressureBuffer();
    flowable.subscribe(System.out::println);
</pre>

    <h3>Composing Streams</h3>
    <p>Both libraries provide powerful operators to compose multiple streams, including <code>flatMap</code>, <code>concatMap</code>, and <code>merge</code>. This is essential for handling asynchronous tasks and creating complex pipelines.</p>
  </section>

  <section>
    <h2>🚀 Use Cases</h2>
    <ul>
      <li><strong>Real-Time Data</strong>: Use reactive programming for applications like chat systems, live dashboards, and event-driven systems.</li>
      <li><strong>Asynchronous APIs</strong>: Handle multiple I/O operations (e.g., database queries, network requests) without blocking the main thread.</li>
      <li><strong>Microservices</strong>: Reactive programming is ideal for building scalable, non-blocking microservices.</li>
      <li><strong>UIs</strong>: Build interactive and responsive UIs by combining reactive streams with JavaFX or similar frameworks.</li>
    </ul>
  </section>

  <section>
    <h2>🔚 Conclusion</h2>
    <p>Both Project Reactor and RxJava provide powerful tools for reactive programming. While Reactor is the go-to choice for Spring developers, RxJava remains a popular library for more general-purpose Java applications.</p>

    <p>Whether you're building an enterprise-grade system or just experimenting with asynchronous data, understanding and using reactive programming will significantly improve the responsiveness and scalability of your application.</p>

    <p>Have questions or need more examples? Drop a comment below!</p>
  </section>

</body>
</html>
  `
};
