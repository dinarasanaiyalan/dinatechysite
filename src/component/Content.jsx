import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Content = () => {

    const topicsDetials = [
        {
            topicKey: "Variable",
            topicValue:
            {
                whatYouGet: ['What it is?', 'Why we need this?', 'When we need to use?'],
                mainContent: [
                    {
                        topicName: "Variables",
                        topicContent: "A variable in Java is a container that holds a value. It has a name, a data type, and a memory location where the value is stored."
                    },
                    {
                        topicName: "Types of Variables in Java",
                        topicContent: "Java has three types of variables:",
                        topicPoints: ["Local Variables", "Instance Variables (Non-Static Variables)", "Static Variables (Class Variables)"]
                    },
                    {
                        topicName: "Local Variables",
                        topicPoints: ["Declared inside a method, constructor, or block.", "Scope is limited to the method/block where it is defined.", "Must be initialized before use."]
                    },
                    {
                        topicName: "Instance Variables (Non-Static Variables)",
                        topicPoints: ["Declared inside a class but outside any method.", "Each object gets its own copy of the instance variable.", "Initialized to default values if not explicitly assigned."]
                    },
                    {
                        topicName: "Static Variables (Class Variables)",
                        topicPoints: ["Declared with the static keyword inside a class.", "Shared among all objects of the class.", "Memory is allocated only once in the class area."]
                    },
                    {
                        topicName: "Variable Naming Rules",
                        topicContent: "When naming variables in Java, you must follow certain rules and conventions to ensure valid and readable code.",
                        topicPoints: [
                            "Must begin with a letter (A-Z or a-z), underscore (_) or dollar sign ($)",
                            "Cannot use Java reserved keywords (e.g., int, class, static, etc.)",
                            "Can contain letters, digits (0-9), underscore (_), and dollar sign ($)",
                            "Case-sensitive (Java differentiates uppercase and lowercase letters)",
                            "No spaces allowed (use camelCase or underscores instead)"
                        ]
                    },
                    {
                        topicName: "Stages of Variable Creation",
                        topicContent: "In Java, a variable goes through three main stages:",
                        topicPoints: [
                            "Declaration – Defining the variable with a data type.",
                            "Initialization – Assigning an initial value.",
                            "Re-initialization – Updating the value of the variable."
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Keywords",
            topicValue: {
                whatYouGet: ['What it is?', 'Why we need this?', 'When we need to use?'],
                mainContent: [
                    {
                        topicName: "Keywords",
                        topicPoints: [
                            "1. abstract - Defines an abstract class that cannot be instantiated.",
                            "2. assert - Used for debugging purposes to test assumptions in code.",
                            "3. boolean - A data type that can hold only true or false values.",
                            "4. break - Exits from a loop or switch statement immediately.",
                            "5. byte - A data type that holds 8-bit integer values.",
                            "6. case - Defines a case in a switch statement.",
                            "7. catch - Handles exceptions thrown in a try block.",
                            "8. char - A data type that holds a single 16-bit Unicode character.",
                            "9. class - Defines a new class in Java.",
                            "10. continue - Skips the current iteration of a loop and moves to the next iteration.",
                            "11. default - Specifies the default block of code in a switch statement.",
                            "12. do - Starts a do-while loop, which executes at least once.",
                            "13. double - A data type for storing 64-bit floating-point numbers.",
                            "14. else - Defines an alternative branch in an if statement.",
                            "15. enum - Defines a fixed set of constants.",
                            "16. extends - Indicates that a class is inheriting from another class.",
                            "17. final - Defines constants, prevents method overriding, and class inheritance.",
                            "18. finally - Defines a block that always executes after a try-catch block.",
                            "19. float - A data type for storing 32-bit floating-point numbers.",
                            "20. for - Starts a for loop.",
                            "21. if - Defines a conditional statement.",
                            "22. implements - Indicates that a class implements an interface.",
                            "23. import - Imports a package or a class.",
                            "24. instanceof - Checks if an object is an instance of a specific class or subclass.",
                            "25. int - A data type for storing 32-bit integer values.",
                            "26. interface - Defines an interface that classes can implement.",
                            "27. long - A data type for storing 64-bit integer values.",
                            "28. native - Indicates that a method is implemented in native code (e.g., C/C++).",
                            "29. new - Creates a new instance of a class.",
                            "30. null - Represents a null reference.",
                            "31. package - Defines a package for organizing classes.",
                            "32. private - Specifies private access control.",
                            "33. protected - Specifies protected access control.",
                            "34. public - Specifies public access control.",
                            "35. return - Returns a value from a method.",
                            "36. short - A data type for storing 16-bit integer values.",
                            "37. static - Defines a static method or variable.",
                            "38. strictfp - Ensures consistent floating-point calculations across platforms.",
                            "39. super - Refers to the parent class.",
                            "40. switch - Starts a switch statement.",
                            "41. synchronized - Ensures thread safety by synchronizing a method or block.",
                            "42. this - Refers to the current instance of the class.",
                            "43. throw - Throws an exception.",
                            "44. throws - Declares exceptions that a method may throw.",
                            "45. transient - Prevents serialization of a variable.",
                            "46. try - Starts a try block for exception handling.",
                            "47. void - Specifies that a method does not return a value.",
                            "48. volatile - Indicates that a variable's value may change unexpectedly due to multi-threading.",
                            "49. while - Starts a while loop.",
                        ]
                    }
                ]
            }
        }
    ]

    const topics = ["Variable", "Keywords"];

    const { topicNameKey } = useParams(); // Get topic from URL

    const topicDetails = topicNameKey !== undefined ? topicsDetials.find((t) => t.topicKey === topicNameKey) :
        topicsDetials.find((t) => t.topicKey === "Variable");
    const topicsAndContents = topicDetails ? topicDetails.topicValue : null;

    return (
        <div className='main-container'>
            <div style={{ width: '200px' }}>
                {/* Navigation Links to Other Topics */}
                <h3>Topics:</h3>
                <ul>
                    {topics
                        .map((t, index) => (
                            <li key={index}>
                                <Link to={`/topic/${t}`}>{t}</Link>
                            </li>
                        ))}
                </ul>

                {/* Back to Topics List */}
                {/* <Link to="/">Home</Link> */}
            </div>
            <div className="sidebar-container">
                {topicsAndContents !== null ?
                    <div>
                        <h2>Learning Objective</h2>
                        <p>After reading this article what do you get from us:</p>
                        <ul>
                            {topicsAndContents.whatYouGet.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </div> : <h2>Content Not Yet Avaiable:</h2>
                }
            </div>
            <div className="content-container">
                {topicsAndContents.mainContent.map((content, i) => (
                    <div key={i}>
                        <h2>{content.topicName}</h2>
                        <p>{content.topicContent}</p>
                        <ul>
                            {content.topicPoints ? content.topicPoints.map((contentPoints, pointsIndex) => {
                                return <li key={pointsIndex}>{contentPoints}</li>
                            }) : ""}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Content;