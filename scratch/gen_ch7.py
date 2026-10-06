# -*- coding: utf-8 -*-
"""
Generate 100 questions for Chapter 7: Inheritance
(extends keyword, single inheritance, super keyword, super() constructors, method overriding vs overloading,
@Override annotation, protected access modifier, Object class methods: toString/equals/hashCode, final classes and methods)
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
    "Does Java support multiple inheritance of classes (e.g. `class C extends A, B`)?",
    [
        "Yes, Java supports full multiple class inheritance",
        "No, Java supports only single inheritance for classes (a class can extend at most one direct superclass)",
        "Yes, but only if all classes are abstract",
        "Only in Java 17 and above"
    ],
    1,
    "To avoid complexity and the 'Diamond Problem' of ambiguous inheritance, Java explicitly restricts classes to single inheritance. Multiple type inheritance is achieved via interfaces.",
    "Single Inheritance Architecture", "theory", "easy",
    "Knows that Java supports only single class inheritance.",
    "Java permits single class inheritance only; a class can extend at most one superclass."
)

add_q(
    "What is the ultimate root class of the entire class hierarchy in Java?",
    ["`java.lang.Class`", "`java.lang.Object`", "`java.lang.System`", "`java.lang.Root`"],
    1,
    "Every class in Java directly or indirectly inherits from `java.lang.Object`. If no superclass is specified, `extends Object` is implicitly added by the compiler.",
    "Object Class Hierarchy", "theory", "easy",
    "Identifies java.lang.Object as the root of the Java class hierarchy.",
    "Every class in Java implicitly or explicitly inherits from `java.lang.Object`."
)

add_q(
    "What is the role of `super()` in a subclass constructor?",
    [
        "It imports methods from other packages",
        "It invokes the constructor of the direct superclass to initialize inherited state",
        "It destroys the superclass instance",
        "It restarts the current constructor"
    ],
    1,
    "`super(...)` calls the constructor of the immediate superclass. Subclass object initialization must begin by initializing its inherited superclass state.",
    "Super Constructor Call", "theory", "easy",
    "Understands the role of `super()` in subclass construction.",
    "`super()` invokes the parent class constructor to initialize inherited fields."
)

add_q(
    "What rule governs the placement of `super()` or `this()` inside a constructor body?",
    [
        "It can be placed anywhere in the constructor",
        "It must strictly be the very first statement in the constructor body",
        "It must be the last statement",
        "It must be inside an if statement"
    ],
    1,
    "Java requires that a call to `super(...)` or `this(...)` must be the first line of executable code in a constructor.",
    "First Statement Rule for super()", "theory", "easy",
    "Knows the first statement rule for constructor delegation.",
    "`super()` or `this()` must be the very first statement in a constructor."
)

add_q(
    "What occurs if a subclass constructor does NOT explicitly call `super(...)` or `this(...)` on its first line?",
    [
        "Compilation error: constructor must call super",
        "The compiler automatically inserts an implicit no-argument `super();` call as the first statement",
        "The superclass is never initialized",
        "A runtime NullPointerException is thrown"
    ],
    1,
    "If neither `super(...)` nor `this(...)` is written, the compiler automatically injects `super();` at the start of the constructor to invoke the superclass's no-arg constructor.",
    "Implicit super() Insertion", "theory", "medium",
    "Understands automatic compiler insertion of `super();`.",
    "The compiler automatically inserts `super();` if neither `super` nor `this` is explicitly called."
)

add_q(
    "What is method overriding in Java?",
    [
        "Defining multiple methods with the same name and different parameters in the same class",
        "A subclass providing a specific implementation of a method that is already defined in its superclass, having the identical method signature and compatible return type",
        "Calling a private method from outside its class",
        "Hiding a static variable"
    ],
    1,
    "Method overriding allows a subclass to provide its own specialized behavior for a method inherited from a superclass, using the exact same signature.",
    "Method Overriding Definition", "theory", "easy",
    "Distinguishes method overriding from overloading.",
    "Overriding provides a specialized implementation of an inherited method with identical signature."
)

add_q(
    "Can a subclass override a method and make its access modifier MORE restrictive (e.g. overriding `public` with `protected`)?",
    [
        "Yes, access modifiers can be changed freely",
        "No, an overriding method cannot reduce the visibility of the inherited method (it can only maintain or broaden access)",
        "Yes, if the method is void",
        "Only if marked with @Override"
    ],
    1,
    "The Liskov Substitution Principle mandates that an overriding method cannot reduce visibility (e.g. `public` cannot become `protected` or `private`). Doing so causes: 'attempting to assign weaker access privileges'.",
    "Access Privilege in Overriding", "theory", "medium",
    "Understands visibility constraints in method overriding.",
    "Overriding methods cannot reduce access visibility; they can only maintain or expand it."
)

add_q(
    "What is the purpose of the `@Override` annotation in Java?",
    [
        "It forces the method to run faster",
        "It informs the compiler to verify that the annotated method actually overrides a method in a superclass or interface, raising a compile-time error if no matching method is found",
        "It makes the method public automatically",
        "It prevents subclasses from further overriding the method"
    ],
    1,
    "`@Override` acts as a compiler check. If a typo exists in the method name or parameter types, the compiler flags an error rather than silently treating it as an overload.",
    "@Override Annotation Purpose", "theory", "easy",
    "Knows the compiler validation role of @Override.",
    "`@Override` instructs the compiler to verify that the method correctly overrides a superclass method."
)

add_q(
    "Can a `static` method in a superclass be overridden in a subclass?",
    [
        "Yes, like any other method",
        "No, static methods cannot be overridden; if a subclass declares a static method with the same signature, it 'hides' the superclass method (method hiding, resolved at compile-time)",
        "Yes, if marked abstract",
        "Only if called through `super`"
    ],
    1,
    "Static methods belong to the class and are resolved at compile time based on declared reference type. They cannot participate in dynamic polymorphism (overriding); they can only be hidden.",
    "Static Method Hiding vs Overriding", "theory", "medium",
    "Distinguishes method hiding from polymorphic method overriding.",
    "Static methods cannot be overridden; redeclaring them in a subclass is method hiding."
)

add_q(
    "Can a `final` method be overridden by a subclass?",
    [
        "Yes, if the subclass is public",
        "No, declaring a method `final` strictly prohibits subclasses from overriding it",
        "Yes, by using the super keyword",
        "Only in abstract classes"
    ],
    1,
    "The `final` modifier on a method seals its implementation, preventing subclasses from overriding it to maintain consistency or security.",
    "Final Method Immutability", "theory", "easy",
    "Understands that final methods cannot be overridden.",
    "A `final` method cannot be overridden by any subclass."
)

add_q(
    "What happens when a class is declared `final` (e.g. `public final class MathService`)?",
    [
        "It cannot have any methods",
        "The class cannot be extended (subclassed) by any other class",
        "All its instances are stored in read-only memory",
        "It can only have static members"
    ],
    1,
    "Declaring a class `final` prevents inheritance entirely. For example, `java.lang.String` is `final` to ensure its security and immutability contracts cannot be subverted by subclasses.",
    "Final Class Sealing", "theory", "easy",
    "Recognized that final classes cannot be extended.",
    "A `final` class cannot be subclassed or inherited."
)

add_q(
    "What accessibility does the `protected` modifier grant to a member?",
    [
        "Accessible only within the declaring class",
        "Accessible within the same package, and by subclasses in any package",
        "Accessible everywhere globally",
        "Accessible only by interfaces"
    ],
    1,
    "`protected` grants access to all classes in the same package (like default access) PLUS subclasses located in different packages.",
    "Protected Access Scope", "theory", "easy",
    "Understands protected access across packages and inheritance.",
    "`protected` members are accessible within the same package and by subclasses everywhere."
)

add_q(
    "Are `private` members of a superclass inherited by its subclasses?",
    [
        "Yes, they are directly accessible using their names",
        "They are physically part of the subclass object state in heap memory, but are NOT directly accessible by name in the subclass; they must be accessed via inherited public/protected methods (getters/setters)",
        "No, private fields are completely stripped from subclass instances",
        "Private fields become public in subclasses"
    ],
    1,
    "Subclass objects contain the private fields of their superclass in memory, but encapsulation prevents direct access by name. They are accessed via superclass accessors.",
    "Private Member Inheritance & Accessibility", "theory", "medium",
    "Distinguishes physical object memory layout from syntactic access visibility.",
    "Private superclass fields exist in subclass memory but cannot be accessed directly by name."
)

add_q(
    "What is the purpose of the `super` keyword when used as a reference qualifier (`super.method()`)?",
    [
        "To invoke an overridden superclass method or access a hidden superclass field from within a subclass",
        "To terminate the subclass",
        "To cast an object to Object",
        "To bypass security checks"
    ],
    1,
    "`super.methodName()` allows a subclass to explicitly call the superclass's version of a method that has been overridden in the subclass.",
    "Super Reference Qualifier", "theory", "easy",
    "Understands accessing overridden superclass members via `super.`.",
    "Use `super.method()` to invoke an overridden superclass implementation."
)

add_q(
    "What is a covariant return type in method overriding (supported since Java 5)?",
    [
        "Returning void instead of a type",
        "An overriding method declaring a return type that is a SUBTYPE (subclass) of the return type declared in the superclass method",
        "Returning multiple values",
        "Returning a primitive instead of an object"
    ],
    1,
    "Covariant returns allow an overriding method to narrow its return type to a subclass of the superclass method's return type (e.g. `Animal.make()` returns `Animal`, while `Dog.make()` returns `Dog`).",
    "Covariant Return Types", "theory", "hard",
    "Mastery of covariant return types in method overriding.",
    "An overriding method can return a subtype of the superclass method's return type."
)

add_q(
    "Does constructor inheritance exist in Java (does a subclass automatically inherit the constructors of its superclass)?",
    [
        "Yes, all constructors are automatically inherited",
        "No, constructors are NEVER inherited in Java; a subclass defines its own constructors, which delegate to superclass constructors via `super()`",
        "Only no-arg constructors are inherited",
        "Only public constructors are inherited"
    ],
    1,
    "Constructors are not members of a class and are never inherited. Subclasses must declare their own constructors, which invoke superclass constructors explicitly or implicitly.",
    "Constructors Are Not Inherited", "theory", "medium",
    "Knows that constructors are not inherited by subclasses.",
    "Constructors are never inherited; subclasses define their own constructors."
)

add_q(
    "What is the difference between method overloading and method overriding?",
    [
        "Overloading is in different classes; overriding is in the same class",
        "Overloading has the same method name with DIFFERENT parameter lists (compile-time polymorphism); overriding has identical signature and compatible return type in a subclass (runtime polymorphism)",
        "Overriding requires static; overloading requires final",
        "They are identical terms in Java"
    ],
    1,
    "Overloading: same name, different parameters, resolved at compile-time. Overriding: same name and same parameters in a subclass, resolved at runtime dynamically.",
    "Overloading vs Overriding Distinction", "theory", "easy",
    "Clearly distinguishes compile-time overloading from runtime overriding.",
    "Overloading has different parameters; overriding has identical signatures in a subclass."
)

add_q(
    "Which three methods of `java.lang.Object` are most frequently overridden in domain classes?",
    [
        "`start()`, `run()`, `stop()`",
        "`toString()`, `equals(Object obj)`, and `hashCode()`",
        "`clone()`, `finalize()`, and `notify()`",
        "`wait()`, `notifyAll()`, and `getClass()`"
    ],
    1,
    "`toString()` provides human-readable text, `equals(Object)` defines logical value equality, and `hashCode()` maintains the contract required for hash-based collections (`HashMap`, `HashSet`).",
    "Core Object Methods", "theory", "easy",
    "Knows core Object methods: toString, equals, and hashCode.",
    "Domain entities typically override `toString()`, `equals()`, and `hashCode()`."
)

add_q(
    "What is the contract between `equals()` and `hashCode()` in Java?",
    [
        "If two objects have the same hashCode, they must be equal",
        "If two objects are equal according to `equals(Object)`, they MUST produce the exact same integer `hashCode()` value",
        "They are completely independent and have no contract",
        "hashCode must return a negative number"
    ],
    1,
    "The fundamental Java contract states: if `a.equals(b)` is true, then `a.hashCode() == b.hashCode()` must be true. Violating this breaks hash-based collections (`HashMap`, `HashSet`).",
    "equals and hashCode Contract", "theory", "hard",
    "Deep understanding of the equals-hashCode contract in Java.",
    "Equal objects according to equals() MUST return identical hash codes."
)

add_q(
    "What is field hiding (variable shadowing in inheritance) in Java?",
    [
        "Making a field private",
        "When a subclass declares a field with the same name as an inherited superclass field; the subclass field hides the superclass field rather than overriding it",
        "Deleting a field from memory",
        "Encrypting a field"
    ],
    1,
    "Fields in Java cannot be overridden; they are resolved at compile-time based on the declared reference type. A subclass field simply hides the superclass field of the same name.",
    "Field Hiding Mechanics", "theory", "medium",
    "Understands that fields cannot be overridden polymorphically, only hidden.",
    "Fields are not polymorphic; a subclass field hides the superclass field."
)

add_q(
    "Can a constructor in a subclass invoke BOTH `this()` and `super()` directly in its body?",
    [
        "Yes, calling both is recommended",
        "No, both `this()` and `super()` are required to be the very first statement, making it syntactically impossible to have both in the same constructor",
        "Yes, if separated by a comma",
        "Only if one is parameterless"
    ],
    1,
    "Because each requires being the first statement in the constructor, a single constructor cannot contain both `this()` and `super()`. However, the chained `this()` constructor will eventually call `super()`.",
    "Mutual Exclusion of this() and super()", "theory", "medium",
    "Understands mutual exclusivity of `this()` and `super()` in a single constructor.",
    "A constructor cannot call both `this()` and `super()` because each must be the first line."
)

add_q(
    "What is the default implementation of `equals(Object obj)` inherited from `java.lang.Object`?",
    [
        "It compares all primitive fields for equality",
        "It evaluates reference identity using `this == obj` (returns true only if both references point to the exact same memory address)",
        "It compares object hashcodes",
        "It throws an UnsupportedOperationException"
    ],
    1,
    "In `java.lang.Object`, `equals()` is simply implemented as `return (this == obj);`. Unless overridden, it tests reference identity rather than logical content equality.",
    "Default Object.equals Implementation", "theory", "easy",
    "Knows that default Object.equals tests reference identity `==`.",
    "Default `equals()` tests reference identity (`this == obj`), not field contents."
)

add_q(
    "What is the 'is-a' relationship in Object-Oriented Programming?",
    [
        "Association between classes (e.g. Car has-a Engine)",
        "Inheritance: a subclass is a specialized type of its superclass (e.g. Dog is-a Animal)",
        "Aggregating multiple primitive variables",
        "Instantiating an object with new"
    ],
    1,
    "Inheritance models an 'is-a' relationship (a `Student` is a `Person`). Composition models a 'has-a' relationship (a `Car` has an `Engine`).",
    "Is-A vs Has-A Relationships", "theory", "easy",
    "Distinguishes inheritance 'is-a' from composition 'has-a'.",
    "Inheritance represents an 'is-a' relationship; composition represents 'has-a'."
)

add_q(
    "What happens when you declare a method `private` in a superclass and declare a method with the exact same signature in a subclass?",
    [
        "The subclass method overrides the superclass method",
        "The subclass method has no relationship to the superclass method; private methods are invisible to subclasses and cannot be overridden",
        "Compilation error: cannot reuse private method name",
        "Runtime ClassCastException"
    ],
    1,
    "Because `private` methods are invisible outside their class, the subclass method is treated as an entirely new independent method, not an override.",
    "Private Methods Cannot Be Overridden", "theory", "medium",
    "Understands that private methods cannot be overridden.",
    "Private methods are not visible to subclasses and cannot be overridden."
)

add_q(
    "Can an overriding method throw checked exceptions that are NOT declared by the superclass method?",
    [
        "Yes, it can throw any checked exception",
        "No, an overriding method can only declare the same checked exceptions, a subset of them, or subclasses of them (it cannot throw broader or new checked exceptions)",
        "Yes, if marked with @Override",
        "Only RuntimeExceptions are restricted"
    ],
    1,
    "To preserve polymorphic substitutability, an overriding method cannot throw new or broader checked exceptions than those declared by the superclass method.",
    "Exception Constraints in Overriding", "theory", "hard",
    "Understands exception specification restrictions in method overriding.",
    "Overriding methods cannot throw new or broader checked exceptions."
)

# --- Ch 7: 2. Error Identification (25 Qs) ---
add_q(
    "Why does the following subclass definition fail to compile?\n```java\nclass Parent {\n    public Parent(int x) {}\n}\nclass Child extends Parent {\n    public Child() {}\n}\n```",
    [
        "Child cannot extend Parent",
        "The compiler inserts an implicit `super();` into `Child()`, but `Parent` has no no-argument constructor",
        "Child constructor must have parameter x",
        "Parent cannot have parameters"
    ],
    1,
    "`Child()` attempts to invoke the default `super()`. Because `Parent` defined `Parent(int x)`, no default constructor exists in `Parent`, causing a compile error: 'constructor Parent in class Parent cannot be applied to given types'.",
    "Implicit super() Missing Constructor Error", "error", "easy",
    "Caught implicit super() failure when superclass lacks no-arg constructor.",
    "Explicitly invoke `super(x)` when the parent class does not provide a no-arg constructor."
)

add_q(
    "Identify the compilation error in this overriding attempt:\n```java\nclass Animal {\n    public void speak() {}\n}\nclass Dog extends Animal {\n    @Override\n    protected void speak() {}\n}\n```",
    [
        "Dog must be public",
        "Cannot reduce the visibility of the inherited method from `Animal`: overriding method cannot change `public` to `protected`",
        "speak cannot be overridden",
        "@Override is deprecated"
    ],
    1,
    "An overriding method cannot reduce access privileges. Overriding a `public` method with `protected` causes: 'attempting to assign weaker access privileges; was public'.",
    "Weaker Access Privilege Error", "error", "easy",
    "Caught illegal reduction of access modifier in overriding method.",
    "Overriding methods cannot assign weaker access privileges (e.g. public to protected)."
)

add_q(
    "Why does this code fail to compile?\n```java\nfinal class Vehicle {}\nclass Car extends Vehicle {}\n```",
    [
        "Car must have a constructor",
        "Cannot inherit from final `Vehicle`",
        "Vehicle must be public",
        "Car must implement Vehicle"
    ],
    1,
    "A `final` class cannot be extended. Compiling this produces: 'cannot inherit from final Vehicle'.",
    "Inheriting from Final Class Error", "error", "easy",
    "Recognized compiler rejection of extending a final class.",
    "Classes declared `final` cannot be extended."
)

add_q(
    "Identify the error flagged by the `@Override` annotation here:\n```java\nclass Base {\n    public void calculate(int x) {}\n}\nclass Derived extends Base {\n    @Override\n    public void calculate(double x) {}\n}\n```",
    [
        "Derived cannot have calculate method",
        "Method does not override or implement a method from a supertype: parameter types differ (`double` vs `int`), meaning this is an overload, not an override",
        "int cannot be converted to double",
        "calculate must return void"
    ],
    1,
    "`Derived` changed the parameter from `int` to `double`. This overloads the method instead of overriding it. Because `@Override` was specified, the compiler rejects the mismatch.",
    "Overload Flagged as Overriding Failure", "error", "medium",
    "Spotted parameter mismatch flagged by @Override annotation.",
    "`@Override` catches accidental overloads where parameter types do not match the superclass."
)

add_q(
    "Why does this code cause a compilation error?\n```java\nclass Parent {\n    public final void print() {}\n}\nclass Child extends Parent {\n    public void print() {}\n}\n```",
    [
        "print cannot be void",
        "print() in Child cannot override print() in Parent because the overridden method is `final`",
        "Child must be final",
        "Parent must be abstract"
    ],
    1,
    "A `final` method in a superclass cannot be overridden by any subclass.",
    "Overriding Final Method Error", "error", "easy",
    "Spotted attempt to override a final method.",
    "`final` methods cannot be overridden by subclasses."
)

add_q(
    "Identify the compilation issue in this constructor:\n```java\nclass Shape {\n    public Shape(String color) {}\n}\nclass Circle extends Shape {\n    public Circle(String color) {\n        System.out.println(\"Creating circle\");\n        super(color);\n    }\n}\n```",
    [
        "Shape has no constructor",
        "Constructor call `super(color)` must be the first statement in the constructor body",
        "Circle cannot take color",
        "System.out.println cannot be called in constructors"
    ],
    1,
    "`super(...)` must be the very first statement in the constructor body. Placing `System.out.println` before `super(color)` fails compilation.",
    "super() Not First Statement Error", "error", "easy",
    "Spotted statement preceding super() in constructor body.",
    "Calls to `super()` must be the very first statement in a constructor."
)

add_q(
    "Why does this code fail to compile?\n```java\nclass A {}\nclass B {}\nclass C extends A, B {}\n```",
    [
        "C must be public",
        "Syntax error: class cannot extend multiple classes (Java does not support multiple class inheritance)",
        "B must extend A",
        "C must have constructors"
    ],
    1,
    "Java syntax only permits a single class after `extends`. Multiple class inheritance is illegal.",
    "Multiple Class Inheritance Syntax Error", "error", "easy",
    "Recognized illegal multiple class inheritance syntax.",
    "Java does not support multiple class inheritance; use interfaces for multiple type contracts."
)

add_q(
    "What is the compilation error in this overriding attempt?\n```java\nimport java.io.IOException;\nclass Reader {\n    public void readData() {}\n}\nclass FileReaderCustom extends Reader {\n    @Override\n    public void readData() throws IOException {}\n}\n```",
    [
        "IOException must be unchecked",
        "`readData()` in `FileReaderCustom` cannot override `readData()` in `Reader`: overridden method does not throw `IOException` (cannot declare new checked exceptions)",
        "FileReaderCustom must be abstract",
        "readData must return int"
    ],
    1,
    "An overriding method cannot throw checked exceptions that are not declared by the superclass method.",
    "New Checked Exception in Overriding Error", "error", "hard",
    "Understands that overriding methods cannot declare new checked exceptions.",
    "Overriding methods cannot declare new or broader checked exceptions than the superclass method."
)

add_q(
    "Why does this code cause a compilation error?\n```java\nclass Parent {\n    public static void show() {}\n}\nclass Child extends Parent {\n    @Override\n    public void show() {}\n}\n```",
    [
        "Parent has no show method",
        "Instance method `show()` in `Child` cannot override static method `show()` in `Parent`",
        "show must return void",
        "Child cannot extend Parent"
    ],
    1,
    "An instance method cannot override a static method, and a static method cannot hide an instance method. Both produce compilation errors.",
    "Instance Overriding Static Error", "error", "medium",
    "Caught instance method attempting to override a static method.",
    "An instance method cannot override a static method; static members can only be hidden by static members."
)

add_q(
    "Identify the bug in this `equals` method implementation:\n```java\npublic class Person {\n    String name;\n    public boolean equals(Person other) {\n        return this.name.equals(other.name);\n    }\n}\n```",
    [
        "name cannot be compared with equals",
        "It OVERLOADS `equals` rather than OVERRIDING `Object.equals(Object obj)` because the parameter type is `Person` instead of `Object`, so `list.contains()` or polymorphism will not call it",
        "Person must implement Comparable",
        "other.name is private"
    ],
    1,
    "`Object.equals` takes `Object obj`. Declaring `equals(Person other)` is an overload, not an override. Standard collections and frameworks invoke `equals(Object)`, bypassing this method completely.",
    "Equals Overloading vs Overriding Trap", "error", "medium",
    "Spotted dangerous accidental overloading of equals(Object).",
    "Always override `equals(Object obj)` with type `Object`, not the concrete class type."
)

add_q(
    "Why does this code fail to compile?\n```java\nclass Super {\n    private int secret = 42;\n}\nclass Sub extends Super {\n    public void printSecret() {\n        System.out.println(super.secret);\n    }\n}\n```",
    [
        "secret is not initialized",
        "`secret` has private access in `Super` and cannot be accessed directly in `Sub` even with `super.`",
        "printSecret must return int",
        "super cannot access fields"
    ],
    1,
    "`private` members are completely inaccessible outside the declaring class, even by subclasses using `super.`.",
    "Accessing Private Field via super Error", "error", "easy",
    "Caught attempt to access private superclass field using `super.`.",
    "Private members cannot be accessed directly by subclasses, even using `super.`."
)

add_q(
    "What error occurs in this code?\n```java\nclass A {\n    public A() { this(10); }\n    public A(int x) { super(); }\n}\nclass B extends A {\n    public B() {\n        super();\n        this(5); \n    }\n    public B(int x) {}\n}\n```",
    [
        "A cannot have constructor chaining",
        "`this(5)` must be the first statement in `B()`, but `super()` is already first; a constructor cannot call both `super()` and `this()`",
        "x is out of scope",
        "B cannot extend A"
    ],
    1,
    "Both `super()` and `this()` must be the first statement. A single constructor cannot contain both.",
    "Dual super() and this() Error", "error", "medium",
    "Caught concurrent presence of super() and this() in single constructor.",
    "A constructor cannot contain both `super()` and `this()`."
)

add_q(
    "Why does this code cause a compiler error?\n```java\nclass Animal {\n    public int getAge() { return 5; }\n}\nclass Dog extends Animal {\n    @Override\n    public String getAge() { return \"5\"; }\n}\n```",
    [
        "Animal has no age",
        "`getAge()` in `Dog` cannot override `getAge()` in `Animal`: return type `String` is incompatible with `int`",
        "Dog must be public",
        "@Override is invalid"
    ],
    1,
    "Return types must be identical (or covariant objects). `String` is completely incompatible with primitive `int`, causing a compilation error.",
    "Incompatible Return Type in Overriding", "error", "easy",
    "Spotted incompatible return type in overriding method.",
    "Overriding methods must have compatible return types (identical primitives or covariant object subtypes)."
)

add_q(
    "Why does this code fail to compile?\n```java\nclass Base {\n    public Base() {}\n}\nclass Sub extends Base {\n    public Sub() {\n        int x = 10;\n        super();\n    }\n}\n```",
    [
        "Base has no constructor",
        "`super()` must be the first statement in the constructor; local variable declaration `int x = 10;` cannot precede it",
        "x must be final",
        "Sub cannot call super"
    ],
    1,
    "`super()` must strictly be the first statement. Declaring `int x = 10;` before `super()` violates Java syntax.",
    "Preceding Statement Before super()", "error", "easy",
    "Recognized variable declaration placed before super().",
    "Nothing can precede `super()` or `this()` in a constructor."
)

add_q(
    "What is the compilation issue in this code?\n```java\nclass X {\n    protected void m() {}\n}\nclass Y extends X {\n    void m() {}\n}\n```",
    [
        "m cannot be void",
        "Cannot reduce visibility: `m()` in `Y` has package-private (default) access, which is more restrictive than `protected` in `X`",
        "Y cannot extend X",
        "X must be public"
    ],
    1,
    "Package-private (default) is more restrictive than `protected`. Overriding `protected` with default access is illegal.",
    "Protected to Default Access Reduction", "error", "medium",
    "Recognized illegal access reduction from protected to package-private.",
    "Overriding a `protected` method requires `protected` or `public` access."
)

add_q(
    "Why does this code cause a compiler error?\n```java\npackage p1;\npublic class Super {\n    void packageMethod() {}\n}\npackage p2;\nimport p1.Super;\npublic class Sub extends Super {\n    @Override\n    public void packageMethod() {}\n}\n```",
    [
        "Sub cannot be public",
        "Method does not override or implement: `packageMethod` has package-private access in package `p1` and is invisible to subclass `Sub` in package `p2`",
        "packageMethod must be static",
        "p1 cannot be imported"
    ],
    1,
    "Package-private members are invisible outside their package. Subclasses in different packages cannot override or see package-private methods.",
    "Package-Private Invisible to Cross-Package Subclass", "error", "hard",
    "Understands that package-private members cannot be overridden by subclasses in different packages.",
    "Package-private methods are not inherited or overridden by subclasses in other packages."
)

add_q(
    "Identify the bug in this code:\n```java\nclass Point {\n    int x, y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public boolean equals(Object o) {\n        Point p = (Point) o; // What if o is null or not a Point?\n        return this.x == p.x && this.y == p.y;\n    }\n}\n```",
    [
        "Compilation error: cannot cast o to Point",
        "Unsafe downcast without checks: if `o` is null or an instance of another class, it throws `ClassCastException` or `NullPointerException`",
        "Point has no fields",
        "equals must return int"
    ],
    1,
    "Robust `equals` implementations must check `if (o == this) return true; if (!(o instanceof Point)) return false;` before casting to avoid `ClassCastException`.",
    "Unchecked Downcasting in equals Bug", "error", "medium",
    "Identified missing instanceof check prior to downcasting in equals.",
    "Always check `instanceof` before downcasting in `equals(Object)` implementations."
)

add_q(
    "Why does this code fail to compile?\n```java\nclass A {\n    public static void run() {}\n}\nclass B extends A {\n    @Override\n    public static void run() {}\n}\n```",
    [
        "A cannot have static methods",
        "Static methods cannot be annotated with `@Override` because static methods are hidden, not overridden",
        "run must return void",
        "B must be final"
    ],
    1,
    "Because static methods do not participate in dynamic polymorphism, annotating a static method with `@Override` produces a compilation error.",
    "@Override on Static Method Error", "error", "medium",
    "Spotted illegal @Override annotation on static method.",
    "Static methods cannot be annotated with `@Override` because they cannot be overridden."
)

add_q(
    "What is the compilation issue in this code?\n```java\nclass Parent {\n    public Parent() {}\n}\nclass Child extends Parent {\n    public Child() {\n        super;\n    }\n}\n```",
    [
        "super cannot be used",
        "Syntax error: `super` requires parentheses `super();` when invoking a constructor",
        "Parent must be abstract",
        "Child must take parameters"
    ],
    1,
    "Constructor invocation requires parentheses: `super();`. Writing `super;` is a syntax error.",
    "Super Constructor Syntax Error", "error", "easy",
    "Spotted missing parentheses on super() constructor call.",
    "Invoking superclass constructors requires parentheses: `super();`."
)

add_q(
    "Why does this code fail to compile?\n```java\nclass Parent {\n    int val = 10;\n}\nclass Child extends Parent {\n    int val = 20;\n    public void show() {\n        System.out.println(super.super.val);\n    }\n}\n```",
    [
        "val cannot be 20",
        "Syntax error: `super.super` is illegal in Java (you cannot bypass the immediate parent class to access an ancestor)",
        "show must be static",
        "Parent has no val"
    ],
    1,
    "Java strictly forbids `super.super`. A subclass can only directly reference members of its immediate superclass.",
    "Illegal super.super Chaining", "error", "medium",
    "Recognized that `super.super` is syntactically illegal in Java.",
    "`super.super` is illegal; Java only allows referencing the immediate superclass via `super`."
)

add_q(
    "What error occurs in this code snippet?\n```java\nclass Base {\n    public Object get() { return null; }\n}\nclass Sub extends Base {\n    @Override\n    public int get() { return 0; }\n}\n```",
    [
        "Object cannot return null",
        "Incompatible return type: primitive `int` cannot be a covariant return type for `Object` (covariant returns only apply to reference subtypes)",
        "Sub must return String",
        "Base cannot have get method"
    ],
    1,
    "Covariant return types only work for reference types (objects). A primitive type `int` cannot be a subtype of `Object`.",
    "Primitive Incompatible with Object Covariant Return", "error", "medium",
    "Recognized that primitive types cannot be covariant subtypes of Object.",
    "Covariant return types require reference subtypes; primitive `int` is not a subtype of `Object`."
)

add_q(
    "Why does this code cause a compiler error?\n```java\nclass Person {\n    private void secret() {}\n}\nclass Employee extends Person {\n    @Override\n    public void secret() {}\n}\n```",
    [
        "Employee cannot be public",
        "Method does not override or implement: `secret()` in `Person` is `private`, so it is not visible or overridable by `Employee`",
        "secret must return int",
        "Person must be abstract"
    ],
    1,
    "Private methods are not visible to subclasses and cannot be overridden. Specifying `@Override` causes the compiler to reject it.",
    "Attempted Override of Private Method", "error", "easy",
    "Caught @Override on private superclass method.",
    "Private methods cannot be overridden; removing `@Override` makes it a new independent method."
)

add_q(
    "What is the issue with this code?\n```java\nclass Base {\n    protected int count;\n}\nclass Sub extends Base {\n    public void check(Base b) {\n        System.out.println(b.count);\n    }\n}\n```",
    [
        "count cannot be printed",
        "If `Sub` is in a different package than `Base`, accessing `b.count` on another `Base` reference is illegal (protected allows access through subclass references, not raw superclass references from another package)",
        "Sub cannot extend Base",
        "count must be static"
    ],
    1,
    "Across package boundaries, a subclass can only access `protected` members through references of its own subclass type (or its subtypes), not through an arbitrary superclass instance reference `b`.",
    "Protected Cross-Package Access Rule", "error", "hard",
    "Mastery of the subtle cross-package protected access restriction on superclass instances.",
    "Across packages, protected members can only be accessed through references of the subclass type."
)

add_q(
    "Why does this code fail to compile?\n```java\nclass Super {\n    public Super(int a, int b) {}\n}\nclass Sub extends Super {\n    public Sub(int a) {\n        // no call to super\n    }\n}\n```",
    [
        "Sub cannot have 1 parameter",
        "Implicit `super()` is undefined for `Super`: `Super` has no no-arg constructor, so `Sub` must explicitly call `super(a, ...)`",
        "Super must be final",
        "a is not initialized"
    ],
    1,
    "Because `Super` has only a 2-arg constructor, the compiler's implicit `super()` insertion fails to compile.",
    "Missing Explicit Super Constructor Call", "error", "easy",
    "Recognized requirement to explicitly invoke super(a, b).",
    "Subclass constructors must explicitly call `super(...)` when the superclass lacks a no-arg constructor."
)

add_q(
    "What compilation error occurs here?\n```java\nclass Test {\n    @Override\n    public void customMethod() {}\n}\n```",
    [
        "Test must extend Object",
        "Method does not override or implement a method from a supertype: `customMethod()` does not exist in `java.lang.Object`",
        "customMethod must return boolean",
        "Test cannot be public"
    ],
    1,
    "`Test` extends `Object`, but `customMethod()` is not defined in `Object`. The `@Override` annotation flags this error.",
    "Invalid @Override on Non-Existent Method", "error", "easy",
    "Caught @Override annotation on a brand new method.",
    "`@Override` produces a compilation error if no matching superclass/interface method exists."
)

# --- Ch 7: 3. Output (25 Qs) ---
add_q(
    "What is the output of the following code?\n```java\nclass Parent {\n    public Parent() { System.out.print(\"P \"); }\n}\nclass Child extends Parent {\n    public Child() { System.out.print(\"C \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Child();\n    }\n}\n```",
    ["C P ", "P C ", "C ", "P "],
    1,
    "When `new Child()` is instantiated, `Child()` automatically calls `super()`. The `Parent` constructor runs first, printing `\"P \"`. Then `Child` body runs, printing `\"C \"`. Output: `P C `.",
    "Constructor Execution Order Output", "output", "easy",
    "Traced superclass-first constructor execution sequence.",
    "Parent constructors execute before child constructors: outputs `P C `."
)

add_q(
    "What does this code print?\n```java\nclass Animal {\n    public void sound() { System.out.print(\"Generic \"); }\n}\nclass Cat extends Animal {\n    @Override\n    public void sound() { System.out.print(\"Meow \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Animal a = new Cat();\n        a.sound();\n    }\n}\n```",
    ["Generic ", "Meow ", "Generic Meow ", "Error"],
    1,
    "Even though `a` is declared as type `Animal`, the actual object on the heap is `Cat`. Method calls are bound dynamically at runtime to the actual object's overridden method (`Cat.sound()`). Outputs `Meow `.",
    "Dynamic Method Binding Output", "output", "easy",
    "Understands runtime dynamic method dispatch in overridden methods.",
    "Dynamic method binding invokes the runtime object's overridden method: `Meow `."
)

add_q(
    "What is the output of this code?\n```java\nclass Base {\n    int x = 10;\n}\nclass Derived extends Base {\n    int x = 20;\n}\npublic class Main {\n    public static void main(String[] args) {\n        Base b = new Derived();\n        System.out.println(b.x);\n    }\n}\n```",
    ["10", "20", "30", "NullPointerException"],
    0,
    "In Java, fields are NOT polymorphic. Field access is resolved at compile time based on the declared reference type (`Base`), NOT the runtime object. Outputs `10`.",
    "Field Hiding Reference Type Binding Output", "output", "medium",
    "Understands that field access is resolved by reference type, not runtime object.",
    "Field access is not polymorphic; `b.x` accesses `Base.x` (10)."
)

add_q(
    "What does this code print?\n```java\nclass A {\n    public void m() { System.out.print(\"A \"); }\n}\nclass B extends A {\n    @Override\n    public void m() {\n        super.m();\n        System.out.print(\"B \");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new B().m();\n    }\n}\n```",
    ["B A ", "A B ", "B ", "A "],
    1,
    "`new B().m()` calls `super.m()`, which prints `\"A \"`. Then `B.m()` prints `\"B \"`. Output: `A B `.",
    "super.method() Invocation Output", "output", "easy",
    "Traced superclass method delegation via `super.m()`.",
    "`super.m()` runs first (A), then local code runs (B): `A B `."
)

add_q(
    "What is the output of this code?\n```java\nclass Super {\n    public Super(int x) { System.out.print(\"S\" + x + \" \"); }\n}\nclass Sub extends Super {\n    public Sub() {\n        super(10);\n        System.out.print(\"Sub \");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Sub();\n    }\n}\n```",
    ["S10 Sub ", "Sub S10 ", "S10 ", "Sub "],
    0,
    "`new Sub()` calls `super(10)`, printing `\"S10 \"`. Then `Sub()` prints `\"Sub \"`. Output: `S10 Sub `.",
    "Parameterized super() Call Output", "output", "easy",
    "Traced explicit parameterized super constructor call.",
    "Superclass constructor executes first with argument 10: `S10 Sub `."
)

add_q(
    "What does the following code print?\n```java\nclass P {\n    static void f() { System.out.print(\"Parent \"); }\n}\nclass C extends P {\n    static void f() { System.out.print(\"Child \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        P p = new C();\n        p.f();\n    }\n}\n```",
    ["Child ", "Parent ", "Parent Child ", "Error"],
    1,
    "Static methods are hidden, not overridden. Calls to static methods are resolved at compile time based on the reference type (`P`). Thus `p.f()` invokes `P.f()`, printing `Parent `.",
    "Static Method Hiding Resolution Output", "output", "hard",
    "Mastered compile-time static method resolution based on reference type.",
    "Static methods are resolved by declared reference type at compile-time: `P.f()` outputs `Parent `."
)

add_q(
    "What is the output of this code?\n```java\nclass Person {\n    String name;\n    public Person(String name) { this.name = name; }\n    public String toString() { return name; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person(\"Bob\");\n        System.out.println(\"User: \" + p);\n    }\n}\n```",
    ["User: Bob", "User: Person@15db9742", "User: Person", "User: null"],
    0,
    "String concatenation `\"User: \" + p` invokes `p.toString()`, which returns `\"Bob\"`. Outputs `User: Bob`.",
    "String Concatenation toString Output", "output", "easy",
    "Recognized automatic toString() invocation in string concatenation.",
    "Concatenating an object invokes its `toString()` method: `User: Bob`."
)

add_q(
    "What does this code print?\n```java\nclass X {\n    public X() { System.out.print(\"X \"); }\n}\nclass Y extends X {\n    public Y() { System.out.print(\"Y \"); }\n}\nclass Z extends Y {\n    public Z() { System.out.print(\"Z \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Z();\n    }\n}\n```",
    ["Z Y X ", "X Y Z ", "Z ", "X Z "],
    1,
    "Constructor calls chain up to the top of the inheritance tree: `Z()` calls `Y()`, which calls `X()`. Execution unwinds down: `X `, then `Y `, then `Z `. Output: `X Y Z `.",
    "Multi-Level Constructor Hierarchy Output", "output", "easy",
    "Traced multi-tier inheritance constructor chaining execution.",
    "Constructors execute top-down from root superclass to leaf subclass: `X Y Z `."
)

add_q(
    "What is the output of this code?\n```java\nclass A {\n    int num = 1;\n    public int getNum() { return num; }\n}\nclass B extends A {\n    int num = 2;\n    @Override\n    public int getNum() { return num; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        A a = new B();\n        System.out.println(a.num + \" \" + a.getNum());\n    }\n}\n```",
    ["1 1", "2 2", "1 2", "2 1"],
    2,
    "`a.num` accesses the field directly (bound to reference type `A` -> 1). `a.getNum()` is a polymorphic method call (bound to runtime object `B` -> returns `B.num` = 2). Output: `1 2`.",
    "Field vs Polymorphic Method Resolution Output", "output", "hard",
    "Mastery of field resolution (by reference) vs method resolution (by runtime object).",
    "`a.num` is resolved by reference type (1); `a.getNum()` is resolved by runtime object (2)."
)

add_q(
    "What does this code print?\n```java\nclass Shape {\n    public void draw() { System.out.print(\"Shape \"); }\n}\nclass Circle extends Shape {\n    public void draw() { System.out.print(\"Circle \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Shape[] shapes = { new Shape(), new Circle() };\n        for (Shape s : shapes) s.draw();\n    }\n}\n```",
    ["Shape Shape ", "Circle Circle ", "Shape Circle ", "Circle Shape "],
    2,
    "First element is `Shape` (prints `Shape `). Second element is `Circle` (prints `Circle `). Output: `Shape Circle `.",
    "Polymorphic Array Iteration Output", "output", "easy",
    "Traced polymorphic method dispatch across heterogenous array.",
    "Dynamic binding invokes each object's respective implementation: `Shape Circle `."
)

add_q(
    "What is the output of this code?\n```java\nclass Parent {\n    int x = 5;\n}\nclass Child extends Parent {\n    int x = 10;\n    public void print() {\n        System.out.println(x + \" \" + super.x);\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Child().print();\n    }\n}\n```",
    ["10 10", "10 5", "5 10", "5 5"],
    1,
    "`x` refers to `this.x` (10). `super.x` explicitly accesses the hidden field in the parent class (5). Output: `10 5`.",
    "super.field Access Output", "output", "easy",
    "Accurately accessed hidden superclass field using `super.x`.",
    "`x` accesses Child field (10); `super.x` accesses Parent field (5)."
)

add_q(
    "What does this code print?\n```java\nclass A {\n    public void test() { System.out.print(\"A \"); }\n}\nclass B extends A {\n    public void test() { System.out.print(\"B \"); }\n}\nclass C extends B {}\npublic class Main {\n    public static void main(String[] args) {\n        A a = new C();\n        a.test();\n    }\n}\n```",
    ["A ", "B ", "C ", "Error"],
    1,
    "`C` does not override `test()`, so it inherits `B.test()`. Runtime object is `C`, which uses its inherited `B.test()` method. Outputs `B `.",
    "Inherited Override Resolution", "output", "easy",
    "Traced inheritance of overridden method in multi-tier hierarchy.",
    "`C` inherits `B`'s overridden method, outputting `B `."
)

add_q(
    "What is the output of this code?\n```java\nclass Base {\n    public void show() { System.out.print(\"Base \"); }\n}\nclass Sub extends Base {\n    public void show() { System.out.print(\"Sub \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Base b = new Sub();\n        ((Base) b).show();\n    }\n}\n```",
    ["Base ", "Sub ", "Base Sub ", "Error"],
    1,
    "Casting `b` to `(Base)` changes only the compile-time type, NOT the runtime object. Polymorphic method calls always dispatch to the actual runtime object (`Sub`). Outputs `Sub `.",
    "Casting Does Not Bypass Overriding Output", "output", "medium",
    "Understands that upcasting cannot bypass dynamic method dispatch.",
    "Casting does not bypass dynamic binding; the overridden method in Sub still executes: `Sub `."
)

add_q(
    "What does this code print?\n```java\nclass Alpha {\n    public Alpha() { System.out.print(\"1 \"); }\n}\nclass Beta extends Alpha {\n    public Beta() {\n        this(5);\n        System.out.print(\"2 \");\n    }\n    public Beta(int x) {\n        System.out.print(\"3 \");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Beta();\n    }\n}\n```",
    ["1 3 2 ", "3 2 1 ", "1 2 3 ", "3 1 2 "],
    0,
    "`new Beta()` calls `this(5)`. `Beta(int x)` implicitly calls `super()`, running `Alpha()` first (`\"1 \"`). Then `Beta(int x)` body runs (`\"3 \"`). Control returns to `Beta()`, which prints `\"2 \"`. Output: `1 3 2 `.",
    "Combined this() and super() Chaining Output", "output", "hard",
    "Mastered execution sequence of this() delegating to constructor with implicit super().",
    "`Alpha()` runs first (1), then `Beta(int)` (3), then `Beta()` (2): `1 3 2 `."
)

add_q(
    "What is the output of this code?\n```java\nclass Parent {\n    public void greet() { System.out.print(\"Hello \"); }\n}\nclass Child extends Parent {\n    public void greet(String name) { System.out.print(\"Hello \" + name); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Child c = new Child();\n        c.greet();\n        c.greet(\"Bob\");\n    }\n}\n```",
    ["Hello Hello Bob", "Hello Bob", "Compilation error", "Hello Hello "],
    0,
    "`Child` inherits `greet()` from `Parent` and introduces an overloaded `greet(String)`. Both methods are callable on `c`. Output: `Hello Hello Bob`.",
    "Inherited Method Overloading Output", "output", "easy",
    "Understands method overloading across inheritance boundaries.",
    "Child inherits `greet()` and overloads it with `greet(String)`; both execute cleanly."
)

add_q(
    "What does this code print?\n```java\nclass Item {\n    int id = 100;\n}\nclass SpecialItem extends Item {\n    int id = 200;\n}\npublic class Main {\n    public static void main(String[] args) {\n        SpecialItem s = new SpecialItem();\n        Item i = s;\n        System.out.println(s.id + \" \" + i.id);\n    }\n}\n```",
    ["200 200", "200 100", "100 100", "100 200"],
    1,
    "Field access is bound to the declared reference type: `s.id` accesses `SpecialItem.id` (200), while `i.id` accesses `Item.id` (100). Output: `200 100`.",
    "Dual Reference Field Hiding Output", "output", "medium",
    "Distinguished field values accessed through subclass vs superclass references.",
    "`s.id` accesses 200; `i.id` accesses 100."
)

add_q(
    "What is the output of this code?\n```java\nclass A {\n    public A() { print(); }\n    public void print() { System.out.print(\"A \"); }\n}\nclass B extends A {\n    int x = 42;\n    @Override\n    public void print() { System.out.print(x + \" \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new B();\n    }\n}\n```",
    ["A ", "42 ", "0 ", "NullPointerException"],
    2,
    "Calling an overridable method inside a constructor invokes `B.print()` during `A()` execution. At this point, `B`'s fields have not been initialized yet (`x` is at its default value 0). Outputs `0 `.",
    "Polymorphic Call in Constructor Trap Output", "output", "hard",
    "Mastery of the subtle constructor polymorphic dispatch bug in Java.",
    "Overridden method in parent constructor executes before child fields initialize, printing default 0."
)

add_q(
    "What does this code print?\n```java\nclass Vehicle {\n    public String type() { return \"Vehicle\"; }\n}\nclass Car extends Vehicle {\n    public String type() { return \"Car\"; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Vehicle v = new Car();\n        System.out.println(v.type().equals(\"Car\"));\n    }\n}\n```",
    ["true", "false", "NullPointerException", "Compilation error"],
    0,
    "`v.type()` dynamically binds to `Car.type()`, returning `\"Car\"`. `\"Car\".equals(\"Car\")` evaluates to `true`.",
    "Polymorphic Method String Equality Output", "output", "easy",
    "Evaluated string equality on polymorphically dispatched return value.",
    "`Car.type()` returns \"Car\", which equals \"Car\" -> true."
)

add_q(
    "What is the output of this code?\n```java\nclass Super {\n    protected int n = 1;\n}\nclass Sub extends Super {\n    public Sub() {\n        n += 10;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Sub s = new Sub();\n        System.out.println(s.n);\n    }\n}\n```",
    ["1", "10", "11", "0"],
    2,
    "`Super.n` is initialized to 1. `Sub()` increments the inherited field `n += 10`, making it 11. Outputs 11.",
    "Protected Field Mutation in Subclass Output", "output", "easy",
    "Tracked inheritance and mutation of protected field.",
    "Inherited field starts at 1 and increments by 10 to 11."
)

add_q(
    "What does this code print?\n```java\nclass M {\n    public void test() { System.out.print(\"M \"); }\n}\nclass N extends M {\n    public void test() { System.out.print(\"N \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        M obj = new N();\n        if (obj instanceof N) {\n            ((N) obj).test();\n        }\n    }\n}\n```",
    ["M ", "N ", "M N ", "Error"],
    1,
    "`obj instanceof N` is true. `((N) obj).test()` calls `N.test()`, printing `N `.",
    "Downcast Method Invocation Output", "output", "easy",
    "Verified instanceof check and downcast invocation.",
    "`obj instanceof N` is true; `N.test()` prints `N `."
)

add_q(
    "What is the output of this code?\n```java\nclass A {\n    int val = 5;\n}\nclass B extends A {\n    int val = 15;\n    public void display() {\n        int val = 25;\n        System.out.println(val + \" \" + this.val + \" \" + super.val);\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new B().display();\n    }\n}\n```",
    ["25 15 5", "25 25 25", "15 15 5", "5 15 25"],
    0,
    "`val` is local variable (25). `this.val` is field in `B` (15). `super.val` is field in `A` (5). Output: `25 15 5`.",
    "Scope Resolution: Local, this, and super Output", "output", "medium",
    "Accurately resolved local variable, this.field, and super.field scopes.",
    "Local = 25, `this.val` = 15, `super.val` = 5: outputs `25 15 5`."
)

add_q(
    "What does this code print?\n```java\nclass One {\n    public String name() { return \"One\"; }\n}\nclass Two extends One {\n    public String name() { return \"Two\"; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        One o = new Two();\n        System.out.println(o.name() + \" \" + ((One) o).name());\n    }\n}\n```",
    ["Two One", "Two Two", "One Two", "One One"],
    1,
    "In Java, casting to `(One)` does NOT alter dynamic method binding. Both `o.name()` and `((One) o).name()` execute the overridden method on `Two`. Output: `Two Two`.",
    "Dynamic Binding Unaffected by Cast Output", "output", "hard",
    "Understands that dynamic method dispatch cannot be overridden by casting.",
    "Both invocations execute `Two.name()`, printing `Two Two`."
)

add_q(
    "What is the output of this code?\n```java\nclass Parent {\n    public void info() { System.out.print(\"Parent \"); }\n}\nclass Child extends Parent {\n    public void info() { System.out.print(\"Child \"); }\n    public void play() { System.out.print(\"Play \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Parent p = new Child();\n        p.info();\n    }\n}\n```",
    ["Parent ", "Child ", "Parent Play ", "Child Play "],
    1,
    "`p.info()` resolves dynamically to `Child.info()`, outputting `Child `.",
    "Basic Dynamic Dispatch Output", "output", "easy",
    "Traced dynamic dispatch to overridden subclass method.",
    "`Child.info()` executes dynamically, printing `Child `."
)

add_q(
    "What does this code print?\n```java\nclass Base {\n    public Base() {}\n}\npublic class Main {\n    public static void main(String[] args) {\n        Base b = new Base();\n        System.out.println(b instanceof Object);\n    }\n}\n```",
    ["true", "false", "NullPointerException", "Compilation error"],
    0,
    "Every class in Java implicitly inherits from `java.lang.Object`. Therefore, `b instanceof Object` is always `true` for non-null instances.",
    "instanceof Object Check Output", "output", "easy",
    "Recognized that every non-null object instance is an instanceof Object.",
    "All non-null object instances evaluate to true for `instanceof Object`."
)

add_q(
    "What is the output of this code?\n```java\nclass Alpha {\n    static String tag = \"Alpha\";\n}\nclass Beta extends Alpha {\n    static String tag = \"Beta\";\n}\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(Beta.tag + \" \" + Alpha.tag);\n    }\n}\n```",
    ["Beta Alpha", "Alpha Alpha", "Beta Beta", "Error"],
    0,
    "Static fields are accessed via their specific declaring class names: `Beta.tag` is \"Beta\", and `Alpha.tag` is \"Alpha\". Outputs `Beta Alpha`.",
    "Static Field Class Qualification Output", "output", "easy",
    "Understands explicit class-level qualification of hidden static fields.",
    "`Beta.tag` accesses Beta's static field; `Alpha.tag` accesses Alpha's static field."
)

# --- Ch 7: 4. Scenario (25 Qs) ---
add_q(
    "You are designing a payroll system for a company. All employees share common attributes (`id`, `name`, `baseSalary`) and a `calculatePay()` method. `Manager` employees receive a bonus, while `Engineer` employees receive overtime pay. What is the standard object-oriented design?",
    [
        "Write 3 completely unrelated classes with duplicate fields",
        "Create an `Employee` superclass with common fields, and have `Manager` and `Engineer` extend `Employee`, overriding `calculatePay()` to add their respective bonus/overtime calculations",
        "Put all calculations into a single switch statement in main",
        "Use interfaces only with no shared code"
    ],
    1,
    "Inheritance allows `Manager` and `Engineer` to inherit common employee attributes and provide specialized polymorphic `calculatePay()` implementations.",
    "Inheritance Payroll Model", "scenario", "easy",
    "Applied inheritance hierarchy to eliminate code duplication in domain modeling.",
    "Model shared attributes in a superclass and override specialized behavior in subclasses."
)

add_q(
    "A game developer creates an entity hierarchy: `Entity` -> `Character` -> `Player`. The `takeDamage(int dmg)` method in `Player` should perform standard damage reduction from `Character`, and then trigger screen shake. How should `Player` implement this?",
    [
        "Copy and paste all code from Character into Player",
        "Call `super.takeDamage(dmg);` inside `Player.takeDamage()` to execute parent damage logic, followed by `triggerScreenShake();`",
        "Delete the method in Character",
        "Make takeDamage static"
    ],
    1,
    "Using `super.takeDamage(dmg)` extends the superclass's functionality cleanly without duplicating existing damage calculation logic.",
    "Super Method Extension Pattern", "scenario", "easy",
    "Employed super.method() to augment inherited behavior without code duplication.",
    "Call `super.method()` in an overridden method to augment rather than replace parent logic."
)

add_q(
    "A software security auditor reviews a cryptography library. The `AESCipher` class contains critical encryption routines. Why should the class be marked `public final class AESCipher`?",
    [
        "Final classes compile faster",
        "To prevent malicious subclasses from extending `AESCipher`, overriding cryptographic methods, and intercepting plaintext data (subversion prevention)",
        "Final classes run with root permissions",
        "To allow multiple inheritance"
    ],
    1,
    "Marking sensitive security or immutable classes `final` guarantees that untrusted third-party code cannot subclass them to compromise system security contracts.",
    "Security Hardening via Final Classes", "scenario", "medium",
    "Understands the security justification for sealing classes with the final modifier.",
    "Mark security-sensitive classes `final` to prevent malicious subclass overriding."
)

add_q(
    "An e-commerce order management system stores millions of `Customer` objects in a `HashSet`. A developer notices that duplicate customers with the exact same `email` are being inserted into the set. What did the developer forget to do in the `Customer` class?",
    [
        "Make Customer implement Serializable",
        "Override both `equals(Object)` and `hashCode()` to evaluate customer equality based on `email`",
        "Make the email field public",
        "Create a copy constructor"
    ],
    1,
    "`HashSet` uses `hashCode()` to find the bucket and `equals()` to check for duplicates. Without overriding both, `HashSet` uses default memory identity, allowing logical duplicates.",
    "HashSet Deduplication via equals and hashCode", "scenario", "medium",
    "Understands the dependency of hash collections on equals() and hashCode().",
    "Hash-based collections (`HashSet`/`HashMap`) require properly overridden `equals()` and `hashCode()`."
)

add_q(
    "A UI framework provides a base class `Component` with a method `public final void render() { setupBuffers(); draw(); flush(); }`. Why is `render()` declared `final`, while `draw()` is not?",
    [
        "render() is private",
        "Template Method pattern: `render()` enforces the fixed execution algorithm lifecycle and must not be altered, while subclasses are expected to customize `draw()`",
        "draw() runs on the CPU",
        "Component cannot be instantiated"
    ],
    1,
    "The Template Method pattern seals the high-level workflow skeleton with a `final` method while allowing subclasses to override individual pluggable steps (`draw()`).",
    "Template Method Design Pattern", "scenario", "hard",
    "Recognized the Template Method pattern using final workflow methods.",
    "Use `final` on template methods to preserve workflow structure while allowing hook overrides."
)

add_q(
    "A banking application has an `Account` base class and a `SavingsAccount` subclass. The superclass has `protected double balance;`. A junior developer in another package attempts: `void audit(Account a) { System.out.println(a.balance); }`. Why does this fail to compile?",
    [
        "balance is private",
        "In another package, `protected` members can only be accessed through inheritance via subclass references (`SavingsAccount`), not through arbitrary superclass references (`Account a`)",
        "balance is a keyword",
        "Account has no balance"
    ],
    1,
    "Java protected access rules enforce that cross-package access to protected members is only permitted through the subclass's own type hierarchy, preventing arbitrary access to unrelated instances.",
    "Cross-Package Protected Field Access Restriction", "scenario", "hard",
    "Mastered cross-package protected access boundaries.",
    "Across packages, protected members can only be accessed via the subclass type itself."
)

add_q(
    "A financial reporting service converts transaction entities into CSV format. The `Transaction` class overrides `toString()` to return comma-separated values: `\"1001,Alice,250.00\"`. What is the benefit of overriding `toString()` for logging and debugging?",
    [
        "It prevents ClassCastException",
        "It provides a clear, human-readable text representation when objects are printed or inspected in logs and debuggers, rather than cryptic memory hash codes (`Transaction@15db9742`)",
        "It speeds up database queries",
        "It makes fields immutable"
    ],
    1,
    "Overriding `toString()` gives developers meaningful, diagnostic text representations during logging, debugging, and testing.",
    "Diagnostic Value of toString()", "scenario", "easy",
    "Understands the diagnostic role of overriding toString() in domain entities.",
    "Override `toString()` to provide informative diagnostic descriptions in logs and debuggers."
)

add_q(
    "A warehouse robot management program models vehicles: `Vehicle` -> `ElectricForklift`. `Vehicle` requires a mandatory serial number: `public Vehicle(String serialNumber)`. How must `ElectricForklift` initialize the serial number?",
    [
        "Declare a new serialNumber field",
        "Provide a constructor that invokes `super(serialNumber)` as its very first statement",
        "Set serialNumber in a static block",
        "Leave the constructor empty"
    ],
    0,
    "Subclasses must delegate mandatory superclass initialization by invoking `super(serialNumber)` as the first line of their constructor.",
    "Mandatory Parameter Passing to super()", "scenario", "easy",
    "Delegated required initialization parameters to superclass constructor.",
    "Pass mandatory parent parameters via `super(params)` in the subclass constructor."
)

add_q(
    "A banking app models `SavingsAccount` extending `BankAccount`. The bank wants to prevent subclasses from modifying the core annual interest calculation formula: `public double calculateInterest()`. How can the bank enforce this?",
    [
        "Make the method private (wait: but subclasses must call it)",
        "Declare the method `public final double calculateInterest()`: it remains accessible to subclasses and callers, but cannot be overridden",
        "Make the class abstract",
        "Remove the method"
    ],
    1,
    "Declaring the method `public final` keeps it callable everywhere while guaranteeing that no subclass can alter or tamper with the calculation formula.",
    "Sealing Business Logic with Final Methods", "scenario", "easy",
    "Used final method modifier to lock critical business calculation algorithms.",
    "Declare methods `final` when their implementation must be preserved without subclass modification."
)

add_q(
    "An inventory tracking system needs to check if two `Product` objects represent the same physical SKU. Why is writing `if (p1 == p2)` incorrect, and what should be written instead?",
    [
        "`==` compares memory addresses, not SKU values; write `if (p1.equals(p2))` with an overridden `equals()` method comparing SKUs",
        "`==` is deprecated in Java",
        "Use `p1.compareTo(p2) == 0` only",
        "Convert both products to ints"
    ],
    0,
    "`==` compares whether both variables refer to the exact same object in heap memory. To test logical domain equality (matching SKU), override and call `p1.equals(p2)`.",
    "Logical Domain Equality via equals()", "scenario", "easy",
    "Avoids reference identity `==` for domain object equality.",
    "Use `p1.equals(p2)` with overridden `equals()` for domain value comparisons."
)

add_q(
    "A university student database models `Undergraduate` extending `Student`. The base class has a package-private method `void updateGrades()`. When `Undergraduate` is moved to a sub-package `com.univ.students.undergrad`, it fails to compile when calling `updateGrades()`. Why?",
    [
        "Undergraduate cannot have sub-packages",
        "Package-private members are accessible only within the exact same package; moving to a sub-package breaks access because sub-packages are treated as completely distinct packages in Java",
        "Grades cannot be updated",
        "Undergraduate must be an interface"
    ],
    1,
    "In Java, sub-packages (e.g. `p.sub`) are completely separate packages from parent packages (`p`). Package-private members cannot cross package boundaries; change visibility to `protected`.",
    "Sub-Package Separation in Java", "scenario", "medium",
    "Recognized that sub-packages do not inherit package-private access privileges.",
    "Sub-packages are distinct packages in Java; use `protected` to grant access to subclasses across packages."
)

add_q(
    "A game development team creates an RPG game. A base class `Monster` has `protected int hp;`. A subclass `Dragon` needs to double its health on rage mode. How can `Dragon` modify `hp` directly without getters/setters?",
    [
        "Because `hp` is `protected`, subclasses can access and modify `hp` directly by name: `this.hp *= 2;`",
        "Subclasses cannot access protected fields",
        "By casting Dragon to Monster",
        "Using reflection only"
    ],
    0,
    "`protected` visibility allows subclasses to directly read and write the inherited field by name.",
    "Subclass Protected Field Manipulation", "scenario", "easy",
    "Accessed protected superclass state directly from subclass methods.",
    "Subclasses can directly access and modify inherited `protected` fields."
)

add_q(
    "A developer designs a `SmartLight` class extending `Light`. When overriding `turnOn()`, the developer forgets the `@Override` annotation and writes `public void turnon()` (lowercase 'o'). What bug occurs?",
    [
        "The compiler issues a syntax error",
        "Silent bug: Java treats `turnon()` as an entirely new method rather than overriding `turnOn()`. Polymorphic calls to `light.turnOn()` will execute the base class method instead!",
        "The light turns off",
        "The program crashes immediately"
    ],
    1,
    "Without `@Override`, typos silently create new overloaded or unrelated methods. The intended superclass method remains un-overridden, leading to difficult-to-trace bugs.",
    "Missing @Override Silent Bug Trap", "scenario", "medium",
    "Understands how @Override prevents silent typo bugs in method names.",
    "Always use `@Override` to catch casing or naming typos at compile time."
)

add_q(
    "An enterprise human resources system serializes employee records. When overriding `equals(Object o)` in `Manager`, what should be the first check before comparing manager-specific fields?",
    [
        "`if (!super.equals(o)) return false;` to verify that all base `Employee` fields match first",
        "Set all fields to null",
        "Throw an exception",
        "Compare manager bonus only"
    ],
    0,
    "In subclass `equals()` implementations, calling `super.equals(o)` verifies that all inherited superclass fields are equal before proceeding to compare subclass-specific fields.",
    "Chained super.equals() Verification Pattern", "scenario", "medium",
    "Applied `super.equals()` to verify inherited field equality in subclass overrides.",
    "Invoke `if (!super.equals(o)) return false;` in subclass `equals()` implementations."
)

add_q(
    "A scientific visualization library creates an immutable `Vector2D` class with `final double x, y;`. To prevent any subclass from introducing mutable state or overriding vector math methods, what should be done?",
    [
        "Declare the class `public final class Vector2D`",
        "Make all methods private",
        "Make the class abstract",
        "Declare x and y as static"
    ],
    0,
    "Declaring the class `final` prevents subclasses from extending it, guaranteeing that vector instances remain completely immutable and predictable.",
    "Sealing Immutable Mathematical Classes", "scenario", "easy",
    "Sealed immutable mathematical class using the final class modifier.",
    "Mark immutable domain classes `final` to prevent subclasses from adding mutable state."
)

add_q(
    "A transport ticketing app has a `Ticket` class. `Ticket` has `public final String getTicketId()`. Why would the architect mark `getTicketId()` as `final`?",
    [
        "It makes ticket IDs random",
        "To ensure that no subclass can override or tamper with the security-critical ticket identifier generation/retrieval mechanism",
        "Ticket ID is stored on the stack",
        "To allow ticket IDs to be changed"
    ],
    1,
    "Marking identification accessors `final` guarantees that identity retrieval cannot be subverted by derived classes.",
    "Preserving Identifier Invariants via Final", "scenario", "easy",
    "Preserved core identification invariants using final methods.",
    "Make identification methods `final` to ensure consistent, tamper-proof ID retrieval."
)

add_q(
    "A flight booking system has a `Flight` class. When `System.out.println(flight)` is executed, it outputs `Flight@3a71f4`. The manager asks for it to display `\"MH370 (KUL -> PEK)\"`. What change is needed?",
    [
        "Rename the class to MH370",
        "Override the `public String toString()` method in `Flight` to return formatted route details",
        "Make the Flight class static",
        "Change flight to a String"
    ],
    1,
    "Overriding `public String toString()` customizes the text returned when the object is converted to string for printing.",
    "Customizing Domain toString() Output", "scenario", "easy",
    "Overrode toString() to produce meaningful domain descriptions.",
    "Override `toString()` to display meaningful domain details instead of default class hash codes."
)

add_q(
    "A banking app has a class hierarchy: `Account` -> `CheckingAccount`. `Account` has a constructor `public Account(String accNo, double balance)`. In `CheckingAccount`, a new constructor `public CheckingAccount(String accNo)` is created with a default balance of 0.0. How should it be coded?",
    [
        "`public CheckingAccount(String accNo) { super(accNo, 0.0); }`",
        "`public CheckingAccount(String accNo) { this.accNo = accNo; }`",
        "`public CheckingAccount(String accNo) { new Account(accNo, 0.0); }`",
        "`public CheckingAccount(String accNo) { super(); }`"
    ],
    0,
    "`super(accNo, 0.0)` invokes the superclass constructor with the required parameters, establishing valid initial account state.",
    "Super Constructor Default Parameter Pattern", "scenario", "easy",
    "Supplied default parameters cleanly via super constructor delegation.",
    "Delegate to the parent constructor with default parameters: `super(id, defaultVal);`."
)

add_q(
    "A security system models role permissions: `User` -> `AdminUser`. `User` has `public boolean hasPermission(String perm)`. `AdminUser` overrides this to grant all permissions unconditionally (`return true;`). What OOP concept is this?",
    [
        "Data hiding",
        "Method overriding (polymorphic specialization)",
        "Method overloading",
        "Class encapsulation"
    ],
    1,
    "Specializing or customizing inherited behavior in a subclass using the identical method signature is method overriding.",
    "Polymorphic Specialization via Overriding", "scenario", "easy",
    "Identified method overriding as polymorphic specialization.",
    "Overriding allows subclasses to specialize inherited behavioral contracts."
)

add_q(
    "An audio software plugin represents audio processors: `Processor` -> `ReverbProcessor`. `Processor` defines `public void processBuffer(float[] buffer)`. `ReverbProcessor` needs to perform custom reverb algorithms, but also call the base processor logic. How does it invoke the base logic?",
    [
        "`super.processBuffer(buffer);`",
        "`this.processBuffer(buffer);` (Infinite recursion!)",
        "`Processor.processBuffer(buffer);`",
        "`((Processor) this).processBuffer(buffer);`"
    ],
    0,
    "`super.processBuffer(buffer)` explicitly executes the superclass's implementation. Calling `this.` causes infinite recursion.",
    "Overridden Base Call via super Qualifier", "scenario", "easy",
    "Correctly invoked superclass method version using `super.`.",
    "Use `super.method(args)` to execute the superclass version from within an override."
)

add_q(
    "A logistics shipping simulator has `Vehicle` and `Ship`. If `Ship` extends `Vehicle`, why can a variable of type `Vehicle` hold a `Ship` object (`Vehicle v = new Ship();`)?",
    [
        "Because Java ignores types",
        "Because inheritance establishes an 'is-a' relationship: every Ship IS A Vehicle, making upcasting implicit and safe",
        "Because Ship is converted to double",
        "Only if Ship implements Runnable"
    ],
    1,
    "Inheritance guarantees that a subclass instance satisfies all contracts of its superclass, making upcasting (`Vehicle v = new Ship();`) implicit, type-safe, and natural.",
    "Liskov Substitutability in Upcasting", "scenario", "easy",
    "Understands that inheritance guarantees safe polymorphic upcasting.",
    "Inheritance models 'is-a'; subclasses can always be implicitly assigned to superclass references."
)

add_q(
    "A team develops a drawing application. Shapes are stored in a list: `List<Shape> shapes`. When iterating `for (Shape s : shapes) s.draw();`, why does each shape draw its own correct form (Circle, Square, Triangle) without any `if-else` type checks?",
    [
        "Java has a built-in AI engine",
        "Dynamic method dispatch (runtime polymorphism): the JVM executes the specific overridden `draw()` method belonging to the actual runtime instance on the heap",
        "Shapes are sorted by area",
        "All shapes have the same code"
    ],
    1,
    "Dynamic method binding automatically dispatches method calls to the actual object's overridden method at runtime, eliminating cumbersome and fragile `if-else` type checking ladders.",
    "Dynamic Polymorphism Eliminates Type Ladders", "scenario", "medium",
    "Recognized that dynamic method dispatch eliminates fragile if-else type checking.",
    "Dynamic polymorphism dispatches to the runtime object's override, eliminating conditional branching."
)

add_q(
    "A developer designs a `SecureVault` class. To prevent inheritance, the developer makes the class `final`. What additional benefit does making the class `final` provide?",
    [
        "All methods in a `final` class are implicitly `final`, allowing the JIT compiler to optimize and inline method calls aggressively because no overriding can ever occur",
        "Vault contents are encrypted by hardware",
        "No memory is used",
        "Constructors run on separate threads"
    ],
    0,
    "Because no subclass can override methods in a `final` class, all methods are implicitly final. The JVM JIT compiler can aggressively inline method call sites without deoptimization guards.",
    "JIT Optimization of Final Classes", "scenario", "hard",
    "Understands JIT compiler inlining optimizations enabled by final classes.",
    "Final classes allow the JIT compiler to aggressively inline methods without deoptimization checks."
)

add_q(
    "A financial ledger tracks account transactions. The `Transaction` class has `id`, `amount`, and `timestamp`. Why should `equals(Object o)` compare only `id` if IDs are guaranteed unique across the enterprise?",
    [
        "Comparing only the unique business identifier (ID) is fast, deterministic, and aligns with domain entity identity semantics",
        "amount cannot be compared",
        "timestamp is random",
        "Java prohibits comparing multiple fields in equals"
    ],
    0,
    "In domain-driven design, entities with unique identifiers (like database primary keys or UUIDs) define equality based on that unique key, avoiding redundant comparisons of mutable attributes.",
    "Entity Identity Equality Pattern", "scenario", "easy",
    "Applied unique identifier equality pattern for enterprise domain entities.",
    "Entities with guaranteed unique IDs can define equality based solely on that identifier."
)

add_q(
    "A student creates a `Car` class extending `Vehicle`. In `main`: `Car c = new Car(); Vehicle v = c;`. How many total objects were allocated on the heap?",
    [
        "Two separate objects: one Vehicle and one Car",
        "Exactly ONE object: a single `Car` object that contains inherited `Vehicle` state in memory, with two reference variables pointing to it",
        "Zero objects",
        "Three objects"
    ],
    1,
    "`new Car()` allocates exactly ONE unified object on the heap. `v` and `c` are simply two references with different compile-time types pointing to the same single object.",
    "Single Unified Heap Object in Inheritance", "scenario", "easy",
    "Understands that subclass instantiation creates a single unified object on the heap.",
    "Instantiating a subclass allocates a single object on the heap containing all inherited state."
)

with open("scratch/ch7.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Generated {len(questions)} questions for Chapter 7!")
