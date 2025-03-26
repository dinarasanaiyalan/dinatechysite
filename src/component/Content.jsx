import React from 'react'
import { useParams } from 'react-router-dom';

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
                            "abstract - Defines an abstract class that cannot be instantiated.",
                            "assert - Used for debugging purposes to test assumptions in code.",
                            "boolean - A data type that can hold only true or false values.",
                            "break - Exits from a loop or switch statement immediately.",
                            "byte - A data type that holds 8-bit integer values.",
                            "case - Defines a case in a switch statement.",
                            "catch - Handles exceptions thrown in a try block.",
                            "char - A data type that holds a single 16-bit Unicode character.",
                            "class - Defines a new class in Java.",
                            "continue - Skips the current iteration of a loop and moves to the next iteration.",
                            "default - Specifies the default block of code in a switch statement.",
                            "do - Starts a do-while loop, which executes at least once.",
                            "double - A data type for storing 64-bit floating-point numbers.",
                            "else - Defines an alternative branch in an if statement.",
                            "enum - Defines a fixed set of constants.",
                            "extends - Indicates that a class is inheriting from another class.",
                            "final - Defines constants, prevents method overriding, and class inheritance.",
                            "finally - Defines a block that always executes after a try-catch block.",
                            "float - A data type for storing 32-bit floating-point numbers.",
                            "for - Starts a for loop.",
                            "if - Defines a conditional statement.",
                            "implements - Indicates that a class implements an interface.",
                            "import - Imports a package or a class.",
                            "instanceof - Checks if an object is an instance of a specific class or subclass.",
                            "int - A data type for storing 32-bit integer values.",
                            "interface - Defines an interface that classes can implement.",
                            "long - A data type for storing 64-bit integer values.",
                            "native - Indicates that a method is implemented in native code (e.g., C/C++).",
                            "new - Creates a new instance of a class.",
                            "null - Represents a null reference.",
                            "package - Defines a package for organizing classes.",
                            "private - Specifies private access control.",
                            "protected - Specifies protected access control.",
                            "public - Specifies public access control.",
                            "return - Returns a value from a method.",
                            "short - A data type for storing 16-bit integer values.",
                            "static - Defines a static method or variable.",
                            "strictfp - Ensures consistent floating-point calculations across platforms.",
                            "super - Refers to the parent class.",
                            "switch - Starts a switch statement.",
                            "synchronized - Ensures thread safety by synchronizing a method or block.",
                            "this - Refers to the current instance of the class.",
                            "throw - Throws an exception.",
                            "throws - Declares exceptions that a method may throw.",
                            "transient - Prevents serialization of a variable.",
                            "try - Starts a try block for exception handling.",
                            "void - Specifies that a method does not return a value.",
                            "volatile - Indicates that a variable's value may change unexpectedly due to multi-threading.",
                            "while - Starts a while loop.",
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Operator",
            topicValue: {
                whatYouGet: ['What it is?', 'Why we need this?', 'When we need to use?'],
                mainContent: [
                    {
                        topicName: "Operators",
                        topicPoints: [
                            "Arithmetic Operators - Used for basic math operations (+, -, *, /, %)",
                            "Relational Operators	- Used to compare values (==, !=, >, <, >=, <=)",
                            "Logical Operators	- Used for boolean logic (&&, ||)",
                            "Bitwise Operators	- Used for bit-level operations (&, |)",
                            "Assignment Operators	- Used to assign values (=, +=, -=, *=, /=, %=)",
                            "Unary Operators	- Used for single operand operations (+, -, ++, --, ~, !)",
                            "Ternary Operator	- Used as a shortcut for if-else (condition ? expr1 : expr2)",
                            "instanceof Operator	- Checks object type (obj instanceof Class)"
                        ]
                    }, {
                        topicName: "Relational(Comparision) Operators",
                        topicPoints: [
                            "10 == 10 --> if both are equal it's true, otherwise false",
                            "10 != 10 --> if both are not equal it's true, otherwise false",
                            "10 > 10 --> if left value is greater than right value it's true, otherwise false",
                            "10 < 10 --> if left value is lesser than right value it's true, otherwise false",
                            "10 >= 10 --> if left value is greater than right value or left value and right are equal it's true, otherwise false",
                            "10 <= 10 --> if left value is lesser than right value or left value and right are equal it's true, otherwise false",
                        ]
                    }, {
                        topicName: "Bitwise Operators",
                        topicPoints: [
                            "& Bitwise AND - it will check all the condition, even if the first condition is false.",
                            "| Bitwise OR - it will check all the condition, even if the first condition is true.",
                            "10 != 0 & 10 == 10 - & Bitwise AND - it will return true only all the condition's are satisfied, otherwise false.",
                            "10 != 0 | 10 == 10 - | Bitwise OR - it will return true if any one of the condition's is satisfied, otherwise false."
                        ]
                    }, {
                        topicName: "Logical Operators",
                        topicPoints: [
                            "&& Logical AND - it won't check all the condition, if the first condition is false.",
                            "|| Logical OR - it won't check all the condition, if the first condition is true.",
                            "10 != 0 && 10 == 10 - && Logical AND - it will return true only all the condition's are satisfied, otherwise false.",
                            "10 != 0 || 10 == 10 - || Logical OR - it will return true if any one of the condition's is satisfied, otherwise false."
                        ]
                    }, {
                        topicName: "Unary Operators",
                        topicPoints: [
                            "++ --> Increment Operator --> 1. Pre-Increment, 2. Post Increment",
                            "-- --> Decrement Operator --> 1. Pre-Decrement, 2. Post Decrement",
                            "Pre - Increment - Decrement : it will change the value here and reflect it here also.",
                            "Post - Increment - Decrement : it will change the value here and won't reflect it here also."
                        ]
                    }, {
                        topicName: "Conditional Operator",
                        topicContent: "The conditional operator in Java, also known as the ternary operator (? :), is a shorthand for the if-else statement. It allows for a compact way to write conditional expressions.",
                        topicPoints: [
                            "Condition: A boolean expression (true or false).",
                            "value_if_true: The value assigned if the condition is true.",
                            "value_if_false: The value assigned if the condition is false.",
                            "Example : int min = (a < b) ? a : b;"
                        ],
                        topicExample: [
                            "public class TernaryExample {",
                            " public static void main(String[] args) {",
                            "  int a = 10, b = 20;",
                            "  int min = (a < b) ? a : b;",
                            "  System.out.println('Minimum value: ' + min);",
                            " }", "}","Output : Minimum value: 10"
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Control Statements",
            topicValue: {
                whatYouGet: ['What it is?', 'Why we need this?', 'When we need to use?'],
                mainContent: [
                    {
                        topicName: "Control Statements",
                        topicContent: "Control statements in Java manage the flow of program execution. They allow us to make decisions, repeat actions, and jump between statements."
                    },{
                        topicName: "Types of Control Statements",
                        topicContent: "Control statements are categorized into three main types:",
                        topicPoints: [
                            "Selection (Decision-Making) Statements",
                            "Looping (Iteration) Statements",
                            "Jump Statements"
                        ]
                    },{
                        topicName: "Selection (Decision-Making) Statements",
                        topicContent: "Selection statements allow the program to make decisions based on conditions. They control the flow of execution by choosing different paths.",
                        topicPoints: [
                            "if Statement – Executes a block of code if a condition is true",
                            "if-else Statement – Executes one block if true, another if false.",
                            "if-else-if Ladder – Used for multiple conditions.",
                            "switch Statement – Selects one case out of many based on a value."
                        ]
                    },{
                        topicName: "Looping (Iteration) Statements",
                        topicContent: "Looping statements are used to repeat a block of code multiple times based on a condition. We need to give an range(start value and end value). Without range loop will throw an error or it goes to infinite loop state.",
                        topicPoints: [
                            "for Loop – Runs a block of code a specific number of times.",
                            "while Loop – Repeats while a condition is true.",
                            "do-while Loop – Runs at least once, then repeats while true."
                        ]
                    },{
                        topicName: "Jump Statements",
                        topicContent: "Jump statements alter the normal flow of execution by jumping to different parts of the program.",
                        topicPoints: [
                            "break – Exits a loop or switch statement.",
                            "continue – Skips the current iteration and moves to the next one.",
                            "return – Exits from a method."
                        ]
                    }
                ]
            }
        }
    ]

    const { topicNameKey } = useParams(); // Get topic from URL

    const topicDetails = topicNameKey !== undefined ? topicsDetials.find((t) => t.topicKey === topicNameKey) :
        topicsDetials.find((t) => t.topicKey === "Variable");
    const topicsAndContents = topicDetails ? topicDetails.topicValue : null;

    return (
        <div className='main-container'>
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
                        <ol>
                            {content.topicPoints ? content.topicPoints.map((contentPoints, pointsIndex) => {
                                return <li key={pointsIndex}>{contentPoints}</li>
                            }) : ""}
                        </ol>
                        {content.topicExample ?
                            <div className="card bg-dark text-white">
                                <div className="card-body">
                                    <pre className="mb-0">
                                        <ul className='code-container'>
                                            {content.topicExample.map((example, exampleIndex) => {
                                                return <li key={exampleIndex}>{example}</li>
                                            })}
                                        </ul>
                                    </pre>
                                </div>
                            </div>
                            : ""
                        }
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Content;