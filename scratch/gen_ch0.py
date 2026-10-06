# -*- coding: utf-8 -*-
"""Generate 100 questions for Chapter 0 (Start here: Java Overview & Architecture)"""
import json

questions = []

def add_q(q, options, answer, explain, topic, q_type, level, strength, weakness):
    assert len(options) == 4, f"Options must be 4: {q}"
    assert 0 <= answer <= 3, f"Answer must be 0-3: {q}"
    assert q_type in ["theory", "error", "output", "scenario"]
    assert level in ["easy", "medium", "hard"]
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

# ==========================================
# 1. THEORETICAL CONCEPTS (25 Questions)
# ==========================================
add_q(
    "What is the primary role of the Java Virtual Machine (JVM)?",
    [
        "To compile Java source code (.java) directly into assembly code",
        "To execute compiled Java bytecode (.class) on a specific operating system",
        "To format source code according to style conventions",
        "To act as a physical microprocessor inside Java-certified computers"
    ],
    1,
    "The JVM acts as an abstract computing machine that interprets and compiles Java bytecode into machine instructions suitable for the host operating system.",
    "JVM Architecture", "theory", "easy",
    "Solid understanding of the JVM's core runtime execution role.",
    "Review how the JVM abstracts underlying hardware to provide platform independence."
)

add_q(
    "Which component is responsible for compiling `.java` source code into `.class` bytecode?",
    [
        "The JVM (Java Virtual Machine)",
        "The JRE (Java Runtime Environment)",
        "The Java Compiler (`javac`)",
        "The JIT (Just-In-Time) compiler"
    ],
    2,
    "`javac` is the command-line compiler included in the JDK that translates human-readable `.java` source code into platform-neutral bytecode.",
    "JDK & Compilation Tools", "theory", "easy",
    "You accurately identified the role of the `javac` compiler.",
    "Remember that `javac` compiles source code, while `java` launches the JVM to run bytecode."
)

add_q(
    "What does the famous Java slogan 'WORA' stand for?",
    [
        "Write Once, Run Anywhere",
        "Windows Only, Reliable Always",
        "Web Oriented, Runtime Accessible",
        "Work Online, Render Anywhere"
    ],
    0,
    "'Write Once, Run Anywhere' illustrates Java's cross-platform portability through bytecode executed on platform-specific JVMs.",
    "Java Portability Philosophy", "theory", "easy",
    "You understand Java's platform-independent design philosophy.",
    "Review how intermediate bytecode enables 'Write Once, Run Anywhere'."
)

add_q(
    "Which package is automatically imported into every Java program without an explicit `import` statement?",
    [
        "java.util",
        "java.io",
        "java.lang",
        "java.net"
    ],
    2,
    "`java.lang` contains foundational classes such as `System`, `String`, `Math`, and `Object`, and is imported by default by the compiler.",
    "Java Standard Library", "theory", "easy",
    "Good grasp of default library imports in Java.",
    "Remember that `java.lang` is the only package imported implicitly."
)

add_q(
    "What is the relationship between JDK, JRE, and JVM?",
    [
        "JVM contains JRE, and JRE contains JDK",
        "JRE contains JDK, and JDK contains JVM",
        "JDK contains JRE and development tools; JRE contains JVM and runtime libraries",
        "JDK, JRE, and JVM are completely independent programs with no overlapping libraries"
    ],
    2,
    "JDK = JRE + Development Tools (javac, javadoc). JRE = JVM + Standard Class Libraries.",
    "JDK vs JRE vs JVM", "theory", "medium",
    "Clear understanding of the software hierarchy in the Java ecosystem.",
    "Review the nesting structure: JDK encompasses JRE, which encompasses JVM."
)

add_q(
    "What is the function of the Just-In-Time (JIT) compiler in the JVM?",
    [
        "It translates source code into bytecode before deployment",
        "It compiles frequently executed bytecode sequences into native machine code at runtime",
        "It validates that code contains no syntax errors during typing",
        "It packages multiple `.class` files into an executable `.jar` file"
    ],
    1,
    "The JIT compiler analyzes running bytecode ('hot spots') and compiles frequently executed sections directly into native CPU code to optimize execution speed.",
    "JIT Optimization", "theory", "medium",
    "You understand how the JIT compiler boosts Java runtime performance.",
    "Study how the JVM combines bytecode interpretation with JIT native compilation."
)

add_q(
    "Why must the `main` method in standard Java applications be declared as `static`?",
    [
        "So that its return value cannot be modified by subclasses",
        "Because the JVM needs to invoke it without instantiating an object of the enclosing class",
        "To ensure that only one thread can execute it simultaneously",
        "To force all variables declared inside it to be stored in global memory"
    ],
    1,
    "The JVM launches the application before any objects exist, so `main` must be `static` so it can be called directly via the class name.",
    "Main Method Contract", "theory", "medium",
    "Strong grasp of why static methods exist and how the JVM bootstraps execution.",
    "Recall that static members belong to the class, not to any individual instance."
)

add_q(
    "Which of the following is a VALID Java identifier?",
    [
        "2ndCounter",
        "_user$score_99",
        "final-score",
        "default"
    ],
    1,
    "Java identifiers can start with a letter, an underscore (`_`), or a dollar sign (`$`), followed by letters, digits, underscores, or dollar signs. They cannot start with a digit, contain hyphens, or match reserved keywords.",
    "Identifier Rules", "theory", "easy",
    "You accurately recognized the character rules for valid identifiers.",
    "Remember: no digits at the start, no hyphens, and no reserved keywords like `default`."
)

add_q(
    "What is the extension of compiled Java bytecode files?",
    [
        ".java",
        ".class",
        ".exe",
        ".jvm"
    ],
    1,
    "Java source files have the `.java` extension, while compiled bytecode files generated by `javac` have the `.class` extension.",
    "File Extensions", "theory", "easy",
    "Correct understanding of Java compilation artifacts.",
    "Remember: .java is source code, .class is bytecode."
)

add_q(
    "What occurs during the bytecode verification step inside the JVM ClassLoader subsystem?",
    [
        "The compiler optimizes loops to run faster",
        "The verifier checks that bytecode adheres to JVM safety and security constraints before execution",
        "The OS assigns physical memory addresses to all static fields",
        "Source code comments are parsed into HTML documentation"
    ],
    1,
    "Bytecode verification ensures the code does not violate memory access rules, overflow operand stacks, or attempt illegal type conversions.",
    "ClassLoader & Security", "theory", "hard",
    "Advanced insight into JVM bytecode security verification.",
    "Review the role of the Bytecode Verifier in Java's sandbox security model."
)

add_q(
    "Which Java naming convention is standard for classes?",
    [
        "camelCase (e.g., studentRecord)",
        "PascalCase / UpperCamelCase (e.g., StudentRecord)",
        "snake_case (e.g., student_record)",
        "SCREAMING_SNAKE_CASE (e.g., STUDENT_RECORD)"
    ],
    1,
    "Java conventions dictate PascalCase (UpperCamelCase) for classes and interfaces, lowerCamelCase for variables and methods, and SCREAMING_SNAKE_CASE for constants.",
    "Naming Conventions", "theory", "easy",
    "You know standard Java code naming conventions.",
    "Remember: Classes use UpperCamelCase, variables/methods use lowerCamelCase."
)

add_q(
    "What is the exact return type required for the standard Java entry point `public static ... main(String[] args)`?",
    [
        "int",
        "boolean",
        "void",
        "String"
    ],
    2,
    "The main method must return `void`. Unlike C/C++, Java does not return an integer exit code from `main`; `System.exit(int status)` is used if an exit code is needed.",
    "Main Method Signature", "theory", "easy",
    "Correct identification of `void` as the main method return type.",
    "Remember that `main` in Java never returns an int; it returns `void`."
)

add_q(
    "What is automatic garbage collection in Java?",
    [
        "A process that deletes compiled `.class` files after execution finishes",
        "A runtime mechanism that automatically reclaims heap memory occupied by unreferenced objects",
        "A compiler pass that removes unused variables from the source code",
        "A tool that clears IDE cache files periodically"
    ],
    1,
    "Garbage collection runs in the background of the JVM to identify and deallocate objects in heap memory that are no longer reachable by any active reference.",
    "Garbage Collection", "theory", "medium",
    "You understand Java's automatic memory management philosophy.",
    "Review how the Garbage Collector scans the heap for unreferenced objects."
)

add_q(
    "Can a single `.java` source file contain multiple `public` classes?",
    [
        "Yes, as long as they all have unique names",
        "Yes, provided they all define a `main` method",
        "No, at most one class in a source file can be declared `public`, and its name must match the filename",
        "No, Java source files cannot contain more than one class under any circumstances"
    ],
    2,
    "A `.java` file can contain multiple non-public (package-private) classes, but at most one `public` class, whose name must match the file's base name.",
    "Class and File Structure", "theory", "medium",
    "Accurate understanding of Java source file structure constraints.",
    "Remember: Maximum of 1 `public` class per `.java` file, matching the filename."
)

add_q(
    "What is the purpose of the `javadoc` tool?",
    [
        "To convert Java source code to C++",
        "To generate standardized HTML documentation from documentation comments (`/** ... */`)",
        "To verify that all classes implement required interfaces",
        "To package compiled classes into ZIP files"
    ],
    1,
    "`javadoc` parses source files and extracts tags (such as `@param`, `@return`, `@author`) inside `/** ... */` blocks to build HTML documentation.",
    "Javadoc Documentation", "theory", "easy",
    "You know the role of javadoc in generating project documentation.",
    "Recall that javadoc uses `/** ... */` syntax."
)

add_q(
    "Which area of JVM memory stores local variables and method invocation frames?",
    [
        "The Heap",
        "The Method Area / Metaspace",
        "The Java Virtual Machine Stack",
        "The Native Method Stack"
    ],
    2,
    "Each thread has a private JVM Stack that stores stack frames containing local variables, partial results, and method invocation/return details.",
    "JVM Memory Model", "theory", "hard",
    "Excellent knowledge of JVM memory regions (Stack vs Heap).",
    "Remember: local variables live on the Stack; object instances live on the Heap."
)

add_q(
    "Where are object instances and their instance variables allocated in the JVM?",
    [
        "On the Call Stack",
        "Inside the Heap",
        "Inside the CPU registers permanently",
        "Inside the ClassLoader cache"
    ],
    1,
    "All Java objects and arrays are dynamically allocated on the Heap, which is shared among all threads and managed by the Garbage Collector.",
    "JVM Memory Model", "theory", "medium",
    "You know that objects are created in the Heap.",
    "Remember: `new` always allocates memory on the Heap."
)

add_q(
    "What happens when the `java` launcher command is run without specifying an existing class name?",
    [
        "It compiles all `.java` files in the current folder",
        "It displays launcher usage and command-line options help",
        "It launches an interactive Java GUI editor",
        "It deletes all `.class` files in the directory"
    ],
    1,
    "Running `java` with no arguments outputs the command usage, flags, and syntax options.",
    "Command-Line Tools", "theory", "easy",
    "You recognize basic command-line CLI tool responses.",
    "Review `java` launcher flags and CLI arguments."
)

add_q(
    "What is the key difference between single-line comments and multi-line comments in Java?",
    [
        "Single-line comments start with `//` and extend to line end; multi-line comments use `/* ... */`",
        "Single-line comments are compiled into bytecode; multi-line comments are ignored",
        "Multi-line comments can be nested indefinitely inside other multi-line comments",
        "Single-line comments can only appear inside method bodies"
    ],
    0,
    "`//` comments out the remainder of the line. `/* ... */` comments out everything between the delimiters. Note that multi-line comments cannot be nested.",
    "Comment Syntax", "theory", "easy",
    "Correct understanding of comment delimiters in Java.",
    "Remember: multi-line comments `/* ... */` cannot be nested inside each other."
)

add_q(
    "Why are Java bytecode files considered platform-independent while the JVM itself is platform-dependent?",
    [
        "Bytecode contains native Windows machine code; the JVM converts it to Linux code",
        "Bytecode conforms to a standardized universal instruction set; each OS requires a custom JVM built for its specific architecture",
        "Bytecode is plain text that can be read by any text processor; the JVM is proprietary software",
        "Bytecode is compiled on the client machine; the JVM runs strictly in cloud servers"
    ],
    1,
    "The bytecode specification is identical across all systems. However, executing that bytecode on Windows x86 requires a different JVM binary than on macOS ARM64.",
    "Platform Independence", "theory", "medium",
    "Strong grasp of the dichotomy between universal bytecode and native JVM implementations.",
    "Remember: Bytecode is universal; the JVM is native to each OS/architecture."
)

add_q(
    "Which of the following keywords is NOT a valid reserved keyword in modern Java?",
    [
        "goto",
        "const",
        "include",
        "transient"
    ],
    2,
    "`include` is used in C/C++, not Java (Java uses `import`). `goto` and `const` are reserved keywords in Java (though unused). `transient` is a valid keyword for serialization.",
    "Reserved Keywords", "theory", "medium",
    "You accurately identified Java reserved keywords vs C/C++ keywords.",
    "Note that `goto` and `const` are reserved words in Java, while `include` is not."
)

add_q(
    "What is the significance of the `CLASSPATH` environment variable in Java?",
    [
        "It tells the operating system where to find the `javac` executable file",
        "It tells the JVM and compiler where to look for user-defined `.class` files and packages",
        "It specifies the installation folder of the Java Development Kit",
        "It forces the JVM to reserve a fixed amount of RAM for the heap"
    ],
    1,
    "`CLASSPATH` tells the compiler and JVM where to locate class files and libraries when loading classes outside the default JDK library.",
    "Environment Variables", "theory", "hard",
    "Good understanding of CLASSPATH vs PATH environment variables.",
    "Remember: PATH locates executables (`javac`, `java`); CLASSPATH locates `.class` and `.jar` libraries."
)

add_q(
    "What is the default value of uninitialized local variables declared inside a method?",
    [
        "0 for primitives, null for objects",
        "Empty string `\"\"`",
        "They have no default value and cause a compiler error if accessed before assignment",
        "false"
    ],
    2,
    "Unlike fields (class/instance variables), local variables in Java do NOT receive default values. Accessing an uninitialized local variable is a compile-time error.",
    "Variable Initialization", "theory", "medium",
    "You avoided the classic trap: local variables have NO default values.",
    "Always remember: fields get default values (0, null, false); local variables must be initialized before use."
)

add_q(
    "Which of the following is true regarding case-sensitivity in Java?",
    [
        "Java is case-insensitive; `Main` and `main` are completely equivalent",
        "Only class names are case-sensitive; variable names are case-insensitive",
        "Java is strictly case-sensitive for all identifiers, keywords, and class names",
        "Keywords are case-insensitive, but method names are case-sensitive"
    ],
    2,
    "Java is entirely case-sensitive. `System` is not the same as `system`, and `void` is not the same as `Void`.",
    "Case Sensitivity", "theory", "easy",
    "You recognize that Java enforces strict case-sensitivity across all tokens.",
    "Remember: Java treats `MyClass`, `myclass`, and `MYCLASS` as completely distinct identifiers."
)

add_q(
    "What is the purpose of the `package` statement at the top of a Java source file?",
    [
        "To compile the source code into a standalone executable file",
        "To define the namespace and folder hierarchy where the class belongs",
        "To import third-party libraries from the internet automatically",
        "To instruct the Garbage Collector to clean up unused memory"
    ],
    1,
    "A `package` statement groups related classes, prevents naming collisions, and maps to the directory structure on the filesystem.",
    "Packages & Namespaces", "theory", "medium",
    "Good understanding of Java package architecture and namespacing.",
    "Review how package statements structure enterprise codebases."
)

# ==========================================
# 2. ERROR IDENTIFICATION (25 Questions)
# ==========================================
add_q(
    "What compilation error occurs in this code snippet?\n```java\npublic class Test {\n    public void main(String[] args) {\n        System.out.println(\"Hello\");\n    }\n}\n```",
    [
        "Syntax error: `println` requires uppercase `Println`",
        "No compilation error, but running `java Test` fails to find the main method because `static` is missing",
        "Compilation error: `String[] args` must be renamed to `String args`",
        "Compilation error: `Test` cannot have a public method"
    ],
    1,
    "The code compiles cleanly because it is a valid instance method. However, attempting to run `java Test` produces a runtime error: 'Main method is not static in class Test'.",
    "Main Method Signatures", "error", "medium",
    "You accurately differentiated between compile-time validity and main method launch requirements.",
    "Remember: A missing `static` compiles, but the JVM cannot launch it as the entry point."
)

add_q(
    "What error will the compiler report for the following code?\n```java\npublic class Welcome {\n    public static void main(String[] args) {\n        int 1stScore = 95;\n        System.out.println(1stScore);\n    }\n}\n```",
    [
        "Uninitialized variable error",
        "Invalid identifier error: identifiers cannot begin with a digit",
        "Type mismatch: integer cannot be assigned to 1stScore",
        "Missing semicolon after class declaration"
    ],
    1,
    "Java identifiers cannot start with a digit. `1stScore` violates language identifier syntax rules.",
    "Identifier Syntax Errors", "error", "easy",
    "You caught the invalid identifier starting with a digit.",
    "Identifiers must begin with a letter, `$`, or `_`."
)

add_q(
    "Identify the compilation error in the following code:\n```java\npublic class Example {\n    public static void main(String[] args) {\n        int x;\n        System.out.println(x);\n    }\n}\n```",
    [
        "Variable x is out of scope",
        "Variable x might not have been initialized",
        "x cannot be printed using println",
        "main method cannot declare primitive variables"
    ],
    1,
    "Local variable `x` is declared but never assigned a value before being read by `println`, triggering: `variable x might not have been initialized`.",
    "Uninitialized Local Variables", "error", "easy",
    "You correctly identified the uninitialized local variable compile-time error.",
    "Remember: local variables must be assigned a value before they are read."
)

add_q(
    "What is wrong with this file if it is saved as `MainApp.java`?\n```java\npublic class Runner {\n    public static void main(String[] args) {\n        System.out.println(\"Running...\");\n    }\n}\n```",
    [
        "A class named Runner cannot contain a main method",
        "Compilation error: class Runner is public, should be declared in a file named Runner.java",
        "The file must be named `Runner.class`",
        "No error; the file name does not need to match the public class name"
    ],
    1,
    "In Java, a public top-level class must be saved in a source file matching its exact name with `.java` extension.",
    "File Naming Constraints", "error", "easy",
    "You spotted the mismatch between the public class name and file name.",
    "A public class `Runner` MUST reside in `Runner.java`."
)

add_q(
    "What error occurs in this snippet?\n```java\npublic class PrintDemo {\n    public static void main(String[] args) {\n        System.out.println(\"Hello World);\n    }\n}\n```",
    [
        "Missing closing double quote resulting in an unclosed string literal error",
        "System is not capitalized properly",
        "main method must return a String",
        "println cannot take String arguments"
    ],
    0,
    "The string literal `\"Hello World)` is missing its closing quote `\"`, causing an 'unclosed string literal' compile-time error.",
    "String Literal Syntax", "error", "easy",
    "You correctly caught the unclosed string literal.",
    "String literals in Java must be enclosed by matching double quotes on the same line."
)

add_q(
    "Identify the compiler error in this code:\n```java\npublic class KeywordTest {\n    public static void main(String[] args) {\n        int class = 10;\n        System.out.println(class);\n    }\n}\n```",
    [
        "`class` is a reserved keyword and cannot be used as a variable identifier",
        "Integer variables cannot be printed directly",
        "The main method cannot contain integer variables",
        "`class` must be declared as `public`"
    ],
    0,
    "`class` is a reserved keyword in Java used for declaring classes, so it cannot be used as an identifier.",
    "Reserved Keyword Misuse", "error", "easy",
    "You correctly identified that `class` is a reserved keyword.",
    "Never use reserved keywords like `class`, `public`, `return`, or `for` as variable names."
)

add_q(
    "What error occurs when compiling this code?\n```java\npublic class Comments {\n    public static void main(String[] args) {\n        /* Outer comment /* Inner comment */ still in comment? */\n        System.out.println(\"Done\");\n    }\n}\n```",
    [
        "No error, nested comments are completely legal in Java",
        "Syntax error: multi-line comments `/* ... */` cannot be nested in Java",
        "System.out.println is commented out accidentally",
        "Comments require double slashes inside methods"
    ],
    1,
    "In Java, multi-line comments do not nest. The first `*/` terminates the comment block, leaving the trailing `still in comment? */` as invalid Java syntax.",
    "Nested Comment Errors", "error", "medium",
    "You recognized that Java multi-line comments cannot be nested.",
    "The first `*/` closes the comment regardless of how many `/*` preceded it."
)

add_q(
    "What compiler error will be generated here?\n```java\npublic class ScopeCheck {\n    System.out.println(\"Direct code\");\n    public static void main(String[] args) {}\n}\n```",
    [
        "Missing main method",
        "Executable statements cannot be placed directly inside a class body outside a method or block",
        "`System` cannot be called before `main`",
        "String literals cannot be passed to println outside static methods"
    ],
    1,
    "Executable statements like `System.out.println(...)` must reside inside a method, constructor, or initialization block, not directly inside the class body.",
    "Class Body Structure", "error", "medium",
    "You spotted the executable statement placed directly in the class body.",
    "Statements like method calls must be inside methods, constructors, or initializer blocks."
)

add_q(
    "What error occurs in this code?\n```java\npublic class SemicolonTrap {\n    public static void main(String[] args)\n        System.out.println(\"Testing\");\n}\n```",
    [
        "Missing semicolon after method header",
        "Missing opening curly brace `{` for the main method body",
        "Testing must be enclosed in single quotes",
        "The class must be abstract"
    ],
    1,
    "A method with an implementation must enclose its body in curly braces `{ ... }`.",
    "Method Body Syntax", "error", "easy",
    "You spotted the missing curly brace for the method body.",
    "Methods require curly braces to define their execution scope."
)

add_q(
    "What error occurs when compiling this class?\n```java\npublic class Duplicate {\n    public static void main(String[] args) {\n        int count = 5;\n        double count = 10.5;\n        System.out.println(count);\n    }\n}\n```",
    [
        "Count cannot be cast to double",
        "Variable `count` is already defined in the scope of `main`",
        "Local variables cannot be declared twice in different classes",
        "println cannot resolve ambiguous variables"
    ],
    1,
    "You cannot declare two variables with the same identifier in the same scope, even if their data types differ.",
    "Variable Scope Redefinition", "error", "easy",
    "You caught the duplicate variable declaration in the same local scope.",
    "Identifiers within the same scope must be unique."
)

add_q(
    "What error occurs in this code?\n```java\npublic class CharEscape {\n    public static void main(String[] args) {\n        char c = '\\c';\n        System.out.println(c);\n    }\n}\n```",
    [
        "Character constants cannot use single quotes",
        "Illegal escape character `\\c` in character literal",
        "`char` cannot be printed to console",
        "Missing double quotes for string formatting"
    ],
    1,
    "`\\c` is not a valid escape sequence in Java (valid ones include `\\n`, `\\t`, `\\b`, `\\r`, `\\f`, `\\'`, `\\\"`, `\\\\`).",
    "Escape Sequence Validation", "error", "medium",
    "You spotted the invalid escape character sequence.",
    "Only specific escape characters like `\\n`, `\\t`, `\\\\`, `\\'` are valid in Java."
)

add_q(
    "What is the error in the following package statement?\n```java\nimport java.util.Scanner;\npackage com.study.java;\npublic class App {}\n```",
    [
        "`Scanner` cannot be imported before `App`",
        "The `package` statement must be the very first non-comment statement in a Java source file",
        "Package names cannot use dots",
        "App must be declared as private"
    ],
    1,
    "If a package statement is present, it MUST appear as the very first token in the file (excluding comments). It cannot follow `import` statements.",
    "Package Statement Placement", "error", "medium",
    "You caught the illegal ordering of package and import statements.",
    "File structure order: package statement first, then imports, then class declarations."
)

add_q(
    "What error occurs here?\n```java\npublic class MainEntry {\n    public static int main(String[] args) {\n        System.out.println(\"Starting...\");\n        return 0;\n    }\n}\n```",
    [
        "Compilation error: main cannot return an integer in Java",
        "The code compiles, but the JVM will not accept it as the application entry point because `main` must return `void`",
        "The code compiles and runs successfully, returning exit code 0 to the OS",
        "Missing arguments array in main header"
    ],
    1,
    "The code compiles without syntax errors as a regular method named `main`. But when running `java MainEntry`, the JVM fails with 'Main method must return a value of type void'.",
    "Main Method Return Type", "error", "medium",
    "You distinguished between compile-time acceptance and JVM entry-point conformance.",
    "The JVM specifically looks for `public static void main(String[] args)`."
)

add_q(
    "What happens when compiling this code?\n```java\npublic class ConstCheck {\n    public static void main(String[] args) {\n        const int SPEED = 100;\n        System.out.println(SPEED);\n    }\n}\n```",
    [
        "Compiles and prints 100",
        "Compilation error: `const` is a reserved word, but constants in Java must be declared with `final`",
        "Compilation error: constants must be declared outside methods",
        "Compiles with a deprecation warning"
    ],
    1,
    "`const` is a reserved keyword in Java inherited from C++, but it has no function. Java uses the `final` keyword to declare constants.",
    "Constant Declaration Syntax", "error", "medium",
    "You recognized that Java uses `final`, not `const`, for constants.",
    "In Java, constants are declared using `final int SPEED = 100;`."
)

add_q(
    "What error does the compiler produce here?\n```java\npublic class MultiLineStr {\n    public static void main(String[] args) {\n        String msg = \"Hello\nWorld\";\n        System.out.println(msg);\n    }\n}\n```",
    [
        "Unclosed string literal error: standard string literals cannot span multiple lines without concatenation or escape sequences",
        "Missing semicolon after Hello",
        "World is recognized as an uninitialized variable",
        "Strings cannot contain newline characters"
    ],
    0,
    "Standard double-quoted string literals in Java cannot span raw line breaks. You must either use `\\n` or text blocks `\"\"\" ... \"\"\"` (Java 15+).",
    "String Literal Line Breaks", "error", "medium",
    "You caught the multi-line string literal error.",
    "Standard string literals must be completed on the same line or use `\\n`."
)

add_q(
    "What error occurs in this code?\n```java\npublic class BadImport {\n    import java.util.*;\n    public static void main(String[] args) {}\n}\n```",
    [
        "Wildcard imports `*` are illegal in Java",
        "`import` statements cannot be placed inside a class definition",
        "java.util does not contain any classes",
        "The main method cannot follow an import"
    ],
    1,
    "`import` statements must be placed outside and before class definitions, not inside the class body.",
    "Import Statement Scope", "error", "easy",
    "You correctly identified the misplaced import statement inside a class.",
    "Imports belong at the top of the file, outside any class braces."
)

add_q(
    "What error is present in this method declaration?\n```java\npublic class ParamError {\n    public static void run(int a, b) {\n        System.out.println(a + b);\n    }\n}\n```",
    [
        "Methods cannot accept two parameters",
        "Syntax error: every parameter must explicitly specify its data type (should be `int a, int b`)",
        "Parameters cannot use lowercase letters",
        "Missing return type"
    ],
    1,
    "Unlike variable declarations where you can write `int a, b;`, method parameters require a distinct data type for every parameter: `int a, int b`.",
    "Parameter Declaration Syntax", "error", "medium",
    "You caught the missing data type in the parameter list.",
    "In Java, each method parameter must have its own type specification: `(int a, int b)`."
)

add_q(
    "What error occurs in this code?\n```java\npublic class BadBrace {\n    public static void main(String[] args) {\n        System.out.println(\"Start\");\n    \n}\n```",
    [
        "Missing closing curly brace `}` for the `main` method or class",
        "Missing semicolon after main",
        "String literal syntax error",
        "No error"
    ],
    0,
    "There are two opening braces `{` (for class and method) but only one closing brace `}`, causing an 'reached end of file while parsing' syntax error.",
    "Mismatched Curly Braces", "error", "easy",
    "You caught the mismatched curly brace.",
    "Every opening brace `{` must have a matching closing brace `}`."
)

add_q(
    "What compiler error is reported here?\n```java\npublic class CastError {\n    public static void main(String[] args) {\n        int x = (int) \"100\";\n        System.out.println(x);\n    }\n}\n```",
    [
        "ClassCastException at runtime",
        "Compile-time error: inconvertible types; cannot cast `java.lang.String` to `int`",
        "NumberFormatException at compile time",
        "Compiles cleanly and prints 100"
    ],
    1,
    "A `String` cannot be explicitly cast to a primitive `int` because they are inconvertible types. To parse a string into an integer, `Integer.parseInt(\"100\")` must be used.",
    "Invalid Type Casting", "error", "hard",
    "You correctly identified that primitive casting `(int)` cannot be applied to Strings.",
    "Use `Integer.parseInt(str)` instead of casting `(int) str`."
)

add_q(
    "What error will occur when compiling this code?\n```java\npublic class VarMistake {\n    public static void main(String[] args) {\n        int public = 50;\n        System.out.println(public);\n    }\n}\n```",
    [
        "Cannot use modifier `public` in local variable declaration",
        "`public` is an invalid identifier because it is a reserved access modifier keyword",
        "Missing semicolon",
        "Variable must be declared as static"
    ],
    1,
    "`public` is a reserved keyword in Java, so it cannot be used as an identifier name.",
    "Reserved Words as Identifiers", "error", "easy",
    "You correctly recognized that `public` is a reserved keyword.",
    "Never name variables with Java keywords."
)

add_q(
    "What compilation error occurs here?\n```java\npublic class ReturnVoid {\n    public static void main(String[] args) {\n        return 5;\n    }\n}\n```",
    [
        "cannot return a value from a method with void result type",
        "main method cannot have a return statement",
        "5 must be cast to void",
        "return statement must be enclosed in parentheses"
    ],
    0,
    "A method with return type `void` cannot return any value. A bare `return;` is allowed, but returning an expression like `5` is a compile-time error.",
    "Void Return Mismatch", "error", "easy",
    "You recognized that void methods cannot return a value.",
    "Void methods can only use `return;` without any value."
)

add_q(
    "What error does the compiler report here?\n```java\npublic class CaseMistake {\n    Public static void main(String[] args) {\n        System.out.println(\"Hi\");\n    }\n}\n```",
    [
        "Public is not a valid modifier keyword (Java keywords must be entirely lowercase: `public`)",
        "Hi must be in double quotes",
        "main must be capitalized",
        "No error"
    ],
    0,
    "All Java keywords are lowercase. `Public` with a capital 'P' is treated as an unknown identifier or class type, causing a compilation error.",
    "Keyword Casing Errors", "error", "easy",
    "You caught the capitalized keyword `Public`.",
    "Java keywords are strictly lowercase: `public`, `static`, `void`."
)

add_q(
    "What error occurs in this file?\n```java\n// File: Calculation.java\npublic class MathHelper {}\npublic class LogicHelper {}\n```",
    [
        "A Java source file can contain at most one `public` class",
        "MathHelper cannot be public because Math is a reserved word",
        "Both classes must have a main method",
        "Classes cannot be empty"
    ],
    0,
    "A single `.java` file cannot contain more than one top-level `public` class. Furthermore, the public class name must match the filename `Calculation.java`.",
    "Multiple Public Classes", "error", "medium",
    "You caught the duplicate public class error in a single file.",
    "Rule: Maximum 1 public class per file, matching the file name."
)

add_q(
    "What is the error in the following snippet?\n```java\npublic class ArgsError {\n    public static void main(String args) {\n        System.out.println(args);\n    }\n}\n```",
    [
        "The code fails to compile because args must be an array",
        "The code compiles cleanly, but running it causes the JVM to report that no valid `main(String[] args)` entry point was found",
        "println cannot print single String parameters",
        "args cannot be used as a parameter name"
    ],
    1,
    "The code is syntactically valid Java, so it compiles. But the JVM launcher specifically searches for `main(String[] args)` (an array of Strings), so it will not launch.",
    "Main Method Parameter Signature", "error", "medium",
    "You correctly recognized that `main` must take `String[] args`, not `String args`.",
    "The standard entry point requires an array of Strings: `String[] args`."
)

add_q(
    "What compiler error occurs in this code?\n```java\npublic class DotError {\n    public static void main(String[] args) {\n        System.out,println(\"Typo\");\n    }\n}\n```",
    [
        "Illegal comma separator instead of dot between `out` and `println`",
        "Typo cannot be printed",
        "Missing semicolon after Typo",
        "main method cannot take String array"
    ],
    0,
    "`System.out,println` contains a comma instead of a period, causing an invalid syntax compile-time error.",
    "Syntax Punctuation Errors", "error", "easy",
    "You caught the comma typo instead of dot operator.",
    "Member access in Java uses dots: `System.out.println()`."
)

# ==========================================
# 3. CODE OUTPUT PREDICTION (25 Questions)
# ==========================================
add_q(
    "What is the output of the following code?\n```java\npublic class Output1 {\n    public static void main(String[] args) {\n        System.out.print(\"A\");\n        System.out.println(\"B\");\n        System.out.print(\"C\");\n    }\n}\n```",
    [
        "A\nB\nC",
        "AB\nC",
        "ABC",
        "A\nBC"
    ],
    1,
    "`print(\"A\")` outputs 'A' without newline. `println(\"B\")` prints 'B' and then moves to the next line. `print(\"C\")` prints 'C' on the new line.",
    "Print vs Println", "output", "easy",
    "You accurately traced the output stream line-break behavior.",
    "Remember: `print` stays on the same line, while `println` appends a newline."
)

add_q(
    "What is the output of the following code?\n```java\npublic class Concat1 {\n    public static void main(String[] args) {\n        System.out.println(\"Total: \" + 10 + 20);\n    }\n}\n```",
    [
        "Total: 30",
        "Total: 1020",
        "Total: 10 20",
        "Compile-time error"
    ],
    1,
    "Left-to-right evaluation: `\"Total: \" + 10` produces `\"Total: 10\"`. Then `\"Total: 10\" + 20` produces `\"Total: 1020\"` via string concatenation.",
    "String Concatenation Precedence", "output", "easy",
    "You mastered the left-to-right string concatenation rule.",
    "Because evaluation is left-to-right, numbers concatenated after a string become string characters."
)

add_q(
    "What is the output of the following code?\n```java\npublic class Concat2 {\n    public static void main(String[] args) {\n        System.out.println(10 + 20 + \" = Sum\");\n    }\n}\n```",
    [
        "1020 = Sum",
        "30 = Sum",
        "10 + 20 = Sum",
        "Compile-time error"
    ],
    1,
    "Evaluation goes left-to-right: `10 + 20` is evaluated as integer addition yielding `30`. Then `30 + \" = Sum\"` evaluates to `\"30 = Sum\"`.",
    "Arithmetic Precedence in Concatenation", "output", "easy",
    "You correctly identified integer addition before string concatenation.",
    "Left-to-right: arithmetic occurs first until a String operand is encountered."
)

add_q(
    "What is the output of the following code?\n```java\npublic class EscapeTest {\n    public static void main(String[] args) {\n        System.out.println(\"Hello\\\"World\\\"\");\n    }\n}\n```",
    [
        "Hello\\World\\",
        "Hello\"World\"",
        "Hello\\\"World\\\"",
        "HelloWorld"
    ],
    1,
    "The escape sequence `\\\"` prints a literal double quote character without terminating the string literal.",
    "Escape Sequence Output", "output", "easy",
    "You correctly interpreted the escaped double quote sequences.",
    "`\\\"` renders as a literal quote character inside string output."
)

add_q(
    "What is the output of the following code?\n```java\npublic class BackslashTest {\n    public static void main(String[] args) {\n        System.out.println(\"C:\\\\tools\\\\bin\");\n    }\n}\n```",
    [
        "C:\\tools\\bin",
        "C:\\\\tools\\\\bin",
        "C:toolsbin",
        "Compilation error: invalid escape sequence"
    ],
    0,
    "Each `\\\\` escape sequence prints a single backslash character.",
    "Backslash Escape Output", "output", "easy",
    "You correctly resolved the double backslash escape characters.",
    "`\\\\` prints one backslash."
)

add_q(
    "What is the output of this code when executed with `java App one two three`?\n```java\npublic class App {\n    public static void main(String[] args) {\n        System.out.println(args.length);\n    }\n}\n```",
    [
        "0",
        "1",
        "3",
        "4 (including App)"
    ],
    2,
    "In Java, command-line arguments are zero-indexed and do NOT include the class name itself. Passing `one two three` yields an array of length 3.",
    "Command Line Arguments", "output", "medium",
    "You know that `args` contains only the arguments passed to the class, not the class name.",
    "Unlike C/C++, Java's `args[0]` is the first actual parameter, not the program name."
)

add_q(
    "What is the output of the following code?\n```java\npublic class ArgsFirst {\n    public static void main(String[] args) {\n        System.out.println(args[0]);\n    }\n}\n```\nwhen executed as: `java ArgsFirst Alpha Beta`",
    [
        "ArgsFirst",
        "Alpha",
        "Beta",
        "Alpha Beta"
    ],
    1,
    "`args[0]` accesses the first argument after the class name, which is `Alpha`.",
    "Args Array Access", "output", "medium",
    "You accurately extracted the first command-line argument.",
    "Java command-line argument indexing starts with the first argument after the class name."
)

add_q(
    "What is the output of this code?\n```java\npublic class MathParentheses {\n    public static void main(String[] args) {\n        System.out.println(\"Result: \" + (10 + 20));\n    }\n}\n```",
    [
        "Result: 1020",
        "Result: 30",
        "Result: (10 + 20)",
        "Result: 10 + 20"
    ],
    1,
    "Parentheses force `10 + 20` to evaluate first as arithmetic (30). Then `\"Result: \" + 30` creates `\"Result: 30\"`.",
    "Parentheses Override", "output", "easy",
    "You understood how parentheses enforce arithmetic evaluation before concatenation.",
    "Parentheses have higher precedence and force addition before string concatenation."
)

add_q(
    "What is the output of the following code?\n```java\npublic class EmptyPrint {\n    public static void main(String[] args) {\n        System.out.print(\"Java\");\n        System.out.println();\n        System.out.print(\"Rock\");\n    }\n}\n```",
    [
        "JavaRock",
        "Java\nRock",
        "Java Rock",
        "Compilation error: println() requires arguments"
    ],
    1,
    "`System.out.println()` with no arguments prints an empty line (a newline character).",
    "Empty println Behavior", "output", "easy",
    "You know that calling `println()` without arguments simply prints a newline.",
    "`println()` is overloaded to accept 0 parameters to advance to the next line."
)

add_q(
    "What is the output of the following code?\n```java\npublic class TabPrint {\n    public static void main(String[] args) {\n        System.out.println(\"A\\tB\\nC\\tD\");\n    }\n}\n```",
    [
        "A B C D on a single line",
        "A and B separated by a tab on line 1, C and D separated by a tab on line 2",
        "A\\tB\\nC\\tD verbatim",
        "Compile-time error: invalid escape sequence"
    ],
    1,
    "`\\t` inserts a horizontal tab and `\\n` inserts a newline.",
    "Tab and Newline Output", "output", "easy",
    "You accurately traced tab and newline escape characters.",
    "`\\t` produces tab spacing and `\\n` breaks to a new line."
)

add_q(
    "What is the output of the following code?\n```java\npublic class MixedConcat {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 2;\n        System.out.println(a + b + \"-\" + a + b);\n    }\n}\n```",
    [
        "7-7",
        "7-52",
        "52-52",
        "52-7"
    ],
    1,
    "`a + b` evaluates to 7. `7 + \"-\"` gives `\"7-\"`. Then `\"7-\" + 5` gives `\"7-5\"`, and `\"7-5\" + 2` gives `\"7-52\"`.",
    "Mixed Concatenation Tracing", "output", "medium",
    "You accurately traced the multi-stage evaluation of mixed addition and string concatenation.",
    "Once a string is introduced, subsequent `+` operations become string concatenations."
)

add_q(
    "What is the output of this code?\n```java\npublic class NullString {\n    public static void main(String[] args) {\n        String s = null;\n        System.out.println(\"Value: \" + s);\n    }\n}\n```",
    [
        "Value: null",
        "NullPointerException",
        "Value: ",
        "Compilation error"
    ],
    0,
    "When a null reference is concatenated with a String, Java converts it to the string literal `\"null\"` without throwing a `NullPointerException`.",
    "Null String Concatenation", "output", "medium",
    "You correctly identified that concatenating a null reference converts it to the text 'null'.",
    "String concatenation safely converts null references to the string 'null'."
)

add_q(
    "What is the output of the following code?\n```java\npublic class CharPlusString {\n    public static void main(String[] args) {\n        char c = 'J';\n        System.out.println(c + \"ava\");\n    }\n}\n```",
    [
        "Java",
        "74ava",
        "Compilation error",
        "J ava"
    ],
    0,
    "Concatenating a char with a String converts the char to its string representation ('J' + \"ava\" -> \"Java\").",
    "Char String Concatenation", "output", "easy",
    "You recognized char-to-string concatenation.",
    "Concatenating a char with a String appends the character directly."
)

add_q(
    "What is the output of the following code?\n```java\npublic class CharPlusChar {\n    public static void main(String[] args) {\n        System.out.println('A' + 'B');\n    }\n}\n```",
    [
        "AB",
        "131",
        "A + B",
        "Compilation error: cannot add characters"
    ],
    1,
    "The `+` operator between two characters performs integer arithmetic on their ASCII/Unicode values ('A' is 65, 'B' is 66 -> 65 + 66 = 131).",
    "Char Arithmetic Promotion", "output", "hard",
    "You avoided the famous trap: 'A' + 'B' performs integer addition, not concatenation!",
    "Two chars with `+` promote to ints and add numeric code points (65 + 66 = 131)."
)

add_q(
    "What is the output of this code?\n```java\npublic class OrderOfInit {\n    static int x = 10;\n    public static void main(String[] args) {\n        int x = 20;\n        System.out.println(x);\n    }\n}\n```",
    [
        "10",
        "20",
        "0",
        "Compilation error: duplicate variable x"
    ],
    1,
    "The local variable `x` declared inside `main` shadows the static class field `x`, so `System.out.println(x)` prints the local variable value (20).",
    "Variable Shadowing", "output", "medium",
    "You understand local variable shadowing of class fields.",
    "A local variable takes precedence over a class field of the same name within its scope."
)

add_q(
    "What is the output of the following code?\n```java\npublic class PrintZero {\n    public static void main(String[] args) {\n        int a = 0;\n        System.out.print(a);\n        System.out.print(a + 1);\n    }\n}\n```",
    [
        "01",
        "0\n1",
        "1",
        "Compilation error"
    ],
    0,
    "Both statements use `print()`, which does not add a newline, outputting '0' and then '1' immediately following it.",
    "Sequential Print", "output", "easy",
    "You accurately predicted continuous output from multiple `print()` calls.",
    "`print()` outputs directly to standard out without trailing newlines."
)

add_q(
    "What is the output of this code?\n```java\npublic class BooleanPrint {\n    public static void main(String[] args) {\n        boolean flag = true;\n        System.out.println(\"Status: \" + flag);\n    }\n}\n```",
    [
        "Status: true",
        "Status: 1",
        "Status: TRUE",
        "Compilation error"
    ],
    0,
    "In Java, boolean values are converted to lowercase string literals `\"true\"` or `\"false\"` when concatenated with strings.",
    "Boolean String Representation", "output", "easy",
    "You know that Java booleans print as 'true' or 'false', not 1 or 0.",
    "Java booleans render as lowercase text 'true' or 'false'."
)

add_q(
    "What is the output of this code?\n```java\npublic class MultiPrint {\n    public static void main(String[] args) {\n        int count = 1;\n        System.out.print(count + \" \");\n        count = count + 2;\n        System.out.println(count);\n    }\n}\n```",
    [
        "1 3",
        "1\n3",
        "3",
        "1 2"
    ],
    0,
    "First, `1 ` is printed without a newline. Then `count` is updated to 3, and `println(3)` prints `3` and ends the line, resulting in `1 3`.",
    "Sequential Execution Trace", "output", "easy",
    "You accurately traced variable re-assignment and mixed print calls.",
    "Traced sequential evaluation and state change cleanly."
)

add_q(
    "What is the output of the following code?\n```java\npublic class SubstringPrint {\n    public static void main(String[] args) {\n        System.out.println(\"Java\".length());\n    }\n}\n```",
    [
        "3",
        "4",
        "5",
        "Compilation error: cannot call method on literal string"
    ],
    1,
    "String literals in Java are instances of `java.lang.String`. The string `\"Java\"` contains 4 characters.",
    "String Literal Methods", "output", "easy",
    "You correctly determined string length from a string literal.",
    "`\"Java\".length()` returns 4."
)

add_q(
    "What is the output of this code?\n```java\npublic class ClassNamePrint {\n    public static void main(String[] args) {\n        System.out.println(ClassNamePrint.class.getSimpleName());\n    }\n}\n```",
    [
        "ClassNamePrint",
        "ClassNamePrint.class",
        "class ClassNamePrint",
        "Compilation error"
    ],
    0,
    "`getSimpleName()` on the Class object returns the simple name of the underlying class: `ClassNamePrint`.",
    "Reflection Basics", "output", "hard",
    "You correctly identified class metadata retrieval via `.class.getSimpleName()`.",
    "`Class.getSimpleName()` returns the unadorned class name."
)

add_q(
    "What is the output of this code?\n```java\npublic class StringQuote {\n    public static void main(String[] args) {\n        System.out.println(\"'Hello'\");\n    }\n}\n```",
    [
        "'Hello'",
        "Hello",
        "\"Hello\"",
        "Compilation error: single quotes inside double quotes"
    ],
    0,
    "Single quotes do not need to be escaped inside double-quoted string literals. The exact characters `'Hello'` are printed.",
    "Single Quotes in Strings", "output", "easy",
    "You recognized that single quotes do not require escaping inside double-quoted strings.",
    "Only double quotes and backslashes require escaping inside string literals."
)

add_q(
    "What is the output of the following code?\n```java\npublic class MathPrint {\n    public static void main(String[] args) {\n        System.out.println(1 + 2 + \"3\" + 4 + 5);\n    }\n}\n```",
    [
        "15",
        "3345",
        "339",
        "12345"
    ],
    1,
    "`1 + 2` evaluates to 3. Then `3 + \"3\"` evaluates to `\"33\"`. Subsequent `+` operations concatenate: `\"33\" + 4 -> \"334\"`, `\"334\" + 5 -> \"3345\"`.",
    "Complex Concatenation Flow", "output", "medium",
    "You accurately stepped through the transition from numeric addition to string concatenation.",
    "`1 + 2` is 3, then concatenating `\"3\"` turns all subsequent operations into string concatenations: `3345`."
)

add_q(
    "What is the output of this code?\n```java\npublic class EscapeNewline {\n    public static void main(String[] args) {\n        System.out.print(\"Line1\\nLine2\");\n    }\n}\n```",
    [
        "Line1\\nLine2",
        "Line1\nLine2",
        "Line1Line2",
        "Compilation error"
    ],
    1,
    "The embedded `\\n` within the string literal causes a newline break, producing 'Line1' on the first line and 'Line2' on the second.",
    "Embedded Escape Newline", "output", "easy",
    "You recognized that `\\n` creates a line break within a string literal.",
    "`\\n` triggers a line break even when called inside `System.out.print()`."
)

add_q(
    "What is the output of this code?\n```java\npublic class StaticBlockDemo {\n    static {\n        System.out.print(\"Static \");\n    }\n    public static void main(String[] args) {\n        System.out.print(\"Main\");\n    }\n}\n```",
    [
        "Main",
        "Static Main",
        "Main Static",
        "Compilation error: static blocks are illegal outside methods"
    ],
    1,
    "Static initialization blocks execute when the class is loaded by the ClassLoader, which occurs before the `main` method starts.",
    "Static Initializer Order", "output", "hard",
    "You accurately identified that static initializer blocks run before `main`.",
    "The JVM executes static blocks upon class loading prior to invoking `main()`."
)

add_q(
    "What is the output of this code?\n```java\npublic class CommentOutput {\n    public static void main(String[] args) {\n        // System.out.print(\"One\");\n        /* System.out.print(\"Two\"); */\n        System.out.print(\"Three\");\n    }\n}\n```",
    [
        "OneTwoThree",
        "Three",
        "TwoThree",
        "OneThree"
    ],
    1,
    "Comments are completely stripped out by the compiler and produce no bytecode. Only `System.out.print(\"Three\")` is executed.",
    "Comment Erasure", "output", "easy",
    "You correctly observed that comments are ignored by the compiler.",
    "Comments do not generate bytecode and are ignored during execution."
)

# ==========================================
# 4. APPLICATION & SCENARIO PROBLEMS (25 Questions)
# ==========================================
add_q(
    "You are configuring a production Linux server to run pre-compiled Java microservice JAR files. The server does NOT compile code. What should you install to minimize storage and security attack surface?",
    [
        "The complete JDK (Java Development Kit)",
        "The JRE (Java Runtime Environment)",
        "The C++ build essentials package",
        "The Javadoc documentation bundle"
    ],
    1,
    "The JRE provides the JVM and core runtime libraries needed to run compiled bytecode without unnecessary development tools like compilers or debuggers.",
    "Production Deployment", "scenario", "easy",
    "You selected the leanest and most secure runtime for production deployment.",
    "A production server running compiled JARs requires only the JRE, not the full JDK."
)

add_q(
    "A team member complains that typing `javac` in the terminal results in 'command not found', even though the JDK is installed. Which system setting is incorrectly configured?",
    [
        "The `CLASSPATH` variable",
        "The system `PATH` environment variable does not include the JDK `bin` directory",
        "The monitor display resolution",
        "The Java memory heap max limit"
    ],
    1,
    "The operating system searches directories listed in the `PATH` environment variable to find executables like `javac` and `java`.",
    "Environment Troubleshooting", "scenario", "medium",
    "You correctly diagnosed the missing JDK bin entry in the PATH environment variable.",
    "The `PATH` environment variable tells the shell where to locate command-line binaries like `javac`."
)

add_q(
    "You are designing an enterprise Java application. According to standard Java naming conventions, which of the following represents the correct naming for a class, a method, and a constant?",
    [
        "Class: `bank_account`, Method: `GetBalance`, Constant: `max_limit`",
        "Class: `BankAccount`, Method: `getBalance`, Constant: `MAX_LIMIT`",
        "Class: `bankAccount`, Method: `getBalance`, Constant: `MaxLimit`",
        "Class: `BANK_ACCOUNT`, Method: `get_balance`, Constant: `MAX_LIMIT`"
    ],
    1,
    "Standard Java conventions: Classes in UpperCamelCase (`BankAccount`), methods in lowerCamelCase (`getBalance`), and constants in SCREAMING_SNAKE_CASE (`MAX_LIMIT`).",
    "Industry Code Standards", "scenario", "easy",
    "You accurately applied standard Java naming conventions across identifiers.",
    "Remember: Classes use UpperCamelCase, methods use lowerCamelCase, constants use SCREAMING_SNAKE_CASE."
)

add_q(
    "A developer compiles `PaymentService.java` on a Windows 11 computer with JDK 17. They copy `PaymentService.class` directly to a Red Hat Enterprise Linux 9 server with OpenJDK 17 installed. Will the file run without recompilation?",
    [
        "No, because Windows and Linux use incompatible executable binary formats",
        "Yes, because Java bytecode is platform-independent and can be executed by any compliant JVM of the same or higher version",
        "No, because the byte order (endianness) of Windows and Linux is inverted",
        "Yes, but only if Windows Subsystem for Linux is installed on the server"
    ],
    1,
    "This embodies Java's WORA (Write Once, Run Anywhere) principle. Bytecode generated on Windows is fully portable to any compatible JVM on Linux.",
    "Cross-Platform Deployment", "scenario", "medium",
    "You understood how platform-independent bytecode enables seamless cross-OS deployment.",
    "Compiled `.class` files are identical across operating systems."
)

add_q(
    "You are writing a CLI utility and need to print a formatted summary table of student grades. You need exact column spacing and two decimal places for averages. Which method should you choose?",
    [
        "`System.out.print()`",
        "`System.out.println()`",
        "`System.out.printf()`",
        "`System.err.print()`"
    ],
    2,
    "`System.out.printf()` supports format specifiers like `%-15s` for column width and `%.2f` for decimal formatting.",
    "Formatted Output Choice", "scenario", "easy",
    "You selected `printf` for tabular and decimal formatting.",
    "Use `printf()` with format specifiers (`%s`, `%.2f`, `%-15s`) to align tabular data."
)

add_q(
    "A banking application processes high-frequency transactions. Profiling shows that a specific cryptographic calculation method is called 500,000 times per minute. Which JVM mechanism automatically optimizes this method to native CPU instructions?",
    [
        "The Garbage Collector",
        "The JIT (Just-In-Time) compiler using hot-spot compilation",
        "The Bytecode Verifier",
        "The javadoc generator"
    ],
    1,
    "The JIT compiler detects 'hot spots' (methods or loops executed repeatedly) and compiles them into native machine code directly executable by the CPU.",
    "Performance Optimization", "scenario", "hard",
    "You correctly identified the JIT compiler's role in optimizing high-frequency code paths.",
    "The JIT compiler accelerates performance by compiling hot bytecode paths to native machine instructions."
)

add_q(
    "Your project contains three files: `Order.java`, `Customer.java`, and `Invoice.java`. You want to compile all of them simultaneously in the terminal. What command achieves this?",
    [
        "`java Order Customer Invoice`",
        "`javac *.java`",
        "`compile Order.java Customer.java Invoice.java`",
        "`jvm --build all`"
    ],
    1,
    "`javac *.java` uses the wildcard character to compile all Java source files in the current directory into bytecode.",
    "Batch Compilation", "scenario", "easy",
    "You know how to use wildcard compilation with `javac`.",
    "`javac *.java` compiles all `.java` files in the folder."
)

add_q(
    "You need to pass the database URL `jdbc:mysql://localhost:3306/db` and port `3306` to your application when launching it from the command line. How do you pass these parameters and read them inside Java?",
    [
        "Pass them as `java MyApp jdbc:mysql://localhost:3306/db 3306` and read them from `args[0]` and `args[1]`",
        "Type them into the terminal after the program launches",
        "Store them in the `System.in` buffer beforehand",
        "Pass them as compiler flags to `javac`"
    ],
    0,
    "Arguments supplied after the class name on the command line are passed to `main(String[] args)` as elements of the `args` array.",
    "CLI Argument Passing", "scenario", "medium",
    "You know how to pass runtime parameters via CLI arguments.",
    "Command-line parameters passed after the class name populate `args[0]`, `args[1]`, etc."
)

add_q(
    "You are building an open-source library and want to generate comprehensive API documentation website for developers. What type of comments and command should you use?",
    [
        "Single-line comments `//` with `java --doc`",
        "Javadoc comments `/** ... */` with tags like `@param` and `@return`, processed using the `javadoc` tool",
        "Block comments `/* ... */` with the `javac -doc` flag",
        "Markdown files compiled with `make`"
    ],
    1,
    "Javadoc comments `/** ... */` support standardized tags (`@param`, `@return`, `@throws`) and are processed by the `javadoc` tool to produce HTML documentation.",
    "API Documentation Strategy", "scenario", "easy",
    "You know the industry standard Javadoc workflow.",
    "Use `/** ... */` comments with tags and run `javadoc` to generate HTML documentation."
)

add_q(
    "A legacy Java application running in production suddenly halts with `java.lang.OutOfMemoryError: Java heap space`. What does this indicate about the application's runtime state?",
    [
        "The computer's hard drive has run out of disk space",
        "The JVM heap has no more memory available to allocate new objects, and garbage collection cannot reclaim enough space",
        "The method call stack has exceeded its recursion limit",
        "The CPU is overheating and throttling execution"
    ],
    1,
    "`OutOfMemoryError: Java heap space` occurs when the heap is full and the Garbage Collector cannot free enough memory to satisfy object allocation requests.",
    "Memory Leak Diagnosis", "scenario", "hard",
    "You accurately identified JVM heap exhaustion.",
    "Heap space exhaustion means object allocation requests exceed available JVM heap memory."
)

add_q(
    "You are reviewing code written by a junior developer: `int Number_Of_Students = 30;`. How should this variable declaration be refactored to follow standard Java conventions?",
    [
        "`int NUMBER_OF_STUDENTS = 30;`",
        "`int numberOfStudents = 30;`",
        "`int number_of_students = 30;`",
        "`int NumberOfStudents = 30;`"
    ],
    1,
    "In Java, variables must follow `lowerCamelCase` conventions (e.g., `numberOfStudents`).",
    "Code Refactoring", "scenario", "easy",
    "You applied the correct lowerCamelCase convention to variable naming.",
    "Local and instance variables in Java use lowerCamelCase."
)

add_q(
    "A Java application crashes immediately upon launch with `Error: Could not find or load main class com.example.App`. What is the most probable cause of this error?",
    [
        "The CPU does not support 64-bit Java bytecode",
        "The class is not on the CLASSPATH, or the folder hierarchy does not match the package name `com/example/App.class`",
        "The computer has no internet access",
        "The `main` method returns an `int` instead of `void`"
    ],
    1,
    "The JVM ClassLoader maps package declarations to folder paths. If the class file is not located in `com/example/App.class` relative to the classpath, it cannot be loaded.",
    "Classpath & Package Troubleshooting", "scenario", "hard",
    "You diagnosed the classic 'Could not find or load main class' error.",
    "The package name `com.example` requires the class to reside in directory `com/example/`."
)

add_q(
    "You need to verify which version of the Java compiler is currently active in your development terminal. What command should you run?",
    [
        "`java -check`",
        "`javac -version`",
        "`jvm --info`",
        "`javac -help -v`"
    ],
    1,
    "`javac -version` prints the active version of the Java compiler installed and accessible via PATH.",
    "Developer Tooling", "scenario", "easy",
    "You know how to inspect compiler version information via CLI.",
    "Use `javac -version` to verify the compiler version."
)

add_q(
    "You are writing a utility that outputs system status messages to standard output and error alerts to standard error. How should these be routed in Java?",
    [
        "Status messages to `System.out.println()`; errors to `System.err.println()`",
        "Both to `System.out.println()` with different colors",
        "Status messages to `System.err.println()`; errors to `System.in.println()`",
        "Status messages to `System.exit()`; errors to `System.out()`"
    ],
    0,
    "`System.out` is connected to stdout, while `System.err` is connected to stderr, allowing shell pipelines to separate normal output from diagnostics.",
    "Standard Streams", "scenario", "medium",
    "You correctly separated standard output and standard error streams.",
    "Use `System.out` for normal output and `System.err` for error messages."
)

add_q(
    "A distributed system requires a unique identifier for classes that are serialized and sent over a network. Why does Java use package names formatted like `com.company.project`?",
    [
        "To ensure class files can be downloaded from web servers via HTTP",
        "To provide a globally unique namespace by reversing an internet domain name",
        "Because the Java compiler requires domains to register licenses",
        "To make file paths shorter on disk"
    ],
    1,
    "Java conventions recommend using reversed domain names (e.g., `com.google`, `org.apache`) as package prefixes to guarantee globally unique namespaces.",
    "Package Naming Strategy", "scenario", "medium",
    "You understand the reverse-domain convention for package names.",
    "Reversing domain names guarantees unique package namespaces across organizations."
)

add_q(
    "During a code review, you see: `final double PI = 3.1415926535;`. Why is `final` recommended here?",
    [
        "It forces the variable to be stored on the hard drive",
        "It prevents accidental re-assignment, ensuring mathematical integrity throughout the program",
        "It speeds up execution by skipping the JVM garbage collector",
        "It allows other classes to change the value dynamically"
    ],
    1,
    "`final` creates an immutable constant that cannot be altered after initialization, safeguarding critical values from inadvertent modification.",
    "Defensive Programming", "scenario", "easy",
    "You recognized the value of `final` in creating immutable constants.",
    "`final` protects constant values from being accidentally overwritten."
)

add_q(
    "You want to organize a large project into packages. If a class `Order` belongs to package `com.shop.billing`, in which folder must `Order.java` reside relative to the source root?",
    [
        "`com_shop_billing/`",
        "`com/shop/billing/`",
        "`billing/shop/com/`",
        "`src/packages/Order/`"
    ],
    1,
    "Java's package naming directly mirrors filesystem folder hierarchies: dots in package names represent directory separators.",
    "Directory Mapping", "scenario", "medium",
    "You understand the direct mapping between package names and folder structures.",
    "Package dots correspond to nested subfolders: `com/shop/billing/Order.java`."
)

add_q(
    "A developer wants to make sure their source code is completely self-documenting for a team of 10 developers. What is the most effective approach?",
    [
        "Write 10 lines of comments for every single line of code",
        "Use expressive, self-explanatory identifier names, clear modular methods, and Javadoc for public APIs",
        "Avoid using variables and hard-code values everywhere",
        "Put all code into a single massive file so teammates don't have to switch tabs"
    ],
    1,
    "Clean code philosophy emphasizes meaningful names and small focused methods so code reads like well-written prose, supplemented by Javadoc for external contracts.",
    "Clean Code Practices", "scenario", "easy",
    "You understand clean code principles and documentation best practices.",
    "Clear names and clean method boundaries make code self-documenting."
)

add_q(
    "You receive a `.jar` file containing an executable Java program. What command line executes this archive directly?",
    [
        "`javac -jar app.jar`",
        "`java -jar app.jar`",
        "`run app.jar`",
        "`jvm --open app.jar`"
    ],
    1,
    "The `-jar` flag instructs the `java` launcher to read the `Main-Class` manifest header inside `app.jar` and execute its main method.",
    "JAR Execution", "scenario", "easy",
    "You know how to run executable JAR files using `java -jar`.",
    "Use `java -jar archive.jar` to execute packaged Java applications."
)

add_q(
    "You are building a high-reliability system where unhandled exceptions must never crash the service silently. How does the JVM handle unhandled exceptions thrown from `main`?",
    [
        "It restarts the computer automatically",
        "It prints the stack trace to `System.err` and terminates the thread with a non-zero exit status",
        "It ignores the exception and continues executing the next line of code",
        "It converts the exception into a string and saves it to a hidden file"
    ],
    1,
    "When an exception propagates out of `main` without being caught, the JVM prints the exception stack trace to standard error and terminates the process.",
    "JVM Fault Handling", "scenario", "medium",
    "You understand default JVM unhandled exception behavior.",
    "Unhandled exceptions print a stack trace and terminate the thread."
)

add_q(
    "A customer reports that your desktop Java app runs with corrupted foreign characters when displaying Japanese text. What feature of Java handles international character sets, and what encoding does Java use internally for `char` and `String`?",
    [
        "ASCII 7-bit encoding",
        "UTF-16 (Unicode)",
        "ISO-8859-1 exclusively",
        "EBCDIC"
    ],
    1,
    "Java's `char` type is 16 bits wide, designed to support Unicode (UTF-16 code units) natively to handle international characters across languages.",
    "Unicode Support", "scenario", "hard",
    "You know Java's native Unicode character architecture.",
    "Java uses UTF-16 Unicode internally for all characters and strings."
)

add_q(
    "You are writing a script that checks whether a user's operating system is Windows or macOS to set an appropriate file path. How can you query the host OS name at runtime?",
    [
        "`System.getOperatingSystem()`",
        "`System.getProperty(\"os.name\")`",
        "`JVM.getHostPlatform()`",
        "`System.in.getOS()`"
    ],
    1,
    "`System.getProperty(\"os.name\")` queries standard JVM system properties to inspect OS information, file separators, and Java version.",
    "System Properties", "scenario", "medium",
    "You know how to access JVM system properties using `System.getProperty()`.",
    "`System.getProperty(\"os.name\")` returns the operating system name."
)

add_q(
    "In a secure environment, why should developers never hard-code API passwords or encryption keys directly in Java source code files?",
    [
        "Because Java will refuse to compile classes that contain the word 'password'",
        "Because compiled `.class` files can be easily decompiled, exposing hard-coded strings in plain text",
        "Because passwords will cause stack overflow errors in the JVM",
        "Because the JIT compiler deletes constant strings automatically"
    ],
    1,
    "Bytecode preserves string literals in the constant pool. Anyone with access to the `.class` file can view them or decompile the file with standard tools.",
    "Application Security", "scenario", "medium",
    "You understand why credentials must not be hard-coded in compiled bytecode.",
    "Decompiling `.class` files reveals string literals; use environment variables or secret vaults."
)

add_q(
    "A developer accidentally writes an infinite recursive method with no base case: `void loop() { loop(); }`. What error will the JVM throw at runtime?",
    [
        "`java.lang.OutOfMemoryError: Java heap space`",
        "`java.lang.StackOverflowError`",
        "`java.lang.NullPointerException`",
        "`java.lang.ArithmeticException`"
    ],
    1,
    "Every method invocation pushes a new stack frame onto the thread's call stack. Infinite recursion quickly exhausts the call stack memory, triggering a `StackOverflowError`.",
    "Call Stack Dynamics", "scenario", "medium",
    "You correctly identified the StackOverflowError resulting from infinite recursion.",
    "Recursive calls without base cases exhaust the call stack, throwing `StackOverflowError`."
)

add_q(
    "You are preparing for your university WIX1002 Java examination. The exam contains code snippets with subtle bugs. What is the most effective mental model for predicting Java code execution?",
    [
        "Guessing based on how Python or JavaScript would execute the code",
        "Simulating the JVM step-by-step: tracking variable memory state on the stack and heap, observing operator precedence, and validating type compatibility",
        "Assuming all code snippets contain syntax errors",
        "Memorizing outputs from textbook problems without understanding the mechanics"
    ],
    1,
    "Tracing code with a JVM mental model (Stack frames, Heap objects, type promotion, operator precedence) is the guaranteed method to predict output and spot tricky exam traps.",
    "Exam Strategy & JVM Model", "scenario", "easy",
    "You understand the power of JVM mental model simulation for academic success.",
    "Trace execution methodically: state on stack, objects on heap, and operator precedence."
)

with open("scratch/ch0.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Generated {len(questions)} questions for Chapter 0!")
