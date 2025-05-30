
export const java_a101 = {
  id: 'java_a101',
  title: "Java 11 Features: What Every Developer Should Know",
  author: "Hemant Kumar",
  date: "2025-04-13",
  category: "Java",
  keywords: [
    "Java 11",
    "Java Updates",
    "Java Features for Developers",
    "New Java Features",
    "Java Programming",
    "Java Development",
    "Java Features",
    "Java 11 Guide",
    "Java Tutorials",
    "Java Programming Tips"
  ],
  content: `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
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
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc\n".stripTrailing();// "abc"
"line1\nline2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `
};

