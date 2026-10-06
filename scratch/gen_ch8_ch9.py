# -*- coding: utf-8 -*-
"""
Generate 100 questions each for:
- Chapter 8: Polymorphism & Interfaces
- Chapter 9: Exception Handling
"""
import json

def add_q(target_list, q, options, answer, explain, topic, q_type, level, strength, weakness):
    assert len(options) == 4, f"Options must be 4: {q}"
    assert 0 <= answer <= 3, f"Answer must be 0-3: {q}"
    assert q_type in ["theory", "error", "output", "scenario"], f"Invalid type: {q_type}"
    assert level in ["easy", "medium", "hard"], f"Invalid level: {level}"
    target_list.append({
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
# CHAPTER 8: POLYMORPHISM & INTERFACES (100 QUESTIONS)
# =========================================================================
ch8 = []

# --- Ch 8: 1. Theory (25 Qs) ---
add_q(ch8, "What is polymorphism in Java?",
    ["The ability of a single variable to store multiple primitive values", "The ability of an object reference of a supertype to refer to objects of different subtypes and execute their specialized behavior at runtime", "Converting source code to bytecode", "Running code on multiple threads simultaneously"],
    1, "Polymorphism ('many forms') allows reference variables of a superclass or interface type to reference instances of any subclass, executing overridden methods dynamically.",
    "Polymorphism Core Definition", "theory", "easy", "Understands the core definition of polymorphism in Java.", "Polymorphism enables supertype references to invoke subtype behaviors dynamically.")

add_q(ch8, "What is dynamic method binding (late binding) in Java?",
    ["Resolving method calls at compile time based on declared reference types", "Determining which implementation of an overridden method to execute at runtime based on the actual object's type on the heap", "Binding methods using native C code", "Executing static methods"],
    1, "Dynamic binding defers method resolution to runtime: the JVM inspects the actual object on the heap to invoke its specific overridden method implementation.",
    "Dynamic Method Binding", "theory", "easy", "Distinguishes dynamic late binding from static compile-time binding.", "Dynamic binding resolves overridden method invocations based on the actual object on the heap.")

add_q(ch8, "What is the difference between compile-time (declared) type and runtime (actual) type?",
    ["Declared type is on the heap; runtime type is in source code", "Declared type is the type used to declare the reference variable (governing which methods are callable at compile time); runtime type is the concrete class instantiated on the heap (governing which implementation executes)", "They must always be identical", "Declared type is for interfaces only"],
    1, "In `Animal a = new Dog();`, `Animal` is the declared (compile-time) type determining method visibility; `Dog` is the actual runtime object determining execution behavior.",
    "Declared vs Actual Type", "theory", "medium", "Understands declared compile-time type vs actual runtime object type.", "Compile-time type determines visible methods; runtime type determines which implementation executes.")

add_q(ch8, "What is upcasting versus downcasting in Java?",
    ["Upcasting converts primitive to object; downcasting converts object to primitive", "Upcasting assigns a subtype instance to a supertype reference (implicit and safe); downcasting casts a supertype reference back to a subtype reference (explicit and potentially unsafe)", "Upcasting is done by the garbage collector", "They are identical operations"],
    1, "Upcasting (`Animal a = new Dog();`) is safe and automatic because a Dog is an Animal. Downcasting (`Dog d = (Dog) a;`) narrows the type and requires an explicit cast.",
    "Upcasting vs Downcasting", "theory", "easy", "Distinguishes safe automatic upcasting from explicit narrowing downcasting.", "Upcasting is implicit and safe; downcasting is explicit and requires verification.")

add_q(ch8, "What runtime exception occurs if an invalid downcast is attempted: `Animal a = new Cat(); Dog d = (Dog) a;`?",
    ["`NullPointerException`", "`java.lang.ClassCastException`", "`IllegalArgumentException`", "`ArrayStoreException`"],
    1, "Attempting to cast an object to a type it does not instantiate or inherit throws `ClassCastException` at runtime.",
    "ClassCastException", "theory", "easy", "Recognized ClassCastException on illegal downcasting.", "Casting an incompatible runtime object to an unrelated subtype throws `ClassCastException`.")

add_q(ch8, "What is the purpose of the `instanceof` operator in Java?",
    ["To instantiate a new object", "To test whether an object reference is an instance of a specified class, subclass, or interface at runtime", "To compare primitive integers", "To determine memory size of an object"],
    1, "The `instanceof` operator evaluates to `true` if the object on the left can be safely cast to the type on the right, returning `false` if incompatible or null.",
    "instanceof Operator", "theory", "easy", "Understands runtime type testing with instanceof.", "Use `instanceof` to safely verify an object's type before downcasting.")

add_q(ch8, "What is an `abstract` class in Java?",
    ["A class that cannot have any methods", "A class declared with the `abstract` keyword that CANNOT be directly instantiated using `new`, designed to serve as a base class for subclasses", "A class with no fields", "A class that can only be used in packages"],
    1, "An abstract class cannot be instantiated directly. It serves as an incomplete conceptual template that subclasses must extend and complete.",
    "Abstract Class Concept", "theory", "easy", "Understands that abstract classes cannot be directly instantiated.", "Abstract classes cannot be instantiated with `new`; they serve as base templates.")

add_q(ch8, "Can an abstract class contain concrete (fully implemented) methods as well as instance variables and constructors?",
    ["No, abstract classes can only contain abstract methods", "Yes, abstract classes can have constructors, instance fields, static members, and fully implemented concrete methods alongside abstract methods", "Only static fields are allowed", "Only in Java 8 and above"],
    1, "Unlike pure interfaces (pre-Java 8), abstract classes can maintain state (instance fields), declare constructors for subclasses, and provide concrete method implementations.",
    "Abstract Class Rich Capabilities", "theory", "medium", "Understands that abstract classes can have constructors, fields, and concrete methods.", "Abstract classes can have fields, constructors, and concrete methods.")

add_q(ch8, "What is an `abstract` method?",
    ["A method with an empty body `{}`", "A method declared without an implementation (no body, ending with a semicolon `;`), requiring non-abstract subclasses to provide the implementation", "A private method", "A method that cannot be called"],
    1, "An abstract method (`public abstract void draw();`) has no body. It defines a mandatory behavioral contract that concrete subclasses must implement.",
    "Abstract Method Definition", "theory", "easy", "Knows that abstract methods declare signatures without method bodies.", "Abstract methods have no body and must be implemented by concrete subclasses.")

add_q(ch8, "Can a non-abstract (concrete) class contain an abstract method in Java?",
    ["Yes, if the method is protected", "No, if a class contains ANY abstract method, the class ITSELF must be declared `abstract`", "Yes, if the method is void", "Only in interfaces"],
    1, "A class containing one or more abstract methods MUST be declared `abstract`, otherwise the compiler rejects it.",
    "Abstract Method Enforces Abstract Class", "theory", "easy", "Knows that any class with an abstract method must be declared abstract.", "If a class contains an abstract method, the class itself must be marked `abstract`.")

add_q(ch8, "What is an `interface` in Java?",
    ["A concrete class with private methods", "A reference type that defines a formal contract of abstract behaviors (and default/static methods) that implementing classes must fulfill using the `implements` keyword", "A visual GUI window", "A thread scheduler"],
    1, "An interface establishes a contract. Classes implement interfaces (`implements`) to guarantee they provide the specified behaviors, enabling multiple interface inheritance.",
    "Interface Concept", "theory", "easy", "Understands the contractual role of Java interfaces.", "Interfaces specify behavioral contracts that classes implement using `implements`.")

add_q(ch8, "Can a Java class implement multiple interfaces?",
    ["No, Java only allows implementing a single interface", "Yes, a class can implement any number of interfaces separated by commas: `class C implements A, B, D`", "Only if one is Serializable", "Only up to 3 interfaces"],
    1, "While Java restricts classes to single inheritance of implementation, it fully supports multiple inheritance of type via interfaces.",
    "Multiple Interface Implementation", "theory", "easy", "Understands multiple interface implementation.", "A class can implement multiple interfaces separated by commas.")

add_q(ch8, "What are the implicit modifiers for fields declared inside an interface in Java?",
    ["`private final`", "`public static final` (constants)", "`protected volatile`", "package-private mutable"],
    1, "All fields declared in an interface are implicitly `public static final` constants, even if those keywords are omitted.",
    "Interface Field Modifiers", "theory", "medium", "Knows that interface fields are implicitly public static final constants.", "All variables in an interface are implicitly `public static final` constants.")

add_q(ch8, "What were the implicit modifiers for all methods declared in an interface prior to Java 8?",
    ["`protected abstract`", "`public abstract`", "`private static`", "package-private"],
    1, "Traditionally, all interface methods were implicitly `public abstract`.",
    "Interface Method Implicit Modifiers", "theory", "easy", "Knows traditional interface methods are implicitly public abstract.", "Interface methods are implicitly `public abstract` by default.")

add_q(ch8, "What is a `default` method in an interface (introduced in Java 8)?",
    ["A method with package-private access", "A method declared with the `default` keyword that provides a concrete default implementation in the interface, allowing interfaces to evolve without breaking existing implementing classes", "A method called by the JVM upon startup", "A method that cannot be overridden"],
    1, "`default` methods allow adding new methods to interfaces with a default implementation, preserving backward compatibility with legacy implementing classes.",
    "Interface Default Methods", "theory", "medium", "Understands default methods in interfaces introduced in Java 8.", "`default` methods provide concrete implementations in interfaces for backward compatibility.")

add_q(ch8, "What is a `static` method in an interface (introduced in Java 8)?",
    ["A method that belongs to the implementing class", "A utility method defined inside an interface that belongs to the interface itself and must be invoked via the interface name: `InterfaceName.methodName()`", "An abstract method that runs once", "A method that can be overridden by subclasses"],
    1, "Interface static methods are helper utilities belonging to the interface. They are not inherited by implementing classes and are called via `InterfaceName.methodName()`.",
    "Interface Static Methods", "theory", "medium", "Knows that interface static methods are invoked via the interface name.", "Interface static methods belong to the interface and are called via `InterfaceName.method()`.")

add_q(ch8, "What is a functional interface (SAM - Single Abstract Method) in Java?",
    ["An interface with zero methods", "An interface that declares exactly ONE abstract method (can be annotated with `@FunctionalInterface`), eligible to be instantiated via Lambda expressions or method references", "An interface with only static methods", "An interface that extends Runnable"],
    1, "A Functional Interface has exactly one abstract method (SAM), serving as the foundational contract for Java 8+ Lambda expressions (`(x) -> x * 2`).",
    "Functional Interface Concept", "theory", "medium", "Understands Single Abstract Method (SAM) functional interfaces.", "Functional interfaces have exactly one abstract method and support lambda expressions.")

add_q(ch8, "What is the primary difference between an abstract class and an interface in modern Java?",
    ["Abstract classes cannot have methods; interfaces can", "An abstract class can maintain instance state (non-static instance fields) and constructors; an interface cannot have instance state or constructors (a class can only extend one abstract class but implement multiple interfaces)", "Interfaces cannot have code bodies", "Abstract classes are slower"],
    1, "Abstract classes can hold state (`int x;`) and define constructors; interfaces only hold constants (`static final`) and define behaviors across unrelated class hierarchies.",
    "Abstract Class vs Interface Differences", "theory", "medium", "Distinguishes abstract classes (state + single inheritance) from interfaces (stateless contracts + multiple implementation).", "Abstract classes maintain instance state and constructors; interfaces define stateless behavioral contracts.")

add_q(ch8, "Can an interface extend another interface in Java?",
    ["No, interfaces cannot use extends", "Yes, an interface can extend one or even MULTIPLE other interfaces using the `extends` keyword", "Only if both interfaces are functional", "Only using implements"],
    1, "An interface can extend multiple parent interfaces: `interface C extends A, B { ... }`.",
    "Interface Extending Multiple Interfaces", "theory", "medium", "Knows that interfaces can extend multiple other interfaces.", "An interface can extend multiple interfaces using `extends`.")

add_q(ch8, "Can a class extend an abstract class and implement interfaces simultaneously?",
    ["No, it must choose one", "Yes: `class MyClass extends BaseAbstractClass implements InterfaceA, InterfaceB`", "Only if the abstract class comes after implements", "Only in Java 11+"],
    1, "A class can extend one superclass (abstract or concrete) and simultaneously implement multiple interfaces.",
    "Extends and Implements Coexistence", "theory", "easy", "Knows the combined extends and implements syntax.", "`class Sub extends Super implements InterA, InterB` is standard Java syntax.")

add_q(ch8, "What happens if a class implements an interface but fails to implement one of its abstract methods?",
    ["The method defaults to returning null", "The class must be declared `abstract`, or the compiler issues a compilation error", "The JVM synthesizes an empty method", "A runtime NotImplementedException is thrown"],
    1, "A class that does not provide implementations for all inherited abstract methods remains incomplete and MUST be declared `abstract`.",
    "Incomplete Interface Implementation", "theory", "easy", "Understands that classes with unimplemented interface methods must be abstract.", "A class that does not implement all abstract interface methods must be declared `abstract`.")

add_q(ch8, "How does Java resolve conflicts when a class implements two interfaces that declare the exact same `default` method signature?",
    ["The compiler picks the first one listed in implements", "The compiler issues a conflict error; the implementing class MUST override the method explicitly to resolve the ambiguity (e.g. using `InterfaceA.super.method()`)", "Both methods execute sequentially", "Throws a NoSuchMethodError at runtime"],
    1, "When two default methods collide, Java requires the implementing class to explicitly override the conflicting method and resolve which default to invoke.",
    "Default Method Diamond Conflict Resolution", "theory", "hard", "Mastered default method conflict resolution in multiple interfaces.", "Conflicting default methods must be explicitly overridden by the implementing class.")

add_q(ch8, "What is pattern matching for `instanceof` (introduced in Java 16)?",
    ["A regular expression engine for classes", "Syntactic shorthand that tests the type AND automatically casts and binds it to a local variable in a single step: `if (obj instanceof String s) { s.length(); }`", "A way to check multiple classes in a switch", "A compiler optimization for arrays"],
    1, "Pattern matching for `instanceof` eliminates redundant explicit downcasts: `if (obj instanceof String s)` binds `s` directly as a `String`.",
    "Pattern Matching for instanceof", "theory", "medium", "Understands modern Java pattern matching for instanceof.", "`if (obj instanceof String s)` checks the type and binds variable `s` in one step.")

add_q(ch8, "Can an abstract class be declared `final`?",
    ["Yes, to make it immutable", "No, `abstract` requires subclasses to extend it, while `final` strictly prohibits subclassing; they are mutually contradictory modifiers and cause a compile error", "Yes, if it has no abstract methods", "Only if private"],
    1, "`abstract` and `final` are polar opposites. A class cannot be both abstract and final.",
    "Abstract and Final Contradiction", "theory", "easy", "Recognized contradictory combination of abstract and final.", "A class or method cannot be both `abstract` and `final`.")

add_q(ch8, "What is marker (tagging) interface in Java (e.g. `java.io.Serializable`, `java.lang.Cloneable`)?",
    ["An interface with only static methods", "An interface with NO fields and NO methods, used purely to tag or mark a class as possessing a specific capability or runtime property for the JVM or frameworks", "An interface marked with @Deprecated", "An interface that logs messages"],
    1, "Marker interfaces contain zero members. They act as type tags inspected via `instanceof` (e.g. `obj instanceof Serializable`).",
    "Marker Interface Concept", "theory", "medium", "Identifies marker interfaces like Serializable and Cloneable.", "Marker interfaces have no members and serve as type tags for the JVM or frameworks.")

# --- Ch 8: 2. Error Identification (25 Qs) ---
add_q(ch8, "Why does this code fail to compile?\n```java\nabstract class Shape {\n    public abstract void draw();\n}\nShape s = new Shape();\n```",
    ["draw cannot be public", "Cannot instantiate abstract class `Shape` with `new`", "s must be final", "Shape has no constructor"],
    1, "Abstract classes cannot be directly instantiated. Attempting `new Shape()` causes: 'Shape is abstract; cannot be instantiated'.",
    "Instantiating Abstract Class Error", "error", "easy", "Spotted illegal direct instantiation of abstract class.", "Abstract classes cannot be instantiated with `new`.")

add_q(ch8, "What is the compilation error in this interface declaration?\n```java\ninterface Calculable {\n    int factor = 10;\n    void reset() {\n        factor = 20;\n    }\n}\n```",
    ["reset must be public", "Cannot assign a value to final variable `factor`: interface fields are implicitly `public static final` constants and cannot be reassigned; also `reset()` needs `default` modifier", "factor cannot be 10", "Calculable cannot have methods"],
    1, "Interface fields are implicitly `public static final`. Reassigning `factor = 20;` fails compilation.",
    "Reassigning Interface Final Field Error", "error", "easy", "Spotted reassignment of implicitly final interface field.", "Interface fields are implicitly constants (`final`) and cannot be reassigned.")

add_q(ch8, "Why does this class fail to compile?\n```java\nabstract class Animal {\n    public abstract void makeSound();\n}\nclass Dog extends Animal {}\n```",
    ["Animal has no fields", "Class `Dog` is not abstract and does not override abstract method `makeSound()` in `Animal`", "Dog must be public", "Animal cannot be extended"],
    1, "A concrete subclass must implement all inherited abstract methods or be declared `abstract` itself.",
    "Unimplemented Abstract Method in Concrete Subclass", "error", "easy", "Caught missing implementation of abstract method in concrete subclass.", "Concrete subclasses must implement all inherited abstract methods.")

add_q(ch8, "What is wrong with this interface method definition in Java 7?\n```java\ninterface Runner {\n    public void run() {\n        System.out.println(\"Running\");\n    }\n}\n```",
    ["Runner must be a class", "Interface abstract methods cannot have a body; in Java 8+, it must be marked with the `default` keyword to have a body", "println is illegal in interfaces", "run cannot be public"],
    1, "Standard interface methods cannot have bodies. To provide a body, the method must be marked `default` or `static` (Java 8+).",
    "Missing Default Modifier on Interface Body", "error", "easy", "Spotted method body in interface missing default modifier.", "Interface methods with bodies must be declared `default` or `static`.")

add_q(ch8, "Why does the following downcast throw a runtime exception?\n```java\nObject text = \"Hello\";\nInteger num = (Integer) text;\n```",
    ["Throws NullPointerException", "Throws `ClassCastException`: `java.lang.String` cannot be cast to `java.lang.Integer`", "Throws IllegalArgumentException", "Compilation error: Object cannot be cast"],
    1, "The runtime object is a `String`. Casting a `String` instance to `Integer` throws `ClassCastException`.",
    "ClassCastException on Incompatible Downcast", "error", "easy", "Identified runtime ClassCastException on illegal object cast.", "Casting an object to an incompatible type throws `ClassCastException`.")

add_q(ch8, "Identify the compilation error in this abstract class:\n```java\nfinal abstract class Service {\n    public abstract void execute();\n}\n```",
    ["execute cannot be public", "Illegal combination of modifiers: `abstract` and `final` cannot be combined on a class", "Service must have constructors", "execute must have body"],
    1, "`final` prevents subclassing, while `abstract` requires subclassing. They are mutually contradictory.",
    "Contradictory abstract and final Modifiers", "error", "easy", "Caught illegal combination of abstract and final on class.", "A class cannot be both `abstract` and `final`.")

add_q(ch8, "Why does this abstract method declaration cause a compile-time error?\n```java\nabstract class Worker {\n    private abstract void work();\n}\n```",
    ["Worker must be public", "Illegal combination of modifiers: `abstract` and `private` (private methods cannot be inherited or overridden by subclasses)", "work must return int", "abstract methods must have bodies"],
    1, "An abstract method must be overridden by a subclass, but `private` prevents subclass visibility. Combining `private` and `abstract` is illegal.",
    "Private Abstract Method Error", "error", "easy", "Caught illegal combination of private and abstract modifiers.", "Abstract methods cannot be `private` because subclasses must override them.")

add_q(ch8, "Why does this code fail to compile?\n```java\ninterface Playable {\n    void play();\n}\nclass Game implements Playable {\n    void play() {}\n}\n```",
    ["Game must be abstract", "Cannot reduce visibility: `play()` in `Game` has package-private access, but interface methods are implicitly `public`", "Game cannot implement Playable", "play cannot be empty"],
    1, "Interface methods are implicitly `public`. Implementing methods must explicitly declare `public` access; omitting it defaults to package-private, causing: 'attempting to assign weaker access privileges; was public'.",
    "Package-Private Interface Implementation Error", "error", "easy", "Caught missing public modifier on implemented interface method.", "Methods implementing interface contracts must be explicitly declared `public`.")

add_q(ch8, "What is the issue with this code?\n```java\ninterface A {\n    default void hello() { System.out.println(\"A\"); }\n}\ninterface B {\n    default void hello() { System.out.println(\"B\"); }\n}\nclass C implements A, B {}\n```",
    ["Interfaces cannot have default methods", "Class `C` inherits unrelated defaults for `hello()` from types `A` and `B`, causing a compilation conflict (must override `hello()` in `C` to resolve ambiguity)", "C must be abstract", "hello cannot be void"],
    1, "When two implemented interfaces provide conflicting default implementations for the same signature, class `C` must explicitly override the method to resolve the conflict.",
    "Unresolved Default Method Conflict", "error", "medium", "Caught ambiguous default method collision across multiple interfaces.", "Classes implementing interfaces with conflicting default methods must override the method explicitly.")

add_q(ch8, "Why does this code fail to compile?\n```java\nabstract class Vehicle {\n    public abstract void drive() {}\n}\n```",
    ["Vehicle cannot be abstract", "Abstract methods cannot specify a body: `public abstract void drive();` must end with a semicolon, not `{}`", "drive must return void", "drive cannot be public"],
    1, "Abstract methods must not have a body. They end with a semicolon `;`.",
    "Abstract Method with Body Syntax Error", "error", "easy", "Spotted body braces on abstract method declaration.", "Abstract methods cannot have a body; terminate them with a semicolon `;`.")

add_q(ch8, "Identify the error in this code:\n```java\ninterface Printable {\n    void print();\n}\nPrintable p = new Printable();\n```",
    ["Printable must have fields", "Printable is an interface; cannot be instantiated directly with `new` (requires an implementing class or anonymous class)", "print must be static", "p must be null"],
    1, "Interfaces cannot be directly instantiated with `new`. A concrete class must implement the interface.",
    "Direct Interface Instantiation Error", "error", "easy", "Caught direct instantiation of interface with new.", "Interfaces cannot be instantiated directly with `new`.")

add_q(ch8, "Why does this code cause a compiler error?\n```java\ninterface MathOp {\n    static int add(int a, int b) { return a + b; }\n}\nclass Calc implements MathOp {}\n// in main:\nCalc.add(2, 3);\n```",
    ["add must be default", "Interface static methods are NOT inherited by implementing classes; they must be invoked using the interface name: `MathOp.add(2, 3)`", "add cannot return int", "Calc must be abstract"],
    1, "Static methods in an interface do not belong to implementing classes and are not inherited. They must be called on the interface: `MathOp.add(2, 3)`.",
    "Invoking Interface Static Method on Implementing Class Error", "error", "medium", "Understands that interface static methods are not inherited by implementing classes.", "Interface static methods must be qualified by the interface name: `InterfaceName.method()`.")

add_q(ch8, "What compilation error occurs here?\n```java\nabstract class Shape {\n    public static abstract void draw();\n}\n```",
    ["draw cannot be public", "Illegal combination of modifiers: `static` and `abstract`", "Shape must be final", "draw must have body"],
    1, "`static` methods belong to the class and cannot be overridden dynamically, while `abstract` methods require dynamic subclass overriding. They cannot be combined.",
    "Static Abstract Method Contradiction", "error", "easy", "Spotted illegal combination of static and abstract modifiers.", "Methods cannot be both `static` and `abstract`.")

add_q(ch8, "Why does this code fail to compile?\n```java\nclass Animal {}\nclass Dog extends Animal {\n    public void bark() {}\n}\nAnimal a = new Animal();\na.bark();\n```",
    ["bark must be static", "Cannot find symbol: method bark() does not exist in declared compile-time type `Animal`", "a must be cast to Object", "bark is private"],
    1, "The compiler checks method validity against the declared reference type (`Animal`). Because `bark()` is declared in `Dog`, not `Animal`, `a.bark()` fails compile-time type checking.",
    "Method Call on Supertype Reference Error", "error", "easy", "Recognized that supertype references cannot call subclass-specific methods without casting.", "Supertype references cannot call subclass-specific methods without an explicit downcast.")

add_q(ch8, "Identify the bug in this downcast snippet:\n```java\nAnimal a = getAnimal(); // returns Cat or Dog\nDog d = (Dog) a;\nd.bark();\n```",
    ["Dog cannot bark", "If `getAnimal()` returns a `Cat`, the unconditional cast throws `ClassCastException` at runtime (should guard with `if (a instanceof Dog)`)", "getAnimal must return Dog", "d is null"],
    1, "Unconditional downcasting without an `instanceof` guard risks throwing `ClassCastException` whenever the runtime object is of an incompatible subtype.",
    "Unchecked Downcasting Vulnerability", "error", "medium", "Identified unsafe downcasting without instanceof guard.", "Guard downcasts with `if (obj instanceof Subtype)` to avoid ClassCastException.")

add_q(ch8, "Why does this code cause a compilation error?\n```java\ninterface A {}\ninterface B {}\nclass C extends A, B {}\n```",
    ["C must be public", "Classes cannot `extend` interfaces (classes `implement` interfaces, using `implements A, B`)", "A and B must be classes", "C must be abstract"],
    1, "A class must use `implements` to inherit from interfaces, not `extends`.",
    "Class Extending Interfaces Syntax Error", "error", "easy", "Spotted class using extends instead of implements for interfaces.", "Classes `implement` interfaces; they do not `extend` them.")

add_q(ch8, "What error occurs in this interface definition?\n```java\ninterface Service {\n    protected void run();\n}\n```",
    ["run cannot be void", "Modifier `protected` not allowed here: interface members must be public (or private helper methods in Java 9+)", "Service must be abstract class", "run must have body"],
    1, "Interface methods cannot be `protected`. They are public by contract.",
    "Protected Interface Method Error", "error", "medium", "Recognized that interface methods cannot be protected.", "Interface methods cannot be declared `protected`; they must be `public` (or `private` in Java 9+).")

add_q(ch8, "Why does this code fail to compile?\n```java\ninterface Device {\n    void start();\n}\nabstract class Phone implements Device {}\nPhone p = new Phone();\n```",
    ["Phone cannot implement Device", "Cannot instantiate abstract class `Phone`", "Device has no constructor", "p must be Device"],
    1, "`Phone` is declared `abstract` (which is valid since it leaves `start()` unimplemented), but abstract classes cannot be instantiated with `new`.",
    "Instantiating Abstract Implementing Class", "error", "easy", "Caught instantiation of abstract class.", "Abstract classes cannot be instantiated with `new` even if they implement interfaces.")

add_q(ch8, "Why does this code fail to compile?\n```java\ninterface Greeter {\n    default void greet();\n}\n```",
    ["Greeter must be a class", "Default methods in interfaces MUST specify a method body `{ ... }`", "greet cannot be void", "default is a keyword for switch only"],
    1, "A `default` method in an interface exists specifically to provide a method body. Omitting the body causes a compile error: 'missing method body, or declare abstract'.",
    "Default Method Missing Body Error", "error", "easy", "Spotted default interface method missing implementation body.", "Default methods in interfaces must provide a method body `{ ... }`.")

add_q(ch8, "What compilation issue exists in this code?\n```java\nclass Box {\n    public int size = 10;\n}\nclass BigBox extends Box {\n    public int size = 20;\n}\nBox b = new BigBox();\nBigBox bb = (BigBox) b;\n```",
    ["BigBox cannot extend Box", "The code compiles cleanly! It performs a valid upcast and subsequent downcast without errors", "b cannot be cast to BigBox", "size cannot be 20"],
    1, "The runtime object of `b` is `BigBox`. Casting `(BigBox) b` is completely type-safe and valid, compiling and executing with no errors.",
    "Valid Safe Downcasting", "error", "medium", "Recognized valid safe downcast of matching runtime type.", "Downcasting a reference to its actual runtime object type succeeds cleanly.")

add_q(ch8, "Why does this code cause a compiler error?\n```java\ninterface Walker {\n    void walk();\n}\nclass Human implements Walker {\n    private void walk() {}\n}\n```",
    ["walk must return int", "Cannot reduce the visibility of the inherited method from Walker: interface methods are public, cannot assign private access", "Human must be abstract", "walk is already defined"],
    1, "Implementing an interface method with `private` access violates the rule that visibility cannot be reduced from `public`.",
    "Private Implementation of Interface Method", "error", "easy", "Caught illegal private implementation of public interface method.", "Methods implementing interface contracts must be declared `public`.")

add_q(ch8, "What error occurs in this code snippet?\n```java\nObject obj = \"Java\";\nif (obj instanceof String) {\n    int len = obj.length();\n}\n```",
    ["instanceof cannot check String", "Cannot find symbol: method length() in class Object (`obj` is still statically typed as `Object`; must cast `((String) obj).length()` or use pattern matching)", "length() is for arrays", "obj is null"],
    1, "Even though `instanceof` confirms the runtime type is `String`, `obj`'s declared type remains `Object`. You must cast `((String) obj).length()` or use pattern matching `if (obj instanceof String s)`.",
    "Uncast Supertype Invocations Post-instanceof", "error", "medium", "Recognized that traditional instanceof check does not automatically cast the variable.", "Cast the reference explicitly after `instanceof` (or use pattern matching `instanceof String s`).")

add_q(ch8, "Why does this code fail to compile?\n```java\ninterface A {\n    int X = 100;\n}\nclass Test implements A {\n    public static void main(String[] args) {\n        X = 200;\n    }\n}\n```",
    ["X is private", "Cannot assign a value to final variable X (inherited interface fields are constants)", "A has no X", "Test must be abstract"],
    1, "Inherited interface fields like `X` are constants (`public static final`) and cannot be reassigned.",
    "Inherited Interface Constant Reassignment Error", "error", "easy", "Caught attempt to reassign inherited interface constant.", "Fields inherited from interfaces are constants and cannot be reassigned.")

add_q(ch8, "What compilation error occurs here?\n```java\nabstract class Base {\n    abstract void m1();\n    abstract void m2();\n}\nabstract class Sub extends Base {\n    void m1() {}\n}\nSub s = new Sub();\n```",
    ["Sub cannot extend Base", "Cannot instantiate abstract class `Sub` (Sub is still abstract because it has not implemented `m2()`)", "m1 is already implemented", "Base has no constructors"],
    1, "`Sub` implements `m1()` but not `m2()`, so `Sub` remains abstract. Attempting `new Sub()` fails.",
    "Instantiating Partially Implemented Abstract Subclass", "error", "easy", "Caught instantiation of partially implemented abstract class.", "Subclasses that only implement some abstract methods remain abstract and cannot be instantiated.")

add_q(ch8, "Why does this code fail to compile?\n```java\nclass StringTest {\n    public static void main(String[] args) {\n        Integer n = 10;\n        if (n instanceof String) {}\n    }\n}\n```",
    ["n is not an object", "Inconvertible types: cannot cast `java.lang.Integer` to `java.lang.String` (compiler rejects instanceof when the types are completely unrelated classes)", "instanceof only works on Object", "String cannot be used with instanceof"],
    1, "When the compiler can prove that two class types share no inheritance relationship, the `instanceof` expression is rejected at compile time: 'inconvertible types'.",
    "Inconvertible Types in instanceof Error", "error", "hard", "Understands that instanceof fails compilation between unrelated concrete classes.", "The compiler rejects `instanceof` between two unrelated classes that cannot possibly match.")

# --- Ch 8: 3. Output (25 Qs) ---
add_q(ch8, "What is the output of the following code?\n```java\ninterface Speaker {\n    void speak();\n}\nclass Dog implements Speaker {\n    public void speak() { System.out.print(\"Woof \"); }\n}\nclass Person implements Speaker {\n    public void speak() { System.out.print(\"Hello \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Speaker[] list = { new Dog(), new Person() };\n        for (Speaker s : list) s.speak();\n    }\n}\n```",
    ["Woof Hello ", "Hello Woof ", "Woof Woof ", "Compilation error"],
    0, "Polymorphism iterates across interface references, dispatching dynamically to `Dog.speak()` then `Person.speak()`. Output: `Woof Hello `.",
    "Interface Polymorphism Output", "output", "easy", "Traced polymorphic method dispatch through interface array.", "Dynamic binding executes each object's respective implementation: `Woof Hello `.")

add_q(ch8, "What does this code print?\n```java\ninterface A {\n    default void show() { System.out.print(\"A \"); }\n}\nclass B implements A {\n    @Override\n    public void show() { System.out.print(\"B \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        A obj = new B();\n        obj.show();\n    }\n}\n```",
    ["A ", "B ", "A B ", "Error"],
    1, "Class `B` overrides the default method `show()`. Dynamic binding invokes the overriding implementation in `B`. Outputs `B `.",
    "Overridden Default Method Output", "output", "easy", "Recognized that class override takes precedence over interface default method.", "Class implementations always override interface default methods: outputs `B `.")

add_q(ch8, "What is the output of this code?\n```java\ninterface MathConst {\n    int VAL = 42;\n}\npublic class Main implements MathConst {\n    public static void main(String[] args) {\n        System.out.println(VAL + \" \" + MathConst.VAL);\n    }\n}\n```",
    ["42 42", "0 42", "42 0", "Error"],
    0, "`VAL` is accessible directly as an inherited interface constant and via `MathConst.VAL`. Both yield 42.",
    "Interface Constant Access Output", "output", "easy", "Accessed interface constant directly and via interface name.", "Interface constants are accessible directly and via interface qualification: `42 42`.")

add_q(ch8, "What does this snippet print?\n```java\nabstract class Base {\n    public Base() { System.out.print(\"B \"); }\n}\nclass Sub extends Base {\n    public Sub() { System.out.print(\"S \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Sub();\n    }\n}\n```",
    ["S B ", "B S ", "S ", "B "],
    1, "The abstract superclass constructor `Base()` runs first, printing `\"B \"`. Then `Sub()` runs, printing `\"S \"`. Output: `B S `.",
    "Abstract Superclass Constructor Execution Order", "output", "easy", "Traced abstract superclass constructor execution.", "Abstract superclass constructors execute before subclass constructors: `B S `.")

add_q(ch8, "What is the output of this code?\n```java\ninterface I {\n    static void print() { System.out.print(\"Interface \"); }\n}\nclass C implements I {\n    public void print() { System.out.print(\"Class \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        I.print();\n        new C().print();\n    }\n}\n```",
    ["Interface Class ", "Class Interface ", "Interface Interface ", "Error"],
    0, "`I.print()` calls the static method on the interface (`\"Interface \"`). `new C().print()` calls the instance method on `C` (`\"Class \"`). Output: `Interface Class `.",
    "Interface Static vs Instance Method Output", "output", "medium", "Distinguished interface static method call from class instance method.", "Interface static methods are distinct from class instance methods: `Interface Class `.")

add_q(ch8, "What does this code print?\n```java\nclass Animal {}\nclass Dog extends Animal {}\npublic class Main {\n    public static void main(String[] args) {\n        Animal a = new Dog();\n        System.out.println((a instanceof Dog) + \" \" + (a instanceof Animal) + \" \" + (a instanceof Object));\n    }\n}\n```",
    ["true true true", "true false false", "false true true", "true true false"],
    0, "The runtime object is `Dog`. It is an instance of `Dog`, `Animal` (superclass), and `Object` (root). All evaluate to `true`.",
    "Multi-Tier instanceof Evaluation Output", "output", "easy", "Evaluated instanceof across inheritance chain.", "A subclass instance evaluates to true for its own class and all ancestor types.")

add_q(ch8, "What is the output of this code?\n```java\nAnimal a = null;\nSystem.out.println(a instanceof Object);\n```",
    ["true", "false", "NullPointerException", "Error"],
    1, "In Java, evaluating `null instanceof AnyType` always returns `false` safely without throwing `NullPointerException`.",
    "Null instanceof Evaluation Output", "output", "easy", "Recognized that null instanceof anything evaluates to false.", "`null instanceof Type` always evaluates to `false` without throwing an exception.")

add_q(ch8, "What does this code print?\n```java\ninterface A {\n    default void m() { System.out.print(\"A \"); }\n}\ninterface B extends A {\n    default void m() { System.out.print(\"B \"); }\n}\nclass C implements B {}\npublic class Main {\n    public static void main(String[] args) {\n        new C().m();\n    }\n}\n```",
    ["A ", "B ", "A B ", "Error"],
    1, "Interface `B` overrides `m()`. In the inheritance hierarchy, the sub-interface's more specific default implementation takes precedence. Outputs `B `.",
    "Sub-Interface Default Override Output", "output", "medium", "Understands that more specific sub-interface defaults override ancestor defaults.", "More specific sub-interface default methods take precedence: outputs `B `.")

add_q(ch8, "What is the output of this code?\n```java\nabstract class Calculator {\n    public int compute(int a, int b) {\n        return op(a, b);\n    }\n    public abstract int op(int a, int b);\n}\nclass Adder extends Calculator {\n    public int op(int a, int b) { return a + b; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Calculator c = new Adder();\n        System.out.println(c.compute(5, 7));\n    }\n}\n```",
    ["12", "0", "57", "NullPointerException"],
    0, "`c.compute(5, 7)` calls `op(5, 7)`. Since the runtime object is `Adder`, `Adder.op` executes: `5 + 7 = 12`.",
    "Template Method Pattern Invocation Output", "output", "medium", "Traced template method invocation delegating to abstract method.", "Concrete method delegates to overridden abstract operation: `5 + 7 = 12`.")

add_q(ch8, "What does this code print?\n```java\ninterface I {}\nclass A implements I {}\nclass B extends A {}\npublic class Main {\n    public static void main(String[] args) {\n        I ref = new B();\n        System.out.println((ref instanceof A) + \" \" + (ref instanceof B));\n    }\n}\n```",
    ["true true", "true false", "false true", "false false"],
    0, "Because `B` extends `A` which implements `I`, an instance of `B` is an instance of both `A` and `B`. Output: `true true`.",
    "Inherited Interface Type Conformance Output", "output", "easy", "Verified that subclasses inherit interface implementation conformance.", "Subclass `B` inherits interface `I` implementation from `A`; both evaluate to true.")

add_q(ch8, "What is the output of this code?\n```java\ninterface X {\n    default void run() { System.out.print(\"X \"); }\n}\nclass Y implements X {\n    public void run() {\n        X.super.run();\n        System.out.print(\"Y \");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Y().run();\n    }\n}\n```",
    ["X Y ", "Y X ", "X ", "Y "],
    0, "`X.super.run()` explicitly invokes the default implementation of `X`, printing `\"X \"`. Then `Y` prints `\"Y \"`. Output: `X Y `.",
    "Interface Default Call via X.super.run() Output", "output", "medium", "Traced explicit interface default method invocation using `Interface.super.method()`.", "`X.super.run()` invokes interface default logic, followed by local code: `X Y `.")

add_q(ch8, "What does this code print?\n```java\nclass Top {}\nclass Middle extends Top {}\nclass Bottom extends Middle {}\npublic class Main {\n    public static void main(String[] args) {\n        Top t = new Middle();\n        System.out.println((t instanceof Bottom) + \" \" + (t instanceof Middle));\n    }\n}\n```",
    ["false true", "true true", "false false", "true false"],
    0, "The actual runtime object is `Middle`. It is not an instance of `Bottom` (false), but is an instance of `Middle` (true). Output: `false true`.",
    "instanceof Middle Tier Evaluation Output", "output", "easy", "Accurately tested intermediate inheritance hierarchy in instanceof.", "Actual object is `Middle`: false for subclass `Bottom`, true for `Middle`.")

add_q(ch8, "What is the output of this code?\n```java\nabstract class Vehicle {\n    String name;\n    public Vehicle(String name) { this.name = name; }\n}\nclass Car extends Vehicle {\n    public Car() { super(\"Sedan\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Car c = new Car();\n        System.out.println(c.name);\n    }\n}\n```",
    ["Sedan", "null", "Vehicle", "Error"],
    0, "`Car()` invokes `super(\"Sedan\")`, setting `name` in the abstract superclass. Outputs `Sedan`.",
    "Abstract Constructor Field Initialization Output", "output", "easy", "Traced field initialization through abstract superclass constructor.", "`super(\"Sedan\")` initializes abstract class field `name` to 'Sedan'.")

add_q(ch8, "What does this code print?\n```java\ninterface Fun {\n    int apply(int x);\n}\npublic class Main {\n    public static void main(String[] args) {\n        Fun square = x -> x * x;\n        System.out.println(square.apply(5));\n    }\n}\n```",
    ["25", "5", "10", "Error"],
    0, "`Fun` is a functional interface. The lambda `x -> x * x` implements `apply`. `square.apply(5) = 5 * 5 = 25`.",
    "Lambda Expression Invocation Output", "output", "easy", "Evaluated lambda expression implementing functional interface.", "Lambda expression computes 5 * 5 = 25.")

add_q(ch8, "What is the output of this code?\n```java\nclass Base {\n    public void test() { System.out.print(\"Base \"); }\n}\nclass Sub extends Base {\n    public void test() { System.out.print(\"Sub \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Base b = new Sub();\n        Sub s = (Sub) b;\n        s.test();\n    }\n}\n```",
    ["Sub ", "Base ", "Base Sub ", "Error"],
    0, "Both `b.test()` and `s.test()` invoke the runtime object's method on `Sub`. Outputs `Sub `.",
    "Downcast Reference Execution Output", "output", "easy", "Traced execution through downcast reference.", "Downcast reference executes `Sub.test()`, outputting `Sub `.")

add_q(ch8, "What does this code print?\n```java\ninterface A {\n    int X = 10;\n}\ninterface B {\n    int X = 20;\n}\npublic class Main implements A, B {\n    public static void main(String[] args) {\n        System.out.println(A.X + \" \" + B.X);\n    }\n}\n```",
    ["10 20", "20 10", "Compilation error: X is ambiguous", "0 0"],
    0, "Accessing `X` unqualified inside `Main` would be ambiguous, but qualifying with `A.X` and `B.X` resolves ambiguity cleanly. Outputs `10 20`.",
    "Qualified Interface Constant Disambiguation Output", "output", "medium", "Disambiguated colliding interface constants via interface name qualification.", "Qualifying with `A.X` and `B.X` cleanly accesses each constant: `10 20`.")

add_q(ch8, "What is the output of this code?\n```java\nabstract class Animal {\n    abstract void eat();\n}\nclass Bird extends Animal {\n    void eat() { System.out.print(\"Seeds \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Animal a = new Bird();\n        a.eat();\n    }\n}\n```",
    ["Seeds ", "Animal ", "Eat ", "NullPointerException"],
    0, "`a.eat()` invokes the overridden method in `Bird`, outputting `Seeds `.",
    "Abstract Method Dynamic Dispatch Output", "output", "easy", "Traced dynamic dispatch of abstract method.", "Dispatches dynamically to `Bird.eat()`, printing `Seeds `.")

add_q(ch8, "What does this code print?\n```java\ninterface Printer {\n    default void print() { System.out.print(\"Print \"); }\n}\nclass LaserPrinter implements Printer {}\npublic class Main {\n    public static void main(String[] args) {\n        new LaserPrinter().print();\n    }\n}\n```",
    ["Print ", "LaserPrinter ", "Nothing", "Error"],
    0, "`LaserPrinter` does not override `print()`, so it inherits the default method from `Printer`. Outputs `Print `.",
    "Inherited Default Method Output", "output", "easy", "Traced inherited interface default method execution.", "Inherited default method executes, outputting `Print `.")

add_q(ch8, "What is the output of this code?\n```java\nclass Alpha {}\nclass Beta extends Alpha {}\npublic class Main {\n    public static void main(String[] args) {\n        Alpha a = new Alpha();\n        System.out.println(a instanceof Beta);\n    }\n}\n```",
    ["false", "true", "NullPointerException", "Error"],
    0, "The runtime object is `Alpha` (a superclass instance). It is NOT an instance of subclass `Beta`. Outputs `false`.",
    "Superclass Instance of Subclass Check Output", "output", "easy", "Recognized that superclass instances are not instances of subclasses.", "A superclass object is not an instance of its subclass: evaluates to `false`.")

add_q(ch8, "What does this code print?\n```java\nabstract class Plant {\n    public Plant() { grow(); }\n    abstract void grow();\n}\nclass Tree extends Plant {\n    void grow() { System.out.print(\"Tree \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Tree();\n    }\n}\n```",
    ["Tree ", "Plant ", "Nothing", "Error"],
    0, "When `new Tree()` executes, `Plant()` constructor calls `grow()`, which dynamically dispatches to `Tree.grow()`. Outputs `Tree `.",
    "Abstract Constructor Method Dispatch Output", "output", "medium", "Traced dynamic dispatch from abstract superclass constructor.", "Constructor calls `grow()`, which dynamically invokes `Tree.grow()`: `Tree `.")

add_q(ch8, "What is the output of this code?\n```java\nObject obj = \"Polymorphism\";\nif (obj instanceof String s) {\n    System.out.println(s.substring(0, 4));\n}\n```",
    ["Poly", "Polymorphism", "Error", "NullPointerException"],
    0, "Pattern matching binds `s` to the string `\"Polymorphism\"`. `s.substring(0, 4)` extracts \"Poly\". Outputs `Poly`.",
    "Pattern Matching String Extraction Output", "output", "easy", "Evaluated pattern matching for instanceof and method call.", "Pattern matching binds `s` to String, extracting `\"Poly\"`.")

add_q(ch8, "What does this code print?\n```java\ninterface Greeter {\n    void greet();\n}\npublic class Main {\n    public static void main(String[] args) {\n        Greeter g = new Greeter() {\n            public void greet() { System.out.print(\"Anonymous \"); }\n        };\n        g.greet();\n    }\n}\n```",
    ["Anonymous ", "Greeter ", "Nothing", "Error"],
    0, "An anonymous inner class implements `Greeter` and provides `greet()`. Calling `g.greet()` outputs `Anonymous `.",
    "Anonymous Class Interface Instantiation Output", "output", "medium", "Traced anonymous inner class implementing an interface.", "Anonymous class implements interface and executes `greet()`: `Anonymous `.")

add_q(ch8, "What is the output of this code?\n```java\ninterface Calc {\n    int operate(int a, int b);\n}\npublic class Main {\n    public static void main(String[] args) {\n        Calc add = (a, b) -> a + b;\n        Calc mult = (a, b) -> a * b;\n        System.out.println(add.operate(3, 4) + \" \" + mult.operate(3, 4));\n    }\n}\n```",
    ["7 12", "12 7", "7 7", "Error"],
    0, "`add` sums `3 + 4 = 7`. `mult` multiplies `3 * 4 = 12`. Outputs `7 12`.",
    "Multiple Functional Interface Lambdas Output", "output", "easy", "Evaluated multiple lambda implementations of a functional interface.", "Lambdas compute 3 + 4 = 7 and 3 * 4 = 12: `7 12`.")

add_q(ch8, "What does this code print?\n```java\ninterface Item {\n    default int getPrice() { return 100; }\n}\nclass DiscountItem implements Item {\n    public int getPrice() { return Item.super.getPrice() - 20; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new DiscountItem().getPrice());\n    }\n}\n```",
    ["80", "100", "20", "Error"],
    0, "`Item.super.getPrice()` returns 100. Subtracting 20 yields 80. Outputs 80.",
    "Interface super.getPrice() Modification Output", "output", "medium", "Computed price adjustment invoking interface default method via super.", "`100 - 20 = 80`.")

add_q(ch8, "What is the output of this code?\n```java\nabstract class A {\n    abstract void f();\n}\nabstract class B extends A {\n    abstract void g();\n}\nclass C extends B {\n    void f() { System.out.print(\"F \"); }\n    void g() { System.out.print(\"G \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        C obj = new C();\n        obj.f();\n        obj.g();\n    }\n}\n```",
    ["F G ", "G F ", "F ", "G "],
    0, "Concrete class `C` implements both `f()` and `g()`. Invoking both prints `F G `.",
    "Multi-Level Abstract Class Implementation Output", "output", "easy", "Traced implementation of all abstract methods in concrete subclass.", "`obj.f()` and `obj.g()` output `F G `.")

# --- Ch 8: 4. Scenario (25 Qs) ---
add_q(ch8, "You are building a payment gateway for an e-commerce platform supporting PayPal, Stripe, and Touch 'n Go eWallet. How should the payment system be designed to allow adding new payment providers in the future without modifying existing checkout code (Open/Closed Principle)?",
    [
        "Write a massive 500-line switch statement in CheckoutController checking provider names",
        "Define a `PaymentProcessor` interface with `processPayment(double amount)` and have each provider (`StripeProcessor`, `PayPalProcessor`) implement it, allowing `CheckoutController` to depend on the interface",
        "Make all payment providers static classes",
        "Duplicate checkout logic for each provider"
    ],
    1,
    "Depending on the `PaymentProcessor` interface allows new payment providers to be plugged in seamlessly without altering existing checkout orchestrations, upholding the Open/Closed Principle.",
    "Payment Gateway Interface Design", "scenario", "easy",
    "Applied interface abstraction to satisfy the Open/Closed Principle.",
    "Define a common interface so new implementations can be introduced without modifying calling code."
)

add_q(ch8, "A graphics rendering software supports vector shapes: Circles, Rectangles, and Triangles. Why is defining an abstract class `Shape` with `public abstract void draw(Graphics g)` superior to a procedural design using `if (shape.type == CIRCLE)`?",
    [
        "Abstract classes run on GPUs",
        "Polymorphism eliminates fragile type checking ladders; adding a new `Polygon` shape requires only extending `Shape` and implementing `draw()`, requiring zero changes to the rendering loop",
        "Procedural code is not supported in Java",
        "Shapes cannot be drawn without interfaces"
    ],
    1,
    "Polymorphic dispatch delegates rendering to the shape itself, eliminating brittle switch/if-else ladders and enabling infinite extensibility.",
    "Polymorphism Replaces Conditional Ladders", "scenario", "easy",
    "Understands how polymorphism eliminates fragile type checking in graphics engines.",
    "Use polymorphism to eliminate fragile conditional branching ladders."
)

add_q(ch8, "A logging framework supports exporting logs to Console, File, and remote Cloud Storage. What is the appropriate interface definition?",
    [
        "`public interface LogDestination { void writeLog(String message); }`",
        "A class with 3 static methods",
        "A final class with private fields",
        "An abstract class with 50 fields"
    ],
    0,
    "A clean, single-method interface `LogDestination` defines a cohesive contract that Console, File, and Cloud loggers implement.",
    "Logging Contract Interface", "scenario", "easy",
    "Designed cohesive interface for pluggable output destinations.",
    "Define focused, cohesive interfaces for pluggable output destinations."
)

add_q(ch8, "In an autonomous vehicle simulation, objects in the world can be Obstacles (rocks, trees) or MovingVehicles (cars, bikes). Only vehicles can accelerate: `public interface Accelerable { void accelerate(); }`. How should objects be processed in the physics loop?",
    [
        "Downcast every object to Car without checking",
        "Loop through all world entities; for each entity, check `if (entity instanceof Accelerable a)` and call `a.accelerate();`",
        "Create separate worlds for each object type",
        "Use reflection on every frame"
    ],
    1,
    "Using pattern matching for `instanceof Accelerable a` cleanly filters and accelerates only entities that implement the capability contract.",
    "Capability Interface Filtering Pattern", "scenario", "medium",
    "Applied capability interfaces with pattern matching instanceof for selective processing.",
    "Use capability interfaces and `instanceof` to process only entities with specific capabilities."
)

add_q(ch8,
    "A software library maintainer releases Version 2.0 of a widely used interface `DataSource`. The maintainer wants to add a new method `boolean isHealthy()` without breaking millions of existing client classes that implemented Version 1.0. How is this achieved?",
    [
        "Add an abstract method `boolean isHealthy();`",
        "Add a `default` method `default boolean isHealthy() { return true; }` in the interface: existing classes inherit the default implementation without compile errors",
        "Create a brand new class",
        "Delete the interface"
    ],
    1,
    "Java 8 default methods were created precisely to enable interface evolution and backward compatibility without breaking existing implementers.",
    "Interface Evolution via Default Methods", "scenario", "medium",
    "Applied interface default methods for backward-compatible API evolution.",
    "Use `default` methods to add new capabilities to interfaces without breaking existing implementers."
)

add_q(ch8,
    "A database abstraction layer models `DatabaseConnection`. All databases share connection pooling, credentials, and logging logic, but MySQL and Oracle use completely different network socket handshakes. How should this be designed?",
    [
        "Use a pure interface with zero implementation",
        "Use an `abstract class DatabaseConnection` implementing shared pooling and credential state, with an `abstract void connectSocket()` method overridden by `MySqlConnection` and `OracleConnection`",
        "Create two unrelated classes with duplicated code",
        "Write all logic in a single static method"
    ],
    1,
    "An abstract class is ideal when subclasses share substantial state and common implementation code while differing on specific low-level operations (Template Method pattern).",
    "Abstract Class for Shared State & Implementation", "scenario", "medium",
    "Selected abstract class over interface to share common state and algorithms.",
    "Use abstract classes when subclasses must share state and common implementation logic."
)

add_q(ch8,
    "A notification service sends SMS, Email, and Push notifications. The client code is written as: `NotificationSender sender = NotificationFactory.getSender(userPreference); sender.send(message);`. What design principle is demonstrated?",
    [
        "Program to an interface, not an implementation (Dependency Inversion Principle)",
        "Tight coupling",
        "Multiple inheritance",
        "Circular dependency"
    ],
    0,
    "Programming to an interface (`NotificationSender`) decouples the caller from concrete implementation classes, allowing senders to be swapped dynamically.",
    "Program to an Interface Principle", "scenario", "easy",
    "Applied the core principle: Program to an interface, not an implementation.",
    "Depend on interface abstractions rather than concrete implementation classes."
)

add_q(ch8,
    "A data processing pipeline filters a stream of events. It needs a lightweight predicate to test if an event is valid: `boolean test(Event e)`. Why should `java.util.function.Predicate<Event>` be used rather than inventing a custom interface?",
    [
        "Custom interfaces are illegal in Java",
        "Reusing Java's built-in standard functional interfaces (`Predicate`, `Function`, `Consumer`) promotes interoperability with the Stream API, standard libraries, and lambda expressions",
        "Predicate runs in C++",
        "Custom interfaces use more RAM"
    ],
    1,
    "Standard functional interfaces promote code reuse and integrate seamlessly with Java Streams, Optional, and third-party libraries.",
    "Standard Functional Interface Reuse", "scenario", "medium",
    "Employed standard Java functional interfaces for ecosystem compatibility.",
    "Leverage standard functional interfaces (`Predicate`, `Consumer`, `Function`) for seamless ecosystem interoperability."
)

add_q(ch8,
    "A desktop application manages plugins. Third-party developers write plugin JARs. How does the application guarantee that any third-party plugin can be loaded, started, and stopped safely?",
    [
        "By inspecting the author's name",
        "By providing a public `Plugin` interface with lifecycle methods (`init()`, `start()`, `stop()`) that all third-party plugins must implement",
        "By decompiling the plugin code at runtime",
        "By requiring all plugins to be written in a single file"
    ],
    1,
    "Interfaces define pluggable architectural boundaries. Any external plugin implementing `Plugin` can be loaded and executed through uniform interface contracts.",
    "Pluggable Architecture via Interfaces", "scenario", "easy",
    "Engineered pluggable system architecture using interface contracts.",
    "Use interfaces to define clean extension contracts for third-party plugins."
)

add_q(ch8,
    "An image editor applies filters (Grayscale, Blur, Sharpen). A user can chain multiple filters together. How can filters be structured polymorphically so a composite filter can apply an arbitrary list of filters?",
    [
        "Composite pattern: an `ImageFilter` interface implemented by `BlurFilter`, `GrayscaleFilter`, and a `CompositeFilter` that holds a list of `ImageFilter` objects and executes each sequentially",
        "A 20-parameter method",
        "Static methods in main",
        "Multiple inheritance of classes"
    ],
    0,
    "The Composite design pattern uses polymorphism so individual and composite objects are treated uniformly through the same interface.",
    "Composite Pattern via Polymorphism", "scenario", "hard",
    "Applied Composite design pattern using polymorphic interfaces.",
    "Use the Composite pattern to treat individual and combined filters uniformly through an interface."
)

add_q(ch8,
    "A developer designs an immutable `ComplexNumber` class. The developer wants users to be able to sort an array of complex numbers using `Arrays.sort(numbers)`. What interface must `ComplexNumber` implement?",
    [
        "`java.lang.Cloneable`",
        "`java.lang.Comparable<ComplexNumber>` and implement `compareTo(ComplexNumber other)`",
        "`java.io.Serializable`",
        "`java.lang.Runnable`"
    ],
    1,
    "`Comparable<T>` defines the natural ordering of objects, enabling `Arrays.sort()` and `Collections.sort()` to sort collections automatically.",
    "Comparable Interface Contract", "scenario", "easy",
    "Applied Comparable interface to establish natural sort ordering.",
    "Implement `Comparable<T>` and override `compareTo()` to enable automatic sorting."
)

add_q(ch8,
    "A file compression utility supports ZIP, TAR, and GZIP formats. The method `compress(File source, Compressor compressor)` is called. Why does passing different compressor objects demonstrate polymorphism?",
    [
        "Compressor is a primitive type",
        "The method invokes `compressor.compress(source)` without knowing the concrete format; the actual object on the heap dynamically executes its specific compression algorithm",
        "Files are compressed on the GPU",
        "ZIP and TAR share the same code"
    ],
    1,
    "The Strategy pattern leverages polymorphism: behavior is injected via an interface, and dynamic binding executes the chosen strategy at runtime.",
    "Strategy Pattern via Polymorphism", "scenario", "medium",
    "Recognized Strategy design pattern powered by runtime polymorphism.",
    "Use the Strategy pattern with polymorphic interfaces to decouple algorithms from callers."
)

add_q(ch8,
    "A banking application processes different types of financial instruments: Bonds, Stocks, Derivatives. All implement `Valuable` (`double getValue()`). How do you compute the total portfolio net worth?",
    [
        "Cast everything to Stock",
        "`double total = 0; for (Valuable item : portfolio) total += item.getValue();`",
        "Use 3 separate loops for each instrument",
        "Check instance types with 10 if-statements"
    ],
    1,
    "Polymorphism allows treating all instruments uniformly through the `Valuable` interface, calculating the total value in a single clean loop without type checks.",
    "Polymorphic Portfolio Aggregation", "scenario", "easy",
    "Aggregated heterogeneous financial instruments using interface polymorphism.",
    "Iterate heterogeneous collections via a common interface to aggregate metrics cleanly."
)

add_q(ch8,
    "A video game has an `AudioClip` class. When sound plays, it must be cloned so multiple audio instances can overlap without interrupting each other. What standard interface does Java provide to indicate support for field-by-field copying?",
    [
        "`java.lang.Cloneable`",
        "`java.lang.Copyable`",
        "`java.io.Serializable`",
        "`java.lang.Duplicable`"
    ],
    0,
    "`Cloneable` is a marker interface that authorizes `Object.clone()` to perform a field-for-field shallow copy without throwing `CloneNotSupportedException`.",
    "Cloneable Marker Interface", "scenario", "easy",
    "Identified Cloneable marker interface for object duplication.",
    "Implement `Cloneable` to enable `Object.clone()` field copying."
)

add_q(ch8,
    "A web server framework routes HTTP requests. It provides a `Filter` interface: `void doFilter(Request req, Response res, FilterChain chain)`. Why are filters implemented as an interface rather than concrete classes?",
    [
        "Classes cannot handle HTTP",
        "To allow authentication filters, compression filters, and logging filters to be developed independently and plugged into the request processing pipeline interchangeably",
        "Interfaces are faster than classes",
        "To force filters to be static"
    ],
    1,
    "Interfaces define pluggable pipeline contracts, allowing arbitrary filters (auth, rate-limiting, logging) to be chained interchangeably.",
    "Interchangeable Pipeline Filter Architecture", "scenario", "medium",
    "Understands decoupled pipeline middleware design using interfaces.",
    "Use interfaces for middleware pipeline stages to support interchangeable processing components."
)

add_q(ch8,
    "An AI robotics controller controls drone motors. The interface is `MotorController`. In unit tests, physical hardware is unavailable. How does polymorphism solve this testing problem?",
    [
        "Cancel unit testing",
        "Create a `MockMotorController` implementing `MotorController` that records motor commands in memory, allowing tests to run in milliseconds without physical drones",
        "Buy real drones for every unit test run",
        "Make motor methods private"
    ],
    1,
    "Polymorphism enables Dependency Injection and Mocking: passing mock implementations of interfaces during tests decouples software from physical hardware dependencies.",
    "Dependency Injection & Mocking via Interfaces", "scenario", "medium",
    "Leveraged interface polymorphism for test mocking and dependency injection.",
    "Use interfaces to inject mock implementations during unit testing without real hardware."
)

add_q(ch8,
    "A distributed cache system caches objects in Redis. Objects must be converted into byte streams. What marker interface signals that an object's fields can be automatically serialized by the JVM?",
    [
        "`java.io.Serializable`",
        "`java.lang.AutoCloseable`",
        "`java.lang.Cloneable`",
        "`java.lang.Readable`"
    ],
    0,
    "`java.io.Serializable` is the standard marker interface that enables JVM object serialization into byte streams for network transmission or disk storage.",
    "Serializable Marker Interface", "scenario", "easy",
    "Recognized Serializable marker interface for object streaming.",
    "Implement `Serializable` to permit object serialization across networks and caches."
)

add_q(ch8,
    "A weather simulation models `TemperatureSensor` implementing `Comparable<TemperatureSensor>`. When two sensors have equal temperatures, what must `compareTo()` return according to the Comparable specification?",
    [
        "`0`",
        "`1`",
        "`-1`",
        "Throws an exception"
    ],
    0,
    "The `Comparable` contract mandates returning a negative integer if `this < other`, zero if `this.equals(other)`, and a positive integer if `this > other`.",
    "Comparable compareTo Tri-State Return Contract", "scenario", "easy",
    "Knows the tri-state return value contract of compareTo.",
    "`compareTo()` returns negative for less than, 0 for equal, and positive for greater than."
)

add_q(ch8,
    "A social media feed mixes different post types: TextPost, ImagePost, and VideoPost. All extend an abstract class `Post`. When rendering a feed, how does polymorphism simplify the view adapter?",
    [
        "The view adapter iterates `List<Post>` and calls `post.render()`, allowing each post subclass to render its own specific media layout without conditional casting",
        "The adapter splits posts into 3 separate lists",
        "The adapter converts all images to text",
        "All posts must be text"
    ],
    0,
    "A unified `List<Post>` holding diverse polymorphic subtypes eliminates type-checking logic, dispatching directly to each subtype's specialized `render()` implementation.",
    "Heterogeneous Feed Rendering", "scenario", "easy",
    "Handled heterogeneous collection rendering via polymorphic dispatch.",
    "Store heterogeneous domain models in a common supertype collection to simplify rendering."
)

add_q(ch8,
    "An enterprise document converter converts files to PDF. A developer writes `public void convert(Document doc)`. If `doc` can be a `WordDoc`, `ExcelDoc`, or `PowerPointDoc`, why should the method accept `Document` rather than `WordDoc`?",
    [
        "To accept any document type polymorphically, making the conversion pipeline reusable across all document formats",
        "WordDoc cannot be converted",
        "Java does not allow WordDoc parameters",
        "Document uses less memory"
    ],
    0,
    "Accepting the general supertype `Document` makes the API generic, reusable, and decoupled from specific file formats.",
    "Generalized Supertype Parameter Typing", "scenario", "easy",
    "Applied generalized supertype parameter typing for maximum API flexibility.",
    "Design methods to accept the most general supertype necessary to maximize reuse."
)

add_q(ch8,
    "A smart home controller manages appliances (Lights, Fans, AirConditioners). Each has completely different hardware commands, but all have on/off capabilities. Should they inherit from a common `Appliance` class or implement an `Operable` interface?",
    [
        "Inherit from Appliance only",
        "Implement an `Operable` (or `Switchable`) interface: appliances share no common state or hardware logic, only a common behavioral capability contract (`turnOn()`, `turnOff()`)",
        "Use multiple inheritance of classes",
        "Declare appliances as static"
    ],
    1,
    "When entities share behavior but zero common implementation state, interfaces are the preferred design to avoid artificial class hierarchies.",
    "Behavioral Capability Contract Choice", "scenario", "medium",
    "Chose interface over abstract class when entities share behavior without state.",
    "Use interfaces when modeling shared behavioral capabilities across disparate entities."
)

add_q(ch8,
    "A financial calculation engine has a class `TaxCalculator`. A developer wants to ensure that no client code can instantiate `TaxCalculator` because all its methods are static utilities. What is the standard design?",
    [
        "Make the class abstract",
        "Declare a private no-argument constructor: `private TaxCalculator() {}` (and optionally make the class final)",
        "Delete the class",
        "Make all fields protected"
    ],
    1,
    "Providing a private constructor prevents both external instantiation (`new TaxCalculator()`) and subclassing, which is the standard idiom for static utility classes (like `java.lang.Math`).",
    "Suppressing Instantiation via Private Constructor", "scenario", "medium",
    "Applied private constructor idiom to prevent utility class instantiation.",
    "Suppress instantiation of static utility classes by declaring a private constructor."
)

add_q(ch8,
    "A robotics platform controls joints. `ArmJoint` implements `Actuator`. In safety mode, an engineer needs to inspect `ArmJoint`-specific temperature sensors that are NOT part of the general `Actuator` interface. What is the safest way to access this sensor?",
    [
        "Unconditionally cast `((ArmJoint) actuator).getTemperature()`",
        "Use pattern matching for instanceof: `if (actuator instanceof ArmJoint arm) { checkTemp(arm.getTemperature()); }`",
        "Delete the sensor",
        "Cast to Object"
    ],
    1,
    "Pattern matching `instanceof` safely validates the concrete type before exposing subclass-specific telemetry without risking `ClassCastException`.",
    "Safe Subclass Telemetry Inspection", "scenario", "easy",
    "Used pattern matching instanceof to safely access subclass-specific sensors.",
    "Use pattern matching `instanceof` to access subclass-specific methods safely."
)

add_q(ch8,
    "A sorting algorithm needs to sort a list of `Employee` objects by salary in ascending order. If the `Employee` class does not implement `Comparable` (or sorting by salary is an alternate sort order), what Java interface allows defining an external comparator?",
    [
        "`java.util.Comparator<Employee>` with `compare(Employee a, Employee b)`",
        "`java.lang.Comparable` only",
        "`java.lang.Runnable`",
        "`java.util.Scanner`"
    ],
    0,
    "`Comparator<T>` allows defining flexible, pluggable custom sorting strategies externally without modifying the underlying class definition.",
    "Comparator Interface for Custom Sorting", "scenario", "easy",
    "Applied Comparator interface for external custom sorting strategies.",
    "Use `Comparator<T>` to provide alternate or external sorting logic without altering the class."
)

add_q(ch8,
    "A game developer builds a collision detection system. All collidable game objects implement `Collidable` with `BoundingBox getBounds()`. How does this interface simplify spatial partitioning trees (like Quadtrees)?",
    [
        "It forces all objects to be 2D circles",
        "The Quadtree can store and query any game entity (bullets, players, asteroids) uniformly through the `Collidable` interface without knowing their concrete game logic",
        "It speeds up sound rendering",
        "It prevents garbage collection"
    ],
    0,
    "The Quadtree interacts solely with the `Collidable` abstraction, decoupling spatial partitioning algorithms from specific game entity mechanics.",
    "Spatial Partitioning Interface Decoupling", "scenario", "medium",
    "Decoupled engine algorithms from domain entities using interface abstractions.",
    "Interfaces decouple low-level engine algorithms from game entity domain logic."
)

# =========================================================================
# CHAPTER 9: EXCEPTION HANDLING (100 QUESTIONS)
# =========================================================================
ch9 = []

# --- Ch 9: 1. Theory (25 Qs) ---
add_q(ch9, "What is the root class of the entire exception and error hierarchy in Java?",
    ["`java.lang.Exception`", "`java.lang.Throwable`", "`java.lang.Error`", "`java.lang.RuntimeException`"],
    1, "`java.lang.Throwable` is the superclass of all errors and exceptions in Java. Only objects that inherit from `Throwable` can be thrown by the JVM or `throw` statement.",
    "Throwable Root Hierarchy", "theory", "easy", "Identifies Throwable as the root of the Java exception hierarchy.", "`java.lang.Throwable` is the superclass of all exceptions and errors in Java.")

add_q(ch9, "What are the two direct subclasses of `java.lang.Throwable`?",
    ["`CheckedException` and `UncheckedException`", "`java.lang.Exception` and `java.lang.Error`", "`RuntimeException` and `IOException`", "`FatalError` and `Warning`"],
    1, "`Throwable` branches directly into `Exception` (conditions that a reasonable application might want to catch) and `Error` (serious problems that an application should not try to catch, like `OutOfMemoryError`).",
    "Branches of Throwable", "theory", "easy", "Distinguishes Exception from Error branches under Throwable.", "`Throwable` divides directly into `Exception` and `Error`.")

add_q(ch9, "What is the difference between checked exceptions and unchecked exceptions in Java?",
    ["Checked exceptions happen at compile time; unchecked happen at runtime", "Checked exceptions (subclasses of Exception excluding RuntimeException) are checked by the compiler and MUST be caught or declared; unchecked exceptions (RuntimeException and Error) are NOT enforced at compile time", "Checked exceptions cannot be caught", "Unchecked exceptions are fatal hardware crashes"],
    1, "The Java compiler enforces the Catch-or-Specify requirement strictly on checked exceptions. Unchecked exceptions (`RuntimeException`) represent programming logic defects.",
    "Checked vs Unchecked Exceptions", "theory", "easy", "Clearly distinguishes checked exceptions from unchecked runtime exceptions.", "Checked exceptions must be caught or declared (`throws`); unchecked exceptions are not enforced by the compiler.")

add_q(ch9, "Which of the following is an UNCHECKED (runtime) exception in Java?",
    ["`java.io.IOException`", "`java.io.FileNotFoundException`", "`java.lang.NullPointerException`", "`java.lang.ClassNotFoundException`"],
    2, "`NullPointerException` is a subclass of `RuntimeException`, making it an unchecked exception. The others are checked exceptions.",
    "Unchecked Exception Identification", "theory", "easy", "Identifies NullPointerException as an unchecked RuntimeException.", "`NullPointerException`, `ArrayIndexOutOfBoundsException`, and `ArithmeticException` are unchecked.")

add_q(ch9, "Which of the following is a CHECKED exception in Java?",
    ["`java.lang.ArithmeticException`", "`java.io.IOException`", "`java.lang.ArrayIndexOutOfBoundsException`", "`java.lang.ClassCastException`"],
    1, "`IOException` is a checked exception directly inheriting from `Exception`. The others are subclasses of `RuntimeException` (unchecked).",
    "Checked Exception Identification", "theory", "easy", "Identifies IOException as a checked exception.", "`IOException`, `FileNotFoundException`, and `SQLException` are checked exceptions.")

add_q(ch9, "What is the purpose of the `finally` block in a `try-catch-finally` structure?",
    ["It only executes if an exception occurs", "It executes ALWAYS, whether an exception was thrown, caught, or not thrown at all, ensuring cleanup code runs reliably", "It executes only if no exception occurs", "It catches uncaught errors"],
    1, "The `finally` block is guaranteed to execute following a `try` block (even if a `return` statement is executed inside `try` or `catch`), making it ideal for resource cleanup.",
    "Finally Block Guarantee", "theory", "easy", "Understands that the finally block executes unconditionally.", "The `finally` block always executes regardless of whether an exception occurred.")

add_q(ch9, "Under what extreme circumstance will a `finally` block NOT execute?",
    ["If an unhandled exception is thrown", "If the method returns null", "If the JVM process is terminated abruptly (e.g. `System.exit(0)` or catastrophic JVM crash/power loss)", "If the try block has a return statement"],
    2, "A `finally` block executes under all normal Java execution conditions, EXCEPT when `System.exit(status)` is called or the underlying OS process/JVM crashes.",
    "Finally Block Bypassing via System.exit", "theory", "medium", "Understands that System.exit() halts the JVM before finally executes.", "`finally` blocks do not run if `System.exit(0)` terminates the JVM process.")

add_q(ch9, "What is the difference between the `throw` keyword and the `throws` keyword in Java?",
    ["`throw` is used in method headers; `throws` is inside method bodies", "`throw` is an executable statement used to explicitly throw an exception instance; `throws` is a clause in a method declaration indicating exceptions the method might throw", "They are identical synonyms", "`throws` is only for custom exceptions"],
    1, "`throw new MyException();` throws an exception object. `void m() throws IOException` declares that the method may pass checked exceptions to its caller.",
    "Throw vs Throws Keywords", "theory", "easy", "Distinguishes throw statement from throws method clause.", "`throw` triggers an exception instance; `throws` declares exception types in method headers.")

add_q(ch9, "What rule governs the ordering of multiple `catch` blocks for related exception classes?",
    ["Catch blocks must be arranged from most general (superclass) to most specific (subclass)", "Catch blocks must be arranged from most specific (subclass) to most general (superclass), otherwise the compiler rejects unreachable catch blocks", "Catch blocks can be in any random order", "Only one catch block is permitted per try"],
    1, "Because exceptions are caught by the first matching block, placing a superclass (e.g. `Exception`) before a subclass (e.g. `IOException`) makes the subclass unreachable, causing a compile error.",
    "Catch Block Ordering Hierarchy", "theory", "medium", "Understands specific-to-general ordering requirements for catch blocks.", "Arrange catch blocks from most specific subclass to most general superclass.")

add_q(ch9, "What is the multi-catch feature (introduced in Java 7)?",
    ["Catching an exception in multiple threads", "Handling multiple distinct exception types in a single catch block using the pipe `|` operator: `catch (IOException | SQLException e)`", "Having multiple finally blocks", "Catching exceptions without a try block"],
    1, "Multi-catch reduces boilerplate by grouping unrelated exceptions in one block: `catch (IOException | SQLException e)`. In multi-catch, parameter `e` is implicitly `final`.",
    "Multi-Catch Syntax", "theory", "medium", "Understands multi-catch syntax and semantics.", "Multi-catch groups exception types with `|`: `catch (IOException | SQLException e)`.")

add_q(ch9, "How do you define a custom CHECKED exception class in Java?",
    ["Extend `java.lang.RuntimeException`", "Extend `java.lang.Exception` (or any existing checked exception subclass)", "Extend `java.lang.Throwable` directly", "Implement `java.lang.Runnable`"],
    1, "To create a checked exception, create a class that extends `java.lang.Exception` (excluding `RuntimeException`).",
    "Custom Checked Exception Creation", "theory", "easy", "Knows how to create custom checked exceptions by extending Exception.", "Extend `java.lang.Exception` to create custom checked exceptions.")

add_q(ch9, "How do you define a custom UNCHECKED exception class in Java?",
    ["Extend `java.lang.Exception` directly", "Extend `java.lang.RuntimeException`", "Extend `java.lang.Error`", "Implement `java.lang.AutoCloseable`"],
    1, "To create an unchecked (runtime) exception, create a class that extends `java.lang.RuntimeException`.",
    "Custom Unchecked Exception Creation", "theory", "easy", "Knows how to create custom unchecked exceptions by extending RuntimeException.", "Extend `java.lang.RuntimeException` to create custom unchecked exceptions.")

add_q(ch9, "What is exception propagation in Java?",
    ["Converting checked exceptions to errors", "The automatic unwinding of the thread call stack: if an exception is not caught in the current method, it is passed up to the calling method, continuing until caught or terminating the thread", "Writing exceptions to a database", "Catching exceptions in a loop"],
    1, "When an exception occurs, the JVM searches the call stack backwards (unwinding stack frames) until a matching `catch` block is located.",
    "Exception Stack Unwinding & Propagation", "theory", "medium", "Understands call stack unwinding during exception propagation.", "Exceptions propagate up the call stack until caught or terminating the thread.")

add_q(ch9, "What does `e.printStackTrace()` do when an exception is caught?",
    ["Deletes the stack trace", "Prints the exception class name, error message, and the full sequence of method invocations and line numbers leading up to the failure point to `System.err`", "Restarts the application", "Converts the exception to a string"],
    1, "`e.printStackTrace()` prints diagnostic stack trace information to standard error, showing the exact source files and line numbers where the exception originated.",
    "printStackTrace Diagnostic Output", "theory", "easy", "Knows the diagnostic purpose of printStackTrace().", "`e.printStackTrace()` outputs the full chain of method call locations to standard error.")

add_q(ch9, "What is exception chaining (wrapped exceptions) in Java?",
    ["Catching an exception and discarding it", "Wrapping an original low-level exception inside a higher-level domain exception as the 'cause' (`new DomainException(\"Failed\", cause)`), preserving the root cause stack trace", "Throwing 5 exceptions in a row", "Chaining catch blocks"],
    1, "Exception chaining allows a method to catch a low-level technical exception (e.g. `SQLException`) and throw a meaningful domain exception (`BankingException`) while retaining the original cause.",
    "Exception Chaining Pattern", "theory", "medium", "Understands preserving root causes via exception chaining.", "Wrap low-level exceptions inside high-level exceptions using `new CustomException(msg, cause)`.")

add_q(ch9, "What is the effect of an uncaught exception occurring on the main thread?",
    ["The operating system restarts", "The thread terminates, the JVM prints the unhandled exception stack trace to `System.err`, and the program exits (if no non-daemon threads are running)", "The CPU pauses", "The exception is ignored"],
    1, "If an exception propagates all the way out of `main` without being caught, the main thread terminates abruptly and prints the stack trace.",
    "Uncaught Exception Behavior", "theory", "easy", "Knows the consequence of uncaught exceptions on thread lifecycle.", "Uncaught exceptions terminate the active thread and print the stack trace.")

add_q(ch9, "What is an `Error` in Java (such as `OutOfMemoryError` or `StackOverflowError`)?",
    ["A minor syntax error", "A serious JVM subsystem failure or hardware resource exhaustion condition that a reasonable application should NOT attempt to catch or recover from", "A checked exception", "A warning message"],
    1, "Classes extending `Error` represent catastrophic conditions (memory exhaustion, linkage errors) where the JVM's execution environment is fatally compromised.",
    "Error Hierarchy Meaning", "theory", "easy", "Distinguishes fatal Errors from catchable Exceptions.", "`Error` represents severe JVM failures (e.g. `OutOfMemoryError`) that applications should not catch.")

add_q(ch9, "Can a `catch` block rethrow an exception?",
    ["No, once caught an exception is erased", "Yes, a catch block can rethrow the caught exception (`throw e;`) or wrap and throw a new exception after performing partial cleanup or logging", "Only in Java 17+", "Only if marked with final"],
    1, "Rethrowing allows catching an exception to perform local logging or rollbacks, and then re-throwing it so outer layers are notified of the failure.",
    "Exception Rethrowing Pattern", "theory", "easy", "Understands rethrowing exceptions from catch blocks.", "A catch block can log or clean up and then rethrow the exception using `throw e;`.")

add_q(ch9, "What happens if a `try` block contains a `return` statement, and the `finally` block ALSO contains a `return` statement?",
    ["Compilation error: dual returns", "The `return` statement in the `finally` block completely overrides and swallows the `return` statement from the `try` block", "Both values are combined", "The JVM crashes"],
    1, "A `return` in `finally` discards any pending return value or unhandled exception from the `try` block, which is considered a severe anti-pattern.",
    "Return in Finally Anti-Pattern", "theory", "hard", "Mastered the danger of return statements inside finally blocks.", "A `return` in `finally` overwrites any return or exception from the `try` block.")

add_q(ch9, "What happens if an exception is thrown inside a `try` block, and ANOTHER exception is thrown inside the `finally` block?",
    ["Both exceptions are merged into a list", "The exception thrown in the `finally` block suppresses and replaces the original exception from the `try` block, unless try-with-resources is used", "The program crashes before finally", "The finally exception is ignored"],
    1, "In traditional `try-finally`, an exception in `finally` swallows the original exception. Try-with-resources solves this by attaching suppressed exceptions via `e.addSuppressed()`.",
    "Suppressed Exceptions in Finally", "theory", "hard", "Understands how exceptions in finally mask original exceptions.", "Traditional finally exceptions mask try exceptions; try-with-resources preserves them via suppressed exceptions.")

add_q(ch9, "Can a `try` block exist with ONLY a `finally` block (no `catch` blocks)?",
    ["No, every try requires at least one catch block", "Yes, a `try-finally` block is completely valid syntax, commonly used to ensure cleanup code runs even when exceptions are allowed to propagate upward", "Only in Java 8+", "Only if no checked exceptions are thrown"],
    1, "`try { ... } finally { ... }` is legal syntax, guaranteeing cleanup while allowing exceptions to propagate unhindered to callers.",
    "Try-Finally Without Catch", "theory", "easy", "Knows that try-finally without catch is valid syntax.", "`try-finally` without `catch` is valid and ensures cleanup while propagating exceptions.")

add_q(ch9, "What is the `getMessage()` method in `Throwable`?",
    ["Returns the operating system version", "Returns the detailed error message string passed when the exception object was constructed, or null if none was provided", "Returns the line number", "Returns the stack trace"],
    1, "`getMessage()` retrieves the human-readable explanation message supplied during exception instantiation: `new Exception(\"Detailed message\")`.",
    "Throwable getMessage Method", "theory", "easy", "Knows the purpose of getMessage() in Throwable.", "`e.getMessage()` returns the descriptive error message string of the exception.")

add_q(ch9, "Why is catching `java.lang.Throwable` or `java.lang.Error` generally considered a bad practice in application code?",
    ["It causes a compile error", "It catches severe JVM errors like `OutOfMemoryError` and `ThreadDeath`, preventing the JVM from shutting down cleanly and leaving the application in an unstable, corrupted state", "Throwable cannot be caught", "It slows down arithmetic"],
    1, "Catching `Throwable` intercepts fatal JVM internal errors that applications cannot safely handle, masking catastrophic failures and destabilizing the system.",
    "Catching Throwable Anti-Pattern", "theory", "medium", "Understands why catching Throwable/Error is dangerous.", "Avoid catching `Throwable` or `Error`; catch specific `Exception` subclasses instead.")

add_q(ch9, "What is an empty catch block (`catch (Exception e) {}`) and why is it dangerous?",
    ["A syntax error", "An anti-pattern known as 'swallowing exceptions': it silences errors completely without logging or recovery, making bugs invisible and impossible to debug", "A recommended way to improve performance", "A way to restart the JVM"],
    1, "Swallowing exceptions silently hides failures. The application continues running in a corrupted state with zero diagnostic logs.",
    "Swallowing Exceptions Anti-Pattern", "theory", "easy", "Identifies the danger of empty catch blocks.", "Never leave catch blocks empty; at minimum log the error or rethrow it.")

add_q(ch9, "Can an overriding method in a subclass declare FEWER checked exceptions in its `throws` clause than the superclass method?",
    ["No, it must declare the exact same list", "Yes! An overriding method can declare fewer checked exceptions, or even NO checked exceptions at all", "Only if it is marked private", "Only if it returns void"],
    1, "An overriding method cannot declare broader or new checked exceptions, but it is completely free to narrow the list, declare subclasses, or declare NO exceptions at all.",
    "Narrowing Throws Clause in Overriding", "theory", "hard", "Mastered exception narrowing rules in method overriding.", "Overriding methods can declare fewer checked exceptions or omit the `throws` clause entirely.")

# --- Ch 9: 2. Error Identification (25 Qs) ---
add_q(ch9, "Why does the following code produce a compilation error?\n```java\ntry {\n    int x = 10 / 0;\n} catch (Exception e) {\n    System.out.println(\"Error\");\n} catch (ArithmeticException e) {\n    System.out.println(\"Div by zero\");\n}\n```",
    ["Division by zero is illegal", "Unreachable code: `ArithmeticException` is a subclass of `Exception`, so the second catch block is already covered and can never be reached", "try cannot divide", "Exception e must be capitalized"],
    1, "Because `ArithmeticException` extends `Exception`, the first catch block intercepts all arithmetic exceptions. The second block is unreachable, causing a compile error.",
    "Unreachable Catch Block Hierarchy Error", "error", "easy", "Spotted unreachable catch block due to improper ordering.", "Place subclass catch blocks BEFORE superclass catch blocks.")

add_q(ch9, "What compilation error occurs in this method?\n```java\npublic void readFile(String path) {\n    throw new java.io.IOException(\"Disk failure\");\n}\n```",
    ["IOException cannot take a string", "Unreported exception `java.io.IOException`; must be caught or declared to be thrown in method header (`throws IOException`)", "throw must be throws", "readFile must be static"],
    1, "Throwing a checked exception (`IOException`) requires the method to declare `throws IOException` or handle it with `try-catch`.",
    "Unreported Thrown Checked Exception Error", "error", "easy", "Caught missing throws declaration on thrown checked exception.", "Methods throwing checked exceptions must declare `throws ExceptionType` in their header.")

add_q(ch9, "Identify the syntax error in this multi-catch block:\n```java\ntry {\n    // do work\n} catch (IOException | FileNotFoundException e) {\n    System.out.println(e);\n}\n```",
    ["e must be declared twice", "Compilation error: alternative `FileNotFoundException` is a subclass of alternative `IOException` (multi-catch alternatives cannot be related by inheritance)", "Pipe operator `|` is illegal in catch", "IOException cannot be caught"],
    1, "In multi-catch, alternatives cannot be subclasses of one another. Because `FileNotFoundException` extends `IOException`, listing both causes: 'Types in multi-catch must be disjoint'.",
    "Disjoint Types Rule in Multi-Catch Error", "error", "hard", "Caught non-disjoint inheritance hierarchy in multi-catch.", "Types in a multi-catch block must be disjoint (cannot have parent-child relationship).")

add_q(ch9, "Why does this try block fail to compile?\n```java\ntry {\n    System.out.println(\"Hello\");\n}\n```",
    ["println cannot be in try", "Syntax error: 'try' without 'catch', 'finally', or resource declarations", "Hello must be in single quotes", "try is deprecated"],
    1, "A `try` statement must be followed by at least one `catch` block, a `finally` block, or declare resources in parentheses `try (...)`.",
    "Try Without Catch or Finally Error", "error", "easy", "Recognized invalid standalone try statement.", "A `try` block must be accompanied by at least one `catch`, `finally`, or resource header.")

add_q(ch9, "What is wrong with this code?\n```java\ntry {\n    int a = 5;\n} catch (ArithmeticException e) {\n    System.out.println(a);\n}\n```",
    ["ArithmeticException cannot be caught", "Cannot find symbol: variable 'a' is local to the try block and cannot be accessed inside the catch block", "a is not divided", "e is not used"],
    1, "Variables declared inside the `try` block are block-scoped to that block. They are out of scope inside `catch` and `finally` blocks.",
    "Try Block Variable Scope Error", "error", "easy", "Caught referencing try-scoped variable in catch block.", "Variables declared inside a try block are out of scope in catch and finally blocks.")

add_q(ch9, "Why does this multi-catch block fail to compile?\n```java\ntry {\n    // work\n} catch (IOException | SQLException e) {\n    e = new IOException();\n}\n```",
    ["SQLException is not imported", "Cannot assign a value to final variable 'e': multi-catch parameters are implicitly `final` and cannot be reassigned", "catch cannot take new", "IOException has no no-arg constructor"],
    1, "In Java multi-catch, the exception parameter `e` is implicitly `final`. Reassigning `e` causes a compilation error.",
    "Multi-Catch Parameter Reassignment Error", "error", "medium", "Understands that multi-catch parameters are implicitly final.", "Multi-catch parameters are implicitly `final` and cannot be reassigned.")

add_q(ch9, "What error occurs in this method definition?\n```java\npublic void process() throw Exception {\n    // work\n}\n```",
    ["Exception cannot be thrown", "Syntax error: the keyword for method declarations is `throws` (plural), not `throw`", "process must return int", "Missing try block"],
    1, "In method headers, use `throws Exception` (plural). `throw` (singular) is an executable statement inside method bodies.",
    "Throw vs Throws Keyword Mix-up", "error", "easy", "Caught `throw` keyword mistakenly used in method header.", "Use `throws` in method headers and `throw` inside method bodies.")

add_q(ch9, "Why does this code cause a compilation error?\n```java\ntry {\n    String s = \"test\";\n} catch (java.io.IOException e) {\n    System.out.println(e);\n}\n```",
    ["s is not used", "Unreachable catch block: exception `IOException` is never thrown in the body of the corresponding try statement", "IOException cannot be caught", "String cannot be in try"],
    1, "The compiler strictly forbids catching a checked exception that is provably never thrown by any statement within the `try` block.",
    "Unreachable Catch for Unthrown Checked Exception", "error", "hard", "Recognized compiler rejection of catching checked exceptions never thrown in try block.", "The compiler rejects catching checked exceptions that cannot possibly be thrown in the try block.")

add_q(ch9, "What is the compilation issue in this code?\n```java\ntry {\n    int x = 1;\n} finally {\n    System.out.println(\"Finally\");\n} catch (Exception e) {\n    System.out.println(\"Catch\");\n}\n```",
    ["try-finally cannot have catch", "Syntax error: `catch` block cannot follow `finally`; `catch` blocks must precede `finally`", "println cannot be in finally", "x is not modified"],
    1, "In a `try-catch-finally` statement, all `catch` blocks must appear BEFORE the `finally` block.",
    "Misplaced Catch Block After Finally", "error", "easy", "Spotted catch block placed after finally block.", "Catch blocks must strictly precede the `finally` block.")

add_q(ch9, "Why does this code fail to compile?\n```java\npublic class CustomException extends Throwable {\n    public void test() {\n        throw this;\n    }\n}\n// in caller:\npublic void run() {\n    new CustomException().test();\n}\n```",
    ["CustomException cannot extend Throwable", "Unreported exception `CustomException`: classes extending `Throwable` directly are treated as checked exceptions and must be declared or caught", "throw this is illegal", "test must return void"],
    1, "`Throwable` and direct subclasses of `Throwable` (that do not extend `RuntimeException`) are checked exceptions and require handling.",
    "Direct Throwable Subclass is Checked Exception", "error", "medium", "Understands that direct subclasses of Throwable are checked.", "Direct subclasses of `Throwable` are checked exceptions requiring handling.")

add_q(ch9, "Identify the bug in this code:\n```java\nint x = 10;\ntry {\n    x = 20;\n    int y = 10 / 0;\n} catch (ArithmeticException e) {\n    // do nothing\n}\nSystem.out.println(x);\n```",
    ["x is not updated", "Swallowing exception: x becomes 20 before the exception occurs, and the exception is silently ignored, leaving system in unexpected state with no error logs", "Compilation error", "y is printed"],
    1, "Swallowing the exception silently conceals the failure. While syntactically valid, it is a severe code defect.",
    "Silent Exception Swallowing Bug", "error", "easy", "Recognized silent exception swallowing defect.", "Never swallow exceptions silently; log or handle them properly.")

add_q(ch9, "Why does this code fail to compile?\n```java\nclass Base {\n    public void load() throws java.io.IOException {}\n}\nclass Sub extends Base {\n    @Override\n    public void load() throws Exception {}\n}\n```",
    ["IOException cannot be thrown", "`load()` in `Sub` cannot override `load()` in `Base`: overridden method does not throw `Exception` (subclass cannot throw broader checked exception `Exception`)", "Sub must be abstract", "load must return int"],
    1, "An overriding method cannot declare broader checked exceptions. `Exception` is broader than `IOException`, violating method overriding rules.",
    "Broader Checked Exception in Overriding Error", "error", "medium", "Spotted illegal broader checked exception in overriding method.", "Overriding methods cannot declare broader checked exceptions than the superclass method.")

add_q(ch9, "What runtime exception is thrown by `Integer.parseInt(\"abc\")`?\n",
    ["`java.lang.NumberFormatException`", "`InputMismatchException`", "`ClassCastException`", "`NullPointerException`"],
    0, "`Integer.parseInt()` throws `NumberFormatException` (a subclass of `IllegalArgumentException`) when the string does not contain a parsable integer.",
    "NumberFormatException", "error", "easy", "Identified NumberFormatException on unparsable string.", "`Integer.parseInt()` throws `NumberFormatException` on invalid numeric strings.")

add_q(ch9, "Why does this code cause a compiler error?\n```java\npublic void check() {\n    throw null;\n}\n```",
    ["throw cannot take null", "It compiles! Throwing `null` is valid syntax, but throws a `NullPointerException` at runtime when executed", "check must be static", "check must return Object"],
    1, "`throw null;` is syntactically valid in Java. However, at runtime the JVM attempts to dereference it to inspect the exception object, throwing a `NullPointerException`.",
    "Throwing Null Literal Runtime Behavior", "error", "hard", "Understands that throw null compiles but raises NPE at runtime.", "`throw null` compiles cleanly but throws `NullPointerException` at runtime.")

add_q(ch9, "What is the issue with this custom exception?\n```java\npublic class MyException {\n    public MyException(String msg) {}\n}\n// in method:\nthrow new MyException(\"Error\");\n```",
    ["msg cannot be string", "Incompatible types: `MyException` cannot be converted to `java.lang.Throwable` (only subclasses of Throwable can be thrown)", "new is illegal with exceptions", "MyException has no constructor"],
    1, "In Java, only classes that extend `java.lang.Throwable` (or `Exception`/`RuntimeException`) can be used with the `throw` keyword.",
    "Non-Throwable Cannot Be Thrown Error", "error", "easy", "Caught attempting to throw an object that does not extend Throwable.", "Classes thrown with `throw` must inherit from `java.lang.Throwable`.")

add_q(ch9, "Why does this code fail to compile?\n```java\ntry {\n    int a = 5;\n} catch (Exception e) {\n    System.out.println(e);\n}\nSystem.out.println(e.getMessage());\n```",
    ["a is not initialized", "Cannot find symbol: variable 'e' is local to the catch block and out of scope outside it", "getMessage() is private", "e must be final"],
    1, "The exception parameter `e` is scoped exclusively to its `catch` block. It cannot be accessed outside the block.",
    "Catch Parameter Scope Leak Error", "error", "easy", "Recognized exception parameter out of scope outside catch block.", "Exception parameters declared in catch headers are local to that catch block.")

add_q(ch9, "What happens when running this code?\n```java\nString s = null;\nSystem.out.println(s.length());\n```",
    ["Prints 0", "Throws `java.lang.NullPointerException` at runtime", "Prints null", "Compilation error: s is null"],
    1, "Attempting to invoke an instance method on a `null` reference throws `NullPointerException`.",
    "NullPointerException on Null Method Call", "error", "easy", "Identified NullPointerException when dereferencing null.", "Calling methods on a null reference throws `NullPointerException`.")

add_q(ch9, "Why does this code cause a compiler error?\n```java\npublic void divide(int a, int b) {\n    if (b == 0) {\n        throw new ArithmeticException(\"Zero\");\n        System.out.println(\"Failed\");\n    }\n}\n```",
    ["ArithmeticException cannot take string", "Unreachable statement: `System.out.println` appears immediately after an unconditional `throw` statement", "b == 0 is invalid", "divide must return int"],
    1, "An unconditional `throw` statement terminates the current execution path immediately. Any statement placed directly after it is unreachable.",
    "Unreachable Code After Throw", "error", "easy", "Caught unreachable statement following unconditional throw.", "Statements placed immediately after an unconditional `throw` are unreachable.")

add_q(ch9, "What is the compilation issue in this code?\n```java\ntry {\n    // work\n} catch (IOException e) {\n} catch (IOException e) {\n}\n```",
    ["IOException cannot be caught", "Exception `IOException` has already been caught: duplicate catch block for the same exception type", "e cannot be used twice", "try is empty"],
    1, "Multiple catch blocks cannot catch the exact same exception type within the same try statement.",
    "Duplicate Catch Block Error", "error", "easy", "Recognized duplicate catch block for identical exception type.", "A try statement cannot have duplicate catch blocks for the same exception type.")

add_q(ch9, "Why does this code throw a runtime exception?\n```java\nint[] arr = new int[5];\nSystem.out.println(arr[-1]);\n```",
    ["Returns 0", "Throws `ArrayIndexOutOfBoundsException: Index -1 out of bounds for length 5`", "Returns null", "Compilation error"],
    1, "Negative indices are out of bounds in Java and throw `ArrayIndexOutOfBoundsException`.",
    "Negative Index ArrayIndexOutOfBoundsException", "error", "easy", "Identified ArrayIndexOutOfBoundsException on negative array index.", "Array indices must be non-negative; negative indices throw `ArrayIndexOutOfBoundsException`.")

add_q(ch9, "What error occurs in this code snippet?\n```java\nObject x = Integer.valueOf(42);\nString s = (String) x;\n```",
    ["Prints null", "Throws `ClassCastException: class java.lang.Integer cannot be cast to class java.lang.String`", "Converts to \"42\"", "Compilation error"],
    1, "An `Integer` instance cannot be cast to `String`. It throws `ClassCastException` at runtime.",
    "Integer to String ClassCastException", "error", "easy", "Identified ClassCastException on invalid type cast.", "Casting incompatible types (Integer to String) throws `ClassCastException`.")

add_q(ch9, "Why does this code fail to compile?\n```java\npublic class Test {\n    public static void main(String[] args) throws RuntimeException {\n        throw new Exception();\n    }\n}\n```",
    ["RuntimeException cannot be declared in throws", "Unreported exception `java.lang.Exception`: `main` declares `throws RuntimeException` (unchecked), but throws `Exception` (checked)", "throw cannot be in main", "Exception has no constructor"],
    1, "`Exception` is a checked exception. Declaring `throws RuntimeException` does not satisfy the compiler because `Exception` is a superclass of `RuntimeException`, not a subclass.",
    "Insufficient Throws Declaration Error", "error", "medium", "Understands that declaring RuntimeException does not cover checked Exception.", "Declaring `throws RuntimeException` does not satisfy checked `Exception` throws.")

add_q(ch9, "Identify the bug in this code:\n```java\ntry {\n    int res = 10 / 0;\n} finally {\n    return;\n}\n```",
    ["finally cannot have return", "The `return;` statement in `finally` swallows and completely discards the `ArithmeticException`, making the method return silently without throwing", "Compilation error", "Throws ArithmeticException"],
    1, "Executing `return` in `finally` aborts exception propagation, discarding the `ArithmeticException`. Callers will never know an error occurred.",
    "Swallowed Exception via Finally Return", "error", "medium", "Understands that finally return discards active exceptions.", "A `return` in `finally` discards any pending exception, hiding errors.")

add_q(ch9, "What is the compilation issue in this code?\n```java\npublic class Custom extends Exception {\n    public Custom(String msg) {\n        // no call to super\n    }\n}\n```",
    ["Custom must be final", "It compiles cleanly! The compiler automatically inserts `super();`, though calling `super(msg)` is recommended to preserve the message string in `getMessage()`", "msg cannot be string", "Custom cannot extend Exception"],
    1, "The code compiles cleanly. However, omitting `super(msg)` means `getMessage()` will return `null`. It is a semantic bug, not a compilation error.",
    "Custom Exception Missing super(msg) Semantic Trap", "error", "medium", "Recognized that missing super(msg) compiles but leaves getMessage() as null.", "Always pass error message to `super(msg)` in custom exception constructors.")

add_q(ch9, "Why does this code fail to compile?\n```java\nvoid test() {\n    try {\n        int x = 5;\n    } catch (NullPointerException e1) {\n    } catch (NullPointerException e2) {\n    }\n}\n```",
    ["NPE cannot be caught", "Compilation error: exception `NullPointerException` has already been caught", "e1 and e2 must have same name", "try has no code"],
    1, "Duplicate catch blocks for the exact same exception type violate Java syntax and are rejected at compile time.",
    "Duplicate Catch Type Syntax Error", "error", "easy", "Caught duplicate catch type declaration.", "Cannot declare duplicate catch blocks for the same exception type.")

# --- Ch 9: 3. Output (25 Qs) ---
add_q(ch9, "What is the output of the following code?\n```java\ntry {\n    System.out.print(\"A \");\n    int x = 10 / 0;\n    System.out.print(\"B \");\n} catch (ArithmeticException e) {\n    System.out.print(\"C \");\n} finally {\n    System.out.print(\"D \");\n}\nSystem.out.print(\"E \");\n```",
    ["A C D E ", "A B C D E ", "A D E ", "A C D "],
    0, "1) Prints `\"A \"`. 2) `10 / 0` throws `ArithmeticException` (skipping `\"B \"`). 3) Catch block runs, printing `\"C \"`. 4) Finally block runs, printing `\"D \"`. 5) Normal flow resumes, printing `\"E \"`. Output: `A C D E `.",
    "Try-Catch-Finally Execution Order Output", "output", "easy", "Traced try-catch-finally execution flow.", "Execution flow: Try (before error) -> Catch -> Finally -> Following code: `A C D E `.")

add_q(ch9, "What does this code print?\n```java\npublic static int test() {\n    try {\n        return 1;\n    } finally {\n        return 2;\n    }\n}\npublic static void main(String[] args) {\n    System.out.println(test());\n}\n```",
    ["1", "2", "3", "Compilation error"],
    1, "The `finally` block always executes before the method returns. The `return 2;` in `finally` overwrites the pending `return 1;`. Outputs 2.",
    "Finally Return Overrides Try Return Output", "output", "medium", "Recognized that return in finally overrides return in try.", "`finally` executes before method returns; `return 2` in finally overrides `return 1`.")

add_q(ch9, "What is the output of this code?\n```java\npublic static int compute() {\n    int x = 10;\n    try {\n        return x;\n    } finally {\n        x = 20;\n    }\n}\npublic static void main(String[] args) {\n    System.out.println(compute());\n}\n```",
    ["10", "20", "30", "0"],
    0, "`return x;` evaluates `x` (10) and places 10 on the operand stack for return. The `finally` block runs, mutating local variable `x = 20`, but the return value is already fixed at 10. Outputs 10.",
    "Primitive Return Value Latching in Finally Output", "output", "hard", "Mastered primitive return value latching prior to finally execution.", "The return value (10) is evaluated before finally runs; mutating local variable in finally does not alter the return value.")

add_q(ch9, "What does the following code print?\n```java\ntry {\n    System.out.print(\"1 \");\n    int[] arr = new int[2];\n    arr[5] = 10;\n    System.out.print(\"2 \");\n} catch (ArrayIndexOutOfBoundsException e) {\n    System.out.print(\"3 \");\n} finally {\n    System.out.print(\"4 \");\n}\n```",
    ["1 3 4 ", "1 2 3 4 ", "1 4 ", "1 2 4 "],
    0, "`arr[5]` throws `ArrayIndexOutOfBoundsException`, skipping \"2 \". Catch block prints `\"3 \"`. Finally block prints `\"4 \"`. Output: `1 3 4 `.",
    "ArrayIndexOutOfBoundsException Catch Flow", "output", "easy", "Traced array bounds exception catch flow.", "Exception skips line 2, executes catch (3), then finally (4): `1 3 4 `.")

add_q(ch9, "What is the output of this code?\n```java\ntry {\n    System.out.print(\"Try \");\n} finally {\n    System.out.print(\"Finally \");\n}\nSystem.out.print(\"Done \");\n```",
    ["Try Finally Done ", "Try Done ", "Finally Done ", "Try Done Finally "],
    0, "Without exceptions, `try` runs (`\"Try \"`), then `finally` runs (`\"Finally \"`), then subsequent code executes (`\"Done \"`). Output: `Try Finally Done `.",
    "Clean Try-Finally Flow", "output", "easy", "Traced normal execution through try-finally block.", "Normal flow executes try body, then finally, then resumes: `Try Finally Done `.")

add_q(ch9, "What does this code print?\n```java\ntry {\n    throw new NullPointerException(\"Boom\");\n} catch (Exception e) {\n    System.out.println(e.getMessage());\n}\n```",
    ["Boom", "NullPointerException", "null", "Boom Boom"],
    0, "`e.getMessage()` returns the detail message string passed to the constructor: `\"Boom\"`.",
    "Exception getMessage Output", "output", "easy", "Extracted exception message string via getMessage().", "`e.getMessage()` outputs the message string `Boom`.")

add_q(ch9, "What is the output of this code?\n```java\nint count = 0;\ntry {\n    count = 1;\n    throw new Exception();\n} catch (Exception e) {\n    count = 2;\n} finally {\n    count = 3;\n}\nSystem.out.println(count);\n```",
    ["1", "2", "3", "0"],
    2, "`count` becomes 1, then exception jumps to catch where `count` becomes 2. Finally block executes unconditionally, setting `count = 3`. Outputs 3.",
    "Variable State Tracking Across Try-Catch-Finally", "output", "easy", "Tracked sequential variable assignments across exception blocks.", "Finally block executes last, setting `count = 3`.")

add_q(ch9, "What does this code print?\n```java\ntry {\n    int a = 10 / 2;\n    System.out.print(\"Success \");\n} catch (ArithmeticException e) {\n    System.out.print(\"Catch \");\n} finally {\n    System.out.print(\"Finally \");\n}\n```",
    ["Success Finally ", "Success ", "Catch Finally ", "Success Catch Finally "],
    0, "No exception occurs. The try block prints `\"Success \"`. Catch block is skipped. Finally block executes, printing `\"Finally \"`. Output: `Success Finally `.",
    "No-Exception Try-Catch-Finally Path", "output", "easy", "Traced exception-free execution path.", "Without exceptions, catch is bypassed and finally executes: `Success Finally `.")

add_q(ch9, "What is the output of this code?\n```java\ntry {\n    try {\n        throw new ArithmeticException(\"Inner\");\n    } finally {\n        System.out.print(\"F1 \");\n    }\n} catch (Exception e) {\n    System.out.print(\"C1 \");\n}\n```",
    ["F1 C1 ", "C1 F1 ", "F1 ", "C1 "],
    0, "The inner exception triggers the inner `finally` block first, printing `\"F1 \"`. The exception propagates to the outer `catch` block, printing `\"C1 \"`. Output: `F1 C1 `.",
    "Nested Try-Finally Propagation Output", "output", "medium", "Traced exception propagation through nested try-finally blocks.", "Inner finally runs before outer catch block executes: `F1 C1 `.")

add_q(ch9, "What does this code print?\n```java\npublic static void m() {\n    try {\n        System.out.print(\"A \");\n        return;\n    } finally {\n        System.out.print(\"B \");\n    }\n}\npublic static void main(String[] args) {\n    m();\n    System.out.print(\"C \");\n}\n```",
    ["A B C ", "A C B ", "A B ", "A C "],
    0, "`m()` prints `\"A \"`. The `return` statement triggers `finally`, which prints `\"B \"`. Method returns to `main`, which prints `\"C \"`. Output: `A B C `.",
    "Return Triggers Finally Output", "output", "easy", "Understands that return in try executes finally before returning to caller.", "Return in try executes finally before returning: `A B C `.")

add_q(ch9, "What is the output of this code?\n```java\ntry {\n    throw new IllegalArgumentException();\n} catch (NullPointerException | ArithmeticException e) {\n    System.out.print(\"One \");\n} catch (RuntimeException e) {\n    System.out.print(\"Two \");\n}\n```",
    ["One ", "Two ", "One Two ", "Uncaught exception"],
    1, "`IllegalArgumentException` does not match `NullPointerException` or `ArithmeticException`. It falls through to `catch (RuntimeException e)`, printing `\"Two \"`.",
    "Multi-Catch Mismatch Fall-Through Output", "output", "easy", "Traced exception matching and fall-through across multiple catch blocks.", "`IllegalArgumentException` bypasses first catch and matches `RuntimeException`: `Two `.")

add_q(ch9, "What does this code print?\n```java\ntry {\n    int[] a = null;\n    System.out.print(a.length);\n} catch (NullPointerException e) {\n    System.out.print(\"Null \");\n} catch (Exception e) {\n    System.out.print(\"Ex \");\n}\n```",
    ["Null ", "Ex ", "0 ", "Null Ex "],
    0, "`a.length` on a null reference throws `NullPointerException`, caught by the first matching catch block. Prints `Null `.",
    "NullPointerException First Match Output", "output", "easy", "Identified first matching catch block for NullPointerException.", "The first matching catch block (`NullPointerException`) handles the error: `Null `.")

add_q(ch9, "What is the output of this code?\n```java\ntry {\n    throw new Exception(\"Error1\");\n} catch (Exception e) {\n    try {\n        throw new Exception(\"Error2\");\n    } catch (Exception ex) {\n        System.out.print(ex.getMessage() + \" \");\n    }\n    System.out.print(e.getMessage());\n}\n```",
    ["Error2 Error1", "Error1 Error2", "Error1", "Error2"],
    0, "Inner catch handles `ex` and prints `\"Error2 \"`. Then outer catch prints `e.getMessage()` (`\"Error1\"`). Output: `Error2 Error1`.",
    "Nested Catch Block Scopes Output", "output", "medium", "Traced separate exception scopes in nested try-catch blocks.", "Inner catch prints Error2, then outer code prints Error1: `Error2 Error1`.")

add_q(ch9, "What does this code print?\n```java\nclass MyException extends Exception {\n    public MyException(String m) { super(m); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            throw new MyException(\"Custom\");\n        } catch (MyException e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}\n```",
    ["Custom", "MyException", "null", "Error"],
    0, "Custom exception passes \"Custom\" to `super(m)`. `e.getMessage()` returns `\"Custom\"`.",
    "Custom Exception getMessage Output", "output", "easy", "Retrieved custom exception message passed to super constructor.", "`e.getMessage()` outputs `Custom`.")

add_q(ch9, "What is the output of this code?\n```java\ntry {\n    int x = 5 / 0;\n} catch (ArithmeticException e) {\n    System.out.print(\"Catch1 \");\n    try {\n        int y = 5 / 0;\n    } catch (ArithmeticException ex) {\n        System.out.print(\"Catch2 \");\n    }\n}\n```",
    ["Catch1 Catch2 ", "Catch1 ", "Catch2 ", "Error"],
    0, "Outer catch runs, printing `\"Catch1 \"`. Inner division throws another exception, caught by the inner catch, printing `\"Catch2 \"`. Output: `Catch1 Catch2 `.",
    "Exception in Catch Block Handled by Nested Try", "output", "easy", "Traced exception thrown and caught within a catch block.", "Exception thrown inside catch is caught by inner try-catch: `Catch1 Catch2 `.")

add_q(ch9, "What does this code print?\n```java\nString s = \"123a\";\ntry {\n    int n = Integer.parseInt(s);\n    System.out.println(n);\n} catch (NumberFormatException e) {\n    System.out.println(\"Invalid\");\n}\n```",
    ["Invalid", "123", "0", "NumberFormatException"],
    0, "`\"123a\"` contains the non-numeric character 'a', throwing `NumberFormatException`. Caught and prints `Invalid`.",
    "NumberFormatException Catch Output", "output", "easy", "Caught NumberFormatException from Integer.parseInt.", "Unparsable string throws NumberFormatException, caught printing `Invalid`.")

add_q(ch9, "What is the output of this code?\n```java\nint x = 0;\ntry {\n    x = 1;\n    if (x == 1) throw new RuntimeException();\n    x = 2;\n} catch (RuntimeException e) {\n    x = 3;\n}\nSystem.out.println(x);\n```",
    ["3", "1", "2", "0"],
    0, "`x` is set to 1. Exception is thrown, skipping `x = 2`. Catch block executes and sets `x = 3`. Outputs 3.",
    "Execution Branch Flow on Throw Output", "output", "easy", "Tracked variable assignment skipping on thrown exception.", "Exception skips `x = 2` and assigns `x = 3` in catch.")

add_q(ch9, "What does this code print?\n```java\ntry {\n    throw new Exception(\"A\");\n} catch (Exception e) {\n    System.out.print(e.getMessage() + \" \");\n    throw new RuntimeException(\"B\");\n} finally {\n    System.out.print(\"C \");\n}\n```",
    ["A C followed by uncaught RuntimeException B", "A B C ", "A C ", "Error"],
    0, "Catch block prints `\"A \"` and throws `RuntimeException(\"B\")`. Before the exception propagates out, `finally` executes, printing `\"C \"`. Then `RuntimeException: B` terminates the program.",
    "Finally Executes Before Rethrown Exception Propagates", "output", "hard", "Mastered that finally executes even when a catch block rethrows an exception.", "`finally` executes before rethrown exception propagates out: prints `A C ` then throws.")

add_q(ch9, "What is the output of this code?\n```java\npublic static void f() throws Exception {\n    throw new Exception(\"Fail\");\n}\npublic static void main(String[] args) {\n    try {\n        f();\n    } catch (Exception e) {\n        System.out.println(\"Caught in main\");\n    }\n}\n```",
    ["Caught in main", "Fail", "Error", "Nothing"],
    0, "Method `f()` throws an exception that propagates to `main`, where it is caught and prints `Caught in main`.",
    "Propagated Exception Caught in Caller", "output", "easy", "Traced exception propagation caught by caller method.", "Exception propagates to caller's try-catch block: `Caught in main`.")

add_q(ch9, "What does this code print?\n```java\ntry {\n    int[] arr = {1, 2};\n    System.out.print(arr[1] + \" \");\n} finally {\n    System.out.print(\"F \");\n}\n```",
    ["2 F ", "F 2 ", "2 ", "F "],
    0, "`arr[1]` is 2 (prints `\"2 \"`). Finally block prints `\"F \"`. Output: `2 F `.",
    "Normal Flow with Valid Array Access Output", "output", "easy", "Traced valid array access through try-finally block.", "Valid access prints 2, followed by finally block F: `2 F `.")

add_q(ch9, "What is the output of this code?\n```java\ntry {\n    throw new ArithmeticException();\n} catch (Exception e) {\n    System.out.println(e.getClass().getSimpleName());\n}\n```",
    ["ArithmeticException", "Exception", "Throwable", "Error"],
    0, "`e.getClass().getSimpleName()` inspects the runtime class of the caught object, which is `ArithmeticException`.",
    "Exception Runtime Class Introspection Output", "output", "easy", "Retrieved runtime exception class name.", "`getClass().getSimpleName()` returns `ArithmeticException`.")

add_q(ch9, "What does this code print?\n```java\nint res = 0;\ntry {\n    res = 100 / 10;\n} catch (Exception e) {\n    res = -1;\n} finally {\n    res += 5;\n}\nSystem.out.println(res);\n```",
    ["15", "10", "-1", "4"],
    0, "Try block succeeds: `res = 10`. Catch is bypassed. Finally block executes: `res += 5` -> `10 + 5 = 15`. Outputs 15.",
    "Try Success with Finally Arithmetic", "output", "easy", "Computed cumulative variable changes in try and finally.", "`10 + 5 = 15`.")

add_q(ch9, "What is the output of this code?\n```java\ntry {\n    String s = null;\n    s.toString();\n} catch (NullPointerException e) {\n    System.out.print(\"NPE \");\n} catch (RuntimeException e) {\n    System.out.print(\"RE \");\n}\n```",
    ["NPE ", "RE ", "NPE RE ", "Error"],
    0, "`NullPointerException` matches the first specific catch block (`NPE `). The second catch block is skipped. Outputs `NPE `.",
    "Catch Specificity First Match Output", "output", "easy", "Identified exact match in specific catch block.", "First matching catch block (`NPE `) executes.")

add_q(ch9, "What does this code print?\n```java\ntry {\n    int a = Integer.parseInt(\"10\");\n    int b = Integer.parseInt(\"20\");\n    System.out.println(a + b);\n} catch (NumberFormatException e) {\n    System.out.println(\"Err\");\n}\n```",
    ["30", "1020", "Err", "Error"],
    0, "Both string tokens parse cleanly to integers 10 and 20. `10 + 20 = 30`. Outputs 30.",
    "Successful Number Parsing Output", "output", "easy", "Computed sum of successfully parsed numeric tokens.", "`10 + 20 = 30`.")

add_q(ch9, "What is the output of this code?\n```java\ntry {\n    throw new RuntimeException(\"Test\");\n} catch (RuntimeException e) {\n    System.out.println(e.getCause());\n}\n```",
    ["null", "Test", "RuntimeException", "Error"],
    0, "When an exception is instantiated without a cause parameter, `e.getCause()` returns `null`.",
    "Unchained Exception getCause Output", "output", "medium", "Understands that unchained exceptions have null getCause().", "`e.getCause()` returns `null` when no underlying cause exception is wrapped.")

# --- Ch 9: 4. Scenario (25 Qs) ---
add_q(ch9, "You are building an ATM software application in Java. A customer attempts to withdraw RM 1,000 from an account with only RM 200. What is the standard object-oriented exception handling approach?",
    [
        "Return `-1` and let the caller guess what went wrong",
        "Throw a custom domain exception `throw new InsufficientFundsException(\"Required: 1000, Available: 200\");`",
        "Print 'Error' to the screen and continue processing",
        "Call `System.exit(0)` immediately"
    ],
    1,
    "Throwing a custom business exception (`InsufficientFundsException`) cleanly communicates the failure reason to the caller with structured context, preventing corrupted state.",
    "Custom Business Exception Design", "scenario", "easy",
    "Designed custom domain exception for business rule violations.",
    "Use custom domain exceptions (e.g. `InsufficientFundsException`) to signal business rule violations."
)

add_q(ch9, "A web application reads a JSON configuration file `config.json` on startup. If the file is missing, the application cannot function and must abort startup with a clear message. Why should `FileNotFoundException` be caught and handled at the application bootstrap entry point?",
    [
        "To delete the database",
        "To log a descriptive, user-friendly error message informing the administrator of the missing configuration file, rather than spewing an unhandled raw stack trace crash",
        "To allow the app to run without configuration",
        "Because Java requires all files to be optional"
    ],
    1,
    "Catching checked I/O exceptions at application boundaries allows logging clear, actionable diagnostic guidance for operators rather than crashing abruptly with raw stack traces.",
    "Graceful Bootstrap Failure Handling", "scenario", "easy",
    "Handled startup configuration exceptions with clear operator diagnostics.",
    "Catch startup exceptions to display actionable diagnostic messages to administrators."
)

add_q(ch9, "A REST API client sends payment requests over the internet. Network timeouts (`SocketTimeoutException`) occur intermittently due to mobile connectivity drops. What is the resilient exception handling pattern?",
    [
        "Crash the mobile app on the first timeout",
        "Retry pattern: catch the timeout exception in a loop with exponential backoff (e.g. up to 3 retries), only failing if all retries are exhausted",
        "Ignore the error and assume payment succeeded",
        "Throw an OutOfMemoryError"
    ],
    1,
    "Transient network exceptions should be handled using retry loops with exponential backoff before surfacing errors to the user.",
    "Transient Network Retry Pattern", "scenario", "medium",
    "Applied exponential backoff retry pattern for transient I/O exceptions.",
    "Catch transient network exceptions and retry with exponential backoff before aborting."
)

add_q(ch9, "A banking service executes a multi-step fund transfer (deducting from Account A, crediting Account B). If crediting Account B throws an unexpected exception, how does exception handling guarantee transactional integrity?",
    [
        "Ignore the exception and let Account B stay empty",
        "Catch the exception, execute a compensating transaction (rollback) to refund Account A, and rethrow a `TransferFailedException`",
        "Restart the JVM",
        "Call System.gc()"
    ],
    1,
    "When a multi-step operation fails midway, catching the exception allows rolling back previous operations to maintain database consistency before propagating the error.",
    "Transactional Compensating Rollback Pattern", "scenario", "medium",
    "Implemented compensating rollback in multi-step business transactions.",
    "Catch exceptions midway through multi-step transactions to execute rollback actions before rethrowing."
)

add_q(ch9, "A microservice catches a low-level `java.sql.SQLException: Connection timeout` when querying the user database. How should this exception be translated before passing it to the UI presentation layer?",
    [
        "Expose raw SQL query text and database port to the user in a popup",
        "Exception Translation (Chaining): wrap the low-level technical exception into a domain exception: `throw new ServiceUnavailableException(\"User service temporarily unavailable\", sqlEx);`",
        "Ignore the exception and return null",
        "Throw an Error"
    ],
    1,
    "Exception translation shields calling layers from low-level database details, preventing information leakage while preserving the underlying cause for debugging.",
    "Exception Translation & Information Hiding", "scenario", "medium",
    "Applied exception translation to prevent leaking low-level infrastructure details.",
    "Translate low-level technical exceptions into high-level domain exceptions using exception chaining."
)

add_q(ch9, "A student is writing an input validation function for user age. If the user enters a negative number or a value over 150, what built-in Java exception should be thrown?",
    [
        "`NullPointerException`",
        "`java.lang.IllegalArgumentException`",
        "`ArithmeticException`",
        "`ClassNotFoundException`"
    ],
    1,
    "`IllegalArgumentException` is the standard Java exception thrown to indicate that a method has been passed an illegal or inappropriate argument.",
    "IllegalArgumentException Validation Idiom", "scenario", "easy",
    "Selected IllegalArgumentException for invalid method parameters.",
    "Throw `IllegalArgumentException` when method arguments fail domain validation rules."
)

add_q(ch9, "A video game inventory system has a method `equipItem(int slotIndex)`. If the player provides an index that exceeds the inventory array size, what exception should be thrown?",
    [
        "`java.lang.IndexOutOfBoundsException`",
        "`FileNotFoundException`",
        "`ArithmeticException`",
        "`ClassCastException`"
    ],
    0,
    "`IndexOutOfBoundsException` signals that an index is out of range, making it the idiomatic choice for collection and array index violations.",
    "IndexOutOfBoundsException for Bounded State", "scenario", "easy",
    "Selected IndexOutOfBoundsException for out-of-range slot indices.",
    "Throw `IndexOutOfBoundsException` when requested indices violate collection capacity."
)

add_q(ch9, "A user attempts to call `.start()` on a `Thread` or media player that has already been stopped and disposed of. What standard Java runtime exception represents calling a method when the object is in an invalid state?",
    [
        "`IllegalArgumentException`",
        "`java.lang.IllegalStateException`",
        "`NullPointerException`",
        "`SecurityException`"
    ],
    1,
    "`IllegalStateException` signals that a method was invoked at an inappropriate time, or that the object environment is in an improper state for the requested operation.",
    "IllegalStateException for State Invariants", "scenario", "easy",
    "Selected IllegalStateException for invalid object lifecycle states.",
    "Throw `IllegalStateException` when an object is in an inappropriate lifecycle state for the requested operation."
)

add_q(ch9, "A medical patient database encrypts records on disk. When decrypting a patient record, a checksum mismatch indicates the file has been tampered with. Why should the decryptor throw an exception rather than returning partially corrupted data?",
    [
        "Exceptions make the code run faster",
        "Fail-Fast Principle: returning corrupted medical data could lead to fatal clinical misdiagnoses; failing fast immediately alerts clinicians to the data integrity breach",
        "Medical records cannot have checksums",
        "Java requires all files to be deleted"
    ],
    1,
    "The Fail-Fast principle dictates that systems should immediately abort on corrupted data to prevent catastrophic downstream consequences.",
    "Fail-Fast Security Principle", "scenario", "hard",
    "Applied the Fail-Fast principle to protect critical data integrity.",
    "Adhere to the Fail-Fast principle: throw exceptions immediately upon detecting corrupted state."
)

add_q(ch9, "A batch import worker reads a CSV file with 10,000 rows. A developer uses `try { ... } catch (Exception e) {}` inside the loop with an empty catch block. What consequence will this have in production?",
    [
        "The file import will be twice as fast",
        "Silent data loss: defective rows with missing fields will fail silently without inserting into the database, with zero log records to alert the operations team",
        "The computer will run out of memory",
        "The CSV will be deleted automatically"
    ],
    1,
    "Swallowing exceptions creates silent failures where lost records go completely undetected, causing serious data discrepancies in production.",
    "Consequences of Swallowed Exceptions in Production", "scenario", "medium",
    "Recognized the severe business impact of swallowing exceptions in batch processing.",
    "Never swallow exceptions; silent failures cause undetected data corruption and loss."
)

add_q(ch9, "A developer writes a custom `UserNotFoundException`. Should it extend `Exception` (checked) or `RuntimeException` (unchecked) if the user ID comes from an external URL parameter where missing users are expected normal occurrences?",
    [
        "Extend `Throwable` directly",
        "Extend `RuntimeException` (or return `Optional<User>`): checked exceptions should not be used for expected, non-fatal flow control conditions",
        "Extend `Error`",
        "Exceptions cannot be used for users"
    ],
    1,
    "Modern Java best practices discourage using checked exceptions for routine control flow. Use `RuntimeException` or `Optional<User>` instead.",
    "Checked vs Unchecked Design Choice", "scenario", "medium",
    "Understands modern Java preferences for RuntimeException and Optional over checked exceptions for flow control.",
    "Use unchecked exceptions or `Optional<T>` for expected business alternatives instead of checked exceptions."
)

add_q(ch9, "A banking login system locks a user account after 3 consecutive failed password attempts. What custom exception cleanly models this scenario for the authentication controller?",
    [
        "`AccountLockedException extends AuthenticationException`",
        "`NullPointerException`",
        "`ArithmeticException`",
        "`ArrayIndexOutOfBoundsException`"
    ],
    0,
    "Creating a specific exception hierarchy (`AccountLockedException extends AuthenticationException`) allows the UI controller to display a dedicated 'Account Locked' screen.",
    "Custom Authentication Exception Hierarchy", "scenario", "easy",
    "Designed specific domain exception hierarchy for authentication flows.",
    "Model specific failure modes with dedicated domain exceptions (e.g. `AccountLockedException`)."
)

add_q(ch9, "A web server handles thousands of concurrent HTTP requests. If one request thread throws an unhandled `RuntimeException`, does it crash the entire web server?",
    [
        "Yes, any unhandled exception crashes the entire operating system",
        "No: Java threads are independent execution units; an uncaught exception terminates only that individual request thread, while the server's thread pool continues serving other users",
        "All memory is wiped",
        "The server enters read-only mode"
    ],
    1,
    "Threads execute independently. An unhandled exception terminates only the failing thread; the application server continues operating.",
    "Thread Isolation Under Failure", "scenario", "medium",
    "Understands thread-level exception isolation in multi-threaded servers.",
    "Unhandled exceptions terminate only the failing thread; sibling threads continue running."
)

add_q(ch9, "An IoT smart thermostat connects to Wi-Fi. In the network connection loop, why should resources like sockets be closed in a try-with-resources statement rather than an unmanaged loop?",
    [
        "Sockets close automatically after 1 second",
        "If a connection timeout or network glitch throws an exception, unclosed sockets leak OS file descriptors and socket handles, eventually exhausting system resources",
        "Wi-Fi networks require try-with-resources",
        "Sockets cannot throw exceptions"
    ],
    1,
    "Leaking socket descriptors starves the operating system of network ports, eventually causing socket exhaustion (`Too many open files`). Try-with-resources guarantees closure.",
    "Socket Descriptor Leak Prevention", "scenario", "easy",
    "Prevented operating system socket descriptor exhaustion with try-with-resources.",
    "Always manage network sockets and file streams with try-with-resources to prevent descriptor leaks."
)

add_q(ch9, "A developer is implementing a database repository. When a query fails, they catch `SQLException` and log it. What is the recommended way to log the exception object using modern logging frameworks (SLF4J / Logback)?",
    [
        "`logger.error(e.getMessage());` (Loses full stack trace!)",
        "`logger.error(\"Database query failed for user {}\", userId, e);` (Logs context and passes exception object to capture full stack trace)",
        "`System.out.println(\"Error\");`",
        "`e.toString();`"
    ],
    1,
    "Passing the exception object `e` as the final argument in logger calls captures the full stack trace, root causes, and line numbers in server logs.",
    "Modern Logging Best Practice with Stack Traces", "scenario", "medium",
    "Applied SLF4J logging best practice to preserve full stack trace context.",
    "Pass the exception object as the last argument in logger calls to preserve full stack trace diagnostics."
)

add_q(ch9, "A high-speed trading system validates stock trade orders. A method checks: `quantity > 0`, `ticker != null`, `price > 0.0`. If any check fails, what exception should be thrown?",
    [
        "`IllegalArgumentException` with a specific descriptive error message",
        "`NullPointerException` for all three",
        "`ArithmeticException`",
        "`ClassNotFoundException`"
    ],
    0,
    "`IllegalArgumentException` with a precise message (`\"Order quantity must be positive: \" + quantity`) makes debugging instantaneous for API consumers.",
    "Precondition Enforcement with Descriptive Messages", "scenario", "easy",
    "Formulated informative IllegalArgumentException messages for precondition violations.",
    "Include the invalid argument value in the `IllegalArgumentException` message for rapid diagnosis."
)

add_q(ch9, "A file parser parses a configuration line `port = 8080`. When splitting by `=`, if the line is missing the `=` sign, `parts[1]` throws `ArrayIndexOutOfBoundsException`. How should the parser validate the split array?",
    [
        "`if (parts.length < 2) throw new InvalidConfigurationException(\"Missing '=' in config line: \" + line);`",
        "Ignore the line silently",
        "Add a 0 to parts",
        "Restart the parser"
    ],
    0,
    "Validating array length before accessing index 1 allows throwing a meaningful domain exception (`InvalidConfigurationException`) rather than a cryptic array bounds error.",
    "Defensive Array Length Guard in Parsing", "scenario", "easy",
    "Guarded array indexing to throw informative domain parsing exceptions.",
    "Check array length before indexing to provide descriptive parsing exceptions."
)

add_q(ch9,
    "A cloud microservice calls a payment API. If the API returns HTTP 503 (Service Unavailable), the microservice throws `PaymentGatewayUnavailableException`. Should this exception be caught by the service layer or allowed to propagate to the global exception handler?",
    [
        "Swallow it and return a fake success receipt",
        "Allow it to propagate to a Global Exception Handler (e.g. `@ControllerAdvice` in Spring Boot) to map it into an HTTP 503 response and return standardized JSON error details to the client",
        "Crash the whole application",
        "Print to console only"
    ],
    1,
    "Centralized Global Exception Handlers intercept unhandled domain exceptions at the perimeter, translating them into standardized HTTP status codes and JSON error responses.",
    "Global Exception Handling Architecture", "scenario", "medium",
    "Understands centralized global exception handling architecture in web services.",
    "Propagate unhandled domain exceptions to global handlers for centralized HTTP response mapping."
)

add_q(ch9,
    "A game developer creates a level loader. If a required texture file `player.png` is missing from the game directory, the loader catches `FileNotFoundException`. What should the loader do?",
    [
        "Crash the computer",
        "Substitute a default 'missing texture' checkerboard image, log a warning, and allow the level to continue loading",
        "Delete the game save file",
        "Infinite loop"
    ],
    1,
    "Graceful degradation: catching resource missing exceptions allows substituting fallback assets (e.g. placeholder textures) so games and apps remain playable.",
    "Graceful Degradation Fallback Pattern", "scenario", "easy",
    "Applied graceful degradation fallback on missing asset exceptions.",
    "Implement fallback defaults upon catching non-critical missing resource exceptions."
)

add_q(ch9,
    "A junior programmer writes code that uses exceptions for normal loop control:\n```java\ntry {\n    while (true) {\n        list.get(i++);\n    }\n} catch (IndexOutOfBoundsException e) {}\n```\nWhy is this considered an atrocious anti-pattern?",
    [
        "Because it compiles slowly",
        "Exceptions are designed for exceptional, erroneous conditions; constructing and unwinding stack frames is orders of magnitude slower than a simple `i < list.size()` condition check, and it obscures real bugs",
        "IndexOutOfBoundsException is checked",
        "While loops cannot use try"
    ],
    1,
    "Using exceptions for flow control is extremely slow (due to stack trace capture overhead), unreadable, and masks legitimate bugs.",
    "Exceptions for Flow Control Anti-Pattern", "scenario", "medium",
    "Understands the performance and design cost of using exceptions for normal loop flow control.",
    "Never use exceptions for normal control flow; use standard loop conditions."
)

add_q(ch9,
    "A payment processing class connects to an external gateway. To ensure that sensitive credit card numbers are NOT exposed in logs if an exception occurs, what practice should be followed in custom exception constructors?",
    [
        "Store the raw card number in the exception message",
        "Sanitize and mask sensitive data (e.g. `\"Card ending in \" + last4`) before constructing the exception message, ensuring raw card numbers never enter stack traces or logs",
        "Never throw exceptions",
        "Convert credit card to int"
    ],
    1,
    "Exception messages frequently get written to logs, APM tools, and consoles. Masking PII (Personally Identifiable Information) in exception messages prevents data leaks and compliance violations.",
    "PII Sanitization in Exception Messages", "scenario", "hard",
    "Applied PII data protection and masking in exception messaging.",
    "Sanitize sensitive data (passwords, card numbers) before including them in exception messages."
)

add_q(ch9,
    "A multi-threaded analytics pipeline uses worker threads to process chunks. If a worker thread throws an uncaught exception, how can an application install a safety net to log it before the thread dies?",
    [
        "`Thread.setDefaultUncaughtExceptionHandler((thread, throwable) -> logger.error(...))`",
        "Wrap the whole operating system in try-catch",
        "Make all threads daemon",
        "Check thread status in a while loop"
    ],
    0,
    "`Thread.setDefaultUncaughtExceptionHandler()` establishes a global JVM callback for any thread that encounters an unhandled exception, ensuring diagnostics are captured before death.",
    "UncaughtExceptionHandler Global Safety Net", "scenario", "medium",
    "Used UncaughtExceptionHandler as a safety net for multi-threaded systems.",
    "Set an `UncaughtExceptionHandler` to log unexpected exceptions on worker threads before termination."
)

add_q(ch9,
    "A database transaction manager executes: `connection.setAutoCommit(false);`. If an exception occurs during the SQL queries, where should `connection.rollback()` be placed?",
    [
        "In the catch block: `catch (SQLException e) { connection.rollback(); throw e; }`",
        "Inside the try block after the queries",
        "In a static initialization block",
        "In the main method"
    ],
    0,
    "The catch block executes when an error occurs, making it the appropriate place to roll back uncommitted transactions before propagating the failure.",
    "Database Transaction Rollback in Catch", "scenario", "easy",
    "Placed database rollback logic inside the catch block.",
    "Execute transaction rollback in the catch block before propagating errors."
)

add_q(ch9,
    "An audio recording studio app records microphone input to a WAV file. If the user unplugs the microphone midway, a `HardwareDisconnectedException` is thrown. How does try-with-resources ensure the file header is written cleanly before closing?",
    [
        "It doesn't close the file",
        "The audio writer's `close()` method is called automatically, which finalizes the WAV file header (writing total sample frames recorded so far) before closing the file descriptor",
        "It deletes the recording",
        "It restarts the computer"
    ],
    1,
    "Automatic invocation of `close()` via try-with-resources gives encoders the opportunity to flush headers and finalize partial data safely before exiting.",
    "Clean File Finalization via AutoCloseable", "scenario", "medium",
    "Understands that AutoCloseable.close() executes file header finalization during unexpected aborts.",
    "Try-with-resources guarantees `close()` execution, allowing file writers to finalize headers safely."
)

add_q(ch9,
    "A system architect audits code quality. A developer wrote a method with `public void load() throws Exception`. Why does declaring generic `throws Exception` degrade code quality?",
    [
        "Java limits throws to 10 characters",
        "It hides the specific failure modes from callers, forcing callers to either catch generic `Exception` (which catches runtime exceptions accidentally) or re-declare generic `throws Exception` (violating precise contract design)",
        "Exception cannot be declared in throws",
        "It makes methods abstract"
    ],
    1,
    "Declaring generic `throws Exception` erodes the precision of method contracts. Methods should declare specific exceptions (`throws IOException, SQLException`) so callers can handle each appropriately.",
    "Specific Exception Declaration vs Generic Throws", "scenario", "medium",
    "Understands the importance of specific exception declarations over generic `throws Exception`.",
    "Declare specific checked exceptions (`throws IOException`) rather than generic `throws Exception`."
)

with open("scratch/ch8.json", "w", encoding="utf-8") as f:
    json.dump(ch8, f, indent=2, ensure_ascii=False)

with open("scratch/ch9.json", "w", encoding="utf-8") as f:
    json.dump(ch9, f, indent=2, ensure_ascii=False)

print(f"Generated {len(ch8)} questions for Chapter 8 and {len(ch9)} questions for Chapter 9!")
