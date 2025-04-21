
export const java_a112 = {
  id: 'java_a112',
  title: "JBang – Scripting with Java Like Never Before",
  author: "Hemant Kumar",
  date: "2025-04-13",
  category: "Java",
  keywords: [
    "JBang",
    "Java Productivity Tools",
    "Java Scripts",
    "Java Scripting",
    "Scripting with Java",
    "Rapid Java Prototyping",
    "JBang Tutorial",
    "Java CLI Tools",
    "Lightweight Java Development",
    "Java Command Line Apps"
  ],
  content: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>JBang – Scripting with Java Like Never Before</title>
  <meta name="description" content="Learn how JBang turns Java into a modern scripting language. Ideal for quick tools, prototyping, and automation using Java." />
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #fdfdfd;
      color: #333;
      line-height: 1.7;
      margin: 2rem auto;
      padding: 0 1.5rem;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    pre {
      background: #1e1e1e;
      color: #dcdcdc;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #f0f0f0;
      padding: 2px 5px;
      border-radius: 4px;
      font-family: Consolas, monospace;
    }
    a {
      color: #2980b9;
    }
    ul {
      margin-left: 1.5rem;
    }
  </style>
</head>
<body>
  <p>For decades, Java has been known as a powerful but verbose and heavyweight language—great for enterprise applications, not so much for scripts and quick tools. Enter <strong>JBang</strong>: a modern tool that breathes new life into Java by making it scriptable, lightweight, and even fun!</p>

  <section>
    <h2>🌟 What is JBang?</h2>
    <p><strong>JBang</strong> is a tool that allows you to run Java files as scripts — directly from the terminal — without needing to create a Maven or Gradle project. It's like using Python or Bash, but with Java!</p>

    <p>JBang compiles and runs your Java files behind the scenes, automatically handling:</p>
    <ul>
      <li>Dependency management</li>
      <li>Project setup</li>
      <li>JDK selection</li>
      <li>Script execution</li>
    </ul>

    <p>With JBang, you can write a complete Java program in a single file, include libraries with simple annotations, and run it instantly.</p>
  </section>

  <section>
    <h2>⚙️ Installing JBang</h2>

    <p>JBang supports all major OS platforms and can be installed in multiple ways:</p>
    <ul>
      <li><strong>macOS</strong>: <code>brew install jbangdev/tap/jbang</code></li>
      <li><strong>Linux</strong>: <code>curl -Ls https://sh.jbang.dev | bash</code></li>
      <li><strong>Windows</strong>: <a href="https://jbang.dev/download/">Download from jbang.dev</a> or use Scoop/Chocolatey</li>
      <li><strong>SDKMAN</strong>: <code>sdk install jbang</code></li>
    </ul>

    <p>Once installed, verify with:</p>
    <pre>jbang version</pre>
  </section>

  <section>
    <h2>🔧 Writing Your First Java Script</h2>

    <p>Create a file called <code>Hello.java</code> with the following:</p>

    <pre>//usr/bin/env jbang $0 $@ ; exit $?
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, JBang!");
    }
}</pre>

    <p>Run it:</p>
    <pre>jbang Hello.java</pre>

    <p>No project setup, no compilation step — just pure Java joy!</p>
  </section>

  <section>
    <h2>📦 Adding Dependencies</h2>

    <p>JBang allows you to add dependencies inline using <code>//DEPS</code>:</p>

    <pre>//DEPS com.squareup.okhttp3:okhttp:4.9.3
import okhttp3.OkHttpClient;
import okhttp3.Request;

public class FetchUrl {
    public static void main(String[] args) throws Exception {
        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder()
            .url("https://api.github.com")
            .build();
        var response = client.newCall(request).execute();
        System.out.println(response.body().string());
    }
}</pre>

    <p>This is incredibly useful for building quick tools, integrations, or testing libraries.</p>
  </section>

  <section>
    <h2>🖇️ Advanced Features</h2>
    <ul>
      <li><strong>Top-level scripts</strong>: Java code without class wrappers (since Java 11+)</li>
      <li><strong>Template system</strong>: Reuse boilerplate with <code>jbang init --template</code></li>
      <li><strong>Alias support</strong>: Create your own local CLI tools with <code>jbang alias add</code></li>
      <li><strong>Native packaging</strong>: Convert your script to a native binary with <code>jbang export native</code></li>
    </ul>
  </section>

  <section>
    <h2>🧪 Comparing JBang with Other Tools</h2>
    <table border="1" cellpadding="10" style="border-collapse: collapse;">
      <thead>
        <tr>
          <th>Feature</th>
          <th>JBang</th>
          <th>JShell</th>
          <th>Maven</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Quick scripting</td>
          <td>✅</td>
          <td>✅</td>
          <td>❌</td>
        </tr>
        <tr>
          <td>Dependency support</td>
          <td>✅</td>
          <td>Limited</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Classless top-level code</td>
          <td>✅</td>
          <td>✅</td>
          <td>❌</td>
        </tr>
        <tr>
          <td>Reusable scripts</td>
          <td>✅</td>
          <td>❌</td>
          <td>✅</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section>
    <h2>💡 Use Cases</h2>
    <ul>
      <li>💼 Automating repetitive developer tasks</li>
      <li>🔬 Prototyping APIs and data transformations</li>
      <li>📦 Creating developer CLIs and tools</li>
      <li>📊 Quick data visualizations and reports</li>
      <li>📚 Teaching Java in workshops without setup overhead</li>
    </ul>
  </section>

  <section>
    <h2>📚 Resources & Links</h2>
    <ul>
      <li><a href="https://jbang.dev" target="_blank">Official JBang Website</a></li>
      <li><a href="https://github.com/jbangdev/jbang" target="_blank">GitHub Repository</a></li>
      <li><a href="https://jbang.dev/documentation/guide/latest/" target="_blank">Documentation & Examples</a></li>
    </ul>
  </section>

  <section>
    <h2>🎯 Conclusion</h2>
    <p><strong>JBang is the future of Java scripting.</strong> It strips away the verbosity and lets you use Java like a modern scripting language. Whether you're building automation tools, quick utilities, or full-on CLI apps, JBang offers a frictionless developer experience.</p>

    <p>✨ Give it a try, and Java might just become your new favorite scripting language.</p>
  </section>

</body>
</html>
  `
};
