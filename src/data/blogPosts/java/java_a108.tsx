
export const java_a108 = {
  id: 'java_a108',
  title: "Lombok – Reduce Boilerplate in Java",
  author: "Hemant Kumar",
  date: "2025-04-13",
  category: "Java",
  readTime: "2 min read",
  keywords: [
    "Java Best Practices",
    "Lombok Annotations",
    "Java Code Simplification",
    "Lombok Tutorial",
    "Reduce Boilerplate Java",
    "Project Lombok",
    "Java Development Tools",
    "Lombok Java",
    "Java Productivity",
    "Java Annotations"
  ],
  content: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Lombok – Reduce Boilerplate in Java</title>
  <meta name="description" content="Learn how Project Lombok helps reduce boilerplate code in Java using annotations like @Getter, @Setter, @Builder, and more." />
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
    ul {
      padding-left: 1.2rem;
    }
  </style>
</head>
<body>

  <p>Writing boilerplate code in Java — like getters, setters, constructors, and builders — can get repetitive. <strong>Project Lombok</strong> simplifies this with annotations that auto-generate code at compile-time, keeping your classes clean and focused.</p>

  <section>
    <h2>🔧 Setup</h2>
    <p>To use Lombok, add this dependency to your project:</p>
    <h4>➡️ Maven</h4>
    <pre>&lt;dependency&gt;
  &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
  &lt;artifactId&gt;lombok&lt;/artifactId&gt;
  &lt;version&gt;1.18.30&lt;/version&gt;
  &lt;scope&gt;provided&lt;/scope&gt;
&lt;/dependency&gt;</pre>

    <h4>➡️ Gradle</h4>
    <pre>compileOnly 'org.projectlombok:lombok:1.18.30'
annotationProcessor 'org.projectlombok:lombok:1.18.30'</pre>
  </section>

  <section>
    <h2>📦 Example Without Lombok</h2>
    <pre>public class User {
  private String name;
  private int age;

  public User() {}

  public User(String name, int age) {
    this.name = name;
    this.age = age;
  }

  public String getName() { return name; }
  public void setName(String name) { this.name = name; }

  public int getAge() { return age; }
  public void setAge(int age) { this.age = age; }
}</pre>
    <p>That's a lot of code for just a data class!</p>
  </section>

  <section>
    <h2>✅ Same Class With Lombok</h2>
    <pre>import lombok.Data;

@Data
public class User {
  private String name;
  private int age;
}</pre>
    <p>Done! <code>@Data</code> includes <code>@Getter</code>, <code>@Setter</code>, <code>@ToString</code>, <code>@EqualsAndHashCode</code>, and <code>@RequiredArgsConstructor</code>.</p>
  </section>

  <section>
    <h2>🎯 Common Lombok Annotations</h2>
    <ul>
      <li><code>@Getter</code> and <code>@Setter</code> – generates getters/setters</li>
      <li><code>@ToString</code> – generates a <code>toString()</code> method</li>
      <li><code>@EqualsAndHashCode</code> – adds <code>equals()</code> and <code>hashCode()</code></li>
      <li><code>@NoArgsConstructor</code>, <code>@AllArgsConstructor</code> – constructors</li>
      <li><code>@Builder</code> – fluent builder API</li>
      <li><code>@Value</code> – makes an immutable class (like Kotlin’s <code>data class</code>)</li>
    </ul>
  </section>

  <section>
    <h2>🚀 Builder Example</h2>
    <pre>@Builder
public class Product {
  private String name;
  private double price;
}

// Usage
Product p = Product.builder()
    .name("Laptop")
    .price(1200.0)
    .build();</pre>
  </section>

  <section>
    <h2>🛠 IDE Support</h2>
    <p>Lombok works in IntelliJ IDEA and Eclipse, but you may need to:</p>
    <ul>
      <li>Install the Lombok plugin</li>
      <li>Enable annotation processing in your IDE settings</li>
    </ul>
  </section>

  <section>
    <h2>📌 Conclusion</h2>
    <p>Lombok is a fantastic tool for reducing repetitive Java code. Use it wisely to simplify your codebase, but be sure your team understands what’s being auto-generated under the hood.</p>
  </section>

</body>
</html>
  `
};
