# -*- coding: utf-8 -*-
"""
Generate 100 questions for Chapter 6: Classes & Objects
(OOP pillars, classes, objects, instance vs static, constructors, constructor chaining with this(),
encapsulation, getters/setters, access modifiers: private, default, protected, public)
Categories: 25 Theory, 25 Error Identification, 25 Output Prediction, 25 Real-World Scenarios
Levels: easy, medium, hard
"""
import json

questions = []

def add_q(q, options, answer, explain, topic, q_type, level, strength, weakness):
    assert len(options) == 4, f"Options must be 4: {q}"
    assert 0 <= answer <= 3, f"Answer must be 0-3: {q}"
    assert q_type in ["theory", "error", "output", "scenario"], f"Invalid type: {q_type}"
    assert level in ["easy", "medium", "hard"], f"Invalid level: {level}"
    questions.append({
        "q": q,
        "options": options,
        "answer": answer,
        "explain": explain,
        "topic": topic,
        "type": q_type,
        "level": level,
        "strength": strength,
        "weakness": weakness
    })

# =========================================================================
# 1. THEORETICAL CONCEPTS (25 Questions)
# =========================================================================
add_q(
    "What is the difference between a class and an object in Java?",
    [
        "A class is an instance in memory; an object is source code",
        "A class is a blueprint/template defining state (fields) and behavior (methods); an object is a concrete instance of that class allocated on the heap",
        "A class can hold data; an object can only hold methods",
        "They are identical synonyms in Java"
    ],
    1,
    "A class defines the type, structure, and behavior. An object is a runtime instance created from the class blueprint using `new`.",
    "Class vs Object Concept", "theory", "easy",
    "Understands the core relationship between classes and objects.",
    "A class is a blueprint; an object is an instance created in heap memory."
)

add_q(
    "When does the Java compiler automatically generate a default no-argument constructor for a class?",
    [
        "Always, for every class regardless of user code",
        "Only if the programmer declares NO constructors of any kind in the class",
        "Only if the class is declared public",
        "Only if the class extends another class"
    ],
    1,
    "If a class contains zero constructor definitions, `javac` automatically synthesizes a default no-arg constructor. If the programmer defines ANY constructor (with or without arguments), no default constructor is generated.",
    "Default Constructor Generation", "theory", "easy",
    "Knows the rule for compiler default constructor generation.",
    "The compiler only provides a default constructor if no constructors are declared by the developer."
)

add_q(
    "What is the purpose of the `this` keyword in Java?",
    [
        "To refer to the parent superclass",
        "To refer to the current object instance whose method or constructor is being invoked",
        "To create a new thread",
        "To allocate memory on the stack"
    ],
    1,
    "`this` is an implicit reference to the current object instance. It is commonly used to resolve variable shadowing between instance fields and parameters (`this.x = x`) or invoke overloaded constructors (`this(...)`).",
    "This Keyword", "theory", "easy",
    "Understands the role of the `this` reference.",
    "`this` refers to the current object instance."
)

add_q(
    "What is the difference between a `static` variable and an instance variable?",
    [
        "Instance variables are shared across all instances; static variables belong to individual objects",
        "Static variables belong to the class itself and are shared by all instances (one copy in memory); instance variables belong to specific object instances (each instance has its own copy)",
        "Static variables cannot be modified; instance variables can",
        "Static variables are allocated on the stack"
    ],
    1,
    "A `static` field belongs to the class and exists once per classloader, shared by all instances. Instance fields are allocated separately for each object instance on the heap.",
    "Static vs Instance Variables", "theory", "easy",
    "Distinguishes class-level static fields from instance fields.",
    "Static fields are shared across all instances; instance fields belong to individual objects."
)

add_q(
    "What are the four access modifiers in Java, ordered from most restrictive to least restrictive?",
    [
        "`public` -> `protected` -> default (package-private) -> `private`",
        "`private` -> default (package-private) -> `protected` -> `public`",
        "`private` -> `protected` -> default -> `public`",
        "`protected` -> `private` -> default -> `public`"
    ],
    1,
    "`private` (class only) is most restrictive, followed by default/package-private (same package), `protected` (package + subclasses), and `public` (accessible everywhere).",
    "Access Modifier Hierarchy", "theory", "easy",
    "Understands the accessibility hierarchy of access modifiers.",
    "Accessibility order: private (most restrictive) < default < protected < public (least restrictive)."
)

add_q(
    "What is encapsulation in Object-Oriented Programming?",
    [
        "Inheriting behavior from a parent class",
        "Bundling data (fields) and methods operating on that data within a class, and restricting direct external access to fields using private modifiers and public getters/setters",
        "Writing all code in a single file",
        "Converting code to bytecode"
    ],
    1,
    "Encapsulation is data hiding and abstraction: declaring fields private and exposing controlled public accessor (getter) and mutator (setter) methods to enforce validation and state integrity.",
    "Encapsulation Principle", "theory", "easy",
    "Understands encapsulation and information hiding.",
    "Encapsulation protects object state by hiding private fields behind public getters and setters."
)

add_q(
    "What rule governs constructor chaining using `this(...)` inside a constructor?",
    [
        "`this(...)` can be placed anywhere in the constructor body",
        "`this(...)` MUST be the very first statement in the constructor body",
        "A constructor can contain multiple `this(...)` calls",
        "`this(...)` can only call constructors with fewer parameters"
    ],
    1,
    "The invocation of another constructor via `this(...)` must strictly be the first statement in a constructor. Violating this triggers a compilation error.",
    "Constructor Chaining with this()", "theory", "medium",
    "Knows that `this(...)` must be the first statement in a constructor.",
    "Constructor calls using `this(...)` must be the very first line of the constructor."
)

add_q(
    "Can a `static` method access instance variables or call non-static methods directly without an object reference?",
    [
        "Yes, if they are public",
        "No, because static methods execute at class-level and do not have an active `this` instance context",
        "Yes, using the `this` keyword",
        "Only in Java 17 and above"
    ],
    1,
    "Static methods belong to the class and execute without an object context. Accessing instance fields or methods directly without an explicit instance reference is illegal.",
    "Static Context Constraints", "theory", "easy",
    "Understands why static methods cannot access instance fields directly.",
    "Static methods have no `this` context and cannot access instance fields without an object reference."
)

add_q(
    "What is a static initialization block (`static { ... }`) in a Java class?",
    [
        "A block executed every time a new object is instantiated",
        "A block executed once when the class is first loaded into memory by the JVM, before any constructors or main method calls",
        "A block that runs right before garbage collection",
        "A block for handling checked exceptions"
    ],
    1,
    "A `static` initialization block runs exactly once when the class is loaded by the JVM ClassLoader, commonly used to initialize complex static fields.",
    "Static Initialization Block", "theory", "medium",
    "Understands when static initializer blocks execute.",
    "Static initialization blocks execute once when the class is loaded into memory."
)

add_q(
    "What is an instance initialization block (`{ ... }` without static) in a Java class?",
    [
        "A block executed once per class load",
        "A block executed every time a new object instance is created, running immediately before the constructor body executes",
        "A block executed only when an object is cloned",
        "A block executed when a method returns"
    ],
    1,
    "An instance initializer block runs every time an object is instantiated, executed before the constructor's body (after `super()` completes).",
    "Instance Initialization Block", "theory", "medium",
    "Understands instance initializer execution timing.",
    "Instance initializers run before the constructor body whenever a new instance is created."
)

add_q(
    "What is a copy constructor in Java?",
    [
        "A constructor generated automatically by the compiler",
        "A constructor that creates a new object by copying the fields of an existing object of the same class: `public Person(Person other)`",
        "A constructor that clones arrays only",
        "A constructor marked with the `copy` keyword"
    ],
    1,
    "A copy constructor takes another instance of the same class as a parameter and initializes the new object's fields to match, providing a clean alternative to `.clone()`.",
    "Copy Constructor Pattern", "theory", "medium",
    "Identifies copy constructor design pattern in Java.",
    "A copy constructor creates a new instance initialized with values from an existing instance."
)

add_q(
    "What is the difference between shallow copy and deep copy when copying an object?",
    [
        "Shallow copy is for primitives; deep copy is for Strings only",
        "Shallow copy duplicates primitive fields and copies reference addresses (both objects point to the same nested objects); deep copy creates copies of the nested objects as well",
        "Shallow copy allocates on stack; deep copy allocates on heap",
        "They are identical in Java"
    ],
    1,
    "In a shallow copy, nested object references are shared. In a deep copy, all nested objects are cloned recursively, ensuring complete independence.",
    "Shallow vs Deep Copy", "theory", "medium",
    "Understands shallow vs deep object cloning semantics.",
    "Shallow copies share nested object references; deep copies duplicate nested objects independently."
)

add_q(
    "What does the `final` keyword mean when applied to a class field?",
    [
        "The field can only be accessed once",
        "The field is a constant that must be initialized upon declaration or in every constructor, and cannot be reassigned thereafter",
        "The field is garbage collected first",
        "The field is stored in CPU registers"
    ],
    1,
    "A `final` instance field must be definitively assigned by the end of every constructor and cannot be reassigned once initialized.",
    "Final Instance Fields", "theory", "easy",
    "Understands immutability enforced by final instance fields.",
    "A `final` field cannot be reassigned after initialization."
)

add_q(
    "Can a constructor be declared `final`, `static`, or `abstract`?",
    [
        "Yes, constructors can have any modifier",
        "No, constructors cannot be final, static, or abstract because they are not inherited, belong to instances being created, and must have a body",
        "Yes, constructors can be static",
        "Only abstract is permitted"
    ],
    1,
    "Constructors cannot be inherited (so `final` is meaningless), require an instance being constructed (so `static` is invalid), and must construct objects (so `abstract` is invalid).",
    "Constructor Modifier Restrictions", "theory", "medium",
    "Knows that constructors cannot be marked static, final, or abstract.",
    "Constructors cannot be `static`, `final`, or `abstract`."
)

add_q(
    "What is a 'plain old Java object' (POJO) or JavaBean convention?",
    [
        "A class with no methods",
        "A class with private fields, a public no-argument constructor, and public getter and setter methods following standard naming conventions",
        "An interface with no fields",
        "A class extending java.lang.Applet"
    ],
    1,
    "JavaBeans follow a standard convention: private fields, public no-arg constructor, and standard getters (`getX()`) / setters (`setX(...)`).",
    "JavaBean & POJO Conventions", "theory", "easy",
    "Understands JavaBean structural conventions.",
    "JavaBeans feature private fields, a public no-arg constructor, and getters/setters."
)

add_q(
    "What happens when you create an object: `Person p = new Person();`?",
    [
        "Memory is allocated on the heap, fields are initialized to defaults, initializers run, the constructor executes, and the memory address is assigned to `p`",
        "The class is recompiled by javac",
        "The object is placed directly on the thread call stack",
        "p is initialized to null"
    ],
    0,
    "`new` allocates heap space, zeroes fields to defaults, executes instance initializers, runs constructor code, and yields the heap reference address to `p`.",
    "Object Instantiation Lifecycle", "theory", "medium",
    "Understands heap allocation and object construction lifecycle.",
    "`new` allocates heap space, zeroes fields, runs initializers/constructors, and returns reference."
)

add_q(
    "Can a class have multiple constructors in Java?",
    [
        "No, Java permits only one constructor per class",
        "Yes, this is constructor overloading, provided each constructor has a distinct parameter list (types, number, or order)",
        "Yes, but they must all have identical parameter lists",
        "Only if the class implements Cloneable"
    ],
    1,
    "Constructor overloading allows multiple constructors with different parameter signatures to initialize objects in various initial states.",
    "Constructor Overloading", "theory", "easy",
    "Understands constructor overloading mechanics.",
    "A class can have multiple constructors as long as their parameter lists differ."
)

add_q(
    "What is package-private (default) access in Java?",
    [
        "Accessible from any class in any package",
        "Accessible only by classes located within the exact same package",
        "Accessible only within the declaring class",
        "Accessible by subclasses in different packages"
    ],
    1,
    "When no access modifier is specified (default access), the member is accessible to any class in the same package, but inaccessible to classes outside that package.",
    "Package-Private (Default) Access", "theory", "easy",
    "Knows scope of package-private access modifier.",
    "Default (no modifier) access restricts visibility to classes within the same package."
)

add_q(
    "Can a top-level class be declared `private` or `protected`?",
    [
        "Yes, any top-level class can be private",
        "No, a top-level (outer) class can only be declared `public` or package-private (default); only nested/inner classes can be private or protected",
        "Yes, top-level classes are private by default",
        "Only protected is permitted"
    ],
    1,
    "Top-level classes can only have `public` or package-private access. Declaring an outer class `private` or `protected` causes a compilation error.",
    "Top-Level Class Modifier Restrictions", "theory", "medium",
    "Knows that top-level classes can only be public or default access.",
    "Top-level classes cannot be `private` or `protected`; only `public` or package-private."
)

add_q(
    "What is an immutable class in Java (such as `java.lang.String` or `java.lang.Integer`)?",
    [
        "A class that cannot be compiled",
        "A class whose instances cannot have their state modified after creation (all fields are private final, no setters, class is final)",
        "A class with no constructors",
        "A class that cannot be instantiated"
    ],
    1,
    "An immutable class ensures that once an object is constructed, its state can never change. This is achieved via `final` class, `private final` fields, and no mutator methods.",
    "Immutable Class Design", "theory", "medium",
    "Understands immutable object design requirements.",
    "Immutable classes have final classes, private final fields, and no setter methods."
)

add_q(
    "What is garbage collection in Java?",
    [
        "Deleting source code files after compilation",
        "An automatic JVM memory management process that identifies and reclaims heap memory occupied by objects that are no longer reachable by any active reference",
        "Clearing local variables from the stack",
        "Shutting down the operating system"
    ],
    1,
    "The JVM's Garbage Collector automatically frees heap memory occupied by unreachable objects, eliminating manual memory deallocation (`free`/`delete`).",
    "Garbage Collection Architecture", "theory", "easy",
    "Understands automatic JVM heap garbage collection.",
    "Garbage collection automatically reclaims heap memory of unreachable objects."
)

add_q(
    "What method is called when you print an object directly: `System.out.println(myObject);`?",
    [
        "`myObject.print()`",
        "`myObject.toString()`",
        "`myObject.display()`",
        "`myObject.dump()`"
    ],
    1,
    "`PrintStream.println(Object)` internally calls `String.valueOf(obj)`, which invokes `obj.toString()` (or prints `\"null\"` if the object reference is null).",
    "toString Method Invocation", "theory", "easy",
    "Knows that println invokes toString() on object arguments.",
    "`println(obj)` invokes `obj.toString()` to obtain a string representation."
)

add_q(
    "Can two different objects of the same class have different values for a `static` field?",
    [
        "Yes, each object has its own copy of static fields",
        "No, static fields belong to the class; all instances share the exact same single variable and value in memory",
        "Yes, if one is serialized",
        "Only if the field is volatile"
    ],
    1,
    "Static fields are class-level variables. Modifying a static field via one object affects the value seen by all other instances.",
    "Shared Static State", "theory", "easy",
    "Understands that static fields are shared across all instances.",
    "All instances share a single copy of a static field."
)

add_q(
    "What is a singleton pattern in Java?",
    [
        "A class that can only have a single method",
        "A design pattern that restricts class instantiation to a single unique instance across the entire application lifecycle",
        "A class with a single constructor",
        "An array with length 1"
    ],
    1,
    "The Singleton pattern ensures a class has only one instance, typically using a `private` constructor and a public `static` factory method `getInstance()`.",
    "Singleton Pattern", "theory", "medium",
    "Recognized the Singleton design pattern.",
    "Singleton pattern guarantees only one instance exists, using a private constructor."
)

add_q(
    "What happens when an object reference variable is assigned `null`: `Person p = null;`?",
    [
        "The object on the heap is instantly erased from RAM",
        "The reference variable `p` no longer points to any object; the object previously referenced becomes eligible for garbage collection if no other references point to it",
        "Throws a NullPointerException immediately",
        "The Person class is unloaded"
    ],
    1,
    "Assigning `null` detaches the reference. If no other active references point to the heap object, it becomes eligible for garbage collection.",
    "Null Reference & GC Eligibility", "theory", "easy",
    "Understands null assignment and garbage collection eligibility.",
    "Assigning `null` makes the object eligible for GC if no other references point to it."
)

# --- Ch 6: 2. Error Identification (25 Qs) ---
add_q(
    "Why does the following code fail to compile?\n```java\npublic class Student {\n    private int age;\n}\n// in another class:\nStudent s = new Student();\ns.age = 20;\n```",
    [
        "Student has no constructor",
        "Field `age` has private access in `Student` and cannot be directly accessed from outside the class",
        "20 must be a String",
        "s is not instantiated"
    ],
    1,
    "`private` members are accessible strictly within the declaring class. Accessing `s.age` from an outside class violates encapsulation, causing a compile error.",
    "Private Field Access Violation", "error", "easy",
    "Caught illegal access to private field from external class.",
    "`private` fields cannot be accessed directly from external classes; use public getters/setters."
)

add_q(
    "Why does this code cause a compilation error?\n```java\npublic class Book {\n    public Book(String title) {}\n}\n// in main:\nBook b = new Book();\n```",
    [
        "Book cannot be public",
        "Cannot find symbol: constructor `Book()` without arguments does not exist because declaring `Book(String)` suppresses default constructor generation",
        "b must be capitalized",
        "new keyword is missing parameter"
    ],
    1,
    "Because the programmer declared a parameterized constructor `Book(String)`, the compiler does NOT generate the default no-arg constructor. Calling `new Book()` fails.",
    "Suppressed Default Constructor Error", "error", "easy",
    "Recognized that user-defined constructors suppress default constructor generation.",
    "Declaring a parameterized constructor suppresses the automatic no-arg constructor."
)

add_q(
    "Identify the compilation error in this constructor chaining code:\n```java\npublic class Point {\n    private int x, y;\n    public Point(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n    public Point() {\n        System.out.println(\"Default\");\n        this(0, 0);\n    }\n}\n```",
    [
        "Point cannot have two constructors",
        "Constructor call `this(0, 0)` must be the first statement in the constructor body",
        "x and y cannot be private",
        "println cannot be in constructors"
    ],
    1,
    "`this(...)` must strictly appear as the first statement in a constructor. Placing `System.out.println` before `this(0, 0)` causes: 'call to this must be first statement in constructor'.",
    "Misplaced this() Constructor Call", "error", "easy",
    "Spotted misplaced `this(...)` constructor call.",
    "`this(...)` must be the very first statement inside a constructor."
)

add_q(
    "What is the compilation issue in this static method?\n```java\npublic class Counter {\n    private int count = 0;\n    public static void increment() {\n        count++;\n    }\n}\n```",
    [
        "count cannot be initialized to 0",
        "Non-static field `count` cannot be referenced from a static context (`increment()`)",
        "increment must return int",
        "static methods cannot be public"
    ],
    1,
    "`increment()` is static (class-level), while `count` is an instance field. A static method cannot access instance fields directly because no object instance exists.",
    "Static Accessing Instance Field Error", "error", "easy",
    "Caught static method attempting to access non-static instance field.",
    "Static methods cannot directly access non-static instance fields."
)

add_q(
    "Why does this constructor fail to initialize the instance variable?\n```java\npublic class Car {\n    private String model;\n    public Car(String model) {\n        model = model;\n    }\n    public String getModel() { return model; }\n}\n```",
    [
        "Compilation error: cannot name parameter model",
        "Shadowing bug: `model = model;` assigns the parameter to itself; the instance field remains null (must use `this.model = model;`)",
        "getModel must be static",
        "Car cannot return model"
    ],
    1,
    "The parameter `model` shadows the field `model`. `model = model;` assigns the parameter to itself. To assign to the instance field, `this.model = model;` is required.",
    "Parameter Shadowing Assignment Bug", "error", "medium",
    "Identified parameter self-assignment due to missing `this.` qualifier.",
    "Use `this.field = param;` to resolve variable shadowing in constructors."
)

add_q(
    "What error occurs in this constructor header?\n```java\npublic class Account {\n    public void Account() {\n        System.out.println(\"Created\");\n    }\n}\n```",
    [
        "Account cannot be public",
        "Because it has return type `void`, Java treats it as a regular method, NOT a constructor; calling `new Account()` will invoke the default constructor, not this method",
        "Compilation error: constructors cannot print",
        "Account must take parameters"
    ],
    1,
    "Constructors have NO return type. Adding `void` turns it into a standard method that happens to match the class name. It is not executed during `new Account()`.",
    "Constructor with Void Return Type Trap", "error", "medium",
    "Recognized that adding void to constructor name creates a normal method.",
    "Constructors must not have a return type; adding `void` makes it a regular method."
)

add_q(
    "Why does this code cause a compilation error?\n```java\npublic class Test {\n    public static void main(String[] args) {\n        System.out.println(this);\n    }\n}\n```",
    [
        "println cannot print objects",
        "Cannot use 'this' in a static context (`main` is static)",
        "args is not used",
        "Test must have a constructor"
    ],
    1,
    "`this` represents the current instance. Static methods belong to the class and have no instance, so `this` is illegal in static methods.",
    "This in Static Context Error", "error", "easy",
    "Recognized that 'this' is illegal in static methods.",
    "The keyword `this` cannot be referenced from a static method."
)

add_q(
    "Identify the compilation error in this top-level class definition:\n```java\nprivate class Database {\n    public void connect() {}\n}\n```",
    [
        "Database cannot have methods",
        "Modifier `private` not allowed here: top-level classes cannot be declared private",
        "connect must return int",
        "Missing main method"
    ],
    1,
    "Top-level classes can only be `public` or package-private (no modifier). Marking a top-level class `private` causes: 'modifier private not allowed here'.",
    "Private Top-Level Class Error", "error", "easy",
    "Caught illegal private access modifier on top-level class.",
    "Top-level classes cannot be declared `private`; only `public` or default package access."
)

add_q(
    "Why does this code fail to compile?\n```java\npublic class MathUtils {\n    public final int MAX = 100;\n}\n// in another class:\nMathUtils.MAX = 200;\n```",
    [
        "MAX is not static, and it is marked final so it cannot be reassigned",
        "MathUtils has no constructor",
        "MAX must be lowercase",
        "200 is too large"
    ],
    0,
    "`MAX` is not `static` (so `MathUtils.MAX` is invalid), and it is `final` (so it cannot be reassigned). Both issues violate Java syntax.",
    "Final and Static Misconception", "error", "easy",
    "Spotted non-static access and final reassignment violation.",
    "`final` fields cannot be reassigned, and non-static fields require an instance."
)

add_q(
    "What is the issue with this recursive constructor call?\n```java\npublic class Node {\n    public Node() {\n        this();\n    }\n}\n```",
    [
        "Node cannot have no-arg constructor",
        "Compilation error: recursive constructor invocation",
        "Node must extend Object",
        "Throws StackOverflowError at compile-time"
    ],
    1,
    "A constructor cannot call itself directly or indirectly. The compiler detects cyclic constructor chaining and reports: 'recursive constructor invocation'.",
    "Recursive Constructor Invocation Error", "error", "medium",
    "Recognized compile-time rejection of cyclic constructor calls.",
    "Constructors cannot call themselves; cyclic constructor chaining is a compile-time error."
)

add_q(
    "Why does the following snippet produce a compilation error?\n```java\npublic class A {\n    public int x;\n}\npublic class B {\n    public int y;\n}\n```",
    [
        "A and B must have constructors",
        "Only one public class is allowed per `.java` source file, and its name must match the filename",
        "x and y must be private",
        "Classes cannot be in the same file"
    ],
    1,
    "A single `.java` compilation unit can contain at most ONE `public` top-level class, whose name must match the file name.",
    "Multiple Public Classes in Single File Error", "error", "easy",
    "Understands the one-public-class-per-file rule in Java.",
    "A Java source file can contain at most one `public` top-level class matching the file name."
)

add_q(
    "Identify the bug in this setter method:\n```java\npublic class BankAccount {\n    private double balance;\n    public void setBalance(double balance) {\n        if (balance >= 0) {\n            balance = balance;\n        }\n    }\n}\n```",
    [
        "balance >= 0 is invalid condition",
        "Parameter `balance` shadows field `balance`, so `balance = balance;` assigns to the parameter; the field is never updated (use `this.balance = balance;`)",
        "setBalance must return double",
        "balance cannot be private"
    ],
    1,
    "Without `this.balance = balance;`, the assignment modifies only the local parameter. The instance field remains unchanged.",
    "Setter Missing this Bug", "error", "easy",
    "Caught missing `this.` qualification in setter method.",
    "Use `this.balance = balance;` in setters to assign parameter values to instance fields."
)

add_q(
    "Why does this code cause a compilation error?\n```java\npublic class User {\n    private final String id;\n    public User() {}\n}\n```",
    [
        "User must be public",
        "Variable 'id' might not have been initialized: final instance fields must be initialized at declaration or in every constructor",
        "String cannot be final",
        "id must be static"
    ],
    1,
    "A blank `final` instance variable must be definitively assigned in every constructor. Since `User()` leaves `id` uninitialized, the compiler rejects it.",
    "Uninitialized Blank Final Field Error", "error", "medium",
    "Caught unassigned blank final field in constructor.",
    "`final` instance fields must be initialized in every constructor if not initialized at declaration."
)

add_q(
    "What error occurs in this constructor definition?\n```java\npublic class Employee {\n    public static Employee() {}\n}\n```",
    [
        "Employee must return void",
        "Modifier `static` not allowed here: constructors cannot be static",
        "Employee must be private",
        "Constructors cannot be public"
    ],
    1,
    "Constructors are responsible for creating object instances. Declaring a constructor `static` is illegal syntax.",
    "Static Constructor Error", "error", "easy",
    "Recognized that constructors cannot be static.",
    "Constructors cannot be declared `static`."
)

add_q(
    "Why does this code fail to compile?\n```java\npublic class Box {\n    private int volume;\n    public Box(int v) { volume = v; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Box b = new Box();\n    }\n}\n```",
    [
        "Box cannot be instantiated in Main",
        "Constructor `Box()` in class `Box` cannot be applied to given types; required: `int`, found: no arguments",
        "volume must be double",
        "Main must extend Box"
    ],
    1,
    "Defining `Box(int v)` suppresses default no-argument constructor generation. Calling `new Box()` fails to find a matching constructor.",
    "Mismatched Constructor Arguments Error", "error", "easy",
    "Caught missing constructor matching zero arguments.",
    "Provide a no-arg constructor if you want callers to instantiate `new Box()` without arguments."
)

add_q(
    "What is the compilation issue in this snippet?\n```java\npublic class Item {\n    int price;\n    public Item(int price) {\n        this(price, 0);\n        this.price = price;\n    }\n    public Item(int price, int discount) {}\n}\n```",
    [
        "Item cannot have 2 constructors",
        "The code compiles cleanly! Calling `this(...)` as the first statement followed by other assignments is completely valid",
        "price cannot be 0",
        "this cannot take 2 parameters"
    ],
    1,
    "`this(price, 0)` is the first statement, which satisfies Java syntax. Subsequent lines like `this.price = price;` are completely valid statements after constructor chaining.",
    "Valid Constructor Chaining Sequence", "error", "hard",
    "Understands that additional statements are permitted after `this(...)` in a constructor.",
    "`this(...)` must be the FIRST statement, but statements can follow it in the constructor body."
)

add_q(
    "Why does this code throw a `NullPointerException`?\n```java\npublic class Classroom {\n    Student leader;\n    public void printLeader() {\n        System.out.println(leader.getName());\n    }\n}\n```",
    [
        "leader is not a Student",
        "Instance field `leader` is uninitialized and defaults to `null`; dereferencing `leader.getName()` throws `NullPointerException`",
        "Classroom cannot print",
        "getName() must be static"
    ],
    1,
    "Object instance fields initialize to `null` by default. Attempting to invoke `.getName()` on an uninitialized reference throws `NullPointerException`.",
    "Default Null Field Dereference", "error", "easy",
    "Identified NullPointerException on uninitialized object field.",
    "Object instance fields default to `null`; initialize them before calling methods."
)

add_q(
    "Identify the error in this singleton implementation:\n```java\npublic class Config {\n    private static Config instance = new Config();\n    public Config() {}\n    public static Config getInstance() { return instance; }\n}\n```",
    [
        "getInstance must be private",
        "The constructor `Config()` is declared `public`, allowing external classes to create multiple instances and breaking the Singleton pattern",
        "instance must be non-static",
        "Config must be final"
    ],
    1,
    "A true Singleton MUST declare its constructor `private` to prevent external instantiation via `new Config()`.",
    "Public Constructor Singleton Flaw", "error", "medium",
    "Spotted architectural flaw: public constructor breaking Singleton pattern.",
    "The Singleton pattern requires a `private` constructor to prevent external instantiation."
)

add_q(
    "Why does this code fail to compile?\n```java\npublic class Widget {\n    private static int totalWidgets;\n    public void add() {\n        this.totalWidgets++;\n    }\n}\n```",
    [
        "static variables cannot be incremented",
        "It compiles! Accessing a static field using `this.` or an instance reference is valid syntax (though discouraged)",
        "totalWidgets must be final",
        "add must be static"
    ],
    1,
    "Accessing static fields via an instance reference (`this.totalWidgets`) is valid in Java (though triggers a compiler warning recommending `Widget.totalWidgets`). It does NOT fail compilation.",
    "Static Access via Instance Syntax Validity", "error", "hard",
    "Understands that accessing static members via instance references compiles with a warning.",
    "Accessing static members through instance references compiles but is discouraged; use class qualification."
)

add_q(
    "What is the compilation error in this code?\n```java\npublic class Test {\n    static {\n        int x = 10;\n    }\n    public static void main(String[] args) {\n        System.out.println(x);\n    }\n}\n```",
    [
        "static blocks cannot be declared",
        "Cannot find symbol: variable 'x' is local to the static block and not accessible inside `main`",
        "main cannot print x",
        "x must be final"
    ],
    1,
    "Variables declared inside a static initialization block are local to that block. To make `x` accessible across methods, declare it as a static field outside the block.",
    "Static Block Scope Leak Error", "error", "easy",
    "Recognized that variables declared inside static blocks are block-scoped.",
    "Variables declared inside a static block are local to that block and cannot be accessed elsewhere."
)

add_q(
    "Why does this code cause a compiler error?\n```java\npublic class A {\n    public A(int x) {}\n}\npublic class B extends A {}\n```",
    [
        "B cannot extend A",
        "Implicit super constructor `A()` is undefined for default constructor in B (A has only `A(int)`)",
        "A must be an interface",
        "B must declare fields"
    ],
    1,
    "The default constructor of B attempts to invoke `super()`. Because class A has no no-arg constructor, B fails to compile unless an explicit constructor calling `super(x)` is provided.",
    "Inherited Missing No-Arg Constructor Error", "error", "medium",
    "Understands default super() constructor dependency.",
    "If superclass lacks a no-arg constructor, subclasses must explicitly invoke `super(args)`."
)

add_q(
    "What error occurs in this method?\n```java\npublic class MathService {\n    public double sqrt(double n) {\n        if (n < 0) return;\n        return Math.sqrt(n);\n    }\n}\n```",
    [
        "Math.sqrt is invalid",
        "Cannot return without a value from a method with non-void result type `double`",
        "n < 0 cannot be tested",
        "sqrt must be static"
    ],
    1,
    "`return;` without an expression is only permitted in `void` methods. In a method returning `double`, an explicit value (or exception) must be returned.",
    "Empty Return in Non-Void Method", "error", "easy",
    "Caught empty return statement in non-void method.",
    "Non-void methods must return a value; `return;` is only legal in `void` methods."
)

add_q(
    "Why does this code fail to compile?\n```java\npublic class Counter {\n    private static int count;\n    public static void reset() {\n        this.count = 0;\n    }\n}\n```",
    [
        "count cannot be 0",
        "Cannot use 'this' in a static method (`reset()` is static)",
        "reset must be private",
        "count must be public"
    ],
    1,
    "`reset()` is a static method. `this` cannot be referenced from static methods. It should be written as `count = 0;` or `Counter.count = 0;`.",
    "This Reference in Static Method Error", "error", "easy",
    "Spotted 'this' used inside static method.",
    "Static methods cannot reference `this`; use the class name to qualify static members."
)

add_q(
    "Identify the issue in this code:\n```java\npublic class Data {\n    public int x;\n    public void copy(Data other) {\n        other.x = this.x;\n    }\n}\n```",
    [
        "x must be private",
        "It compiles cleanly! Private and public fields of any instance of the same class are accessible within that class's methods",
        "this cannot be used with other",
        "copy must be static"
    ],
    1,
    "In Java, access modifiers are class-based, not instance-based. Any method in class `Data` can access members of any `Data` instance. The code compiles cleanly.",
    "Class-Based Access Modifier Scope", "error", "hard",
    "Understands that private/public access is class-based, allowing peer instance access.",
    "In Java, encapsulation is class-based: methods of a class can access members of any instance of that same class."
)

add_q(
    "Why does the following snippet produce a compile error?\n```java\npublic class Person {\n    private String name;\n}\nPerson p = new Person();\nSystem.out.println(p.name);\n```",
    [
        "Person has no toString()",
        "Field `name` has private access in `Person` and cannot be accessed directly from outside",
        "p must be final",
        "name is null"
    ],
    1,
    "Accessing a `private` field from external calling code violates Java encapsulation and causes a compile error.",
    "Direct Private Field Access", "error", "easy",
    "Caught illegal access to private field from calling code.",
    "Private fields cannot be accessed directly outside their class."
)

# --- Ch 6: 3. Output (25 Qs) ---
add_q(
    "What is the output of the following code?\n```java\npublic class Counter {\n    public static int count = 0;\n    public Counter() { count++; }\n}\n// in main:\nnew Counter();\nnew Counter();\nnew Counter();\nSystem.out.println(Counter.count);\n```",
    ["0", "1", "3", "NullPointerException"],
    2, "Because `count` is static, it is shared across all instances. Each constructor invocation increments the single shared class variable. Count is 3.",
    "Static Counter Accumulation Output", "output", "easy",
    "Tracked static counter accumulation across multiple instantiations.",
    "Static fields are shared across instances; 3 instantiations increment `count` to 3."
)

add_q(
    "What does this code print?\n```java\npublic class Box {\n    int w, h;\n    public Box(int w, int h) {\n        this.w = w;\n        this.h = h;\n    }\n}\n// in main:\nBox b1 = new Box(10, 20);\nBox b2 = b1;\nb2.w = 50;\nSystem.out.println(b1.w);\n```",
    ["10", "50", "20", "NullPointerException"],
    1, "`b2 = b1` copies the reference address. Both `b1` and `b2` point to the exact same object on the heap. Mutating `b2.w` changes `b1.w` to 50.",
    "Object Reference Aliasing Output", "output", "easy",
    "Recognized that modifying an aliased reference mutates the shared heap object.",
    "`b2 = b1` creates an alias; mutating `b2.w` modifies `b1.w` directly."
)

add_q(
    "What is the output of this constructor chaining code?\n```java\npublic class Test {\n    public Test() {\n        this(5);\n        System.out.print(\"A \");\n    }\n    public Test(int x) {\n        System.out.print(\"B \");\n    }\n    public static void main(String[] args) {\n        new Test();\n    }\n}\n```",
    ["A B ", "B A ", "A ", "B "],
    1, "`new Test()` calls `this(5)`. `Test(int)` executes first, printing `\"B \"`. Then control returns to `Test()`, which prints `\"A \"`. Output: `B A `.",
    "Constructor Chaining Execution Order", "output", "medium",
    "Traced execution order in constructor chaining.",
    "`this(...)` executes the target constructor first, then returns to complete the caller constructor."
)

add_q(
    "What does the following snippet print?\n```java\npublic class Demo {\n    static int x = 10;\n    public static void main(String[] args) {\n        Demo d1 = new Demo();\n        Demo d2 = new Demo();\n        d1.x = 50;\n        System.out.println(d2.x);\n    }\n}\n```",
    ["10", "50", "0", "Compilation error"],
    1, "`x` is a static field shared by all instances. Changing `d1.x` updates the single class variable, so `d2.x` is 50.",
    "Static Field Modification via Instance Output", "output", "easy",
    "Understands that static field mutation via one instance affects all instances.",
    "Static fields share one memory location; mutating via `d1.x` updates `d2.x` to 50."
)

add_q(
    "What is printed by this code?\n```java\npublic class InitDemo {\n    static { System.out.print(\"S \"); }\n    { System.out.print(\"I \"); }\n    public InitDemo() { System.out.print(\"C \"); }\n    public static void main(String[] args) {\n        new InitDemo();\n        new InitDemo();\n    }\n}\n```",
    ["S I C I C ", "I C I C S ", "S C I C I ", "S I C "],
    0, "Static block `S ` runs once on class load. For each instantiation, instance block `I ` runs before constructor `C `. Order: `S I C I C `.",
    "Static and Instance Initializer Order", "output", "hard",
    "Mastered initialization block execution sequence.",
    "Static blocks run once on class load; instance initializers run before each constructor call."
)

add_q(
    "What is the output of this code?\n```java\npublic class Person {\n    String name;\n    public Person(String name) {\n        name = name;\n    }\n    public static void main(String[] args) {\n        Person p = new Person(\"Alice\");\n        System.out.println(p.name);\n    }\n}\n```",
    ["Alice", "null", "Person", "Compilation error"],
    1, "Because `this.` was omitted, `name = name` assigns the parameter to itself. The instance field `this.name` remains uninitialized and retains its default value `null`.",
    "Missing this Null Output", "output", "medium",
    "Recognized uninitialized field resulting from missing `this.` qualification.",
    "Without `this.`, the instance field is never assigned, retaining its default `null` value."
)

add_q(
    "What does this code print?\n```java\npublic class Point {\n    int x, y;\n    public Point(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n    public String toString() {\n        return \"(\" + x + \",\" + y + \")\";\n    }\n    public static void main(String[] args) {\n        Point p = new Point(3, 4);\n        System.out.println(p);\n    }\n}\n```",
    ["(3,4)", "Point@15db9742", "3 4", "Point"],
    0, "Passing `p` to `println` invokes its overridden `toString()` method, which outputs `(3,4)`.",
    "Overridden toString Output", "output", "easy",
    "Identified output of custom overridden toString() method.",
    "`println(p)` invokes the overridden `toString()` method, producing `(3,4)`."
)

add_q(
    "What is the output of this code?\n```java\npublic class A {\n    int val = 10;\n    public static void main(String[] args) {\n        A a1 = new A();\n        A a2 = new A();\n        a1.val = 20;\n        System.out.println(a1.val + \" \" + a2.val);\n    }\n}\n```",
    ["20 20", "20 10", "10 10", "10 20"],
    1, "`val` is an instance field. Each object maintains its own independent copy. Mutating `a1.val` has no effect on `a2.val`. Output: `20 10`.",
    "Instance Variable Independence Output", "output", "easy",
    "Distinguished separate instance variable state across multiple instances.",
    "Instance variables are unique per object; changing `a1.val` leaves `a2.val` at 10."
)

add_q(
    "What does the following snippet print?\n```java\npublic class Test {\n    static int a;\n    int b;\n    public static void main(String[] args) {\n        Test t = new Test();\n        System.out.println(Test.a + \" \" + t.b);\n    }\n}\n```",
    ["0 0", "null null", "1 1", "Error: uninitialized variables"],
    0, "Both static fields and instance fields are automatically initialized to their default values (0 for numeric primitives) upon class loading and instantiation.",
    "Default Field Values Output", "output", "easy",
    "Knows default initialization values for static and instance primitive fields.",
    "Primitive numeric fields default to 0 automatically."
)

add_q(
    "What is the output of this code?\n```java\npublic class MathHelper {\n    public static int square(int x) { return x * x; }\n    public static void main(String[] args) {\n        System.out.println(MathHelper.square(4));\n    }\n}\n```",
    ["16", "4", "8", "0"],
    0, "The static method `square` is invoked via the class name: `4 * 4 = 16`.",
    "Static Method Execution Output", "output", "easy",
    "Traced static method invocation via class name.",
    "`MathHelper.square(4)` returns 16."
)

add_q(
    "What does this code print?\n```java\npublic class Counter {\n    static int count = 0;\n    int id;\n    public Counter() {\n        count++;\n        id = count;\n    }\n    public static void main(String[] args) {\n        Counter c1 = new Counter();\n        Counter c2 = new Counter();\n        System.out.println(c1.id + \" \" + c2.id + \" \" + Counter.count);\n    }\n}\n```",
    ["1 2 2", "2 2 2", "1 1 2", "1 2 1"],
    0, "First instantiation: `count` becomes 1, `c1.id = 1`. Second instantiation: `count` becomes 2, `c2.id = 2`. Final `Counter.count` is 2. Output: `1 2 2`.",
    "ID Assignment via Static Counter", "output", "medium",
    "Tracked sequential instance ID generation using static class counter.",
    "Static counter increments on each instance, assigning `c1.id=1`, `c2.id=2`, and `count=2`."
)

add_q(
    "What is the output of this code?\n```java\npublic class Book {\n    String title;\n    public Book(String title) { this.title = title; }\n    public Book() { this(\"Untitled\"); }\n    public static void main(String[] args) {\n        Book b = new Book();\n        System.out.println(b.title);\n    }\n}\n```",
    ["Untitled", "null", "title", "Compilation error"],
    0, "`new Book()` chains to `this(\"Untitled\")`, initializing `this.title` to `\"Untitled\"`.",
    "Default Constructor Chaining Output", "output", "easy",
    "Traced default constructor delegation to parameterized constructor.",
    "`new Book()` delegates to `this(\"Untitled\")`, setting title to 'Untitled'."
)

add_q(
    "What does this code print?\n```java\npublic class Node {\n    int val;\n    Node next;\n    public Node(int val) { this.val = val; }\n    public static void main(String[] args) {\n        Node n1 = new Node(1);\n        n1.next = new Node(2);\n        System.out.println(n1.val + \" \" + n1.next.val);\n    }\n}\n```",
    ["1 2", "1 1", "2 2", "NullPointerException"],
    0, "`n1.val` is 1. `n1.next` references the second node with `val` 2. Outputs `1 2`.",
    "Linked Node Reference Output", "output", "easy",
    "Traced object reference linking in self-referential Node class.",
    "`n1.val` is 1 and `n1.next.val` is 2."
)

add_q(
    "What is the output of this code?\n```java\npublic class Test {\n    int x = 5;\n    public void modify(Test t) {\n        t.x = 20;\n    }\n    public static void main(String[] args) {\n        Test obj = new Test();\n        obj.modify(obj);\n        System.out.println(obj.x);\n    }\n}\n```",
    ["5", "20", "0", "NullPointerException"],
    1, "`obj.modify(obj)` passes the object reference to itself. `t.x = 20` mutates the instance field `x` on the heap to 20.",
    "Self-Reference Mutation Output", "output", "easy",
    "Tracked object state mutation through self-referential method parameter.",
    "Passing an object to its own method mutates its field to 20."
)

add_q(
    "What does this code print?\n```java\npublic class A {\n    static int x = 1;\n    static {\n        x += 5;\n    }\n    public static void main(String[] args) {\n        System.out.println(x);\n    }\n}\n```",
    ["1", "6", "5", "0"],
    1, "`x` is initialized to 1. The static initialization block executes immediately upon class load, adding 5: `1 + 5 = 6`. Outputs 6.",
    "Static Initializer Modification Output", "output", "easy",
    "Computed state update within static initialization block.",
    "Field initialized to 1, then static block adds 5 -> 6."
)

add_q(
    "What is the output of this code?\n```java\npublic class Student {\n    String name;\n    public Student(String name) { this.name = name; }\n    public static void main(String[] args) {\n        Student s1 = new Student(\"Alice\");\n        Student s2 = new Student(\"Alice\");\n        System.out.println((s1 == s2) + \" \" + s1.name.equals(s2.name));\n    }\n}\n```",
    ["true true", "false true", "false false", "true false"],
    1, "`s1 == s2` compares references (distinct objects on heap -> false). `s1.name.equals(s2.name)` compares String content (\"Alice\" equals \"Alice\" -> true). Output: `false true`.",
    "Object Identity vs Field Content Equality", "output", "medium",
    "Distinguished object reference identity from field value equality.",
    "`s1 == s2` is false for distinct instances; `s1.name.equals(s2.name)` is true."
)

add_q(
    "What does this code print?\n```java\npublic class Wrapper {\n    int val;\n    public Wrapper(int val) { this.val = val; }\n    public static void swap(Wrapper a, Wrapper b) {\n        int temp = a.val;\n        a.val = b.val;\n        b.val = temp;\n    }\n    public static void main(String[] args) {\n        Wrapper w1 = new Wrapper(10);\n        Wrapper w2 = new Wrapper(20);\n        swap(w1, w2);\n        System.out.println(w1.val + \" \" + w2.val);\n    }\n}\n```",
    ["10 20", "20 10", "20 20", "10 10"],
    1, "Unlike primitive swaps, swapping fields inside mutable wrapper objects (`a.val = b.val`) persists because the objects on the heap are mutated. Outputs `20 10`.",
    "Object Field Swap Output", "output", "medium",
    "Recognized effective swap through mutable wrapper object fields.",
    "Mutating fields inside passed object instances persists after the method returns."
)

add_q(
    "What is the output of this code?\n```java\npublic class Person {\n    private int age;\n    public void setAge(int age) {\n        if (age > 0) this.age = age;\n    }\n    public int getAge() { return age; }\n    public static void main(String[] args) {\n        Person p = new Person();\n        p.setAge(-5);\n        System.out.println(p.getAge());\n    }\n}\n```",
    ["-5", "0", "IllegalArgumentException", "null"],
    1, "`p.setAge(-5)` fails the `age > 0` validation guard, so `this.age` is not updated. It retains its default initial value of `0`.",
    "Encapsulated Validation Guard Output", "output", "easy",
    "Traced encapsulation setter validation guard rejection.",
    "Negative value rejected by setter; field remains at default value 0."
)

add_q(
    "What does this code print?\n```java\npublic class Test {\n    int a = 1;\n    int b = a + 2;\n    public static void main(String[] args) {\n        Test t = new Test();\n        System.out.println(t.a + \" \" + t.b);\n    }\n}\n```",
    ["1 3", "1 2", "0 0", "Compilation error"],
    0, "Instance field declarations are initialized in text order. `a` is set to 1, then `b` is set to `1 + 2 = 3`. Output: `1 3`.",
    "Field Declaration Order Initialization", "output", "easy",
    "Tracked sequential in-line field initialization order.",
    "`a` initialized to 1, then `b = 1 + 2 = 3`."
)

add_q(
    "What is the output of this code?\n```java\npublic class Item {\n    static int count = 0;\n    public Item() { count += 2; }\n    public static void main(String[] args) {\n        Item[] items = new Item[3];\n        System.out.println(Item.count);\n    }\n}\n```",
    ["6", "0", "2", "NullPointerException"],
    1, "`new Item[3]` allocates an array of 3 object references (all initialized to `null`). It does NOT instantiate any `Item` objects, so the constructor never runs! `Item.count` remains 0.",
    "Array Allocation Does Not Call Constructor", "output", "hard",
    "Mastered the classic trap: allocating an object array does not instantiate elements.",
    "`new Item[3]` creates an array of null references without running constructors; count remains 0."
)

add_q(
    "What does this code print?\n```java\npublic class Self {\n    int val;\n    public Self setVal(int val) {\n        this.val = val;\n        return this;\n    }\n    public static void main(String[] args) {\n        Self s = new Self();\n        s.setVal(10).setVal(20);\n        System.out.println(s.val);\n    }\n}\n```",
    ["10", "20", "30", "NullPointerException"],
    1, "Returning `this` implements method chaining (fluent builder pattern). First `s.val` becomes 10, then it is overwritten to 20. Outputs 20.",
    "Fluent Method Chaining via this", "output", "medium",
    "Traced fluent API method chaining returning `this`.",
    "Method chaining sets value to 10 then overwrites to 20."
)

add_q(
    "What is the output of this code?\n```java\npublic class MathConst {\n    public static final double PI = 3.14;\n    public static void main(String[] args) {\n        System.out.println(MathConst.PI);\n    }\n}\n```",
    ["3.14", "0.0", "PI", "NullPointerException"],
    0, "Static final constants are accessed via class name qualification. Outputs 3.14.",
    "Static Final Constant Access", "output", "easy",
    "Accessed static final constant via class name.",
    "`MathConst.PI` outputs 3.14."
)

add_q(
    "What does this code print?\n```java\npublic class A {\n    public A() { System.out.print(\"1 \"); }\n}\npublic class B {\n    A a = new A();\n    public B() { System.out.print(\"2 \"); }\n    public static void main(String[] args) {\n        new B();\n    }\n}\n```",
    ["1 2 ", "2 1 ", "1 ", "2 "],
    0, "Instance fields are initialized before the constructor body executes. `new A()` runs first, printing `\"1 \"`. Then `B()` constructor body runs, printing `\"2 \"`. Output: `1 2 `.",
    "Field Initialization Precedes Constructor Body", "output", "medium",
    "Understands that field initializers execute before the constructor body.",
    "Instance field initializers run before constructor bodies: outputs `1 2 `."
)

add_q(
    "What is the output of this code?\n```java\npublic class Counter {\n    int n = 0;\n    public void add(Counter other) {\n        this.n += other.n;\n    }\n    public static void main(String[] args) {\n        Counter c1 = new Counter();\n        Counter c2 = new Counter();\n        c1.n = 5;\n        c2.n = 10;\n        c1.add(c2);\n        System.out.println(c1.n + \" \" + c2.n);\n    }\n}\n```",
    ["15 10", "15 15", "5 10", "10 10"],
    0, "`c1.add(c2)` adds `c2.n` (10) to `c1.n` (5), making `c1.n = 15`. `c2.n` is unchanged (10). Output: `15 10`.",
    "Instance Accumulation via Peer Reference", "output", "easy",
    "Accurately tracked state change on target object while argument remains unchanged.",
    "`c1.n` accumulates to 15 while `c2.n` remains 10."
)

add_q(
    "What does this code print?\n```java\npublic class Test {\n    static int x;\n    public static void main(String[] args) {\n        System.out.println(x == 0);\n    }\n}\n```",
    ["true", "false", "NullPointerException", "Error"],
    0, "Static primitive numeric fields default to 0. `0 == 0` evaluates to `true`.",
    "Static Field Primitive Zero Default", "output", "easy",
    "Verified default zero initialization of primitive static fields.",
    "Static int fields default to 0; `x == 0` is true."
)

# --- Ch 6: 4. Scenario (25 Qs) ---
add_q(
    "You are designing a banking application module in Java. The `Account` class has a `balance` field. Why MUST `balance` be declared `private` and accessed only via `deposit()` and `withdraw()` methods?",
    [
        "Private fields take up less memory",
        "Encapsulation: to prevent external code from setting negative balances, bypassing fraud checks, or corrupting state without validation",
        "Banking regulations require variables to use the `byte` primitive",
        "Public fields cannot be saved to databases"
    ],
    1,
    "Encapsulation ensures that financial balances can only be mutated through validated business methods (`deposit`, `withdraw`), protecting the object's invariants.",
    "Banking Encapsulation Integrity", "scenario", "easy",
    "Understands encapsulation invariants for financial entities.",
    "Make fields private and enforce business rules through validated methods."
)

add_q(
    "A game developer creates an online multiplayer game where all connected players share the same server IP address and maximum player limit. How should these two configuration settings be declared inside the `Player` class?",
    [
        "As instance variables `public String serverIp;`",
        "As static variables: `public static final String SERVER_IP = \"10.0.0.1\"; public static final int MAX_PLAYERS = 100;`",
        "In a local variable inside the constructor",
        "As private parameters in every method"
    ],
    1,
    "Values shared by all instances should be `static` (one copy in memory). Constants should be marked `final`.",
    "Shared Configuration via Static Final", "scenario", "easy",
    "Identified static final constants for shared system configuration.",
    "Use `static final` for shared, immutable configuration constants."
)

add_q(
    "A database connection manager must maintain exactly ONE active connection instance across the entire application lifecycle to prevent connection pooling exhaustion. Which design pattern should be implemented?",
    [
        "Factory pattern",
        "Singleton pattern (private constructor, private static instance, public static `getInstance()`)",
        "Observer pattern",
        "Prototype pattern"
    ],
    1,
    "The Singleton pattern restricts class instantiation to a single shared instance, ideal for global managers (database pools, loggers).",
    "Database Manager Singleton Pattern", "scenario", "easy",
    "Applied Singleton pattern for singular resource managers.",
    "Implement the Singleton pattern with a private constructor to enforce a single global instance."
)

add_q(
    "A university student record has mandatory fields (`id`, `name`) and optional fields (`email`, `phone`, `scholarshipStatus`). Rather than writing 8 different overloaded constructors, what design pattern solves this cleanly in Java?",
    [
        "Builder pattern",
        "Singleton pattern",
        "Observer pattern",
        "Infinite recursive constructor"
    ],
    1,
    "The Builder pattern provides a flexible, fluent API for constructing complex objects with many optional parameters, avoiding telescoping constructor anti-patterns.",
    "Builder Pattern for Complex Instantiation", "scenario", "medium",
    "Recognized the Builder pattern as the solution to telescoping constructors.",
    "Use the Builder pattern to construct objects with numerous optional parameters."
)

add_q(
    "An e-commerce system generates unique sequential order tracking numbers: `ORD-0001`, `ORD-0002`, etc. How can the `Order` class automatically assign the next sequential ID upon every `new Order()` without passing an external counter?",
    [
        "Using a private static integer counter inside `Order` that increments on each constructor call: `private static int nextId = 1;`",
        "Reading a random number",
        "Re-reading the source code file",
        "Using a while loop in main"
    ],
    0,
    "A private `static` counter is shared across all instances. Incrementing it in the constructor guarantees each newly created `Order` receives a unique sequential ID.",
    "Auto-Incrementing ID via Static Field", "scenario", "easy",
    "Implemented auto-incrementing instance identifiers via static fields.",
    "Increment a private static counter in the constructor to auto-generate unique sequential IDs."
)

add_q(
    "A flight reservation system represents an airplane seat with a `Seat` class containing `row`, `col`, and `isBooked`. A method `bookSeat(Seat s)` is called. Why does mutating `s.setBooked(true)` inside the method update the seat in the caller's seating chart?",
    [
        "Java is pass-by-reference",
        "Java passes the reference by value; both the method parameter `s` and the caller's seating chart reference point to the exact same `Seat` object on the heap",
        "The JVM restarts",
        "Seat implements Cloneable"
    ],
    1,
    "Java passes object references by value. Both references point to the identical heap object, so state modifications via setter methods mutate the shared object.",
    "Shared Heap Object Mutation", "scenario", "medium",
    "Understands heap object mutation via passed reference copies.",
    "Object references are copied by value; mutating object state alters the shared heap instance."
)

add_q(
    "A cryptography library creates an immutable `SecretKey` class holding a byte array: `public SecretKey(byte[] rawKey)`. Why is `this.rawKey = rawKey;` a severe security bug, and what is the fix?",
    [
        "Byte arrays cannot be assigned",
        "Vulnerability: the caller retains a reference to `rawKey` and can mutate bytes externally after creation; fix by creating a defensive clone `this.rawKey = rawKey.clone();`",
        "rawKey must be a String",
        "SecretKey must extend Thread"
    ],
    1,
    "Directly storing an external mutable array breaks immutability because the caller can modify the array afterwards. The constructor must make a defensive copy (`rawKey.clone()`).",
    "Defensive Copying in Immutable Classes", "scenario", "hard",
    "Applied defensive cloning to protect immutable class integrity.",
    "Clone mutable parameters in constructors to prevent callers from tampering with internal state."
)

add_q(
    "A graphics application has a `Color` class with `red`, `green`, `blue` fields (0-255). A junior developer makes fields public. A user sets `color.red = 999;`, crashing the GPU driver. How should the class be refactored to prevent invalid RGB values?",
    [
        "Make fields private and provide `setRed(int r)` that validates `0 <= r && r <= 255`, throwing `IllegalArgumentException` on invalid values",
        "Make fields protected",
        "Make fields static",
        "Remove the red field"
    ],
    0,
    "Encapsulating fields behind validated setters guarantees that internal object state remains valid at all times.",
    "RGB Validation via Encapsulation", "scenario", "easy",
    "Protected object invariants using validated setters.",
    "Encapsulate fields with private access and validate ranges in setter methods."
)

add_q(
    "You are building a high-traffic microservice. Why should you avoid creating millions of short-lived objects inside a tight loop if they can be reused?",
    [
        "Java crashes after 1,000 objects",
        "Frequent object allocations rapidly fill the young generation heap, triggering frequent Garbage Collection (GC) pauses (Stop-the-World) that degrade application throughput",
        "Objects consume hard drive space",
        "Constructors are limited to 10 calls per second"
    ],
    1,
    "High object churn puts severe pressure on the Garbage Collector, causing latency spikes and GC pauses. Object pooling or reusing instances mitigates this.",
    "Garbage Collection Pressure Mitigation", "scenario", "medium",
    "Understands the impact of object allocation churn on JVM GC pauses.",
    "Avoid high object allocation churn in hot loops to reduce Garbage Collection pauses."
)

add_q(
    "A geometric simulation models circles. The `Circle` class has `double radius`. How should the `area()` method be implemented?",
    [
        "`public double area() { return Math.PI * radius * radius; }` (computed dynamically from state)",
        "Store area as an instance field and update it manually in 20 different places",
        "Make area static",
        "area must be calculated in main only"
    ],
    0,
    "Derived properties (like area or age from birthdate) should be calculated dynamically via methods rather than stored as redundant fields that risk becoming desynchronized.",
    "Derived Property Calculation vs Redundant State", "scenario", "easy",
    "Preferred dynamic method calculation for derived attributes over redundant state fields.",
    "Compute derived attributes on-the-fly via methods to prevent data desynchronization."
)

add_q(
    "A ride-hailing app represents driver coordinates using a `Location` class (`double lat, double lon`). Once created, a location point should never be altered. How do you design this class to be fully immutable?",
    [
        "Declare the class `public final class Location`, mark fields `private final`, initialize via constructor, and provide no setter methods",
        "Make all fields public",
        "Declare fields as static",
        "Provide public setters"
    ],
    0,
    "Immutability requires: `final` class (no subclassing), `private final` fields, assignment solely via constructor, and zero mutator methods.",
    "Immutable Location Entity Design", "scenario", "easy",
    "Designed fully immutable value object.",
    "Enforce immutability with a final class, private final fields, and no setters."
)

add_q(
    "A logging service formats timestamps. A developer notices that multiple helper methods in `DateUtils` do not access any instance fields. How should these utility methods be declared?",
    [
        "As `public static` methods: they operate purely on input arguments and require no instance allocation",
        "As private instance methods requiring `new DateUtils()`",
        "As abstract methods",
        "In a text file"
    ],
    0,
    "Stateless utility methods should be `public static`, allowing callers to invoke `DateUtils.format(date)` directly without allocating useless objects.",
    "Stateless Utility Class Design", "scenario", "easy",
    "Identified static methods for stateless utility operations.",
    "Declare stateless helper methods as `public static` to avoid unnecessary object allocation."
)

add_q(
    "A software company has a package `com.bank.internal` containing classes `Ledger` and `Auditor`. The `Ledger` class has methods that should be accessible by `Auditor`, but NOT by any classes outside the `com.bank.internal` package. What access modifier should be used?",
    [
        "`public`",
        "Package-private (default access: no modifier)",
        "`private`",
        "`protected`"
    ],
    1,
    "Package-private (default) access allows all classes within the same package to collaborate freely while shielding members from outside packages.",
    "Package-Private Package Encapsulation", "scenario", "medium",
    "Selected package-private access for inter-class collaboration within a package.",
    "Use package-private (no modifier) to permit access within the same package while blocking external access."
)

add_q(
    "A game developer creates an RPG game with characters having HP, MP, and Attack. When creating a new player, the default constructor should set `hp = 100`, `mp = 50`, `attack = 10`. What is the cleanest implementation using constructor chaining?",
    [
        "`public Player() { this(100, 50, 10); }` delegating to `public Player(int hp, int mp, int atk) { ... }`",
        "Duplicate all assignment logic in both constructors",
        "Call `new Player(100, 50, 10);` inside the no-arg constructor",
        "Make fields static"
    ],
    0,
    "Chaining the default constructor to the master parameterized constructor via `this(100, 50, 10)` follows the DRY principle, eliminating duplicate field assignment code.",
    "DRY Constructor Chaining Pattern", "scenario", "easy",
    "Applied constructor chaining to eliminate duplicate initialization logic.",
    "Delegate from default constructors to master constructors using `this(...)` to keep code DRY."
)

add_q(
    "A student writes a class `Student` with fields `id` and `name`. When comparing two students in a list, `s1.equals(s2)` returns `false` even though both have the identical `id = 101`. Why does this happen, and how is it fixed?",
    [
        "Java cannot compare objects",
        "The class did not override `equals(Object o)` from `java.lang.Object`, so it inherited default reference equality (`==`); it must override `equals()` to compare `id` values",
        "id must be a double",
        "Students must be sorted"
    ],
    1,
    "By default, `Object.equals()` checks reference identity (`this == obj`). To define logical equality based on fields (like student ID), `equals()` (and `hashCode()`) must be overridden.",
    "Overriding equals for Logical Identity", "scenario", "medium",
    "Understands the necessity of overriding equals() for value-based object comparison.",
    "Override `equals()` (and `hashCode()`) to define logical equality based on fields rather than memory address."
)

add_q(
    "A hospital records management system stores patient records. A class `Patient` has a constructor taking 15 medical attributes. Why should a developer consider a private constructor with a `PatientBuilder` rather than a 15-parameter constructor?",
    [
        "Java limits constructors to 5 parameters",
        "A 15-parameter constructor is error-prone (arguments of identical types like int or String can be swapped unnoticed); a Builder provides readable, named parameter assignment",
        "Builders are required by HIPAA laws",
        "Private constructors run faster"
    ],
    1,
    "Telescoping constructors with many same-typed parameters invite subtle parameter-swapping bugs. The Builder pattern makes instantiation readable, self-documenting, and safe.",
    "Builder Pattern Readability & Safety", "scenario", "medium",
    "Understands why the Builder pattern prevents parameter ordering bugs in large objects.",
    "Use Builder patterns to avoid parameter-ordering mistakes in objects with many attributes."
)

add_q(
    "An inventory tracking system needs to count how many `Product` objects currently reside in memory. A junior developer increments a field in the constructor. How should that field be declared?",
    [
        "`public int count;`",
        "`private static int productCount = 0;` with a public static getter `public static int getProductCount()`",
        "`final int count;`",
        "`private double count;`"
    ],
    1,
    "A class-wide tally shared across all instances must be `static` and encapsulated behind a public static getter.",
    "Encapsulated Static Instance Counter", "scenario", "easy",
    "Engineered encapsulated static instance counter.",
    "Use a private static counter with a public static getter to track total object instances."
)

add_q(
    "A memory leak occurs in a Java desktop application because discarded `Listener` objects are still referenced by a static event bus: `EventBus.listeners.add(listener);`. Why does the Garbage Collector fail to reclaim these listeners?",
    [
        "Garbage collection only runs on program exit",
        "A static collection lives for the entire JVM lifetime; because it holds strong references to the listeners, they remain reachable in the GC root graph and cannot be freed",
        "Listeners cannot be garbage collected",
        "The JVM ran out of stack memory"
    ],
    1,
    "Static collections act as persistent GC roots. Retaining references to objects in static collections prevents them from ever being garbage collected, causing memory leaks.",
    "Static Reference GC Root Memory Leak", "scenario", "hard",
    "Identified static collection reference retention as a primary cause of Java memory leaks.",
    "Static collections never die; remove references when objects are no longer needed to prevent memory leaks."
)

add_q(
    "An IoT weather device measures atmospheric humidity. The `HumiditySensor` class has `int humidity`. When instantiated, the sensor immediately calibrates hardware via `calibrateHardware()`. Where should hardware calibration be triggered?",
    [
        "In the class constructor `public HumiditySensor()`",
        "In a finalized method",
        "In the toString method",
        "Outside the class in an unrelated utility"
    ],
    0,
    "Constructors are responsible for putting an object into a fully initialized, valid, operational initial state upon completion of instantiation.",
    "Hardware Initialization in Constructors", "scenario", "easy",
    "Understands constructor responsibility for complete object lifecycle readiness.",
    "Use constructors to establish complete, operational initial object state."
)

add_q(
    "A banking app models a `CurrencyExchange` class. The exchange rates are loaded from a remote central bank API once when the application starts up. Which language construct should load these rates?",
    [
        "A static initialization block: `static { loadRatesFromApi(); }`",
        "Inside every instance constructor",
        "Inside a finalize method",
        "In a while loop in an interface"
    ],
    0,
    "Static initialization blocks run once when the class is loaded, making them the standard location for one-time expensive static resource initialization.",
    "Static Initializer for Resource Loading", "scenario", "medium",
    "Applied static initialization blocks for one-time external data bootstrapping.",
    "Use static initialization blocks for one-time class loading configurations."
)

add_q(
    "A developer creates a `Fraction` class with `numerator` and `denominator`. In the constructor `public Fraction(int num, int den)`, what check must be executed before assigning fields?",
    [
        "`if (den == 0) throw new IllegalArgumentException(\"Denominator cannot be zero\");`",
        "`if (num == 0) den = 1;`",
        "`if (den < 0) den = -den;`",
        "`Math.sqrt(den);`"
    ],
    0,
    "A mathematical fraction cannot have a zero denominator. Validating this invariant in the constructor prevents creating invalid fraction objects in memory.",
    "Constructor Invariant Defense", "scenario", "easy",
    "Protected domain invariants in constructor validation.",
    "Enforce domain invariants (e.g. non-zero denominator) inside constructors before assignment."
)

add_q(
    "A customer service portal creates tickets. The `Ticket` class has a field `createdAt`. The requirement states that `createdAt` can only be set once during ticket creation and never modified thereafter. How should this field be declared?",
    [
        "`private final Instant createdAt;` initialized in the constructor without a setter",
        "`public Instant createdAt;`",
        "`private static Instant createdAt;`",
        "`protected Instant createdAt;`"
    ],
    0,
    "`private final` guarantees that the field is assigned during construction and can never be reassigned, ensuring immutability of creation timestamps.",
    "Write-Once Audit Timestamp", "scenario", "easy",
    "Used private final modifier to enforce write-once immutability.",
    "Use `private final` fields without setters for write-once timestamp auditing."
)

add_q(
    "A team of developers shares a library. A class `OldDatabase` is being replaced by `NewDatabase`. How should the author indicate that `OldDatabase` should no longer be used while preserving backward compatibility?",
    [
        "Delete the class immediately",
        "Annotate the class with `@Deprecated` and document the replacement in Javadoc with `@deprecated Use NewDatabase instead.`",
        "Make all methods private",
        "Throw an exception in the constructor"
    ],
    1,
    "The `@Deprecated` annotation signals to compilers and IDEs that an element is obsolete, generating compiler warnings while maintaining backward compatibility.",
    "Deprecation Lifecycle Convention", "scenario", "easy",
    "Applied @Deprecated annotation for library lifecycle maintenance.",
    "Annotate obsolete classes with `@Deprecated` to signal deprecation without breaking existing callers."
)

add_q(
    "A student creates a `Rectangle` class: `int width, height;`. In `main`: `Rectangle r1 = new Rectangle(4, 5); Rectangle r2 = new Rectangle(4, 5); System.out.println(r1 == r2);`. Why does this output `false`?",
    [
        "Because 4 is not equal to 5",
        "`==` compares object references (memory addresses). Since `r1` and `r2` are two distinct objects created on the heap, their addresses differ",
        "The JVM corrupted r2",
        "Width and height must be floats"
    ],
    1,
    "`==` on object references checks identity (whether both refer to the exact same heap memory address), not value equality.",
    "Object Reference Identity vs Value Equality", "scenario", "easy",
    "Understands that `==` evaluates heap reference identity, not field contents.",
    "`==` compares memory addresses; two separate objects created with `new` are never `==`."
)

add_q(
    "A software architect designs an immutable `Money` value object (`BigDecimal amount, Currency currency`). If a method `add(Money other)` is called, how must it return the result?",
    [
        "Modify the existing object's `amount` field in-place",
        "Return a brand new `Money` object containing the summed amount: `return new Money(this.amount.add(other.amount), this.currency);`",
        "Set `other.amount = 0;`",
        "Return a String"
    ],
    1,
    "Immutable value objects never mutate internal state; operations on them always compute and return a fresh new instance representing the modified value.",
    "Immutable Value Object Mutation Pattern", "scenario", "medium",
    "Understands immutable value object pattern: return new instances on state changes.",
    "Methods on immutable objects return a new instance containing the result rather than mutating in-place."
)

with open("scratch/ch6.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Generated {len(questions)} questions for Chapter 6!")
