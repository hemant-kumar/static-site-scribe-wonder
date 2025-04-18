
export const java_a113 = {
  id: 'java_a113',
  title: "JBang vs JShell vs Kotlin Scripting",
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
  <title>JBang vs JShell vs Kotlin Scripting</title>
  <meta name="description" content="A developer-friendly comparison between JBang, JShell, and Kotlin scripting for fast Java-based scripts and prototyping." />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 2rem auto;
      line-height: 1.7;
      color: #333;
      background: #fefefe;
      padding: 0 1.5rem;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    pre {
      background: #1e1e1e;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 6px;
      overflow-x: auto;
    }
    code {
      background: #eee;
      padding: 3px 6px;
      border-radius: 4px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
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
    ul {
      margin-left: 1.25rem;
    }
  </style>
</head>
<body>

  <p>Java developers have long wished for scripting capabilities that are as fast and flexible as Python or Bash. With modern tooling, that dream is closer than ever. In this post, we’ll explore and compare three powerful tools that bring scripting to the JVM world:</p>

  <ul>
    <li><strong>JBang</strong>: Full-powered Java scripting with dependency support</li>
    <li><strong>JShell</strong>: REPL-based exploration tool built into the JDK</li>
    <li><strong>Kotlin Scripting</strong>: Flexible scripting with Kotlin’s concise syntax</li>
  </ul>

  <h2>🎯 Use Case Overview</h2>

  <p>Before diving into the details, let’s briefly define where each tool shines:</p>

  <ul>
    <li><strong>JBang</strong>: Great for quick scripts, CLI tools, and automation with real dependencies</li>
    <li><strong>JShell</strong>: Ideal for quick experimentation and learning Java interactively</li>
    <li><strong>Kotlin Scripting</strong>: Perfect for concise scripts, DSLs, and integration into build tools</li>
  </ul>

  <h2>🔍 Feature Comparison</h2>

  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>JBang</th>
        <th>JShell</th>
        <th>Kotlin Scripting</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Requires Java knowledge</td>
        <td>✅</td>
        <td>✅</td>
        <td>⚠️ Familiarity with Kotlin</td>
      </tr>
      <tr>
        <td>Scriptable with top-level code</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
      </tr>
      <tr>
        <td>Dependency support</td>
        <td>✅ <code>//DEPS</code></td>
        <td>⚠️ Limited (via startup script)</td>
        <td>✅ (via gradle.kts or annotations)</td>
      </tr>
      <tr>
        <td>Runs from CLI</td>
        <td>✅</td>
        <td>✅ (REPL)</td>
        <td>✅</td>
      </tr>
      <tr>
        <td>Compilation required</td>
        <td>❌</td>
        <td>❌</td>
        <td>❌</td>
      </tr>
      <tr>
        <td>External library usage</td>
        <td>✅ (via Maven Central)</td>
        <td>⚠️ Workaround needed</td>
        <td>✅ (with script config)</td>
      </tr>
      <tr>
        <td>CLI App Development</td>
        <td>✅ (with Picocli)</td>
        <td>❌</td>
        <td>⚠️ DSL-friendly, not CLI focused</td>
      </tr>
    </tbody>
  </table>

  <h2>📜 Syntax Examples</h2>

  <h3>1. JBang Example</h3>
  <pre>//DEPS org.apache.commons:commons-lang3:3.12.0
import org.apache.commons.lang3.StringUtils;

public class Hello {
    public static void main(String[] args) {
        System.out.println(StringUtils.capitalize("hello jbang!"));
    }
}</pre>

  <h3>2. JShell Example</h3>
  <pre>jshell
jshell&gt; int a = 5;
jshell&gt; System.out.println(a * 2);</pre>

  <h3>3. Kotlin Script</h3>
  <pre>// File: hello.kts
val name = "Kotlin"
println("Hello, $name Scripting!")</pre>

  <p>To run: <code>kotlinc -script hello.kts</code></p>

  <h2>🔧 Installation Overview</h2>

  <ul>
    <li><strong>JBang</strong>: Install via <code>brew</code>, <code>sdkman</code>, or script from <a href="https://jbang.dev">jbang.dev</a></li>
    <li><strong>JShell</strong>: Comes with Java 9+ (<code>jshell</code> command)</li>
    <li><strong>Kotlin Scripting</strong>: Install <a href="https://kotlinlang.org/docs/command-line.html">Kotlin CLI tools</a></li>
  </ul>

  <h2>✅ When to Use What?</h2>

  <ul>
    <li>👨‍💻 <strong>Use JBang</strong> if you’re building quick scripts, tools, or want dependency management.</li>
    <li>📚 <strong>Use JShell</strong> for learning Java, testing ideas, or debugging APIs quickly.</li>
    <li>⚡ <strong>Use Kotlin scripting</strong> when you prefer Kotlin’s syntax and want to write concise, expressive scripts.</li>
  </ul>

  <h2>🔚 Final Thoughts</h2>

  <p>The JVM ecosystem now offers some amazing scripting tools. <strong>JBang</strong> makes Java scripting modern and powerful. <strong>JShell</strong> is excellent for interactive experimentation. And <strong>Kotlin scripting</strong> brings elegance and expressiveness to JVM scripting.</p>

  <p>Choose the tool that fits your workflow — or combine them!</p>

  <p>👉 Want a guide on <strong>creating CLI tools with JBang + Picocli</strong> or scripting APIs with Kotlin? Let me know!</p>

</body>
</html>
  `
};
