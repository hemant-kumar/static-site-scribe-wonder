
export const java_a104 = {
  id: 'java_a104',
  title: "Java 21 Features",
  author: "Hemant Kumar",
  date: "2025-04-13",
  category: "Java",
  keywords: [
    "Java 21 Features",
    "Java 21 Performance",
    "Java 21",
    "Foreign Function API Java 21",
    "Java Security Manager Removal",
    "Project Loom",
    "Java 21 JEPs",
    "Java Virtual Threads",
    "Record Patterns",
    "Pattern Matching Java 21"
  ],
  content: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 21 Features: The Complete Guide for Developers</title>
  <meta name="description" content="Explore Java 21's powerful new features including virtual threads, pattern matching, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>

  <p>Java 21, released in September 2023, is a major Long-Term Support (LTS) release. It brings cutting-edge features like virtual threads, record patterns, string templates, and more. Let’s dive into what’s new in Java 21!</p>

  <section>
    <h2>1. Virtual Threads (JEP 444)</h2>
    <p>Part of Project Loom, virtual threads are lightweight threads that scale your applications with minimal changes.</p>
    <pre>try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -&gt; System.out.println("Hello from a virtual thread!"));
}</pre>
    <p>They’re ideal for handling high-concurrency applications like web servers.</p>
  </section>

  <section>
    <h2>2. Record Patterns (JEP 440)</h2>
    <p>Pattern matching now supports records, making deconstruction more elegant:</p>
    <pre>record Point(int x, int y) {}

static void print(Object obj) {
    if (obj instanceof Point(int x, int y)) {
        System.out.println("x = " + x + ", y = " + y);
    }
}</pre>
  </section>

  <section>
    <h2>3. Pattern Matching for <code>switch</code> (JEP 441)</h2>
    <p>Switch can now use type patterns, making decision trees concise and type-safe:</p>
    <pre>static String handleShape(Object shape) {
    return switch (shape) {
        case Circle c -&gt; "Circle radius: " + c.radius();
        case Rectangle r -&gt; "Rectangle area: " + (r.w() * r.h());
        default -&gt; "Unknown shape";
    };
}</pre>
  </section>

  <section>
    <h2>4. String Templates (Preview) (JEP 430)</h2>
    <p>String interpolation comes to Java with <code>STR</code> templates:</p>
    <pre>String name = "Java";
String greeting = STR."Hello, \{name}!";
System.out.println(greeting);</pre>
    <p>This feature is in preview but hugely anticipated!</p>
  </section>

  <section>
    <h2>5. Unnamed Classes and Instance <code>main()</code> (Preview)</h2>
    <p>You can now write minimal Java programs with no class declaration:</p>
    <pre>void main() {
    System.out.println("Minimal Java app!");
}</pre>
    <p>Perfect for scripts, learning, or quick prototyping.</p>
  </section>

  <section>
    <h2>6. Scoped Values (Preview) (JEP 446)</h2>
    <p>Scoped values allow safe, efficient sharing of data between threads — especially useful with virtual threads:</p>
    <pre>ScopedValue&lt;String&gt; USERNAME = ScopedValue.newInstance();

ScopedValue.where(USERNAME, "alice").run(() -&gt; {
    System.out.println("Hello " + USERNAME.get());
});</pre>
  </section>

  <section>
    <h2>7. Structured Concurrency (Preview) (JEP 453)</h2>
    <p>Makes managing concurrent tasks easier and safer by treating them as a single unit of work:</p>
    <pre>try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
    Future&lt;String&gt; user = scope.fork(() -&gt; fetchUser());
    Future&lt;String&gt; orders = scope.fork(() -&gt; fetchOrders());

    scope.join();
    scope.throwIfFailed();

    return user.result() + orders.result();
}</pre>
  </section>

  <section>
    <h2>📌 Final Thoughts</h2>
    <p>Java 21 modernizes the platform with features developers have wanted for years. If you’re using Java 17 or earlier, this LTS release is a solid upgrade.</p>
    <p>Java is more expressive, scalable, and fun than ever. Time to make the move!</p>
  </section>

</body>
</html>
  `
};
