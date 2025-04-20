
export const java_a102 = {
  id: 'java_a102',
  title: "Java 8 Features: The Evolution of Modern Java",
  author: "Hemant Kumar",
  date: "2025-04-13",
  category: "Java",
  readTime: "2 min read",
  keywords: [
    "Lambda Expressions",
    "Streams API",
    "Java 8 Date API",
    "Java 8 Updates",
    "Java 8 Features",
    "Java 8 Nashorn",
    "Date and Time API",
    "Java 8 Streams",
    "Default Methods Java 8",
    "Java 8"
  ],
  content: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 8 Features: The Evolution of Modern Java</title>
  <meta name="description" content="Explore Java 8's core features like lambdas, streams, functional interfaces, and the new date/time API." />
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

  <p>Java 8, released in March 2014, was a major turning point in the Java ecosystem. It introduced functional programming capabilities and brought a modern, expressive style to Java development. Let’s dive into its most impactful features.</p>

  <section>
    <h2>1. Lambda Expressions</h2>
    <p>Lambda expressions let you treat functionality as method arguments or code as data:</p>
    <pre>List&lt;String&gt; names = Arrays.asList("Alice", "Bob", "Charlie");

names.forEach(name -&gt; System.out.println(name));</pre>
    <p>Shorter, cleaner, and more expressive code!</p>
  </section>

  <section>
    <h2>2. Functional Interfaces</h2>
    <p>Interfaces with a single abstract method can be used with lambdas:</p>
    <pre>@FunctionalInterface
interface Greeting {
    void sayHello(String name);
}

Greeting g = (name) -&gt; System.out.println("Hello " + name);</pre>
    <p>Java 8 introduced many built-in functional interfaces like <code>Predicate</code>, <code>Function</code>, <code>Consumer</code>, and more.</p>
  </section>

  <section>
    <h2>3. Streams API</h2>
    <p>Process collections in a functional style using pipelines:</p>
    <pre>List&lt;String&gt; names = Arrays.asList("Alice", "Bob", "Charlie");

names.stream()
     .filter(n -&gt; n.startsWith("A"))
     .map(String::toUpperCase)
     .forEach(System.out::println);</pre>
    <p>Streams make data processing concise and readable.</p>
  </section>

  <section>
    <h2>4. Default and Static Methods in Interfaces</h2>
    <p>Interfaces can now have method implementations:</p>
    <pre>interface Vehicle {
    default void start() {
        System.out.println("Vehicle started");
    }
}</pre>
    <p>This enabled backward compatibility without breaking existing implementations.</p>
  </section>

  <section>
    <h2>5. New Date and Time API (java.time)</h2>
    <p>The old <code>Date</code> and <code>Calendar</code> classes were replaced by a much cleaner and immutable API:</p>
    <pre>LocalDate today = LocalDate.now();
LocalDate birthday = LocalDate.of(1990, Month.JANUARY, 1);

Period age = Period.between(birthday, today);
System.out.println("Age: " + age.getYears());</pre>
  </section>

  <section>
    <h2>6. Optional Class</h2>
    <p>A container object which may or may not contain a non-null value, avoiding null checks:</p>
    <pre>Optional&lt;String&gt; name = Optional.ofNullable(getName());

name.ifPresent(n -&gt; System.out.println("Hello " + n));</pre>
  </section>

  <section>
    <h2>7. Nashorn JavaScript Engine (Deprecated Later)</h2>
    <p>Java 8 introduced a lightweight JavaScript engine called Nashorn:</p>
    <pre>ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");
engine.eval("print('Hello from JavaScript')");</pre>
    <p><em>(Note: Nashorn was deprecated in later versions and removed in Java 15.)</em></p>
  </section>

  <section>
    <h2>📌 Final Thoughts</h2>
    <p>Java 8 modernized the language and laid the foundation for functional programming in Java. It remains one of the most widely adopted versions, even years after its release.</p>
    <p>If you're maintaining Java 8 applications, knowing these features is essential — and if you're upgrading, many of these ideas carry forward into newer releases!</p>
  </section>

</body>
</html>
  `
};
