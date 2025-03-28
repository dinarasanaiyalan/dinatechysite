import { createContext } from "react";

export const TopicsContext = createContext();

export const TopicsProvider = ({ children }) => {
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
                            " }", "}", "Output : Minimum value: 10"
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
                    }, {
                        topicName: "Types of Control Statements",
                        topicContent: "Control statements are categorized into three main types:",
                        topicPoints: [
                            "Selection (Decision-Making) Statements",
                            "Looping (Iteration) Statements",
                            "Jump Statements"
                        ]
                    }, {
                        topicName: "Selection (Decision-Making) Statements",
                        topicContent: "Selection statements allow the program to make decisions based on conditions. They control the flow of execution by choosing different paths.",
                        topicPoints: [
                            "if Statement – Executes a block of code if a condition is true",
                            "if-else Statement – Executes one block if true, another if false.",
                            "if-else-if Ladder – Used for multiple conditions.",
                            "switch Statement – Selects one case out of many based on a value."
                        ]
                    }, {
                        topicName: "Looping (Iteration) Statements",
                        topicContent: "Looping statements are used to repeat a block of code multiple times based on a condition. We need to give an range(start value and end value). Without range loop will throw an error or it goes to infinite loop state.",
                        topicPoints: [
                            "for Loop – Runs a block of code a specific number of times.",
                            "while Loop – Repeats while a condition is true.",
                            "do-while Loop – Runs at least once, then repeats while true."
                        ]
                    }, {
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
        }, {
            topicKey: "Decision-Making Statements",
            topicValue: {
                whatYouGet: ['What it is?', 'Why we need this?', 'When we need to use?'],
                mainContent: [
                    {
                        topicName: "If Statement",
                        topicPoints: [
                            "The if statement executes a block of code only if the specified condition is true.",
                            "If the condition evaluates to false, the code inside the if block is skipped.",
                            "It is commonly used for simple decision-making scenarios.",
                            "Syntax: if (condition) { // code to execute }"
                        ]
                    },
                    {
                        topicName: "If-Else Statement",
                        topicPoints: [
                            "The if-else statement provides two execution paths based on the condition.",
                            "If the condition is true, the if block executes; otherwise, the else block executes.",
                            "Used when we need an alternative action if the primary condition fails.",
                            "Example: if (age >= 18) { System.out.println('Eligible to vote'); } else { System.out.println('Not eligible to vote'); }"
                        ]
                    },
                    {
                        topicName: "Else-If Ladder",
                        topicPoints: [
                            "The else-if ladder allows checking multiple conditions sequentially.",
                            "If one condition is true, its corresponding block executes, skipping the rest.",
                            "Used when we need to evaluate multiple conditions in order.",
                            "Example: if (marks >= 90) { grade = 'A'; } else if (marks >= 80) { grade = 'B'; } else { grade = 'C'; }"
                        ]
                    },
                    {
                        topicName: "Nested If Statement",
                        topicPoints: [
                            "A nested if statement is an if statement inside another if statement.",
                            "It allows testing multiple conditions where one condition depends on another.",
                            "Used when decisions require multiple levels of validation.",
                            "Example: if (age >= 18) { if (hasID) { System.out.println('Allowed entry'); } }"
                        ]
                    },
                    {
                        topicName: "Switch Statement",
                        topicPoints: [
                            "The switch statement allows selecting one block of code from multiple options.",
                            "It evaluates an expression and matches it against defined case values.",
                            "If no case matches, the default block executes (if provided).",
                            "Example: switch(day) { case 'Monday': System.out.println('Start of the week'); break; default: System.out.println('Unknown day'); }"
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Looping Statements",
            topicValue: {
                whatYouGet: ['What it is?', 'Why we need this?', 'When we need to use?'],
                mainContent: [
                    {
                        topicName: "For Loop",
                        topicPoints: [
                            "It is entry check loop.",
                            "It first checks the condition, if the condition is satisfied then only loop will execute, otherwise won't execute.",
                            "It contains three areas, (initialization; condition; increment/decrement)",
                            "Initialization - will execute only once, at the start of the loop",
                            "Condition - it will execute every time.",
                            "Incre/Decre - it will also execute every time, but at the end of each loop.",
                            "We can use it where the end value is known"
                        ],
                        topicExample: [
                            "public class ForExample{",
                            " public static void main(String[] args){",
                            "  for(int i=1; i<11; i++){ // 1 < 11 - true 2 < 11 - true ..... 10<11 - true --> 11 < 11 - false",
                            "    System.out.print(i+' '); // 1 2 .... 10",
                            "  }",
                            " }","}","Output:","  1 2 3 4 5 6 7 8 9 10"
                        ]
                    }, {
                        topicName: "While Loop",
                        topicPoints: [
                            "It is also entry check loop.",
                            "It first checks the condition, if the condition is satisfied then only loop will execute.",
                            "Otherwise won't execute.",
                            "It contains three areas, (initialization; condition; increment/decrement).",
                            "Initialization - will execute only once, at the start of the loop.",
                            "Condition - it will execute every time.",
                            "Incre/Decre - it will also execute every time, but at the end of each loop.",
                            "We can use it where the end value is Unknown."
                        ],
                        topicExample: [
                            "public class WhileExample{",
                            " public static void main(String[] args){",
                            "  int j=1;// 1 2 ... 11",
                            "  while(j<=10) { // 1<=10 - true --> 2>=10 - true ... 11>=10 - false",
                            "     // to print only the odd numbers",
                            "     if(j%2!=0) {",
                            "         System.out.print(j+' ');",
                            "     }",
                            "     j++;",
                            "   }",
                            " }","}","Output:","  1 3 5 7 9"
                        ]
                    },{
                        topicName: "Do-While Loop",
                        topicPoints: [
                            "It is also exit check loop.",
                            "For this reason, the set of statements inside the do-while loop will execute once even if the condition is not satisfied.",
                            "It contains three areas, (initialization; condition; increment/decrement).",
                            "Initialization - will execute only once, at the start of the loop.",
                            "Condition - it will execute every time.",
                            "Incre/Decre - it will also execute every time, but at the end of each loop.",
                            "we can use it where we need to execute the statements even once still the condition is false."
                        ],
                        topicExample: [
                            "public class DoWhileExample{",
                            " public static void main(String[] args){",
                            "  int k=55;// 55 54",
                            "  do {",
                            "     if(k%2==0) { // (55%2) - 1 == 0 - false --> (54%2) - 0 == 0 - true ....",
                            "         System.out.print(k+' ');",
                            "     }",
                            "     k--;",
                            "  }while(k>=32); // 55>=32 - true --> 54>=32 --> true",
                            " }","}","Output:","  54 52 50 48 46 44 42 40 38 36 34 32"
                        ]
                    },
                ]
            }
        }, {
            topicKey: "Jump Statements",
            topicValue: {
                whatYouGet: ['What it is?', 'Why we need this?', 'When we need to use?'],
                mainContent: [
                    {
                        topicName: "continue",
                        topicPoints: [
                            "The continue statement skips the current iteration of a loop and moves to the next iteration. It is used to avoid executing certain statements inside a loop when a specific condition is met.",
                            "When continue is encountered, the remaining code in the current iteration is skipped, and the loop proceeds to the next iteration.",
                            "It can be used inside for, while, and do-while loops only.",
                            "Often used to skip specific values or conditions inside a loop without stopping the entire loop.",
                            "Unlike break, which exits the loop, continue only skips the current iteration and continues execution."
                        ],
                        topicExample: [
                            "public class ContinueExample{",
                            " public static void main(String[] args){",
                            "  for(int i=1; i<11; i++){",
                            "    System.out.print(i+' ');",
                            "    if(a==5)",
				            "       continue;",
                            "    System.out.print(i+' ');",
                            "  }",
                            " }","}",
                            "Output:",
                            "  1 1 2 2 3 3 4 4 5 6 6 7 7 8 8 9 9 10 10",
                            "Because of continue keyword 5 won't print second time."
                        ]
                    },{
                        topicName: "break",
                        topicPoints: [
                            "The break statement immediately exits a loop or a switch statement when it is encountered. It is used to terminate the loop early based on a condition.",
                            "When break is encountered inside a loop, the loop stops executing, and control moves to the next statement after the loop.",
                            "It can be used inside for, while, do-while, and switch statements to exit early.",
                            "break is often used when a certain condition is met, and further looping is unnecessary.",
                            "It improves efficiency by stopping the loop once the required condition is satisfied, instead of running unnecessary iterations."
                        ],
                        topicExample: [
                            "public class BreakExample{",
                            " public static void main(String[] args){",
                            "  for(int i=1; i<11; i++){",
                            "    System.out.print(i+' ');",
                            "    if(a==5)",
				            "       break;",
                            "  }",
                            " }","}",
                            "Output:",
                            "  1 2 3 4 5",
                            "Because of break keyword after printing 5 the loop will be terminated."
                        ]
                    },{
                        topicName: "return",
                        topicPoints: [
                            "The return statement exits from a method and optionally returns a value to the caller. It is used to terminate a method execution and send a result back to the calling function.",
                            "When return is encountered, the method stops execution and control goes back to the calling function.",
                            "In methods with a return type (int, String, etc.), return must return a value.",
                            "The data type of the returned value must match the method’s declared return type.",
                            "return is commonly used in methods that compute values and send results back for further use."
                        ],
                        topicExample: [
                            "public class BreakExample{",
                            " public static void checkAge(int age) {",
                            "    if (age < 18) {",
                            "       System.out.println('Not eligible to vote');",
                            "       return; // Exits the method early",
                            "   }",
                            "   System.out.println('Eligible to vote');",
                            " }",
                            " public static void main(String[] args){",
                            "  checkAge(16);",
                            "  checkAge(20);",
                            " }","}",
                            "Output:",
                            "  Not eligible to vote",
                            "  Eligible to vote"
                        ]
                    }
                ]
            }
        }, {
            topicKey: "OOPS",
            topicValue: {
                whatYouGet: ['What it is?', 'Why we need this?', 'When we need to use?'],
                mainContent: [
                    {
                        topicName: "OOPS (Object-Oriented Programming System)",
                        topicContent: "Object-Oriented Programming System (OOPS) is a programming paradigm based on the concept of objects and classes. It allows structuring programs in a way that models real-world entities using objects."
                    },
                    {
                        topicName: "Why Do We Need OOPS?",
                        topicPoints:[
                            "Encapsulation – Protects data by bundling variables and methods within a class.",
                            "Code Reusability – Allows code reuse through inheritance, reducing redundancy.",
                            "Data Security – Uses access modifiers (private, protected, public) to restrict unauthorized access.",
                            "Better Code Maintenance – Makes code easier to modify, debug, and extend.",
                            "Enhances Readability & Modularity – Structures code into classes and objects, improving organization.",
                            "Supports Real-World Modeling – Helps design programs that closely resemble real-world objects and interactions."
                        ]
                    },
                    {
                        topicName: "Importance of OOPS in Java",
                        topicPoints: [
                            "Foundation of Java – Java is an object-oriented language; OOPS is its core concept.",
                            "Improves Code Maintainability – Makes software development scalable and manageable.",
                            "Reduces Code Duplication – Through inheritance, child classes reuse parent class functionality.",
                            "Supports Large-Scale Development – Helps build complex applications efficiently.",
                            "Encourages Code Reusability – Objects can be used multiple times without rewriting logic.",
                            "Increases Software Reliability – Encourages modular and secure coding practices."
                        ]    
                    },
                    {
                        topicName: "Features of OOPS",
                        topicPoints: [
                            "Class and Object – A class is a blueprint, and an object is an instance of a class.",
                            "Encapsulation – Hides data using private access and provides controlled access via methods.",
                            "Abstraction – Hides unnecessary details and exposes only the relevant functionalities.",
                            "Inheritance – Enables a child class to inherit properties and behavior from a parent class.",
                            "Polymorphism – Allows multiple methods or operations to be performed using the same name (method overloading & overriding).",
                            "Message Passing – Objects communicate with each other using method calls.",
                            "Dynamic Binding – The method that needs to be executed is determined at runtime."
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Class",
            topicValue: {
                whatYouGet: ['What it is?', 'Why we need this?', 'When we need to use?'],
                mainContent: [
                    {
                        topicName: "Class",
                        topicContent: "A class in Java is a blueprint or template for creating objects. It defines properties (fields/variables) and behaviors (methods/functions) that an object can have."
                    },
                    {
                        topicName: "Why Do We Need a Class?",
                        topicPoints: [
                            "Encapsulation of Data & Behavior – A class groups variables and methods into a single unit.",
                            "Code Reusability – We can create multiple objects from the same class, avoiding code duplication.",
                            "Modularity & Organization – A class helps organize code logically, making it easier to manage.",
                            "Object-Oriented Programming (OOP) Support – A class enables OOP principles like inheritance, polymorphism, and abstraction."
                        ]
                    },{
                        topicName: "Importance of Class in Java",
                        topicPoints: [
                            "Foundation of Java Programming – Every Java program is based on a class.",
                            "Enables Object Creation – Objects are instantiated from classes, allowing real-world modeling.",
                            "Enhances Maintainability – Code is easier to modify and extend when structured in classes.",
                            "Supports Data Hiding – Access modifiers (private, public, protected) help control data access."
                        ]
                    },{
                        topicName: "Example: Creating and Using a Class in Java",
                        topicExample: [
                            "// Defining a class",
                            "class Car {",
                            "   // Data members (fields)",
                            "   String brand;",
                            "   int speed;",
                            "   // Constructor",
                            "   Car(String brand, int speed) {",
                            "       this.brand = brand;",
                            "       this.speed = speed;",
                            "   }",
                            "   // Method to display car details",
                            "   void showDetails() {",
                            "       System.out.println('Brand: ' + brand);",
                            "       System.out.println('Speed: ' + speed + ' km/h');",
                            "   }",
                            "}",
                            "// Main class to use the Car class",
                            "public class CarExample {",
                            "   public static void main(String[] args) {",
                            "       // Creating an object of the Car class",
                            "       Car myCar = new Car('Toyota', 120);",  
                            "       // Calling method to display details",
                            "       myCar.showDetails();",
                            "   }",
                            "}",
                            "Output:",
                            "  Brand: Toyota",
                            "  Speed: 120 km/h"
                        ]
                    }
                ]
            }
        }
    ];

    return (
        <TopicsContext.Provider value={{ topicsDetials }}>
            {children}
        </TopicsContext.Provider>
    );
};
