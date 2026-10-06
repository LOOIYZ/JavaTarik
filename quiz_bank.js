/* WIX1002 JavaTarik - Complete 1,000 Questions Quiz Bank (100 Questions per Chapter) */
var QUIZ_BANK = {
  "0": [
    {
      "q": "What occurs during the bytecode verification step inside the JVM ClassLoader subsystem?",
      "options": [
        "The compiler optimizes loops to run faster",
        "The verifier checks that bytecode adheres to JVM safety and security constraints before execution",
        "The OS assigns physical memory addresses to all static fields",
        "Source code comments are parsed into HTML documentation"
      ],
      "answer": 1,
      "explain": "Bytecode verification ensures the code does not violate memory access rules, overflow operand stacks, or attempt illegal type conversions.",
      "topic": "ClassLoader & Security",
      "type": "theory",
      "level": "hard",
      "strength": "Advanced insight into JVM bytecode security verification.",
      "weakness": "Review the role of the Bytecode Verifier in Java's sandbox security model."
    },
    {
      "q": "What compiler error is reported here?\n```java\npublic class CastError {\n    public static void main(String[] args) {\n        int x = (int) \"100\";\n        System.out.println(x);\n    }\n}\n```",
      "options": [
        "ClassCastException at runtime",
        "Compile-time error: inconvertible types; cannot cast `java.lang.String` to `int`",
        "NumberFormatException at compile time",
        "Compiles cleanly and prints 100"
      ],
      "answer": 1,
      "explain": "A `String` cannot be explicitly cast to a primitive `int` because they are inconvertible types. To parse a string into an integer, `Integer.parseInt(\"100\")` must be used.",
      "topic": "Invalid Type Casting",
      "type": "error",
      "level": "hard",
      "strength": "You correctly identified that primitive casting `(int)` cannot be applied to Strings.",
      "weakness": "Use `Integer.parseInt(str)` instead of casting `(int) str`."
    },
    {
      "q": "What is the output of the following code?\n```java\npublic class CharPlusChar {\n    public static void main(String[] args) {\n        System.out.println('A' + 'B');\n    }\n}\n```",
      "options": [
        "AB",
        "131",
        "A + B",
        "Compilation error: cannot add characters"
      ],
      "answer": 1,
      "explain": "The `+` operator between two characters performs integer arithmetic on their ASCII/Unicode values ('A' is 65, 'B' is 66 -> 65 + 66 = 131).",
      "topic": "Char Arithmetic Promotion",
      "type": "output",
      "level": "hard",
      "strength": "You avoided the famous trap: 'A' + 'B' performs integer addition, not concatenation!",
      "weakness": "Two chars with `+` promote to ints and add numeric code points (65 + 66 = 131)."
    },
    {
      "q": "A banking application processes high-frequency transactions. Profiling shows that a specific cryptographic calculation method is called 500,000 times per minute. Which JVM mechanism automatically optimizes this method to native CPU instructions?",
      "options": [
        "The Garbage Collector",
        "The JIT (Just-In-Time) compiler using hot-spot compilation",
        "The Bytecode Verifier",
        "The javadoc generator"
      ],
      "answer": 1,
      "explain": "The JIT compiler detects 'hot spots' (methods or loops executed repeatedly) and compiles them into native machine code directly executable by the CPU.",
      "topic": "Performance Optimization",
      "type": "scenario",
      "level": "hard",
      "strength": "You correctly identified the JIT compiler's role in optimizing high-frequency code paths.",
      "weakness": "The JIT compiler accelerates performance by compiling hot bytecode paths to native machine instructions."
    },
    {
      "q": "Which of the following keywords is NOT a valid reserved keyword in modern Java?",
      "options": [
        "goto",
        "const",
        "include",
        "transient"
      ],
      "answer": 2,
      "explain": "`include` is used in C/C++, not Java (Java uses `import`). `goto` and `const` are reserved keywords in Java (though unused). `transient` is a valid keyword for serialization.",
      "topic": "Reserved Keywords",
      "type": "theory",
      "level": "medium",
      "strength": "You accurately identified Java reserved keywords vs C/C++ keywords.",
      "weakness": "Note that `goto` and `const` are reserved words in Java, while `include` is not."
    },
    {
      "q": "What error occurs in this file?\n```java\n// File: Calculation.java\npublic class MathHelper {}\npublic class LogicHelper {}\n```",
      "options": [
        "A Java source file can contain at most one `public` class",
        "MathHelper cannot be public because Math is a reserved word",
        "Both classes must have a main method",
        "Classes cannot be empty"
      ],
      "answer": 0,
      "explain": "A single `.java` file cannot contain more than one top-level `public` class. Furthermore, the public class name must match the filename `Calculation.java`.",
      "topic": "Multiple Public Classes",
      "type": "error",
      "level": "medium",
      "strength": "You caught the duplicate public class error in a single file.",
      "weakness": "Rule: Maximum 1 public class per file, matching the file name."
    },
    {
      "q": "What is the output of the following code?\n```java\npublic class Concat1 {\n    public static void main(String[] args) {\n        System.out.println(\"Total: \" + 10 + 20);\n    }\n}\n```",
      "options": [
        "Total: 30",
        "Total: 1020",
        "Total: 10 20",
        "Compile-time error"
      ],
      "answer": 1,
      "explain": "Left-to-right evaluation: `\"Total: \" + 10` produces `\"Total: 10\"`. Then `\"Total: 10\" + 20` produces `\"Total: 1020\"` via string concatenation.",
      "topic": "String Concatenation Precedence",
      "type": "output",
      "level": "easy",
      "strength": "You mastered the left-to-right string concatenation rule.",
      "weakness": "Because evaluation is left-to-right, numbers concatenated after a string become string characters."
    },
    {
      "q": "You are building a high-reliability system where unhandled exceptions must never crash the service silently. How does the JVM handle unhandled exceptions thrown from `main`?",
      "options": [
        "It restarts the computer automatically",
        "It prints the stack trace to `System.err` and terminates the thread with a non-zero exit status",
        "It ignores the exception and continues executing the next line of code",
        "It converts the exception into a string and saves it to a hidden file"
      ],
      "answer": 1,
      "explain": "When an exception propagates out of `main` without being caught, the JVM prints the exception stack trace to standard error and terminates the process.",
      "topic": "JVM Fault Handling",
      "type": "scenario",
      "level": "medium",
      "strength": "You understand default JVM unhandled exception behavior.",
      "weakness": "Unhandled exceptions print a stack trace and terminate the thread."
    },
    {
      "q": "What is the exact return type required for the standard Java entry point `public static ... main(String[] args)`?",
      "options": [
        "int",
        "boolean",
        "void",
        "String"
      ],
      "answer": 2,
      "explain": "The main method must return `void`. Unlike C/C++, Java does not return an integer exit code from `main`; `System.exit(int status)` is used if an exit code is needed.",
      "topic": "Main Method Signature",
      "type": "theory",
      "level": "easy",
      "strength": "Correct identification of `void` as the main method return type.",
      "weakness": "Remember that `main` in Java never returns an int; it returns `void`."
    },
    {
      "q": "You need to verify which version of the Java compiler is currently active in your development terminal. What command should you run?",
      "options": [
        "`java -check`",
        "`javac -version`",
        "`jvm --info`",
        "`javac -help -v`"
      ],
      "answer": 1,
      "explain": "`javac -version` prints the active version of the Java compiler installed and accessible via PATH.",
      "topic": "Developer Tooling",
      "type": "scenario",
      "level": "easy",
      "strength": "You know how to inspect compiler version information via CLI.",
      "weakness": "Use `javac -version` to verify the compiler version."
    },
    {
      "q": "Which area of JVM memory stores local variables and method invocation frames?",
      "options": [
        "The Heap",
        "The Method Area / Metaspace",
        "The Java Virtual Machine Stack",
        "The Native Method Stack"
      ],
      "answer": 2,
      "explain": "Each thread has a private JVM Stack that stores stack frames containing local variables, partial results, and method invocation/return details.",
      "topic": "JVM Memory Model",
      "type": "theory",
      "level": "hard",
      "strength": "Excellent knowledge of JVM memory regions (Stack vs Heap).",
      "weakness": "Remember: local variables live on the Stack; object instances live on the Heap."
    },
    {
      "q": "What compilation error occurs in this code snippet?\n```java\npublic class Test {\n    public void main(String[] args) {\n        System.out.println(\"Hello\");\n    }\n}\n```",
      "options": [
        "Syntax error: `println` requires uppercase `Println`",
        "No compilation error, but running `java Test` fails to find the main method because `static` is missing",
        "Compilation error: `String[] args` must be renamed to `String args`",
        "Compilation error: `Test` cannot have a public method"
      ],
      "answer": 1,
      "explain": "The code compiles cleanly because it is a valid instance method. However, attempting to run `java Test` produces a runtime error: 'Main method is not static in class Test'.",
      "topic": "Main Method Signatures",
      "type": "error",
      "level": "medium",
      "strength": "You accurately differentiated between compile-time validity and main method launch requirements.",
      "weakness": "Remember: A missing `static` compiles, but the JVM cannot launch it as the entry point."
    },
    {
      "q": "What is the output of this code?\n```java\npublic class ClassNamePrint {\n    public static void main(String[] args) {\n        System.out.println(ClassNamePrint.class.getSimpleName());\n    }\n}\n```",
      "options": [
        "ClassNamePrint",
        "ClassNamePrint.class",
        "class ClassNamePrint",
        "Compilation error"
      ],
      "answer": 0,
      "explain": "`getSimpleName()` on the Class object returns the simple name of the underlying class: `ClassNamePrint`.",
      "topic": "Reflection Basics",
      "type": "output",
      "level": "hard",
      "strength": "You correctly identified class metadata retrieval via `.class.getSimpleName()`.",
      "weakness": "`Class.getSimpleName()` returns the unadorned class name."
    },
    {
      "q": "A legacy Java application running in production suddenly halts with `java.lang.OutOfMemoryError: Java heap space`. What does this indicate about the application's runtime state?",
      "options": [
        "The computer's hard drive has run out of disk space",
        "The JVM heap has no more memory available to allocate new objects, and garbage collection cannot reclaim enough space",
        "The method call stack has exceeded its recursion limit",
        "The CPU is overheating and throttling execution"
      ],
      "answer": 1,
      "explain": "`OutOfMemoryError: Java heap space` occurs when the heap is full and the Garbage Collector cannot free enough memory to satisfy object allocation requests.",
      "topic": "Memory Leak Diagnosis",
      "type": "scenario",
      "level": "hard",
      "strength": "You accurately identified JVM heap exhaustion.",
      "weakness": "Heap space exhaustion means object allocation requests exceed available JVM heap memory."
    },
    {
      "q": "What is the default value of uninitialized local variables declared inside a method?",
      "options": [
        "0 for primitives, null for objects",
        "Empty string `\"\"`",
        "They have no default value and cause a compiler error if accessed before assignment",
        "false"
      ],
      "answer": 2,
      "explain": "Unlike fields (class/instance variables), local variables in Java do NOT receive default values. Accessing an uninitialized local variable is a compile-time error.",
      "topic": "Variable Initialization",
      "type": "theory",
      "level": "medium",
      "strength": "You avoided the classic trap: local variables have NO default values.",
      "weakness": "Always remember: fields get default values (0, null, false); local variables must be initialized before use."
    },
    {
      "q": "What is the error in the following snippet?\n```java\npublic class ArgsError {\n    public static void main(String args) {\n        System.out.println(args);\n    }\n}\n```",
      "options": [
        "The code fails to compile because args must be an array",
        "The code compiles cleanly, but running it causes the JVM to report that no valid `main(String[] args)` entry point was found",
        "println cannot print single String parameters",
        "args cannot be used as a parameter name"
      ],
      "answer": 1,
      "explain": "The code is syntactically valid Java, so it compiles. But the JVM launcher specifically searches for `main(String[] args)` (an array of Strings), so it will not launch.",
      "topic": "Main Method Parameter Signature",
      "type": "error",
      "level": "medium",
      "strength": "You correctly recognized that `main` must take `String[] args`, not `String args`.",
      "weakness": "The standard entry point requires an array of Strings: `String[] args`."
    },
    {
      "q": "What is the output of the following code?\n```java\npublic class Concat2 {\n    public static void main(String[] args) {\n        System.out.println(10 + 20 + \" = Sum\");\n    }\n}\n```",
      "options": [
        "1020 = Sum",
        "30 = Sum",
        "10 + 20 = Sum",
        "Compile-time error"
      ],
      "answer": 1,
      "explain": "Evaluation goes left-to-right: `10 + 20` is evaluated as integer addition yielding `30`. Then `30 + \" = Sum\"` evaluates to `\"30 = Sum\"`.",
      "topic": "Arithmetic Precedence in Concatenation",
      "type": "output",
      "level": "easy",
      "strength": "You correctly identified integer addition before string concatenation.",
      "weakness": "Left-to-right: arithmetic occurs first until a String operand is encountered."
    },
    {
      "q": "You are writing a script that checks whether a user's operating system is Windows or macOS to set an appropriate file path. How can you query the host OS name at runtime?",
      "options": [
        "`System.getOperatingSystem()`",
        "`System.getProperty(\"os.name\")`",
        "`JVM.getHostPlatform()`",
        "`System.in.getOS()`"
      ],
      "answer": 1,
      "explain": "`System.getProperty(\"os.name\")` queries standard JVM system properties to inspect OS information, file separators, and Java version.",
      "topic": "System Properties",
      "type": "scenario",
      "level": "medium",
      "strength": "You know how to access JVM system properties using `System.getProperty()`.",
      "weakness": "`System.getProperty(\"os.name\")` returns the operating system name."
    },
    {
      "q": "What is the purpose of the `javadoc` tool?",
      "options": [
        "To convert Java source code to C++",
        "To generate standardized HTML documentation from documentation comments (`/** ... */`)",
        "To verify that all classes implement required interfaces",
        "To package compiled classes into ZIP files"
      ],
      "answer": 1,
      "explain": "`javadoc` parses source files and extracts tags (such as `@param`, `@return`, `@author`) inside `/** ... */` blocks to build HTML documentation.",
      "topic": "Javadoc Documentation",
      "type": "theory",
      "level": "easy",
      "strength": "You know the role of javadoc in generating project documentation.",
      "weakness": "Recall that javadoc uses `/** ... */` syntax."
    },
    {
      "q": "During a code review, you see: `final double PI = 3.1415926535;`. Why is `final` recommended here?",
      "options": [
        "It forces the variable to be stored on the hard drive",
        "It prevents accidental re-assignment, ensuring mathematical integrity throughout the program",
        "It speeds up execution by skipping the JVM garbage collector",
        "It allows other classes to change the value dynamically"
      ],
      "answer": 1,
      "explain": "`final` creates an immutable constant that cannot be altered after initialization, safeguarding critical values from inadvertent modification.",
      "topic": "Defensive Programming",
      "type": "scenario",
      "level": "easy",
      "strength": "You recognized the value of `final` in creating immutable constants.",
      "weakness": "`final` protects constant values from being accidentally overwritten."
    },
    {
      "q": "What is the significance of the `CLASSPATH` environment variable in Java?",
      "options": [
        "It tells the operating system where to find the `javac` executable file",
        "It tells the JVM and compiler where to look for user-defined `.class` files and packages",
        "It specifies the installation folder of the Java Development Kit",
        "It forces the JVM to reserve a fixed amount of RAM for the heap"
      ],
      "answer": 1,
      "explain": "`CLASSPATH` tells the compiler and JVM where to locate class files and libraries when loading classes outside the default JDK library.",
      "topic": "Environment Variables",
      "type": "theory",
      "level": "hard",
      "strength": "Good understanding of CLASSPATH vs PATH environment variables.",
      "weakness": "Remember: PATH locates executables (`javac`, `java`); CLASSPATH locates `.class` and `.jar` libraries."
    },
    {
      "q": "What error occurs when compiling this code?\n```java\npublic class Comments {\n    public static void main(String[] args) {\n        /* Outer comment /* Inner comment */ still in comment? */\n        System.out.println(\"Done\");\n    }\n}\n```",
      "options": [
        "No error, nested comments are completely legal in Java",
        "Syntax error: multi-line comments `/* ... */` cannot be nested in Java",
        "System.out.println is commented out accidentally",
        "Comments require double slashes inside methods"
      ],
      "answer": 1,
      "explain": "In Java, multi-line comments do not nest. The first `*/` terminates the comment block, leaving the trailing `still in comment? */` as invalid Java syntax.",
      "topic": "Nested Comment Errors",
      "type": "error",
      "level": "medium",
      "strength": "You recognized that Java multi-line comments cannot be nested.",
      "weakness": "The first `*/` closes the comment regardless of how many `/*` preceded it."
    },
    {
      "q": "What is the output of this code?\n```java\npublic class StaticBlockDemo {\n    static {\n        System.out.print(\"Static \");\n    }\n    public static void main(String[] args) {\n        System.out.print(\"Main\");\n    }\n}\n```",
      "options": [
        "Main",
        "Static Main",
        "Main Static",
        "Compilation error: static blocks are illegal outside methods"
      ],
      "answer": 1,
      "explain": "Static initialization blocks execute when the class is loaded by the ClassLoader, which occurs before the `main` method starts.",
      "topic": "Static Initializer Order",
      "type": "output",
      "level": "hard",
      "strength": "You accurately identified that static initializer blocks run before `main`.",
      "weakness": "The JVM executes static blocks upon class loading prior to invoking `main()`."
    },
    {
      "q": "A Java application crashes immediately upon launch with `Error: Could not find or load main class com.example.App`. What is the most probable cause of this error?",
      "options": [
        "The CPU does not support 64-bit Java bytecode",
        "The class is not on the CLASSPATH, or the folder hierarchy does not match the package name `com/example/App.class`",
        "The computer has no internet access",
        "The `main` method returns an `int` instead of `void`"
      ],
      "answer": 1,
      "explain": "The JVM ClassLoader maps package declarations to folder paths. If the class file is not located in `com/example/App.class` relative to the classpath, it cannot be loaded.",
      "topic": "Classpath & Package Troubleshooting",
      "type": "scenario",
      "level": "hard",
      "strength": "You diagnosed the classic 'Could not find or load main class' error.",
      "weakness": "The package name `com.example` requires the class to reside in directory `com/example/`."
    },
    {
      "q": "What is the purpose of the `package` statement at the top of a Java source file?",
      "options": [
        "To compile the source code into a standalone executable file",
        "To define the namespace and folder hierarchy where the class belongs",
        "To import third-party libraries from the internet automatically",
        "To instruct the Garbage Collector to clean up unused memory"
      ],
      "answer": 1,
      "explain": "A `package` statement groups related classes, prevents naming collisions, and maps to the directory structure on the filesystem.",
      "topic": "Packages & Namespaces",
      "type": "theory",
      "level": "medium",
      "strength": "Good understanding of Java package architecture and namespacing.",
      "weakness": "Review how package statements structure enterprise codebases."
    },
    {
      "q": "What error will the compiler report for the following code?\n```java\npublic class Welcome {\n    public static void main(String[] args) {\n        int 1stScore = 95;\n        System.out.println(1stScore);\n    }\n}\n```",
      "options": [
        "Uninitialized variable error",
        "Invalid identifier error: identifiers cannot begin with a digit",
        "Type mismatch: integer cannot be assigned to 1stScore",
        "Missing semicolon after class declaration"
      ],
      "answer": 1,
      "explain": "Java identifiers cannot start with a digit. `1stScore` violates language identifier syntax rules.",
      "topic": "Identifier Syntax Errors",
      "type": "error",
      "level": "easy",
      "strength": "You caught the invalid identifier starting with a digit.",
      "weakness": "Identifiers must begin with a letter, `$`, or `_`."
    },
    {
      "q": "What is the output of the following code?\n```java\npublic class EscapeTest {\n    public static void main(String[] args) {\n        System.out.println(\"Hello\\\"World\\\"\");\n    }\n}\n```",
      "options": [
        "Hello\\World\\",
        "Hello\"World\"",
        "Hello\\\"World\\\"",
        "HelloWorld"
      ],
      "answer": 1,
      "explain": "The escape sequence `\\\"` prints a literal double quote character without terminating the string literal.",
      "topic": "Escape Sequence Output",
      "type": "output",
      "level": "easy",
      "strength": "You correctly interpreted the escaped double quote sequences.",
      "weakness": "`\\\"` renders as a literal quote character inside string output."
    },
    {
      "q": "In a secure environment, why should developers never hard-code API passwords or encryption keys directly in Java source code files?",
      "options": [
        "Because Java will refuse to compile classes that contain the word 'password'",
        "Because compiled `.class` files can be easily decompiled, exposing hard-coded strings in plain text",
        "Because passwords will cause stack overflow errors in the JVM",
        "Because the JIT compiler deletes constant strings automatically"
      ],
      "answer": 1,
      "explain": "Bytecode preserves string literals in the constant pool. Anyone with access to the `.class` file can view them or decompile the file with standard tools.",
      "topic": "Application Security",
      "type": "scenario",
      "level": "medium",
      "strength": "You understand why credentials must not be hard-coded in compiled bytecode.",
      "weakness": "Decompiling `.class` files reveals string literals; use environment variables or secret vaults."
    },
    {
      "q": "What happens when the `java` launcher command is run without specifying an existing class name?",
      "options": [
        "It compiles all `.java` files in the current folder",
        "It displays launcher usage and command-line options help",
        "It launches an interactive Java GUI editor",
        "It deletes all `.class` files in the directory"
      ],
      "answer": 1,
      "explain": "Running `java` with no arguments outputs the command usage, flags, and syntax options.",
      "topic": "Command-Line Tools",
      "type": "theory",
      "level": "easy",
      "strength": "You recognize basic command-line CLI tool responses.",
      "weakness": "Review `java` launcher flags and CLI arguments."
    },
    {
      "q": "What error occurs in this code?\n```java\npublic class BadBrace {\n    public static void main(String[] args) {\n        System.out.println(\"Start\");\n    \n}\n```",
      "options": [
        "Missing closing curly brace `}` for the `main` method or class",
        "Missing semicolon after main",
        "String literal syntax error",
        "No error"
      ],
      "answer": 0,
      "explain": "There are two opening braces `{` (for class and method) but only one closing brace `}`, causing an 'reached end of file while parsing' syntax error.",
      "topic": "Mismatched Curly Braces",
      "type": "error",
      "level": "easy",
      "strength": "You caught the mismatched curly brace.",
      "weakness": "Every opening brace `{` must have a matching closing brace `}`."
    },
    {
      "q": "What is the relationship between JDK, JRE, and JVM?",
      "options": [
        "JVM contains JRE, and JRE contains JDK",
        "JRE contains JDK, and JDK contains JVM",
        "JDK contains JRE and development tools; JRE contains JVM and runtime libraries",
        "JDK, JRE, and JVM are completely independent programs with no overlapping libraries"
      ],
      "answer": 2,
      "explain": "JDK = JRE + Development Tools (javac, javadoc). JRE = JVM + Standard Class Libraries.",
      "topic": "JDK vs JRE vs JVM",
      "type": "theory",
      "level": "medium",
      "strength": "Clear understanding of the software hierarchy in the Java ecosystem.",
      "weakness": "Review the nesting structure: JDK encompasses JRE, which encompasses JVM."
    },
    {
      "q": "What compiler error will be generated here?\n```java\npublic class ScopeCheck {\n    System.out.println(\"Direct code\");\n    public static void main(String[] args) {}\n}\n```",
      "options": [
        "Missing main method",
        "Executable statements cannot be placed directly inside a class body outside a method or block",
        "`System` cannot be called before `main`",
        "String literals cannot be passed to println outside static methods"
      ],
      "answer": 1,
      "explain": "Executable statements like `System.out.println(...)` must reside inside a method, constructor, or initialization block, not directly inside the class body.",
      "topic": "Class Body Structure",
      "type": "error",
      "level": "medium",
      "strength": "You spotted the executable statement placed directly in the class body.",
      "weakness": "Statements like method calls must be inside methods, constructors, or initializer blocks."
    },
    {
      "q": "What is the output of this code when executed with `java App one two three`?\n```java\npublic class App {\n    public static void main(String[] args) {\n        System.out.println(args.length);\n    }\n}\n```",
      "options": [
        "0",
        "1",
        "3",
        "4 (including App)"
      ],
      "answer": 2,
      "explain": "In Java, command-line arguments are zero-indexed and do NOT include the class name itself. Passing `one two three` yields an array of length 3.",
      "topic": "Command Line Arguments",
      "type": "output",
      "level": "medium",
      "strength": "You know that `args` contains only the arguments passed to the class, not the class name.",
      "weakness": "Unlike C/C++, Java's `args[0]` is the first actual parameter, not the program name."
    },
    {
      "q": "A customer reports that your desktop Java app runs with corrupted foreign characters when displaying Japanese text. What feature of Java handles international character sets, and what encoding does Java use internally for `char` and `String`?",
      "options": [
        "ASCII 7-bit encoding",
        "UTF-16 (Unicode)",
        "ISO-8859-1 exclusively",
        "EBCDIC"
      ],
      "answer": 1,
      "explain": "Java's `char` type is 16 bits wide, designed to support Unicode (UTF-16 code units) natively to handle international characters across languages.",
      "topic": "Unicode Support",
      "type": "scenario",
      "level": "hard",
      "strength": "You know Java's native Unicode character architecture.",
      "weakness": "Java uses UTF-16 Unicode internally for all characters and strings."
    },
    {
      "q": "What is the primary role of the Java Virtual Machine (JVM)?",
      "options": [
        "To compile Java source code (.java) directly into assembly code",
        "To execute compiled Java bytecode (.class) on a specific operating system",
        "To format source code according to style conventions",
        "To act as a physical microprocessor inside Java-certified computers"
      ],
      "answer": 1,
      "explain": "The JVM acts as an abstract computing machine that interprets and compiles Java bytecode into machine instructions suitable for the host operating system.",
      "topic": "JVM Architecture",
      "type": "theory",
      "level": "easy",
      "strength": "Solid understanding of the JVM's core runtime execution role.",
      "weakness": "Review how the JVM abstracts underlying hardware to provide platform independence."
    },
    {
      "q": "Identify the compilation error in the following code:\n```java\npublic class Example {\n    public static void main(String[] args) {\n        int x;\n        System.out.println(x);\n    }\n}\n```",
      "options": [
        "Variable x is out of scope",
        "Variable x might not have been initialized",
        "x cannot be printed using println",
        "main method cannot declare primitive variables"
      ],
      "answer": 1,
      "explain": "Local variable `x` is declared but never assigned a value before being read by `println`, triggering: `variable x might not have been initialized`.",
      "topic": "Uninitialized Local Variables",
      "type": "error",
      "level": "easy",
      "strength": "You correctly identified the uninitialized local variable compile-time error.",
      "weakness": "Remember: local variables must be assigned a value before they are read."
    },
    {
      "q": "What is the output of the following code?\n```java\npublic class BackslashTest {\n    public static void main(String[] args) {\n        System.out.println(\"C:\\\\tools\\\\bin\");\n    }\n}\n```",
      "options": [
        "C:\\tools\\bin",
        "C:\\\\tools\\\\bin",
        "C:toolsbin",
        "Compilation error: invalid escape sequence"
      ],
      "answer": 0,
      "explain": "Each `\\\\` escape sequence prints a single backslash character.",
      "topic": "Backslash Escape Output",
      "type": "output",
      "level": "easy",
      "strength": "You correctly resolved the double backslash escape characters.",
      "weakness": "`\\\\` prints one backslash."
    },
    {
      "q": "A developer accidentally writes an infinite recursive method with no base case: `void loop() { loop(); }`. What error will the JVM throw at runtime?",
      "options": [
        "`java.lang.OutOfMemoryError: Java heap space`",
        "`java.lang.StackOverflowError`",
        "`java.lang.NullPointerException`",
        "`java.lang.ArithmeticException`"
      ],
      "answer": 1,
      "explain": "Every method invocation pushes a new stack frame onto the thread's call stack. Infinite recursion quickly exhausts the call stack memory, triggering a `StackOverflowError`.",
      "topic": "Call Stack Dynamics",
      "type": "scenario",
      "level": "medium",
      "strength": "You correctly identified the StackOverflowError resulting from infinite recursion.",
      "weakness": "Recursive calls without base cases exhaust the call stack, throwing `StackOverflowError`."
    },
    {
      "q": "What is the key difference between single-line comments and multi-line comments in Java?",
      "options": [
        "Single-line comments start with `//` and extend to line end; multi-line comments use `/* ... */`",
        "Single-line comments are compiled into bytecode; multi-line comments are ignored",
        "Multi-line comments can be nested indefinitely inside other multi-line comments",
        "Single-line comments can only appear inside method bodies"
      ],
      "answer": 0,
      "explain": "`//` comments out the remainder of the line. `/* ... */` comments out everything between the delimiters. Note that multi-line comments cannot be nested.",
      "topic": "Comment Syntax",
      "type": "theory",
      "level": "easy",
      "strength": "Correct understanding of comment delimiters in Java.",
      "weakness": "Remember: multi-line comments `/* ... */` cannot be nested inside each other."
    },
    {
      "q": "What error will occur when compiling this code?\n```java\npublic class VarMistake {\n    public static void main(String[] args) {\n        int public = 50;\n        System.out.println(public);\n    }\n}\n```",
      "options": [
        "Cannot use modifier `public` in local variable declaration",
        "`public` is an invalid identifier because it is a reserved access modifier keyword",
        "Missing semicolon",
        "Variable must be declared as static"
      ],
      "answer": 1,
      "explain": "`public` is a reserved keyword in Java, so it cannot be used as an identifier name.",
      "topic": "Reserved Words as Identifiers",
      "type": "error",
      "level": "easy",
      "strength": "You correctly recognized that `public` is a reserved keyword.",
      "weakness": "Never name variables with Java keywords."
    },
    {
      "q": "What is the function of the Just-In-Time (JIT) compiler in the JVM?",
      "options": [
        "It translates source code into bytecode before deployment",
        "It compiles frequently executed bytecode sequences into native machine code at runtime",
        "It validates that code contains no syntax errors during typing",
        "It packages multiple `.class` files into an executable `.jar` file"
      ],
      "answer": 1,
      "explain": "The JIT compiler analyzes running bytecode ('hot spots') and compiles frequently executed sections directly into native CPU code to optimize execution speed.",
      "topic": "JIT Optimization",
      "type": "theory",
      "level": "medium",
      "strength": "You understand how the JIT compiler boosts Java runtime performance.",
      "weakness": "Study how the JVM combines bytecode interpretation with JIT native compilation."
    },
    {
      "q": "What error occurs in this code?\n```java\npublic class CharEscape {\n    public static void main(String[] args) {\n        char c = '\\c';\n        System.out.println(c);\n    }\n}\n```",
      "options": [
        "Character constants cannot use single quotes",
        "Illegal escape character `\\c` in character literal",
        "`char` cannot be printed to console",
        "Missing double quotes for string formatting"
      ],
      "answer": 1,
      "explain": "`\\c` is not a valid escape sequence in Java (valid ones include `\\n`, `\\t`, `\\b`, `\\r`, `\\f`, `\\'`, `\\\"`, `\\\\`).",
      "topic": "Escape Sequence Validation",
      "type": "error",
      "level": "medium",
      "strength": "You spotted the invalid escape character sequence.",
      "weakness": "Only specific escape characters like `\\n`, `\\t`, `\\\\`, `\\'` are valid in Java."
    },
    {
      "q": "What is the output of the following code?\n```java\npublic class ArgsFirst {\n    public static void main(String[] args) {\n        System.out.println(args[0]);\n    }\n}\n```\nwhen executed as: `java ArgsFirst Alpha Beta`",
      "options": [
        "ArgsFirst",
        "Alpha",
        "Beta",
        "Alpha Beta"
      ],
      "answer": 1,
      "explain": "`args[0]` accesses the first argument after the class name, which is `Alpha`.",
      "topic": "Args Array Access",
      "type": "output",
      "level": "medium",
      "strength": "You accurately extracted the first command-line argument.",
      "weakness": "Java command-line argument indexing starts with the first argument after the class name."
    },
    {
      "q": "A team member complains that typing `javac` in the terminal results in 'command not found', even though the JDK is installed. Which system setting is incorrectly configured?",
      "options": [
        "The `CLASSPATH` variable",
        "The system `PATH` environment variable does not include the JDK `bin` directory",
        "The monitor display resolution",
        "The Java memory heap max limit"
      ],
      "answer": 1,
      "explain": "The operating system searches directories listed in the `PATH` environment variable to find executables like `javac` and `java`.",
      "topic": "Environment Troubleshooting",
      "type": "scenario",
      "level": "medium",
      "strength": "You correctly diagnosed the missing JDK bin entry in the PATH environment variable.",
      "weakness": "The `PATH` environment variable tells the shell where to locate command-line binaries like `javac`."
    },
    {
      "q": "Which component is responsible for compiling `.java` source code into `.class` bytecode?",
      "options": [
        "The JVM (Java Virtual Machine)",
        "The JRE (Java Runtime Environment)",
        "The Java Compiler (`javac`)",
        "The JIT (Just-In-Time) compiler"
      ],
      "answer": 2,
      "explain": "`javac` is the command-line compiler included in the JDK that translates human-readable `.java` source code into platform-neutral bytecode.",
      "topic": "JDK & Compilation Tools",
      "type": "theory",
      "level": "easy",
      "strength": "You accurately identified the role of the `javac` compiler.",
      "weakness": "Remember that `javac` compiles source code, while `java` launches the JVM to run bytecode."
    },
    {
      "q": "What is wrong with this file if it is saved as `MainApp.java`?\n```java\npublic class Runner {\n    public static void main(String[] args) {\n        System.out.println(\"Running...\");\n    }\n}\n```",
      "options": [
        "A class named Runner cannot contain a main method",
        "Compilation error: class Runner is public, should be declared in a file named Runner.java",
        "The file must be named `Runner.class`",
        "No error; the file name does not need to match the public class name"
      ],
      "answer": 1,
      "explain": "In Java, a public top-level class must be saved in a source file matching its exact name with `.java` extension.",
      "topic": "File Naming Constraints",
      "type": "error",
      "level": "easy",
      "strength": "You spotted the mismatch between the public class name and file name.",
      "weakness": "A public class `Runner` MUST reside in `Runner.java`."
    },
    {
      "q": "What is the output of this code?\n```java\npublic class MathParentheses {\n    public static void main(String[] args) {\n        System.out.println(\"Result: \" + (10 + 20));\n    }\n}\n```",
      "options": [
        "Result: 1020",
        "Result: 30",
        "Result: (10 + 20)",
        "Result: 10 + 20"
      ],
      "answer": 1,
      "explain": "Parentheses force `10 + 20` to evaluate first as arithmetic (30). Then `\"Result: \" + 30` creates `\"Result: 30\"`.",
      "topic": "Parentheses Override",
      "type": "output",
      "level": "easy",
      "strength": "You understood how parentheses enforce arithmetic evaluation before concatenation.",
      "weakness": "Parentheses have higher precedence and force addition before string concatenation."
    },
    {
      "q": "You are configuring a production Linux server to run pre-compiled Java microservice JAR files. The server does NOT compile code. What should you install to minimize storage and security attack surface?",
      "options": [
        "The complete JDK (Java Development Kit)",
        "The JRE (Java Runtime Environment)",
        "The C++ build essentials package",
        "The Javadoc documentation bundle"
      ],
      "answer": 1,
      "explain": "The JRE provides the JVM and core runtime libraries needed to run compiled bytecode without unnecessary development tools like compilers or debuggers.",
      "topic": "Production Deployment",
      "type": "scenario",
      "level": "easy",
      "strength": "You selected the leanest and most secure runtime for production deployment.",
      "weakness": "A production server running compiled JARs requires only the JRE, not the full JDK."
    },
    {
      "q": "Which of the following is true regarding case-sensitivity in Java?",
      "options": [
        "Java is case-insensitive; `Main` and `main` are completely equivalent",
        "Only class names are case-sensitive; variable names are case-insensitive",
        "Java is strictly case-sensitive for all identifiers, keywords, and class names",
        "Keywords are case-insensitive, but method names are case-sensitive"
      ],
      "answer": 2,
      "explain": "Java is entirely case-sensitive. `System` is not the same as `system`, and `void` is not the same as `Void`.",
      "topic": "Case Sensitivity",
      "type": "theory",
      "level": "easy",
      "strength": "You recognize that Java enforces strict case-sensitivity across all tokens.",
      "weakness": "Remember: Java treats `MyClass`, `myclass`, and `MYCLASS` as completely distinct identifiers."
    },
    {
      "q": "What compilation error occurs here?\n```java\npublic class ReturnVoid {\n    public static void main(String[] args) {\n        return 5;\n    }\n}\n```",
      "options": [
        "cannot return a value from a method with void result type",
        "main method cannot have a return statement",
        "5 must be cast to void",
        "return statement must be enclosed in parentheses"
      ],
      "answer": 0,
      "explain": "A method with return type `void` cannot return any value. A bare `return;` is allowed, but returning an expression like `5` is a compile-time error.",
      "topic": "Void Return Mismatch",
      "type": "error",
      "level": "easy",
      "strength": "You recognized that void methods cannot return a value.",
      "weakness": "Void methods can only use `return;` without any value."
    },
    {
      "q": "Why must the `main` method in standard Java applications be declared as `static`?",
      "options": [
        "So that its return value cannot be modified by subclasses",
        "Because the JVM needs to invoke it without instantiating an object of the enclosing class",
        "To ensure that only one thread can execute it simultaneously",
        "To force all variables declared inside it to be stored in global memory"
      ],
      "answer": 1,
      "explain": "The JVM launches the application before any objects exist, so `main` must be `static` so it can be called directly via the class name.",
      "topic": "Main Method Contract",
      "type": "theory",
      "level": "medium",
      "strength": "Strong grasp of why static methods exist and how the JVM bootstraps execution.",
      "weakness": "Recall that static members belong to the class, not to any individual instance."
    },
    {
      "q": "What is the error in the following package statement?\n```java\nimport java.util.Scanner;\npackage com.study.java;\npublic class App {}\n```",
      "options": [
        "`Scanner` cannot be imported before `App`",
        "The `package` statement must be the very first non-comment statement in a Java source file",
        "Package names cannot use dots",
        "App must be declared as private"
      ],
      "answer": 1,
      "explain": "If a package statement is present, it MUST appear as the very first token in the file (excluding comments). It cannot follow `import` statements.",
      "topic": "Package Statement Placement",
      "type": "error",
      "level": "medium",
      "strength": "You caught the illegal ordering of package and import statements.",
      "weakness": "File structure order: package statement first, then imports, then class declarations."
    },
    {
      "q": "What is the output of the following code?\n```java\npublic class MixedConcat {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 2;\n        System.out.println(a + b + \"-\" + a + b);\n    }\n}\n```",
      "options": [
        "7-7",
        "7-52",
        "52-52",
        "52-7"
      ],
      "answer": 1,
      "explain": "`a + b` evaluates to 7. `7 + \"-\"` gives `\"7-\"`. Then `\"7-\" + 5` gives `\"7-5\"`, and `\"7-5\" + 2` gives `\"7-52\"`.",
      "topic": "Mixed Concatenation Tracing",
      "type": "output",
      "level": "medium",
      "strength": "You accurately traced the multi-stage evaluation of mixed addition and string concatenation.",
      "weakness": "Once a string is introduced, subsequent `+` operations become string concatenations."
    },
    {
      "q": "A developer compiles `PaymentService.java` on a Windows 11 computer with JDK 17. They copy `PaymentService.class` directly to a Red Hat Enterprise Linux 9 server with OpenJDK 17 installed. Will the file run without recompilation?",
      "options": [
        "No, because Windows and Linux use incompatible executable binary formats",
        "Yes, because Java bytecode is platform-independent and can be executed by any compliant JVM of the same or higher version",
        "No, because the byte order (endianness) of Windows and Linux is inverted",
        "Yes, but only if Windows Subsystem for Linux is installed on the server"
      ],
      "answer": 1,
      "explain": "This embodies Java's WORA (Write Once, Run Anywhere) principle. Bytecode generated on Windows is fully portable to any compatible JVM on Linux.",
      "topic": "Cross-Platform Deployment",
      "type": "scenario",
      "level": "medium",
      "strength": "You understood how platform-independent bytecode enables seamless cross-OS deployment.",
      "weakness": "Compiled `.class` files are identical across operating systems."
    },
    {
      "q": "What does the famous Java slogan 'WORA' stand for?",
      "options": [
        "Write Once, Run Anywhere",
        "Windows Only, Reliable Always",
        "Web Oriented, Runtime Accessible",
        "Work Online, Render Anywhere"
      ],
      "answer": 0,
      "explain": "'Write Once, Run Anywhere' illustrates Java's cross-platform portability through bytecode executed on platform-specific JVMs.",
      "topic": "Java Portability Philosophy",
      "type": "theory",
      "level": "easy",
      "strength": "You understand Java's platform-independent design philosophy.",
      "weakness": "Review how intermediate bytecode enables 'Write Once, Run Anywhere'."
    },
    {
      "q": "What error occurs in this snippet?\n```java\npublic class PrintDemo {\n    public static void main(String[] args) {\n        System.out.println(\"Hello World);\n    }\n}\n```",
      "options": [
        "Missing closing double quote resulting in an unclosed string literal error",
        "System is not capitalized properly",
        "main method must return a String",
        "println cannot take String arguments"
      ],
      "answer": 0,
      "explain": "The string literal `\"Hello World)` is missing its closing quote `\"`, causing an 'unclosed string literal' compile-time error.",
      "topic": "String Literal Syntax",
      "type": "error",
      "level": "easy",
      "strength": "You correctly caught the unclosed string literal.",
      "weakness": "String literals in Java must be enclosed by matching double quotes on the same line."
    },
    {
      "q": "What is the output of the following code?\n```java\npublic class EmptyPrint {\n    public static void main(String[] args) {\n        System.out.print(\"Java\");\n        System.out.println();\n        System.out.print(\"Rock\");\n    }\n}\n```",
      "options": [
        "JavaRock",
        "Java\nRock",
        "Java Rock",
        "Compilation error: println() requires arguments"
      ],
      "answer": 1,
      "explain": "`System.out.println()` with no arguments prints an empty line (a newline character).",
      "topic": "Empty println Behavior",
      "type": "output",
      "level": "easy",
      "strength": "You know that calling `println()` without arguments simply prints a newline.",
      "weakness": "`println()` is overloaded to accept 0 parameters to advance to the next line."
    },
    {
      "q": "You are designing an enterprise Java application. According to standard Java naming conventions, which of the following represents the correct naming for a class, a method, and a constant?",
      "options": [
        "Class: `bank_account`, Method: `GetBalance`, Constant: `max_limit`",
        "Class: `BankAccount`, Method: `getBalance`, Constant: `MAX_LIMIT`",
        "Class: `bankAccount`, Method: `getBalance`, Constant: `MaxLimit`",
        "Class: `BANK_ACCOUNT`, Method: `get_balance`, Constant: `MAX_LIMIT`"
      ],
      "answer": 1,
      "explain": "Standard Java conventions: Classes in UpperCamelCase (`BankAccount`), methods in lowerCamelCase (`getBalance`), and constants in SCREAMING_SNAKE_CASE (`MAX_LIMIT`).",
      "topic": "Industry Code Standards",
      "type": "scenario",
      "level": "easy",
      "strength": "You accurately applied standard Java naming conventions across identifiers.",
      "weakness": "Remember: Classes use UpperCamelCase, methods use lowerCamelCase, constants use SCREAMING_SNAKE_CASE."
    },
    {
      "q": "What error does the compiler report here?\n```java\npublic class CaseMistake {\n    Public static void main(String[] args) {\n        System.out.println(\"Hi\");\n    }\n}\n```",
      "options": [
        "Public is not a valid modifier keyword (Java keywords must be entirely lowercase: `public`)",
        "Hi must be in double quotes",
        "main must be capitalized",
        "No error"
      ],
      "answer": 0,
      "explain": "All Java keywords are lowercase. `Public` with a capital 'P' is treated as an unknown identifier or class type, causing a compilation error.",
      "topic": "Keyword Casing Errors",
      "type": "error",
      "level": "easy",
      "strength": "You caught the capitalized keyword `Public`.",
      "weakness": "Java keywords are strictly lowercase: `public`, `static`, `void`."
    },
    {
      "q": "What is the output of this code?\n```java\npublic class MultiPrint {\n    public static void main(String[] args) {\n        int count = 1;\n        System.out.print(count + \" \");\n        count = count + 2;\n        System.out.println(count);\n    }\n}\n```",
      "options": [
        "1 3",
        "1\n3",
        "3",
        "1 2"
      ],
      "answer": 0,
      "explain": "First, `1 ` is printed without a newline. Then `count` is updated to 3, and `println(3)` prints `3` and ends the line, resulting in `1 3`.",
      "topic": "Sequential Execution Trace",
      "type": "output",
      "level": "easy",
      "strength": "You accurately traced variable re-assignment and mixed print calls.",
      "weakness": "Traced sequential evaluation and state change cleanly."
    },
    {
      "q": "What is automatic garbage collection in Java?",
      "options": [
        "A process that deletes compiled `.class` files after execution finishes",
        "A runtime mechanism that automatically reclaims heap memory occupied by unreferenced objects",
        "A compiler pass that removes unused variables from the source code",
        "A tool that clears IDE cache files periodically"
      ],
      "answer": 1,
      "explain": "Garbage collection runs in the background of the JVM to identify and deallocate objects in heap memory that are no longer reachable by any active reference.",
      "topic": "Garbage Collection",
      "type": "theory",
      "level": "medium",
      "strength": "You understand Java's automatic memory management philosophy.",
      "weakness": "Review how the Garbage Collector scans the heap for unreferenced objects."
    },
    {
      "q": "What error occurs here?\n```java\npublic class MainEntry {\n    public static int main(String[] args) {\n        System.out.println(\"Starting...\");\n        return 0;\n    }\n}\n```",
      "options": [
        "Compilation error: main cannot return an integer in Java",
        "The code compiles, but the JVM will not accept it as the application entry point because `main` must return `void`",
        "The code compiles and runs successfully, returning exit code 0 to the OS",
        "Missing arguments array in main header"
      ],
      "answer": 1,
      "explain": "The code compiles without syntax errors as a regular method named `main`. But when running `java MainEntry`, the JVM fails with 'Main method must return a value of type void'.",
      "topic": "Main Method Return Type",
      "type": "error",
      "level": "medium",
      "strength": "You distinguished between compile-time acceptance and JVM entry-point conformance.",
      "weakness": "The JVM specifically looks for `public static void main(String[] args)`."
    },
    {
      "q": "What is the output of this code?\n```java\npublic class NullString {\n    public static void main(String[] args) {\n        String s = null;\n        System.out.println(\"Value: \" + s);\n    }\n}\n```",
      "options": [
        "Value: null",
        "NullPointerException",
        "Value: ",
        "Compilation error"
      ],
      "answer": 0,
      "explain": "When a null reference is concatenated with a String, Java converts it to the string literal `\"null\"` without throwing a `NullPointerException`.",
      "topic": "Null String Concatenation",
      "type": "output",
      "level": "medium",
      "strength": "You correctly identified that concatenating a null reference converts it to the text 'null'.",
      "weakness": "String concatenation safely converts null references to the string 'null'."
    },
    {
      "q": "You need to pass the database URL `jdbc:mysql://localhost:3306/db` and port `3306` to your application when launching it from the command line. How do you pass these parameters and read them inside Java?",
      "options": [
        "Pass them as `java MyApp jdbc:mysql://localhost:3306/db 3306` and read them from `args[0]` and `args[1]`",
        "Type them into the terminal after the program launches",
        "Store them in the `System.in` buffer beforehand",
        "Pass them as compiler flags to `javac`"
      ],
      "answer": 0,
      "explain": "Arguments supplied after the class name on the command line are passed to `main(String[] args)` as elements of the `args` array.",
      "topic": "CLI Argument Passing",
      "type": "scenario",
      "level": "medium",
      "strength": "You know how to pass runtime parameters via CLI arguments.",
      "weakness": "Command-line parameters passed after the class name populate `args[0]`, `args[1]`, etc."
    },
    {
      "q": "Which package is automatically imported into every Java program without an explicit `import` statement?",
      "options": [
        "java.util",
        "java.io",
        "java.lang",
        "java.net"
      ],
      "answer": 2,
      "explain": "`java.lang` contains foundational classes such as `System`, `String`, `Math`, and `Object`, and is imported by default by the compiler.",
      "topic": "Java Standard Library",
      "type": "theory",
      "level": "easy",
      "strength": "Good grasp of default library imports in Java.",
      "weakness": "Remember that `java.lang` is the only package imported implicitly."
    },
    {
      "q": "Identify the compiler error in this code:\n```java\npublic class KeywordTest {\n    public static void main(String[] args) {\n        int class = 10;\n        System.out.println(class);\n    }\n}\n```",
      "options": [
        "`class` is a reserved keyword and cannot be used as a variable identifier",
        "Integer variables cannot be printed directly",
        "The main method cannot contain integer variables",
        "`class` must be declared as `public`"
      ],
      "answer": 0,
      "explain": "`class` is a reserved keyword in Java used for declaring classes, so it cannot be used as an identifier.",
      "topic": "Reserved Keyword Misuse",
      "type": "error",
      "level": "easy",
      "strength": "You correctly identified that `class` is a reserved keyword.",
      "weakness": "Never use reserved keywords like `class`, `public`, `return`, or `for` as variable names."
    },
    {
      "q": "What is the output of the following code?\n```java\npublic class TabPrint {\n    public static void main(String[] args) {\n        System.out.println(\"A\\tB\\nC\\tD\");\n    }\n}\n```",
      "options": [
        "A B C D on a single line",
        "A and B separated by a tab on line 1, C and D separated by a tab on line 2",
        "A\\tB\\nC\\tD verbatim",
        "Compile-time error: invalid escape sequence"
      ],
      "answer": 1,
      "explain": "`\\t` inserts a horizontal tab and `\\n` inserts a newline.",
      "topic": "Tab and Newline Output",
      "type": "output",
      "level": "easy",
      "strength": "You accurately traced tab and newline escape characters.",
      "weakness": "`\\t` produces tab spacing and `\\n` breaks to a new line."
    },
    {
      "q": "You are writing a CLI utility and need to print a formatted summary table of student grades. You need exact column spacing and two decimal places for averages. Which method should you choose?",
      "options": [
        "`System.out.print()`",
        "`System.out.println()`",
        "`System.out.printf()`",
        "`System.err.print()`"
      ],
      "answer": 2,
      "explain": "`System.out.printf()` supports format specifiers like `%-15s` for column width and `%.2f` for decimal formatting.",
      "topic": "Formatted Output Choice",
      "type": "scenario",
      "level": "easy",
      "strength": "You selected `printf` for tabular and decimal formatting.",
      "weakness": "Use `printf()` with format specifiers (`%s`, `%.2f`, `%-15s`) to align tabular data."
    },
    {
      "q": "What compiler error occurs in this code?\n```java\npublic class DotError {\n    public static void main(String[] args) {\n        System.out,println(\"Typo\");\n    }\n}\n```",
      "options": [
        "Illegal comma separator instead of dot between `out` and `println`",
        "Typo cannot be printed",
        "Missing semicolon after Typo",
        "main method cannot take String array"
      ],
      "answer": 0,
      "explain": "`System.out,println` contains a comma instead of a period, causing an invalid syntax compile-time error.",
      "topic": "Syntax Punctuation Errors",
      "type": "error",
      "level": "easy",
      "strength": "You caught the comma typo instead of dot operator.",
      "weakness": "Member access in Java uses dots: `System.out.println()`."
    },
    {
      "q": "What is the output of the following code?\n```java\npublic class SubstringPrint {\n    public static void main(String[] args) {\n        System.out.println(\"Java\".length());\n    }\n}\n```",
      "options": [
        "3",
        "4",
        "5",
        "Compilation error: cannot call method on literal string"
      ],
      "answer": 1,
      "explain": "String literals in Java are instances of `java.lang.String`. The string `\"Java\"` contains 4 characters.",
      "topic": "String Literal Methods",
      "type": "output",
      "level": "easy",
      "strength": "You correctly determined string length from a string literal.",
      "weakness": "`\"Java\".length()` returns 4."
    },
    {
      "q": "Can a single `.java` source file contain multiple `public` classes?",
      "options": [
        "Yes, as long as they all have unique names",
        "Yes, provided they all define a `main` method",
        "No, at most one class in a source file can be declared `public`, and its name must match the filename",
        "No, Java source files cannot contain more than one class under any circumstances"
      ],
      "answer": 2,
      "explain": "A `.java` file can contain multiple non-public (package-private) classes, but at most one `public` class, whose name must match the file's base name.",
      "topic": "Class and File Structure",
      "type": "theory",
      "level": "medium",
      "strength": "Accurate understanding of Java source file structure constraints.",
      "weakness": "Remember: Maximum of 1 `public` class per `.java` file, matching the filename."
    },
    {
      "q": "What happens when compiling this code?\n```java\npublic class ConstCheck {\n    public static void main(String[] args) {\n        const int SPEED = 100;\n        System.out.println(SPEED);\n    }\n}\n```",
      "options": [
        "Compiles and prints 100",
        "Compilation error: `const` is a reserved word, but constants in Java must be declared with `final`",
        "Compilation error: constants must be declared outside methods",
        "Compiles with a deprecation warning"
      ],
      "answer": 1,
      "explain": "`const` is a reserved keyword in Java inherited from C++, but it has no function. Java uses the `final` keyword to declare constants.",
      "topic": "Constant Declaration Syntax",
      "type": "error",
      "level": "medium",
      "strength": "You recognized that Java uses `final`, not `const`, for constants.",
      "weakness": "In Java, constants are declared using `final int SPEED = 100;`."
    },
    {
      "q": "What is the output of this code?\n```java\npublic class OrderOfInit {\n    static int x = 10;\n    public static void main(String[] args) {\n        int x = 20;\n        System.out.println(x);\n    }\n}\n```",
      "options": [
        "10",
        "20",
        "0",
        "Compilation error: duplicate variable x"
      ],
      "answer": 1,
      "explain": "The local variable `x` declared inside `main` shadows the static class field `x`, so `System.out.println(x)` prints the local variable value (20).",
      "topic": "Variable Shadowing",
      "type": "output",
      "level": "medium",
      "strength": "You understand local variable shadowing of class fields.",
      "weakness": "A local variable takes precedence over a class field of the same name within its scope."
    },
    {
      "q": "You are writing a utility that outputs system status messages to standard output and error alerts to standard error. How should these be routed in Java?",
      "options": [
        "Status messages to `System.out.println()`; errors to `System.err.println()`",
        "Both to `System.out.println()` with different colors",
        "Status messages to `System.err.println()`; errors to `System.in.println()`",
        "Status messages to `System.exit()`; errors to `System.out()`"
      ],
      "answer": 0,
      "explain": "`System.out` is connected to stdout, while `System.err` is connected to stderr, allowing shell pipelines to separate normal output from diagnostics.",
      "topic": "Standard Streams",
      "type": "scenario",
      "level": "medium",
      "strength": "You correctly separated standard output and standard error streams.",
      "weakness": "Use `System.out` for normal output and `System.err` for error messages."
    },
    {
      "q": "Which of the following is a VALID Java identifier?",
      "options": [
        "2ndCounter",
        "_user$score_99",
        "final-score",
        "default"
      ],
      "answer": 1,
      "explain": "Java identifiers can start with a letter, an underscore (`_`), or a dollar sign (`$`), followed by letters, digits, underscores, or dollar signs. They cannot start with a digit, contain hyphens, or match reserved keywords.",
      "topic": "Identifier Rules",
      "type": "theory",
      "level": "easy",
      "strength": "You accurately recognized the character rules for valid identifiers.",
      "weakness": "Remember: no digits at the start, no hyphens, and no reserved keywords like `default`."
    },
    {
      "q": "What error occurs in this code?\n```java\npublic class SemicolonTrap {\n    public static void main(String[] args)\n        System.out.println(\"Testing\");\n}\n```",
      "options": [
        "Missing semicolon after method header",
        "Missing opening curly brace `{` for the main method body",
        "Testing must be enclosed in single quotes",
        "The class must be abstract"
      ],
      "answer": 1,
      "explain": "A method with an implementation must enclose its body in curly braces `{ ... }`.",
      "topic": "Method Body Syntax",
      "type": "error",
      "level": "easy",
      "strength": "You spotted the missing curly brace for the method body.",
      "weakness": "Methods require curly braces to define their execution scope."
    },
    {
      "q": "What is the output of the following code?\n```java\npublic class CharPlusString {\n    public static void main(String[] args) {\n        char c = 'J';\n        System.out.println(c + \"ava\");\n    }\n}\n```",
      "options": [
        "Java",
        "74ava",
        "Compilation error",
        "J ava"
      ],
      "answer": 0,
      "explain": "Concatenating a char with a String converts the char to its string representation ('J' + \"ava\" -> \"Java\").",
      "topic": "Char String Concatenation",
      "type": "output",
      "level": "easy",
      "strength": "You recognized char-to-string concatenation.",
      "weakness": "Concatenating a char with a String appends the character directly."
    },
    {
      "q": "Your project contains three files: `Order.java`, `Customer.java`, and `Invoice.java`. You want to compile all of them simultaneously in the terminal. What command achieves this?",
      "options": [
        "`java Order Customer Invoice`",
        "`javac *.java`",
        "`compile Order.java Customer.java Invoice.java`",
        "`jvm --build all`"
      ],
      "answer": 1,
      "explain": "`javac *.java` uses the wildcard character to compile all Java source files in the current directory into bytecode.",
      "topic": "Batch Compilation",
      "type": "scenario",
      "level": "easy",
      "strength": "You know how to use wildcard compilation with `javac`.",
      "weakness": "`javac *.java` compiles all `.java` files in the folder."
    },
    {
      "q": "What is the output of this code?\n```java\npublic class StringQuote {\n    public static void main(String[] args) {\n        System.out.println(\"'Hello'\");\n    }\n}\n```",
      "options": [
        "'Hello'",
        "Hello",
        "\"Hello\"",
        "Compilation error: single quotes inside double quotes"
      ],
      "answer": 0,
      "explain": "Single quotes do not need to be escaped inside double-quoted string literals. The exact characters `'Hello'` are printed.",
      "topic": "Single Quotes in Strings",
      "type": "output",
      "level": "easy",
      "strength": "You recognized that single quotes do not require escaping inside double-quoted strings.",
      "weakness": "Only double quotes and backslashes require escaping inside string literals."
    },
    {
      "q": "A developer wants to make sure their source code is completely self-documenting for a team of 10 developers. What is the most effective approach?",
      "options": [
        "Write 10 lines of comments for every single line of code",
        "Use expressive, self-explanatory identifier names, clear modular methods, and Javadoc for public APIs",
        "Avoid using variables and hard-code values everywhere",
        "Put all code into a single massive file so teammates don't have to switch tabs"
      ],
      "answer": 1,
      "explain": "Clean code philosophy emphasizes meaningful names and small focused methods so code reads like well-written prose, supplemented by Javadoc for external contracts.",
      "topic": "Clean Code Practices",
      "type": "scenario",
      "level": "easy",
      "strength": "You understand clean code principles and documentation best practices.",
      "weakness": "Clear names and clean method boundaries make code self-documenting."
    },
    {
      "q": "Where are object instances and their instance variables allocated in the JVM?",
      "options": [
        "On the Call Stack",
        "Inside the Heap",
        "Inside the CPU registers permanently",
        "Inside the ClassLoader cache"
      ],
      "answer": 1,
      "explain": "All Java objects and arrays are dynamically allocated on the Heap, which is shared among all threads and managed by the Garbage Collector.",
      "topic": "JVM Memory Model",
      "type": "theory",
      "level": "medium",
      "strength": "You know that objects are created in the Heap.",
      "weakness": "Remember: `new` always allocates memory on the Heap."
    },
    {
      "q": "What error does the compiler produce here?\n```java\npublic class MultiLineStr {\n    public static void main(String[] args) {\n        String msg = \"Hello\nWorld\";\n        System.out.println(msg);\n    }\n}\n```",
      "options": [
        "Unclosed string literal error: standard string literals cannot span multiple lines without concatenation or escape sequences",
        "Missing semicolon after Hello",
        "World is recognized as an uninitialized variable",
        "Strings cannot contain newline characters"
      ],
      "answer": 0,
      "explain": "Standard double-quoted string literals in Java cannot span raw line breaks. You must either use `\\n` or text blocks `\"\"\" ... \"\"\"` (Java 15+).",
      "topic": "String Literal Line Breaks",
      "type": "error",
      "level": "medium",
      "strength": "You caught the multi-line string literal error.",
      "weakness": "Standard string literals must be completed on the same line or use `\\n`."
    },
    {
      "q": "What is the output of the following code?\n```java\npublic class MathPrint {\n    public static void main(String[] args) {\n        System.out.println(1 + 2 + \"3\" + 4 + 5);\n    }\n}\n```",
      "options": [
        "15",
        "3345",
        "339",
        "12345"
      ],
      "answer": 1,
      "explain": "`1 + 2` evaluates to 3. Then `3 + \"3\"` evaluates to `\"33\"`. Subsequent `+` operations concatenate: `\"33\" + 4 -> \"334\"`, `\"334\" + 5 -> \"3345\"`.",
      "topic": "Complex Concatenation Flow",
      "type": "output",
      "level": "medium",
      "strength": "You accurately stepped through the transition from numeric addition to string concatenation.",
      "weakness": "`1 + 2` is 3, then concatenating `\"3\"` turns all subsequent operations into string concatenations: `3345`."
    },
    {
      "q": "A distributed system requires a unique identifier for classes that are serialized and sent over a network. Why does Java use package names formatted like `com.company.project`?",
      "options": [
        "To ensure class files can be downloaded from web servers via HTTP",
        "To provide a globally unique namespace by reversing an internet domain name",
        "Because the Java compiler requires domains to register licenses",
        "To make file paths shorter on disk"
      ],
      "answer": 1,
      "explain": "Java conventions recommend using reversed domain names (e.g., `com.google`, `org.apache`) as package prefixes to guarantee globally unique namespaces.",
      "topic": "Package Naming Strategy",
      "type": "scenario",
      "level": "medium",
      "strength": "You understand the reverse-domain convention for package names.",
      "weakness": "Reversing domain names guarantees unique package namespaces across organizations."
    },
    {
      "q": "What is the extension of compiled Java bytecode files?",
      "options": [
        ".java",
        ".class",
        ".exe",
        ".jvm"
      ],
      "answer": 1,
      "explain": "Java source files have the `.java` extension, while compiled bytecode files generated by `javac` have the `.class` extension.",
      "topic": "File Extensions",
      "type": "theory",
      "level": "easy",
      "strength": "Correct understanding of Java compilation artifacts.",
      "weakness": "Remember: .java is source code, .class is bytecode."
    },
    {
      "q": "What error occurs when compiling this class?\n```java\npublic class Duplicate {\n    public static void main(String[] args) {\n        int count = 5;\n        double count = 10.5;\n        System.out.println(count);\n    }\n}\n```",
      "options": [
        "Count cannot be cast to double",
        "Variable `count` is already defined in the scope of `main`",
        "Local variables cannot be declared twice in different classes",
        "println cannot resolve ambiguous variables"
      ],
      "answer": 1,
      "explain": "You cannot declare two variables with the same identifier in the same scope, even if their data types differ.",
      "topic": "Variable Scope Redefinition",
      "type": "error",
      "level": "easy",
      "strength": "You caught the duplicate variable declaration in the same local scope.",
      "weakness": "Identifiers within the same scope must be unique."
    },
    {
      "q": "What is the output of the following code?\n```java\npublic class PrintZero {\n    public static void main(String[] args) {\n        int a = 0;\n        System.out.print(a);\n        System.out.print(a + 1);\n    }\n}\n```",
      "options": [
        "01",
        "0\n1",
        "1",
        "Compilation error"
      ],
      "answer": 0,
      "explain": "Both statements use `print()`, which does not add a newline, outputting '0' and then '1' immediately following it.",
      "topic": "Sequential Print",
      "type": "output",
      "level": "easy",
      "strength": "You accurately predicted continuous output from multiple `print()` calls.",
      "weakness": "`print()` outputs directly to standard out without trailing newlines."
    },
    {
      "q": "You are building an open-source library and want to generate comprehensive API documentation website for developers. What type of comments and command should you use?",
      "options": [
        "Single-line comments `//` with `java --doc`",
        "Javadoc comments `/** ... */` with tags like `@param` and `@return`, processed using the `javadoc` tool",
        "Block comments `/* ... */` with the `javac -doc` flag",
        "Markdown files compiled with `make`"
      ],
      "answer": 1,
      "explain": "Javadoc comments `/** ... */` support standardized tags (`@param`, `@return`, `@throws`) and are processed by the `javadoc` tool to produce HTML documentation.",
      "topic": "API Documentation Strategy",
      "type": "scenario",
      "level": "easy",
      "strength": "You know the industry standard Javadoc workflow.",
      "weakness": "Use `/** ... */` comments with tags and run `javadoc` to generate HTML documentation."
    },
    {
      "q": "What is the output of this code?\n```java\npublic class EscapeNewline {\n    public static void main(String[] args) {\n        System.out.print(\"Line1\\nLine2\");\n    }\n}\n```",
      "options": [
        "Line1\\nLine2",
        "Line1\nLine2",
        "Line1Line2",
        "Compilation error"
      ],
      "answer": 1,
      "explain": "The embedded `\\n` within the string literal causes a newline break, producing 'Line1' on the first line and 'Line2' on the second.",
      "topic": "Embedded Escape Newline",
      "type": "output",
      "level": "easy",
      "strength": "You recognized that `\\n` creates a line break within a string literal.",
      "weakness": "`\\n` triggers a line break even when called inside `System.out.print()`."
    },
    {
      "q": "You receive a `.jar` file containing an executable Java program. What command line executes this archive directly?",
      "options": [
        "`javac -jar app.jar`",
        "`java -jar app.jar`",
        "`run app.jar`",
        "`jvm --open app.jar`"
      ],
      "answer": 1,
      "explain": "The `-jar` flag instructs the `java` launcher to read the `Main-Class` manifest header inside `app.jar` and execute its main method.",
      "topic": "JAR Execution",
      "type": "scenario",
      "level": "easy",
      "strength": "You know how to run executable JAR files using `java -jar`.",
      "weakness": "Use `java -jar archive.jar` to execute packaged Java applications."
    },
    {
      "q": "Why are Java bytecode files considered platform-independent while the JVM itself is platform-dependent?",
      "options": [
        "Bytecode contains native Windows machine code; the JVM converts it to Linux code",
        "Bytecode conforms to a standardized universal instruction set; each OS requires a custom JVM built for its specific architecture",
        "Bytecode is plain text that can be read by any text processor; the JVM is proprietary software",
        "Bytecode is compiled on the client machine; the JVM runs strictly in cloud servers"
      ],
      "answer": 1,
      "explain": "The bytecode specification is identical across all systems. However, executing that bytecode on Windows x86 requires a different JVM binary than on macOS ARM64.",
      "topic": "Platform Independence",
      "type": "theory",
      "level": "medium",
      "strength": "Strong grasp of the dichotomy between universal bytecode and native JVM implementations.",
      "weakness": "Remember: Bytecode is universal; the JVM is native to each OS/architecture."
    },
    {
      "q": "What error is present in this method declaration?\n```java\npublic class ParamError {\n    public static void run(int a, b) {\n        System.out.println(a + b);\n    }\n}\n```",
      "options": [
        "Methods cannot accept two parameters",
        "Syntax error: every parameter must explicitly specify its data type (should be `int a, int b`)",
        "Parameters cannot use lowercase letters",
        "Missing return type"
      ],
      "answer": 1,
      "explain": "Unlike variable declarations where you can write `int a, b;`, method parameters require a distinct data type for every parameter: `int a, int b`.",
      "topic": "Parameter Declaration Syntax",
      "type": "error",
      "level": "medium",
      "strength": "You caught the missing data type in the parameter list.",
      "weakness": "In Java, each method parameter must have its own type specification: `(int a, int b)`."
    },
    {
      "q": "What is the output of the following code?\n```java\npublic class Output1 {\n    public static void main(String[] args) {\n        System.out.print(\"A\");\n        System.out.println(\"B\");\n        System.out.print(\"C\");\n    }\n}\n```",
      "options": [
        "A\nB\nC",
        "AB\nC",
        "ABC",
        "A\nBC"
      ],
      "answer": 1,
      "explain": "`print(\"A\")` outputs 'A' without newline. `println(\"B\")` prints 'B' and then moves to the next line. `print(\"C\")` prints 'C' on the new line.",
      "topic": "Print vs Println",
      "type": "output",
      "level": "easy",
      "strength": "You accurately traced the output stream line-break behavior.",
      "weakness": "Remember: `print` stays on the same line, while `println` appends a newline."
    },
    {
      "q": "You want to organize a large project into packages. If a class `Order` belongs to package `com.shop.billing`, in which folder must `Order.java` reside relative to the source root?",
      "options": [
        "`com_shop_billing/`",
        "`com/shop/billing/`",
        "`billing/shop/com/`",
        "`src/packages/Order/`"
      ],
      "answer": 1,
      "explain": "Java's package naming directly mirrors filesystem folder hierarchies: dots in package names represent directory separators.",
      "topic": "Directory Mapping",
      "type": "scenario",
      "level": "medium",
      "strength": "You understand the direct mapping between package names and folder structures.",
      "weakness": "Package dots correspond to nested subfolders: `com/shop/billing/Order.java`."
    },
    {
      "q": "Which Java naming convention is standard for classes?",
      "options": [
        "camelCase (e.g., studentRecord)",
        "PascalCase / UpperCamelCase (e.g., StudentRecord)",
        "snake_case (e.g., student_record)",
        "SCREAMING_SNAKE_CASE (e.g., STUDENT_RECORD)"
      ],
      "answer": 1,
      "explain": "Java conventions dictate PascalCase (UpperCamelCase) for classes and interfaces, lowerCamelCase for variables and methods, and SCREAMING_SNAKE_CASE for constants.",
      "topic": "Naming Conventions",
      "type": "theory",
      "level": "easy",
      "strength": "You know standard Java code naming conventions.",
      "weakness": "Remember: Classes use UpperCamelCase, variables/methods use lowerCamelCase."
    },
    {
      "q": "What error occurs in this code?\n```java\npublic class BadImport {\n    import java.util.*;\n    public static void main(String[] args) {}\n}\n```",
      "options": [
        "Wildcard imports `*` are illegal in Java",
        "`import` statements cannot be placed inside a class definition",
        "java.util does not contain any classes",
        "The main method cannot follow an import"
      ],
      "answer": 1,
      "explain": "`import` statements must be placed outside and before class definitions, not inside the class body.",
      "topic": "Import Statement Scope",
      "type": "error",
      "level": "easy",
      "strength": "You correctly identified the misplaced import statement inside a class.",
      "weakness": "Imports belong at the top of the file, outside any class braces."
    },
    {
      "q": "What is the output of this code?\n```java\npublic class BooleanPrint {\n    public static void main(String[] args) {\n        boolean flag = true;\n        System.out.println(\"Status: \" + flag);\n    }\n}\n```",
      "options": [
        "Status: true",
        "Status: 1",
        "Status: TRUE",
        "Compilation error"
      ],
      "answer": 0,
      "explain": "In Java, boolean values are converted to lowercase string literals `\"true\"` or `\"false\"` when concatenated with strings.",
      "topic": "Boolean String Representation",
      "type": "output",
      "level": "easy",
      "strength": "You know that Java booleans print as 'true' or 'false', not 1 or 0.",
      "weakness": "Java booleans render as lowercase text 'true' or 'false'."
    },
    {
      "q": "You are reviewing code written by a junior developer: `int Number_Of_Students = 30;`. How should this variable declaration be refactored to follow standard Java conventions?",
      "options": [
        "`int NUMBER_OF_STUDENTS = 30;`",
        "`int numberOfStudents = 30;`",
        "`int number_of_students = 30;`",
        "`int NumberOfStudents = 30;`"
      ],
      "answer": 1,
      "explain": "In Java, variables must follow `lowerCamelCase` conventions (e.g., `numberOfStudents`).",
      "topic": "Code Refactoring",
      "type": "scenario",
      "level": "easy",
      "strength": "You applied the correct lowerCamelCase convention to variable naming.",
      "weakness": "Local and instance variables in Java use lowerCamelCase."
    },
    {
      "q": "What is the output of this code?\n```java\npublic class CommentOutput {\n    public static void main(String[] args) {\n        // System.out.print(\"One\");\n        /* System.out.print(\"Two\"); */\n        System.out.print(\"Three\");\n    }\n}\n```",
      "options": [
        "OneTwoThree",
        "Three",
        "TwoThree",
        "OneThree"
      ],
      "answer": 1,
      "explain": "Comments are completely stripped out by the compiler and produce no bytecode. Only `System.out.print(\"Three\")` is executed.",
      "topic": "Comment Erasure",
      "type": "output",
      "level": "easy",
      "strength": "You correctly observed that comments are ignored by the compiler.",
      "weakness": "Comments do not generate bytecode and are ignored during execution."
    },
    {
      "q": "You are preparing for your university WIX1002 Java examination. The exam contains code snippets with subtle bugs. What is the most effective mental model for predicting Java code execution?",
      "options": [
        "Guessing based on how Python or JavaScript would execute the code",
        "Simulating the JVM step-by-step: tracking variable memory state on the stack and heap, observing operator precedence, and validating type compatibility",
        "Assuming all code snippets contain syntax errors",
        "Memorizing outputs from textbook problems without understanding the mechanics"
      ],
      "answer": 1,
      "explain": "Tracing code with a JVM mental model (Stack frames, Heap objects, type promotion, operator precedence) is the guaranteed method to predict output and spot tricky exam traps.",
      "topic": "Exam Strategy & JVM Model",
      "type": "scenario",
      "level": "easy",
      "strength": "You understand the power of JVM mental model simulation for academic success.",
      "weakness": "Trace execution methodically: state on stack, objects on heap, and operator precedence."
    }
  ],
  "1": [
    {
      "q": "What is the result of `7 % -3` in Java according to the remainder operator rules?",
      "options": [
        "-1",
        "1",
        "-2",
        "2"
      ],
      "answer": 1,
      "explain": "In Java, the sign of the result of the remainder operator `%` is determined solely by the dividend (left operand). Since 7 is positive, `7 % -3` is `1`.",
      "topic": "Modulus Operator",
      "type": "theory",
      "level": "hard",
      "strength": "Understands Java modulus sign rules (sign follows the dividend).",
      "weakness": "In Java `a % b`, the sign of the result always matches the sign of `a`, ignoring the sign of `b`."
    },
    {
      "q": "Why does the following compound assignment compile, whereas standard assignment fails?\n```java\nbyte b = 5;\nb += 2; // Compiles!\n// b = b + 2; // Fails to compile!\n```",
      "options": [
        "`+=` converts the expression to double automatically",
        "Compound assignment operators (`+=`, `-=`, etc.) implicitly inject a cast back to the target type: `b = (byte)(b + 2)`",
        "The compiler optimizes `b += 2` into bitwise shift",
        "Literal 2 is treated as a byte when using `+=`"
      ],
      "answer": 1,
      "explain": "The Java Language Specification defines compound assignment `E1 op= E2` as equivalent to `E1 = (T)(E1 op E2)`, where T is the type of E1. It implicitly casts the resulting int back to byte.",
      "topic": "Compound Assignment Casting",
      "type": "error",
      "level": "hard",
      "strength": "Deep insight into compound assignment implicit type casting.",
      "weakness": "`b += 2` implicitly casts to `(byte)(b + 2)`, hiding narrowing truncation errors."
    },
    {
      "q": "What does the following snippet print?\n```java\nint x = 10;\nSystem.out.println(~x);\n```",
      "options": [
        "-10",
        "-11",
        "9",
        "11"
      ],
      "answer": 1,
      "explain": "The bitwise NOT operator `~` inverts all bits. In two's complement representation, `~n = -(n + 1)`. Thus `~10 = -11`.",
      "topic": "Bitwise NOT Formula",
      "type": "output",
      "level": "hard",
      "strength": "Knows the two's complement bitwise inversion formula `~n = -(n + 1)`.",
      "weakness": "Bitwise NOT `~x` on two's complement integer equals `-(x + 1)`."
    },
    {
      "q": "A developer at a logistics company wants to swap the values of two integer variables `a` and `b` without creating an extra temporary variable. Which bitwise operation achieves this?",
      "options": [
        "`a = a & b; b = a & b; a = a & b;`",
        "`a = a ^ b; b = a ^ b; a = a ^ b;`",
        "`a = a | b; b = a | b; a = a | b;`",
        "`a = ~b; b = ~a; a = ~b;`"
      ],
      "answer": 1,
      "explain": "The XOR swap algorithm uses the property that `x ^ x = 0` and `x ^ 0 = x`. Step 1: `a = a ^ b`. Step 2: `b = a ^ b = (a ^ b) ^ b = a`. Step 3: `a = a ^ b = (a ^ b) ^ a = b`.",
      "topic": "Bitwise XOR Swap",
      "type": "scenario",
      "level": "hard",
      "strength": "Mastery of the classic XOR variable swap algorithm.",
      "weakness": "`a ^= b; b ^= a; a ^= b;` swaps two variables in place using bitwise XOR without a temp variable."
    },
    {
      "q": "In `System.out.printf`, which specifier is platform-independent for printing a newline character?",
      "options": [
        "\\n",
        "%n",
        "%newline",
        "\\r\\n"
      ],
      "answer": 1,
      "explain": "`%n` produces the platform-specific line separator (`\\r\\n` on Windows, `\\n` on Unix/macOS), making formatted output portable across operating systems.",
      "topic": "Formatted Output",
      "type": "theory",
      "level": "medium",
      "strength": "Knows the platform-independent `%n` newline specifier.",
      "weakness": "In `printf`, use `%n` for a cross-platform line separator instead of hardcoding `\\n`."
    },
    {
      "q": "Identify the issue in this code snippet:\n```java\nint a = 10;\nint b = 0;\nif (b != 0 & a / b > 1) {\n    System.out.println(\"Success\");\n}\n```",
      "options": [
        "Syntax error: single `&` cannot be used inside `if`",
        "Throws `ArithmeticException: / by zero` because `&` does not short-circuit, so `a / b` is evaluated even though `b != 0` is false",
        "Prints 'Success' unconditionally",
        "Compilation error: incompatible types"
      ],
      "answer": 1,
      "explain": "Because single `&` is the non-short-circuit logical AND operator, both sides are evaluated. Even though `b != 0` evaluates to false, Java still evaluates `a / b`, causing division by zero and throwing `ArithmeticException`.",
      "topic": "Non-Short-Circuit Evaluation",
      "type": "error",
      "level": "medium",
      "strength": "Caught division by zero due to missing short-circuit `&&`.",
      "weakness": "Always use short-circuit `&&` for guard conditions to prevent evaluating risky expressions like division by zero."
    },
    {
      "q": "What is printed by this printf statement?\n```java\ndouble pi = 3.14159265;\nSystem.out.printf(\"[%8.2f]\", pi);\n```",
      "options": [
        "[3.14    ]",
        "[    3.14]",
        "[3.141592]",
        "[3.14]"
      ],
      "answer": 1,
      "explain": "`%8.2f` specifies a total width of 8 characters (right-aligned by default) with 2 decimal places. `3.14` has 4 characters, so 4 leading spaces are prepended: `[    3.14]`.",
      "topic": "Printf Field Width",
      "type": "output",
      "level": "medium",
      "strength": "Understands printf field width and right-alignment spacing.",
      "weakness": "Width `8` with `.2f` reserves 8 total character spaces right-aligned, padding with leading spaces."
    },
    {
      "q": "In the same game, how can the developer TURN ON the 3rd flag (`0b00000100`) without affecting any other existing flags?",
      "options": [
        "`statusFlags = (byte)(statusFlags & 0b00000100);`",
        "`statusFlags = (byte)(statusFlags | 0b00000100);`",
        "`statusFlags = (byte)(statusFlags ^ 0b00000100);`",
        "`statusFlags = (byte)(~statusFlags);`"
      ],
      "answer": 1,
      "explain": "Bitwise OR (`|`) sets the target bit to 1 while leaving all other bits completely unchanged.",
      "topic": "Bitmasking Set Flag",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands bitwise OR for setting individual flag bits.",
      "weakness": "To set a bit flag, use bitwise OR: `flags |= MASK`."
    },
    {
      "q": "What is the difference between the prefix increment `++x` and postfix increment `x++`?",
      "options": [
        "Prefix modifies x after its current value is used in the expression; postfix modifies x first",
        "Prefix modifies x before its value is used in the expression; postfix uses current value then increments x",
        "Prefix works only on integers; postfix works on any primitive type",
        "There is no difference in any context in Java"
      ],
      "answer": 1,
      "explain": "In `++x`, x is incremented before its value is yielded to the surrounding expression. In `x++`, the current value of x is used, and x is incremented afterward.",
      "topic": "Unary Operators",
      "type": "theory",
      "level": "easy",
      "strength": "Understands execution timing of pre-increment vs post-increment.",
      "weakness": "Prefix increments first then evaluates; postfix evaluates current value then increments."
    },
    {
      "q": "A fitness smartwatch app tracks daily step goals. A user has a goal of 10,000 steps. If `currentSteps = 8450`, what expression computes the exact percentage of goal completion as a double (e.g., 84.5)?",
      "options": [
        "`double pct = currentSteps / 10000 * 100;`",
        "`double pct = (double) currentSteps / 10000 * 100;`",
        "`double pct = (double)(currentSteps / 10000) * 100;`",
        "`double pct = (int) currentSteps / 100.0;`"
      ],
      "answer": 1,
      "explain": "In option 1 and 3, `currentSteps / 10000` evaluates as integer division to `0`, resulting in `0.0`. Casting `currentSteps` to `double` first promotes the division to floating-point: `(8450.0 / 10000) * 100 = 84.5`.",
      "topic": "Percentage Calculation Bug",
      "type": "scenario",
      "level": "easy",
      "strength": "Avoided integer division truncation in percentage calculation.",
      "weakness": "Cast the numerator to `double` before dividing to prevent integer truncation to 0."
    },
    {
      "q": "What is the difference between `>>` (signed right shift) and `>>>` (unsigned right shift)?",
      "options": [
        "`>>` shifts bits left; `>>>` shifts bits right",
        "`>>` preserves the sign bit (fills leftmost bits with sign bit); `>>>` always fills leftmost bits with zeros",
        "`>>` works on floats; `>>>` works on integers",
        "They are identical synonyms in Java"
      ],
      "answer": 1,
      "explain": "`>>` is arithmetic right shift that sign-extends (fills top bits with 1 if negative, 0 if positive). `>>>` is logical right shift that unconditionally zero-fills from the left.",
      "topic": "Bitwise Operators",
      "type": "theory",
      "level": "hard",
      "strength": "Deep understanding of signed vs unsigned bitwise shift operations.",
      "weakness": "`>>` sign-extends with sign bit; `>>>` always zero-fills the vacated high-order bits."
    },
    {
      "q": "What error will occur when compiling this code?\n```java\nint val = 078;\n```",
      "options": [
        "No error, val is 78",
        "Compile error: integer number too large or invalid octal digit '8'",
        "Compile error: leading zeros are strictly forbidden in Java",
        "Warning: val will be converted to decimal 64"
      ],
      "answer": 1,
      "explain": "A leading `0` indicates an octal (base 8) literal. Valid octal digits are strictly 0 to 7. The digit `8` is invalid in base 8, producing a compile-time error.",
      "topic": "Octal Literal Error",
      "type": "error",
      "level": "hard",
      "strength": "Recognized leading 0 as octal base with invalid digit 8.",
      "weakness": "A leading zero designates octal notation (digits 0-7); '8' or '9' triggers an invalid octal digit compile error."
    },
    {
      "q": "What does this snippet print?\n```java\nint x = -1;\nSystem.out.println(x >>> 31);\n```",
      "options": [
        "-1",
        "0",
        "1",
        "2147483647"
      ],
      "answer": 2,
      "explain": "-1 in 32-bit binary is all ones: `1111...1111`. Unsigned right shift `>>> 31` shifts 31 ones out and fills the 31 highest bits with zeros, leaving only the lowest bit `1`.",
      "topic": "Unsigned Right Shift",
      "type": "output",
      "level": "hard",
      "strength": "Mastery of 32-bit two's complement and unsigned shift dynamics.",
      "weakness": "-1 is all 1s in two's complement; `>>> 31` leaves a single 1 in the least significant bit, outputting 1."
    },
    {
      "q": "How can the developer CLEAR (turn OFF) the 3rd flag (`0b00000100`) without modifying other flags?",
      "options": [
        "`statusFlags = (byte)(statusFlags & ~0b00000100);`",
        "`statusFlags = (byte)(statusFlags | ~0b00000100);`",
        "`statusFlags = (byte)(statusFlags ^ 0b00000100);`",
        "`statusFlags = 0;`"
      ],
      "answer": 0,
      "explain": "Bitwise AND with inverted mask (`& ~mask`) clears the target bit to 0 while preserving all other bits.",
      "topic": "Bitmasking Clear Flag",
      "type": "scenario",
      "level": "hard",
      "strength": "Mastery of bitwise clear pattern (`& ~MASK`).",
      "weakness": "To clear a bit flag, use bitwise AND with the bitwise NOT of the mask: `flags &= ~MASK`."
    },
    {
      "q": "What happens when you declare a local variable inside a method without initializing it, and then try to use it?",
      "options": [
        "It takes the default value (0 or null)",
        "The code fails to compile with an error: 'variable might not have been initialized'",
        "It allocates random garbage memory values like in C",
        "The JVM throws a `NullPointerException` at runtime"
      ],
      "answer": 1,
      "explain": "Unlike instance/class fields, local variables inside methods have NO default values. Java strictly requires them to be definitively assigned before use, or a compilation error occurs.",
      "topic": "Variable Scope & Initialization",
      "type": "theory",
      "level": "medium",
      "strength": "Understands that local variables are not given default values.",
      "weakness": "Local variables must be initialized before reading; failure to initialize causes a compile-time error."
    },
    {
      "q": "What is the compilation error in the following snippet?\n```java\nlong bigNum = 3000000000;\n```",
      "options": [
        "Variables of type long cannot hold 10 digits",
        "Integer number too large: 3000000000 exceeds int max value and lacks the 'L' suffix",
        "Variable name 'bigNum' is illegal",
        "long requires hexadecimal prefix"
      ],
      "answer": 1,
      "explain": "Numeric literals without suffixes are treated as 32-bit `int`. Since 3,000,000,000 exceeds `Integer.MAX_VALUE` (2,147,483,647), the compiler rejects it before assignment unless marked with `L` (`3000000000L`).",
      "topic": "Long Literal Suffix",
      "type": "error",
      "level": "medium",
      "strength": "Recognized that integer literal exceeds 32-bit capacity without 'L'.",
      "weakness": "Append 'L' to large numbers to treat the literal itself as a 64-bit long."
    },
    {
      "q": "What is the output of the following code?\n```java\nint x = 5;\nx *= 2 + 3;\nSystem.out.println(x);\n```",
      "options": [
        "13",
        "25",
        "10",
        "15"
      ],
      "answer": 1,
      "explain": "Compound assignment has lower precedence than arithmetic addition. `x *= 2 + 3` is evaluated as `x = x * (2 + 3)`, which is `5 * 5 = 25` (NOT `(5 * 2) + 3`).",
      "topic": "Compound Assignment Precedence",
      "type": "output",
      "level": "medium",
      "strength": "Spotted implicit grouping of right-hand expression in compound assignment.",
      "weakness": "`x *= expr` is equivalent to `x = x * (expr)`; the right-hand side is fully evaluated first."
    },
    {
      "q": "You are building a command-line payroll report for a Malaysian enterprise. Salaries must be displayed in a neat table column of width 12, right-aligned, with a currency prefix and 2 decimal places. Which statement achieves this?",
      "options": [
        "`System.out.printf(\"RM %-12.2f\\n\", salary);`",
        "`System.out.printf(\"RM %12.2f%n\", salary);`",
        "`System.out.printf(\"RM %12d%n\", salary);`",
        "`System.out.printf(\"RM %.2s%n\", salary);`"
      ],
      "answer": 1,
      "explain": "`%12.2f` right-aligns a floating-point number within a 12-character field with 2 decimal places. `%n` provides a portable newline.",
      "topic": "Formatted Financial Reporting",
      "type": "scenario",
      "level": "medium",
      "strength": "Designed correct printf format string for column-aligned financial output.",
      "weakness": "`%12.2f` right-aligns floating-point numbers in a 12-char column with 2 decimals."
    },
    {
      "q": "What is the result of integer division `7 / 2` in Java?",
      "options": [
        "3.5",
        "3",
        "4",
        "3.0"
      ],
      "answer": 1,
      "explain": "When both operands are integers, Java performs integer division, discarding any remainder/fractional part. Thus `7 / 2` yields `3`.",
      "topic": "Integer Division",
      "type": "theory",
      "level": "easy",
      "strength": "Knows that integer division discards fractions.",
      "weakness": "Division between two integer types produces an integer, truncating any remainder."
    },
    {
      "q": "You are building a cash register change calculator. A customer pays with RM 50 for a bill of RM 38.60. Change is RM 11.40. How should you represent money to avoid missing 1-sen rounding errors when calculating notes and coins?",
      "options": [
        "Use `double` and round after each subtraction",
        "Convert all ringgit amounts to integer cents (sen) before calculating (e.g., 5000 - 3860 = 1140 sen)",
        "Use `float` with `printf(\"%.2f\")`",
        "Convert to String and parse character by character"
      ],
      "answer": 1,
      "explain": "Converting currency to the smallest discrete unit (cents/sen) as an integer (`int` or `long`) eliminates floating-point representation errors and guarantees exact division and modulus for coin denominations.",
      "topic": "Currency Denomination Math",
      "type": "scenario",
      "level": "easy",
      "strength": "Follows best practice of integer cents for coin denomination math.",
      "weakness": "Work in integer cents/sen when calculating change denominations to avoid floating-point inaccuracy."
    },
    {
      "q": "What is the result of dividing a floating-point number by zero in Java (e.g., `10.0 / 0.0`)?",
      "options": [
        "Throws `java.lang.ArithmeticException: / by zero`",
        "Evaluates to `Double.POSITIVE_INFINITY`",
        "Evaluates to `Double.NaN`",
        "Compilation error: division by zero"
      ],
      "answer": 1,
      "explain": "In IEEE 754 floating-point arithmetic (used by Java), dividing a non-zero float/double by zero yields `Infinity` (or `-Infinity`). Only integer division by zero throws `ArithmeticException`.",
      "topic": "Floating-Point Division",
      "type": "theory",
      "level": "hard",
      "strength": "Distinguishes floating-point IEEE 754 division from integer division.",
      "weakness": "Floating-point division by zero yields `Infinity` or `NaN`, never `ArithmeticException`."
    },
    {
      "q": "What is wrong with this character addition?\n```java\nchar c = 'a' + 1;\n```",
      "options": [
        "It fails to compile because 'a' + 1 is an int",
        "It compiles without error because 'a' + 1 is a constant expression evaluated at compile-time to 'b'",
        "It throws a ClassCastException at runtime",
        "It sets c to 'a1'"
      ],
      "answer": 1,
      "explain": "In Java, `'a' + 1` is a constant expression whose value (98) fits within the range of `char`. The compiler performs implicit narrowing of constant expressions, so it compiles cleanly and assigns `'b'` to `c`.",
      "topic": "Constant Expression Narrowing",
      "type": "error",
      "level": "hard",
      "strength": "Understands compiler constant expression narrowing for primitives.",
      "weakness": "Constant expressions that fit into the destination primitive type compile without explicit casting."
    },
    {
      "q": "What is printed by this code?\n```java\nSystem.out.printf(\"%-6s:%04d\", \"Java\", 7);\n```",
      "options": [
        "Java  :0007",
        "  Java:0007",
        "Java  :7000",
        "Java:0007"
      ],
      "answer": 0,
      "explain": "`%-6s` left-aligns \"Java\" in a 6-character field (adding 2 trailing spaces: `\"Java  \"`). `%04d` zero-pads the integer 7 to 4 digits (`\"0007\"`). Result: `\"Java  :0007\"`.",
      "topic": "Printf Flags",
      "type": "output",
      "level": "hard",
      "strength": "Mastery of printf alignment `-` and zero-padding `0` flags.",
      "weakness": "`-` left-aligns strings; `0` zero-pads numbers to the specified width."
    },
    {
      "q": "An audio processing system receives 16-bit signed PCM audio samples as integers (-32768 to 32767). If an amplification algorithm computes `int boosted = sample * 2;`, what must you do before converting back to `short` to prevent distorted audio clipping?",
      "options": [
        "Throw an exception immediately",
        "Clamp (saturate) the boosted value between `Short.MIN_VALUE` and `Short.MAX_VALUE` before casting",
        "Cast directly `(short) boosted` and rely on automatic hardware clipping",
        "Add 32768 to shift to unsigned"
      ],
      "answer": 1,
      "explain": "Directly casting an overflowing `int` to `short` wraps around (e.g. +33000 becomes -32536), causing severe acoustic distortion. You must clamp/saturate the value to `[-32768, 32767]` prior to casting.",
      "topic": "Audio DSP & Clamping",
      "type": "scenario",
      "level": "hard",
      "strength": "Understands audio clipping and the necessity of saturation arithmetic before narrowing casts.",
      "weakness": "Clamp out-of-range values before narrowing casts to avoid two's complement sign-flip wrap-around."
    },
    {
      "q": "What is the result of `0.0 / 0.0` in Java floating-point arithmetic?",
      "options": [
        "`0.0`",
        "`Double.POSITIVE_INFINITY`",
        "`Double.NaN` (Not a Number)",
        "`ArithmeticException`"
      ],
      "answer": 2,
      "explain": "Zero divided by zero in IEEE 754 floating-point arithmetic results in `NaN` (Not a Number).",
      "topic": "Floating-Point Arithmetic",
      "type": "theory",
      "level": "medium",
      "strength": "Understands NaN conditions in floating-point operations.",
      "weakness": "`0.0 / 0.0` evaluates to `NaN` (Not a Number) under IEEE 754 rules."
    },
    {
      "q": "Why does the following snippet fail to compile?\n```java\nfinal int a;\nSystem.out.println(a);\na = 10;\n```",
      "options": [
        "final variables cannot be assigned on line 3",
        "Variable 'a' might not have been initialized when read on line 2",
        "final variables must be declared in capital letters",
        "Blank final variables are illegal in Java"
      ],
      "answer": 1,
      "explain": "A blank final variable can be declared, but it MUST be initialized before it is read. Line 2 attempts to read `a` before it has been assigned, causing a compile error.",
      "topic": "Blank Final Initialization",
      "type": "error",
      "level": "medium",
      "strength": "Caught reading blank final variable prior to assignment.",
      "weakness": "You can declare a blank final variable, but it must be assigned before being read."
    },
    {
      "q": "What is the output of the following code?\n```java\nint a = 1;\nint b = a++ + a++ + a++;\nSystem.out.println(b + \" \" + a);\n```",
      "options": [
        "3 4",
        "6 4",
        "6 3",
        "3 3"
      ],
      "answer": 1,
      "explain": "Term 1: `a++` yields 1 (a becomes 2). Term 2: `a++` yields 2 (a becomes 3). Term 3: `a++` yields 3 (a becomes 4). Sum `b = 1 + 2 + 3 = 6`. Final `a = 4`.",
      "topic": "Chained Post-Increments",
      "type": "output",
      "level": "medium",
      "strength": "Tracked consecutive post-increment evaluation across an expression.",
      "weakness": "Evaluate each post-increment sequentially from left to right, updating the variable after each term."
    },
    {
      "q": "A flight reservation system assigns seat codes like '12A' or '4F'. If the row number is an integer `int row = 12;` and the seat letter is `char seat = 'A';`, what is the cleanest way to construct the full seat string '12A'?",
      "options": [
        "`String code = row + seat;` (Wait: does this add ASCII value?)",
        "`String code = \"\" + row + seat;`",
        "`String code = (String)(row + seat);`",
        "`String code = row.toString() + seat;`"
      ],
      "answer": 1,
      "explain": "`row + seat` would perform integer addition (`12 + 65 = 77`). Starting with an empty string `\"\" + row + seat` forces string concatenation, producing `\"12A\"`.",
      "topic": "String Concatenation Trap",
      "type": "scenario",
      "level": "medium",
      "strength": "Prevented accidental numeric addition between int and char.",
      "weakness": "`int + char` performs arithmetic addition; prepend `\"\"` to trigger string concatenation."
    },
    {
      "q": "Which format specifier is used in `System.out.printf` to format a floating-point number with exactly 2 decimal places?",
      "options": [
        "%2f",
        "%.2f",
        "%f.2",
        "%d.2"
      ],
      "answer": 1,
      "explain": "`%.2f` specifies a floating-point number formatted with exactly 2 digits after the decimal point.",
      "topic": "Formatted Output",
      "type": "theory",
      "level": "easy",
      "strength": "Understands `printf` precision format specifiers.",
      "weakness": "Use `%.2f` to round/format floating-point numbers to 2 decimal places."
    },
    {
      "q": "Why does this code throw a runtime exception?\n```java\nint numerator = 100;\nint denominator = 0;\nint result = numerator / denominator;\n```",
      "options": [
        "Throws `NullPointerException`",
        "Throws `java.lang.ArithmeticException: / by zero`",
        "Throws `IllegalArgumentException`",
        "Throws `NumberFormatException`"
      ],
      "answer": 1,
      "explain": "Integer division by zero is mathematically undefined and strictly throws an `ArithmeticException` at runtime in Java.",
      "topic": "ArithmeticException by Zero",
      "type": "error",
      "level": "easy",
      "strength": "Understands runtime exception on integer division by zero.",
      "weakness": "Integer division by zero throws `ArithmeticException`; check denominator != 0 before dividing."
    },
    {
      "q": "What is the valid range of values for a 16-bit signed Java 'short'?",
      "options": [
        "-128 to 127",
        "-32,768 to 32,767",
        "0 to 65,535",
        "-2,147,483,648 to 2,147,483,647"
      ],
      "answer": 1,
      "explain": "A Java 'short' is a 16-bit signed integer ranging from -2^15 (-32,768) to 2^15 - 1 (32,767). 'char' is 0 to 65,535 unsigned.",
      "topic": "Integer Range",
      "type": "theory",
      "level": "medium",
      "strength": "Understands signed integer ranges across 16-bit types.",
      "weakness": "Distinguish between signed short (-32768 to 32767) and unsigned char (0 to 65535)."
    },
    {
      "q": "Identify the compilation error in the following snippet:\n```java\nbyte b1 = 10;\nbyte b2 = 20;\nbyte b3 = b1 + b2;\n```",
      "options": [
        "Line 1: byte cannot store 10",
        "Line 3: possible lossy conversion from int to byte",
        "Line 3: '+' operator cannot be used on bytes",
        "No error: b3 will equal 30"
      ],
      "answer": 1,
      "explain": "In Java, arithmetic operations on types smaller than int (byte, short, char) automatically promote the operands to `int`. Thus `b1 + b2` is an `int`, requiring an explicit cast `(byte)(b1 + b2)` to assign back to `byte`.",
      "topic": "Type Promotion Error",
      "type": "error",
      "level": "medium",
      "strength": "Spotted implicit int promotion on binary arithmetic.",
      "weakness": "Arithmetic operations on bytes/shorts produce an `int`, requiring explicit cast to store back into a byte."
    },
    {
      "q": "What is the output of the following snippet?\n```java\nint a = 10;\nint b = 3;\nSystem.out.println(a % b + \" \" + (-a) % b + \" \" + a % (-b));\n```",
      "options": [
        "1 -1 1",
        "1 -1 -1",
        "1 1 1",
        "-1 -1 1"
      ],
      "answer": 0,
      "explain": "The sign of `%` matches the dividend (left operand). `10 % 3 = 1`. `(-10) % 3 = -1`. `10 % (-3) = 1`.",
      "topic": "Modulus Sign Rules",
      "type": "output",
      "level": "hard",
      "strength": "Precise tracking of modulus sign following the left operand.",
      "weakness": "In `a % b`, the result takes the sign of `a`, regardless of the sign of `b`."
    },
    {
      "q": "A developer is writing a utility to test whether a given positive integer `n` is an exact power of 2 (e.g. 1, 2, 4, 8, 16...). Which single bitwise expression checks this in O(1) time?",
      "options": [
        "`(n & (n - 1)) == 0`",
        "`(n | (n - 1)) == 0`",
        "`(n ^ (n - 1)) == 0`",
        "`(n & ~n) == 0`"
      ],
      "answer": 0,
      "explain": "A power of 2 has exactly one binary bit set (e.g. 8 is `1000`). Subtracting 1 inverts all lower bits (`0111`). Bitwise AND between `n` and `n - 1` yields 0 if and only if `n` is a power of 2.",
      "topic": "Power of Two Trick",
      "type": "scenario",
      "level": "hard",
      "strength": "Mastery of the famous `n & (n - 1) == 0` power of two bitwise trick.",
      "weakness": "`n > 0 && (n & (n - 1)) == 0` checks whether `n` is a power of 2 in O(1) time."
    },
    {
      "q": "How many primitive data types exist in the standard Java programming language?",
      "options": [
        "4",
        "6",
        "8",
        "10"
      ],
      "answer": 2,
      "explain": "Java defines exactly 8 primitive types: byte, short, int, long, float, double, char, and boolean.",
      "topic": "Primitive Types",
      "type": "theory",
      "level": "easy",
      "strength": "You know the exact set of Java primitive types.",
      "weakness": "Remember Java has exactly 8 primitives (byte, short, int, long, float, double, char, boolean)."
    },
    {
      "q": "What error occurs in this code snippet?\n```java\nint x = 10;\nint y = 5;\nint z = x > y ? \"Greater\" : 0;\n```",
      "options": [
        "Ternary operator cannot use string literals",
        "Incompatible types: conditional expression branches must be compatible with the target variable type (int)",
        "Ternary operator must be enclosed in braces",
        "x > y is an invalid boolean condition"
      ],
      "answer": 1,
      "explain": "The conditional (ternary) operator evaluates to a common type. Since `\"Greater\"` is a String and `0` is an int, assigning the result to `int z` causes a compile error because String cannot be converted to int.",
      "topic": "Ternary Type Compatibility",
      "type": "error",
      "level": "medium",
      "strength": "Spotted incompatible branch types in ternary expression.",
      "weakness": "Both branches of the ternary operator must evaluate to types compatible with the receiving variable."
    },
    {
      "q": "What is the output of this code?\n```java\nSystem.out.println(5 ^ 3);\n```",
      "options": [
        "8",
        "2",
        "6",
        "15"
      ],
      "answer": 2,
      "explain": "The bitwise XOR `^` operator compares bits: 5 is `0101` in binary, 3 is `0011`. `0101 ^ 0011 = 0110` in binary, which is decimal `6`.",
      "topic": "Bitwise XOR",
      "type": "output",
      "level": "medium",
      "strength": "Correctly computed bitwise XOR operation.",
      "weakness": "XOR produces 1 where bits differ and 0 where bits match: `5 (0101) ^ 3 (0011) = 6 (0110)`."
    },
    {
      "q": "A telecom company charges RM 0.15 for every 30-second block of a phone call. If a call lasts 75 seconds, which formula computes the total number of chargeable 30-second blocks (which should be 3)?",
      "options": [
        "`int blocks = 75 / 30;`",
        "`int blocks = (int) Math.ceil(75 / 30);`",
        "`int blocks = (int) Math.ceil((double) 75 / 30);`",
        "`int blocks = (75 + 1) / 30;`"
      ],
      "answer": 2,
      "explain": "`75 / 30` is integer division resulting in 2. `Math.ceil(2)` is still 2.0! To round up fractional blocks, you must cast to double before dividing: `Math.ceil(75.0 / 30) = Math.ceil(2.5) = 3.0`.",
      "topic": "Ceiling Division Logic",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands ceiling division and casting prior to Math.ceil.",
      "weakness": "`Math.ceil()` requires a floating-point argument; `Math.ceil(int / int)` has already lost fractions."
    },
    {
      "q": "What is the binary representation of literal `0b1011` in decimal?",
      "options": [
        "9",
        "11",
        "13",
        "15"
      ],
      "answer": 1,
      "explain": "`0b1011` represents `1*(8) + 0*(4) + 1*(2) + 1*(1) = 8 + 2 + 1 = 11`.",
      "topic": "Binary Literals",
      "type": "theory",
      "level": "easy",
      "strength": "Understands Java binary numeric literal prefix `0b`.",
      "weakness": "Binary prefix `0b` allows expressing numbers directly in base 2."
    },
    {
      "q": "What error occurs in this code snippet?\n```java\nString s = \"Java\";\nint len = s.length;\n```",
      "options": [
        "Strings do not have a length property; length() is a method and requires parentheses `s.length()`",
        "String cannot be converted to int",
        "length is a private field in String",
        "s is an uninitialized object reference"
      ],
      "answer": 0,
      "explain": "In Java, arrays have a `.length` field, but `String` objects provide a `.length()` method. Calling `s.length` without parentheses causes a compilation error: 'cannot find symbol: variable length'.",
      "topic": "String length() Method",
      "type": "error",
      "level": "easy",
      "strength": "Distinguishes array `.length` field from String `.length()` method.",
      "weakness": "Use `.length()` for Strings and `.length` for arrays."
    },
    {
      "q": "Why does the Java 'char' data type occupy 16 bits instead of 8 bits like C/C++ 'char'?",
      "options": [
        "To allow negative character codes",
        "To support UTF-16 Unicode character representation including international alphabets",
        "To align with 32-bit CPU bus architectures",
        "Because Java does not support ASCII characters"
      ],
      "answer": 1,
      "explain": "Java was designed from the beginning for internationalization, using 16-bit unsigned Unicode (UTF-16 code units) capable of representing characters from languages worldwide.",
      "topic": "Character Encoding",
      "type": "theory",
      "level": "medium",
      "strength": "Understands Java Unicode encoding and 16-bit char design.",
      "weakness": "Review how Java char uses 16-bit unsigned Unicode (0 to 65535)."
    },
    {
      "q": "What is the bug in the following Scanner input sequence?\n```java\nScanner sc = new Scanner(System.in);\nint age = sc.nextInt();\nString name = sc.nextLine();\nSystem.out.println(name + \" is \" + age);\n```",
      "options": [
        "nextInt() cannot be called before nextLine()",
        "nextLine() immediately consumes the leftover newline from nextInt(), reading an empty string for name",
        "System.in requires a File object parameter",
        "String cannot be printed after an int"
      ],
      "answer": 1,
      "explain": "`nextInt()` reads only the numeric token and leaves the newline character (`\\n`) in the input buffer. The subsequent `nextLine()` immediately reads that leftover newline, leaving `name` as an empty string.",
      "topic": "Scanner Newline Trap",
      "type": "error",
      "level": "medium",
      "strength": "Mastery of the classic Scanner newline consumption trap.",
      "weakness": "Call `sc.nextLine()` after `sc.nextInt()` to consume the leftover newline before reading the next line of text."
    },
    {
      "q": "What is the output of this code snippet?\n```java\nint x = 1;\nx = x++;\nSystem.out.println(x);\n```",
      "options": [
        "1",
        "2",
        "0",
        "Undefined"
      ],
      "answer": 0,
      "explain": "In `x = x++`, the right-hand side yields the current value of x (1). The increment happens (x becomes 2), but then the assignment operator overwrites x with the stored evaluated value (1). So x remains 1.",
      "topic": "Self Post-Increment Assignment",
      "type": "output",
      "level": "hard",
      "strength": "Mastery of the subtle `x = x++` self-assignment pitfall.",
      "weakness": "`x = x++` does not increment x; the original value (1) overwrites the post-incremented value."
    },
    {
      "q": "A graphics rendering engine stores RGB color values in a 32-bit integer: `0x00RRGGBB`. If `int color = 0x00FF8040;`, how do you extract the Green component (which should be `0x80` or 128)?",
      "options": [
        "`(color >> 8) & 0xFF`",
        "`(color >> 16) & 0xFF`",
        "`color & 0x0000FF00`",
        "`(color << 8) & 0xFF`"
      ],
      "answer": 0,
      "explain": "In `0x00RRGGBB`, Red is bits 16-23, Green is bits 8-15, and Blue is bits 0-7. Shifting right by 8 bits moves the Green byte to the lowest 8 bits, and masking with `0xFF` isolates it.",
      "topic": "Color Channel Bit Extraction",
      "type": "scenario",
      "level": "hard",
      "strength": "Mastery of bit shifting and masking for color channel extraction.",
      "weakness": "To extract a byte channel, shift right to align with the lowest byte and mask with `0xFF`."
    },
    {
      "q": "What is the memory size and default value of an uninitialized instance variable of type 'byte' in Java?",
      "options": [
        "8 bits with default value 0",
        "16 bits with default value 0",
        "8 bits with default value null",
        "32 bits with default value 0"
      ],
      "answer": 0,
      "explain": "In Java, 'byte' is an 8-bit signed two's complement integer with default value 0 (when declared as a class/instance field).",
      "topic": "Data Types & Memory",
      "type": "theory",
      "level": "easy",
      "strength": "Understands primitive memory sizes and default instance values.",
      "weakness": "Note that 'byte' occupies 8 bits and defaults to 0."
    },
    {
      "q": "Why does the following code fail to compile?\n```java\nfloat price = 19.99;\nSystem.out.println(price);\n```",
      "options": [
        "System.out.println cannot print floats",
        "19.99 is interpreted as a double literal, causing possible loss of precision",
        "Variables named 'price' are reserved",
        "float requires an integer initialization"
      ],
      "answer": 1,
      "explain": "Literal `19.99` is of type `double`. Assigning a double to a 32-bit `float` variable is a narrowing conversion and requires an explicit cast or the `f` suffix (`19.99f`).",
      "topic": "Float Literal Suffix",
      "type": "error",
      "level": "easy",
      "strength": "Recognized missing float suffix on decimal literal.",
      "weakness": "Append 'f' or 'F' to decimal literals when assigning to float (e.g. 19.99f)."
    },
    {
      "q": "What is the output of the following snippet?\n```java\nint a = 12;\nint b = 25;\nSystem.out.println(a & b);\n```",
      "options": [
        "8",
        "9",
        "12",
        "37"
      ],
      "answer": 0,
      "explain": "Binary of 12 is `01100`. Binary of 25 is `11001`. Bitwise AND: `01100 & 11001 = 01000` which equals `8`.",
      "topic": "Bitwise AND",
      "type": "output",
      "level": "medium",
      "strength": "Accurately performed binary bitwise AND computation.",
      "weakness": "Align binary representations and apply bitwise AND to each bit column."
    },
    {
      "q": "A cryptography student implements a fast parity check to test whether an integer `n` is odd. Which of the following is the most efficient bitwise check in Java?",
      "options": [
        "`(n % 2) == 1`",
        "`(n & 1) == 1`",
        "`(n | 1) == 1`",
        "`(n ^ 1) == 0`"
      ],
      "answer": 1,
      "explain": "`(n & 1) == 1` checks the least significant bit. Unlike `n % 2 == 1` (which fails for negative odd numbers like `-5 % 2 == -1`), `(n & 1) == 1` correctly identifies odd numbers for both positive and negative integers.",
      "topic": "Bitwise Parity Check",
      "type": "scenario",
      "level": "medium",
      "strength": "Mastered bitwise parity check that correctly handles negative integers.",
      "weakness": "`(n & 1) == 1` checks odd numbers cleanly for both positive and negative values."
    },
    {
      "q": "What does the underscore `_` in numeric literals like `int num = 1_000_000;` achieve?",
      "options": [
        "Creates a formatted String representation",
        "Improves human readability in source code; ignored by the compiler",
        "Allocates memory in separate blocks of 1,000",
        "Indicates that the number is an unsigned integer"
      ],
      "answer": 1,
      "explain": "Introduced in Java 7, underscores in numeric literals are purely visual separators to enhance readability for developers. The compiler ignores them completely.",
      "topic": "Numeric Literals",
      "type": "theory",
      "level": "easy",
      "strength": "Knows the purpose of underscores in Java numeric literals.",
      "weakness": "Underscores in numbers are purely for developer readability and have no runtime effect."
    },
    {
      "q": "What is the issue with this `Scanner` code when user enters 'Hello World'?\n```java\nScanner sc = new Scanner(System.in);\nString input = sc.next();\nSystem.out.println(input);\n```",
      "options": [
        "Throws NoSuchElementException",
        "`sc.next()` reads only up to whitespace, so it prints only 'Hello' instead of 'Hello World'",
        "`sc.next()` only reads integer tokens",
        "Prints null"
      ],
      "answer": 1,
      "explain": "`sc.next()` finds and returns the next complete token delimited by whitespace. To read the entire line including spaces, `sc.nextLine()` must be used.",
      "topic": "Scanner Delimiters",
      "type": "error",
      "level": "easy",
      "strength": "Understands the difference between `next()` (single word) and `nextLine()` (entire line).",
      "weakness": "Use `sc.nextLine()` to read text containing spaces; `sc.next()` terminates at whitespace."
    },
    {
      "q": "Which of the following is a reserved keyword in Java that is currently unused?",
      "options": [
        "sizeof",
        "goto",
        "var",
        "signed"
      ],
      "answer": 1,
      "explain": "'const' and 'goto' are reserved keywords in Java, although neither has an active implementation in the language.",
      "topic": "Java Keywords",
      "type": "theory",
      "level": "medium",
      "strength": "Knows Java's reserved keyword list.",
      "weakness": "Java reserves 'goto' and 'const' as keywords even though they are unused."
    },
    {
      "q": "What is the compilation issue in this code?\n```java\nint a = 10;\nlong b = 20L;\nint c = a + b;\n```",
      "options": [
        "20L is an invalid long literal",
        "Line 3: possible lossy conversion from long to int",
        "a + b requires an explicit wrapper method",
        "Variables of different types cannot be added"
      ],
      "answer": 1,
      "explain": "When adding an `int` and a `long`, the `int` is promoted to `long`, producing a `long` result. Assigning a `long` to an `int` variable `c` causes a compile-time lossy conversion error without an explicit `(int)` cast.",
      "topic": "Type Promotion Error",
      "type": "error",
      "level": "medium",
      "strength": "Recognized int + long produces long.",
      "weakness": "Operands mixed with long promote to long; casting `(int)` is required to store in an int."
    },
    {
      "q": "What is the output of the following code snippet?\n```java\nint x = 5;\nint y = x++ + ++x;\nSystem.out.println(y);\n```",
      "options": [
        "11",
        "12",
        "13",
        "14"
      ],
      "answer": 1,
      "explain": "Step 1: `x++` yields 5 (and increments x to 6). Step 2: `++x` increments x to 7 and yields 7. Step 3: `5 + 7 = 12`.",
      "topic": "Unary Operator Evaluation",
      "type": "output",
      "level": "medium",
      "strength": "Correctly tracked step-by-step evaluation of pre/post increment expressions.",
      "weakness": "Trace increment operators from left to right: post-increment yields current value then increments; pre-increment increments first."
    },
    {
      "q": "A high-traffic web server generates unique 64-bit request IDs combining a 32-bit timestamp and a 32-bit counter. If `int timestamp` and `int counter` are given, how do you combine them into a single `long requestId`?",
      "options": [
        "`long requestId = (timestamp << 32) + counter;` (Potential overflow/sign extension bug)",
        "`long requestId = (((long) timestamp) << 32) | (counter & 0xFFFFFFFFL);`",
        "`long requestId = (long)(timestamp + counter);`",
        "`long requestId = timestamp * 32 + counter;`"
      ],
      "answer": 1,
      "explain": "First, `timestamp` must be cast to `long` before shifting by 32 bits, otherwise the shift operates on a 32-bit `int` and wraps to 0. Second, `counter` must be masked with `0xFFFFFFFFL` to prevent unwanted negative sign extension.",
      "topic": "64-Bit Packing & Sign Extension",
      "type": "scenario",
      "level": "hard",
      "strength": "Expertise in bit packing into 64-bit long avoiding sign extension pitfalls.",
      "weakness": "Cast to `long` before shifting 32 bits, and mask lower 32 bits with `0xFFFFFFFFL` to avoid sign extension."
    },
    {
      "q": "Which of the following is NOT a valid Java identifier?",
      "options": [
        "_userCounter",
        "$totalPrice",
        "2ndAttempt",
        "MAX_BUFFER_SIZE"
      ],
      "answer": 2,
      "explain": "Java identifiers cannot begin with a digit (0-9). They must start with a letter, underscore (_), or currency symbol ($).",
      "topic": "Identifiers",
      "type": "theory",
      "level": "easy",
      "strength": "Understands Java identifier naming rules.",
      "weakness": "Identifiers cannot start with numbers (e.g. '2ndAttempt' is invalid)."
    },
    {
      "q": "What is wrong with the following variable declarations?\n```java\nint 1stScore = 95;\nint total score = 100;\n```",
      "options": [
        "Variable names cannot contain numbers at all",
        "'1stScore' begins with a digit, and 'total score' contains an illegal space",
        "'score' is a reserved Java keyword",
        "Variable names must be in uppercase"
      ],
      "answer": 1,
      "explain": "Java identifiers cannot begin with a number (`1stScore`), and identifiers cannot contain whitespace (`total score`).",
      "topic": "Identifier Rules",
      "type": "error",
      "level": "easy",
      "strength": "Spotted illegal identifier starting with a digit and illegal space.",
      "weakness": "Identifiers must not start with digits or contain spaces."
    },
    {
      "q": "What does the following snippet print?\n```java\nint x = 0;\nif (x++ == 0 && ++x == 2) {\n    System.out.println(\"Matched \" + x);\n}\n```",
      "options": [
        "Matched 1",
        "Matched 2",
        "Nothing printed",
        "Matched 0"
      ],
      "answer": 1,
      "explain": "1. `x++ == 0`: current value 0 == 0 is true (x increments to 1). 2. Short-circuit passes to right: `++x == 2`: x increments to 2, and 2 == 2 is true. Prints 'Matched 2'.",
      "topic": "Logical Compound Evaluation",
      "type": "output",
      "level": "medium",
      "strength": "Step-by-step evaluation of pre and post increments across logical AND.",
      "weakness": "Follow evaluation order: post-increment evaluates first then increments; pre-increment increments first."
    },
    {
      "q": "A warehouse management system calculates the number of shipping boxes needed for items. Each box holds 12 items. For `int items = 25;`, which integer formula correctly computes the required 3 boxes without using `Math.ceil()`?",
      "options": [
        "`(items + 12) / 12`",
        "`(items + 11) / 12`",
        "`items / 12 + 1`",
        "`items % 12`"
      ],
      "answer": 1,
      "explain": "The standard integer formula for ceiling division of `a / b` is `(a + b - 1) / b`. For 12, `(items + 11) / 12`. For 25 items: `(25 + 11) / 12 = 36 / 12 = 3`. For 24 items: `(24 + 11) / 12 = 35 / 12 = 2` (exact match!).",
      "topic": "Integer Ceiling Division Trick",
      "type": "scenario",
      "level": "medium",
      "strength": "Mastery of the integer ceiling division formula `(a + b - 1) / b`.",
      "weakness": "`(n + d - 1) / d` performs integer ceiling division cleanly without floating-point conversion."
    },
    {
      "q": "Why does this code fail to compile?\n```java\nint x = 5;\nString s = (String) x;\n```",
      "options": [
        "Cannot cast between completely incompatible types (primitive int and reference type String)",
        "x must be enclosed in double quotes",
        "String must be lowercase string",
        "Casting requires the 'new' operator"
      ],
      "answer": 0,
      "explain": "In Java, an explicit cast `(String)` cannot convert a primitive `int` to an `Object` reference type `String`. You must use `String.valueOf(x)` or `Integer.toString(x)`.",
      "topic": "Incompatible Type Cast",
      "type": "error",
      "level": "easy",
      "strength": "Spotted illegal cast between primitive and reference type.",
      "weakness": "Convert primitive int to String using `String.valueOf(x)` or `Integer.toString(x)`, not `(String)x`."
    },
    {
      "q": "What is printed by this code?\n```java\nboolean b1 = true, b2 = false;\nboolean b3 = b1 ^ b2;\nSystem.out.println(b3);\n```",
      "options": [
        "true",
        "false",
        "0",
        "1"
      ],
      "answer": 0,
      "explain": "When applied to boolean operands, `^` represents logical XOR (exclusive OR). It returns true if and only if exactly one operand is true. Since `b1 != b2`, it prints `true`.",
      "topic": "Logical XOR",
      "type": "output",
      "level": "easy",
      "strength": "Understands logical XOR truth table for boolean operands.",
      "weakness": "Boolean XOR (`^`) is true when exactly one operand is true and the other is false."
    },
    {
      "q": "What occurs during 'narrowing conversion' (e.g., `(int) 3.99`) in Java?",
      "options": [
        "The value is rounded to the nearest whole number (4)",
        "The fractional part is truncated toward zero (resulting in 3)",
        "A runtime ClassCastException is thrown",
        "The JVM raises an ArithmeticException"
      ],
      "answer": 1,
      "explain": "Casting a floating-point number to an integer in Java truncates the fractional portion toward zero; it does NOT round. So `(int) 3.99` results in 3.",
      "topic": "Type Casting",
      "type": "theory",
      "level": "medium",
      "strength": "Understands fractional truncation during narrowing casts.",
      "weakness": "Narrowing cast truncates toward zero; it does not perform mathematical rounding."
    },
    {
      "q": "What is wrong with the following `System.out.printf` statement?\n```java\nint age = 21;\nSystem.out.printf(\"Age: %f\", age);\n```",
      "options": [
        "%f requires a String parameter",
        "IllegalFormatConversionException: %f cannot format an integer (int)",
        "printf requires two string arguments",
        "%f must always include precision like %.2f"
      ],
      "answer": 1,
      "explain": "`%f` expects a floating-point argument (float/double). Passing an integer (`int`) causes a runtime `java.util.IllegalFormatConversionException: f != java.lang.Integer`.",
      "topic": "Printf Specifier Mismatch",
      "type": "error",
      "level": "medium",
      "strength": "Spotted format specifier mismatch in printf.",
      "weakness": "Match format specifiers with types: `%d` for integers, `%f` for floating-point numbers, `%s` for strings."
    },
    {
      "q": "What is the output of the following code?\n```java\nint a = 10, b = 4;\nSystem.out.println(a / b + \" \" + (double)(a / b) + \" \" + (double)a / b);\n```",
      "options": [
        "2 2.0 2.5",
        "2.5 2.5 2.5",
        "2 2.5 2.5",
        "2 2.0 2.0"
      ],
      "answer": 0,
      "explain": "`a / b` is integer division -> `2`. `(double)(a / b)` casts the integer result 2 to double -> `2.0`. `(double)a / b` casts a to 10.0 before dividing by 4 -> `2.5`.",
      "topic": "Integer vs Double Division",
      "type": "output",
      "level": "medium",
      "strength": "Carefully parsed operator precedence and type casting during division.",
      "weakness": "Casting after integer division `(double)(a / b)` does not restore lost fractions; cast the operand before division `(double)a / b`."
    },
    {
      "q": "You are building a financial billing module for a Malaysian banking app that processes monetary transactions. Why should you NOT use `double` or `float` to store currency amounts?",
      "options": [
        "`double` cannot store values larger than 10,000",
        "Binary floating-point arithmetic causes precision loss and rounding inaccuracies (e.g. 0.1 + 0.2 != 0.3)",
        "`double` variables cannot be stored in relational databases",
        "Banking regulations require variables to use the `byte` primitive"
      ],
      "answer": 1,
      "explain": "Binary floating-point types (`float`, `double`) cannot represent base-10 fractions exactly, leading to accumulated rounding errors. Real-world financial systems use `BigDecimal` or store values as integer cents (`long`).",
      "topic": "Financial Precision & Types",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands why floating-point arithmetic is unsuitable for financial transactions.",
      "weakness": "Use `BigDecimal` or integer cents (`long`) for currency calculations to prevent floating point drift."
    },
    {
      "q": "What is the difference between float and double literals in Java source code?",
      "options": [
        "All floating-point literals are float by default; double requires 'd'",
        "Floating-point literals without suffixes are double by default; float requires an 'f' or 'F' suffix",
        "Float and double literals are interchangeable without suffixes",
        "Float occupies 64 bits while double occupies 32 bits"
      ],
      "answer": 1,
      "explain": "By default, fractional numeric literals (like 3.14) are treated as 64-bit 'double'. To make it a 32-bit 'float', you must append 'f' or 'F' (e.g. 3.14f).",
      "topic": "Floating-Point Literals",
      "type": "theory",
      "level": "easy",
      "strength": "Recognizes double as the default floating-point literal type.",
      "weakness": "Remember literal 3.14 is double; assigning it to float without 'f' causes a compile error."
    },
    {
      "q": "Find the compilation error in this snippet:\n```java\nfinal int MAX_USERS = 50;\nMAX_USERS = 100;\nSystem.out.println(MAX_USERS);\n```",
      "options": [
        "MAX_USERS must be declared inside a class header",
        "Cannot assign a value to final variable MAX_USERS",
        "println cannot print final variables",
        "Constant names cannot contain underscores"
      ],
      "answer": 1,
      "explain": "Variables declared with the `final` modifier cannot be reassigned once initialized. Line 2 causes a compilation error.",
      "topic": "Final Variable Reassignment",
      "type": "error",
      "level": "easy",
      "strength": "Identified reassignment of a final constant.",
      "weakness": "A `final` variable cannot be reassigned after its initial assignment."
    },
    {
      "q": "What is printed by the following code?\n```java\nSystem.out.println(10 + 20 + \"Java\" + 10 + 20);\n```",
      "options": [
        "30Java30",
        "30Java1020",
        "1020Java1020",
        "60Java"
      ],
      "answer": 1,
      "explain": "Java evaluates left to right: `10 + 20` is numeric addition (`30`). Then `30 + \"Java\"` becomes string concatenation (`\"30Java\"`). Once a string is formed, subsequent `+` operators perform string concatenation: `\"30Java10\"` then `\"30Java1020\"`.",
      "topic": "String Concatenation Precedence",
      "type": "output",
      "level": "easy",
      "strength": "Understands left-to-right evaluation and string concatenation transition.",
      "weakness": "Addition before a String performs arithmetic; addition after a String performs string concatenation."
    },
    {
      "q": "A developer needs to read user input containing both an ID number and their full residential address in a console app. Why does calling `sc.nextInt()` followed by `sc.nextLine()` fail, and what is the fix?",
      "options": [
        "`nextInt()` crashes on whitespace; change it to `next()`",
        "`nextInt()` leaves the newline in the buffer; insert an extra `sc.nextLine()` immediately after `nextInt()` to consume it",
        "Scanner cannot read addresses with commas; use `BufferedReader` only",
        "`nextLine()` requires passing a character encoding parameter"
      ],
      "answer": 1,
      "explain": "`sc.nextInt()` consumes only numeric digits, leaving the Enter key's `\\n` newline in the stream. Calling an extra `sc.nextLine()` flushes that newline so the next `sc.nextLine()` correctly waits for the user's address.",
      "topic": "Scanner Buffer Flush Pattern",
      "type": "scenario",
      "level": "medium",
      "strength": "Applied the standard Scanner buffer flushing pattern.",
      "weakness": "Always consume the leftover newline with `sc.nextLine()` after calling `nextInt()` or `nextDouble()`."
    },
    {
      "q": "What happens when compiling this snippet?\n```java\nboolean b = true;\nint n = (int) b;\n```",
      "options": [
        "n is assigned 1",
        "n is assigned 0",
        "Compilation error: incompatible types: boolean cannot be converted to int",
        "Throws ClassCastException at runtime"
      ],
      "answer": 2,
      "explain": "In Java, `boolean` cannot be cast to or from any numeric type (`int`, `byte`, etc.). Any attempt to cast `(int) b` fails at compile time.",
      "topic": "Boolean Cast Error",
      "type": "error",
      "level": "easy",
      "strength": "Understands that booleans cannot be cast to numeric types.",
      "weakness": "Booleans in Java have no numeric conversion; use ternary `(b ? 1 : 0)` if an integer representation is required."
    },
    {
      "q": "What is the output of this code?\n```java\nint val = (int) 3.8 + (int) 2.9;\nSystem.out.println(val);\n```",
      "options": [
        "5",
        "6",
        "7",
        "5.0"
      ],
      "answer": 0,
      "explain": "`(int) 3.8` truncates to 3. `(int) 2.9` truncates to 2. `3 + 2 = 5`.",
      "topic": "Truncation Addition",
      "type": "output",
      "level": "easy",
      "strength": "Correctly applied fractional truncation to each operand.",
      "weakness": "Casting truncates each decimal before addition: 3 + 2 = 5."
    },
    {
      "q": "How does the bitwise AND operator `&` differ from the logical AND operator `&&` when applied to boolean expressions?",
      "options": [
        "`&` cannot be used with boolean operands",
        "`&` always evaluates BOTH operands without short-circuiting",
        "`&` has lower precedence than assignment `=`",
        "`&` performs string concatenation if one operand is null"
      ],
      "answer": 1,
      "explain": "When applied to boolean operands, `&` performs logical AND without short-circuiting: both sides are always evaluated even if the left operand is false.",
      "topic": "Logical vs Bitwise",
      "type": "theory",
      "level": "medium",
      "strength": "Distinguishes short-circuit `&&` from non-short-circuit `&`.",
      "weakness": "Logical `&&` short-circuits; bitwise/boolean `&` evaluates both expressions."
    },
    {
      "q": "Why does this code cause a compiler error?\n```java\nint x = 5;\nboolean b = (x = 0);\n```",
      "options": [
        "Assignment within parentheses is illegal in Java",
        "The assignment `(x = 0)` evaluates to `int` 0, which cannot be converted to `boolean`",
        "x cannot be reassigned inside an expression",
        "Parentheses cannot be used around assignments"
      ],
      "answer": 1,
      "explain": "In Java, `(x = 0)` assigns 0 to x and evaluates to the integer value 0. Because `int` cannot be converted to `boolean`, line 2 fails to compile.",
      "topic": "Assignment Expression Type",
      "type": "error",
      "level": "medium",
      "strength": "Recognized that assignment expression evaluates to the assigned value's type.",
      "weakness": "Assignment yields the value and type of the variable; integer assignments cannot be assigned to boolean."
    },
    {
      "q": "What is the output of this code?\n```java\nint a = 5;\nboolean result = (a > 10) && (++a > 5);\nSystem.out.println(a + \" \" + result);\n```",
      "options": [
        "5 false",
        "6 false",
        "5 true",
        "6 true"
      ],
      "answer": 0,
      "explain": "Because `a > 10` is false, short-circuit `&&` immediately terminates evaluation. `++a` is NEVER executed, leaving `a` at 5 and `result` as false.",
      "topic": "Short-Circuit Side Effects",
      "type": "output",
      "level": "medium",
      "strength": "Spotted short-circuit skipping operand side effects.",
      "weakness": "In `&&`, if the first condition is false, remaining conditions with side effects (like `++a`) are never evaluated."
    },
    {
      "q": "You are writing a temperature monitoring system for an IoT greenhouse. Temperatures range from -50.0°C to +80.0°C with 0.1°C precision. Which primitive type offers the most memory-efficient storage while preserving necessary decimal precision for 1 million readings?",
      "options": [
        "`double`",
        "`float`",
        "`int`",
        "`boolean`"
      ],
      "answer": 1,
      "explain": "`float` is a 32-bit IEEE 754 type (half the memory of 64-bit `double`) and provides 6-7 significant decimal digits of precision, which is more than sufficient for temperature readings with 1 decimal place.",
      "topic": "IoT Memory Optimization",
      "type": "scenario",
      "level": "medium",
      "strength": "Selects appropriate primitive type balancing memory footprint and precision.",
      "weakness": "`float` uses 4 bytes compared to 8 bytes for `double`, saving 4MB across 1 million readings."
    },
    {
      "q": "What is the purpose of the 'final' keyword when applied to a local primitive variable?",
      "options": [
        "It moves the variable from the stack into heap memory",
        "It makes the variable a constant whose value cannot be reassigned after initialization",
        "It ensures the variable is garbage-collected immediately when the block ends",
        "It converts the primitive into its wrapper class automatically"
      ],
      "answer": 1,
      "explain": "Marking a variable with 'final' means it is a constant; once assigned a value, any attempt to reassign it causes a compilation error.",
      "topic": "Constants & Final",
      "type": "theory",
      "level": "easy",
      "strength": "Understands immutability enforced by the final keyword.",
      "weakness": "Remember that 'final' prevents reassignment."
    },
    {
      "q": "Why does the following snippet cause a compilation error?\n```java\nint x;\nif (x == 10) {\n    System.out.println(\"Ten\");\n}\n```",
      "options": [
        "x defaults to 0 so the if statement is unreachable",
        "Local variable 'x' might not have been initialized",
        "Condition must use '=' instead of '=='",
        "println requires String concatenation"
      ],
      "answer": 1,
      "explain": "Local variable `x` is declared but never assigned a value. In Java, local variables do not have default values and reading an uninitialized local variable causes a compile error.",
      "topic": "Uninitialized Local Variable",
      "type": "error",
      "level": "easy",
      "strength": "Caught reading an uninitialized local variable.",
      "weakness": "Local variables must be explicitly initialized before being read in expressions."
    },
    {
      "q": "What does the following snippet print?\n```java\nint x = 8;\nSystem.out.println(x >> 2);\nSystem.out.println(x << 2);\n```",
      "options": [
        "2 and 32",
        "4 and 16",
        "2 and 16",
        "4 and 32"
      ],
      "answer": 0,
      "explain": "`8 >> 2` shifts bits right by 2 (equivalent to `8 / 2^2 = 2`). `8 << 2` shifts bits left by 2 (equivalent to `8 * 2^2 = 32`).",
      "topic": "Bitwise Shifts",
      "type": "output",
      "level": "easy",
      "strength": "Understands bitwise shift arithmetic multipliers.",
      "weakness": "Right shift `x >> n` divides by 2^n; left shift `x << n` multiplies by 2^n."
    },
    {
      "q": "You are developing a high-speed trading application that processes 100,000 Unix epoch timestamps in milliseconds (e.g., 1712000000000 ms). Why MUST you store these timestamps in `long` rather than `int`?",
      "options": [
        "`int` variables cannot be printed with printf",
        "`int` has a maximum value of 2,147,483,647, which represents only ~24.8 days in milliseconds, causing immediate overflow",
        "`long` operations are always executed on the GPU",
        "`int` values cannot represent positive integers after the year 2000"
      ],
      "answer": 1,
      "explain": "An `int` max value of ~2.14 billion milliseconds is only about 24.8 days. Unix timestamps in milliseconds exceed 1.7 trillion, requiring a 64-bit `long` to avoid integer overflow.",
      "topic": "Timestamp Storage",
      "type": "scenario",
      "level": "easy",
      "strength": "Recognizes primitive capacity constraints for epoch timestamps.",
      "weakness": "Timestamps in milliseconds exceed `int` max value (~2.14 billion); always use 64-bit `long`."
    },
    {
      "q": "What is the output of this code?\n```java\nint val = (int) (3.8 + 2.9);\nSystem.out.println(val);\n```",
      "options": [
        "5",
        "6",
        "7",
        "6.7"
      ],
      "answer": 1,
      "explain": "`3.8 + 2.9 = 6.7`. Then `(int) 6.7` truncates to `6`.",
      "topic": "Parenthesized Cast",
      "type": "output",
      "level": "easy",
      "strength": "Recognized order of operations: addition inside parentheses prior to casting.",
      "weakness": "Expressions inside parentheses evaluate first: 3.8 + 2.9 = 6.7, which casts to 6."
    },
    {
      "q": "An access control system encodes permissions using bits: Read = 1, Write = 2, Execute = 4, Delete = 8. A user has `int userPerms = 7;`. Does this user have 'Delete' permission?",
      "options": [
        "Yes, because 7 > 4",
        "No, because `(userPerms & 8) == 0`",
        "Yes, because `(userPerms | 8) == 7`",
        "Cannot be determined without a database query"
      ],
      "answer": 1,
      "explain": "User permissions 7 is binary `0111` (Read + Write + Execute = 1 + 2 + 4). The Delete permission is 8 (`1000`). Evaluating `7 & 8` gives `0`, confirming the user lacks Delete permission.",
      "topic": "Permission Masking",
      "type": "scenario",
      "level": "easy",
      "strength": "Accurately evaluated bitwise permission flags.",
      "weakness": "Bitwise AND with the permission bit mask indicates whether that permission is granted."
    },
    {
      "q": "Which operator has the highest precedence in Java expressions?",
      "options": [
        "Multiplication `*`",
        "Postfix increment/decrement `x++` / `x--`",
        "Logical AND `&&`",
        "Assignment `=`"
      ],
      "answer": 1,
      "explain": "Postfix operators (`[]`, `.`, `()`, `x++`, `x--`) have higher precedence than arithmetic, logical, and assignment operators.",
      "topic": "Operator Precedence",
      "type": "theory",
      "level": "medium",
      "strength": "Mastery of Java operator precedence hierarchy.",
      "weakness": "Postfix operators and member access have the highest precedence in Java."
    },
    {
      "q": "Identify the bug in this floating point comparison:\n```java\ndouble d1 = 0.1 + 0.2;\ndouble d2 = 0.3;\nif (d1 == d2) {\n    System.out.println(\"Equal\");\n}\n```",
      "options": [
        "Syntax error: `==` cannot be used with doubles",
        "Due to binary floating-point rounding errors, `0.1 + 0.2` is `0.30000000000000004`, making `d1 == d2` false",
        "d1 automatically truncates to 0",
        "ArithmeticException is thrown during addition"
      ],
      "answer": 1,
      "explain": "Binary floating point (IEEE 754) cannot represent fractions like 0.1 or 0.2 exactly. `0.1 + 0.2` evaluates to `0.30000000000000004`, so exact equality `==` fails. Developers must compare `Math.abs(d1 - d2) < EPSILON`.",
      "topic": "Floating-Point Precision Bug",
      "type": "error",
      "level": "medium",
      "strength": "Understands floating point rounding and improper `==` comparisons.",
      "weakness": "Never use `==` for floating point numbers; use an epsilon delta check (`Math.abs(a - b) < 1e-9`)."
    },
    {
      "q": "What is the output of this code snippet?\n```java\nint a = 5;\nboolean result = (a > 10) & (++a > 5);\nSystem.out.println(a + \" \" + result);\n```",
      "options": [
        "5 false",
        "6 false",
        "5 true",
        "6 true"
      ],
      "answer": 1,
      "explain": "Single `&` does NOT short-circuit. Even though `a > 10` is false, `++a > 5` is still evaluated. `a` increments to 6, and the overall result is false.",
      "topic": "Bitwise Boolean Evaluation",
      "type": "output",
      "level": "medium",
      "strength": "Correctly tracked execution when using non-short-circuit `&`.",
      "weakness": "Single `&` evaluates both sides unconditionally, executing all side effects."
    },
    {
      "q": "In an e-commerce checkout system, a customer gets free shipping if their subtotal is >= RM 150 OR they are a VIP member, AND their cart is not empty. Which boolean expression correctly models this business rule?",
      "options": [
        "`subtotal >= 150 || isVIP && !cartEmpty`",
        "`(subtotal >= 150 || isVIP) && !cartEmpty`",
        "`subtotal >= 150 && (isVIP || !cartEmpty)`",
        "`!(subtotal >= 150 || isVIP || cartEmpty)`"
      ],
      "answer": 1,
      "explain": "Due to operator precedence, `&&` binds tighter than `||`. Without parentheses, `subtotal >= 150 || isVIP && !cartEmpty` would grant free shipping to any subtotal >= 150 even if the cart is empty! Parentheses `(subtotal >= 150 || isVIP) && !cartEmpty` are required.",
      "topic": "Business Logic Precedence",
      "type": "scenario",
      "level": "medium",
      "strength": "Applied correct grouping parentheses to avoid operator precedence bugs in business rules.",
      "weakness": "Use parentheses when combining `||` and `&&` to ensure business rules evaluate in the desired order."
    },
    {
      "q": "What is 'type widening' (implicit casting) in Java?",
      "options": [
        "Converting a larger data type to a smaller data type with explicit parenthesis",
        "Automatically converting a smaller primitive type to a larger compatible type without precision loss",
        "Converting an Object into a primitive type using wrapper methods",
        "Converting a String to an integer using Integer.parseInt()"
      ],
      "answer": 1,
      "explain": "Widening conversion occurs automatically (e.g., int -> long -> float -> double) because the destination type can safely represent all values of the source type without truncation.",
      "topic": "Type Casting",
      "type": "theory",
      "level": "easy",
      "strength": "Recognizes automatic widening type conversion.",
      "weakness": "Widening goes from smaller to larger types automatically (e.g., byte -> short -> int -> long -> float -> double)."
    },
    {
      "q": "Identify the compile error in the following assignment:\n```java\nchar ch = 'AB';\n```",
      "options": [
        "char must use double quotes \"AB\"",
        "Too many characters in character literal ('AB' is a string, char can only hold a single 16-bit code unit)",
        "char cannot store capital letters",
        "Variables named 'ch' must be declared as int"
      ],
      "answer": 1,
      "explain": "A `char` literal enclosed in single quotes can hold exactly one character. 'AB' contains two characters, which is an illegal character literal. For multiple characters, double-quoted `String` must be used.",
      "topic": "Char Literal Syntax",
      "type": "error",
      "level": "easy",
      "strength": "Recognized multi-character literal error in single quotes.",
      "weakness": "Single quotes are strictly for single character literals; multi-character sequences require double quotes (String)."
    },
    {
      "q": "What is the output of this snippet?\n```java\nint x = 10;\nint y = 20;\nint max = (x > y) ? x : y;\nSystem.out.println(max);\n```",
      "options": [
        "10",
        "20",
        "true",
        "false"
      ],
      "answer": 1,
      "explain": "The condition `10 > 20` is false, so the ternary operator selects the second expression `y`, which is 20.",
      "topic": "Ternary Operator Output",
      "type": "output",
      "level": "easy",
      "strength": "Correctly evaluated basic ternary conditional logic.",
      "weakness": "Ternary operator selects expression after `:` when the condition is false."
    },
    {
      "q": "A university student portal calculates the Grade Point Average (GPA) for 3 courses. The credits are integers and grade points are doubles. What is the correct way to compute weighted GPA?\n```java\nint c1 = 3, c2 = 4, c3 = 3;\ndouble gp1 = 4.0, gp2 = 3.5, gp3 = 3.0;\n```",
      "options": [
        "`double gpa = (gp1 + gp2 + gp3) / 3;`",
        "`double gpa = (c1*gp1 + c2*gp2 + c3*gp3) / (c1 + c2 + c3);`",
        "`double gpa = (int)(c1*gp1 + c2*gp2 + c3*gp3) / (c1 + c2 + c3);`",
        "`double gpa = c1*gp1 + c2*gp2 + c3*gp3 / c1 + c2 + c3;`"
      ],
      "answer": 1,
      "explain": "Weighted GPA is total quality points divided by total credits. The denominator `(c1 + c2 + c3)` must be parenthesized to avoid operator precedence dividing only the last term.",
      "topic": "Weighted Average Formula",
      "type": "scenario",
      "level": "easy",
      "strength": "Correctly applied weighted average formula with proper denominator grouping.",
      "weakness": "Ensure the entire denominator sum `(c1 + c2 + c3)` is parenthesized in division formulas."
    },
    {
      "q": "What does this code output?\n```java\nint a = 10, b = 20, c = 30;\na = b = c = 50;\nSystem.out.println(a + \" \" + b + \" \" + c);\n```",
      "options": [
        "10 20 30",
        "50 50 50",
        "50 20 10",
        "Error: multiple assignment illegal"
      ],
      "answer": 1,
      "explain": "Assignment operators associate right-to-left. First `c = 50`, then `b = 50`, then `a = 50`. All three variables become 50.",
      "topic": "Chained Assignment",
      "type": "output",
      "level": "easy",
      "strength": "Understands right-to-left associativity of assignment operator.",
      "weakness": "Assignments associate right-to-left: `a = b = c = 50` sets all variables to 50."
    },
    {
      "q": "A mobile banking app needs to display a credit card number masked as `****-****-****-1234`. The raw number is a 16-digit `long creditCard = 5521998844331234L;`. How can the last 4 digits be extracted mathematically without converting to a String?",
      "options": [
        "`creditCard / 10000`",
        "`creditCard % 10000`",
        "`creditCard & 10000`",
        "`creditCard >> 4`"
      ],
      "answer": 1,
      "explain": "The modulus operator `% 10000` extracts the remainder when divided by 10,000, isolating the last 4 digits mathematically in O(1) time.",
      "topic": "Digit Extraction Modulus",
      "type": "scenario",
      "level": "easy",
      "strength": "Applied modulus arithmetic to extract trailing digits.",
      "weakness": "Modulus `% 10^k` extracts the last `k` digits of any integer."
    },
    {
      "q": "What does Java do when an arithmetic overflow occurs on primitive integer types (e.g. `Integer.MAX_VALUE + 1`)?",
      "options": [
        "Throws an `ArithmeticException`",
        "Silently wraps around in two's complement without raising an exception",
        "Caps the value at `Integer.MAX_VALUE` (saturation arithmetic)",
        "Converts the variable automatically into a `BigInteger`"
      ],
      "answer": 1,
      "explain": "Standard integer arithmetic in Java does not throw an exception on overflow; it silently wraps around using two's complement representation (`Integer.MAX_VALUE + 1 == Integer.MIN_VALUE`).",
      "topic": "Integer Overflow",
      "type": "theory",
      "level": "medium",
      "strength": "Understands two's complement wrap-around behavior.",
      "weakness": "Java integer arithmetic wraps around on overflow without throwing an exception."
    },
    {
      "q": "Why does the following snippet cause a compilation error?\n```java\nint x = 10;\n{\n    int x = 20;\n    System.out.println(x);\n}\n```",
      "options": [
        "Curly braces cannot be used without an if or loop statement",
        "Variable 'x' is already defined in the outer scope; shadowing local variables in nested blocks is illegal in Java",
        "The inner block cannot access variables named x",
        "println cannot be called inside a standalone block"
      ],
      "answer": 1,
      "explain": "In Java, declaring a local variable with the same name as another local variable in an enclosing scope is strictly prohibited (unlike C++).",
      "topic": "Variable Scope Shadowing",
      "type": "error",
      "level": "medium",
      "strength": "Recognized illegal local variable shadowing in nested block.",
      "weakness": "Java forbids redeclaring a local variable name within an enclosing block scope."
    },
    {
      "q": "What is the output of this code?\n```java\nbyte b = 127;\nb++;\nSystem.out.println(b);\n```",
      "options": [
        "128",
        "-128",
        "0",
        "127"
      ],
      "answer": 1,
      "explain": "`byte` is signed 8-bit (-128 to 127). Adding 1 to the maximum positive value 127 causes two's complement integer overflow, wrapping around to -128.",
      "topic": "Byte Overflow",
      "type": "output",
      "level": "medium",
      "strength": "Understands two's complement boundary overflow on 8-bit byte.",
      "weakness": "Overflow in signed two's complement wraps around: 127 + 1 = -128 for byte."
    },
    {
      "q": "A game developer wants to store 8 player status flags (IsPoisoned, IsStunned, IsInvisible, IsFlying, etc.) inside a single 8-bit `byte` to save bandwidth. How can the game check if the 3rd flag (mask `0b00000100`) is active?",
      "options": [
        "`(statusFlags & 0b00000100) != 0`",
        "`(statusFlags | 0b00000100) == 0`",
        "`statusFlags ^ 0b00000100 == 1`",
        "`statusFlags >> 3 == 1`"
      ],
      "answer": 0,
      "explain": "Bitwise masking uses AND (`&`). If `(statusFlags & mask) != 0`, the specified bit is set to 1.",
      "topic": "Bitmasking & Flags",
      "type": "scenario",
      "level": "medium",
      "strength": "Correctly applied bitwise masking to inspect bit flags.",
      "weakness": "To test if a specific bit flag is set, use bitwise AND with the mask: `(flags & MASK) != 0`."
    },
    {
      "q": "What does short-circuit evaluation mean for the logical AND operator `&&`?",
      "options": [
        "Both operands are always evaluated regardless of truth values",
        "If the left operand is false, the right operand is not evaluated because the result must be false",
        "If the left operand is true, the right operand is skipped",
        "It evaluates right-to-left instead of left-to-right"
      ],
      "answer": 1,
      "explain": "In short-circuit AND (`&&`), if the left-hand operand evaluates to false, the overall expression is already guaranteed false, so the right-hand operand is completely skipped.",
      "topic": "Logical Operators",
      "type": "theory",
      "level": "easy",
      "strength": "Understands short-circuit evaluation mechanism of `&&`.",
      "weakness": "Remember: `&&` stops evaluating immediately if the first operand is false."
    },
    {
      "q": "What is wrong with the following boolean assignment?\n```java\nboolean flag = 1;\n```",
      "options": [
        "In Java, boolean types only accept 'true' or 'false', not integer 1 or 0",
        "1 must be written as 1b",
        "boolean variables must start with an uppercase letter",
        "1 must be enclosed in single quotes '1'"
      ],
      "answer": 0,
      "explain": "Unlike C/C++, Java boolean is an entirely distinct type that is incompatible with integer types. Assigning `1` to a `boolean` causes a compile error: 'incompatible types: int cannot be converted to boolean'.",
      "topic": "Boolean Incompatibility",
      "type": "error",
      "level": "easy",
      "strength": "Distinguishes Java strict booleans from C/C++ integer truth values.",
      "weakness": "In Java, booleans can only be literal `true` or `false`; integers 1 and 0 are not booleans."
    },
    {
      "q": "What does this code print?\n```java\nchar c = 'A';\nc += 2;\nSystem.out.println(c);\n```",
      "options": [
        "C",
        "67",
        "A2",
        "Error"
      ],
      "answer": 0,
      "explain": "The character 'A' has ASCII/Unicode value 65. Adding 2 yields 67, which corresponds to 'C'. `c += 2` casts 67 back to char, printing 'C'.",
      "topic": "Char Arithmetic",
      "type": "output",
      "level": "easy",
      "strength": "Understands character arithmetic and implicit casting with compound assignment.",
      "weakness": "Adding an integer to a char shifts its character code: 'A' (65) + 2 = 'C' (67)."
    },
    {
      "q": "You are parsing user birth years from an old legacy database where years are stored as 2 digits (e.g., 98 for 1998, 04 for 2004). Which ternary expression maps a two-digit `year` to a four-digit year (assuming cutoff year 25)?",
      "options": [
        "`int fullYear = year > 25 ? 1900 + year : 2000 + year;`",
        "`int fullYear = year < 25 ? 1900 + year : 2000 + year;`",
        "`int fullYear = year == 25 ? 2025 : 1900;`",
        "`int fullYear = (1900 + year) > 2000 ? 1900 : 2000;`"
      ],
      "answer": 0,
      "explain": "If `year > 25`, it belongs to the 20th century (1900 + year, e.g. 98 -> 1998). Otherwise, it belongs to the 21st century (2000 + year, e.g. 04 -> 2004).",
      "topic": "Data Parsing & Ternary Logic",
      "type": "scenario",
      "level": "easy",
      "strength": "Correctly mapped business cutoff logic using the ternary operator.",
      "weakness": "Verify ternary condition branch assignments to prevent inverted century mappings."
    },
    {
      "q": "What is the output of this code?\n```java\nchar ch = '5';\nint val = ch - '0';\nSystem.out.println(val);\n```",
      "options": [
        "53",
        "5",
        "48",
        "Error"
      ],
      "answer": 1,
      "explain": "The ASCII value of '5' is 53, and '0' is 48. `53 - 48 = 5`. Subtracting `'0'` is the idiomatic way in Java to convert a digit character to its numeric integer value.",
      "topic": "Character to Digit Conversion",
      "type": "output",
      "level": "easy",
      "strength": "Knows the idiomatic char-to-digit conversion `ch - '0'`.",
      "weakness": "Subtracting `'0'` from a digit char gives its integer numeric value (e.g. `'5' - '0' == 5`)."
    },
    {
      "q": "A database query returns elapsed query durations in seconds. A developer must display the duration in `MM:SS` format (e.g. 125 seconds -> `02:05`). Which snippet outputs this cleanly?",
      "options": [
        "`System.out.printf(\"%02d:%02d\", totalSeconds / 60, totalSeconds % 60);`",
        "`System.out.printf(\"%2d:%2d\", totalSeconds / 60, totalSeconds % 60);`",
        "`System.out.println(totalSeconds / 60 + \":\" + totalSeconds % 60);`",
        "`System.out.printf(\"%.2f:%.2f\", (double)(totalSeconds / 60), (double)(totalSeconds % 60));`"
      ],
      "answer": 0,
      "explain": "`totalSeconds / 60` computes whole minutes (2). `totalSeconds % 60` computes leftover seconds (5). `%02d:%02d` formats both as 2-digit zero-padded integers: `\"02:05\"`.",
      "topic": "Time Format Output",
      "type": "scenario",
      "level": "easy",
      "strength": "Correctly used division, modulus, and zero-padding for MM:SS formatting.",
      "weakness": "Use `%02d` with division and modulus to format minutes and seconds with leading zeros."
    }
  ],
  "2": [
    {
      "q": "Can a `switch` statement have a `default` case placed anywhere other than the very bottom?",
      "options": [
        "No, `default` must strictly be the final statement in the switch block",
        "Yes, `default` can appear anywhere inside the switch block and is only executed if no matching case is found (or via fall-through)",
        "Yes, but it causes a compiler warning",
        "No, placing `default` at the top causes an infinite loop"
      ],
      "answer": 1,
      "explain": "The `default` label can appear anywhere within the switch body. It is evaluated only after all `case` labels have failed to match, unless reached via fall-through.",
      "topic": "Switch Default Placement",
      "type": "theory",
      "level": "hard",
      "strength": "Understands flexible placement of default in switch blocks.",
      "weakness": "`default` can appear at the top, middle, or bottom; it only triggers if no case matches (or via fall-through)."
    },
    {
      "q": "Why does the following code fail to compile?\n```java\nint x = 10;\nswitch (x) {\n    case 10:\n        int count = 1;\n        break;\n    case 20:\n        int count = 2;\n        break;\n}\n```",
      "options": [
        "Variables cannot be declared inside a switch",
        "Variable 'count' is already defined in scope: the entire switch block shares a single local variable scope",
        "count must be declared final",
        "break cannot appear after variable declaration"
      ],
      "answer": 1,
      "explain": "A `switch` block forms a single contiguous variable scope. Declaring `int count` in `case 10` and again in `case 20` causes a duplicate variable declaration error. Enclosing each case in `{ int count = ...; }` solves this.",
      "topic": "Switch Scope Duplicate Variable",
      "type": "error",
      "level": "hard",
      "strength": "Mastered the single-scope nature of switch statements.",
      "weakness": "The entire switch statement is one scope; declare variables once or wrap individual cases in braces `{}`."
    },
    {
      "q": "What does this while loop output?\n```java\nint x = 10;\nwhile (x --> 7) {\n    System.out.print(x + \" \");\n}\n```",
      "options": [
        "9 8 7 ",
        "10 9 8 ",
        "9 8 ",
        "10 9 8 7 "
      ],
      "answer": 0,
      "explain": "The syntax `x --> 7` is `(x--) > 7`. Iteration 1: `10 > 7` true (x becomes 9), prints 9. Iteration 2: `9 > 7` true (x becomes 8), prints 8. Iteration 3: `8 > 7` true (x becomes 7), prints 7. Iteration 4: `7 > 7` false (x becomes 6), loop ends. Output: `9 8 7 `.",
      "topic": "Post-Decrement Loop Operator",
      "type": "output",
      "level": "hard",
      "strength": "Mastered post-decrement combined with comparison operator `x-- > N`.",
      "weakness": "`x-- > y` evaluates `x > y` with the current value and then decrements `x` before the body runs."
    },
    {
      "q": "A university grade assignment program converts numeric scores (0 to 100) to letter grades (A, B, C, F). A developer wants to use a `switch` statement instead of cascading `if-else`. How can scores be mapped to integer switch cases cleanly?",
      "options": [
        "Use `switch (score)` with 101 individual case labels",
        "Use `switch (score / 10)` to map scores into buckets: 10 and 9 for A, 8 for B, 7 for C, etc.",
        "Convert score to double and switch on `(double) score`",
        "Switch on `score % 10`"
      ],
      "answer": 1,
      "explain": "Dividing an integer score by 10 (`score / 10`) performs integer truncation, mapping 90-99 to 9, 80-89 to 8, etc. Cases 10 and 9 map to 'A', 8 to 'B', making a compact switch statement.",
      "topic": "Score Range Bucket Switching",
      "type": "scenario",
      "level": "medium",
      "strength": "Applied integer division bucket mapping to compact switch statements.",
      "weakness": "`score / 10` clusters numeric ranges into clean integer buckets suitable for switch cases."
    },
    {
      "q": "Can a `continue` statement be used inside a `switch` statement that is NOT inside a loop?",
      "options": [
        "Yes, it acts like break",
        "No, `continue` must strictly reside inside an iteration statement (for, while, do); it cannot be used in a switch alone",
        "Yes, it skips to the default case",
        "Yes, it restarts the switch"
      ],
      "answer": 1,
      "explain": "`continue` is strictly a loop-control statement. Inside a standalone `switch`, using `continue` causes a compile-time error: 'continue outside of loop'.",
      "topic": "Continue Statement Scope",
      "type": "theory",
      "level": "medium",
      "strength": "Understands that continue cannot be used in a standalone switch.",
      "weakness": "`continue` only works inside loops (while, do, for); it cannot be used inside a standalone switch."
    },
    {
      "q": "What error occurs in this code snippet?\n```java\nint x = 0;\ndo {\n    int val = 10;\n    x++;\n} while (val > 0);\n```",
      "options": [
        "do-while loops cannot declare variables",
        "Cannot find symbol: variable 'val' is declared inside the loop block and is out of scope in the while condition",
        "val > 0 is an invalid condition",
        "Missing semicolon"
      ],
      "answer": 1,
      "explain": "Variables declared inside the `do { ... }` block are local to that block. The `while (val > 0)` condition is outside the block scope, so `val` cannot be resolved.",
      "topic": "Do-While Variable Scope",
      "type": "error",
      "level": "medium",
      "strength": "Caught referencing a block-scoped variable in do-while condition.",
      "weakness": "Variables tested in a `do-while` condition must be declared outside the `do` block."
    },
    {
      "q": "What is the output of this code?\n```java\nint n = 1;\nswitch (n) {\n    case 1: n += 5;\n    case 2: n += 10;\n    case 3: n += 20; break;\n    default: n += 100;\n}\nSystem.out.println(n);\n```",
      "options": [
        "6",
        "16",
        "36",
        "136"
      ],
      "answer": 2,
      "explain": "Matches `case 1`: `n = 1 + 5 = 6`. Falls through to `case 2`: `n = 6 + 10 = 16`. Falls through to `case 3`: `n = 16 + 20 = 36`. Encounters `break` and exits. Prints 36.",
      "topic": "Accumulated Switch Fall-Through",
      "type": "output",
      "level": "medium",
      "strength": "Traced variable accumulation across multiple fall-through cases.",
      "weakness": "Trace cumulative modifications as execution flows through un-broken case blocks: 1 -> 6 -> 16 -> 36."
    },
    {
      "q": "A file upload handler allows 3 retry attempts if a network timeout occurs. If all 3 attempts fail, an error message is shown. Which loop flag pattern implements this cleanly?",
      "options": [
        "`boolean success = false; for (int i = 1; i <= 3; i++) { if (tryUpload()) { success = true; break; } } if (!success) showError();`",
        "`for (int i = 1; i <= 3; i++) { tryUpload(); showError(); }`",
        "`while (true) { tryUpload(); }`",
        "`if (tryUpload() && tryUpload() && tryUpload()) showError();`"
      ],
      "answer": 0,
      "explain": "The standard retry pattern uses a loop with early `break` on success and a boolean `success` flag checked after loop termination to handle exhaustion.",
      "topic": "Retry-Exhaustion Pattern",
      "type": "scenario",
      "level": "medium",
      "strength": "Applied classic retry loop pattern with boolean success flag.",
      "weakness": "Use a boolean flag to track success across retry iterations and display errors upon exhaustion."
    },
    {
      "q": "In a `do-while` loop, what punctuation is strictly required immediately after the closing parenthesis of `while (condition)`?",
      "options": [
        "A colon `:`",
        "A semicolon `;`",
        "A closing brace `}`",
        "No punctuation is permitted"
      ],
      "answer": 1,
      "explain": "A `do-while` loop statement must terminate with a semicolon `;` following the condition parenthesis: `do { ... } while (condition);`.",
      "topic": "Do-While Syntax",
      "type": "theory",
      "level": "easy",
      "strength": "Knows the required semicolon in do-while loop syntax.",
      "weakness": "Always end a `do-while` loop with a trailing semicolon: `while (condition);`."
    },
    {
      "q": "A smart thermostat adjusts air conditioning mode based on current temperature: > 26°C -> Cooling, < 20°C -> Heating, otherwise -> Fan Only. Which structure best represents this three-state control logic?",
      "options": [
        "`if (temp > 26) cool(); else if (temp < 20) heat(); else fanOnly();`",
        "`switch (temp) { case 26: cool(); }`",
        "`while (temp > 26) { cool(); }`",
        "`do { heat(); } while (temp < 20);`"
      ],
      "answer": 0,
      "explain": "An `if-else-if-else` ladder provides clear, unambiguous branching for three non-overlapping ranges.",
      "topic": "Three-State Thermostat Logic",
      "type": "scenario",
      "level": "easy",
      "strength": "Selected clean if-else-if-else ladder for multi-range device control.",
      "weakness": "Use if-else-if-else ladders for continuous floating-point range evaluation."
    },
    {
      "q": "What is the maximum number of times the condition expression in a `for` loop `for (int i = 0; i < N; i++)` is evaluated if the loop completes normally (where N >= 0)?",
      "options": [
        "N times",
        "N - 1 times",
        "N + 1 times",
        "2 * N times"
      ],
      "answer": 2,
      "explain": "The condition is evaluated N times yielding `true` (entering the body), plus 1 final time where it evaluates to `false` to terminate the loop. Total: `N + 1` evaluations.",
      "topic": "Loop Condition Evaluations",
      "type": "theory",
      "level": "hard",
      "strength": "Understands exact evaluation count of loop conditions.",
      "weakness": "A loop executing N times evaluates its condition N + 1 times (the last one returns false)."
    },
    {
      "q": "Identify the compilation issue in this snippet:\n```java\nint score = 85;\nif (score >= 90)\n    String grade = \"A\";\n```",
      "options": [
        "String cannot be declared inside a method",
        "Variable declaration cannot be the direct sub-statement of an if statement without a block `{}`",
        "score must be a double",
        "grade is a reserved keyword"
      ],
      "answer": 1,
      "explain": "The Java Language Specification explicitly forbids a variable declaration as the single statement of an `if`, `while`, or `for` statement without braces `{}` because the variable would instantly go out of scope.",
      "topic": "Single Statement Variable Declaration",
      "type": "error",
      "level": "hard",
      "strength": "Understands that variable declarations cannot be unbraced branch statements.",
      "weakness": "Variable declarations cannot stand alone as single unbraced statements under `if`, `while`, or `for`."
    },
    {
      "q": "What is the output of the following switch code?\n```java\nint x = 20;\nswitch (x) {\n    default:\n        System.out.print(\"Def \");\n    case 1:\n        System.out.print(\"One \");\n        break;\n    case 2:\n        System.out.print(\"Two \");\n}\n```",
      "options": [
        "Def ",
        "Def One ",
        "Two ",
        "One "
      ],
      "answer": 1,
      "explain": "`x = 20` matches neither 1 nor 2, so execution starts at `default:`. Because there is no `break` at default, execution falls through into `case 1:` printing `\"One \"` before hitting `break`. Output: `\"Def One \"`.",
      "topic": "Default Fall-Through",
      "type": "output",
      "level": "hard",
      "strength": "Mastery of fall-through when default is placed at top of switch.",
      "weakness": "When `default` appears first and matches, execution falls through to subsequent cases until a `break`."
    },
    {
      "q": "In an e-commerce order processing pipeline, an order can have statuses: PENDING, PAID, SHIPPED, DELIVERED, CANCELLED. Why is a `switch` statement generally preferred over a 5-branch `if-else-if` ladder when branching on enum or int status codes?",
      "options": [
        "`if-else-if` cannot compare enums",
        "`switch` statements are more readable, prevent repetitive variable evaluations, and can be compiled into efficient `tableswitch` or `lookupswitch` bytecode jump tables",
        "`switch` uses less stack memory than `if`",
        "Java prohibits more than 3 `if` statements in a single method"
      ],
      "answer": 1,
      "explain": "A `switch` statement makes branch intentions clear and allows the JVM compiler to generate jump tables (`tableswitch` / `lookupswitch`) that achieve O(1) branch dispatch instead of sequential O(N) comparisons.",
      "topic": "Switch Performance & Clean Code",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands bytecode jump table efficiency and readability of switch statements.",
      "weakness": "Switch statements improve readability and enable compiler jump table optimizations."
    },
    {
      "q": "What is the fundamental difference between a `while` loop and a `do-while` loop in Java?",
      "options": [
        "`while` loop is post-tested; `do-while` loop is pre-tested",
        "`while` loop checks the condition before executing the loop body; `do-while` checks after, guaranteeing at least one execution",
        "`while` loop supports `break`; `do-while` loop does not",
        "`do-while` loops can only iterate through arrays"
      ],
      "answer": 1,
      "explain": "A `while` loop is an entry-controlled loop (evaluating condition before entering the body, potentially running 0 times). A `do-while` loop is exit-controlled, ensuring the body executes at least once.",
      "topic": "Loop Architecture",
      "type": "theory",
      "level": "easy",
      "strength": "Understands the entry-controlled vs exit-controlled distinction.",
      "weakness": "Remember that `do-while` executes its body at least once before checking the condition."
    },
    {
      "q": "Identify the compilation error in the following snippet:\n```java\nint x = 10;\nif (x = 20) {\n    System.out.println(\"Twenty\");\n}\n```",
      "options": [
        "println cannot take String literals",
        "Incompatible types: int cannot be converted to boolean (used assignment '=' instead of comparison '==')",
        "x cannot be modified inside an if statement",
        "Variable x is not in scope"
      ],
      "answer": 1,
      "explain": "In Java, `x = 20` is an assignment that returns the integer `20`. Because Java `if` conditions strictly require a `boolean`, passing an `int` causes a compile error: 'int cannot be converted to boolean'.",
      "topic": "Assignment in Condition Error",
      "type": "error",
      "level": "easy",
      "strength": "Caught accidental assignment operator '=' inside if condition.",
      "weakness": "Use comparison operator `==` inside conditions; assignment `=` yields an int which is not boolean in Java."
    },
    {
      "q": "What does this snippet print?\n```java\nint x = 0;\ndo {\n    x++;\n    if (x == 3) continue;\n    System.out.print(x + \" \");\n} while (x < 4);\n```",
      "options": [
        "1 2 4 ",
        "1 2 ",
        "1 2 3 4 ",
        "1 2 4 5 "
      ],
      "answer": 0,
      "explain": "Iteration 1: x=1, prints 1. Iteration 2: x=2, prints 2. Iteration 3: x=3, continue skips print, condition `3 < 4` is true. Iteration 4: x=4, prints 4, condition `4 < 4` is false. Loop ends. Output: `1 2 4 `.",
      "topic": "Do-While Continue Execution",
      "type": "output",
      "level": "medium",
      "strength": "Traced continue within do-while loop correctly.",
      "weakness": "`continue` in a `do-while` loop skips to the `while (condition)` check, not the top of the body."
    },
    {
      "q": "You are building an ATM withdrawal module for a bank in Malaysia. The user requests `withdrawAmount`. The ATM only dispenses RM 50 and RM 100 notes. How should you validate if the requested amount is dispensable before checking account balance?",
      "options": [
        "`if (withdrawAmount % 50 != 0 || withdrawAmount <= 0) { reject(); }`",
        "`if (withdrawAmount / 50 == 0) { reject(); }`",
        "`if (withdrawAmount % 100 != 0) { reject(); }`",
        "`if (withdrawAmount > 1000) { reject(); }`"
      ],
      "answer": 0,
      "explain": "Since any multiple of RM 100 is also a multiple of RM 50, checking `withdrawAmount % 50 != 0 || withdrawAmount <= 0` cleanly verifies that the amount can be dispensed in RM 50 and RM 100 notes.",
      "topic": "ATM Note Dispensation Validation",
      "type": "scenario",
      "level": "easy",
      "strength": "Formulated clean modular arithmetic for ATM note validation.",
      "weakness": "Any sum of RM 50 and RM 100 notes must be a positive multiple of 50 (`amount % 50 == 0`)."
    },
    {
      "q": "What is the difference between an entry-controlled loop and an exit-controlled loop?",
      "options": [
        "Entry-controlled loops run at least once; exit-controlled may run zero times",
        "Entry-controlled tests condition before body execution; exit-controlled tests condition after body execution",
        "Entry-controlled loops cannot use `break`",
        "Exit-controlled loops cannot use nested loops"
      ],
      "answer": 1,
      "explain": "`for` and `while` are entry-controlled (test before entering body). `do-while` is exit-controlled (tests after executing body).",
      "topic": "Loop Classification",
      "type": "theory",
      "level": "easy",
      "strength": "Correctly classifies entry-controlled vs exit-controlled loops.",
      "weakness": "Entry-controlled loops test condition first; exit-controlled loops test condition at the end."
    },
    {
      "q": "A text processing program counts the number of vowels in a string. Which control flow structure inside a character iteration loop provides the cleanest vowel matching?",
      "options": [
        "`switch (Character.toLowerCase(ch)) { case 'a': case 'e': case 'i': case 'o': case 'u': vowelCount++; break; }`",
        "Five nested `if` statements",
        "A while loop checking each vowel sequentially",
        "Converting each character to double"
      ],
      "answer": 0,
      "explain": "A `switch` statement with stacked cases `case 'a': case 'e': case 'i': case 'o': case 'u':` is clean, readable, and highly optimized by the JVM.",
      "topic": "Vowel Counting Switch Idiom",
      "type": "scenario",
      "level": "easy",
      "strength": "Implemented stacked case switch for multi-character matching.",
      "weakness": "Stack multiple character cases together to group vowel matching cleanly."
    },
    {
      "q": "What is the dangling else problem in nested if-else structures?",
      "options": [
        "An `else` clause that has no code inside its block",
        "Ambiguity in code readability where an `else` matches the closest preceding unmatched `if`, which may differ from indentation",
        "An `else` statement placed outside a method",
        "When an `else` block causes an infinite loop"
      ],
      "answer": 1,
      "explain": "In Java, an `else` is always bound to the nearest preceding unmatched `if` at the same block level, regardless of indentation. Using curly braces `{}` avoids ambiguity.",
      "topic": "Dangling Else Problem",
      "type": "theory",
      "level": "medium",
      "strength": "Understands syntactic binding of the dangling else.",
      "weakness": "In Java, `else` pairs with the closest preceding unmatched `if`; use braces `{}` to clarify intent."
    },
    {
      "q": "Identify the compile error in this labeled break statement:\n```java\nmyLoop: \nint x = 10;\nwhile (x > 0) {\n    break myLoop;\n}\n```",
      "options": [
        "Labels cannot end with a colon",
        "The label 'myLoop' is attached to `int x = 10;`, not the while loop, so `break myLoop` is invalid",
        "x must be decremented inside the loop",
        "Labels cannot be used on while loops"
      ],
      "answer": 1,
      "explain": "A label applies only to the immediate statement that follows it. Here `myLoop:` labels `int x = 10;`. The while loop is not labeled, so breaking to `myLoop` is illegal.",
      "topic": "Label Binding Error",
      "type": "error",
      "level": "hard",
      "strength": "Understands that a label attaches strictly to the immediately following statement.",
      "weakness": "Place the label immediately before the loop header: `myLoop: while (...)`."
    },
    {
      "q": "What does the following code print?\n```java\nint x = 1;\nif (x > 0)\n    if (x < 1)\n        System.out.println(\"A\");\nelse\n    System.out.println(\"B\");\n```",
      "options": [
        "A",
        "B",
        "Nothing printed",
        "A and B"
      ],
      "answer": 1,
      "explain": "According to the dangling else rule, the `else` binds to the inner `if (x < 1)`. Since `x > 0` is true and `x < 1` is false, the inner `else` executes, printing `B`.",
      "topic": "Dangling Else Output",
      "type": "output",
      "level": "hard",
      "strength": "Correctly resolved dangling else association to nearest inner if.",
      "weakness": "`else` attaches to `if (x < 1)`; since `x = 1` is not `< 1`, the else branch executes, printing 'B'."
    },
    {
      "q": "A security system monitors failed login attempts. An IP is blocked if it fails 5 consecutive attempts. A successful login resets the failure counter to 0. Which control flow structure correctly models this verification loop?",
      "options": [
        "A single if-statement without loops",
        "A while loop checking attempts; if auth fails, increment `fails`; if `fails >= 5`, block and break; if auth succeeds, `fails = 0` and break",
        "A switch statement on the IP address",
        "A for loop that ignores successful logins"
      ],
      "answer": 1,
      "explain": "A loop tracking consecutive failures with early break upon success or upon reaching the 5-failure threshold accurately models real-world rate limiting.",
      "topic": "Rate Limiting & Consecutive Failures",
      "type": "scenario",
      "level": "medium",
      "strength": "Modeled security rate limiting with dynamic failure tracking.",
      "weakness": "Reset consecutive failure counters upon successful action; break and block when threshold is met."
    },
    {
      "q": "Which of the following data types CANNOT be used as the selector expression in a traditional Java `switch` statement?",
      "options": [
        "int",
        "char",
        "String",
        "double"
      ],
      "answer": 3,
      "explain": "Traditional Java `switch` statements support `byte`, `short`, `char`, `int`, their corresponding wrapper classes, `enum`, and `String` (from Java 7). Floating-point types (`float`, `double`) and `boolean`/`long` are strictly prohibited.",
      "topic": "Switch Selector Types",
      "type": "theory",
      "level": "easy",
      "strength": "Identifies unsupported types in switch statements.",
      "weakness": "Switch statements do not accept `double`, `float`, `long`, or `boolean`."
    },
    {
      "q": "Why does this code fail to compile?\n```java\nint day = 3;\nswitch (day) {\n    case 1: System.out.println(\"Mon\"); break;\n    case 1: System.out.println(\"Duplicate\"); break;\n}\n```",
      "options": [
        "break cannot be on the same line as println",
        "Duplicate case label: case 1 appears more than once",
        "switch requires curly braces for each case",
        "switch cannot evaluate int"
      ],
      "answer": 1,
      "explain": "Case labels within a single switch block must be distinct. Having two `case 1:` labels causes a compile-time error: 'duplicate case label'.",
      "topic": "Duplicate Case Label",
      "type": "error",
      "level": "easy",
      "strength": "Spotted duplicate case label in switch.",
      "weakness": "Every case label in a switch statement must be unique."
    },
    {
      "q": "What is the output of this code?\n```java\nint sum = 0;\nfor (int i = 1; i <= 5; i++) {\n    if (i == 3) continue;\n    sum += i;\n    if (i == 4) break;\n}\nSystem.out.println(sum);\n```",
      "options": [
        "7",
        "10",
        "3",
        "12"
      ],
      "answer": 0,
      "explain": "`i=1`: sum = 1. `i=2`: sum = 3. `i=3`: skipped by continue. `i=4`: sum = 3 + 4 = 7; then break exits loop immediately. Output: 7.",
      "topic": "Interleaved Break and Continue",
      "type": "output",
      "level": "medium",
      "strength": "Tracked sequential accumulation with continue and break conditions.",
      "weakness": "1 + 2 = 3; 3 is skipped; 4 is added (sum=7) and then break triggers, printing 7."
    },
    {
      "q": "You are writing a CLI menu loop for a library catalog application. The menu must display at least once, accept user choice 1 to 4, and repeat until the user selects 4 (Exit). Which loop construct is the industry standard for this pattern?",
      "options": [
        "A `for` loop from 1 to 4",
        "A `do-while` loop, because the menu must unconditionally display before reading input, and repeat while `choice != 4`",
        "An infinite recursive method call without base case",
        "A `while (false)` loop"
      ],
      "answer": 1,
      "explain": "CLI menus represent the canonical use-case for `do-while` loops: the menu must render at least once before user input is acquired and evaluated.",
      "topic": "Menu-Driven Do-While Pattern",
      "type": "scenario",
      "level": "easy",
      "strength": "Recognized standard do-while design pattern for CLI interactive menus.",
      "weakness": "Use a `do-while` loop for menu-driven applications where prompts must show at least once."
    },
    {
      "q": "Which of the following describes the execution of a `break` statement inside an inner loop of two nested loops?",
      "options": [
        "It terminates both the inner and outer loops",
        "It terminates only the innermost enclosing loop and resumes execution in the outer loop",
        "It skips to the next iteration of the inner loop",
        "It terminates the entire program"
      ],
      "answer": 1,
      "explain": "An unlabeled `break` statement only terminates the innermost enclosing loop or switch statement that directly contains it.",
      "topic": "Nested Loop Break",
      "type": "theory",
      "level": "easy",
      "strength": "Understands that unlabeled break terminates only the innermost loop.",
      "weakness": "Unlabeled `break` exits only the immediate innermost loop, returning control to the outer loop."
    },
    {
      "q": "Why does this code cause a compiler error?\n```java\nfor (int i = 0; i < 10; i++) {\n    if (i == 5) return;\n}\nSystem.out.println(i);\n```",
      "options": [
        "return cannot be used inside for loops",
        "Cannot find symbol: variable 'i' (scope of 'i' is restricted to the for loop body)",
        "i == 5 is an invalid condition",
        "System.out.println cannot access integer variables"
      ],
      "answer": 1,
      "explain": "Variable `i` is declared in the for-loop header. Its scope is strictly confined to the loop body and header. Referencing `i` after the loop terminates fails to compile.",
      "topic": "Loop Variable Scope Error",
      "type": "error",
      "level": "easy",
      "strength": "Recognized variable out-of-scope following loop termination.",
      "weakness": "Variables declared in a for loop header are only accessible inside the loop."
    },
    {
      "q": "What happens when the condition in a `while` loop is a compile-time constant `while (false)`?",
      "options": [
        "The loop executes zero times at runtime without errors",
        "The compiler issues an 'unreachable statement' error for the loop body",
        "The JVM throws an `IllegalArgumentException`",
        "The code compiles but crashes immediately upon entry"
      ],
      "answer": 1,
      "explain": "Java strictly checks for reachable code. A `while (false)` statement renders its body provably unreachable, resulting in a compile-time error.",
      "topic": "Unreachable Code Rules",
      "type": "theory",
      "level": "medium",
      "strength": "Understands compiler enforcement of unreachable code in constant while loops.",
      "weakness": "`while (false) { ... }` causes a compilation error because the loop body is unreachable."
    },
    {
      "q": "What error occurs in this switch statement?\n```java\nString fruit = \"Apple\";\nswitch (fruit) {\n    case null:\n        System.out.println(\"Null\");\n        break;\n}\n```",
      "options": [
        "Strings cannot be used in switch statements",
        "In Java 8-16, `case null` is illegal and causes a compile error (only introduced in pattern matching switch Java 17+ / 21)",
        "null must be in double quotes \"null\"",
        "Apple cannot match null"
      ],
      "answer": 1,
      "explain": "In standard traditional Java switch (prior to pattern matching preview), `case null:` is a syntax error. Passing a null selector to a traditional switch throws a `NullPointerException` at runtime.",
      "topic": "Switch Null Case Error",
      "type": "error",
      "level": "hard",
      "strength": "Understands that traditional switch does not permit `case null` and throws NPE on null selector.",
      "weakness": "In traditional Java switch, `case null:` is invalid, and a null selector expression throws `NullPointerException`."
    },
    {
      "q": "What does the following nested loop print?\n```java\nfor (int i = 1; i <= 2; i++) {\n    for (int j = 1; j <= 3; j++) {\n        if (j == 2) continue;\n        System.out.print(i + \"\" + j + \" \");\n    }\n}\n```",
      "options": [
        "11 13 21 23 ",
        "11 12 13 21 22 23 ",
        "11 21 ",
        "13 23 "
      ],
      "answer": 0,
      "explain": "When `i = 1`: `j = 1` -> prints `11`. `j = 2` -> continue skips. `j = 3` -> prints `13`. When `i = 2`: `j = 1` -> prints `21`. `j = 2` -> continue skips. `j = 3` -> prints `23`. Output: `11 13 21 23 `.",
      "topic": "Nested Loop Continue Output",
      "type": "output",
      "level": "medium",
      "strength": "Accurately traced nested loop iterations and continue skip behavior.",
      "weakness": "`continue` skips the remainder of the current inner loop iteration only."
    },
    {
      "q": "In a game engine, the main game loop must run at 60 FPS while `isRunning` is true, but must immediately pause if `isPaused` is true, without terminating the outer game session. How is this implemented cleanly?",
      "options": [
        "`while (isRunning) { if (isPaused) continue; updateWorld(); render(); }`",
        "`while (isRunning) { if (isPaused) break; updateWorld(); render(); }`",
        "`while (isRunning) { updateWorld(); render(); isRunning = false; }`",
        "`do { updateWorld(); } while (isPaused);`"
      ],
      "answer": 0,
      "explain": "Using `if (isPaused) continue;` skips `updateWorld()` and `render()` during paused states while keeping the game loop alive awaiting user unpause.",
      "topic": "Game Loop Pause Architecture",
      "type": "scenario",
      "level": "medium",
      "strength": "Applied `continue` in game loops to skip rendering during pause without loop exit.",
      "weakness": "`continue` skips world updates while paused without terminating the main game loop."
    },
    {
      "q": "What phenomenon occurs in a `switch` statement if a matching `case` block omits the `break` statement?",
      "options": [
        "Compilation error: missing break",
        "Runtime `NoSuchCaseException`",
        "Fall-through: execution continues sequentially into subsequent case blocks until a break or the end of the switch is encountered",
        "The switch statement restarts from the first case"
      ],
      "answer": 2,
      "explain": "Omitting `break` triggers fall-through behavior, where execution flows unconditionally into the subsequent cases regardless of their case label values.",
      "topic": "Switch Fall-Through",
      "type": "theory",
      "level": "easy",
      "strength": "Understands switch fall-through mechanics.",
      "weakness": "Omitting `break` causes execution to fall through into subsequent case statements."
    },
    {
      "q": "Why does the following snippet produce a compilation error?\n```java\nwhile (true) {\n    System.out.println(\"Running\");\n}\nSystem.out.println(\"Done\");\n```",
      "options": [
        "while(true) is an illegal condition in Java",
        "Unreachable statement: line 4 can never be reached due to the infinite while loop",
        "System.out.println cannot be called twice",
        "Infinite loops cause stack overflow at compile-time"
      ],
      "answer": 1,
      "explain": "Because `while (true)` has no break statement, the compiler proves that the statement following the loop is unreachable, throwing a compile-time error: 'unreachable statement'.",
      "topic": "Unreachable Statement Error",
      "type": "error",
      "level": "easy",
      "strength": "Recognized compiler rejection of code following infinite loop.",
      "weakness": "Code placed immediately after an unconditional infinite loop without break is unreachable and rejected by the compiler."
    },
    {
      "q": "What is printed by this loop?\n```java\nint x = 1;\nwhile (x < 10) {\n    x = x * 2 + 1;\n}\nSystem.out.println(x);\n```",
      "options": [
        "15",
        "9",
        "11",
        "31"
      ],
      "answer": 0,
      "explain": "Start x=1. Iter 1: x = 1*2 + 1 = 3 (3 < 10 true). Iter 2: x = 3*2 + 1 = 7 (7 < 10 true). Iter 3: x = 7*2 + 1 = 15 (15 < 10 false). Loop terminates. Prints 15.",
      "topic": "Recurrence Relation Loop",
      "type": "output",
      "level": "medium",
      "strength": "Traced arithmetic recurrence progression inside while loop.",
      "weakness": "Values of x: 1 -> 3 -> 7 -> 15. When x=15, condition 15 < 10 is false, printing 15."
    },
    {
      "q": "A cellular network billing engine checks whether a phone number prefix matches domestic telecom operators. If a prefix matches Celcom, Maxis, or Digi, the domestic rate applies; otherwise international rates apply. How is this written concisely in a `switch`?",
      "options": [
        "Write separate duplicate methods for each operator",
        "Group matching cases sequentially: `case \"012\": case \"019\": case \"016\": return DOMESTIC_RATE; default: return INTL_RATE;`",
        "Use `case \"012\" || \"019\" || \"016\":`",
        "Switch statements cannot compare phone prefix strings"
      ],
      "answer": 1,
      "explain": "Sequential case labels without break fall through to a shared handler: `case \"012\": case \"019\": case \"016\": return DOMESTIC_RATE;`.",
      "topic": "Shared Case Fall-Through Pattern",
      "type": "scenario",
      "level": "easy",
      "strength": "Employed shared case labels for multi-match business logic.",
      "weakness": "Stack case labels together without `break` to share a common code block."
    },
    {
      "q": "Can the update expression of a `for` loop decrement the counter instead of incrementing it?",
      "options": [
        "No, `for` loops can only increment",
        "Yes, update expressions can decrement (e.g. `i--`), add steps (e.g. `i += 5`), or execute any valid expression statement",
        "Only if `i` is declared as a `double`",
        "Only when accompanied by a `break` statement"
      ],
      "answer": 1,
      "explain": "The update expression in a `for` loop can be any valid expression statement, such as decrementing (`i--`), step addition (`i += 2`), multiplication (`i *= 2`), or even method calls.",
      "topic": "For Loop Update Flexibility",
      "type": "theory",
      "level": "easy",
      "strength": "Understands flexible update expressions in for loops.",
      "weakness": "For loop update statements can increment, decrement, scale, or perform any valid expression."
    },
    {
      "q": "What is the issue with this switch statement?\n```java\ndouble grade = 3.5;\nswitch (grade) {\n    case 3.5: System.out.println(\"Good\"); break;\n}\n```",
      "options": [
        "3.5 is not a valid case label",
        "Incompatible types: double cannot be dereferenced or used as a switch selector expression",
        "println cannot print strings inside switch",
        "grade must be declared final"
      ],
      "answer": 1,
      "explain": "`switch` expressions do not support floating-point types (`float` or `double`). Compiling this produces: 'incompatible types: possible lossy conversion from double to int'.",
      "topic": "Double Switch Error",
      "type": "error",
      "level": "easy",
      "strength": "Spotted illegal floating-point selector in switch.",
      "weakness": "Floating-point types (`double`, `float`) are not permitted in Java switch statements."
    },
    {
      "q": "What is the purpose of a labeled `break` statement in Java (`break label;`)?",
      "options": [
        "To jump backwards to restart an earlier method",
        "To terminate an outer enclosing loop or block identified by the label",
        "To jump to a specific line number like a C goto statement",
        "To exit the JVM runtime completely"
      ],
      "answer": 1,
      "explain": "Java does not support arbitrary `goto`, but supports labeled `break` to cleanly break out of multiple levels of nested loops.",
      "topic": "Labeled Break",
      "type": "theory",
      "level": "medium",
      "strength": "Understands multi-level loop termination via labeled break.",
      "weakness": "A labeled `break` allows exiting an outer loop from deep within nested loops."
    },
    {
      "q": "What is the compilation error in the following snippet?\n```java\nfinal int a = 5;\nint b = 10;\nswitch (b) {\n    case a: System.out.println(\"A\"); break;\n    case b: System.out.println(\"B\"); break;\n}\n```",
      "options": [
        "case a is invalid because final constants cannot be cases",
        "case b is invalid: constant expression required (b is a non-final variable)",
        "switch cannot take variable b",
        "No error: code compiles cleanly"
      ],
      "answer": 1,
      "explain": "`case a:` is valid because `a` is a `final` constant. However, `b` is a non-final variable, so `case b:` violates the rule that case labels must be compile-time constants.",
      "topic": "Non-Constant Case Label",
      "type": "error",
      "level": "medium",
      "strength": "Distinguished constant vs non-constant expressions in switch case labels.",
      "weakness": "Case labels must be compile-time constants; non-final variables like `b` are illegal as case labels."
    },
    {
      "q": "What is the output of the following code?\n```java\nint count = 0;\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        if (i == j) break;\n        count++;\n    }\n}\nSystem.out.println(count);\n```",
      "options": [
        "0",
        "3",
        "6",
        "9"
      ],
      "answer": 1,
      "explain": "`i=0`: `j=0` -> `0==0` break immediately (0 iterations). `i=1`: `j=0` -> count=1; `j=1` -> `1==1` break (1 iteration). `i=2`: `j=0` -> count=2; `j=1` -> count=3; `j=2` -> break (2 iterations). Total count: `3`.",
      "topic": "Nested Loop Break Counting",
      "type": "output",
      "level": "medium",
      "strength": "Traced inner loop break conditions across multiple outer iterations.",
      "weakness": "Trace nested loops systematically by tracking variable states for each outer iteration."
    },
    {
      "q": "You are searching a 2D matrix representing an airport terminal grid for a lost passenger's luggage ID. Once the luggage is found, you want to terminate BOTH the row loop and the column loop immediately to save CPU cycles. What is the cleanest approach in Java?",
      "options": [
        "Set both row and column counters to `Integer.MAX_VALUE`",
        "Use a labeled break (`search: for (...) { for (...) { if (found) break search; } }`)",
        "Throw and catch a runtime exception",
        "Call `System.exit(0)`"
      ],
      "answer": 1,
      "explain": "A labeled `break search;` immediately exits both nested loops cleanly without dirty variable flags or exception overhead.",
      "topic": "2D Grid Search Early Exit",
      "type": "scenario",
      "level": "medium",
      "strength": "Employed labeled break for optimal multi-level search termination.",
      "weakness": "Use labeled `break label;` to exit nested loops immediately upon finding a target element."
    },
    {
      "q": "In a standard three-part `for` loop header `for (init; condition; update)`, in what exact order are the parts executed for the very first iteration?",
      "options": [
        "condition -> init -> update -> body",
        "init -> condition -> body -> update",
        "init -> body -> condition -> update",
        "condition -> body -> update -> init"
      ],
      "answer": 1,
      "explain": "For the first iteration: `init` runs once, then `condition` is evaluated. If true, the `body` executes, followed by the `update` expression.",
      "topic": "For Loop Lifecycle",
      "type": "theory",
      "level": "easy",
      "strength": "Knows the lifecycle execution order of a for loop.",
      "weakness": "For loop order: init runs once, then condition, then body, then update."
    },
    {
      "q": "What is the compilation error in the following snippet?\n```java\nboolean done = false;\ndo {\n    System.out.println(\"Working\");\n} while (!done)\n```",
      "options": [
        "while cannot be negated with !",
        "Missing semicolon ';' after while(!done) in do-while loop syntax",
        "do cannot be followed by while",
        "done must be an integer"
      ],
      "answer": 1,
      "explain": "A `do-while` loop requires a terminating semicolon after the closing parenthesis: `while (!done);`. Omitting it triggers a syntax error: ';' expected.",
      "topic": "Missing Do-While Semicolon",
      "type": "error",
      "level": "easy",
      "strength": "Identified missing terminating semicolon in do-while loop.",
      "weakness": "Every `do-while` loop must terminate with a semicolon after the condition: `while (...);`."
    },
    {
      "q": "What is the output of the following switch snippet?\n```java\nint num = 2;\nswitch (num) {\n    case 1: System.out.print(\"1 \");\n    case 2: System.out.print(\"2 \");\n    case 3: System.out.print(\"3 \");\n    default: System.out.print(\"D \");\n}\n```",
      "options": [
        "2 ",
        "2 3 D ",
        "1 2 3 D ",
        "2 3 "
      ],
      "answer": 1,
      "explain": "Because there are no `break` statements, execution matches `case 2` and falls through sequentially executing `case 3` and `default`: outputting `\"2 3 D \"`.",
      "topic": "Switch Fall-Through Execution",
      "type": "output",
      "level": "easy",
      "strength": "Correctly tracked switch fall-through without break statements.",
      "weakness": "Without `break`, execution continues down all remaining cases including default."
    },
    {
      "q": "A scientific simulation models radioactive decay where a sample's atoms halve every 5 days. Starting with 10,000 atoms, which loop calculates the number of 5-day periods until fewer than 100 atoms remain?",
      "options": [
        "`int p = 0; for (int a = 10000; a >= 100; a /= 2) p++;`",
        "`int p = 0; for (int a = 10000; a < 100; a /= 2) p++;`",
        "`int p = 0; while (a > 100) { p = 10000 / 2; }`",
        "`int p = 10000 / 100 * 5;`"
      ],
      "answer": 0,
      "explain": "Starting with 10,000 atoms, each iteration halves `a` (`a /= 2`) and increments period counter `p++` as long as `a >= 100`.",
      "topic": "Simulation Loop Modeling",
      "type": "scenario",
      "level": "easy",
      "strength": "Correctly configured simulation decay loop bounds and updates.",
      "weakness": "Loop condition `a >= 100` with update `a /= 2` accurately simulates exponential decay."
    },
    {
      "q": "In Java, can a boolean expression be used directly as an `if` condition without `== true` (e.g. `if (isReady)` vs `if (isReady == true)`)?",
      "options": [
        "No, `== true` is mandatory in Java",
        "Yes, writing `if (isReady)` is idiomatic and clean because `isReady` is already a boolean",
        "`if (isReady)` only works if `isReady` is non-zero integer",
        "It throws a `NullPointerException`"
      ],
      "answer": 1,
      "explain": "`if` statements require a boolean expression. If a variable is already a boolean, testing `if (isReady)` is direct, clean, and preferred over redundant `if (isReady == true)`.",
      "topic": "Boolean Condition Idiom",
      "type": "theory",
      "level": "easy",
      "strength": "Knows clean idiomatic boolean testing in if conditions.",
      "weakness": "Direct boolean evaluation `if (flag)` is cleaner than redundant `if (flag == true)`."
    },
    {
      "q": "Why does the following snippet produce an unreachable code error?\n```java\nfor (int i = 0; i < 5; i++) {\n    break;\n    System.out.println(i);\n}\n```",
      "options": [
        "i is never incremented",
        "Statement `System.out.println(i);` is unreachable because `break` unconditionally terminates the iteration prior to reaching it",
        "break cannot appear as the first statement in a loop",
        "i < 5 is always true"
      ],
      "answer": 1,
      "explain": "Because `break` exits the loop unconditionally, any statements placed after `break` within the same block can never be executed, causing a compile-time 'unreachable statement' error.",
      "topic": "Unreachable Code After Break",
      "type": "error",
      "level": "easy",
      "strength": "Spotted unreachable statements immediately following an unconditional break.",
      "weakness": "Statements placed directly after an unconditional `break` or `continue` are unreachable and cause a compile error."
    },
    {
      "q": "How does a labeled `continue` statement (`continue outer;`) differ from an unlabeled `continue`?",
      "options": [
        "Unlabeled continue skips to the next iteration of the innermost loop; labeled continue skips to the next iteration of the outer labeled loop",
        "Labeled continue exits the program; unlabeled continue does not",
        "Labeled continue resets the loop variable to zero",
        "They are functionally identical in all scenarios"
      ],
      "answer": 0,
      "explain": "Unlabeled `continue` skips the remainder of the innermost loop iteration. Labeled `continue` transfers control to the update/condition check of the specified outer labeled loop.",
      "topic": "Labeled Continue",
      "type": "theory",
      "level": "medium",
      "strength": "Distinguishes labeled continue from standard innermost continue.",
      "weakness": "Labeled `continue label;` skips to the next iteration of the outer enclosing loop designated by the label."
    },
    {
      "q": "What is the bug in this loop intended to print numbers 1 to 5?\n```java\nfor (int i = 1; i <= 5; i++); {\n    System.out.println(i);\n}\n```",
      "options": [
        "i <= 5 causes an index out of bounds error",
        "The semicolon after the for loop header creates an empty loop; furthermore, 'i' is out of scope in the block `{ System.out.println(i); }`",
        "for loops cannot use <= operator",
        "System.out.println requires string concatenation"
      ],
      "answer": 1,
      "explain": "The trailing semicolon `;` ends the for loop immediately. When the loop finishes, `i` goes out of scope, causing a compile error when `{ System.out.println(i); }` tries to reference `i`.",
      "topic": "Semicolon Loop Header & Scope Bug",
      "type": "error",
      "level": "medium",
      "strength": "Spotted trailing semicolon on for loop and subsequent variable scope failure.",
      "weakness": "Do not put a semicolon after the for loop header; it creates an empty body and isolates the loop variable."
    },
    {
      "q": "What is the output of this labeled break snippet?\n```java\nouter:\nfor (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= 3; j++) {\n        if (i * j > 2) break outer;\n        System.out.print(i + \"*\" + j + \" \");\n    }\n}\n```",
      "options": [
        "1*1 1*2 ",
        "1*1 1*2 2*1 ",
        "1*1 ",
        "1*1 1*2 1*3 "
      ],
      "answer": 0,
      "explain": "`i=1, j=1`: `1*1=1 <= 2` -> prints `1*1 `. `i=1, j=2`: `1*2=2 <= 2` -> prints `1*2 `. `i=1, j=3`: `1*3=3 > 2` -> `break outer;` terminates both loops immediately. Output: `1*1 1*2 `.",
      "topic": "Labeled Break Output",
      "type": "output",
      "level": "medium",
      "strength": "Correctly recognized outer loop termination from inner loop labeled break.",
      "weakness": "`break outer;` completely terminates the outer loop immediately."
    },
    {
      "q": "A network packet downloader implements an exponential backoff retry policy: if a download fails, it waits 1s, then 2s, then 4s, up to 5 max retries. Which loop header models this cleanest?",
      "options": [
        "`for (int attempt = 1, delay = 1; attempt <= 5; attempt++, delay *= 2)`",
        "`for (int attempt = 1; attempt <= 5; delay += 2)`",
        "`while (delay < 5) { attempt *= 2; }`",
        "`for (int delay = 1; delay == 5; delay++)`"
      ],
      "answer": 0,
      "explain": "Declaring both `attempt` and `delay` in the `for` loop header maintains loop state cleanly, doubling `delay *= 2` on each failed retry attempt up to 5.",
      "topic": "Exponential Backoff Loop",
      "type": "scenario",
      "level": "medium",
      "strength": "Engineered dual-variable for loop header for exponential retry backoff.",
      "weakness": "Use a dual-variable loop header `for (int attempt=1, delay=1; ...; attempt++, delay*=2)` for backoff algorithms."
    },
    {
      "q": "What is the result of omitting all three expressions in a `for` loop: `for ( ; ; )`?",
      "options": [
        "Compile-time error: missing condition",
        "An intentional infinite loop whose condition is implicitly treated as `true`",
        "A loop that executes zero times",
        "A loop that iterates exactly `Integer.MAX_VALUE` times"
      ],
      "answer": 1,
      "explain": "In Java, omitting the condition in `for (;;)` implicitly defaults to `true`, creating an intentional infinite loop.",
      "topic": "Infinite For Loop",
      "type": "theory",
      "level": "easy",
      "strength": "Recognizes standard idiom for infinite for loop `for(;;)`.",
      "weakness": "`for (;;)` creates an infinite loop because an omitted condition defaults to `true`."
    },
    {
      "q": "What is the bug in the following loop?\n```java\nint count = 1;\nwhile (count <= 10) {\n    System.out.println(count);\n}\n```",
      "options": [
        "count cannot be initialized to 1",
        "Infinite loop: `count` is never incremented inside the loop body",
        "while cannot use <=",
        "println crashes after 10 lines"
      ],
      "answer": 1,
      "explain": "Because `count` is never updated (`count++`) inside the loop body, `count <= 10` remains perpetually true, executing an infinite loop.",
      "topic": "Missing Loop Update",
      "type": "error",
      "level": "easy",
      "strength": "Caught missing loop update variable causing infinite loop.",
      "weakness": "Ensure the loop control variable is modified within the loop body to guarantee termination."
    },
    {
      "q": "What is the output of this do-while loop?\n```java\nint i = 5;\ndo {\n    System.out.print(i + \" \");\n    i++;\n} while (i < 5);\n```",
      "options": [
        "Nothing",
        "5 ",
        "5 6 ",
        "Infinite loop"
      ],
      "answer": 1,
      "explain": "The `do` block executes unconditionally first: prints 5 and increments `i` to 6. Then condition `6 < 5` is evaluated: false! Loop terminates. Output: `5 `.",
      "topic": "Do-While Single Execution",
      "type": "output",
      "level": "easy",
      "strength": "Recognized that do-while loop runs at least once even when initial condition is false.",
      "weakness": "A `do-while` loop always executes its body at least once before checking the condition."
    },
    {
      "q": "A data validation routine parses a CSV file containing 10,000 rows. If a row is corrupted, it should log a warning and immediately proceed to the next row without crashing or stopping the import. Which keyword achieves this?",
      "options": [
        "`break`",
        "`continue`",
        "`return`",
        "`System.exit(0)`"
      ],
      "answer": 1,
      "explain": "`continue` immediately skips the remainder of the current row processing iteration and proceeds to read the next CSV row.",
      "topic": "Batch Processing Error Recovery",
      "type": "scenario",
      "level": "easy",
      "strength": "Used continue for resilient error recovery in batch ETL pipelines.",
      "weakness": "`continue` skips problematic records without halting batch iteration."
    },
    {
      "q": "Identify the bug in this code intended to sum numbers 1 to 5:\n```java\nint sum = 0;\nfor (int i = 1; i <= 5; i++) \n    sum += i;\n    System.out.println(\"Sum: \" + sum);\n```",
      "options": [
        "sum += i is an invalid expression",
        "The println is indented but outside the loop, so it only prints once at the end (Sum: 15) instead of each step",
        "Loop runs infinitely",
        "i is not accessible by sum"
      ],
      "answer": 1,
      "explain": "Because braces are omitted, only `sum += i;` is inside the loop. The println executes once after the loop completes. While valid syntax, it is a common bug when the developer intended intermediate printing.",
      "topic": "Omitted Braces Semantic Trap",
      "type": "error",
      "level": "easy",
      "strength": "Spotted unintended loop scope due to omitted braces.",
      "weakness": "Always use braces `{}` around loop bodies to prevent misleading indentation bugs."
    },
    {
      "q": "What does the following snippet print?\n```java\nint sum = 0;\nfor (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= i; j++) {\n        sum += j;\n    }\n}\nSystem.out.println(sum);\n```",
      "options": [
        "10",
        "14",
        "6",
        "9"
      ],
      "answer": 0,
      "explain": "`i=1`: j=1 (sum += 1 -> 1). `i=2`: j=1, 2 (sum += 1 + 2 -> 4). `i=3`: j=1, 2, 3 (sum += 1 + 2 + 3 -> 10). Output: 10.",
      "topic": "Nested Triangle Sum",
      "type": "output",
      "level": "easy",
      "strength": "Computed inner loop sum accumulation across varying bounds.",
      "weakness": "`(1) + (1 + 2) + (1 + 2 + 3) = 1 + 3 + 6 = 10`."
    },
    {
      "q": "What are the requirements for case label values in a traditional Java `switch` statement?",
      "options": [
        "They can be any variable accessible in scope",
        "They must be compile-time constants (literals or final variables initialized with constant expressions) and within range of the switch selector type",
        "They must be unique Strings only",
        "They can be boolean expressions like `x > 10`"
      ],
      "answer": 1,
      "explain": "Every case label must be a compile-time constant expression whose value is assignable to the switch selector type. Variable expressions or duplicate case values are illegal.",
      "topic": "Switch Case Constant Rules",
      "type": "theory",
      "level": "medium",
      "strength": "Knows the requirement for constant expressions in switch case labels.",
      "weakness": "Case labels must be compile-time constants (e.g. literals or `final` constants); variables are disallowed."
    },
    {
      "q": "Why does this loop fail to compile?\n```java\nfor (int i = 0, double d = 0.5; i < 5; i++) {\n    System.out.println(i);\n}\n```",
      "options": [
        "i and d must be incremented together",
        "Multiple variables declared in a for-loop init section must be of the same type; mixing 'int' and 'double' declarations is illegal",
        "d must be an integer",
        "double cannot be initialized to 0.5"
      ],
      "answer": 1,
      "explain": "In a `for` loop header, all declared variables in the initialization part must share the exact same type specifier. Mixing `int` and `double` in the same init clause is invalid syntax.",
      "topic": "Mixed Types in For Header",
      "type": "error",
      "level": "medium",
      "strength": "Spotted illegal mixed type declarations in for loop header.",
      "weakness": "All variables declared in a for loop initialization clause must share the same data type."
    },
    {
      "q": "What is the output of this code?\n```java\nint x = 0;\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        if (j > i) continue;\n        x++;\n    }\n}\nSystem.out.println(x);\n```",
      "options": [
        "3",
        "6",
        "9",
        "4"
      ],
      "answer": 1,
      "explain": "`i=0`: j=0 (1). `i=1`: j=0, 1 (2). `i=2`: j=0, 1, 2 (3). Total iterations where `j <= i` is `1 + 2 + 3 = 6`. So `x = 6`.",
      "topic": "Triangular Iteration Count",
      "type": "output",
      "level": "medium",
      "strength": "Calculated nested loop triangular iterations correctly.",
      "weakness": "Condition `j <= i` produces triangular numbers: 1 + 2 + 3 = 6."
    },
    {
      "q": "You are developing a prime number verification function `boolean isPrime(int n)`. Why should the trial division loop terminate at `Math.sqrt(n)` rather than `n - 1`?",
      "options": [
        "Java throws an exception if a loop exceeds the square root",
        "If `n` has a factor greater than `sqrt(n)`, it must also have a corresponding factor less than or equal to `sqrt(n)`; checking beyond `sqrt(n)` is redundant O(N) work",
        "`Math.sqrt(n)` rounds to the nearest prime",
        "`n - 1` causes an arithmetic overflow"
      ],
      "answer": 1,
      "explain": "Factors occur in complementary pairs `(a * b = n)`. If both factors were strictly greater than `sqrt(n)`, their product would exceed `n`. Thus trial division up to `sqrt(n)` guarantees primality in O(sqrt(N)) time.",
      "topic": "Primality Test Optimization",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands algorithmic optimization of trial division to O(sqrt(N)).",
      "weakness": "Trial division only needs to test up to `Math.sqrt(n)` because factors pair across the square root."
    },
    {
      "q": "Can a `break` statement be used inside an `if` block that is NOT inside a loop or switch?",
      "options": [
        "Yes, it breaks out of the `if` block automatically",
        "No, an unlabeled `break` statement must be inside a loop or switch, otherwise a compile-time error occurs",
        "Yes, if the condition is false",
        "Yes, but only in Java 8 and above"
      ],
      "answer": 1,
      "explain": "An unlabeled `break` statement can only appear inside a `while`, `do`, `for`, or `switch` statement. Using it directly inside a standalone `if` causes a compilation error: 'break outside switch or loop'.",
      "topic": "Break Statement Scope",
      "type": "theory",
      "level": "easy",
      "strength": "Understands valid syntactic scopes for unlabeled break.",
      "weakness": "`break` must reside inside a loop or switch; it cannot be used in a standalone `if` statement."
    },
    {
      "q": "Why does the following enhanced for-each loop fail to compile?\n```java\nint number = 100;\nfor (int n : number) {\n    System.out.println(n);\n}\n```",
      "options": [
        "number is not an array or an instance of java.lang.Iterable",
        "n must be declared as Object",
        "enhanced for loop requires colon and semicolon",
        "println cannot print n"
      ],
      "answer": 0,
      "explain": "The enhanced for-each loop requires the target expression on the right of `:` to be an array or an object implementing `java.lang.Iterable`. A primitive `int` cannot be iterated over.",
      "topic": "ForEach Target Requirement",
      "type": "error",
      "level": "easy",
      "strength": "Understands iterable/array requirement for enhanced for-each loop.",
      "weakness": "Enhanced for loops only accept arrays or collections implementing `Iterable`."
    },
    {
      "q": "What is printed by the following code?\n```java\nint sum = 0;\nfor (int i = 1; i <= 10; i++) {\n    if (i % 2 == 0) continue;\n    sum += i;\n}\nSystem.out.println(sum);\n```",
      "options": [
        "25",
        "30",
        "55",
        "20"
      ],
      "answer": 0,
      "explain": "Even numbers are skipped by `continue`. The loop sums odd numbers between 1 and 10: `1 + 3 + 5 + 7 + 9 = 25`.",
      "topic": "Odd Sum Accumulation",
      "type": "output",
      "level": "easy",
      "strength": "Correctly computed sum of filtered numbers using continue.",
      "weakness": "`continue` skips even numbers; summing odd numbers 1, 3, 5, 7, 9 yields 25."
    },
    {
      "q": "A banking app generates a 6-digit One-Time Password (OTP). It must ensure that the generated OTP does NOT contain the digit '0' anywhere. Which loop structure generates random digits 1 to 9 for all 6 positions?",
      "options": [
        "`for (int i = 0; i < 6; i++) { int digit = rand.nextInt(9) + 1; otp += digit; }`",
        "`for (int i = 0; i < 6; i++) { int digit = rand.nextInt(10); otp += digit; }`",
        "`while (otp.length() < 6) { int digit = 0; otp += digit; }`",
        "`for (int i = 1; i <= 6; i *= 0) { ... }`"
      ],
      "answer": 0,
      "explain": "`rand.nextInt(9)` produces 0 to 8. Adding 1 shifts the range to 1 to 9, guaranteeing no digit is zero across all 6 iterations.",
      "topic": "OTP Generation Algorithm",
      "type": "scenario",
      "level": "easy",
      "strength": "Designed clean loop with bounded random number generation.",
      "weakness": "`rand.nextInt(9) + 1` generates digits 1 to 9, preventing zero digits across 6 iterations."
    },
    {
      "q": "Why does the following snippet produce a compile-time error?\n```java\nint n = 10;\nif (n > 5) {\n    int a = 1;\n} else if (n > 2) {\n    int a = 2;\n}\nSystem.out.println(a);\n```",
      "options": [
        "Cannot declare variable 'a' in both if and else blocks",
        "Cannot find symbol: variable 'a' is local to each if/else block and not accessible outside them",
        "n > 5 condition conflicts with n > 2",
        "else if cannot follow if"
      ],
      "answer": 1,
      "explain": "`a` is declared separately inside the local scopes of each branch. When the if-else terminates, `a` ceases to exist, making `System.out.println(a)` fail to compile.",
      "topic": "Branch Scope Isolation",
      "type": "error",
      "level": "easy",
      "strength": "Recognized block-level scope isolation in if-else branches.",
      "weakness": "Variables declared inside if-else blocks cannot be accessed outside the blocks; declare them before the if-statement."
    },
    {
      "q": "What is the output of this code?\n```java\nint a = 2;\nint res = (a > 1) ? (a > 3 ? 10 : 20) : 30;\nSystem.out.println(res);\n```",
      "options": [
        "10",
        "20",
        "30",
        "undefined"
      ],
      "answer": 1,
      "explain": "`a > 1` is true (`2 > 1`), so outer ternary evaluates `(a > 3 ? 10 : 20)`. In inner ternary, `2 > 3` is false, selecting 20. Output: 20.",
      "topic": "Nested Ternary Output",
      "type": "output",
      "level": "easy",
      "strength": "Accurately parsed nested ternary operator branches.",
      "weakness": "Outer branch true -> inner condition `2 > 3` false -> yields 20."
    },
    {
      "q": "In an enhanced for loop (for-each: `for (int x : array)`), what limitation applies regarding mutating array elements?",
      "options": [
        "It can only read array elements; assigning to `x` modifies the local copy and does NOT change the array element",
        "Assigning to `x` throws an `UnsupportedOperationException`",
        "The array is automatically cloned into read-only memory",
        "Enhanced for loops cannot be used on primitive arrays"
      ],
      "answer": 0,
      "explain": "In an enhanced for-each loop over primitive arrays, the iteration variable `x` receives a copy of each element's value. Reassigning `x = 10;` modifies only the local variable, leaving the array unchanged.",
      "topic": "Enhanced For Loop Semantics",
      "type": "theory",
      "level": "medium",
      "strength": "Understands that for-each iteration variable does not modify primitive array elements.",
      "weakness": "Modifying the loop variable in an enhanced for-each loop does not update the underlying array."
    },
    {
      "q": "What error occurs in this code snippet?\n```java\nint x = 10;\nif (x > 5) \n    int y = 20;\nelse\n    int y = 30;\n```",
      "options": [
        "Variable y cannot be initialized twice",
        "Declarations are not allowed as single unbraced statements in if/else branches",
        "x > 5 must be in curly braces",
        "else cannot follow if without braces"
      ],
      "answer": 1,
      "explain": "Neither the `if` nor the `else` branch allows an unbraced local variable declaration. Both lines produce compilation errors: 'variable declaration not allowed here'.",
      "topic": "Unbraced Branch Declaration",
      "type": "error",
      "level": "medium",
      "strength": "Recognized forbidden standalone variable declarations in both if and else branches.",
      "weakness": "Use braces `{}` if you need to declare a variable inside an `if` or `else` branch."
    },
    {
      "q": "What does the following snippet print?\n```java\nint x = 5;\nboolean b = true;\nif (x == 5 && (b = false)) {\n    x = 10;\n}\nSystem.out.println(x + \" \" + b);\n```",
      "options": [
        "5 true",
        "5 false",
        "10 false",
        "10 true"
      ],
      "answer": 1,
      "explain": "`x == 5` is true, so evaluation proceeds to the second operand `(b = false)`. `b` is assigned false, making the condition false. The if body does NOT execute. So `x = 5` and `b = false`.",
      "topic": "Assignment Side Effect in Condition",
      "type": "output",
      "level": "medium",
      "strength": "Tracked variable side effects inside evaluated boolean operands.",
      "weakness": "`(b = false)` executes, setting `b` to false and failing the if condition; `x` remains 5."
    },
    {
      "q": "In a lottery simulation, you need to select 6 unique random numbers from 1 to 49. When a newly generated number is already picked, what control flow statement should be used to re-roll without advancing the count of picked numbers?",
      "options": [
        "Use `continue` inside a while loop that only increments the counter when the number is confirmed unique",
        "Use `break` to terminate the lottery",
        "Use `return` to exit the application",
        "Reset all previously selected numbers to 0"
      ],
      "answer": 0,
      "explain": "A `while (count < 6)` loop generates a candidate number. If already chosen, it skips incrementing `count` (or calls `continue`), ensuring exactly 6 unique numbers are collected.",
      "topic": "Lottery Unique Selection Pattern",
      "type": "scenario",
      "level": "medium",
      "strength": "Applied conditional loop counter advancement to ensure unique collection.",
      "weakness": "Only advance the loop counter when a candidate satisfies uniqueness constraints."
    },
    {
      "q": "Can multiple variables be initialized in the initialization section of a standard `for` loop?",
      "options": [
        "No, only one variable can ever be declared",
        "Yes, but only if they are of the same data type, separated by commas (e.g. `for (int i = 0, j = 10; ...)` )",
        "Yes, variables of different types can be declared separated by semicolons",
        "Yes, using the `and` keyword"
      ],
      "answer": 1,
      "explain": "Java allows declaring multiple variables in the loop initialization header, provided they share the same data type declaration separated by commas: `for (int i = 0, j = 10; i < j; i++, j--)`.",
      "topic": "For Loop Multiple Variables",
      "type": "theory",
      "level": "easy",
      "strength": "Knows syntax rules for multiple variables in for loop headers.",
      "weakness": "Multiple loop variables can be declared in the header if they share the same type (separated by commas)."
    },
    {
      "q": "Identify the bug in this code:\n```java\nint x = 5;\nif (x > 0);\n{\n    System.out.println(\"Positive\");\n}\n```",
      "options": [
        "System.out.println cannot be inside braces",
        "The semicolon after `if (x > 0);` terminates the if statement, making the block `{ println... }` execute unconditionally",
        "x > 0 is not a valid condition",
        "Variables must be declared inside the if block"
      ],
      "answer": 1,
      "explain": "The semicolon immediately after `if (x > 0);` creates an empty statement. The subsequent block executes unconditionally regardless of whether `x > 0` is true or false.",
      "topic": "Semicolon After If Bug",
      "type": "error",
      "level": "easy",
      "strength": "Caught unintentional semicolon terminating if condition.",
      "weakness": "Never place a semicolon directly after an `if (...)` condition; it disconnects the subsequent block."
    },
    {
      "q": "What does this snippet print?\n```java\nint a = 0;\nfor (int i = 0; i < 5; i += 2) {\n    a += i;\n}\nSystem.out.println(a);\n```",
      "options": [
        "6",
        "10",
        "4",
        "12"
      ],
      "answer": 0,
      "explain": "`i` takes values 0, 2, 4 (at i=6, `6 < 5` is false). Sum `a = 0 + 2 + 4 = 6`.",
      "topic": "Step Loop Sum",
      "type": "output",
      "level": "easy",
      "strength": "Tracked loop counter with step increment of 2.",
      "weakness": "Values of `i` are 0, 2, and 4; their sum is 6."
    },
    {
      "q": "A ride-hailing app in Kuala Lumpur calculates base fare based on pickup time. Peak hours are 07:00-09:00 and 17:00-20:00. Given integer `hour` (0 to 23), which boolean expression determines if peak pricing applies?",
      "options": [
        "`(hour >= 7 && hour <= 9) || (hour >= 17 && hour <= 20)`",
        "`hour >= 7 && hour <= 9 && hour >= 17 && hour <= 20`",
        "`hour >= 7 || hour <= 20`",
        "`(hour >= 7 || hour <= 9) && (hour >= 17 || hour <= 20)`"
      ],
      "answer": 0,
      "explain": "The morning peak is `(hour >= 7 && hour <= 9)`. The evening peak is `(hour >= 17 && hour <= 20)`. Either window qualifies peak pricing, connected by `||`.",
      "topic": "Time Window Logic",
      "type": "scenario",
      "level": "easy",
      "strength": "Correctly modeled disjoint time intervals with logical operators.",
      "weakness": "Use `||` between separate time windows and `&&` within each continuous window."
    },
    {
      "q": "What is the output of this code?\n```java\nint x = 5;\nwhile (x > 0) {\n    x -= 2;\n}\nSystem.out.println(x);\n```",
      "options": [
        "0",
        "-1",
        "1",
        "2"
      ],
      "answer": 1,
      "explain": "Start x=5. Iter 1: x becomes 3 (3 > 0 true). Iter 2: x becomes 1 (1 > 0 true). Iter 3: x becomes -1 (-1 > 0 false). Loop terminates. Final x is -1.",
      "topic": "Step Loop Termination Value",
      "type": "output",
      "level": "easy",
      "strength": "Tracked loop exit value when step decrements pass zero.",
      "weakness": "Decrements: 5 -> 3 -> 1 -> -1; loop stops when condition `-1 > 0` is false, leaving -1."
    },
    {
      "q": "A factory packaging machine places chocolate bars into boxes of 24. At the end of a shift, `totalBars` chocolates were produced. Which formula calculates both full boxes and leftover bars without duplicate calculations?",
      "options": [
        "`int boxes = totalBars / 24; int leftover = totalBars % 24;`",
        "`int boxes = totalBars * 24; int leftover = totalBars / 24;`",
        "`int boxes = totalBars - 24; int leftover = 24;`",
        "`int boxes = (int) Math.sqrt(totalBars); int leftover = 0;`"
      ],
      "answer": 0,
      "explain": "Integer division `/ 24` gives the number of complete boxes, and modulus `% 24` gives the remaining loose chocolates.",
      "topic": "Batch Packaging Division & Remainder",
      "type": "scenario",
      "level": "easy",
      "strength": "Correctly applied division and modulus for packaging batches.",
      "weakness": "Division yields complete batches; modulus yields remainder."
    },
    {
      "q": "Why is it hazardous to use floating-point variables (`float` or `double`) as loop counters (e.g. `for (double d = 0.0; d != 1.0; d += 0.1)`)?",
      "options": [
        "Floating point variables cannot be incremented with `+=`",
        "Accumulated binary rounding errors may cause the counter to skip exact equality `d != 1.0`, resulting in an unexpected or infinite loop",
        "The JVM converts double loop counters to zero automatically",
        "Loop conditions require integer types only"
      ],
      "answer": 1,
      "explain": "Because 0.1 cannot be represented exactly in binary floating point, successive additions accumulate rounding errors, causing `d` to skip `1.0` (e.g. 0.9999999999999999 -> 1.0999999999999999) and looping indefinitely.",
      "topic": "Floating-Point Loop Counter",
      "type": "theory",
      "level": "medium",
      "strength": "Understands the danger of floating-point roundoff in loop conditions.",
      "weakness": "Never use floating-point numbers with exact equality `!=` or `==` as loop termination conditions."
    },
    {
      "q": "What is the compilation issue in this code?\n```java\nint x = 5;\nwhile (x > 0) \n    x--;\n    System.out.println(x);\n```",
      "options": [
        "System.out.println causes a compilation error",
        "No compile error, but indentation misleadingly implies println is inside the loop when only `x--;` is repeated",
        "while loops must have braces `{}` in Java",
        "x-- cannot be used without assignment"
      ],
      "answer": 1,
      "explain": "Without braces `{}`, only the single statement `x--;` belongs to the while loop. `System.out.println(x);` executes only once after the loop finishes. It compiles, but indentation creates a severe logic bug.",
      "topic": "Missing Braces Logic Trap",
      "type": "error",
      "level": "medium",
      "strength": "Understands single-statement body semantics and indentation pitfalls without braces.",
      "weakness": "Without braces, only the first statement belongs to the loop body; subsequent statements execute after the loop."
    },
    {
      "q": "What is the output of this code?\n```java\nint count = 0;\nfor (int i = 1; i <= 100; i *= 2) {\n    count++;\n}\nSystem.out.println(count);\n```",
      "options": [
        "6",
        "7",
        "8",
        "100"
      ],
      "answer": 1,
      "explain": "`i` doubles each step: 1, 2, 4, 8, 16, 32, 64 (7 values). Next is 128 which exceeds 100. Thus `count` is 7.",
      "topic": "Geometric Loop Iterations",
      "type": "output",
      "level": "medium",
      "strength": "Accurately calculated geometric progression loop count.",
      "weakness": "Powers of 2 <= 100 are 1, 2, 4, 8, 16, 32, 64 (7 iterations)."
    },
    {
      "q": "A payment gateway verifies a user's credit card expiration date. The card expires at the end of `expMonth` in `expYear`. Given current year `curYear` and current month `curMonth`, which expression correctly validates that the card has NOT expired?",
      "options": [
        "`expYear > curYear || (expYear == curYear && expMonth >= curMonth)`",
        "`expYear >= curYear && expMonth >= curMonth` (Fails if expYear > curYear but expMonth < curMonth)",
        "`expYear + expMonth > curYear + curMonth`",
        "`expYear == curYear && expMonth == curMonth`"
      ],
      "answer": 0,
      "explain": "If the expiration year is in the future (`expYear > curYear`), the card is valid regardless of month. If it is the current year (`expYear == curYear`), the expiration month must be `>= curMonth`.",
      "topic": "Date Expiration Verification Logic",
      "type": "scenario",
      "level": "medium",
      "strength": "Accurately structured multi-field date validity condition.",
      "weakness": "When comparing dates across years and months: `futureYear || (sameYear && validMonth)`."
    },
    {
      "q": "What is an off-by-one error in loop design?",
      "options": [
        "Incrementing by 2 instead of 1",
        "A logic error where a loop iterates one time too many or one time too few, often caused by confusing `<` with `<=`",
        "A loop whose counter starts at negative one",
        "An error when an array has only one element"
      ],
      "answer": 1,
      "explain": "An off-by-one error (OBOE) occurs when the loop boundary condition is slightly misplaced (e.g., using `<= array.length` instead of `< array.length`), executing one iteration too many or too few.",
      "topic": "Off-By-One Logic Error",
      "type": "theory",
      "level": "easy",
      "strength": "Understands off-by-one boundary errors.",
      "weakness": "Watch boundary conditions: iterating array indices requires `< array.length`, not `<=`."
    },
    {
      "q": "What compilation error occurs in this snippet?\n```java\nbreak;\n```",
      "options": [
        "Missing label",
        "break outside switch or loop",
        "break cannot be in lowercase",
        "Syntax error: expected return"
      ],
      "answer": 1,
      "explain": "An unlabeled `break` statement is only permitted within an enclosing loop or switch statement.",
      "topic": "Break Scope Error",
      "type": "error",
      "level": "easy",
      "strength": "Recognized break statement placed outside loop or switch context.",
      "weakness": "`break` must be inside a loop or switch."
    },
    {
      "q": "What is the output of this code?\n```java\nint i = 0;\nwhile (i < 5) {\n    i++;\n    if (i == 3) break;\n}\nSystem.out.println(i);\n```",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "answer": 1,
      "explain": "`i` starts at 0. Iteration 1: `i` becomes 1. Iteration 2: `i` becomes 2. Iteration 3: `i` becomes 3, matching `i == 3`, and breaks immediately. Final value of `i` is 3.",
      "topic": "While Loop Break Value",
      "type": "output",
      "level": "easy",
      "strength": "Tracked loop variable at point of break termination.",
      "weakness": "The loop breaks immediately when `i` reaches 3, outputting 3."
    },
    {
      "q": "A warehouse robot sorts packages into 3 shipping bays based on weight: Bay 1 (< 5kg), Bay 2 (5kg to 20kg inclusive), Bay 3 (> 20kg). Which `if-else` structure prevents redundant boundary checks?",
      "options": [
        "`if (w < 5) Bay1; else if (w <= 20) Bay2; else Bay3;`",
        "`if (w < 5) Bay1; if (w >= 5 && w <= 20) Bay2; if (w > 20) Bay3;`",
        "`if (w > 20) Bay3; else if (w < 5) Bay1; else if (w >= 5 && w <= 20) Bay2;`",
        "`switch ((int) w) { ... }`"
      ],
      "answer": 0,
      "explain": "Because the first condition filters out `< 5`, the `else if (w <= 20)` implicitly knows `w >= 5`. No redundant `w >= 5 &&` check is necessary, making code cleaner and faster.",
      "topic": "Efficient Decision Ladders",
      "type": "scenario",
      "level": "easy",
      "strength": "Eliminated redundant boundary conditions in if-else ladders.",
      "weakness": "In sorted if-else ladders, previous branches already filter bounds, eliminating redundant checks."
    },
    {
      "q": "What does this code output?\n```java\nchar grade = 'B';\nswitch (grade) {\n    case 'A': System.out.print(\"Excellent \");\n    case 'B':\n    case 'C': System.out.print(\"Well Done \"); break;\n    case 'D': System.out.print(\"Passed \");\n    default: System.out.print(\"Invalid\");\n}\n```",
      "options": [
        "Well Done ",
        "Excellent Well Done ",
        "Well Done Passed ",
        "Invalid"
      ],
      "answer": 0,
      "explain": "Matches `case 'B':`. Since `case 'B'` has no statements, it falls directly into `case 'C':`, which prints `\"Well Done \"` and hits `break`. Output: `\"Well Done \"`.",
      "topic": "Multi-Case Sharing in Switch",
      "type": "output",
      "level": "easy",
      "strength": "Recognized idiomatic case sharing pattern in switch statements.",
      "weakness": "Multiple cases sharing a block (case 'B': case 'C':) executes the common block once."
    },
    {
      "q": "A developer needs to implement a countdown timer for a rocket launch from 10 down to 1, followed by printing 'Liftoff!'. Which loop header is the standard countdown idiom?",
      "options": [
        "`for (int i = 10; i >= 1; i--)`",
        "`for (int i = 10; i > 1; i--)` (Stops at 2)",
        "`for (int i = 1; i <= 10; i--)` (Infinite negative loop)",
        "`while (i < 10) { i--; }`"
      ],
      "answer": 0,
      "explain": "`for (int i = 10; i >= 1; i--)` starts at 10, decrements on each step, and includes 1 before terminating.",
      "topic": "Countdown Loop Idiom",
      "type": "scenario",
      "level": "easy",
      "strength": "Accurately structured countdown loop boundary and decrement.",
      "weakness": "`for (int i = 10; i >= 1; i--)` runs from 10 down to 1 inclusively."
    },
    {
      "q": "What is the effect of placing a semicolon immediately after a `while` condition: `while (x < 10); { x++; }`?",
      "options": [
        "The semicolon is ignored as empty whitespace",
        "The semicolon forms an empty loop body; if `x < 10` is true initially, it creates an infinite loop because `x` is never updated",
        "A compilation error occurs: unexpected token ';'",
        "The block `{ x++; }` executes 10 times"
      ],
      "answer": 1,
      "explain": "The semicolon `;` terminates the loop statement with an empty body. The loop repeatedly checks `x < 10` without executing `{ x++; }`, hanging in an infinite loop.",
      "topic": "Null Statement Loop Trap",
      "type": "theory",
      "level": "medium",
      "strength": "Recognized the classic accidental null statement trap after loop headers.",
      "weakness": "A semicolon after `while(...)` or `for(...)` creates an empty body that often results in an infinite loop."
    },
    {
      "q": "Why does this code fail to compile?\n```java\nint x = 2;\nswitch (x) {\n    case 1 + 1:\n        System.out.println(\"Two\");\n        break;\n    case 2:\n        System.out.println(\"Also Two\");\n        break;\n}\n```",
      "options": [
        "`1 + 1` is an invalid expression for a case label",
        "`1 + 1` evaluates to 2 at compile-time, causing a 'duplicate case label: 2' compilation error with `case 2`",
        "System.out.println cannot be called inside case 1 + 1",
        "case labels cannot contain arithmetic"
      ],
      "answer": 1,
      "explain": "`1 + 1` is a constant expression evaluated at compile time to 2. Because `case 2:` already exists, the compiler rejects the switch due to duplicate case labels.",
      "topic": "Constant Expression Duplicate Case",
      "type": "error",
      "level": "medium",
      "strength": "Recognized compile-time constant evaluation leading to duplicate case labels.",
      "weakness": "Constant expressions like `1 + 1` evaluate to 2 at compile time, colliding with `case 2:`."
    },
    {
      "q": "What is printed by this code?\n```java\nint a = 1, b = 2;\nif (a++ == 1 || ++b == 3) {\n    System.out.println(a + \" \" + b);\n}\n```",
      "options": [
        "2 2",
        "2 3",
        "1 2",
        "1 3"
      ],
      "answer": 0,
      "explain": "`a++ == 1` tests `1 == 1` (true), and increments `a` to 2. Because `||` short-circuits when the left operand is true, `++b == 3` is completely skipped! `b` remains 2. Output: `\"2 2\"`.",
      "topic": "Logical OR Short-Circuit",
      "type": "output",
      "level": "medium",
      "strength": "Spotted short-circuit skip of second operand in logical OR.",
      "weakness": "`||` stops evaluation when the first operand is true; `++b` is never executed, leaving `b = 2`."
    },
    {
      "q": "You are writing a numerical approximation program that approximates PI using an infinite series. The loop must stop when the change between successive approximations is less than `0.000001` (epsilon). What is the appropriate loop choice?",
      "options": [
        "A `for` loop running fixed 100 times",
        "A `while` loop: `while (Math.abs(current - previous) >= EPSILON)`",
        "A `switch` statement on the error term",
        "A `do-while (false)` loop"
      ],
      "answer": 1,
      "explain": "When termination depends on dynamic numerical convergence rather than a fixed iteration count, a `while` loop evaluating convergence threshold `Math.abs(delta) >= EPSILON` is the correct design.",
      "topic": "Convergence Loop Pattern",
      "type": "scenario",
      "level": "medium",
      "strength": "Selected while loop based on dynamic epsilon convergence criteria.",
      "weakness": "Use while loops when termination depends on mathematical convergence rather than fixed iteration counts."
    },
    {
      "q": "What happens when duplicate `case` labels exist inside a single `switch` statement?",
      "options": [
        "The second case is silently ignored",
        "Compilation error: duplicate case label",
        "Runtime exception `DuplicateCaseException`",
        "Both case blocks execute simultaneously"
      ],
      "answer": 1,
      "explain": "The Java compiler requires all case label values within a switch statement to be mutually unique. Duplicate case labels trigger a compile error.",
      "topic": "Duplicate Case Error",
      "type": "theory",
      "level": "easy",
      "strength": "Recognized that duplicate case labels are rejected by the compiler.",
      "weakness": "Every case label in a switch block must be unique."
    },
    {
      "q": "Why does the following snippet fail to compile?\n```java\nint x = 5;\ncontinue;\n```",
      "options": [
        "continue cannot be on line 2",
        "continue outside of loop",
        "x must be incremented first",
        "continue must take a parameter"
      ],
      "answer": 1,
      "explain": "A `continue` statement can only be used inside the body of a loop (`for`, `while`, `do-while`). Using it outside a loop causes a compile error: 'continue outside of loop'.",
      "topic": "Continue Scope Error",
      "type": "error",
      "level": "easy",
      "strength": "Recognized continue statement placed outside loop context.",
      "weakness": "`continue` is strictly valid only inside loop bodies."
    },
    {
      "q": "What does this loop print?\n```java\nfor (int i = 0; i < 5; i++) {\n    if (i == 2) continue;\n    if (i == 4) break;\n    System.out.print(i + \" \");\n}\n```",
      "options": [
        "0 1 3 ",
        "0 1 2 3 ",
        "0 1 3 4 ",
        "0 1 "
      ],
      "answer": 0,
      "explain": "`i=0`: prints 0. `i=1`: prints 1. `i=2`: continue skips printing. `i=3`: prints 3. `i=4`: break exits loop. Output: `0 1 3 `.",
      "topic": "Combined Continue and Break",
      "type": "output",
      "level": "easy",
      "strength": "Properly executed interplay of continue and break statements.",
      "weakness": "At `i=2` continue skips; at `i=4` break terminates; output is `0 1 3 `."
    },
    {
      "q": "A student is building a calculator that evaluates simple mathematical operations: `+`, `-`, `*`, `/`. How should division by zero be prevented in the `/` case of a `switch` statement?",
      "options": [
        "Rely on the switch statement to automatically prevent division by zero",
        "Inside `case '/':`, wrap division in `if (b != 0) { return a / b; } else { printError(); }`",
        "Throw an exception before the switch starts",
        "Add a `case 0:` inside the operator switch"
      ],
      "answer": 1,
      "explain": "In `case '/':`, inspect the divisor `if (b == 0)` to handle the edge case gracefully rather than allowing a runtime `ArithmeticException` crash.",
      "topic": "Defensive Branch Handling",
      "type": "scenario",
      "level": "easy",
      "strength": "Embedded defensive zero checks inside switch branch operations.",
      "weakness": "Always check `b != 0` inside division cases before performing arithmetic."
    },
    {
      "q": "What is the output of the following code?\n```java\nint count = 0;\nfor (int i = 0; i < 2; i++)\n    for (int j = 0; j < 2; j++)\n        for (int k = 0; k < 2; k++)\n            count++;\nSystem.out.println(count);\n```",
      "options": [
        "6",
        "8",
        "12",
        "16"
      ],
      "answer": 1,
      "explain": "The 3 nested loops each run 2 times. Total iterations = `2 * 2 * 2 = 8`. Count = 8.",
      "topic": "Triple Nested Loop Iteration Count",
      "type": "output",
      "level": "easy",
      "strength": "Calculated multiplicative iteration count of nested loops.",
      "weakness": "Multiply loop bounds for independent nested loops: 2 * 2 * 2 = 8."
    },
    {
      "q": "An online exam system enforces a time limit. Every second, `timeLeft` decrements. If `timeLeft == 0`, the exam automatically submits and the loop exits. If the student clicks 'Submit' early (`isSubmitted == true`), it also exits immediately. Which while condition models this?",
      "options": [
        "`while (timeLeft > 0 && !isSubmitted)`",
        "`while (timeLeft > 0 || !isSubmitted)`",
        "`while (timeLeft == 0 && isSubmitted)`",
        "`while (timeLeft > 0 || isSubmitted)`"
      ],
      "answer": 0,
      "explain": "The exam timer loop should continue running while time remains AND the student has not yet submitted (`timeLeft > 0 && !isSubmitted`). If either condition ceases, the loop terminates immediately.",
      "topic": "Dual Condition Termination",
      "type": "scenario",
      "level": "easy",
      "strength": "Formulated dual-termination while loop condition for online exam timer.",
      "weakness": "Connect ongoing prerequisites with `&&` so either termination event stops the loop."
    }
  ],
  "3": [
    {
      "q": "What is the return value of `Arrays.binarySearch(arr, key)` when the key is NOT found in the sorted array?",
      "options": [
        "`-1`",
        "`-(insertion_point + 1)`",
        "`0`",
        "`Integer.MIN_VALUE`"
      ],
      "answer": 1,
      "explain": "In Java, `Arrays.binarySearch()` returns `-(insertion_point + 1)`, which is negative and encodes the exact index where the key would be inserted.",
      "topic": "Binary Search Return Value",
      "type": "theory",
      "level": "hard",
      "strength": "Mastery of binary search negative insertion point formula.",
      "weakness": "Unfound keys yield `-(insertion point + 1)`; check `< 0` to detect absence."
    },
    {
      "q": "Why does this code cause a compilation error?\n```java\nint[] a, b[];\na = new int[3][3];\n```",
      "options": [
        "a is a 1D array (`int[]`), but `new int[3][3]` is a 2D array (`int[][]`)",
        "b is not initialized",
        "new int[3][3] must be assigned to b only",
        "Brackets after b are illegal"
      ],
      "answer": 0,
      "explain": "In `int[] a, b[];`, `a` is a 1D array `int[]`, while `b` has extra brackets making it a 2D array `int[][]`. Assigning a 2D array to `a` causes an incompatible types compile error.",
      "topic": "C-Style Array Declaration Trap",
      "type": "error",
      "level": "hard",
      "strength": "Mastered mixed dimension declaration parsing in Java.",
      "weakness": "`int[] a, b[];` makes `a` 1D and `b` 2D; keep brackets on type for clarity (`int[][] b;`)."
    },
    {
      "q": "What is the output of this code?\n```java\nint[] arr = {10, 20, 30, 40};\nint idx = Arrays.binarySearch(arr, 25);\nSystem.out.println(idx);\n```",
      "options": [
        "-2",
        "-3",
        "-1",
        "2"
      ],
      "answer": 1,
      "explain": "25 is not present. It would be inserted at index 2 (between 20 and 30). Formula: `-(insertion_point + 1) = -(2 + 1) = -3`.",
      "topic": "Binary Search Insertion Point Output",
      "type": "output",
      "level": "hard",
      "strength": "Calculated negative insertion point formula in binary search.",
      "weakness": "25 belongs at index 2; returns `-(2 + 1) = -3`."
    },
    {
      "q": "A music playlist app implements a shuffle feature that randomizes the order of songs in `String[] playlist`. Which industry-standard algorithm shuffles an array in-place in O(N) time?",
      "options": [
        "Bubble Shuffle",
        "Fisher-Yates (Knuth) Shuffle algorithm: iterate backwards from `n-1` to 1, swapping `arr[i]` with a random index `0 <= j <= i`",
        "Sorting by song length",
        "Reversing the array twice"
      ],
      "answer": 1,
      "explain": "The Fisher-Yates shuffle runs in O(N) time and guarantees that every permutation is equally probable.",
      "topic": "Fisher-Yates Shuffle Algorithm",
      "type": "scenario",
      "level": "hard",
      "strength": "Mastered the Fisher-Yates in-place array shuffling algorithm.",
      "weakness": "Fisher-Yates iterates backwards, swapping each element with a random index `[0, i]`."
    },
    {
      "q": "What is the effect of invoking `.clone()` on a 1D primitive array `int[] copy = original.clone();`?",
      "options": [
        "Creates a shallow copy that actually contains a completely independent copy of all primitive values",
        "Fails to compile because arrays do not implement Cloneable",
        "Returns the exact same reference as original",
        "Throws a CloneNotSupportedException"
      ],
      "answer": 0,
      "explain": "For 1D primitive arrays, `.clone()` duplicates the array object and all its primitive elements, creating an independent array.",
      "topic": "Array Cloning",
      "type": "theory",
      "level": "medium",
      "strength": "Understands clone() behavior on 1D primitive arrays.",
      "weakness": "Calling `.clone()` on a 1D primitive array creates an independent copy of values."
    },
    {
      "q": "Why does this reverse array algorithm fail?\n```java\nfor (int i = 0; i < arr.length; i++) {\n    int temp = arr[i];\n    arr[i] = arr[arr.length - 1 - i];\n    arr[arr.length - 1 - i] = temp;\n}\n```",
      "options": [
        "Throws ArrayIndexOutOfBoundsException",
        "It swaps every element twice, restoring the array to its original order at the end",
        "temp cannot be declared inside for loop",
        "arr[i] is read-only"
      ],
      "answer": 1,
      "explain": "Iterating across the entire length swaps elements to the middle and then swaps them right back! The loop should only run to `arr.length / 2`.",
      "topic": "Two-Pointer Reverse Double-Swap Bug",
      "type": "error",
      "level": "medium",
      "strength": "Identified redundant double-swap bug in array reversal.",
      "weakness": "To reverse an array in-place, loop only up to `arr.length / 2`."
    },
    {
      "q": "What is the output of the following code?\n```java\nint[] a = {1, 2, 3};\nint[] b = a;\nb[0] = 99;\nSystem.out.println(a[0]);\n```",
      "options": [
        "1",
        "99",
        "0",
        "NullPointerException"
      ],
      "answer": 1,
      "explain": "`b` and `a` refer to the exact same array object on the heap. Mutating `b[0]` modifies `a[0]`. Outputs 99.",
      "topic": "Array Aliasing Output",
      "type": "output",
      "level": "easy",
      "strength": "Correctly traced aliased array reference mutation.",
      "weakness": "`b = a` aliases the array; modifying `b[0]` directly updates `a[0]`."
    },
    {
      "q": "A warehouse scanning app reads RFID tags into an array. Due to radio reflections, duplicate tag IDs are captured. If the array is sorted, how can duplicates be filtered into a unique array in O(N) time?",
      "options": [
        "By using a two-pointer pass copying elements only when `arr[i] != arr[i-1]`",
        "By running binary search on every element",
        "By reversing the array",
        "By filling the array with zeros"
      ],
      "answer": 0,
      "explain": "In a sorted array, duplicate elements are consecutive. A single two-pointer linear pass detects transitions `arr[i] != arr[i-1]` in O(N) time.",
      "topic": "Sorted Array Deduplication",
      "type": "scenario",
      "level": "medium",
      "strength": "Mastered two-pointer O(N) deduplication on sorted arrays.",
      "weakness": "Compare adjacent elements `arr[i] != arr[i-1]` in a sorted array to filter duplicates in O(N) time."
    },
    {
      "q": "Can an array be resized in Java after it has been created?",
      "options": [
        "Yes, by assigning a new value to `arr.length`",
        "No, array sizes are strictly immutable once instantiated; to resize, a new array must be created and elements copied over",
        "Yes, using `arr.resize(newSize)`",
        "Yes, if declared with the `var` keyword"
      ],
      "answer": 1,
      "explain": "Arrays in Java have fixed length. To 'resize', you must allocate a new larger array (e.g. via `Arrays.copyOf()`) and reassign the reference.",
      "topic": "Array Immutability",
      "type": "theory",
      "level": "easy",
      "strength": "Understands array size immutability in Java.",
      "weakness": "Arrays cannot change size; create a new array and copy elements."
    },
    {
      "q": "A data warehouse pipeline receives a stream of 1,000,000 integers. It needs to count the frequency of occurrences of values between 0 and 99. Which data structure achieves O(1) frequency tallying with minimal memory?",
      "options": [
        "A hash map with boxing",
        "A frequency count array `int[] counts = new int[100];` where each value directly indexes `counts[val]++`",
        "Sorting the 1,000,000 integers on every insertion",
        "A 2D matrix"
      ],
      "answer": 1,
      "explain": "A direct-addressed frequency array (bucket/tally array) provides instantaneous O(1) updates without object allocation or hash collision overhead.",
      "topic": "Direct-Address Frequency Array",
      "type": "scenario",
      "level": "easy",
      "strength": "Applied direct-addressed bucket array for high-performance counting.",
      "weakness": "Use direct index mapping `counts[val]++` for bounded integer counting."
    },
    {
      "q": "What happens if you invoke `.clone()` on a 2D array `int[][] copy = matrix.clone();`?",
      "options": [
        "It clones all rows deeply, creating independent 1D row arrays",
        "It performs a shallow copy: `copy` is a new outer array, but its rows still reference the exact same 1D row arrays as `matrix`",
        "It throws ClassCastException",
        "It converts the 2D array to 1D"
      ],
      "answer": 1,
      "explain": "`.clone()` on multidimensional arrays is shallow: only the outer array is duplicated; the inner row references still point to the original rows.",
      "topic": "Multidimensional Array Shallow Clone",
      "type": "theory",
      "level": "hard",
      "strength": "Deep understanding of shallow vs deep cloning in 2D arrays.",
      "weakness": "`.clone()` on 2D arrays copies row references, not the inner row objects."
    },
    {
      "q": "Why does the following standalone array initialization fail to compile?\n```java\nint[] nums;\nnums = {1, 2, 3};\n```",
      "options": [
        "Numbers must be separated by semicolons",
        "Array initializer `{...}` can only be used in a declaration; reassignment requires `new int[]{1, 2, 3}`",
        "nums is a reserved word",
        "Curly braces are only for code blocks"
      ],
      "answer": 1,
      "explain": "Array shortcut syntax `{1, 2, 3}` is only valid at the point of declaration (`int[] nums = {1, 2, 3};`). In later statements, it must be written as `nums = new int[]{1, 2, 3};`.",
      "topic": "Array Initializer Shortcut Rules",
      "type": "error",
      "level": "medium",
      "strength": "Recognized illegal array shortcut assignment after declaration.",
      "weakness": "Outside the declaration statement, allocate with `new int[]{...}`."
    },
    {
      "q": "What does this snippet print?\n```java\nint[] arr = {10, 20, 30};\nint x = arr[--arr.length - 1];\nSystem.out.println(x);\n```",
      "options": [
        "Compilation error: cannot modify final field length",
        "20",
        "30",
        "ArrayIndexOutOfBoundsException"
      ],
      "answer": 0,
      "explain": "`arr.length` is a final variable and cannot be modified with `--`. The code fails to compile.",
      "topic": "Attempted Length Decrement Error",
      "type": "output",
      "level": "hard",
      "strength": "Spotted compile-time error modifying final field length.",
      "weakness": "`arr.length` is final and cannot be modified with `--`."
    },
    {
      "q": "An image processing tool transposes an N x N square matrix (swapping rows and columns: `m[r][c]` with `m[c][r]`). How is this done in-place without swapping elements back to their original spots?",
      "options": [
        "`for (int r = 0; r < N; r++) for (int c = r + 1; c < N; c++) swap(m[r][c], m[c][r]);`",
        "`for (int r = 0; r < N; r++) for (int c = 0; c < N; c++) swap(m[r][c], m[c][r]);`",
        "`m = m.clone();`",
        "Reverse each row"
      ],
      "answer": 0,
      "explain": "Iterating with column bound `c = r + 1` strictly visits elements above the main diagonal, swapping each with its transpose counterpart exactly once.",
      "topic": "In-Place Matrix Transposition",
      "type": "scenario",
      "level": "hard",
      "strength": "Mastered upper-triangular indexing for in-place matrix transposition.",
      "weakness": "Traverse strictly above diagonal (`c = r + 1`) to avoid double-swapping elements."
    },
    {
      "q": "Which statement creates an anonymous array passed directly to a method `printItems(new int[]{1, 2, 3})`?",
      "options": [
        "`printItems({1, 2, 3})`",
        "`printItems(new int[]{1, 2, 3})`",
        "`printItems(int[3]{1, 2, 3})`",
        "`printItems(new array(1, 2, 3))`"
      ],
      "answer": 1,
      "explain": "Anonymous array creation requires `new int[]{...}`. The array initializer `{1, 2, 3}` without `new int[]` is only permitted during direct variable declarations.",
      "topic": "Anonymous Array Syntax",
      "type": "theory",
      "level": "medium",
      "strength": "Knows anonymous array instantiation syntax.",
      "weakness": "Use `new int[]{1, 2, 3}` when passing array literals directly to methods."
    },
    {
      "q": "What is wrong with this array comparison?\n```java\nint[][] m1 = {{1, 2}, {3, 4}};\nint[][] m2 = {{1, 2}, {3, 4}};\nboolean eq = Arrays.equals(m1, m2);\n```",
      "options": [
        "Compilation error",
        "`Arrays.equals` performs shallow comparison on 2D arrays, comparing inner array references rather than nested values; `Arrays.deepEquals` must be used",
        "m1 and m2 cannot have 2 elements",
        "Arrays class cannot compare matrices"
      ],
      "answer": 1,
      "explain": "`Arrays.equals` on a 2D array compares the row array references (`m1[0] == m2[0]`), returning false. To compare multidimensional array contents deeply, use `Arrays.deepEquals(m1, m2)`.",
      "topic": "2D Arrays.equals vs deepEquals Trap",
      "type": "error",
      "level": "medium",
      "strength": "Distinguishes Arrays.equals from Arrays.deepEquals for multidimensional arrays.",
      "weakness": "Use `Arrays.deepEquals()` to compare multidimensional arrays by content."
    },
    {
      "q": "What is the output of this code?\n```java\nint[] arr = new int[3];\narr[0] = 5;\narr[arr[0] - 4] = 10;\nSystem.out.println(arr[1]);\n```",
      "options": [
        "0",
        "5",
        "10",
        "ArrayIndexOutOfBoundsException"
      ],
      "answer": 2,
      "explain": "`arr[0]` is 5. `arr[0] - 4 = 5 - 4 = 1`. So `arr[1] = 10`. Printing `arr[1]` outputs 10.",
      "topic": "Computed Array Index Output",
      "type": "output",
      "level": "easy",
      "strength": "Accurately evaluated expression inside array index brackets.",
      "weakness": "Evaluate the index expression: 5 - 4 = 1, so `arr[1] = 10`."
    },
    {
      "q": "You are developing a student grading system for a class of 40 students in University of Malaya. Scores range from 0 to 100. Why is an array `int[] scores = new int[40];` more suitable than declaring 40 individual variables (`score1, score2, ...`)?",
      "options": [
        "Arrays use less CPU cache",
        "Arrays allow indexed iteration using loops, simplified statistical calculations (average, min, max), and clean parameter passing to methods",
        "Individual variables cannot hold numbers above 30",
        "Java restricts methods to 10 local variables"
      ],
      "answer": 1,
      "explain": "Arrays provide indexed sequential access, enabling modular loop processing for computing averages, sorting, and passing datasets cleanly.",
      "topic": "Array vs Discrete Variables",
      "type": "scenario",
      "level": "easy",
      "strength": "Understands benefits of arrays for bulk homogenous data processing.",
      "weakness": "Arrays enable indexed iteration and modular aggregation functions."
    },
    {
      "q": "What is stored in an array declared as `String[] words = new String[3];` before any elements are assigned?",
      "options": [
        "Empty strings `\"\"`",
        "`null` for all elements",
        "`\"null\"` string literals",
        "Undefined memory values"
      ],
      "answer": 1,
      "explain": "Because `String` is a reference type (object), its array elements initialize to `null` by default.",
      "topic": "Reference Array Initialization",
      "type": "theory",
      "level": "easy",
      "strength": "Knows that reference array elements initialize to null.",
      "weakness": "Object and String array elements default to `null`."
    },
    {
      "q": "A game developer needs to represent a chess board. Each square holds a piece identifier. What is the most natural representation in Java?",
      "options": [
        "`int[64]` 1D array",
        "`int[8][8]` 2D array",
        "`int[8][8][8]` 3D array",
        "64 discrete variables"
      ],
      "answer": 1,
      "explain": "An 8x8 2D array `int[8][8]` matches the 2D grid rank and file coordinates of a chessboard.",
      "topic": "Grid Representation Choice",
      "type": "scenario",
      "level": "easy",
      "strength": "Selected 2D matrix layout for grid-based game board.",
      "weakness": "Represent 2D grids naturally with an 8x8 2D array."
    },
    {
      "q": "What happens when you assign one array variable to another: `int[] b = a;`?",
      "options": [
        "A deep copy of all elements is created in a new memory location",
        "Both variables reference the exact same array object on the heap (aliasing)",
        "The elements of a are converted to double",
        "A compilation error occurs"
      ],
      "answer": 1,
      "explain": "Array variables store references to heap objects. `b = a` copies the memory address (reference), so both `a` and `b` point to the identical array object.",
      "topic": "Array Reference Copying",
      "type": "theory",
      "level": "medium",
      "strength": "Understands reference assignment vs deep object copying.",
      "weakness": "`b = a` copies the reference, not the elements; mutating `b[0]` modifies `a[0]`."
    },
    {
      "q": "Why does this code fail to compile?\n```java\nint[][] matrix = new int[][];\n```",
      "options": [
        "matrix must be 3D",
        "Cannot allocate a multidimensional array without at least specifying the first (row) dimension",
        "new int[][] requires curly braces",
        "matrix cannot be named matrix"
      ],
      "answer": 1,
      "explain": "When allocating a multidimensional array, the first dimension must always be specified: `new int[3][]` or `new int[3][3]`.",
      "topic": "Missing Dimension in 2D Array",
      "type": "error",
      "level": "medium",
      "strength": "Caught missing first dimension in multidimensional array instantiation.",
      "weakness": "The first (row) dimension size must always be provided when instantiating multidimensional arrays."
    },
    {
      "q": "What is the output of this code?\n```java\nint[] nums = {1, 2, 3};\nfor (int i = 0; i < nums.length; i++) {\n    nums[i] = nums[nums.length - 1 - i];\n}\nSystem.out.println(Arrays.toString(nums));\n```",
      "options": [
        "[3, 2, 1]",
        "[3, 2, 3]",
        "[1, 2, 1]",
        "[1, 2, 3]"
      ],
      "answer": 1,
      "explain": "`i=0`: `nums[0] = nums[2] = 3` -> `{3, 2, 3}`. `i=1`: `nums[1] = nums[1] = 2`. `i=2`: `nums[2] = nums[0] = 3` (because nums[0] was overwritten with 3!). Result: `[3, 2, 3]`.",
      "topic": "Overwritten Reverse Without Temp",
      "type": "output",
      "level": "hard",
      "strength": "Spotted missing temporary variable leading to asymmetric overwrite.",
      "weakness": "Without a temp swap, earlier overwritten values corrupt later assignments: `[3, 2, 3]`."
    },
    {
      "q": "An e-commerce analytics dashboard tracks daily sales for 12 months. Since months have different numbers of days (28 to 31), which data structure represents this calendar without wasting memory cells?",
      "options": [
        "A rectangular 2D array `int[12][31]`",
        "A jagged 2D array where each row `month` is allocated with its exact number of days `sales[m] = new int[daysInMonth]`",
        "A 1D array of 365 elements with complex index offsets",
        "A 3D cube array"
      ],
      "answer": 1,
      "explain": "A jagged array allocates exact column counts per row, eliminating unused empty cells for shorter months.",
      "topic": "Jagged Array Calendar Design",
      "type": "scenario",
      "level": "medium",
      "strength": "Designed memory-efficient jagged array for variable-length monthly data.",
      "weakness": "Jagged arrays allocate exact row capacities, saving memory on irregular month lengths."
    },
    {
      "q": "What is an array in Java?",
      "options": [
        "A dynamically resizable list of heterogeneous elements",
        "A fixed-size indexed collection of elements of the same data type stored in contiguous memory",
        "A primitive data type like int or char",
        "A key-value hash map"
      ],
      "answer": 1,
      "explain": "In Java, an array is an object holding a fixed number of values of a single type. Once instantiated, its size cannot be changed.",
      "topic": "Array Fundamentals",
      "type": "theory",
      "level": "easy",
      "strength": "Understands core definition and fixed-size nature of Java arrays.",
      "weakness": "Remember: Java arrays have a fixed length once created."
    },
    {
      "q": "Identify the error in this code:\n```java\nfinal int[] arr = {1, 2, 3};\narr[0] = 100; // Line 2\narr = new int[5]; // Line 3\n```",
      "options": [
        "Line 2 causes a compile error: cannot modify elements of a final array",
        "Line 3 causes a compile error: cannot assign a value to final variable arr",
        "Both Line 2 and Line 3 cause compile errors",
        "No errors"
      ],
      "answer": 1,
      "explain": "A `final` array reference cannot be reassigned to point to another array (Line 3 fails). However, the array's contents are NOT immutable; mutating `arr[0] = 100` on Line 2 is completely valid.",
      "topic": "Final Array Reference vs Content Mutability",
      "type": "error",
      "level": "medium",
      "strength": "Understands that final applies to the array reference, not its elements.",
      "weakness": "`final int[] arr` prevents reassigning `arr`, but array elements can still be modified."
    },
    {
      "q": "What does this code print?\n```java\nint[][] m = {{1, 2, 3}, {4, 5}};\nSystem.out.println(m.length + \" \" + m[0].length + \" \" + m[1].length);\n```",
      "options": [
        "2 3 2",
        "5 3 2",
        "2 3 3",
        "3 2 2"
      ],
      "answer": 0,
      "explain": "`m.length` is the number of rows (2). `m[0].length` is 3. `m[1].length` is 2. Outputs `2 3 2`.",
      "topic": "Jagged Array Lengths Output",
      "type": "output",
      "level": "easy",
      "strength": "Calculated dimensions of jagged 2D array.",
      "weakness": "Rows = 2; row 0 length = 3; row 1 length = 2."
    },
    {
      "q": "You are writing a seat reservation engine for a cinema hall with 10 rows and 15 seats per row. How do you check if Seat 8 in Row 4 is currently booked (where false means available, true means booked)?",
      "options": [
        "`if (seats[4][8]) { ... }`",
        "`if (seats[3][7]) { ... }` (adjusting for zero-based indexing)",
        "`if (seats[8][4]) { ... }`",
        "`if (seats[4 * 15 + 8]) { ... }`"
      ],
      "answer": 1,
      "explain": "In zero-based indexing, Row 4 is index `3` and Seat 8 is index `7`. The condition is `if (seats[3][7])`.",
      "topic": "Zero-Based Coordinate Mapping",
      "type": "scenario",
      "level": "easy",
      "strength": "Correctly mapped 1-based human seat coordinates to 0-based array indices.",
      "weakness": "Translate 1-based human coordinates to 0-based array indices by subtracting 1."
    },
    {
      "q": "In a 2D array `int[][] matrix`, what does `matrix.length` represent?",
      "options": [
        "The total number of cells in the entire matrix",
        "The number of rows",
        "The number of columns in the first row",
        "The size in bytes"
      ],
      "answer": 1,
      "explain": "`matrix.length` represents the number of rows (the length of the outer array). `matrix[0].length` represents the number of columns in row 0.",
      "topic": "2D Array Dimensions",
      "type": "theory",
      "level": "easy",
      "strength": "Distinguishes row count from column count in 2D arrays.",
      "weakness": "`matrix.length` is row count; `matrix[i].length` is column count for row i."
    },
    {
      "q": "Why does this loop produce an `ArrayIndexOutOfBoundsException`?\n```java\nint[] arr = {10, 20, 30};\nfor (int i = 0; i <= arr.length; i++) {\n    System.out.println(arr[i]);\n}\n```",
      "options": [
        "i starts at 0 instead of 1",
        "Using `<=` causes the loop to attempt accessing `arr[3]`, which is out of bounds",
        "println cannot print array elements",
        "i++ is invalid"
      ],
      "answer": 1,
      "explain": "Because array indices are 0 to `length - 1`, the loop must use `< arr.length`. Using `<=` attempts to access `arr[arr.length]`, throwing `ArrayIndexOutOfBoundsException`.",
      "topic": "Off-By-One Array Loop Bounds",
      "type": "error",
      "level": "easy",
      "strength": "Spotted `<=` boundary error in array loop.",
      "weakness": "Always use `< arr.length` when iterating array indices."
    },
    {
      "q": "What is a 'jagged' (ragged) array in Java?",
      "options": [
        "An array that contains different primitive types in each row",
        "A multidimensional array where each row can have a different number of columns",
        "An array that has no memory allocated",
        "A circular array buffer"
      ],
      "answer": 1,
      "explain": "In Java, a 2D array is an 'array of arrays'. Each row is an independent 1D array object, meaning rows can have varying lengths.",
      "topic": "Jagged Arrays",
      "type": "theory",
      "level": "medium",
      "strength": "Understands non-rectangular jagged arrays in Java.",
      "weakness": "Java 2D arrays are arrays of arrays, so rows can have different lengths."
    },
    {
      "q": "What is the bug in this enhanced for loop intended to double array values?\n```java\nint[] arr = {1, 2, 3};\nfor (int x : arr) {\n    x = x * 2;\n}\nSystem.out.println(arr[0]);\n```",
      "options": [
        "Compilation error: for-each cannot multiply",
        "Logic bug: `x` is a local copy; modifying `x` does NOT change the array element in `arr`, so `arr[0]` remains 1",
        "Throws ArrayIndexOutOfBoundsException",
        "Prints 0"
      ],
      "answer": 1,
      "explain": "In an enhanced for-each loop, `x` holds a copy of each primitive value. Modifying `x` does not alter the underlying array element.",
      "topic": "Enhanced For Loop Primitive Mutation Bug",
      "type": "error",
      "level": "medium",
      "strength": "Understands that for-each loop variable is a local copy for primitives.",
      "weakness": "Use standard indexed for loop `arr[i] = ...` if you need to mutate elements."
    },
    {
      "q": "What is the output of this code?\n```java\nint[][] grid = new int[2][3];\nint val = 1;\nfor (int i = 0; i < grid.length; i++) {\n    for (int j = 0; j < grid[i].length; j++) {\n        grid[i][j] = val++;\n    }\n}\nSystem.out.println(grid[1][1]);\n```",
      "options": [
        "2",
        "4",
        "5",
        "6"
      ],
      "answer": 2,
      "explain": "Matrix layout: Row 0 has `1, 2, 3`. Row 1 has `4, 5, 6`. `grid[1][1]` is 5.",
      "topic": "2D Array Population Output",
      "type": "output",
      "level": "medium",
      "strength": "Traced 2D matrix sequential value assignment.",
      "weakness": "Row 1 elements are 4, 5, 6; index [1][1] is 5."
    },
    {
      "q": "A high-frequency sensor records 10,000 temperature readings every second. A developer needs to clear the array to zero between capture cycles. Which method is the fastest standard way to zero out the array?",
      "options": [
        "Looping through each index and assigning `arr[i] = 0;`",
        "`Arrays.fill(arr, 0);`",
        "Re-allocating a new array `arr = new int[10000];` on every cycle",
        "`System.gc()`"
      ],
      "answer": 1,
      "explain": "`Arrays.fill(arr, 0)` is optimized and avoids triggering garbage collector overhead from repeated heap reallocations.",
      "topic": "Array Reuse vs Garbage Collection",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands memory reuse and Arrays.fill to prevent GC pressure.",
      "weakness": "Reuse arrays with `Arrays.fill(arr, 0)` to avoid GC pressure from frequent re-allocations."
    },
    {
      "q": "What are the default values assigned to elements of an array declared as `int[] numbers = new int[5];`?",
      "options": [
        "Garbage memory values",
        "All 0s",
        "All nulls",
        "All -1s"
      ],
      "answer": 1,
      "explain": "When an array is allocated on the heap, all its elements are automatically initialized to their default type values. For numeric primitives (int, byte, short, long), the default is 0.",
      "topic": "Array Default Values",
      "type": "theory",
      "level": "easy",
      "strength": "Knows default element values for numeric primitive arrays.",
      "weakness": "Array elements default to 0 for numeric types, false for boolean, and null for objects."
    },
    {
      "q": "Why does the following array declaration fail to compile?\n```java\nint[5] arr = new int[];\n```",
      "options": [
        "Arrays cannot store int",
        "Dimension size [5] cannot appear in the type declaration, and size is missing in the `new int[]` allocation",
        "new keyword cannot be used with arrays",
        "int must be capitalized Integer"
      ],
      "answer": 1,
      "explain": "In Java, dimensions cannot be specified on the left side (`int[5] arr` is illegal). The size belongs in the instantiation: `int[] arr = new int[5];`.",
      "topic": "Array Declaration Syntax Error",
      "type": "error",
      "level": "easy",
      "strength": "Spotted misplaced dimension size in array declaration.",
      "weakness": "Specify size during allocation `new int[5]`, not in the type declaration `int[]`."
    },
    {
      "q": "What is the output of the following code?\n```java\nint[] arr = {10, 20, 30, 40, 50};\nint sum = 0;\nfor (int i = 1; i < arr.length - 1; i++) {\n    sum += arr[i];\n}\nSystem.out.println(sum);\n```",
      "options": [
        "150",
        "90",
        "140",
        "60"
      ],
      "answer": 1,
      "explain": "The loop runs for `i = 1, 2, 3` (excluding indices 0 and 4). `sum = arr[1] + arr[2] + arr[3] = 20 + 30 + 40 = 90`.",
      "topic": "Array Subsegment Sum",
      "type": "output",
      "level": "easy",
      "strength": "Tracked loop boundary bounds on array summation.",
      "weakness": "Indices 1, 2, 3 sum to 20 + 30 + 40 = 90."
    },
    {
      "q": "A weather station needs to compute the median temperature from an unsorted array of daily readings. What is the standard algorithm using Java's built-in libraries?",
      "options": [
        "Sum all elements and divide by length",
        "Sort the array using `Arrays.sort(temps);`, then pick the middle element `temps[temps.length / 2]`",
        "Call `Arrays.binarySearch(temps, 0)`",
        "Use `Arrays.toString(temps)`"
      ],
      "answer": 1,
      "explain": "The median requires sorted order. Sort with `Arrays.sort()`, then access the middle index.",
      "topic": "Median Calculation Algorithm",
      "type": "scenario",
      "level": "easy",
      "strength": "Applied Arrays.sort to calculate median statistics.",
      "weakness": "Sort the array first; the median is at index `length / 2`."
    },
    {
      "q": "What does `Arrays.fill(arr, 7)` do?",
      "options": [
        "Appends the number 7 to the end of the array",
        "Assigns the value 7 to every element in the array",
        "Checks if the array contains 7",
        "Throws an exception if array is already full"
      ],
      "answer": 1,
      "explain": "`Arrays.fill()` assigns the specified value to all elements of the array.",
      "topic": "Arrays.fill Utility",
      "type": "theory",
      "level": "easy",
      "strength": "Knows the behavior of Arrays.fill.",
      "weakness": "`Arrays.fill(arr, val)` sets every element in `arr` to `val`."
    },
    {
      "q": "Why does printing an array directly produce weird text like `[I@15db9742`?\n```java\nint[] arr = {1, 2, 3};\nSystem.out.println(arr);\n```",
      "options": [
        "The array memory was corrupted",
        "Arrays inherit Object's default `toString()` method, which prints type descriptor `[I` and hex hashcode instead of contents",
        "Java does not support printing arrays",
        "Array is uninitialized"
      ],
      "answer": 1,
      "explain": "Arrays do not override `Object.toString()`. Printing `arr` prints the default object representation. To print elements, use `Arrays.toString(arr)`.",
      "topic": "Default Array toString Output",
      "type": "error",
      "level": "easy",
      "strength": "Understands why arrays print type descriptors instead of contents.",
      "weakness": "Use `Arrays.toString(arr)` to display array contents instead of `arr.toString()`."
    },
    {
      "q": "Which method in the standard Java library is the most efficient native way to copy a subsegment of an array?",
      "options": [
        "`System.arraycopy()`",
        "`Arrays.copyRange()`",
        "A manual `for` loop",
        "`clone()`"
      ],
      "answer": 0,
      "explain": "`System.arraycopy()` is a native system call that copies bytes directly in memory, offering maximum performance.",
      "topic": "Array Copy Performance",
      "type": "theory",
      "level": "medium",
      "strength": "Knows System.arraycopy as the native high-performance array copy mechanism.",
      "weakness": "Use `System.arraycopy()` for fast, low-level block copying."
    },
    {
      "q": "Identify the bug in this array search:\n```java\nint[] arr = {5, 2, 8, 1, 9};\nint idx = Arrays.binarySearch(arr, 8);\n```",
      "options": [
        "binarySearch cannot search integers",
        "The array is not sorted; calling `Arrays.binarySearch` on an unsorted array produces undefined results",
        "idx must be boolean",
        "arr must be declared final"
      ],
      "answer": 1,
      "explain": "`Arrays.binarySearch` requires the array to be sorted beforehand (`Arrays.sort(arr)`). Searching an unsorted array results in undefined behavior.",
      "topic": "Unsorted Binary Search Bug",
      "type": "error",
      "level": "medium",
      "strength": "Spotted binary search invoked on unsorted array.",
      "weakness": "Always call `Arrays.sort()` before calling `Arrays.binarySearch()`."
    },
    {
      "q": "What is the output of this code?\n```java\nint[] a = {1, 2, 3, 4, 5};\nint[] b = new int[3];\nSystem.arraycopy(a, 1, b, 0, 3);\nSystem.out.println(Arrays.toString(b));\n```",
      "options": [
        "[1, 2, 3]",
        "[2, 3, 4]",
        "[3, 4, 5]",
        "[0, 0, 0]"
      ],
      "answer": 1,
      "explain": "`System.arraycopy(a, 1, b, 0, 3)` copies 3 elements from `a` starting at index 1 (`2, 3, 4`) into `b` starting at index 0. `b` becomes `[2, 3, 4]`.",
      "topic": "System.arraycopy Output",
      "type": "output",
      "level": "medium",
      "strength": "Tracked source and destination indices in System.arraycopy.",
      "weakness": "Copies elements at index 1, 2, 3 (2, 3, 4) into b."
    },
    {
      "q": "A mobile game inventory system has a maximum capacity of 20 items. When an inventory array is full and a player picks up a new item, how can the system dynamically expand capacity to 30 items?",
      "options": [
        "Call `inventory.length = 30;`",
        "Use `inventory = Arrays.copyOf(inventory, 30);` to allocate a new array of size 30 with existing elements copied over",
        "Call `inventory.expand(10);`",
        "Java arrays expand automatically when an element is added"
      ],
      "answer": 1,
      "explain": "`Arrays.copyOf(inventory, 30)` creates a new array of length 30, copies the existing 20 elements, and returns the new reference.",
      "topic": "Dynamic Capacity Expansion Pattern",
      "type": "scenario",
      "level": "medium",
      "strength": "Employed Arrays.copyOf for dynamic array resizing.",
      "weakness": "Use `Arrays.copyOf(arr, newSize)` to resize arrays dynamically."
    },
    {
      "q": "What is the default value for elements of an array declared as `boolean[] flags = new boolean[3];`?",
      "options": [
        "true",
        "false",
        "0",
        "null"
      ],
      "answer": 1,
      "explain": "The default value for primitive boolean elements in a newly instantiated array is `false`.",
      "topic": "Boolean Array Initialization",
      "type": "theory",
      "level": "easy",
      "strength": "Knows boolean array defaults.",
      "weakness": "Boolean array elements initialize to `false` by default."
    },
    {
      "q": "What error occurs at runtime in this code?\n```java\nint[] nums = {10, 20, 30};\nSystem.out.println(nums[3]);\n```",
      "options": [
        "Prints null",
        "Prints 0",
        "Throws ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3",
        "Compilation error: array index must be constant"
      ],
      "answer": 2,
      "explain": "An array of 3 elements has valid indices 0, 1, and 2. Index 3 is out of bounds, throwing `ArrayIndexOutOfBoundsException` at runtime.",
      "topic": "Off-By-One ArrayIndexOutOfBoundsException",
      "type": "error",
      "level": "easy",
      "strength": "Identified runtime ArrayIndexOutOfBoundsException on boundary index.",
      "weakness": "Valid indices for length 3 are 0, 1, and 2; index 3 triggers an exception."
    },
    {
      "q": "What does the following snippet print?\n```java\nint[] arr = {1, 2, 3, 4, 5};\nint p = 1;\nfor (int x : arr) {\n    if (x % 2 == 0) p *= x;\n}\nSystem.out.println(p);\n```",
      "options": [
        "8",
        "15",
        "120",
        "24"
      ],
      "answer": 0,
      "explain": "Even numbers in the array are 2 and 4. Product `p = 1 * 2 * 4 = 8`.",
      "topic": "Even Elements Product",
      "type": "output",
      "level": "easy",
      "strength": "Computed product of filtered array elements.",
      "weakness": "Even elements are 2 and 4; 2 * 4 = 8."
    },
    {
      "q": "A flight booking engine stores connecting airport route distances in an adjacency matrix `int[][] dist`. How is an airport route between Airport `i` and Airport `j` verified as non-existent (assuming 0 represents no direct flight)?",
      "options": [
        "`if (dist[i][j] == 0)`",
        "`if (dist[i] == null)`",
        "`if (dist.length == 0)`",
        "`if (i == j)`"
      ],
      "answer": 0,
      "explain": "In a graph adjacency matrix, `dist[i][j] == 0` designates that no direct edge/flight exists between node `i` and node `j`.",
      "topic": "Adjacency Matrix Edge Verification",
      "type": "scenario",
      "level": "easy",
      "strength": "Understands graph representation via 2D adjacency matrix.",
      "weakness": "In an adjacency matrix, 0 represents the absence of a direct connection between vertices."
    },
    {
      "q": "What is the maximum allowed array index for an array of size N in Java?",
      "options": [
        "N",
        "N - 1",
        "N + 1",
        "2^31 - 1"
      ],
      "answer": 1,
      "explain": "Because Java arrays use zero-based indexing, the valid indices range from `0` to `N - 1`.",
      "topic": "Zero-Based Indexing",
      "type": "theory",
      "level": "easy",
      "strength": "Knows maximum index is length - 1.",
      "weakness": "In zero-based indexing, the last element is always at index `length - 1`."
    },
    {
      "q": "Why does the following snippet fail to compile?\n```java\nint[] arr = new int[5];\narr[0] = 3.14;\n```",
      "options": [
        "3.14 is out of bounds",
        "Compilation error: possible lossy conversion from double to int",
        "arr[0] is read-only",
        "arr requires casting to float"
      ],
      "answer": 1,
      "explain": "`arr` is an `int[]`. Assigning a `double` literal `3.14` to an `int` element violates type safety and causes a compile error without an explicit cast `(int) 3.14`.",
      "topic": "Lossy Conversion in Array Element",
      "type": "error",
      "level": "easy",
      "strength": "Caught type mismatch during array element assignment.",
      "weakness": "Array elements must match the array's declared component type."
    },
    {
      "q": "What does `Arrays.binarySearch(arr, key)` require before it can be reliably used?",
      "options": [
        "The array must contain only positive numbers",
        "The array must be sorted in ascending order",
        "The array cannot contain duplicates",
        "The array must have an even length"
      ],
      "answer": 1,
      "explain": "Binary search relies on sorted ordering to eliminate half of the search space at each step. If the array is unsorted, results are undefined.",
      "topic": "Binary Search Preconditions",
      "type": "theory",
      "level": "medium",
      "strength": "Understands that binary search strictly requires a pre-sorted array.",
      "weakness": "Always sort arrays before invoking `Arrays.binarySearch()`."
    },
    {
      "q": "Why does this code throw an exception?\n```java\nint[][] jagged = new int[3][];\njagged[0][0] = 5;\n```",
      "options": [
        "`ArrayIndexOutOfBoundsException`",
        "`NullPointerException` because row 0 is null (its columns have not been allocated yet)",
        "`ClassCastException`",
        "`ArrayStoreException`"
      ],
      "answer": 1,
      "explain": "`new int[3][]` allocates an outer array of 3 rows, but each row is `null`. Accessing `jagged[0][0]` dereferences `null`, throwing `NullPointerException`.",
      "topic": "Unallocated Jagged Row NullPointerException",
      "type": "error",
      "level": "medium",
      "strength": "Identified unallocated row dereference in jagged array.",
      "weakness": "Allocate the row `jagged[0] = new int[2];` before accessing its elements."
    },
    {
      "q": "What is the output of this code?\n```java\nint[] arr = {10, 20, 30, 40};\nfor (int i = 0; i < arr.length / 2; i++) {\n    int t = arr[i];\n    arr[i] = arr[arr.length - 1 - i];\n    arr[arr.length - 1 - i] = t;\n}\nSystem.out.println(arr[1]);\n```",
      "options": [
        "10",
        "20",
        "30",
        "40"
      ],
      "answer": 2,
      "explain": "The loop reverses the array in-place to `{40, 30, 20, 10}`. `arr[1]` is 30.",
      "topic": "In-Place Array Reversal Output",
      "type": "output",
      "level": "medium",
      "strength": "Accurately traced in-place two-pointer array reversal.",
      "weakness": "Reversed array is {40, 30, 20, 10}; index 1 is 30."
    },
    {
      "q": "You are implementing a digital image filter that processes grayscale pixels represented as a 2D array `int[][] image`. A blurring algorithm needs to access neighboring pixels `(r-1, c)`, `(r+1, c)`, `(r, c-1)`, `(r, c+1)`. What boundary check must precede accessing neighbor `image[nr][nc]`?",
      "options": [
        "`nr >= 0 && nr < image.length && nc >= 0 && nc < image[nr].length`",
        "`nr > 0 && nc > 0`",
        "`image[nr][nc] != null`",
        "`nr == nc`"
      ],
      "answer": 0,
      "explain": "To prevent `ArrayIndexOutOfBoundsException`, neighbor coordinates must be verified: `nr >= 0 && nr < rows && nc >= 0 && nc < cols`.",
      "topic": "2D Grid Neighbor Bounds Guard",
      "type": "scenario",
      "level": "medium",
      "strength": "Implemented robust boundary guard condition for 2D matrix traversal.",
      "weakness": "Always verify `0 <= r < rows` and `0 <= c < cols` before accessing matrix neighbors."
    },
    {
      "q": "What property is used to determine the number of elements in an array in Java?",
      "options": [
        "`arr.length()`",
        "`arr.length`",
        "`arr.size()`",
        "`arr.count`"
      ],
      "answer": 1,
      "explain": "In Java, arrays have a public final field `length` (not a method). `String` has `.length()` and collections have `.size()`.",
      "topic": "Array Length Property",
      "type": "theory",
      "level": "easy",
      "strength": "Distinguishes array `.length` field from string `.length()` method.",
      "weakness": "Arrays use the `.length` field; do not include parentheses."
    },
    {
      "q": "Identify the compilation error in the following snippet:\n```java\nint[] arr = new int[3];\narr.length = 5;\n```",
      "options": [
        "Cannot assign a value to final variable length",
        "length is a method and requires parentheses",
        "arr is not in scope",
        "Length must be modified using setLength()"
      ],
      "answer": 0,
      "explain": "The `length` field of an array is `public final`. It is strictly read-only and cannot be reassigned.",
      "topic": "Immutable Array Length Field",
      "type": "error",
      "level": "easy",
      "strength": "Recognized that array length is a final read-only field.",
      "weakness": "`arr.length` is a final field and cannot be reassigned."
    },
    {
      "q": "What is printed by this code?\n```java\nint[] arr = {5, 3, 9, 1, 7};\nArrays.sort(arr);\nSystem.out.println(arr[0] + \" \" + arr[arr.length - 1]);\n```",
      "options": [
        "5 7",
        "1 9",
        "9 1",
        "3 7"
      ],
      "answer": 1,
      "explain": "After sorting, `arr` becomes `{1, 3, 5, 7, 9}`. The minimum element `arr[0]` is 1, and the maximum element `arr[arr.length - 1]` is 9.",
      "topic": "Sorted Array Extremes",
      "type": "output",
      "level": "easy",
      "strength": "Identified first and last elements after Arrays.sort().",
      "weakness": "Sorted array is {1, 3, 5, 7, 9}; first is 1, last is 9."
    },
    {
      "q": "A lottery system draws 6 winning numbers from 1 to 49. To rapidly check if a player's picked number is among the winners, what is the most efficient search approach if the winning numbers array is kept sorted?",
      "options": [
        "Linear search scanning from index 0 to 5",
        "`Arrays.binarySearch(winners, pickedNumber) >= 0`",
        "`winners.contains(pickedNumber)`",
        "Sorting the array on every check"
      ],
      "answer": 1,
      "explain": "`Arrays.binarySearch` on a pre-sorted array runs in O(log N) time and returns an index `>= 0` if the target is found.",
      "topic": "Binary Search Membership Check",
      "type": "scenario",
      "level": "easy",
      "strength": "Applied binary search for fast O(log N) membership testing.",
      "weakness": "Use `Arrays.binarySearch(sortedArr, key) >= 0` for fast membership checks."
    },
    {
      "q": "What is the runtime exception in this code?\n```java\nString[] names = new String[3];\nSystem.out.println(names[0].toUpperCase());\n```",
      "options": [
        "`ArrayIndexOutOfBoundsException`",
        "`NullPointerException` because `names[0]` is null",
        "`ClassCastException`",
        "`IllegalArgumentException`"
      ],
      "answer": 1,
      "explain": "A newly instantiated `String[]` has all elements initialized to `null`. Calling `.toUpperCase()` on `names[0]` dereferences `null`, throwing `NullPointerException`.",
      "topic": "Null Element Dereference",
      "type": "error",
      "level": "easy",
      "strength": "Recognized NullPointerException on uninitialized object array element.",
      "weakness": "String array elements default to `null`; initialize them before calling methods."
    },
    {
      "q": "What is the output of this code?\n```java\nint[][] jagged = new int[2][];\njagged[0] = new int[]{1, 2};\njagged[1] = new int[]{3, 4, 5};\nint count = 0;\nfor (int[] row : jagged) count += row.length;\nSystem.out.println(count);\n```",
      "options": [
        "5",
        "6",
        "4",
        "2"
      ],
      "answer": 0,
      "explain": "Row 0 has length 2. Row 1 has length 3. Total elements `count = 2 + 3 = 5`.",
      "topic": "Jagged Array Element Count",
      "type": "output",
      "level": "easy",
      "strength": "Calculated total cell count across ragged rows.",
      "weakness": "Row lengths 2 + 3 = 5 total elements."
    },
    {
      "q": "What happens when you pass an array to a method and modify one of its elements inside that method?",
      "options": [
        "The modification is lost when the method returns because Java is pass-by-value",
        "The modification persists in the caller's array because the method received a copy of the reference pointing to the original heap object",
        "Throws an `UnsupportedOperationException`",
        "The original array is duplicated automatically"
      ],
      "answer": 1,
      "explain": "Java is pass-by-value, meaning the reference is copied. Both the caller and method point to the same array object on the heap, so element mutations persist.",
      "topic": "Pass-by-Value Array Mutation",
      "type": "theory",
      "level": "medium",
      "strength": "Understands how pass-by-value applies to object references.",
      "weakness": "Mutations to array elements inside methods affect the caller because both reference the same heap array."
    },
    {
      "q": "Identify the error in this array allocation:\n```java\nint[] arr = new int[3]{1, 2, 3};\n```",
      "options": [
        "new int[] cannot take braces",
        "Cannot specify array dimension `[3]` when an array initializer `{1, 2, 3}` is provided",
        "int must be Integer",
        "braces must contain semicolons"
      ],
      "answer": 1,
      "explain": "When an explicit array initializer `{...}` is supplied, the dimension between brackets MUST be left empty (`new int[]{1, 2, 3}`). Specifying `[3]` causes a compilation error.",
      "topic": "Array Initializer Dimension Conflict",
      "type": "error",
      "level": "medium",
      "strength": "Caught dimension specification conflict with array initializer.",
      "weakness": "Leave brackets empty `new int[]{...}` when initializing with elements."
    },
    {
      "q": "What is the output of this code?\n```java\nint[] arr = {1, 2, 3, 4, 5};\nint[] sub = Arrays.copyOfRange(arr, 1, 4);\nSystem.out.println(sub.length + \" \" + sub[0] + \" \" + sub[sub.length - 1]);\n```",
      "options": [
        "3 2 4",
        "4 2 5",
        "3 1 3",
        "3 2 5"
      ],
      "answer": 0,
      "explain": "`Arrays.copyOfRange(arr, from, to)` copies indices `[1, 4)` (exclusive of 4), containing elements at indices 1, 2, 3: `{2, 3, 4}`. Length is 3, first is 2, last is 4.",
      "topic": "copyOfRange Bounds",
      "type": "output",
      "level": "medium",
      "strength": "Understands half-open interval `[from, to)` in copyOfRange.",
      "weakness": "`copyOfRange(arr, 1, 4)` copies indices 1, 2, 3 (`{2, 3, 4}`)."
    },
    {
      "q": "A banking fraud detection service checks whether a transaction sequence is strictly sorted in chronological order. Which linear scan correctly checks if an array `long[] timestamps` is sorted ascendingly?",
      "options": [
        "`for (int i = 0; i < len - 1; i++) if (timestamps[i] > timestamps[i+1]) return false; return true;`",
        "`for (int i = 0; i < len; i++) if (timestamps[i] < timestamps[i+1]) return false;`",
        "`return Arrays.binarySearch(timestamps, 0) >= 0;`",
        "`return timestamps[0] < timestamps[len - 1];`"
      ],
      "answer": 0,
      "explain": "Iterate from 0 to `len - 2`. If any element exceeds its successor (`timestamps[i] > timestamps[i+1]`), the array is not sorted. If all pass, return true.",
      "topic": "Sorted Array Verification Scan",
      "type": "scenario",
      "level": "medium",
      "strength": "Designed clean O(N) verification algorithm for sorted sequence.",
      "weakness": "Check `timestamps[i] > timestamps[i+1]`; return false on the first inversion."
    },
    {
      "q": "What runtime exception is thrown if you attempt to access an array at an invalid index (e.g. `arr[-1]` or `arr[arr.length]`)?",
      "options": [
        "`NullPointerException`",
        "`ArrayIndexOutOfBoundsException`",
        "`IllegalArgumentException`",
        "`IndexOutOfBoundsException`"
      ],
      "answer": 1,
      "explain": "Accessing an array with an index `< 0` or `>= arr.length` throws `java.lang.ArrayIndexOutOfBoundsException`.",
      "topic": "Array Bounds",
      "type": "theory",
      "level": "easy",
      "strength": "Knows the exact exception thrown on invalid array indexing.",
      "weakness": "Negative indices or index >= length throw `ArrayIndexOutOfBoundsException`."
    },
    {
      "q": "What is the runtime exception thrown by this code?\n```java\nint[] data = null;\nSystem.out.println(data.length);\n```",
      "options": [
        "`ArrayIndexOutOfBoundsException`",
        "`NullPointerException`",
        "`IllegalArgumentException`",
        "`0`"
      ],
      "answer": 1,
      "explain": "Attempting to access a field (`.length`) or index on an array reference that is `null` throws `NullPointerException`.",
      "topic": "Null Array Dereference",
      "type": "error",
      "level": "easy",
      "strength": "Identified NullPointerException when dereferencing null array.",
      "weakness": "Accessing `.length` on a null array reference throws `NullPointerException`."
    },
    {
      "q": "What does the following snippet print?\n```java\nint[] arr = {1, 2, 3};\nint[] copy = arr.clone();\ncopy[0] = 50;\nSystem.out.println(arr[0] + \" \" + copy[0]);\n```",
      "options": [
        "50 50",
        "1 50",
        "1 1",
        "Error"
      ],
      "answer": 1,
      "explain": "`.clone()` on a 1D primitive array creates an independent copy. Mutating `copy[0]` does not affect `arr[0]`. Prints `1 50`.",
      "topic": "1D Array Clone Independence",
      "type": "output",
      "level": "easy",
      "strength": "Recognized independent mutation in cloned 1D array.",
      "weakness": "Cloning a 1D primitive array isolates changes to the copy."
    },
    {
      "q": "A logistics company packs containers with item weights. To find the top 3 heaviest items in an array of 1,000 weights, what is the cleanest approach using Java's `Arrays` utility?",
      "options": [
        "`Arrays.sort(weights);` then read the last 3 elements at indices `len - 1`, `len - 2`, `len - 3`",
        "Search with `Arrays.binarySearch()`",
        "Use `Arrays.fill()`",
        "Reverse the array 3 times"
      ],
      "answer": 0,
      "explain": "Sorting with `Arrays.sort(weights)` places the largest items at the end of the array, allowing immediate retrieval of the top 3 items.",
      "topic": "Top-K via Array Sorting",
      "type": "scenario",
      "level": "easy",
      "strength": "Retrieved top-K extreme values via sorted array indexing.",
      "weakness": "Sort ascendingly; the top K elements reside at the end of the array."
    },
    {
      "q": "What is the bug in this array search algorithm?\n```java\nboolean found = false;\nfor (int x : arr) {\n    if (x == target) found = true;\n    else found = false;\n}\n```",
      "options": [
        "Loop causes infinite iteration",
        "The `else found = false;` overwrites previous successful matches, so `found` only reflects the very last element in the array",
        "x cannot be compared to target",
        "arr cannot be iterated with for-each"
      ],
      "answer": 1,
      "explain": "Setting `found = false` in the `else` branch overwrites any earlier match. Once found, the search should set `found = true; break;`.",
      "topic": "Search Flag Overwrite Bug",
      "type": "error",
      "level": "easy",
      "strength": "Caught premature flag overwrite in linear search loop.",
      "weakness": "Do not reset search flags to false in the loop; set `true` and break upon match."
    },
    {
      "q": "What is printed by this code?\n```java\nint[] arr = {4, 1, 8, 3};\nint max = arr[0];\nfor (int i = 1; i < arr.length; i++) {\n    if (arr[i] > max) max = arr[i];\n}\nSystem.out.println(max);\n```",
      "options": [
        "4",
        "1",
        "8",
        "3"
      ],
      "answer": 2,
      "explain": "The loop tracks the running maximum element. The largest value in `{4, 1, 8, 3}` is 8.",
      "topic": "Linear Maximum Finding",
      "type": "output",
      "level": "easy",
      "strength": "Traced linear scan for maximum array element.",
      "weakness": "Maximum element is 8."
    },
    {
      "q": "Which method should be used to produce a readable String representation of a 2D or multidimensional array?",
      "options": [
        "`Arrays.toString(matrix)`",
        "`Arrays.deepToString(matrix)`",
        "`matrix.toString()`",
        "`String.valueOf(matrix)`"
      ],
      "answer": 1,
      "explain": "`Arrays.toString()` on a 2D array prints object hash codes for inner arrays. `Arrays.deepToString()` recursively traverses nested arrays to print complete contents.",
      "topic": "Deep String Representation",
      "type": "theory",
      "level": "medium",
      "strength": "Knows deepToString for multidimensional arrays.",
      "weakness": "Use `Arrays.deepToString()` for nested or multidimensional arrays."
    },
    {
      "q": "What happens when compiling this array type mismatch?\n```java\nint[] arr = new double[5];\n```",
      "options": [
        "Automatic widening from int to double",
        "Compilation error: incompatible types: double[] cannot be converted to int[]",
        "Runtime ClassCastException",
        "Elements are truncated to 0"
      ],
      "answer": 1,
      "explain": "Array types in Java are not covariant across primitive types. `double[]` is an entirely incompatible type from `int[]`, causing a compilation error.",
      "topic": "Incompatible Primitive Array Types",
      "type": "error",
      "level": "medium",
      "strength": "Recognized that primitive arrays cannot be cross-assigned.",
      "weakness": "Primitive array types cannot be assigned to one another (`int[]` cannot reference `double[]`)."
    },
    {
      "q": "What is the output of this code?\n```java\nint[] arr = {1, 2, 3};\nint shift = arr[0];\nfor (int i = 0; i < arr.length - 1; i++) {\n    arr[i] = arr[i + 1];\n}\narr[arr.length - 1] = shift;\nSystem.out.println(Arrays.toString(arr));\n```",
      "options": [
        "[1, 2, 3]",
        "[2, 3, 1]",
        "[3, 2, 1]",
        "[2, 1, 3]"
      ],
      "answer": 1,
      "explain": "This algorithm performs a left circular shift by 1 position. `{1, 2, 3}` becomes `{2, 3, 1}`.",
      "topic": "Left Circular Array Shift",
      "type": "output",
      "level": "medium",
      "strength": "Traced left circular shift algorithm correctly.",
      "weakness": "First element 1 shifts to the back; result is `[2, 3, 1]`."
    },
    {
      "q": "You are writing a barcode scanner validation module that verifies an EAN-13 barcode stored as `int[] digits = new int[13];`. The check digit formula requires summing odd-positioned digits and multiplying even-positioned digits by 3. How do you traverse alternating positions cleanly?",
      "options": [
        "Two separate loops: one with `i += 2` starting at 0, and another with `i += 2` starting at 1",
        "A single while loop incrementing by 0.5",
        "Recursion only",
        "Enhanced for loop without index"
      ],
      "answer": 0,
      "explain": "Using two loops with step increment `i += 2` cleanly separates odd and even parity indices without needing `if (i % 2 == 0)` branching on every iteration.",
      "topic": "Parity Stride Loop Traversal",
      "type": "scenario",
      "level": "medium",
      "strength": "Designed stride loops for alternating parity index processing.",
      "weakness": "Use step `i += 2` to iterate even and odd index positions independently."
    },
    {
      "q": "What does `Arrays.equals(arr1, arr2)` compare for two 1D primitive arrays?",
      "options": [
        "Whether `arr1 == arr2` (same memory reference)",
        "Whether both arrays have the same length and corresponding pairs of elements are equal",
        "Whether the sum of elements in both arrays is identical",
        "Whether both arrays were created on the same thread"
      ],
      "answer": 1,
      "explain": "`Arrays.equals(arr1, arr2)` checks if both arrays have identical lengths and equal element values at corresponding indices.",
      "topic": "Arrays.equals Semantics",
      "type": "theory",
      "level": "easy",
      "strength": "Understands content equality testing via Arrays.equals.",
      "weakness": "Use `Arrays.equals()` to compare element values, not `==` which only compares references."
    },
    {
      "q": "What is wrong with this negative array size declaration?\n```java\nint size = -5;\nint[] arr = new int[size];\n```",
      "options": [
        "Compilation error: size cannot be negative",
        "Throws `NegativeArraySizeException` at runtime",
        "Array allocates 5 elements in reverse",
        "Throws `ArrayIndexOutOfBoundsException`"
      ],
      "answer": 1,
      "explain": "Attempting to allocate an array with a negative dimension throws `java.lang.NegativeArraySizeException` at runtime.",
      "topic": "NegativeArraySizeException",
      "type": "error",
      "level": "easy",
      "strength": "Recognized NegativeArraySizeException on negative dimension.",
      "weakness": "Instantiating an array with negative length throws `NegativeArraySizeException`."
    },
    {
      "q": "What does the following code print?\n```java\nint[][] m = new int[3][3];\nfor (int i = 0; i < 3; i++) m[i][i] = 1;\nint sum = 0;\nfor (int[] row : m)\n    for (int cell : row) sum += cell;\nSystem.out.println(sum);\n```",
      "options": [
        "1",
        "3",
        "9",
        "0"
      ],
      "answer": 1,
      "explain": "`m[i][i] = 1` sets the main diagonal cells `[0][0], [1][1], [2][2]` to 1. All other 6 cells remain 0. Sum is 3.",
      "topic": "Identity Matrix Diagonal Sum",
      "type": "output",
      "level": "easy",
      "strength": "Calculated sum of main diagonal entries.",
      "weakness": "3 diagonal cells each have 1; total sum is 3."
    },
    {
      "q": "A ride-sharing app maintains a circular buffer of the last 5 GPS coordinate points using an array `double[] buffer = new double[5];`. When a new reading arrives, how is the insertion index updated so it wraps around to index 0 after index 4?",
      "options": [
        "`insertIdx = (insertIdx + 1) % buffer.length;`",
        "`insertIdx = insertIdx + 1; if (insertIdx > 5) insertIdx = 0;`",
        "`insertIdx = insertIdx % 4;`",
        "`insertIdx = buffer.length - 1;`"
      ],
      "answer": 0,
      "explain": "The modulus operator `(idx + 1) % size` wraps around seamlessly: `(4 + 1) % 5 = 0`.",
      "topic": "Circular Buffer Wrap-Around",
      "type": "scenario",
      "level": "easy",
      "strength": "Applied modular arithmetic for circular buffer index wrapping.",
      "weakness": "`index = (index + 1) % capacity` wraps buffer pointers in O(1) time."
    },
    {
      "q": "What is the output of this code?\n```java\nint[] arr = {1, 2, 3, 2, 1};\nboolean isPal = true;\nfor (int i = 0; i < arr.length / 2; i++) {\n    if (arr[i] != arr[arr.length - 1 - i]) {\n        isPal = false;\n        break;\n    }\n}\nSystem.out.println(isPal);\n```",
      "options": [
        "true",
        "false",
        "1",
        "0"
      ],
      "answer": 0,
      "explain": "Indices compare: `arr[0] (1) == arr[4] (1)`, `arr[1] (2) == arr[3] (2)`. All symmetric pairs match, so `isPal` remains `true`.",
      "topic": "Palindrome Array Verification",
      "type": "output",
      "level": "easy",
      "strength": "Traced symmetric two-pointer array palindrome check.",
      "weakness": "The array reads identically forwards and backwards; output is true."
    },
    {
      "q": "A weather tracking program finds the hottest temperature recorded in a year across all cities: `double[][] cityTemps`. What is the correct nested search idiom?",
      "options": [
        "`double max = cityTemps[0][0]; for (double[] row : cityTemps) for (double t : row) if (t > max) max = t;`",
        "`double max = 0; if (cityTemps.length > max) max = cityTemps.length;`",
        "`double max = cityTemps[0].length;`",
        "`Arrays.sort(cityTemps); return cityTemps[0][0];`"
      ],
      "answer": 0,
      "explain": "Iterating through every cell of the 2D array with enhanced for-loops and maintaining a running maximum initialized to `cityTemps[0][0]` finds the global maximum.",
      "topic": "Global Matrix Extremum Search",
      "type": "scenario",
      "level": "easy",
      "strength": "Implemented clean nested for-each traversal for global matrix maximum.",
      "weakness": "Initialize `max` to `grid[0][0]` and scan all cells via nested for-each loops."
    },
    {
      "q": "Which sorting algorithm is implemented by `Arrays.sort()` for primitive types (e.g. `int[]`) in standard modern Java?",
      "options": [
        "Bubble Sort",
        "Dual-Pivot Quicksort",
        "Merge Sort",
        "Insertion Sort only"
      ],
      "answer": 1,
      "explain": "For primitive arrays, `Arrays.sort()` uses a highly optimized Dual-Pivot Quicksort offering O(N log N) average performance.",
      "topic": "Primitive Sorting Algorithm",
      "type": "theory",
      "level": "medium",
      "strength": "Knows Java's Dual-Pivot Quicksort implementation.",
      "weakness": "`Arrays.sort(primitive[])` uses Dual-Pivot Quicksort."
    },
    {
      "q": "Identify the bug in this code:\n```java\nint[][] matrix = new int[3][3];\nfor (int r = 0; r < matrix.length; r++) {\n    for (int c = 0; c < matrix.length; c++) {\n        matrix[r][c] = r + c;\n    }\n}\n```",
      "options": [
        "Compilation error",
        "Using `matrix.length` for column bound works for square matrices but fails for rectangular or jagged matrices where `matrix[r].length` must be used",
        "r + c cannot be assigned to int",
        "c must start at 1"
      ],
      "answer": 1,
      "explain": "In non-square or jagged matrices, the number of columns in row `r` is `matrix[r].length`. Using `matrix.length` (number of rows) as the column bound causes logic bugs or out-of-bounds exceptions.",
      "topic": "2D Column Bound Trap",
      "type": "error",
      "level": "medium",
      "strength": "Identified fragile column bound assumption in 2D array traversal.",
      "weakness": "Always use `matrix[r].length` for the column loop bound."
    },
    {
      "q": "What does the following code print?\n```java\nint[] a = new int[5];\nArrays.fill(a, 1, 4, 9);\nSystem.out.println(Arrays.toString(a));\n```",
      "options": [
        "[9, 9, 9, 0, 0]",
        "[0, 9, 9, 9, 0]",
        "[9, 9, 9, 9, 0]",
        "[0, 9, 9, 0, 0]"
      ],
      "answer": 1,
      "explain": "`Arrays.fill(a, from, to, val)` fills range `[1, 4)` (indices 1, 2, 3) with 9. Index 0 and 4 remain 0. Output: `[0, 9, 9, 9, 0]`.",
      "topic": "Arrays.fill Range Output",
      "type": "output",
      "level": "medium",
      "strength": "Correctly applied range bounds in Arrays.fill.",
      "weakness": "Fills indices 1, 2, and 3 with 9; indices 0 and 4 remain 0."
    },
    {
      "q": "A medical heart monitor logs ECG pulse rates. A noise filter removes the single highest and single lowest outlier spikes before averaging the remaining readings. How is this calculated efficiently?",
      "options": [
        "`Arrays.sort(ecg); double sum = 0; for (int i = 1; i < ecg.length - 1; i++) sum += ecg[i]; double avg = sum / (ecg.length - 2);`",
        "Subtract max from min",
        "Divide total sum by ecg.length",
        "Zero out index 0"
      ],
      "answer": 0,
      "explain": "Sorting places the minimum at index 0 and maximum at `length - 1`. Summing indices `1` through `length - 2` and dividing by `length - 2` yields the trimmed mean.",
      "topic": "Trimmed Mean Outlier Removal",
      "type": "scenario",
      "level": "medium",
      "strength": "Implemented trimmed mean statistical calculation.",
      "weakness": "Sort array, sum from index 1 to `length - 2`, and divide by `length - 2`."
    },
    {
      "q": "What does `Arrays.toString(arr)` return for a 1D integer array `int[] arr = {1, 2, 3};`?",
      "options": [
        "`\"1 2 3\"`",
        "`\"[1, 2, 3]\"`",
        "`\"1, 2, 3\"`",
        "`\"{1, 2, 3}\"`"
      ],
      "answer": 1,
      "explain": "`Arrays.toString()` returns a bracketed, comma-delimited string representation: `\"[1, 2, 3]\"`.",
      "topic": "Arrays.toString Formatting",
      "type": "theory",
      "level": "easy",
      "strength": "Knows standard string representation format of Arrays.toString.",
      "weakness": "`Arrays.toString()` formats arrays as `[elem1, elem2, ...]`. "
    },
    {
      "q": "Why does this code fail to compile?\n```java\nint[] arr = {1, 2, 3};\nint len = arr.length();\n```",
      "options": [
        "length is not a method for arrays; it is a field and must be written as `arr.length`",
        "arr is not an object",
        "int cannot store length",
        "length() returns long"
      ],
      "answer": 0,
      "explain": "`length` is a field for arrays, not a method. Appending `()` causes: 'cannot find symbol: method length()'.",
      "topic": "Array length() Method Error",
      "type": "error",
      "level": "easy",
      "strength": "Distinguishes array field `.length` from method `.length()`.",
      "weakness": "Do not write `arr.length()`; use `arr.length` without parentheses."
    },
    {
      "q": "What does the following snippet print?\n```java\nint[] arr = {2, 4, 6, 8, 10};\nint idx = Arrays.binarySearch(arr, 6);\nSystem.out.println(idx);\n```",
      "options": [
        "1",
        "2",
        "3",
        "-3"
      ],
      "answer": 1,
      "explain": "Element 6 is located at index 2. Binary search returns its zero-based index: 2.",
      "topic": "Binary Search Exact Match Output",
      "type": "output",
      "level": "easy",
      "strength": "Found exact element index via binary search.",
      "weakness": "Element 6 is at index 2."
    },
    {
      "q": "A machine learning pipeline receives feature vectors of length 512. It must compute the Euclidean dot product between two vectors `a` and `b` of equal length. Which loop structure computes this correctly?",
      "options": [
        "`double dot = 0; for (int i = 0; i < a.length; i++) dot += a[i] * b[i];`",
        "`double dot = 0; for (int x : a) dot += x * b[x];`",
        "`double dot = Arrays.binarySearch(a, b);`",
        "`double dot = a.length * b.length;`"
      ],
      "answer": 0,
      "explain": "The dot product multiplies corresponding elements `a[i] * b[i]` and sums them across the vector length.",
      "topic": "Vector Dot Product Computation",
      "type": "scenario",
      "level": "easy",
      "strength": "Implemented vector dot product via indexed traversal.",
      "weakness": "Multiply corresponding elements `a[i] * b[i]` and accumulate into sum."
    },
    {
      "q": "What does this code print?\n```java\nint[][] m = {{1, 2}, {3, 4}};\nSystem.out.println(m[1][0] + m[0][1]);\n```",
      "options": [
        "5",
        "3",
        "7",
        "23"
      ],
      "answer": 0,
      "explain": "`m[1][0]` is 3. `m[0][1]` is 2. `3 + 2 = 5`.",
      "topic": "2D Array Cross Cell Sum",
      "type": "output",
      "level": "easy",
      "strength": "Accurately accessed 2D array coordinates.",
      "weakness": "`m[1][0] = 3` and `m[0][1] = 2`; 3 + 2 = 5."
    },
    {
      "q": "A student records quiz scores: `int[] scores = {85, 92, 78, 90};`. They want to calculate the average score as a `double`. Which formula avoids integer division truncation?",
      "options": [
        "`double avg = (double) sum / scores.length;`",
        "`double avg = sum / scores.length;`",
        "`double avg = (double)(sum / scores.length);`",
        "`double avg = sum / (scores.length * 1.0f);`"
      ],
      "answer": 0,
      "explain": "Casting `sum` to `double` before dividing ensures floating-point division is performed, preserving fractional averages.",
      "topic": "Array Average Precision",
      "type": "scenario",
      "level": "easy",
      "strength": "Avoided integer division truncation in array average calculation.",
      "weakness": "Cast `sum` to `double` prior to division: `(double) sum / length`."
    },
    {
      "q": "Can an array in Java have a length of 0 (`new int[0]`)?",
      "options": [
        "No, length must be at least 1",
        "Yes, zero-length arrays are valid objects and frequently used to represent empty collections without returning null",
        "No, it causes an IllegalArgumentException",
        "Only for String arrays"
      ],
      "answer": 1,
      "explain": "A zero-length array is completely valid. It is an instantiated array object with `.length == 0` and is an industry-standard pattern for returning empty results safely.",
      "topic": "Zero-Length Arrays",
      "type": "theory",
      "level": "medium",
      "strength": "Understands zero-length array validity and usage.",
      "weakness": "Zero-length arrays (`new int[0]`) are valid and avoid returning null."
    },
    {
      "q": "What is wrong with this array copy implementation?\n```java\nint[] a = {1, 2, 3};\nint[] b = new int[2];\nSystem.arraycopy(a, 0, b, 0, a.length);\n```",
      "options": [
        "System.arraycopy cannot copy ints",
        "Throws `ArrayIndexOutOfBoundsException` because `b` has length 2 and cannot accommodate 3 elements",
        "b must be null initially",
        "Source pos must be 1"
      ],
      "answer": 1,
      "explain": "`System.arraycopy` attempts to copy 3 elements into `b`, which only has capacity 2. It throws `ArrayIndexOutOfBoundsException` at runtime.",
      "topic": "System.arraycopy Destination Overflow",
      "type": "error",
      "level": "medium",
      "strength": "Spotted destination capacity overflow in System.arraycopy.",
      "weakness": "Destination array must have sufficient remaining capacity to hold copied elements."
    },
    {
      "q": "What is the output of this code?\n```java\nint[] a = {1, 2, 3};\nint[] b = a.clone();\nSystem.out.println((a == b) + \" \" + (a[0] == b[0]));\n```",
      "options": [
        "false true",
        "true true",
        "false false",
        "true false"
      ],
      "answer": 0,
      "explain": "`a == b` is false because `.clone()` allocates a distinct new array instance. `a[0] == b[0]` is true because primitive values are equal (`1 == 1`). Output: `false true`.",
      "topic": "Cloned Array Identity vs Element Equality",
      "type": "output",
      "level": "medium",
      "strength": "Distinguished cloned instance identity from element value equality.",
      "weakness": "Cloned array is a distinct object (`a != b`), but copied elements match (`1 == 1`)."
    },
    {
      "q": "A supermarket inventory system tracks item stock levels. A restocking alert must list all item indices where `stock[i] == 0`. What should the method return when no items are out of stock?",
      "options": [
        "`null`",
        "An empty array `new int[0]`",
        "A single-element array containing -1",
        "Throw a NullPointerException"
      ],
      "answer": 1,
      "explain": "Returning a zero-length array `new int[0]` is the standard Java best practice; it prevents `NullPointerException` in calling code that loops over results.",
      "topic": "Zero-Length Array Return Idiom",
      "type": "scenario",
      "level": "medium",
      "strength": "Follows industry pattern of returning empty arrays instead of null.",
      "weakness": "Return `new int[0]` instead of `null` to prevent caller NullPointerExceptions."
    },
    {
      "q": "How many elements can an array declared as `int[][] grid = new int[4][5];` store in total?",
      "options": [
        "9",
        "20",
        "4",
        "5"
      ],
      "answer": 1,
      "explain": "A 4x5 2D array contains 4 rows of 5 columns each, storing `4 * 5 = 20` elements.",
      "topic": "2D Array Capacity",
      "type": "theory",
      "level": "easy",
      "strength": "Calculates total capacity of 2D rectangular arrays.",
      "weakness": "Total elements in rectangular matrix = rows * columns."
    },
    {
      "q": "What is the issue with comparing two arrays using `==`?\n```java\nint[] a = {1, 2, 3};\nint[] b = {1, 2, 3};\nif (a == b) { System.out.println(\"Equal\"); }\n```",
      "options": [
        "Compile error: == cannot be used on arrays",
        "`==` compares memory addresses (references), not array element contents, so the condition evaluates to false",
        "Throws NullPointerException",
        "a and b are automatically merged"
      ],
      "answer": 1,
      "explain": "`==` tests reference identity (whether both variables point to the exact same heap object). Because `a` and `b` are separate array objects, `a == b` is false. Use `Arrays.equals(a, b)`.",
      "topic": "Array Reference Equality Trap",
      "type": "error",
      "level": "easy",
      "strength": "Avoids using `==` for array element content equality.",
      "weakness": "Use `Arrays.equals(a, b)` to compare element contents, not `==`."
    },
    {
      "q": "What does this code print?\n```java\nint[] a = {1, 2};\nint[] b = {1, 2};\nSystem.out.println((a == b) + \" \" + Arrays.equals(a, b));\n```",
      "options": [
        "true true",
        "false true",
        "true false",
        "false false"
      ],
      "answer": 1,
      "explain": "`a == b` compares references (different objects on heap -> false). `Arrays.equals(a, b)` compares element contents -> true. Output: `false true`.",
      "topic": "Reference vs Element Equality",
      "type": "output",
      "level": "easy",
      "strength": "Distinguishes reference identity from content equality.",
      "weakness": "`==` is false for distinct array instances; `Arrays.equals` is true."
    },
    {
      "q": "A video streaming player tracks buffer health across 60 seconds. A drop below 20% in any second triggers a bitrate downgrade. Which search pattern terminates as soon as the first substandard second is found?",
      "options": [
        "Linear search with early return/break: `for (int val : buffer) if (val < 20) { triggerDowngrade(); break; }`",
        "Summing all buffer values and checking the average",
        "Sorting the buffer array first",
        "Scanning the entire array twice"
      ],
      "answer": 0,
      "explain": "Early termination via `break` on the first failing condition saves CPU cycles and triggers responsive bitrate adjustments.",
      "topic": "Early Exit Quality Check",
      "type": "scenario",
      "level": "easy",
      "strength": "Used early loop termination for real-time quality alerting.",
      "weakness": "Break immediately upon encountering a failing condition to minimize latency."
    },
    {
      "q": "What is printed by this code?\n```java\nint[] arr = {10, 5, 20, 15};\nint target = 20;\nint foundIdx = -1;\nfor (int i = 0; i < arr.length; i++) {\n    if (arr[i] == target) { foundIdx = i; break; }\n}\nSystem.out.println(foundIdx);\n```",
      "options": [
        "0",
        "1",
        "2",
        "3"
      ],
      "answer": 2,
      "explain": "Element 20 is located at index 2. The loop breaks immediately and prints 2.",
      "topic": "Linear Search Index Output",
      "type": "output",
      "level": "easy",
      "strength": "Traced linear search target match and break index.",
      "weakness": "Target 20 is found at index 2."
    },
    {
      "q": "An audio synthesizer creates a 1-second sine wave at 44.1 kHz sampling rate. How many elements must the audio buffer array hold?",
      "options": [
        "441",
        "4,410",
        "44,100",
        "441,000"
      ],
      "answer": 2,
      "explain": "A 44.1 kHz sampling rate requires 44,100 samples per second. An array of `new double[44100]` is required.",
      "topic": "Audio Buffer Sizing",
      "type": "scenario",
      "level": "easy",
      "strength": "Correctly sized audio sample buffer based on sampling frequency.",
      "weakness": "At 44.1 kHz, 1 second of audio requires exactly 44,100 sample elements."
    }
  ],
  "4": [
    {
      "q": "What is method inlining performed by the JVM Just-In-Time (JIT) compiler?",
      "options": [
        "Writing all method code on a single line of text",
        "Replacing a method call site directly with the body of the called method to eliminate call stack overhead",
        "Converting static methods to instance methods",
        "Executing methods asynchronously"
      ],
      "answer": 1,
      "explain": "Method inlining is an optimization where the JIT compiler replaces method call instructions with the method's actual bytecode body, eliminating function call overhead and branch penalties.",
      "topic": "Method Inlining Optimization",
      "type": "theory",
      "level": "hard",
      "strength": "Understands JIT compilation method inlining optimization.",
      "weakness": "JIT inlining replaces method calls with the method body to avoid call overhead."
    },
    {
      "q": "Why does this overloaded invocation fail to compile?\n```java\npublic static void print(int a, double b) {}\npublic static void print(double a, int b) {}\n\npublic static void main(String[] args) {\n    print(5, 5);\n}\n```",
      "options": [
        "5 is not a valid number",
        "Reference to `print` is ambiguous: both `print(int, double)` and `print(double, int)` match with equal conversion specificity",
        "print cannot take 2 parameters",
        "main cannot call print"
      ],
      "answer": 1,
      "explain": "Both arguments are `int`. To match `print(int, double)`, the second argument widens. To match `print(double, int)`, the first widens. Neither is more specific, causing: 'reference to print is ambiguous'.",
      "topic": "Ambiguous Overload Call Error",
      "type": "error",
      "level": "hard",
      "strength": "Identified ambiguous method overload collision.",
      "weakness": "Ambiguous widening conversions on overloaded methods cause compile-time ambiguity errors."
    },
    {
      "q": "What is the output of this code?\n```java\npublic static void test(int a, Integer b) { System.out.print(\"A \"); }\npublic static void test(Integer a, int b) { System.out.print(\"B \"); }\n\npublic static void main(String[] args) {\n    test(1, Integer.valueOf(2));\n}\n```",
      "options": [
        "A ",
        "B ",
        "A B ",
        "Ambiguous compilation error"
      ],
      "answer": 0,
      "explain": "`test(1, Integer.valueOf(2))` passes an `int` and an `Integer`. This exact type match fits `test(int, Integer)` without requiring dual conversions. Outputs `A `.",
      "topic": "Exact Match Autoboxing Overload",
      "type": "output",
      "level": "hard",
      "strength": "Recognized exact signature match over ambiguous dual-boxing.",
      "weakness": "Argument types `int, Integer` match `test(int, Integer)` exactly, outputting 'A '."
    },
    {
      "q": "You are building a high-performance pathfinding algorithm (like A* or DFS) in a game engine. Deep recursion causes a `StackOverflowError` on large maps. How can this algorithm be refactored to handle arbitrarily large maps without call stack exhaustion?",
      "options": [
        "Increase JVM stack size with `-Xss` to 1GB",
        "Convert the recursive algorithm to an iterative algorithm using an explicit heap-allocated `Deque`/`Stack` data structure",
        "Use tail recursion without base case",
        "Change return types to float"
      ],
      "answer": 1,
      "explain": "The call stack has limited memory (~1MB). Refactoring to an iterative loop using an explicit stack on the heap allows scaling to millions of nodes limited only by heap capacity.",
      "topic": "Iterative Stack Conversion",
      "type": "scenario",
      "level": "hard",
      "strength": "Mastered converting recursion to an explicit heap-based iterative stack to prevent StackOverflowError.",
      "weakness": "Convert deep recursion to an iterative loop with a heap-allocated Stack to handle large inputs."
    },
    {
      "q": "What is a stack frame in the JVM execution model?",
      "options": [
        "A block of memory on the heap storing instance fields",
        "A data structure allocated on the thread's call stack for each method invocation, storing its local variables, operand stack, and return address",
        "A graphical window created by Swing",
        "A synchronization lock"
      ],
      "answer": 1,
      "explain": "Every time a method is invoked, a new stack frame is pushed onto the thread's call stack. It holds local variables, intermediate calculations (operand stack), and is popped upon return.",
      "topic": "JVM Stack Frame Lifecycle",
      "type": "theory",
      "level": "medium",
      "strength": "Deep understanding of JVM call stack frames and method execution.",
      "weakness": "Each method call creates a stack frame containing local variables and operand stack."
    },
    {
      "q": "Identify the compilation issue in this method:\n```java\npublic int sum(int a, int b) {\n    return a + b;\n    System.out.println(\"Finished\");\n}\n```",
      "options": [
        "a + b is an invalid return expression",
        "Unreachable statement: `System.out.println(\"Finished\");` appears after an unconditional `return` statement",
        "sum must be void",
        "println cannot print strings inside sum"
      ],
      "answer": 1,
      "explain": "Any code placed immediately after an unconditional `return` statement within the same block is unreachable and causes a compile-time error.",
      "topic": "Unreachable Code After Return",
      "type": "error",
      "level": "easy",
      "strength": "Recognized unreachable statement placed after return.",
      "weakness": "Statements placed after an unconditional `return` are unreachable and rejected by the compiler."
    },
    {
      "q": "What is the output of this code?\n```java\npublic static void show(Object o) { System.out.print(\"Object \"); }\npublic static void show(String s) { System.out.print(\"String \"); }\n\npublic static void main(String[] args) {\n    show(\"Hello\");\n    show(123);\n}\n```",
      "options": [
        "String Object ",
        "Object Object ",
        "String String ",
        "Object String "
      ],
      "answer": 0,
      "explain": "`show(\"Hello\")`: `String` matches the most specific overload `show(String)`. `show(123)`: `Integer` autoboxes and matches `show(Object)` because Integer does not extend String. Output: `String Object `.",
      "topic": "Object vs String Overload Resolution",
      "type": "output",
      "level": "medium",
      "strength": "Correctly resolved specificity between Object and String overloads.",
      "weakness": "\"Hello\" selects specific `show(String)`; 123 falls back to `show(Object)`."
    },
    {
      "q": "You are designing a mathematical utility library for an engineering department. You need a method that computes the area of a circle, rectangle, and triangle. How should these methods be designed according to Java clean code conventions?",
      "options": [
        "Create 3 completely separate classes with different names",
        "Use method overloading with the common name `area`: `area(double radius)`, `area(double width, double height)`, etc.",
        "Name them `area1`, `area2`, `area3`",
        "Pass an integer opcode flag to a single giant switch method"
      ],
      "answer": 1,
      "explain": "Method overloading provides a clean, unified API (`area(...)`) where the caller's parameter types naturally determine which geometric calculation executes.",
      "topic": "API Design via Overloading",
      "type": "scenario",
      "level": "easy",
      "strength": "Applied method overloading for cohesive mathematical utility APIs.",
      "weakness": "Use method overloading to provide intuitive, uniform method names for related operations."
    },
    {
      "q": "What is the difference between actual parameters (arguments) and formal parameters?",
      "options": [
        "Actual parameters are in the method declaration; formal parameters are in the call site",
        "Formal parameters are the variables defined in the method header; actual parameters (arguments) are the concrete values passed during the method invocation",
        "Formal parameters are always primitive; actual parameters are objects",
        "They are identical synonyms with no distinction"
      ],
      "answer": 1,
      "explain": "Formal parameters are the placeholders declared in the method signature (`int a, int b`). Actual arguments are the values supplied at the call site (`add(5, 10)`).",
      "topic": "Formal vs Actual Parameters",
      "type": "theory",
      "level": "easy",
      "strength": "Distinguishes formal parameter declarations from actual arguments.",
      "weakness": "Formal parameters are declared in the method header; actual arguments are passed at call time."
    },
    {
      "q": "A billing engine requires calculating compound interest: `A = P * (1 + r/n)^(n*t)`. Should this be implemented recursively or iteratively using `Math.pow()`?",
      "options": [
        "Recursively with 1000 calls",
        "Iteratively using `Math.pow()` because it executes in O(1) time and avoids unnecessary stack frame allocation",
        "Neither, compound interest is impossible in Java",
        "Using a switch statement"
      ],
      "answer": 1,
      "explain": "While mathematically expressible recursively, direct calculation using closed-form formulas like `Math.pow()` is O(1), instantaneous, and completely eliminates stack overhead.",
      "topic": "Closed-Form vs Recursion Choice",
      "type": "scenario",
      "level": "easy",
      "strength": "Prefers closed-form mathematical functions over redundant recursive overhead.",
      "weakness": "Use direct closed-form mathematical functions like `Math.pow()` instead of recursive iterations."
    },
    {
      "q": "When a method reassigns an object reference parameter: `void reset(int[] arr) { arr = new int[5]; }`, what happens to the caller's array?",
      "options": [
        "The caller's reference now points to the new array of size 5",
        "The caller's reference is completely unchanged; it still points to the original array",
        "The original array is immediately garbage collected",
        "Compilation error: cannot reassign parameter"
      ],
      "answer": 1,
      "explain": "The parameter `arr` is a copy of the reference address. Reassigning `arr` to a new object overwrites only the local parameter reference. The caller's reference remains unchanged.",
      "topic": "Reference Parameter Reassignment",
      "type": "theory",
      "level": "hard",
      "strength": "Distinguishes mutating an object from reassigning an object reference parameter.",
      "weakness": "Reassigning an object reference parameter inside a method does NOT change the caller's reference."
    },
    {
      "q": "Why does this overloaded method call fail?\n```java\npublic static void test(String s) {}\npublic static void test(Integer i) {}\n\npublic static void main(String[] args) {\n    test(null);\n}\n```",
      "options": [
        "null is not allowed in Java",
        "Reference to `test` is ambiguous: `null` is a valid literal for both String and Integer, and neither class is a subtype of the other",
        "String cannot be overloaded",
        "test requires two arguments"
      ],
      "answer": 1,
      "explain": "`null` matches any reference type. Because neither `String` nor `Integer` extends the other, the compiler cannot determine which overload is more specific, producing an ambiguity error.",
      "topic": "Ambiguous Null Overload Call",
      "type": "error",
      "level": "hard",
      "strength": "Understands overload ambiguity when passing literal null to unrelated object types.",
      "weakness": "Passing `null` to overloaded methods with unrelated reference types causes ambiguity errors; cast the null explicitly: `test((String) null)`."
    },
    {
      "q": "What does this snippet print?\n```java\npublic static void test(long x) { System.out.print(\"long \"); }\npublic static void test(Integer x) { System.out.print(\"Integer \"); }\n\npublic static void main(String[] args) {\n    int n = 5;\n    test(n);\n}\n```",
      "options": [
        "long ",
        "Integer ",
        "Compilation error",
        "Runtime exception"
      ],
      "answer": 0,
      "explain": "Java's overload resolution rules prioritize primitive widening (`int` -> `long`) over boxing (`int` -> `Integer`). Outputs `long `.",
      "topic": "Widening Beats Boxing in Overload",
      "type": "output",
      "level": "hard",
      "strength": "Mastered Java precedence rule: primitive widening takes priority over boxing.",
      "weakness": "Widening beats boxing: `int` widens to `long` instead of boxing to `Integer`."
    },
    {
      "q": "A e-commerce checkout method `public OrderReceipt processCheckout(Cart cart, User user)` needs to ensure that the passed `cart` object cannot be modified by any external concurrent thread during processing. How can the method protect the cart?",
      "options": [
        "Cast cart to Object",
        "Create a defensive copy of the cart's items upon entry before processing calculations",
        "Set `cart = null`",
        "Declare cart as static"
      ],
      "answer": 1,
      "explain": "Defensive copying isolates the method from external changes made by callers or concurrent threads after the method has begun execution.",
      "topic": "Defensive Copying Pattern",
      "type": "scenario",
      "level": "medium",
      "strength": "Applied defensive copying to protect mutable parameter state.",
      "weakness": "Create defensive copies of mutable arguments to ensure internal state integrity."
    },
    {
      "q": "Can a method have the same name as its declaring class?",
      "options": [
        "No, that is strictly prohibited",
        "Yes, but if it has a return type (e.g. `void MyClass()`), it is treated as a regular method, NOT a constructor",
        "Yes, and it automatically becomes the default constructor",
        "It causes a runtime ClassFormatError"
      ],
      "answer": 1,
      "explain": "A method can share the class name, but if it declares a return type, the compiler treats it as a standard method (though bad practice), not a constructor.",
      "topic": "Method vs Constructor Naming",
      "type": "theory",
      "level": "medium",
      "strength": "Distinguishes constructors from methods that happen to share the class name.",
      "weakness": "Constructors have no return type; a method with the class name and a return type is just a regular method."
    },
    {
      "q": "Identify the compilation error in this method header:\n```java\npublic int add(int a, int a) {\n    return a + a;\n}\n```",
      "options": [
        "add cannot return int",
        "Variable 'a' is already defined in the method parameter list",
        "Parameter types cannot be identical",
        "return statement is invalid"
      ],
      "answer": 1,
      "explain": "All formal parameters within a method signature must have unique names. Declaring two parameters named `a` causes: 'variable a is already defined'.",
      "topic": "Duplicate Parameter Name Error",
      "type": "error",
      "level": "easy",
      "strength": "Spotted duplicate parameter name in method header.",
      "weakness": "Formal parameter names in a method header must be distinct."
    },
    {
      "q": "What does this code print?\n```java\npublic static int gcd(int a, int b) {\n    return (b == 0) ? a : gcd(b, a % b);\n}\npublic static void main(String[] args) {\n    System.out.println(gcd(48, 18));\n}\n```",
      "options": [
        "6",
        "18",
        "2",
        "3"
      ],
      "answer": 0,
      "explain": "Euclidean algorithm: `gcd(48, 18)` -> `gcd(18, 48 % 18 = 12)` -> `gcd(12, 18 % 12 = 6)` -> `gcd(6, 12 % 6 = 0)` -> returns 6.",
      "topic": "Euclidean GCD Recursion",
      "type": "output",
      "level": "medium",
      "strength": "Traced Euclidean algorithm for greatest common divisor.",
      "weakness": "GCD of 48 and 18 is 6."
    },
    {
      "q": "A file system crawler traverses directory trees on a server. Since directory structures can have arbitrary nested depth (folders containing folders), which programming paradigm is the most natural fit?",
      "options": [
        "A single three-level nested for loop",
        "Recursion: a method that lists files in the current folder and calls itself recursively on every subdirectory encountered",
        "A 100-case switch statement",
        "Writing to a temporary text file"
      ],
      "answer": 1,
      "explain": "Hierarchical tree structures like file systems and organizational charts are inherently recursive; recursive traversal is concise, elegant, and naturally handles arbitrary depth.",
      "topic": "Recursive Tree Traversal Pattern",
      "type": "scenario",
      "level": "easy",
      "strength": "Identified recursive traversal as the natural design for hierarchical data structures.",
      "weakness": "Use recursion for tree and nested directory traversals."
    },
    {
      "q": "Can a method in Java return multiple values simultaneously?",
      "options": [
        "Yes, using Python syntax: `return a, b;`",
        "No, Java methods can return at most one value (which may be an object, array, or collection encapsulating multiple data items)",
        "Yes, by listing multiple types in the header: `public int, String get();`",
        "Only if marked with the `multi` keyword"
      ],
      "answer": 1,
      "explain": "Java strictly permits at most one return value. To return multiple values, bundle them into an array, a custom class object, or a record.",
      "topic": "Single Return Value Constraint",
      "type": "theory",
      "level": "easy",
      "strength": "Understands single return value constraint and encapsulation bundling.",
      "weakness": "Java returns at most one value; bundle multiple values into an object or array."
    },
    {
      "q": "A sensor network gateway aggregates readings from 10 sensor nodes. If any node fails to respond within 500ms, the method should return a fallback default value of `-1.0`. Which method signature and design represents this?",
      "options": [
        "`public double getReadingWithFallback(int nodeId, double defaultValue)`",
        "`public void getReading()`",
        "`public static double reading`",
        "`public int error()`"
      ],
      "answer": 0,
      "explain": "Explicitly providing a `defaultValue` parameter communicates the fallback contract cleanly, ensuring the caller controls resilience policy.",
      "topic": "Resilient Fallback Parameter Pattern",
      "type": "scenario",
      "level": "easy",
      "strength": "Designed robust API parameterization for fallback handling.",
      "weakness": "Allow callers to supply fallback values as parameters to handle failures gracefully."
    },
    {
      "q": "How does the Java compiler resolve overloaded methods when an argument can match multiple widened types (e.g. `test(int)` vs `test(long)`) when called with a `short`?",
      "options": [
        "Throws an ambiguous method call error",
        "Selects the most specific compatible method (widens `short` to `int` before widening to `long`)",
        "Picks randomly at runtime",
        "Converts to double"
      ],
      "answer": 1,
      "explain": "Java's overload resolution prefers the most specific matching method. Widening from `short` to `int` is closer and more specific than widening to `long`.",
      "topic": "Overload Resolution Specificity",
      "type": "theory",
      "level": "hard",
      "strength": "Mastery of overload resolution and type widening hierarchy.",
      "weakness": "Overload resolution picks the most specific compatible signature."
    },
    {
      "q": "What is the bug in this swap method?\n```java\npublic static void swap(int a, int b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n```",
      "options": [
        "Syntax error: temp must be declared outside swap",
        "It modifies only local copies; caller's variables remain unchanged because primitives are passed by value",
        "Throws NullPointerException",
        "Causes an infinite loop"
      ],
      "answer": 1,
      "explain": "In Java, primitives are passed by value. `swap` swaps its local copies on its stack frame. The caller's variables are unaffected.",
      "topic": "Primitive Swap Pass-by-Value Bug",
      "type": "error",
      "level": "medium",
      "strength": "Recognized the classic ineffective primitive swap in Java.",
      "weakness": "Swapping primitive parameters does not affect caller variables because Java is pass-by-value."
    },
    {
      "q": "What does this code print?\n```java\npublic static void reassign(int[] arr) {\n    arr = new int[]{10, 20};\n}\npublic static void main(String[] args) {\n    int[] data = {1, 2};\n    reassign(data);\n    System.out.println(data[0]);\n}\n```",
      "options": [
        "10",
        "1",
        "20",
        "NullPointerException"
      ],
      "answer": 1,
      "explain": "Reassigning `arr` inside `reassign()` updates only the local parameter reference. The caller's reference `data` continues to point to `{1, 2}`. Outputs 1.",
      "topic": "Parameter Reassignment Output",
      "type": "output",
      "level": "medium",
      "strength": "Correctly recognized that parameter reassignment does not affect caller reference.",
      "weakness": "Reassigning an object parameter to a new object does NOT reassign the caller's reference."
    },
    {
      "q": "A cryptography algorithm calculates `BigInteger.modPow(exp, mod)` using repeated squaring: `power(base, exp) = (power(base, exp/2))^2`. Why is this recursive formulation superior to naive `base * power(base, exp - 1)`?",
      "options": [
        "It uses zero stack memory",
        "It reduces time complexity from linear O(N) to logarithmic O(log N)",
        "It prevents rounding errors in floats",
        "It eliminates the need for base cases"
      ],
      "answer": 1,
      "explain": "Repeated squaring halves the exponent at each step, slashing the number of recursive operations from N to log2(N).",
      "topic": "Divide-and-Conquer Logarithmic Recursion",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands logarithmic divide-and-conquer efficiency in exponentiation.",
      "weakness": "Divide-and-conquer recursion (`exp / 2`) achieves O(log N) performance compared to O(N) linear steps."
    },
    {
      "q": "What defines a method's signature in Java?",
      "options": [
        "Method name and return type",
        "Method name and parameter list (types and order)",
        "Method name, parameter list, and access modifier",
        "Method name, return type, and thrown exceptions"
      ],
      "answer": 1,
      "explain": "In Java, a method's signature consists solely of the method name and the number, types, and order of its parameters. Return type and access modifiers are NOT part of the signature.",
      "topic": "Method Signature",
      "type": "theory",
      "level": "easy",
      "strength": "Understands the exact components of a Java method signature.",
      "weakness": "A method signature consists only of the method name and parameter types list."
    },
    {
      "q": "Why does the following recursive method crash at runtime for `countDown(3)`?\n```java\npublic static void countDown(int n) {\n    System.out.println(n);\n    if (n == 0) return;\n    countDown(n);\n}\n```",
      "options": [
        "n == 0 is an invalid condition",
        "`countDown(n)` passes `n` instead of `n - 1`, making no progress toward the base case and causing `StackOverflowError`",
        "System.out.println cannot be called recursively",
        "return cannot be used in void methods"
      ],
      "answer": 1,
      "explain": "The recursive call passes `n` without decrementing. `n` never reaches 0, producing infinite recursion and a `StackOverflowError`.",
      "topic": "Recursion Non-Converging Bug",
      "type": "error",
      "level": "easy",
      "strength": "Caught failure to reduce recursive argument toward base case.",
      "weakness": "Recursive steps must modify parameters to progress toward the base case."
    },
    {
      "q": "What is printed by this code?\n```java\npublic static boolean isEven(int n) {\n    if (n == 0) return true;\n    return isOdd(n - 1);\n}\npublic static boolean isOdd(int n) {\n    if (n == 0) return false;\n    return isEven(n - 1);\n}\npublic static void main(String[] args) {\n    System.out.println(isEven(4));\n}\n```",
      "options": [
        "true",
        "false",
        "StackOverflowError",
        "Compilation error"
      ],
      "answer": 0,
      "explain": "Mutual recursion: `isEven(4)` -> `isOdd(3)` -> `isEven(2)` -> `isOdd(1)` -> `isEven(0)` -> returns `true`.",
      "topic": "Mutual Recursion Parity Output",
      "type": "output",
      "level": "medium",
      "strength": "Traced indirect mutual recursion execution.",
      "weakness": "4 is even; mutual recursion reduces to `isEven(0) == true`."
    },
    {
      "q": "A banking transaction service executes customer transfers. A junior developer writes: `public void transfer(Account from, Account to, double amount)`. What defensive checks should be the very first statements inside the method?",
      "options": [
        "Print 'Transfer Started'",
        "Parameter validation (preconditions): verify `from != null`, `to != null`, `from != to`, and `amount > 0` before modifying balances",
        "Immediately deduct funds from `from`",
        "Reassign `from` to a new Account object"
      ],
      "answer": 1,
      "explain": "Defensive programming requires validating method preconditions first to reject invalid states (null pointers, negative transfer amounts) before any state mutations occur.",
      "topic": "Defensive Precondition Validation",
      "type": "scenario",
      "level": "easy",
      "strength": "Employed defensive precondition validation at method boundaries.",
      "weakness": "Validate all arguments for null and valid ranges at the start of public methods."
    },
    {
      "q": "What happens when an expression calls a method with `void` return type inside `System.out.println(myVoidMethod())`?",
      "options": [
        "Prints \"void\"",
        "Prints null",
        "Compilation error: 'void' type not allowed here",
        "Throws a NullPointerException"
      ],
      "answer": 2,
      "explain": "A `void` method produces no value. Attempting to pass its result to `println` or assign it to a variable is illegal and causes a compile error: 'void type not allowed here'.",
      "topic": "Void Expression Invalidation",
      "type": "theory",
      "level": "easy",
      "strength": "Recognized that void method invocations cannot be used as expression arguments.",
      "weakness": "Void methods return no value and cannot be passed to `println` or assignments."
    },
    {
      "q": "Identify the bug in this Fibonacci implementation:\n```java\npublic static int fib(int n) {\n    if (n == 0) return 0;\n    if (n == 1) return 1;\n    return fib(n - 1) + fib(n);\n}\n```",
      "options": [
        "fib(0) should be 1",
        "The second recursive call is `fib(n)` instead of `fib(n - 2)`, causing infinite recursion and `StackOverflowError`",
        "fib cannot return int",
        "Missing base case"
      ],
      "answer": 1,
      "explain": "`fib(n)` calls `fib(n)` with the exact same argument, entering an immediate infinite recursion loop.",
      "topic": "Fibonacci Infinite Recursion Bug",
      "type": "error",
      "level": "easy",
      "strength": "Spotted infinite recursion in second recursive call.",
      "weakness": "Standard Fibonacci recursion must call `fib(n - 1) + fib(n - 2)`."
    },
    {
      "q": "What is tail recursion, and does the standard Java compiler (javac) optimize it with Tail Call Optimization (TCO)?",
      "options": [
        "Tail recursion is when the recursive call is the very last operation performed before returning; standard Java does NOT optimize it (it still grows stack frames)",
        "Tail recursion occurs at the start of a method; Java always converts it to a while loop",
        "Tail recursion is recursion with two base cases",
        "Java has enforced TCO since Java 1.0"
      ],
      "answer": 0,
      "explain": "In tail recursion, the recursive call is the final statement. Unlike functional languages, standard JVMs do NOT implement automatic Tail Call Optimization (TCO), so stack frames still accumulate.",
      "topic": "Tail Recursion & TCO",
      "type": "theory",
      "level": "hard",
      "strength": "Understands tail recursion and the absence of TCO in standard JVMs.",
      "weakness": "Standard Java does not optimize tail recursion; deep recursion still causes StackOverflowError."
    },
    {
      "q": "Identify the bug in this array-modifying method:\n```java\npublic static void clearArray(int[] arr) {\n    arr = null;\n}\n```",
      "options": [
        "Throws NullPointerException",
        "Does not nullify the caller's array reference because `arr` is a local reference copy passed by value",
        "Compilation error: cannot assign null to array",
        "Arrays cannot be passed to static methods"
      ],
      "answer": 1,
      "explain": "Setting `arr = null` updates only the local parameter variable. The caller's reference still points to the array on the heap.",
      "topic": "Parameter Reference Nullification Bug",
      "type": "error",
      "level": "medium",
      "strength": "Understands that nullifying a parameter reference does not affect the caller.",
      "weakness": "Setting an object parameter to null does not nullify the caller's reference."
    },
    {
      "q": "What does the following recursive code print?\n```java\npublic static void printNums(int n) {\n    if (n == 0) return;\n    printNums(n - 1);\n    System.out.print(n + \" \");\n}\npublic static void main(String[] args) {\n    printNums(3);\n}\n```",
      "options": [
        "3 2 1 ",
        "1 2 3 ",
        "3 2 1 0 ",
        "0 1 2 3 "
      ],
      "answer": 1,
      "explain": "Because the recursive call precedes the print statement, printing occurs during call stack unwinding: `1`, then `2`, then `3`. Output: `1 2 3 `.",
      "topic": "Recursion Unwinding Print Order",
      "type": "output",
      "level": "medium",
      "strength": "Recognized print-after-recursive-call execution order during stack unwinding.",
      "weakness": "Printing after the recursive call executes in reverse (bottom-up unwinding) order: 1 2 3."
    },
    {
      "q": "A recursive maze solver marks visited cells with `'.'` and backtracks if it hits a dead end by unmarking the cell back to `' '`. What algorithmic technique is this?",
      "options": [
        "Greedy search",
        "Backtracking: exploring tentative solutions recursively and undoing state changes when constraints are violated",
        "Dynamic programming tabulation",
        "Binary search"
      ],
      "answer": 1,
      "explain": "Backtracking builds candidates incrementally and abandons (backtracks) a candidate as soon as it determines the candidate cannot yield a valid solution.",
      "topic": "Backtracking Algorithm Paradigm",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands recursive backtracking and state restoration.",
      "weakness": "Backtracking explores candidate paths recursively, undoing state mutations upon dead ends."
    },
    {
      "q": "Can two methods in the same class have the exact same name and parameter list but different return types?",
      "options": [
        "Yes, the compiler chooses based on how the caller uses the return value",
        "No, this causes a compilation error because return type is not part of the method signature for overloading",
        "Yes, but only if one is void",
        "Yes, if they have different access modifiers"
      ],
      "answer": 1,
      "explain": "Overloading requires different parameter lists. Differing only by return type is ambiguous and causes a compile-time error: 'method already defined'.",
      "topic": "Method Overloading Rules",
      "type": "theory",
      "level": "easy",
      "strength": "Recognized that return type alone cannot overload a method.",
      "weakness": "Methods cannot be overloaded based solely on different return types."
    },
    {
      "q": "What compilation error occurs here?\n```java\npublic class MathHelper {\n    public static int square(int x) {\n        return x * x;\n    }\n}\n// in another class:\nint res = square(5);\n```",
      "options": [
        "5 is an invalid argument",
        "Cannot find symbol: method square(int) must be referenced via class name `MathHelper.square(5)` or imported statically",
        "square cannot be static",
        "res must be double"
      ],
      "answer": 1,
      "explain": "Static methods belonging to another class must be qualified by the class name (`MathHelper.square(5)`) or imported via `import static`.",
      "topic": "Unqualified Static Method Error",
      "type": "error",
      "level": "easy",
      "strength": "Recognized missing class qualification on external static method.",
      "weakness": "Qualify external static methods with their class name: `ClassName.methodName()`."
    },
    {
      "q": "What is the output of this code?\n```java\npublic static int sum(int... nums) {\n    int total = 0;\n    for (int n : nums) total += n;\n    return total;\n}\npublic static void main(String[] args) {\n    int[] arr = {10, 20, 30};\n    System.out.println(sum(arr));\n}\n```",
      "options": [
        "60",
        "3",
        "0",
        "Compilation error: array cannot be passed to varargs"
      ],
      "answer": 0,
      "explain": "In Java, an explicit array `arr` can be passed directly as a varargs argument. It is accepted as the varargs array, summing elements: `10 + 20 + 30 = 60`.",
      "topic": "Passing Array to Varargs Output",
      "type": "output",
      "level": "medium",
      "strength": "Understands that array instances can be passed directly to varargs parameters.",
      "weakness": "An existing array can be passed directly to a varargs method parameter."
    },
    {
      "q": "An enterprise billing service calculates tiered volume discounts. The calculation is complex. To keep the method under 25 lines and readable, what refactoring technique should be applied?",
      "options": [
        "Inline all calculations into one massive 500-line method",
        "Extract Method refactoring: break helper calculations into private auxiliary methods (e.g. `calculateBaseTier()`, `applyVat()`)",
        "Use global static variables to share state",
        "Replace variables with single-letter names"
      ],
      "answer": 1,
      "explain": "Extract Method refactoring decomposes complex logic into small, focused, testable private helper methods, improving code readability and maintainability.",
      "topic": "Extract Method Refactoring",
      "type": "scenario",
      "level": "easy",
      "strength": "Applied Extract Method refactoring to maintain clean code standards.",
      "weakness": "Break long methods into smaller private helper methods with clear descriptive names."
    },
    {
      "q": "What is the default return value of a recursive method that reaches the end of its body without executing a `return` statement when declared to return an `int`?",
      "options": [
        "0",
        "-1",
        "Compilation error: missing return statement",
        "Throws a MissingReturnException"
      ],
      "answer": 2,
      "explain": "In Java, any non-void method must ensure all possible execution paths terminate with a valid `return` statement or thrown exception. Reaching the end without a return causes a compile-time error.",
      "topic": "Missing Return Path Error",
      "type": "theory",
      "level": "easy",
      "strength": "Understands compiler enforcement of return statements on all control flow paths.",
      "weakness": "All execution paths in non-void methods must end with a `return` statement."
    },
    {
      "q": "Why does this code cause a compiler error?\n```java\npublic void doWork() {\n    return 5;\n}\n```",
      "options": [
        "5 is not a valid integer",
        "Incompatible types: cannot return a value from a method with void result type",
        "doWork must be private",
        "return must be in braces"
      ],
      "answer": 1,
      "explain": "A method declared with `void` return type cannot return any value or expression.",
      "topic": "Returning Value from Void Method",
      "type": "error",
      "level": "easy",
      "strength": "Caught returning a value from a void method.",
      "weakness": "A `void` method cannot return a value."
    },
    {
      "q": "What is the maximum number of dimensions a method can return as an array in Java (e.g. `int[][][]`)?",
      "options": [
        "Only 1D",
        "Only 2D",
        "Up to 255 dimensions (the JVM limit for array dimensions)",
        "Unlimited"
      ],
      "answer": 2,
      "explain": "The JVM specification limits array types to a maximum of 255 dimensions.",
      "topic": "JVM Array Dimension Limit",
      "type": "theory",
      "level": "hard",
      "strength": "Knows JVM architectural limits on multidimensional array returns.",
      "weakness": "The JVM supports up to 255 dimensions for array types."
    },
    {
      "q": "What error occurs in this code snippet?\n```java\npublic static int calc(int n) {\n    while (n > 0) {\n        return n;\n    }\n}\n```",
      "options": [
        "n cannot be decremented",
        "Missing return statement: if `n <= 0`, the while loop never executes, leaving the method without a return",
        "while cannot be inside a method",
        "return cannot be inside a while loop"
      ],
      "answer": 1,
      "explain": "The compiler detects that if `n <= 0`, the while loop is bypassed entirely, leaving no return statement for the method.",
      "topic": "Conditional Loop Missing Return",
      "type": "error",
      "level": "medium",
      "strength": "Recognized missing return when loop is bypassed.",
      "weakness": "Methods must provide a fallback return outside loops in case the loop condition is false."
    },
    {
      "q": "What is the output of this overloaded method call?\n```java\npublic static void test(int a) { System.out.print(\"int \"); }\npublic static void test(double a) { System.out.print(\"double \"); }\n\npublic static void main(String[] args) {\n    test(5);\n    test(5.0);\n    test('A');\n}\n```",
      "options": [
        "int double double ",
        "int double int ",
        "double double double ",
        "int int int "
      ],
      "answer": 1,
      "explain": "`test(5)` calls `test(int)`. `test(5.0)` calls `test(double)`. `test('A')`: `char` widens to `int` before `double`, selecting `test(int)`. Output: `int double int `.",
      "topic": "Overload Widening Specificity Output",
      "type": "output",
      "level": "medium",
      "strength": "Accurately resolved primitive widening to overloaded methods.",
      "weakness": "`char` widens directly to `int`, selecting `test(int)` over `test(double)`."
    },
    {
      "q": "A developer is implementing a recursive merge sort `mergeSort(int[] arr, int left, int right)`. What is the correct base case condition?",
      "options": [
        "`if (left >= right) return;` (subarray has 0 or 1 element and is already sorted)",
        "`if (left == 0) return;`",
        "`if (right == arr.length) return;`",
        "`if (arr[left] == arr[right]) return;`"
      ],
      "answer": 0,
      "explain": "In divide-and-conquer sorting, a subarray with 0 or 1 element (`left >= right`) is trivially sorted and requires no further splitting.",
      "topic": "Divide-and-Conquer Base Case",
      "type": "scenario",
      "level": "medium",
      "strength": "Formulated correct base case for recursive divide-and-conquer algorithms.",
      "weakness": "A subarray of length 0 or 1 (`left >= right`) is trivially sorted; return immediately."
    },
    {
      "q": "What happens when a method declared with return type `void` executes a `return;` statement without a value?",
      "options": [
        "Compilation error: void methods cannot contain return statements",
        "The method terminates immediately and control returns to the caller",
        "The JVM throws a NullPointerException",
        "It returns null to the caller"
      ],
      "answer": 1,
      "explain": "A `return;` statement without an expression is completely valid in `void` methods; it immediately exits the method and returns control to the caller.",
      "topic": "Void Method Return Statement",
      "type": "theory",
      "level": "easy",
      "strength": "Knows that void methods can use `return;` for early exit.",
      "weakness": "`return;` in a void method exits early without returning a value."
    },
    {
      "q": "Why does this method fail to compile?\n```java\npublic void process() {\n    int a = 10;\n    int a = 20;\n}\n```",
      "options": [
        "a cannot be assigned 20",
        "Variable 'a' is already defined in scope",
        "process cannot be void",
        "Local variables must be final"
      ],
      "answer": 1,
      "explain": "Declaring two local variables with the exact same name within the same block scope is illegal.",
      "topic": "Duplicate Local Variable Error",
      "type": "error",
      "level": "easy",
      "strength": "Spotted redeclaration of local variable in same block scope.",
      "weakness": "A local variable cannot be redeclared within the same scope."
    },
    {
      "q": "What is the output of this code?\n```java\npublic static String reverse(String s) {\n    if (s.isEmpty()) return s;\n    return reverse(s.substring(1)) + s.charAt(0);\n}\npublic static void main(String[] args) {\n    System.out.println(reverse(\"Java\"));\n}\n```",
      "options": [
        "Java",
        "avaJ",
        "aJav",
        "avJa"
      ],
      "answer": 1,
      "explain": "Recursive string reversal: `reverse(\"ava\") + 'J'` -> `reverse(\"va\") + 'a' + 'J'` ... yielding `\"avaJ\"`.",
      "topic": "Recursive String Reversal",
      "type": "output",
      "level": "medium",
      "strength": "Traced recursive string manipulation.",
      "weakness": "`\"Java\"` reversed is `\"avaJ\"`."
    },
    {
      "q": "A logging utility allows developers to log messages with variable numbers of contextual tags: `log(\"User logged in\", \"AUTH\", \"SUCCESS\", \"IP=127.0.0.1\")`. Which Java language feature is designed specifically for this requirement?",
      "options": [
        "Method overloading with 20 different parameter counts",
        "Varargs: `public void log(String message, String... tags)`",
        "Passing a raw Object",
        "Parsing a comma-delimited String"
      ],
      "answer": 1,
      "explain": "Varargs (`String... tags`) allows callers to pass zero, one, or multiple arguments seamlessly without manually constructing an array.",
      "topic": "Varargs Logging Utility",
      "type": "scenario",
      "level": "easy",
      "strength": "Designed flexible logging API using varargs.",
      "weakness": "Use varargs (`Type...`) for methods accepting arbitrary numbers of optional arguments."
    },
    {
      "q": "Can an overloaded method have different parameter names while keeping parameter types identical: `void draw(int x)` and `void draw(int y)` in the same class?",
      "options": [
        "Yes, parameter names distinguish methods",
        "No, parameter names are irrelevant to overloading; only parameter types and their count matter, so this causes a 'method already defined' compile error",
        "Yes, if one is declared private",
        "Only if x and y have different values"
      ],
      "answer": 1,
      "explain": "The compiler considers only the types and sequence of parameters in a signature. Parameter names are purely descriptive and cannot distinguish overloaded methods.",
      "topic": "Overload Parameter Name Irrelevance",
      "type": "theory",
      "level": "easy",
      "strength": "Recognized that parameter names do not differentiate overloaded methods.",
      "weakness": "Overloading depends strictly on parameter types and order, not parameter names."
    },
    {
      "q": "Identify the issue in this method header:\n```java\npublic void execute(int x, ...String items) {}\n```",
      "options": [
        "execute must return boolean",
        "Syntax error: varargs syntax is `Type... name`, not `...Type name`",
        "x must be String",
        "items must be an array"
      ],
      "answer": 1,
      "explain": "Java varargs syntax places the ellipsis after the type (`String... items` or `String ...items`), not before.",
      "topic": "Varargs Ellipsis Syntax Error",
      "type": "error",
      "level": "easy",
      "strength": "Caught invalid ellipsis placement in varargs declaration.",
      "weakness": "Varargs syntax is `Type... name`, with the ellipsis following the type."
    },
    {
      "q": "How does Java pass arguments to methods?",
      "options": [
        "Primitives are passed by reference; objects are passed by value",
        "Strictly pass-by-value in all cases: for primitives, the value is copied; for objects, the reference address is copied by value",
        "Primitives are passed by value; objects are passed by reference",
        "Pass-by-name like ALGOL"
      ],
      "answer": 1,
      "explain": "Java is strictly pass-by-value. When an object is passed, the value of the reference (pointer address) is passed by value. Reassigning the parameter does not affect the caller, though mutating object contents does.",
      "topic": "Pass-by-Value Architecture",
      "type": "theory",
      "level": "medium",
      "strength": "Mastered Java's strict pass-by-value semantics for both primitives and object references.",
      "weakness": "Java is exclusively pass-by-value; references are copied by value."
    },
    {
      "q": "Why does the following method fail to compile?\n```java\npublic int getScore(boolean isBonus) {\n    if (isBonus) {\n        return 100;\n    }\n}\n```",
      "options": [
        "isBonus is not an integer",
        "Missing return statement: if isBonus is false, the method completes without returning an int",
        "100 cannot be returned from public methods",
        "boolean cannot be in parameters"
      ],
      "answer": 1,
      "explain": "The compiler verifies all execution paths. If `isBonus` is false, there is no return statement, triggering: 'missing return statement'.",
      "topic": "Missing Return Path Error",
      "type": "error",
      "level": "easy",
      "strength": "Caught missing return statement in conditional method branch.",
      "weakness": "Ensure all execution paths in non-void methods have a `return` statement."
    },
    {
      "q": "What is the output of the following recursive function for `f(3)`?\n```java\npublic static int f(int n) {\n    if (n <= 1) return 1;\n    return f(n - 1) + f(n - 2);\n}\n```",
      "options": [
        "2",
        "3",
        "5",
        "1"
      ],
      "answer": 1,
      "explain": "`f(0)=1`, `f(1)=1`. `f(2) = f(1) + f(0) = 1 + 1 = 2`. `f(3) = f(2) + f(1) = 2 + 1 = 3`.",
      "topic": "Tree Recursion Evaluation",
      "type": "output",
      "level": "medium",
      "strength": "Traced tree recursion for Fibonacci-like sequence.",
      "weakness": "`f(3) = f(2) + f(1) = 2 + 1 = 3`."
    },
    {
      "q": "In an autonomous drone navigation system, a method computes collision distance: `public double distance(Point3D a, Point3D b)`. How can immutability be enforced on parameters `a` and `b`?",
      "options": [
        "Mark parameters with `final`: `public double distance(final Point3D a, final Point3D b)` and ensure `Point3D` is an immutable class",
        "Pass them as primitive doubles only",
        "Private static void",
        "Synchronize the drone"
      ],
      "answer": 0,
      "explain": "`final` prevents parameter reassignment inside the method, and designing `Point3D` as an immutable class (or Java record) guarantees that point coordinates cannot be mutated.",
      "topic": "Immutability in Critical Navigation APIs",
      "type": "scenario",
      "level": "medium",
      "strength": "Applied `final` parameters and immutable objects for safety-critical systems.",
      "weakness": "Combine `final` parameter modifiers with immutable objects for safe, read-only method operations."
    },
    {
      "q": "What two fundamental components must every correct recursive method possess?",
      "options": [
        "A while loop and a switch statement",
        "At least one base case (termination condition) and a recursive step that moves toward the base case",
        "A try block and a catch block",
        "A static variable and a final constant"
      ],
      "answer": 1,
      "explain": "Recursion requires: 1) A base case where the method returns without recursing, and 2) A recursive call with reduced input parameters that converges toward the base case.",
      "topic": "Recursion Components",
      "type": "theory",
      "level": "easy",
      "strength": "Identifies the base case and converging step in recursive functions.",
      "weakness": "Every recursive method must have a base case to prevent infinite recursion."
    },
    {
      "q": "Why does this code fail to compile?\n```java\npublic static int findMax(int... nums, int threshold) {\n    return 0;\n}\n```",
      "options": [
        "findMax cannot return 0",
        "Varargs parameter `int... nums` must be the last parameter; `int threshold` cannot follow it",
        "threshold must be double",
        "nums cannot be named nums"
      ],
      "answer": 1,
      "explain": "Varargs parameters must be positioned at the very end of the formal parameter list.",
      "topic": "Misplaced Varargs Parameter",
      "type": "error",
      "level": "easy",
      "strength": "Caught varargs parameter placed before non-varargs parameter.",
      "weakness": "The varargs parameter must be placed at the end of the parameter list."
    },
    {
      "q": "What is the output of the following code?\n```java\npublic static void modify(int x) {\n    x += 10;\n}\npublic static void main(String[] args) {\n    int a = 5;\n    modify(a);\n    System.out.println(a);\n}\n```",
      "options": [
        "15",
        "5",
        "10",
        "0"
      ],
      "answer": 1,
      "explain": "Java passes primitives by value. `modify` alters only its local copy of `x`. The caller's variable `a` remains 5.",
      "topic": "Primitive Pass-by-Value Output",
      "type": "output",
      "level": "easy",
      "strength": "Recognized that primitive arguments are unaffected by method modification.",
      "weakness": "Primitive parameters are copies; modifying them inside a method does not change the caller's variable."
    },
    {
      "q": "A financial reporting tool must return both the lowest quarterly revenue, highest quarterly revenue, and the annual total from a single method. Since Java methods only return one value, what is the cleanest object-oriented approach?",
      "options": [
        "Return a `double[]` containing 3 elements: `new double[]{min, max, total}` or create a dedicated record/class `RevenueSummary`",
        "Encode all 3 numbers into a concatenated String `\"min:max:total\"`",
        "Write the values to a text file and read them back",
        "Modify global static variables"
      ],
      "answer": 0,
      "explain": "Bundling multiple related return values into a structured array or dedicated record/class (`RevenueSummary`) preserves type safety, clarity, and encapsulation.",
      "topic": "Multiple Return Values via Encapsulation",
      "type": "scenario",
      "level": "easy",
      "strength": "Bundled multiple return metrics into structured records or arrays.",
      "weakness": "Return multiple values by encapsulating them into a custom record, class, or typed array."
    },
    {
      "q": "Why does the following snippet fail to compile?\n```java\npublic void setSize(int w, int h) {\n    int area = w * h;\n}\npublic int getArea() {\n    return area;\n}\n```",
      "options": [
        "w * h is invalid",
        "Cannot find symbol: variable 'area' is local to `setSize()` and cannot be accessed inside `getArea()`",
        "setSize must return area",
        "getArea must take parameters"
      ],
      "answer": 1,
      "explain": "Variable `area` is declared as a local variable inside `setSize()`. It goes out of scope when `setSize()` returns. To share it between methods, declare `area` as an instance field.",
      "topic": "Local Variable Scope Leak Error",
      "type": "error",
      "level": "easy",
      "strength": "Caught referencing a local variable from another method.",
      "weakness": "Local variables cannot be accessed outside the method where they are declared; use instance fields for shared state."
    },
    {
      "q": "What does this code print?\n```java\npublic static void greet(String name) {\n    name = \"Alice\";\n}\npublic static void main(String[] args) {\n    String s = \"Bob\";\n    greet(s);\n    System.out.println(s);\n}\n```",
      "options": [
        "Alice",
        "Bob",
        "null",
        "AliceBob"
      ],
      "answer": 1,
      "explain": "`String` references are passed by value, and Strings are immutable. Reassigning `name = \"Alice\"` modifies only the local parameter reference. `s` remains `\"Bob\"`.",
      "topic": "String Parameter Immutability Output",
      "type": "output",
      "level": "easy",
      "strength": "Understands that Strings cannot be mutated via method parameters.",
      "weakness": "String objects are immutable and passed by reference value; caller variable remains unchanged."
    },
    {
      "q": "What is variable shadowing in Java methods?",
      "options": [
        "When an instance field and a local variable (or parameter) share the same name, the local variable shadows (hides) the field within that method scope",
        "When a variable is deleted by garbage collection",
        "When a private variable is accessed from another package",
        "When two methods share the same name"
      ],
      "answer": 0,
      "explain": "When a local variable or parameter has the same name as an instance field, the local variable takes precedence in scope, shadowing the field. The field must then be accessed using `this.fieldName`.",
      "topic": "Variable Shadowing",
      "type": "theory",
      "level": "medium",
      "strength": "Understands field shadowing by local variables and parameters.",
      "weakness": "Use `this.variableName` to access shadowed instance fields."
    },
    {
      "q": "Identify the compilation error in the following method header:\n```java\npublic void printData(int... numbers, String label) {\n    // body\n}\n```",
      "options": [
        "Varargs cannot be int",
        "The variable arity (varargs) parameter `int... numbers` must be the last parameter in the formal parameter list",
        "String cannot follow an array",
        "public void cannot use varargs"
      ],
      "answer": 1,
      "explain": "A varargs parameter must always be the final parameter in the formal parameter list. Placing `String label` after `int... numbers` causes a compile error.",
      "topic": "Varargs Position Error",
      "type": "error",
      "level": "easy",
      "strength": "Spotted varargs parameter placed before another parameter.",
      "weakness": "The varargs parameter (`type...`) must be the last parameter in the method signature."
    },
    {
      "q": "What does this code print?\n```java\npublic static int foo(int a, int b) {\n    if (b == 0) return 0;\n    return a + foo(a, b - 1);\n}\npublic static void main(String[] args) {\n    System.out.println(foo(3, 4));\n}\n```",
      "options": [
        "7",
        "12",
        "0",
        "81"
      ],
      "answer": 1,
      "explain": "This recursively computes multiplication via repeated addition: `3 + foo(3, 3) = 3 + 3 + 3 + 3 = 12`.",
      "topic": "Recursive Multiplication via Addition",
      "type": "output",
      "level": "medium",
      "strength": "Recognized recursive multiplication pattern.",
      "weakness": "Repeated addition of 3 four times equals 12."
    },
    {
      "q": "A text search engine implements binary search recursively: `binarySearch(int[] arr, int target, int low, int high)`. What recursive calls are made when `target > arr[mid]`?",
      "options": [
        "`return binarySearch(arr, target, low, mid - 1);`",
        "`return binarySearch(arr, target, mid + 1, high);`",
        "`return binarySearch(arr, target, low, high);`",
        "`return mid;`"
      ],
      "answer": 1,
      "explain": "If the target exceeds the midpoint element, it must reside in the upper half of the sorted array, so the search recurses on `mid + 1` to `high`.",
      "topic": "Recursive Binary Search Partitioning",
      "type": "scenario",
      "level": "medium",
      "strength": "Correctly partitioned recursive search space in binary search.",
      "weakness": "When target > mid, search the right partition `[mid + 1, high]`."
    },
    {
      "q": "What runtime error occurs if a recursive method has no base case or fails to converge?",
      "options": [
        "`java.lang.OutOfMemoryError: Java heap space`",
        "`java.lang.StackOverflowError`",
        "`java.lang.ArithmeticException`",
        "`java.lang.NullPointerException`"
      ],
      "answer": 1,
      "explain": "Each method invocation allocates a new stack frame on the thread's call stack. Infinite recursion exhausts call stack memory, throwing `StackOverflowError`.",
      "topic": "StackOverflowError",
      "type": "theory",
      "level": "easy",
      "strength": "Knows that infinite recursion exhausts call stack space.",
      "weakness": "Infinite recursion exhausts stack frames, throwing `StackOverflowError`."
    },
    {
      "q": "What is the compilation issue in this method?\n```java\npublic static double divide(int a, int b) {\n    if (b == 0) {\n        System.out.println(\"Error: div by zero\");\n    } else {\n        return (double) a / b;\n    }\n}\n```",
      "options": [
        "(double) a / b is an invalid cast",
        "Missing return statement: if `b == 0`, execution exits the if-block without returning a double",
        "divide must be void",
        "println cannot be inside if-block"
      ],
      "answer": 1,
      "explain": "If `b == 0`, the method prints an error message but fails to return a double or throw an exception, violating the `double` return contract.",
      "topic": "Missing Return in Error Branch",
      "type": "error",
      "level": "easy",
      "strength": "Spotted missing return in error branch.",
      "weakness": "Ensure every control flow branch returns a value or throws an exception."
    },
    {
      "q": "What is the output of this code?\n```java\npublic static void modify(int[] arr) {\n    arr[0] = 99;\n}\npublic static void main(String[] args) {\n    int[] data = {1, 2, 3};\n    modify(data);\n    System.out.println(data[0]);\n}\n```",
      "options": [
        "1",
        "99",
        "0",
        "NullPointerException"
      ],
      "answer": 1,
      "explain": "The method receives a copy of the reference pointing to the array object on the heap. Mutating `arr[0]` directly modifies the shared array. Outputs 99.",
      "topic": "Array Mutation via Method Output",
      "type": "output",
      "level": "easy",
      "strength": "Tracked element mutation through passed array reference.",
      "weakness": "Mutating array elements inside a method modifies the caller's array object on the heap."
    },
    {
      "q": "You are building a user authentication service. You write a helper method `private boolean verifyPasswordHash(String input, String storedHash)`. Why should this helper method be marked `private` rather than `public`?",
      "options": [
        "Private methods run faster in the JVM",
        "Encapsulation (information hiding): password verification details are internal implementation secrets that outside classes should not access directly",
        "Public methods cannot compare Strings",
        "Private methods are automatically encrypted"
      ],
      "answer": 1,
      "explain": "The principle of least privilege and encapsulation mandates that internal helper methods be private, exposing only necessary public API contracts.",
      "topic": "Access Modifier Encapsulation",
      "type": "scenario",
      "level": "easy",
      "strength": "Applied encapsulation and access control to protect internal helper logic.",
      "weakness": "Keep internal implementation details and helper methods `private`."
    },
    {
      "q": "What compilation error occurs in this method definition?\n```java\npublic static void greet() {\n    public void nestedGreet() {}\n}\n```",
      "options": [
        "greet cannot be static",
        "Illegal start of expression: Java does not allow methods to be defined inside other methods",
        "nestedGreet must return String",
        "public is redundant"
      ],
      "answer": 1,
      "explain": "Java does not support nested method definitions. Methods must be declared directly inside a class, interface, or enum body.",
      "topic": "Nested Method Declaration Error",
      "type": "error",
      "level": "easy",
      "strength": "Recognized that methods cannot be declared inside other methods.",
      "weakness": "Methods cannot be declared inside another method in Java."
    },
    {
      "q": "What is the output of this code?\n```java\npublic static int calc(int n) {\n    if (n == 1) return 1;\n    return n * calc(n - 1);\n}\npublic static void main(String[] args) {\n    System.out.println(calc(4));\n}\n```",
      "options": [
        "10",
        "24",
        "12",
        "4"
      ],
      "answer": 1,
      "explain": "`calc(4) = 4 * calc(3) = 4 * 3 * calc(2) = 4 * 3 * 2 * 1 = 24`.",
      "topic": "Factorial Recursion Output",
      "type": "output",
      "level": "easy",
      "strength": "Computed factorial recursive product.",
      "weakness": "`4 * 3 * 2 * 1 = 24`."
    },
    {
      "q": "What are the rules regarding variable-length argument lists (varargs: `int... numbers`) in Java method parameters?",
      "options": [
        "A method can have multiple varargs parameters anywhere in the parameter list",
        "There can be at most one varargs parameter, and it must be the very last parameter in the method header",
        "Varargs can only be of type Object",
        "Varargs parameters must be initialized with the `new` keyword in the caller"
      ],
      "answer": 1,
      "explain": "A method parameter list can contain at most one varargs parameter, and it must appear as the final parameter (`(String prefix, int... nums)`).",
      "topic": "Varargs Rules",
      "type": "theory",
      "level": "medium",
      "strength": "Knows syntactical restrictions on varargs parameters.",
      "weakness": "Varargs (`type...`) must be the last parameter in the method declaration."
    },
    {
      "q": "Why does this overloaded method pair cause a compilation error?\n```java\npublic int calculate(int a, int b) { return a + b; }\npublic double calculate(int a, int b) { return (double)(a + b); }\n```",
      "options": [
        "Cannot cast a + b to double",
        "Method `calculate(int, int)` is already defined; return type alone cannot be used to overload methods",
        "int and double are incompatible",
        "calculate must be static"
      ],
      "answer": 1,
      "explain": "Both methods share the identical signature `calculate(int, int)`. The compiler cannot distinguish them at call sites (`calculate(5, 10)`), causing: 'method already defined'.",
      "topic": "Ambiguous Return Type Overload Error",
      "type": "error",
      "level": "easy",
      "strength": "Recognized illegal method overloading differing only by return type.",
      "weakness": "Methods cannot be overloaded based solely on different return types."
    },
    {
      "q": "What does this snippet print?\n```java\npublic static void print(int a, int... more) {\n    System.out.println(a + \" \" + more.length);\n}\npublic static void main(String[] args) {\n    print(5);\n}\n```",
      "options": [
        "5 0",
        "5 1",
        "5 null",
        "Error"
      ],
      "answer": 0,
      "explain": "`a` receives the mandatory first argument 5. The varargs parameter `more` receives 0 arguments, creating an array of length 0. Output: `5 0`.",
      "topic": "Mandatory Parameter with Varargs",
      "type": "output",
      "level": "medium",
      "strength": "Accurately parsed mandatory parameter alongside empty varargs.",
      "weakness": "Mandatory parameter consumes 5; varargs array has length 0."
    },
    {
      "q": "A credit card validation service implements the Luhn algorithm. The algorithm recursively processes digits from right to left. What is the advantage of using a private recursive helper method with an index parameter?",
      "options": [
        "Private helpers run with superuser permissions",
        "It preserves a clean public API `public boolean isValid(String cardNumber)` while passing internal state (e.g. `index`, `isSecond`) through the private recursive helper",
        "Private helpers use less heap memory",
        "Public methods cannot call private methods"
      ],
      "answer": 1,
      "explain": "The Public Wrapper / Private Recursive Helper pattern is the standard Java design: users call clean `isValid(card)` without worrying about internal low-level indices.",
      "topic": "Public Wrapper / Private Helper Pattern",
      "type": "scenario",
      "level": "medium",
      "strength": "Employed public wrapper / private recursive helper pattern for clean API encapsulation.",
      "weakness": "Use a clean public wrapper method that delegates to a private helper with tracking parameters."
    },
    {
      "q": "What is the scope of a local variable declared inside a `for` loop header: `for (int i = 0; ...)`?",
      "options": [
        "Throughout the entire enclosing method",
        "Restricted strictly to the `for` loop header and its body",
        "Accessible to subsequent sibling loops",
        "Global across the entire class"
      ],
      "answer": 1,
      "explain": "Variables declared in a loop header have block scope confined exclusively to the loop itself. They are destroyed when the loop terminates.",
      "topic": "Block Scope of Loop Variables",
      "type": "theory",
      "level": "easy",
      "strength": "Understands block scope lifetimes of loop-declared variables.",
      "weakness": "Variables declared in a loop header are not accessible outside that loop."
    },
    {
      "q": "Why does this code cause a compilation error?\n```java\npublic void test(final int x) {\n    x = x + 1;\n}\n```",
      "options": [
        "Parameters cannot be marked final",
        "Cannot assign a value to final variable x",
        "x + 1 is an invalid expression",
        "test must return int"
      ],
      "answer": 1,
      "explain": "Marking a parameter with `final` makes it immutable. Reassigning `x = x + 1` causes a compile error: 'cannot assign a value to final variable x'.",
      "topic": "Final Parameter Mutation Error",
      "type": "error",
      "level": "easy",
      "strength": "Recognized reassignment of final method parameter.",
      "weakness": "`final` parameters cannot be reassigned within the method body."
    },
    {
      "q": "What is the output of this recursive method for `mystery(4)`?\n```java\npublic static int mystery(int n) {\n    if (n <= 1) return 1;\n    return n + mystery(n - 1);\n}\n```",
      "options": [
        "10",
        "4",
        "24",
        "15"
      ],
      "answer": 0,
      "explain": "`mystery(4) = 4 + mystery(3) = 4 + 3 + mystery(2) = 4 + 3 + 2 + mystery(1) = 4 + 3 + 2 + 1 = 10`.",
      "topic": "Recursive Sum Output",
      "type": "output",
      "level": "easy",
      "strength": "Traced basic linear recursion call stack.",
      "weakness": "`4 + 3 + 2 + 1 = 10`."
    },
    {
      "q": "A graphics rendering pipeline needs a method to convert temperature values from Celsius to Fahrenheit, and another from Fahrenheit to Celsius. What is the most descriptive method naming convention?",
      "options": [
        "`calc1(double c)` and `calc2(double f)`",
        "`celsiusToFahrenheit(double c)` and `fahrenheitToCelsius(double f)`",
        "`convert(double temp)` overloaded with same signature",
        "`temp(double val, boolean isC)`"
      ],
      "answer": 1,
      "explain": "Descriptive, intention-revealing method names (`celsiusToFahrenheit`) eliminate ambiguity and communicate exact intent without relying on cryptic boolean flags.",
      "topic": "Clean Code Method Naming",
      "type": "scenario",
      "level": "easy",
      "strength": "Selected intention-revealing method names for unit conversion.",
      "weakness": "Choose descriptive, self-documenting method names over cryptic abbreviations."
    },
    {
      "q": "What is the output of the following code?\n```java\npublic static void swap(int[] arr, int i, int j) {\n    int temp = arr[i];\n    arr[i] = arr[j];\n    arr[j] = temp;\n}\npublic static void main(String[] args) {\n    int[] arr = {10, 20};\n    swap(arr, 0, 1);\n    System.out.println(arr[0] + \" \" + arr[1]);\n}\n```",
      "options": [
        "10 20",
        "20 10",
        "20 20",
        "10 10"
      ],
      "answer": 1,
      "explain": "Because the method accesses elements of the shared heap array object through `arr[i]` and `arr[j]`, the element swap persists! Outputs `20 10`.",
      "topic": "Array Element Swap Helper Output",
      "type": "output",
      "level": "easy",
      "strength": "Understands that array element swaps inside helper methods persist.",
      "weakness": "Mutating elements within an array parameter modifies the actual array."
    },
    {
      "q": "A game developer creates a damage calculation method: `public int calculateDamage(int baseAttack, double multiplier)`. If the resulting damage is negative (due to a debuff), it should be clamped to 0. Which idiom implements this cleanly?",
      "options": [
        "`return Math.max(0, (int)(baseAttack * multiplier));`",
        "`return (int)(baseAttack * multiplier);`",
        "`if (damage < 0) throw new Exception();`",
        "`return Math.min(0, (int)(baseAttack * multiplier));`"
      ],
      "answer": 0,
      "explain": "`Math.max(0, damage)` clamps negative values to zero in a single clean, readable line without verbose nested if-statements.",
      "topic": "Clamping Idiom via Math.max",
      "type": "scenario",
      "level": "easy",
      "strength": "Used Math.max for clean, idiomatic value clamping.",
      "weakness": "Use `Math.max(MIN_VAL, val)` to clamp lower bounds cleanly."
    },
    {
      "q": "How does the compiler treat a varargs parameter `void print(int... nums)` internally?",
      "options": [
        "As a java.util.ArrayList<Integer>",
        "As an array of that type: `int[] nums`",
        "As a linked list",
        "As separate overloaded methods for 1 to 255 arguments"
      ],
      "answer": 1,
      "explain": "Varargs is syntactic sugar in Java. The compiler translates `int... nums` into an array `int[] nums`, and packages the caller's arguments into a newly allocated array.",
      "topic": "Varargs Internal Representation",
      "type": "theory",
      "level": "medium",
      "strength": "Understands that varargs compiles to an underlying array.",
      "weakness": "`type... name` is treated internally as `type[] name`."
    },
    {
      "q": "What is the runtime error in this recursive method?\n```java\npublic static int factorial(int n) {\n    return n * factorial(n - 1);\n}\n```",
      "options": [
        "`ArithmeticException`",
        "`StackOverflowError` because there is no base case, causing infinite recursion until stack exhaustion",
        "`NullPointerException`",
        "`IllegalArgumentException`"
      ],
      "answer": 1,
      "explain": "Without a base case (e.g. `if (n <= 1) return 1;`), `factorial` recurses infinitely into negative numbers, overflowing the call stack.",
      "topic": "Missing Base Case Recursion Bug",
      "type": "error",
      "level": "easy",
      "strength": "Identified missing base case causing StackOverflowError.",
      "weakness": "Always include a base case in recursive methods to stop recursion."
    },
    {
      "q": "What is the output of this code?\n```java\npublic static int mystery(int n) {\n    if (n <= 0) return 0;\n    return (n % 10) + mystery(n / 10);\n}\npublic static void main(String[] args) {\n    System.out.println(mystery(1234));\n}\n```",
      "options": [
        "10",
        "4321",
        "4",
        "24"
      ],
      "answer": 0,
      "explain": "This method recursively sums the digits of `n`: `4 + mystery(123) = 4 + 3 + 2 + 1 = 10`.",
      "topic": "Recursive Sum of Digits",
      "type": "output",
      "level": "medium",
      "strength": "Traced recursive digit extraction and summation.",
      "weakness": "`1 + 2 + 3 + 4 = 10`."
    },
    {
      "q": "A retail inventory system has a method `public boolean inStock(String itemId, int requestedQuantity)`. If `requestedQuantity <= 0`, how should the method react?",
      "options": [
        "Return true",
        "Throw an `IllegalArgumentException` explaining that requested quantity must be positive",
        "Return false silently without notification",
        "Exit the application with System.exit(1)"
      ],
      "answer": 1,
      "explain": "Throwing `IllegalArgumentException` clearly flags invalid client usage bugs rather than hiding invalid business queries behind ambiguous boolean flags.",
      "topic": "IllegalArgumentException Validation Pattern",
      "type": "scenario",
      "level": "medium",
      "strength": "Applied IllegalArgumentException to expose invalid client caller requests.",
      "weakness": "Throw `IllegalArgumentException` when method arguments fail business precondition constraints."
    },
    {
      "q": "When a method reassigns a primitive parameter: `void update(int x) { x = 100; }`, what happens to the caller's variable?",
      "options": [
        "The caller's variable becomes 100",
        "The caller's variable is completely unchanged because `x` is a separate local copy on the method's stack frame",
        "Throws an IllegalArgumentException",
        "The compiler issues a warning"
      ],
      "answer": 1,
      "explain": "Because primitives are passed by value, the method receives a copy of the primitive value. Modifying `x` alters only the local copy in the method's stack frame.",
      "topic": "Primitive Pass-by-Value Independence",
      "type": "theory",
      "level": "easy",
      "strength": "Understands that reassigning primitive parameters never affects the caller.",
      "weakness": "Primitive arguments are copies; modifying them inside a method has zero effect on the caller."
    },
    {
      "q": "What is wrong with this method declaration?\n```java\npublic static void compute(int a, int b = 10) {}\n```",
      "options": [
        "compute must return int",
        "Java does not support default parameter values in method headers (unlike C++ or Python)",
        "a and b must be floats",
        "Missing method body"
      ],
      "answer": 1,
      "explain": "Java syntax does not support default parameter values. Default behavior must be implemented using method overloading.",
      "topic": "Unsupported Default Parameter Syntax",
      "type": "error",
      "level": "easy",
      "strength": "Recognized that Java does not support default parameter values.",
      "weakness": "Java does not allow default parameter values in method headers; use method overloading instead."
    },
    {
      "q": "What does the following recursive code print?\n```java\npublic static void printNums(int n) {\n    if (n == 0) return;\n    System.out.print(n + \" \");\n    printNums(n - 1);\n}\npublic static void main(String[] args) {\n    printNums(3);\n}\n```",
      "options": [
        "3 2 1 ",
        "1 2 3 ",
        "3 2 1 0 ",
        "0 1 2 3 "
      ],
      "answer": 0,
      "explain": "Because the print statement occurs before recursing, printing happens on the way down: `3 2 1 `.",
      "topic": "Recursion Pre-Order Print",
      "type": "output",
      "level": "easy",
      "strength": "Recognized pre-order execution timing before recursive descent.",
      "weakness": "Printing before the recursive call executes in descending order: 3 2 1."
    },
    {
      "q": "A university student portal calculates course tuition. Malaysian domestic students pay RM 200 per credit; international students pay RM 450 per credit plus a fixed RM 1,000 visa fee. How should this be implemented with overloaded methods?",
      "options": [
        "`calculateTuition(int credits)` for domestic, and `calculateTuition(int credits, boolean isInternational)` (or separate dedicated signatures)",
        "Hardcode the fee as RM 200 for all students",
        "Use a single method that prompts the user from the keyboard via Scanner",
        "Create 2 separate applications"
      ],
      "answer": 0,
      "explain": "Overloaded methods cleanly accommodate default domestic rates while allowing an extended signature for international parameters.",
      "topic": "Overloading for Business Policy Defaults",
      "type": "scenario",
      "level": "easy",
      "strength": "Applied method overloading to support default and specialized business rules.",
      "weakness": "Use method overloading to provide clean defaults for common operational scenarios."
    },
    {
      "q": "What is the output of this code?\n```java\npublic static int power(int base, int exp) {\n    if (exp == 0) return 1;\n    return base * power(base, exp - 1);\n}\npublic static void main(String[] args) {\n    System.out.println(power(2, 4));\n}\n```",
      "options": [
        "8",
        "16",
        "32",
        "64"
      ],
      "answer": 1,
      "explain": "`power(2, 4) = 2 * 2 * 2 * 2 = 16`.",
      "topic": "Recursive Power Function",
      "type": "output",
      "level": "easy",
      "strength": "Calculated recursive power output.",
      "weakness": "`2^4 = 16`."
    },
    {
      "q": "A data science pipeline calculates the Euclidean distance between two vectors of arbitrary length: `double distance(double[] a, double[] b)`. What validation should occur before initiating the vector calculation loop?",
      "options": [
        "`if (a == null || b == null || a.length != b.length) throw new IllegalArgumentException(\"Vectors must be non-null and of identical dimension\");`",
        "`if (a.length > 10) return 0;`",
        "`if (a == b) return 0;`",
        "`Arrays.sort(a); Arrays.sort(b);`"
      ],
      "answer": 0,
      "explain": "Vector distance requires vectors of identical length. Validating `a.length != b.length` upfront prevents mismatched array traversal and `ArrayIndexOutOfBoundsException`.",
      "topic": "Vector Dimension Validation",
      "type": "scenario",
      "level": "easy",
      "strength": "Enforced vector dimension matching in scientific computing APIs.",
      "weakness": "Validate that input arrays have identical dimensions before performing element-wise vector operations."
    },
    {
      "q": "What is direct recursion versus indirect recursion?",
      "options": [
        "Direct recursion uses for-loops; indirect uses while-loops",
        "Direct recursion occurs when method A calls method A; indirect occurs when method A calls method B, which calls method A",
        "Direct recursion terminates; indirect never terminates",
        "Direct recursion uses heap; indirect uses stack"
      ],
      "answer": 1,
      "explain": "Direct recursion is when a method calls itself directly. Indirect (mutual) recursion is when method A calls B, which in turn calls A, forming a cycle of calls.",
      "topic": "Direct vs Indirect Recursion",
      "type": "theory",
      "level": "medium",
      "strength": "Distinguishes direct from indirect (mutual) recursion.",
      "weakness": "Direct recursion calls itself; indirect recursion forms a cycle between two or more methods."
    },
    {
      "q": "Why does this code cause a compilation error?\n```java\npublic class Test {\n    public void show() {\n        System.out.println(\"Hello\");\n    }\n    public static void main(String[] args) {\n        show();\n    }\n}\n```",
      "options": [
        "main cannot call methods",
        "Non-static method `show()` cannot be referenced from a static context (`main`) without an object instance",
        "show must return int",
        "args is not used"
      ],
      "answer": 1,
      "explain": "`main` is a static method and has no `this` reference. It cannot call instance method `show()` directly. It must either make `show()` static or create an instance: `new Test().show();`.",
      "topic": "Static Calling Non-Static Error",
      "type": "error",
      "level": "easy",
      "strength": "Caught illegal invocation of non-static method from static context.",
      "weakness": "Static methods cannot directly invoke non-static methods without an object instance."
    },
    {
      "q": "What does the following code print?\n```java\npublic static int f(int x) {\n    return (x > 10) ? x : f(x + 3);\n}\npublic static void main(String[] args) {\n    System.out.println(f(2));\n}\n```",
      "options": [
        "11",
        "12",
        "14",
        "10"
      ],
      "answer": 0,
      "explain": "`f(2)` -> `f(5)` -> `f(8)` -> `f(11)`. When `x = 11`, `11 > 10` is true, returning 11.",
      "topic": "Tail-Recursive Step Accumulation",
      "type": "output",
      "level": "medium",
      "strength": "Traced step progression in ternary recursive function.",
      "weakness": "Steps: 2 -> 5 -> 8 -> 11; 11 > 10 returns 11."
    },
    {
      "q": "A student writes a recursive method to compute powers `power(2, 5)`. The base case is `if (exp == 0) return 1;`. What happens if a caller invokes `power(2, -3)`?",
      "options": [
        "It returns 0.125 correctly",
        "It enters infinite recursion decrementing `-3` to `-4`, `-5`, etc., causing `StackOverflowError`",
        "It throws an ArithmeticException immediately",
        "It converts -3 to +3 automatically"
      ],
      "answer": 1,
      "explain": "Because `-3` is negative and each step decrements (`exp - 1`), `exp` moves away from 0, resulting in `StackOverflowError`. The method should validate `exp >= 0` or handle negative exponents explicitly.",
      "topic": "Negative Exponent Recursion Trap",
      "type": "scenario",
      "level": "medium",
      "strength": "Spotted infinite recursion trap on negative input values.",
      "weakness": "Guard recursive methods against negative arguments that would bypass the base case."
    },
    {
      "q": "Can a static method call a non-static (instance) method directly without an object reference?",
      "options": [
        "Yes, if they are in the same class",
        "No, because non-static methods require an active object instance (`this`), which does not exist in a static context",
        "Yes, using the `super` keyword",
        "Only if the non-static method is public"
      ],
      "answer": 1,
      "explain": "Static methods belong to the class and have no `this` reference. They cannot invoke instance methods or read instance fields without an explicit object reference.",
      "topic": "Static Context Rules",
      "type": "theory",
      "level": "easy",
      "strength": "Understands why static methods cannot access non-static methods without an object instance.",
      "weakness": "Static methods cannot directly call non-static methods; instantiate an object first."
    },
    {
      "q": "Why does the following snippet fail to compile?\n```java\npublic class A {\n    public static void run() {\n        System.out.println(this);\n    }\n}\n```",
      "options": [
        "println cannot print this",
        "Non-static variable 'this' cannot be referenced from a static context",
        "run must return String",
        "A cannot be public"
      ],
      "answer": 1,
      "explain": "`this` represents the current object instance. Static methods belong to the class and have no object instance, so using `this` inside a static method is illegal.",
      "topic": "This Keyword in Static Context Error",
      "type": "error",
      "level": "easy",
      "strength": "Caught use of 'this' inside static method.",
      "weakness": "The keyword `this` cannot be used inside static methods."
    },
    {
      "q": "What is the output of this code?\n```java\npublic static int count(int... nums) {\n    return nums.length;\n}\npublic static void main(String[] args) {\n    System.out.println(count(1, 2, 3) + \" \" + count());\n}\n```",
      "options": [
        "3 0",
        "3 1",
        "3 null",
        "Error"
      ],
      "answer": 0,
      "explain": "`count(1, 2, 3)` passes 3 elements (length 3). Calling `count()` with zero arguments creates an empty array of length 0. Outputs `3 0`.",
      "topic": "Varargs Empty Call Output",
      "type": "output",
      "level": "easy",
      "strength": "Understands that zero varargs arguments create a length-0 array.",
      "weakness": "Calling a varargs method with no arguments passes an array of length 0."
    },
    {
      "q": "An audio DSP plugin processes an audio buffer. The method signature is `public void applyGain(float[] buffer, float gain)`. Why does this method not need to return the array (`return buffer;`)?",
      "options": [
        "Methods modifying floats cannot return arrays",
        "Because `buffer` references the caller's heap array object, changes to `buffer[i]` modify the caller's audio data directly in place",
        "Audio drivers handle returns automatically",
        "The method is marked public"
      ],
      "answer": 1,
      "explain": "Passing an array passes a reference to the existing array. Modifying elements in-place updates the caller's array directly, making a return statement redundant.",
      "topic": "In-Place Buffer Processing",
      "type": "scenario",
      "level": "easy",
      "strength": "Understands in-place array modification via object references.",
      "weakness": "In-place array modifications update the caller's heap object directly without needing to return the array."
    },
    {
      "q": "What does this code print?\n```java\npublic static void doSomething(int x) {\n    x = 50;\n    System.out.print(x + \" \");\n}\npublic static void main(String[] args) {\n    int x = 10;\n    doSomething(x);\n    System.out.print(x);\n}\n```",
      "options": [
        "50 50",
        "50 10",
        "10 50",
        "10 10"
      ],
      "answer": 1,
      "explain": "`doSomething` prints its modified local `x` (50). `main` prints its own unchanged local `x` (10). Output: `50 10`.",
      "topic": "Local Variable Shadowing across Methods",
      "type": "output",
      "level": "easy",
      "strength": "Distinguished separate local variable scopes across calling and called methods.",
      "weakness": "Methods have independent stack frames; outputs 50 then 10."
    },
    {
      "q": "A banking batch processing engine needs to format monetary balances across 50 different statement reports. Why should formatting be encapsulated in a dedicated method `public static String formatCurrency(double amount)` rather than repeating `String.format(\"RM %.2f\", amount)` across all 50 reports?",
      "options": [
        "Java limits String.format to 5 calls per class",
        "DRY (Don't Repeat Yourself) principle: if the currency format changes (e.g. adding thousands separators or currency codes), it only needs to be updated in one single place",
        "Static methods execute in kernel mode",
        "String.format is deprecated"
      ],
      "answer": 1,
      "explain": "Encapsulating common business logic into a single reusable method adheres to DRY, centralizing maintenance and ensuring consistent formatting across the entire enterprise application.",
      "topic": "DRY Principle via Reusable Utility Methods",
      "type": "scenario",
      "level": "easy",
      "strength": "Applied DRY principle to centralize formatting logic into reusable utility methods.",
      "weakness": "Centralize repetitive operations into a single helper method to simplify future updates."
    }
  ],
  "5": [
    {
      "q": "What interface must a class implement to be eligible for use in a try-with-resources statement?",
      "options": [
        "`java.io.Serializable`",
        "`java.lang.AutoCloseable`",
        "`java.lang.Cloneable`",
        "`java.lang.Runnable`"
      ],
      "answer": 1,
      "explain": "Any resource managed in a try-with-resources header must implement `java.lang.AutoCloseable` (or its subinterface `java.io.Closeable`).",
      "topic": "AutoCloseable Interface",
      "type": "theory",
      "level": "medium",
      "strength": "Identifies AutoCloseable as the contract for try-with-resources.",
      "weakness": "Classes used in try-with-resources must implement `java.lang.AutoCloseable`."
    },
    {
      "q": "Why does this try-with-resources statement produce an error?\n```java\nScanner sc = new Scanner(System.in);\ntry (sc) {\n    int n = sc.nextInt();\n}\n// in Java 8:\n```",
      "options": [
        "Scanner cannot be closed",
        "In Java 8, resources in try-with-resources must be freshly declared inside the parentheses (`try (Scanner sc = ...)`); passing existing variables `try (sc)` was only added in Java 9",
        "System.in is read-only",
        "n is out of scope"
      ],
      "answer": 1,
      "explain": "In Java 8, try-with-resources strictly required a new variable declaration within the header. Using effectively final existing variables was introduced in Java 9.",
      "topic": "Java 8 Try-With-Resources Syntax Limitation",
      "type": "error",
      "level": "hard",
      "strength": "Mastered version differences in try-with-resources variable declaration.",
      "weakness": "In Java 8, declare resources directly in the try parentheses: `try (Scanner sc = ...)`."
    },
    {
      "q": "What is printed by this code?\n```java\nString s = \"42\";\nScanner sc = new Scanner(s);\nSystem.out.println(sc.hasNextInt() + \" \" + sc.hasNextDouble());\n```",
      "options": [
        "true true",
        "true false",
        "false true",
        "false false"
      ],
      "answer": 0,
      "explain": "An integer token like \"42\" can be interpreted as both a valid `int` (42) and a valid `double` (42.0). Both return `true`.",
      "topic": "Scanner Dual Number Match Output",
      "type": "output",
      "level": "medium",
      "strength": "Understands that integer tokens are also valid doubles for Scanner.",
      "weakness": "\"42\" satisfies both `hasNextInt()` and `hasNextDouble()`."
    },
    {
      "q": "A data migration script processes a 10 GB transaction log. Why will calling `Files.readAllLines(path)` cause an `OutOfMemoryError: Java heap space`, and what should you do instead?",
      "options": [
        "Files.readAllLines only works on text under 100 bytes",
        "`readAllLines` attempts to load the entire 10 GB file into heap memory at once; instead, stream lines lazily using `BufferedReader` or `Files.lines()`",
        "Log files cannot be read in Java",
        "Files must be split manually in Windows Explorer"
      ],
      "answer": 1,
      "explain": "`readAllLines` loads all lines into a `List<String>` in RAM, crashing on files larger than heap memory. `BufferedReader.readLine()` or `Files.lines()` streams one line at a time in O(1) memory.",
      "topic": "Streaming Large Files vs In-Memory Buffering",
      "type": "scenario",
      "level": "hard",
      "strength": "Avoided heap exhaustion by streaming large files line-by-line.",
      "weakness": "Stream large files with `BufferedReader` to process records in O(1) memory."
    },
    {
      "q": "What does the `java.io.File` class represent in Java?",
      "options": [
        "A physical open data stream connected to disk",
        "An abstract representation of file and directory pathnames, not the actual file contents",
        "A database table on disk",
        "A temporary RAM buffer"
      ],
      "answer": 1,
      "explain": "`java.io.File` represents an abstract path to a file or directory on the file system. It provides metadata methods (`exists()`, `length()`, `delete()`), not methods to read/write file content bytes.",
      "topic": "File Class Abstraction",
      "type": "theory",
      "level": "easy",
      "strength": "Understands that File represents pathnames, not open streams.",
      "weakness": "`java.io.File` encapsulates pathnames and metadata, not file stream contents."
    },
    {
      "q": "Why does this code fail to compile?\n```java\ntry (Scanner sc = new Scanner(new File(\"in.txt\"))) {\n    int a = sc.nextInt();\n} catch (IOException e) {\n    System.out.println(e.getMessage());\n}\n```",
      "options": [
        "Scanner does not throw IOException",
        "It compiles cleanly because `FileNotFoundException` is a subclass of `IOException` and is caught",
        "in.txt cannot be read",
        "catch block must be FileNotFoundException only"
      ],
      "answer": 1,
      "explain": "Because `FileNotFoundException` extends `IOException`, catching `IOException` covers `FileNotFoundException` completely. The code compiles cleanly with no error.",
      "topic": "Polymorphic Exception Catching in I/O",
      "type": "error",
      "level": "medium",
      "strength": "Recognized polymorphic catching of FileNotFoundException via IOException.",
      "weakness": "Catching `IOException` safely catches `FileNotFoundException` as a subtype."
    },
    {
      "q": "What does the following snippet print?\n```java\nFile f = new File(\"nonexistent_file_12345.xyz\");\nSystem.out.println(f.exists() + \" \" + f.length());\n```",
      "options": [
        "false 0",
        "true 0",
        "false -1",
        "NullPointerException"
      ],
      "answer": 0,
      "explain": "For non-existent files, `exists()` returns `false` and `length()` returns `0L` (0 bytes). Outputs `false 0`.",
      "topic": "Non-Existent File Metadata Output",
      "type": "output",
      "level": "easy",
      "strength": "Understands File metadata return values for non-existent paths.",
      "weakness": "`f.exists()` is false; `f.length()` is 0 for non-existent files."
    },
    {
      "q": "An automated report generator exports a table of sales figures to `report.txt`. Columns must align perfectly: Item (width 20, left-aligned), Quantity (width 8, right-aligned), Price (width 10, right-aligned, 2 decimals). Which statement achieves this?",
      "options": [
        "`pw.printf(\"%-20s %8d %10.2f%n\", item, qty, price);`",
        "`pw.println(item + \" \" + qty + \" \" + price);`",
        "`pw.printf(\"%20s %-8d %.2f\", item, qty, price);`",
        "`pw.write(item + qty + price);`"
      ],
      "answer": 0,
      "explain": "`%-20s` left-aligns strings; `%8d` right-aligns integers; `%10.2f` right-aligns decimals; `%n` adds a portable newline.",
      "topic": "Column-Aligned File Reporting",
      "type": "scenario",
      "level": "medium",
      "strength": "Engineered column-aligned formatted file output with printf.",
      "weakness": "Use `%-20s %8d %10.2f%n` for aligned tabular report generation."
    },
    {
      "q": "What is a standard character encoding in Java for international text portability across operating systems?",
      "options": [
        "ASCII",
        "UTF-8",
        "Windows-1252",
        "ISO-8859-1"
      ],
      "answer": 1,
      "explain": "UTF-8 is the industry-standard variable-length character encoding capable of encoding all 1,112,064 valid character code points in Unicode.",
      "topic": "UTF-8 Character Encoding",
      "type": "theory",
      "level": "easy",
      "strength": "Recognizes UTF-8 as standard character encoding.",
      "weakness": "UTF-8 is the universal standard for cross-platform text encoding."
    },
    {
      "q": "A logging framework rotates log files when `app.log` exceeds 50 MB. How does it check the file size in Java?",
      "options": [
        "`if (logFile.length() > 50 * 1024 * 1024)`",
        "`if (logFile.size() > 50)`",
        "`if (logFile.count() > 50000)`",
        "`if (logFile.length() > 50)`"
      ],
      "answer": 0,
      "explain": "`file.length()` returns the file size in bytes as a `long`. 50 MB is `50 * 1024 * 1024` bytes.",
      "topic": "File Size Check for Log Rotation",
      "type": "scenario",
      "level": "easy",
      "strength": "Calculated byte threshold for file size checks.",
      "weakness": "`file.length()` returns bytes; 50 MB = `50 * 1024 * 1024` bytes."
    },
    {
      "q": "What happens if you write data using `PrintWriter` but forget to invoke `.close()` or `.flush()`?",
      "options": [
        "The data is immediately written to disk regardless",
        "Buffered data may remain stuck in memory buffers and never get written to the physical file on disk",
        "The operating system crashes",
        "A runtime BufferOverflowException is thrown"
      ],
      "answer": 1,
      "explain": "`PrintWriter` buffers output for efficiency. Failing to `close()` or `flush()` means buffered data may be lost when the JVM terminates.",
      "topic": "Buffer Flushing Importance",
      "type": "theory",
      "level": "medium",
      "strength": "Understands why streams must be flushed or closed.",
      "weakness": "Always close or flush output streams to ensure buffered data is persisted to disk."
    },
    {
      "q": "Identify the bug in this file-reading loop:\n```java\nScanner sc = new Scanner(new File(\"data.txt\"));\nwhile (sc.hasNext()) {\n    String first = sc.next();\n    String second = sc.next();\n}\n```",
      "options": [
        "Syntax error in while condition",
        "If the file contains an odd number of tokens, the second `sc.next()` call throws `NoSuchElementException` on the final loop iteration",
        "sc.next() only reads numbers",
        "Infinite loop"
      ],
      "answer": 1,
      "explain": "Calling `sc.next()` twice per iteration assumes an even count of tokens. If odd, the second call fails with `NoSuchElementException` on EOF.",
      "topic": "Dual Token Read Without Check Bug",
      "type": "error",
      "level": "medium",
      "strength": "Caught unsafe dual-token consumption without intermediate hasNext() check.",
      "weakness": "Ensure each `next()` call has a matching `hasNext()` check."
    },
    {
      "q": "What does this code print?\n```java\nScanner sc = new Scanner(\"10 20 stop 30 40\");\nint sum = 0;\nwhile (sc.hasNextInt()) {\n    sum += sc.nextInt();\n}\nSystem.out.println(sum);\n```",
      "options": [
        "100",
        "30",
        "10",
        "InputMismatchException"
      ],
      "answer": 1,
      "explain": "`hasNextInt()` evaluates to `true` for 10 and 20 (`sum = 30`). When it encounters \"stop\", `hasNextInt()` returns `false`, terminating the loop immediately without an exception. Prints 30.",
      "topic": "Non-Int Token Loop Termination",
      "type": "output",
      "level": "medium",
      "strength": "Recognized clean loop termination upon non-numeric token.",
      "weakness": "Encountering non-int token 'stop' causes `hasNextInt()` to return false cleanly."
    },
    {
      "q": "A web application saves user avatars to disk. To prevent malicious users from uploading filenames like `../../etc/passwd` to overwrite system files (Directory Traversal Attack), what check must be applied?",
      "options": [
        "Convert filename to uppercase",
        "Validate that `file.getCanonicalPath()` starts with the intended base upload directory path and reject paths containing `..`",
        "Change file extension to .jpg",
        "Delete the file if it has numbers"
      ],
      "answer": 1,
      "explain": "Directory Traversal occurs when filenames contain `..`. Resolving canonical paths (`file.getCanonicalFile().toPath().startsWith(baseDir)`) prevents escaping the sandbox.",
      "topic": "Directory Traversal Security Guard",
      "type": "scenario",
      "level": "hard",
      "strength": "Applied path canonicalization to defeat Directory Traversal attacks.",
      "weakness": "Verify that `canonicalPath` starts with the authorized base directory to prevent directory traversal."
    },
    {
      "q": "Which checked exception must be handled or declared when instantiating a `Scanner` to read from a `File` (`new Scanner(new File(\"data.txt\"))`)?",
      "options": [
        "`IOException` or `FileNotFoundException`",
        "`NullPointerException`",
        "`NoSuchElementException`",
        "`FileCorruptedException`"
      ],
      "answer": 0,
      "explain": "`new Scanner(File)` throws `java.io.FileNotFoundException` (a subclass of `IOException`), which is a checked exception that must be caught or declared in a `throws` clause.",
      "topic": "FileNotFoundException Checked Exception",
      "type": "theory",
      "level": "easy",
      "strength": "Knows that opening a file with Scanner requires handling FileNotFoundException.",
      "weakness": "`FileNotFoundException` is a checked exception required when opening files with Scanner."
    },
    {
      "q": "Why does the following snippet fail to compile?\n```java\nimport java.util.Scanner;\nimport java.io.File;\npublic class Test {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(new File(\"input.txt\"));\n    }\n}\n```",
      "options": [
        "Scanner cannot accept File objects",
        "Unreported exception `java.io.FileNotFoundException`; must be caught or declared to be thrown",
        "new File is missing path extension",
        "Scanner must be closed on line 5"
      ],
      "answer": 1,
      "explain": "Instantiating `Scanner(File)` throws checked exception `FileNotFoundException`. `main` must either wrap it in `try-catch` or declare `throws FileNotFoundException`.",
      "topic": "Unreported FileNotFoundException Error",
      "type": "error",
      "level": "easy",
      "strength": "Caught unhandled checked exception on File Scanner creation.",
      "weakness": "Handle or declare `FileNotFoundException` when creating a Scanner from a File."
    },
    {
      "q": "What is the output of this code?\n```java\nScanner sc = new Scanner(\"12\\n34\\n56\");\nint count = 0;\nwhile (sc.hasNextLine()) {\n    sc.nextLine();\n    count++;\n}\nSystem.out.println(count);\n```",
      "options": [
        "1",
        "2",
        "3",
        "6"
      ],
      "answer": 2,
      "explain": "The string contains 3 newline-separated lines (`12`, `34`, `56`). `count` is 3.",
      "topic": "Line Count Scanner Output",
      "type": "output",
      "level": "easy",
      "strength": "Counted newline-separated lines via Scanner.",
      "weakness": "3 lines separated by \\n yield count = 3."
    },
    {
      "q": "A banking data pipeline receives files from external vendors encoded in UTF-8. On Windows, the default system charset might be Windows-1252. How do you guarantee the file is read using UTF-8 regardless of the operating system default?",
      "options": [
        "`new Scanner(file, \"UTF-8\")` (or `new InputStreamReader(new FileInputStream(file), StandardCharsets.UTF_8)`)",
        "`new Scanner(file)` without arguments",
        "Rename file to .utf8",
        "Change Windows system locale"
      ],
      "answer": 0,
      "explain": "Explicitly specifying the charset (`\"UTF-8\"` or `StandardCharsets.UTF_8`) ensures portable, consistent character decoding across all host OS platforms.",
      "topic": "Explicit Charset Specification",
      "type": "scenario",
      "level": "medium",
      "strength": "Enforced explicit UTF-8 charset decoding across differing OS environments.",
      "weakness": "Always specify `StandardCharsets.UTF_8` when creating readers and scanners."
    },
    {
      "q": "Can `java.io.File` be used to rename or move a file on disk?",
      "options": [
        "No, renaming requires deleting and creating a new file",
        "Yes, using `file.renameTo(destFile)`",
        "Yes, using `file.move()`",
        "Only in Java 17+"
      ],
      "answer": 1,
      "explain": "`file.renameTo(File dest)` renames or moves the file to the destination path atomically on most platforms.",
      "topic": "File.renameTo Method",
      "type": "theory",
      "level": "easy",
      "strength": "Knows File.renameTo() for renaming and moving files.",
      "weakness": "Use `file.renameTo(newFile)` to rename or move a file."
    },
    {
      "q": "A dictionary app loads 100,000 words from `words.txt`. Why should you pre-allocate a collection rather than repeatedly re-reading the file from disk on every user keystroke?",
      "options": [
        "Files lock the computer",
        "Disk I/O is thousands of times slower than RAM memory access; loading words once into an in-memory Set/Trie on startup ensures instant search response times",
        "Java files expire after 5 minutes",
        "Scanner cannot read dictionaries"
      ],
      "answer": 1,
      "explain": "Disk access latency is orders of magnitude slower than RAM. Caching static reference data in memory upon startup eliminates repeated disk bottlenecks.",
      "topic": "In-Memory Caching vs Disk I/O",
      "type": "scenario",
      "level": "easy",
      "strength": "Recognized the necessity of in-memory caching over repetitive disk I/O.",
      "weakness": "Cache static file data in memory on startup to avoid high disk latency."
    },
    {
      "q": "What is the difference between byte streams (`InputStream` / `OutputStream`) and character streams (`Reader` / `Writer`) in Java?",
      "options": [
        "Byte streams read 8-bit raw binary data (images, audio); character streams handle 16-bit Unicode characters with automatic encoding translation",
        "Byte streams are for text; character streams are for binary",
        "Character streams are deprecated",
        "Byte streams cannot read files"
      ],
      "answer": 0,
      "explain": "Byte streams process raw 8-bit bytes (ideal for images, audio, PDFs). Character streams process 16-bit Unicode characters, handling character sets like UTF-8.",
      "topic": "Byte Streams vs Character Streams",
      "type": "theory",
      "level": "medium",
      "strength": "Distinguishes 8-bit binary streams from 16-bit character streams.",
      "weakness": "Use Byte streams (`InputStream/OutputStream`) for binary and Character streams (`Reader/Writer`) for text."
    },
    {
      "q": "Why does the following try-with-resources snippet fail to compile?\n```java\nString text = \"Hello\";\ntry (text) {\n    System.out.println(text);\n}\n```",
      "options": [
        "println cannot print text",
        "Incompatible types: String does not implement `java.lang.AutoCloseable`",
        "try cannot take variables",
        "text must be final"
      ],
      "answer": 1,
      "explain": "Only objects that implement `java.lang.AutoCloseable` can be used as resources in a try-with-resources statement. `String` does not implement `AutoCloseable`.",
      "topic": "Non-AutoCloseable in Try-With-Resources",
      "type": "error",
      "level": "medium",
      "strength": "Caught non-AutoCloseable object used in try-with-resources.",
      "weakness": "Only classes implementing `AutoCloseable` can be managed in try-with-resources."
    },
    {
      "q": "What is the output of this code?\n```java\nScanner sc = new Scanner(\"100\\n200\");\nint a = sc.nextInt();\nString rem = sc.nextLine();\nSystem.out.println(\"[\" + rem + \"]\");\n```",
      "options": [
        "[\\n]",
        "[200]",
        "[]",
        "[100]"
      ],
      "answer": 2,
      "explain": "`sc.nextInt()` consumes `100`, leaving the newline character in the line. `sc.nextLine()` immediately reads the empty remainder of the first line, resulting in an empty string `\"\"`. Prints `[]`.",
      "topic": "Scanner Leftover Newline Output",
      "type": "output",
      "level": "medium",
      "strength": "Mastered Scanner newline buffer consumption output.",
      "weakness": "`sc.nextLine()` consumes the empty remainder of the line following nextInt(), producing `[]`."
    },
    {
      "q": "A distributed system worker checks if a lock file `process.lock` exists before starting. If it exists, another worker is already running. If it does NOT exist, it must create it atomically. What method provides this atomic check-and-create?",
      "options": [
        "`if (!file.exists()) file.createNewFile();` (Race condition!)",
        "`file.createNewFile()` (returns true only if created atomically by this process)",
        "`file.mkdir()`",
        "`file.renameTo()`"
      ],
      "answer": 1,
      "explain": "`file.createNewFile()` is an atomic filesystem operation. It returns `true` if and only if the file did not exist and was created by this call, avoiding race conditions.",
      "topic": "Atomic Lock File Creation",
      "type": "scenario",
      "level": "hard",
      "strength": "Used atomic createNewFile to prevent race conditions in process locking.",
      "weakness": "Use `file.createNewFile()` for atomic lock file creation without race conditions."
    },
    {
      "q": "What is the primary advantage of the Java 7 'try-with-resources' statement (`try (PrintWriter pw = new PrintWriter(file)) { ... }`)?",
      "options": [
        "It automatically executes file writes on a background thread",
        "It guarantees that the resource is automatically closed when the try block exits, even if an exception occurs, eliminating resource leaks",
        "It doubles file transfer speeds",
        "It prevents FileNotFoundException"
      ],
      "answer": 1,
      "explain": "Try-with-resources automatically closes any resource implementing `AutoCloseable`, ensuring streams are closed reliably without verbose `finally` blocks.",
      "topic": "Try-With-Resources Architecture",
      "type": "theory",
      "level": "easy",
      "strength": "Understands automatic resource closure via try-with-resources.",
      "weakness": "Try-with-resources guarantees automatic closure of `AutoCloseable` streams."
    },
    {
      "q": "What error occurs at runtime in this code if `scores.txt` is an empty file?\n```java\nScanner sc = new Scanner(new File(\"scores.txt\"));\nint firstScore = sc.nextInt();\n```",
      "options": [
        "Returns 0",
        "`java.util.NoSuchElementException`",
        "`NullPointerException`",
        "`ArrayIndexOutOfBoundsException`"
      ],
      "answer": 1,
      "explain": "Calling `sc.nextInt()` on an empty stream without verifying `sc.hasNextInt()` throws `NoSuchElementException` because no tokens are available.",
      "topic": "NoSuchElementException on Empty File",
      "type": "error",
      "level": "easy",
      "strength": "Spotted reading from empty file without hasNextInt() guard.",
      "weakness": "Check `scanner.hasNextInt()` before calling `scanner.nextInt()` to prevent NoSuchElementException."
    },
    {
      "q": "What is the output of this code?\n```java\nFile f = new File(\"parent/child/test.txt\");\nSystem.out.println(f.getName());\n```",
      "options": [
        "test.txt",
        "child/test.txt",
        "parent/child/test.txt",
        "test"
      ],
      "answer": 0,
      "explain": "`f.getName()` extracts only the simple name of the file (the last path component), which is `test.txt`.",
      "topic": "File.getName Output",
      "type": "output",
      "level": "easy",
      "strength": "Extracted simple file name via File.getName().",
      "weakness": "`f.getName()` returns the terminal file name `test.txt`."
    },
    {
      "q": "A command-line tool counts the total number of words, lines, and characters in a text file (like Unix `wc`). Which Scanner methods can be combined to track all three metrics in a single pass?",
      "options": [
        "Read line by line with `nextLine()`, incrementing lines, adding `line.length() + 1` to characters, and splitting the line by whitespace `line.trim().split(\"\\\\s+\")` to count words",
        "Call `read()` 3 times",
        "Open 3 separate Scanner instances simultaneously",
        "Use `sc.nextInt()`"
      ],
      "answer": 0,
      "explain": "Reading line-by-line enables tracking lines, characters, and words concurrently in a single efficient O(N) linear pass.",
      "topic": "Word Count (wc) Single-Pass Design",
      "type": "scenario",
      "level": "medium",
      "strength": "Designed clean single-pass line, word, and character counter.",
      "weakness": "Process line-by-line to aggregate lines, characters, and words in a single pass."
    },
    {
      "q": "What happens if an unhandled `FileNotFoundException` is thrown inside a method that does NOT declare `throws FileNotFoundException` or `throws IOException`?",
      "options": [
        "The method compiles and ignores the exception",
        "The compiler issues an 'unreported exception; must be caught or declared to be thrown' error",
        "The JVM terminates at compile time",
        "It converts into an unchecked RuntimeException automatically"
      ],
      "answer": 1,
      "explain": "Because `FileNotFoundException` is a checked exception, the Java compiler enforces the Catch-or-Specify requirement. Failing to catch or declare it causes a compilation error.",
      "topic": "Catch-or-Specify Requirement",
      "type": "theory",
      "level": "easy",
      "strength": "Understands compiler enforcement of checked exceptions.",
      "weakness": "Checked exceptions must be caught in a try-catch or declared with `throws`."
    },
    {
      "q": "Why does this file deletion attempt fail silently at runtime?\n```java\nFile dir = new File(\"myDirectory\");\nboolean success = dir.delete();\n```",
      "options": [
        "dir must be a file, not a directory",
        "If the directory is non-empty (contains files or subdirectories), `dir.delete()` fails and returns `false` without throwing an exception",
        "delete() is not a method of File",
        "Requires administrator privileges in all cases"
      ],
      "answer": 1,
      "explain": "In Java, `File.delete()` can only delete directories that are completely empty. If files reside inside, it fails and returns `false`.",
      "topic": "Non-Empty Directory Deletion Failure",
      "type": "error",
      "level": "easy",
      "strength": "Understands that File.delete() requires directories to be empty.",
      "weakness": "Directories must be empty before `file.delete()` can delete them."
    },
    {
      "q": "How can you configure a `PrintWriter` to APPEND data to an existing file rather than overwriting it?",
      "options": [
        "`new PrintWriter(file, true)`",
        "Wrap a `FileWriter` with append set to true: `new PrintWriter(new FileWriter(file, true))`",
        "`new PrintWriter(file).setAppend(true)`",
        "`new AppendPrintWriter(file)`"
      ],
      "answer": 1,
      "explain": "`PrintWriter` has no direct append constructor for `File`. To append, wrap a `FileWriter` instantiated with `append = true`: `new PrintWriter(new FileWriter(\"data.txt\", true))`.",
      "topic": "File Appending Pattern",
      "type": "theory",
      "level": "medium",
      "strength": "Knows the standard pattern for appending text to files in Java.",
      "weakness": "Use `new PrintWriter(new FileWriter(fileName, true))` to append to existing files."
    },
    {
      "q": "What is the bug in this code intended to process comma-separated values?\n```java\nScanner sc = new Scanner(\"Apple,Orange,Banana\");\nwhile (sc.hasNext()) {\n    System.out.println(sc.next());\n}\n```",
      "options": [
        "Throws ClassCastException",
        "Default Scanner delimiter is whitespace; since there are no spaces, it reads the entire string `Apple,Orange,Banana` in one single token instead of splitting by commas",
        "Only prints Apple",
        "sc cannot scan Strings"
      ],
      "answer": 1,
      "explain": "By default, `Scanner` splits on whitespace. To tokenize comma-separated text, set `sc.useDelimiter(\",\");`.",
      "topic": "Scanner Delimiter Configuration Bug",
      "type": "error",
      "level": "medium",
      "strength": "Spotted missing custom delimiter in comma-separated Scanner parsing.",
      "weakness": "Call `sc.useDelimiter(\",\")` to split by commas instead of whitespace."
    },
    {
      "q": "What is printed by this code?\n```java\nScanner sc = new Scanner(\"Alpha Beta Gamma\");\nString res = \"\";\nwhile (sc.hasNext()) {\n    res = sc.next() + \" \" + res;\n}\nSystem.out.println(res.trim());\n```",
      "options": [
        "Gamma Beta Alpha",
        "Alpha Beta Gamma",
        "Gamma Alpha",
        "Beta Alpha Gamma"
      ],
      "answer": 0,
      "explain": "Each token is prepended: \"Alpha \" -> \"Beta Alpha \" -> \"Gamma Beta Alpha \". Result is `Gamma Beta Alpha`.",
      "topic": "Reversed Token Concatenation",
      "type": "output",
      "level": "medium",
      "strength": "Traced reverse prepending of tokens.",
      "weakness": "Tokens prepended sequentially produce `Gamma Beta Alpha`."
    },
    {
      "q": "A university grading system processes a CSV file `students.csv` containing 5,000 student marks. Some rows have missing or corrupted scores. How should the file reader handle an `InputMismatchException` on a corrupted line without aborting the remaining 4,999 students?",
      "options": [
        "Let the program crash and restart",
        "Wrap the line parsing in a try-catch block inside the loop, log a warning with `e.getMessage()`, skip the invalid row with `sc.nextLine()`, and continue reading",
        "Delete the file",
        "Rely on the OS to fix the CSV"
      ],
      "answer": 1,
      "explain": "Resilient ETL pipelines catch parsing exceptions inside the loop, log the bad record, flush to the next line, and continue processing remaining rows.",
      "topic": "Resilient Batch File Parsing",
      "type": "scenario",
      "level": "medium",
      "strength": "Implemented resilient exception recovery inside file processing loops.",
      "weakness": "Catch parsing exceptions inside the read loop to skip corrupt rows and continue processing."
    },
    {
      "q": "What exception is thrown if you call `scanner.nextInt()` when the next token in the file is the word \"Apple\"?",
      "options": [
        "`NumberFormatException`",
        "`java.util.InputMismatchException`",
        "`NoSuchElementException`",
        "`FileNotFoundException`"
      ],
      "answer": 1,
      "explain": "`Scanner.nextInt()` throws `InputMismatchException` when the available token cannot be parsed into the expected integer type.",
      "topic": "InputMismatchException",
      "type": "theory",
      "level": "easy",
      "strength": "Recognized InputMismatchException when token type doesn't match.",
      "weakness": "`Scanner.nextInt()` throws `InputMismatchException` on non-numeric tokens."
    },
    {
      "q": "Why does this file write operation produce an empty 0-byte file?\n```java\nPrintWriter pw = new PrintWriter(new File(\"output.txt\"));\npw.println(\"Hello World\");\n// program terminates\n```",
      "options": [
        "Hello World is an invalid string",
        "The PrintWriter was never closed (`pw.close()`) or flushed (`pw.flush()`), leaving buffered data in memory before program termination",
        "File output requires FileOutputStream",
        "output.txt is read-only"
      ],
      "answer": 1,
      "explain": "`PrintWriter` buffers output data. If the stream is not closed or flushed, data remains in the buffer and is discarded upon program exit.",
      "topic": "Unclosed PrintWriter Buffer Loss",
      "type": "error",
      "level": "easy",
      "strength": "Recognized data loss due to missing close/flush on PrintWriter.",
      "weakness": "Always close PrintWriter (or use try-with-resources) to flush data to disk."
    },
    {
      "q": "What does this snippet print?\n```java\nScanner sc = new Scanner(\"A B C\");\nint count = 0;\nwhile (sc.hasNext()) {\n    count++;\n    if (count == 2) break;\n    sc.next();\n}\nSystem.out.println(count);\n```",
      "options": [
        "1",
        "2",
        "3",
        "0"
      ],
      "answer": 1,
      "explain": "`count` increments to 1, consumes 'A'. Loop checks `hasNext()`, `count` increments to 2, hits `break`. Output is 2.",
      "topic": "Scanner Loop Break Counter",
      "type": "output",
      "level": "easy",
      "strength": "Traced early loop break in Scanner token loop.",
      "weakness": "Loop breaks when `count == 2`, outputting 2."
    },
    {
      "q": "A backup script verifies file integrity after copying a 2 GB database file from source to destination. What is the most reliable check to ensure the file was not corrupted during copying?",
      "options": [
        "Compare `source.length() == dest.length()` only",
        "Compute and compare cryptographic hash checksums (e.g. SHA-256 or MD5) of both files",
        "Compare file creation timestamps",
        "Check if `dest.exists()` is true"
      ],
      "answer": 1,
      "explain": "While file size equality is a quick initial check, computing and matching a cryptographic checksum (SHA-256) guarantees exact bit-for-bit data integrity.",
      "topic": "File Integrity Verification via Checksums",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands cryptographic checksum comparison for reliable file transfer verification.",
      "weakness": "Compute SHA-256 checksums to verify bit-level file copy integrity."
    },
    {
      "q": "What is the standard stream represented by `System.in` in Java?",
      "options": [
        "`java.io.PrintStream` connected to standard error",
        "`java.io.InputStream` connected to standard input (typically keyboard)",
        "`java.io.Reader`",
        "`java.io.FileReader`"
      ],
      "answer": 1,
      "explain": "`System.in` is a `java.io.InputStream` object representing the standard input stream provided by the host environment.",
      "topic": "System.in Stream Type",
      "type": "theory",
      "level": "easy",
      "strength": "Identifies System.in as an InputStream.",
      "weakness": "`System.in` is an instance of `java.io.InputStream`."
    },
    {
      "q": "What is the issue with this `FileWriter` instantiation?\n```java\nFileWriter fw = new FileWriter(\"data.txt\", false);\n```",
      "options": [
        "false is an illegal parameter",
        "No syntax error, but `false` explicitly tells FileWriter to OVERWRITE the file instead of appending",
        "FileWriter cannot take boolean",
        "data.txt must exist"
      ],
      "answer": 1,
      "explain": "The boolean parameter in `FileWriter(fileName, append)` controls append mode. Setting `false` explicitly overwrites existing file content.",
      "topic": "FileWriter Append Parameter Flag",
      "type": "error",
      "level": "easy",
      "strength": "Recognized append flag boolean parameter in FileWriter.",
      "weakness": "Pass `true` as the second parameter to append to a file: `new FileWriter(name, true)`."
    },
    {
      "q": "What does `BufferedReader.readLine()` return when it reaches the end of the file (EOF)?",
      "options": [
        "Throws an `EOFException`",
        "`null`",
        "An empty string `\"\"`",
        "`-1`"
      ],
      "answer": 1,
      "explain": "`BufferedReader.readLine()` returns `null` when the end of the stream is reached, allowing clean while-loop condition checks: `while ((line = br.readLine()) != null)`.",
      "topic": "BufferedReader EOF Marker",
      "type": "theory",
      "level": "medium",
      "strength": "Understands BufferedReader returns null at EOF.",
      "weakness": "`BufferedReader.readLine()` returns `null` when End of File is reached."
    },
    {
      "q": "What is wrong with this code that reads numbers until EOF?\n```java\nScanner sc = new Scanner(new File(\"nums.txt\"));\nwhile (sc.hasNextLine()) {\n    int n = sc.nextInt();\n    System.out.println(n);\n}\n```",
      "options": [
        "nums.txt cannot contain numbers",
        "Mismatched condition: checking `hasNextLine()` does not guarantee the next token is an integer, leading to `InputMismatchException` or skipping lines without consuming newlines",
        "nextInt cannot print",
        "while must be for"
      ],
      "answer": 1,
      "explain": "Checking `hasNextLine()` verifies a line exists, but `nextInt()` only reads a token. If the line is empty or contains non-numeric text, `sc.nextInt()` fails. Check `sc.hasNextInt()` instead.",
      "topic": "Mismatched Scanner Check Condition",
      "type": "error",
      "level": "medium",
      "strength": "Caught condition mismatch between hasNextLine() and nextInt().",
      "weakness": "Pair `hasNextInt()` with `nextInt()`, and `hasNextLine()` with `nextLine()`."
    },
    {
      "q": "What is the output of this code?\n```java\nScanner sc = new Scanner(\"10, 20, 30\");\nsc.useDelimiter(\",\\\\s*\");\nint sum = 0;\nwhile (sc.hasNextInt()) {\n    sum += sc.nextInt();\n}\nSystem.out.println(sum);\n```",
      "options": [
        "60",
        "10",
        "0",
        "InputMismatchException"
      ],
      "answer": 0,
      "explain": "Delimiter `,\\s*` matches commas followed by optional spaces. Tokens are clean integers 10, 20, 30. Sum is 60.",
      "topic": "Regex Delimiter Scanner Output",
      "type": "output",
      "level": "medium",
      "strength": "Understands regex delimiters in Scanner.",
      "weakness": "Cleanly delimited integers sum to 60."
    },
    {
      "q": "A mobile app downloads a temporary configuration file `config.tmp`. To ensure the file does not remain on user devices if the app crashes, what method of `java.io.File` should be invoked immediately after creation?",
      "options": [
        "`file.deleteNow()`",
        "`file.deleteOnExit()`",
        "`file.makeTemporary()`",
        "`file.purge()`"
      ],
      "answer": 1,
      "explain": "`file.deleteOnExit()` registers the file for automatic deletion when the JVM terminates normally.",
      "topic": "deleteOnExit Cleanup Pattern",
      "type": "scenario",
      "level": "medium",
      "strength": "Knows deleteOnExit for automatic temporary file cleanup.",
      "weakness": "Use `file.deleteOnExit()` to automatically clean up temporary files upon JVM exit."
    },
    {
      "q": "What exception is thrown if you call `scanner.next()` or `scanner.nextLine()` when there are no more tokens left in the file (End of File)?",
      "options": [
        "`EOFException`",
        "`java.util.NoSuchElementException`",
        "`NullPointerException`",
        "`IndexOutOfBoundsException`"
      ],
      "answer": 1,
      "explain": "`Scanner` throws `NoSuchElementException` when attempting to read past the end of the input stream without checking `hasNext()`.",
      "topic": "End of File NoSuchElementException",
      "type": "theory",
      "level": "easy",
      "strength": "Knows NoSuchElementException occurs when reading past EOF with Scanner.",
      "weakness": "Always check `scanner.hasNext()` before reading to avoid `NoSuchElementException` at EOF."
    },
    {
      "q": "Identify the issue in this file path declaration on Windows:\n```java\nFile f = new File(\"C:\\data\\scores.txt\");\n```",
      "options": [
        "File cannot accept drive letters",
        "Backslashes `\\d` and `\\s` are treated as escape sequences, causing compilation errors: illegal escape character",
        "scores.txt must be uppercase",
        "File path must end with a slash"
      ],
      "answer": 1,
      "explain": "In Java string literals, a backslash `\\` introduces an escape sequence. Single backslashes must be escaped (`\"C:\\\\data\\\\scores.txt\"`) or forward slashes used (`\"C:/data/scores.txt\"`).",
      "topic": "Unescaped Windows Backslash Error",
      "type": "error",
      "level": "easy",
      "strength": "Caught unescaped backslashes in Windows file path literal.",
      "weakness": "Escape backslashes (`\\\\`) or use forward slashes (`/`) in path strings."
    },
    {
      "q": "What does this code output?\n```java\nScanner sc = new Scanner(\"1 2 3 4 5\");\nint sum = 0;\nwhile (sc.hasNext()) {\n    int n = Integer.parseInt(sc.next());\n    if (n % 2 != 0) sum += n;\n}\nSystem.out.println(sum);\n```",
      "options": [
        "9",
        "6",
        "15",
        "10"
      ],
      "answer": 0,
      "explain": "Odd numbers are 1, 3, 5. Their sum is `1 + 3 + 5 = 9`.",
      "topic": "Parsed Token Odd Sum",
      "type": "output",
      "level": "easy",
      "strength": "Summed odd tokens parsed with Integer.parseInt.",
      "weakness": "Odd numbers 1, 3, 5 sum to 9."
    },
    {
      "q": "You are building an audit logging service for a banking gateway that records every fund transfer. Multiple transactions must be written over time to `transfers.log`. Why should you use `FileWriter` with `append = true` rather than standard `PrintWriter`?",
      "options": [
        "Standard PrintWriter does not support strings",
        "Standard PrintWriter constructor `new PrintWriter(file)` truncates the log file to 0 bytes on every restart, erasing all prior audit records; `append = true` preserves history",
        "Append mode encrypts files automatically",
        "FileWriter uses less disk space"
      ],
      "answer": 1,
      "explain": "Overwriting mode erases existing data. Audit trails require append mode (`new FileWriter(file, true)`) to preserve chronological historical logs.",
      "topic": "Audit Log Appending Design",
      "type": "scenario",
      "level": "easy",
      "strength": "Understands why append mode is critical for transaction audit logging.",
      "weakness": "Always use append mode for audit logs to avoid overwriting historical records."
    },
    {
      "q": "What is the standard stream represented by `System.out` in Java?",
      "options": [
        "`java.io.PrintWriter`",
        "`java.io.PrintStream` connected to standard output",
        "`java.io.Writer`",
        "`java.io.OutputStream`"
      ],
      "answer": 1,
      "explain": "`System.out` is an instance of `java.io.PrintStream` configured to write to the console's standard output.",
      "topic": "System.out Stream Type",
      "type": "theory",
      "level": "easy",
      "strength": "Identifies System.out as a PrintStream.",
      "weakness": "`System.out` is an instance of `java.io.PrintStream`."
    },
    {
      "q": "What compilation error occurs here?\n```java\nFile f = new File(\"data.txt\");\nScanner sc = new Scanner(f);\nsc.close();\nint x = sc.nextInt();\n```",
      "options": [
        "sc.close() cannot be called",
        "No compile error, but throws `IllegalStateException: Scanner closed` at runtime when reading from closed Scanner",
        "data.txt is deleted",
        "x must be String"
      ],
      "answer": 1,
      "explain": "Calling read methods on a `Scanner` that has already been closed throws `java.lang.IllegalStateException: Scanner closed`.",
      "topic": "Reading from Closed Scanner",
      "type": "error",
      "level": "easy",
      "strength": "Identified IllegalStateException when reading closed Scanner.",
      "weakness": "Cannot read tokens from a Scanner after invoking `.close()`."
    },
    {
      "q": "What does `InputStream.read()` return when the end of the stream is reached?",
      "options": [
        "`0`",
        "`null`",
        "`-1`",
        "Throws `EOFException`"
      ],
      "answer": 2,
      "explain": "The `read()` method of byte input streams returns an `int` representing the byte read (0 to 255), or `-1` to signal the End of File.",
      "topic": "Byte Stream EOF Marker",
      "type": "theory",
      "level": "medium",
      "strength": "Knows that byte read() returns -1 at EOF.",
      "weakness": "`InputStream.read()` returns `-1` when End of File is reached."
    },
    {
      "q": "What is the issue with this resource leak pattern?\n```java\nScanner sc = new Scanner(new File(\"data.txt\"));\nint x = sc.nextInt();\nint result = 100 / x; // If x is 0, ArithmeticException thrown!\nsc.close();\n```",
      "options": [
        "data.txt is deleted",
        "If `x == 0`, `ArithmeticException` is thrown before `sc.close()` executes, leaving the file handle unclosed and leaking system resources",
        "Scanner cannot read into int",
        "result must be double"
      ],
      "answer": 1,
      "explain": "If an exception occurs before `sc.close()`, the close call is bypassed. Using try-with-resources guarantees closure even during exceptions.",
      "topic": "Resource Leak on Exception Bypass",
      "type": "error",
      "level": "medium",
      "strength": "Identified resource leak caused by unhandled exception bypassing close().",
      "weakness": "Use try-with-resources to ensure streams close even when runtime exceptions occur."
    },
    {
      "q": "What is the output of this code?\n```java\nScanner sc = new Scanner(\"10 20\");\nsc.close();\ntry {\n    sc.next();\n} catch (IllegalStateException e) {\n    System.out.println(\"Caught\");\n}\n```",
      "options": [
        "Caught",
        "10",
        "Nothing",
        "NullPointerException"
      ],
      "answer": 0,
      "explain": "Invoking `next()` on a closed Scanner throws `IllegalStateException`, which is caught and prints `Caught`.",
      "topic": "Closed Scanner Exception Handling",
      "type": "output",
      "level": "medium",
      "strength": "Caught IllegalStateException on closed Scanner invocation.",
      "weakness": "Reading closed Scanner throws IllegalStateException; caught cleanly."
    },
    {
      "q": "A file upload microservice receives high-resolution profile pictures. Why MUST binary streams (`FileInputStream` / `FileOutputStream`) be used instead of character streams (`FileReader` / `FileWriter`)?",
      "options": [
        "FileReader cannot open files larger than 1MB",
        "Character streams interpret bytes as character encodings (e.g. UTF-8), corrupting raw binary bytes (like PNG/JPEG headers and compressed byte sequences) during translation",
        "FileInputStream uses GPU memory",
        "Image files cannot have file extensions"
      ],
      "answer": 1,
      "explain": "Character streams translate bytes into characters based on character sets. Arbitrary binary data (like images) contains byte sequences that are invalid characters, causing corruption.",
      "topic": "Binary Data Integrity with Byte Streams",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands why binary data requires byte streams to avoid encoding corruption.",
      "weakness": "Never use character streams for binary files (images, audio); use `InputStream`/`OutputStream`."
    },
    {
      "q": "Which method of `java.io.File` should you invoke to test whether a physical file actually exists on disk before reading it?",
      "options": [
        "`file.isAvailable()`",
        "`file.exists()`",
        "`file.canRead()`",
        "`file.isOpen()`"
      ],
      "answer": 1,
      "explain": "`file.exists()` returns `true` if the file or directory denoted by the abstract pathname actually exists on disk.",
      "topic": "File.exists() Method",
      "type": "theory",
      "level": "easy",
      "strength": "Knows File.exists() to verify file existence.",
      "weakness": "Use `file.exists()` to check if a file is present on the file system."
    },
    {
      "q": "What exception is thrown when running this code if `file.txt` contains \"42.5\"?\n```java\nScanner sc = new Scanner(new File(\"file.txt\"));\nint val = sc.nextInt();\n```",
      "options": [
        "`java.util.InputMismatchException`",
        "`NumberFormatException`",
        "`ClassCastException`",
        "`ArithmeticException`"
      ],
      "answer": 0,
      "explain": "`42.5` is a floating-point token. `sc.nextInt()` expects integer digits and throws `InputMismatchException`.",
      "topic": "Scanner Float Token InputMismatchException",
      "type": "error",
      "level": "easy",
      "strength": "Identified InputMismatchException on floating-point token.",
      "weakness": "Use `sc.nextDouble()` when reading decimal numbers with Scanner."
    },
    {
      "q": "What does this snippet print?\n```java\nFile f = new File(\"/home/user/docs\");\nSystem.out.println(f.getParent());\n```",
      "options": [
        "/home/user",
        "/home",
        "docs",
        "null"
      ],
      "answer": 0,
      "explain": "`f.getParent()` returns the pathname string of the parent directory: `/home/user`.",
      "topic": "File.getParent Output",
      "type": "output",
      "level": "easy",
      "strength": "Identified parent directory path component.",
      "weakness": "`f.getParent()` yields `/home/user`."
    },
    {
      "q": "You are developing a cross-platform desktop application running on Windows, macOS, and Linux. How should you construct a path to a configuration file inside the user's home folder `\"app/config.json\"`?",
      "options": [
        "Hardcode `\"C:\\\\app\\\\config.json\"`",
        "Use `System.getProperty(\"user.home\") + File.separator + \"app\" + File.separator + \"config.json\"` (or `java.nio.file.Path.of(...)`)",
        "Hardcode `\"/home/app/config.json\"`",
        "Use relative path `\"../config.json\"`"
      ],
      "answer": 1,
      "explain": "Combining `System.getProperty(\"user.home\")` with `File.separator` guarantees correct path resolution across all operating systems without hardcoded path assumptions.",
      "topic": "Cross-Platform Path Construction",
      "type": "scenario",
      "level": "easy",
      "strength": "Constructed portable cross-platform file paths using system properties.",
      "weakness": "Use `user.home` and `File.separator` for cross-platform file path resolution."
    },
    {
      "q": "Identify the bug in this line count algorithm:\n```java\nScanner sc = new Scanner(new File(\"doc.txt\"));\nint lines = 0;\nwhile (sc.hasNextLine()) {\n    lines++;\n}\n```",
      "options": [
        "Throws ClassCastException",
        "Infinite loop: `sc.hasNextLine()` checks for a line, but `sc.nextLine()` is never called inside the loop to consume it, causing `hasNextLine()` to remain true perpetually",
        "lines cannot be incremented",
        "lines starts at 0"
      ],
      "answer": 1,
      "explain": "Checking `hasNextLine()` without calling `nextLine()` creates an infinite loop because the input position never advances.",
      "topic": "Infinite Loop Missing nextLine Advance",
      "type": "error",
      "level": "easy",
      "strength": "Spotted infinite loop caused by missing nextLine() advancement.",
      "weakness": "Call `sc.nextLine()` inside the loop to advance the stream position."
    },
    {
      "q": "What is printed by this code?\n```java\nScanner sc = new Scanner(\"5 10 15\");\nint p = 1;\nwhile (sc.hasNextInt()) {\n    p *= sc.nextInt();\n}\nSystem.out.println(p);\n```",
      "options": [
        "750",
        "30",
        "150",
        "50"
      ],
      "answer": 0,
      "explain": "`5 * 10 * 15 = 50 * 15 = 750`.",
      "topic": "Scanner Token Product Output",
      "type": "output",
      "level": "easy",
      "strength": "Calculated cumulative product of scanned tokens.",
      "weakness": "`5 * 10 * 15 = 750`."
    },
    {
      "q": "Why is `BufferedReader` generally preferred over `Scanner` when processing very large text files (e.g. 500 MB)?",
      "options": [
        "Scanner cannot read files larger than 10MB",
        "`BufferedReader` has a large default memory buffer (8KB) and performs simple line reads without regular expression parsing overhead, making it significantly faster",
        "`BufferedReader` runs on the GPU",
        "Scanner only works with System.in"
      ],
      "answer": 1,
      "explain": "`Scanner` uses complex regular expressions for tokenizing on every read. `BufferedReader` reads large chunks into memory and parses lines simply, making it dramatically faster for high-volume I/O.",
      "topic": "BufferedReader vs Scanner Performance",
      "type": "theory",
      "level": "medium",
      "strength": "Understands performance trade-offs between BufferedReader and Scanner.",
      "weakness": "`BufferedReader` is much faster than `Scanner` because it avoids regex tokenization."
    },
    {
      "q": "What error occurs in this code snippet?\n```java\nPrintWriter pw = new PrintWriter(\"data.txt\");\npw.write(65);\npw.close();\n```",
      "options": [
        "Throws IllegalArgumentException",
        "No compile error, but `pw.write(65)` interprets 65 as an ASCII/Unicode character code, writing the character 'A' instead of the number 65 (use `print(65)` for numbers)",
        "data.txt cannot be created",
        "65 is out of bounds"
      ],
      "answer": 1,
      "explain": "`write(int)` writes the character corresponding to the integer code point (65 -> 'A'). To write the numeric text \"65\", call `pw.print(65)`.",
      "topic": "PrintWriter write vs print Semantic Bug",
      "type": "error",
      "level": "medium",
      "strength": "Caught semantic bug: write(int) writes char code point instead of formatted integer.",
      "weakness": "Use `pw.print(n)` or `pw.println(n)` to write formatted numeric text; `pw.write(n)` writes a single char."
    },
    {
      "q": "What is the output of this code if \"test.txt\" contains the text `\"10 20 30\"`?\n```java\nScanner sc = new Scanner(new File(\"test.txt\"));\nint sum = 0;\nwhile (sc.hasNextInt()) {\n    sum += sc.nextInt();\n}\nSystem.out.println(sum);\n```",
      "options": [
        "60",
        "10",
        "30",
        "0"
      ],
      "answer": 0,
      "explain": "The scanner reads 10, 20, and 30 sequentially. `sum = 10 + 20 + 30 = 60`.",
      "topic": "File Integer Sum Output",
      "type": "output",
      "level": "easy",
      "strength": "Computed sum of tokens read from file via Scanner.",
      "weakness": "Tokens 10, 20, 30 sum to 60."
    },
    {
      "q": "An e-commerce receipt generator writes PDF receipts. If disk space runs out during writing, a `IOException` occurs. How does try-with-resources guarantee that file handles are not leaked in the operating system?",
      "options": [
        "It automatically deletes the corrupted file",
        "It calls `close()` in an implicit finally block, guaranteeing release of OS file descriptors regardless of whether the try block completes or throws an exception",
        "It retries the write operation 3 times",
        "It frees RAM memory"
      ],
      "answer": 1,
      "explain": "Try-with-resources guarantees resource release via an automatic finally block, preventing operating system file handle exhaustion even during disk errors.",
      "topic": "Resource Leak Prevention Under Failure",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands OS file descriptor lifecycle management via try-with-resources.",
      "weakness": "Try-with-resources guarantees `close()` execution even during I/O errors."
    },
    {
      "q": "What is the cross-platform way to reference the system file path separator character in Java (e.g. `/` on Unix vs `\\` on Windows)?",
      "options": [
        "Hardcode `\"/\"` everywhere",
        "`File.separator` (or `System.getProperty(\"file.separator\")`)",
        "`Path.delimiter`",
        "`System.pathChar`"
      ],
      "answer": 1,
      "explain": "`File.separator` provides the platform-specific directory separator character (`\\` on Windows, `/` on Linux/macOS), ensuring cross-platform portability.",
      "topic": "Platform-Independent File.separator",
      "type": "theory",
      "level": "easy",
      "strength": "Knows File.separator for cross-platform filesystem paths.",
      "weakness": "Use `File.separator` to avoid hardcoding platform-specific slashes."
    },
    {
      "q": "Why does the following code fail to compile?\n```java\ntry (PrintWriter pw = new PrintWriter(\"out.txt\")) {\n    pw.println(\"Data\");\n}\npw.println(\"More Data\");\n```",
      "options": [
        "PrintWriter cannot take filename strings",
        "Cannot find symbol: variable 'pw' is out of scope outside the try-with-resources block",
        "println cannot be called twice",
        "try must have a catch block"
      ],
      "answer": 1,
      "explain": "Resources declared in the try-with-resources header have their scope confined strictly to the try block. They are inaccessible after the block closes.",
      "topic": "Try-With-Resources Variable Scope Error",
      "type": "error",
      "level": "easy",
      "strength": "Recognized resource variable out of scope outside try block.",
      "weakness": "Resources declared in try-with-resources are local to that try block."
    },
    {
      "q": "What is the output of this code?\n```java\nScanner sc = new Scanner(\"true false true\");\nint trueCount = 0;\nwhile (sc.hasNextBoolean()) {\n    if (sc.nextBoolean()) trueCount++;\n}\nSystem.out.println(trueCount);\n```",
      "options": [
        "1",
        "2",
        "3",
        "0"
      ],
      "answer": 1,
      "explain": "Tokens are booleans: `true`, `false`, `true`. Two are true, so `trueCount` is 2.",
      "topic": "Boolean Scanner Token Count",
      "type": "output",
      "level": "easy",
      "strength": "Counted true boolean tokens with Scanner.",
      "weakness": "Two `true` tokens yield trueCount = 2."
    },
    {
      "q": "A medical device logs patient heartbeat data every millisecond. A developer observes that writing to disk on every reading causes severe CPU latency. What I/O enhancement resolves this bottleneck?",
      "options": [
        "Write to console instead",
        "Wrap the output stream in a `BufferedWriter` or `BufferedOutputStream` to accumulate writes in an in-memory buffer before flushing to disk in bulk",
        "Delete old readings",
        "Use Scanner to write data"
      ],
      "answer": 1,
      "explain": "Buffering aggregates many small byte writes into large memory blocks, minimizing costly hardware disk write system calls.",
      "topic": "Buffered I/O Performance Optimization",
      "type": "scenario",
      "level": "easy",
      "strength": "Applied buffered streams to eliminate disk I/O bottlenecks.",
      "weakness": "Wrap streams in `BufferedWriter` or `BufferedOutputStream` to minimize hardware disk operations."
    },
    {
      "q": "What is wrong with this code?\n```java\nPrintWriter pw = new PrintWriter(new File(\"res.txt\"));\npw.printf(\"Total: %d\", 45.5);\n```",
      "options": [
        "res.txt cannot be created",
        "Throws `IllegalFormatConversionException` at runtime because `%d` cannot format a floating-point number (45.5)",
        "pw cannot call printf",
        "Total must be in single quotes"
      ],
      "answer": 1,
      "explain": "`%d` expects an integer argument. Passing floating-point literal `45.5` causes a runtime `IllegalFormatConversionException`.",
      "topic": "PrintWriter Formatted Output Type Mismatch",
      "type": "error",
      "level": "easy",
      "strength": "Spotted printf specifier mismatch in PrintWriter output.",
      "weakness": "Use `%f` or `%.2f` for decimal numbers in `printf`."
    },
    {
      "q": "What does this code output?\n```java\nScanner sc = new Scanner(\"apple   banana\\tcherry\");\nint count = 0;\nwhile (sc.hasNext()) {\n    sc.next();\n    count++;\n}\nSystem.out.println(count);\n```",
      "options": [
        "3",
        "1",
        "4",
        "5"
      ],
      "answer": 0,
      "explain": "Scanner treats any sequence of spaces, multiple spaces, and tabs as a single delimiter. It reads 3 words: count = 3.",
      "topic": "Variable Whitespace Token Parsing",
      "type": "output",
      "level": "easy",
      "strength": "Handled variable whitespace and tabs cleanly.",
      "weakness": "Multiple spaces and tabs collapse into delimiters; 3 tokens."
    },
    {
      "q": "What happens when you create a new `PrintWriter(new File(\"existing.txt\"))` if the file already exists on disk?",
      "options": [
        "It throws a `FileAlreadyExistsException`",
        "It truncates the file, completely overwriting its existing contents to an empty file",
        "It appends to the existing file",
        "It creates a backup file"
      ],
      "answer": 1,
      "explain": "Instantiating a `PrintWriter` directly with a `File` or file name truncates the target file to 0 bytes if it already exists, overwriting all previous contents.",
      "topic": "PrintWriter Default Overwrite",
      "type": "theory",
      "level": "medium",
      "strength": "Understands that new PrintWriter overwrites existing files.",
      "weakness": "Instantiating `PrintWriter(File)` truncates and overwrites existing files."
    },
    {
      "q": "Why does the following snippet fail to compile?\n```java\nScanner sc = new Scanner(new File(\"input.txt\"));\ntry {\n    // read\n} finally {\n    sc.close();\n}\n```",
      "options": [
        "finally cannot close Scanner",
        "The `new Scanner(File)` instantiation is outside the try block and its checked `FileNotFoundException` is not caught or declared",
        "sc is not visible in finally",
        "Scanner cannot be closed in finally"
      ],
      "answer": 1,
      "explain": "Because `new Scanner(new File(...))` is outside the `try` block, its checked `FileNotFoundException` remains unhandled.",
      "topic": "Instantiation Outside Try Block Error",
      "type": "error",
      "level": "medium",
      "strength": "Caught checked exception thrown prior to try block entry.",
      "weakness": "Place file stream instantiations inside the try header or declare throws."
    },
    {
      "q": "What does this code print given a string-backed Scanner?\n```java\nScanner sc = new Scanner(\"One Two Three Four\");\nsc.next();\nString val = sc.next();\nSystem.out.println(val);\n```",
      "options": [
        "One",
        "Two",
        "Three",
        "Four"
      ],
      "answer": 1,
      "explain": "The first `sc.next()` consumes \"One\". The second `sc.next()` reads \"Two\". Outputs `Two`.",
      "topic": "Sequential Token Consumption Output",
      "type": "output",
      "level": "easy",
      "strength": "Tracked token pointer progression in Scanner.",
      "weakness": "First next() reads 'One'; second next() reads 'Two'."
    },
    {
      "q": "A backup routine copies a folder structure. Before creating a file in a subfolder `backup/2026/oct/data.txt`, the directory hierarchy does not yet exist. What method call ensures all parent folders are created first?",
      "options": [
        "`new File(\"backup/2026/oct\").mkdirs();`",
        "`new File(\"backup/2026/oct\").mkdir();`",
        "`new File(\"backup/2026/oct/data.txt\").createNewFile();`",
        "`System.createDirectory();`"
      ],
      "answer": 0,
      "explain": "`mkdirs()` creates the target directory along with all non-existent ancestor directories in the path, preventing `FileNotFoundException` when creating the nested file.",
      "topic": "Recursive Parent Directory Creation",
      "type": "scenario",
      "level": "medium",
      "strength": "Applied mkdirs() to ensure parent directory paths exist before file creation.",
      "weakness": "Call `parentDir.mkdirs()` to create all necessary parent directories before creating nested files."
    },
    {
      "q": "What does `file.createNewFile()` do in Java?",
      "options": [
        "Deletes the file and recreates it",
        "Atomically creates a new, empty file if and only if a file with this name does not yet exist, returning true; otherwise returns false",
        "Throws an exception if the file does not exist",
        "Creates a directory"
      ],
      "answer": 1,
      "explain": "`file.createNewFile()` atomically creates an empty file only if it doesn't already exist. It returns `true` if created, `false` if already present.",
      "topic": "File.createNewFile Atomic Semantics",
      "type": "theory",
      "level": "easy",
      "strength": "Knows File.createNewFile semantics.",
      "weakness": "`file.createNewFile()` creates the file if it does not already exist."
    },
    {
      "q": "Identify the compilation error in this snippet:\n```java\nFile file = new File(\"data.txt\");\nfile.write(\"Hello\");\n```",
      "options": [
        "data.txt must exist",
        "Cannot find symbol: method write(String) does not exist in `java.io.File`",
        "write must return boolean",
        "file must be opened first"
      ],
      "answer": 1,
      "explain": "`java.io.File` does not have write methods. To write to a file, wrap it in a `PrintWriter`, `FileWriter`, or `FileOutputStream`.",
      "topic": "File Class Has No Write Method Error",
      "type": "error",
      "level": "easy",
      "strength": "Recognized that java.io.File does not have read/write methods.",
      "weakness": "Use `PrintWriter` or `FileWriter` to write text; `File` only manages path metadata."
    },
    {
      "q": "What does this code print?\n```java\nFile f = new File(\"a/b/c/file.txt\");\nSystem.out.println(f.getName().endsWith(\".txt\"));\n```",
      "options": [
        "true",
        "false",
        "NullPointerException",
        "Error"
      ],
      "answer": 0,
      "explain": "`f.getName()` is `\"file.txt\"`, which ends with `\".txt\"`, printing `true`.",
      "topic": "File Extension Verification Output",
      "type": "output",
      "level": "easy",
      "strength": "Verified file extension matching.",
      "weakness": "`file.txt` ends with `.txt` -> true."
    },
    {
      "q": "A CLI utility accepts user commands until the user presses Ctrl+D (Unix) or Ctrl+Z (Windows), signaling End of File (EOF). How should the input loop detect this condition cleanly?",
      "options": [
        "`while (true) { String s = sc.nextLine(); }`",
        "`while (sc.hasNextLine()) { String s = sc.nextLine(); process(s); }`",
        "`if (sc.next() == null)`",
        "`while (System.in.available() > 0)`"
      ],
      "answer": 1,
      "explain": "`sc.hasNextLine()` returns `false` when EOF (Ctrl+D / Ctrl+Z) is reached on `System.in`, allowing clean termination.",
      "topic": "Console EOF Detection Pattern",
      "type": "scenario",
      "level": "easy",
      "strength": "Used hasNextLine() to detect console EOF cleanly.",
      "weakness": "`sc.hasNextLine()` returns false when EOF (Ctrl+D/Ctrl+Z) is reached."
    },
    {
      "q": "What is the output of this code?\n```java\nScanner sc = new Scanner(\"123 456\");\nint a = sc.nextInt();\nint b = sc.nextInt();\nSystem.out.println(b - a);\n```",
      "options": [
        "333",
        "-333",
        "0",
        "123456"
      ],
      "answer": 0,
      "explain": "`a = 123`, `b = 456`. `456 - 123 = 333`.",
      "topic": "Token Difference Output",
      "type": "output",
      "level": "easy",
      "strength": "Computed difference between two consecutive tokens.",
      "weakness": "`456 - 123 = 333`."
    },
    {
      "q": "A database exporter dumps records to a CSV file. If a customer's address contains a comma (e.g. `\"123 Main St, Apt 4\"`), what must the exporter do to prevent breaking the CSV column structure?",
      "options": [
        "Remove the comma from the address",
        "Wrap the field in double quotes: `\"\\\"\" + address + \"\\\"\"` (standard RFC 4180 CSV escaping)",
        "Throw an exception",
        "Replace the comma with a question mark"
      ],
      "answer": 1,
      "explain": "In CSV formats, fields containing delimiter characters (commas) must be enclosed in double quotes according to RFC 4180.",
      "topic": "CSV Field Escaping Rules",
      "type": "scenario",
      "level": "easy",
      "strength": "Applied RFC 4180 CSV escaping for comma-containing fields.",
      "weakness": "Enclose fields containing commas within double quotes in CSV exports."
    },
    {
      "q": "What does `file.mkdir()` versus `file.mkdirs()` do in Java?",
      "options": [
        "`mkdir()` creates only the named directory (fails if parent folders are missing); `mkdirs()` creates the directory along with all necessary missing parent directories",
        "`mkdir()` is for files; `mkdirs()` is for folders",
        "`mkdirs()` creates hidden directories",
        "They are identical synonyms"
      ],
      "answer": 0,
      "explain": "`mkdir()` creates only the final directory if parent directories exist. `mkdirs()` creates the entire hierarchical folder path including any missing ancestor directories.",
      "topic": "mkdir vs mkdirs",
      "type": "theory",
      "level": "medium",
      "strength": "Distinguishes single-level mkdir from recursive mkdirs.",
      "weakness": "Use `mkdirs()` to create nested directories including missing parents."
    },
    {
      "q": "What is the bug in this line reading loop?\n```java\nScanner sc = new Scanner(new File(\"data.txt\"));\nwhile (sc.hasNextLine()) {\n    System.out.println(sc.next());\n}\n```",
      "options": [
        "Throws NullPointerException",
        "Condition checks `hasNextLine()`, but body reads `sc.next()` (single word), desynchronizing token and line tracking and potentially causing infinite loop if spaces exist",
        "next() is deprecated",
        "sc must be closed"
      ],
      "answer": 1,
      "explain": "`sc.next()` consumes only one whitespace-delimited word, while `hasNextLine()` checks for line presence. If a line has multiple words, this causes confusing mismatch logic.",
      "topic": "hasNextLine vs next Token Desync",
      "type": "error",
      "level": "medium",
      "strength": "Identified desynchronization between hasNextLine() and next().",
      "weakness": "Pair `hasNextLine()` strictly with `nextLine()` to consume entire lines."
    },
    {
      "q": "What is the output of this code?\n```java\nScanner sc = new Scanner(\"100 Java 200\");\nint a = sc.nextInt();\nString b = sc.next();\nint c = sc.nextInt();\nSystem.out.println(a + c + \" \" + b);\n```",
      "options": [
        "300 Java",
        "100200 Java",
        "100 Java 200",
        "InputMismatchException"
      ],
      "answer": 0,
      "explain": "`a = 100`, `b = \"Java\"`, `c = 200`. `a + c = 300`. Outputs `\"300 Java\"`.",
      "topic": "Mixed Token Parsing Output",
      "type": "output",
      "level": "easy",
      "strength": "Parsed mixed integer and string tokens.",
      "weakness": "`100 + 200 = 300`, followed by String \"Java\"."
    },
    {
      "q": "A student records quiz scores in a text file. Each row contains: `StudentName Score`. For example: `Alice 95`. If student names can contain spaces (e.g. `Mary Jane 88`), why does calling `sc.next()` followed by `sc.nextInt()` fail, and how is it fixed?",
      "options": [
        "`sc.next()` only reads 'Mary', treating 'Jane' as the score and throwing `InputMismatchException`; read the entire line with `sc.nextLine()` and parse from the last space",
        "Scanner cannot read letters",
        "Change Scanner to BufferedReader without parsing",
        "Scores must be written first"
      ],
      "answer": 0,
      "explain": "`sc.next()` breaks on whitespace. For multi-word names, reading the whole line with `nextLine()` and splitting at the last space or delimiter correctly isolates the name from the trailing score.",
      "topic": "Multi-Word Token Parsing Strategy",
      "type": "scenario",
      "level": "medium",
      "strength": "Handled multi-word tokens with trailing numbers cleanly.",
      "weakness": "Read full lines with `nextLine()` and split on the last delimiter when names contain spaces."
    },
    {
      "q": "How do you delete a file from the file system using the `File` class?",
      "options": [
        "`file.remove()`",
        "`file.delete()`",
        "`file.erase()`",
        "`file.unlink()`"
      ],
      "answer": 1,
      "explain": "`file.delete()` deletes the file or empty directory denoted by the abstract pathname and returns a boolean indicating success.",
      "topic": "File.delete Method",
      "type": "theory",
      "level": "easy",
      "strength": "Knows File.delete() method.",
      "weakness": "Use `file.delete()` to remove files or empty directories from disk."
    },
    {
      "q": "Why does this code cause a compiler error?\n```java\nFileReader fr = new FileReader(\"data.txt\");\nint c = fr.read();\n```",
      "options": [
        "read() requires byte array",
        "Unreported exceptions: `FileNotFoundException` (from FileReader) and `IOException` (from read()) must be caught or declared",
        "c must be char",
        "FileReader is deprecated"
      ],
      "answer": 1,
      "explain": "Both `new FileReader` and `fr.read()` throw checked exceptions (`FileNotFoundException` and `IOException`) that must be handled or declared.",
      "topic": "Multiple Checked Exceptions in I/O",
      "type": "error",
      "level": "easy",
      "strength": "Recognized unhandled checked exceptions from FileReader and read().",
      "weakness": "Handle both `FileNotFoundException` and `IOException` when working with FileReader."
    },
    {
      "q": "What does this code print?\n```java\nScanner sc = new Scanner(\"Line1\\nLine2\\nLine3\");\nint count = 0;\nwhile (sc.hasNext()) {\n    sc.next();\n    count++;\n}\nSystem.out.println(count);\n```",
      "options": [
        "3",
        "1",
        "6",
        "0"
      ],
      "answer": 0,
      "explain": "`sc.next()` treats newlines as standard whitespace delimiters. It consumes 3 tokens: `Line1`, `Line2`, `Line3`. Count is 3.",
      "topic": "Whitespace Token Traversal Output",
      "type": "output",
      "level": "easy",
      "strength": "Recognized newlines as whitespace delimiters for next().",
      "weakness": "Newlines act as whitespace delimiters; 3 tokens counted."
    },
    {
      "q": "A point-of-sale terminal saves daily receipt totals to `receipts.txt`. If the application crashes unexpectedly mid-day, how can you ensure the latest receipt was actually written to the disk platter immediately after `pw.println(receipt)`?",
      "options": [
        "Reboot the POS terminal",
        "Call `pw.flush();` immediately after writing the receipt to force the buffer to commit to disk",
        "Close and reopen the file after every character",
        "Set PrintWriter to read-only"
      ],
      "answer": 1,
      "explain": "`flush()` forces any bytes buffered in memory to be written immediately to the underlying file, guaranteeing durability before a potential crash.",
      "topic": "Durability via Explicit Buffer Flushing",
      "type": "scenario",
      "level": "easy",
      "strength": "Understands immediate persistence via explicit flush().",
      "weakness": "Call `pw.flush()` to force immediate disk synchronization for critical records."
    },
    {
      "q": "What does this code print?\n```java\nScanner sc = new Scanner(\"hello world\");\nSystem.out.println(sc.next().toUpperCase() + \" \" + sc.next().length());\n```",
      "options": [
        "HELLO 5",
        "HELLO 11",
        "HELLO WORLD",
        "hello 5"
      ],
      "answer": 0,
      "explain": "First token: `\"hello\"` -> `\"HELLO\"`. Second token: `\"world\"` -> length is 5. Prints `HELLO 5`.",
      "topic": "Token Method Invocations",
      "type": "output",
      "level": "easy",
      "strength": "Evaluated String methods on consecutive scanned tokens.",
      "weakness": "Outputs `HELLO 5`."
    },
    {
      "q": "A sensor data collector creates a daily file named `log_YYYY_MM_DD.txt`. How should the file name string be generated dynamically using Java's `LocalDate`?",
      "options": [
        "`String name = \"log_\" + LocalDate.now() + \".txt\";`",
        "`String name = \"log_today.txt\";`",
        "`String name = new File(LocalDate.now());`",
        "`String name = LocalDate.toString().replace('-', '_');`"
      ],
      "answer": 0,
      "explain": "`LocalDate.now().toString()` outputs `YYYY-MM-DD` (ISO-8601). String concatenation `\"log_\" + LocalDate.now() + \".txt\"` produces `log_2026-10-06.txt` cleanly.",
      "topic": "Dynamic Filename Formatting",
      "type": "scenario",
      "level": "easy",
      "strength": "Constructed dynamic date-stamped filenames cleanly.",
      "weakness": "Use `LocalDate.now()` to generate date-stamped dynamic filenames."
    },
    {
      "q": "Can a try-with-resources statement declare multiple resources in a single try header?",
      "options": [
        "No, only one resource per try statement",
        "Yes, separated by semicolons: `try (Scanner sc = ...; PrintWriter pw = ...) { ... }`",
        "Yes, separated by commas",
        "Only if they are of the exact same type"
      ],
      "answer": 1,
      "explain": "Multiple resources can be declared inside the try parentheses, separated by semicolons. They are closed in reverse order of declaration upon exit.",
      "topic": "Multiple Resources in Try-With-Resources",
      "type": "theory",
      "level": "medium",
      "strength": "Knows syntax for managing multiple resources in try-with-resources.",
      "weakness": "Separate multiple resources with semicolons in the try header."
    },
    {
      "q": "Why does this code throw `NullPointerException`?\n```java\nFile dir = new File(\"nonExistentFolder\");\nfor (File f : dir.listFiles()) {\n    System.out.println(f.getName());\n}\n```",
      "options": [
        "f.getName() is null",
        "If the path does not exist or is not a directory, `dir.listFiles()` returns `null`, causing the enhanced for-loop to throw `NullPointerException`",
        "File cannot be iterated",
        "println cannot print filenames"
      ],
      "answer": 1,
      "explain": "`listFiles()` returns `null` (not an empty array) if the abstract pathname does not denote an existing directory. Iterating over `null` triggers `NullPointerException`.",
      "topic": "listFiles Null Return Trap",
      "type": "error",
      "level": "medium",
      "strength": "Caught NullPointerException from listFiles() on non-existent directory.",
      "weakness": "Check `dir.exists() && dir.isDirectory()` before calling `dir.listFiles()`."
    },
    {
      "q": "What is the output of this code?\n```java\nScanner sc = new Scanner(\"cat,dog,bird\");\nsc.useDelimiter(\",\");\nint count = 0;\nwhile (sc.hasNext()) {\n    sc.next();\n    count++;\n}\nSystem.out.println(count);\n```",
      "options": [
        "1",
        "3",
        "2",
        "0"
      ],
      "answer": 1,
      "explain": "Delimiter `,` splits into 3 tokens: `\"cat\"`, `\"dog\"`, `\"bird\"`. Count is 3.",
      "topic": "Custom Delimiter Token Count",
      "type": "output",
      "level": "easy",
      "strength": "Counted tokens using custom comma delimiter.",
      "weakness": "3 comma-separated tokens yield count = 3."
    },
    {
      "q": "A cloud service needs to atomic-rename a completed upload from `upload.part` to `upload.final`. Why is `file.renameTo()` preferred over reading and rewriting all bytes?",
      "options": [
        "renameTo encrypts the payload",
        "`renameTo()` performs an O(1) filesystem metadata update without moving or copying raw byte data on disk, completing instantaneously",
        "renameTo runs on the network",
        "rewriting bytes is forbidden in Java"
      ],
      "answer": 1,
      "explain": "On the same filesystem volume, `renameTo()` updates only directory pointer metadata in O(1) time, avoiding reading/writing gigabytes of data.",
      "topic": "Atomic O(1) File Renaming",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands O(1) filesystem metadata renaming vs byte copying.",
      "weakness": "`renameTo()` updates file metadata in O(1) time without copying bytes."
    },
    {
      "q": "What is the difference between an absolute path and a relative path in Java?",
      "options": [
        "Absolute paths are relative to the user's home folder; relative paths are from root",
        "An absolute path begins from the file system root (e.g. `C:\\` or `/`); a relative path is resolved relative to the current working directory where the JVM was launched",
        "Relative paths only work on Windows",
        "There is no difference"
      ],
      "answer": 1,
      "explain": "Absolute paths specify the complete location from the root directory. Relative paths are resolved against the current working directory (`System.getProperty(\"user.dir\")`).",
      "topic": "Absolute vs Relative Paths",
      "type": "theory",
      "level": "easy",
      "strength": "Distinguishes absolute filesystem paths from relative paths.",
      "weakness": "Relative paths resolve against the JVM's current working directory."
    },
    {
      "q": "Why does this code fail to compile?\n```java\nFile dir = new File(\"myFolder\");\nString[] files = dir.listFiles();\n```",
      "options": [
        "myFolder must be absolute path",
        "Incompatible types: `dir.listFiles()` returns `File[]`, not `String[]` (use `dir.list()` for String array)",
        "listFiles cannot be called on File",
        "files must be List"
      ],
      "answer": 1,
      "explain": "`dir.listFiles()` returns an array of `File` objects (`File[]`). To obtain an array of file name strings, use `dir.list()`.",
      "topic": "listFiles vs list Return Type",
      "type": "error",
      "level": "easy",
      "strength": "Distinguished listFiles() returning File[] from list() returning String[].",
      "weakness": "`dir.listFiles()` returns `File[]`; `dir.list()` returns `String[]`."
    },
    {
      "q": "What is the output of this code?\n```java\nFile f = new File(\"test.dat\");\nboolean isDir = f.isDirectory();\nSystem.out.println(isDir);\n```",
      "options": [
        "false",
        "true",
        "NullPointerException",
        "Compilation error"
      ],
      "answer": 0,
      "explain": "If `test.dat` does not exist or is a regular file, `f.isDirectory()` returns `false`.",
      "topic": "File.isDirectory Evaluation",
      "type": "output",
      "level": "easy",
      "strength": "Evaluated isDirectory on non-directory pathname.",
      "weakness": "`isDirectory()` returns false for files or non-existent paths."
    },
    {
      "q": "A malware scanner checks file extensions. A user renames `virus.exe` to `virus.txt.exe`. How should the scanner isolate the TRUE file extension?",
      "options": [
        "Find the first period `indexOf('.')`",
        "Find the last period `lastIndexOf('.')` and extract the substring following it",
        "Check if filename contains \"exe\"",
        "Split by spaces"
      ],
      "answer": 1,
      "explain": "Files can have multiple dots (e.g. `archive.tar.gz`). The true file extension is the substring following the final dot: `name.substring(name.lastIndexOf('.') + 1)`.",
      "topic": "File Extension Isolation via lastIndexOf",
      "type": "scenario",
      "level": "easy",
      "strength": "Isolated terminal file extension via lastIndexOf('.').",
      "weakness": "Use `lastIndexOf('.')` to identify the final extension in multi-dotted filenames."
    },
    {
      "q": "What does this code print?\n```java\nScanner sc = new Scanner(\"3 0 2\");\nint total = 0;\nwhile (sc.hasNextInt()) {\n    int n = sc.nextInt();\n    if (n == 0) continue;\n    total += n;\n}\nSystem.out.println(total);\n```",
      "options": [
        "5",
        "3",
        "0",
        "2"
      ],
      "answer": 0,
      "explain": "3 is added (total=3); 0 is skipped by continue; 2 is added (total=5). Outputs 5.",
      "topic": "Token Sum with Filter Continue",
      "type": "output",
      "level": "easy",
      "strength": "Filtered scanned tokens using continue.",
      "weakness": "`3 + 2 = 5`."
    },
    {
      "q": "A desktop application saves user preferences to `prefs.properties`. Which standard Java class is specifically designed to load and store key-value configuration pairs from/to a stream?",
      "options": [
        "`java.util.Properties` via `.load(InputStream)` and `.store(OutputStream, comments)`",
        "`java.util.Scanner`",
        "`java.io.PrintWriter` only",
        "`java.util.ArrayList`"
      ],
      "answer": 0,
      "explain": "`java.util.Properties` is the built-in Java class for managing key-value configuration files, with native stream loading and saving support.",
      "topic": "Properties Configuration Storage",
      "type": "scenario",
      "level": "easy",
      "strength": "Recognized java.util.Properties for configuration persistence.",
      "weakness": "Use `java.util.Properties` to load and save key-value application preferences."
    }
  ],
  "6": [
    {
      "q": "What rule governs constructor chaining using `this(...)` inside a constructor?",
      "options": [
        "`this(...)` can be placed anywhere in the constructor body",
        "`this(...)` MUST be the very first statement in the constructor body",
        "A constructor can contain multiple `this(...)` calls",
        "`this(...)` can only call constructors with fewer parameters"
      ],
      "answer": 1,
      "explain": "The invocation of another constructor via `this(...)` must strictly be the first statement in a constructor. Violating this triggers a compilation error.",
      "topic": "Constructor Chaining with this()",
      "type": "theory",
      "level": "medium",
      "strength": "Knows that `this(...)` must be the first statement in a constructor.",
      "weakness": "Constructor calls using `this(...)` must be the very first line of the constructor."
    },
    {
      "q": "What is the compilation issue in this snippet?\n```java\npublic class Item {\n    int price;\n    public Item(int price) {\n        this(price, 0);\n        this.price = price;\n    }\n    public Item(int price, int discount) {}\n}\n```",
      "options": [
        "Item cannot have 2 constructors",
        "The code compiles cleanly! Calling `this(...)` as the first statement followed by other assignments is completely valid",
        "price cannot be 0",
        "this cannot take 2 parameters"
      ],
      "answer": 1,
      "explain": "`this(price, 0)` is the first statement, which satisfies Java syntax. Subsequent lines like `this.price = price;` are completely valid statements after constructor chaining.",
      "topic": "Valid Constructor Chaining Sequence",
      "type": "error",
      "level": "hard",
      "strength": "Understands that additional statements are permitted after `this(...)` in a constructor.",
      "weakness": "`this(...)` must be the FIRST statement, but statements can follow it in the constructor body."
    },
    {
      "q": "What is printed by this code?\n```java\npublic class InitDemo {\n    static { System.out.print(\"S \"); }\n    { System.out.print(\"I \"); }\n    public InitDemo() { System.out.print(\"C \"); }\n    public static void main(String[] args) {\n        new InitDemo();\n        new InitDemo();\n    }\n}\n```",
      "options": [
        "S I C I C ",
        "I C I C S ",
        "S C I C I ",
        "S I C "
      ],
      "answer": 0,
      "explain": "Static block `S ` runs once on class load. For each instantiation, instance block `I ` runs before constructor `C `. Order: `S I C I C `.",
      "topic": "Static and Instance Initializer Order",
      "type": "output",
      "level": "hard",
      "strength": "Mastered initialization block execution sequence.",
      "weakness": "Static blocks run once on class load; instance initializers run before each constructor call."
    },
    {
      "q": "A cryptography library creates an immutable `SecretKey` class holding a byte array: `public SecretKey(byte[] rawKey)`. Why is `this.rawKey = rawKey;` a severe security bug, and what is the fix?",
      "options": [
        "Byte arrays cannot be assigned",
        "Vulnerability: the caller retains a reference to `rawKey` and can mutate bytes externally after creation; fix by creating a defensive clone `this.rawKey = rawKey.clone();`",
        "rawKey must be a String",
        "SecretKey must extend Thread"
      ],
      "answer": 1,
      "explain": "Directly storing an external mutable array breaks immutability because the caller can modify the array afterwards. The constructor must make a defensive copy (`rawKey.clone()`).",
      "topic": "Defensive Copying in Immutable Classes",
      "type": "scenario",
      "level": "hard",
      "strength": "Applied defensive cloning to protect immutable class integrity.",
      "weakness": "Clone mutable parameters in constructors to prevent callers from tampering with internal state."
    },
    {
      "q": "What is the difference between a class and an object in Java?",
      "options": [
        "A class is an instance in memory; an object is source code",
        "A class is a blueprint/template defining state (fields) and behavior (methods); an object is a concrete instance of that class allocated on the heap",
        "A class can hold data; an object can only hold methods",
        "They are identical synonyms in Java"
      ],
      "answer": 1,
      "explain": "A class defines the type, structure, and behavior. An object is a runtime instance created from the class blueprint using `new`.",
      "topic": "Class vs Object Concept",
      "type": "theory",
      "level": "easy",
      "strength": "Understands the core relationship between classes and objects.",
      "weakness": "A class is a blueprint; an object is an instance created in heap memory."
    },
    {
      "q": "Why does this code cause a compilation error?\n```java\npublic class Book {\n    public Book(String title) {}\n}\n// in main:\nBook b = new Book();\n```",
      "options": [
        "Book cannot be public",
        "Cannot find symbol: constructor `Book()` without arguments does not exist because declaring `Book(String)` suppresses default constructor generation",
        "b must be capitalized",
        "new keyword is missing parameter"
      ],
      "answer": 1,
      "explain": "Because the programmer declared a parameterized constructor `Book(String)`, the compiler does NOT generate the default no-arg constructor. Calling `new Book()` fails.",
      "topic": "Suppressed Default Constructor Error",
      "type": "error",
      "level": "easy",
      "strength": "Recognized that user-defined constructors suppress default constructor generation.",
      "weakness": "Declaring a parameterized constructor suppresses the automatic no-arg constructor."
    },
    {
      "q": "What does this code print?\n```java\npublic class Box {\n    int w, h;\n    public Box(int w, int h) {\n        this.w = w;\n        this.h = h;\n    }\n}\n// in main:\nBox b1 = new Box(10, 20);\nBox b2 = b1;\nb2.w = 50;\nSystem.out.println(b1.w);\n```",
      "options": [
        "10",
        "50",
        "20",
        "NullPointerException"
      ],
      "answer": 1,
      "explain": "`b2 = b1` copies the reference address. Both `b1` and `b2` point to the exact same object on the heap. Mutating `b2.w` changes `b1.w` to 50.",
      "topic": "Object Reference Aliasing Output",
      "type": "output",
      "level": "easy",
      "strength": "Recognized that modifying an aliased reference mutates the shared heap object.",
      "weakness": "`b2 = b1` creates an alias; mutating `b2.w` modifies `b1.w` directly."
    },
    {
      "q": "You are designing a banking application module in Java. The `Account` class has a `balance` field. Why MUST `balance` be declared `private` and accessed only via `deposit()` and `withdraw()` methods?",
      "options": [
        "Private fields take up less memory",
        "Encapsulation: to prevent external code from setting negative balances, bypassing fraud checks, or corrupting state without validation",
        "Banking regulations require variables to use the `byte` primitive",
        "Public fields cannot be saved to databases"
      ],
      "answer": 1,
      "explain": "Encapsulation ensures that financial balances can only be mutated through validated business methods (`deposit`, `withdraw`), protecting the object's invariants.",
      "topic": "Banking Encapsulation Integrity",
      "type": "scenario",
      "level": "easy",
      "strength": "Understands encapsulation invariants for financial entities.",
      "weakness": "Make fields private and enforce business rules through validated methods."
    },
    {
      "q": "What is package-private (default) access in Java?",
      "options": [
        "Accessible from any class in any package",
        "Accessible only by classes located within the exact same package",
        "Accessible only within the declaring class",
        "Accessible by subclasses in different packages"
      ],
      "answer": 1,
      "explain": "When no access modifier is specified (default access), the member is accessible to any class in the same package, but inaccessible to classes outside that package.",
      "topic": "Package-Private (Default) Access",
      "type": "theory",
      "level": "easy",
      "strength": "Knows scope of package-private access modifier.",
      "weakness": "Default (no modifier) access restricts visibility to classes within the same package."
    },
    {
      "q": "An IoT weather device measures atmospheric humidity. The `HumiditySensor` class has `int humidity`. When instantiated, the sensor immediately calibrates hardware via `calibrateHardware()`. Where should hardware calibration be triggered?",
      "options": [
        "In the class constructor `public HumiditySensor()`",
        "In a finalized method",
        "In the toString method",
        "Outside the class in an unrelated utility"
      ],
      "answer": 0,
      "explain": "Constructors are responsible for putting an object into a fully initialized, valid, operational initial state upon completion of instantiation.",
      "topic": "Hardware Initialization in Constructors",
      "type": "scenario",
      "level": "easy",
      "strength": "Understands constructor responsibility for complete object lifecycle readiness.",
      "weakness": "Use constructors to establish complete, operational initial object state."
    },
    {
      "q": "What is a static initialization block (`static { ... }`) in a Java class?",
      "options": [
        "A block executed every time a new object is instantiated",
        "A block executed once when the class is first loaded into memory by the JVM, before any constructors or main method calls",
        "A block that runs right before garbage collection",
        "A block for handling checked exceptions"
      ],
      "answer": 1,
      "explain": "A `static` initialization block runs exactly once when the class is loaded by the JVM ClassLoader, commonly used to initialize complex static fields.",
      "topic": "Static Initialization Block",
      "type": "theory",
      "level": "medium",
      "strength": "Understands when static initializer blocks execute.",
      "weakness": "Static initialization blocks execute once when the class is loaded into memory."
    },
    {
      "q": "Why does this code fail to compile?\n```java\npublic class Widget {\n    private static int totalWidgets;\n    public void add() {\n        this.totalWidgets++;\n    }\n}\n```",
      "options": [
        "static variables cannot be incremented",
        "It compiles! Accessing a static field using `this.` or an instance reference is valid syntax (though discouraged)",
        "totalWidgets must be final",
        "add must be static"
      ],
      "answer": 1,
      "explain": "Accessing static fields via an instance reference (`this.totalWidgets`) is valid in Java (though triggers a compiler warning recommending `Widget.totalWidgets`). It does NOT fail compilation.",
      "topic": "Static Access via Instance Syntax Validity",
      "type": "error",
      "level": "hard",
      "strength": "Understands that accessing static members via instance references compiles with a warning.",
      "weakness": "Accessing static members through instance references compiles but is discouraged; use class qualification."
    },
    {
      "q": "What is the output of this code?\n```java\npublic class Item {\n    static int count = 0;\n    public Item() { count += 2; }\n    public static void main(String[] args) {\n        Item[] items = new Item[3];\n        System.out.println(Item.count);\n    }\n}\n```",
      "options": [
        "6",
        "0",
        "2",
        "NullPointerException"
      ],
      "answer": 1,
      "explain": "`new Item[3]` allocates an array of 3 object references (all initialized to `null`). It does NOT instantiate any `Item` objects, so the constructor never runs! `Item.count` remains 0.",
      "topic": "Array Allocation Does Not Call Constructor",
      "type": "output",
      "level": "hard",
      "strength": "Mastered the classic trap: allocating an object array does not instantiate elements.",
      "weakness": "`new Item[3]` creates an array of null references without running constructors; count remains 0."
    },
    {
      "q": "A memory leak occurs in a Java desktop application because discarded `Listener` objects are still referenced by a static event bus: `EventBus.listeners.add(listener);`. Why does the Garbage Collector fail to reclaim these listeners?",
      "options": [
        "Garbage collection only runs on program exit",
        "A static collection lives for the entire JVM lifetime; because it holds strong references to the listeners, they remain reachable in the GC root graph and cannot be freed",
        "Listeners cannot be garbage collected",
        "The JVM ran out of stack memory"
      ],
      "answer": 1,
      "explain": "Static collections act as persistent GC roots. Retaining references to objects in static collections prevents them from ever being garbage collected, causing memory leaks.",
      "topic": "Static Reference GC Root Memory Leak",
      "type": "scenario",
      "level": "hard",
      "strength": "Identified static collection reference retention as a primary cause of Java memory leaks.",
      "weakness": "Static collections never die; remove references when objects are no longer needed to prevent memory leaks."
    },
    {
      "q": "When does the Java compiler automatically generate a default no-argument constructor for a class?",
      "options": [
        "Always, for every class regardless of user code",
        "Only if the programmer declares NO constructors of any kind in the class",
        "Only if the class is declared public",
        "Only if the class extends another class"
      ],
      "answer": 1,
      "explain": "If a class contains zero constructor definitions, `javac` automatically synthesizes a default no-arg constructor. If the programmer defines ANY constructor (with or without arguments), no default constructor is generated.",
      "topic": "Default Constructor Generation",
      "type": "theory",
      "level": "easy",
      "strength": "Knows the rule for compiler default constructor generation.",
      "weakness": "The compiler only provides a default constructor if no constructors are declared by the developer."
    },
    {
      "q": "Identify the compilation error in this constructor chaining code:\n```java\npublic class Point {\n    private int x, y;\n    public Point(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n    public Point() {\n        System.out.println(\"Default\");\n        this(0, 0);\n    }\n}\n```",
      "options": [
        "Point cannot have two constructors",
        "Constructor call `this(0, 0)` must be the first statement in the constructor body",
        "x and y cannot be private",
        "println cannot be in constructors"
      ],
      "answer": 1,
      "explain": "`this(...)` must strictly appear as the first statement in a constructor. Placing `System.out.println` before `this(0, 0)` causes: 'call to this must be first statement in constructor'.",
      "topic": "Misplaced this() Constructor Call",
      "type": "error",
      "level": "easy",
      "strength": "Spotted misplaced `this(...)` constructor call.",
      "weakness": "`this(...)` must be the very first statement inside a constructor."
    },
    {
      "q": "What does the following snippet print?\n```java\npublic class Demo {\n    static int x = 10;\n    public static void main(String[] args) {\n        Demo d1 = new Demo();\n        Demo d2 = new Demo();\n        d1.x = 50;\n        System.out.println(d2.x);\n    }\n}\n```",
      "options": [
        "10",
        "50",
        "0",
        "Compilation error"
      ],
      "answer": 1,
      "explain": "`x` is a static field shared by all instances. Changing `d1.x` updates the single class variable, so `d2.x` is 50.",
      "topic": "Static Field Modification via Instance Output",
      "type": "output",
      "level": "easy",
      "strength": "Understands that static field mutation via one instance affects all instances.",
      "weakness": "Static fields share one memory location; mutating via `d1.x` updates `d2.x` to 50."
    },
    {
      "q": "A game developer creates an online multiplayer game where all connected players share the same server IP address and maximum player limit. How should these two configuration settings be declared inside the `Player` class?",
      "options": [
        "As instance variables `public String serverIp;`",
        "As static variables: `public static final String SERVER_IP = \"10.0.0.1\"; public static final int MAX_PLAYERS = 100;`",
        "In a local variable inside the constructor",
        "As private parameters in every method"
      ],
      "answer": 1,
      "explain": "Values shared by all instances should be `static` (one copy in memory). Constants should be marked `final`.",
      "topic": "Shared Configuration via Static Final",
      "type": "scenario",
      "level": "easy",
      "strength": "Identified static final constants for shared system configuration.",
      "weakness": "Use `static final` for shared, immutable configuration constants."
    },
    {
      "q": "What is garbage collection in Java?",
      "options": [
        "Deleting source code files after compilation",
        "An automatic JVM memory management process that identifies and reclaims heap memory occupied by objects that are no longer reachable by any active reference",
        "Clearing local variables from the stack",
        "Shutting down the operating system"
      ],
      "answer": 1,
      "explain": "The JVM's Garbage Collector automatically frees heap memory occupied by unreachable objects, eliminating manual memory deallocation (`free`/`delete`).",
      "topic": "Garbage Collection Architecture",
      "type": "theory",
      "level": "easy",
      "strength": "Understands automatic JVM heap garbage collection.",
      "weakness": "Garbage collection automatically reclaims heap memory of unreachable objects."
    },
    {
      "q": "A developer creates a `Fraction` class with `numerator` and `denominator`. In the constructor `public Fraction(int num, int den)`, what check must be executed before assigning fields?",
      "options": [
        "`if (den == 0) throw new IllegalArgumentException(\"Denominator cannot be zero\");`",
        "`if (num == 0) den = 1;`",
        "`if (den < 0) den = -den;`",
        "`Math.sqrt(den);`"
      ],
      "answer": 0,
      "explain": "A mathematical fraction cannot have a zero denominator. Validating this invariant in the constructor prevents creating invalid fraction objects in memory.",
      "topic": "Constructor Invariant Defense",
      "type": "scenario",
      "level": "easy",
      "strength": "Protected domain invariants in constructor validation.",
      "weakness": "Enforce domain invariants (e.g. non-zero denominator) inside constructors before assignment."
    },
    {
      "q": "What is an instance initialization block (`{ ... }` without static) in a Java class?",
      "options": [
        "A block executed once per class load",
        "A block executed every time a new object instance is created, running immediately before the constructor body executes",
        "A block executed only when an object is cloned",
        "A block executed when a method returns"
      ],
      "answer": 1,
      "explain": "An instance initializer block runs every time an object is instantiated, executed before the constructor's body (after `super()` completes).",
      "topic": "Instance Initialization Block",
      "type": "theory",
      "level": "medium",
      "strength": "Understands instance initializer execution timing.",
      "weakness": "Instance initializers run before the constructor body whenever a new instance is created."
    },
    {
      "q": "Identify the issue in this code:\n```java\npublic class Data {\n    public int x;\n    public void copy(Data other) {\n        other.x = this.x;\n    }\n}\n```",
      "options": [
        "x must be private",
        "It compiles cleanly! Private and public fields of any instance of the same class are accessible within that class's methods",
        "this cannot be used with other",
        "copy must be static"
      ],
      "answer": 1,
      "explain": "In Java, access modifiers are class-based, not instance-based. Any method in class `Data` can access members of any `Data` instance. The code compiles cleanly.",
      "topic": "Class-Based Access Modifier Scope",
      "type": "error",
      "level": "hard",
      "strength": "Understands that private/public access is class-based, allowing peer instance access.",
      "weakness": "In Java, encapsulation is class-based: methods of a class can access members of any instance of that same class."
    },
    {
      "q": "What is the output of this constructor chaining code?\n```java\npublic class Test {\n    public Test() {\n        this(5);\n        System.out.print(\"A \");\n    }\n    public Test(int x) {\n        System.out.print(\"B \");\n    }\n    public static void main(String[] args) {\n        new Test();\n    }\n}\n```",
      "options": [
        "A B ",
        "B A ",
        "A ",
        "B "
      ],
      "answer": 1,
      "explain": "`new Test()` calls `this(5)`. `Test(int)` executes first, printing `\"B \"`. Then control returns to `Test()`, which prints `\"A \"`. Output: `B A `.",
      "topic": "Constructor Chaining Execution Order",
      "type": "output",
      "level": "medium",
      "strength": "Traced execution order in constructor chaining.",
      "weakness": "`this(...)` executes the target constructor first, then returns to complete the caller constructor."
    },
    {
      "q": "A university student record has mandatory fields (`id`, `name`) and optional fields (`email`, `phone`, `scholarshipStatus`). Rather than writing 8 different overloaded constructors, what design pattern solves this cleanly in Java?",
      "options": [
        "Builder pattern",
        "Singleton pattern",
        "Observer pattern",
        "Infinite recursive constructor"
      ],
      "answer": 1,
      "explain": "The Builder pattern provides a flexible, fluent API for constructing complex objects with many optional parameters, avoiding telescoping constructor anti-patterns.",
      "topic": "Builder Pattern for Complex Instantiation",
      "type": "scenario",
      "level": "medium",
      "strength": "Recognized the Builder pattern as the solution to telescoping constructors.",
      "weakness": "Use the Builder pattern to construct objects with numerous optional parameters."
    },
    {
      "q": "What is the purpose of the `this` keyword in Java?",
      "options": [
        "To refer to the parent superclass",
        "To refer to the current object instance whose method or constructor is being invoked",
        "To create a new thread",
        "To allocate memory on the stack"
      ],
      "answer": 1,
      "explain": "`this` is an implicit reference to the current object instance. It is commonly used to resolve variable shadowing between instance fields and parameters (`this.x = x`) or invoke overloaded constructors (`this(...)`).",
      "topic": "This Keyword",
      "type": "theory",
      "level": "easy",
      "strength": "Understands the role of the `this` reference.",
      "weakness": "`this` refers to the current object instance."
    },
    {
      "q": "What is the compilation issue in this static method?\n```java\npublic class Counter {\n    private int count = 0;\n    public static void increment() {\n        count++;\n    }\n}\n```",
      "options": [
        "count cannot be initialized to 0",
        "Non-static field `count` cannot be referenced from a static context (`increment()`)",
        "increment must return int",
        "static methods cannot be public"
      ],
      "answer": 1,
      "explain": "`increment()` is static (class-level), while `count` is an instance field. A static method cannot access instance fields directly because no object instance exists.",
      "topic": "Static Accessing Instance Field Error",
      "type": "error",
      "level": "easy",
      "strength": "Caught static method attempting to access non-static instance field.",
      "weakness": "Static methods cannot directly access non-static instance fields."
    },
    {
      "q": "What does this code print?\n```java\npublic class Point {\n    int x, y;\n    public Point(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n    public String toString() {\n        return \"(\" + x + \",\" + y + \")\";\n    }\n    public static void main(String[] args) {\n        Point p = new Point(3, 4);\n        System.out.println(p);\n    }\n}\n```",
      "options": [
        "(3,4)",
        "Point@15db9742",
        "3 4",
        "Point"
      ],
      "answer": 0,
      "explain": "Passing `p` to `println` invokes its overridden `toString()` method, which outputs `(3,4)`.",
      "topic": "Overridden toString Output",
      "type": "output",
      "level": "easy",
      "strength": "Identified output of custom overridden toString() method.",
      "weakness": "`println(p)` invokes the overridden `toString()` method, producing `(3,4)`."
    },
    {
      "q": "A database connection manager must maintain exactly ONE active connection instance across the entire application lifecycle to prevent connection pooling exhaustion. Which design pattern should be implemented?",
      "options": [
        "Factory pattern",
        "Singleton pattern (private constructor, private static instance, public static `getInstance()`)",
        "Observer pattern",
        "Prototype pattern"
      ],
      "answer": 1,
      "explain": "The Singleton pattern restricts class instantiation to a single shared instance, ideal for global managers (database pools, loggers).",
      "topic": "Database Manager Singleton Pattern",
      "type": "scenario",
      "level": "easy",
      "strength": "Applied Singleton pattern for singular resource managers.",
      "weakness": "Implement the Singleton pattern with a private constructor to enforce a single global instance."
    },
    {
      "q": "What method is called when you print an object directly: `System.out.println(myObject);`?",
      "options": [
        "`myObject.print()`",
        "`myObject.toString()`",
        "`myObject.display()`",
        "`myObject.dump()`"
      ],
      "answer": 1,
      "explain": "`PrintStream.println(Object)` internally calls `String.valueOf(obj)`, which invokes `obj.toString()` (or prints `\"null\"` if the object reference is null).",
      "topic": "toString Method Invocation",
      "type": "theory",
      "level": "easy",
      "strength": "Knows that println invokes toString() on object arguments.",
      "weakness": "`println(obj)` invokes `obj.toString()` to obtain a string representation."
    },
    {
      "q": "Why does this code throw a `NullPointerException`?\n```java\npublic class Classroom {\n    Student leader;\n    public void printLeader() {\n        System.out.println(leader.getName());\n    }\n}\n```",
      "options": [
        "leader is not a Student",
        "Instance field `leader` is uninitialized and defaults to `null`; dereferencing `leader.getName()` throws `NullPointerException`",
        "Classroom cannot print",
        "getName() must be static"
      ],
      "answer": 1,
      "explain": "Object instance fields initialize to `null` by default. Attempting to invoke `.getName()` on an uninitialized reference throws `NullPointerException`.",
      "topic": "Default Null Field Dereference",
      "type": "error",
      "level": "easy",
      "strength": "Identified NullPointerException on uninitialized object field.",
      "weakness": "Object instance fields default to `null`; initialize them before calling methods."
    },
    {
      "q": "What is a copy constructor in Java?",
      "options": [
        "A constructor generated automatically by the compiler",
        "A constructor that creates a new object by copying the fields of an existing object of the same class: `public Person(Person other)`",
        "A constructor that clones arrays only",
        "A constructor marked with the `copy` keyword"
      ],
      "answer": 1,
      "explain": "A copy constructor takes another instance of the same class as a parameter and initializes the new object's fields to match, providing a clean alternative to `.clone()`.",
      "topic": "Copy Constructor Pattern",
      "type": "theory",
      "level": "medium",
      "strength": "Identifies copy constructor design pattern in Java.",
      "weakness": "A copy constructor creates a new instance initialized with values from an existing instance."
    },
    {
      "q": "Why does this constructor fail to initialize the instance variable?\n```java\npublic class Car {\n    private String model;\n    public Car(String model) {\n        model = model;\n    }\n    public String getModel() { return model; }\n}\n```",
      "options": [
        "Compilation error: cannot name parameter model",
        "Shadowing bug: `model = model;` assigns the parameter to itself; the instance field remains null (must use `this.model = model;`)",
        "getModel must be static",
        "Car cannot return model"
      ],
      "answer": 1,
      "explain": "The parameter `model` shadows the field `model`. `model = model;` assigns the parameter to itself. To assign to the instance field, `this.model = model;` is required.",
      "topic": "Parameter Shadowing Assignment Bug",
      "type": "error",
      "level": "medium",
      "strength": "Identified parameter self-assignment due to missing `this.` qualifier.",
      "weakness": "Use `this.field = param;` to resolve variable shadowing in constructors."
    },
    {
      "q": "What is the output of this code?\n```java\npublic class Person {\n    String name;\n    public Person(String name) {\n        name = name;\n    }\n    public static void main(String[] args) {\n        Person p = new Person(\"Alice\");\n        System.out.println(p.name);\n    }\n}\n```",
      "options": [
        "Alice",
        "null",
        "Person",
        "Compilation error"
      ],
      "answer": 1,
      "explain": "Because `this.` was omitted, `name = name` assigns the parameter to itself. The instance field `this.name` remains uninitialized and retains its default value `null`.",
      "topic": "Missing this Null Output",
      "type": "output",
      "level": "medium",
      "strength": "Recognized uninitialized field resulting from missing `this.` qualification.",
      "weakness": "Without `this.`, the instance field is never assigned, retaining its default `null` value."
    },
    {
      "q": "A flight reservation system represents an airplane seat with a `Seat` class containing `row`, `col`, and `isBooked`. A method `bookSeat(Seat s)` is called. Why does mutating `s.setBooked(true)` inside the method update the seat in the caller's seating chart?",
      "options": [
        "Java is pass-by-reference",
        "Java passes the reference by value; both the method parameter `s` and the caller's seating chart reference point to the exact same `Seat` object on the heap",
        "The JVM restarts",
        "Seat implements Cloneable"
      ],
      "answer": 1,
      "explain": "Java passes object references by value. Both references point to the identical heap object, so state modifications via setter methods mutate the shared object.",
      "topic": "Shared Heap Object Mutation",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands heap object mutation via passed reference copies.",
      "weakness": "Object references are copied by value; mutating object state alters the shared heap instance."
    },
    {
      "q": "What is the difference between a `static` variable and an instance variable?",
      "options": [
        "Instance variables are shared across all instances; static variables belong to individual objects",
        "Static variables belong to the class itself and are shared by all instances (one copy in memory); instance variables belong to specific object instances (each instance has its own copy)",
        "Static variables cannot be modified; instance variables can",
        "Static variables are allocated on the stack"
      ],
      "answer": 1,
      "explain": "A `static` field belongs to the class and exists once per classloader, shared by all instances. Instance fields are allocated separately for each object instance on the heap.",
      "topic": "Static vs Instance Variables",
      "type": "theory",
      "level": "easy",
      "strength": "Distinguishes class-level static fields from instance fields.",
      "weakness": "Static fields are shared across all instances; instance fields belong to individual objects."
    },
    {
      "q": "Why does this code cause a compilation error?\n```java\npublic class Test {\n    public static void main(String[] args) {\n        System.out.println(this);\n    }\n}\n```",
      "options": [
        "println cannot print objects",
        "Cannot use 'this' in a static context (`main` is static)",
        "args is not used",
        "Test must have a constructor"
      ],
      "answer": 1,
      "explain": "`this` represents the current instance. Static methods belong to the class and have no instance, so `this` is illegal in static methods.",
      "topic": "This in Static Context Error",
      "type": "error",
      "level": "easy",
      "strength": "Recognized that 'this' is illegal in static methods.",
      "weakness": "The keyword `this` cannot be referenced from a static method."
    },
    {
      "q": "What is the output of this code?\n```java\npublic class A {\n    int val = 10;\n    public static void main(String[] args) {\n        A a1 = new A();\n        A a2 = new A();\n        a1.val = 20;\n        System.out.println(a1.val + \" \" + a2.val);\n    }\n}\n```",
      "options": [
        "20 20",
        "20 10",
        "10 10",
        "10 20"
      ],
      "answer": 1,
      "explain": "`val` is an instance field. Each object maintains its own independent copy. Mutating `a1.val` has no effect on `a2.val`. Output: `20 10`.",
      "topic": "Instance Variable Independence Output",
      "type": "output",
      "level": "easy",
      "strength": "Distinguished separate instance variable state across multiple instances.",
      "weakness": "Instance variables are unique per object; changing `a1.val` leaves `a2.val` at 10."
    },
    {
      "q": "An e-commerce system generates unique sequential order tracking numbers: `ORD-0001`, `ORD-0002`, etc. How can the `Order` class automatically assign the next sequential ID upon every `new Order()` without passing an external counter?",
      "options": [
        "Using a private static integer counter inside `Order` that increments on each constructor call: `private static int nextId = 1;`",
        "Reading a random number",
        "Re-reading the source code file",
        "Using a while loop in main"
      ],
      "answer": 0,
      "explain": "A private `static` counter is shared across all instances. Incrementing it in the constructor guarantees each newly created `Order` receives a unique sequential ID.",
      "topic": "Auto-Incrementing ID via Static Field",
      "type": "scenario",
      "level": "easy",
      "strength": "Implemented auto-incrementing instance identifiers via static fields.",
      "weakness": "Increment a private static counter in the constructor to auto-generate unique sequential IDs."
    },
    {
      "q": "Can two different objects of the same class have different values for a `static` field?",
      "options": [
        "Yes, each object has its own copy of static fields",
        "No, static fields belong to the class; all instances share the exact same single variable and value in memory",
        "Yes, if one is serialized",
        "Only if the field is volatile"
      ],
      "answer": 1,
      "explain": "Static fields are class-level variables. Modifying a static field via one object affects the value seen by all other instances.",
      "topic": "Shared Static State",
      "type": "theory",
      "level": "easy",
      "strength": "Understands that static fields are shared across all instances.",
      "weakness": "All instances share a single copy of a static field."
    },
    {
      "q": "What is the compilation error in this code?\n```java\npublic class Test {\n    static {\n        int x = 10;\n    }\n    public static void main(String[] args) {\n        System.out.println(x);\n    }\n}\n```",
      "options": [
        "static blocks cannot be declared",
        "Cannot find symbol: variable 'x' is local to the static block and not accessible inside `main`",
        "main cannot print x",
        "x must be final"
      ],
      "answer": 1,
      "explain": "Variables declared inside a static initialization block are local to that block. To make `x` accessible across methods, declare it as a static field outside the block.",
      "topic": "Static Block Scope Leak Error",
      "type": "error",
      "level": "easy",
      "strength": "Recognized that variables declared inside static blocks are block-scoped.",
      "weakness": "Variables declared inside a static block are local to that block and cannot be accessed elsewhere."
    },
    {
      "q": "What is the difference between shallow copy and deep copy when copying an object?",
      "options": [
        "Shallow copy is for primitives; deep copy is for Strings only",
        "Shallow copy duplicates primitive fields and copies reference addresses (both objects point to the same nested objects); deep copy creates copies of the nested objects as well",
        "Shallow copy allocates on stack; deep copy allocates on heap",
        "They are identical in Java"
      ],
      "answer": 1,
      "explain": "In a shallow copy, nested object references are shared. In a deep copy, all nested objects are cloned recursively, ensuring complete independence.",
      "topic": "Shallow vs Deep Copy",
      "type": "theory",
      "level": "medium",
      "strength": "Understands shallow vs deep object cloning semantics.",
      "weakness": "Shallow copies share nested object references; deep copies duplicate nested objects independently."
    },
    {
      "q": "What error occurs in this constructor header?\n```java\npublic class Account {\n    public void Account() {\n        System.out.println(\"Created\");\n    }\n}\n```",
      "options": [
        "Account cannot be public",
        "Because it has return type `void`, Java treats it as a regular method, NOT a constructor; calling `new Account()` will invoke the default constructor, not this method",
        "Compilation error: constructors cannot print",
        "Account must take parameters"
      ],
      "answer": 1,
      "explain": "Constructors have NO return type. Adding `void` turns it into a standard method that happens to match the class name. It is not executed during `new Account()`.",
      "topic": "Constructor with Void Return Type Trap",
      "type": "error",
      "level": "medium",
      "strength": "Recognized that adding void to constructor name creates a normal method.",
      "weakness": "Constructors must not have a return type; adding `void` makes it a regular method."
    },
    {
      "q": "What does this code print?\n```java\npublic class Counter {\n    static int count = 0;\n    int id;\n    public Counter() {\n        count++;\n        id = count;\n    }\n    public static void main(String[] args) {\n        Counter c1 = new Counter();\n        Counter c2 = new Counter();\n        System.out.println(c1.id + \" \" + c2.id + \" \" + Counter.count);\n    }\n}\n```",
      "options": [
        "1 2 2",
        "2 2 2",
        "1 1 2",
        "1 2 1"
      ],
      "answer": 0,
      "explain": "First instantiation: `count` becomes 1, `c1.id = 1`. Second instantiation: `count` becomes 2, `c2.id = 2`. Final `Counter.count` is 2. Output: `1 2 2`.",
      "topic": "ID Assignment via Static Counter",
      "type": "output",
      "level": "medium",
      "strength": "Tracked sequential instance ID generation using static class counter.",
      "weakness": "Static counter increments on each instance, assigning `c1.id=1`, `c2.id=2`, and `count=2`."
    },
    {
      "q": "You are building a high-traffic microservice. Why should you avoid creating millions of short-lived objects inside a tight loop if they can be reused?",
      "options": [
        "Java crashes after 1,000 objects",
        "Frequent object allocations rapidly fill the young generation heap, triggering frequent Garbage Collection (GC) pauses (Stop-the-World) that degrade application throughput",
        "Objects consume hard drive space",
        "Constructors are limited to 10 calls per second"
      ],
      "answer": 1,
      "explain": "High object churn puts severe pressure on the Garbage Collector, causing latency spikes and GC pauses. Object pooling or reusing instances mitigates this.",
      "topic": "Garbage Collection Pressure Mitigation",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands the impact of object allocation churn on JVM GC pauses.",
      "weakness": "Avoid high object allocation churn in hot loops to reduce Garbage Collection pauses."
    },
    {
      "q": "What are the four access modifiers in Java, ordered from most restrictive to least restrictive?",
      "options": [
        "`public` -> `protected` -> default (package-private) -> `private`",
        "`private` -> default (package-private) -> `protected` -> `public`",
        "`private` -> `protected` -> default -> `public`",
        "`protected` -> `private` -> default -> `public`"
      ],
      "answer": 1,
      "explain": "`private` (class only) is most restrictive, followed by default/package-private (same package), `protected` (package + subclasses), and `public` (accessible everywhere).",
      "topic": "Access Modifier Hierarchy",
      "type": "theory",
      "level": "easy",
      "strength": "Understands the accessibility hierarchy of access modifiers.",
      "weakness": "Accessibility order: private (most restrictive) < default < protected < public (least restrictive)."
    },
    {
      "q": "Identify the compilation error in this top-level class definition:\n```java\nprivate class Database {\n    public void connect() {}\n}\n```",
      "options": [
        "Database cannot have methods",
        "Modifier `private` not allowed here: top-level classes cannot be declared private",
        "connect must return int",
        "Missing main method"
      ],
      "answer": 1,
      "explain": "Top-level classes can only be `public` or package-private (no modifier). Marking a top-level class `private` causes: 'modifier private not allowed here'.",
      "topic": "Private Top-Level Class Error",
      "type": "error",
      "level": "easy",
      "strength": "Caught illegal private access modifier on top-level class.",
      "weakness": "Top-level classes cannot be declared `private`; only `public` or default package access."
    },
    {
      "q": "What does the following snippet print?\n```java\npublic class Test {\n    static int a;\n    int b;\n    public static void main(String[] args) {\n        Test t = new Test();\n        System.out.println(Test.a + \" \" + t.b);\n    }\n}\n```",
      "options": [
        "0 0",
        "null null",
        "1 1",
        "Error: uninitialized variables"
      ],
      "answer": 0,
      "explain": "Both static fields and instance fields are automatically initialized to their default values (0 for numeric primitives) upon class loading and instantiation.",
      "topic": "Default Field Values Output",
      "type": "output",
      "level": "easy",
      "strength": "Knows default initialization values for static and instance primitive fields.",
      "weakness": "Primitive numeric fields default to 0 automatically."
    },
    {
      "q": "A graphics application has a `Color` class with `red`, `green`, `blue` fields (0-255). A junior developer makes fields public. A user sets `color.red = 999;`, crashing the GPU driver. How should the class be refactored to prevent invalid RGB values?",
      "options": [
        "Make fields private and provide `setRed(int r)` that validates `0 <= r && r <= 255`, throwing `IllegalArgumentException` on invalid values",
        "Make fields protected",
        "Make fields static",
        "Remove the red field"
      ],
      "answer": 0,
      "explain": "Encapsulating fields behind validated setters guarantees that internal object state remains valid at all times.",
      "topic": "RGB Validation via Encapsulation",
      "type": "scenario",
      "level": "easy",
      "strength": "Protected object invariants using validated setters.",
      "weakness": "Encapsulate fields with private access and validate ranges in setter methods."
    },
    {
      "q": "What happens when an object reference variable is assigned `null`: `Person p = null;`?",
      "options": [
        "The object on the heap is instantly erased from RAM",
        "The reference variable `p` no longer points to any object; the object previously referenced becomes eligible for garbage collection if no other references point to it",
        "Throws a NullPointerException immediately",
        "The Person class is unloaded"
      ],
      "answer": 1,
      "explain": "Assigning `null` detaches the reference. If no other active references point to the heap object, it becomes eligible for garbage collection.",
      "topic": "Null Reference & GC Eligibility",
      "type": "theory",
      "level": "easy",
      "strength": "Understands null assignment and garbage collection eligibility.",
      "weakness": "Assigning `null` makes the object eligible for GC if no other references point to it."
    },
    {
      "q": "What error occurs in this method?\n```java\npublic class MathService {\n    public double sqrt(double n) {\n        if (n < 0) return;\n        return Math.sqrt(n);\n    }\n}\n```",
      "options": [
        "Math.sqrt is invalid",
        "Cannot return without a value from a method with non-void result type `double`",
        "n < 0 cannot be tested",
        "sqrt must be static"
      ],
      "answer": 1,
      "explain": "`return;` without an expression is only permitted in `void` methods. In a method returning `double`, an explicit value (or exception) must be returned.",
      "topic": "Empty Return in Non-Void Method",
      "type": "error",
      "level": "easy",
      "strength": "Caught empty return statement in non-void method.",
      "weakness": "Non-void methods must return a value; `return;` is only legal in `void` methods."
    },
    {
      "q": "Can a constructor be declared `final`, `static`, or `abstract`?",
      "options": [
        "Yes, constructors can have any modifier",
        "No, constructors cannot be final, static, or abstract because they are not inherited, belong to instances being created, and must have a body",
        "Yes, constructors can be static",
        "Only abstract is permitted"
      ],
      "answer": 1,
      "explain": "Constructors cannot be inherited (so `final` is meaningless), require an instance being constructed (so `static` is invalid), and must construct objects (so `abstract` is invalid).",
      "topic": "Constructor Modifier Restrictions",
      "type": "theory",
      "level": "medium",
      "strength": "Knows that constructors cannot be marked static, final, or abstract.",
      "weakness": "Constructors cannot be `static`, `final`, or `abstract`."
    },
    {
      "q": "What is the issue with this recursive constructor call?\n```java\npublic class Node {\n    public Node() {\n        this();\n    }\n}\n```",
      "options": [
        "Node cannot have no-arg constructor",
        "Compilation error: recursive constructor invocation",
        "Node must extend Object",
        "Throws StackOverflowError at compile-time"
      ],
      "answer": 1,
      "explain": "A constructor cannot call itself directly or indirectly. The compiler detects cyclic constructor chaining and reports: 'recursive constructor invocation'.",
      "topic": "Recursive Constructor Invocation Error",
      "type": "error",
      "level": "medium",
      "strength": "Recognized compile-time rejection of cyclic constructor calls.",
      "weakness": "Constructors cannot call themselves; cyclic constructor chaining is a compile-time error."
    },
    {
      "q": "What is the output of this code?\n```java\npublic class Student {\n    String name;\n    public Student(String name) { this.name = name; }\n    public static void main(String[] args) {\n        Student s1 = new Student(\"Alice\");\n        Student s2 = new Student(\"Alice\");\n        System.out.println((s1 == s2) + \" \" + s1.name.equals(s2.name));\n    }\n}\n```",
      "options": [
        "true true",
        "false true",
        "false false",
        "true false"
      ],
      "answer": 1,
      "explain": "`s1 == s2` compares references (distinct objects on heap -> false). `s1.name.equals(s2.name)` compares String content (\"Alice\" equals \"Alice\" -> true). Output: `false true`.",
      "topic": "Object Identity vs Field Content Equality",
      "type": "output",
      "level": "medium",
      "strength": "Distinguished object reference identity from field value equality.",
      "weakness": "`s1 == s2` is false for distinct instances; `s1.name.equals(s2.name)` is true."
    },
    {
      "q": "A software company has a package `com.bank.internal` containing classes `Ledger` and `Auditor`. The `Ledger` class has methods that should be accessible by `Auditor`, but NOT by any classes outside the `com.bank.internal` package. What access modifier should be used?",
      "options": [
        "`public`",
        "Package-private (default access: no modifier)",
        "`private`",
        "`protected`"
      ],
      "answer": 1,
      "explain": "Package-private (default) access allows all classes within the same package to collaborate freely while shielding members from outside packages.",
      "topic": "Package-Private Package Encapsulation",
      "type": "scenario",
      "level": "medium",
      "strength": "Selected package-private access for inter-class collaboration within a package.",
      "weakness": "Use package-private (no modifier) to permit access within the same package while blocking external access."
    },
    {
      "q": "What is encapsulation in Object-Oriented Programming?",
      "options": [
        "Inheriting behavior from a parent class",
        "Bundling data (fields) and methods operating on that data within a class, and restricting direct external access to fields using private modifiers and public getters/setters",
        "Writing all code in a single file",
        "Converting code to bytecode"
      ],
      "answer": 1,
      "explain": "Encapsulation is data hiding and abstraction: declaring fields private and exposing controlled public accessor (getter) and mutator (setter) methods to enforce validation and state integrity.",
      "topic": "Encapsulation Principle",
      "type": "theory",
      "level": "easy",
      "strength": "Understands encapsulation and information hiding.",
      "weakness": "Encapsulation protects object state by hiding private fields behind public getters and setters."
    },
    {
      "q": "Why does this code fail to compile?\n```java\npublic class MathUtils {\n    public final int MAX = 100;\n}\n// in another class:\nMathUtils.MAX = 200;\n```",
      "options": [
        "MAX is not static, and it is marked final so it cannot be reassigned",
        "MathUtils has no constructor",
        "MAX must be lowercase",
        "200 is too large"
      ],
      "answer": 0,
      "explain": "`MAX` is not `static` (so `MathUtils.MAX` is invalid), and it is `final` (so it cannot be reassigned). Both issues violate Java syntax.",
      "topic": "Final and Static Misconception",
      "type": "error",
      "level": "easy",
      "strength": "Spotted non-static access and final reassignment violation.",
      "weakness": "`final` fields cannot be reassigned, and non-static fields require an instance."
    },
    {
      "q": "What is the output of this code?\n```java\npublic class MathHelper {\n    public static int square(int x) { return x * x; }\n    public static void main(String[] args) {\n        System.out.println(MathHelper.square(4));\n    }\n}\n```",
      "options": [
        "16",
        "4",
        "8",
        "0"
      ],
      "answer": 0,
      "explain": "The static method `square` is invoked via the class name: `4 * 4 = 16`.",
      "topic": "Static Method Execution Output",
      "type": "output",
      "level": "easy",
      "strength": "Traced static method invocation via class name.",
      "weakness": "`MathHelper.square(4)` returns 16."
    },
    {
      "q": "A geometric simulation models circles. The `Circle` class has `double radius`. How should the `area()` method be implemented?",
      "options": [
        "`public double area() { return Math.PI * radius * radius; }` (computed dynamically from state)",
        "Store area as an instance field and update it manually in 20 different places",
        "Make area static",
        "area must be calculated in main only"
      ],
      "answer": 0,
      "explain": "Derived properties (like area or age from birthdate) should be calculated dynamically via methods rather than stored as redundant fields that risk becoming desynchronized.",
      "topic": "Derived Property Calculation vs Redundant State",
      "type": "scenario",
      "level": "easy",
      "strength": "Preferred dynamic method calculation for derived attributes over redundant state fields.",
      "weakness": "Compute derived attributes on-the-fly via methods to prevent data desynchronization."
    },
    {
      "q": "Why does this code fail to compile?\n```java\npublic class Counter {\n    private static int count;\n    public static void reset() {\n        this.count = 0;\n    }\n}\n```",
      "options": [
        "count cannot be 0",
        "Cannot use 'this' in a static method (`reset()` is static)",
        "reset must be private",
        "count must be public"
      ],
      "answer": 1,
      "explain": "`reset()` is a static method. `this` cannot be referenced from static methods. It should be written as `count = 0;` or `Counter.count = 0;`.",
      "topic": "This Reference in Static Method Error",
      "type": "error",
      "level": "easy",
      "strength": "Spotted 'this' used inside static method.",
      "weakness": "Static methods cannot reference `this`; use the class name to qualify static members."
    },
    {
      "q": "What is the output of this code?\n```java\npublic class Person {\n    private int age;\n    public void setAge(int age) {\n        if (age > 0) this.age = age;\n    }\n    public int getAge() { return age; }\n    public static void main(String[] args) {\n        Person p = new Person();\n        p.setAge(-5);\n        System.out.println(p.getAge());\n    }\n}\n```",
      "options": [
        "-5",
        "0",
        "IllegalArgumentException",
        "null"
      ],
      "answer": 1,
      "explain": "`p.setAge(-5)` fails the `age > 0` validation guard, so `this.age` is not updated. It retains its default initial value of `0`.",
      "topic": "Encapsulated Validation Guard Output",
      "type": "output",
      "level": "easy",
      "strength": "Traced encapsulation setter validation guard rejection.",
      "weakness": "Negative value rejected by setter; field remains at default value 0."
    },
    {
      "q": "What happens when you create an object: `Person p = new Person();`?",
      "options": [
        "Memory is allocated on the heap, fields are initialized to defaults, initializers run, the constructor executes, and the memory address is assigned to `p`",
        "The class is recompiled by javac",
        "The object is placed directly on the thread call stack",
        "p is initialized to null"
      ],
      "answer": 0,
      "explain": "`new` allocates heap space, zeroes fields to defaults, executes instance initializers, runs constructor code, and yields the heap reference address to `p`.",
      "topic": "Object Instantiation Lifecycle",
      "type": "theory",
      "level": "medium",
      "strength": "Understands heap allocation and object construction lifecycle.",
      "weakness": "`new` allocates heap space, zeroes fields, runs initializers/constructors, and returns reference."
    },
    {
      "q": "Why does this code cause a compilation error?\n```java\npublic class User {\n    private final String id;\n    public User() {}\n}\n```",
      "options": [
        "User must be public",
        "Variable 'id' might not have been initialized: final instance fields must be initialized at declaration or in every constructor",
        "String cannot be final",
        "id must be static"
      ],
      "answer": 1,
      "explain": "A blank `final` instance variable must be definitively assigned in every constructor. Since `User()` leaves `id` uninitialized, the compiler rejects it.",
      "topic": "Uninitialized Blank Final Field Error",
      "type": "error",
      "level": "medium",
      "strength": "Caught unassigned blank final field in constructor.",
      "weakness": "`final` instance fields must be initialized in every constructor if not initialized at declaration."
    },
    {
      "q": "What does this code print?\n```java\npublic class Wrapper {\n    int val;\n    public Wrapper(int val) { this.val = val; }\n    public static void swap(Wrapper a, Wrapper b) {\n        int temp = a.val;\n        a.val = b.val;\n        b.val = temp;\n    }\n    public static void main(String[] args) {\n        Wrapper w1 = new Wrapper(10);\n        Wrapper w2 = new Wrapper(20);\n        swap(w1, w2);\n        System.out.println(w1.val + \" \" + w2.val);\n    }\n}\n```",
      "options": [
        "10 20",
        "20 10",
        "20 20",
        "10 10"
      ],
      "answer": 1,
      "explain": "Unlike primitive swaps, swapping fields inside mutable wrapper objects (`a.val = b.val`) persists because the objects on the heap are mutated. Outputs `20 10`.",
      "topic": "Object Field Swap Output",
      "type": "output",
      "level": "medium",
      "strength": "Recognized effective swap through mutable wrapper object fields.",
      "weakness": "Mutating fields inside passed object instances persists after the method returns."
    },
    {
      "q": "A student writes a class `Student` with fields `id` and `name`. When comparing two students in a list, `s1.equals(s2)` returns `false` even though both have the identical `id = 101`. Why does this happen, and how is it fixed?",
      "options": [
        "Java cannot compare objects",
        "The class did not override `equals(Object o)` from `java.lang.Object`, so it inherited default reference equality (`==`); it must override `equals()` to compare `id` values",
        "id must be a double",
        "Students must be sorted"
      ],
      "answer": 1,
      "explain": "By default, `Object.equals()` checks reference identity (`this == obj`). To define logical equality based on fields (like student ID), `equals()` (and `hashCode()`) must be overridden.",
      "topic": "Overriding equals for Logical Identity",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands the necessity of overriding equals() for value-based object comparison.",
      "weakness": "Override `equals()` (and `hashCode()`) to define logical equality based on fields rather than memory address."
    },
    {
      "q": "Can a `static` method access instance variables or call non-static methods directly without an object reference?",
      "options": [
        "Yes, if they are public",
        "No, because static methods execute at class-level and do not have an active `this` instance context",
        "Yes, using the `this` keyword",
        "Only in Java 17 and above"
      ],
      "answer": 1,
      "explain": "Static methods belong to the class and execute without an object context. Accessing instance fields or methods directly without an explicit instance reference is illegal.",
      "topic": "Static Context Constraints",
      "type": "theory",
      "level": "easy",
      "strength": "Understands why static methods cannot access instance fields directly.",
      "weakness": "Static methods have no `this` context and cannot access instance fields without an object reference."
    },
    {
      "q": "Why does the following snippet produce a compilation error?\n```java\npublic class A {\n    public int x;\n}\npublic class B {\n    public int y;\n}\n```",
      "options": [
        "A and B must have constructors",
        "Only one public class is allowed per `.java` source file, and its name must match the filename",
        "x and y must be private",
        "Classes cannot be in the same file"
      ],
      "answer": 1,
      "explain": "A single `.java` compilation unit can contain at most ONE `public` top-level class, whose name must match the file name.",
      "topic": "Multiple Public Classes in Single File Error",
      "type": "error",
      "level": "easy",
      "strength": "Understands the one-public-class-per-file rule in Java.",
      "weakness": "A Java source file can contain at most one `public` top-level class matching the file name."
    },
    {
      "q": "What is the output of this code?\n```java\npublic class Book {\n    String title;\n    public Book(String title) { this.title = title; }\n    public Book() { this(\"Untitled\"); }\n    public static void main(String[] args) {\n        Book b = new Book();\n        System.out.println(b.title);\n    }\n}\n```",
      "options": [
        "Untitled",
        "null",
        "title",
        "Compilation error"
      ],
      "answer": 0,
      "explain": "`new Book()` chains to `this(\"Untitled\")`, initializing `this.title` to `\"Untitled\"`.",
      "topic": "Default Constructor Chaining Output",
      "type": "output",
      "level": "easy",
      "strength": "Traced default constructor delegation to parameterized constructor.",
      "weakness": "`new Book()` delegates to `this(\"Untitled\")`, setting title to 'Untitled'."
    },
    {
      "q": "A ride-hailing app represents driver coordinates using a `Location` class (`double lat, double lon`). Once created, a location point should never be altered. How do you design this class to be fully immutable?",
      "options": [
        "Declare the class `public final class Location`, mark fields `private final`, initialize via constructor, and provide no setter methods",
        "Make all fields public",
        "Declare fields as static",
        "Provide public setters"
      ],
      "answer": 0,
      "explain": "Immutability requires: `final` class (no subclassing), `private final` fields, assignment solely via constructor, and zero mutator methods.",
      "topic": "Immutable Location Entity Design",
      "type": "scenario",
      "level": "easy",
      "strength": "Designed fully immutable value object.",
      "weakness": "Enforce immutability with a final class, private final fields, and no setters."
    },
    {
      "q": "Why does the following snippet produce a compile error?\n```java\npublic class Person {\n    private String name;\n}\nPerson p = new Person();\nSystem.out.println(p.name);\n```",
      "options": [
        "Person has no toString()",
        "Field `name` has private access in `Person` and cannot be accessed directly from outside",
        "p must be final",
        "name is null"
      ],
      "answer": 1,
      "explain": "Accessing a `private` field from external calling code violates Java encapsulation and causes a compile error.",
      "topic": "Direct Private Field Access",
      "type": "error",
      "level": "easy",
      "strength": "Caught illegal access to private field from calling code.",
      "weakness": "Private fields cannot be accessed directly outside their class."
    },
    {
      "q": "What does this code print?\n```java\npublic class Test {\n    int a = 1;\n    int b = a + 2;\n    public static void main(String[] args) {\n        Test t = new Test();\n        System.out.println(t.a + \" \" + t.b);\n    }\n}\n```",
      "options": [
        "1 3",
        "1 2",
        "0 0",
        "Compilation error"
      ],
      "answer": 0,
      "explain": "Instance field declarations are initialized in text order. `a` is set to 1, then `b` is set to `1 + 2 = 3`. Output: `1 3`.",
      "topic": "Field Declaration Order Initialization",
      "type": "output",
      "level": "easy",
      "strength": "Tracked sequential in-line field initialization order.",
      "weakness": "`a` initialized to 1, then `b = 1 + 2 = 3`."
    },
    {
      "q": "Can a top-level class be declared `private` or `protected`?",
      "options": [
        "Yes, any top-level class can be private",
        "No, a top-level (outer) class can only be declared `public` or package-private (default); only nested/inner classes can be private or protected",
        "Yes, top-level classes are private by default",
        "Only protected is permitted"
      ],
      "answer": 1,
      "explain": "Top-level classes can only have `public` or package-private access. Declaring an outer class `private` or `protected` causes a compilation error.",
      "topic": "Top-Level Class Modifier Restrictions",
      "type": "theory",
      "level": "medium",
      "strength": "Knows that top-level classes can only be public or default access.",
      "weakness": "Top-level classes cannot be `private` or `protected`; only `public` or package-private."
    },
    {
      "q": "Identify the error in this singleton implementation:\n```java\npublic class Config {\n    private static Config instance = new Config();\n    public Config() {}\n    public static Config getInstance() { return instance; }\n}\n```",
      "options": [
        "getInstance must be private",
        "The constructor `Config()` is declared `public`, allowing external classes to create multiple instances and breaking the Singleton pattern",
        "instance must be non-static",
        "Config must be final"
      ],
      "answer": 1,
      "explain": "A true Singleton MUST declare its constructor `private` to prevent external instantiation via `new Config()`.",
      "topic": "Public Constructor Singleton Flaw",
      "type": "error",
      "level": "medium",
      "strength": "Spotted architectural flaw: public constructor breaking Singleton pattern.",
      "weakness": "The Singleton pattern requires a `private` constructor to prevent external instantiation."
    },
    {
      "q": "What does this code print?\n```java\npublic class Self {\n    int val;\n    public Self setVal(int val) {\n        this.val = val;\n        return this;\n    }\n    public static void main(String[] args) {\n        Self s = new Self();\n        s.setVal(10).setVal(20);\n        System.out.println(s.val);\n    }\n}\n```",
      "options": [
        "10",
        "20",
        "30",
        "NullPointerException"
      ],
      "answer": 1,
      "explain": "Returning `this` implements method chaining (fluent builder pattern). First `s.val` becomes 10, then it is overwritten to 20. Outputs 20.",
      "topic": "Fluent Method Chaining via this",
      "type": "output",
      "level": "medium",
      "strength": "Traced fluent API method chaining returning `this`.",
      "weakness": "Method chaining sets value to 10 then overwrites to 20."
    },
    {
      "q": "A hospital records management system stores patient records. A class `Patient` has a constructor taking 15 medical attributes. Why should a developer consider a private constructor with a `PatientBuilder` rather than a 15-parameter constructor?",
      "options": [
        "Java limits constructors to 5 parameters",
        "A 15-parameter constructor is error-prone (arguments of identical types like int or String can be swapped unnoticed); a Builder provides readable, named parameter assignment",
        "Builders are required by HIPAA laws",
        "Private constructors run faster"
      ],
      "answer": 1,
      "explain": "Telescoping constructors with many same-typed parameters invite subtle parameter-swapping bugs. The Builder pattern makes instantiation readable, self-documenting, and safe.",
      "topic": "Builder Pattern Readability & Safety",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands why the Builder pattern prevents parameter ordering bugs in large objects.",
      "weakness": "Use Builder patterns to avoid parameter-ordering mistakes in objects with many attributes."
    },
    {
      "q": "What does the `final` keyword mean when applied to a class field?",
      "options": [
        "The field can only be accessed once",
        "The field is a constant that must be initialized upon declaration or in every constructor, and cannot be reassigned thereafter",
        "The field is garbage collected first",
        "The field is stored in CPU registers"
      ],
      "answer": 1,
      "explain": "A `final` instance field must be definitively assigned by the end of every constructor and cannot be reassigned once initialized.",
      "topic": "Final Instance Fields",
      "type": "theory",
      "level": "easy",
      "strength": "Understands immutability enforced by final instance fields.",
      "weakness": "A `final` field cannot be reassigned after initialization."
    },
    {
      "q": "Identify the bug in this setter method:\n```java\npublic class BankAccount {\n    private double balance;\n    public void setBalance(double balance) {\n        if (balance >= 0) {\n            balance = balance;\n        }\n    }\n}\n```",
      "options": [
        "balance >= 0 is invalid condition",
        "Parameter `balance` shadows field `balance`, so `balance = balance;` assigns to the parameter; the field is never updated (use `this.balance = balance;`)",
        "setBalance must return double",
        "balance cannot be private"
      ],
      "answer": 1,
      "explain": "Without `this.balance = balance;`, the assignment modifies only the local parameter. The instance field remains unchanged.",
      "topic": "Setter Missing this Bug",
      "type": "error",
      "level": "easy",
      "strength": "Caught missing `this.` qualification in setter method.",
      "weakness": "Use `this.balance = balance;` in setters to assign parameter values to instance fields."
    },
    {
      "q": "What does this code print?\n```java\npublic class Node {\n    int val;\n    Node next;\n    public Node(int val) { this.val = val; }\n    public static void main(String[] args) {\n        Node n1 = new Node(1);\n        n1.next = new Node(2);\n        System.out.println(n1.val + \" \" + n1.next.val);\n    }\n}\n```",
      "options": [
        "1 2",
        "1 1",
        "2 2",
        "NullPointerException"
      ],
      "answer": 0,
      "explain": "`n1.val` is 1. `n1.next` references the second node with `val` 2. Outputs `1 2`.",
      "topic": "Linked Node Reference Output",
      "type": "output",
      "level": "easy",
      "strength": "Traced object reference linking in self-referential Node class.",
      "weakness": "`n1.val` is 1 and `n1.next.val` is 2."
    },
    {
      "q": "A logging service formats timestamps. A developer notices that multiple helper methods in `DateUtils` do not access any instance fields. How should these utility methods be declared?",
      "options": [
        "As `public static` methods: they operate purely on input arguments and require no instance allocation",
        "As private instance methods requiring `new DateUtils()`",
        "As abstract methods",
        "In a text file"
      ],
      "answer": 0,
      "explain": "Stateless utility methods should be `public static`, allowing callers to invoke `DateUtils.format(date)` directly without allocating useless objects.",
      "topic": "Stateless Utility Class Design",
      "type": "scenario",
      "level": "easy",
      "strength": "Identified static methods for stateless utility operations.",
      "weakness": "Declare stateless helper methods as `public static` to avoid unnecessary object allocation."
    },
    {
      "q": "What is the output of this code?\n```java\npublic class MathConst {\n    public static final double PI = 3.14;\n    public static void main(String[] args) {\n        System.out.println(MathConst.PI);\n    }\n}\n```",
      "options": [
        "3.14",
        "0.0",
        "PI",
        "NullPointerException"
      ],
      "answer": 0,
      "explain": "Static final constants are accessed via class name qualification. Outputs 3.14.",
      "topic": "Static Final Constant Access",
      "type": "output",
      "level": "easy",
      "strength": "Accessed static final constant via class name.",
      "weakness": "`MathConst.PI` outputs 3.14."
    },
    {
      "q": "A customer service portal creates tickets. The `Ticket` class has a field `createdAt`. The requirement states that `createdAt` can only be set once during ticket creation and never modified thereafter. How should this field be declared?",
      "options": [
        "`private final Instant createdAt;` initialized in the constructor without a setter",
        "`public Instant createdAt;`",
        "`private static Instant createdAt;`",
        "`protected Instant createdAt;`"
      ],
      "answer": 0,
      "explain": "`private final` guarantees that the field is assigned during construction and can never be reassigned, ensuring immutability of creation timestamps.",
      "topic": "Write-Once Audit Timestamp",
      "type": "scenario",
      "level": "easy",
      "strength": "Used private final modifier to enforce write-once immutability.",
      "weakness": "Use `private final` fields without setters for write-once timestamp auditing."
    },
    {
      "q": "What is an immutable class in Java (such as `java.lang.String` or `java.lang.Integer`)?",
      "options": [
        "A class that cannot be compiled",
        "A class whose instances cannot have their state modified after creation (all fields are private final, no setters, class is final)",
        "A class with no constructors",
        "A class that cannot be instantiated"
      ],
      "answer": 1,
      "explain": "An immutable class ensures that once an object is constructed, its state can never change. This is achieved via `final` class, `private final` fields, and no mutator methods.",
      "topic": "Immutable Class Design",
      "type": "theory",
      "level": "medium",
      "strength": "Understands immutable object design requirements.",
      "weakness": "Immutable classes have final classes, private final fields, and no setter methods."
    },
    {
      "q": "Why does this code cause a compiler error?\n```java\npublic class A {\n    public A(int x) {}\n}\npublic class B extends A {}\n```",
      "options": [
        "B cannot extend A",
        "Implicit super constructor `A()` is undefined for default constructor in B (A has only `A(int)`)",
        "A must be an interface",
        "B must declare fields"
      ],
      "answer": 1,
      "explain": "The default constructor of B attempts to invoke `super()`. Because class A has no no-arg constructor, B fails to compile unless an explicit constructor calling `super(x)` is provided.",
      "topic": "Inherited Missing No-Arg Constructor Error",
      "type": "error",
      "level": "medium",
      "strength": "Understands default super() constructor dependency.",
      "weakness": "If superclass lacks a no-arg constructor, subclasses must explicitly invoke `super(args)`."
    },
    {
      "q": "What does this code print?\n```java\npublic class A {\n    public A() { System.out.print(\"1 \"); }\n}\npublic class B {\n    A a = new A();\n    public B() { System.out.print(\"2 \"); }\n    public static void main(String[] args) {\n        new B();\n    }\n}\n```",
      "options": [
        "1 2 ",
        "2 1 ",
        "1 ",
        "2 "
      ],
      "answer": 0,
      "explain": "Instance fields are initialized before the constructor body executes. `new A()` runs first, printing `\"1 \"`. Then `B()` constructor body runs, printing `\"2 \"`. Output: `1 2 `.",
      "topic": "Field Initialization Precedes Constructor Body",
      "type": "output",
      "level": "medium",
      "strength": "Understands that field initializers execute before the constructor body.",
      "weakness": "Instance field initializers run before constructor bodies: outputs `1 2 `."
    },
    {
      "q": "A banking app models a `CurrencyExchange` class. The exchange rates are loaded from a remote central bank API once when the application starts up. Which language construct should load these rates?",
      "options": [
        "A static initialization block: `static { loadRatesFromApi(); }`",
        "Inside every instance constructor",
        "Inside a finalize method",
        "In a while loop in an interface"
      ],
      "answer": 0,
      "explain": "Static initialization blocks run once when the class is loaded, making them the standard location for one-time expensive static resource initialization.",
      "topic": "Static Initializer for Resource Loading",
      "type": "scenario",
      "level": "medium",
      "strength": "Applied static initialization blocks for one-time external data bootstrapping.",
      "weakness": "Use static initialization blocks for one-time class loading configurations."
    },
    {
      "q": "What is a 'plain old Java object' (POJO) or JavaBean convention?",
      "options": [
        "A class with no methods",
        "A class with private fields, a public no-argument constructor, and public getter and setter methods following standard naming conventions",
        "An interface with no fields",
        "A class extending java.lang.Applet"
      ],
      "answer": 1,
      "explain": "JavaBeans follow a standard convention: private fields, public no-arg constructor, and standard getters (`getX()`) / setters (`setX(...)`).",
      "topic": "JavaBean & POJO Conventions",
      "type": "theory",
      "level": "easy",
      "strength": "Understands JavaBean structural conventions.",
      "weakness": "JavaBeans feature private fields, a public no-arg constructor, and getters/setters."
    },
    {
      "q": "What error occurs in this constructor definition?\n```java\npublic class Employee {\n    public static Employee() {}\n}\n```",
      "options": [
        "Employee must return void",
        "Modifier `static` not allowed here: constructors cannot be static",
        "Employee must be private",
        "Constructors cannot be public"
      ],
      "answer": 1,
      "explain": "Constructors are responsible for creating object instances. Declaring a constructor `static` is illegal syntax.",
      "topic": "Static Constructor Error",
      "type": "error",
      "level": "easy",
      "strength": "Recognized that constructors cannot be static.",
      "weakness": "Constructors cannot be declared `static`."
    },
    {
      "q": "What is the output of this code?\n```java\npublic class Test {\n    int x = 5;\n    public void modify(Test t) {\n        t.x = 20;\n    }\n    public static void main(String[] args) {\n        Test obj = new Test();\n        obj.modify(obj);\n        System.out.println(obj.x);\n    }\n}\n```",
      "options": [
        "5",
        "20",
        "0",
        "NullPointerException"
      ],
      "answer": 1,
      "explain": "`obj.modify(obj)` passes the object reference to itself. `t.x = 20` mutates the instance field `x` on the heap to 20.",
      "topic": "Self-Reference Mutation Output",
      "type": "output",
      "level": "easy",
      "strength": "Tracked object state mutation through self-referential method parameter.",
      "weakness": "Passing an object to its own method mutates its field to 20."
    },
    {
      "q": "A game developer creates an RPG game with characters having HP, MP, and Attack. When creating a new player, the default constructor should set `hp = 100`, `mp = 50`, `attack = 10`. What is the cleanest implementation using constructor chaining?",
      "options": [
        "`public Player() { this(100, 50, 10); }` delegating to `public Player(int hp, int mp, int atk) { ... }`",
        "Duplicate all assignment logic in both constructors",
        "Call `new Player(100, 50, 10);` inside the no-arg constructor",
        "Make fields static"
      ],
      "answer": 0,
      "explain": "Chaining the default constructor to the master parameterized constructor via `this(100, 50, 10)` follows the DRY principle, eliminating duplicate field assignment code.",
      "topic": "DRY Constructor Chaining Pattern",
      "type": "scenario",
      "level": "easy",
      "strength": "Applied constructor chaining to eliminate duplicate initialization logic.",
      "weakness": "Delegate from default constructors to master constructors using `this(...)` to keep code DRY."
    },
    {
      "q": "What is the output of this code?\n```java\npublic class Counter {\n    int n = 0;\n    public void add(Counter other) {\n        this.n += other.n;\n    }\n    public static void main(String[] args) {\n        Counter c1 = new Counter();\n        Counter c2 = new Counter();\n        c1.n = 5;\n        c2.n = 10;\n        c1.add(c2);\n        System.out.println(c1.n + \" \" + c2.n);\n    }\n}\n```",
      "options": [
        "15 10",
        "15 15",
        "5 10",
        "10 10"
      ],
      "answer": 0,
      "explain": "`c1.add(c2)` adds `c2.n` (10) to `c1.n` (5), making `c1.n = 15`. `c2.n` is unchanged (10). Output: `15 10`.",
      "topic": "Instance Accumulation via Peer Reference",
      "type": "output",
      "level": "easy",
      "strength": "Accurately tracked state change on target object while argument remains unchanged.",
      "weakness": "`c1.n` accumulates to 15 while `c2.n` remains 10."
    },
    {
      "q": "A team of developers shares a library. A class `OldDatabase` is being replaced by `NewDatabase`. How should the author indicate that `OldDatabase` should no longer be used while preserving backward compatibility?",
      "options": [
        "Delete the class immediately",
        "Annotate the class with `@Deprecated` and document the replacement in Javadoc with `@deprecated Use NewDatabase instead.`",
        "Make all methods private",
        "Throw an exception in the constructor"
      ],
      "answer": 1,
      "explain": "The `@Deprecated` annotation signals to compilers and IDEs that an element is obsolete, generating compiler warnings while maintaining backward compatibility.",
      "topic": "Deprecation Lifecycle Convention",
      "type": "scenario",
      "level": "easy",
      "strength": "Applied @Deprecated annotation for library lifecycle maintenance.",
      "weakness": "Annotate obsolete classes with `@Deprecated` to signal deprecation without breaking existing callers."
    },
    {
      "q": "What is a singleton pattern in Java?",
      "options": [
        "A class that can only have a single method",
        "A design pattern that restricts class instantiation to a single unique instance across the entire application lifecycle",
        "A class with a single constructor",
        "An array with length 1"
      ],
      "answer": 1,
      "explain": "The Singleton pattern ensures a class has only one instance, typically using a `private` constructor and a public `static` factory method `getInstance()`.",
      "topic": "Singleton Pattern",
      "type": "theory",
      "level": "medium",
      "strength": "Recognized the Singleton design pattern.",
      "weakness": "Singleton pattern guarantees only one instance exists, using a private constructor."
    },
    {
      "q": "Why does the following code fail to compile?\n```java\npublic class Student {\n    private int age;\n}\n// in another class:\nStudent s = new Student();\ns.age = 20;\n```",
      "options": [
        "Student has no constructor",
        "Field `age` has private access in `Student` and cannot be directly accessed from outside the class",
        "20 must be a String",
        "s is not instantiated"
      ],
      "answer": 1,
      "explain": "`private` members are accessible strictly within the declaring class. Accessing `s.age` from an outside class violates encapsulation, causing a compile error.",
      "topic": "Private Field Access Violation",
      "type": "error",
      "level": "easy",
      "strength": "Caught illegal access to private field from external class.",
      "weakness": "`private` fields cannot be accessed directly from external classes; use public getters/setters."
    },
    {
      "q": "What is the output of the following code?\n```java\npublic class Counter {\n    public static int count = 0;\n    public Counter() { count++; }\n}\n// in main:\nnew Counter();\nnew Counter();\nnew Counter();\nSystem.out.println(Counter.count);\n```",
      "options": [
        "0",
        "1",
        "3",
        "NullPointerException"
      ],
      "answer": 2,
      "explain": "Because `count` is static, it is shared across all instances. Each constructor invocation increments the single shared class variable. Count is 3.",
      "topic": "Static Counter Accumulation Output",
      "type": "output",
      "level": "easy",
      "strength": "Tracked static counter accumulation across multiple instantiations.",
      "weakness": "Static fields are shared across instances; 3 instantiations increment `count` to 3."
    },
    {
      "q": "A software architect designs an immutable `Money` value object (`BigDecimal amount, Currency currency`). If a method `add(Money other)` is called, how must it return the result?",
      "options": [
        "Modify the existing object's `amount` field in-place",
        "Return a brand new `Money` object containing the summed amount: `return new Money(this.amount.add(other.amount), this.currency);`",
        "Set `other.amount = 0;`",
        "Return a String"
      ],
      "answer": 1,
      "explain": "Immutable value objects never mutate internal state; operations on them always compute and return a fresh new instance representing the modified value.",
      "topic": "Immutable Value Object Mutation Pattern",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands immutable value object pattern: return new instances on state changes.",
      "weakness": "Methods on immutable objects return a new instance containing the result rather than mutating in-place."
    },
    {
      "q": "Can a class have multiple constructors in Java?",
      "options": [
        "No, Java permits only one constructor per class",
        "Yes, this is constructor overloading, provided each constructor has a distinct parameter list (types, number, or order)",
        "Yes, but they must all have identical parameter lists",
        "Only if the class implements Cloneable"
      ],
      "answer": 1,
      "explain": "Constructor overloading allows multiple constructors with different parameter signatures to initialize objects in various initial states.",
      "topic": "Constructor Overloading",
      "type": "theory",
      "level": "easy",
      "strength": "Understands constructor overloading mechanics.",
      "weakness": "A class can have multiple constructors as long as their parameter lists differ."
    },
    {
      "q": "Why does this code fail to compile?\n```java\npublic class Box {\n    private int volume;\n    public Box(int v) { volume = v; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Box b = new Box();\n    }\n}\n```",
      "options": [
        "Box cannot be instantiated in Main",
        "Constructor `Box()` in class `Box` cannot be applied to given types; required: `int`, found: no arguments",
        "volume must be double",
        "Main must extend Box"
      ],
      "answer": 1,
      "explain": "Defining `Box(int v)` suppresses default no-argument constructor generation. Calling `new Box()` fails to find a matching constructor.",
      "topic": "Mismatched Constructor Arguments Error",
      "type": "error",
      "level": "easy",
      "strength": "Caught missing constructor matching zero arguments.",
      "weakness": "Provide a no-arg constructor if you want callers to instantiate `new Box()` without arguments."
    },
    {
      "q": "What does this code print?\n```java\npublic class A {\n    static int x = 1;\n    static {\n        x += 5;\n    }\n    public static void main(String[] args) {\n        System.out.println(x);\n    }\n}\n```",
      "options": [
        "1",
        "6",
        "5",
        "0"
      ],
      "answer": 1,
      "explain": "`x` is initialized to 1. The static initialization block executes immediately upon class load, adding 5: `1 + 5 = 6`. Outputs 6.",
      "topic": "Static Initializer Modification Output",
      "type": "output",
      "level": "easy",
      "strength": "Computed state update within static initialization block.",
      "weakness": "Field initialized to 1, then static block adds 5 -> 6."
    },
    {
      "q": "An inventory tracking system needs to count how many `Product` objects currently reside in memory. A junior developer increments a field in the constructor. How should that field be declared?",
      "options": [
        "`public int count;`",
        "`private static int productCount = 0;` with a public static getter `public static int getProductCount()`",
        "`final int count;`",
        "`private double count;`"
      ],
      "answer": 1,
      "explain": "A class-wide tally shared across all instances must be `static` and encapsulated behind a public static getter.",
      "topic": "Encapsulated Static Instance Counter",
      "type": "scenario",
      "level": "easy",
      "strength": "Engineered encapsulated static instance counter.",
      "weakness": "Use a private static counter with a public static getter to track total object instances."
    },
    {
      "q": "What does this code print?\n```java\npublic class Test {\n    static int x;\n    public static void main(String[] args) {\n        System.out.println(x == 0);\n    }\n}\n```",
      "options": [
        "true",
        "false",
        "NullPointerException",
        "Error"
      ],
      "answer": 0,
      "explain": "Static primitive numeric fields default to 0. `0 == 0` evaluates to `true`.",
      "topic": "Static Field Primitive Zero Default",
      "type": "output",
      "level": "easy",
      "strength": "Verified default zero initialization of primitive static fields.",
      "weakness": "Static int fields default to 0; `x == 0` is true."
    },
    {
      "q": "A student creates a `Rectangle` class: `int width, height;`. In `main`: `Rectangle r1 = new Rectangle(4, 5); Rectangle r2 = new Rectangle(4, 5); System.out.println(r1 == r2);`. Why does this output `false`?",
      "options": [
        "Because 4 is not equal to 5",
        "`==` compares object references (memory addresses). Since `r1` and `r2` are two distinct objects created on the heap, their addresses differ",
        "The JVM corrupted r2",
        "Width and height must be floats"
      ],
      "answer": 1,
      "explain": "`==` on object references checks identity (whether both refer to the exact same heap memory address), not value equality.",
      "topic": "Object Reference Identity vs Value Equality",
      "type": "scenario",
      "level": "easy",
      "strength": "Understands that `==` evaluates heap reference identity, not field contents.",
      "weakness": "`==` compares memory addresses; two separate objects created with `new` are never `==`."
    }
  ],
  "7": [
    {
      "q": "What is a covariant return type in method overriding (supported since Java 5)?",
      "options": [
        "Returning void instead of a type",
        "An overriding method declaring a return type that is a SUBTYPE (subclass) of the return type declared in the superclass method",
        "Returning multiple values",
        "Returning a primitive instead of an object"
      ],
      "answer": 1,
      "explain": "Covariant returns allow an overriding method to narrow its return type to a subclass of the superclass method's return type (e.g. `Animal.make()` returns `Animal`, while `Dog.make()` returns `Dog`).",
      "topic": "Covariant Return Types",
      "type": "theory",
      "level": "hard",
      "strength": "Mastery of covariant return types in method overriding.",
      "weakness": "An overriding method can return a subtype of the superclass method's return type."
    },
    {
      "q": "What is the compilation error in this overriding attempt?\n```java\nimport java.io.IOException;\nclass Reader {\n    public void readData() {}\n}\nclass FileReaderCustom extends Reader {\n    @Override\n    public void readData() throws IOException {}\n}\n```",
      "options": [
        "IOException must be unchecked",
        "`readData()` in `FileReaderCustom` cannot override `readData()` in `Reader`: overridden method does not throw `IOException` (cannot declare new checked exceptions)",
        "FileReaderCustom must be abstract",
        "readData must return int"
      ],
      "answer": 1,
      "explain": "An overriding method cannot throw checked exceptions that are not declared by the superclass method.",
      "topic": "New Checked Exception in Overriding Error",
      "type": "error",
      "level": "hard",
      "strength": "Understands that overriding methods cannot declare new checked exceptions.",
      "weakness": "Overriding methods cannot declare new or broader checked exceptions than the superclass method."
    },
    {
      "q": "What does the following code print?\n```java\nclass P {\n    static void f() { System.out.print(\"Parent \"); }\n}\nclass C extends P {\n    static void f() { System.out.print(\"Child \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        P p = new C();\n        p.f();\n    }\n}\n```",
      "options": [
        "Child ",
        "Parent ",
        "Parent Child ",
        "Error"
      ],
      "answer": 1,
      "explain": "Static methods are hidden, not overridden. Calls to static methods are resolved at compile time based on the reference type (`P`). Thus `p.f()` invokes `P.f()`, printing `Parent `.",
      "topic": "Static Method Hiding Resolution Output",
      "type": "output",
      "level": "hard",
      "strength": "Mastered compile-time static method resolution based on reference type.",
      "weakness": "Static methods are resolved by declared reference type at compile-time: `P.f()` outputs `Parent `."
    },
    {
      "q": "A UI framework provides a base class `Component` with a method `public final void render() { setupBuffers(); draw(); flush(); }`. Why is `render()` declared `final`, while `draw()` is not?",
      "options": [
        "render() is private",
        "Template Method pattern: `render()` enforces the fixed execution algorithm lifecycle and must not be altered, while subclasses are expected to customize `draw()`",
        "draw() runs on the CPU",
        "Component cannot be instantiated"
      ],
      "answer": 1,
      "explain": "The Template Method pattern seals the high-level workflow skeleton with a `final` method while allowing subclasses to override individual pluggable steps (`draw()`).",
      "topic": "Template Method Design Pattern",
      "type": "scenario",
      "level": "hard",
      "strength": "Recognized the Template Method pattern using final workflow methods.",
      "weakness": "Use `final` on template methods to preserve workflow structure while allowing hook overrides."
    },
    {
      "q": "What happens when you declare a method `private` in a superclass and declare a method with the exact same signature in a subclass?",
      "options": [
        "The subclass method overrides the superclass method",
        "The subclass method has no relationship to the superclass method; private methods are invisible to subclasses and cannot be overridden",
        "Compilation error: cannot reuse private method name",
        "Runtime ClassCastException"
      ],
      "answer": 1,
      "explain": "Because `private` methods are invisible outside their class, the subclass method is treated as an entirely new independent method, not an override.",
      "topic": "Private Methods Cannot Be Overridden",
      "type": "theory",
      "level": "medium",
      "strength": "Understands that private methods cannot be overridden.",
      "weakness": "Private methods are not visible to subclasses and cannot be overridden."
    },
    {
      "q": "Why does this code fail to compile?\n```java\nclass Parent {\n    int val = 10;\n}\nclass Child extends Parent {\n    int val = 20;\n    public void show() {\n        System.out.println(super.super.val);\n    }\n}\n```",
      "options": [
        "val cannot be 20",
        "Syntax error: `super.super` is illegal in Java (you cannot bypass the immediate parent class to access an ancestor)",
        "show must be static",
        "Parent has no val"
      ],
      "answer": 1,
      "explain": "Java strictly forbids `super.super`. A subclass can only directly reference members of its immediate superclass.",
      "topic": "Illegal super.super Chaining",
      "type": "error",
      "level": "medium",
      "strength": "Recognized that `super.super` is syntactically illegal in Java.",
      "weakness": "`super.super` is illegal; Java only allows referencing the immediate superclass via `super`."
    },
    {
      "q": "What does this code print?\n```java\nclass Animal {\n    public void sound() { System.out.print(\"Generic \"); }\n}\nclass Cat extends Animal {\n    @Override\n    public void sound() { System.out.print(\"Meow \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Animal a = new Cat();\n        a.sound();\n    }\n}\n```",
      "options": [
        "Generic ",
        "Meow ",
        "Generic Meow ",
        "Error"
      ],
      "answer": 1,
      "explain": "Even though `a` is declared as type `Animal`, the actual object on the heap is `Cat`. Method calls are bound dynamically at runtime to the actual object's overridden method (`Cat.sound()`). Outputs `Meow `.",
      "topic": "Dynamic Method Binding Output",
      "type": "output",
      "level": "easy",
      "strength": "Understands runtime dynamic method dispatch in overridden methods.",
      "weakness": "Dynamic method binding invokes the runtime object's overridden method: `Meow `."
    },
    {
      "q": "A game developer creates an entity hierarchy: `Entity` -> `Character` -> `Player`. The `takeDamage(int dmg)` method in `Player` should perform standard damage reduction from `Character`, and then trigger screen shake. How should `Player` implement this?",
      "options": [
        "Copy and paste all code from Character into Player",
        "Call `super.takeDamage(dmg);` inside `Player.takeDamage()` to execute parent damage logic, followed by `triggerScreenShake();`",
        "Delete the method in Character",
        "Make takeDamage static"
      ],
      "answer": 1,
      "explain": "Using `super.takeDamage(dmg)` extends the superclass's functionality cleanly without duplicating existing damage calculation logic.",
      "topic": "Super Method Extension Pattern",
      "type": "scenario",
      "level": "easy",
      "strength": "Employed super.method() to augment inherited behavior without code duplication.",
      "weakness": "Call `super.method()` in an overridden method to augment rather than replace parent logic."
    },
    {
      "q": "What is the purpose of the `super` keyword when used as a reference qualifier (`super.method()`)?",
      "options": [
        "To invoke an overridden superclass method or access a hidden superclass field from within a subclass",
        "To terminate the subclass",
        "To cast an object to Object",
        "To bypass security checks"
      ],
      "answer": 1,
      "explain": "`super.methodName()` allows a subclass to explicitly call the superclass's version of a method that has been overridden in the subclass.",
      "topic": "Super Reference Qualifier",
      "type": "theory",
      "level": "easy",
      "strength": "Understands accessing overridden superclass members via `super.`.",
      "weakness": "Use `super.method()` to invoke an overridden superclass implementation."
    },
    {
      "q": "A security system models role permissions: `User` -> `AdminUser`. `User` has `public boolean hasPermission(String perm)`. `AdminUser` overrides this to grant all permissions unconditionally (`return true;`). What OOP concept is this?",
      "options": [
        "Data hiding",
        "Method overriding (polymorphic specialization)",
        "Method overloading",
        "Class encapsulation"
      ],
      "answer": 1,
      "explain": "Specializing or customizing inherited behavior in a subclass using the identical method signature is method overriding.",
      "topic": "Polymorphic Specialization via Overriding",
      "type": "scenario",
      "level": "easy",
      "strength": "Identified method overriding as polymorphic specialization.",
      "weakness": "Overriding allows subclasses to specialize inherited behavioral contracts."
    },
    {
      "q": "What is the contract between `equals()` and `hashCode()` in Java?",
      "options": [
        "If two objects have the same hashCode, they must be equal",
        "If two objects are equal according to `equals(Object)`, they MUST produce the exact same integer `hashCode()` value",
        "They are completely independent and have no contract",
        "hashCode must return a negative number"
      ],
      "answer": 1,
      "explain": "The fundamental Java contract states: if `a.equals(b)` is true, then `a.hashCode() == b.hashCode()` must be true. Violating this breaks hash-based collections (`HashMap`, `HashSet`).",
      "topic": "equals and hashCode Contract",
      "type": "theory",
      "level": "hard",
      "strength": "Deep understanding of the equals-hashCode contract in Java.",
      "weakness": "Equal objects according to equals() MUST return identical hash codes."
    },
    {
      "q": "Why does this code cause a compiler error?\n```java\npackage p1;\npublic class Super {\n    void packageMethod() {}\n}\npackage p2;\nimport p1.Super;\npublic class Sub extends Super {\n    @Override\n    public void packageMethod() {}\n}\n```",
      "options": [
        "Sub cannot be public",
        "Method does not override or implement: `packageMethod` has package-private access in package `p1` and is invisible to subclass `Sub` in package `p2`",
        "packageMethod must be static",
        "p1 cannot be imported"
      ],
      "answer": 1,
      "explain": "Package-private members are invisible outside their package. Subclasses in different packages cannot override or see package-private methods.",
      "topic": "Package-Private Invisible to Cross-Package Subclass",
      "type": "error",
      "level": "hard",
      "strength": "Understands that package-private members cannot be overridden by subclasses in different packages.",
      "weakness": "Package-private methods are not inherited or overridden by subclasses in other packages."
    },
    {
      "q": "What is the output of this code?\n```java\nclass A {\n    int num = 1;\n    public int getNum() { return num; }\n}\nclass B extends A {\n    int num = 2;\n    @Override\n    public int getNum() { return num; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        A a = new B();\n        System.out.println(a.num + \" \" + a.getNum());\n    }\n}\n```",
      "options": [
        "1 1",
        "2 2",
        "1 2",
        "2 1"
      ],
      "answer": 2,
      "explain": "`a.num` accesses the field directly (bound to reference type `A` -> 1). `a.getNum()` is a polymorphic method call (bound to runtime object `B` -> returns `B.num` = 2). Output: `1 2`.",
      "topic": "Field vs Polymorphic Method Resolution Output",
      "type": "output",
      "level": "hard",
      "strength": "Mastery of field resolution (by reference) vs method resolution (by runtime object).",
      "weakness": "`a.num` is resolved by reference type (1); `a.getNum()` is resolved by runtime object (2)."
    },
    {
      "q": "A banking application has an `Account` base class and a `SavingsAccount` subclass. The superclass has `protected double balance;`. A junior developer in another package attempts: `void audit(Account a) { System.out.println(a.balance); }`. Why does this fail to compile?",
      "options": [
        "balance is private",
        "In another package, `protected` members can only be accessed through inheritance via subclass references (`SavingsAccount`), not through arbitrary superclass references (`Account a`)",
        "balance is a keyword",
        "Account has no balance"
      ],
      "answer": 1,
      "explain": "Java protected access rules enforce that cross-package access to protected members is only permitted through the subclass's own type hierarchy, preventing arbitrary access to unrelated instances.",
      "topic": "Cross-Package Protected Field Access Restriction",
      "type": "scenario",
      "level": "hard",
      "strength": "Mastered cross-package protected access boundaries.",
      "weakness": "Across packages, protected members can only be accessed via the subclass type itself."
    },
    {
      "q": "Does Java support multiple inheritance of classes (e.g. `class C extends A, B`)?",
      "options": [
        "Yes, Java supports full multiple class inheritance",
        "No, Java supports only single inheritance for classes (a class can extend at most one direct superclass)",
        "Yes, but only if all classes are abstract",
        "Only in Java 17 and above"
      ],
      "answer": 1,
      "explain": "To avoid complexity and the 'Diamond Problem' of ambiguous inheritance, Java explicitly restricts classes to single inheritance. Multiple type inheritance is achieved via interfaces.",
      "topic": "Single Inheritance Architecture",
      "type": "theory",
      "level": "easy",
      "strength": "Knows that Java supports only single class inheritance.",
      "weakness": "Java permits single class inheritance only; a class can extend at most one superclass."
    },
    {
      "q": "What error occurs in this code snippet?\n```java\nclass Base {\n    public Object get() { return null; }\n}\nclass Sub extends Base {\n    @Override\n    public int get() { return 0; }\n}\n```",
      "options": [
        "Object cannot return null",
        "Incompatible return type: primitive `int` cannot be a covariant return type for `Object` (covariant returns only apply to reference subtypes)",
        "Sub must return String",
        "Base cannot have get method"
      ],
      "answer": 1,
      "explain": "Covariant return types only work for reference types (objects). A primitive type `int` cannot be a subtype of `Object`.",
      "topic": "Primitive Incompatible with Object Covariant Return",
      "type": "error",
      "level": "medium",
      "strength": "Recognized that primitive types cannot be covariant subtypes of Object.",
      "weakness": "Covariant return types require reference subtypes; primitive `int` is not a subtype of `Object`."
    },
    {
      "q": "What does this code print?\n```java\nclass A {\n    public void m() { System.out.print(\"A \"); }\n}\nclass B extends A {\n    @Override\n    public void m() {\n        super.m();\n        System.out.print(\"B \");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new B().m();\n    }\n}\n```",
      "options": [
        "B A ",
        "A B ",
        "B ",
        "A "
      ],
      "answer": 1,
      "explain": "`new B().m()` calls `super.m()`, which prints `\"A \"`. Then `B.m()` prints `\"B \"`. Output: `A B `.",
      "topic": "super.method() Invocation Output",
      "type": "output",
      "level": "easy",
      "strength": "Traced superclass method delegation via `super.m()`.",
      "weakness": "`super.m()` runs first (A), then local code runs (B): `A B `."
    },
    {
      "q": "A financial reporting service converts transaction entities into CSV format. The `Transaction` class overrides `toString()` to return comma-separated values: `\"1001,Alice,250.00\"`. What is the benefit of overriding `toString()` for logging and debugging?",
      "options": [
        "It prevents ClassCastException",
        "It provides a clear, human-readable text representation when objects are printed or inspected in logs and debuggers, rather than cryptic memory hash codes (`Transaction@15db9742`)",
        "It speeds up database queries",
        "It makes fields immutable"
      ],
      "answer": 1,
      "explain": "Overriding `toString()` gives developers meaningful, diagnostic text representations during logging, debugging, and testing.",
      "topic": "Diagnostic Value of toString()",
      "type": "scenario",
      "level": "easy",
      "strength": "Understands the diagnostic role of overriding toString() in domain entities.",
      "weakness": "Override `toString()` to provide informative diagnostic descriptions in logs and debuggers."
    },
    {
      "q": "What is the difference between method overloading and method overriding?",
      "options": [
        "Overloading is in different classes; overriding is in the same class",
        "Overloading has the same method name with DIFFERENT parameter lists (compile-time polymorphism); overriding has identical signature and compatible return type in a subclass (runtime polymorphism)",
        "Overriding requires static; overloading requires final",
        "They are identical terms in Java"
      ],
      "answer": 1,
      "explain": "Overloading: same name, different parameters, resolved at compile-time. Overriding: same name and same parameters in a subclass, resolved at runtime dynamically.",
      "topic": "Overloading vs Overriding Distinction",
      "type": "theory",
      "level": "easy",
      "strength": "Clearly distinguishes compile-time overloading from runtime overriding.",
      "weakness": "Overloading has different parameters; overriding has identical signatures in a subclass."
    },
    {
      "q": "An audio software plugin represents audio processors: `Processor` -> `ReverbProcessor`. `Processor` defines `public void processBuffer(float[] buffer)`. `ReverbProcessor` needs to perform custom reverb algorithms, but also call the base processor logic. How does it invoke the base logic?",
      "options": [
        "`super.processBuffer(buffer);`",
        "`this.processBuffer(buffer);` (Infinite recursion!)",
        "`Processor.processBuffer(buffer);`",
        "`((Processor) this).processBuffer(buffer);`"
      ],
      "answer": 0,
      "explain": "`super.processBuffer(buffer)` explicitly executes the superclass's implementation. Calling `this.` causes infinite recursion.",
      "topic": "Overridden Base Call via super Qualifier",
      "type": "scenario",
      "level": "easy",
      "strength": "Correctly invoked superclass method version using `super.`.",
      "weakness": "Use `super.method(args)` to execute the superclass version from within an override."
    },
    {
      "q": "Can an overriding method throw checked exceptions that are NOT declared by the superclass method?",
      "options": [
        "Yes, it can throw any checked exception",
        "No, an overriding method can only declare the same checked exceptions, a subset of them, or subclasses of them (it cannot throw broader or new checked exceptions)",
        "Yes, if marked with @Override",
        "Only RuntimeExceptions are restricted"
      ],
      "answer": 1,
      "explain": "To preserve polymorphic substitutability, an overriding method cannot throw new or broader checked exceptions than those declared by the superclass method.",
      "topic": "Exception Constraints in Overriding",
      "type": "theory",
      "level": "hard",
      "strength": "Understands exception specification restrictions in method overriding.",
      "weakness": "Overriding methods cannot throw new or broader checked exceptions."
    },
    {
      "q": "What is the issue with this code?\n```java\nclass Base {\n    protected int count;\n}\nclass Sub extends Base {\n    public void check(Base b) {\n        System.out.println(b.count);\n    }\n}\n```",
      "options": [
        "count cannot be printed",
        "If `Sub` is in a different package than `Base`, accessing `b.count` on another `Base` reference is illegal (protected allows access through subclass references, not raw superclass references from another package)",
        "Sub cannot extend Base",
        "count must be static"
      ],
      "answer": 1,
      "explain": "Across package boundaries, a subclass can only access `protected` members through references of its own subclass type (or its subtypes), not through an arbitrary superclass instance reference `b`.",
      "topic": "Protected Cross-Package Access Rule",
      "type": "error",
      "level": "hard",
      "strength": "Mastery of the subtle cross-package protected access restriction on superclass instances.",
      "weakness": "Across packages, protected members can only be accessed through references of the subclass type."
    },
    {
      "q": "What does this code print?\n```java\nclass Alpha {\n    public Alpha() { System.out.print(\"1 \"); }\n}\nclass Beta extends Alpha {\n    public Beta() {\n        this(5);\n        System.out.print(\"2 \");\n    }\n    public Beta(int x) {\n        System.out.print(\"3 \");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Beta();\n    }\n}\n```",
      "options": [
        "1 3 2 ",
        "3 2 1 ",
        "1 2 3 ",
        "3 1 2 "
      ],
      "answer": 0,
      "explain": "`new Beta()` calls `this(5)`. `Beta(int x)` implicitly calls `super()`, running `Alpha()` first (`\"1 \"`). Then `Beta(int x)` body runs (`\"3 \"`). Control returns to `Beta()`, which prints `\"2 \"`. Output: `1 3 2 `.",
      "topic": "Combined this() and super() Chaining Output",
      "type": "output",
      "level": "hard",
      "strength": "Mastered execution sequence of this() delegating to constructor with implicit super().",
      "weakness": "`Alpha()` runs first (1), then `Beta(int)` (3), then `Beta()` (2): `1 3 2 `."
    },
    {
      "q": "A developer designs a `SecureVault` class. To prevent inheritance, the developer makes the class `final`. What additional benefit does making the class `final` provide?",
      "options": [
        "All methods in a `final` class are implicitly `final`, allowing the JIT compiler to optimize and inline method calls aggressively because no overriding can ever occur",
        "Vault contents are encrypted by hardware",
        "No memory is used",
        "Constructors run on separate threads"
      ],
      "answer": 0,
      "explain": "Because no subclass can override methods in a `final` class, all methods are implicitly final. The JVM JIT compiler can aggressively inline method call sites without deoptimization guards.",
      "topic": "JIT Optimization of Final Classes",
      "type": "scenario",
      "level": "hard",
      "strength": "Understands JIT compiler inlining optimizations enabled by final classes.",
      "weakness": "Final classes allow the JIT compiler to aggressively inline methods without deoptimization checks."
    },
    {
      "q": "What is the ultimate root class of the entire class hierarchy in Java?",
      "options": [
        "`java.lang.Class`",
        "`java.lang.Object`",
        "`java.lang.System`",
        "`java.lang.Root`"
      ],
      "answer": 1,
      "explain": "Every class in Java directly or indirectly inherits from `java.lang.Object`. If no superclass is specified, `extends Object` is implicitly added by the compiler.",
      "topic": "Object Class Hierarchy",
      "type": "theory",
      "level": "easy",
      "strength": "Identifies java.lang.Object as the root of the Java class hierarchy.",
      "weakness": "Every class in Java implicitly or explicitly inherits from `java.lang.Object`."
    },
    {
      "q": "Why does the following subclass definition fail to compile?\n```java\nclass Parent {\n    public Parent(int x) {}\n}\nclass Child extends Parent {\n    public Child() {}\n}\n```",
      "options": [
        "Child cannot extend Parent",
        "The compiler inserts an implicit `super();` into `Child()`, but `Parent` has no no-argument constructor",
        "Child constructor must have parameter x",
        "Parent cannot have parameters"
      ],
      "answer": 1,
      "explain": "`Child()` attempts to invoke the default `super()`. Because `Parent` defined `Parent(int x)`, no default constructor exists in `Parent`, causing a compile error: 'constructor Parent in class Parent cannot be applied to given types'.",
      "topic": "Implicit super() Missing Constructor Error",
      "type": "error",
      "level": "easy",
      "strength": "Caught implicit super() failure when superclass lacks no-arg constructor.",
      "weakness": "Explicitly invoke `super(x)` when the parent class does not provide a no-arg constructor."
    },
    {
      "q": "What is the output of this code?\n```java\nclass Super {\n    public Super(int x) { System.out.print(\"S\" + x + \" \"); }\n}\nclass Sub extends Super {\n    public Sub() {\n        super(10);\n        System.out.print(\"Sub \");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Sub();\n    }\n}\n```",
      "options": [
        "S10 Sub ",
        "Sub S10 ",
        "S10 ",
        "Sub "
      ],
      "answer": 0,
      "explain": "`new Sub()` calls `super(10)`, printing `\"S10 \"`. Then `Sub()` prints `\"Sub \"`. Output: `S10 Sub `.",
      "topic": "Parameterized super() Call Output",
      "type": "output",
      "level": "easy",
      "strength": "Traced explicit parameterized super constructor call.",
      "weakness": "Superclass constructor executes first with argument 10: `S10 Sub `."
    },
    {
      "q": "A warehouse robot management program models vehicles: `Vehicle` -> `ElectricForklift`. `Vehicle` requires a mandatory serial number: `public Vehicle(String serialNumber)`. How must `ElectricForklift` initialize the serial number?",
      "options": [
        "Declare a new serialNumber field",
        "Provide a constructor that invokes `super(serialNumber)` as its very first statement",
        "Set serialNumber in a static block",
        "Leave the constructor empty"
      ],
      "answer": 0,
      "explain": "Subclasses must delegate mandatory superclass initialization by invoking `super(serialNumber)` as the first line of their constructor.",
      "topic": "Mandatory Parameter Passing to super()",
      "type": "scenario",
      "level": "easy",
      "strength": "Delegated required initialization parameters to superclass constructor.",
      "weakness": "Pass mandatory parent parameters via `super(params)` in the subclass constructor."
    },
    {
      "q": "Which three methods of `java.lang.Object` are most frequently overridden in domain classes?",
      "options": [
        "`start()`, `run()`, `stop()`",
        "`toString()`, `equals(Object obj)`, and `hashCode()`",
        "`clone()`, `finalize()`, and `notify()`",
        "`wait()`, `notifyAll()`, and `getClass()`"
      ],
      "answer": 1,
      "explain": "`toString()` provides human-readable text, `equals(Object)` defines logical value equality, and `hashCode()` maintains the contract required for hash-based collections (`HashMap`, `HashSet`).",
      "topic": "Core Object Methods",
      "type": "theory",
      "level": "easy",
      "strength": "Knows core Object methods: toString, equals, and hashCode.",
      "weakness": "Domain entities typically override `toString()`, `equals()`, and `hashCode()`."
    },
    {
      "q": "Why does this code fail to compile?\n```java\nclass Base {\n    public Base() {}\n}\nclass Sub extends Base {\n    public Sub() {\n        int x = 10;\n        super();\n    }\n}\n```",
      "options": [
        "Base has no constructor",
        "`super()` must be the first statement in the constructor; local variable declaration `int x = 10;` cannot precede it",
        "x must be final",
        "Sub cannot call super"
      ],
      "answer": 1,
      "explain": "`super()` must strictly be the first statement. Declaring `int x = 10;` before `super()` violates Java syntax.",
      "topic": "Preceding Statement Before super()",
      "type": "error",
      "level": "easy",
      "strength": "Recognized variable declaration placed before super().",
      "weakness": "Nothing can precede `super()` or `this()` in a constructor."
    },
    {
      "q": "What occurs if a subclass constructor does NOT explicitly call `super(...)` or `this(...)` on its first line?",
      "options": [
        "Compilation error: constructor must call super",
        "The compiler automatically inserts an implicit no-argument `super();` call as the first statement",
        "The superclass is never initialized",
        "A runtime NullPointerException is thrown"
      ],
      "answer": 1,
      "explain": "If neither `super(...)` nor `this(...)` is written, the compiler automatically injects `super();` at the start of the constructor to invoke the superclass's no-arg constructor.",
      "topic": "Implicit super() Insertion",
      "type": "theory",
      "level": "medium",
      "strength": "Understands automatic compiler insertion of `super();`.",
      "weakness": "The compiler automatically inserts `super();` if neither `super` nor `this` is explicitly called."
    },
    {
      "q": "Identify the error flagged by the `@Override` annotation here:\n```java\nclass Base {\n    public void calculate(int x) {}\n}\nclass Derived extends Base {\n    @Override\n    public void calculate(double x) {}\n}\n```",
      "options": [
        "Derived cannot have calculate method",
        "Method does not override or implement a method from a supertype: parameter types differ (`double` vs `int`), meaning this is an overload, not an override",
        "int cannot be converted to double",
        "calculate must return void"
      ],
      "answer": 1,
      "explain": "`Derived` changed the parameter from `int` to `double`. This overloads the method instead of overriding it. Because `@Override` was specified, the compiler rejects the mismatch.",
      "topic": "Overload Flagged as Overriding Failure",
      "type": "error",
      "level": "medium",
      "strength": "Spotted parameter mismatch flagged by @Override annotation.",
      "weakness": "`@Override` catches accidental overloads where parameter types do not match the superclass."
    },
    {
      "q": "What is the output of this code?\n```java\nclass A {\n    public A() { print(); }\n    public void print() { System.out.print(\"A \"); }\n}\nclass B extends A {\n    int x = 42;\n    @Override\n    public void print() { System.out.print(x + \" \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new B();\n    }\n}\n```",
      "options": [
        "A ",
        "42 ",
        "0 ",
        "NullPointerException"
      ],
      "answer": 2,
      "explain": "Calling an overridable method inside a constructor invokes `B.print()` during `A()` execution. At this point, `B`'s fields have not been initialized yet (`x` is at its default value 0). Outputs `0 `.",
      "topic": "Polymorphic Call in Constructor Trap Output",
      "type": "output",
      "level": "hard",
      "strength": "Mastery of the subtle constructor polymorphic dispatch bug in Java.",
      "weakness": "Overridden method in parent constructor executes before child fields initialize, printing default 0."
    },
    {
      "q": "A software security auditor reviews a cryptography library. The `AESCipher` class contains critical encryption routines. Why should the class be marked `public final class AESCipher`?",
      "options": [
        "Final classes compile faster",
        "To prevent malicious subclasses from extending `AESCipher`, overriding cryptographic methods, and intercepting plaintext data (subversion prevention)",
        "Final classes run with root permissions",
        "To allow multiple inheritance"
      ],
      "answer": 1,
      "explain": "Marking sensitive security or immutable classes `final` guarantees that untrusted third-party code cannot subclass them to compromise system security contracts.",
      "topic": "Security Hardening via Final Classes",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands the security justification for sealing classes with the final modifier.",
      "weakness": "Mark security-sensitive classes `final` to prevent malicious subclass overriding."
    },
    {
      "q": "What is the role of `super()` in a subclass constructor?",
      "options": [
        "It imports methods from other packages",
        "It invokes the constructor of the direct superclass to initialize inherited state",
        "It destroys the superclass instance",
        "It restarts the current constructor"
      ],
      "answer": 1,
      "explain": "`super(...)` calls the constructor of the immediate superclass. Subclass object initialization must begin by initializing its inherited superclass state.",
      "topic": "Super Constructor Call",
      "type": "theory",
      "level": "easy",
      "strength": "Understands the role of `super()` in subclass construction.",
      "weakness": "`super()` invokes the parent class constructor to initialize inherited fields."
    },
    {
      "q": "Identify the compilation error in this overriding attempt:\n```java\nclass Animal {\n    public void speak() {}\n}\nclass Dog extends Animal {\n    @Override\n    protected void speak() {}\n}\n```",
      "options": [
        "Dog must be public",
        "Cannot reduce the visibility of the inherited method from `Animal`: overriding method cannot change `public` to `protected`",
        "speak cannot be overridden",
        "@Override is deprecated"
      ],
      "answer": 1,
      "explain": "An overriding method cannot reduce access privileges. Overriding a `public` method with `protected` causes: 'attempting to assign weaker access privileges; was public'.",
      "topic": "Weaker Access Privilege Error",
      "type": "error",
      "level": "easy",
      "strength": "Caught illegal reduction of access modifier in overriding method.",
      "weakness": "Overriding methods cannot assign weaker access privileges (e.g. public to protected)."
    },
    {
      "q": "What is the output of this code?\n```java\nclass Person {\n    String name;\n    public Person(String name) { this.name = name; }\n    public String toString() { return name; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person(\"Bob\");\n        System.out.println(\"User: \" + p);\n    }\n}\n```",
      "options": [
        "User: Bob",
        "User: Person@15db9742",
        "User: Person",
        "User: null"
      ],
      "answer": 0,
      "explain": "String concatenation `\"User: \" + p` invokes `p.toString()`, which returns `\"Bob\"`. Outputs `User: Bob`.",
      "topic": "String Concatenation toString Output",
      "type": "output",
      "level": "easy",
      "strength": "Recognized automatic toString() invocation in string concatenation.",
      "weakness": "Concatenating an object invokes its `toString()` method: `User: Bob`."
    },
    {
      "q": "A banking app models `SavingsAccount` extending `BankAccount`. The bank wants to prevent subclasses from modifying the core annual interest calculation formula: `public double calculateInterest()`. How can the bank enforce this?",
      "options": [
        "Make the method private (wait: but subclasses must call it)",
        "Declare the method `public final double calculateInterest()`: it remains accessible to subclasses and callers, but cannot be overridden",
        "Make the class abstract",
        "Remove the method"
      ],
      "answer": 1,
      "explain": "Declaring the method `public final` keeps it callable everywhere while guaranteeing that no subclass can alter or tamper with the calculation formula.",
      "topic": "Sealing Business Logic with Final Methods",
      "type": "scenario",
      "level": "easy",
      "strength": "Used final method modifier to lock critical business calculation algorithms.",
      "weakness": "Declare methods `final` when their implementation must be preserved without subclass modification."
    },
    {
      "q": "What is the default implementation of `equals(Object obj)` inherited from `java.lang.Object`?",
      "options": [
        "It compares all primitive fields for equality",
        "It evaluates reference identity using `this == obj` (returns true only if both references point to the exact same memory address)",
        "It compares object hashcodes",
        "It throws an UnsupportedOperationException"
      ],
      "answer": 1,
      "explain": "In `java.lang.Object`, `equals()` is simply implemented as `return (this == obj);`. Unless overridden, it tests reference identity rather than logical content equality.",
      "topic": "Default Object.equals Implementation",
      "type": "theory",
      "level": "easy",
      "strength": "Knows that default Object.equals tests reference identity `==`.",
      "weakness": "Default `equals()` tests reference identity (`this == obj`), not field contents."
    },
    {
      "q": "What is the compilation issue in this code?\n```java\nclass Parent {\n    public Parent() {}\n}\nclass Child extends Parent {\n    public Child() {\n        super;\n    }\n}\n```",
      "options": [
        "super cannot be used",
        "Syntax error: `super` requires parentheses `super();` when invoking a constructor",
        "Parent must be abstract",
        "Child must take parameters"
      ],
      "answer": 1,
      "explain": "Constructor invocation requires parentheses: `super();`. Writing `super;` is a syntax error.",
      "topic": "Super Constructor Syntax Error",
      "type": "error",
      "level": "easy",
      "strength": "Spotted missing parentheses on super() constructor call.",
      "weakness": "Invoking superclass constructors requires parentheses: `super();`."
    },
    {
      "q": "Can a subclass override a method and make its access modifier MORE restrictive (e.g. overriding `public` with `protected`)?",
      "options": [
        "Yes, access modifiers can be changed freely",
        "No, an overriding method cannot reduce the visibility of the inherited method (it can only maintain or broaden access)",
        "Yes, if the method is void",
        "Only if marked with @Override"
      ],
      "answer": 1,
      "explain": "The Liskov Substitution Principle mandates that an overriding method cannot reduce visibility (e.g. `public` cannot become `protected` or `private`). Doing so causes: 'attempting to assign weaker access privileges'.",
      "topic": "Access Privilege in Overriding",
      "type": "theory",
      "level": "medium",
      "strength": "Understands visibility constraints in method overriding.",
      "weakness": "Overriding methods cannot reduce access visibility; they can only maintain or expand it."
    },
    {
      "q": "Why does this code cause a compilation error?\n```java\nclass Parent {\n    public static void show() {}\n}\nclass Child extends Parent {\n    @Override\n    public void show() {}\n}\n```",
      "options": [
        "Parent has no show method",
        "Instance method `show()` in `Child` cannot override static method `show()` in `Parent`",
        "show must return void",
        "Child cannot extend Parent"
      ],
      "answer": 1,
      "explain": "An instance method cannot override a static method, and a static method cannot hide an instance method. Both produce compilation errors.",
      "topic": "Instance Overriding Static Error",
      "type": "error",
      "level": "medium",
      "strength": "Caught instance method attempting to override a static method.",
      "weakness": "An instance method cannot override a static method; static members can only be hidden by static members."
    },
    {
      "q": "What does this code print?\n```java\nclass One {\n    public String name() { return \"One\"; }\n}\nclass Two extends One {\n    public String name() { return \"Two\"; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        One o = new Two();\n        System.out.println(o.name() + \" \" + ((One) o).name());\n    }\n}\n```",
      "options": [
        "Two One",
        "Two Two",
        "One Two",
        "One One"
      ],
      "answer": 1,
      "explain": "In Java, casting to `(One)` does NOT alter dynamic method binding. Both `o.name()` and `((One) o).name()` execute the overridden method on `Two`. Output: `Two Two`.",
      "topic": "Dynamic Binding Unaffected by Cast Output",
      "type": "output",
      "level": "hard",
      "strength": "Understands that dynamic method dispatch cannot be overridden by casting.",
      "weakness": "Both invocations execute `Two.name()`, printing `Two Two`."
    },
    {
      "q": "An e-commerce order management system stores millions of `Customer` objects in a `HashSet`. A developer notices that duplicate customers with the exact same `email` are being inserted into the set. What did the developer forget to do in the `Customer` class?",
      "options": [
        "Make Customer implement Serializable",
        "Override both `equals(Object)` and `hashCode()` to evaluate customer equality based on `email`",
        "Make the email field public",
        "Create a copy constructor"
      ],
      "answer": 1,
      "explain": "`HashSet` uses `hashCode()` to find the bucket and `equals()` to check for duplicates. Without overriding both, `HashSet` uses default memory identity, allowing logical duplicates.",
      "topic": "HashSet Deduplication via equals and hashCode",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands the dependency of hash collections on equals() and hashCode().",
      "weakness": "Hash-based collections (`HashSet`/`HashMap`) require properly overridden `equals()` and `hashCode()`."
    },
    {
      "q": "What rule governs the placement of `super()` or `this()` inside a constructor body?",
      "options": [
        "It can be placed anywhere in the constructor",
        "It must strictly be the very first statement in the constructor body",
        "It must be the last statement",
        "It must be inside an if statement"
      ],
      "answer": 1,
      "explain": "Java requires that a call to `super(...)` or `this(...)` must be the first line of executable code in a constructor.",
      "topic": "First Statement Rule for super()",
      "type": "theory",
      "level": "easy",
      "strength": "Knows the first statement rule for constructor delegation.",
      "weakness": "`super()` or `this()` must be the very first statement in a constructor."
    },
    {
      "q": "Why does this code fail to compile?\n```java\nfinal class Vehicle {}\nclass Car extends Vehicle {}\n```",
      "options": [
        "Car must have a constructor",
        "Cannot inherit from final `Vehicle`",
        "Vehicle must be public",
        "Car must implement Vehicle"
      ],
      "answer": 1,
      "explain": "A `final` class cannot be extended. Compiling this produces: 'cannot inherit from final Vehicle'.",
      "topic": "Inheriting from Final Class Error",
      "type": "error",
      "level": "easy",
      "strength": "Recognized compiler rejection of extending a final class.",
      "weakness": "Classes declared `final` cannot be extended."
    },
    {
      "q": "What does this code print?\n```java\nclass X {\n    public X() { System.out.print(\"X \"); }\n}\nclass Y extends X {\n    public Y() { System.out.print(\"Y \"); }\n}\nclass Z extends Y {\n    public Z() { System.out.print(\"Z \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Z();\n    }\n}\n```",
      "options": [
        "Z Y X ",
        "X Y Z ",
        "Z ",
        "X Z "
      ],
      "answer": 1,
      "explain": "Constructor calls chain up to the top of the inheritance tree: `Z()` calls `Y()`, which calls `X()`. Execution unwinds down: `X `, then `Y `, then `Z `. Output: `X Y Z `.",
      "topic": "Multi-Level Constructor Hierarchy Output",
      "type": "output",
      "level": "easy",
      "strength": "Traced multi-tier inheritance constructor chaining execution.",
      "weakness": "Constructors execute top-down from root superclass to leaf subclass: `X Y Z `."
    },
    {
      "q": "An inventory tracking system needs to check if two `Product` objects represent the same physical SKU. Why is writing `if (p1 == p2)` incorrect, and what should be written instead?",
      "options": [
        "`==` compares memory addresses, not SKU values; write `if (p1.equals(p2))` with an overridden `equals()` method comparing SKUs",
        "`==` is deprecated in Java",
        "Use `p1.compareTo(p2) == 0` only",
        "Convert both products to ints"
      ],
      "answer": 0,
      "explain": "`==` compares whether both variables refer to the exact same object in heap memory. To test logical domain equality (matching SKU), override and call `p1.equals(p2)`.",
      "topic": "Logical Domain Equality via equals()",
      "type": "scenario",
      "level": "easy",
      "strength": "Avoids reference identity `==` for domain object equality.",
      "weakness": "Use `p1.equals(p2)` with overridden `equals()` for domain value comparisons."
    },
    {
      "q": "What is the 'is-a' relationship in Object-Oriented Programming?",
      "options": [
        "Association between classes (e.g. Car has-a Engine)",
        "Inheritance: a subclass is a specialized type of its superclass (e.g. Dog is-a Animal)",
        "Aggregating multiple primitive variables",
        "Instantiating an object with new"
      ],
      "answer": 1,
      "explain": "Inheritance models an 'is-a' relationship (a `Student` is a `Person`). Composition models a 'has-a' relationship (a `Car` has an `Engine`).",
      "topic": "Is-A vs Has-A Relationships",
      "type": "theory",
      "level": "easy",
      "strength": "Distinguishes inheritance 'is-a' from composition 'has-a'.",
      "weakness": "Inheritance represents an 'is-a' relationship; composition represents 'has-a'."
    },
    {
      "q": "Why does this code cause a compiler error?\n```java\nclass Person {\n    private void secret() {}\n}\nclass Employee extends Person {\n    @Override\n    public void secret() {}\n}\n```",
      "options": [
        "Employee cannot be public",
        "Method does not override or implement: `secret()` in `Person` is `private`, so it is not visible or overridable by `Employee`",
        "secret must return int",
        "Person must be abstract"
      ],
      "answer": 1,
      "explain": "Private methods are not visible to subclasses and cannot be overridden. Specifying `@Override` causes the compiler to reject it.",
      "topic": "Attempted Override of Private Method",
      "type": "error",
      "level": "easy",
      "strength": "Caught @Override on private superclass method.",
      "weakness": "Private methods cannot be overridden; removing `@Override` makes it a new independent method."
    },
    {
      "q": "Can a `static` method in a superclass be overridden in a subclass?",
      "options": [
        "Yes, like any other method",
        "No, static methods cannot be overridden; if a subclass declares a static method with the same signature, it 'hides' the superclass method (method hiding, resolved at compile-time)",
        "Yes, if marked abstract",
        "Only if called through `super`"
      ],
      "answer": 1,
      "explain": "Static methods belong to the class and are resolved at compile time based on declared reference type. They cannot participate in dynamic polymorphism (overriding); they can only be hidden.",
      "topic": "Static Method Hiding vs Overriding",
      "type": "theory",
      "level": "medium",
      "strength": "Distinguishes method hiding from polymorphic method overriding.",
      "weakness": "Static methods cannot be overridden; redeclaring them in a subclass is method hiding."
    },
    {
      "q": "Identify the bug in this `equals` method implementation:\n```java\npublic class Person {\n    String name;\n    public boolean equals(Person other) {\n        return this.name.equals(other.name);\n    }\n}\n```",
      "options": [
        "name cannot be compared with equals",
        "It OVERLOADS `equals` rather than OVERRIDING `Object.equals(Object obj)` because the parameter type is `Person` instead of `Object`, so `list.contains()` or polymorphism will not call it",
        "Person must implement Comparable",
        "other.name is private"
      ],
      "answer": 1,
      "explain": "`Object.equals` takes `Object obj`. Declaring `equals(Person other)` is an overload, not an override. Standard collections and frameworks invoke `equals(Object)`, bypassing this method completely.",
      "topic": "Equals Overloading vs Overriding Trap",
      "type": "error",
      "level": "medium",
      "strength": "Spotted dangerous accidental overloading of equals(Object).",
      "weakness": "Always override `equals(Object obj)` with type `Object`, not the concrete class type."
    },
    {
      "q": "What is the output of this code?\n```java\nclass Base {\n    int x = 10;\n}\nclass Derived extends Base {\n    int x = 20;\n}\npublic class Main {\n    public static void main(String[] args) {\n        Base b = new Derived();\n        System.out.println(b.x);\n    }\n}\n```",
      "options": [
        "10",
        "20",
        "30",
        "NullPointerException"
      ],
      "answer": 0,
      "explain": "In Java, fields are NOT polymorphic. Field access is resolved at compile time based on the declared reference type (`Base`), NOT the runtime object. Outputs `10`.",
      "topic": "Field Hiding Reference Type Binding Output",
      "type": "output",
      "level": "medium",
      "strength": "Understands that field access is resolved by reference type, not runtime object.",
      "weakness": "Field access is not polymorphic; `b.x` accesses `Base.x` (10)."
    },
    {
      "q": "A university student database models `Undergraduate` extending `Student`. The base class has a package-private method `void updateGrades()`. When `Undergraduate` is moved to a sub-package `com.univ.students.undergrad`, it fails to compile when calling `updateGrades()`. Why?",
      "options": [
        "Undergraduate cannot have sub-packages",
        "Package-private members are accessible only within the exact same package; moving to a sub-package breaks access because sub-packages are treated as completely distinct packages in Java",
        "Grades cannot be updated",
        "Undergraduate must be an interface"
      ],
      "answer": 1,
      "explain": "In Java, sub-packages (e.g. `p.sub`) are completely separate packages from parent packages (`p`). Package-private members cannot cross package boundaries; change visibility to `protected`.",
      "topic": "Sub-Package Separation in Java",
      "type": "scenario",
      "level": "medium",
      "strength": "Recognized that sub-packages do not inherit package-private access privileges.",
      "weakness": "Sub-packages are distinct packages in Java; use `protected` to grant access to subclasses across packages."
    },
    {
      "q": "What is method overriding in Java?",
      "options": [
        "Defining multiple methods with the same name and different parameters in the same class",
        "A subclass providing a specific implementation of a method that is already defined in its superclass, having the identical method signature and compatible return type",
        "Calling a private method from outside its class",
        "Hiding a static variable"
      ],
      "answer": 1,
      "explain": "Method overriding allows a subclass to provide its own specialized behavior for a method inherited from a superclass, using the exact same signature.",
      "topic": "Method Overriding Definition",
      "type": "theory",
      "level": "easy",
      "strength": "Distinguishes method overriding from overloading.",
      "weakness": "Overriding provides a specialized implementation of an inherited method with identical signature."
    },
    {
      "q": "Why does this code cause a compilation error?\n```java\nclass Parent {\n    public final void print() {}\n}\nclass Child extends Parent {\n    public void print() {}\n}\n```",
      "options": [
        "print cannot be void",
        "print() in Child cannot override print() in Parent because the overridden method is `final`",
        "Child must be final",
        "Parent must be abstract"
      ],
      "answer": 1,
      "explain": "A `final` method in a superclass cannot be overridden by any subclass.",
      "topic": "Overriding Final Method Error",
      "type": "error",
      "level": "easy",
      "strength": "Spotted attempt to override a final method.",
      "weakness": "`final` methods cannot be overridden by subclasses."
    },
    {
      "q": "What does this code print?\n```java\nclass Shape {\n    public void draw() { System.out.print(\"Shape \"); }\n}\nclass Circle extends Shape {\n    public void draw() { System.out.print(\"Circle \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Shape[] shapes = { new Shape(), new Circle() };\n        for (Shape s : shapes) s.draw();\n    }\n}\n```",
      "options": [
        "Shape Shape ",
        "Circle Circle ",
        "Shape Circle ",
        "Circle Shape "
      ],
      "answer": 2,
      "explain": "First element is `Shape` (prints `Shape `). Second element is `Circle` (prints `Circle `). Output: `Shape Circle `.",
      "topic": "Polymorphic Array Iteration Output",
      "type": "output",
      "level": "easy",
      "strength": "Traced polymorphic method dispatch across heterogenous array.",
      "weakness": "Dynamic binding invokes each object's respective implementation: `Shape Circle `."
    },
    {
      "q": "A game development team creates an RPG game. A base class `Monster` has `protected int hp;`. A subclass `Dragon` needs to double its health on rage mode. How can `Dragon` modify `hp` directly without getters/setters?",
      "options": [
        "Because `hp` is `protected`, subclasses can access and modify `hp` directly by name: `this.hp *= 2;`",
        "Subclasses cannot access protected fields",
        "By casting Dragon to Monster",
        "Using reflection only"
      ],
      "answer": 0,
      "explain": "`protected` visibility allows subclasses to directly read and write the inherited field by name.",
      "topic": "Subclass Protected Field Manipulation",
      "type": "scenario",
      "level": "easy",
      "strength": "Accessed protected superclass state directly from subclass methods.",
      "weakness": "Subclasses can directly access and modify inherited `protected` fields."
    },
    {
      "q": "Why does this code fail to compile?\n```java\nclass Super {\n    public Super(int a, int b) {}\n}\nclass Sub extends Super {\n    public Sub(int a) {\n        // no call to super\n    }\n}\n```",
      "options": [
        "Sub cannot have 1 parameter",
        "Implicit `super()` is undefined for `Super`: `Super` has no no-arg constructor, so `Sub` must explicitly call `super(a, ...)`",
        "Super must be final",
        "a is not initialized"
      ],
      "answer": 1,
      "explain": "Because `Super` has only a 2-arg constructor, the compiler's implicit `super()` insertion fails to compile.",
      "topic": "Missing Explicit Super Constructor Call",
      "type": "error",
      "level": "easy",
      "strength": "Recognized requirement to explicitly invoke super(a, b).",
      "weakness": "Subclass constructors must explicitly call `super(...)` when the superclass lacks a no-arg constructor."
    },
    {
      "q": "What is the output of this code?\n```java\nclass Super {\n    protected int n = 1;\n}\nclass Sub extends Super {\n    public Sub() {\n        n += 10;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Sub s = new Sub();\n        System.out.println(s.n);\n    }\n}\n```",
      "options": [
        "1",
        "10",
        "11",
        "0"
      ],
      "answer": 2,
      "explain": "`Super.n` is initialized to 1. `Sub()` increments the inherited field `n += 10`, making it 11. Outputs 11.",
      "topic": "Protected Field Mutation in Subclass Output",
      "type": "output",
      "level": "easy",
      "strength": "Tracked inheritance and mutation of protected field.",
      "weakness": "Inherited field starts at 1 and increments by 10 to 11."
    },
    {
      "q": "Are `private` members of a superclass inherited by its subclasses?",
      "options": [
        "Yes, they are directly accessible using their names",
        "They are physically part of the subclass object state in heap memory, but are NOT directly accessible by name in the subclass; they must be accessed via inherited public/protected methods (getters/setters)",
        "No, private fields are completely stripped from subclass instances",
        "Private fields become public in subclasses"
      ],
      "answer": 1,
      "explain": "Subclass objects contain the private fields of their superclass in memory, but encapsulation prevents direct access by name. They are accessed via superclass accessors.",
      "topic": "Private Member Inheritance & Accessibility",
      "type": "theory",
      "level": "medium",
      "strength": "Distinguishes physical object memory layout from syntactic access visibility.",
      "weakness": "Private superclass fields exist in subclass memory but cannot be accessed directly by name."
    },
    {
      "q": "What error occurs in this code?\n```java\nclass A {\n    public A() { this(10); }\n    public A(int x) { super(); }\n}\nclass B extends A {\n    public B() {\n        super();\n        this(5); \n    }\n    public B(int x) {}\n}\n```",
      "options": [
        "A cannot have constructor chaining",
        "`this(5)` must be the first statement in `B()`, but `super()` is already first; a constructor cannot call both `super()` and `this()`",
        "x is out of scope",
        "B cannot extend A"
      ],
      "answer": 1,
      "explain": "Both `super()` and `this()` must be the first statement. A single constructor cannot contain both.",
      "topic": "Dual super() and this() Error",
      "type": "error",
      "level": "medium",
      "strength": "Caught concurrent presence of super() and this() in single constructor.",
      "weakness": "A constructor cannot contain both `super()` and `this()`."
    },
    {
      "q": "What is the output of this code?\n```java\nclass Base {\n    public void show() { System.out.print(\"Base \"); }\n}\nclass Sub extends Base {\n    public void show() { System.out.print(\"Sub \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Base b = new Sub();\n        ((Base) b).show();\n    }\n}\n```",
      "options": [
        "Base ",
        "Sub ",
        "Base Sub ",
        "Error"
      ],
      "answer": 1,
      "explain": "Casting `b` to `(Base)` changes only the compile-time type, NOT the runtime object. Polymorphic method calls always dispatch to the actual runtime object (`Sub`). Outputs `Sub `.",
      "topic": "Casting Does Not Bypass Overriding Output",
      "type": "output",
      "level": "medium",
      "strength": "Understands that upcasting cannot bypass dynamic method dispatch.",
      "weakness": "Casting does not bypass dynamic binding; the overridden method in Sub still executes: `Sub `."
    },
    {
      "q": "A developer designs a `SmartLight` class extending `Light`. When overriding `turnOn()`, the developer forgets the `@Override` annotation and writes `public void turnon()` (lowercase 'o'). What bug occurs?",
      "options": [
        "The compiler issues a syntax error",
        "Silent bug: Java treats `turnon()` as an entirely new method rather than overriding `turnOn()`. Polymorphic calls to `light.turnOn()` will execute the base class method instead!",
        "The light turns off",
        "The program crashes immediately"
      ],
      "answer": 1,
      "explain": "Without `@Override`, typos silently create new overloaded or unrelated methods. The intended superclass method remains un-overridden, leading to difficult-to-trace bugs.",
      "topic": "Missing @Override Silent Bug Trap",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands how @Override prevents silent typo bugs in method names.",
      "weakness": "Always use `@Override` to catch casing or naming typos at compile time."
    },
    {
      "q": "What is the purpose of the `@Override` annotation in Java?",
      "options": [
        "It forces the method to run faster",
        "It informs the compiler to verify that the annotated method actually overrides a method in a superclass or interface, raising a compile-time error if no matching method is found",
        "It makes the method public automatically",
        "It prevents subclasses from further overriding the method"
      ],
      "answer": 1,
      "explain": "`@Override` acts as a compiler check. If a typo exists in the method name or parameter types, the compiler flags an error rather than silently treating it as an overload.",
      "topic": "@Override Annotation Purpose",
      "type": "theory",
      "level": "easy",
      "strength": "Knows the compiler validation role of @Override.",
      "weakness": "`@Override` instructs the compiler to verify that the method correctly overrides a superclass method."
    },
    {
      "q": "Identify the compilation issue in this constructor:\n```java\nclass Shape {\n    public Shape(String color) {}\n}\nclass Circle extends Shape {\n    public Circle(String color) {\n        System.out.println(\"Creating circle\");\n        super(color);\n    }\n}\n```",
      "options": [
        "Shape has no constructor",
        "Constructor call `super(color)` must be the first statement in the constructor body",
        "Circle cannot take color",
        "System.out.println cannot be called in constructors"
      ],
      "answer": 1,
      "explain": "`super(...)` must be the very first statement in the constructor body. Placing `System.out.println` before `super(color)` fails compilation.",
      "topic": "super() Not First Statement Error",
      "type": "error",
      "level": "easy",
      "strength": "Spotted statement preceding super() in constructor body.",
      "weakness": "Calls to `super()` must be the very first statement in a constructor."
    },
    {
      "q": "What is the output of this code?\n```java\nclass Parent {\n    int x = 5;\n}\nclass Child extends Parent {\n    int x = 10;\n    public void print() {\n        System.out.println(x + \" \" + super.x);\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Child().print();\n    }\n}\n```",
      "options": [
        "10 10",
        "10 5",
        "5 10",
        "5 5"
      ],
      "answer": 1,
      "explain": "`x` refers to `this.x` (10). `super.x` explicitly accesses the hidden field in the parent class (5). Output: `10 5`.",
      "topic": "super.field Access Output",
      "type": "output",
      "level": "easy",
      "strength": "Accurately accessed hidden superclass field using `super.x`.",
      "weakness": "`x` accesses Child field (10); `super.x` accesses Parent field (5)."
    },
    {
      "q": "A scientific visualization library creates an immutable `Vector2D` class with `final double x, y;`. To prevent any subclass from introducing mutable state or overriding vector math methods, what should be done?",
      "options": [
        "Declare the class `public final class Vector2D`",
        "Make all methods private",
        "Make the class abstract",
        "Declare x and y as static"
      ],
      "answer": 0,
      "explain": "Declaring the class `final` prevents subclasses from extending it, guaranteeing that vector instances remain completely immutable and predictable.",
      "topic": "Sealing Immutable Mathematical Classes",
      "type": "scenario",
      "level": "easy",
      "strength": "Sealed immutable mathematical class using the final class modifier.",
      "weakness": "Mark immutable domain classes `final` to prevent subclasses from adding mutable state."
    },
    {
      "q": "What compilation error occurs here?\n```java\nclass Test {\n    @Override\n    public void customMethod() {}\n}\n```",
      "options": [
        "Test must extend Object",
        "Method does not override or implement a method from a supertype: `customMethod()` does not exist in `java.lang.Object`",
        "customMethod must return boolean",
        "Test cannot be public"
      ],
      "answer": 1,
      "explain": "`Test` extends `Object`, but `customMethod()` is not defined in `Object`. The `@Override` annotation flags this error.",
      "topic": "Invalid @Override on Non-Existent Method",
      "type": "error",
      "level": "easy",
      "strength": "Caught @Override annotation on a brand new method.",
      "weakness": "`@Override` produces a compilation error if no matching superclass/interface method exists."
    },
    {
      "q": "What does this code print?\n```java\nclass M {\n    public void test() { System.out.print(\"M \"); }\n}\nclass N extends M {\n    public void test() { System.out.print(\"N \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        M obj = new N();\n        if (obj instanceof N) {\n            ((N) obj).test();\n        }\n    }\n}\n```",
      "options": [
        "M ",
        "N ",
        "M N ",
        "Error"
      ],
      "answer": 1,
      "explain": "`obj instanceof N` is true. `((N) obj).test()` calls `N.test()`, printing `N `.",
      "topic": "Downcast Method Invocation Output",
      "type": "output",
      "level": "easy",
      "strength": "Verified instanceof check and downcast invocation.",
      "weakness": "`obj instanceof N` is true; `N.test()` prints `N `."
    },
    {
      "q": "Does constructor inheritance exist in Java (does a subclass automatically inherit the constructors of its superclass)?",
      "options": [
        "Yes, all constructors are automatically inherited",
        "No, constructors are NEVER inherited in Java; a subclass defines its own constructors, which delegate to superclass constructors via `super()`",
        "Only no-arg constructors are inherited",
        "Only public constructors are inherited"
      ],
      "answer": 1,
      "explain": "Constructors are not members of a class and are never inherited. Subclasses must declare their own constructors, which invoke superclass constructors explicitly or implicitly.",
      "topic": "Constructors Are Not Inherited",
      "type": "theory",
      "level": "medium",
      "strength": "Knows that constructors are not inherited by subclasses.",
      "weakness": "Constructors are never inherited; subclasses define their own constructors."
    },
    {
      "q": "What is the compilation issue in this code?\n```java\nclass X {\n    protected void m() {}\n}\nclass Y extends X {\n    void m() {}\n}\n```",
      "options": [
        "m cannot be void",
        "Cannot reduce visibility: `m()` in `Y` has package-private (default) access, which is more restrictive than `protected` in `X`",
        "Y cannot extend X",
        "X must be public"
      ],
      "answer": 1,
      "explain": "Package-private (default) is more restrictive than `protected`. Overriding `protected` with default access is illegal.",
      "topic": "Protected to Default Access Reduction",
      "type": "error",
      "level": "medium",
      "strength": "Recognized illegal access reduction from protected to package-private.",
      "weakness": "Overriding a `protected` method requires `protected` or `public` access."
    },
    {
      "q": "What does this code print?\n```java\nclass Item {\n    int id = 100;\n}\nclass SpecialItem extends Item {\n    int id = 200;\n}\npublic class Main {\n    public static void main(String[] args) {\n        SpecialItem s = new SpecialItem();\n        Item i = s;\n        System.out.println(s.id + \" \" + i.id);\n    }\n}\n```",
      "options": [
        "200 200",
        "200 100",
        "100 100",
        "100 200"
      ],
      "answer": 1,
      "explain": "Field access is bound to the declared reference type: `s.id` accesses `SpecialItem.id` (200), while `i.id` accesses `Item.id` (100). Output: `200 100`.",
      "topic": "Dual Reference Field Hiding Output",
      "type": "output",
      "level": "medium",
      "strength": "Distinguished field values accessed through subclass vs superclass references.",
      "weakness": "`s.id` accesses 200; `i.id` accesses 100."
    },
    {
      "q": "An enterprise human resources system serializes employee records. When overriding `equals(Object o)` in `Manager`, what should be the first check before comparing manager-specific fields?",
      "options": [
        "`if (!super.equals(o)) return false;` to verify that all base `Employee` fields match first",
        "Set all fields to null",
        "Throw an exception",
        "Compare manager bonus only"
      ],
      "answer": 0,
      "explain": "In subclass `equals()` implementations, calling `super.equals(o)` verifies that all inherited superclass fields are equal before proceeding to compare subclass-specific fields.",
      "topic": "Chained super.equals() Verification Pattern",
      "type": "scenario",
      "level": "medium",
      "strength": "Applied `super.equals()` to verify inherited field equality in subclass overrides.",
      "weakness": "Invoke `if (!super.equals(o)) return false;` in subclass `equals()` implementations."
    },
    {
      "q": "Can a `final` method be overridden by a subclass?",
      "options": [
        "Yes, if the subclass is public",
        "No, declaring a method `final` strictly prohibits subclasses from overriding it",
        "Yes, by using the super keyword",
        "Only in abstract classes"
      ],
      "answer": 1,
      "explain": "The `final` modifier on a method seals its implementation, preventing subclasses from overriding it to maintain consistency or security.",
      "topic": "Final Method Immutability",
      "type": "theory",
      "level": "easy",
      "strength": "Understands that final methods cannot be overridden.",
      "weakness": "A `final` method cannot be overridden by any subclass."
    },
    {
      "q": "Why does this code fail to compile?\n```java\nclass A {}\nclass B {}\nclass C extends A, B {}\n```",
      "options": [
        "C must be public",
        "Syntax error: class cannot extend multiple classes (Java does not support multiple class inheritance)",
        "B must extend A",
        "C must have constructors"
      ],
      "answer": 1,
      "explain": "Java syntax only permits a single class after `extends`. Multiple class inheritance is illegal.",
      "topic": "Multiple Class Inheritance Syntax Error",
      "type": "error",
      "level": "easy",
      "strength": "Recognized illegal multiple class inheritance syntax.",
      "weakness": "Java does not support multiple class inheritance; use interfaces for multiple type contracts."
    },
    {
      "q": "What does this code print?\n```java\nclass A {\n    public void test() { System.out.print(\"A \"); }\n}\nclass B extends A {\n    public void test() { System.out.print(\"B \"); }\n}\nclass C extends B {}\npublic class Main {\n    public static void main(String[] args) {\n        A a = new C();\n        a.test();\n    }\n}\n```",
      "options": [
        "A ",
        "B ",
        "C ",
        "Error"
      ],
      "answer": 1,
      "explain": "`C` does not override `test()`, so it inherits `B.test()`. Runtime object is `C`, which uses its inherited `B.test()` method. Outputs `B `.",
      "topic": "Inherited Override Resolution",
      "type": "output",
      "level": "easy",
      "strength": "Traced inheritance of overridden method in multi-tier hierarchy.",
      "weakness": "`C` inherits `B`'s overridden method, outputting `B `."
    },
    {
      "q": "A transport ticketing app has a `Ticket` class. `Ticket` has `public final String getTicketId()`. Why would the architect mark `getTicketId()` as `final`?",
      "options": [
        "It makes ticket IDs random",
        "To ensure that no subclass can override or tamper with the security-critical ticket identifier generation/retrieval mechanism",
        "Ticket ID is stored on the stack",
        "To allow ticket IDs to be changed"
      ],
      "answer": 1,
      "explain": "Marking identification accessors `final` guarantees that identity retrieval cannot be subverted by derived classes.",
      "topic": "Preserving Identifier Invariants via Final",
      "type": "scenario",
      "level": "easy",
      "strength": "Preserved core identification invariants using final methods.",
      "weakness": "Make identification methods `final` to ensure consistent, tamper-proof ID retrieval."
    },
    {
      "q": "What is the output of this code?\n```java\nclass Parent {\n    public void info() { System.out.print(\"Parent \"); }\n}\nclass Child extends Parent {\n    public void info() { System.out.print(\"Child \"); }\n    public void play() { System.out.print(\"Play \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Parent p = new Child();\n        p.info();\n    }\n}\n```",
      "options": [
        "Parent ",
        "Child ",
        "Parent Play ",
        "Child Play "
      ],
      "answer": 1,
      "explain": "`p.info()` resolves dynamically to `Child.info()`, outputting `Child `.",
      "topic": "Basic Dynamic Dispatch Output",
      "type": "output",
      "level": "easy",
      "strength": "Traced dynamic dispatch to overridden subclass method.",
      "weakness": "`Child.info()` executes dynamically, printing `Child `."
    },
    {
      "q": "A logistics shipping simulator has `Vehicle` and `Ship`. If `Ship` extends `Vehicle`, why can a variable of type `Vehicle` hold a `Ship` object (`Vehicle v = new Ship();`)?",
      "options": [
        "Because Java ignores types",
        "Because inheritance establishes an 'is-a' relationship: every Ship IS A Vehicle, making upcasting implicit and safe",
        "Because Ship is converted to double",
        "Only if Ship implements Runnable"
      ],
      "answer": 1,
      "explain": "Inheritance guarantees that a subclass instance satisfies all contracts of its superclass, making upcasting (`Vehicle v = new Ship();`) implicit, type-safe, and natural.",
      "topic": "Liskov Substitutability in Upcasting",
      "type": "scenario",
      "level": "easy",
      "strength": "Understands that inheritance guarantees safe polymorphic upcasting.",
      "weakness": "Inheritance models 'is-a'; subclasses can always be implicitly assigned to superclass references."
    },
    {
      "q": "What is field hiding (variable shadowing in inheritance) in Java?",
      "options": [
        "Making a field private",
        "When a subclass declares a field with the same name as an inherited superclass field; the subclass field hides the superclass field rather than overriding it",
        "Deleting a field from memory",
        "Encrypting a field"
      ],
      "answer": 1,
      "explain": "Fields in Java cannot be overridden; they are resolved at compile-time based on the declared reference type. A subclass field simply hides the superclass field of the same name.",
      "topic": "Field Hiding Mechanics",
      "type": "theory",
      "level": "medium",
      "strength": "Understands that fields cannot be overridden polymorphically, only hidden.",
      "weakness": "Fields are not polymorphic; a subclass field hides the superclass field."
    },
    {
      "q": "Identify the bug in this code:\n```java\nclass Point {\n    int x, y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public boolean equals(Object o) {\n        Point p = (Point) o; // What if o is null or not a Point?\n        return this.x == p.x && this.y == p.y;\n    }\n}\n```",
      "options": [
        "Compilation error: cannot cast o to Point",
        "Unsafe downcast without checks: if `o` is null or an instance of another class, it throws `ClassCastException` or `NullPointerException`",
        "Point has no fields",
        "equals must return int"
      ],
      "answer": 1,
      "explain": "Robust `equals` implementations must check `if (o == this) return true; if (!(o instanceof Point)) return false;` before casting to avoid `ClassCastException`.",
      "topic": "Unchecked Downcasting in equals Bug",
      "type": "error",
      "level": "medium",
      "strength": "Identified missing instanceof check prior to downcasting in equals.",
      "weakness": "Always check `instanceof` before downcasting in `equals(Object)` implementations."
    },
    {
      "q": "What is the output of this code?\n```java\nclass A {\n    int val = 5;\n}\nclass B extends A {\n    int val = 15;\n    public void display() {\n        int val = 25;\n        System.out.println(val + \" \" + this.val + \" \" + super.val);\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new B().display();\n    }\n}\n```",
      "options": [
        "25 15 5",
        "25 25 25",
        "15 15 5",
        "5 15 25"
      ],
      "answer": 0,
      "explain": "`val` is local variable (25). `this.val` is field in `B` (15). `super.val` is field in `A` (5). Output: `25 15 5`.",
      "topic": "Scope Resolution: Local, this, and super Output",
      "type": "output",
      "level": "medium",
      "strength": "Accurately resolved local variable, this.field, and super.field scopes.",
      "weakness": "Local = 25, `this.val` = 15, `super.val` = 5: outputs `25 15 5`."
    },
    {
      "q": "A team develops a drawing application. Shapes are stored in a list: `List<Shape> shapes`. When iterating `for (Shape s : shapes) s.draw();`, why does each shape draw its own correct form (Circle, Square, Triangle) without any `if-else` type checks?",
      "options": [
        "Java has a built-in AI engine",
        "Dynamic method dispatch (runtime polymorphism): the JVM executes the specific overridden `draw()` method belonging to the actual runtime instance on the heap",
        "Shapes are sorted by area",
        "All shapes have the same code"
      ],
      "answer": 1,
      "explain": "Dynamic method binding automatically dispatches method calls to the actual object's overridden method at runtime, eliminating cumbersome and fragile `if-else` type checking ladders.",
      "topic": "Dynamic Polymorphism Eliminates Type Ladders",
      "type": "scenario",
      "level": "medium",
      "strength": "Recognized that dynamic method dispatch eliminates fragile if-else type checking.",
      "weakness": "Dynamic polymorphism dispatches to the runtime object's override, eliminating conditional branching."
    },
    {
      "q": "What happens when a class is declared `final` (e.g. `public final class MathService`)?",
      "options": [
        "It cannot have any methods",
        "The class cannot be extended (subclassed) by any other class",
        "All its instances are stored in read-only memory",
        "It can only have static members"
      ],
      "answer": 1,
      "explain": "Declaring a class `final` prevents inheritance entirely. For example, `java.lang.String` is `final` to ensure its security and immutability contracts cannot be subverted by subclasses.",
      "topic": "Final Class Sealing",
      "type": "theory",
      "level": "easy",
      "strength": "Recognized that final classes cannot be extended.",
      "weakness": "A `final` class cannot be subclassed or inherited."
    },
    {
      "q": "Why does this code fail to compile?\n```java\nclass Super {\n    private int secret = 42;\n}\nclass Sub extends Super {\n    public void printSecret() {\n        System.out.println(super.secret);\n    }\n}\n```",
      "options": [
        "secret is not initialized",
        "`secret` has private access in `Super` and cannot be accessed directly in `Sub` even with `super.`",
        "printSecret must return int",
        "super cannot access fields"
      ],
      "answer": 1,
      "explain": "`private` members are completely inaccessible outside the declaring class, even by subclasses using `super.`.",
      "topic": "Accessing Private Field via super Error",
      "type": "error",
      "level": "easy",
      "strength": "Caught attempt to access private superclass field using `super.`.",
      "weakness": "Private members cannot be accessed directly by subclasses, even using `super.`."
    },
    {
      "q": "What is the output of this code?\n```java\nclass Parent {\n    public void greet() { System.out.print(\"Hello \"); }\n}\nclass Child extends Parent {\n    public void greet(String name) { System.out.print(\"Hello \" + name); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Child c = new Child();\n        c.greet();\n        c.greet(\"Bob\");\n    }\n}\n```",
      "options": [
        "Hello Hello Bob",
        "Hello Bob",
        "Compilation error",
        "Hello Hello "
      ],
      "answer": 0,
      "explain": "`Child` inherits `greet()` from `Parent` and introduces an overloaded `greet(String)`. Both methods are callable on `c`. Output: `Hello Hello Bob`.",
      "topic": "Inherited Method Overloading Output",
      "type": "output",
      "level": "easy",
      "strength": "Understands method overloading across inheritance boundaries.",
      "weakness": "Child inherits `greet()` and overloads it with `greet(String)`; both execute cleanly."
    },
    {
      "q": "A flight booking system has a `Flight` class. When `System.out.println(flight)` is executed, it outputs `Flight@3a71f4`. The manager asks for it to display `\"MH370 (KUL -> PEK)\"`. What change is needed?",
      "options": [
        "Rename the class to MH370",
        "Override the `public String toString()` method in `Flight` to return formatted route details",
        "Make the Flight class static",
        "Change flight to a String"
      ],
      "answer": 1,
      "explain": "Overriding `public String toString()` customizes the text returned when the object is converted to string for printing.",
      "topic": "Customizing Domain toString() Output",
      "type": "scenario",
      "level": "easy",
      "strength": "Overrode toString() to produce meaningful domain descriptions.",
      "weakness": "Override `toString()` to display meaningful domain details instead of default class hash codes."
    },
    {
      "q": "What does this code print?\n```java\nclass Base {\n    public Base() {}\n}\npublic class Main {\n    public static void main(String[] args) {\n        Base b = new Base();\n        System.out.println(b instanceof Object);\n    }\n}\n```",
      "options": [
        "true",
        "false",
        "NullPointerException",
        "Compilation error"
      ],
      "answer": 0,
      "explain": "Every class in Java implicitly inherits from `java.lang.Object`. Therefore, `b instanceof Object` is always `true` for non-null instances.",
      "topic": "instanceof Object Check Output",
      "type": "output",
      "level": "easy",
      "strength": "Recognized that every non-null object instance is an instanceof Object.",
      "weakness": "All non-null object instances evaluate to true for `instanceof Object`."
    },
    {
      "q": "A financial ledger tracks account transactions. The `Transaction` class has `id`, `amount`, and `timestamp`. Why should `equals(Object o)` compare only `id` if IDs are guaranteed unique across the enterprise?",
      "options": [
        "Comparing only the unique business identifier (ID) is fast, deterministic, and aligns with domain entity identity semantics",
        "amount cannot be compared",
        "timestamp is random",
        "Java prohibits comparing multiple fields in equals"
      ],
      "answer": 0,
      "explain": "In domain-driven design, entities with unique identifiers (like database primary keys or UUIDs) define equality based on that unique key, avoiding redundant comparisons of mutable attributes.",
      "topic": "Entity Identity Equality Pattern",
      "type": "scenario",
      "level": "easy",
      "strength": "Applied unique identifier equality pattern for enterprise domain entities.",
      "weakness": "Entities with guaranteed unique IDs can define equality based solely on that identifier."
    },
    {
      "q": "Can a constructor in a subclass invoke BOTH `this()` and `super()` directly in its body?",
      "options": [
        "Yes, calling both is recommended",
        "No, both `this()` and `super()` are required to be the very first statement, making it syntactically impossible to have both in the same constructor",
        "Yes, if separated by a comma",
        "Only if one is parameterless"
      ],
      "answer": 1,
      "explain": "Because each requires being the first statement in the constructor, a single constructor cannot contain both `this()` and `super()`. However, the chained `this()` constructor will eventually call `super()`.",
      "topic": "Mutual Exclusion of this() and super()",
      "type": "theory",
      "level": "medium",
      "strength": "Understands mutual exclusivity of `this()` and `super()` in a single constructor.",
      "weakness": "A constructor cannot call both `this()` and `super()` because each must be the first line."
    },
    {
      "q": "Why does this code fail to compile?\n```java\nclass A {\n    public static void run() {}\n}\nclass B extends A {\n    @Override\n    public static void run() {}\n}\n```",
      "options": [
        "A cannot have static methods",
        "Static methods cannot be annotated with `@Override` because static methods are hidden, not overridden",
        "run must return void",
        "B must be final"
      ],
      "answer": 1,
      "explain": "Because static methods do not participate in dynamic polymorphism, annotating a static method with `@Override` produces a compilation error.",
      "topic": "@Override on Static Method Error",
      "type": "error",
      "level": "medium",
      "strength": "Spotted illegal @Override annotation on static method.",
      "weakness": "Static methods cannot be annotated with `@Override` because they cannot be overridden."
    },
    {
      "q": "What is the output of the following code?\n```java\nclass Parent {\n    public Parent() { System.out.print(\"P \"); }\n}\nclass Child extends Parent {\n    public Child() { System.out.print(\"C \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Child();\n    }\n}\n```",
      "options": [
        "C P ",
        "P C ",
        "C ",
        "P "
      ],
      "answer": 1,
      "explain": "When `new Child()` is instantiated, `Child()` automatically calls `super()`. The `Parent` constructor runs first, printing `\"P \"`. Then `Child` body runs, printing `\"C \"`. Output: `P C `.",
      "topic": "Constructor Execution Order Output",
      "type": "output",
      "level": "easy",
      "strength": "Traced superclass-first constructor execution sequence.",
      "weakness": "Parent constructors execute before child constructors: outputs `P C `."
    },
    {
      "q": "You are designing a payroll system for a company. All employees share common attributes (`id`, `name`, `baseSalary`) and a `calculatePay()` method. `Manager` employees receive a bonus, while `Engineer` employees receive overtime pay. What is the standard object-oriented design?",
      "options": [
        "Write 3 completely unrelated classes with duplicate fields",
        "Create an `Employee` superclass with common fields, and have `Manager` and `Engineer` extend `Employee`, overriding `calculatePay()` to add their respective bonus/overtime calculations",
        "Put all calculations into a single switch statement in main",
        "Use interfaces only with no shared code"
      ],
      "answer": 1,
      "explain": "Inheritance allows `Manager` and `Engineer` to inherit common employee attributes and provide specialized polymorphic `calculatePay()` implementations.",
      "topic": "Inheritance Payroll Model",
      "type": "scenario",
      "level": "easy",
      "strength": "Applied inheritance hierarchy to eliminate code duplication in domain modeling.",
      "weakness": "Model shared attributes in a superclass and override specialized behavior in subclasses."
    },
    {
      "q": "What accessibility does the `protected` modifier grant to a member?",
      "options": [
        "Accessible only within the declaring class",
        "Accessible within the same package, and by subclasses in any package",
        "Accessible everywhere globally",
        "Accessible only by interfaces"
      ],
      "answer": 1,
      "explain": "`protected` grants access to all classes in the same package (like default access) PLUS subclasses located in different packages.",
      "topic": "Protected Access Scope",
      "type": "theory",
      "level": "easy",
      "strength": "Understands protected access across packages and inheritance.",
      "weakness": "`protected` members are accessible within the same package and by subclasses everywhere."
    },
    {
      "q": "Why does this code cause a compiler error?\n```java\nclass Animal {\n    public int getAge() { return 5; }\n}\nclass Dog extends Animal {\n    @Override\n    public String getAge() { return \"5\"; }\n}\n```",
      "options": [
        "Animal has no age",
        "`getAge()` in `Dog` cannot override `getAge()` in `Animal`: return type `String` is incompatible with `int`",
        "Dog must be public",
        "@Override is invalid"
      ],
      "answer": 1,
      "explain": "Return types must be identical (or covariant objects). `String` is completely incompatible with primitive `int`, causing a compilation error.",
      "topic": "Incompatible Return Type in Overriding",
      "type": "error",
      "level": "easy",
      "strength": "Spotted incompatible return type in overriding method.",
      "weakness": "Overriding methods must have compatible return types (identical primitives or covariant object subtypes)."
    },
    {
      "q": "What does this code print?\n```java\nclass Vehicle {\n    public String type() { return \"Vehicle\"; }\n}\nclass Car extends Vehicle {\n    public String type() { return \"Car\"; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Vehicle v = new Car();\n        System.out.println(v.type().equals(\"Car\"));\n    }\n}\n```",
      "options": [
        "true",
        "false",
        "NullPointerException",
        "Compilation error"
      ],
      "answer": 0,
      "explain": "`v.type()` dynamically binds to `Car.type()`, returning `\"Car\"`. `\"Car\".equals(\"Car\")` evaluates to `true`.",
      "topic": "Polymorphic Method String Equality Output",
      "type": "output",
      "level": "easy",
      "strength": "Evaluated string equality on polymorphically dispatched return value.",
      "weakness": "`Car.type()` returns \"Car\", which equals \"Car\" -> true."
    },
    {
      "q": "A banking app has a class hierarchy: `Account` -> `CheckingAccount`. `Account` has a constructor `public Account(String accNo, double balance)`. In `CheckingAccount`, a new constructor `public CheckingAccount(String accNo)` is created with a default balance of 0.0. How should it be coded?",
      "options": [
        "`public CheckingAccount(String accNo) { super(accNo, 0.0); }`",
        "`public CheckingAccount(String accNo) { this.accNo = accNo; }`",
        "`public CheckingAccount(String accNo) { new Account(accNo, 0.0); }`",
        "`public CheckingAccount(String accNo) { super(); }`"
      ],
      "answer": 0,
      "explain": "`super(accNo, 0.0)` invokes the superclass constructor with the required parameters, establishing valid initial account state.",
      "topic": "Super Constructor Default Parameter Pattern",
      "type": "scenario",
      "level": "easy",
      "strength": "Supplied default parameters cleanly via super constructor delegation.",
      "weakness": "Delegate to the parent constructor with default parameters: `super(id, defaultVal);`."
    },
    {
      "q": "What is the output of this code?\n```java\nclass Alpha {\n    static String tag = \"Alpha\";\n}\nclass Beta extends Alpha {\n    static String tag = \"Beta\";\n}\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(Beta.tag + \" \" + Alpha.tag);\n    }\n}\n```",
      "options": [
        "Beta Alpha",
        "Alpha Alpha",
        "Beta Beta",
        "Error"
      ],
      "answer": 0,
      "explain": "Static fields are accessed via their specific declaring class names: `Beta.tag` is \"Beta\", and `Alpha.tag` is \"Alpha\". Outputs `Beta Alpha`.",
      "topic": "Static Field Class Qualification Output",
      "type": "output",
      "level": "easy",
      "strength": "Understands explicit class-level qualification of hidden static fields.",
      "weakness": "`Beta.tag` accesses Beta's static field; `Alpha.tag` accesses Alpha's static field."
    },
    {
      "q": "A student creates a `Car` class extending `Vehicle`. In `main`: `Car c = new Car(); Vehicle v = c;`. How many total objects were allocated on the heap?",
      "options": [
        "Two separate objects: one Vehicle and one Car",
        "Exactly ONE object: a single `Car` object that contains inherited `Vehicle` state in memory, with two reference variables pointing to it",
        "Zero objects",
        "Three objects"
      ],
      "answer": 1,
      "explain": "`new Car()` allocates exactly ONE unified object on the heap. `v` and `c` are simply two references with different compile-time types pointing to the same single object.",
      "topic": "Single Unified Heap Object in Inheritance",
      "type": "scenario",
      "level": "easy",
      "strength": "Understands that subclass instantiation creates a single unified object on the heap.",
      "weakness": "Instantiating a subclass allocates a single object on the heap containing all inherited state."
    }
  ],
  "8": [
    {
      "q": "How does Java resolve conflicts when a class implements two interfaces that declare the exact same `default` method signature?",
      "options": [
        "The compiler picks the first one listed in implements",
        "The compiler issues a conflict error; the implementing class MUST override the method explicitly to resolve the ambiguity (e.g. using `InterfaceA.super.method()`)",
        "Both methods execute sequentially",
        "Throws a NoSuchMethodError at runtime"
      ],
      "answer": 1,
      "explain": "When two default methods collide, Java requires the implementing class to explicitly override the conflicting method and resolve which default to invoke.",
      "topic": "Default Method Diamond Conflict Resolution",
      "type": "theory",
      "level": "hard",
      "strength": "Mastered default method conflict resolution in multiple interfaces.",
      "weakness": "Conflicting default methods must be explicitly overridden by the implementing class."
    },
    {
      "q": "Why does this code fail to compile?\n```java\nclass StringTest {\n    public static void main(String[] args) {\n        Integer n = 10;\n        if (n instanceof String) {}\n    }\n}\n```",
      "options": [
        "n is not an object",
        "Inconvertible types: cannot cast `java.lang.Integer` to `java.lang.String` (compiler rejects instanceof when the types are completely unrelated classes)",
        "instanceof only works on Object",
        "String cannot be used with instanceof"
      ],
      "answer": 1,
      "explain": "When the compiler can prove that two class types share no inheritance relationship, the `instanceof` expression is rejected at compile time: 'inconvertible types'.",
      "topic": "Inconvertible Types in instanceof Error",
      "type": "error",
      "level": "hard",
      "strength": "Understands that instanceof fails compilation between unrelated concrete classes.",
      "weakness": "The compiler rejects `instanceof` between two unrelated classes that cannot possibly match."
    },
    {
      "q": "What is the output of this code?\n```java\ninterface I {\n    static void print() { System.out.print(\"Interface \"); }\n}\nclass C implements I {\n    public void print() { System.out.print(\"Class \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        I.print();\n        new C().print();\n    }\n}\n```",
      "options": [
        "Interface Class ",
        "Class Interface ",
        "Interface Interface ",
        "Error"
      ],
      "answer": 0,
      "explain": "`I.print()` calls the static method on the interface (`\"Interface \"`). `new C().print()` calls the instance method on `C` (`\"Class \"`). Output: `Interface Class `.",
      "topic": "Interface Static vs Instance Method Output",
      "type": "output",
      "level": "medium",
      "strength": "Distinguished interface static method call from class instance method.",
      "weakness": "Interface static methods are distinct from class instance methods: `Interface Class `."
    },
    {
      "q": "An image editor applies filters (Grayscale, Blur, Sharpen). A user can chain multiple filters together. How can filters be structured polymorphically so a composite filter can apply an arbitrary list of filters?",
      "options": [
        "Composite pattern: an `ImageFilter` interface implemented by `BlurFilter`, `GrayscaleFilter`, and a `CompositeFilter` that holds a list of `ImageFilter` objects and executes each sequentially",
        "A 20-parameter method",
        "Static methods in main",
        "Multiple inheritance of classes"
      ],
      "answer": 0,
      "explain": "The Composite design pattern uses polymorphism so individual and composite objects are treated uniformly through the same interface.",
      "topic": "Composite Pattern via Polymorphism",
      "type": "scenario",
      "level": "hard",
      "strength": "Applied Composite design pattern using polymorphic interfaces.",
      "weakness": "Use the Composite pattern to treat individual and combined filters uniformly through an interface."
    },
    {
      "q": "What is marker (tagging) interface in Java (e.g. `java.io.Serializable`, `java.lang.Cloneable`)?",
      "options": [
        "An interface with only static methods",
        "An interface with NO fields and NO methods, used purely to tag or mark a class as possessing a specific capability or runtime property for the JVM or frameworks",
        "An interface marked with @Deprecated",
        "An interface that logs messages"
      ],
      "answer": 1,
      "explain": "Marker interfaces contain zero members. They act as type tags inspected via `instanceof` (e.g. `obj instanceof Serializable`).",
      "topic": "Marker Interface Concept",
      "type": "theory",
      "level": "medium",
      "strength": "Identifies marker interfaces like Serializable and Cloneable.",
      "weakness": "Marker interfaces have no members and serve as type tags for the JVM or frameworks."
    },
    {
      "q": "What is wrong with this interface method definition in Java 7?\n```java\ninterface Runner {\n    public void run() {\n        System.out.println(\"Running\");\n    }\n}\n```",
      "options": [
        "Runner must be a class",
        "Interface abstract methods cannot have a body; in Java 8+, it must be marked with the `default` keyword to have a body",
        "println is illegal in interfaces",
        "run cannot be public"
      ],
      "answer": 1,
      "explain": "Standard interface methods cannot have bodies. To provide a body, the method must be marked `default` or `static` (Java 8+).",
      "topic": "Missing Default Modifier on Interface Body",
      "type": "error",
      "level": "easy",
      "strength": "Spotted method body in interface missing default modifier.",
      "weakness": "Interface methods with bodies must be declared `default` or `static`."
    },
    {
      "q": "What is the output of this code?\n```java\ninterface MathConst {\n    int VAL = 42;\n}\npublic class Main implements MathConst {\n    public static void main(String[] args) {\n        System.out.println(VAL + \" \" + MathConst.VAL);\n    }\n}\n```",
      "options": [
        "42 42",
        "0 42",
        "42 0",
        "Error"
      ],
      "answer": 0,
      "explain": "`VAL` is accessible directly as an inherited interface constant and via `MathConst.VAL`. Both yield 42.",
      "topic": "Interface Constant Access Output",
      "type": "output",
      "level": "easy",
      "strength": "Accessed interface constant directly and via interface name.",
      "weakness": "Interface constants are accessible directly and via interface qualification: `42 42`."
    },
    {
      "q": "A game developer builds a collision detection system. All collidable game objects implement `Collidable` with `BoundingBox getBounds()`. How does this interface simplify spatial partitioning trees (like Quadtrees)?",
      "options": [
        "It forces all objects to be 2D circles",
        "The Quadtree can store and query any game entity (bullets, players, asteroids) uniformly through the `Collidable` interface without knowing their concrete game logic",
        "It speeds up sound rendering",
        "It prevents garbage collection"
      ],
      "answer": 0,
      "explain": "The Quadtree interacts solely with the `Collidable` abstraction, decoupling spatial partitioning algorithms from specific game entity mechanics.",
      "topic": "Spatial Partitioning Interface Decoupling",
      "type": "scenario",
      "level": "medium",
      "strength": "Decoupled engine algorithms from domain entities using interface abstractions.",
      "weakness": "Interfaces decouple low-level engine algorithms from game entity domain logic."
    },
    {
      "q": "Can a Java class implement multiple interfaces?",
      "options": [
        "No, Java only allows implementing a single interface",
        "Yes, a class can implement any number of interfaces separated by commas: `class C implements A, B, D`",
        "Only if one is Serializable",
        "Only up to 3 interfaces"
      ],
      "answer": 1,
      "explain": "While Java restricts classes to single inheritance of implementation, it fully supports multiple inheritance of type via interfaces.",
      "topic": "Multiple Interface Implementation",
      "type": "theory",
      "level": "easy",
      "strength": "Understands multiple interface implementation.",
      "weakness": "A class can implement multiple interfaces separated by commas."
    },
    {
      "q": "A weather simulation models `TemperatureSensor` implementing `Comparable<TemperatureSensor>`. When two sensors have equal temperatures, what must `compareTo()` return according to the Comparable specification?",
      "options": [
        "`0`",
        "`1`",
        "`-1`",
        "Throws an exception"
      ],
      "answer": 0,
      "explain": "The `Comparable` contract mandates returning a negative integer if `this < other`, zero if `this.equals(other)`, and a positive integer if `this > other`.",
      "topic": "Comparable compareTo Tri-State Return Contract",
      "type": "scenario",
      "level": "easy",
      "strength": "Knows the tri-state return value contract of compareTo.",
      "weakness": "`compareTo()` returns negative for less than, 0 for equal, and positive for greater than."
    },
    {
      "q": "What is the difference between compile-time (declared) type and runtime (actual) type?",
      "options": [
        "Declared type is on the heap; runtime type is in source code",
        "Declared type is the type used to declare the reference variable (governing which methods are callable at compile time); runtime type is the concrete class instantiated on the heap (governing which implementation executes)",
        "They must always be identical",
        "Declared type is for interfaces only"
      ],
      "answer": 1,
      "explain": "In `Animal a = new Dog();`, `Animal` is the declared (compile-time) type determining method visibility; `Dog` is the actual runtime object determining execution behavior.",
      "topic": "Declared vs Actual Type",
      "type": "theory",
      "level": "medium",
      "strength": "Understands declared compile-time type vs actual runtime object type.",
      "weakness": "Compile-time type determines visible methods; runtime type determines which implementation executes."
    },
    {
      "q": "What is the issue with this code?\n```java\ninterface A {\n    default void hello() { System.out.println(\"A\"); }\n}\ninterface B {\n    default void hello() { System.out.println(\"B\"); }\n}\nclass C implements A, B {}\n```",
      "options": [
        "Interfaces cannot have default methods",
        "Class `C` inherits unrelated defaults for `hello()` from types `A` and `B`, causing a compilation conflict (must override `hello()` in `C` to resolve ambiguity)",
        "C must be abstract",
        "hello cannot be void"
      ],
      "answer": 1,
      "explain": "When two implemented interfaces provide conflicting default implementations for the same signature, class `C` must explicitly override the method to resolve the conflict.",
      "topic": "Unresolved Default Method Conflict",
      "type": "error",
      "level": "medium",
      "strength": "Caught ambiguous default method collision across multiple interfaces.",
      "weakness": "Classes implementing interfaces with conflicting default methods must override the method explicitly."
    },
    {
      "q": "What does this code print?\n```java\ninterface A {\n    default void m() { System.out.print(\"A \"); }\n}\ninterface B extends A {\n    default void m() { System.out.print(\"B \"); }\n}\nclass C implements B {}\npublic class Main {\n    public static void main(String[] args) {\n        new C().m();\n    }\n}\n```",
      "options": [
        "A ",
        "B ",
        "A B ",
        "Error"
      ],
      "answer": 1,
      "explain": "Interface `B` overrides `m()`. In the inheritance hierarchy, the sub-interface's more specific default implementation takes precedence. Outputs `B `.",
      "topic": "Sub-Interface Default Override Output",
      "type": "output",
      "level": "medium",
      "strength": "Understands that more specific sub-interface defaults override ancestor defaults.",
      "weakness": "More specific sub-interface default methods take precedence: outputs `B `."
    },
    {
      "q": "In an autonomous vehicle simulation, objects in the world can be Obstacles (rocks, trees) or MovingVehicles (cars, bikes). Only vehicles can accelerate: `public interface Accelerable { void accelerate(); }`. How should objects be processed in the physics loop?",
      "options": [
        "Downcast every object to Car without checking",
        "Loop through all world entities; for each entity, check `if (entity instanceof Accelerable a)` and call `a.accelerate();`",
        "Create separate worlds for each object type",
        "Use reflection on every frame"
      ],
      "answer": 1,
      "explain": "Using pattern matching for `instanceof Accelerable a` cleanly filters and accelerates only entities that implement the capability contract.",
      "topic": "Capability Interface Filtering Pattern",
      "type": "scenario",
      "level": "medium",
      "strength": "Applied capability interfaces with pattern matching instanceof for selective processing.",
      "weakness": "Use capability interfaces and `instanceof` to process only entities with specific capabilities."
    },
    {
      "q": "What is polymorphism in Java?",
      "options": [
        "The ability of a single variable to store multiple primitive values",
        "The ability of an object reference of a supertype to refer to objects of different subtypes and execute their specialized behavior at runtime",
        "Converting source code to bytecode",
        "Running code on multiple threads simultaneously"
      ],
      "answer": 1,
      "explain": "Polymorphism ('many forms') allows reference variables of a superclass or interface type to reference instances of any subclass, executing overridden methods dynamically.",
      "topic": "Polymorphism Core Definition",
      "type": "theory",
      "level": "easy",
      "strength": "Understands the core definition of polymorphism in Java.",
      "weakness": "Polymorphism enables supertype references to invoke subtype behaviors dynamically."
    },
    {
      "q": "Why does the following downcast throw a runtime exception?\n```java\nObject text = \"Hello\";\nInteger num = (Integer) text;\n```",
      "options": [
        "Throws NullPointerException",
        "Throws `ClassCastException`: `java.lang.String` cannot be cast to `java.lang.Integer`",
        "Throws IllegalArgumentException",
        "Compilation error: Object cannot be cast"
      ],
      "answer": 1,
      "explain": "The runtime object is a `String`. Casting a `String` instance to `Integer` throws `ClassCastException`.",
      "topic": "ClassCastException on Incompatible Downcast",
      "type": "error",
      "level": "easy",
      "strength": "Identified runtime ClassCastException on illegal object cast.",
      "weakness": "Casting an object to an incompatible type throws `ClassCastException`."
    },
    {
      "q": "What does this snippet print?\n```java\nabstract class Base {\n    public Base() { System.out.print(\"B \"); }\n}\nclass Sub extends Base {\n    public Sub() { System.out.print(\"S \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Sub();\n    }\n}\n```",
      "options": [
        "S B ",
        "B S ",
        "S ",
        "B "
      ],
      "answer": 1,
      "explain": "The abstract superclass constructor `Base()` runs first, printing `\"B \"`. Then `Sub()` runs, printing `\"S \"`. Output: `B S `.",
      "topic": "Abstract Superclass Constructor Execution Order",
      "type": "output",
      "level": "easy",
      "strength": "Traced abstract superclass constructor execution.",
      "weakness": "Abstract superclass constructors execute before subclass constructors: `B S `."
    },
    {
      "q": "You are building a payment gateway for an e-commerce platform supporting PayPal, Stripe, and Touch 'n Go eWallet. How should the payment system be designed to allow adding new payment providers in the future without modifying existing checkout code (Open/Closed Principle)?",
      "options": [
        "Write a massive 500-line switch statement in CheckoutController checking provider names",
        "Define a `PaymentProcessor` interface with `processPayment(double amount)` and have each provider (`StripeProcessor`, `PayPalProcessor`) implement it, allowing `CheckoutController` to depend on the interface",
        "Make all payment providers static classes",
        "Duplicate checkout logic for each provider"
      ],
      "answer": 1,
      "explain": "Depending on the `PaymentProcessor` interface allows new payment providers to be plugged in seamlessly without altering existing checkout orchestrations, upholding the Open/Closed Principle.",
      "topic": "Payment Gateway Interface Design",
      "type": "scenario",
      "level": "easy",
      "strength": "Applied interface abstraction to satisfy the Open/Closed Principle.",
      "weakness": "Define a common interface so new implementations can be introduced without modifying calling code."
    },
    {
      "q": "What were the implicit modifiers for all methods declared in an interface prior to Java 8?",
      "options": [
        "`protected abstract`",
        "`public abstract`",
        "`private static`",
        "package-private"
      ],
      "answer": 1,
      "explain": "Traditionally, all interface methods were implicitly `public abstract`.",
      "topic": "Interface Method Implicit Modifiers",
      "type": "theory",
      "level": "easy",
      "strength": "Knows traditional interface methods are implicitly public abstract.",
      "weakness": "Interface methods are implicitly `public abstract` by default."
    },
    {
      "q": "A social media feed mixes different post types: TextPost, ImagePost, and VideoPost. All extend an abstract class `Post`. When rendering a feed, how does polymorphism simplify the view adapter?",
      "options": [
        "The view adapter iterates `List<Post>` and calls `post.render()`, allowing each post subclass to render its own specific media layout without conditional casting",
        "The adapter splits posts into 3 separate lists",
        "The adapter converts all images to text",
        "All posts must be text"
      ],
      "answer": 0,
      "explain": "A unified `List<Post>` holding diverse polymorphic subtypes eliminates type-checking logic, dispatching directly to each subtype's specialized `render()` implementation.",
      "topic": "Heterogeneous Feed Rendering",
      "type": "scenario",
      "level": "easy",
      "strength": "Handled heterogeneous collection rendering via polymorphic dispatch.",
      "weakness": "Store heterogeneous domain models in a common supertype collection to simplify rendering."
    },
    {
      "q": "Can an abstract class contain concrete (fully implemented) methods as well as instance variables and constructors?",
      "options": [
        "No, abstract classes can only contain abstract methods",
        "Yes, abstract classes can have constructors, instance fields, static members, and fully implemented concrete methods alongside abstract methods",
        "Only static fields are allowed",
        "Only in Java 8 and above"
      ],
      "answer": 1,
      "explain": "Unlike pure interfaces (pre-Java 8), abstract classes can maintain state (instance fields), declare constructors for subclasses, and provide concrete method implementations.",
      "topic": "Abstract Class Rich Capabilities",
      "type": "theory",
      "level": "medium",
      "strength": "Understands that abstract classes can have constructors, fields, and concrete methods.",
      "weakness": "Abstract classes can have fields, constructors, and concrete methods."
    },
    {
      "q": "Why does this code cause a compiler error?\n```java\ninterface MathOp {\n    static int add(int a, int b) { return a + b; }\n}\nclass Calc implements MathOp {}\n// in main:\nCalc.add(2, 3);\n```",
      "options": [
        "add must be default",
        "Interface static methods are NOT inherited by implementing classes; they must be invoked using the interface name: `MathOp.add(2, 3)`",
        "add cannot return int",
        "Calc must be abstract"
      ],
      "answer": 1,
      "explain": "Static methods in an interface do not belong to implementing classes and are not inherited. They must be called on the interface: `MathOp.add(2, 3)`.",
      "topic": "Invoking Interface Static Method on Implementing Class Error",
      "type": "error",
      "level": "medium",
      "strength": "Understands that interface static methods are not inherited by implementing classes.",
      "weakness": "Interface static methods must be qualified by the interface name: `InterfaceName.method()`."
    },
    {
      "q": "What is the output of this code?\n```java\nabstract class Calculator {\n    public int compute(int a, int b) {\n        return op(a, b);\n    }\n    public abstract int op(int a, int b);\n}\nclass Adder extends Calculator {\n    public int op(int a, int b) { return a + b; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Calculator c = new Adder();\n        System.out.println(c.compute(5, 7));\n    }\n}\n```",
      "options": [
        "12",
        "0",
        "57",
        "NullPointerException"
      ],
      "answer": 0,
      "explain": "`c.compute(5, 7)` calls `op(5, 7)`. Since the runtime object is `Adder`, `Adder.op` executes: `5 + 7 = 12`.",
      "topic": "Template Method Pattern Invocation Output",
      "type": "output",
      "level": "medium",
      "strength": "Traced template method invocation delegating to abstract method.",
      "weakness": "Concrete method delegates to overridden abstract operation: `5 + 7 = 12`."
    },
    {
      "q": "A software library maintainer releases Version 2.0 of a widely used interface `DataSource`. The maintainer wants to add a new method `boolean isHealthy()` without breaking millions of existing client classes that implemented Version 1.0. How is this achieved?",
      "options": [
        "Add an abstract method `boolean isHealthy();`",
        "Add a `default` method `default boolean isHealthy() { return true; }` in the interface: existing classes inherit the default implementation without compile errors",
        "Create a brand new class",
        "Delete the interface"
      ],
      "answer": 1,
      "explain": "Java 8 default methods were created precisely to enable interface evolution and backward compatibility without breaking existing implementers.",
      "topic": "Interface Evolution via Default Methods",
      "type": "scenario",
      "level": "medium",
      "strength": "Applied interface default methods for backward-compatible API evolution.",
      "weakness": "Use `default` methods to add new capabilities to interfaces without breaking existing implementers."
    },
    {
      "q": "What is dynamic method binding (late binding) in Java?",
      "options": [
        "Resolving method calls at compile time based on declared reference types",
        "Determining which implementation of an overridden method to execute at runtime based on the actual object's type on the heap",
        "Binding methods using native C code",
        "Executing static methods"
      ],
      "answer": 1,
      "explain": "Dynamic binding defers method resolution to runtime: the JVM inspects the actual object on the heap to invoke its specific overridden method implementation.",
      "topic": "Dynamic Method Binding",
      "type": "theory",
      "level": "easy",
      "strength": "Distinguishes dynamic late binding from static compile-time binding.",
      "weakness": "Dynamic binding resolves overridden method invocations based on the actual object on the heap."
    },
    {
      "q": "Identify the compilation error in this abstract class:\n```java\nfinal abstract class Service {\n    public abstract void execute();\n}\n```",
      "options": [
        "execute cannot be public",
        "Illegal combination of modifiers: `abstract` and `final` cannot be combined on a class",
        "Service must have constructors",
        "execute must have body"
      ],
      "answer": 1,
      "explain": "`final` prevents subclassing, while `abstract` requires subclassing. They are mutually contradictory.",
      "topic": "Contradictory abstract and final Modifiers",
      "type": "error",
      "level": "easy",
      "strength": "Caught illegal combination of abstract and final on class.",
      "weakness": "A class cannot be both `abstract` and `final`."
    },
    {
      "q": "What does this code print?\n```java\nclass Animal {}\nclass Dog extends Animal {}\npublic class Main {\n    public static void main(String[] args) {\n        Animal a = new Dog();\n        System.out.println((a instanceof Dog) + \" \" + (a instanceof Animal) + \" \" + (a instanceof Object));\n    }\n}\n```",
      "options": [
        "true true true",
        "true false false",
        "false true true",
        "true true false"
      ],
      "answer": 0,
      "explain": "The runtime object is `Dog`. It is an instance of `Dog`, `Animal` (superclass), and `Object` (root). All evaluate to `true`.",
      "topic": "Multi-Tier instanceof Evaluation Output",
      "type": "output",
      "level": "easy",
      "strength": "Evaluated instanceof across inheritance chain.",
      "weakness": "A subclass instance evaluates to true for its own class and all ancestor types."
    },
    {
      "q": "A graphics rendering software supports vector shapes: Circles, Rectangles, and Triangles. Why is defining an abstract class `Shape` with `public abstract void draw(Graphics g)` superior to a procedural design using `if (shape.type == CIRCLE)`?",
      "options": [
        "Abstract classes run on GPUs",
        "Polymorphism eliminates fragile type checking ladders; adding a new `Polygon` shape requires only extending `Shape` and implementing `draw()`, requiring zero changes to the rendering loop",
        "Procedural code is not supported in Java",
        "Shapes cannot be drawn without interfaces"
      ],
      "answer": 1,
      "explain": "Polymorphic dispatch delegates rendering to the shape itself, eliminating brittle switch/if-else ladders and enabling infinite extensibility.",
      "topic": "Polymorphism Replaces Conditional Ladders",
      "type": "scenario",
      "level": "easy",
      "strength": "Understands how polymorphism eliminates fragile type checking in graphics engines.",
      "weakness": "Use polymorphism to eliminate fragile conditional branching ladders."
    },
    {
      "q": "Can a class extend an abstract class and implement interfaces simultaneously?",
      "options": [
        "No, it must choose one",
        "Yes: `class MyClass extends BaseAbstractClass implements InterfaceA, InterfaceB`",
        "Only if the abstract class comes after implements",
        "Only in Java 11+"
      ],
      "answer": 1,
      "explain": "A class can extend one superclass (abstract or concrete) and simultaneously implement multiple interfaces.",
      "topic": "Extends and Implements Coexistence",
      "type": "theory",
      "level": "easy",
      "strength": "Knows the combined extends and implements syntax.",
      "weakness": "`class Sub extends Super implements InterA, InterB` is standard Java syntax."
    },
    {
      "q": "Why does this code fail to compile?\n```java\ninterface Device {\n    void start();\n}\nabstract class Phone implements Device {}\nPhone p = new Phone();\n```",
      "options": [
        "Phone cannot implement Device",
        "Cannot instantiate abstract class `Phone`",
        "Device has no constructor",
        "p must be Device"
      ],
      "answer": 1,
      "explain": "`Phone` is declared `abstract` (which is valid since it leaves `start()` unimplemented), but abstract classes cannot be instantiated with `new`.",
      "topic": "Instantiating Abstract Implementing Class",
      "type": "error",
      "level": "easy",
      "strength": "Caught instantiation of abstract class.",
      "weakness": "Abstract classes cannot be instantiated with `new` even if they implement interfaces."
    },
    {
      "q": "What are the implicit modifiers for fields declared inside an interface in Java?",
      "options": [
        "`private final`",
        "`public static final` (constants)",
        "`protected volatile`",
        "package-private mutable"
      ],
      "answer": 1,
      "explain": "All fields declared in an interface are implicitly `public static final` constants, even if those keywords are omitted.",
      "topic": "Interface Field Modifiers",
      "type": "theory",
      "level": "medium",
      "strength": "Knows that interface fields are implicitly public static final constants.",
      "weakness": "All variables in an interface are implicitly `public static final` constants."
    },
    {
      "q": "Identify the bug in this downcast snippet:\n```java\nAnimal a = getAnimal(); // returns Cat or Dog\nDog d = (Dog) a;\nd.bark();\n```",
      "options": [
        "Dog cannot bark",
        "If `getAnimal()` returns a `Cat`, the unconditional cast throws `ClassCastException` at runtime (should guard with `if (a instanceof Dog)`)",
        "getAnimal must return Dog",
        "d is null"
      ],
      "answer": 1,
      "explain": "Unconditional downcasting without an `instanceof` guard risks throwing `ClassCastException` whenever the runtime object is of an incompatible subtype.",
      "topic": "Unchecked Downcasting Vulnerability",
      "type": "error",
      "level": "medium",
      "strength": "Identified unsafe downcasting without instanceof guard.",
      "weakness": "Guard downcasts with `if (obj instanceof Subtype)` to avoid ClassCastException."
    },
    {
      "q": "What is the output of this code?\n```java\ninterface X {\n    default void run() { System.out.print(\"X \"); }\n}\nclass Y implements X {\n    public void run() {\n        X.super.run();\n        System.out.print(\"Y \");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Y().run();\n    }\n}\n```",
      "options": [
        "X Y ",
        "Y X ",
        "X ",
        "Y "
      ],
      "answer": 0,
      "explain": "`X.super.run()` explicitly invokes the default implementation of `X`, printing `\"X \"`. Then `Y` prints `\"Y \"`. Output: `X Y `.",
      "topic": "Interface Default Call via X.super.run() Output",
      "type": "output",
      "level": "medium",
      "strength": "Traced explicit interface default method invocation using `Interface.super.method()`.",
      "weakness": "`X.super.run()` invokes interface default logic, followed by local code: `X Y `."
    },
    {
      "q": "A database abstraction layer models `DatabaseConnection`. All databases share connection pooling, credentials, and logging logic, but MySQL and Oracle use completely different network socket handshakes. How should this be designed?",
      "options": [
        "Use a pure interface with zero implementation",
        "Use an `abstract class DatabaseConnection` implementing shared pooling and credential state, with an `abstract void connectSocket()` method overridden by `MySqlConnection` and `OracleConnection`",
        "Create two unrelated classes with duplicated code",
        "Write all logic in a single static method"
      ],
      "answer": 1,
      "explain": "An abstract class is ideal when subclasses share substantial state and common implementation code while differing on specific low-level operations (Template Method pattern).",
      "topic": "Abstract Class for Shared State & Implementation",
      "type": "scenario",
      "level": "medium",
      "strength": "Selected abstract class over interface to share common state and algorithms.",
      "weakness": "Use abstract classes when subclasses must share state and common implementation logic."
    },
    {
      "q": "What is upcasting versus downcasting in Java?",
      "options": [
        "Upcasting converts primitive to object; downcasting converts object to primitive",
        "Upcasting assigns a subtype instance to a supertype reference (implicit and safe); downcasting casts a supertype reference back to a subtype reference (explicit and potentially unsafe)",
        "Upcasting is done by the garbage collector",
        "They are identical operations"
      ],
      "answer": 1,
      "explain": "Upcasting (`Animal a = new Dog();`) is safe and automatic because a Dog is an Animal. Downcasting (`Dog d = (Dog) a;`) narrows the type and requires an explicit cast.",
      "topic": "Upcasting vs Downcasting",
      "type": "theory",
      "level": "easy",
      "strength": "Distinguishes safe automatic upcasting from explicit narrowing downcasting.",
      "weakness": "Upcasting is implicit and safe; downcasting is explicit and requires verification."
    },
    {
      "q": "Why does this abstract method declaration cause a compile-time error?\n```java\nabstract class Worker {\n    private abstract void work();\n}\n```",
      "options": [
        "Worker must be public",
        "Illegal combination of modifiers: `abstract` and `private` (private methods cannot be inherited or overridden by subclasses)",
        "work must return int",
        "abstract methods must have bodies"
      ],
      "answer": 1,
      "explain": "An abstract method must be overridden by a subclass, but `private` prevents subclass visibility. Combining `private` and `abstract` is illegal.",
      "topic": "Private Abstract Method Error",
      "type": "error",
      "level": "easy",
      "strength": "Caught illegal combination of private and abstract modifiers.",
      "weakness": "Abstract methods cannot be `private` because subclasses must override them."
    },
    {
      "q": "What is the output of this code?\n```java\nAnimal a = null;\nSystem.out.println(a instanceof Object);\n```",
      "options": [
        "true",
        "false",
        "NullPointerException",
        "Error"
      ],
      "answer": 1,
      "explain": "In Java, evaluating `null instanceof AnyType` always returns `false` safely without throwing `NullPointerException`.",
      "topic": "Null instanceof Evaluation Output",
      "type": "output",
      "level": "easy",
      "strength": "Recognized that null instanceof anything evaluates to false.",
      "weakness": "`null instanceof Type` always evaluates to `false` without throwing an exception."
    },
    {
      "q": "A logging framework supports exporting logs to Console, File, and remote Cloud Storage. What is the appropriate interface definition?",
      "options": [
        "`public interface LogDestination { void writeLog(String message); }`",
        "A class with 3 static methods",
        "A final class with private fields",
        "An abstract class with 50 fields"
      ],
      "answer": 0,
      "explain": "A clean, single-method interface `LogDestination` defines a cohesive contract that Console, File, and Cloud loggers implement.",
      "topic": "Logging Contract Interface",
      "type": "scenario",
      "level": "easy",
      "strength": "Designed cohesive interface for pluggable output destinations.",
      "weakness": "Define focused, cohesive interfaces for pluggable output destinations."
    },
    {
      "q": "What happens if a class implements an interface but fails to implement one of its abstract methods?",
      "options": [
        "The method defaults to returning null",
        "The class must be declared `abstract`, or the compiler issues a compilation error",
        "The JVM synthesizes an empty method",
        "A runtime NotImplementedException is thrown"
      ],
      "answer": 1,
      "explain": "A class that does not provide implementations for all inherited abstract methods remains incomplete and MUST be declared `abstract`.",
      "topic": "Incomplete Interface Implementation",
      "type": "theory",
      "level": "easy",
      "strength": "Understands that classes with unimplemented interface methods must be abstract.",
      "weakness": "A class that does not implement all abstract interface methods must be declared `abstract`."
    },
    {
      "q": "Why does this code fail to compile?\n```java\ninterface Greeter {\n    default void greet();\n}\n```",
      "options": [
        "Greeter must be a class",
        "Default methods in interfaces MUST specify a method body `{ ... }`",
        "greet cannot be void",
        "default is a keyword for switch only"
      ],
      "answer": 1,
      "explain": "A `default` method in an interface exists specifically to provide a method body. Omitting the body causes a compile error: 'missing method body, or declare abstract'.",
      "topic": "Default Method Missing Body Error",
      "type": "error",
      "level": "easy",
      "strength": "Spotted default interface method missing implementation body.",
      "weakness": "Default methods in interfaces must provide a method body `{ ... }`."
    },
    {
      "q": "What is a `default` method in an interface (introduced in Java 8)?",
      "options": [
        "A method with package-private access",
        "A method declared with the `default` keyword that provides a concrete default implementation in the interface, allowing interfaces to evolve without breaking existing implementing classes",
        "A method called by the JVM upon startup",
        "A method that cannot be overridden"
      ],
      "answer": 1,
      "explain": "`default` methods allow adding new methods to interfaces with a default implementation, preserving backward compatibility with legacy implementing classes.",
      "topic": "Interface Default Methods",
      "type": "theory",
      "level": "medium",
      "strength": "Understands default methods in interfaces introduced in Java 8.",
      "weakness": "`default` methods provide concrete implementations in interfaces for backward compatibility."
    },
    {
      "q": "What error occurs in this interface definition?\n```java\ninterface Service {\n    protected void run();\n}\n```",
      "options": [
        "run cannot be void",
        "Modifier `protected` not allowed here: interface members must be public (or private helper methods in Java 9+)",
        "Service must be abstract class",
        "run must have body"
      ],
      "answer": 1,
      "explain": "Interface methods cannot be `protected`. They are public by contract.",
      "topic": "Protected Interface Method Error",
      "type": "error",
      "level": "medium",
      "strength": "Recognized that interface methods cannot be protected.",
      "weakness": "Interface methods cannot be declared `protected`; they must be `public` (or `private` in Java 9+)."
    },
    {
      "q": "What does this code print?\n```java\ninterface A {\n    int X = 10;\n}\ninterface B {\n    int X = 20;\n}\npublic class Main implements A, B {\n    public static void main(String[] args) {\n        System.out.println(A.X + \" \" + B.X);\n    }\n}\n```",
      "options": [
        "10 20",
        "20 10",
        "Compilation error: X is ambiguous",
        "0 0"
      ],
      "answer": 0,
      "explain": "Accessing `X` unqualified inside `Main` would be ambiguous, but qualifying with `A.X` and `B.X` resolves ambiguity cleanly. Outputs `10 20`.",
      "topic": "Qualified Interface Constant Disambiguation Output",
      "type": "output",
      "level": "medium",
      "strength": "Disambiguated colliding interface constants via interface name qualification.",
      "weakness": "Qualifying with `A.X` and `B.X` cleanly accesses each constant: `10 20`."
    },
    {
      "q": "A data processing pipeline filters a stream of events. It needs a lightweight predicate to test if an event is valid: `boolean test(Event e)`. Why should `java.util.function.Predicate<Event>` be used rather than inventing a custom interface?",
      "options": [
        "Custom interfaces are illegal in Java",
        "Reusing Java's built-in standard functional interfaces (`Predicate`, `Function`, `Consumer`) promotes interoperability with the Stream API, standard libraries, and lambda expressions",
        "Predicate runs in C++",
        "Custom interfaces use more RAM"
      ],
      "answer": 1,
      "explain": "Standard functional interfaces promote code reuse and integrate seamlessly with Java Streams, Optional, and third-party libraries.",
      "topic": "Standard Functional Interface Reuse",
      "type": "scenario",
      "level": "medium",
      "strength": "Employed standard Java functional interfaces for ecosystem compatibility.",
      "weakness": "Leverage standard functional interfaces (`Predicate`, `Consumer`, `Function`) for seamless ecosystem interoperability."
    },
    {
      "q": "What runtime exception occurs if an invalid downcast is attempted: `Animal a = new Cat(); Dog d = (Dog) a;`?",
      "options": [
        "`NullPointerException`",
        "`java.lang.ClassCastException`",
        "`IllegalArgumentException`",
        "`ArrayStoreException`"
      ],
      "answer": 1,
      "explain": "Attempting to cast an object to a type it does not instantiate or inherit throws `ClassCastException` at runtime.",
      "topic": "ClassCastException",
      "type": "theory",
      "level": "easy",
      "strength": "Recognized ClassCastException on illegal downcasting.",
      "weakness": "Casting an incompatible runtime object to an unrelated subtype throws `ClassCastException`."
    },
    {
      "q": "Why does this code fail to compile?\n```java\ninterface Playable {\n    void play();\n}\nclass Game implements Playable {\n    void play() {}\n}\n```",
      "options": [
        "Game must be abstract",
        "Cannot reduce visibility: `play()` in `Game` has package-private access, but interface methods are implicitly `public`",
        "Game cannot implement Playable",
        "play cannot be empty"
      ],
      "answer": 1,
      "explain": "Interface methods are implicitly `public`. Implementing methods must explicitly declare `public` access; omitting it defaults to package-private, causing: 'attempting to assign weaker access privileges; was public'.",
      "topic": "Package-Private Interface Implementation Error",
      "type": "error",
      "level": "easy",
      "strength": "Caught missing public modifier on implemented interface method.",
      "weakness": "Methods implementing interface contracts must be explicitly declared `public`."
    },
    {
      "q": "What does this code print?\n```java\ninterface I {}\nclass A implements I {}\nclass B extends A {}\npublic class Main {\n    public static void main(String[] args) {\n        I ref = new B();\n        System.out.println((ref instanceof A) + \" \" + (ref instanceof B));\n    }\n}\n```",
      "options": [
        "true true",
        "true false",
        "false true",
        "false false"
      ],
      "answer": 0,
      "explain": "Because `B` extends `A` which implements `I`, an instance of `B` is an instance of both `A` and `B`. Output: `true true`.",
      "topic": "Inherited Interface Type Conformance Output",
      "type": "output",
      "level": "easy",
      "strength": "Verified that subclasses inherit interface implementation conformance.",
      "weakness": "Subclass `B` inherits interface `I` implementation from `A`; both evaluate to true."
    },
    {
      "q": "A notification service sends SMS, Email, and Push notifications. The client code is written as: `NotificationSender sender = NotificationFactory.getSender(userPreference); sender.send(message);`. What design principle is demonstrated?",
      "options": [
        "Program to an interface, not an implementation (Dependency Inversion Principle)",
        "Tight coupling",
        "Multiple inheritance",
        "Circular dependency"
      ],
      "answer": 0,
      "explain": "Programming to an interface (`NotificationSender`) decouples the caller from concrete implementation classes, allowing senders to be swapped dynamically.",
      "topic": "Program to an Interface Principle",
      "type": "scenario",
      "level": "easy",
      "strength": "Applied the core principle: Program to an interface, not an implementation.",
      "weakness": "Depend on interface abstractions rather than concrete implementation classes."
    },
    {
      "q": "Can an abstract class be declared `final`?",
      "options": [
        "Yes, to make it immutable",
        "No, `abstract` requires subclasses to extend it, while `final` strictly prohibits subclassing; they are mutually contradictory modifiers and cause a compile error",
        "Yes, if it has no abstract methods",
        "Only if private"
      ],
      "answer": 1,
      "explain": "`abstract` and `final` are polar opposites. A class cannot be both abstract and final.",
      "topic": "Abstract and Final Contradiction",
      "type": "theory",
      "level": "easy",
      "strength": "Recognized contradictory combination of abstract and final.",
      "weakness": "A class or method cannot be both `abstract` and `final`."
    },
    {
      "q": "Why does this code cause a compiler error?\n```java\ninterface Walker {\n    void walk();\n}\nclass Human implements Walker {\n    private void walk() {}\n}\n```",
      "options": [
        "walk must return int",
        "Cannot reduce the visibility of the inherited method from Walker: interface methods are public, cannot assign private access",
        "Human must be abstract",
        "walk is already defined"
      ],
      "answer": 1,
      "explain": "Implementing an interface method with `private` access violates the rule that visibility cannot be reduced from `public`.",
      "topic": "Private Implementation of Interface Method",
      "type": "error",
      "level": "easy",
      "strength": "Caught illegal private implementation of public interface method.",
      "weakness": "Methods implementing interface contracts must be declared `public`."
    },
    {
      "q": "What is a `static` method in an interface (introduced in Java 8)?",
      "options": [
        "A method that belongs to the implementing class",
        "A utility method defined inside an interface that belongs to the interface itself and must be invoked via the interface name: `InterfaceName.methodName()`",
        "An abstract method that runs once",
        "A method that can be overridden by subclasses"
      ],
      "answer": 1,
      "explain": "Interface static methods are helper utilities belonging to the interface. They are not inherited by implementing classes and are called via `InterfaceName.methodName()`.",
      "topic": "Interface Static Methods",
      "type": "theory",
      "level": "medium",
      "strength": "Knows that interface static methods are invoked via the interface name.",
      "weakness": "Interface static methods belong to the interface and are called via `InterfaceName.method()`."
    },
    {
      "q": "What compilation issue exists in this code?\n```java\nclass Box {\n    public int size = 10;\n}\nclass BigBox extends Box {\n    public int size = 20;\n}\nBox b = new BigBox();\nBigBox bb = (BigBox) b;\n```",
      "options": [
        "BigBox cannot extend Box",
        "The code compiles cleanly! It performs a valid upcast and subsequent downcast without errors",
        "b cannot be cast to BigBox",
        "size cannot be 20"
      ],
      "answer": 1,
      "explain": "The runtime object of `b` is `BigBox`. Casting `(BigBox) b` is completely type-safe and valid, compiling and executing with no errors.",
      "topic": "Valid Safe Downcasting",
      "type": "error",
      "level": "medium",
      "strength": "Recognized valid safe downcast of matching runtime type.",
      "weakness": "Downcasting a reference to its actual runtime object type succeeds cleanly."
    },
    {
      "q": "What does this code print?\n```java\nabstract class Plant {\n    public Plant() { grow(); }\n    abstract void grow();\n}\nclass Tree extends Plant {\n    void grow() { System.out.print(\"Tree \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Tree();\n    }\n}\n```",
      "options": [
        "Tree ",
        "Plant ",
        "Nothing",
        "Error"
      ],
      "answer": 0,
      "explain": "When `new Tree()` executes, `Plant()` constructor calls `grow()`, which dynamically dispatches to `Tree.grow()`. Outputs `Tree `.",
      "topic": "Abstract Constructor Method Dispatch Output",
      "type": "output",
      "level": "medium",
      "strength": "Traced dynamic dispatch from abstract superclass constructor.",
      "weakness": "Constructor calls `grow()`, which dynamically invokes `Tree.grow()`: `Tree `."
    },
    {
      "q": "A file compression utility supports ZIP, TAR, and GZIP formats. The method `compress(File source, Compressor compressor)` is called. Why does passing different compressor objects demonstrate polymorphism?",
      "options": [
        "Compressor is a primitive type",
        "The method invokes `compressor.compress(source)` without knowing the concrete format; the actual object on the heap dynamically executes its specific compression algorithm",
        "Files are compressed on the GPU",
        "ZIP and TAR share the same code"
      ],
      "answer": 1,
      "explain": "The Strategy pattern leverages polymorphism: behavior is injected via an interface, and dynamic binding executes the chosen strategy at runtime.",
      "topic": "Strategy Pattern via Polymorphism",
      "type": "scenario",
      "level": "medium",
      "strength": "Recognized Strategy design pattern powered by runtime polymorphism.",
      "weakness": "Use the Strategy pattern with polymorphic interfaces to decouple algorithms from callers."
    },
    {
      "q": "What is the purpose of the `instanceof` operator in Java?",
      "options": [
        "To instantiate a new object",
        "To test whether an object reference is an instance of a specified class, subclass, or interface at runtime",
        "To compare primitive integers",
        "To determine memory size of an object"
      ],
      "answer": 1,
      "explain": "The `instanceof` operator evaluates to `true` if the object on the left can be safely cast to the type on the right, returning `false` if incompatible or null.",
      "topic": "instanceof Operator",
      "type": "theory",
      "level": "easy",
      "strength": "Understands runtime type testing with instanceof.",
      "weakness": "Use `instanceof` to safely verify an object's type before downcasting."
    },
    {
      "q": "Why does this code fail to compile?\n```java\nabstract class Vehicle {\n    public abstract void drive() {}\n}\n```",
      "options": [
        "Vehicle cannot be abstract",
        "Abstract methods cannot specify a body: `public abstract void drive();` must end with a semicolon, not `{}`",
        "drive must return void",
        "drive cannot be public"
      ],
      "answer": 1,
      "explain": "Abstract methods must not have a body. They end with a semicolon `;`.",
      "topic": "Abstract Method with Body Syntax Error",
      "type": "error",
      "level": "easy",
      "strength": "Spotted body braces on abstract method declaration.",
      "weakness": "Abstract methods cannot have a body; terminate them with a semicolon `;`."
    },
    {
      "q": "What does this code print?\n```java\nclass Top {}\nclass Middle extends Top {}\nclass Bottom extends Middle {}\npublic class Main {\n    public static void main(String[] args) {\n        Top t = new Middle();\n        System.out.println((t instanceof Bottom) + \" \" + (t instanceof Middle));\n    }\n}\n```",
      "options": [
        "false true",
        "true true",
        "false false",
        "true false"
      ],
      "answer": 0,
      "explain": "The actual runtime object is `Middle`. It is not an instance of `Bottom` (false), but is an instance of `Middle` (true). Output: `false true`.",
      "topic": "instanceof Middle Tier Evaluation Output",
      "type": "output",
      "level": "easy",
      "strength": "Accurately tested intermediate inheritance hierarchy in instanceof.",
      "weakness": "Actual object is `Middle`: false for subclass `Bottom`, true for `Middle`."
    },
    {
      "q": "A desktop application manages plugins. Third-party developers write plugin JARs. How does the application guarantee that any third-party plugin can be loaded, started, and stopped safely?",
      "options": [
        "By inspecting the author's name",
        "By providing a public `Plugin` interface with lifecycle methods (`init()`, `start()`, `stop()`) that all third-party plugins must implement",
        "By decompiling the plugin code at runtime",
        "By requiring all plugins to be written in a single file"
      ],
      "answer": 1,
      "explain": "Interfaces define pluggable architectural boundaries. Any external plugin implementing `Plugin` can be loaded and executed through uniform interface contracts.",
      "topic": "Pluggable Architecture via Interfaces",
      "type": "scenario",
      "level": "easy",
      "strength": "Engineered pluggable system architecture using interface contracts.",
      "weakness": "Use interfaces to define clean extension contracts for third-party plugins."
    },
    {
      "q": "Why does this code fail to compile?\n```java\ninterface A {\n    int X = 100;\n}\nclass Test implements A {\n    public static void main(String[] args) {\n        X = 200;\n    }\n}\n```",
      "options": [
        "X is private",
        "Cannot assign a value to final variable X (inherited interface fields are constants)",
        "A has no X",
        "Test must be abstract"
      ],
      "answer": 1,
      "explain": "Inherited interface fields like `X` are constants (`public static final`) and cannot be reassigned.",
      "topic": "Inherited Interface Constant Reassignment Error",
      "type": "error",
      "level": "easy",
      "strength": "Caught attempt to reassign inherited interface constant.",
      "weakness": "Fields inherited from interfaces are constants and cannot be reassigned."
    },
    {
      "q": "What does this code print?\n```java\ninterface Printer {\n    default void print() { System.out.print(\"Print \"); }\n}\nclass LaserPrinter implements Printer {}\npublic class Main {\n    public static void main(String[] args) {\n        new LaserPrinter().print();\n    }\n}\n```",
      "options": [
        "Print ",
        "LaserPrinter ",
        "Nothing",
        "Error"
      ],
      "answer": 0,
      "explain": "`LaserPrinter` does not override `print()`, so it inherits the default method from `Printer`. Outputs `Print `.",
      "topic": "Inherited Default Method Output",
      "type": "output",
      "level": "easy",
      "strength": "Traced inherited interface default method execution.",
      "weakness": "Inherited default method executes, outputting `Print `."
    },
    {
      "q": "What is a functional interface (SAM - Single Abstract Method) in Java?",
      "options": [
        "An interface with zero methods",
        "An interface that declares exactly ONE abstract method (can be annotated with `@FunctionalInterface`), eligible to be instantiated via Lambda expressions or method references",
        "An interface with only static methods",
        "An interface that extends Runnable"
      ],
      "answer": 1,
      "explain": "A Functional Interface has exactly one abstract method (SAM), serving as the foundational contract for Java 8+ Lambda expressions (`(x) -> x * 2`).",
      "topic": "Functional Interface Concept",
      "type": "theory",
      "level": "medium",
      "strength": "Understands Single Abstract Method (SAM) functional interfaces.",
      "weakness": "Functional interfaces have exactly one abstract method and support lambda expressions."
    },
    {
      "q": "What error occurs in this code snippet?\n```java\nObject obj = \"Java\";\nif (obj instanceof String) {\n    int len = obj.length();\n}\n```",
      "options": [
        "instanceof cannot check String",
        "Cannot find symbol: method length() in class Object (`obj` is still statically typed as `Object`; must cast `((String) obj).length()` or use pattern matching)",
        "length() is for arrays",
        "obj is null"
      ],
      "answer": 1,
      "explain": "Even though `instanceof` confirms the runtime type is `String`, `obj`'s declared type remains `Object`. You must cast `((String) obj).length()` or use pattern matching `if (obj instanceof String s)`.",
      "topic": "Uncast Supertype Invocations Post-instanceof",
      "type": "error",
      "level": "medium",
      "strength": "Recognized that traditional instanceof check does not automatically cast the variable.",
      "weakness": "Cast the reference explicitly after `instanceof` (or use pattern matching `instanceof String s`)."
    },
    {
      "q": "What does this code print?\n```java\ninterface Greeter {\n    void greet();\n}\npublic class Main {\n    public static void main(String[] args) {\n        Greeter g = new Greeter() {\n            public void greet() { System.out.print(\"Anonymous \"); }\n        };\n        g.greet();\n    }\n}\n```",
      "options": [
        "Anonymous ",
        "Greeter ",
        "Nothing",
        "Error"
      ],
      "answer": 0,
      "explain": "An anonymous inner class implements `Greeter` and provides `greet()`. Calling `g.greet()` outputs `Anonymous `.",
      "topic": "Anonymous Class Interface Instantiation Output",
      "type": "output",
      "level": "medium",
      "strength": "Traced anonymous inner class implementing an interface.",
      "weakness": "Anonymous class implements interface and executes `greet()`: `Anonymous `."
    },
    {
      "q": "A web server framework routes HTTP requests. It provides a `Filter` interface: `void doFilter(Request req, Response res, FilterChain chain)`. Why are filters implemented as an interface rather than concrete classes?",
      "options": [
        "Classes cannot handle HTTP",
        "To allow authentication filters, compression filters, and logging filters to be developed independently and plugged into the request processing pipeline interchangeably",
        "Interfaces are faster than classes",
        "To force filters to be static"
      ],
      "answer": 1,
      "explain": "Interfaces define pluggable pipeline contracts, allowing arbitrary filters (auth, rate-limiting, logging) to be chained interchangeably.",
      "topic": "Interchangeable Pipeline Filter Architecture",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands decoupled pipeline middleware design using interfaces.",
      "weakness": "Use interfaces for middleware pipeline stages to support interchangeable processing components."
    },
    {
      "q": "What is an `abstract` class in Java?",
      "options": [
        "A class that cannot have any methods",
        "A class declared with the `abstract` keyword that CANNOT be directly instantiated using `new`, designed to serve as a base class for subclasses",
        "A class with no fields",
        "A class that can only be used in packages"
      ],
      "answer": 1,
      "explain": "An abstract class cannot be instantiated directly. It serves as an incomplete conceptual template that subclasses must extend and complete.",
      "topic": "Abstract Class Concept",
      "type": "theory",
      "level": "easy",
      "strength": "Understands that abstract classes cannot be directly instantiated.",
      "weakness": "Abstract classes cannot be instantiated with `new`; they serve as base templates."
    },
    {
      "q": "Identify the error in this code:\n```java\ninterface Printable {\n    void print();\n}\nPrintable p = new Printable();\n```",
      "options": [
        "Printable must have fields",
        "Printable is an interface; cannot be instantiated directly with `new` (requires an implementing class or anonymous class)",
        "print must be static",
        "p must be null"
      ],
      "answer": 1,
      "explain": "Interfaces cannot be directly instantiated with `new`. A concrete class must implement the interface.",
      "topic": "Direct Interface Instantiation Error",
      "type": "error",
      "level": "easy",
      "strength": "Caught direct instantiation of interface with new.",
      "weakness": "Interfaces cannot be instantiated directly with `new`."
    },
    {
      "q": "What is the output of this code?\n```java\nabstract class Vehicle {\n    String name;\n    public Vehicle(String name) { this.name = name; }\n}\nclass Car extends Vehicle {\n    public Car() { super(\"Sedan\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Car c = new Car();\n        System.out.println(c.name);\n    }\n}\n```",
      "options": [
        "Sedan",
        "null",
        "Vehicle",
        "Error"
      ],
      "answer": 0,
      "explain": "`Car()` invokes `super(\"Sedan\")`, setting `name` in the abstract superclass. Outputs `Sedan`.",
      "topic": "Abstract Constructor Field Initialization Output",
      "type": "output",
      "level": "easy",
      "strength": "Traced field initialization through abstract superclass constructor.",
      "weakness": "`super(\"Sedan\")` initializes abstract class field `name` to 'Sedan'."
    },
    {
      "q": "A developer designs an immutable `ComplexNumber` class. The developer wants users to be able to sort an array of complex numbers using `Arrays.sort(numbers)`. What interface must `ComplexNumber` implement?",
      "options": [
        "`java.lang.Cloneable`",
        "`java.lang.Comparable<ComplexNumber>` and implement `compareTo(ComplexNumber other)`",
        "`java.io.Serializable`",
        "`java.lang.Runnable`"
      ],
      "answer": 1,
      "explain": "`Comparable<T>` defines the natural ordering of objects, enabling `Arrays.sort()` and `Collections.sort()` to sort collections automatically.",
      "topic": "Comparable Interface Contract",
      "type": "scenario",
      "level": "easy",
      "strength": "Applied Comparable interface to establish natural sort ordering.",
      "weakness": "Implement `Comparable<T>` and override `compareTo()` to enable automatic sorting."
    },
    {
      "q": "What compilation error occurs here?\n```java\nabstract class Base {\n    abstract void m1();\n    abstract void m2();\n}\nabstract class Sub extends Base {\n    void m1() {}\n}\nSub s = new Sub();\n```",
      "options": [
        "Sub cannot extend Base",
        "Cannot instantiate abstract class `Sub` (Sub is still abstract because it has not implemented `m2()`)",
        "m1 is already implemented",
        "Base has no constructors"
      ],
      "answer": 1,
      "explain": "`Sub` implements `m1()` but not `m2()`, so `Sub` remains abstract. Attempting `new Sub()` fails.",
      "topic": "Instantiating Partially Implemented Abstract Subclass",
      "type": "error",
      "level": "easy",
      "strength": "Caught instantiation of partially implemented abstract class.",
      "weakness": "Subclasses that only implement some abstract methods remain abstract and cannot be instantiated."
    },
    {
      "q": "What is the output of this code?\n```java\nclass Alpha {}\nclass Beta extends Alpha {}\npublic class Main {\n    public static void main(String[] args) {\n        Alpha a = new Alpha();\n        System.out.println(a instanceof Beta);\n    }\n}\n```",
      "options": [
        "false",
        "true",
        "NullPointerException",
        "Error"
      ],
      "answer": 0,
      "explain": "The runtime object is `Alpha` (a superclass instance). It is NOT an instance of subclass `Beta`. Outputs `false`.",
      "topic": "Superclass Instance of Subclass Check Output",
      "type": "output",
      "level": "easy",
      "strength": "Recognized that superclass instances are not instances of subclasses.",
      "weakness": "A superclass object is not an instance of its subclass: evaluates to `false`."
    },
    {
      "q": "What is the primary difference between an abstract class and an interface in modern Java?",
      "options": [
        "Abstract classes cannot have methods; interfaces can",
        "An abstract class can maintain instance state (non-static instance fields) and constructors; an interface cannot have instance state or constructors (a class can only extend one abstract class but implement multiple interfaces)",
        "Interfaces cannot have code bodies",
        "Abstract classes are slower"
      ],
      "answer": 1,
      "explain": "Abstract classes can hold state (`int x;`) and define constructors; interfaces only hold constants (`static final`) and define behaviors across unrelated class hierarchies.",
      "topic": "Abstract Class vs Interface Differences",
      "type": "theory",
      "level": "medium",
      "strength": "Distinguishes abstract classes (state + single inheritance) from interfaces (stateless contracts + multiple implementation).",
      "weakness": "Abstract classes maintain instance state and constructors; interfaces define stateless behavioral contracts."
    },
    {
      "q": "Why does this code fail to compile?\n```java\nabstract class Shape {\n    public abstract void draw();\n}\nShape s = new Shape();\n```",
      "options": [
        "draw cannot be public",
        "Cannot instantiate abstract class `Shape` with `new`",
        "s must be final",
        "Shape has no constructor"
      ],
      "answer": 1,
      "explain": "Abstract classes cannot be directly instantiated. Attempting `new Shape()` causes: 'Shape is abstract; cannot be instantiated'.",
      "topic": "Instantiating Abstract Class Error",
      "type": "error",
      "level": "easy",
      "strength": "Spotted illegal direct instantiation of abstract class.",
      "weakness": "Abstract classes cannot be instantiated with `new`."
    },
    {
      "q": "What does this code print?\n```java\ninterface Item {\n    default int getPrice() { return 100; }\n}\nclass DiscountItem implements Item {\n    public int getPrice() { return Item.super.getPrice() - 20; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new DiscountItem().getPrice());\n    }\n}\n```",
      "options": [
        "80",
        "100",
        "20",
        "Error"
      ],
      "answer": 0,
      "explain": "`Item.super.getPrice()` returns 100. Subtracting 20 yields 80. Outputs 80.",
      "topic": "Interface super.getPrice() Modification Output",
      "type": "output",
      "level": "medium",
      "strength": "Computed price adjustment invoking interface default method via super.",
      "weakness": "`100 - 20 = 80`."
    },
    {
      "q": "An AI robotics controller controls drone motors. The interface is `MotorController`. In unit tests, physical hardware is unavailable. How does polymorphism solve this testing problem?",
      "options": [
        "Cancel unit testing",
        "Create a `MockMotorController` implementing `MotorController` that records motor commands in memory, allowing tests to run in milliseconds without physical drones",
        "Buy real drones for every unit test run",
        "Make motor methods private"
      ],
      "answer": 1,
      "explain": "Polymorphism enables Dependency Injection and Mocking: passing mock implementations of interfaces during tests decouples software from physical hardware dependencies.",
      "topic": "Dependency Injection & Mocking via Interfaces",
      "type": "scenario",
      "level": "medium",
      "strength": "Leveraged interface polymorphism for test mocking and dependency injection.",
      "weakness": "Use interfaces to inject mock implementations during unit testing without real hardware."
    },
    {
      "q": "What is an `abstract` method?",
      "options": [
        "A method with an empty body `{}`",
        "A method declared without an implementation (no body, ending with a semicolon `;`), requiring non-abstract subclasses to provide the implementation",
        "A private method",
        "A method that cannot be called"
      ],
      "answer": 1,
      "explain": "An abstract method (`public abstract void draw();`) has no body. It defines a mandatory behavioral contract that concrete subclasses must implement.",
      "topic": "Abstract Method Definition",
      "type": "theory",
      "level": "easy",
      "strength": "Knows that abstract methods declare signatures without method bodies.",
      "weakness": "Abstract methods have no body and must be implemented by concrete subclasses."
    },
    {
      "q": "What compilation error occurs here?\n```java\nabstract class Shape {\n    public static abstract void draw();\n}\n```",
      "options": [
        "draw cannot be public",
        "Illegal combination of modifiers: `static` and `abstract`",
        "Shape must be final",
        "draw must have body"
      ],
      "answer": 1,
      "explain": "`static` methods belong to the class and cannot be overridden dynamically, while `abstract` methods require dynamic subclass overriding. They cannot be combined.",
      "topic": "Static Abstract Method Contradiction",
      "type": "error",
      "level": "easy",
      "strength": "Spotted illegal combination of static and abstract modifiers.",
      "weakness": "Methods cannot be both `static` and `abstract`."
    },
    {
      "q": "What does this code print?\n```java\ninterface Fun {\n    int apply(int x);\n}\npublic class Main {\n    public static void main(String[] args) {\n        Fun square = x -> x * x;\n        System.out.println(square.apply(5));\n    }\n}\n```",
      "options": [
        "25",
        "5",
        "10",
        "Error"
      ],
      "answer": 0,
      "explain": "`Fun` is a functional interface. The lambda `x -> x * x` implements `apply`. `square.apply(5) = 5 * 5 = 25`.",
      "topic": "Lambda Expression Invocation Output",
      "type": "output",
      "level": "easy",
      "strength": "Evaluated lambda expression implementing functional interface.",
      "weakness": "Lambda expression computes 5 * 5 = 25."
    },
    {
      "q": "A banking application processes different types of financial instruments: Bonds, Stocks, Derivatives. All implement `Valuable` (`double getValue()`). How do you compute the total portfolio net worth?",
      "options": [
        "Cast everything to Stock",
        "`double total = 0; for (Valuable item : portfolio) total += item.getValue();`",
        "Use 3 separate loops for each instrument",
        "Check instance types with 10 if-statements"
      ],
      "answer": 1,
      "explain": "Polymorphism allows treating all instruments uniformly through the `Valuable` interface, calculating the total value in a single clean loop without type checks.",
      "topic": "Polymorphic Portfolio Aggregation",
      "type": "scenario",
      "level": "easy",
      "strength": "Aggregated heterogeneous financial instruments using interface polymorphism.",
      "weakness": "Iterate heterogeneous collections via a common interface to aggregate metrics cleanly."
    },
    {
      "q": "What is the output of this code?\n```java\nObject obj = \"Polymorphism\";\nif (obj instanceof String s) {\n    System.out.println(s.substring(0, 4));\n}\n```",
      "options": [
        "Poly",
        "Polymorphism",
        "Error",
        "NullPointerException"
      ],
      "answer": 0,
      "explain": "Pattern matching binds `s` to the string `\"Polymorphism\"`. `s.substring(0, 4)` extracts \"Poly\". Outputs `Poly`.",
      "topic": "Pattern Matching String Extraction Output",
      "type": "output",
      "level": "easy",
      "strength": "Evaluated pattern matching for instanceof and method call.",
      "weakness": "Pattern matching binds `s` to String, extracting `\"Poly\"`."
    },
    {
      "q": "An enterprise document converter converts files to PDF. A developer writes `public void convert(Document doc)`. If `doc` can be a `WordDoc`, `ExcelDoc`, or `PowerPointDoc`, why should the method accept `Document` rather than `WordDoc`?",
      "options": [
        "To accept any document type polymorphically, making the conversion pipeline reusable across all document formats",
        "WordDoc cannot be converted",
        "Java does not allow WordDoc parameters",
        "Document uses less memory"
      ],
      "answer": 0,
      "explain": "Accepting the general supertype `Document` makes the API generic, reusable, and decoupled from specific file formats.",
      "topic": "Generalized Supertype Parameter Typing",
      "type": "scenario",
      "level": "easy",
      "strength": "Applied generalized supertype parameter typing for maximum API flexibility.",
      "weakness": "Design methods to accept the most general supertype necessary to maximize reuse."
    },
    {
      "q": "Can an interface extend another interface in Java?",
      "options": [
        "No, interfaces cannot use extends",
        "Yes, an interface can extend one or even MULTIPLE other interfaces using the `extends` keyword",
        "Only if both interfaces are functional",
        "Only using implements"
      ],
      "answer": 1,
      "explain": "An interface can extend multiple parent interfaces: `interface C extends A, B { ... }`.",
      "topic": "Interface Extending Multiple Interfaces",
      "type": "theory",
      "level": "medium",
      "strength": "Knows that interfaces can extend multiple other interfaces.",
      "weakness": "An interface can extend multiple interfaces using `extends`."
    },
    {
      "q": "What is the compilation error in this interface declaration?\n```java\ninterface Calculable {\n    int factor = 10;\n    void reset() {\n        factor = 20;\n    }\n}\n```",
      "options": [
        "reset must be public",
        "Cannot assign a value to final variable `factor`: interface fields are implicitly `public static final` constants and cannot be reassigned; also `reset()` needs `default` modifier",
        "factor cannot be 10",
        "Calculable cannot have methods"
      ],
      "answer": 1,
      "explain": "Interface fields are implicitly `public static final`. Reassigning `factor = 20;` fails compilation.",
      "topic": "Reassigning Interface Final Field Error",
      "type": "error",
      "level": "easy",
      "strength": "Spotted reassignment of implicitly final interface field.",
      "weakness": "Interface fields are implicitly constants (`final`) and cannot be reassigned."
    },
    {
      "q": "What is the output of the following code?\n```java\ninterface Speaker {\n    void speak();\n}\nclass Dog implements Speaker {\n    public void speak() { System.out.print(\"Woof \"); }\n}\nclass Person implements Speaker {\n    public void speak() { System.out.print(\"Hello \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Speaker[] list = { new Dog(), new Person() };\n        for (Speaker s : list) s.speak();\n    }\n}\n```",
      "options": [
        "Woof Hello ",
        "Hello Woof ",
        "Woof Woof ",
        "Compilation error"
      ],
      "answer": 0,
      "explain": "Polymorphism iterates across interface references, dispatching dynamically to `Dog.speak()` then `Person.speak()`. Output: `Woof Hello `.",
      "topic": "Interface Polymorphism Output",
      "type": "output",
      "level": "easy",
      "strength": "Traced polymorphic method dispatch through interface array.",
      "weakness": "Dynamic binding executes each object's respective implementation: `Woof Hello `."
    },
    {
      "q": "A smart home controller manages appliances (Lights, Fans, AirConditioners). Each has completely different hardware commands, but all have on/off capabilities. Should they inherit from a common `Appliance` class or implement an `Operable` interface?",
      "options": [
        "Inherit from Appliance only",
        "Implement an `Operable` (or `Switchable`) interface: appliances share no common state or hardware logic, only a common behavioral capability contract (`turnOn()`, `turnOff()`)",
        "Use multiple inheritance of classes",
        "Declare appliances as static"
      ],
      "answer": 1,
      "explain": "When entities share behavior but zero common implementation state, interfaces are the preferred design to avoid artificial class hierarchies.",
      "topic": "Behavioral Capability Contract Choice",
      "type": "scenario",
      "level": "medium",
      "strength": "Chose interface over abstract class when entities share behavior without state.",
      "weakness": "Use interfaces when modeling shared behavioral capabilities across disparate entities."
    },
    {
      "q": "Can a non-abstract (concrete) class contain an abstract method in Java?",
      "options": [
        "Yes, if the method is protected",
        "No, if a class contains ANY abstract method, the class ITSELF must be declared `abstract`",
        "Yes, if the method is void",
        "Only in interfaces"
      ],
      "answer": 1,
      "explain": "A class containing one or more abstract methods MUST be declared `abstract`, otherwise the compiler rejects it.",
      "topic": "Abstract Method Enforces Abstract Class",
      "type": "theory",
      "level": "easy",
      "strength": "Knows that any class with an abstract method must be declared abstract.",
      "weakness": "If a class contains an abstract method, the class itself must be marked `abstract`."
    },
    {
      "q": "Why does this code fail to compile?\n```java\nclass Animal {}\nclass Dog extends Animal {\n    public void bark() {}\n}\nAnimal a = new Animal();\na.bark();\n```",
      "options": [
        "bark must be static",
        "Cannot find symbol: method bark() does not exist in declared compile-time type `Animal`",
        "a must be cast to Object",
        "bark is private"
      ],
      "answer": 1,
      "explain": "The compiler checks method validity against the declared reference type (`Animal`). Because `bark()` is declared in `Dog`, not `Animal`, `a.bark()` fails compile-time type checking.",
      "topic": "Method Call on Supertype Reference Error",
      "type": "error",
      "level": "easy",
      "strength": "Recognized that supertype references cannot call subclass-specific methods without casting.",
      "weakness": "Supertype references cannot call subclass-specific methods without an explicit downcast."
    },
    {
      "q": "What is the output of this code?\n```java\nclass Base {\n    public void test() { System.out.print(\"Base \"); }\n}\nclass Sub extends Base {\n    public void test() { System.out.print(\"Sub \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Base b = new Sub();\n        Sub s = (Sub) b;\n        s.test();\n    }\n}\n```",
      "options": [
        "Sub ",
        "Base ",
        "Base Sub ",
        "Error"
      ],
      "answer": 0,
      "explain": "Both `b.test()` and `s.test()` invoke the runtime object's method on `Sub`. Outputs `Sub `.",
      "topic": "Downcast Reference Execution Output",
      "type": "output",
      "level": "easy",
      "strength": "Traced execution through downcast reference.",
      "weakness": "Downcast reference executes `Sub.test()`, outputting `Sub `."
    },
    {
      "q": "A video game has an `AudioClip` class. When sound plays, it must be cloned so multiple audio instances can overlap without interrupting each other. What standard interface does Java provide to indicate support for field-by-field copying?",
      "options": [
        "`java.lang.Cloneable`",
        "`java.lang.Copyable`",
        "`java.io.Serializable`",
        "`java.lang.Duplicable`"
      ],
      "answer": 0,
      "explain": "`Cloneable` is a marker interface that authorizes `Object.clone()` to perform a field-for-field shallow copy without throwing `CloneNotSupportedException`.",
      "topic": "Cloneable Marker Interface",
      "type": "scenario",
      "level": "easy",
      "strength": "Identified Cloneable marker interface for object duplication.",
      "weakness": "Implement `Cloneable` to enable `Object.clone()` field copying."
    },
    {
      "q": "What is the output of this code?\n```java\ninterface Calc {\n    int operate(int a, int b);\n}\npublic class Main {\n    public static void main(String[] args) {\n        Calc add = (a, b) -> a + b;\n        Calc mult = (a, b) -> a * b;\n        System.out.println(add.operate(3, 4) + \" \" + mult.operate(3, 4));\n    }\n}\n```",
      "options": [
        "7 12",
        "12 7",
        "7 7",
        "Error"
      ],
      "answer": 0,
      "explain": "`add` sums `3 + 4 = 7`. `mult` multiplies `3 * 4 = 12`. Outputs `7 12`.",
      "topic": "Multiple Functional Interface Lambdas Output",
      "type": "output",
      "level": "easy",
      "strength": "Evaluated multiple lambda implementations of a functional interface.",
      "weakness": "Lambdas compute 3 + 4 = 7 and 3 * 4 = 12: `7 12`."
    },
    {
      "q": "A robotics platform controls joints. `ArmJoint` implements `Actuator`. In safety mode, an engineer needs to inspect `ArmJoint`-specific temperature sensors that are NOT part of the general `Actuator` interface. What is the safest way to access this sensor?",
      "options": [
        "Unconditionally cast `((ArmJoint) actuator).getTemperature()`",
        "Use pattern matching for instanceof: `if (actuator instanceof ArmJoint arm) { checkTemp(arm.getTemperature()); }`",
        "Delete the sensor",
        "Cast to Object"
      ],
      "answer": 1,
      "explain": "Pattern matching `instanceof` safely validates the concrete type before exposing subclass-specific telemetry without risking `ClassCastException`.",
      "topic": "Safe Subclass Telemetry Inspection",
      "type": "scenario",
      "level": "easy",
      "strength": "Used pattern matching instanceof to safely access subclass-specific sensors.",
      "weakness": "Use pattern matching `instanceof` to access subclass-specific methods safely."
    },
    {
      "q": "What is pattern matching for `instanceof` (introduced in Java 16)?",
      "options": [
        "A regular expression engine for classes",
        "Syntactic shorthand that tests the type AND automatically casts and binds it to a local variable in a single step: `if (obj instanceof String s) { s.length(); }`",
        "A way to check multiple classes in a switch",
        "A compiler optimization for arrays"
      ],
      "answer": 1,
      "explain": "Pattern matching for `instanceof` eliminates redundant explicit downcasts: `if (obj instanceof String s)` binds `s` directly as a `String`.",
      "topic": "Pattern Matching for instanceof",
      "type": "theory",
      "level": "medium",
      "strength": "Understands modern Java pattern matching for instanceof.",
      "weakness": "`if (obj instanceof String s)` checks the type and binds variable `s` in one step."
    },
    {
      "q": "Why does this class fail to compile?\n```java\nabstract class Animal {\n    public abstract void makeSound();\n}\nclass Dog extends Animal {}\n```",
      "options": [
        "Animal has no fields",
        "Class `Dog` is not abstract and does not override abstract method `makeSound()` in `Animal`",
        "Dog must be public",
        "Animal cannot be extended"
      ],
      "answer": 1,
      "explain": "A concrete subclass must implement all inherited abstract methods or be declared `abstract` itself.",
      "topic": "Unimplemented Abstract Method in Concrete Subclass",
      "type": "error",
      "level": "easy",
      "strength": "Caught missing implementation of abstract method in concrete subclass.",
      "weakness": "Concrete subclasses must implement all inherited abstract methods."
    },
    {
      "q": "What does this code print?\n```java\ninterface A {\n    default void show() { System.out.print(\"A \"); }\n}\nclass B implements A {\n    @Override\n    public void show() { System.out.print(\"B \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        A obj = new B();\n        obj.show();\n    }\n}\n```",
      "options": [
        "A ",
        "B ",
        "A B ",
        "Error"
      ],
      "answer": 1,
      "explain": "Class `B` overrides the default method `show()`. Dynamic binding invokes the overriding implementation in `B`. Outputs `B `.",
      "topic": "Overridden Default Method Output",
      "type": "output",
      "level": "easy",
      "strength": "Recognized that class override takes precedence over interface default method.",
      "weakness": "Class implementations always override interface default methods: outputs `B `."
    },
    {
      "q": "A financial calculation engine has a class `TaxCalculator`. A developer wants to ensure that no client code can instantiate `TaxCalculator` because all its methods are static utilities. What is the standard design?",
      "options": [
        "Make the class abstract",
        "Declare a private no-argument constructor: `private TaxCalculator() {}` (and optionally make the class final)",
        "Delete the class",
        "Make all fields protected"
      ],
      "answer": 1,
      "explain": "Providing a private constructor prevents both external instantiation (`new TaxCalculator()`) and subclassing, which is the standard idiom for static utility classes (like `java.lang.Math`).",
      "topic": "Suppressing Instantiation via Private Constructor",
      "type": "scenario",
      "level": "medium",
      "strength": "Applied private constructor idiom to prevent utility class instantiation.",
      "weakness": "Suppress instantiation of static utility classes by declaring a private constructor."
    },
    {
      "q": "What is an `interface` in Java?",
      "options": [
        "A concrete class with private methods",
        "A reference type that defines a formal contract of abstract behaviors (and default/static methods) that implementing classes must fulfill using the `implements` keyword",
        "A visual GUI window",
        "A thread scheduler"
      ],
      "answer": 1,
      "explain": "An interface establishes a contract. Classes implement interfaces (`implements`) to guarantee they provide the specified behaviors, enabling multiple interface inheritance.",
      "topic": "Interface Concept",
      "type": "theory",
      "level": "easy",
      "strength": "Understands the contractual role of Java interfaces.",
      "weakness": "Interfaces specify behavioral contracts that classes implement using `implements`."
    },
    {
      "q": "Why does this code cause a compilation error?\n```java\ninterface A {}\ninterface B {}\nclass C extends A, B {}\n```",
      "options": [
        "C must be public",
        "Classes cannot `extend` interfaces (classes `implement` interfaces, using `implements A, B`)",
        "A and B must be classes",
        "C must be abstract"
      ],
      "answer": 1,
      "explain": "A class must use `implements` to inherit from interfaces, not `extends`.",
      "topic": "Class Extending Interfaces Syntax Error",
      "type": "error",
      "level": "easy",
      "strength": "Spotted class using extends instead of implements for interfaces.",
      "weakness": "Classes `implement` interfaces; they do not `extend` them."
    },
    {
      "q": "What is the output of this code?\n```java\nabstract class Animal {\n    abstract void eat();\n}\nclass Bird extends Animal {\n    void eat() { System.out.print(\"Seeds \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Animal a = new Bird();\n        a.eat();\n    }\n}\n```",
      "options": [
        "Seeds ",
        "Animal ",
        "Eat ",
        "NullPointerException"
      ],
      "answer": 0,
      "explain": "`a.eat()` invokes the overridden method in `Bird`, outputting `Seeds `.",
      "topic": "Abstract Method Dynamic Dispatch Output",
      "type": "output",
      "level": "easy",
      "strength": "Traced dynamic dispatch of abstract method.",
      "weakness": "Dispatches dynamically to `Bird.eat()`, printing `Seeds `."
    },
    {
      "q": "A distributed cache system caches objects in Redis. Objects must be converted into byte streams. What marker interface signals that an object's fields can be automatically serialized by the JVM?",
      "options": [
        "`java.io.Serializable`",
        "`java.lang.AutoCloseable`",
        "`java.lang.Cloneable`",
        "`java.lang.Readable`"
      ],
      "answer": 0,
      "explain": "`java.io.Serializable` is the standard marker interface that enables JVM object serialization into byte streams for network transmission or disk storage.",
      "topic": "Serializable Marker Interface",
      "type": "scenario",
      "level": "easy",
      "strength": "Recognized Serializable marker interface for object streaming.",
      "weakness": "Implement `Serializable` to permit object serialization across networks and caches."
    },
    {
      "q": "What is the output of this code?\n```java\nabstract class A {\n    abstract void f();\n}\nabstract class B extends A {\n    abstract void g();\n}\nclass C extends B {\n    void f() { System.out.print(\"F \"); }\n    void g() { System.out.print(\"G \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        C obj = new C();\n        obj.f();\n        obj.g();\n    }\n}\n```",
      "options": [
        "F G ",
        "G F ",
        "F ",
        "G "
      ],
      "answer": 0,
      "explain": "Concrete class `C` implements both `f()` and `g()`. Invoking both prints `F G `.",
      "topic": "Multi-Level Abstract Class Implementation Output",
      "type": "output",
      "level": "easy",
      "strength": "Traced implementation of all abstract methods in concrete subclass.",
      "weakness": "`obj.f()` and `obj.g()` output `F G `."
    },
    {
      "q": "A sorting algorithm needs to sort a list of `Employee` objects by salary in ascending order. If the `Employee` class does not implement `Comparable` (or sorting by salary is an alternate sort order), what Java interface allows defining an external comparator?",
      "options": [
        "`java.util.Comparator<Employee>` with `compare(Employee a, Employee b)`",
        "`java.lang.Comparable` only",
        "`java.lang.Runnable`",
        "`java.util.Scanner`"
      ],
      "answer": 0,
      "explain": "`Comparator<T>` allows defining flexible, pluggable custom sorting strategies externally without modifying the underlying class definition.",
      "topic": "Comparator Interface for Custom Sorting",
      "type": "scenario",
      "level": "easy",
      "strength": "Applied Comparator interface for external custom sorting strategies.",
      "weakness": "Use `Comparator<T>` to provide alternate or external sorting logic without altering the class."
    }
  ],
  "9": [
    {
      "q": "What happens if a `try` block contains a `return` statement, and the `finally` block ALSO contains a `return` statement?",
      "options": [
        "Compilation error: dual returns",
        "The `return` statement in the `finally` block completely overrides and swallows the `return` statement from the `try` block",
        "Both values are combined",
        "The JVM crashes"
      ],
      "answer": 1,
      "explain": "A `return` in `finally` discards any pending return value or unhandled exception from the `try` block, which is considered a severe anti-pattern.",
      "topic": "Return in Finally Anti-Pattern",
      "type": "theory",
      "level": "hard",
      "strength": "Mastered the danger of return statements inside finally blocks.",
      "weakness": "A `return` in `finally` overwrites any return or exception from the `try` block."
    },
    {
      "q": "Identify the syntax error in this multi-catch block:\n```java\ntry {\n    // do work\n} catch (IOException | FileNotFoundException e) {\n    System.out.println(e);\n}\n```",
      "options": [
        "e must be declared twice",
        "Compilation error: alternative `FileNotFoundException` is a subclass of alternative `IOException` (multi-catch alternatives cannot be related by inheritance)",
        "Pipe operator `|` is illegal in catch",
        "IOException cannot be caught"
      ],
      "answer": 1,
      "explain": "In multi-catch, alternatives cannot be subclasses of one another. Because `FileNotFoundException` extends `IOException`, listing both causes: 'Types in multi-catch must be disjoint'.",
      "topic": "Disjoint Types Rule in Multi-Catch Error",
      "type": "error",
      "level": "hard",
      "strength": "Caught non-disjoint inheritance hierarchy in multi-catch.",
      "weakness": "Types in a multi-catch block must be disjoint (cannot have parent-child relationship)."
    },
    {
      "q": "What is the output of this code?\n```java\npublic static int compute() {\n    int x = 10;\n    try {\n        return x;\n    } finally {\n        x = 20;\n    }\n}\npublic static void main(String[] args) {\n    System.out.println(compute());\n}\n```",
      "options": [
        "10",
        "20",
        "30",
        "0"
      ],
      "answer": 0,
      "explain": "`return x;` evaluates `x` (10) and places 10 on the operand stack for return. The `finally` block runs, mutating local variable `x = 20`, but the return value is already fixed at 10. Outputs 10.",
      "topic": "Primitive Return Value Latching in Finally Output",
      "type": "output",
      "level": "hard",
      "strength": "Mastered primitive return value latching prior to finally execution.",
      "weakness": "The return value (10) is evaluated before finally runs; mutating local variable in finally does not alter the return value."
    },
    {
      "q": "A medical patient database encrypts records on disk. When decrypting a patient record, a checksum mismatch indicates the file has been tampered with. Why should the decryptor throw an exception rather than returning partially corrupted data?",
      "options": [
        "Exceptions make the code run faster",
        "Fail-Fast Principle: returning corrupted medical data could lead to fatal clinical misdiagnoses; failing fast immediately alerts clinicians to the data integrity breach",
        "Medical records cannot have checksums",
        "Java requires all files to be deleted"
      ],
      "answer": 1,
      "explain": "The Fail-Fast principle dictates that systems should immediately abort on corrupted data to prevent catastrophic downstream consequences.",
      "topic": "Fail-Fast Security Principle",
      "type": "scenario",
      "level": "hard",
      "strength": "Applied the Fail-Fast principle to protect critical data integrity.",
      "weakness": "Adhere to the Fail-Fast principle: throw exceptions immediately upon detecting corrupted state."
    },
    {
      "q": "What are the two direct subclasses of `java.lang.Throwable`?",
      "options": [
        "`CheckedException` and `UncheckedException`",
        "`java.lang.Exception` and `java.lang.Error`",
        "`RuntimeException` and `IOException`",
        "`FatalError` and `Warning`"
      ],
      "answer": 1,
      "explain": "`Throwable` branches directly into `Exception` (conditions that a reasonable application might want to catch) and `Error` (serious problems that an application should not try to catch, like `OutOfMemoryError`).",
      "topic": "Branches of Throwable",
      "type": "theory",
      "level": "easy",
      "strength": "Distinguishes Exception from Error branches under Throwable.",
      "weakness": "`Throwable` divides directly into `Exception` and `Error`."
    },
    {
      "q": "What compilation error occurs in this method?\n```java\npublic void readFile(String path) {\n    throw new java.io.IOException(\"Disk failure\");\n}\n```",
      "options": [
        "IOException cannot take a string",
        "Unreported exception `java.io.IOException`; must be caught or declared to be thrown in method header (`throws IOException`)",
        "throw must be throws",
        "readFile must be static"
      ],
      "answer": 1,
      "explain": "Throwing a checked exception (`IOException`) requires the method to declare `throws IOException` or handle it with `try-catch`.",
      "topic": "Unreported Thrown Checked Exception Error",
      "type": "error",
      "level": "easy",
      "strength": "Caught missing throws declaration on thrown checked exception.",
      "weakness": "Methods throwing checked exceptions must declare `throws ExceptionType` in their header."
    },
    {
      "q": "What is the output of this code?\n```java\nint count = 0;\ntry {\n    count = 1;\n    throw new Exception();\n} catch (Exception e) {\n    count = 2;\n} finally {\n    count = 3;\n}\nSystem.out.println(count);\n```",
      "options": [
        "1",
        "2",
        "3",
        "0"
      ],
      "answer": 2,
      "explain": "`count` becomes 1, then exception jumps to catch where `count` becomes 2. Finally block executes unconditionally, setting `count = 3`. Outputs 3.",
      "topic": "Variable State Tracking Across Try-Catch-Finally",
      "type": "output",
      "level": "easy",
      "strength": "Tracked sequential variable assignments across exception blocks.",
      "weakness": "Finally block executes last, setting `count = 3`."
    },
    {
      "q": "A junior programmer writes code that uses exceptions for normal loop control:\n```java\ntry {\n    while (true) {\n        list.get(i++);\n    }\n} catch (IndexOutOfBoundsException e) {}\n```\nWhy is this considered an atrocious anti-pattern?",
      "options": [
        "Because it compiles slowly",
        "Exceptions are designed for exceptional, erroneous conditions; constructing and unwinding stack frames is orders of magnitude slower than a simple `i < list.size()` condition check, and it obscures real bugs",
        "IndexOutOfBoundsException is checked",
        "While loops cannot use try"
      ],
      "answer": 1,
      "explain": "Using exceptions for flow control is extremely slow (due to stack trace capture overhead), unreadable, and masks legitimate bugs.",
      "topic": "Exceptions for Flow Control Anti-Pattern",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands the performance and design cost of using exceptions for normal loop flow control.",
      "weakness": "Never use exceptions for normal control flow; use standard loop conditions."
    },
    {
      "q": "What is an `Error` in Java (such as `OutOfMemoryError` or `StackOverflowError`)?",
      "options": [
        "A minor syntax error",
        "A serious JVM subsystem failure or hardware resource exhaustion condition that a reasonable application should NOT attempt to catch or recover from",
        "A checked exception",
        "A warning message"
      ],
      "answer": 1,
      "explain": "Classes extending `Error` represent catastrophic conditions (memory exhaustion, linkage errors) where the JVM's execution environment is fatally compromised.",
      "topic": "Error Hierarchy Meaning",
      "type": "theory",
      "level": "easy",
      "strength": "Distinguishes fatal Errors from catchable Exceptions.",
      "weakness": "`Error` represents severe JVM failures (e.g. `OutOfMemoryError`) that applications should not catch."
    },
    {
      "q": "An IoT smart thermostat connects to Wi-Fi. In the network connection loop, why should resources like sockets be closed in a try-with-resources statement rather than an unmanaged loop?",
      "options": [
        "Sockets close automatically after 1 second",
        "If a connection timeout or network glitch throws an exception, unclosed sockets leak OS file descriptors and socket handles, eventually exhausting system resources",
        "Wi-Fi networks require try-with-resources",
        "Sockets cannot throw exceptions"
      ],
      "answer": 1,
      "explain": "Leaking socket descriptors starves the operating system of network ports, eventually causing socket exhaustion (`Too many open files`). Try-with-resources guarantees closure.",
      "topic": "Socket Descriptor Leak Prevention",
      "type": "scenario",
      "level": "easy",
      "strength": "Prevented operating system socket descriptor exhaustion with try-with-resources.",
      "weakness": "Always manage network sockets and file streams with try-with-resources to prevent descriptor leaks."
    },
    {
      "q": "What happens if an exception is thrown inside a `try` block, and ANOTHER exception is thrown inside the `finally` block?",
      "options": [
        "Both exceptions are merged into a list",
        "The exception thrown in the `finally` block suppresses and replaces the original exception from the `try` block, unless try-with-resources is used",
        "The program crashes before finally",
        "The finally exception is ignored"
      ],
      "answer": 1,
      "explain": "In traditional `try-finally`, an exception in `finally` swallows the original exception. Try-with-resources solves this by attaching suppressed exceptions via `e.addSuppressed()`.",
      "topic": "Suppressed Exceptions in Finally",
      "type": "theory",
      "level": "hard",
      "strength": "Understands how exceptions in finally mask original exceptions.",
      "weakness": "Traditional finally exceptions mask try exceptions; try-with-resources preserves them via suppressed exceptions."
    },
    {
      "q": "Why does this code cause a compilation error?\n```java\ntry {\n    String s = \"test\";\n} catch (java.io.IOException e) {\n    System.out.println(e);\n}\n```",
      "options": [
        "s is not used",
        "Unreachable catch block: exception `IOException` is never thrown in the body of the corresponding try statement",
        "IOException cannot be caught",
        "String cannot be in try"
      ],
      "answer": 1,
      "explain": "The compiler strictly forbids catching a checked exception that is provably never thrown by any statement within the `try` block.",
      "topic": "Unreachable Catch for Unthrown Checked Exception",
      "type": "error",
      "level": "hard",
      "strength": "Recognized compiler rejection of catching checked exceptions never thrown in try block.",
      "weakness": "The compiler rejects catching checked exceptions that cannot possibly be thrown in the try block."
    },
    {
      "q": "What does this code print?\n```java\ntry {\n    throw new Exception(\"A\");\n} catch (Exception e) {\n    System.out.print(e.getMessage() + \" \");\n    throw new RuntimeException(\"B\");\n} finally {\n    System.out.print(\"C \");\n}\n```",
      "options": [
        "A C followed by uncaught RuntimeException B",
        "A B C ",
        "A C ",
        "Error"
      ],
      "answer": 0,
      "explain": "Catch block prints `\"A \"` and throws `RuntimeException(\"B\")`. Before the exception propagates out, `finally` executes, printing `\"C \"`. Then `RuntimeException: B` terminates the program.",
      "topic": "Finally Executes Before Rethrown Exception Propagates",
      "type": "output",
      "level": "hard",
      "strength": "Mastered that finally executes even when a catch block rethrows an exception.",
      "weakness": "`finally` executes before rethrown exception propagates out: prints `A C ` then throws."
    },
    {
      "q": "A payment processing class connects to an external gateway. To ensure that sensitive credit card numbers are NOT exposed in logs if an exception occurs, what practice should be followed in custom exception constructors?",
      "options": [
        "Store the raw card number in the exception message",
        "Sanitize and mask sensitive data (e.g. `\"Card ending in \" + last4`) before constructing the exception message, ensuring raw card numbers never enter stack traces or logs",
        "Never throw exceptions",
        "Convert credit card to int"
      ],
      "answer": 1,
      "explain": "Exception messages frequently get written to logs, APM tools, and consoles. Masking PII (Personally Identifiable Information) in exception messages prevents data leaks and compliance violations.",
      "topic": "PII Sanitization in Exception Messages",
      "type": "scenario",
      "level": "hard",
      "strength": "Applied PII data protection and masking in exception messaging.",
      "weakness": "Sanitize sensitive data (passwords, card numbers) before including them in exception messages."
    },
    {
      "q": "What is the difference between checked exceptions and unchecked exceptions in Java?",
      "options": [
        "Checked exceptions happen at compile time; unchecked happen at runtime",
        "Checked exceptions (subclasses of Exception excluding RuntimeException) are checked by the compiler and MUST be caught or declared; unchecked exceptions (RuntimeException and Error) are NOT enforced at compile time",
        "Checked exceptions cannot be caught",
        "Unchecked exceptions are fatal hardware crashes"
      ],
      "answer": 1,
      "explain": "The Java compiler enforces the Catch-or-Specify requirement strictly on checked exceptions. Unchecked exceptions (`RuntimeException`) represent programming logic defects.",
      "topic": "Checked vs Unchecked Exceptions",
      "type": "theory",
      "level": "easy",
      "strength": "Clearly distinguishes checked exceptions from unchecked runtime exceptions.",
      "weakness": "Checked exceptions must be caught or declared (`throws`); unchecked exceptions are not enforced by the compiler."
    },
    {
      "q": "Why does this try block fail to compile?\n```java\ntry {\n    System.out.println(\"Hello\");\n}\n```",
      "options": [
        "println cannot be in try",
        "Syntax error: 'try' without 'catch', 'finally', or resource declarations",
        "Hello must be in single quotes",
        "try is deprecated"
      ],
      "answer": 1,
      "explain": "A `try` statement must be followed by at least one `catch` block, a `finally` block, or declare resources in parentheses `try (...)`.",
      "topic": "Try Without Catch or Finally Error",
      "type": "error",
      "level": "easy",
      "strength": "Recognized invalid standalone try statement.",
      "weakness": "A `try` block must be accompanied by at least one `catch`, `finally`, or resource header."
    },
    {
      "q": "What does this code print?\n```java\ntry {\n    int a = 10 / 2;\n    System.out.print(\"Success \");\n} catch (ArithmeticException e) {\n    System.out.print(\"Catch \");\n} finally {\n    System.out.print(\"Finally \");\n}\n```",
      "options": [
        "Success Finally ",
        "Success ",
        "Catch Finally ",
        "Success Catch Finally "
      ],
      "answer": 0,
      "explain": "No exception occurs. The try block prints `\"Success \"`. Catch block is skipped. Finally block executes, printing `\"Finally \"`. Output: `Success Finally `.",
      "topic": "No-Exception Try-Catch-Finally Path",
      "type": "output",
      "level": "easy",
      "strength": "Traced exception-free execution path.",
      "weakness": "Without exceptions, catch is bypassed and finally executes: `Success Finally `."
    },
    {
      "q": "A multi-threaded analytics pipeline uses worker threads to process chunks. If a worker thread throws an uncaught exception, how can an application install a safety net to log it before the thread dies?",
      "options": [
        "`Thread.setDefaultUncaughtExceptionHandler((thread, throwable) -> logger.error(...))`",
        "Wrap the whole operating system in try-catch",
        "Make all threads daemon",
        "Check thread status in a while loop"
      ],
      "answer": 0,
      "explain": "`Thread.setDefaultUncaughtExceptionHandler()` establishes a global JVM callback for any thread that encounters an unhandled exception, ensuring diagnostics are captured before death.",
      "topic": "UncaughtExceptionHandler Global Safety Net",
      "type": "scenario",
      "level": "medium",
      "strength": "Used UncaughtExceptionHandler as a safety net for multi-threaded systems.",
      "weakness": "Set an `UncaughtExceptionHandler` to log unexpected exceptions on worker threads before termination."
    },
    {
      "q": "Can a `catch` block rethrow an exception?",
      "options": [
        "No, once caught an exception is erased",
        "Yes, a catch block can rethrow the caught exception (`throw e;`) or wrap and throw a new exception after performing partial cleanup or logging",
        "Only in Java 17+",
        "Only if marked with final"
      ],
      "answer": 1,
      "explain": "Rethrowing allows catching an exception to perform local logging or rollbacks, and then re-throwing it so outer layers are notified of the failure.",
      "topic": "Exception Rethrowing Pattern",
      "type": "theory",
      "level": "easy",
      "strength": "Understands rethrowing exceptions from catch blocks.",
      "weakness": "A catch block can log or clean up and then rethrow the exception using `throw e;`."
    },
    {
      "q": "A high-speed trading system validates stock trade orders. A method checks: `quantity > 0`, `ticker != null`, `price > 0.0`. If any check fails, what exception should be thrown?",
      "options": [
        "`IllegalArgumentException` with a specific descriptive error message",
        "`NullPointerException` for all three",
        "`ArithmeticException`",
        "`ClassNotFoundException`"
      ],
      "answer": 0,
      "explain": "`IllegalArgumentException` with a precise message (`\"Order quantity must be positive: \" + quantity`) makes debugging instantaneous for API consumers.",
      "topic": "Precondition Enforcement with Descriptive Messages",
      "type": "scenario",
      "level": "easy",
      "strength": "Formulated informative IllegalArgumentException messages for precondition violations.",
      "weakness": "Include the invalid argument value in the `IllegalArgumentException` message for rapid diagnosis."
    },
    {
      "q": "Can an overriding method in a subclass declare FEWER checked exceptions in its `throws` clause than the superclass method?",
      "options": [
        "No, it must declare the exact same list",
        "Yes! An overriding method can declare fewer checked exceptions, or even NO checked exceptions at all",
        "Only if it is marked private",
        "Only if it returns void"
      ],
      "answer": 1,
      "explain": "An overriding method cannot declare broader or new checked exceptions, but it is completely free to narrow the list, declare subclasses, or declare NO exceptions at all.",
      "topic": "Narrowing Throws Clause in Overriding",
      "type": "theory",
      "level": "hard",
      "strength": "Mastered exception narrowing rules in method overriding.",
      "weakness": "Overriding methods can declare fewer checked exceptions or omit the `throws` clause entirely."
    },
    {
      "q": "Why does this code cause a compiler error?\n```java\npublic void check() {\n    throw null;\n}\n```",
      "options": [
        "throw cannot take null",
        "It compiles! Throwing `null` is valid syntax, but throws a `NullPointerException` at runtime when executed",
        "check must be static",
        "check must return Object"
      ],
      "answer": 1,
      "explain": "`throw null;` is syntactically valid in Java. However, at runtime the JVM attempts to dereference it to inspect the exception object, throwing a `NullPointerException`.",
      "topic": "Throwing Null Literal Runtime Behavior",
      "type": "error",
      "level": "hard",
      "strength": "Understands that throw null compiles but raises NPE at runtime.",
      "weakness": "`throw null` compiles cleanly but throws `NullPointerException` at runtime."
    },
    {
      "q": "What does this code print?\n```java\npublic static int test() {\n    try {\n        return 1;\n    } finally {\n        return 2;\n    }\n}\npublic static void main(String[] args) {\n    System.out.println(test());\n}\n```",
      "options": [
        "1",
        "2",
        "3",
        "Compilation error"
      ],
      "answer": 1,
      "explain": "The `finally` block always executes before the method returns. The `return 2;` in `finally` overwrites the pending `return 1;`. Outputs 2.",
      "topic": "Finally Return Overrides Try Return Output",
      "type": "output",
      "level": "medium",
      "strength": "Recognized that return in finally overrides return in try.",
      "weakness": "`finally` executes before method returns; `return 2` in finally overrides `return 1`."
    },
    {
      "q": "A REST API client sends payment requests over the internet. Network timeouts (`SocketTimeoutException`) occur intermittently due to mobile connectivity drops. What is the resilient exception handling pattern?",
      "options": [
        "Crash the mobile app on the first timeout",
        "Retry pattern: catch the timeout exception in a loop with exponential backoff (e.g. up to 3 retries), only failing if all retries are exhausted",
        "Ignore the error and assume payment succeeded",
        "Throw an OutOfMemoryError"
      ],
      "answer": 1,
      "explain": "Transient network exceptions should be handled using retry loops with exponential backoff before surfacing errors to the user.",
      "topic": "Transient Network Retry Pattern",
      "type": "scenario",
      "level": "medium",
      "strength": "Applied exponential backoff retry pattern for transient I/O exceptions.",
      "weakness": "Catch transient network exceptions and retry with exponential backoff before aborting."
    },
    {
      "q": "Which of the following is an UNCHECKED (runtime) exception in Java?",
      "options": [
        "`java.io.IOException`",
        "`java.io.FileNotFoundException`",
        "`java.lang.NullPointerException`",
        "`java.lang.ClassNotFoundException`"
      ],
      "answer": 2,
      "explain": "`NullPointerException` is a subclass of `RuntimeException`, making it an unchecked exception. The others are checked exceptions.",
      "topic": "Unchecked Exception Identification",
      "type": "theory",
      "level": "easy",
      "strength": "Identifies NullPointerException as an unchecked RuntimeException.",
      "weakness": "`NullPointerException`, `ArrayIndexOutOfBoundsException`, and `ArithmeticException` are unchecked."
    },
    {
      "q": "What is wrong with this code?\n```java\ntry {\n    int a = 5;\n} catch (ArithmeticException e) {\n    System.out.println(a);\n}\n```",
      "options": [
        "ArithmeticException cannot be caught",
        "Cannot find symbol: variable 'a' is local to the try block and cannot be accessed inside the catch block",
        "a is not divided",
        "e is not used"
      ],
      "answer": 1,
      "explain": "Variables declared inside the `try` block are block-scoped to that block. They are out of scope inside `catch` and `finally` blocks.",
      "topic": "Try Block Variable Scope Error",
      "type": "error",
      "level": "easy",
      "strength": "Caught referencing try-scoped variable in catch block.",
      "weakness": "Variables declared inside a try block are out of scope in catch and finally blocks."
    },
    {
      "q": "What does this code print?\n```java\npublic static void m() {\n    try {\n        System.out.print(\"A \");\n        return;\n    } finally {\n        System.out.print(\"B \");\n    }\n}\npublic static void main(String[] args) {\n    m();\n    System.out.print(\"C \");\n}\n```",
      "options": [
        "A B C ",
        "A C B ",
        "A B ",
        "A C "
      ],
      "answer": 0,
      "explain": "`m()` prints `\"A \"`. The `return` statement triggers `finally`, which prints `\"B \"`. Method returns to `main`, which prints `\"C \"`. Output: `A B C `.",
      "topic": "Return Triggers Finally Output",
      "type": "output",
      "level": "easy",
      "strength": "Understands that return in try executes finally before returning to caller.",
      "weakness": "Return in try executes finally before returning: `A B C `."
    },
    {
      "q": "An audio recording studio app records microphone input to a WAV file. If the user unplugs the microphone midway, a `HardwareDisconnectedException` is thrown. How does try-with-resources ensure the file header is written cleanly before closing?",
      "options": [
        "It doesn't close the file",
        "The audio writer's `close()` method is called automatically, which finalizes the WAV file header (writing total sample frames recorded so far) before closing the file descriptor",
        "It deletes the recording",
        "It restarts the computer"
      ],
      "answer": 1,
      "explain": "Automatic invocation of `close()` via try-with-resources gives encoders the opportunity to flush headers and finalize partial data safely before exiting.",
      "topic": "Clean File Finalization via AutoCloseable",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands that AutoCloseable.close() executes file header finalization during unexpected aborts.",
      "weakness": "Try-with-resources guarantees `close()` execution, allowing file writers to finalize headers safely."
    },
    {
      "q": "Can a `try` block exist with ONLY a `finally` block (no `catch` blocks)?",
      "options": [
        "No, every try requires at least one catch block",
        "Yes, a `try-finally` block is completely valid syntax, commonly used to ensure cleanup code runs even when exceptions are allowed to propagate upward",
        "Only in Java 8+",
        "Only if no checked exceptions are thrown"
      ],
      "answer": 1,
      "explain": "`try { ... } finally { ... }` is legal syntax, guaranteeing cleanup while allowing exceptions to propagate unhindered to callers.",
      "topic": "Try-Finally Without Catch",
      "type": "theory",
      "level": "easy",
      "strength": "Knows that try-finally without catch is valid syntax.",
      "weakness": "`try-finally` without `catch` is valid and ensures cleanup while propagating exceptions."
    },
    {
      "q": "Why does this code cause a compiler error?\n```java\npublic void divide(int a, int b) {\n    if (b == 0) {\n        throw new ArithmeticException(\"Zero\");\n        System.out.println(\"Failed\");\n    }\n}\n```",
      "options": [
        "ArithmeticException cannot take string",
        "Unreachable statement: `System.out.println` appears immediately after an unconditional `throw` statement",
        "b == 0 is invalid",
        "divide must return int"
      ],
      "answer": 1,
      "explain": "An unconditional `throw` statement terminates the current execution path immediately. Any statement placed directly after it is unreachable.",
      "topic": "Unreachable Code After Throw",
      "type": "error",
      "level": "easy",
      "strength": "Caught unreachable statement following unconditional throw.",
      "weakness": "Statements placed immediately after an unconditional `throw` are unreachable."
    },
    {
      "q": "Under what extreme circumstance will a `finally` block NOT execute?",
      "options": [
        "If an unhandled exception is thrown",
        "If the method returns null",
        "If the JVM process is terminated abruptly (e.g. `System.exit(0)` or catastrophic JVM crash/power loss)",
        "If the try block has a return statement"
      ],
      "answer": 2,
      "explain": "A `finally` block executes under all normal Java execution conditions, EXCEPT when `System.exit(status)` is called or the underlying OS process/JVM crashes.",
      "topic": "Finally Block Bypassing via System.exit",
      "type": "theory",
      "level": "medium",
      "strength": "Understands that System.exit() halts the JVM before finally executes.",
      "weakness": "`finally` blocks do not run if `System.exit(0)` terminates the JVM process."
    },
    {
      "q": "Why does this multi-catch block fail to compile?\n```java\ntry {\n    // work\n} catch (IOException | SQLException e) {\n    e = new IOException();\n}\n```",
      "options": [
        "SQLException is not imported",
        "Cannot assign a value to final variable 'e': multi-catch parameters are implicitly `final` and cannot be reassigned",
        "catch cannot take new",
        "IOException has no no-arg constructor"
      ],
      "answer": 1,
      "explain": "In Java multi-catch, the exception parameter `e` is implicitly `final`. Reassigning `e` causes a compilation error.",
      "topic": "Multi-Catch Parameter Reassignment Error",
      "type": "error",
      "level": "medium",
      "strength": "Understands that multi-catch parameters are implicitly final.",
      "weakness": "Multi-catch parameters are implicitly `final` and cannot be reassigned."
    },
    {
      "q": "What is the output of this code?\n```java\ntry {\n    try {\n        throw new ArithmeticException(\"Inner\");\n    } finally {\n        System.out.print(\"F1 \");\n    }\n} catch (Exception e) {\n    System.out.print(\"C1 \");\n}\n```",
      "options": [
        "F1 C1 ",
        "C1 F1 ",
        "F1 ",
        "C1 "
      ],
      "answer": 0,
      "explain": "The inner exception triggers the inner `finally` block first, printing `\"F1 \"`. The exception propagates to the outer `catch` block, printing `\"C1 \"`. Output: `F1 C1 `.",
      "topic": "Nested Try-Finally Propagation Output",
      "type": "output",
      "level": "medium",
      "strength": "Traced exception propagation through nested try-finally blocks.",
      "weakness": "Inner finally runs before outer catch block executes: `F1 C1 `."
    },
    {
      "q": "A banking service executes a multi-step fund transfer (deducting from Account A, crediting Account B). If crediting Account B throws an unexpected exception, how does exception handling guarantee transactional integrity?",
      "options": [
        "Ignore the exception and let Account B stay empty",
        "Catch the exception, execute a compensating transaction (rollback) to refund Account A, and rethrow a `TransferFailedException`",
        "Restart the JVM",
        "Call System.gc()"
      ],
      "answer": 1,
      "explain": "When a multi-step operation fails midway, catching the exception allows rolling back previous operations to maintain database consistency before propagating the error.",
      "topic": "Transactional Compensating Rollback Pattern",
      "type": "scenario",
      "level": "medium",
      "strength": "Implemented compensating rollback in multi-step business transactions.",
      "weakness": "Catch exceptions midway through multi-step transactions to execute rollback actions before rethrowing."
    },
    {
      "q": "Which of the following is a CHECKED exception in Java?",
      "options": [
        "`java.lang.ArithmeticException`",
        "`java.io.IOException`",
        "`java.lang.ArrayIndexOutOfBoundsException`",
        "`java.lang.ClassCastException`"
      ],
      "answer": 1,
      "explain": "`IOException` is a checked exception directly inheriting from `Exception`. The others are subclasses of `RuntimeException` (unchecked).",
      "topic": "Checked Exception Identification",
      "type": "theory",
      "level": "easy",
      "strength": "Identifies IOException as a checked exception.",
      "weakness": "`IOException`, `FileNotFoundException`, and `SQLException` are checked exceptions."
    },
    {
      "q": "What error occurs in this method definition?\n```java\npublic void process() throw Exception {\n    // work\n}\n```",
      "options": [
        "Exception cannot be thrown",
        "Syntax error: the keyword for method declarations is `throws` (plural), not `throw`",
        "process must return int",
        "Missing try block"
      ],
      "answer": 1,
      "explain": "In method headers, use `throws Exception` (plural). `throw` (singular) is an executable statement inside method bodies.",
      "topic": "Throw vs Throws Keyword Mix-up",
      "type": "error",
      "level": "easy",
      "strength": "Caught `throw` keyword mistakenly used in method header.",
      "weakness": "Use `throws` in method headers and `throw` inside method bodies."
    },
    {
      "q": "What is the output of this code?\n```java\ntry {\n    throw new IllegalArgumentException();\n} catch (NullPointerException | ArithmeticException e) {\n    System.out.print(\"One \");\n} catch (RuntimeException e) {\n    System.out.print(\"Two \");\n}\n```",
      "options": [
        "One ",
        "Two ",
        "One Two ",
        "Uncaught exception"
      ],
      "answer": 1,
      "explain": "`IllegalArgumentException` does not match `NullPointerException` or `ArithmeticException`. It falls through to `catch (RuntimeException e)`, printing `\"Two \"`.",
      "topic": "Multi-Catch Mismatch Fall-Through Output",
      "type": "output",
      "level": "easy",
      "strength": "Traced exception matching and fall-through across multiple catch blocks.",
      "weakness": "`IllegalArgumentException` bypasses first catch and matches `RuntimeException`: `Two `."
    },
    {
      "q": "A system architect audits code quality. A developer wrote a method with `public void load() throws Exception`. Why does declaring generic `throws Exception` degrade code quality?",
      "options": [
        "Java limits throws to 10 characters",
        "It hides the specific failure modes from callers, forcing callers to either catch generic `Exception` (which catches runtime exceptions accidentally) or re-declare generic `throws Exception` (violating precise contract design)",
        "Exception cannot be declared in throws",
        "It makes methods abstract"
      ],
      "answer": 1,
      "explain": "Declaring generic `throws Exception` erodes the precision of method contracts. Methods should declare specific exceptions (`throws IOException, SQLException`) so callers can handle each appropriately.",
      "topic": "Specific Exception Declaration vs Generic Throws",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands the importance of specific exception declarations over generic `throws Exception`.",
      "weakness": "Declare specific checked exceptions (`throws IOException`) rather than generic `throws Exception`."
    },
    {
      "q": "What is the `getMessage()` method in `Throwable`?",
      "options": [
        "Returns the operating system version",
        "Returns the detailed error message string passed when the exception object was constructed, or null if none was provided",
        "Returns the line number",
        "Returns the stack trace"
      ],
      "answer": 1,
      "explain": "`getMessage()` retrieves the human-readable explanation message supplied during exception instantiation: `new Exception(\"Detailed message\")`.",
      "topic": "Throwable getMessage Method",
      "type": "theory",
      "level": "easy",
      "strength": "Knows the purpose of getMessage() in Throwable.",
      "weakness": "`e.getMessage()` returns the descriptive error message string of the exception."
    },
    {
      "q": "What is the compilation issue in this code?\n```java\ntry {\n    // work\n} catch (IOException e) {\n} catch (IOException e) {\n}\n```",
      "options": [
        "IOException cannot be caught",
        "Exception `IOException` has already been caught: duplicate catch block for the same exception type",
        "e cannot be used twice",
        "try is empty"
      ],
      "answer": 1,
      "explain": "Multiple catch blocks cannot catch the exact same exception type within the same try statement.",
      "topic": "Duplicate Catch Block Error",
      "type": "error",
      "level": "easy",
      "strength": "Recognized duplicate catch block for identical exception type.",
      "weakness": "A try statement cannot have duplicate catch blocks for the same exception type."
    },
    {
      "q": "What rule governs the ordering of multiple `catch` blocks for related exception classes?",
      "options": [
        "Catch blocks must be arranged from most general (superclass) to most specific (subclass)",
        "Catch blocks must be arranged from most specific (subclass) to most general (superclass), otherwise the compiler rejects unreachable catch blocks",
        "Catch blocks can be in any random order",
        "Only one catch block is permitted per try"
      ],
      "answer": 1,
      "explain": "Because exceptions are caught by the first matching block, placing a superclass (e.g. `Exception`) before a subclass (e.g. `IOException`) makes the subclass unreachable, causing a compile error.",
      "topic": "Catch Block Ordering Hierarchy",
      "type": "theory",
      "level": "medium",
      "strength": "Understands specific-to-general ordering requirements for catch blocks.",
      "weakness": "Arrange catch blocks from most specific subclass to most general superclass."
    },
    {
      "q": "Why does this code fail to compile?\n```java\npublic class CustomException extends Throwable {\n    public void test() {\n        throw this;\n    }\n}\n// in caller:\npublic void run() {\n    new CustomException().test();\n}\n```",
      "options": [
        "CustomException cannot extend Throwable",
        "Unreported exception `CustomException`: classes extending `Throwable` directly are treated as checked exceptions and must be declared or caught",
        "throw this is illegal",
        "test must return void"
      ],
      "answer": 1,
      "explain": "`Throwable` and direct subclasses of `Throwable` (that do not extend `RuntimeException`) are checked exceptions and require handling.",
      "topic": "Direct Throwable Subclass is Checked Exception",
      "type": "error",
      "level": "medium",
      "strength": "Understands that direct subclasses of Throwable are checked.",
      "weakness": "Direct subclasses of `Throwable` are checked exceptions requiring handling."
    },
    {
      "q": "What is the output of this code?\n```java\ntry {\n    throw new Exception(\"Error1\");\n} catch (Exception e) {\n    try {\n        throw new Exception(\"Error2\");\n    } catch (Exception ex) {\n        System.out.print(ex.getMessage() + \" \");\n    }\n    System.out.print(e.getMessage());\n}\n```",
      "options": [
        "Error2 Error1",
        "Error1 Error2",
        "Error1",
        "Error2"
      ],
      "answer": 0,
      "explain": "Inner catch handles `ex` and prints `\"Error2 \"`. Then outer catch prints `e.getMessage()` (`\"Error1\"`). Output: `Error2 Error1`.",
      "topic": "Nested Catch Block Scopes Output",
      "type": "output",
      "level": "medium",
      "strength": "Traced separate exception scopes in nested try-catch blocks.",
      "weakness": "Inner catch prints Error2, then outer code prints Error1: `Error2 Error1`."
    },
    {
      "q": "A microservice catches a low-level `java.sql.SQLException: Connection timeout` when querying the user database. How should this exception be translated before passing it to the UI presentation layer?",
      "options": [
        "Expose raw SQL query text and database port to the user in a popup",
        "Exception Translation (Chaining): wrap the low-level technical exception into a domain exception: `throw new ServiceUnavailableException(\"User service temporarily unavailable\", sqlEx);`",
        "Ignore the exception and return null",
        "Throw an Error"
      ],
      "answer": 1,
      "explain": "Exception translation shields calling layers from low-level database details, preventing information leakage while preserving the underlying cause for debugging.",
      "topic": "Exception Translation & Information Hiding",
      "type": "scenario",
      "level": "medium",
      "strength": "Applied exception translation to prevent leaking low-level infrastructure details.",
      "weakness": "Translate low-level technical exceptions into high-level domain exceptions using exception chaining."
    },
    {
      "q": "What is the purpose of the `finally` block in a `try-catch-finally` structure?",
      "options": [
        "It only executes if an exception occurs",
        "It executes ALWAYS, whether an exception was thrown, caught, or not thrown at all, ensuring cleanup code runs reliably",
        "It executes only if no exception occurs",
        "It catches uncaught errors"
      ],
      "answer": 1,
      "explain": "The `finally` block is guaranteed to execute following a `try` block (even if a `return` statement is executed inside `try` or `catch`), making it ideal for resource cleanup.",
      "topic": "Finally Block Guarantee",
      "type": "theory",
      "level": "easy",
      "strength": "Understands that the finally block executes unconditionally.",
      "weakness": "The `finally` block always executes regardless of whether an exception occurred."
    },
    {
      "q": "What is the compilation issue in this code?\n```java\ntry {\n    int x = 1;\n} finally {\n    System.out.println(\"Finally\");\n} catch (Exception e) {\n    System.out.println(\"Catch\");\n}\n```",
      "options": [
        "try-finally cannot have catch",
        "Syntax error: `catch` block cannot follow `finally`; `catch` blocks must precede `finally`",
        "println cannot be in finally",
        "x is not modified"
      ],
      "answer": 1,
      "explain": "In a `try-catch-finally` statement, all `catch` blocks must appear BEFORE the `finally` block.",
      "topic": "Misplaced Catch Block After Finally",
      "type": "error",
      "level": "easy",
      "strength": "Spotted catch block placed after finally block.",
      "weakness": "Catch blocks must strictly precede the `finally` block."
    },
    {
      "q": "What does this code print?\n```java\ntry {\n    int[] a = null;\n    System.out.print(a.length);\n} catch (NullPointerException e) {\n    System.out.print(\"Null \");\n} catch (Exception e) {\n    System.out.print(\"Ex \");\n}\n```",
      "options": [
        "Null ",
        "Ex ",
        "0 ",
        "Null Ex "
      ],
      "answer": 0,
      "explain": "`a.length` on a null reference throws `NullPointerException`, caught by the first matching catch block. Prints `Null `.",
      "topic": "NullPointerException First Match Output",
      "type": "output",
      "level": "easy",
      "strength": "Identified first matching catch block for NullPointerException.",
      "weakness": "The first matching catch block (`NullPointerException`) handles the error: `Null `."
    },
    {
      "q": "You are building an ATM software application in Java. A customer attempts to withdraw RM 1,000 from an account with only RM 200. What is the standard object-oriented exception handling approach?",
      "options": [
        "Return `-1` and let the caller guess what went wrong",
        "Throw a custom domain exception `throw new InsufficientFundsException(\"Required: 1000, Available: 200\");`",
        "Print 'Error' to the screen and continue processing",
        "Call `System.exit(0)` immediately"
      ],
      "answer": 1,
      "explain": "Throwing a custom business exception (`InsufficientFundsException`) cleanly communicates the failure reason to the caller with structured context, preventing corrupted state.",
      "topic": "Custom Business Exception Design",
      "type": "scenario",
      "level": "easy",
      "strength": "Designed custom domain exception for business rule violations.",
      "weakness": "Use custom domain exceptions (e.g. `InsufficientFundsException`) to signal business rule violations."
    },
    {
      "q": "What is an empty catch block (`catch (Exception e) {}`) and why is it dangerous?",
      "options": [
        "A syntax error",
        "An anti-pattern known as 'swallowing exceptions': it silences errors completely without logging or recovery, making bugs invisible and impossible to debug",
        "A recommended way to improve performance",
        "A way to restart the JVM"
      ],
      "answer": 1,
      "explain": "Swallowing exceptions silently hides failures. The application continues running in a corrupted state with zero diagnostic logs.",
      "topic": "Swallowing Exceptions Anti-Pattern",
      "type": "theory",
      "level": "easy",
      "strength": "Identifies the danger of empty catch blocks.",
      "weakness": "Never leave catch blocks empty; at minimum log the error or rethrow it."
    },
    {
      "q": "Why does this code throw a runtime exception?\n```java\nint[] arr = new int[5];\nSystem.out.println(arr[-1]);\n```",
      "options": [
        "Returns 0",
        "Throws `ArrayIndexOutOfBoundsException: Index -1 out of bounds for length 5`",
        "Returns null",
        "Compilation error"
      ],
      "answer": 1,
      "explain": "Negative indices are out of bounds in Java and throw `ArrayIndexOutOfBoundsException`.",
      "topic": "Negative Index ArrayIndexOutOfBoundsException",
      "type": "error",
      "level": "easy",
      "strength": "Identified ArrayIndexOutOfBoundsException on negative array index.",
      "weakness": "Array indices must be non-negative; negative indices throw `ArrayIndexOutOfBoundsException`."
    },
    {
      "q": "What is the multi-catch feature (introduced in Java 7)?",
      "options": [
        "Catching an exception in multiple threads",
        "Handling multiple distinct exception types in a single catch block using the pipe `|` operator: `catch (IOException | SQLException e)`",
        "Having multiple finally blocks",
        "Catching exceptions without a try block"
      ],
      "answer": 1,
      "explain": "Multi-catch reduces boilerplate by grouping unrelated exceptions in one block: `catch (IOException | SQLException e)`. In multi-catch, parameter `e` is implicitly `final`.",
      "topic": "Multi-Catch Syntax",
      "type": "theory",
      "level": "medium",
      "strength": "Understands multi-catch syntax and semantics.",
      "weakness": "Multi-catch groups exception types with `|`: `catch (IOException | SQLException e)`."
    },
    {
      "q": "Why does this code fail to compile?\n```java\nclass Base {\n    public void load() throws java.io.IOException {}\n}\nclass Sub extends Base {\n    @Override\n    public void load() throws Exception {}\n}\n```",
      "options": [
        "IOException cannot be thrown",
        "`load()` in `Sub` cannot override `load()` in `Base`: overridden method does not throw `Exception` (subclass cannot throw broader checked exception `Exception`)",
        "Sub must be abstract",
        "load must return int"
      ],
      "answer": 1,
      "explain": "An overriding method cannot declare broader checked exceptions. `Exception` is broader than `IOException`, violating method overriding rules.",
      "topic": "Broader Checked Exception in Overriding Error",
      "type": "error",
      "level": "medium",
      "strength": "Spotted illegal broader checked exception in overriding method.",
      "weakness": "Overriding methods cannot declare broader checked exceptions than the superclass method."
    },
    {
      "q": "What is the output of this code?\n```java\ntry {\n    throw new RuntimeException(\"Test\");\n} catch (RuntimeException e) {\n    System.out.println(e.getCause());\n}\n```",
      "options": [
        "null",
        "Test",
        "RuntimeException",
        "Error"
      ],
      "answer": 0,
      "explain": "When an exception is instantiated without a cause parameter, `e.getCause()` returns `null`.",
      "topic": "Unchained Exception getCause Output",
      "type": "output",
      "level": "medium",
      "strength": "Understands that unchained exceptions have null getCause().",
      "weakness": "`e.getCause()` returns `null` when no underlying cause exception is wrapped."
    },
    {
      "q": "A batch import worker reads a CSV file with 10,000 rows. A developer uses `try { ... } catch (Exception e) {}` inside the loop with an empty catch block. What consequence will this have in production?",
      "options": [
        "The file import will be twice as fast",
        "Silent data loss: defective rows with missing fields will fail silently without inserting into the database, with zero log records to alert the operations team",
        "The computer will run out of memory",
        "The CSV will be deleted automatically"
      ],
      "answer": 1,
      "explain": "Swallowing exceptions creates silent failures where lost records go completely undetected, causing serious data discrepancies in production.",
      "topic": "Consequences of Swallowed Exceptions in Production",
      "type": "scenario",
      "level": "medium",
      "strength": "Recognized the severe business impact of swallowing exceptions in batch processing.",
      "weakness": "Never swallow exceptions; silent failures cause undetected data corruption and loss."
    },
    {
      "q": "What is the difference between the `throw` keyword and the `throws` keyword in Java?",
      "options": [
        "`throw` is used in method headers; `throws` is inside method bodies",
        "`throw` is an executable statement used to explicitly throw an exception instance; `throws` is a clause in a method declaration indicating exceptions the method might throw",
        "They are identical synonyms",
        "`throws` is only for custom exceptions"
      ],
      "answer": 1,
      "explain": "`throw new MyException();` throws an exception object. `void m() throws IOException` declares that the method may pass checked exceptions to its caller.",
      "topic": "Throw vs Throws Keywords",
      "type": "theory",
      "level": "easy",
      "strength": "Distinguishes throw statement from throws method clause.",
      "weakness": "`throw` triggers an exception instance; `throws` declares exception types in method headers."
    },
    {
      "q": "Identify the bug in this code:\n```java\nint x = 10;\ntry {\n    x = 20;\n    int y = 10 / 0;\n} catch (ArithmeticException e) {\n    // do nothing\n}\nSystem.out.println(x);\n```",
      "options": [
        "x is not updated",
        "Swallowing exception: x becomes 20 before the exception occurs, and the exception is silently ignored, leaving system in unexpected state with no error logs",
        "Compilation error",
        "y is printed"
      ],
      "answer": 1,
      "explain": "Swallowing the exception silently conceals the failure. While syntactically valid, it is a severe code defect.",
      "topic": "Silent Exception Swallowing Bug",
      "type": "error",
      "level": "easy",
      "strength": "Recognized silent exception swallowing defect.",
      "weakness": "Never swallow exceptions silently; log or handle them properly."
    },
    {
      "q": "What does this code print?\n```java\nclass MyException extends Exception {\n    public MyException(String m) { super(m); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            throw new MyException(\"Custom\");\n        } catch (MyException e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}\n```",
      "options": [
        "Custom",
        "MyException",
        "null",
        "Error"
      ],
      "answer": 0,
      "explain": "Custom exception passes \"Custom\" to `super(m)`. `e.getMessage()` returns `\"Custom\"`.",
      "topic": "Custom Exception getMessage Output",
      "type": "output",
      "level": "easy",
      "strength": "Retrieved custom exception message passed to super constructor.",
      "weakness": "`e.getMessage()` outputs `Custom`."
    },
    {
      "q": "A web application reads a JSON configuration file `config.json` on startup. If the file is missing, the application cannot function and must abort startup with a clear message. Why should `FileNotFoundException` be caught and handled at the application bootstrap entry point?",
      "options": [
        "To delete the database",
        "To log a descriptive, user-friendly error message informing the administrator of the missing configuration file, rather than spewing an unhandled raw stack trace crash",
        "To allow the app to run without configuration",
        "Because Java requires all files to be optional"
      ],
      "answer": 1,
      "explain": "Catching checked I/O exceptions at application boundaries allows logging clear, actionable diagnostic guidance for operators rather than crashing abruptly with raw stack traces.",
      "topic": "Graceful Bootstrap Failure Handling",
      "type": "scenario",
      "level": "easy",
      "strength": "Handled startup configuration exceptions with clear operator diagnostics.",
      "weakness": "Catch startup exceptions to display actionable diagnostic messages to administrators."
    },
    {
      "q": "What error occurs in this code snippet?\n```java\nObject x = Integer.valueOf(42);\nString s = (String) x;\n```",
      "options": [
        "Prints null",
        "Throws `ClassCastException: class java.lang.Integer cannot be cast to class java.lang.String`",
        "Converts to \"42\"",
        "Compilation error"
      ],
      "answer": 1,
      "explain": "An `Integer` instance cannot be cast to `String`. It throws `ClassCastException` at runtime.",
      "topic": "Integer to String ClassCastException",
      "type": "error",
      "level": "easy",
      "strength": "Identified ClassCastException on invalid type cast.",
      "weakness": "Casting incompatible types (Integer to String) throws `ClassCastException`."
    },
    {
      "q": "What does this code print?\n```java\ntry {\n    int[] arr = {1, 2};\n    System.out.print(arr[1] + \" \");\n} finally {\n    System.out.print(\"F \");\n}\n```",
      "options": [
        "2 F ",
        "F 2 ",
        "2 ",
        "F "
      ],
      "answer": 0,
      "explain": "`arr[1]` is 2 (prints `\"2 \"`). Finally block prints `\"F \"`. Output: `2 F `.",
      "topic": "Normal Flow with Valid Array Access Output",
      "type": "output",
      "level": "easy",
      "strength": "Traced valid array access through try-finally block.",
      "weakness": "Valid access prints 2, followed by finally block F: `2 F `."
    },
    {
      "q": "What is exception propagation in Java?",
      "options": [
        "Converting checked exceptions to errors",
        "The automatic unwinding of the thread call stack: if an exception is not caught in the current method, it is passed up to the calling method, continuing until caught or terminating the thread",
        "Writing exceptions to a database",
        "Catching exceptions in a loop"
      ],
      "answer": 1,
      "explain": "When an exception occurs, the JVM searches the call stack backwards (unwinding stack frames) until a matching `catch` block is located.",
      "topic": "Exception Stack Unwinding & Propagation",
      "type": "theory",
      "level": "medium",
      "strength": "Understands call stack unwinding during exception propagation.",
      "weakness": "Exceptions propagate up the call stack until caught or terminating the thread."
    },
    {
      "q": "Why does this code fail to compile?\n```java\npublic class Test {\n    public static void main(String[] args) throws RuntimeException {\n        throw new Exception();\n    }\n}\n```",
      "options": [
        "RuntimeException cannot be declared in throws",
        "Unreported exception `java.lang.Exception`: `main` declares `throws RuntimeException` (unchecked), but throws `Exception` (checked)",
        "throw cannot be in main",
        "Exception has no constructor"
      ],
      "answer": 1,
      "explain": "`Exception` is a checked exception. Declaring `throws RuntimeException` does not satisfy the compiler because `Exception` is a superclass of `RuntimeException`, not a subclass.",
      "topic": "Insufficient Throws Declaration Error",
      "type": "error",
      "level": "medium",
      "strength": "Understands that declaring RuntimeException does not cover checked Exception.",
      "weakness": "Declaring `throws RuntimeException` does not satisfy checked `Exception` throws."
    },
    {
      "q": "What is the output of the following code?\n```java\ntry {\n    System.out.print(\"A \");\n    int x = 10 / 0;\n    System.out.print(\"B \");\n} catch (ArithmeticException e) {\n    System.out.print(\"C \");\n} finally {\n    System.out.print(\"D \");\n}\nSystem.out.print(\"E \");\n```",
      "options": [
        "A C D E ",
        "A B C D E ",
        "A D E ",
        "A C D "
      ],
      "answer": 0,
      "explain": "1) Prints `\"A \"`. 2) `10 / 0` throws `ArithmeticException` (skipping `\"B \"`). 3) Catch block runs, printing `\"C \"`. 4) Finally block runs, printing `\"D \"`. 5) Normal flow resumes, printing `\"E \"`. Output: `A C D E `.",
      "topic": "Try-Catch-Finally Execution Order Output",
      "type": "output",
      "level": "easy",
      "strength": "Traced try-catch-finally execution flow.",
      "weakness": "Execution flow: Try (before error) -> Catch -> Finally -> Following code: `A C D E `."
    },
    {
      "q": "A developer writes a custom `UserNotFoundException`. Should it extend `Exception` (checked) or `RuntimeException` (unchecked) if the user ID comes from an external URL parameter where missing users are expected normal occurrences?",
      "options": [
        "Extend `Throwable` directly",
        "Extend `RuntimeException` (or return `Optional<User>`): checked exceptions should not be used for expected, non-fatal flow control conditions",
        "Extend `Error`",
        "Exceptions cannot be used for users"
      ],
      "answer": 1,
      "explain": "Modern Java best practices discourage using checked exceptions for routine control flow. Use `RuntimeException` or `Optional<User>` instead.",
      "topic": "Checked vs Unchecked Design Choice",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands modern Java preferences for RuntimeException and Optional over checked exceptions for flow control.",
      "weakness": "Use unchecked exceptions or `Optional<T>` for expected business alternatives instead of checked exceptions."
    },
    {
      "q": "How do you define a custom CHECKED exception class in Java?",
      "options": [
        "Extend `java.lang.RuntimeException`",
        "Extend `java.lang.Exception` (or any existing checked exception subclass)",
        "Extend `java.lang.Throwable` directly",
        "Implement `java.lang.Runnable`"
      ],
      "answer": 1,
      "explain": "To create a checked exception, create a class that extends `java.lang.Exception` (excluding `RuntimeException`).",
      "topic": "Custom Checked Exception Creation",
      "type": "theory",
      "level": "easy",
      "strength": "Knows how to create custom checked exceptions by extending Exception.",
      "weakness": "Extend `java.lang.Exception` to create custom checked exceptions."
    },
    {
      "q": "What runtime exception is thrown by `Integer.parseInt(\"abc\")`?\n",
      "options": [
        "`java.lang.NumberFormatException`",
        "`InputMismatchException`",
        "`ClassCastException`",
        "`NullPointerException`"
      ],
      "answer": 0,
      "explain": "`Integer.parseInt()` throws `NumberFormatException` (a subclass of `IllegalArgumentException`) when the string does not contain a parsable integer.",
      "topic": "NumberFormatException",
      "type": "error",
      "level": "easy",
      "strength": "Identified NumberFormatException on unparsable string.",
      "weakness": "`Integer.parseInt()` throws `NumberFormatException` on invalid numeric strings."
    },
    {
      "q": "What is the output of this code?\n```java\ntry {\n    int x = 5 / 0;\n} catch (ArithmeticException e) {\n    System.out.print(\"Catch1 \");\n    try {\n        int y = 5 / 0;\n    } catch (ArithmeticException ex) {\n        System.out.print(\"Catch2 \");\n    }\n}\n```",
      "options": [
        "Catch1 Catch2 ",
        "Catch1 ",
        "Catch2 ",
        "Error"
      ],
      "answer": 0,
      "explain": "Outer catch runs, printing `\"Catch1 \"`. Inner division throws another exception, caught by the inner catch, printing `\"Catch2 \"`. Output: `Catch1 Catch2 `.",
      "topic": "Exception in Catch Block Handled by Nested Try",
      "type": "output",
      "level": "easy",
      "strength": "Traced exception thrown and caught within a catch block.",
      "weakness": "Exception thrown inside catch is caught by inner try-catch: `Catch1 Catch2 `."
    },
    {
      "q": "A student is writing an input validation function for user age. If the user enters a negative number or a value over 150, what built-in Java exception should be thrown?",
      "options": [
        "`NullPointerException`",
        "`java.lang.IllegalArgumentException`",
        "`ArithmeticException`",
        "`ClassNotFoundException`"
      ],
      "answer": 1,
      "explain": "`IllegalArgumentException` is the standard Java exception thrown to indicate that a method has been passed an illegal or inappropriate argument.",
      "topic": "IllegalArgumentException Validation Idiom",
      "type": "scenario",
      "level": "easy",
      "strength": "Selected IllegalArgumentException for invalid method parameters.",
      "weakness": "Throw `IllegalArgumentException` when method arguments fail domain validation rules."
    },
    {
      "q": "Why does this code fail to compile?\n```java\nvoid test() {\n    try {\n        int x = 5;\n    } catch (NullPointerException e1) {\n    } catch (NullPointerException e2) {\n    }\n}\n```",
      "options": [
        "NPE cannot be caught",
        "Compilation error: exception `NullPointerException` has already been caught",
        "e1 and e2 must have same name",
        "try has no code"
      ],
      "answer": 1,
      "explain": "Duplicate catch blocks for the exact same exception type violate Java syntax and are rejected at compile time.",
      "topic": "Duplicate Catch Type Syntax Error",
      "type": "error",
      "level": "easy",
      "strength": "Caught duplicate catch type declaration.",
      "weakness": "Cannot declare duplicate catch blocks for the same exception type."
    },
    {
      "q": "What is the output of this code?\n```java\ntry {\n    throw new ArithmeticException();\n} catch (Exception e) {\n    System.out.println(e.getClass().getSimpleName());\n}\n```",
      "options": [
        "ArithmeticException",
        "Exception",
        "Throwable",
        "Error"
      ],
      "answer": 0,
      "explain": "`e.getClass().getSimpleName()` inspects the runtime class of the caught object, which is `ArithmeticException`.",
      "topic": "Exception Runtime Class Introspection Output",
      "type": "output",
      "level": "easy",
      "strength": "Retrieved runtime exception class name.",
      "weakness": "`getClass().getSimpleName()` returns `ArithmeticException`."
    },
    {
      "q": "What is exception chaining (wrapped exceptions) in Java?",
      "options": [
        "Catching an exception and discarding it",
        "Wrapping an original low-level exception inside a higher-level domain exception as the 'cause' (`new DomainException(\"Failed\", cause)`), preserving the root cause stack trace",
        "Throwing 5 exceptions in a row",
        "Chaining catch blocks"
      ],
      "answer": 1,
      "explain": "Exception chaining allows a method to catch a low-level technical exception (e.g. `SQLException`) and throw a meaningful domain exception (`BankingException`) while retaining the original cause.",
      "topic": "Exception Chaining Pattern",
      "type": "theory",
      "level": "medium",
      "strength": "Understands preserving root causes via exception chaining.",
      "weakness": "Wrap low-level exceptions inside high-level exceptions using `new CustomException(msg, cause)`."
    },
    {
      "q": "Identify the bug in this code:\n```java\ntry {\n    int res = 10 / 0;\n} finally {\n    return;\n}\n```",
      "options": [
        "finally cannot have return",
        "The `return;` statement in `finally` swallows and completely discards the `ArithmeticException`, making the method return silently without throwing",
        "Compilation error",
        "Throws ArithmeticException"
      ],
      "answer": 1,
      "explain": "Executing `return` in `finally` aborts exception propagation, discarding the `ArithmeticException`. Callers will never know an error occurred.",
      "topic": "Swallowed Exception via Finally Return",
      "type": "error",
      "level": "medium",
      "strength": "Understands that finally return discards active exceptions.",
      "weakness": "A `return` in `finally` discards any pending exception, hiding errors."
    },
    {
      "q": "What does the following code print?\n```java\ntry {\n    System.out.print(\"1 \");\n    int[] arr = new int[2];\n    arr[5] = 10;\n    System.out.print(\"2 \");\n} catch (ArrayIndexOutOfBoundsException e) {\n    System.out.print(\"3 \");\n} finally {\n    System.out.print(\"4 \");\n}\n```",
      "options": [
        "1 3 4 ",
        "1 2 3 4 ",
        "1 4 ",
        "1 2 4 "
      ],
      "answer": 0,
      "explain": "`arr[5]` throws `ArrayIndexOutOfBoundsException`, skipping \"2 \". Catch block prints `\"3 \"`. Finally block prints `\"4 \"`. Output: `1 3 4 `.",
      "topic": "ArrayIndexOutOfBoundsException Catch Flow",
      "type": "output",
      "level": "easy",
      "strength": "Traced array bounds exception catch flow.",
      "weakness": "Exception skips line 2, executes catch (3), then finally (4): `1 3 4 `."
    },
    {
      "q": "A web server handles thousands of concurrent HTTP requests. If one request thread throws an unhandled `RuntimeException`, does it crash the entire web server?",
      "options": [
        "Yes, any unhandled exception crashes the entire operating system",
        "No: Java threads are independent execution units; an uncaught exception terminates only that individual request thread, while the server's thread pool continues serving other users",
        "All memory is wiped",
        "The server enters read-only mode"
      ],
      "answer": 1,
      "explain": "Threads execute independently. An unhandled exception terminates only the failing thread; the application server continues operating.",
      "topic": "Thread Isolation Under Failure",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands thread-level exception isolation in multi-threaded servers.",
      "weakness": "Unhandled exceptions terminate only the failing thread; sibling threads continue running."
    },
    {
      "q": "How do you define a custom UNCHECKED exception class in Java?",
      "options": [
        "Extend `java.lang.Exception` directly",
        "Extend `java.lang.RuntimeException`",
        "Extend `java.lang.Error`",
        "Implement `java.lang.AutoCloseable`"
      ],
      "answer": 1,
      "explain": "To create an unchecked (runtime) exception, create a class that extends `java.lang.RuntimeException`.",
      "topic": "Custom Unchecked Exception Creation",
      "type": "theory",
      "level": "easy",
      "strength": "Knows how to create custom unchecked exceptions by extending RuntimeException.",
      "weakness": "Extend `java.lang.RuntimeException` to create custom unchecked exceptions."
    },
    {
      "q": "What is the issue with this custom exception?\n```java\npublic class MyException {\n    public MyException(String msg) {}\n}\n// in method:\nthrow new MyException(\"Error\");\n```",
      "options": [
        "msg cannot be string",
        "Incompatible types: `MyException` cannot be converted to `java.lang.Throwable` (only subclasses of Throwable can be thrown)",
        "new is illegal with exceptions",
        "MyException has no constructor"
      ],
      "answer": 1,
      "explain": "In Java, only classes that extend `java.lang.Throwable` (or `Exception`/`RuntimeException`) can be used with the `throw` keyword.",
      "topic": "Non-Throwable Cannot Be Thrown Error",
      "type": "error",
      "level": "easy",
      "strength": "Caught attempting to throw an object that does not extend Throwable.",
      "weakness": "Classes thrown with `throw` must inherit from `java.lang.Throwable`."
    },
    {
      "q": "What does this code print?\n```java\nString s = \"123a\";\ntry {\n    int n = Integer.parseInt(s);\n    System.out.println(n);\n} catch (NumberFormatException e) {\n    System.out.println(\"Invalid\");\n}\n```",
      "options": [
        "Invalid",
        "123",
        "0",
        "NumberFormatException"
      ],
      "answer": 0,
      "explain": "`\"123a\"` contains the non-numeric character 'a', throwing `NumberFormatException`. Caught and prints `Invalid`.",
      "topic": "NumberFormatException Catch Output",
      "type": "output",
      "level": "easy",
      "strength": "Caught NumberFormatException from Integer.parseInt.",
      "weakness": "Unparsable string throws NumberFormatException, caught printing `Invalid`."
    },
    {
      "q": "A video game inventory system has a method `equipItem(int slotIndex)`. If the player provides an index that exceeds the inventory array size, what exception should be thrown?",
      "options": [
        "`java.lang.IndexOutOfBoundsException`",
        "`FileNotFoundException`",
        "`ArithmeticException`",
        "`ClassCastException`"
      ],
      "answer": 0,
      "explain": "`IndexOutOfBoundsException` signals that an index is out of range, making it the idiomatic choice for collection and array index violations.",
      "topic": "IndexOutOfBoundsException for Bounded State",
      "type": "scenario",
      "level": "easy",
      "strength": "Selected IndexOutOfBoundsException for out-of-range slot indices.",
      "weakness": "Throw `IndexOutOfBoundsException` when requested indices violate collection capacity."
    },
    {
      "q": "What does this code print?\n```java\nint res = 0;\ntry {\n    res = 100 / 10;\n} catch (Exception e) {\n    res = -1;\n} finally {\n    res += 5;\n}\nSystem.out.println(res);\n```",
      "options": [
        "15",
        "10",
        "-1",
        "4"
      ],
      "answer": 0,
      "explain": "Try block succeeds: `res = 10`. Catch is bypassed. Finally block executes: `res += 5` -> `10 + 5 = 15`. Outputs 15.",
      "topic": "Try Success with Finally Arithmetic",
      "type": "output",
      "level": "easy",
      "strength": "Computed cumulative variable changes in try and finally.",
      "weakness": "`10 + 5 = 15`."
    },
    {
      "q": "A file parser parses a configuration line `port = 8080`. When splitting by `=`, if the line is missing the `=` sign, `parts[1]` throws `ArrayIndexOutOfBoundsException`. How should the parser validate the split array?",
      "options": [
        "`if (parts.length < 2) throw new InvalidConfigurationException(\"Missing '=' in config line: \" + line);`",
        "Ignore the line silently",
        "Add a 0 to parts",
        "Restart the parser"
      ],
      "answer": 0,
      "explain": "Validating array length before accessing index 1 allows throwing a meaningful domain exception (`InvalidConfigurationException`) rather than a cryptic array bounds error.",
      "topic": "Defensive Array Length Guard in Parsing",
      "type": "scenario",
      "level": "easy",
      "strength": "Guarded array indexing to throw informative domain parsing exceptions.",
      "weakness": "Check array length before indexing to provide descriptive parsing exceptions."
    },
    {
      "q": "Why is catching `java.lang.Throwable` or `java.lang.Error` generally considered a bad practice in application code?",
      "options": [
        "It causes a compile error",
        "It catches severe JVM errors like `OutOfMemoryError` and `ThreadDeath`, preventing the JVM from shutting down cleanly and leaving the application in an unstable, corrupted state",
        "Throwable cannot be caught",
        "It slows down arithmetic"
      ],
      "answer": 1,
      "explain": "Catching `Throwable` intercepts fatal JVM internal errors that applications cannot safely handle, masking catastrophic failures and destabilizing the system.",
      "topic": "Catching Throwable Anti-Pattern",
      "type": "theory",
      "level": "medium",
      "strength": "Understands why catching Throwable/Error is dangerous.",
      "weakness": "Avoid catching `Throwable` or `Error`; catch specific `Exception` subclasses instead."
    },
    {
      "q": "What is the compilation issue in this code?\n```java\npublic class Custom extends Exception {\n    public Custom(String msg) {\n        // no call to super\n    }\n}\n```",
      "options": [
        "Custom must be final",
        "It compiles cleanly! The compiler automatically inserts `super();`, though calling `super(msg)` is recommended to preserve the message string in `getMessage()`",
        "msg cannot be string",
        "Custom cannot extend Exception"
      ],
      "answer": 1,
      "explain": "The code compiles cleanly. However, omitting `super(msg)` means `getMessage()` will return `null`. It is a semantic bug, not a compilation error.",
      "topic": "Custom Exception Missing super(msg) Semantic Trap",
      "type": "error",
      "level": "medium",
      "strength": "Recognized that missing super(msg) compiles but leaves getMessage() as null.",
      "weakness": "Always pass error message to `super(msg)` in custom exception constructors."
    },
    {
      "q": "What is the output of this code?\n```java\ntry {\n    System.out.print(\"Try \");\n} finally {\n    System.out.print(\"Finally \");\n}\nSystem.out.print(\"Done \");\n```",
      "options": [
        "Try Finally Done ",
        "Try Done ",
        "Finally Done ",
        "Try Done Finally "
      ],
      "answer": 0,
      "explain": "Without exceptions, `try` runs (`\"Try \"`), then `finally` runs (`\"Finally \"`), then subsequent code executes (`\"Done \"`). Output: `Try Finally Done `.",
      "topic": "Clean Try-Finally Flow",
      "type": "output",
      "level": "easy",
      "strength": "Traced normal execution through try-finally block.",
      "weakness": "Normal flow executes try body, then finally, then resumes: `Try Finally Done `."
    },
    {
      "q": "A developer is implementing a database repository. When a query fails, they catch `SQLException` and log it. What is the recommended way to log the exception object using modern logging frameworks (SLF4J / Logback)?",
      "options": [
        "`logger.error(e.getMessage());` (Loses full stack trace!)",
        "`logger.error(\"Database query failed for user {}\", userId, e);` (Logs context and passes exception object to capture full stack trace)",
        "`System.out.println(\"Error\");`",
        "`e.toString();`"
      ],
      "answer": 1,
      "explain": "Passing the exception object `e` as the final argument in logger calls captures the full stack trace, root causes, and line numbers in server logs.",
      "topic": "Modern Logging Best Practice with Stack Traces",
      "type": "scenario",
      "level": "medium",
      "strength": "Applied SLF4J logging best practice to preserve full stack trace context.",
      "weakness": "Pass the exception object as the last argument in logger calls to preserve full stack trace diagnostics."
    },
    {
      "q": "What does `e.printStackTrace()` do when an exception is caught?",
      "options": [
        "Deletes the stack trace",
        "Prints the exception class name, error message, and the full sequence of method invocations and line numbers leading up to the failure point to `System.err`",
        "Restarts the application",
        "Converts the exception to a string"
      ],
      "answer": 1,
      "explain": "`e.printStackTrace()` prints diagnostic stack trace information to standard error, showing the exact source files and line numbers where the exception originated.",
      "topic": "printStackTrace Diagnostic Output",
      "type": "theory",
      "level": "easy",
      "strength": "Knows the diagnostic purpose of printStackTrace().",
      "weakness": "`e.printStackTrace()` outputs the full chain of method call locations to standard error."
    },
    {
      "q": "Why does this code fail to compile?\n```java\ntry {\n    int a = 5;\n} catch (Exception e) {\n    System.out.println(e);\n}\nSystem.out.println(e.getMessage());\n```",
      "options": [
        "a is not initialized",
        "Cannot find symbol: variable 'e' is local to the catch block and out of scope outside it",
        "getMessage() is private",
        "e must be final"
      ],
      "answer": 1,
      "explain": "The exception parameter `e` is scoped exclusively to its `catch` block. It cannot be accessed outside the block.",
      "topic": "Catch Parameter Scope Leak Error",
      "type": "error",
      "level": "easy",
      "strength": "Recognized exception parameter out of scope outside catch block.",
      "weakness": "Exception parameters declared in catch headers are local to that catch block."
    },
    {
      "q": "What is the output of this code?\n```java\nint x = 0;\ntry {\n    x = 1;\n    if (x == 1) throw new RuntimeException();\n    x = 2;\n} catch (RuntimeException e) {\n    x = 3;\n}\nSystem.out.println(x);\n```",
      "options": [
        "3",
        "1",
        "2",
        "0"
      ],
      "answer": 0,
      "explain": "`x` is set to 1. Exception is thrown, skipping `x = 2`. Catch block executes and sets `x = 3`. Outputs 3.",
      "topic": "Execution Branch Flow on Throw Output",
      "type": "output",
      "level": "easy",
      "strength": "Tracked variable assignment skipping on thrown exception.",
      "weakness": "Exception skips `x = 2` and assigns `x = 3` in catch."
    },
    {
      "q": "A user attempts to call `.start()` on a `Thread` or media player that has already been stopped and disposed of. What standard Java runtime exception represents calling a method when the object is in an invalid state?",
      "options": [
        "`IllegalArgumentException`",
        "`java.lang.IllegalStateException`",
        "`NullPointerException`",
        "`SecurityException`"
      ],
      "answer": 1,
      "explain": "`IllegalStateException` signals that a method was invoked at an inappropriate time, or that the object environment is in an improper state for the requested operation.",
      "topic": "IllegalStateException for State Invariants",
      "type": "scenario",
      "level": "easy",
      "strength": "Selected IllegalStateException for invalid object lifecycle states.",
      "weakness": "Throw `IllegalStateException` when an object is in an inappropriate lifecycle state for the requested operation."
    },
    {
      "q": "What is the output of this code?\n```java\ntry {\n    String s = null;\n    s.toString();\n} catch (NullPointerException e) {\n    System.out.print(\"NPE \");\n} catch (RuntimeException e) {\n    System.out.print(\"RE \");\n}\n```",
      "options": [
        "NPE ",
        "RE ",
        "NPE RE ",
        "Error"
      ],
      "answer": 0,
      "explain": "`NullPointerException` matches the first specific catch block (`NPE `). The second catch block is skipped. Outputs `NPE `.",
      "topic": "Catch Specificity First Match Output",
      "type": "output",
      "level": "easy",
      "strength": "Identified exact match in specific catch block.",
      "weakness": "First matching catch block (`NPE `) executes."
    },
    {
      "q": "A game developer creates a level loader. If a required texture file `player.png` is missing from the game directory, the loader catches `FileNotFoundException`. What should the loader do?",
      "options": [
        "Crash the computer",
        "Substitute a default 'missing texture' checkerboard image, log a warning, and allow the level to continue loading",
        "Delete the game save file",
        "Infinite loop"
      ],
      "answer": 1,
      "explain": "Graceful degradation: catching resource missing exceptions allows substituting fallback assets (e.g. placeholder textures) so games and apps remain playable.",
      "topic": "Graceful Degradation Fallback Pattern",
      "type": "scenario",
      "level": "easy",
      "strength": "Applied graceful degradation fallback on missing asset exceptions.",
      "weakness": "Implement fallback defaults upon catching non-critical missing resource exceptions."
    },
    {
      "q": "What is the root class of the entire exception and error hierarchy in Java?",
      "options": [
        "`java.lang.Exception`",
        "`java.lang.Throwable`",
        "`java.lang.Error`",
        "`java.lang.RuntimeException`"
      ],
      "answer": 1,
      "explain": "`java.lang.Throwable` is the superclass of all errors and exceptions in Java. Only objects that inherit from `Throwable` can be thrown by the JVM or `throw` statement.",
      "topic": "Throwable Root Hierarchy",
      "type": "theory",
      "level": "easy",
      "strength": "Identifies Throwable as the root of the Java exception hierarchy.",
      "weakness": "`java.lang.Throwable` is the superclass of all exceptions and errors in Java."
    },
    {
      "q": "Why does the following code produce a compilation error?\n```java\ntry {\n    int x = 10 / 0;\n} catch (Exception e) {\n    System.out.println(\"Error\");\n} catch (ArithmeticException e) {\n    System.out.println(\"Div by zero\");\n}\n```",
      "options": [
        "Division by zero is illegal",
        "Unreachable code: `ArithmeticException` is a subclass of `Exception`, so the second catch block is already covered and can never be reached",
        "try cannot divide",
        "Exception e must be capitalized"
      ],
      "answer": 1,
      "explain": "Because `ArithmeticException` extends `Exception`, the first catch block intercepts all arithmetic exceptions. The second block is unreachable, causing a compile error.",
      "topic": "Unreachable Catch Block Hierarchy Error",
      "type": "error",
      "level": "easy",
      "strength": "Spotted unreachable catch block due to improper ordering.",
      "weakness": "Place subclass catch blocks BEFORE superclass catch blocks."
    },
    {
      "q": "What does this code print?\n```java\ntry {\n    throw new NullPointerException(\"Boom\");\n} catch (Exception e) {\n    System.out.println(e.getMessage());\n}\n```",
      "options": [
        "Boom",
        "NullPointerException",
        "null",
        "Boom Boom"
      ],
      "answer": 0,
      "explain": "`e.getMessage()` returns the detail message string passed to the constructor: `\"Boom\"`.",
      "topic": "Exception getMessage Output",
      "type": "output",
      "level": "easy",
      "strength": "Extracted exception message string via getMessage().",
      "weakness": "`e.getMessage()` outputs the message string `Boom`."
    },
    {
      "q": "A cloud microservice calls a payment API. If the API returns HTTP 503 (Service Unavailable), the microservice throws `PaymentGatewayUnavailableException`. Should this exception be caught by the service layer or allowed to propagate to the global exception handler?",
      "options": [
        "Swallow it and return a fake success receipt",
        "Allow it to propagate to a Global Exception Handler (e.g. `@ControllerAdvice` in Spring Boot) to map it into an HTTP 503 response and return standardized JSON error details to the client",
        "Crash the whole application",
        "Print to console only"
      ],
      "answer": 1,
      "explain": "Centralized Global Exception Handlers intercept unhandled domain exceptions at the perimeter, translating them into standardized HTTP status codes and JSON error responses.",
      "topic": "Global Exception Handling Architecture",
      "type": "scenario",
      "level": "medium",
      "strength": "Understands centralized global exception handling architecture in web services.",
      "weakness": "Propagate unhandled domain exceptions to global handlers for centralized HTTP response mapping."
    },
    {
      "q": "What is the effect of an uncaught exception occurring on the main thread?",
      "options": [
        "The operating system restarts",
        "The thread terminates, the JVM prints the unhandled exception stack trace to `System.err`, and the program exits (if no non-daemon threads are running)",
        "The CPU pauses",
        "The exception is ignored"
      ],
      "answer": 1,
      "explain": "If an exception propagates all the way out of `main` without being caught, the main thread terminates abruptly and prints the stack trace.",
      "topic": "Uncaught Exception Behavior",
      "type": "theory",
      "level": "easy",
      "strength": "Knows the consequence of uncaught exceptions on thread lifecycle.",
      "weakness": "Uncaught exceptions terminate the active thread and print the stack trace."
    },
    {
      "q": "What happens when running this code?\n```java\nString s = null;\nSystem.out.println(s.length());\n```",
      "options": [
        "Prints 0",
        "Throws `java.lang.NullPointerException` at runtime",
        "Prints null",
        "Compilation error: s is null"
      ],
      "answer": 1,
      "explain": "Attempting to invoke an instance method on a `null` reference throws `NullPointerException`.",
      "topic": "NullPointerException on Null Method Call",
      "type": "error",
      "level": "easy",
      "strength": "Identified NullPointerException when dereferencing null.",
      "weakness": "Calling methods on a null reference throws `NullPointerException`."
    },
    {
      "q": "What is the output of this code?\n```java\npublic static void f() throws Exception {\n    throw new Exception(\"Fail\");\n}\npublic static void main(String[] args) {\n    try {\n        f();\n    } catch (Exception e) {\n        System.out.println(\"Caught in main\");\n    }\n}\n```",
      "options": [
        "Caught in main",
        "Fail",
        "Error",
        "Nothing"
      ],
      "answer": 0,
      "explain": "Method `f()` throws an exception that propagates to `main`, where it is caught and prints `Caught in main`.",
      "topic": "Propagated Exception Caught in Caller",
      "type": "output",
      "level": "easy",
      "strength": "Traced exception propagation caught by caller method.",
      "weakness": "Exception propagates to caller's try-catch block: `Caught in main`."
    },
    {
      "q": "A banking login system locks a user account after 3 consecutive failed password attempts. What custom exception cleanly models this scenario for the authentication controller?",
      "options": [
        "`AccountLockedException extends AuthenticationException`",
        "`NullPointerException`",
        "`ArithmeticException`",
        "`ArrayIndexOutOfBoundsException`"
      ],
      "answer": 0,
      "explain": "Creating a specific exception hierarchy (`AccountLockedException extends AuthenticationException`) allows the UI controller to display a dedicated 'Account Locked' screen.",
      "topic": "Custom Authentication Exception Hierarchy",
      "type": "scenario",
      "level": "easy",
      "strength": "Designed specific domain exception hierarchy for authentication flows.",
      "weakness": "Model specific failure modes with dedicated domain exceptions (e.g. `AccountLockedException`)."
    },
    {
      "q": "What does this code print?\n```java\ntry {\n    int a = Integer.parseInt(\"10\");\n    int b = Integer.parseInt(\"20\");\n    System.out.println(a + b);\n} catch (NumberFormatException e) {\n    System.out.println(\"Err\");\n}\n```",
      "options": [
        "30",
        "1020",
        "Err",
        "Error"
      ],
      "answer": 0,
      "explain": "Both string tokens parse cleanly to integers 10 and 20. `10 + 20 = 30`. Outputs 30.",
      "topic": "Successful Number Parsing Output",
      "type": "output",
      "level": "easy",
      "strength": "Computed sum of successfully parsed numeric tokens.",
      "weakness": "`10 + 20 = 30`."
    },
    {
      "q": "A database transaction manager executes: `connection.setAutoCommit(false);`. If an exception occurs during the SQL queries, where should `connection.rollback()` be placed?",
      "options": [
        "In the catch block: `catch (SQLException e) { connection.rollback(); throw e; }`",
        "Inside the try block after the queries",
        "In a static initialization block",
        "In the main method"
      ],
      "answer": 0,
      "explain": "The catch block executes when an error occurs, making it the appropriate place to roll back uncommitted transactions before propagating the failure.",
      "topic": "Database Transaction Rollback in Catch",
      "type": "scenario",
      "level": "easy",
      "strength": "Placed database rollback logic inside the catch block.",
      "weakness": "Execute transaction rollback in the catch block before propagating errors."
    }
  ]
};

if (typeof window !== "undefined") { window.QUIZ_BANK = QUIZ_BANK; }

var QUIZ_BANK_META = {
  totalQuestions: 1000,
  chapters: 10,
  questionsPerChapter: 100,
  setsPerChapter: 10,
  questionsPerSet: 10,
  getSet: function(chapterId, setIndex) {
    var key = String(chapterId);
    var list = (typeof QUIZ_BANK !== "undefined" && QUIZ_BANK[key]) || [];
    if (!list.length) return [];
    var idx = Math.abs(setIndex % 10);
    return list.slice(idx * 10, idx * 10 + 10);
  }
};
if (typeof window !== "undefined") { window.QUIZ_BANK_META = QUIZ_BANK_META; }
if (typeof module !== "undefined" && module.exports) { module.exports = { QUIZ_BANK, QUIZ_BANK_META }; }
