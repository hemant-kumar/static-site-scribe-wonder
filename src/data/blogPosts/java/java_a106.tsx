
export const java_a106 = {
  id: 'java_a106',
  title: "Java Streams: A Modern Way to Process Data",
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
  <title>Java Streams: A Modern Way to Process Data</title>
  <meta name="description" content="Learn Java Streams with real-world examples. Understand map, filter, reduce, and how to write clean, functional-style code in Java." />
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

  <p>Introduced in Java 8, the <code>Stream</code> API brings a functional approach to processing collections. With streams, you can perform operations like <strong>filtering</strong>, <strong>mapping</strong>, and <strong>reducing</strong> in a concise and readable way.</p>

  <section>
    <h2>🔍 What is a Stream?</h2>
    <p>A <code>Stream</code> represents a sequence of elements and supports sequential and parallel aggregate operations.</p>
    <pre>List&lt;String&gt; names = Arrays.asList("Alice", "Bob", "Charlie");

names.stream()
     .filter(name -&gt; name.startsWith("A"))
     .forEach(System.out::println);</pre>
    <p>Output: <code>Alice</code></p>
  </section>

  <section>
    <h2>⚙️ Common Operations</h2>

    <h3>1. <code>filter()</code></h3>
    <p>Filters elements based on a condition:</p>
    <pre>List&lt;Integer&gt; nums = Arrays.asList(1, 2, 3, 4, 5);
nums.stream()
    .filter(n -&gt; n % 2 == 0)
    .forEach(System.out::println);</pre>

    <h3>2. <code>map()</code></h3>
    <p>Transforms each element:</p>
    <pre>List&lt;String&gt; names = Arrays.asList("Java", "Python", "Go");

names.stream()
     .map(String::toUpperCase)
     .forEach(System.out::println);</pre>

    <h3>3. <code>reduce()</code></h3>
    <p>Reduces the stream to a single value:</p>
    <pre>int sum = Stream.of(1, 2, 3, 4)
                .reduce(0, Integer::sum);

System.out.println(sum);</pre>
    <p>Output: <code>10</code></p>
  </section>

  <section>
    <h2>🔁 Collecting Results</h2>
    <p>You can collect stream results into collections:</p>
    <pre>List&lt;String&gt; filtered = names.stream()
                             .filter(n -&gt; n.length() &gt; 3)
                             .collect(Collectors.toList());</pre>
  </section>

  <section>
    <h2>🚀 Parallel Streams</h2>
    <p>Process elements in parallel using multiple threads:</p>
    <pre>list.parallelStream()
    .filter( ... )
    .map( ... )
    .collect(Collectors.toList());</pre>
    <p>Use with care — not always faster depending on workload and thread management.</p>
  </section>

  <section>
    <h2>✅ Summary</h2>
    <ul>
      <li>Streams make code cleaner and easier to read.</li>
      <li>They enable functional-style operations on collections.</li>
      <li>Use <code>map</code>, <code>filter</code>, <code>reduce</code>, <code>collect</code> for powerful transformations.</li>
    </ul>
    <p>Java Streams = less boilerplate, more power. Try them in your next project!</p>
  </section>

</body>
</html>
  `
};
