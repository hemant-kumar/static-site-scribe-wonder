
export const java_a124 = {
  id: 'java_a124',
  title: "Virtual Threads (Project Loom)",
  author: "Hemant Kumar",
  date: "2025-04-13",
  category: "Java",
  keywords: [
    "Java 21 Features",
    "Lightweight Threads",
    "Virtual Threads",
    "Project Loom Java",
    "Project Loom",
    "Java Virtual Threads",
    "Java Scalability",
    "Java Concurrency",
    "Java Threading Model"
  ],
  content: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Virtual Threads (Project Loom) – Lightweight Concurrency in Java</title>
  <meta name="description" content="Explore Virtual Threads from Project Loom in Java – Lightweight, scalable concurrency for modern applications." />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #2d3748;
    }
    h1, h2 {
      color: #1a202c;
    }
    pre {
      background: #2d2d2d;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #edf2f7;
      padding: 2px 5px;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <p>
    Java 21 brings one of the most awaited concurrency updates – <strong>Virtual Threads</strong> from <em>Project Loom</em>.
    Designed to dramatically reduce the complexity and resource cost of multithreaded programming, virtual threads enable
    scalable, high-throughput applications without complicated thread management.
  </p>

  <h2>🚀 What are Virtual Threads?</h2>

  <p>
    Virtual threads are <strong>lightweight threads</strong> managed by the Java Virtual Machine (JVM), not the OS.
    Unlike platform (or "native") threads, virtual threads use minimal memory and can scale to millions of concurrent tasks.
  </p>

  <ul>
    <li>✅ Lightweight</li>
    <li>✅ Non-blocking friendly</li>
    <li>✅ Familiar API (same <code>Thread</code> class)</li>
  </ul>

  <h2>✨ Why They Matter</h2>
  <p>
    Traditional Java threads are costly in memory (1MB+ per thread) and limited in scalability.
    With virtual threads, you can handle massive I/O-bound workloads using simple, synchronous-style code.
  </p>

  <h2>🛠️ Using Virtual Threads</h2>

  <h3>🔹 Basic Example</h3>

  <pre>public class VirtualThreadExample {
    public static void main(String[] args) {
        Runnable task = () -&gt; {
            System.out.println("Running on: " + Thread.currentThread());
        };

        Thread.startVirtualThread(task);
    }
}</pre>

  <p>
    This uses <code>Thread.startVirtualThread()</code> to create a virtual thread. It's as easy as working with normal threads.
  </p>

  <h3>🔹 Spawning Thousands</h3>

  <pre>public class VirtualThreadMassive {
    public static void main(String[] args) throws InterruptedException {
        for (int i = 0; i &lt; 10_000; i++) {
            Thread.startVirtualThread(() -&gt; {
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            });
        }

        Thread.sleep(2000);
        System.out.println("Done");
    }
}</pre>

  <p>
    You can spawn tens or hundreds of thousands of virtual threads without choking the JVM.
  </p>

  <h2>⚖️ Comparison: Platform vs Virtual Threads</h2>

  <table border="1" cellpadding="6" cellspacing="0">
    <thead>
      <tr><th>Feature</th><th>Platform Thread</th><th>Virtual Thread</th></tr>
    </thead>
    <tbody>
      <tr><td>Backed By</td><td>OS thread</td><td>JVM-managed</td></tr>
      <tr><td>Memory Overhead</td><td>~1MB</td><td>~a few KB</td></tr>
      <tr><td>Blocking APIs</td><td>Expensive</td><td>Handled efficiently</td></tr>
      <tr><td>Use Case</td><td>CPU-bound tasks</td><td>I/O-bound & massive concurrency</td></tr>
    </tbody>
  </table>

  <h2>📦 Thread Executors with Virtual Threads</h2>

  <pre>ExecutorService executor = Executors.newVirtualThreadPerTaskExecutor();

executor.submit(() -&gt; {
    System.out.println("Hello from virtual thread!");
});
executor.shutdown();</pre>

  <p>
    Java 21 introduces <code>Executors.newVirtualThreadPerTaskExecutor()</code> – ideal for apps like web servers or reactive pipelines.
  </p>

  <h2>🚧 Gotchas</h2>
  <ul>
    <li>Avoid thread-local-heavy code – virtual threads may not persist on the same carrier thread.</li>
    <li>Blocking native code (e.g., database drivers) may still cause thread pinning.</li>
    <li>Proper structured concurrency is recommended for managing lifecycle.</li>
  </ul>

  <h2>🎯 Use Cases</h2>
  <ul>
    <li>REST APIs handling thousands of requests</li>
    <li>Real-time chat systems</li>
    <li>Batch processing</li>
    <li>Message-driven microservices</li>
  </ul>

  <h2>🧪 Testing Virtual Threads</h2>
  <p>
    You can test virtual thread usage via:
  </p>
  <pre>System.out.println(Thread.currentThread().isVirtual());</pre>

  <h2>🔚 Conclusion</h2>
  <p>
    Virtual Threads in Java 21 simplify concurrency without sacrificing performance. They’re ideal for modern server-side
    development, enabling you to write straightforward, blocking-style code that scales like async.
  </p>

  <p>
    Try them out in your next Spring Boot service or REST API to boost scalability with minimal complexity!
  </p>

</body>
</html>
  `
};
