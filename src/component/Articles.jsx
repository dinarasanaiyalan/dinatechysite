import React from "react";
import { Accordion } from "react-bootstrap";
import { FaJava } from "react-icons/fa";

const javaVersions = [
    {
        title: "Java 7 Features",
        summary: "Enhancements in exception handling, file I/O, and performance improvements.",
        details: [
            {
                subTopicName: "JPMS (Java Platform Module System) – A Revolution in Java Architecture",
                subTopicContent: "Java 9 introduced the Java Platform Module System (JPMS), a major architectural shift aimed at improving maintainability and scalability. Before Java 9, Java applications were built using monolithic JAR files, which often led to dependency conflicts and unnecessary class loading. With JPMS, developers can now break their applications into modular units, defining dependencies explicitly. This improves application security, reduces memory footprint, and enhances startup time. Additionally, JPMS ensures that unused modules are not loaded, reducing the risk of classpath pollution. This system is especially beneficial for large-scale enterprise applications, as it promotes better encapsulation and reusability of code components."
            },{
                subTopicName: "JShell – Interactive Java Execution with REPL",
                subTopicContent: "Java 9 introduced JShell, the first official REPL (Read-Eval-Print Loop) for Java, making it easier for developers to test Java code without writing a full program. In earlier Java versions, even a simple print statement required creating a class, defining a main method, and running the file. With JShell, developers can now execute single Java statements, methods, and expressions interactively. This feature is highly beneficial for beginners learning Java, as well as experienced developers who need to quickly test and debug logic without setting up a complete project. JShell supports features like auto-completion, command history, and immediate feedback, making Java development more efficient and dynamic."
            },{
                subTopicName: "HTTP/2 Client – Faster and More Efficient Network Communication",
                subTopicContent: "Java 9 replaced the old HttpURLConnection API with a brand-new HTTP/2 Client, improving the way Java applications communicate over the web. The previous HTTP client API was synchronous, outdated, and difficult to use with modern web protocols. The new HTTP/2 Client provides asynchronous programming support, allowing developers to perform non-blocking requests and improve application responsiveness. It also supports WebSockets and Server Push, reducing latency and making applications more efficient. This feature is particularly useful for microservices, cloud applications, and real-time data processing, where efficient network communication is crucial."
            },{
                subTopicName: "Private Methods in Interfaces – Better Code Reusability",
                subTopicContent: "Before Java 9, interfaces could only have public abstract methods and default methods. Java 9 introduced private methods in interfaces, allowing developers to define reusable helper methods that can be accessed only within the interface. This eliminates code duplication and makes default methods more modular and maintainable. Previously, if multiple default methods needed the same logic, developers had to copy and paste code in each method or move it to a separate utility class. Now, with private methods, common logic can be encapsulated within the interface itself, leading to cleaner and more maintainable code structures."
            },{
                subTopicName: "Improved Stream API – More Powerful Data Processing",
                subTopicContent: "The Stream API, introduced in Java 8, was further enhanced in Java 9 with new methods like takeWhile(), dropWhile(), and ofNullable(). These methods simplify functional-style programming, improving how developers filter, transform, and manipulate data streams. The takeWhile() method processes elements from a stream until a condition fails, while dropWhile() skips elements until the condition is met. This makes data processing more efficient and intuitive. Additionally, the ofNullable() method allows handling optional single-element streams, reducing the risk of NullPointerExceptions. These enhancements make Java’s functional programming features even more powerful and user-friendly."
            },{
                subTopicName: "Conclusion",
                subTopicContent: "Java 9 introduced significant improvements that modernized Java development, making it more modular, efficient, and easier to use. These features collectively improve performance, enhance maintainability, and provide better tools for developers."
            }
        ]
    }, {
        title: "Java 8 Features",
        summary: "A New Era of Functional Programming.",
        details: [
            {
                subTopicName: "Lambda Expressions – Bringing Functional Programming to Java",
                subTopicContent: "One of the most revolutionary additions in Java 8 was Lambda Expressions, which introduced functional programming capabilities to Java. Before Java 8, writing anonymous classes for small tasks, like sorting a list or handling events, resulted in lengthy and cluttered code. With lambda expressions, Java became more concise and readable by allowing inline function-like behavior. For example, instead of using a full Comparator implementation to sort a list, developers can now use a one-line lambda expression. This feature makes Java code more expressive, easier to maintain, and reduces boilerplate code, making development more efficient."
            },{
                subTopicName: "Stream API – Revolutionizing Data Processing",
                subTopicContent: "The Stream API introduced in Java 8 provided a powerful way to process collections in a functional style. Traditionally, developers used loops and Iterator objects to traverse collections, making code verbose and error-prone. With streams, Java provides a clean and efficient way to filter, transform, and aggregate data with methods like map(), filter(), and reduce(). Streams also support parallel processing, allowing tasks to be executed on multiple cores, boosting performance. This feature significantly enhances Java’s ability to handle large datasets and real-time data processing in applications such as big data and cloud computing."
            },{
                subTopicName: "Default and Static Methods in Interfaces – Enhanced Flexibility",
                subTopicContent: "Before Java 8, interfaces could only contain abstract methods, making it difficult to add new methods without breaking existing implementations. Java 8 introduced default methods, allowing developers to provide method implementations directly inside interfaces. This means that existing interfaces can be expanded with new features without forcing all implementing classes to override them. Additionally, static methods in interfaces provide utility functions without needing separate utility classes. This feature enhances code reusability, backward compatibility, and API evolution."
            },{
                subTopicName: "Optional Class – Eliminating NullPointerExceptions",
                subTopicContent: "Java 8 introduced the Optional class, which helps developers deal with null values safely. Traditionally, Java applications frequently suffered from NullPointerException errors, leading to unexpected crashes. The Optional class wraps values in a way that forces developers to explicitly handle empty results, improving code safety. With methods like isPresent(), orElse(), and ifPresent(), Java now encourages better null handling, making applications more stable and resilient."
            },{
                subTopicName: "New Date and Time API – A Modern Replacement for java.util.Date",
                subTopicContent: "Java’s old date and time API (java.util.Date and java.util.Calendar) was known for being confusing, mutable, and thread-unsafe. Java 8 introduced the java.time package, which provides immutable and human-friendly classes like LocalDate, LocalTime, and LocalDateTime. This API follows best practices from Joda-Time and allows better time-zone handling, parsing, and formatting, making date manipulation more intuitive and reliable."
            },{
                subTopicName: "Conclusion",
                subTopicContent: "Java 8 introduced major enhancements that made Java more expressive, concise, and efficient. With functional programming capabilities, improved collections processing, and safer data handling, Java 8 set the stage for modern Java development. These features remain widely used today, shaping how developers write scalable and maintainable Java applications."
            }
        ]
    }, {
        title: "Java 9 Features",
        summary: "Modularization, JShell, and Performance Improvements.",
        details: [
            {
                subTopicName: "JPMS (Java Platform Module System) – A Revolution in Java Architecture",
                subTopicContent: "Java 9 introduced the Java Platform Module System (JPMS), a major architectural shift aimed at improving maintainability and scalability. Before Java 9, Java applications were built using monolithic JAR files, which often led to dependency conflicts and unnecessary class loading. With JPMS, developers can now break their applications into modular units, defining dependencies explicitly. This improves application security, reduces memory footprint, and enhances startup time. Additionally, JPMS ensures that unused modules are not loaded, reducing the risk of classpath pollution. This system is especially beneficial for large-scale enterprise applications, as it promotes better encapsulation and reusability of code components."
            },{
                subTopicName: "JShell – Interactive Java Execution with REPL",
                subTopicContent: "Java 9 introduced JShell, the first official REPL (Read-Eval-Print Loop) for Java, making it easier for developers to test Java code without writing a full program. In earlier Java versions, even a simple print statement required creating a class, defining a main method, and running the file. With JShell, developers can now execute single Java statements, methods, and expressions interactively. This feature is highly beneficial for beginners learning Java, as well as experienced developers who need to quickly test and debug logic without setting up a complete project. JShell supports features like auto-completion, command history, and immediate feedback, making Java development more efficient and dynamic."
            },{
                subTopicName: "HTTP/2 Client – Faster and More Efficient Network Communication",
                subTopicContent: "Java 9 replaced the old HttpURLConnection API with a brand-new HTTP/2 Client, improving the way Java applications communicate over the web. The previous HTTP client API was synchronous, outdated, and difficult to use with modern web protocols. The new HTTP/2 Client provides asynchronous programming support, allowing developers to perform non-blocking requests and improve application responsiveness. It also supports WebSockets and Server Push, reducing latency and making applications more efficient. This feature is particularly useful for microservices, cloud applications, and real-time data processing, where efficient network communication is crucial."
            },{
                subTopicName: "Private Methods in Interfaces – Better Code Reusability",
                subTopicContent: "Before Java 9, interfaces could only have public abstract methods and default methods. Java 9 introduced private methods in interfaces, allowing developers to define reusable helper methods that can be accessed only within the interface. This eliminates code duplication and makes default methods more modular and maintainable. Previously, if multiple default methods needed the same logic, developers had to copy and paste code in each method or move it to a separate utility class. Now, with private methods, common logic can be encapsulated within the interface itself, leading to cleaner and more maintainable code structures."
            },{
                subTopicName: "Improved Stream API – More Powerful Data Processing",
                subTopicContent: "The Stream API, introduced in Java 8, was further enhanced in Java 9 with new methods like takeWhile(), dropWhile(), and ofNullable(). These methods simplify functional-style programming, improving how developers filter, transform, and manipulate data streams. The takeWhile() method processes elements from a stream until a condition fails, while dropWhile() skips elements until the condition is met. This makes data processing more efficient and intuitive. Additionally, the ofNullable() method allows handling optional single-element streams, reducing the risk of NullPointerExceptions. These enhancements make Java’s functional programming features even more powerful and user-friendly."
            },{
                subTopicName: "Conclusion",
                subTopicContent: "Java 9 introduced significant improvements that modernized Java development, making it more modular, efficient, and easier to use. With its emphasis on performance, modularization, and developer productivity, Java 9 laid the foundation for future Java versions, enabling the creation of scalable and high-performance applications."
            }
        ]
    }
];

const Articles = () => {
    return (
        <div className="container mt-4">
            <Accordion>
                {javaVersions.map((version, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>
                            <FaJava className="text-primary me-2" /> {version.title} - {version.summary}
                        </Accordion.Header>
                        <Accordion.Body>
                            <dl className="accordion-list">
                                {version.details.map((point, idx) => (
                                    <div>
                                        <dt key={idx} dangerouslySetInnerHTML={{ __html: point.subTopicName }}></dt>
                                        <dd style={{marginLeft: '20px'}} key={idx} dangerouslySetInnerHTML={{ __html: point.subTopicContent }}></dd>
                                    </div>
                                ))}
                            </dl>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
};

export default Articles;
