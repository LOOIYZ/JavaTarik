# -*- coding: utf-8 -*-
"""
Generate 100 questions for Chapter 4: Methods
(Method headers, parameters, return types, pass-by-value, method overloading, recursion, variable scope, varargs)
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
    "How does Java pass arguments to methods?",
    [
        "Primitives are passed by reference; objects are passed by value",
        "Strictly pass-by-value in all cases: for primitives, the value is copied; for objects, the reference address is copied by value",
        "Primitives are passed by value; objects are passed by reference",
        "Pass-by-name like ALGOL"
    ],
    1,
    "Java is strictly pass-by-value. When an object is passed, the value of the reference (pointer address) is passed by value. Reassigning the parameter does not affect the caller, though mutating object contents does.",
    "Pass-by-Value Architecture", "theory", "medium",
    "Mastered Java's strict pass-by-value semantics for both primitives and object references.",
    "Java is exclusively pass-by-value; references are copied by value."
)

add_q(
    "What defines a method's signature in Java?",
    [
        "Method name and return type",
        "Method name and parameter list (types and order)",
        "Method name, parameter list, and access modifier",
        "Method name, return type, and thrown exceptions"
    ],
    1,
    "In Java, a method's signature consists solely of the method name and the number, types, and order of its parameters. Return type and access modifiers are NOT part of the signature.",
    "Method Signature", "theory", "easy",
    "Understands the exact components of a Java method signature.",
    "A method signature consists only of the method name and parameter types list."
)

add_q(
    "Can two methods in the same class have the exact same name and parameter list but different return types?",
    [
        "Yes, the compiler chooses based on how the caller uses the return value",
        "No, this causes a compilation error because return type is not part of the method signature for overloading",
        "Yes, but only if one is void",
        "Yes, if they have different access modifiers"
    ],
    1,
    "Overloading requires different parameter lists. Differing only by return type is ambiguous and causes a compile-time error: 'method already defined'.",
    "Method Overloading Rules", "theory", "easy",
    "Recognized that return type alone cannot overload a method.",
    "Methods cannot be overloaded based solely on different return types."
)

add_q(
    "What happens when a method declared with return type `void` executes a `return;` statement without a value?",
    [
        "Compilation error: void methods cannot contain return statements",
        "The method terminates immediately and control returns to the caller",
        "The JVM throws a NullPointerException",
        "It returns null to the caller"
    ],
    1,
    "A `return;` statement without an expression is completely valid in `void` methods; it immediately exits the method and returns control to the caller.",
    "Void Method Return Statement", "theory", "easy",
    "Knows that void methods can use `return;` for early exit.",
    "`return;` in a void method exits early without returning a value."
)

add_q(
    "What two fundamental components must every correct recursive method possess?",
    [
        "A while loop and a switch statement",
        "At least one base case (termination condition) and a recursive step that moves toward the base case",
        "A try block and a catch block",
        "A static variable and a final constant"
    ],
    1,
    "Recursion requires: 1) A base case where the method returns without recursing, and 2) A recursive call with reduced input parameters that converges toward the base case.",
    "Recursion Components", "theory", "easy",
    "Identifies the base case and converging step in recursive functions.",
    "Every recursive method must have a base case to prevent infinite recursion."
)

add_q(
    "What runtime error occurs if a recursive method has no base case or fails to converge?",
    [
        "`java.lang.OutOfMemoryError: Java heap space`",
        "`java.lang.StackOverflowError`",
        "`java.lang.ArithmeticException`",
        "`java.lang.NullPointerException`"
    ],
    1,
    "Each method invocation allocates a new stack frame on the thread's call stack. Infinite recursion exhausts call stack memory, throwing `StackOverflowError`.",
    "StackOverflowError", "theory", "easy",
    "Knows that infinite recursion exhausts call stack space.",
    "Infinite recursion exhausts stack frames, throwing `StackOverflowError`."
)

add_q(
    "What is variable shadowing in Java methods?",
    [
        "When an instance field and a local variable (or parameter) share the same name, the local variable shadows (hides) the field within that method scope",
        "When a variable is deleted by garbage collection",
        "When a private variable is accessed from another package",
        "When two methods share the same name"
    ],
    0,
    "When a local variable or parameter has the same name as an instance field, the local variable takes precedence in scope, shadowing the field. The field must then be accessed using `this.fieldName`.",
    "Variable Shadowing", "theory", "medium",
    "Understands field shadowing by local variables and parameters.",
    "Use `this.variableName` to access shadowed instance fields."
)

add_q(
    "What are the rules regarding variable-length argument lists (varargs: `int... numbers`) in Java method parameters?",
    [
        "A method can have multiple varargs parameters anywhere in the parameter list",
        "There can be at most one varargs parameter, and it must be the very last parameter in the method header",
        "Varargs can only be of type Object",
        "Varargs parameters must be initialized with the `new` keyword in the caller"
    ],
    1,
    "A method parameter list can contain at most one varargs parameter, and it must appear as the final parameter (`(String prefix, int... nums)`).",
    "Varargs Rules", "theory", "medium",
    "Knows syntactical restrictions on varargs parameters.",
    "Varargs (`type...`) must be the last parameter in the method declaration."
)

add_q(
    "How does the compiler treat a varargs parameter `void print(int... nums)` internally?",
    [
        "As a java.util.ArrayList<Integer>",
        "As an array of that type: `int[] nums`",
        "As a linked list",
        "As separate overloaded methods for 1 to 255 arguments"
    ],
    1,
    "Varargs is syntactic sugar in Java. The compiler translates `int... nums` into an array `int[] nums`, and packages the caller's arguments into a newly allocated array.",
    "Varargs Internal Representation", "theory", "medium",
    "Understands that varargs compiles to an underlying array.",
    "`type... name` is treated internally as `type[] name`."
)

add_q(
    "What is method inlining performed by the JVM Just-In-Time (JIT) compiler?",
    [
        "Writing all method code on a single line of text",
        "Replacing a method call site directly with the body of the called method to eliminate call stack overhead",
        "Converting static methods to instance methods",
        "Executing methods asynchronously"
    ],
    1,
    "Method inlining is an optimization where the JIT compiler replaces method call instructions with the method's actual bytecode body, eliminating function call overhead and branch penalties.",
    "Method Inlining Optimization", "theory", "hard",
    "Understands JIT compilation method inlining optimization.",
    "JIT inlining replaces method calls with the method body to avoid call overhead."
)

add_q(
    "What is the scope of a local variable declared inside a `for` loop header: `for (int i = 0; ...)`?",
    [
        "Throughout the entire enclosing method",
        "Restricted strictly to the `for` loop header and its body",
        "Accessible to subsequent sibling loops",
        "Global across the entire class"
    ],
    1,
    "Variables declared in a loop header have block scope confined exclusively to the loop itself. They are destroyed when the loop terminates.",
    "Block Scope of Loop Variables", "theory", "easy",
    "Understands block scope lifetimes of loop-declared variables.",
    "Variables declared in a loop header are not accessible outside that loop."
)

add_q(
    "When a method reassigns a primitive parameter: `void update(int x) { x = 100; }`, what happens to the caller's variable?",
    [
        "The caller's variable becomes 100",
        "The caller's variable is completely unchanged because `x` is a separate local copy on the method's stack frame",
        "Throws an IllegalArgumentException",
        "The compiler issues a warning"
    ],
    1,
    "Because primitives are passed by value, the method receives a copy of the primitive value. Modifying `x` alters only the local copy in the method's stack frame.",
    "Primitive Pass-by-Value Independence", "theory", "easy",
    "Understands that reassigning primitive parameters never affects the caller.",
    "Primitive arguments are copies; modifying them inside a method has zero effect on the caller."
)

add_q(
    "When a method reassigns an object reference parameter: `void reset(int[] arr) { arr = new int[5]; }`, what happens to the caller's array?",
    [
        "The caller's reference now points to the new array of size 5",
        "The caller's reference is completely unchanged; it still points to the original array",
        "The original array is immediately garbage collected",
        "Compilation error: cannot reassign parameter"
    ],
    1,
    "The parameter `arr` is a copy of the reference address. Reassigning `arr` to a new object overwrites only the local parameter reference. The caller's reference remains unchanged.",
    "Reference Parameter Reassignment", "theory", "hard",
    "Distinguishes mutating an object from reassigning an object reference parameter.",
    "Reassigning an object reference parameter inside a method does NOT change the caller's reference."
)

add_q(
    "What is direct recursion versus indirect recursion?",
    [
        "Direct recursion uses for-loops; indirect uses while-loops",
        "Direct recursion occurs when method A calls method A; indirect occurs when method A calls method B, which calls method A",
        "Direct recursion terminates; indirect never terminates",
        "Direct recursion uses heap; indirect uses stack"
    ],
    1,
    "Direct recursion is when a method calls itself directly. Indirect (mutual) recursion is when method A calls B, which in turn calls A, forming a cycle of calls.",
    "Direct vs Indirect Recursion", "theory", "medium",
    "Distinguishes direct from indirect (mutual) recursion.",
    "Direct recursion calls itself; indirect recursion forms a cycle between two or more methods."
)

add_q(
    "How does the Java compiler resolve overloaded methods when an argument can match multiple widened types (e.g. `test(int)` vs `test(long)`) when called with a `short`?",
    [
        "Throws an ambiguous method call error",
        "Selects the most specific compatible method (widens `short` to `int` before widening to `long`)",
        "Picks randomly at runtime",
        "Converts to double"
    ],
    1,
    "Java's overload resolution prefers the most specific matching method. Widening from `short` to `int` is closer and more specific than widening to `long`.",
    "Overload Resolution Specificity", "theory", "hard",
    "Mastery of overload resolution and type widening hierarchy.",
    "Overload resolution picks the most specific compatible signature."
)

add_q(
    "Can a static method call a non-static (instance) method directly without an object reference?",
    [
        "Yes, if they are in the same class",
        "No, because non-static methods require an active object instance (`this`), which does not exist in a static context",
        "Yes, using the `super` keyword",
        "Only if the non-static method is public"
    ],
    1,
    "Static methods belong to the class and have no `this` reference. They cannot invoke instance methods or read instance fields without an explicit object reference.",
    "Static Context Rules", "theory", "easy",
    "Understands why static methods cannot access non-static methods without an object instance.",
    "Static methods cannot directly call non-static methods; instantiate an object first."
)

add_q(
    "What is a stack frame in the JVM execution model?",
    [
        "A block of memory on the heap storing instance fields",
        "A data structure allocated on the thread's call stack for each method invocation, storing its local variables, operand stack, and return address",
        "A graphical window created by Swing",
        "A synchronization lock"
    ],
    1,
    "Every time a method is invoked, a new stack frame is pushed onto the thread's call stack. It holds local variables, intermediate calculations (operand stack), and is popped upon return.",
    "JVM Stack Frame Lifecycle", "theory", "medium",
    "Deep understanding of JVM call stack frames and method execution.",
    "Each method call creates a stack frame containing local variables and operand stack."
)

add_q(
    "What is the difference between actual parameters (arguments) and formal parameters?",
    [
        "Actual parameters are in the method declaration; formal parameters are in the call site",
        "Formal parameters are the variables defined in the method header; actual parameters (arguments) are the concrete values passed during the method invocation",
        "Formal parameters are always primitive; actual parameters are objects",
        "They are identical synonyms with no distinction"
    ],
    1,
    "Formal parameters are the placeholders declared in the method signature (`int a, int b`). Actual arguments are the values supplied at the call site (`add(5, 10)`).",
    "Formal vs Actual Parameters", "theory", "easy",
    "Distinguishes formal parameter declarations from actual arguments.",
    "Formal parameters are declared in the method header; actual arguments are passed at call time."
)

add_q(
    "Can a method in Java return multiple values simultaneously?",
    [
        "Yes, using Python syntax: `return a, b;`",
        "No, Java methods can return at most one value (which may be an object, array, or collection encapsulating multiple data items)",
        "Yes, by listing multiple types in the header: `public int, String get();`",
        "Only if marked with the `multi` keyword"
    ],
    1,
    "Java strictly permits at most one return value. To return multiple values, bundle them into an array, a custom class object, or a record.",
    "Single Return Value Constraint", "theory", "easy",
    "Understands single return value constraint and encapsulation bundling.",
    "Java returns at most one value; bundle multiple values into an object or array."
)

add_q(
    "What is tail recursion, and does the standard Java compiler (javac) optimize it with Tail Call Optimization (TCO)?",
    [
        "Tail recursion is when the recursive call is the very last operation performed before returning; standard Java does NOT optimize it (it still grows stack frames)",
        "Tail recursion occurs at the start of a method; Java always converts it to a while loop",
        "Tail recursion is recursion with two base cases",
        "Java has enforced TCO since Java 1.0"
    ],
    0,
    "In tail recursion, the recursive call is the final statement. Unlike functional languages, standard JVMs do NOT implement automatic Tail Call Optimization (TCO), so stack frames still accumulate.",
    "Tail Recursion & TCO", "theory", "hard",
    "Understands tail recursion and the absence of TCO in standard JVMs.",
    "Standard Java does not optimize tail recursion; deep recursion still causes StackOverflowError."
)

add_q(
    "What happens when an expression calls a method with `void` return type inside `System.out.println(myVoidMethod())`?",
    [
        "Prints \"void\"",
        "Prints null",
        "Compilation error: 'void' type not allowed here",
        "Throws a NullPointerException"
    ],
    2,
    "A `void` method produces no value. Attempting to pass its result to `println` or assign it to a variable is illegal and causes a compile error: 'void type not allowed here'.",
    "Void Expression Invalidation", "theory", "easy",
    "Recognized that void method invocations cannot be used as expression arguments.",
    "Void methods return no value and cannot be passed to `println` or assignments."
)

add_q(
    "Can a method have the same name as its declaring class?",
    [
        "No, that is strictly prohibited",
        "Yes, but if it has a return type (e.g. `void MyClass()`), it is treated as a regular method, NOT a constructor",
        "Yes, and it automatically becomes the default constructor",
        "It causes a runtime ClassFormatError"
    ],
    1,
    "A method can share the class name, but if it declares a return type, the compiler treats it as a standard method (though bad practice), not a constructor.",
    "Method vs Constructor Naming", "theory", "medium",
    "Distinguishes constructors from methods that happen to share the class name.",
    "Constructors have no return type; a method with the class name and a return type is just a regular method."
)

add_q(
    "What is the default return value of a recursive method that reaches the end of its body without executing a `return` statement when declared to return an `int`?",
    [
        "0",
        "-1",
        "Compilation error: missing return statement",
        "Throws a MissingReturnException"
    ],
    2,
    "In Java, any non-void method must ensure all possible execution paths terminate with a valid `return` statement or thrown exception. Reaching the end without a return causes a compile-time error.",
    "Missing Return Path Error", "theory", "easy",
    "Understands compiler enforcement of return statements on all control flow paths.",
    "All execution paths in non-void methods must end with a `return` statement."
)

add_q(
    "Can an overloaded method have different parameter names while keeping parameter types identical: `void draw(int x)` and `void draw(int y)` in the same class?",
    [
        "Yes, parameter names distinguish methods",
        "No, parameter names are irrelevant to overloading; only parameter types and their count matter, so this causes a 'method already defined' compile error",
        "Yes, if one is declared private",
        "Only if x and y have different values"
    ],
    1,
    "The compiler considers only the types and sequence of parameters in a signature. Parameter names are purely descriptive and cannot distinguish overloaded methods.",
    "Overload Parameter Name Irrelevance", "theory", "easy",
    "Recognized that parameter names do not differentiate overloaded methods.",
    "Overloading depends strictly on parameter types and order, not parameter names."
)

add_q(
    "What is the maximum number of dimensions a method can return as an array in Java (e.g. `int[][][]`)?",
    [
        "Only 1D",
        "Only 2D",
        "Up to 255 dimensions (the JVM limit for array dimensions)",
        "Unlimited"
    ],
    2,
    "The JVM specification limits array types to a maximum of 255 dimensions.",
    "JVM Array Dimension Limit", "theory", "hard",
    "Knows JVM architectural limits on multidimensional array returns.",
    "The JVM supports up to 255 dimensions for array types."
)

# --- Ch 4: 2. Error Identification (25 Qs) ---
add_q(
    "Why does the following method fail to compile?\n```java\npublic int getScore(boolean isBonus) {\n    if (isBonus) {\n        return 100;\n    }\n}\n```",
    [
        "isBonus is not an integer",
        "Missing return statement: if isBonus is false, the method completes without returning an int",
        "100 cannot be returned from public methods",
        "boolean cannot be in parameters"
    ],
    1,
    "The compiler verifies all execution paths. If `isBonus` is false, there is no return statement, triggering: 'missing return statement'.",
    "Missing Return Path Error", "error", "easy",
    "Caught missing return statement in conditional method branch.",
    "Ensure all execution paths in non-void methods have a `return` statement."
)

add_q(
    "Identify the compilation error in the following method header:\n```java\npublic void printData(int... numbers, String label) {\n    // body\n}\n```",
    [
        "Varargs cannot be int",
        "The variable arity (varargs) parameter `int... numbers` must be the last parameter in the formal parameter list",
        "String cannot follow an array",
        "public void cannot use varargs"
    ],
    1,
    "A varargs parameter must always be the final parameter in the formal parameter list. Placing `String label` after `int... numbers` causes a compile error.",
    "Varargs Position Error", "error", "easy",
    "Spotted varargs parameter placed before another parameter.",
    "The varargs parameter (`type...`) must be the last parameter in the method signature."
)

add_q(
    "Why does this overloaded method pair cause a compilation error?\n```java\npublic int calculate(int a, int b) { return a + b; }\npublic double calculate(int a, int b) { return (double)(a + b); }\n```",
    [
        "Cannot cast a + b to double",
        "Method `calculate(int, int)` is already defined; return type alone cannot be used to overload methods",
        "int and double are incompatible",
        "calculate must be static"
    ],
    1,
    "Both methods share the identical signature `calculate(int, int)`. The compiler cannot distinguish them at call sites (`calculate(5, 10)`), causing: 'method already defined'.",
    "Ambiguous Return Type Overload Error", "error", "easy",
    "Recognized illegal method overloading differing only by return type.",
    "Methods cannot be overloaded based solely on different return types."
)

add_q(
    "What is the runtime error in this recursive method?\n```java\npublic static int factorial(int n) {\n    return n * factorial(n - 1);\n}\n```",
    [
        "`ArithmeticException`",
        "`StackOverflowError` because there is no base case, causing infinite recursion until stack exhaustion",
        "`NullPointerException`",
        "`IllegalArgumentException`"
    ],
    1,
    "Without a base case (e.g. `if (n <= 1) return 1;`), `factorial` recurses infinitely into negative numbers, overflowing the call stack.",
    "Missing Base Case Recursion Bug", "error", "easy",
    "Identified missing base case causing StackOverflowError.",
    "Always include a base case in recursive methods to stop recursion."
)

add_q(
    "Why does this code cause a compilation error?\n```java\npublic class Test {\n    public void show() {\n        System.out.println(\"Hello\");\n    }\n    public static void main(String[] args) {\n        show();\n    }\n}\n```",
    [
        "main cannot call methods",
        "Non-static method `show()` cannot be referenced from a static context (`main`) without an object instance",
        "show must return int",
        "args is not used"
    ],
    1,
    "`main` is a static method and has no `this` reference. It cannot call instance method `show()` directly. It must either make `show()` static or create an instance: `new Test().show();`.",
    "Static Calling Non-Static Error", "error", "easy",
    "Caught illegal invocation of non-static method from static context.",
    "Static methods cannot directly invoke non-static methods without an object instance."
)

add_q(
    "Identify the compilation issue in this method:\n```java\npublic int sum(int a, int b) {\n    return a + b;\n    System.out.println(\"Finished\");\n}\n```",
    [
        "a + b is an invalid return expression",
        "Unreachable statement: `System.out.println(\"Finished\");` appears after an unconditional `return` statement",
        "sum must be void",
        "println cannot print strings inside sum"
    ],
    1,
    "Any code placed immediately after an unconditional `return` statement within the same block is unreachable and causes a compile-time error.",
    "Unreachable Code After Return", "error", "easy",
    "Recognized unreachable statement placed after return.",
    "Statements placed after an unconditional `return` are unreachable and rejected by the compiler."
)

add_q(
    "What is the bug in this swap method?\n```java\npublic static void swap(int a, int b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n```",
    [
        "Syntax error: temp must be declared outside swap",
        "It modifies only local copies; caller's variables remain unchanged because primitives are passed by value",
        "Throws NullPointerException",
        "Causes an infinite loop"
    ],
    1,
    "In Java, primitives are passed by value. `swap` swaps its local copies on its stack frame. The caller's variables are unaffected.",
    "Primitive Swap Pass-by-Value Bug", "error", "medium",
    "Recognized the classic ineffective primitive swap in Java.",
    "Swapping primitive parameters does not affect caller variables because Java is pass-by-value."
)

add_q(
    "Why does this overloaded invocation fail to compile?\n```java\npublic static void print(int a, double b) {}\npublic static void print(double a, int b) {}\n\npublic static void main(String[] args) {\n    print(5, 5);\n}\n```",
    [
        "5 is not a valid number",
        "Reference to `print` is ambiguous: both `print(int, double)` and `print(double, int)` match with equal conversion specificity",
        "print cannot take 2 parameters",
        "main cannot call print"
    ],
    1,
    "Both arguments are `int`. To match `print(int, double)`, the second argument widens. To match `print(double, int)`, the first widens. Neither is more specific, causing: 'reference to print is ambiguous'.",
    "Ambiguous Overload Call Error", "error", "hard",
    "Identified ambiguous method overload collision.",
    "Ambiguous widening conversions on overloaded methods cause compile-time ambiguity errors."
)

add_q(
    "Identify the compilation error in this method header:\n```java\npublic int add(int a, int a) {\n    return a + a;\n}\n```",
    [
        "add cannot return int",
        "Variable 'a' is already defined in the method parameter list",
        "Parameter types cannot be identical",
        "return statement is invalid"
    ],
    1,
    "All formal parameters within a method signature must have unique names. Declaring two parameters named `a` causes: 'variable a is already defined'.",
    "Duplicate Parameter Name Error", "error", "easy",
    "Spotted duplicate parameter name in method header.",
    "Formal parameter names in a method header must be distinct."
)

add_q(
    "Why does the following recursive method crash at runtime for `countDown(3)`?\n```java\npublic static void countDown(int n) {\n    System.out.println(n);\n    if (n == 0) return;\n    countDown(n);\n}\n```",
    [
        "n == 0 is an invalid condition",
        "`countDown(n)` passes `n` instead of `n - 1`, making no progress toward the base case and causing `StackOverflowError`",
        "System.out.println cannot be called recursively",
        "return cannot be used in void methods"
    ],
    1,
    "The recursive call passes `n` without decrementing. `n` never reaches 0, producing infinite recursion and a `StackOverflowError`.",
    "Recursion Non-Converging Bug", "error", "easy",
    "Caught failure to reduce recursive argument toward base case.",
    "Recursive steps must modify parameters to progress toward the base case."
)

add_q(
    "What compilation error occurs here?\n```java\npublic class MathHelper {\n    public static int square(int x) {\n        return x * x;\n    }\n}\n// in another class:\nint res = square(5);\n```",
    [
        "5 is an invalid argument",
        "Cannot find symbol: method square(int) must be referenced via class name `MathHelper.square(5)` or imported statically",
        "square cannot be static",
        "res must be double"
    ],
    1,
    "Static methods belonging to another class must be qualified by the class name (`MathHelper.square(5)`) or imported via `import static`.",
    "Unqualified Static Method Error", "error", "easy",
    "Recognized missing class qualification on external static method.",
    "Qualify external static methods with their class name: `ClassName.methodName()`."
)

add_q(
    "Why does this method fail to compile?\n```java\npublic void process() {\n    int a = 10;\n    int a = 20;\n}\n```",
    [
        "a cannot be assigned 20",
        "Variable 'a' is already defined in scope",
        "process cannot be void",
        "Local variables must be final"
    ],
    1,
    "Declaring two local variables with the exact same name within the same block scope is illegal.",
    "Duplicate Local Variable Error", "error", "easy",
    "Spotted redeclaration of local variable in same block scope.",
    "A local variable cannot be redeclared within the same scope."
)

add_q(
    "Identify the bug in this array-modifying method:\n```java\npublic static void clearArray(int[] arr) {\n    arr = null;\n}\n```",
    [
        "Throws NullPointerException",
        "Does not nullify the caller's array reference because `arr` is a local reference copy passed by value",
        "Compilation error: cannot assign null to array",
        "Arrays cannot be passed to static methods"
    ],
    1,
    "Setting `arr = null` updates only the local parameter variable. The caller's reference still points to the array on the heap.",
    "Parameter Reference Nullification Bug", "error", "medium",
    "Understands that nullifying a parameter reference does not affect the caller.",
    "Setting an object parameter to null does not nullify the caller's reference."
)

add_q(
    "Why does this code fail to compile?\n```java\npublic static int findMax(int... nums, int threshold) {\n    return 0;\n}\n```",
    [
        "findMax cannot return 0",
        "Varargs parameter `int... nums` must be the last parameter; `int threshold` cannot follow it",
        "threshold must be double",
        "nums cannot be named nums"
    ],
    1,
    "Varargs parameters must be positioned at the very end of the formal parameter list.",
    "Misplaced Varargs Parameter", "error", "easy",
    "Caught varargs parameter placed before non-varargs parameter.",
    "The varargs parameter must be placed at the end of the parameter list."
)

add_q(
    "What is the compilation issue in this method?\n```java\npublic static double divide(int a, int b) {\n    if (b == 0) {\n        System.out.println(\"Error: div by zero\");\n    } else {\n        return (double) a / b;\n    }\n}\n```",
    [
        "(double) a / b is an invalid cast",
        "Missing return statement: if `b == 0`, execution exits the if-block without returning a double",
        "divide must be void",
        "println cannot be inside if-block"
    ],
    1,
    "If `b == 0`, the method prints an error message but fails to return a double or throw an exception, violating the `double` return contract.",
    "Missing Return in Error Branch", "error", "easy",
    "Spotted missing return in error branch.",
    "Ensure every control flow branch returns a value or throws an exception."
)

add_q(
    "Why does this code cause a compilation error?\n```java\npublic void test(final int x) {\n    x = x + 1;\n}\n```",
    [
        "Parameters cannot be marked final",
        "Cannot assign a value to final variable x",
        "x + 1 is an invalid expression",
        "test must return int"
    ],
    1,
    "Marking a parameter with `final` makes it immutable. Reassigning `x = x + 1` causes a compile error: 'cannot assign a value to final variable x'.",
    "Final Parameter Mutation Error", "error", "easy",
    "Recognized reassignment of final method parameter.",
    "`final` parameters cannot be reassigned within the method body."
)

add_q(
    "What is wrong with this method declaration?\n```java\npublic static void compute(int a, int b = 10) {}\n```",
    [
        "compute must return int",
        "Java does not support default parameter values in method headers (unlike C++ or Python)",
        "a and b must be floats",
        "Missing method body"
    ],
    1,
    "Java syntax does not support default parameter values. Default behavior must be implemented using method overloading.",
    "Unsupported Default Parameter Syntax", "error", "easy",
    "Recognized that Java does not support default parameter values.",
    "Java does not allow default parameter values in method headers; use method overloading instead."
)

add_q(
    "Why does the following snippet fail to compile?\n```java\npublic class A {\n    public static void run() {\n        System.out.println(this);\n    }\n}\n```",
    [
        "println cannot print this",
        "Non-static variable 'this' cannot be referenced from a static context",
        "run must return String",
        "A cannot be public"
    ],
    1,
    "`this` represents the current object instance. Static methods belong to the class and have no object instance, so using `this` inside a static method is illegal.",
    "This Keyword in Static Context Error", "error", "easy",
    "Caught use of 'this' inside static method.",
    "The keyword `this` cannot be used inside static methods."
)

add_q(
    "Identify the bug in this Fibonacci implementation:\n```java\npublic static int fib(int n) {\n    if (n == 0) return 0;\n    if (n == 1) return 1;\n    return fib(n - 1) + fib(n);\n}\n```",
    [
        "fib(0) should be 1",
        "The second recursive call is `fib(n)` instead of `fib(n - 2)`, causing infinite recursion and `StackOverflowError`",
        "fib cannot return int",
        "Missing base case"
    ],
    1,
    "`fib(n)` calls `fib(n)` with the exact same argument, entering an immediate infinite recursion loop.",
    "Fibonacci Infinite Recursion Bug", "error", "easy",
    "Spotted infinite recursion in second recursive call.",
    "Standard Fibonacci recursion must call `fib(n - 1) + fib(n - 2)`."
)

add_q(
    "Why does this code cause a compiler error?\n```java\npublic void doWork() {\n    return 5;\n}\n```",
    [
        "5 is not a valid integer",
        "Incompatible types: cannot return a value from a method with void result type",
        "doWork must be private",
        "return must be in braces"
    ],
    1,
    "A method declared with `void` return type cannot return any value or expression.",
    "Returning Value from Void Method", "error", "easy",
    "Caught returning a value from a void method.",
    "A `void` method cannot return a value."
)

add_q(
    "What error occurs in this code snippet?\n```java\npublic static int calc(int n) {\n    while (n > 0) {\n        return n;\n    }\n}\n```",
    [
        "n cannot be decremented",
        "Missing return statement: if `n <= 0`, the while loop never executes, leaving the method without a return",
        "while cannot be inside a method",
        "return cannot be inside a while loop"
    ],
    1,
    "The compiler detects that if `n <= 0`, the while loop is bypassed entirely, leaving no return statement for the method.",
    "Conditional Loop Missing Return", "error", "medium",
    "Recognized missing return when loop is bypassed.",
    "Methods must provide a fallback return outside loops in case the loop condition is false."
)

add_q(
    "Why does this overloaded method call fail?\n```java\npublic static void test(String s) {}\npublic static void test(Integer i) {}\n\npublic static void main(String[] args) {\n    test(null);\n}\n```",
    [
        "null is not allowed in Java",
        "Reference to `test` is ambiguous: `null` is a valid literal for both String and Integer, and neither class is a subtype of the other",
        "String cannot be overloaded",
        "test requires two arguments"
    ],
    1,
    "`null` matches any reference type. Because neither `String` nor `Integer` extends the other, the compiler cannot determine which overload is more specific, producing an ambiguity error.",
    "Ambiguous Null Overload Call", "error", "hard",
    "Understands overload ambiguity when passing literal null to unrelated object types.",
    "Passing `null` to overloaded methods with unrelated reference types causes ambiguity errors; cast the null explicitly: `test((String) null)`."
)

add_q(
    "Identify the issue in this method header:\n```java\npublic void execute(int x, ...String items) {}\n```",
    [
        "execute must return boolean",
        "Syntax error: varargs syntax is `Type... name`, not `...Type name`",
        "x must be String",
        "items must be an array"
    ],
    1,
    "Java varargs syntax places the ellipsis after the type (`String... items` or `String ...items`), not before.",
    "Varargs Ellipsis Syntax Error", "error", "easy",
    "Caught invalid ellipsis placement in varargs declaration.",
    "Varargs syntax is `Type... name`, with the ellipsis following the type."
)

add_q(
    "Why does the following snippet fail to compile?\n```java\npublic void setSize(int w, int h) {\n    int area = w * h;\n}\npublic int getArea() {\n    return area;\n}\n```",
    [
        "w * h is invalid",
        "Cannot find symbol: variable 'area' is local to `setSize()` and cannot be accessed inside `getArea()`",
        "setSize must return area",
        "getArea must take parameters"
    ],
    1,
    "Variable `area` is declared as a local variable inside `setSize()`. It goes out of scope when `setSize()` returns. To share it between methods, declare `area` as an instance field.",
    "Local Variable Scope Leak Error", "error", "easy",
    "Caught referencing a local variable from another method.",
    "Local variables cannot be accessed outside the method where they are declared; use instance fields for shared state."
)

add_q(
    "What compilation error occurs in this method definition?\n```java\npublic static void greet() {\n    public void nestedGreet() {}\n}\n```",
    [
        "greet cannot be static",
        "Illegal start of expression: Java does not allow methods to be defined inside other methods",
        "nestedGreet must return String",
        "public is redundant"
    ],
    1,
    "Java does not support nested method definitions. Methods must be declared directly inside a class, interface, or enum body.",
    "Nested Method Declaration Error", "error", "easy",
    "Recognized that methods cannot be declared inside other methods.",
    "Methods cannot be declared inside another method in Java."
)

# --- Ch 4: 3. Output (25 Qs) ---
add_q(
    "What is the output of the following code?\n```java\npublic static void modify(int x) {\n    x += 10;\n}\npublic static void main(String[] args) {\n    int a = 5;\n    modify(a);\n    System.out.println(a);\n}\n```",
    ["15", "5", "10", "0"],
    1,
    "Java passes primitives by value. `modify` alters only its local copy of `x`. The caller's variable `a` remains 5.",
    "Primitive Pass-by-Value Output", "output", "easy",
    "Recognized that primitive arguments are unaffected by method modification.",
    "Primitive parameters are copies; modifying them inside a method does not change the caller's variable."
)

add_q(
    "What is the output of this code?\n```java\npublic static void modify(int[] arr) {\n    arr[0] = 99;\n}\npublic static void main(String[] args) {\n    int[] data = {1, 2, 3};\n    modify(data);\n    System.out.println(data[0]);\n}\n```",
    ["1", "99", "0", "NullPointerException"],
    1,
    "The method receives a copy of the reference pointing to the array object on the heap. Mutating `arr[0]` directly modifies the shared array. Outputs 99.",
    "Array Mutation via Method Output", "output", "easy",
    "Tracked element mutation through passed array reference.",
    "Mutating array elements inside a method modifies the caller's array object on the heap."
)

add_q(
    "What does this code print?\n```java\npublic static void reassign(int[] arr) {\n    arr = new int[]{10, 20};\n}\npublic static void main(String[] args) {\n    int[] data = {1, 2};\n    reassign(data);\n    System.out.println(data[0]);\n}\n```",
    ["10", "1", "20", "NullPointerException"],
    1,
    "Reassigning `arr` inside `reassign()` updates only the local parameter reference. The caller's reference `data` continues to point to `{1, 2}`. Outputs 1.",
    "Parameter Reassignment Output", "output", "medium",
    "Correctly recognized that parameter reassignment does not affect caller reference.",
    "Reassigning an object parameter to a new object does NOT reassign the caller's reference."
)

add_q(
    "What is the output of this recursive method for `mystery(4)`?\n```java\npublic static int mystery(int n) {\n    if (n <= 1) return 1;\n    return n + mystery(n - 1);\n}\n```",
    ["10", "4", "24", "15"],
    0,
    "`mystery(4) = 4 + mystery(3) = 4 + 3 + mystery(2) = 4 + 3 + 2 + mystery(1) = 4 + 3 + 2 + 1 = 10`.",
    "Recursive Sum Output", "output", "easy",
    "Traced basic linear recursion call stack.",
    "`4 + 3 + 2 + 1 = 10`."
)

add_q(
    "What does the following recursive code print?\n```java\npublic static void printNums(int n) {\n    if (n == 0) return;\n    printNums(n - 1);\n    System.out.print(n + \" \");\n}\npublic static void main(String[] args) {\n    printNums(3);\n}\n```",
    ["3 2 1 ", "1 2 3 ", "3 2 1 0 ", "0 1 2 3 "],
    1,
    "Because the recursive call precedes the print statement, printing occurs during call stack unwinding: `1`, then `2`, then `3`. Output: `1 2 3 `.",
    "Recursion Unwinding Print Order", "output", "medium",
    "Recognized print-after-recursive-call execution order during stack unwinding.",
    "Printing after the recursive call executes in reverse (bottom-up unwinding) order: 1 2 3."
)

add_q(
    "What does the following recursive code print?\n```java\npublic static void printNums(int n) {\n    if (n == 0) return;\n    System.out.print(n + \" \");\n    printNums(n - 1);\n}\npublic static void main(String[] args) {\n    printNums(3);\n}\n```",
    ["3 2 1 ", "1 2 3 ", "3 2 1 0 ", "0 1 2 3 "],
    0,
    "Because the print statement occurs before recursing, printing happens on the way down: `3 2 1 `.",
    "Recursion Pre-Order Print", "output", "easy",
    "Recognized pre-order execution timing before recursive descent.",
    "Printing before the recursive call executes in descending order: 3 2 1."
)

add_q(
    "What is the output of this overloaded method call?\n```java\npublic static void test(int a) { System.out.print(\"int \"); }\npublic static void test(double a) { System.out.print(\"double \"); }\n\npublic static void main(String[] args) {\n    test(5);\n    test(5.0);\n    test('A');\n}\n```",
    ["int double double ", "int double int ", "double double double ", "int int int "],
    1,
    "`test(5)` calls `test(int)`. `test(5.0)` calls `test(double)`. `test('A')`: `char` widens to `int` before `double`, selecting `test(int)`. Output: `int double int `.",
    "Overload Widening Specificity Output", "output", "medium",
    "Accurately resolved primitive widening to overloaded methods.",
    "`char` widens directly to `int`, selecting `test(int)` over `test(double)`."
)

add_q(
    "What is the output of this code?\n```java\npublic static int count(int... nums) {\n    return nums.length;\n}\npublic static void main(String[] args) {\n    System.out.println(count(1, 2, 3) + \" \" + count());\n}\n```",
    ["3 0", "3 1", "3 null", "Error"],
    0,
    "`count(1, 2, 3)` passes 3 elements (length 3). Calling `count()` with zero arguments creates an empty array of length 0. Outputs `3 0`.",
    "Varargs Empty Call Output", "output", "easy",
    "Understands that zero varargs arguments create a length-0 array.",
    "Calling a varargs method with no arguments passes an array of length 0."
)

add_q(
    "What is the output of the following recursive function for `f(3)`?\n```java\npublic static int f(int n) {\n    if (n <= 1) return 1;\n    return f(n - 1) + f(n - 2);\n}\n```",
    ["2", "3", "5", "1"],
    1,
    "`f(0)=1`, `f(1)=1`. `f(2) = f(1) + f(0) = 1 + 1 = 2`. `f(3) = f(2) + f(1) = 2 + 1 = 3`.",
    "Tree Recursion Evaluation", "output", "medium",
    "Traced tree recursion for Fibonacci-like sequence.",
    "`f(3) = f(2) + f(1) = 2 + 1 = 3`."
)

add_q(
    "What does this code print?\n```java\npublic static void greet(String name) {\n    name = \"Alice\";\n}\npublic static void main(String[] args) {\n    String s = \"Bob\";\n    greet(s);\n    System.out.println(s);\n}\n```",
    ["Alice", "Bob", "null", "AliceBob"],
    1,
    "`String` references are passed by value, and Strings are immutable. Reassigning `name = \"Alice\"` modifies only the local parameter reference. `s` remains `\"Bob\"`.",
    "String Parameter Immutability Output", "output", "easy",
    "Understands that Strings cannot be mutated via method parameters.",
    "String objects are immutable and passed by reference value; caller variable remains unchanged."
)

add_q(
    "What is the output of this code?\n```java\npublic static int calc(int n) {\n    if (n == 1) return 1;\n    return n * calc(n - 1);\n}\npublic static void main(String[] args) {\n    System.out.println(calc(4));\n}\n```",
    ["10", "24", "12", "4"],
    1,
    "`calc(4) = 4 * calc(3) = 4 * 3 * calc(2) = 4 * 3 * 2 * 1 = 24`.",
    "Factorial Recursion Output", "output", "easy",
    "Computed factorial recursive product.",
    "`4 * 3 * 2 * 1 = 24`."
)

add_q(
    "What does this code print?\n```java\npublic static int foo(int a, int b) {\n    if (b == 0) return 0;\n    return a + foo(a, b - 1);\n}\npublic static void main(String[] args) {\n    System.out.println(foo(3, 4));\n}\n```",
    ["7", "12", "0", "81"],
    1,
    "This recursively computes multiplication via repeated addition: `3 + foo(3, 3) = 3 + 3 + 3 + 3 = 12`.",
    "Recursive Multiplication via Addition", "output", "medium",
    "Recognized recursive multiplication pattern.",
    "Repeated addition of 3 four times equals 12."
)

add_q(
    "What is the output of the following code?\n```java\npublic static void swap(int[] arr, int i, int j) {\n    int temp = arr[i];\n    arr[i] = arr[j];\n    arr[j] = temp;\n}\npublic static void main(String[] args) {\n    int[] arr = {10, 20};\n    swap(arr, 0, 1);\n    System.out.println(arr[0] + \" \" + arr[1]);\n}\n```",
    ["10 20", "20 10", "20 20", "10 10"],
    1,
    "Because the method accesses elements of the shared heap array object through `arr[i]` and `arr[j]`, the element swap persists! Outputs `20 10`.",
    "Array Element Swap Helper Output", "output", "easy",
    "Understands that array element swaps inside helper methods persist.",
    "Mutating elements within an array parameter modifies the actual array."
)

add_q(
    "What does this snippet print?\n```java\npublic static void print(int a, int... more) {\n    System.out.println(a + \" \" + more.length);\n}\npublic static void main(String[] args) {\n    print(5);\n}\n```",
    ["5 0", "5 1", "5 null", "Error"],
    0,
    "`a` receives the mandatory first argument 5. The varargs parameter `more` receives 0 arguments, creating an array of length 0. Output: `5 0`.",
    "Mandatory Parameter with Varargs", "output", "medium",
    "Accurately parsed mandatory parameter alongside empty varargs.",
    "Mandatory parameter consumes 5; varargs array has length 0."
)

add_q(
    "What is the output of this code?\n```java\npublic static int mystery(int n) {\n    if (n <= 0) return 0;\n    return (n % 10) + mystery(n / 10);\n}\npublic static void main(String[] args) {\n    System.out.println(mystery(1234));\n}\n```",
    ["10", "4321", "4", "24"],
    0,
    "This method recursively sums the digits of `n`: `4 + mystery(123) = 4 + 3 + 2 + 1 = 10`.",
    "Recursive Sum of Digits", "output", "medium",
    "Traced recursive digit extraction and summation.",
    "`1 + 2 + 3 + 4 = 10`."
)

add_q(
    "What does the following code print?\n```java\npublic static int f(int x) {\n    return (x > 10) ? x : f(x + 3);\n}\npublic static void main(String[] args) {\n    System.out.println(f(2));\n}\n```",
    ["11", "12", "14", "10"],
    0,
    "`f(2)` -> `f(5)` -> `f(8)` -> `f(11)`. When `x = 11`, `11 > 10` is true, returning 11.",
    "Tail-Recursive Step Accumulation", "output", "medium",
    "Traced step progression in ternary recursive function.",
    "Steps: 2 -> 5 -> 8 -> 11; 11 > 10 returns 11."
)

add_q(
    "What is the output of this code?\n```java\npublic static void show(Object o) { System.out.print(\"Object \"); }\npublic static void show(String s) { System.out.print(\"String \"); }\n\npublic static void main(String[] args) {\n    show(\"Hello\");\n    show(123);\n}\n```",
    ["String Object ", "Object Object ", "String String ", "Object String "],
    0,
    "`show(\"Hello\")`: `String` matches the most specific overload `show(String)`. `show(123)`: `Integer` autoboxes and matches `show(Object)` because Integer does not extend String. Output: `String Object `.",
    "Object vs String Overload Resolution", "output", "medium",
    "Correctly resolved specificity between Object and String overloads.",
    "\"Hello\" selects specific `show(String)`; 123 falls back to `show(Object)`."
)

add_q(
    "What does this code print?\n```java\npublic static int gcd(int a, int b) {\n    return (b == 0) ? a : gcd(b, a % b);\n}\npublic static void main(String[] args) {\n    System.out.println(gcd(48, 18));\n}\n```",
    ["6", "18", "2", "3"],
    0,
    "Euclidean algorithm: `gcd(48, 18)` -> `gcd(18, 48 % 18 = 12)` -> `gcd(12, 18 % 12 = 6)` -> `gcd(6, 12 % 6 = 0)` -> returns 6.",
    "Euclidean GCD Recursion", "output", "medium",
    "Traced Euclidean algorithm for greatest common divisor.",
    "GCD of 48 and 18 is 6."
)

add_q(
    "What is the output of this code?\n```java\npublic static void test(int a, Integer b) { System.out.print(\"A \"); }\npublic static void test(Integer a, int b) { System.out.print(\"B \"); }\n\npublic static void main(String[] args) {\n    test(1, Integer.valueOf(2));\n}\n```",
    ["A ", "B ", "A B ", "Ambiguous compilation error"],
    0,
    "`test(1, Integer.valueOf(2))` passes an `int` and an `Integer`. This exact type match fits `test(int, Integer)` without requiring dual conversions. Outputs `A `.",
    "Exact Match Autoboxing Overload", "output", "hard",
    "Recognized exact signature match over ambiguous dual-boxing.",
    "Argument types `int, Integer` match `test(int, Integer)` exactly, outputting 'A '."
)

add_q(
    "What is printed by this code?\n```java\npublic static boolean isEven(int n) {\n    if (n == 0) return true;\n    return isOdd(n - 1);\n}\npublic static boolean isOdd(int n) {\n    if (n == 0) return false;\n    return isEven(n - 1);\n}\npublic static void main(String[] args) {\n    System.out.println(isEven(4));\n}\n```",
    ["true", "false", "StackOverflowError", "Compilation error"],
    0,
    "Mutual recursion: `isEven(4)` -> `isOdd(3)` -> `isEven(2)` -> `isOdd(1)` -> `isEven(0)` -> returns `true`.",
    "Mutual Recursion Parity Output", "output", "medium",
    "Traced indirect mutual recursion execution.",
    "4 is even; mutual recursion reduces to `isEven(0) == true`."
)

add_q(
    "What is the output of this code?\n```java\npublic static int power(int base, int exp) {\n    if (exp == 0) return 1;\n    return base * power(base, exp - 1);\n}\npublic static void main(String[] args) {\n    System.out.println(power(2, 4));\n}\n```",
    ["8", "16", "32", "64"],
    1,
    "`power(2, 4) = 2 * 2 * 2 * 2 = 16`.",
    "Recursive Power Function", "output", "easy",
    "Calculated recursive power output.",
    "`2^4 = 16`."
)

add_q(
    "What does this code print?\n```java\npublic static void doSomething(int x) {\n    x = 50;\n    System.out.print(x + \" \");\n}\npublic static void main(String[] args) {\n    int x = 10;\n    doSomething(x);\n    System.out.print(x);\n}\n```",
    ["50 50", "50 10", "10 50", "10 10"],
    1,
    "`doSomething` prints its modified local `x` (50). `main` prints its own unchanged local `x` (10). Output: `50 10`.",
    "Local Variable Shadowing across Methods", "output", "easy",
    "Distinguished separate local variable scopes across calling and called methods.",
    "Methods have independent stack frames; outputs 50 then 10."
)

add_q(
    "What is the output of this code?\n```java\npublic static int sum(int... nums) {\n    int total = 0;\n    for (int n : nums) total += n;\n    return total;\n}\npublic static void main(String[] args) {\n    int[] arr = {10, 20, 30};\n    System.out.println(sum(arr));\n}\n```",
    ["60", "3", "0", "Compilation error: array cannot be passed to varargs"],
    0,
    "In Java, an explicit array `arr` can be passed directly as a varargs argument. It is accepted as the varargs array, summing elements: `10 + 20 + 30 = 60`.",
    "Passing Array to Varargs Output", "output", "medium",
    "Understands that array instances can be passed directly to varargs parameters.",
    "An existing array can be passed directly to a varargs method parameter."
)

add_q(
    "What does this snippet print?\n```java\npublic static void test(long x) { System.out.print(\"long \"); }\npublic static void test(Integer x) { System.out.print(\"Integer \"); }\n\npublic static void main(String[] args) {\n    int n = 5;\n    test(n);\n}\n```",
    ["long ", "Integer ", "Compilation error", "Runtime exception"],
    0,
    "Java's overload resolution rules prioritize primitive widening (`int` -> `long`) over boxing (`int` -> `Integer`). Outputs `long `.",
    "Widening Beats Boxing in Overload", "output", "hard",
    "Mastered Java precedence rule: primitive widening takes priority over boxing.",
    "Widening beats boxing: `int` widens to `long` instead of boxing to `Integer`."
)

add_q(
    "What is the output of this code?\n```java\npublic static String reverse(String s) {\n    if (s.isEmpty()) return s;\n    return reverse(s.substring(1)) + s.charAt(0);\n}\npublic static void main(String[] args) {\n    System.out.println(reverse(\"Java\"));\n}\n```",
    ["Java", "avaJ", "aJav", "avJa"],
    1,
    "Recursive string reversal: `reverse(\"ava\") + 'J'` -> `reverse(\"va\") + 'a' + 'J'` ... yielding `\"avaJ\"`.",
    "Recursive String Reversal", "output", "medium",
    "Traced recursive string manipulation.",
    "`\"Java\"` reversed is `\"avaJ\"`."
)

# --- Ch 4: 4. Scenario (25 Qs) ---
add_q(
    "You are designing a mathematical utility library for an engineering department. You need a method that computes the area of a circle, rectangle, and triangle. How should these methods be designed according to Java clean code conventions?",
    [
        "Create 3 completely separate classes with different names",
        "Use method overloading with the common name `area`: `area(double radius)`, `area(double width, double height)`, etc.",
        "Name them `area1`, `area2`, `area3`",
        "Pass an integer opcode flag to a single giant switch method"
    ],
    1,
    "Method overloading provides a clean, unified API (`area(...)`) where the caller's parameter types naturally determine which geometric calculation executes.",
    "API Design via Overloading", "scenario", "easy",
    "Applied method overloading for cohesive mathematical utility APIs.",
    "Use method overloading to provide intuitive, uniform method names for related operations."
)

add_q(
    "A file system crawler traverses directory trees on a server. Since directory structures can have arbitrary nested depth (folders containing folders), which programming paradigm is the most natural fit?",
    [
        "A single three-level nested for loop",
        "Recursion: a method that lists files in the current folder and calls itself recursively on every subdirectory encountered",
        "A 100-case switch statement",
        "Writing to a temporary text file"
    ],
    1,
    "Hierarchical tree structures like file systems and organizational charts are inherently recursive; recursive traversal is concise, elegant, and naturally handles arbitrary depth.",
    "Recursive Tree Traversal Pattern", "scenario", "easy",
    "Identified recursive traversal as the natural design for hierarchical data structures.",
    "Use recursion for tree and nested directory traversals."
)

add_q(
    "A banking transaction service executes customer transfers. A junior developer writes: `public void transfer(Account from, Account to, double amount)`. What defensive checks should be the very first statements inside the method?",
    [
        "Print 'Transfer Started'",
        "Parameter validation (preconditions): verify `from != null`, `to != null`, `from != to`, and `amount > 0` before modifying balances",
        "Immediately deduct funds from `from`",
        "Reassign `from` to a new Account object"
    ],
    1,
    "Defensive programming requires validating method preconditions first to reject invalid states (null pointers, negative transfer amounts) before any state mutations occur.",
    "Defensive Precondition Validation", "scenario", "easy",
    "Employed defensive precondition validation at method boundaries.",
    "Validate all arguments for null and valid ranges at the start of public methods."
)

add_q(
    "An enterprise billing service calculates tiered volume discounts. The calculation is complex. To keep the method under 25 lines and readable, what refactoring technique should be applied?",
    [
        "Inline all calculations into one massive 500-line method",
        "Extract Method refactoring: break helper calculations into private auxiliary methods (e.g. `calculateBaseTier()`, `applyVat()`)",
        "Use global static variables to share state",
        "Replace variables with single-letter names"
    ],
    1,
    "Extract Method refactoring decomposes complex logic into small, focused, testable private helper methods, improving code readability and maintainability.",
    "Extract Method Refactoring", "scenario", "easy",
    "Applied Extract Method refactoring to maintain clean code standards.",
    "Break long methods into smaller private helper methods with clear descriptive names."
)

add_q(
    "You are building a high-performance pathfinding algorithm (like A* or DFS) in a game engine. Deep recursion causes a `StackOverflowError` on large maps. How can this algorithm be refactored to handle arbitrarily large maps without call stack exhaustion?",
    [
        "Increase JVM stack size with `-Xss` to 1GB",
        "Convert the recursive algorithm to an iterative algorithm using an explicit heap-allocated `Deque`/`Stack` data structure",
        "Use tail recursion without base case",
        "Change return types to float"
    ],
    1,
    "The call stack has limited memory (~1MB). Refactoring to an iterative loop using an explicit stack on the heap allows scaling to millions of nodes limited only by heap capacity.",
    "Iterative Stack Conversion", "scenario", "hard",
    "Mastered converting recursion to an explicit heap-based iterative stack to prevent StackOverflowError.",
    "Convert deep recursion to an iterative loop with a heap-allocated Stack to handle large inputs."
)

add_q(
    "A logging utility allows developers to log messages with variable numbers of contextual tags: `log(\"User logged in\", \"AUTH\", \"SUCCESS\", \"IP=127.0.0.1\")`. Which Java language feature is designed specifically for this requirement?",
    [
        "Method overloading with 20 different parameter counts",
        "Varargs: `public void log(String message, String... tags)`",
        "Passing a raw Object",
        "Parsing a comma-delimited String"
    ],
    1,
    "Varargs (`String... tags`) allows callers to pass zero, one, or multiple arguments seamlessly without manually constructing an array.",
    "Varargs Logging Utility", "scenario", "easy",
    "Designed flexible logging API using varargs.",
    "Use varargs (`Type...`) for methods accepting arbitrary numbers of optional arguments."
)

add_q(
    "A e-commerce checkout method `public OrderReceipt processCheckout(Cart cart, User user)` needs to ensure that the passed `cart` object cannot be modified by any external concurrent thread during processing. How can the method protect the cart?",
    [
        "Cast cart to Object",
        "Create a defensive copy of the cart's items upon entry before processing calculations",
        "Set `cart = null`",
        "Declare cart as static"
    ],
    1,
    "Defensive copying isolates the method from external changes made by callers or concurrent threads after the method has begun execution.",
    "Defensive Copying Pattern", "scenario", "medium",
    "Applied defensive copying to protect mutable parameter state.",
    "Create defensive copies of mutable arguments to ensure internal state integrity."
)

add_q(
    "A financial reporting tool must return both the lowest quarterly revenue, highest quarterly revenue, and the annual total from a single method. Since Java methods only return one value, what is the cleanest object-oriented approach?",
    [
        "Return a `double[]` containing 3 elements: `new double[]{min, max, total}` or create a dedicated record/class `RevenueSummary`",
        "Encode all 3 numbers into a concatenated String `\"min:max:total\"`",
        "Write the values to a text file and read them back",
        "Modify global static variables"
    ],
    0,
    "Bundling multiple related return values into a structured array or dedicated record/class (`RevenueSummary`) preserves type safety, clarity, and encapsulation.",
    "Multiple Return Values via Encapsulation", "scenario", "easy",
    "Bundled multiple return metrics into structured records or arrays.",
    "Return multiple values by encapsulating them into a custom record, class, or typed array."
)

add_q(
    "A cryptography algorithm calculates `BigInteger.modPow(exp, mod)` using repeated squaring: `power(base, exp) = (power(base, exp/2))^2`. Why is this recursive formulation superior to naive `base * power(base, exp - 1)`?",
    [
        "It uses zero stack memory",
        "It reduces time complexity from linear O(N) to logarithmic O(log N)",
        "It prevents rounding errors in floats",
        "It eliminates the need for base cases"
    ],
    1,
    "Repeated squaring halves the exponent at each step, slashing the number of recursive operations from N to log2(N).",
    "Divide-and-Conquer Logarithmic Recursion", "scenario", "medium",
    "Understands logarithmic divide-and-conquer efficiency in exponentiation.",
    "Divide-and-conquer recursion (`exp / 2`) achieves O(log N) performance compared to O(N) linear steps."
)

add_q(
    "You are building a user authentication service. You write a helper method `private boolean verifyPasswordHash(String input, String storedHash)`. Why should this helper method be marked `private` rather than `public`?",
    [
        "Private methods run faster in the JVM",
        "Encapsulation (information hiding): password verification details are internal implementation secrets that outside classes should not access directly",
        "Public methods cannot compare Strings",
        "Private methods are automatically encrypted"
    ],
    1,
    "The principle of least privilege and encapsulation mandates that internal helper methods be private, exposing only necessary public API contracts.",
    "Access Modifier Encapsulation", "scenario", "easy",
    "Applied encapsulation and access control to protect internal helper logic.",
    "Keep internal implementation details and helper methods `private`."
)

add_q(
    "A graphics rendering pipeline needs a method to convert temperature values from Celsius to Fahrenheit, and another from Fahrenheit to Celsius. What is the most descriptive method naming convention?",
    [
        "`calc1(double c)` and `calc2(double f)`",
        "`celsiusToFahrenheit(double c)` and `fahrenheitToCelsius(double f)`",
        "`convert(double temp)` overloaded with same signature",
        "`temp(double val, boolean isC)`"
    ],
    1,
    "Descriptive, intention-revealing method names (`celsiusToFahrenheit`) eliminate ambiguity and communicate exact intent without relying on cryptic boolean flags.",
    "Clean Code Method Naming", "scenario", "easy",
    "Selected intention-revealing method names for unit conversion.",
    "Choose descriptive, self-documenting method names over cryptic abbreviations."
)

add_q(
    "A recursive maze solver marks visited cells with `'.'` and backtracks if it hits a dead end by unmarking the cell back to `' '`. What algorithmic technique is this?",
    [
        "Greedy search",
        "Backtracking: exploring tentative solutions recursively and undoing state changes when constraints are violated",
        "Dynamic programming tabulation",
        "Binary search"
    ],
    1,
    "Backtracking builds candidates incrementally and abandons (backtracks) a candidate as soon as it determines the candidate cannot yield a valid solution.",
    "Backtracking Algorithm Paradigm", "scenario", "medium",
    "Understands recursive backtracking and state restoration.",
    "Backtracking explores candidate paths recursively, undoing state mutations upon dead ends."
)

add_q(
    "A university student portal calculates course tuition. Malaysian domestic students pay RM 200 per credit; international students pay RM 450 per credit plus a fixed RM 1,000 visa fee. How should this be implemented with overloaded methods?",
    [
        "`calculateTuition(int credits)` for domestic, and `calculateTuition(int credits, boolean isInternational)` (or separate dedicated signatures)",
        "Hardcode the fee as RM 200 for all students",
        "Use a single method that prompts the user from the keyboard via Scanner",
        "Create 2 separate applications"
    ],
    0,
    "Overloaded methods cleanly accommodate default domestic rates while allowing an extended signature for international parameters.",
    "Overloading for Business Policy Defaults", "scenario", "easy",
    "Applied method overloading to support default and specialized business rules.",
    "Use method overloading to provide clean defaults for common operational scenarios."
)

add_q(
    "An audio DSP plugin processes an audio buffer. The method signature is `public void applyGain(float[] buffer, float gain)`. Why does this method not need to return the array (`return buffer;`)?",
    [
        "Methods modifying floats cannot return arrays",
        "Because `buffer` references the caller's heap array object, changes to `buffer[i]` modify the caller's audio data directly in place",
        "Audio drivers handle returns automatically",
        "The method is marked public"
    ],
    1,
    "Passing an array passes a reference to the existing array. Modifying elements in-place updates the caller's array directly, making a return statement redundant.",
    "In-Place Buffer Processing", "scenario", "easy",
    "Understands in-place array modification via object references.",
    "In-place array modifications update the caller's heap object directly without needing to return the array."
)

add_q(
    "A developer is implementing a recursive merge sort `mergeSort(int[] arr, int left, int right)`. What is the correct base case condition?",
    [
        "`if (left >= right) return;` (subarray has 0 or 1 element and is already sorted)",
        "`if (left == 0) return;`",
        "`if (right == arr.length) return;`",
        "`if (arr[left] == arr[right]) return;`"
    ],
    0,
    "In divide-and-conquer sorting, a subarray with 0 or 1 element (`left >= right`) is trivially sorted and requires no further splitting.",
    "Divide-and-Conquer Base Case", "scenario", "medium",
    "Formulated correct base case for recursive divide-and-conquer algorithms.",
    "A subarray of length 0 or 1 (`left >= right`) is trivially sorted; return immediately."
)

add_q(
    "A billing engine requires calculating compound interest: `A = P * (1 + r/n)^(n*t)`. Should this be implemented recursively or iteratively using `Math.pow()`?",
    [
        "Recursively with 1000 calls",
        "Iteratively using `Math.pow()` because it executes in O(1) time and avoids unnecessary stack frame allocation",
        "Neither, compound interest is impossible in Java",
        "Using a switch statement"
    ],
    1,
    "While mathematically expressible recursively, direct calculation using closed-form formulas like `Math.pow()` is O(1), instantaneous, and completely eliminates stack overhead.",
    "Closed-Form vs Recursion Choice", "scenario", "easy",
    "Prefers closed-form mathematical functions over redundant recursive overhead.",
    "Use direct closed-form mathematical functions like `Math.pow()` instead of recursive iterations."
)

add_q(
    "A sensor network gateway aggregates readings from 10 sensor nodes. If any node fails to respond within 500ms, the method should return a fallback default value of `-1.0`. Which method signature and design represents this?",
    [
        "`public double getReadingWithFallback(int nodeId, double defaultValue)`",
        "`public void getReading()`",
        "`public static double reading`",
        "`public int error()`"
    ],
    0,
    "Explicitly providing a `defaultValue` parameter communicates the fallback contract cleanly, ensuring the caller controls resilience policy.",
    "Resilient Fallback Parameter Pattern", "scenario", "easy",
    "Designed robust API parameterization for fallback handling.",
    "Allow callers to supply fallback values as parameters to handle failures gracefully."
)

add_q(
    "In an autonomous drone navigation system, a method computes collision distance: `public double distance(Point3D a, Point3D b)`. How can immutability be enforced on parameters `a` and `b`?",
    [
        "Mark parameters with `final`: `public double distance(final Point3D a, final Point3D b)` and ensure `Point3D` is an immutable class",
        "Pass them as primitive doubles only",
        "Private static void",
        "Synchronize the drone"
    ],
    0,
    "`final` prevents parameter reassignment inside the method, and designing `Point3D` as an immutable class (or Java record) guarantees that point coordinates cannot be mutated.",
    "Immutability in Critical Navigation APIs", "scenario", "medium",
    "Applied `final` parameters and immutable objects for safety-critical systems.",
    "Combine `final` parameter modifiers with immutable objects for safe, read-only method operations."
)

add_q(
    "A text search engine implements binary search recursively: `binarySearch(int[] arr, int target, int low, int high)`. What recursive calls are made when `target > arr[mid]`?",
    [
        "`return binarySearch(arr, target, low, mid - 1);`",
        "`return binarySearch(arr, target, mid + 1, high);`",
        "`return binarySearch(arr, target, low, high);`",
        "`return mid;`"
    ],
    1,
    "If the target exceeds the midpoint element, it must reside in the upper half of the sorted array, so the search recurses on `mid + 1` to `high`.",
    "Recursive Binary Search Partitioning", "scenario", "medium",
    "Correctly partitioned recursive search space in binary search.",
    "When target > mid, search the right partition `[mid + 1, high]`."
)

add_q(
    "A game developer creates a damage calculation method: `public int calculateDamage(int baseAttack, double multiplier)`. If the resulting damage is negative (due to a debuff), it should be clamped to 0. Which idiom implements this cleanly?",
    [
        "`return Math.max(0, (int)(baseAttack * multiplier));`",
        "`return (int)(baseAttack * multiplier);`",
        "`if (damage < 0) throw new Exception();`",
        "`return Math.min(0, (int)(baseAttack * multiplier));`"
    ],
    0,
    "`Math.max(0, damage)` clamps negative values to zero in a single clean, readable line without verbose nested if-statements.",
    "Clamping Idiom via Math.max", "scenario", "easy",
    "Used Math.max for clean, idiomatic value clamping.",
    "Use `Math.max(MIN_VAL, val)` to clamp lower bounds cleanly."
)

add_q(
    "A credit card validation service implements the Luhn algorithm. The algorithm recursively processes digits from right to left. What is the advantage of using a private recursive helper method with an index parameter?",
    [
        "Private helpers run with superuser permissions",
        "It preserves a clean public API `public boolean isValid(String cardNumber)` while passing internal state (e.g. `index`, `isSecond`) through the private recursive helper",
        "Private helpers use less heap memory",
        "Public methods cannot call private methods"
    ],
    1,
    "The Public Wrapper / Private Recursive Helper pattern is the standard Java design: users call clean `isValid(card)` without worrying about internal low-level indices.",
    "Public Wrapper / Private Helper Pattern", "scenario", "medium",
    "Employed public wrapper / private recursive helper pattern for clean API encapsulation.",
    "Use a clean public wrapper method that delegates to a private helper with tracking parameters."
)

add_q(
    "A data science pipeline calculates the Euclidean distance between two vectors of arbitrary length: `double distance(double[] a, double[] b)`. What validation should occur before initiating the vector calculation loop?",
    [
        "`if (a == null || b == null || a.length != b.length) throw new IllegalArgumentException(\"Vectors must be non-null and of identical dimension\");`",
        "`if (a.length > 10) return 0;`",
        "`if (a == b) return 0;`",
        "`Arrays.sort(a); Arrays.sort(b);`"
    ],
    0,
    "Vector distance requires vectors of identical length. Validating `a.length != b.length` upfront prevents mismatched array traversal and `ArrayIndexOutOfBoundsException`.",
    "Vector Dimension Validation", "scenario", "easy",
    "Enforced vector dimension matching in scientific computing APIs.",
    "Validate that input arrays have identical dimensions before performing element-wise vector operations."
)

add_q(
    "A retail inventory system has a method `public boolean inStock(String itemId, int requestedQuantity)`. If `requestedQuantity <= 0`, how should the method react?",
    [
        "Return true",
        "Throw an `IllegalArgumentException` explaining that requested quantity must be positive",
        "Return false silently without notification",
        "Exit the application with System.exit(1)"
    ],
    1,
    "Throwing `IllegalArgumentException` clearly flags invalid client usage bugs rather than hiding invalid business queries behind ambiguous boolean flags.",
    "IllegalArgumentException Validation Pattern", "scenario", "medium",
    "Applied IllegalArgumentException to expose invalid client caller requests.",
    "Throw `IllegalArgumentException` when method arguments fail business precondition constraints."
)

add_q(
    "A student writes a recursive method to compute powers `power(2, 5)`. The base case is `if (exp == 0) return 1;`. What happens if a caller invokes `power(2, -3)`?",
    [
        "It returns 0.125 correctly",
        "It enters infinite recursion decrementing `-3` to `-4`, `-5`, etc., causing `StackOverflowError`",
        "It throws an ArithmeticException immediately",
        "It converts -3 to +3 automatically"
    ],
    1,
    "Because `-3` is negative and each step decrements (`exp - 1`), `exp` moves away from 0, resulting in `StackOverflowError`. The method should validate `exp >= 0` or handle negative exponents explicitly.",
    "Negative Exponent Recursion Trap", "scenario", "medium",
    "Spotted infinite recursion trap on negative input values.",
    "Guard recursive methods against negative arguments that would bypass the base case."
)

add_q(
    "A banking batch processing engine needs to format monetary balances across 50 different statement reports. Why should formatting be encapsulated in a dedicated method `public static String formatCurrency(double amount)` rather than repeating `String.format(\"RM %.2f\", amount)` across all 50 reports?",
    [
        "Java limits String.format to 5 calls per class",
        "DRY (Don't Repeat Yourself) principle: if the currency format changes (e.g. adding thousands separators or currency codes), it only needs to be updated in one single place",
        "Static methods execute in kernel mode",
        "String.format is deprecated"
    ],
    1,
    "Encapsulating common business logic into a single reusable method adheres to DRY, centralizing maintenance and ensuring consistent formatting across the entire enterprise application.",
    "DRY Principle via Reusable Utility Methods", "scenario", "easy",
    "Applied DRY principle to centralize formatting logic into reusable utility methods.",
    "Centralize repetitive operations into a single helper method to simplify future updates."
)

with open("scratch/ch4.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Generated {len(questions)} questions for Chapter 4!")
