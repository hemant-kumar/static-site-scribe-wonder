
export const java_a109 = {
  id: 'java_a109',
  title: "Testing Lombok-based Classes in Java",
  author: "Hemant Kumar",
  date: "2025-04-13",
  category: "Java",
  readTime: "2 min read",
  keywords: [
    "Testing Lombok Classes",
    "Lombok and JUnit",
    "Java Test Automation",
    "Java Testing Best Practices",
    "Test Lombok Getters Setters",
    "Unit Testing Java",
    "Java Development",
    "Lombok Tutorial",
    "Lombok Java",
    "Java Annotations"
  ],
  content: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Testing Lombok-based Classes in Java</title>
  <meta name="description" content="Learn how to effectively test Java classes that use Lombok annotations like @Data, @Builder, @EqualsAndHashCode, and more." />
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

  <p><strong>Lombok</strong> simplifies Java by auto-generating boilerplate like getters, setters, and constructors. But how do you **test** classes that use Lombok annotations?</p>

  <p>Here's a practical guide to unit testing Lombok-powered classes — and when you might want to go beyond relying on Lombok alone.</p>

  <section>
    <h2>✅ Lombok Class Example</h2>
    <p>Let’s use this simple class as our example:</p>
    <pre>import lombok.Data;

@Data
public class User {
  private String name;
  private int age;
}</pre>
    <p>Lombok generates <code>getName()</code>, <code>setName()</code>, <code>getAge()</code>, <code>setAge()</code>, <code>equals()</code>, <code>hashCode()</code>, and <code>toString()</code>.</p>
  </section>

  <section>
    <h2>🔍 Should You Test Getters and Setters?</h2>
    <p>Generally, you <strong>don’t need to test Lombok-generated methods</strong> like getters and setters — they’re stable and widely trusted. However, you might want to test:</p>
    <ul>
      <li>Custom logic added manually</li>
      <li>Builder pattern usage</li>
      <li>Correct field population</li>
      <li>Equality and immutability (e.g., for value objects)</li>
    </ul>
  </section>

  <section>
    <h2>📦 Sample JUnit 5 Tests</h2>
    <pre>import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class UserTest {

  @Test
  void testGettersAndSetters() {
    User user = new User();
    user.setName("Alice");
    user.setAge(30);

    assertEquals("Alice", user.getName());
    assertEquals(30, user.getAge());
  }

  @Test
  void testEqualsAndHashCode() {
    User u1 = new User();
    u1.setName("Alice");
    u1.setAge(30);

    User u2 = new User();
    u2.setName("Alice");
    u2.setAge(30);

    assertEquals(u1, u2);
    assertEquals(u1.hashCode(), u2.hashCode());
  }

  @Test
  void testToString() {
    User user = new User();
    user.setName("Bob");
    user.setAge(25);

    String toString = user.toString();
    assertTrue(toString.contains("Bob"));
    assertTrue(toString.contains("25"));
  }
}</pre>
    <p><strong>Note:</strong> You’re not testing Lombok itself — you’re testing that your class behaves as expected with data populated.</p>
  </section>

  <section>
    <h2>🚀 Testing @Builder Classes</h2>
    <pre>import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Product {
  private String name;
  private double price;
}</pre>

    <p>JUnit test for <code>@Builder</code>:</p>
    <pre>@Test
void testBuilder() {
  Product p = Product.builder()
      .name("MacBook")
      .price(1999.99)
      .build();

  assertEquals("MacBook", p.getName());
  assertEquals(1999.99, p.getPrice());
}</pre>
  </section>

  <section>
    <h2>📌 Best Practices</h2>
    <ul>
      <li>📦 Don’t test auto-generated code unless it’s part of complex logic.</li>
      <li>🔍 Focus on testing behavior, not Lombok.</li>
      <li>🛠 Use IDEs or decompiled classes to inspect generated code if needed.</li>
      <li>✅ For teams: document that Lombok is used so others understand what's hidden.</li>
    </ul>
  </section>

  <section>
    <h2>📚 Conclusion</h2>
    <p>Lombok reduces code clutter — and when used wisely, you don’t need to test the annotations themselves. Focus your tests on functionality and ensure the behavior is correct based on how your classes are used.</p>
    <p>Want to see how Lombok compares with <code>record</code> types in Java 14+? Stay tuned!</p>
  </section>

</body>
</html>
  `
};
