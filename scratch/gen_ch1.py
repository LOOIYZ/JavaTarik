# -*- coding: utf-8 -*-
"""
Generate 100 questions for Chapter 1: Java Fundamentals
(Primitive types, variables, arithmetic/logical/bitwise operators, precedence, casting, Scanner, printf)
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
    "How many primitive data types exist in the standard Java programming language?",
    ["4", "6", "8", "10"],
    2,
    "Java defines exactly 8 primitive types: byte, short, int, long, float, double, char, and boolean.",
    "Primitive Types", "theory", "easy",
    "You know the exact set of Java primitive types.",
    "Remember Java has exactly 8 primitives (byte, short, int, long, float, double, char, boolean)."
)

add_q(
    "What is the memory size and default value of an uninitialized instance variable of type 'byte' in Java?",
    [
        "8 bits with default value 0",
        "16 bits with default value 0",
        "8 bits with default value null",
        "32 bits with default value 0"
    ],
    0,
    "In Java, 'byte' is an 8-bit signed two's complement integer with default value 0 (when declared as a class/instance field).",
    "Data Types & Memory", "theory", "easy",
    "Understands primitive memory sizes and default instance values.",
    "Note that 'byte' occupies 8 bits and defaults to 0."
)

add_q(
    "What is the valid range of values for a 16-bit signed Java 'short'?",
    [
        "-128 to 127",
        "-32,768 to 32,767",
        "0 to 65,535",
        "-2,147,483,648 to 2,147,483,647"
    ],
    1,
    "A Java 'short' is a 16-bit signed integer ranging from -2^15 (-32,768) to 2^15 - 1 (32,767). 'char' is 0 to 65,535 unsigned.",
    "Integer Range", "theory", "medium",
    "Understands signed integer ranges across 16-bit types.",
    "Distinguish between signed short (-32768 to 32767) and unsigned char (0 to 65535)."
)

add_q(
    "Why does the Java 'char' data type occupy 16 bits instead of 8 bits like C/C++ 'char'?",
    [
        "To allow negative character codes",
        "To support UTF-16 Unicode character representation including international alphabets",
        "To align with 32-bit CPU bus architectures",
        "Because Java does not support ASCII characters"
    ],
    1,
    "Java was designed from the beginning for internationalization, using 16-bit unsigned Unicode (UTF-16 code units) capable of representing characters from languages worldwide.",
    "Character Encoding", "theory", "medium",
    "Understands Java Unicode encoding and 16-bit char design.",
    "Review how Java char uses 16-bit unsigned Unicode (0 to 65535)."
)

add_q(
    "Which of the following is NOT a valid Java identifier?",
    ["_userCounter", "$totalPrice", "2ndAttempt", "MAX_BUFFER_SIZE"],
    2,
    "Java identifiers cannot begin with a digit (0-9). They must start with a letter, underscore (_), or currency symbol ($).",
    "Identifiers", "theory", "easy",
    "Understands Java identifier naming rules.",
    "Identifiers cannot start with numbers (e.g. '2ndAttempt' is invalid)."
)

add_q(
    "What is the difference between float and double literals in Java source code?",
    [
        "All floating-point literals are float by default; double requires 'd'",
        "Floating-point literals without suffixes are double by default; float requires an 'f' or 'F' suffix",
        "Float and double literals are interchangeable without suffixes",
        "Float occupies 64 bits while double occupies 32 bits"
    ],
    1,
    "By default, fractional numeric literals (like 3.14) are treated as 64-bit 'double'. To make it a 32-bit 'float', you must append 'f' or 'F' (e.g. 3.14f).",
    "Floating-Point Literals", "theory", "easy",
    "Recognizes double as the default floating-point literal type.",
    "Remember literal 3.14 is double; assigning it to float without 'f' causes a compile error."
)

add_q(
    "Which of the following is a reserved keyword in Java that is currently unused?",
    ["sizeof", "goto", "var", "signed"],
    1,
    "'const' and 'goto' are reserved keywords in Java, although neither has an active implementation in the language.",
    "Java Keywords", "theory", "medium",
    "Knows Java's reserved keyword list.",
    "Java reserves 'goto' and 'const' as keywords even though they are unused."
)

add_q(
    "What is the purpose of the 'final' keyword when applied to a local primitive variable?",
    [
        "It moves the variable from the stack into heap memory",
        "It makes the variable a constant whose value cannot be reassigned after initialization",
        "It ensures the variable is garbage-collected immediately when the block ends",
        "It converts the primitive into its wrapper class automatically"
    ],
    1,
    "Marking a variable with 'final' means it is a constant; once assigned a value, any attempt to reassign it causes a compilation error.",
    "Constants & Final", "theory", "easy",
    "Understands immutability enforced by the final keyword.",
    "Remember that 'final' prevents reassignment."
)

add_q(
    "What is 'type widening' (implicit casting) in Java?",
    [
        "Converting a larger data type to a smaller data type with explicit parenthesis",
        "Automatically converting a smaller primitive type to a larger compatible type without precision loss",
        "Converting an Object into a primitive type using wrapper methods",
        "Converting a String to an integer using Integer.parseInt()"
    ],
    1,
    "Widening conversion occurs automatically (e.g., int -> long -> float -> double) because the destination type can safely represent all values of the source type without truncation.",
    "Type Casting", "theory", "easy",
    "Recognizes automatic widening type conversion.",
    "Widening goes from smaller to larger types automatically (e.g., byte -> short -> int -> long -> float -> double)."
)

add_q(
    "What occurs during 'narrowing conversion' (e.g., `(int) 3.99`) in Java?",
    [
        "The value is rounded to the nearest whole number (4)",
        "The fractional part is truncated toward zero (resulting in 3)",
        "A runtime ClassCastException is thrown",
        "The JVM raises an ArithmeticException"
    ],
    1,
    "Casting a floating-point number to an integer in Java truncates the fractional portion toward zero; it does NOT round. So `(int) 3.99` results in 3.",
    "Type Casting", "theory", "medium",
    "Understands fractional truncation during narrowing casts.",
    "Narrowing cast truncates toward zero; it does not perform mathematical rounding."
)

add_q(
    "What does short-circuit evaluation mean for the logical AND operator `&&`?",
    [
        "Both operands are always evaluated regardless of truth values",
        "If the left operand is false, the right operand is not evaluated because the result must be false",
        "If the left operand is true, the right operand is skipped",
        "It evaluates right-to-left instead of left-to-right"
    ],
    1,
    "In short-circuit AND (`&&`), if the left-hand operand evaluates to false, the overall expression is already guaranteed false, so the right-hand operand is completely skipped.",
    "Logical Operators", "theory", "easy",
    "Understands short-circuit evaluation mechanism of `&&`.",
    "Remember: `&&` stops evaluating immediately if the first operand is false."
)

add_q(
    "How does the bitwise AND operator `&` differ from the logical AND operator `&&` when applied to boolean expressions?",
    [
        "`&` cannot be used with boolean operands",
        "`&` always evaluates BOTH operands without short-circuiting",
        "`&` has lower precedence than assignment `=`",
        "`&` performs string concatenation if one operand is null"
    ],
    1,
    "When applied to boolean operands, `&` performs logical AND without short-circuiting: both sides are always evaluated even if the left operand is false.",
    "Logical vs Bitwise", "theory", "medium",
    "Distinguishes short-circuit `&&` from non-short-circuit `&`.",
    "Logical `&&` short-circuits; bitwise/boolean `&` evaluates both expressions."
)

add_q(
    "What is the difference between the prefix increment `++x` and postfix increment `x++`?",
    [
        "Prefix modifies x after its current value is used in the expression; postfix modifies x first",
        "Prefix modifies x before its value is used in the expression; postfix uses current value then increments x",
        "Prefix works only on integers; postfix works on any primitive type",
        "There is no difference in any context in Java"
    ],
    1,
    "In `++x`, x is incremented before its value is yielded to the surrounding expression. In `x++`, the current value of x is used, and x is incremented afterward.",
    "Unary Operators", "theory", "easy",
    "Understands execution timing of pre-increment vs post-increment.",
    "Prefix increments first then evaluates; postfix evaluates current value then increments."
)

add_q(
    "What is the result of integer division `7 / 2` in Java?",
    ["3.5", "3", "4", "3.0"],
    1,
    "When both operands are integers, Java performs integer division, discarding any remainder/fractional part. Thus `7 / 2` yields `3`.",
    "Integer Division", "theory", "easy",
    "Knows that integer division discards fractions.",
    "Division between two integer types produces an integer, truncating any remainder."
)

add_q(
    "What is the result of `7 % -3` in Java according to the remainder operator rules?",
    ["-1", "1", "-2", "2"],
    1,
    "In Java, the sign of the result of the remainder operator `%` is determined solely by the dividend (left operand). Since 7 is positive, `7 % -3` is `1`.",
    "Modulus Operator", "theory", "hard",
    "Understands Java modulus sign rules (sign follows the dividend).",
    "In Java `a % b`, the sign of the result always matches the sign of `a`, ignoring the sign of `b`."
)

add_q(
    "Which operator has the highest precedence in Java expressions?",
    [
        "Multiplication `*`",
        "Postfix increment/decrement `x++` / `x--`",
        "Logical AND `&&`",
        "Assignment `=`"
    ],
    1,
    "Postfix operators (`[]`, `.`, `()`, `x++`, `x--`) have higher precedence than arithmetic, logical, and assignment operators.",
    "Operator Precedence", "theory", "medium",
    "Mastery of Java operator precedence hierarchy.",
    "Postfix operators and member access have the highest precedence in Java."
)

add_q(
    "What is the difference between `>>` (signed right shift) and `>>>` (unsigned right shift)?",
    [
        "`>>` shifts bits left; `>>>` shifts bits right",
        "`>>` preserves the sign bit (fills leftmost bits with sign bit); `>>>` always fills leftmost bits with zeros",
        "`>>` works on floats; `>>>` works on integers",
        "They are identical synonyms in Java"
    ],
    1,
    "`>>` is arithmetic right shift that sign-extends (fills top bits with 1 if negative, 0 if positive). `>>>` is logical right shift that unconditionally zero-fills from the left.",
    "Bitwise Operators", "theory", "hard",
    "Deep understanding of signed vs unsigned bitwise shift operations.",
    "`>>` sign-extends with sign bit; `>>>` always zero-fills the vacated high-order bits."
)

add_q(
    "What does Java do when an arithmetic overflow occurs on primitive integer types (e.g. `Integer.MAX_VALUE + 1`)?",
    [
        "Throws an `ArithmeticException`",
        "Silently wraps around in two's complement without raising an exception",
        "Caps the value at `Integer.MAX_VALUE` (saturation arithmetic)",
        "Converts the variable automatically into a `BigInteger`"
    ],
    1,
    "Standard integer arithmetic in Java does not throw an exception on overflow; it silently wraps around using two's complement representation (`Integer.MAX_VALUE + 1 == Integer.MIN_VALUE`).",
    "Integer Overflow", "theory", "medium",
    "Understands two's complement wrap-around behavior.",
    "Java integer arithmetic wraps around on overflow without throwing an exception."
)

add_q(
    "Which format specifier is used in `System.out.printf` to format a floating-point number with exactly 2 decimal places?",
    ["%2f", "%.2f", "%f.2", "%d.2"],
    1,
    "`%.2f` specifies a floating-point number formatted with exactly 2 digits after the decimal point.",
    "Formatted Output", "theory", "easy",
    "Understands `printf` precision format specifiers.",
    "Use `%.2f` to round/format floating-point numbers to 2 decimal places."
)

add_q(
    "In `System.out.printf`, which specifier is platform-independent for printing a newline character?",
    ["\\n", "%n", "%newline", "\\r\\n"],
    1,
    "`%n` produces the platform-specific line separator (`\\r\\n` on Windows, `\\n` on Unix/macOS), making formatted output portable across operating systems.",
    "Formatted Output", "theory", "medium",
    "Knows the platform-independent `%n` newline specifier.",
    "In `printf`, use `%n` for a cross-platform line separator instead of hardcoding `\\n`."
)

add_q(
    "What is the binary representation of literal `0b1011` in decimal?",
    ["9", "11", "13", "15"],
    1,
    "`0b1011` represents `1*(8) + 0*(4) + 1*(2) + 1*(1) = 8 + 2 + 1 = 11`.",
    "Binary Literals", "theory", "easy",
    "Understands Java binary numeric literal prefix `0b`.",
    "Binary prefix `0b` allows expressing numbers directly in base 2."
)

add_q(
    "What does the underscore `_` in numeric literals like `int num = 1_000_000;` achieve?",
    [
        "Creates a formatted String representation",
        "Improves human readability in source code; ignored by the compiler",
        "Allocates memory in separate blocks of 1,000",
        "Indicates that the number is an unsigned integer"
    ],
    1,
    "Introduced in Java 7, underscores in numeric literals are purely visual separators to enhance readability for developers. The compiler ignores them completely.",
    "Numeric Literals", "theory", "easy",
    "Knows the purpose of underscores in Java numeric literals.",
    "Underscores in numbers are purely for developer readability and have no runtime effect."
)

add_q(
    "What happens when you declare a local variable inside a method without initializing it, and then try to use it?",
    [
        "It takes the default value (0 or null)",
        "The code fails to compile with an error: 'variable might not have been initialized'",
        "It allocates random garbage memory values like in C",
        "The JVM throws a `NullPointerException` at runtime"
    ],
    1,
    "Unlike instance/class fields, local variables inside methods have NO default values. Java strictly requires them to be definitively assigned before use, or a compilation error occurs.",
    "Variable Scope & Initialization", "theory", "medium",
    "Understands that local variables are not given default values.",
    "Local variables must be initialized before reading; failure to initialize causes a compile-time error."
)

add_q(
    "What is the result of dividing a floating-point number by zero in Java (e.g., `10.0 / 0.0`)?",
    [
        "Throws `java.lang.ArithmeticException: / by zero`",
        "Evaluates to `Double.POSITIVE_INFINITY`",
        "Evaluates to `Double.NaN`",
        "Compilation error: division by zero"
    ],
    1,
    "In IEEE 754 floating-point arithmetic (used by Java), dividing a non-zero float/double by zero yields `Infinity` (or `-Infinity`). Only integer division by zero throws `ArithmeticException`.",
    "Floating-Point Division", "theory", "hard",
    "Distinguishes floating-point IEEE 754 division from integer division.",
    "Floating-point division by zero yields `Infinity` or `NaN`, never `ArithmeticException`."
)

add_q(
    "What is the result of `0.0 / 0.0` in Java floating-point arithmetic?",
    [
        "`0.0`",
        "`Double.POSITIVE_INFINITY`",
        "`Double.NaN` (Not a Number)",
        "`ArithmeticException`"
    ],
    2,
    "Zero divided by zero in IEEE 754 floating-point arithmetic results in `NaN` (Not a Number).",
    "Floating-Point Arithmetic", "theory", "medium",
    "Understands NaN conditions in floating-point operations.",
    "`0.0 / 0.0` evaluates to `NaN` (Not a Number) under IEEE 754 rules."
)

# =========================================================================
# 2. ERROR IDENTIFICATION IN CODE SNIPPETS (25 Questions)
# =========================================================================
add_q(
    "Identify the compilation error in the following snippet:\n```java\nbyte b1 = 10;\nbyte b2 = 20;\nbyte b3 = b1 + b2;\n```",
    [
        "Line 1: byte cannot store 10",
        "Line 3: possible lossy conversion from int to byte",
        "Line 3: '+' operator cannot be used on bytes",
        "No error: b3 will equal 30"
    ],
    1,
    "In Java, arithmetic operations on types smaller than int (byte, short, char) automatically promote the operands to `int`. Thus `b1 + b2` is an `int`, requiring an explicit cast `(byte)(b1 + b2)` to assign back to `byte`.",
    "Type Promotion Error", "error", "medium",
    "Spotted implicit int promotion on binary arithmetic.",
    "Arithmetic operations on bytes/shorts produce an `int`, requiring explicit cast to store back into a byte."
)

add_q(
    "Why does the following code fail to compile?\n```java\nfloat price = 19.99;\nSystem.out.println(price);\n```",
    [
        "System.out.println cannot print floats",
        "19.99 is interpreted as a double literal, causing possible loss of precision",
        "Variables named 'price' are reserved",
        "float requires an integer initialization"
    ],
    1,
    "Literal `19.99` is of type `double`. Assigning a double to a 32-bit `float` variable is a narrowing conversion and requires an explicit cast or the `f` suffix (`19.99f`).",
    "Float Literal Suffix", "error", "easy",
    "Recognized missing float suffix on decimal literal.",
    "Append 'f' or 'F' to decimal literals when assigning to float (e.g. 19.99f)."
)

add_q(
    "What is wrong with the following variable declarations?\n```java\nint 1stScore = 95;\nint total score = 100;\n```",
    [
        "Variable names cannot contain numbers at all",
        "'1stScore' begins with a digit, and 'total score' contains an illegal space",
        "'score' is a reserved Java keyword",
        "Variable names must be in uppercase"
    ],
    1,
    "Java identifiers cannot begin with a number (`1stScore`), and identifiers cannot contain whitespace (`total score`).",
    "Identifier Rules", "error", "easy",
    "Spotted illegal identifier starting with a digit and illegal space.",
    "Identifiers must not start with digits or contain spaces."
)

add_q(
    "Find the compilation error in this snippet:\n```java\nfinal int MAX_USERS = 50;\nMAX_USERS = 100;\nSystem.out.println(MAX_USERS);\n```",
    [
        "MAX_USERS must be declared inside a class header",
        "Cannot assign a value to final variable MAX_USERS",
        "println cannot print final variables",
        "Constant names cannot contain underscores"
    ],
    1,
    "Variables declared with the `final` modifier cannot be reassigned once initialized. Line 2 causes a compilation error.",
    "Final Variable Reassignment", "error", "easy",
    "Identified reassignment of a final constant.",
    "A `final` variable cannot be reassigned after its initial assignment."
)

add_q(
    "What is the bug in the following Scanner input sequence?\n```java\nScanner sc = new Scanner(System.in);\nint age = sc.nextInt();\nString name = sc.nextLine();\nSystem.out.println(name + \" is \" + age);\n```",
    [
        "nextInt() cannot be called before nextLine()",
        "nextLine() immediately consumes the leftover newline from nextInt(), reading an empty string for name",
        "System.in requires a File object parameter",
        "String cannot be printed after an int"
    ],
    1,
    "`nextInt()` reads only the numeric token and leaves the newline character (`\\n`) in the input buffer. The subsequent `nextLine()` immediately reads that leftover newline, leaving `name` as an empty string.",
    "Scanner Newline Trap", "error", "medium",
    "Mastery of the classic Scanner newline consumption trap.",
    "Call `sc.nextLine()` after `sc.nextInt()` to consume the leftover newline before reading the next line of text."
)

add_q(
    "Why does the following snippet cause a compilation error?\n```java\nint x;\nif (x == 10) {\n    System.out.println(\"Ten\");\n}\n```",
    [
        "x defaults to 0 so the if statement is unreachable",
        "Local variable 'x' might not have been initialized",
        "Condition must use '=' instead of '=='",
        "println requires String concatenation"
    ],
    1,
    "Local variable `x` is declared but never assigned a value. In Java, local variables do not have default values and reading an uninitialized local variable causes a compile error.",
    "Uninitialized Local Variable", "error", "easy",
    "Caught reading an uninitialized local variable.",
    "Local variables must be explicitly initialized before being read in expressions."
)

add_q(
    "Identify the compile error in the following assignment:\n```java\nchar ch = 'AB';\n```",
    [
        "char must use double quotes \"AB\"",
        "Too many characters in character literal ('AB' is a string, char can only hold a single 16-bit code unit)",
        "char cannot store capital letters",
        "Variables named 'ch' must be declared as int"
    ],
    1,
    "A `char` literal enclosed in single quotes can hold exactly one character. 'AB' contains two characters, which is an illegal character literal. For multiple characters, double-quoted `String` must be used.",
    "Char Literal Syntax", "error", "easy",
    "Recognized multi-character literal error in single quotes.",
    "Single quotes are strictly for single character literals; multi-character sequences require double quotes (String)."
)

add_q(
    "What is wrong with the following boolean assignment?\n```java\nboolean flag = 1;\n```",
    [
        "In Java, boolean types only accept 'true' or 'false', not integer 1 or 0",
        "1 must be written as 1b",
        "boolean variables must start with an uppercase letter",
        "1 must be enclosed in single quotes '1'"
    ],
    0,
    "Unlike C/C++, Java boolean is an entirely distinct type that is incompatible with integer types. Assigning `1` to a `boolean` causes a compile error: 'incompatible types: int cannot be converted to boolean'.",
    "Boolean Incompatibility", "error", "easy",
    "Distinguishes Java strict booleans from C/C++ integer truth values.",
    "In Java, booleans can only be literal `true` or `false`; integers 1 and 0 are not booleans."
)

add_q(
    "Why does this code throw a runtime exception?\n```java\nint numerator = 100;\nint denominator = 0;\nint result = numerator / denominator;\n```",
    [
        "Throws `NullPointerException`",
        "Throws `java.lang.ArithmeticException: / by zero`",
        "Throws `IllegalArgumentException`",
        "Throws `NumberFormatException`"
    ],
    1,
    "Integer division by zero is mathematically undefined and strictly throws an `ArithmeticException` at runtime in Java.",
    "ArithmeticException by Zero", "error", "easy",
    "Understands runtime exception on integer division by zero.",
    "Integer division by zero throws `ArithmeticException`; check denominator != 0 before dividing."
)

add_q(
    "What is the compilation issue in this code?\n```java\nint a = 10;\nlong b = 20L;\nint c = a + b;\n```",
    [
        "20L is an invalid long literal",
        "Line 3: possible lossy conversion from long to int",
        "a + b requires an explicit wrapper method",
        "Variables of different types cannot be added"
    ],
    1,
    "When adding an `int` and a `long`, the `int` is promoted to `long`, producing a `long` result. Assigning a `long` to an `int` variable `c` causes a compile-time lossy conversion error without an explicit `(int)` cast.",
    "Type Promotion Error", "error", "medium",
    "Recognized int + long produces long.",
    "Operands mixed with long promote to long; casting `(int)` is required to store in an int."
)

add_q(
    "What is wrong with the following `System.out.printf` statement?\n```java\nint age = 21;\nSystem.out.printf(\"Age: %f\", age);\n```",
    [
        "%f requires a String parameter",
        "IllegalFormatConversionException: %f cannot format an integer (int)",
        "printf requires two string arguments",
        "%f must always include precision like %.2f"
    ],
    1,
    "`%f` expects a floating-point argument (float/double). Passing an integer (`int`) causes a runtime `java.util.IllegalFormatConversionException: f != java.lang.Integer`.",
    "Printf Specifier Mismatch", "error", "medium",
    "Spotted format specifier mismatch in printf.",
    "Match format specifiers with types: `%d` for integers, `%f` for floating-point numbers, `%s` for strings."
)

add_q(
    "What error occurs in this code snippet?\n```java\nString s = \"Java\";\nint len = s.length;\n```",
    [
        "Strings do not have a length property; length() is a method and requires parentheses `s.length()`",
        "String cannot be converted to int",
        "length is a private field in String",
        "s is an uninitialized object reference"
    ],
    0,
    "In Java, arrays have a `.length` field, but `String` objects provide a `.length()` method. Calling `s.length` without parentheses causes a compilation error: 'cannot find symbol: variable length'.",
    "String length() Method", "error", "easy",
    "Distinguishes array `.length` field from String `.length()` method.",
    "Use `.length()` for Strings and `.length` for arrays."
)

add_q(
    "Why does the following compound assignment compile, whereas standard assignment fails?\n```java\nbyte b = 5;\nb += 2; // Compiles!\n// b = b + 2; // Fails to compile!\n```",
    [
        "`+=` converts the expression to double automatically",
        "Compound assignment operators (`+=`, `-=`, etc.) implicitly inject a cast back to the target type: `b = (byte)(b + 2)`",
        "The compiler optimizes `b += 2` into bitwise shift",
        "Literal 2 is treated as a byte when using `+=`"
    ],
    1,
    "The Java Language Specification defines compound assignment `E1 op= E2` as equivalent to `E1 = (T)(E1 op E2)`, where T is the type of E1. It implicitly casts the resulting int back to byte.",
    "Compound Assignment Casting", "error", "hard",
    "Deep insight into compound assignment implicit type casting.",
    "`b += 2` implicitly casts to `(byte)(b + 2)`, hiding narrowing truncation errors."
)

add_q(
    "Why does this code cause a compiler error?\n```java\nint x = 5;\nboolean b = (x = 0);\n```",
    [
        "Assignment within parentheses is illegal in Java",
        "The assignment `(x = 0)` evaluates to `int` 0, which cannot be converted to `boolean`",
        "x cannot be reassigned inside an expression",
        "Parentheses cannot be used around assignments"
    ],
    1,
    "In Java, `(x = 0)` assigns 0 to x and evaluates to the integer value 0. Because `int` cannot be converted to `boolean`, line 2 fails to compile.",
    "Assignment Expression Type", "error", "medium",
    "Recognized that assignment expression evaluates to the assigned value's type.",
    "Assignment yields the value and type of the variable; integer assignments cannot be assigned to boolean."
)

add_q(
    "What error will occur when compiling this code?\n```java\nint val = 078;\n```",
    [
        "No error, val is 78",
        "Compile error: integer number too large or invalid octal digit '8'",
        "Compile error: leading zeros are strictly forbidden in Java",
        "Warning: val will be converted to decimal 64"
    ],
    1,
    "A leading `0` indicates an octal (base 8) literal. Valid octal digits are strictly 0 to 7. The digit `8` is invalid in base 8, producing a compile-time error.",
    "Octal Literal Error", "error", "hard",
    "Recognized leading 0 as octal base with invalid digit 8.",
    "A leading zero designates octal notation (digits 0-7); '8' or '9' triggers an invalid octal digit compile error."
)

add_q(
    "Identify the bug in this floating point comparison:\n```java\ndouble d1 = 0.1 + 0.2;\ndouble d2 = 0.3;\nif (d1 == d2) {\n    System.out.println(\"Equal\");\n}\n```",
    [
        "Syntax error: `==` cannot be used with doubles",
        "Due to binary floating-point rounding errors, `0.1 + 0.2` is `0.30000000000000004`, making `d1 == d2` false",
        "d1 automatically truncates to 0",
        "ArithmeticException is thrown during addition"
    ],
    1,
    "Binary floating point (IEEE 754) cannot represent fractions like 0.1 or 0.2 exactly. `0.1 + 0.2` evaluates to `0.30000000000000004`, so exact equality `==` fails. Developers must compare `Math.abs(d1 - d2) < EPSILON`.",
    "Floating-Point Precision Bug", "error", "medium",
    "Understands floating point rounding and improper `==` comparisons.",
    "Never use `==` for floating point numbers; use an epsilon delta check (`Math.abs(a - b) < 1e-9`)."
)

add_q(
    "What is the issue with this `Scanner` code when user enters 'Hello World'?\n```java\nScanner sc = new Scanner(System.in);\nString input = sc.next();\nSystem.out.println(input);\n```",
    [
        "Throws NoSuchElementException",
        "`sc.next()` reads only up to whitespace, so it prints only 'Hello' instead of 'Hello World'",
        "`sc.next()` only reads integer tokens",
        "Prints null"
    ],
    1,
    "`sc.next()` finds and returns the next complete token delimited by whitespace. To read the entire line including spaces, `sc.nextLine()` must be used.",
    "Scanner Delimiters", "error", "easy",
    "Understands the difference between `next()` (single word) and `nextLine()` (entire line).",
    "Use `sc.nextLine()` to read text containing spaces; `sc.next()` terminates at whitespace."
)

add_q(
    "What is wrong with this character addition?\n```java\nchar c = 'a' + 1;\n```",
    [
        "It fails to compile because 'a' + 1 is an int",
        "It compiles without error because 'a' + 1 is a constant expression evaluated at compile-time to 'b'",
        "It throws a ClassCastException at runtime",
        "It sets c to 'a1'"
    ],
    1,
    "In Java, `'a' + 1` is a constant expression whose value (98) fits within the range of `char`. The compiler performs implicit narrowing of constant expressions, so it compiles cleanly and assigns `'b'` to `c`.",
    "Constant Expression Narrowing", "error", "hard",
    "Understands compiler constant expression narrowing for primitives.",
    "Constant expressions that fit into the destination primitive type compile without explicit casting."
)

add_q(
    "Why does the following snippet cause a compilation error?\n```java\nint x = 10;\n{\n    int x = 20;\n    System.out.println(x);\n}\n```",
    [
        "Curly braces cannot be used without an if or loop statement",
        "Variable 'x' is already defined in the outer scope; shadowing local variables in nested blocks is illegal in Java",
        "The inner block cannot access variables named x",
        "println cannot be called inside a standalone block"
    ],
    1,
    "In Java, declaring a local variable with the same name as another local variable in an enclosing scope is strictly prohibited (unlike C++).",
    "Variable Scope Shadowing", "error", "medium",
    "Recognized illegal local variable shadowing in nested block.",
    "Java forbids redeclaring a local variable name within an enclosing block scope."
)

add_q(
    "Identify the issue in this code snippet:\n```java\nint a = 10;\nint b = 0;\nif (b != 0 & a / b > 1) {\n    System.out.println(\"Success\");\n}\n```",
    [
        "Syntax error: single `&` cannot be used inside `if`",
        "Throws `ArithmeticException: / by zero` because `&` does not short-circuit, so `a / b` is evaluated even though `b != 0` is false",
        "Prints 'Success' unconditionally",
        "Compilation error: incompatible types"
    ],
    1,
    "Because single `&` is the non-short-circuit logical AND operator, both sides are evaluated. Even though `b != 0` evaluates to false, Java still evaluates `a / b`, causing division by zero and throwing `ArithmeticException`.",
    "Non-Short-Circuit Evaluation", "error", "medium",
    "Caught division by zero due to missing short-circuit `&&`.",
    "Always use short-circuit `&&` for guard conditions to prevent evaluating risky expressions like division by zero."
)

add_q(
    "Why does this code fail to compile?\n```java\nint x = 5;\nString s = (String) x;\n```",
    [
        "Cannot cast between completely incompatible types (primitive int and reference type String)",
        "x must be enclosed in double quotes",
        "String must be lowercase string",
        "Casting requires the 'new' operator"
    ],
    0,
    "In Java, an explicit cast `(String)` cannot convert a primitive `int` to an `Object` reference type `String`. You must use `String.valueOf(x)` or `Integer.toString(x)`.",
    "Incompatible Type Cast", "error", "easy",
    "Spotted illegal cast between primitive and reference type.",
    "Convert primitive int to String using `String.valueOf(x)` or `Integer.toString(x)`, not `(String)x`."
)

add_q(
    "What is the compilation error in the following snippet?\n```java\nlong bigNum = 3000000000;\n```",
    [
        "Variables of type long cannot hold 10 digits",
        "Integer number too large: 3000000000 exceeds int max value and lacks the 'L' suffix",
        "Variable name 'bigNum' is illegal",
        "long requires hexadecimal prefix"
    ],
    1,
    "Numeric literals without suffixes are treated as 32-bit `int`. Since 3,000,000,000 exceeds `Integer.MAX_VALUE` (2,147,483,647), the compiler rejects it before assignment unless marked with `L` (`3000000000L`).",
    "Long Literal Suffix", "error", "medium",
    "Recognized that integer literal exceeds 32-bit capacity without 'L'.",
    "Append 'L' to large numbers to treat the literal itself as a 64-bit long."
)

add_q(
    "What happens when compiling this snippet?\n```java\nboolean b = true;\nint n = (int) b;\n```",
    [
        "n is assigned 1",
        "n is assigned 0",
        "Compilation error: incompatible types: boolean cannot be converted to int",
        "Throws ClassCastException at runtime"
    ],
    2,
    "In Java, `boolean` cannot be cast to or from any numeric type (`int`, `byte`, etc.). Any attempt to cast `(int) b` fails at compile time.",
    "Boolean Cast Error", "error", "easy",
    "Understands that booleans cannot be cast to numeric types.",
    "Booleans in Java have no numeric conversion; use ternary `(b ? 1 : 0)` if an integer representation is required."
)

add_q(
    "Why does the following snippet fail to compile?\n```java\nfinal int a;\nSystem.out.println(a);\na = 10;\n```",
    [
        "final variables cannot be assigned on line 3",
        "Variable 'a' might not have been initialized when read on line 2",
        "final variables must be declared in capital letters",
        "Blank final variables are illegal in Java"
    ],
    1,
    "A blank final variable can be declared, but it MUST be initialized before it is read. Line 2 attempts to read `a` before it has been assigned, causing a compile error.",
    "Blank Final Initialization", "error", "medium",
    "Caught reading blank final variable prior to assignment.",
    "You can declare a blank final variable, but it must be assigned before being read."
)

add_q(
    "What error occurs in this code snippet?\n```java\nint x = 10;\nint y = 5;\nint z = x > y ? \"Greater\" : 0;\n```",
    [
        "Ternary operator cannot use string literals",
        "Incompatible types: conditional expression branches must be compatible with the target variable type (int)",
        "Ternary operator must be enclosed in braces",
        "x > y is an invalid boolean condition"
    ],
    1,
    "The conditional (ternary) operator evaluates to a common type. Since `\"Greater\"` is a String and `0` is an int, assigning the result to `int z` causes a compile error because String cannot be converted to int.",
    "Ternary Type Compatibility", "error", "medium",
    "Spotted incompatible branch types in ternary expression.",
    "Both branches of the ternary operator must evaluate to types compatible with the receiving variable."
)

# =========================================================================
# 3. FIND OUTPUT OF GIVEN CODE (25 Questions)
# =========================================================================
add_q(
    "What is the output of the following code snippet?\n```java\nint x = 5;\nint y = x++ + ++x;\nSystem.out.println(y);\n```",
    ["11", "12", "13", "14"],
    1,
    "Step 1: `x++` yields 5 (and increments x to 6). Step 2: `++x` increments x to 7 and yields 7. Step 3: `5 + 7 = 12`.",
    "Unary Operator Evaluation", "output", "medium",
    "Correctly tracked step-by-step evaluation of pre/post increment expressions.",
    "Trace increment operators from left to right: post-increment yields current value then increments; pre-increment increments first."
)

add_q(
    "What is the output of the following code?\n```java\nint a = 10, b = 4;\nSystem.out.println(a / b + \" \" + (double)(a / b) + \" \" + (double)a / b);\n```",
    [
        "2 2.0 2.5",
        "2.5 2.5 2.5",
        "2 2.5 2.5",
        "2 2.0 2.0"
    ],
    0,
    "`a / b` is integer division -> `2`. `(double)(a / b)` casts the integer result 2 to double -> `2.0`. `(double)a / b` casts a to 10.0 before dividing by 4 -> `2.5`.",
    "Integer vs Double Division", "output", "medium",
    "Carefully parsed operator precedence and type casting during division.",
    "Casting after integer division `(double)(a / b)` does not restore lost fractions; cast the operand before division `(double)a / b`."
)

add_q(
    "What is printed by the following code?\n```java\nSystem.out.println(10 + 20 + \"Java\" + 10 + 20);\n```",
    [
        "30Java30",
        "30Java1020",
        "1020Java1020",
        "60Java"
    ],
    1,
    "Java evaluates left to right: `10 + 20` is numeric addition (`30`). Then `30 + \"Java\"` becomes string concatenation (`\"30Java\"`). Once a string is formed, subsequent `+` operators perform string concatenation: `\"30Java10\"` then `\"30Java1020\"`.",
    "String Concatenation Precedence", "output", "easy",
    "Understands left-to-right evaluation and string concatenation transition.",
    "Addition before a String performs arithmetic; addition after a String performs string concatenation."
)

add_q(
    "What is the output of this code?\n```java\nint a = 5;\nboolean result = (a > 10) && (++a > 5);\nSystem.out.println(a + \" \" + result);\n```",
    [
        "5 false",
        "6 false",
        "5 true",
        "6 true"
    ],
    0,
    "Because `a > 10` is false, short-circuit `&&` immediately terminates evaluation. `++a` is NEVER executed, leaving `a` at 5 and `result` as false.",
    "Short-Circuit Side Effects", "output", "medium",
    "Spotted short-circuit skipping operand side effects.",
    "In `&&`, if the first condition is false, remaining conditions with side effects (like `++a`) are never evaluated."
)

add_q(
    "What is the output of this code snippet?\n```java\nint a = 5;\nboolean result = (a > 10) & (++a > 5);\nSystem.out.println(a + \" \" + result);\n```",
    [
        "5 false",
        "6 false",
        "5 true",
        "6 true"
    ],
    1,
    "Single `&` does NOT short-circuit. Even though `a > 10` is false, `++a > 5` is still evaluated. `a` increments to 6, and the overall result is false.",
    "Bitwise Boolean Evaluation", "output", "medium",
    "Correctly tracked execution when using non-short-circuit `&`.",
    "Single `&` evaluates both sides unconditionally, executing all side effects."
)

add_q(
    "What does the following snippet print?\n```java\nint x = 8;\nSystem.out.println(x >> 2);\nSystem.out.println(x << 2);\n```",
    [
        "2 and 32",
        "4 and 16",
        "2 and 16",
        "4 and 32"
    ],
    0,
    "`8 >> 2` shifts bits right by 2 (equivalent to `8 / 2^2 = 2`). `8 << 2` shifts bits left by 2 (equivalent to `8 * 2^2 = 32`).",
    "Bitwise Shifts", "output", "easy",
    "Understands bitwise shift arithmetic multipliers.",
    "Right shift `x >> n` divides by 2^n; left shift `x << n` multiplies by 2^n."
)

add_q(
    "What is the output of this code?\n```java\nbyte b = 127;\nb++;\nSystem.out.println(b);\n```",
    ["128", "-128", "0", "127"],
    1,
    "`byte` is signed 8-bit (-128 to 127). Adding 1 to the maximum positive value 127 causes two's complement integer overflow, wrapping around to -128.",
    "Byte Overflow", "output", "medium",
    "Understands two's complement boundary overflow on 8-bit byte.",
    "Overflow in signed two's complement wraps around: 127 + 1 = -128 for byte."
)

add_q(
    "What is printed by this printf statement?\n```java\ndouble pi = 3.14159265;\nSystem.out.printf(\"[%8.2f]\", pi);\n```",
    [
        "[3.14    ]",
        "[    3.14]",
        "[3.141592]",
        "[3.14]"
    ],
    1,
    "`%8.2f` specifies a total width of 8 characters (right-aligned by default) with 2 decimal places. `3.14` has 4 characters, so 4 leading spaces are prepended: `[    3.14]`.",
    "Printf Field Width", "output", "medium",
    "Understands printf field width and right-alignment spacing.",
    "Width `8` with `.2f` reserves 8 total character spaces right-aligned, padding with leading spaces."
)

add_q(
    "What is the output of this snippet?\n```java\nint x = 10;\nint y = 20;\nint max = (x > y) ? x : y;\nSystem.out.println(max);\n```",
    ["10", "20", "true", "false"],
    1,
    "The condition `10 > 20` is false, so the ternary operator selects the second expression `y`, which is 20.",
    "Ternary Operator Output", "output", "easy",
    "Correctly evaluated basic ternary conditional logic.",
    "Ternary operator selects expression after `:` when the condition is false."
)

add_q(
    "What is the output of the following code?\n```java\nint x = 5;\nx *= 2 + 3;\nSystem.out.println(x);\n```",
    ["13", "25", "10", "15"],
    1,
    "Compound assignment has lower precedence than arithmetic addition. `x *= 2 + 3` is evaluated as `x = x * (2 + 3)`, which is `5 * 5 = 25` (NOT `(5 * 2) + 3`).",
    "Compound Assignment Precedence", "output", "medium",
    "Spotted implicit grouping of right-hand expression in compound assignment.",
    "`x *= expr` is equivalent to `x = x * (expr)`; the right-hand side is fully evaluated first."
)

add_q(
    "What does this code print?\n```java\nchar c = 'A';\nc += 2;\nSystem.out.println(c);\n```",
    ["C", "67", "A2", "Error"],
    0,
    "The character 'A' has ASCII/Unicode value 65. Adding 2 yields 67, which corresponds to 'C'. `c += 2` casts 67 back to char, printing 'C'.",
    "Char Arithmetic", "output", "easy",
    "Understands character arithmetic and implicit casting with compound assignment.",
    "Adding an integer to a char shifts its character code: 'A' (65) + 2 = 'C' (67)."
)

add_q(
    "What is the output of the following code?\n```java\nint a = 1;\nint b = a++ + a++ + a++;\nSystem.out.println(b + \" \" + a);\n```",
    [
        "3 4",
        "6 4",
        "6 3",
        "3 3"
    ],
    1,
    "Term 1: `a++` yields 1 (a becomes 2). Term 2: `a++` yields 2 (a becomes 3). Term 3: `a++` yields 3 (a becomes 4). Sum `b = 1 + 2 + 3 = 6`. Final `a = 4`.",
    "Chained Post-Increments", "output", "medium",
    "Tracked consecutive post-increment evaluation across an expression.",
    "Evaluate each post-increment sequentially from left to right, updating the variable after each term."
)

add_q(
    "What does the following snippet print?\n```java\nint x = 10;\nSystem.out.println(~x);\n```",
    ["-10", "-11", "9", "11"],
    1,
    "The bitwise NOT operator `~` inverts all bits. In two's complement representation, `~n = -(n + 1)`. Thus `~10 = -11`.",
    "Bitwise NOT Formula", "output", "hard",
    "Knows the two's complement bitwise inversion formula `~n = -(n + 1)`.",
    "Bitwise NOT `~x` on two's complement integer equals `-(x + 1)`."
)

add_q(
    "What is the output of this code?\n```java\nSystem.out.println(5 ^ 3);\n```",
    ["8", "2", "6", "15"],
    2,
    "The bitwise XOR `^` operator compares bits: 5 is `0101` in binary, 3 is `0011`. `0101 ^ 0011 = 0110` in binary, which is decimal `6`.",
    "Bitwise XOR", "output", "medium",
    "Correctly computed bitwise XOR operation.",
    "XOR produces 1 where bits differ and 0 where bits match: `5 (0101) ^ 3 (0011) = 6 (0110)`."
)

add_q(
    "What is the output of the following snippet?\n```java\nint a = 12;\nint b = 25;\nSystem.out.println(a & b);\n```",
    ["8", "9", "12", "37"],
    0,
    "Binary of 12 is `01100`. Binary of 25 is `11001`. Bitwise AND: `01100 & 11001 = 01000` which equals `8`.",
    "Bitwise AND", "output", "medium",
    "Accurately performed binary bitwise AND computation.",
    "Align binary representations and apply bitwise AND to each bit column."
)

add_q(
    "What is printed by this code?\n```java\nboolean b1 = true, b2 = false;\nboolean b3 = b1 ^ b2;\nSystem.out.println(b3);\n```",
    ["true", "false", "0", "1"],
    0,
    "When applied to boolean operands, `^` represents logical XOR (exclusive OR). It returns true if and only if exactly one operand is true. Since `b1 != b2`, it prints `true`.",
    "Logical XOR", "output", "easy",
    "Understands logical XOR truth table for boolean operands.",
    "Boolean XOR (`^`) is true when exactly one operand is true and the other is false."
)

add_q(
    "What does this snippet print?\n```java\nint x = -1;\nSystem.out.println(x >>> 31);\n```",
    ["-1", "0", "1", "2147483647"],
    2,
    "-1 in 32-bit binary is all ones: `1111...1111`. Unsigned right shift `>>> 31` shifts 31 ones out and fills the 31 highest bits with zeros, leaving only the lowest bit `1`.",
    "Unsigned Right Shift", "output", "hard",
    "Mastery of 32-bit two's complement and unsigned shift dynamics.",
    "-1 is all 1s in two's complement; `>>> 31` leaves a single 1 in the least significant bit, outputting 1."
)

add_q(
    "What is the output of this code?\n```java\nint val = (int) 3.8 + (int) 2.9;\nSystem.out.println(val);\n```",
    ["5", "6", "7", "5.0"],
    0,
    "`(int) 3.8` truncates to 3. `(int) 2.9` truncates to 2. `3 + 2 = 5`.",
    "Truncation Addition", "output", "easy",
    "Correctly applied fractional truncation to each operand.",
    "Casting truncates each decimal before addition: 3 + 2 = 5."
)

add_q(
    "What is the output of this code?\n```java\nint val = (int) (3.8 + 2.9);\nSystem.out.println(val);\n```",
    ["5", "6", "7", "6.7"],
    1,
    "`3.8 + 2.9 = 6.7`. Then `(int) 6.7` truncates to `6`.",
    "Parenthesized Cast", "output", "easy",
    "Recognized order of operations: addition inside parentheses prior to casting.",
    "Expressions inside parentheses evaluate first: 3.8 + 2.9 = 6.7, which casts to 6."
)

add_q(
    "What is printed by this code?\n```java\nSystem.out.printf(\"%-6s:%04d\", \"Java\", 7);\n```",
    [
        "Java  :0007",
        "  Java:0007",
        "Java  :7000",
        "Java:0007"
    ],
    0,
    "`%-6s` left-aligns \"Java\" in a 6-character field (adding 2 trailing spaces: `\"Java  \"`). `%04d` zero-pads the integer 7 to 4 digits (`\"0007\"`). Result: `\"Java  :0007\"`.",
    "Printf Flags", "output", "hard",
    "Mastery of printf alignment `-` and zero-padding `0` flags.",
    "`-` left-aligns strings; `0` zero-pads numbers to the specified width."
)

add_q(
    "What does this code output?\n```java\nint a = 10, b = 20, c = 30;\na = b = c = 50;\nSystem.out.println(a + \" \" + b + \" \" + c);\n```",
    [
        "10 20 30",
        "50 50 50",
        "50 20 10",
        "Error: multiple assignment illegal"
    ],
    1,
    "Assignment operators associate right-to-left. First `c = 50`, then `b = 50`, then `a = 50`. All three variables become 50.",
    "Chained Assignment", "output", "easy",
    "Understands right-to-left associativity of assignment operator.",
    "Assignments associate right-to-left: `a = b = c = 50` sets all variables to 50."
)

add_q(
    "What is the output of the following snippet?\n```java\nint a = 10;\nint b = 3;\nSystem.out.println(a % b + \" \" + (-a) % b + \" \" + a % (-b));\n```",
    [
        "1 -1 1",
        "1 -1 -1",
        "1 1 1",
        "-1 -1 1"
    ],
    0,
    "The sign of `%` matches the dividend (left operand). `10 % 3 = 1`. `(-10) % 3 = -1`. `10 % (-3) = 1`.",
    "Modulus Sign Rules", "output", "hard",
    "Precise tracking of modulus sign following the left operand.",
    "In `a % b`, the result takes the sign of `a`, regardless of the sign of `b`."
)

add_q(
    "What does the following snippet print?\n```java\nint x = 0;\nif (x++ == 0 && ++x == 2) {\n    System.out.println(\"Matched \" + x);\n}\n```",
    [
        "Matched 1",
        "Matched 2",
        "Nothing printed",
        "Matched 0"
    ],
    1,
    "1. `x++ == 0`: current value 0 == 0 is true (x increments to 1). 2. Short-circuit passes to right: `++x == 2`: x increments to 2, and 2 == 2 is true. Prints 'Matched 2'.",
    "Logical Compound Evaluation", "output", "medium",
    "Step-by-step evaluation of pre and post increments across logical AND.",
    "Follow evaluation order: post-increment evaluates first then increments; pre-increment increments first."
)

add_q(
    "What is the output of this code?\n```java\nchar ch = '5';\nint val = ch - '0';\nSystem.out.println(val);\n```",
    ["53", "5", "48", "Error"],
    1,
    "The ASCII value of '5' is 53, and '0' is 48. `53 - 48 = 5`. Subtracting `'0'` is the idiomatic way in Java to convert a digit character to its numeric integer value.",
    "Character to Digit Conversion", "output", "easy",
    "Knows the idiomatic char-to-digit conversion `ch - '0'`.",
    "Subtracting `'0'` from a digit char gives its integer numeric value (e.g. `'5' - '0' == 5`)."
)

add_q(
    "What is the output of this code snippet?\n```java\nint x = 1;\nx = x++;\nSystem.out.println(x);\n```",
    ["1", "2", "0", "Undefined"],
    0,
    "In `x = x++`, the right-hand side yields the current value of x (1). The increment happens (x becomes 2), but then the assignment operator overwrites x with the stored evaluated value (1). So x remains 1.",
    "Self Post-Increment Assignment", "output", "hard",
    "Mastery of the subtle `x = x++` self-assignment pitfall.",
    "`x = x++` does not increment x; the original value (1) overwrites the post-incremented value."
)

# =========================================================================
# 4. APPLICATION-BASED / SCENARIO-DRIVEN PROBLEMS (25 Questions)
# =========================================================================
add_q(
    "You are building a financial billing module for a Malaysian banking app that processes monetary transactions. Why should you NOT use `double` or `float` to store currency amounts?",
    [
        "`double` cannot store values larger than 10,000",
        "Binary floating-point arithmetic causes precision loss and rounding inaccuracies (e.g. 0.1 + 0.2 != 0.3)",
        "`double` variables cannot be stored in relational databases",
        "Banking regulations require variables to use the `byte` primitive"
    ],
    1,
    "Binary floating-point types (`float`, `double`) cannot represent base-10 fractions exactly, leading to accumulated rounding errors. Real-world financial systems use `BigDecimal` or store values as integer cents (`long`).",
    "Financial Precision & Types", "scenario", "medium",
    "Understands why floating-point arithmetic is unsuitable for financial transactions.",
    "Use `BigDecimal` or integer cents (`long`) for currency calculations to prevent floating point drift."
)

add_q(
    "You are writing a temperature monitoring system for an IoT greenhouse. Temperatures range from -50.0°C to +80.0°C with 0.1°C precision. Which primitive type offers the most memory-efficient storage while preserving necessary decimal precision for 1 million readings?",
    [
        "`double`",
        "`float`",
        "`int`",
        "`boolean`"
    ],
    1,
    "`float` is a 32-bit IEEE 754 type (half the memory of 64-bit `double`) and provides 6-7 significant decimal digits of precision, which is more than sufficient for temperature readings with 1 decimal place.",
    "IoT Memory Optimization", "scenario", "medium",
    "Selects appropriate primitive type balancing memory footprint and precision.",
    "`float` uses 4 bytes compared to 8 bytes for `double`, saving 4MB across 1 million readings."
)

add_q(
    "A developer at a logistics company wants to swap the values of two integer variables `a` and `b` without creating an extra temporary variable. Which bitwise operation achieves this?",
    [
        "`a = a & b; b = a & b; a = a & b;`",
        "`a = a ^ b; b = a ^ b; a = a ^ b;`",
        "`a = a | b; b = a | b; a = a | b;`",
        "`a = ~b; b = ~a; a = ~b;`"
    ],
    1,
    "The XOR swap algorithm uses the property that `x ^ x = 0` and `x ^ 0 = x`. Step 1: `a = a ^ b`. Step 2: `b = a ^ b = (a ^ b) ^ b = a`. Step 3: `a = a ^ b = (a ^ b) ^ a = b`.",
    "Bitwise XOR Swap", "scenario", "hard",
    "Mastery of the classic XOR variable swap algorithm.",
    "`a ^= b; b ^= a; a ^= b;` swaps two variables in place using bitwise XOR without a temp variable."
)

add_q(
    "In an e-commerce checkout system, a customer gets free shipping if their subtotal is >= RM 150 OR they are a VIP member, AND their cart is not empty. Which boolean expression correctly models this business rule?",
    [
        "`subtotal >= 150 || isVIP && !cartEmpty`",
        "`(subtotal >= 150 || isVIP) && !cartEmpty`",
        "`subtotal >= 150 && (isVIP || !cartEmpty)`",
        "`!(subtotal >= 150 || isVIP || cartEmpty)`"
    ],
    1,
    "Due to operator precedence, `&&` binds tighter than `||`. Without parentheses, `subtotal >= 150 || isVIP && !cartEmpty` would grant free shipping to any subtotal >= 150 even if the cart is empty! Parentheses `(subtotal >= 150 || isVIP) && !cartEmpty` are required.",
    "Business Logic Precedence", "scenario", "medium",
    "Applied correct grouping parentheses to avoid operator precedence bugs in business rules.",
    "Use parentheses when combining `||` and `&&` to ensure business rules evaluate in the desired order."
)

add_q(
    "You are developing a high-speed trading application that processes 100,000 Unix epoch timestamps in milliseconds (e.g., 1712000000000 ms). Why MUST you store these timestamps in `long` rather than `int`?",
    [
        "`int` variables cannot be printed with printf",
        "`int` has a maximum value of 2,147,483,647, which represents only ~24.8 days in milliseconds, causing immediate overflow",
        "`long` operations are always executed on the GPU",
        "`int` values cannot represent positive integers after the year 2000"
    ],
    1,
    "An `int` max value of ~2.14 billion milliseconds is only about 24.8 days. Unix timestamps in milliseconds exceed 1.7 trillion, requiring a 64-bit `long` to avoid integer overflow.",
    "Timestamp Storage", "scenario", "easy",
    "Recognizes primitive capacity constraints for epoch timestamps.",
    "Timestamps in milliseconds exceed `int` max value (~2.14 billion); always use 64-bit `long`."
)

add_q(
    "A game developer wants to store 8 player status flags (IsPoisoned, IsStunned, IsInvisible, IsFlying, etc.) inside a single 8-bit `byte` to save bandwidth. How can the game check if the 3rd flag (mask `0b00000100`) is active?",
    [
        "`(statusFlags & 0b00000100) != 0`",
        "`(statusFlags | 0b00000100) == 0`",
        "`statusFlags ^ 0b00000100 == 1`",
        "`statusFlags >> 3 == 1`"
    ],
    0,
    "Bitwise masking uses AND (`&`). If `(statusFlags & mask) != 0`, the specified bit is set to 1.",
    "Bitmasking & Flags", "scenario", "medium",
    "Correctly applied bitwise masking to inspect bit flags.",
    "To test if a specific bit flag is set, use bitwise AND with the mask: `(flags & MASK) != 0`."
)

add_q(
    "In the same game, how can the developer TURN ON the 3rd flag (`0b00000100`) without affecting any other existing flags?",
    [
        "`statusFlags = (byte)(statusFlags & 0b00000100);`",
        "`statusFlags = (byte)(statusFlags | 0b00000100);`",
        "`statusFlags = (byte)(statusFlags ^ 0b00000100);`",
        "`statusFlags = (byte)(~statusFlags);`"
    ],
    1,
    "Bitwise OR (`|`) sets the target bit to 1 while leaving all other bits completely unchanged.",
    "Bitmasking Set Flag", "scenario", "medium",
    "Understands bitwise OR for setting individual flag bits.",
    "To set a bit flag, use bitwise OR: `flags |= MASK`."
)

add_q(
    "How can the developer CLEAR (turn OFF) the 3rd flag (`0b00000100`) without modifying other flags?",
    [
        "`statusFlags = (byte)(statusFlags & ~0b00000100);`",
        "`statusFlags = (byte)(statusFlags | ~0b00000100);`",
        "`statusFlags = (byte)(statusFlags ^ 0b00000100);`",
        "`statusFlags = 0;`"
    ],
    0,
    "Bitwise AND with inverted mask (`& ~mask`) clears the target bit to 0 while preserving all other bits.",
    "Bitmasking Clear Flag", "scenario", "hard",
    "Mastery of bitwise clear pattern (`& ~MASK`).",
    "To clear a bit flag, use bitwise AND with the bitwise NOT of the mask: `flags &= ~MASK`."
)

add_q(
    "A university student portal calculates the Grade Point Average (GPA) for 3 courses. The credits are integers and grade points are doubles. What is the correct way to compute weighted GPA?\n```java\nint c1 = 3, c2 = 4, c3 = 3;\ndouble gp1 = 4.0, gp2 = 3.5, gp3 = 3.0;\n```",
    [
        "`double gpa = (gp1 + gp2 + gp3) / 3;`",
        "`double gpa = (c1*gp1 + c2*gp2 + c3*gp3) / (c1 + c2 + c3);`",
        "`double gpa = (int)(c1*gp1 + c2*gp2 + c3*gp3) / (c1 + c2 + c3);`",
        "`double gpa = c1*gp1 + c2*gp2 + c3*gp3 / c1 + c2 + c3;`"
    ],
    1,
    "Weighted GPA is total quality points divided by total credits. The denominator `(c1 + c2 + c3)` must be parenthesized to avoid operator precedence dividing only the last term.",
    "Weighted Average Formula", "scenario", "easy",
    "Correctly applied weighted average formula with proper denominator grouping.",
    "Ensure the entire denominator sum `(c1 + c2 + c3)` is parenthesized in division formulas."
)

add_q(
    "You are building a command-line payroll report for a Malaysian enterprise. Salaries must be displayed in a neat table column of width 12, right-aligned, with a currency prefix and 2 decimal places. Which statement achieves this?",
    [
        "`System.out.printf(\"RM %-12.2f\\n\", salary);`",
        "`System.out.printf(\"RM %12.2f%n\", salary);`",
        "`System.out.printf(\"RM %12d%n\", salary);`",
        "`System.out.printf(\"RM %.2s%n\", salary);`"
    ],
    1,
    "`%12.2f` right-aligns a floating-point number within a 12-character field with 2 decimal places. `%n` provides a portable newline.",
    "Formatted Financial Reporting", "scenario", "medium",
    "Designed correct printf format string for column-aligned financial output.",
    "`%12.2f` right-aligns floating-point numbers in a 12-char column with 2 decimals."
)

add_q(
    "A flight reservation system assigns seat codes like '12A' or '4F'. If the row number is an integer `int row = 12;` and the seat letter is `char seat = 'A';`, what is the cleanest way to construct the full seat string '12A'?",
    [
        "`String code = row + seat;` (Wait: does this add ASCII value?)",
        "`String code = \"\" + row + seat;`",
        "`String code = (String)(row + seat);`",
        "`String code = row.toString() + seat;`"
    ],
    1,
    "`row + seat` would perform integer addition (`12 + 65 = 77`). Starting with an empty string `\"\" + row + seat` forces string concatenation, producing `\"12A\"`.",
    "String Concatenation Trap", "scenario", "medium",
    "Prevented accidental numeric addition between int and char.",
    "`int + char` performs arithmetic addition; prepend `\"\"` to trigger string concatenation."
)

add_q(
    "You are parsing user birth years from an old legacy database where years are stored as 2 digits (e.g., 98 for 1998, 04 for 2004). Which ternary expression maps a two-digit `year` to a four-digit year (assuming cutoff year 25)?",
    [
        "`int fullYear = year > 25 ? 1900 + year : 2000 + year;`",
        "`int fullYear = year < 25 ? 1900 + year : 2000 + year;`",
        "`int fullYear = year == 25 ? 2025 : 1900;`",
        "`int fullYear = (1900 + year) > 2000 ? 1900 : 2000;`"
    ],
    0,
    "If `year > 25`, it belongs to the 20th century (1900 + year, e.g. 98 -> 1998). Otherwise, it belongs to the 21st century (2000 + year, e.g. 04 -> 2004).",
    "Data Parsing & Ternary Logic", "scenario", "easy",
    "Correctly mapped business cutoff logic using the ternary operator.",
    "Verify ternary condition branch assignments to prevent inverted century mappings."
)

add_q(
    "An audio processing system receives 16-bit signed PCM audio samples as integers (-32768 to 32767). If an amplification algorithm computes `int boosted = sample * 2;`, what must you do before converting back to `short` to prevent distorted audio clipping?",
    [
        "Throw an exception immediately",
        "Clamp (saturate) the boosted value between `Short.MIN_VALUE` and `Short.MAX_VALUE` before casting",
        "Cast directly `(short) boosted` and rely on automatic hardware clipping",
        "Add 32768 to shift to unsigned"
    ],
    1,
    "Directly casting an overflowing `int` to `short` wraps around (e.g. +33000 becomes -32536), causing severe acoustic distortion. You must clamp/saturate the value to `[-32768, 32767]` prior to casting.",
    "Audio DSP & Clamping", "scenario", "hard",
    "Understands audio clipping and the necessity of saturation arithmetic before narrowing casts.",
    "Clamp out-of-range values before narrowing casts to avoid two's complement sign-flip wrap-around."
)

add_q(
    "A fitness smartwatch app tracks daily step goals. A user has a goal of 10,000 steps. If `currentSteps = 8450`, what expression computes the exact percentage of goal completion as a double (e.g., 84.5)?",
    [
        "`double pct = currentSteps / 10000 * 100;`",
        "`double pct = (double) currentSteps / 10000 * 100;`",
        "`double pct = (double)(currentSteps / 10000) * 100;`",
        "`double pct = (int) currentSteps / 100.0;`"
    ],
    1,
    "In option 1 and 3, `currentSteps / 10000` evaluates as integer division to `0`, resulting in `0.0`. Casting `currentSteps` to `double` first promotes the division to floating-point: `(8450.0 / 10000) * 100 = 84.5`.",
    "Percentage Calculation Bug", "scenario", "easy",
    "Avoided integer division truncation in percentage calculation.",
    "Cast the numerator to `double` before dividing to prevent integer truncation to 0."
)

add_q(
    "A telecom company charges RM 0.15 for every 30-second block of a phone call. If a call lasts 75 seconds, which formula computes the total number of chargeable 30-second blocks (which should be 3)?",
    [
        "`int blocks = 75 / 30;`",
        "`int blocks = (int) Math.ceil(75 / 30);`",
        "`int blocks = (int) Math.ceil((double) 75 / 30);`",
        "`int blocks = (75 + 1) / 30;`"
    ],
    2,
    "`75 / 30` is integer division resulting in 2. `Math.ceil(2)` is still 2.0! To round up fractional blocks, you must cast to double before dividing: `Math.ceil(75.0 / 30) = Math.ceil(2.5) = 3.0`.",
    "Ceiling Division Logic", "scenario", "medium",
    "Understands ceiling division and casting prior to Math.ceil.",
    "`Math.ceil()` requires a floating-point argument; `Math.ceil(int / int)` has already lost fractions."
)

add_q(
    "A cryptography student implements a fast parity check to test whether an integer `n` is odd. Which of the following is the most efficient bitwise check in Java?",
    [
        "`(n % 2) == 1`",
        "`(n & 1) == 1`",
        "`(n | 1) == 1`",
        "`(n ^ 1) == 0`"
    ],
    1,
    "`(n & 1) == 1` checks the least significant bit. Unlike `n % 2 == 1` (which fails for negative odd numbers like `-5 % 2 == -1`), `(n & 1) == 1` correctly identifies odd numbers for both positive and negative integers.",
    "Bitwise Parity Check", "scenario", "medium",
    "Mastered bitwise parity check that correctly handles negative integers.",
    "`(n & 1) == 1` checks odd numbers cleanly for both positive and negative values."
)

add_q(
    "A developer is writing a utility to test whether a given positive integer `n` is an exact power of 2 (e.g. 1, 2, 4, 8, 16...). Which single bitwise expression checks this in O(1) time?",
    [
        "`(n & (n - 1)) == 0`",
        "`(n | (n - 1)) == 0`",
        "`(n ^ (n - 1)) == 0`",
        "`(n & ~n) == 0`"
    ],
    0,
    "A power of 2 has exactly one binary bit set (e.g. 8 is `1000`). Subtracting 1 inverts all lower bits (`0111`). Bitwise AND between `n` and `n - 1` yields 0 if and only if `n` is a power of 2.",
    "Power of Two Trick", "scenario", "hard",
    "Mastery of the famous `n & (n - 1) == 0` power of two bitwise trick.",
    "`n > 0 && (n & (n - 1)) == 0` checks whether `n` is a power of 2 in O(1) time."
)

add_q(
    "You are building a cash register change calculator. A customer pays with RM 50 for a bill of RM 38.60. Change is RM 11.40. How should you represent money to avoid missing 1-sen rounding errors when calculating notes and coins?",
    [
        "Use `double` and round after each subtraction",
        "Convert all ringgit amounts to integer cents (sen) before calculating (e.g., 5000 - 3860 = 1140 sen)",
        "Use `float` with `printf(\"%.2f\")`",
        "Convert to String and parse character by character"
    ],
    1,
    "Converting currency to the smallest discrete unit (cents/sen) as an integer (`int` or `long`) eliminates floating-point representation errors and guarantees exact division and modulus for coin denominations.",
    "Currency Denomination Math", "scenario", "easy",
    "Follows best practice of integer cents for coin denomination math.",
    "Work in integer cents/sen when calculating change denominations to avoid floating-point inaccuracy."
)

add_q(
    "An access control system encodes permissions using bits: Read = 1, Write = 2, Execute = 4, Delete = 8. A user has `int userPerms = 7;`. Does this user have 'Delete' permission?",
    [
        "Yes, because 7 > 4",
        "No, because `(userPerms & 8) == 0`",
        "Yes, because `(userPerms | 8) == 7`",
        "Cannot be determined without a database query"
    ],
    1,
    "User permissions 7 is binary `0111` (Read + Write + Execute = 1 + 2 + 4). The Delete permission is 8 (`1000`). Evaluating `7 & 8` gives `0`, confirming the user lacks Delete permission.",
    "Permission Masking", "scenario", "easy",
    "Accurately evaluated bitwise permission flags.",
    "Bitwise AND with the permission bit mask indicates whether that permission is granted."
)

add_q(
    "A mobile banking app needs to display a credit card number masked as `****-****-****-1234`. The raw number is a 16-digit `long creditCard = 5521998844331234L;`. How can the last 4 digits be extracted mathematically without converting to a String?",
    [
        "`creditCard / 10000`",
        "`creditCard % 10000`",
        "`creditCard & 10000`",
        "`creditCard >> 4`"
    ],
    1,
    "The modulus operator `% 10000` extracts the remainder when divided by 10,000, isolating the last 4 digits mathematically in O(1) time.",
    "Digit Extraction Modulus", "scenario", "easy",
    "Applied modulus arithmetic to extract trailing digits.",
    "Modulus `% 10^k` extracts the last `k` digits of any integer."
)

add_q(
    "A graphics rendering engine stores RGB color values in a 32-bit integer: `0x00RRGGBB`. If `int color = 0x00FF8040;`, how do you extract the Green component (which should be `0x80` or 128)?",
    [
        "`(color >> 8) & 0xFF`",
        "`(color >> 16) & 0xFF`",
        "`color & 0x0000FF00`",
        "`(color << 8) & 0xFF`"
    ],
    0,
    "In `0x00RRGGBB`, Red is bits 16-23, Green is bits 8-15, and Blue is bits 0-7. Shifting right by 8 bits moves the Green byte to the lowest 8 bits, and masking with `0xFF` isolates it.",
    "Color Channel Bit Extraction", "scenario", "hard",
    "Mastery of bit shifting and masking for color channel extraction.",
    "To extract a byte channel, shift right to align with the lowest byte and mask with `0xFF`."
)

add_q(
    "A high-traffic web server generates unique 64-bit request IDs combining a 32-bit timestamp and a 32-bit counter. If `int timestamp` and `int counter` are given, how do you combine them into a single `long requestId`?",
    [
        "`long requestId = (timestamp << 32) + counter;` (Potential overflow/sign extension bug)",
        "`long requestId = (((long) timestamp) << 32) | (counter & 0xFFFFFFFFL);`",
        "`long requestId = (long)(timestamp + counter);`",
        "`long requestId = timestamp * 32 + counter;`"
    ],
    1,
    "First, `timestamp` must be cast to `long` before shifting by 32 bits, otherwise the shift operates on a 32-bit `int` and wraps to 0. Second, `counter` must be masked with `0xFFFFFFFFL` to prevent unwanted negative sign extension.",
    "64-Bit Packing & Sign Extension", "scenario", "hard",
    "Expertise in bit packing into 64-bit long avoiding sign extension pitfalls.",
    "Cast to `long` before shifting 32 bits, and mask lower 32 bits with `0xFFFFFFFFL` to avoid sign extension."
)

add_q(
    "A warehouse management system calculates the number of shipping boxes needed for items. Each box holds 12 items. For `int items = 25;`, which integer formula correctly computes the required 3 boxes without using `Math.ceil()`?",
    [
        "`(items + 12) / 12`",
        "`(items + 11) / 12`",
        "`items / 12 + 1`",
        "`items % 12`"
    ],
    1,
    "The standard integer formula for ceiling division of `a / b` is `(a + b - 1) / b`. For 12, `(items + 11) / 12`. For 25 items: `(25 + 11) / 12 = 36 / 12 = 3`. For 24 items: `(24 + 11) / 12 = 35 / 12 = 2` (exact match!).",
    "Integer Ceiling Division Trick", "scenario", "medium",
    "Mastery of the integer ceiling division formula `(a + b - 1) / b`.",
    "`(n + d - 1) / d` performs integer ceiling division cleanly without floating-point conversion."
)

add_q(
    "A database query returns elapsed query durations in seconds. A developer must display the duration in `MM:SS` format (e.g. 125 seconds -> `02:05`). Which snippet outputs this cleanly?",
    [
        "`System.out.printf(\"%02d:%02d\", totalSeconds / 60, totalSeconds % 60);`",
        "`System.out.printf(\"%2d:%2d\", totalSeconds / 60, totalSeconds % 60);`",
        "`System.out.println(totalSeconds / 60 + \":\" + totalSeconds % 60);`",
        "`System.out.printf(\"%.2f:%.2f\", (double)(totalSeconds / 60), (double)(totalSeconds % 60));`"
    ],
    0,
    "`totalSeconds / 60` computes whole minutes (2). `totalSeconds % 60` computes leftover seconds (5). `%02d:%02d` formats both as 2-digit zero-padded integers: `\"02:05\"`.",
    "Time Format Output", "scenario", "easy",
    "Correctly used division, modulus, and zero-padding for MM:SS formatting.",
    "Use `%02d` with division and modulus to format minutes and seconds with leading zeros."
)

add_q(
    "A developer needs to read user input containing both an ID number and their full residential address in a console app. Why does calling `sc.nextInt()` followed by `sc.nextLine()` fail, and what is the fix?",
    [
        "`nextInt()` crashes on whitespace; change it to `next()`",
        "`nextInt()` leaves the newline in the buffer; insert an extra `sc.nextLine()` immediately after `nextInt()` to consume it",
        "Scanner cannot read addresses with commas; use `BufferedReader` only",
        "`nextLine()` requires passing a character encoding parameter"
    ],
    1,
    "`sc.nextInt()` consumes only numeric digits, leaving the Enter key's `\\n` newline in the stream. Calling an extra `sc.nextLine()` flushes that newline so the next `sc.nextLine()` correctly waits for the user's address.",
    "Scanner Buffer Flush Pattern", "scenario", "medium",
    "Applied the standard Scanner buffer flushing pattern.",
    "Always consume the leftover newline with `sc.nextLine()` after calling `nextInt()` or `nextDouble()`."
)

with open("scratch/ch1.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Generated {len(questions)} questions for Chapter 1!")
