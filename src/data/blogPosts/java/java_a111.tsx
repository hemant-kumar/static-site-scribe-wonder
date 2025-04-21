
export const java_a111 = {
  id: 'java_a111',
  title: "Java Records in Functional Programming",
  author: "Hemant Kumar",
  date: "2025-04-13",
  category: "Java",
  keywords: [
    "Immutability in Java",
    "Java Best Practices",
    "Java Functional Constructs",
    "Java Data Classes",
    "Java 14 Records",
    "Java Records Tutorial",
    "Java Records",
    "Java Functional Style",
    "Functional Programming Java"
  ],
  content: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java Records in Functional Programming</title>
  <meta name="description" content="Explore how Java Records align with functional programming principles like immutability, value semantics, and pure functions." />
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
    ul {
      padding-left: 1.2rem;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>

  <p>Java isn’t traditionally a functional programming (FP) language, but with the introduction of <strong>Records</strong> in Java 14+ (stable since Java 16), it’s become easier to write FP-inspired, data-oriented code.</p>

  <p>In this article, we’ll explore how <strong>Records</strong> support key functional programming principles like <em>immutability</em>, <em>value-based semantics</em>, and <em>pure data modeling</em>.</p>

  <section>
    <h2>📦 What Are Java Records?</h2>
    <p>Records are a concise way to declare <strong>immutable data carriers</strong> in Java. They auto-generate:</p>
    <ul>
      <li>Constructor</li>
      <li>Getters</li>
      <li><code>equals()</code> and <code>hashCode()</code></li>
      <li><code>toString()</code></li>
    </ul>

    <pre>public record User(String name, int age) {}</pre>

    <p>This class is equivalent to a verbose POJO, but it’s immutable and much cleaner.</p>
  </section>

  <section>
    <h2>🧠 Why Records Fit Functional Programming</h2>
    <p>Functional programming promotes writing <strong>pure functions</strong> that avoid mutable state. Here’s how records align:</p>
    <ul>
      <li>✅ <strong>Immutability</strong> – Record fields are <code>final</code> and cannot be changed after construction.</li>
      <li>✅ <strong>Value semantics</strong> – Two records with the same data are equal.</li>
      <li>✅ <strong>Data as a value</strong> – Emphasizes transforming data over modifying it.</li>
    </ul>
  </section>

  <section>
    <h2>🛠 Working with Records in Functional Style</h2>

    <h3>1. Record Transformation with Functions</h3>
    <p>Create pure functions that return new records instead of modifying existing ones:</p>
    <pre>public record Product(String name, double price) {}

public Product applyDiscount(Product p, double percent) {
  return new Product(p.name(), p.price() * (1 - percent / 100));
}</pre>

    <h3>2. Using Streams with Records</h3>
    <pre>List&lt;Product&gt; discounted = products.stream()
  .map(p -&gt; applyDiscount(p, 10))
  .toList();</pre>

    <p>Because records are immutable, these transformations are safe and side-effect-free.</p>
  </section>

  <section>
    <h2>🔁 Records as Algebraic Data Types (ADTs)</h2>
    <p>In FP, data is often modeled with **Algebraic Data Types** like sum types (variants). Java doesn’t have native sum types, but you can mimic them using sealed interfaces + records:</p>

    <pre>sealed interface Payment permits Card, Cash {}

record Card(String cardNumber) implements Payment {}
record Cash(double amount) implements Payment {}</pre>

    <p>This pattern mirrors pattern matching and variant-based logic in languages like Scala and Haskell.</p>

    <pre>String handlePayment(Payment p) {
  return switch (p) {
    case Card c -&gt; "Paid with card: " + c.cardNumber();
    case Cash c -&gt; "Paid in cash: " + c.amount();
  };
}</pre>
  </section>

  <section>
    <h2>🧼 Best Practices</h2>
    <ul>
      <li>✅ Use records to model **pure data**, especially DTOs, events, and config objects.</li>
      <li>✅ Favor **stateless transformations** over mutating logic.</li>
      <li>❌ Avoid adding mutable fields or logic-heavy methods to records.</li>
      <li>⚠️ Records are not suitable for ORM/JPA entities due to immutability and lack of no-arg constructor.</li>
    </ul>
  </section>

  <section>
    <h2>📚 Conclusion</h2>
    <p><strong>Records + Functional Thinking = Cleaner, Safer Java</strong></p>
    <p>Java Records offer a powerful way to embrace functional programming principles, like immutability, pure functions, and value-based reasoning. They’re perfect for modeling data, applying transformations, and building more robust, testable code.</p>
    <p>Combine records with Streams, Optionals, and pattern matching — and your Java starts feeling surprisingly functional!</p>
  </section>

</body>
</html>
  `
};
