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
        }, {
            topicKey: "Object",
            topicValue: {
                whatYouGet: ['What it is?', 'Why we need this?', 'When we need to use?'],
                mainContent: [
                    {
                        topicName: "Object",
                        topicContent: "An object is an instance of a class. It represents a real-world entity with state (attributes) and behavior (methods).",
                        topicPoints: [
                            "Example: A Car is a class, and a specific Toyota car is an object with attributes like color, speed, and model."
                        ]
                    },{
                        topicName: "Why Do We Need an Object?",
                        topicPoints: [
                            "Represents Real-World Entities – Objects allow programs to model real-world entities like cars, employees, and bank accounts.:",
                            "Encapsulates Data and Behavior – Objects bundle variables (state) and methods (behavior) together.",
                            "Supports Code Reusability – Multiple objects can be created from the same class, reducing code duplication.",
                            "Facilitates Object-Oriented Programming (OOP) – Java is based on objects; without them, OOP cannot be implemented.",
                            "Enables Dynamic Memory Allocation – Objects are stored in the heap memory, making Java programs efficient."
                        ]
                    },{
                        topicName: "Importance of Objects in Java",
                        topicPoints: [
                            "Foundation of Java Programs – Every Java program uses objects to execute methods and store data.",
                            "Allows Data Manipulation – Objects interact with each other to process and exchange information.",
                            "Enhances Code Modularity – Objects enable breaking large programs into small, reusable parts.",
                            "Improves Maintainability – Since objects encapsulate state and behavior, managing and modifying code is easier.",
                            "Supports Message Passing – Objects communicate by calling each other's methods, making systems interactive."
                        ]
                    },{
                        topicName: "Features of an Object in Java",
                        topicPoints: [
                            "State (Attributes) – The object's properties (e.g., color, speed for a car).",
                            "Behavior (Methods) – The object's actions (e.g., drive(), brake() for a car).",
                            "Identity – Each object has a unique reference in memory.",
                            "Encapsulation – Objects keep their data secure using access modifiers (private, public).",
                            "Reusability – Objects of the same class share structure and behavior, reducing redundant code."
                        ]
                    },{
                        topicName: "Example: Creating and Using an Object in Java",
                        topicExample: [
                            "// Defining a class",
                            "class Car {",
                            "   // Attributes (State)",
                            "   String brand;",
                            "   int speed;",
                            "   // Constructor",
                            "   Car(String brand, int speed) {",
                            "      this.brand = brand;",
                            "        this.speed = speed;",
                            "   }",
                            "   // Method (Behavior)",
                            "   void showDetails() {",
                            "       System.out.println('Brand: ' + brand);",
                            "       System.out.println('Speed: ' + speed + ' km/h');",
                            "   }",
                            "}",
                            "// Main class to create and use objects",
                            "public class ObjectExample {",
                            "   public static void main(String[] args) {",
                            "       // Creating an object of the Car class",
                            "       Car myCar = new Car('Toyota', 120);",       
                            "       // Calling method to display object details",
                            "       myCar.showDetails();",
                            "   }",
                            "}"
                        ]
                    },
                ]
            }
        }, {
            topicKey: "Array",
            topicValue: {
                whatYouGet: ['What it is?', 'Why we need this?', 'When we need to use?'],
                mainContent: [
                    {
                        topicName: "Array",
                        topicContent: "An array in Java is a collection of elements of the same data type stored in contiguous memory locations. It allows storing multiple values under a single variable name instead of creating separate variables for each value.",
                        topicPoints: [
                            "Example: A Car is a class, and a specific Toyota car is an object with attributes like color, speed, and model."
                        ]
                    },{
                        topicName: "Why Do We Need an Array?",
                        topicPoints: [
                            "Stores Multiple Values Efficiently – Instead of creating separate variables, we store multiple values in a single structure.",
                            "Reduces Code Complexity – Using arrays simplifies code by allowing easy storage and retrieval of elements.",
                            "Supports Indexed Access – Elements are accessed using an index (0-based), making data retrieval faster.",
                            "Enhances Performance – Arrays improve memory management and execution speed by storing elements in contiguous memory locations.",
                            "Essential for Data Structures – Arrays form the basis for advanced data structures like lists, stacks, and queues."
                        ]
                    },{
                        topicName: "Importance of Arrays in Java",
                        topicPoints: [
                            "Efficient Data Storage – Arrays store multiple elements in an organized manner using indexing.",
                            "Facilitates Iteration – Easily loop through elements using for or for-each loops.",
                            "Optimized Memory Usage – Arrays store elements without memory overhead associated with individual variables.",
                            "Foundation for Advanced Algorithms – Sorting, searching, and mathematical computations rely on arrays.",
                            "Supports Multi-Dimensional Data Representation – Arrays allow creating 2D (matrices) and 3D structures for complex computations."
                        ]
                    },{
                        topicName: "Features of Arrays in Java",
                        topicPoints: [
                            "Fixed Size – The array size is defined at the time of declaration and cannot change dynamically.",
                            "Homogeneous Elements – All elements must be of the same data type.",
                            "Indexed Access – Elements are accessed using 0-based indexing (first element at index 0).",
                            "Efficient Element Retrieval – Accessing elements is fast due to direct memory addressing.",
                            "Supports Primitive & Object Types – Arrays store both primitive data types (int, double, etc.) and objects."
                        ]
                    },{
                        topicName: "Example: Declaring and Using an Array in Java",
                        topicExample: [
                            "public class ArrayExample {",
                            " public static void main(String[] args) {",
                            "  //Syntax : ",
                            "  //   data_type[] var_name = new data_type[length];",
                            "  //   data_type[] var_name = {val1, val2,,,, valn};",
                            "  //   varname[index]; to fetch the value or element",
                            "  //   varname[index] = value; to append value to the array - we can only do this using the index.",
                            "   int[] arr1 = new int[5]; // length = 5, index = 5-1 = 4",
		                    "   System.out.println(arr1.length);// it will give the length of the array based on Number of value or element.",
                            "   arr1[3] = 78;",
                            "   System.out.println(arr1[3]);",
                            "   double[] arr2 = {23.5,56.4,89,98.0,78,67}; // length = 6, index = 6-1 = 5",
		                    "   System.out.println(arr2.length);",
                            "   System.out.println(arr2[3]);",
                            "   // Iteration into Array using for loop",
                            "   int arrSize = arr2.length;",
                            "   for(int i=0; i<arrSize; i++) {",
                            "     System.out.print(arr2[i]+' ');// 0, 1, 2, 3, 4, 5, 6 - false",
                            "   }",
                            " }",
                            "}",
                            "Output : ",
                            "  5",
                            "  78",
                            "  6",
                            "  98.0",
                            "  23.5 56.4 89 98.0 78 67"
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Types of Array",
            topicValue: {
                whatYouGet: ['What it is?', 'Why we need this?', 'When we need to use?'],
                mainContent: [
                    {
                        topicName: "Types of Array",
                        topicContent: "In Java, arrays are used to store multiple values of the same data type in a single variable. There are mainly two types of arrays in Java."
                    },{
                        topicName: "One-Dimensional Array (1D Array)",
                        topicContent: "A one-dimensional array is the simplest type of array, where elements are stored in a single row (or list format).",
                        topicPoints: [
                            "Elements are stored in a linear format.",
                            "Access elements using indexing (0-based index).",
                            "Mostly used for storing lists of values (e.g., marks of students, employee IDs)."
                        ],
                        topicExample: [
                            "public class OneDArrayExample {",
                            "    public static void main(String[] args) {",
                            "       int[] numbers = {10, 20, 30, 40, 50}; // Declaring and initializing 1D array",
                            "       // Accessing array elements",
                            "       for (int num : numbers) {",
                            "           System.out.print(num+' ');",
                            "       }",
                            "   }",
                            "}",
                            "Output: ",
                            "  10 20 30 40 50"

                        ]
                    },{
                        topicName: "Multi-Dimensional Arrays (2D & 3D Arrays)",
                        topicContent: "A multi-dimensional array stores elements in multiple rows and columns, like a matrix or table. The most common type is the 2D array, but Java also supports higher-dimensional arrays (like 3D arrays)."
                    },{
                        topicName: "Two-Dimensional Array (2D Array)",
                        topicContent: "A 2D array stores values in the form of rows and columns (matrix format).",
                        topicPoints: [
                            "Used for storing tabular data like matrices, spreadsheets, or images.",
                            "Elements are accessed using two indices (matrix[row][column]).",
                            "Commonly used in game development, image processing, and scientific computing."
                        ],
                        topicExample: [
                            "public class TwoDArrayExample {",
                            "   public static void main(String[] args) {",
                            "       int[][] matrix = {",
                            "           {1, 2, 3},",
                            "           {4, 5, 6},",
                            "           {7, 8, 9}",
                            "       };",
                            "       // Accessing elements using nested loops",
                            "       for (int i = 0; i < 3; i++) {",
                            "           for (int j = 0; j < 3; j++) {",
                            "               System.out.print(matrix[i][j] + ' ');",
                            "           }",
                            "           System.out.println(); // New line for each row",
                            "       }",
                            "   }",
                            "}",
                            "Output: ",
                            "  1 2 3",
                            "  4 5 6",
                            "  7 8 9"
                        ]
                    },{
                        topicName: "Three-Dimensional Array (3D Array)",
                        topicContent: "A 3D array is an extension of a 2D array where elements are stored in layers (like multiple matrices stacked together).",
                        topicPoints: [
                            "Used in complex data structures like 3D gaming, scientific simulations, and mathematical calculations.",
                            "Access elements using three indices (cube[layer][row][column])."
                        ],
                        topicExample: [
                            "public class ThreeDArrayExample {",
                            "   public static void main(String[] args) {",
                            "       int[][][] cube = {",
                            "           { {1, 2}, {3, 4} },",
                            "           { {5, 6}, {7, 8} }",
                            "       };",
                            "       // Accessing elements",
                            "       for (int i = 0; i < 2; i++) {",
                            "           for (int j = 0; j < 2; j++) {",
                            "               for (int k = 0; k < 2; k++) {",
                            "                   System.out.print(cube[i][j][k] + ' ');",
                            "               }",
                            "               System.out.println();",
                            "           }",
                            "       }",
                            "   }",
                            "}",
                            "Output: ",
                            "  1 2",
                            "  3 4",
                            "  5 6",
                            "  7 8"
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Inheritance",
            topicValue: {
                whatYouGet: ['What it is?', 'Why we need this?', 'When we need to use?'],
                mainContent: [
                    {
                        topicName: "Inheritance",
                        topicContent: "Inheritance is a core Object-Oriented Programming (OOP) concept in Java that allows one class to acquire the properties and behaviors of another class. It helps in code reusability, extensibility, and maintainability by enabling the creation of a hierarchy where a child class (subclass) inherits from a parent class (superclass). This means the child class can use the attributes and methods of the parent class, reducing code duplication. In Java, inheritance is implemented using the extends keyword, making it easier to develop scalable and structured applications."
                    },{
                        topicName: "Why do we need Inheritance?",
                        topicPoints: [
                            "Code Reusability – Avoids writing the same code multiple times by reusing existing code.",
                            "Improves Maintainability – Updates or bug fixes in the parent class automatically reflect in child classes.",
                            "Extensibility – Allows adding new features to an existing class without modifying it.",
                            "Enhances Readability – Organizes code in a hierarchical structure, making it more understandable.",
                            "Reduces Code Duplication – Promotes efficient memory usage and reduces redundancy."
                        ]
                    },{
                        topicName: "When do we need Inheritance?",
                        topicPoints: [
                            "When multiple classes share common attributes and behaviors – Instead of redefining common properties, we can inherit them.",
                            "When we want to extend the functionality of an existing class – Adding extra methods or overriding existing ones without modifying the original class.",
                            "When we need a hierarchical structure – For example, in an employee management system, we may have a base class Employee and subclasses like Manager, Developer, and Intern.",
                            "When implementing polymorphism – Inheritance helps achieve method overriding, which allows different implementations of the same method in different classes.",
                            "When following the DRY principle (Don’t Repeat Yourself) – Ensures efficient, structured, and reusable code."
                        ]
                    },{
                        topicName: "Types of Inheritance",
                        topicPoints: [
                            "Single Inheritance",
                            "Multiple Inheritance",
                            "Multi-level Inheritance",
                            "Hierarchical Inheritance",
                            "Hybrid Inheritance"
                        ]
                    },{
                        topicName: "How to Implement Inheritance in Java?",
                        topicExample: [
                            "// Parent class (Super class)",
                            "class Animal {",
                            "   void eat() {",
                            "       System.out.println('This animal eats food.');",
                            "   }",
                            "}",
                            "// Child class (Subclass) inheriting Animal",
                            "class Dog extends Animal {",
                            "   void bark() {",
                            "       System.out.println('The dog barks.');",
                            "   }",
                            "}",
                            "// Main class to test Inheritance",
                            "public class InheritanceExample {",
                            "   public static void main(String[] args) {",
                            "       Dog myDog = new Dog();",
                            "       myDog.eat();  // Inherited method from Animal class",
                            "       myDog.bark(); // Dog's own method",
                            "   }",
                            "}",
                            "Output:",
                            "   This animal eats food.",
                            "   The dog barks."
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Constructor",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "Constructor",
                        topicContent: "Constructor's are used to create Object and initialize Instance variable's. If we didn't create any User-defined constructor, at the Runtime Compiler will create one Pre-defined Constructor with No-Parameter in it.",
                        topicPoints: [
                            "Constructor name must be same as Class Name. So, if we didn't create any User-defined constructor, we don't need to worry about the Constructor name for Object creation, instead simply use Class name.",
                            "A constructor does not have a return type, not even void.",
                            "Constructor is automatically called when an object is created, marking it as static, final, or abstract causes an error.",
                            "If you need to use super() or this() in Constructor, then it must Be the First Statement, Otherwise it throw an error.",
                            "Constructor can't be inherited, but a Sub class can call Parent Class Constructor using super() method, the process is called Constructor Calling Chain.",
                            "We can't call Constructor explicitly like a method, if we do it will throw an error."
                        ]
                    },{
                        topicName: "Example : ",
                        topicExample: [
                            "class Car {",
                            "   void CarBrand() { // ❌ Error: Constructor name should be 'Car' and shouldn't have return type",
                            "      System.out.println('Car Constructor');",
                            "   }",
                            "   static final Student() { // ❌ Error: Constructors cannot be static or final",
                            "       System.out.println('Final Constructor');",
                            "   }",
                            "   Car(String brand) { // ✅ Constructor name matches the class name and without return type",
                            "       System.out.println('Car Constructor');",
                            "   }",
                            "   public static void main(String[] args) {",
                            "       Car carOne = new Car(); // ❌ Error: No default constructor",
                            "       Car carTwo = new Car('Hundai'); // ✅ works fine",
                            "       carTwo.Car('Swift'); // ❌ Error: Cannot call constructor explicitly",
                            "   }",
                            "}",
                            "class Brand extends Car{",
                            "   Brand(){",
                            "       super('Ferari'); // ✅ Calls parent constructor explicitly",
                            "       System.out.println('Class B Constructor');",
                            "   }",
                            "   public static void main(String[] args) {",
                            "       Brand obj = new Brand(); // ✅ Calls both parent and child constructor",
                            "   }",
                            "}"
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Method",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "Method",
                        topicContent: "A Method is used to execute set of statement. Why we need to use is if want particular set of statement more than one place. Declare and Define it in a class. If we want simply create an Object for that class and access it."
                    },{
                        topicName: "Use's of Method : ",
                        topicPoints: [
                            "If logic needs to be changed, only the method needs to be updated.",
                            "No need to modify code in multiple places.",
                            "Breaking code into smaller chunks (methods) simplifies logic and debugging.",
                            "Each method handles one specific task.",
                            "Methods make the code cleaner and easier to understand.",
                            "Complex programs are divided into meaningful names and tasks.",
                            "Once a method is written, it can be reused throughout the program.",
                            "No need to write the same code again and again.",
                            "Methods support modular programming by dividing the code into smaller units.",
                            "Makes it easier to assign tasks to team members in larger projects.",
                            "Eliminates duplication of logic.",
                            "Helps maintain a consistent coding structure."
                        ],
                        topicExample: [
                            "class Bank{",
                            "   public void balance(){",
                            "       System.out.println('Your Account Balance is : 40000');",
                            "   }",
                            "   public static void main(String[] args){",
                            "       Bank bank = new Bank();",
                            "       bank.balance();",
                            "   }",
                            "}",
                            "Output:",
                            "   Your Account Balance is : 40000"
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Constructor Calling Chain",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "Constructor Calling Chain",
                        topicContent: "The process of calling the parent or super class constructor from the child or sub class constructor (or) inside the same class using super() and this() method.",
                        topicPoints: [
                            "this() - used to call the constructor inside the same class.",
                            "super() - used to call the constructor from the other class.",
                            "Important thing is, this method's must be the first statement inside the constructor. Otherwise it throws the error."
                        ]
                    },{
                        topicName: "Whst Constructor Chaining?",
                        topicPoints: [
                            "To avoid duplicate initialization code.",
                            "To follow DRY (Don't Repeat Yourself) principle.",
                            "To reuse constructor logic in a clean and structured way."
                        ],
                        topicExample: [
                            "// Parent class",
                            "class Vehicle {",
                            "   Vehicle() {",
                            "       System.out.println('Vehicle constructor called');",
                            "   }",
                            "   Vehicle(String type) {",
                            "       System.out.println('Vehicle type: ' + type);",
                            "   }",
                            "}",
                            "// Child class",
                            "class Car extends Vehicle {",
                            "   Car() {",
                            "       this('Sedan');  // Calls Car(String)",
                            "       System.out.println('Car default constructor');",
                            "   }",
                            "   Car(String model) {",
                            "       super('Four Wheeler');  // Calls parent class constructor",
                            "       System.out.println('Car model: ' + model);",
                            "   }",
                            "}",
                            "// Main class",
                            "public class Main {",
                            "   public static void main(String[] args) {",
                            "       Car car1 = new Car(); // Only one object, but all constructors get called",
                            "   }",
                            "}",
                            "Output: ",
                            "   Vehicle type: Four Wheeler",
                            "   Car model: Sedan",
                            "   Car default constructor"
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Single Inheritance",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "Single Inheritance",
                        topicContent: "Acquiring(extends) the variables and methods of another class. This allows the child class to acquire the properties and behaviors (fields and methods) of the parent class.",
                        topicPoints: [
                            "Code Reusability – Child class can use methods from the parent class.",
                            "Clear Hierarchy – Easy to understand and manage.",
                            "Avoids Redundancy – No need to rewrite existing logic.",
                            "Extensibility – New features can be added in the child class."
                        ],
                        topicExample: [
                            "// Parent class",
                            "class Animal {",
                            "   void eat() {",
                            "       System.out.println('This animal eats food.');",
                            "   }",
                            "}",
                            "// Child class",
                            "class Dog extends Animal {",
                            "   void bark() {",
                            "       System.out.println('The dog barks.');",
                            "   }",
                            "}",
                            "// Main class",
                            "public class SingleInheritanceExample {",
                            "   public static void main(String[] args) {",
                            "       Dog dog = new Dog();",
                            "       dog.eat();   // Inherited from Animal",
                            "       dog.bark();  // Own method",
                            "   }",
                            "}",
                            "Output: ",
                            "   This animal eats food.",
                            "   The dog barks."
                        ]
                    },{
                        topicName: "Key Points",
                        topicPoints: [
                            "The Dog class inherits the eat() method from the Animal class.",
                            "You can access both parent and child class methods using the child class object.",
                            "Java supports only single inheritance with classes (but multiple inheritance with interfaces)."
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Multi-level Inheritance",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "Multi-level Inheritance",
                        topicContent: "It is also acquring the Parent or Super class properties. But it is a level of inheritance. It means a Single class can act as both Parent and Child at the same time, like it act as Parent to it's child and Child to it's parent.",
                        topicPoints: [
                            "Grandparent → Parent → Child"
                        ]
                    },{
                        topicName: "Why Use Multi-level Inheritance?",
                        topicPoints: [
                            "To create a hierarchy of classes.",
                            "To reuse code from both parent and grandparent classes.",
                            "To extend functionality step-by-step."
                        ]
                    },{
                        topicName: "Syntax :",
                        topicExample: [
                            "class A {",
                            "   // Grandparent",
                            "}",
                            "class B extends A {",
                            "   // Parent",
                            "}",
                            "class C extends B {",
                            "   // Child",
                            "}"
                        ]
                    },{
                        topicName: "Example :",
                        topicExample: [
                            "// Grandparent class",
                            "class Animal {",
                            "   void eat() {",
                            "       System.out.println('Animals eat food.');",
                            "   }",
                            "}",
                            "// Parent class",
                            "class Dog extends Animal {",
                            "   void bark() {",
                            "       System.out.println('Dogs bark.');",
                            "   }",
                            "}",
                            "// Child class",
                            "class Puppy extends Dog {",
                            "   void weep() {",
                            "       System.out.println('Puppies weep.');",
                            "   }",
                            "}",
                            "// Main class",
                            "public class MultiLevelExample {",
                            "   public static void main(String[] args) {",
                            "       Puppy puppy = new Puppy();",
                            "       // Calling methods from all levels",
                            "       puppy.eat();   // from Animal",
                            "       puppy.bark();  // from Dog",
                            "       puppy.weep();  // from Puppy",
                            "   }",
                            "}",
                            "Output : ",
                            "   Animals eat food.",
                            "   Dogs bark.",
                            "   Puppies weep."
                        ]
                    },{
                        topicName: "Key Points",
                        topicPoints: [
                            "Puppy has access to methods of both Dog and Animal.",
                            "Each level extends the functionality of the previous level."
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Multiple Inheritance",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "Multiple Inheritance",
                        topicContent: "It is acquring the more than one Parent or Super class properties. It can't be achieved using Class to avoid ambiguity (also called the diamond problem)., but we can achieved it through Interface and also inheriting one class and more than one interface will also work."
                    },{
                        topicName: "Why doesn't Java support class-based multiple inheritance?",
                        topicPoints: [
                            "Imagine two parent classes have the same method name, and a child class inherits both. Java can't decide which version to use.",
                            "This is called the Diamond Problem. To avoid it, Java only allows multiple inheritance through interfaces, which don’t have method implementations (until Java 8, where they may have default methods)."
                        ]
                    },{
                        topicName: "",
                        topicExample: [
                            "class A {",
                            "   void show() {",
                            "       System.out.println('Show from A');",
                            "   }",
                            "}",
                            "class B {",
                            "   void show() {",
                            "       System.out.println('Show from B');",
                            "   }",
                            "}",
                            "// ❌ This is illegal in Java",
                            "class C extends A, B { // Error!",
                            "   public static void main(String[] args) {",
                            "       C obj = new C();",
                            "       obj.show();",
                            "   }",
                            "}"                            
                        ]
                    },{
                        topicName: "Multiple Inheritance with Interfaces",
                        topicContent: "Overriding is the key to solving ambiguity in multiple inheritance via interfaces in Java.",
                        topicPoints: [
                            "When two interfaces have the same method name (especially default methods from Java 8 onward), Java doesn’t know which one to inherit.",
                            "Java forces you to override the method in the implementing class. That way, you explicitly decide what happens — and Java avoids the diamond problem."
                        ],
                        topicExample: [
                            "// Interface A",
                            "interface A {",
                            "   void show();",
                            "}",
                            "// Interface B",
                            "interface B {",
                            "   void show();",
                            "}",
                            "// Class C implements both interfaces",
                            "class C implements A, B {",
                            "   // Must override show() to resolve ambiguity",
                            "   public void show() {",
                            "       System.out.println('Custom show() in class C');",
                            "   }",
                            "   public static void main(String[] args) {",
                            "       C obj = new C();",
                            "       obj.show(); // Works perfectly",
                            "   }",
                            "}",
                            "Output :",
                            "   Custom show() in class C"                  
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Hybrid Inheritance",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "Hybrid Inheritance",
                        topicContent: "Hybrid Inheritance is a combination of two or more types of inheritance. It forms a complex inheritance structure where different types are combined in one scenario.",
                        topicPoints: [
                            "Java does not support hybrid inheritance with classes because it would lead to the diamond problem (ambiguity).",
                            "But it supports hybrid inheritance using interfaces."
                        ],
                        topicExample: [
                            "interface A {",
                            "   void methodA();",
                            "}",
                            "interface B extends A {",
                            "   void methodB();",
                            "}",
                            "interface C extends A {",
                            "   void methodC();",
                            "}",
                            "// Class D implements both B and C",
                            "class D implements B, C {",
                            "   public void methodA() {",
                            "       System.out.println('methodA from A');",
                            "   }",
                            "   public void methodB() {",
                            "       System.out.println('methodB from B');",
                            "   }",
                            "   public void methodC() {",
                            "       System.out.println('methodC from C');",
                            "   }",
                            "   public static void main(String[] args) {",
                            "       D obj = new D();",
                            "       obj.methodA();",
                            "       obj.methodB();",
                            "       obj.methodC();",
                            "   }",
                            "}",
                            "Output :",
                            "   methodA from A",  
                            "   methodB from B",
                            "   methodC from C"                        
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Hierarchical Inheritance",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "Hierarchical Inheritance",
                        topicContent: "A Single Parent or Super class is inherited by more than one Child class.",
                        topicPoints: [
                            "All child classes share the behavior from the parent.",
                            "Each child can add its own specialized behavior.",
                            "Promotes code reusability and organization.",
                            "Easy to scale: Add new child classes without touching the base class."
                        ]
                    },{
                        topicName: "Use Case",
                        topicPoints: [
                            "Class Shape with subclasses Circle, Rectangle, Square.",
                            "Class Employee with subclasses Manager, Developer, Intern."
                        ]
                    },{
                        topicName: "Example :",
                        topicExample: [
                            "// Parent class",
                            "class Animal {",
                            "   void eat() {",
                            "       System.out.println('This animal eats food.');",
                            "   }",
                            "   void sleep() {",
                            "       System.out.println('This animal sleeps.');",
                            "   }",
                            "}",
                            "// First child class",
                            "class Dog extends Animal {",
                            "   void bark() {",
                            "       System.out.println('The dog barks.');",
                            "   }",
                            "}",
                            "// Second child class",
                            "class Cat extends Animal {",
                            "   void meow() {",
                            "       System.out.println('The cat meows.'');",
                            "   }",
                            "}",
                            "// Main class",
                            "public class HierarchicalInheritanceExample {",
                            "   public static void main(String[] args) {",
                            "       Dog d = new Dog();",
                            "       d.eat();",
                            "       d.sleep();",
                            "       d.bark();",
                            "       System.out.println();",
                            "       Cat c = new Cat();",
                            "       c.eat();",
                            "       c.sleep();",
                            "       c.meow();",
                            "   }",
                            "}",
                            "Output :",
                            "   This animal eats food.",
                            "   This animal sleeps.",
                            "   The dog barks.",
                            "   This animal eats food.",
                            "   This animal sleeps.",
                            "   The cat meows."
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
