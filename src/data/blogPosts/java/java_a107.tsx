
export const java_a107 = {
  id: 'java_a107',
  title: "Java Streams: map() vs flatMap()",
  author: "Hemant Kumar",
  date: "2025-04-13",
  category: "Java",
  keywords: [
    "Java Functional Programming",
    "map() vs flatMap()",
    "Java Stream map()",
    "Stream Transformation in Java",
    "Java Streams",
    "Java Stream flatMap()",
    "Java 8 Streams",
    "Java Stream Operations",
    "Java Streams API"
  ],
  content: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java Streams: map() vs flatMap()</title>
  <meta name="description" content="Understand the difference between map() and flatMap() in Java Streams with clear examples and use cases." />
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
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      text-align: left;
      padding: 8px;
      border-bottom: 1px solid #ddd;
    }
    th {
      background-color: #f0f0f0;
    }
  </style>
</head>
<body>

  <p>In Java Streams, both <code>map()</code> and <code>flatMap()</code> are used to transform data — but they behave differently based on the output structure. Let's break it down with real examples.</p>

  <section>
    <h2>✅ <code>map()</code> – One-to-One Transformation</h2>
    <p>Transforms each element into another value (e.g., <code>String</code> to <code>Integer</code>):</p>
    <pre>List&lt;String&gt; names = List.of("Alice", "Bob");

List&lt;Integer&gt; lengths = names.stream()
    .map(String::length)
    .collect(Collectors.toList());

System.out.println(lengths); // Output: [5, 3]</pre>
  </section>

  <section>
    <h2>✅ <code>flatMap()</code> – One-to-Many Flattening</h2>
    <p>Each element is mapped to a <code>Stream</code>, and all streams are then flattened into a single stream:</p>
    <pre>List&lt;String&gt; sentences = List.of("Hello world", "Java Streams");

List&lt;String&gt; words = sentences.stream()
    .flatMap(s -&gt; Arrays.stream(s.split(" ")))
    .collect(Collectors.toList());

System.out.println(words); // Output: [Hello, world, Java, Streams]</pre>
  </section>

  <section>
    <h2>🔁 Key Differences</h2>
    <table>
      <tr>
        <th>Feature</th>
        <th><code>map()</code></th>
        <th><code>flatMap()</code></th>
      </tr>
      <tr>
        <td>Transformation</td>
        <td>One-to-One</td>
        <td>One-to-Many</td>
      </tr>
      <tr>
        <td>Output Type</td>
        <td><code>Stream&lt;T&gt;</code></td>
        <td><code>Stream&lt;U&gt;</code> (flattened)</td>
      </tr>
      <tr>
        <td>Use Case</td>
        <td>Transform each item</td>
        <td>Flatten nested structures</td>
      </tr>
    </table>
  </section>

  <section>
    <h2>📦 Nested List Example</h2>
    <pre>List&lt;List&lt;String&gt;&gt; listOfLists = List.of(
    List.of("A", "B"),
    List.of("C", "D")
);

// Using map()
Stream&lt;List&lt;String&gt;&gt; mapped = listOfLists.stream().map(list -&gt; list);
System.out.println(mapped.count()); // Output: 2

// Using flatMap()
Stream&lt;String&gt; flatMapped = listOfLists.stream().flatMap(List::stream);
System.out.println(flatMapped.count()); // Output: 4</pre>
  </section>

  <section>
    <h2>🎯 Conclusion</h2>
    <ul>
      <li>Use <code>map()</code> for simple transformations.</li>
      <li>Use <code>flatMap()</code> when each element produces a stream or collection, and you want a single flattened result.</li>
    </ul>
    <p>Mastering these two functions makes your Java Stream operations far more powerful and expressive!</p>
  </section>

</body>
</html>
  `
};
