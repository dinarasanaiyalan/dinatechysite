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
            topicKey: "OOPs & Features",
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
        }, {
            topicKey: "Encapsulation",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "Encapsulation",
                        topicContent: "Encapsulation is the process of wrapping data (variables) and methods (functions) together into a single unit (i.e., a class). It’s often called data hiding, because it prevents direct access to the data fields from outside the class.",
                        topicPoints: [
                            "Data Protection – Prevents unauthorized access and modification of fields.",
                            "Improved Security – Fields are made private and can only be accessed via public methods.",
                            "Code Maintenance – You can change internal implementation without affecting outside code.",
                            "Controlled Access – You decide which data is readable, writable, or read-only."
                        ]
                    },{
                        topicName: "Example: Encapsulation",
                        topicExample: [
                            "class Student {",
                            "   // 🔒 Private data members (hidden from outside)",
                            "   private String name;",
                            "   private int age;",
                            "   // ✅ Public getter method",
                            "   public String getName() {",
                            "       return name;",
                            "   }",
                            "   // ✅ Public setter method",
                            "   public void setName(String name) {",
                            "       this.name = name;",
                            "   }",
                            "   // Getter for age",
                            "   public int getAge() {",
                            "       return age;",
                            "   }",
                            "   // Setter for age",
                            "   public void setAge(int age) {",
                            "       if (age > 0) {",
                            "           this.age = age;",
                            "       } else {",
                            "           System.out.println('Age must be positive.');",
                            "       }",
                            "   }",
                            "}",
                            "public class Main {",
                            "   public static void main(String[] args) {",
                            "       Student s = new Student();",
                            "       // Setting values via setters",
                            "       s.setName('John');",
                            "       s.setAge(20);",
                            "       // Getting values via getters",
                            "       System.out.println('Name: ' + s.getName());",
                            "       System.out.println('Age: ' + s.getAge());",
                            "   }",
                            "}",
                            "Output : ",
                            "   Name: John",
                            "   Age: 20"                            
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Abstraction",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "Abstraction",
                        topicContent: "It refers to the concept of hiding complex internal implementation details and showing only the necessary features of an object to the outside world. It creates a layer inbetween Business Logic and End-point",
                        topicPoints: [
                            "To reduce complexity in large systems by hiding irrelevant details.",
                            "To provide a clear and simple interface to users of a class.",
                            "To enhance code modularity and maintainability.",
                            "To allow developers to focus on essential behavior rather than the implementation.",
                            "To support loose coupling by minimizing dependencies between components."
                        ]
                    },{
                        topicName: "When Should We Use Abstraction?",
                        topicPoints: [
                            "When building frameworks or reusable components where the internal logic should remain hidden.",
                            "When multiple classes share common methods but differ in implementation.",
                            "When designing APIs or SDKs where you only want users to interact with specific functionalities.",
                            "When you want to ensure future scalability and make your application easier to modify or extend."
                        ]
                    },{
                        topicName: "In Java we can achieve Abstraction in Two ways.",
                        topicPoints: [
                            "Abstract Class",
                            "Interface"
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Abstract Class",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "Abstract Class",
                        topicContent: "An abstract class in Java is a class that cannot be instantiated (you can't create objects of it). It is declared using the abstract keyword and is used to provide a base for subclasses to extend. It can include :",
                        topicPoints: [
                            "Abstract methods (methods without a body)",
                            "Concrete (normal) methods (methods with body)",
                            "Constructors",
                            "Instance variables and static variables"
                        ]
                    },{
                        topicName: "Key Rules of Abstract Class",
                        topicPoints: [
                            "Must be declared using the abstract keyword.",
                            "Can contain both abstract and non-abstract methods.",
                            "Can have constructors (called during subclass object creation). Still we can't create Object with it.",
                            "Can have fields (variables).",
                            "Cannot be instantiated directly.",
                            "A subclass must implement all abstract methods unless the subclass is also abstract.",
                            "Supports inheritance using extends keyword."
                        ]
                    },{
                        topicName: "Example: Abstract Class",
                        topicExample: [
                            "//Abstract Class :",
                            "//     by using this we can only achieve partial Abstraction,",
                            "//     due to we can implement concrete or normal method in abstract class.",
                            "abstract class SonyEnterprices {",
                            "   // we can't give method body here",
                            "   abstract void camera();",
                            "   abstract void updatedCamera();",   
                            "   void sonyOwnCamera() {",
                            "       System.out.println('We can have own camera brand...');",
                            "   }",   
                            "   // we can't create object for abstract class, but we can create constructor,",
                            "   // this constructor will execute once you create a object using upcasting.",
                            "   SonyEnterprices(){",
                            "       System.out.println('Constructor of Abstract Class SonyEnterprices...');",
                            "   }",   
                            "}",
                            "class Iphone extends SonyEnterprices {",   
                            "   @Override // it's only for indication purpose not an mandatory",
                            "   void camera() {",
                            "       System.out.println('Iphone using a Sony Camera....');",
                            "   }",   
                            "   void faceReg() {",
                            "       System.out.println('Iphone add face unlock option...');",
                            "   }",
                            "   @Override",
                            "   void updatedCamera() {",
                            "       System.out.println('Now Iphone using Sony updated Camera...');",
                            "   }",   
                            "}",
                            "public class AbstractClassExample {",   
                            "   public static void main(String[] args) {",       
                            "       //Upcasting - ",
                            "       //   Assigning Child class object to an Parent class reference. ",
                            "       //   By using this object we can only access parent class method's and variable's.",
                            "       SonyEnterprices sony = new Iphone();",
                            "       sony.camera();",
                            "       sony.sonyOwnCamera();",
                            "       //sony.faceReg();// we can't access child methods using upcasted object",       
                            "   }",
                            "}",
                            "Output :",
                            "   Constructor of Abstract Class SonyEnterprices...",
                            "   Iphone using a Sony Camera....",
                            "   We can have own camera brand..."    
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Interface",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "Interface",
                        topicContent: "An interface in Java is a completely abstract type used to define a contract that classes must follow. It contains method declarations without implementation(no body). If we want to provide implementation, we have to use inheritance and override that particular method in the inherited class. Interfaces help in achieving 100% abstraction and allow multiple inheritance (unlike classes).",
                        topicPoints: [
                            "Abstract methods (methods without a body)",
                            "No Concrete (normal) methods.",
                            "No Constructors.",
                            "No Instance variables, only public static final variable.",
                            "Can have static and default methods."
                        ]
                    },{
                        topicName: "Key Rules of Interface",
                        topicPoints: [
                            "Declared using the interface keyword instead of class.",
                            "All methods are public and abstract by default (till Java 7).",
                            "From Java 8 onward, interfaces can have: Default methods, Static methods",
                            "From Java 9, interfaces can also have private methods.",
                            "Variables in interfaces are by default: public static final.",
                            "A class implements an interface using the implements keyword.",
                            "A class can implement multiple interfaces."
                        ]
                    },{
                        topicName: "Example : Interface",
                        topicExample: [
                            "// By using Interface we can achieve 100% Abstraction, because we can't create normal or concrete method.",
                            "public interface InterfaceExample {",
                            "   // Compiler will convert this variable into public static final",
                            "   int a = 10;// public static final int a = 10;",
                            "   public static final int b = 10;",
                            "   // Compiler will convert this method into abstract method.",
                            "   // To provide the definition we need to inherit this interface from a class and override the method.",
                            "   public void add(int a, int b);// public abstract void add(int a, int b);",
                            "   // To call this method we need Interface name only.",
                            "   static void sub(int a, int b) {",
                            "       System.out.println('Subtraction of '+a+' and '+b+' is : '+(a-b));",
                            "   }",
                            "   // To call this default method, we need to create object for the interface using Upcasting",
                            "   default void print() {",
                            "       System.out.println('Default method of Interface');",
                            "   }",
                            "}",
                            "public class InterfaceInheritedClass implements InterfaceExample{",
                            "   @Override",
                            "   public void add(int a, int b) {",
                            "       System.out.println('Addition of '+a+' and '+b+' is : '+(a+b));",
                            "   }",
                            "   public static void main(String[] args) {",
                            "       //Upcasting",
                            "       InterfaceExample inter = new InterfaceInheritedClass();",
                            "       // To access default and abstract method - we need that interface object.",
                            "       inter.add(a, b); // abstract method",
                            "       inter.print(); // default method",
                            "       // To access static method and static variable - we need that interface name only",
                            "       InterfaceExample.sub(20,10); // static method",
                            "       System.out.println('Interface variable a : '+InterfaceExample.a); // static variable",
                            "       System.out.println('Interface variable b : '+InterfaceExample.b); // static variable",
                            "   }",
                            "}",
                            "Output :",
                            "  Addition of 10 and 10 is : 20",
                            "  Default method of Interface",
                            "  Subtraction of 20 and 10 is : 10",
                            "  Interface variable a : 10",
                            "  Interface variable b : 10"
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Upcasting",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "Upcasting",
                        topicContent: "Upcasting is the process of assigning a subclass object to a superclass reference. In other words, when we cast a child class object to its parent class type, it's called upcasting.",
                        topicPoints: [
                            "Parent p = new Child(); // Implicit upcasting",
                            "It happens automatically (implicitly), so you don’t need to explicitly write the cast."
                        ]
                    },{
                        topicName: "Why is Upcasting Important?",
                        topicPoints: [
                            "Code Flexibility (Polymorphism): Allows writing generic code using the parent class/interface while executing the child class's method at runtime.",
                            "Enables Dynamic Method Dispatch (Runtime Polymorphism): Methods are executed based on the actual object, not reference type.",
                            "Decoupling Code: You can change the actual implementation (child class) without changing the code using the reference (parent class).",
                            "Use in Frameworks & APIs: Commonly used in real-world applications and frameworks where superclass types are used in methods, and actual objects passed are subclasses."
                        ]
                    },{
                        topicName: "When Do We Use Upcasting?",
                        topicPoints: [
                            "When using polymorphism.",
                            "When a method accepts a parent class parameter, and we want to pass a subclass object.",
                            "While working with arrays or collections of base type but containing subclass objects.",
                            "When returning a generalized object type from a factory or method."
                        ]
                    },{
                        topicName: "How Does Upcasting Work?",
                        topicPoints: [
                            "You can call only the methods/fields of the parent class, even though the object is of child type.",
                            "If a method is overridden, the child class’s version is executed due to runtime polymorphism."
                        ]
                    },{
                        topicName: "Example : Upcasting",
                        topicExample: [
                            "class Animal {",
                            "   void sound() {",
                            "       System.out.println('Animal makes sound');",
                            "   }",
                            "}",                            
                            "class Dog extends Animal {",
                            "   void sound() {",
                            "       System.out.println('Dog barks');",
                            "   }",
                            "   void fetch() {",
                            "       System.out.println('Dog fetches stick');",
                            "   }",
                            "}",
                            "public class Main {",
                            "   public static void main(String[] args) {",
                            "       Animal a = new Dog(); // 🔼 Upcasting",
                            "       a.sound();  // Output: Dog barks (runtime polymorphism)",
                            "       // a.fetch(); ❌ Error: method not accessible via Animal reference",
                            "   }",
                            "}",
                            "Output : ",
                            "   Dog barks"
                        ]
                    }
                ]
            }
        }, {
            topicKey: "DownCasting",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "DownCasting",
                        topicContent: "Downcasting is the process of converting a superclass reference back to a subclass type.  It is an explicit type conversion, and Must be done manually using a type cast.",
                        topicPoints: [
                            "Animal a = new Dog(); // Upcasting",
                            "Dog d = (Dog) a;      // Downcasting",
                            "Used when you want to access subclass-specific members from a superclass reference."
                        ]
                    },{
                        topicName: "Characteristics of Downcasting",
                        topicPoints: [
                            "Requires explicit casting, otherwise it will result in a compile-time error.",
                            "Unsafe if not handled properly — may throw ClassCastException at runtime if the object is not actually of the target subclass type.",
                            "Best practice is to use instanceof to check the type before downcasting.",
                            "Commonly used in object-oriented frameworks and collections where objects are referenced in their base type.",
                            "With the Downcasted object we can call both the Super and Sub Class variables and methods.",
                            "Becase Downcasting requires Upcasting, So upcasting provide the access to use Super Class variables and methods.",
                            "With the Upcasting object only we are creating the Downcasting object, So Upcasting object had access of Super class mean while Downcasting object had access of Sub Class."
                        ]
                    },{
                        topicName: "Example of DownCasting",
                        topicExample: [
                            "class Animal {",
                            "   void sound() {",
                            "       System.out.println('Animal sound');",
                            "   }",
                            "}",
                            "class Dog extends Animal {",
                            "   void bark() {",
                            "       System.out.println('Dog barks');",
                            "   }",
                            "}",
                            "public class Test {",
                            "   public static void main(String[] args) {",
                            "       Animal a = new Dog(); // Upcasting",
                            "       if (a instanceof Dog) {",
                            "           Dog d = (Dog) a;  // Downcasting",
                            "           d.bark();         // Output: Dog barks",
                            "       }",
                            "   }",
                            "}",  
                            "Output : ",
                            "   Dog barks"                       
                        ]
                    }
                ]
            }
        }, {
            topicKey: "String",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "String",
                        topicContent: "In Java, a String is a sequence of characters. It is an object of the String class in java.lang package. Strings are immutable, meaning once created, their values cannot be changed. String have infinite memory of storage.",
                        topicPoints: [
                            `String name = "Java";`,
                            "Internally stored as a String object",
                            "We need to enclose the String in Double Quotes.",
                            "String are immutable, means it can't be updated like primitive type, can only be re-initialized."
                        ],
                        topicExample: [
                            "// Example of Immutability:",
                            `String s = "Java";`,
                            `s.concat(" Language");`,
                            "System.out.println(s);  // Output: Java (not Java Language)",
                        ]
                    },{
                        topicName: "Why do we use String?",
                        topicPoints: [
                            "Human-readable format: Strings are easy to read and write, making them ideal for passing data between systems.",
                            "Universal format: APIs, web forms, databases, and network protocols often use strings to transmit data.",
                            "Flexible data type: You can easily convert other types (like int, double, etc.) to and from strings.",
                            "Supports parsing: Strings can be parsed and split for extracting structured data (like CSV, JSON, XML, etc.).",
                            "Platform-independent: Strings in Java use Unicode, which supports characters from all languages."
                        ]
                    },{
                        topicName: "How String Immutability Makes It Effective",
                        topicPoints: [
                            "Thread-Safe: Since strings are immutable, they can be safely shared across threads without synchronization.",
                            "Memory Efficiency: Java uses a String Pool in the heap memory to store string literals. If two strings have the same value, they point to the same memory location, saving memory.",
                            "Security: Used heavily in secure data like URLs, usernames, passwords because it can't be altered once created.",
                            "Hashing Reliability: Strings are commonly used as keys in HashMaps. Their immutability ensures consistent hashcode, avoiding bugs.",
                            "Predictable Behavior: Since their value doesn’t change, bugs related to accidental changes of string data are avoided."
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Garbage Collection",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "Garbage Collection",
                        topicContent: "Garbage Collection (GC) in Java is the process of automatically reclaiming memory used by objects that are no longer referenced.",
                        topicPoints: [
                            "It is handled by the Java Virtual Machine (JVM).",
                            "Java uses GC to free up heap memory, thus preventing memory leaks and improving application performance."
                        ]
                    },{
                        topicName: "Why is Garbage Collection Needed?",
                        topicPoints: [
                            "To automatically manage memory (no need for manual memory deallocation like in C/C++).",
                            "Prevent memory leaks by removing unreachable objects.",
                            "Improve performance and avoid OutOfMemoryError.",
                            "Helps make Java applications robust and safe by removing dead objects."
                        ]
                    },{
                        topicName: "How Does it Work?",
                        topicPoints: [
                            "The JVM automatically tracks object references.",
                            "If no part of your program is referencing an object, it becomes eligible for garbage collection.",
                            "A background thread (Garbage Collector) will delete those unreachable objects and free up memory."
                        ]
                    },{
                        topicName: "Example : ",
                        topicExample: [
                            "class Demo {",
                            "   public void finalize() {",
                            `       System.out.println("Object is garbage collected");`,
                            "   }",
                            "   public static void main(String[] args) {",
                            "       Demo d = new Demo();",
                            "       d = null;  // Object becomes unreachable",
                            "       System.gc(); // Suggests JVM to run garbage collection",
                            "   }",
                            "}"                            
                        ]
                    },{
                        topicName: "Ways an Object Becomes Eligible for GC",
                        topicPoints: [
                            "Nullifying a reference: obj = null;",
                            "Reassigning a reference: obj1 = new Object(); obj2 = obj1; obj1 = null;",
                            "Objects created inside methods (go out of scope).",
                            "Islands of isolation (two objects referring to each other but unreachable from the root)."
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Access Modifier",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "Access Modifier",
                        topicContent: "Access modifiers in Java are keywords that define the accessibility or scope of a class, method, variable, or constructor. They control which parts of a program can access these members. Java provides four main access modifiers: public, protected, default (also called package-private), and private.",
                        topicPoints: [
                            "public: The member is accessible from everywhere.",
                            "protected: The member is accessible within the same package and also in subclasses (even if they are in different packages).",
                            "default (no modifier specified): The member is accessible only within the same package.",
                            "private: The member is accessible only within the same class."
                        ]
                    },{
                        topicName: "Why we need Access Modifier?",
                        topicPoints: [
                            "Encapsulation: They help implement encapsulation by restricting access to sensitive data and methods, ensuring that only authorized parts of the program can interact with them.",
                            "Security: By limiting access, they protect the internal state of an object from unintended or harmful modifications.",
                            "Modularity: They promote modularity by defining clear boundaries between different parts of a program, making it easier to maintain and understand.",
                            "Controlled Access: They allow developers to specify which classes or objects can use certain members, reducing the risk of errors and improving code reliability."
                        ]
                    },{
                        topicName: "When to use Access Modifier?",
                        topicPoints: [
                            "Class Design: When defining a class, use access modifiers to control how its fields, methods, or constructors can be accessed by other classes.",
                            "Data Protection: Use private for fields or methods that should not be exposed outside the class, such as internal logic or sensitive data.",
                            "Inheritance: Use protected when you want methods or fields to be accessible in subclasses, especially in different packages.",
                            "Package Organization: Use default (package-private) to restrict access to classes or members within the same package for better organization.",
                            "Public APIs: Use public for methods or classes that form the public interface of a module or library, allowing external code to interact with them."
                        ]
                    },{
                        topicName: "Example Code",
                        topicExample: [
                            "// Class with public access",
                            "public class AccessModifierDemo {",
                            "   // Private field",
                            "   private int privateField = 10;",
                            "   // Protected field",
                            `   protected String protectedField = "Protected Data";`,
                            "   // Default (package-private) field",
                            "   double defaultField = 20.5;",
                            "   // Public field",
                            "   public boolean publicField = true;",
                            "   // Private method",
                            "   private void privateMethod() {",
                            `       System.out.println("This is a private method.");`,
                            "   }",
                            "   // Protected method",
                            "   protected void protectedMethod() {",
                            `       System.out.println("This is a protected method.");`,
                            "   }",
                            "   // Default (package-private) method",
                            "   void defaultMethod() {",
                            `       System.out.println("This is a default method.");`,
                            "   }",
                            "   // Public method",
                            "   public void publicMethod() {",
                            `       System.out.println("This is a public method.");`,
                            "   }",
                            "}",
                            "// Another class in the same package",
                            "class TestSamePackage {",
                            "   public static void main(String[] args) {",
                            "       AccessModifierDemo demo = new AccessModifierDemo();",
                            "       // Accessing members within the same package",
                            "       System.out.println(demo.publicField);      // Accessible",
                            "       System.out.println(demo.protectedField);   // Accessible",
                            "       System.out.println(demo.defaultField);     // Accessible",
                            "       // System.out.println(demo.privateField);  // Compilation error: not accessible",
                            "       demo.publicMethod();    // Accessible",
                            "       demo.protectedMethod(); // Accessible",
                            "       demo.defaultMethod();   // Accessible",
                            "       // demo.privateMethod(); // Compilation error: not accessible",
                            "   }",
                            "}"
                        ]
                    },{
                        topicName: "Explanation of Example :",
                        topicPoints: [
                            "Private: privateField and privateMethod are only accessible within AccessModifierDemo. Attempts to access them from TestSamePackage result in a compilation error.",
                            "Protected: protectedField and protectedMethod are accessible within the same package (TestSamePackage) and would also be accessible in subclasses outside the package.",
                            "Default: defaultField and defaultMethod are accessible within the same package (com.example) but not outside it.",
                            "Public: publicField and publicMethod are accessible from any class, regardless of the package."
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Polymorphism",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "Polymorphism",
                        topicContent: "Polymorphism in Java is the ability of an object to take on many forms. It allows objects of different classes to be treated as objects of a common superclass or interface. The term 'polymorphism' means 'many shapes,' and in Java.Polymorphism is one of the core principles of Object-Oriented Programming (OOP) and is closely tied to inheritance and interfaces. It is primarily achieved through:",
                        topicPoints: [
                            "Method Overriding",
                            "Method Overloading"
                        ]
                    },{
                        topicName: "Why we need Polymorphism?",
                        topicPoints: [
                            "Flexibility: It allows different classes to be treated uniformly through a common interface or superclass, making code more adaptable to changes.",
                            "Extensibility: New classes can be added with minimal changes to existing code, as long as they conform to the same interface or superclass.",
                            "Code Reusability: By using a common interface or superclass, you can write code that works with multiple types without duplication.",
                            "Maintainability: Polymorphism reduces tight coupling between classes, making it easier to modify or extend functionality.",
                            "Abstraction: It enables developers to focus on the general behavior defined in superclasses or interfaces, hiding implementation details."
                        ]
                    },{
                        topicName: "When to use Polymorphism?",
                        topicPoints: [
                            "Hierarchical Relationships: When you have a class hierarchy where subclasses share common behavior but need to provide specialized implementations (e.g., overriding methods).",
                            "Common Interfaces: When multiple classes implement the same interface but provide different functionality, such as different data processing strategies.",
                            "Code Generalization: When you want to write generic code that can work with objects of different types through a common superclass or interface.",
                            "Dynamic Behavior: When the specific behavior of an object needs to be determined at runtime based on its actual type.",
                            "Extensible Systems: When designing systems where new types can be added without modifying existing code (e.g., plugin architectures)."
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Run-Time Polymorphism",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "Run-Time Polymorphism",
                        topicContent: "Run-time polymorphism is achieved through method overriding, where a subclass provides a specific implementation of a method defined in its superclass or interface. The method to be called is determined at runtime based on the actual type of the object, not the reference type.",
                        topicPoints: [
                            "Resolved at Runtime: The JVM decides which method to invoke based on the object’s actual type.",
                            "Method Overriding: The subclass redefines a method with the same name, return type, and parameters as the superclass method.",
                            "Inheritance or Interfaces: Requires an inheritance hierarchy or implementation of an interface.",
                            "Dynamic Method Dispatch: The process where the JVM determines the method to call at runtime.",
                            "Annotations: The @Override annotation ensures that a method is correctly overridden.",
                            "Final and Static Methods: These cannot be overridden (final prevents overriding, and static methods belong to the class, not instances)."
                        ],
                        topicExample: [
                            "// Superclass",
                            "class Animal {",
                            "   void makeSound() {",
                            `       System.out.println("Some generic animal sound");`,
                            "   }",
                            "}",
                            "// Subclass 1",
                            "class Dog extends Animal {",
                            "   @Override",
                            "   void makeSound() {",
                            `       System.out.println("Woof Woof");`,
                            "   }",
                            "}",
                            "// Subclass 2",
                            "class Cat extends Animal {",
                            "   @Override",
                            "   void makeSound() {",
                            `       System.out.println("Meow Meow");`,
                            "   }",
                            "}",
                            "// Main class to demonstrate runtime polymorphism",
                            "public class PolymorphismDemo {",
                            "   public static void main(String[] args) {",
                            "       // Reference of type Animal, but object of type Dog",
                            "       Animal myDog = new Dog();",
                            "       // Reference of type Animal, but object of type Cat",
                            "       Animal myCat = new Cat();",
                            "       // Calls the overridden method based on the actual object type",
                            "       myDog.makeSound(); // Output: Woof Woof",
                            "       myCat.makeSound(); // Output: Meow Meow",
                            "       // Using an array to demonstrate polymorphism",
                            "       Animal[] animals = {new Dog(), new Cat()};",
                            "       for (Animal animal : animals) {",
                            "           animal.makeSound(); // Calls the appropriate method at runtime",
                            "       }",
                            "   }",
                            "}",
                            "Output : ",
                            ""
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Compile-Time Polymorphism",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "Compile-Time Polymorphism",
                        topicContent: "Compile-time polymorphism is achieved through method overloading or constructor overloading, where multiple methods or constructors share the same name but differ in their parameter list (number, type, or order of parameters). The Java compiler determines which method to call based on the method signature at compile time.",
                        topicPoints: [
                            "Resolved at Compile Time: The compiler decides which method to invoke based on the arguments provided.",
                            "Method Overloading: Methods in the same class have the same name but different parameter lists.",
                            "No Inheritance Required: Overloading can occur within a single class.",
                            "Return Type: The return type alone cannot differentiate overloaded methods; the parameter list must differ.",
                            "Static Methods: Static methods can also be overloaded."
                        ],
                        topicExample: [
                            "public class Calculator {",
                            "   // Method overloading",
                            "   public int add(int a, int b) {",
                            "       return a + b;",
                            "   }",
                            "   public double add(double a, double b) {",
                            "       return a + b;",
                            "   }",
                            "   public int add(int a, int b, int c) {",
                            "       return a + b + c;",
                            "   }",
                            "   public static void main(String[] args) {",
                            "       Calculator calc = new Calculator();",
                            "       System.out.println(calc.add(5, 10));          // Calls add(int, int)",
                            "       System.out.println(calc.add(5.5, 10.5));      // Calls add(double, double)",
                            "       System.out.println(calc.add(1, 2, 3));        // Calls add(int, int, int)",
                            "   }",
                            "}",
                            "Output : ",
                            "   15",
                            "   16.0",
                            "   6"
                        ]
                    }
                ]
            }
        }, {
            topicKey: "String Buffer",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "String Buffer",
                        topicContent: "StringBuffer is a mutable, thread-safe class in Java used to represent a sequence of characters. It is part of the java.lang package and was introduced to provide a way to modify strings efficiently, unlike the immutable String class. StringBuffer allows operations such as appending, inserting, deleting, and replacing characters without creating new objects for each modification.",
                        topicPoints: [
                            "Mutable: The content of a StringBuffer object can be changed.",
                            "Thread-Safe: Its methods are synchronized, making it safe for use in multithreaded environments.",
                            "Dynamic Capacity: It automatically grows its capacity when needed to accommodate additional characters."
                        ]
                    },{
                        topicName: "Why we need StringBuffer?",
                        topicContent: "StringBuffer is needed for the following reasons:",
                        topicPoints: [
                            "Efficiency: Unlike String, which creates a new object for every modification (due to immutability), StringBuffer modifies the same object, reducing memory overhead and improving performance.",
                            "Thread Safety: Its synchronized methods ensure safe manipulation of character sequences in multithreaded applications, preventing data corruption.",
                            "Flexibility: It provides methods to perform various string operations (e.g., append, insert, delete) directly on the buffer.",
                            "Dynamic Growth: It handles dynamic string manipulation efficiently by expanding its capacity as needed, avoiding manual resizing."
                        ]
                    },{
                        topicName: "When to use StringBuffer?",
                        topicContent: "StringBuffer should be used in the following scenarios:",
                        topicPoints: [
                            "Frequent String Modifications: When a string undergoes multiple changes (e.g., appending or deleting characters in a loop), StringBuffer is more efficient than String.",
                            "Multithreaded Environments: When thread safety is required, such as in concurrent applications where multiple threads modify the same string buffer.",
                            "Building Strings Dynamically: When constructing strings incrementally, such as generating logs, reports, or formatted output.",
                            "Legacy Code: In older Java applications where StringBuffer was used before StringBuilder (introduced in Java 5) became the preferred non-thread-safe alternative.",
                        ],
                        topicNote: "For single-threaded applications, StringBuilder is often preferred over StringBuffer because it is faster due to the lack of synchronization overhead."
                    },{
                        topicName: "How to use StringBuffer?",
                        topicContent: "StringBuffer provides a variety of methods to manipulate character sequences. Below are common operations and examples demonstrating its usage. Key Methods of StringBuffer",
                        topicPoints: [
                            "append(): Adds data (e.g., String, int, char, etc.) to the end of the buffer.",
                            "insert(): Inserts data at a specified index.",
                            "delete(): Removes characters from a specified range.",
                            "replace(): Replaces characters in a specified range with a new string.",
                            "reverse(): Reverses the character sequence.",
                            "substring(): Extracts a portion of the buffer as a string.",
                            "capacity(): Returns the current capacity of the buffer.",
                            "ensureCapacity(): Ensures the buffer has at least the specified capacity.",
                            "length(): Returns the number of characters in the buffer.",
                            "setLength(): Sets the length of the buffer, truncating or padding with null characters as needed."
                        ]
                    },{
                        topicName: "Example Code",
                        topicExample: [
                            "public class StringBufferDemo {",
                            "   public static void main(String[] args) {",
                            "       // Create a StringBuffer object",
                            `       StringBuffer sb = new StringBuffer("Hello");`,
                            "       // Append data",
                            `       sb.append(" World");`,
                            `       System.out.println("After append: " + sb); // Hello World`,
                            "       // Insert data",
                            `       sb.insert(5, ",");`,
                            `       System.out.println("After insert: " + sb); // Hello, World`,
                            "       // Replace data",
                            `       sb.replace(6, 11, "Java");`,
                            `       System.out.println("After replace: " + sb); // Hello, Java`,
                            "       // Delete data",
                            "       sb.delete(5, 6);",
                            `       System.out.println("After delete: " + sb); // Hello Java`,
                            "       // Reverse the buffer",
                            "       sb.reverse();",
                            `       System.out.println("After reverse: " + sb); // avaJ olleH`,
                            "       // Get substring",
                            "       String substr = sb.substring(0, 4);",
                            `       System.out.println("Substring: " + substr); // avaJ`,
                            "       // Check length and capacity",
                            `       System.out.println("Length: " + sb.length()); // 9`,
                            `       System.out.println("Capacity: " + sb.capacity()); // Typically 21 (16 + initial 5)`,
                            "       // Set new length",
                            "       sb.setLength(5);",
                            `       System.out.println("After setLength(5): " + sb); // avaJ `,
                            "   }",
                            "}",
                            "Output : ",
                            "   After append: Hello World",
                            "   After insert: Hello, World",
                            "   After replace: Hello, Java",
                            "   After delete: Hello Java",
                            "   After reverse: avaJ olleH",
                            "   Substring: avaJ",
                            "   Length: 9",
                            "   Capacity: 21",
                            "   After setLength(5): avaJ "
                        ]
                    },{
                        topicName: "Explanation of Example",
                        topicPoints: [
                            "Initialization: A StringBuffer is created with the initial string 'Hello'. Its default capacity is 16 plus the length of the initial string (5), so 21.",
                            "Append: ' World' is appended, modifying the buffer to 'Hello World'.",
                            "Insert: A comma is inserted at index 5, resulting in 'Hello, World'.",
                            "Replace: The substring 'World' (indices 6 to 11) is replaced with 'Java', yielding 'Hello, Java'.",
                            "Delete: The comma at index 5 is deleted, resulting in 'Hello Java'.",
                            "Reverse: The buffer is reversed to 'avaJ olleH'.",
                            "Substring: The first four characters ('avaJ') are extracted as a String.",
                            "Length and Capacity: The current length (9) and capacity (21) are displayed.",
                            "Set Length: The buffer is truncated to 5 characters, resulting in 'avaJ '."
                        ]
                    }
                ]
            }
        }, {
            topicKey: "String Builder",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "String Builder",
                        topicContent: "StringBuilder is a mutable class in Java used to represent a sequence of characters that can be modified efficiently. It is part of the java.lang package and was introduced in Java 5 as a non-thread-safe alternative to StringBuffer. Unlike the immutable String class, StringBuilder allows operations such as appending, inserting, deleting, and replacing characters without creating new objects for each modification.",
                        topicPoints: [
                            "Mutable: The content of a StringBuilder object can be changed directly.",
                            "Not Thread-Safe: Its methods are not synchronized, making it unsuitable for multithreaded environments but faster than StringBuffer.",
                            "Dynamic Capacity: It automatically increases its capacity when needed to accommodate additional characters."
                        ]
                    },{
                        topicName: "Why we need StringBuilder?",
                        topicContent: "StringBuilder is needed for the following reasons:",
                        topicPoints: [
                            "Performance: It is more efficient than String for frequent modifications because it avoids creating multiple objects, reducing memory overhead and improving speed.",
                            "Flexibility: It provides a variety of methods to manipulate strings (e.g., append, insert, delete) directly within the same object.",
                            "Dynamic Growth: Its capacity expands automatically, making it suitable for building strings of unknown or variable length.",
                            "Modern Alternative: It offers a faster alternative to StringBuffer in single-threaded applications, as it eliminates the overhead of synchronization."
                        ]
                    },{
                        topicName: "When to use StringBuilder?",
                        topicContent: "StringBuilder should be used in the following scenarios:",
                        topicPoints: [
                            "Frequent String Modifications: When a string undergoes multiple changes, such as in loops or iterative processes (e.g., building a large string incrementally).",
                            "Single-Threaded Applications: When thread safety is not a concern, as StringBuilder is faster than StringBuffer due to the lack of synchronization.",
                            "Dynamic String Construction: When generating strings dynamically, such as creating JSON, CSV, or formatted output.",
                            "Performance-Critical Code: In scenarios where performance is a priority and string operations are a bottleneck.",
                            "Replacing String Concatenation: When replacing inefficient String concatenation (e.g., str += 'text') in loops to avoid creating multiple String objects."
                        ],
                        topicNote: "Note: Use StringBuffer instead of StringBuilder if thread safety is required in multithreaded environments.",
                    },{
                        topicName: "How to use StringBuilder?",
                        topicContent: "StringBuilder provides a rich set of methods to manipulate character sequences. Below are common operations and examples demonstrating its usage.",
                        topicPoints: [
                            "append(): Adds data (e.g., String, int, char, etc.) to the end of the builder.",
                            "insert(): Inserts data at a specified index.",
                            "delete(): Removes characters from a specified range.",
                            "replace(): Replaces characters in a specified range with a new string.",
                            "reverse(): Reverses the character sequence.",
                            "substring(): Extracts a portion of the builder as a string.",
                            "capacity(): Returns the current capacity of the builder.",
                            "ensureCapacity(): Ensures the builder has at least the specified capacity.",
                            "length(): Returns the number of characters in the builder.",
                            "setLength(): Sets the length of the builder, truncating or padding with null characters as needed.",
                            "toString(): Converts the StringBuilder content to a String."
                        ]                       
                    },{
                        topicName: "Example code",
                        topicExample: [
                            "public class StringBuilderDemo {",
                            "   public static void main(String[] args) {",
                            "       // Create a StringBuilder object",
                            `       StringBuilder sb = new StringBuilder("Hello");`,
                            "       // Append data",
                            `       sb.append(" World");`,
                            `       System.out.println("After append: " + sb); // Hello World`,
                            "       // Insert data",
                            `       sb.insert(5, ",");`,
                            `       System.out.println("After insert: " + sb); // Hello, World`,
                            "       // Replace data",
                            `       sb.replace(6, 11, "Java");`,
                            `       System.out.println("After replace: " + sb); // Hello, Java`,
                            "       // Delete data",
                            "       sb.delete(5, 6);",
                            `       System.out.println("After delete: " + sb); // Hello Java`,
                            "       // Reverse the builder",
                            "       sb.reverse();",
                            `       System.out.println("After reverse: " + sb); // avaJ olleH`,
                            `       // Get substring`,
                            "       String substr = sb.substring(0, 4);",
                            `       System.out.println("Substring: " + substr); // avaJ`,
                            "       // Check length and capacity",
                            `       System.out.println("Length: " + sb.length()); // 9`,
                            `       System.out.println("Capacity: " + sb.capacity()); // Typically 21 (16 + initial 5)`,
                            "       // Set new length",
                            "       sb.setLength(5);",
                            `       System.out.println("After setLength(5): " + sb); // avaJ `,
                            "   }",
                            "}",
                            "Output : ",
                            "   After append: Hello World",
                            "   After insert: Hello, World",
                            "   After replace: Hello, Java",
                            "   After delete: Hello Java",
                            "   After reverse: avaJ olleH",
                            "   Substring: avaJ",
                            "   Length: 9",
                            "   Capacity: 21",
                            "   After setLength(5): avaJ "
                        ]
                    },{
                        topicName: "Explanation of Example",
                        topicPoints: [
                            "Initialization: A StringBuilder is created with the initial string 'Hello'. Its default capacity is 16 plus the length of the initial string (5), so 21.",
                            "Append: ' World' is appended, modifying the builder to 'Hello World'.",
                            "Insert: A comma is inserted at index 5, resulting in 'Hello, World'.",
                            "Replace: The substring 'World' (indices 6 to 11) is replaced with 'Java', yielding 'Hello, Java'.",
                            "Delete: The comma at index 5 is deleted, resulting in 'Hello Java'.",
                            "Reverse: The builder is reversed to 'avaJ olleH'.",
                            "Substring: The first four characters ('avaJ') are extracted as a String.",
                            "Length and Capacity: The current length (9) and capacity (21) are displayed.",
                            "Set Length: The builder is truncated to 5 characters, resulting in 'avaJ '."
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Exception",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "Exception",
                        topicContent: "An exception in Java is an event that disrupts the normal flow of a program's execution. It represents an error or an unexpected condition that occurs during runtime, such as attempting to divide by zero, accessing a null object, or opening a non-existent file. Exceptions are objects derived from the java.lang.Throwable class, which has two main subclasses:",
                        topicPoints: [
                            "'Error: Represents serious problems that a program typically cannot recover from, such as OutOfMemoryError or StackOverflowError. These are usually not handled by the application.'",
                            "'Exception: Represents conditions that a program can catch and handle. This includes:'",
                            "'Checked Exceptions: Subclasses of Exception (excluding RuntimeException), like IOException or SQLException, which must be declared or handled at compile time.'",
                            "'Unchecked Exceptions: Subclasses of RuntimeException, like NullPointerException or ArithmeticException, which are not required to be declared or handled.'"
                          ]                          
                    },{
                        topicName: "Why we need Exception?",
                        topicContent: "Exceptions are essential for the following reasons:",
                        topicPoints: [
                            "Robustness: They enable programs to handle errors gracefully, preventing crashes and ensuring a better user experience.",
                            "Separation of Concerns: Exception handling separates error-handling code from normal business logic, improving code readability and maintainability.",
                            "Error Recovery: They allow programs to recover from errors by providing alternative paths or fallback mechanisms (e.g., retrying an operation or logging the issue).",
                            "Debugging: Exceptions provide detailed information (e.g., stack traces) to help developers identify and fix issues.",
                            "Type Safety: Java’s exception hierarchy ensures that specific errors are caught and handled appropriately, reducing the risk of generic error handling.",
                            "Enforced Error Handling: Checked exceptions force developers to anticipate and handle potential errors at compile time, improving code reliability."
                        ]
                    },{
                        topicName: "Types of Exceptions",
                        topicPoints: [
                            "Checked Exceptions: Must be declared in a method’s throws clause or caught in a catch block. Examples: 'IOException', 'ClassNotFoundException'.",
                            "Unchecked Exceptions: Do not need to be declared or caught. Examples: 'NullPointerException', 'ArrayIndexOutOfBoundsException'.",
                            "Custom Exceptions: User-defined exceptions, typically extending 'Exception' (for checked) or 'RuntimeException' (for unchecked)."
                          ]                          
                    }
                ]
            } 
        }, {
            topicKey: "Exception Handling",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "Exception Handling",
                        topicContent: "Exception handling in Java is a mechanism to manage runtime errors or exceptional conditions that disrupt the normal flow of a program, such as dividing by zero, accessing a null object, or attempting to open a non-existent file. It involves detecting, responding to, and recovering from exceptions—objects derived from the java.lang.Throwable class, which has two subclasses: Error (serious, unrecoverable issues like OutOfMemoryError) and Exception (recoverable issues like IOException or NullPointerException). Java provides keywords like try, catch, finally, throw, and throws to implement structured exception handling, ensuring programs can handle errors gracefully.",                        
                    },{
                        topicName: "Why we need Exception Handling?",
                        topicContent: "Exception handling is essential for the following reasons:",
                        topicPoints: [
                            "Prevent Program Crashes: It allows programs to handle errors without terminating abruptly, improving reliability.",
                            "Separation of Error Logic: It separates error-handling code from regular business logic, enhancing code clarity and maintainability.",
                            "Error Recovery: It enables recovery from errors by providing alternative paths, such as retrying operations or using default values.",
                            "Debugging Support: Exceptions provide stack traces and error details, helping developers diagnose and fix issues.",
                            "User Experience: It allows programs to display meaningful error messages instead of cryptic failures, improving usability.",
                            "Enforced Error Handling: For checked exceptions (e.g., IOException), Java forces developers to handle or declare them, reducing unhandled errors.",
                          ]                          
                    },{
                        topicName: "When to use Exception Handling?",
                        topicContent: "Exception handling should be used in the following scenarios:",
                        topicPoints: [
                            "Risky Operations: When executing code that may fail, such as file I/O, network requests, or database operations.",
                            "Input Validation: When processing user input or data that may be invalid (e.g., parsing numbers, accessing arrays).",
                            "Resource Management: When working with resources like files, database connections, or sockets that may encounter errors (e.g., file not found, connection timeout).",
                            "Critical Sections: When errors in one part of the program should not affect other parts, ensuring partial functionality remains intact.",
                            "Custom Error Scenarios: When defining application-specific errors (e.g., invalid business rules) using custom exceptions.",
                            "Avoiding Silent Failures: When you want to ensure errors are explicitly addressed rather than ignored, especially for checked exceptions.",
                        ],
                        topicNote: "Do not use exceptions for normal control flow (e.g., to replace loops or conditionals), as this is inefficient and misuses the mechanism."                          
                    },{
                        topicName: "How to use Exception Handling?",
                        topicContent: "Java provides a robust exception-handling framework using try, catch, finally, throw, and throws. Below are detailed explanations and examples.",
                        topicPoints: [
                            "try Block: Contains code that might throw an exception.",
                            "catch Block: Handles specific exceptions thrown in the try block. Multiple catch blocks can handle different exception types.",
                            "finally Block: Executes regardless of whether an exception occurs, typically for cleanup (e.g., closing resources).",
                            "throw Keyword: Explicitly throws an exception to signal an error condition.",
                            "throws Keyword: Declares that a method may throw one or more exceptions, used in method signatures for checked exceptions."
                          ]                          
                    },{
                        topicName: "Example 1: Basic Exception Handling",
                        topicExample: [
                            "public class BasicExceptionHandling {",
                            "   public static void main(String[] args) {",
                            "       try {",
                            "           int result = divide(10, 0);",
                            `           System.out.println("Result: " + result);`,
                            "       } catch (ArithmeticException e) {",
                            `           System.out.println("Error: Cannot divide by zero - " + e.getMessage());`,
                            "       } finally {",
                            `           System.out.println("Finally block executed.");`,
                            "       }",
                            "   }",
                            "   public static int divide(int a, int b) {",
                            "       return a / b; // Throws ArithmeticException if b is 0",
                            "   }",
                            "}",
                            "Output : ",
                            "   Error: Cannot divide by zero - / by zero",
                            "   Finally block executed."
                        ]
                    },{
                        topicName: "Explanation:",
                        topicPoints: [
                            "The try block attempts a division that throws an ArithmeticException.",
                            "The catch block handles the exception and prints an error message.",
                            "The finally block executes regardless, useful for cleanup tasks."
                        ]
                    },{
                        topicName: "Example 2: Handling Multiple Exceptions",
                        topicExample: [
                            "import java.io.*;",
                            "public class MultipleExceptionHandling {",
                            "   public static void main(String[] args) {",
                            "       try {",
                            `           FileReader file = new FileReader("data.txt");`,
                            "           int[] arr = new int[5];",
                            "           System.out.println(arr[10]); // This line won't execute if file is missing",
                            "       } catch (FileNotFoundException e) {",
                            `           System.out.println("Error: File not found - " + e.getMessage());`,
                            "       } catch (ArrayIndexOutOfBoundsException e) {",
                            `           System.out.println("Error: Invalid array index - " + e.getMessage());`,
                            "       } catch (Exception e) {",
                            `           System.out.println("General error: " + e.getMessage());`,
                            "       } finally {",
                            `           System.out.println("Cleanup in finally block.");`,
                            "       }",
                            "   }",
                            "}",
                            "Output : ",
                            "   Error: File not found - data.txt (No such file or directory)",
                            "   Cleanup in finally block."
                        ]
                    },{
                        topicName: "Explanation:",
                        topicPoints: [
                            "The try block attempts file access and array access, both of which may throw exceptions.",
                            "Specific catch blocks handle FileNotFoundException and ArrayIndexOutOfBoundsException.",
                            "A general Exception catch block serves as a fallback.",
                            "The finally block ensures cleanup."
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Custom Exception",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "Custom Exception",
                        topicContent: "A  custom exception in Java is a user-defined exception class created to represent specific error conditions in an application. It extends either the Exception class (for checked exceptions) or the RuntimeException class (for unchecked exceptions), inheriting from the java.lang.Throwable hierarchy. Custom exceptions allow developers to define meaningful, application-specific errors with tailored names, messages, and behaviors, making error handling more precise and descriptive.",                 
                    },{
                        topicName: "Why we need Custom Exception?",
                        topicContent: "Custom exceptions are needed for the following reasons:",
                        topicPoints: [
                            "Clarity: They provide descriptive names and messages that clearly indicate the specific error condition, improving code readability and debugging.",
                            "Application-Specific Errors: They allow developers to define errors unique to the application’s domain, such as business rule violations or invalid states.",
                            "Better Error Handling: They enable precise exception handling by distinguishing between different error types, avoiding reliance on generic exceptions like Exception.",
                            "Maintainability: They make code more maintainable by encapsulating error logic in well-defined classes, facilitating updates and reuse.",
                            "Improved User Experience: They allow meaningful error messages to be communicated to users, rather than cryptic or generic error descriptions.",
                            "Type Safety: They leverage Java’s type system to ensure specific errors are caught and handled appropriately, reducing the risk of mishandling errors."
                          ]                          
                    },{
                        topicName: "When to use Custom Exception?",
                        topicContent: "Custom exceptions should be used in the following scenarios:",
                        topicPoints: [
                            "Domain-Specific Errors: When an application has unique error conditions tied to its business logic (e.g., InvalidOrderException in an e-commerce system).",
                            "Business Rule Violations: When enforcing rules, such as minimum account balance, maximum file size, or invalid user input.",
                            "Differentiated Error Handling: When you need to handle different errors in distinct ways (e.g., retry for one error, log for another).",
                            "Improved Debugging: When generic exceptions (e.g., IllegalArgumentException) are too vague, and a specific exception provides better context.",
                            "API Design: When creating libraries or APIs to provide clear error types for users to catch and handle.",
                            "Consistency: When standardizing error handling across a large codebase to ensure uniformity in exception types and messages."
                        ],
                        topicNote: "Avoid creating custom exceptions for rare or one-off cases where standard exceptions (e.g., IllegalArgumentException, IOException) are sufficient."
                    },{
                        topicName: "Example: Custom Exception with throw and throws",
                        topicExample: [
                            "// Custom checked exception",
                            "class InsufficientBalanceException extends Exception {",
                            "   public InsufficientBalanceException(String message) {",
                            "       super(message);",
                            "   }",
                            "}",
                            "public class CustomExceptionHandling {",
                            "   public static void main(String[] args) {",
                            "       try {",
                            "           withdraw(100, 50);",
                            "       } catch (InsufficientBalanceException e) {",
                            `           System.out.println("Error: " + e.getMessage());`,
                            "       }",
                            "   }",
                            "   public static void withdraw(double balance, double amount) throws InsufficientBalanceException {",
                            "       if (amount > balance) {",
                            `           throw new InsufficientBalanceException("Insufficient balance: " + amount + " exceeds " + balance);`,
                            "       } else {",
                            `           System.out.println("Withdrawal successful: " + amount);`,
                            "       }",
                            "   }",
                            "}",
                            "Output : ",
                            "   Error: Insufficient balance: 50.0 exceeds 100.0"
                        ]
                    },{
                        topicName: "Explanation:",
                        topicPoints: [
                            "A custom exception InsufficientBalanceException is defined by extending Exception.",
                            "The withdraw method uses throws to declare it may throw the custom exception.",
                            "The throw keyword creates and throws the exception if the condition is met.",
                            "The try-catch block in main handles the exception."
                        ]
                    }
                ]
            }
        }, {
            topicKey: "Serialization",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "Serialization",
                        topicContent: "Serialization in Java is the process of converting an object’s state into a byte stream, which can be saved to a file, sent over a network, or stored in a database. The reverse process, called deserialization, reconstructs the object from the byte stream. Serialization is primarily facilitated by the java.io.Serializable interface, a marker interface that indicates a class can be serialized. Java’s serialization mechanism handles the conversion of an object’s fields, including primitive types and references to other objects, into a format that can be persisted or transmitted.",
                        topicPoints: [
                            "The serialized byte stream includes the object’s data, its class description, and metadata.",
                            "Only objects of classes implementing Serializable (or Externalizable) can be serialized.",
                            "Serialization is part of the java.io package, using classes like ObjectOutputStream and ObjectInputStream."
                        ]                          
                    },{
                        topicName: "Why we need Serialization?",
                        topicContent: "Serialization is needed for the following reasons:",
                        topicPoints: [
                            "Persistence: It allows objects to be saved to persistent storage (e.g., files, databases) for later retrieval, enabling state preservation across program executions.",
                            "Network Communication: It enables objects to be transmitted over a network, such as in distributed systems, client-server applications, or remote method invocation (RMI).",
                            "Interoperability: It provides a standard way to share object data between different Java applications or platforms.",
                            "State Transfer: It facilitates transferring complex object graphs (e.g., objects with nested references) without manual conversion.",
                            "Caching: It allows objects to be cached in serialized form for faster retrieval in applications like web servers or databases.",
                            "Flexibility: It supports deep copying of objects and cloning by serializing and deserializing them.",
                          ],                          
                    },{
                        topicName: "When to use Serialization?",
                        topicContent: "Serialization should be used in the following scenarios:",
                        topicPoints: [
                            "Saving Object State: When you need to save an object’s state to a file or database for later use (e.g., saving game progress, user preferences).",
                            "Distributed Systems: When objects need to be sent across a network in client-server applications, RMI, or messaging systems like JMS.",
                            "Session Management: When storing session data in web applications (e.g., HTTP session objects in servlets).",
                            "Caching: When caching objects in memory or disk to improve performance.",
                            "Object Cloning: When creating deep copies of objects by serializing and deserializing them.",
                            "Data Exchange: When sharing objects between different Java applications or systems that support Java serialization."
                        ],
                        topicNote: "Avoid serialization for sensitive data unless encrypted, as the byte stream can be intercepted or reverse-engineered. Consider alternatives like JSON or XML for cross-platform data exchange."           
                    },{
                        topicName: "How to use Serialization?",
                        topicContent: "Serialization involves marking a class as Serializable and using ObjectOutputStream to serialize and ObjectInputStream to deserialize. Below are steps and examples.",
                        topicPoints: [
                            "Implement Serializable: The class must implement the java.io.Serializable interface. Non-serializable fields should be marked as transient to exclude them.",
                            "Serialize the Object: Use ObjectOutputStream to write the object to a byte stream (e.g., file, network socket).",
                            "Deserialize the Object: Use ObjectInputStream to read the byte stream and reconstruct the object.",
                            "Handle Exceptions: Serialization may throw IOException, ClassNotFoundException, or NotSerializableException."
                        ]
                    },{
                        topicName: "Example: Basic Serialization and Deserialization",
                        topicExample: [
                            "import java.io.*;",
                            "class Employee implements Serializable {",
                            "   private static final long serialVersionUID = 1L; // Recommended for version control",
                            "   private String name;",
                            "   private int id;",
                            "   private transient String password; // Excluded from serialization",
                            "   public Employee(String name, int id, String password) {",
                            "       this.name = name;",
                            "       this.id = id;",
                            "       this.password = password;",
                            "   }",
                            "   @Override",
                            "   public String toString() {",
                            `       return "Employee{name='" + name + "', id=" + id + ", password=" + password + "}";`,
                            "   }",
                            "}",
                            "public class SerializationDemo {",
                            "   public static void main(String[] args) {",
                            "       // Create an Employee object",
                            `       Employee emp = new Employee("Alice", 101, "secret123");`,
                            "       // Serialize the object",
                            `       try (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("employee.ser"))) {`,
                            "           out.writeObject(emp);",
                            `           System.out.println("Object serialized: " + emp);`,
                            "       } catch (IOException e) {",
                            `           System.out.println("Serialization error: " + e.getMessage());`,
                            "       }",
                            "       // Deserialize the object",
                            `       try (ObjectInputStream in = new ObjectInputStream(new FileInputStream("employee.ser"))) {`,
                            "           Employee deserializedEmp = (Employee) in.readObject();",
                            `           System.out.println("Object deserialized: " + deserializedEmp);`,
                            "       } catch (IOException | ClassNotFoundException e) {",
                            `           System.out.println("Deserialization error: " + e.getMessage());`,
                            "       }",
                            "   }",
                            "}",
                            "Output : ",
                            "   Object serialized: Employee{name='Alice', id=101, password=secret123}",
                            "   Object deserialized: Employee{name='Alice', id=101, password=null}"
                        ]
                    },{
                        topicName: "Explanation:",
                        topicPoints: [
                            "The Employee class implements Serializable.",
                            "The password field is marked transient, so it’s excluded from serialization (set to null on deserialization).",
                            "ObjectOutputStream serializes the object to a file (employee.ser).",
                            "ObjectInputStream deserializes the file back into an object.",
                            "serialVersionUID ensures compatibility during class changes."
                          ]                          
                    }
                ]
            }
        }, {
            topicKey: "File Handling",
            topicValue: {
                whatYouGet: "",
                mainContent: [
                    {
                        topicName: "File Handling",
                        topicContent: "File handling in Java refers to the process of creating, reading, writing, updating, and deleting files on a storage device (e.g., hard disk, SSD). It involves interacting with files and directories using classes from the java.io and java.nio.file packages. File handling allows programs to persist data, read configuration files, log information, or manage file-based resources. Java provides multiple APIs for file operations:",
                        topicPoints: [
                            "java.io: Includes classes like File, FileReader, FileWriter, BufferedReader, BufferedWriter, and streams (FileInputStream, FileOutputStream) for basic file operations.",
                            "java.nio.file: Introduced in Java 7, provides a more modern and flexible API with classes like Path, Paths, Files, and FileSystem for advanced file handling, including file attributes and directory operations."
                        ],
                        topicNote: "File handling supports both text and binary files and includes mechanisms for handling exceptions, as file operations are prone to errors (e.g., file not found, permission issues)."
                    },{
                        topicName: "Why we need File Handling?",
                        topicContent: "File handling is essential for the following reasons:",
                        topicPoints: [
                            "Data Persistence: It allows programs to store data permanently on disk, enabling data to be reused across program executions (e.g., saving user settings, logs).",
                            "Data Exchange: It facilitates reading and writing data to files for sharing between applications or systems (e.g., CSV, JSON files).",
                            "Configuration Management: It enables programs to read configuration settings from files, making applications customizable without code changes.",
                            "Logging: It supports writing logs to files for debugging, auditing, or monitoring application behavior.",
                            "Resource Management: It allows interaction with external resources like files or directories, critical for many applications (e.g., processing uploaded files in web apps).",
                            "Backup and Recovery: It enables creating backups of data or restoring data from files, ensuring data integrity.",
                        ]                          
                    },{
                        topicName: "When to use File Handling?",
                        topicContent: "File handling should be used in the following scenarios:",
                        topicPoints: [
                            "Storing Application Data: When you need to save user data, game progress, or application state to a file (e.g., a text file for notes, a binary file for serialized objects).",
                            "Reading External Data: When processing data from files, such as configuration files, CSV datasets, or log files.",
                            "Logging Events: When recording application events or errors to a log file for debugging or auditing.",
                            "File-Based Communication: When applications exchange data via files (e.g., exporting reports, importing user data).",
                            "Managing File Systems: When creating, deleting, or modifying files and directories (e.g., organizing user-uploaded files in a web application).",
                            "Batch Processing: When reading or writing large datasets in batch processes, such as processing transaction logs or generating reports.",
                        ],
                        topicNote: "For large-scale or high-performance file operations, consider java.nio.file for its efficiency and modern features. For database-driven applications, prefer databases over files for structured data storage."                          
                    },{
                        topicName: "Example: File Handling",
                        topicExample: [
                            "import java.io.File;",
                            "public class FileHandling {",
                            "   public static void main(String[] args){",
                            `       File file = new File("D://Sample/Student.txt");`,
                            `       System.out.println("canExecute() - To check we can Execute(works with) or not :  "+file.canExecute());`,
                            `       System.out.println("getAbsolutePath() - To get the path of the file :  "+file.getAbsolutePath());`,
                            `       System.out.println("getName() - To get the name of the file :  "+file.getName());`,
                            `       System.out.println("canRead() - To check we can read that file :  "+file.canRead());`,
                            `       System.out.println("canWrite() - To check we can write that file :  "+file.canWrite());`,
                            `       System.out.println("exists() - To check the file is their or not :  "+file.exists());`,
                            `   }`,
                            "}",
                            "Output : ",
                            "   canExecute() - To check we can Execute(works with) or not :  true",
                            "   getAbsolutePath() - To get the path of the file :  D:\\Sample\\Student.txt",
                            "   getName() - To get the name of the file :  Student.txt",
                            "   canRead() - To check we can read that file :  true",
                            "   canWrite() - To check we can write that file :  true",
                            "   exists() - To check the file is their or not :  true"
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
