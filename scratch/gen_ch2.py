# -*- coding: utf-8 -*-
"""
Generate 100 questions for Chapter 2: Flow of Control
(if-else, switch, while, do-while, for, enhanced for, break/continue, nested loops, labeled statements)
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
    "What is the fundamental difference between a `while` loop and a `do-while` loop in Java?",
    [
        "`while` loop is post-tested; `do-while` loop is pre-tested",
        "`while` loop checks the condition before executing the loop body; `do-while` checks after, guaranteeing at least one execution",
        "`while` loop supports `break`; `do-while` loop does not",
        "`do-while` loops can only iterate through arrays"
    ],
    1,
    "A `while` loop is an entry-controlled loop (evaluating condition before entering the body, potentially running 0 times). A `do-while` loop is exit-controlled, ensuring the body executes at least once.",
    "Loop Architecture", "theory", "easy",
    "Understands the entry-controlled vs exit-controlled distinction.",
    "Remember that `do-while` executes its body at least once before checking the condition."
)

add_q(
    "Which of the following data types CANNOT be used as the selector expression in a traditional Java `switch` statement?",
    ["int", "char", "String", "double"],
    3,
    "Traditional Java `switch` statements support `byte`, `short`, `char`, `int`, their corresponding wrapper classes, `enum`, and `String` (from Java 7). Floating-point types (`float`, `double`) and `boolean`/`long` are strictly prohibited.",
    "Switch Selector Types", "theory", "easy",
    "Identifies unsupported types in switch statements.",
    "Switch statements do not accept `double`, `float`, `long`, or `boolean`."
)

add_q(
    "What phenomenon occurs in a `switch` statement if a matching `case` block omits the `break` statement?",
    [
        "Compilation error: missing break",
        "Runtime `NoSuchCaseException`",
        "Fall-through: execution continues sequentially into subsequent case blocks until a break or the end of the switch is encountered",
        "The switch statement restarts from the first case"
    ],
    2,
    "Omitting `break` triggers fall-through behavior, where execution flows unconditionally into the subsequent cases regardless of their case label values.",
    "Switch Fall-Through", "theory", "easy",
    "Understands switch fall-through mechanics.",
    "Omitting `break` causes execution to fall through into subsequent case statements."
)

add_q(
    "In a standard three-part `for` loop header `for (init; condition; update)`, in what exact order are the parts executed for the very first iteration?",
    [
        "condition -> init -> update -> body",
        "init -> condition -> body -> update",
        "init -> body -> condition -> update",
        "condition -> body -> update -> init"
    ],
    1,
    "For the first iteration: `init` runs once, then `condition` is evaluated. If true, the `body` executes, followed by the `update` expression.",
    "For Loop Lifecycle", "theory", "easy",
    "Knows the lifecycle execution order of a for loop.",
    "For loop order: init runs once, then condition, then body, then update."
)

add_q(
    "What is the dangling else problem in nested if-else structures?",
    [
        "An `else` clause that has no code inside its block",
        "Ambiguity in code readability where an `else` matches the closest preceding unmatched `if`, which may differ from indentation",
        "An `else` statement placed outside a method",
        "When an `else` block causes an infinite loop"
    ],
    1,
    "In Java, an `else` is always bound to the nearest preceding unmatched `if` at the same block level, regardless of indentation. Using curly braces `{}` avoids ambiguity.",
    "Dangling Else Problem", "theory", "medium",
    "Understands syntactic binding of the dangling else.",
    "In Java, `else` pairs with the closest preceding unmatched `if`; use braces `{}` to clarify intent."
)

add_q(
    "What happens when the condition in a `while` loop is a compile-time constant `while (false)`?",
    [
        "The loop executes zero times at runtime without errors",
        "The compiler issues an 'unreachable statement' error for the loop body",
        "The JVM throws an `IllegalArgumentException`",
        "The code compiles but crashes immediately upon entry"
    ],
    1,
    "Java strictly checks for reachable code. A `while (false)` statement renders its body provably unreachable, resulting in a compile-time error.",
    "Unreachable Code Rules", "theory", "medium",
    "Understands compiler enforcement of unreachable code in constant while loops.",
    "`while (false) { ... }` causes a compilation error because the loop body is unreachable."
)

add_q(
    "What is the purpose of a labeled `break` statement in Java (`break label;`)?",
    [
        "To jump backwards to restart an earlier method",
        "To terminate an outer enclosing loop or block identified by the label",
        "To jump to a specific line number like a C goto statement",
        "To exit the JVM runtime completely"
    ],
    1,
    "Java does not support arbitrary `goto`, but supports labeled `break` to cleanly break out of multiple levels of nested loops.",
    "Labeled Break", "theory", "medium",
    "Understands multi-level loop termination via labeled break.",
    "A labeled `break` allows exiting an outer loop from deep within nested loops."
)

add_q(
    "How does a labeled `continue` statement (`continue outer;`) differ from an unlabeled `continue`?",
    [
        "Unlabeled continue skips to the next iteration of the innermost loop; labeled continue skips to the next iteration of the outer labeled loop",
        "Labeled continue exits the program; unlabeled continue does not",
        "Labeled continue resets the loop variable to zero",
        "They are functionally identical in all scenarios"
    ],
    0,
    "Unlabeled `continue` skips the remainder of the innermost loop iteration. Labeled `continue` transfers control to the update/condition check of the specified outer labeled loop.",
    "Labeled Continue", "theory", "medium",
    "Distinguishes labeled continue from standard innermost continue.",
    "Labeled `continue label;` skips to the next iteration of the outer enclosing loop designated by the label."
)

add_q(
    "What are the requirements for case label values in a traditional Java `switch` statement?",
    [
        "They can be any variable accessible in scope",
        "They must be compile-time constants (literals or final variables initialized with constant expressions) and within range of the switch selector type",
        "They must be unique Strings only",
        "They can be boolean expressions like `x > 10`"
    ],
    1,
    "Every case label must be a compile-time constant expression whose value is assignable to the switch selector type. Variable expressions or duplicate case values are illegal.",
    "Switch Case Constant Rules", "theory", "medium",
    "Knows the requirement for constant expressions in switch case labels.",
    "Case labels must be compile-time constants (e.g. literals or `final` constants); variables are disallowed."
)

add_q(
    "What is the result of omitting all three expressions in a `for` loop: `for ( ; ; )`?",
    [
        "Compile-time error: missing condition",
        "An intentional infinite loop whose condition is implicitly treated as `true`",
        "A loop that executes zero times",
        "A loop that iterates exactly `Integer.MAX_VALUE` times"
    ],
    1,
    "In Java, omitting the condition in `for (;;)` implicitly defaults to `true`, creating an intentional infinite loop.",
    "Infinite For Loop", "theory", "easy",
    "Recognizes standard idiom for infinite for loop `for(;;)`.",
    "`for (;;)` creates an infinite loop because an omitted condition defaults to `true`."
)

add_q(
    "Can a `switch` statement have a `default` case placed anywhere other than the very bottom?",
    [
        "No, `default` must strictly be the final statement in the switch block",
        "Yes, `default` can appear anywhere inside the switch block and is only executed if no matching case is found (or via fall-through)",
        "Yes, but it causes a compiler warning",
        "No, placing `default` at the top causes an infinite loop"
    ],
    1,
    "The `default` label can appear anywhere within the switch body. It is evaluated only after all `case` labels have failed to match, unless reached via fall-through.",
    "Switch Default Placement", "theory", "hard",
    "Understands flexible placement of default in switch blocks.",
    "`default` can appear at the top, middle, or bottom; it only triggers if no case matches (or via fall-through)."
)

add_q(
    "In an enhanced for loop (for-each: `for (int x : array)`), what limitation applies regarding mutating array elements?",
    [
        "It can only read array elements; assigning to `x` modifies the local copy and does NOT change the array element",
        "Assigning to `x` throws an `UnsupportedOperationException`",
        "The array is automatically cloned into read-only memory",
        "Enhanced for loops cannot be used on primitive arrays"
    ],
    0,
    "In an enhanced for-each loop over primitive arrays, the iteration variable `x` receives a copy of each element's value. Reassigning `x = 10;` modifies only the local variable, leaving the array unchanged.",
    "Enhanced For Loop Semantics", "theory", "medium",
    "Understands that for-each iteration variable does not modify primitive array elements.",
    "Modifying the loop variable in an enhanced for-each loop does not update the underlying array."
)

add_q(
    "Why is it hazardous to use floating-point variables (`float` or `double`) as loop counters (e.g. `for (double d = 0.0; d != 1.0; d += 0.1)`)?",
    [
        "Floating point variables cannot be incremented with `+=`",
        "Accumulated binary rounding errors may cause the counter to skip exact equality `d != 1.0`, resulting in an unexpected or infinite loop",
        "The JVM converts double loop counters to zero automatically",
        "Loop conditions require integer types only"
    ],
    1,
    "Because 0.1 cannot be represented exactly in binary floating point, successive additions accumulate rounding errors, causing `d` to skip `1.0` (e.g. 0.9999999999999999 -> 1.0999999999999999) and looping indefinitely.",
    "Floating-Point Loop Counter", "theory", "medium",
    "Understands the danger of floating-point roundoff in loop conditions.",
    "Never use floating-point numbers with exact equality `!=` or `==` as loop termination conditions."
)

add_q(
    "Can a `break` statement be used inside an `if` block that is NOT inside a loop or switch?",
    [
        "Yes, it breaks out of the `if` block automatically",
        "No, an unlabeled `break` statement must be inside a loop or switch, otherwise a compile-time error occurs",
        "Yes, if the condition is false",
        "Yes, but only in Java 8 and above"
    ],
    1,
    "An unlabeled `break` statement can only appear inside a `while`, `do`, `for`, or `switch` statement. Using it directly inside a standalone `if` causes a compilation error: 'break outside switch or loop'.",
    "Break Statement Scope", "theory", "easy",
    "Understands valid syntactic scopes for unlabeled break.",
    "`break` must reside inside a loop or switch; it cannot be used in a standalone `if` statement."
)

add_q(
    "What is the effect of placing a semicolon immediately after a `while` condition: `while (x < 10); { x++; }`?",
    [
        "The semicolon is ignored as empty whitespace",
        "The semicolon forms an empty loop body; if `x < 10` is true initially, it creates an infinite loop because `x` is never updated",
        "A compilation error occurs: unexpected token ';'",
        "The block `{ x++; }` executes 10 times"
    ],
    1,
    "The semicolon `;` terminates the loop statement with an empty body. The loop repeatedly checks `x < 10` without executing `{ x++; }`, hanging in an infinite loop.",
    "Null Statement Loop Trap", "theory", "medium",
    "Recognized the classic accidental null statement trap after loop headers.",
    "A semicolon after `while(...)` or `for(...)` creates an empty body that often results in an infinite loop."
)

add_q(
    "Can multiple variables be initialized in the initialization section of a standard `for` loop?",
    [
        "No, only one variable can ever be declared",
        "Yes, but only if they are of the same data type, separated by commas (e.g. `for (int i = 0, j = 10; ...)` )",
        "Yes, variables of different types can be declared separated by semicolons",
        "Yes, using the `and` keyword"
    ],
    1,
    "Java allows declaring multiple variables in the loop initialization header, provided they share the same data type declaration separated by commas: `for (int i = 0, j = 10; i < j; i++, j--)`.",
    "For Loop Multiple Variables", "theory", "easy",
    "Knows syntax rules for multiple variables in for loop headers.",
    "Multiple loop variables can be declared in the header if they share the same type (separated by commas)."
)

add_q(
    "What is an off-by-one error in loop design?",
    [
        "Incrementing by 2 instead of 1",
        "A logic error where a loop iterates one time too many or one time too few, often caused by confusing `<` with `<=`",
        "A loop whose counter starts at negative one",
        "An error when an array has only one element"
    ],
    1,
    "An off-by-one error (OBOE) occurs when the loop boundary condition is slightly misplaced (e.g., using `<= array.length` instead of `< array.length`), executing one iteration too many or too few.",
    "Off-By-One Logic Error", "theory", "easy",
    "Understands off-by-one boundary errors.",
    "Watch boundary conditions: iterating array indices requires `< array.length`, not `<=`."
)

add_q(
    "What is the maximum number of times the condition expression in a `for` loop `for (int i = 0; i < N; i++)` is evaluated if the loop completes normally (where N >= 0)?",
    [
        "N times",
        "N - 1 times",
        "N + 1 times",
        "2 * N times"
    ],
    2,
    "The condition is evaluated N times yielding `true` (entering the body), plus 1 final time where it evaluates to `false` to terminate the loop. Total: `N + 1` evaluations.",
    "Loop Condition Evaluations", "theory", "hard",
    "Understands exact evaluation count of loop conditions.",
    "A loop executing N times evaluates its condition N + 1 times (the last one returns false)."
)

add_q(
    "Can a `continue` statement be used inside a `switch` statement that is NOT inside a loop?",
    [
        "Yes, it acts like break",
        "No, `continue` must strictly reside inside an iteration statement (for, while, do); it cannot be used in a switch alone",
        "Yes, it skips to the default case",
        "Yes, it restarts the switch"
    ],
    1,
    "`continue` is strictly a loop-control statement. Inside a standalone `switch`, using `continue` causes a compile-time error: 'continue outside of loop'.",
    "Continue Statement Scope", "theory", "medium",
    "Understands that continue cannot be used in a standalone switch.",
    "`continue` only works inside loops (while, do, for); it cannot be used inside a standalone switch."
)

add_q(
    "What happens when duplicate `case` labels exist inside a single `switch` statement?",
    [
        "The second case is silently ignored",
        "Compilation error: duplicate case label",
        "Runtime exception `DuplicateCaseException`",
        "Both case blocks execute simultaneously"
    ],
    1,
    "The Java compiler requires all case label values within a switch statement to be mutually unique. Duplicate case labels trigger a compile error.",
    "Duplicate Case Error", "theory", "easy",
    "Recognized that duplicate case labels are rejected by the compiler.",
    "Every case label in a switch block must be unique."
)

add_q(
    "In a `do-while` loop, what punctuation is strictly required immediately after the closing parenthesis of `while (condition)`?",
    [
        "A colon `:`",
        "A semicolon `;`",
        "A closing brace `}`",
        "No punctuation is permitted"
    ],
    1,
    "A `do-while` loop statement must terminate with a semicolon `;` following the condition parenthesis: `do { ... } while (condition);`.",
    "Do-While Syntax", "theory", "easy",
    "Knows the required semicolon in do-while loop syntax.",
    "Always end a `do-while` loop with a trailing semicolon: `while (condition);`."
)

add_q(
    "What is the difference between an entry-controlled loop and an exit-controlled loop?",
    [
        "Entry-controlled loops run at least once; exit-controlled may run zero times",
        "Entry-controlled tests condition before body execution; exit-controlled tests condition after body execution",
        "Entry-controlled loops cannot use `break`",
        "Exit-controlled loops cannot use nested loops"
    ],
    1,
    "`for` and `while` are entry-controlled (test before entering body). `do-while` is exit-controlled (tests after executing body).",
    "Loop Classification", "theory", "easy",
    "Correctly classifies entry-controlled vs exit-controlled loops.",
    "Entry-controlled loops test condition first; exit-controlled loops test condition at the end."
)

add_q(
    "Which of the following describes the execution of a `break` statement inside an inner loop of two nested loops?",
    [
        "It terminates both the inner and outer loops",
        "It terminates only the innermost enclosing loop and resumes execution in the outer loop",
        "It skips to the next iteration of the inner loop",
        "It terminates the entire program"
    ],
    1,
    "An unlabeled `break` statement only terminates the innermost enclosing loop or switch statement that directly contains it.",
    "Nested Loop Break", "theory", "easy",
    "Understands that unlabeled break terminates only the innermost loop.",
    "Unlabeled `break` exits only the immediate innermost loop, returning control to the outer loop."
)

add_q(
    "Can the update expression of a `for` loop decrement the counter instead of incrementing it?",
    [
        "No, `for` loops can only increment",
        "Yes, update expressions can decrement (e.g. `i--`), add steps (e.g. `i += 5`), or execute any valid expression statement",
        "Only if `i` is declared as a `double`",
        "Only when accompanied by a `break` statement"
    ],
    1,
    "The update expression in a `for` loop can be any valid expression statement, such as decrementing (`i--`), step addition (`i += 2`), multiplication (`i *= 2`), or even method calls.",
    "For Loop Update Flexibility", "theory", "easy",
    "Understands flexible update expressions in for loops.",
    "For loop update statements can increment, decrement, scale, or perform any valid expression."
)

add_q(
    "In Java, can a boolean expression be used directly as an `if` condition without `== true` (e.g. `if (isReady)` vs `if (isReady == true)`)?",
    [
        "No, `== true` is mandatory in Java",
        "Yes, writing `if (isReady)` is idiomatic and clean because `isReady` is already a boolean",
        "`if (isReady)` only works if `isReady` is non-zero integer",
        "It throws a `NullPointerException`"
    ],
    1,
    "`if` statements require a boolean expression. If a variable is already a boolean, testing `if (isReady)` is direct, clean, and preferred over redundant `if (isReady == true)`.",
    "Boolean Condition Idiom", "theory", "easy",
    "Knows clean idiomatic boolean testing in if conditions.",
    "Direct boolean evaluation `if (flag)` is cleaner than redundant `if (flag == true)`."
)

# =========================================================================
# 2. ERROR IDENTIFICATION IN CODE SNIPPETS (25 Questions)
# =========================================================================
add_q(
    "Identify the compilation error in the following snippet:\n```java\nint x = 10;\nif (x = 20) {\n    System.out.println(\"Twenty\");\n}\n```",
    [
        "println cannot take String literals",
        "Incompatible types: int cannot be converted to boolean (used assignment '=' instead of comparison '==')",
        "x cannot be modified inside an if statement",
        "Variable x is not in scope"
    ],
    1,
    "In Java, `x = 20` is an assignment that returns the integer `20`. Because Java `if` conditions strictly require a `boolean`, passing an `int` causes a compile error: 'int cannot be converted to boolean'.",
    "Assignment in Condition Error", "error", "easy",
    "Caught accidental assignment operator '=' inside if condition.",
    "Use comparison operator `==` inside conditions; assignment `=` yields an int which is not boolean in Java."
)

add_q(
    "Why does this code fail to compile?\n```java\nint day = 3;\nswitch (day) {\n    case 1: System.out.println(\"Mon\"); break;\n    case 1: System.out.println(\"Duplicate\"); break;\n}\n```",
    [
        "break cannot be on the same line as println",
        "Duplicate case label: case 1 appears more than once",
        "switch requires curly braces for each case",
        "switch cannot evaluate int"
    ],
    1,
    "Case labels within a single switch block must be distinct. Having two `case 1:` labels causes a compile-time error: 'duplicate case label'.",
    "Duplicate Case Label", "error", "easy",
    "Spotted duplicate case label in switch.",
    "Every case label in a switch statement must be unique."
)

add_q(
    "What is the compilation error in the following snippet?\n```java\nfinal int a = 5;\nint b = 10;\nswitch (b) {\n    case a: System.out.println(\"A\"); break;\n    case b: System.out.println(\"B\"); break;\n}\n```",
    [
        "case a is invalid because final constants cannot be cases",
        "case b is invalid: constant expression required (b is a non-final variable)",
        "switch cannot take variable b",
        "No error: code compiles cleanly"
    ],
    1,
    "`case a:` is valid because `a` is a `final` constant. However, `b` is a non-final variable, so `case b:` violates the rule that case labels must be compile-time constants.",
    "Non-Constant Case Label", "error", "medium",
    "Distinguished constant vs non-constant expressions in switch case labels.",
    "Case labels must be compile-time constants; non-final variables like `b` are illegal as case labels."
)

add_q(
    "Why does the following snippet produce a compilation error?\n```java\nwhile (true) {\n    System.out.println(\"Running\");\n}\nSystem.out.println(\"Done\");\n```",
    [
        "while(true) is an illegal condition in Java",
        "Unreachable statement: line 4 can never be reached due to the infinite while loop",
        "System.out.println cannot be called twice",
        "Infinite loops cause stack overflow at compile-time"
    ],
    1,
    "Because `while (true)` has no break statement, the compiler proves that the statement following the loop is unreachable, throwing a compile-time error: 'unreachable statement'.",
    "Unreachable Statement Error", "error", "easy",
    "Recognized compiler rejection of code following infinite loop.",
    "Code placed immediately after an unconditional infinite loop without break is unreachable and rejected by the compiler."
)

add_q(
    "What is the bug in this loop intended to print numbers 1 to 5?\n```java\nfor (int i = 1; i <= 5; i++); {\n    System.out.println(i);\n}\n```",
    [
        "i <= 5 causes an index out of bounds error",
        "The semicolon after the for loop header creates an empty loop; furthermore, 'i' is out of scope in the block `{ System.out.println(i); }`",
        "for loops cannot use <= operator",
        "System.out.println requires string concatenation"
    ],
    1,
    "The trailing semicolon `;` ends the for loop immediately. When the loop finishes, `i` goes out of scope, causing a compile error when `{ System.out.println(i); }` tries to reference `i`.",
    "Semicolon Loop Header & Scope Bug", "error", "medium",
    "Spotted trailing semicolon on for loop and subsequent variable scope failure.",
    "Do not put a semicolon after the for loop header; it creates an empty body and isolates the loop variable."
)

add_q(
    "Why does the following code fail to compile?\n```java\nint x = 10;\nswitch (x) {\n    case 10:\n        int count = 1;\n        break;\n    case 20:\n        int count = 2;\n        break;\n}\n```",
    [
        "Variables cannot be declared inside a switch",
        "Variable 'count' is already defined in scope: the entire switch block shares a single local variable scope",
        "count must be declared final",
        "break cannot appear after variable declaration"
    ],
    1,
    "A `switch` block forms a single contiguous variable scope. Declaring `int count` in `case 10` and again in `case 20` causes a duplicate variable declaration error. Enclosing each case in `{ int count = ...; }` solves this.",
    "Switch Scope Duplicate Variable", "error", "hard",
    "Mastered the single-scope nature of switch statements.",
    "The entire switch statement is one scope; declare variables once or wrap individual cases in braces `{}`."
)

add_q(
    "What is the compilation error in the following snippet?\n```java\nboolean done = false;\ndo {\n    System.out.println(\"Working\");\n} while (!done)\n```",
    [
        "while cannot be negated with !",
        "Missing semicolon ';' after while(!done) in do-while loop syntax",
        "do cannot be followed by while",
        "done must be an integer"
    ],
    1,
    "A `do-while` loop requires a terminating semicolon after the closing parenthesis: `while (!done);`. Omitting it triggers a syntax error: ';' expected.",
    "Missing Do-While Semicolon", "error", "easy",
    "Identified missing terminating semicolon in do-while loop.",
    "Every `do-while` loop must terminate with a semicolon after the condition: `while (...);`."
)

add_q(
    "Identify the compilation issue in this snippet:\n```java\nint score = 85;\nif (score >= 90)\n    String grade = \"A\";\n```",
    [
        "String cannot be declared inside a method",
        "Variable declaration cannot be the direct sub-statement of an if statement without a block `{}`",
        "score must be a double",
        "grade is a reserved keyword"
    ],
    1,
    "The Java Language Specification explicitly forbids a variable declaration as the single statement of an `if`, `while`, or `for` statement without braces `{}` because the variable would instantly go out of scope.",
    "Single Statement Variable Declaration", "error", "hard",
    "Understands that variable declarations cannot be unbraced branch statements.",
    "Variable declarations cannot stand alone as single unbraced statements under `if`, `while`, or `for`."
)

add_q(
    "What is the bug in the following loop?\n```java\nint count = 1;\nwhile (count <= 10) {\n    System.out.println(count);\n}\n```",
    [
        "count cannot be initialized to 1",
        "Infinite loop: `count` is never incremented inside the loop body",
        "while cannot use <=",
        "println crashes after 10 lines"
    ],
    1,
    "Because `count` is never updated (`count++`) inside the loop body, `count <= 10` remains perpetually true, executing an infinite loop.",
    "Missing Loop Update", "error", "easy",
    "Caught missing loop update variable causing infinite loop.",
    "Ensure the loop control variable is modified within the loop body to guarantee termination."
)

add_q(
    "Why does the following enhanced for-each loop fail to compile?\n```java\nint number = 100;\nfor (int n : number) {\n    System.out.println(n);\n}\n```",
    [
        "number is not an array or an instance of java.lang.Iterable",
        "n must be declared as Object",
        "enhanced for loop requires colon and semicolon",
        "println cannot print n"
    ],
    0,
    "The enhanced for-each loop requires the target expression on the right of `:` to be an array or an object implementing `java.lang.Iterable`. A primitive `int` cannot be iterated over.",
    "ForEach Target Requirement", "error", "easy",
    "Understands iterable/array requirement for enhanced for-each loop.",
    "Enhanced for loops only accept arrays or collections implementing `Iterable`."
)

add_q(
    "Identify the bug in this code:\n```java\nint x = 5;\nif (x > 0);\n{\n    System.out.println(\"Positive\");\n}\n```",
    [
        "System.out.println cannot be inside braces",
        "The semicolon after `if (x > 0);` terminates the if statement, making the block `{ println... }` execute unconditionally",
        "x > 0 is not a valid condition",
        "Variables must be declared inside the if block"
    ],
    1,
    "The semicolon immediately after `if (x > 0);` creates an empty statement. The subsequent block executes unconditionally regardless of whether `x > 0` is true or false.",
    "Semicolon After If Bug", "error", "easy",
    "Caught unintentional semicolon terminating if condition.",
    "Never place a semicolon directly after an `if (...)` condition; it disconnects the subsequent block."
)

add_q(
    "Why does this loop fail to compile?\n```java\nfor (int i = 0, double d = 0.5; i < 5; i++) {\n    System.out.println(i);\n}\n```",
    [
        "i and d must be incremented together",
        "Multiple variables declared in a for-loop init section must be of the same type; mixing 'int' and 'double' declarations is illegal",
        "d must be an integer",
        "double cannot be initialized to 0.5"
    ],
    1,
    "In a `for` loop header, all declared variables in the initialization part must share the exact same type specifier. Mixing `int` and `double` in the same init clause is invalid syntax.",
    "Mixed Types in For Header", "error", "medium",
    "Spotted illegal mixed type declarations in for loop header.",
    "All variables declared in a for loop initialization clause must share the same data type."
)

add_q(
    "What compilation error occurs in this snippet?\n```java\nbreak;\n```",
    [
        "Missing label",
        "break outside switch or loop",
        "break cannot be in lowercase",
        "Syntax error: expected return"
    ],
    1,
    "An unlabeled `break` statement is only permitted within an enclosing loop or switch statement.",
    "Break Scope Error", "error", "easy",
    "Recognized break statement placed outside loop or switch context.",
    "`break` must be inside a loop or switch."
)

add_q(
    "Why does the following snippet fail to compile?\n```java\nint x = 5;\ncontinue;\n```",
    [
        "continue cannot be on line 2",
        "continue outside of loop",
        "x must be incremented first",
        "continue must take a parameter"
    ],
    1,
    "A `continue` statement can only be used inside the body of a loop (`for`, `while`, `do-while`). Using it outside a loop causes a compile error: 'continue outside of loop'.",
    "Continue Scope Error", "error", "easy",
    "Recognized continue statement placed outside loop context.",
    "`continue` is strictly valid only inside loop bodies."
)

add_q(
    "Identify the compile error in this labeled break statement:\n```java\nmyLoop: \nint x = 10;\nwhile (x > 0) {\n    break myLoop;\n}\n```",
    [
        "Labels cannot end with a colon",
        "The label 'myLoop' is attached to `int x = 10;`, not the while loop, so `break myLoop` is invalid",
        "x must be decremented inside the loop",
        "Labels cannot be used on while loops"
    ],
    1,
    "A label applies only to the immediate statement that follows it. Here `myLoop:` labels `int x = 10;`. The while loop is not labeled, so breaking to `myLoop` is illegal.",
    "Label Binding Error", "error", "hard",
    "Understands that a label attaches strictly to the immediately following statement.",
    "Place the label immediately before the loop header: `myLoop: while (...)`."
)

add_q(
    "What error occurs in this switch statement?\n```java\nString fruit = \"Apple\";\nswitch (fruit) {\n    case null:\n        System.out.println(\"Null\");\n        break;\n}\n```",
    [
        "Strings cannot be used in switch statements",
        "In Java 8-16, `case null` is illegal and causes a compile error (only introduced in pattern matching switch Java 17+ / 21)",
        "null must be in double quotes \"null\"",
        "Apple cannot match null"
    ],
    1,
    "In standard traditional Java switch (prior to pattern matching preview), `case null:` is a syntax error. Passing a null selector to a traditional switch throws a `NullPointerException` at runtime.",
    "Switch Null Case Error", "error", "hard",
    "Understands that traditional switch does not permit `case null` and throws NPE on null selector.",
    "In traditional Java switch, `case null:` is invalid, and a null selector expression throws `NullPointerException`."
)

add_q(
    "Why does this code cause a compiler error?\n```java\nfor (int i = 0; i < 10; i++) {\n    if (i == 5) return;\n}\nSystem.out.println(i);\n```",
    [
        "return cannot be used inside for loops",
        "Cannot find symbol: variable 'i' (scope of 'i' is restricted to the for loop body)",
        "i == 5 is an invalid condition",
        "System.out.println cannot access integer variables"
    ],
    1,
    "Variable `i` is declared in the for-loop header. Its scope is strictly confined to the loop body and header. Referencing `i` after the loop terminates fails to compile.",
    "Loop Variable Scope Error", "error", "easy",
    "Recognized variable out-of-scope following loop termination.",
    "Variables declared in a for loop header are only accessible inside the loop."
)

add_q(
    "What is the issue with this switch statement?\n```java\ndouble grade = 3.5;\nswitch (grade) {\n    case 3.5: System.out.println(\"Good\"); break;\n}\n```",
    [
        "3.5 is not a valid case label",
        "Incompatible types: double cannot be dereferenced or used as a switch selector expression",
        "println cannot print strings inside switch",
        "grade must be declared final"
    ],
    1,
    "`switch` expressions do not support floating-point types (`float` or `double`). Compiling this produces: 'incompatible types: possible lossy conversion from double to int'.",
    "Double Switch Error", "error", "easy",
    "Spotted illegal floating-point selector in switch.",
    "Floating-point types (`double`, `float`) are not permitted in Java switch statements."
)

add_q(
    "What error occurs in this code snippet?\n```java\nint x = 10;\nif (x > 5) \n    int y = 20;\nelse\n    int y = 30;\n```",
    [
        "Variable y cannot be initialized twice",
        "Declarations are not allowed as single unbraced statements in if/else branches",
        "x > 5 must be in curly braces",
        "else cannot follow if without braces"
    ],
    1,
    "Neither the `if` nor the `else` branch allows an unbraced local variable declaration. Both lines produce compilation errors: 'variable declaration not allowed here'.",
    "Unbraced Branch Declaration", "error", "medium",
    "Recognized forbidden standalone variable declarations in both if and else branches.",
    "Use braces `{}` if you need to declare a variable inside an `if` or `else` branch."
)

add_q(
    "Why does the following snippet produce an unreachable code error?\n```java\nfor (int i = 0; i < 5; i++) {\n    break;\n    System.out.println(i);\n}\n```",
    [
        "i is never incremented",
        "Statement `System.out.println(i);` is unreachable because `break` unconditionally terminates the iteration prior to reaching it",
        "break cannot appear as the first statement in a loop",
        "i < 5 is always true"
    ],
    1,
    "Because `break` exits the loop unconditionally, any statements placed after `break` within the same block can never be executed, causing a compile-time 'unreachable statement' error.",
    "Unreachable Code After Break", "error", "easy",
    "Spotted unreachable statements immediately following an unconditional break.",
    "Statements placed directly after an unconditional `break` or `continue` are unreachable and cause a compile error."
)

add_q(
    "What is the compilation issue in this code?\n```java\nint x = 5;\nwhile (x > 0) \n    x--;\n    System.out.println(x);\n```",
    [
        "System.out.println causes a compilation error",
        "No compile error, but indentation misleadingly implies println is inside the loop when only `x--;` is repeated",
        "while loops must have braces `{}` in Java",
        "x-- cannot be used without assignment"
    ],
    1,
    "Without braces `{}`, only the single statement `x--;` belongs to the while loop. `System.out.println(x);` executes only once after the loop finishes. It compiles, but indentation creates a severe logic bug.",
    "Missing Braces Logic Trap", "error", "medium",
    "Understands single-statement body semantics and indentation pitfalls without braces.",
    "Without braces, only the first statement belongs to the loop body; subsequent statements execute after the loop."
)

add_q(
    "Why does this code fail to compile?\n```java\nint x = 2;\nswitch (x) {\n    case 1 + 1:\n        System.out.println(\"Two\");\n        break;\n    case 2:\n        System.out.println(\"Also Two\");\n        break;\n}\n```",
    [
        "`1 + 1` is an invalid expression for a case label",
        "`1 + 1` evaluates to 2 at compile-time, causing a 'duplicate case label: 2' compilation error with `case 2`",
        "System.out.println cannot be called inside case 1 + 1",
        "case labels cannot contain arithmetic"
    ],
    1,
    "`1 + 1` is a constant expression evaluated at compile time to 2. Because `case 2:` already exists, the compiler rejects the switch due to duplicate case labels.",
    "Constant Expression Duplicate Case", "error", "medium",
    "Recognized compile-time constant evaluation leading to duplicate case labels.",
    "Constant expressions like `1 + 1` evaluate to 2 at compile time, colliding with `case 2:`."
)

add_q(
    "Identify the bug in this code intended to sum numbers 1 to 5:\n```java\nint sum = 0;\nfor (int i = 1; i <= 5; i++) \n    sum += i;\n    System.out.println(\"Sum: \" + sum);\n```",
    [
        "sum += i is an invalid expression",
        "The println is indented but outside the loop, so it only prints once at the end (Sum: 15) instead of each step",
        "Loop runs infinitely",
        "i is not accessible by sum"
    ],
    1,
    "Because braces are omitted, only `sum += i;` is inside the loop. The println executes once after the loop completes. While valid syntax, it is a common bug when the developer intended intermediate printing.",
    "Omitted Braces Semantic Trap", "error", "easy",
    "Spotted unintended loop scope due to omitted braces.",
    "Always use braces `{}` around loop bodies to prevent misleading indentation bugs."
)

add_q(
    "What error occurs in this code snippet?\n```java\nint x = 0;\ndo {\n    int val = 10;\n    x++;\n} while (val > 0);\n```",
    [
        "do-while loops cannot declare variables",
        "Cannot find symbol: variable 'val' is declared inside the loop block and is out of scope in the while condition",
        "val > 0 is an invalid condition",
        "Missing semicolon"
    ],
    1,
    "Variables declared inside the `do { ... }` block are local to that block. The `while (val > 0)` condition is outside the block scope, so `val` cannot be resolved.",
    "Do-While Variable Scope", "error", "medium",
    "Caught referencing a block-scoped variable in do-while condition.",
    "Variables tested in a `do-while` condition must be declared outside the `do` block."
)

add_q(
    "Why does the following snippet produce a compile-time error?\n```java\nint n = 10;\nif (n > 5) {\n    int a = 1;\n} else if (n > 2) {\n    int a = 2;\n}\nSystem.out.println(a);\n```",
    [
        "Cannot declare variable 'a' in both if and else blocks",
        "Cannot find symbol: variable 'a' is local to each if/else block and not accessible outside them",
        "n > 5 condition conflicts with n > 2",
        "else if cannot follow if"
    ],
    1,
    "`a` is declared separately inside the local scopes of each branch. When the if-else terminates, `a` ceases to exist, making `System.out.println(a)` fail to compile.",
    "Branch Scope Isolation", "error", "easy",
    "Recognized block-level scope isolation in if-else branches.",
    "Variables declared inside if-else blocks cannot be accessed outside the blocks; declare them before the if-statement."
)

# =========================================================================
# 3. FIND OUTPUT OF GIVEN CODE (25 Questions)
# =========================================================================
add_q(
    "What is the output of the following switch snippet?\n```java\nint num = 2;\nswitch (num) {\n    case 1: System.out.print(\"1 \");\n    case 2: System.out.print(\"2 \");\n    case 3: System.out.print(\"3 \");\n    default: System.out.print(\"D \");\n}\n```",
    [
        "2 ",
        "2 3 D ",
        "1 2 3 D ",
        "2 3 "
    ],
    1,
    "Because there are no `break` statements, execution matches `case 2` and falls through sequentially executing `case 3` and `default`: outputting `\"2 3 D \"`.",
    "Switch Fall-Through Execution", "output", "easy",
    "Correctly tracked switch fall-through without break statements.",
    "Without `break`, execution continues down all remaining cases including default."
)

add_q(
    "What does the following nested loop print?\n```java\nfor (int i = 1; i <= 2; i++) {\n    for (int j = 1; j <= 3; j++) {\n        if (j == 2) continue;\n        System.out.print(i + \"\" + j + \" \");\n    }\n}\n```",
    [
        "11 13 21 23 ",
        "11 12 13 21 22 23 ",
        "11 21 ",
        "13 23 "
    ],
    0,
    "When `i = 1`: `j = 1` -> prints `11`. `j = 2` -> continue skips. `j = 3` -> prints `13`. When `i = 2`: `j = 1` -> prints `21`. `j = 2` -> continue skips. `j = 3` -> prints `23`. Output: `11 13 21 23 `.",
    "Nested Loop Continue Output", "output", "medium",
    "Accurately traced nested loop iterations and continue skip behavior.",
    "`continue` skips the remainder of the current inner loop iteration only."
)

add_q(
    "What is the output of the following code?\n```java\nint count = 0;\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        if (i == j) break;\n        count++;\n    }\n}\nSystem.out.println(count);\n```",
    ["0", "3", "6", "9"],
    1,
    "`i=0`: `j=0` -> `0==0` break immediately (0 iterations). `i=1`: `j=0` -> count=1; `j=1` -> `1==1` break (1 iteration). `i=2`: `j=0` -> count=2; `j=1` -> count=3; `j=2` -> break (2 iterations). Total count: `3`.",
    "Nested Loop Break Counting", "output", "medium",
    "Traced inner loop break conditions across multiple outer iterations.",
    "Trace nested loops systematically by tracking variable states for each outer iteration."
)

add_q(
    "What is the output of this labeled break snippet?\n```java\nouter:\nfor (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= 3; j++) {\n        if (i * j > 2) break outer;\n        System.out.print(i + \"*\" + j + \" \");\n    }\n}\n```",
    [
        "1*1 1*2 ",
        "1*1 1*2 2*1 ",
        "1*1 ",
        "1*1 1*2 1*3 "
    ],
    0,
    "`i=1, j=1`: `1*1=1 <= 2` -> prints `1*1 `. `i=1, j=2`: `1*2=2 <= 2` -> prints `1*2 `. `i=1, j=3`: `1*3=3 > 2` -> `break outer;` terminates both loops immediately. Output: `1*1 1*2 `.",
    "Labeled Break Output", "output", "medium",
    "Correctly recognized outer loop termination from inner loop labeled break.",
    "`break outer;` completely terminates the outer loop immediately."
)

add_q(
    "What does this while loop output?\n```java\nint x = 10;\nwhile (x --> 7) {\n    System.out.print(x + \" \");\n}\n```",
    [
        "9 8 7 ",
        "10 9 8 ",
        "9 8 ",
        "10 9 8 7 "
    ],
    0,
    "The syntax `x --> 7` is `(x--) > 7`. Iteration 1: `10 > 7` true (x becomes 9), prints 9. Iteration 2: `9 > 7` true (x becomes 8), prints 8. Iteration 3: `8 > 7` true (x becomes 7), prints 7. Iteration 4: `7 > 7` false (x becomes 6), loop ends. Output: `9 8 7 `.",
    "Post-Decrement Loop Operator", "output", "hard",
    "Mastered post-decrement combined with comparison operator `x-- > N`.",
    "`x-- > y` evaluates `x > y` with the current value and then decrements `x` before the body runs."
)

add_q(
    "What is the output of this do-while loop?\n```java\nint i = 5;\ndo {\n    System.out.print(i + \" \");\n    i++;\n} while (i < 5);\n```",
    ["Nothing", "5 ", "5 6 ", "Infinite loop"],
    1,
    "The `do` block executes unconditionally first: prints 5 and increments `i` to 6. Then condition `6 < 5` is evaluated: false! Loop terminates. Output: `5 `.",
    "Do-While Single Execution", "output", "easy",
    "Recognized that do-while loop runs at least once even when initial condition is false.",
    "A `do-while` loop always executes its body at least once before checking the condition."
)

add_q(
    "What is the output of the following switch code?\n```java\nint x = 20;\nswitch (x) {\n    default:\n        System.out.print(\"Def \");\n    case 1:\n        System.out.print(\"One \");\n        break;\n    case 2:\n        System.out.print(\"Two \");\n}\n```",
    [
        "Def ",
        "Def One ",
        "Two ",
        "One "
    ],
    1,
    "`x = 20` matches neither 1 nor 2, so execution starts at `default:`. Because there is no `break` at default, execution falls through into `case 1:` printing `\"One \"` before hitting `break`. Output: `\"Def One \"`.",
    "Default Fall-Through", "output", "hard",
    "Mastery of fall-through when default is placed at top of switch.",
    "When `default` appears first and matches, execution falls through to subsequent cases until a `break`."
)

add_q(
    "What is printed by the following code?\n```java\nint sum = 0;\nfor (int i = 1; i <= 10; i++) {\n    if (i % 2 == 0) continue;\n    sum += i;\n}\nSystem.out.println(sum);\n```",
    ["25", "30", "55", "20"],
    0,
    "Even numbers are skipped by `continue`. The loop sums odd numbers between 1 and 10: `1 + 3 + 5 + 7 + 9 = 25`.",
    "Odd Sum Accumulation", "output", "easy",
    "Correctly computed sum of filtered numbers using continue.",
    "`continue` skips even numbers; summing odd numbers 1, 3, 5, 7, 9 yields 25."
)

add_q(
    "What does this snippet print?\n```java\nint a = 0;\nfor (int i = 0; i < 5; i += 2) {\n    a += i;\n}\nSystem.out.println(a);\n```",
    ["6", "10", "4", "12"],
    0,
    "`i` takes values 0, 2, 4 (at i=6, `6 < 5` is false). Sum `a = 0 + 2 + 4 = 6`.",
    "Step Loop Sum", "output", "easy",
    "Tracked loop counter with step increment of 2.",
    "Values of `i` are 0, 2, and 4; their sum is 6."
)

add_q(
    "What is the output of this code?\n```java\nint x = 0;\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        if (j > i) continue;\n        x++;\n    }\n}\nSystem.out.println(x);\n```",
    ["3", "6", "9", "4"],
    1,
    "`i=0`: j=0 (1). `i=1`: j=0, 1 (2). `i=2`: j=0, 1, 2 (3). Total iterations where `j <= i` is `1 + 2 + 3 = 6`. So `x = 6`.",
    "Triangular Iteration Count", "output", "medium",
    "Calculated nested loop triangular iterations correctly.",
    "Condition `j <= i` produces triangular numbers: 1 + 2 + 3 = 6."
)

add_q(
    "What does the following code print?\n```java\nint x = 1;\nif (x > 0)\n    if (x < 1)\n        System.out.println(\"A\");\nelse\n    System.out.println(\"B\");\n```",
    [
        "A",
        "B",
        "Nothing printed",
        "A and B"
    ],
    1,
    "According to the dangling else rule, the `else` binds to the inner `if (x < 1)`. Since `x > 0` is true and `x < 1` is false, the inner `else` executes, printing `B`.",
    "Dangling Else Output", "output", "hard",
    "Correctly resolved dangling else association to nearest inner if.",
    "`else` attaches to `if (x < 1)`; since `x = 1` is not `< 1`, the else branch executes, printing 'B'."
)

add_q(
    "What is the output of this code?\n```java\nint i = 0;\nwhile (i < 5) {\n    i++;\n    if (i == 3) break;\n}\nSystem.out.println(i);\n```",
    ["2", "3", "4", "5"],
    1,
    "`i` starts at 0. Iteration 1: `i` becomes 1. Iteration 2: `i` becomes 2. Iteration 3: `i` becomes 3, matching `i == 3`, and breaks immediately. Final value of `i` is 3.",
    "While Loop Break Value", "output", "easy",
    "Tracked loop variable at point of break termination.",
    "The loop breaks immediately when `i` reaches 3, outputting 3."
)

add_q(
    "What does the following snippet print?\n```java\nint x = 5;\nboolean b = true;\nif (x == 5 && (b = false)) {\n    x = 10;\n}\nSystem.out.println(x + \" \" + b);\n```",
    [
        "5 true",
        "5 false",
        "10 false",
        "10 true"
    ],
    1,
    "`x == 5` is true, so evaluation proceeds to the second operand `(b = false)`. `b` is assigned false, making the condition false. The if body does NOT execute. So `x = 5` and `b = false`.",
    "Assignment Side Effect in Condition", "output", "medium",
    "Tracked variable side effects inside evaluated boolean operands.",
    "`(b = false)` executes, setting `b` to false and failing the if condition; `x` remains 5."
)

add_q(
    "What is the output of this code?\n```java\nint count = 0;\nfor (int i = 1; i <= 100; i *= 2) {\n    count++;\n}\nSystem.out.println(count);\n```",
    ["6", "7", "8", "100"],
    1,
    "`i` doubles each step: 1, 2, 4, 8, 16, 32, 64 (7 values). Next is 128 which exceeds 100. Thus `count` is 7.",
    "Geometric Loop Iterations", "output", "medium",
    "Accurately calculated geometric progression loop count.",
    "Powers of 2 <= 100 are 1, 2, 4, 8, 16, 32, 64 (7 iterations)."
)

add_q(
    "What is printed by this code?\n```java\nint a = 1, b = 2;\nif (a++ == 1 || ++b == 3) {\n    System.out.println(a + \" \" + b);\n}\n```",
    [
        "2 2",
        "2 3",
        "1 2",
        "1 3"
    ],
    0,
    "`a++ == 1` tests `1 == 1` (true), and increments `a` to 2. Because `||` short-circuits when the left operand is true, `++b == 3` is completely skipped! `b` remains 2. Output: `\"2 2\"`.",
    "Logical OR Short-Circuit", "output", "medium",
    "Spotted short-circuit skip of second operand in logical OR.",
    "`||` stops evaluation when the first operand is true; `++b` is never executed, leaving `b = 2`."
)

add_q(
    "What is the output of this code?\n```java\nint n = 1;\nswitch (n) {\n    case 1: n += 5;\n    case 2: n += 10;\n    case 3: n += 20; break;\n    default: n += 100;\n}\nSystem.out.println(n);\n```",
    ["6", "16", "36", "136"],
    2,
    "Matches `case 1`: `n = 1 + 5 = 6`. Falls through to `case 2`: `n = 6 + 10 = 16`. Falls through to `case 3`: `n = 16 + 20 = 36`. Encounters `break` and exits. Prints 36.",
    "Accumulated Switch Fall-Through", "output", "medium",
    "Traced variable accumulation across multiple fall-through cases.",
    "Trace cumulative modifications as execution flows through un-broken case blocks: 1 -> 6 -> 16 -> 36."
)

add_q(
    "What does this loop print?\n```java\nfor (int i = 0; i < 5; i++) {\n    if (i == 2) continue;\n    if (i == 4) break;\n    System.out.print(i + \" \");\n}\n```",
    [
        "0 1 3 ",
        "0 1 2 3 ",
        "0 1 3 4 ",
        "0 1 "
    ],
    0,
    "`i=0`: prints 0. `i=1`: prints 1. `i=2`: continue skips printing. `i=3`: prints 3. `i=4`: break exits loop. Output: `0 1 3 `.",
    "Combined Continue and Break", "output", "easy",
    "Properly executed interplay of continue and break statements.",
    "At `i=2` continue skips; at `i=4` break terminates; output is `0 1 3 `."
)

add_q(
    "What does the following snippet print?\n```java\nint sum = 0;\nfor (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= i; j++) {\n        sum += j;\n    }\n}\nSystem.out.println(sum);\n```",
    ["10", "14", "6", "9"],
    0,
    "`i=1`: j=1 (sum += 1 -> 1). `i=2`: j=1, 2 (sum += 1 + 2 -> 4). `i=3`: j=1, 2, 3 (sum += 1 + 2 + 3 -> 10). Output: 10.",
    "Nested Triangle Sum", "output", "easy",
    "Computed inner loop sum accumulation across varying bounds.",
    "`(1) + (1 + 2) + (1 + 2 + 3) = 1 + 3 + 6 = 10`."
)

add_q(
    "What does this snippet print?\n```java\nint x = 0;\ndo {\n    x++;\n    if (x == 3) continue;\n    System.out.print(x + \" \");\n} while (x < 4);\n```",
    [
        "1 2 4 ",
        "1 2 ",
        "1 2 3 4 ",
        "1 2 4 5 "
    ],
    0,
    "Iteration 1: x=1, prints 1. Iteration 2: x=2, prints 2. Iteration 3: x=3, continue skips print, condition `3 < 4` is true. Iteration 4: x=4, prints 4, condition `4 < 4` is false. Loop ends. Output: `1 2 4 `.",
    "Do-While Continue Execution", "output", "medium",
    "Traced continue within do-while loop correctly.",
    "`continue` in a `do-while` loop skips to the `while (condition)` check, not the top of the body."
)

add_q(
    "What is the output of this code?\n```java\nint a = 2;\nint res = (a > 1) ? (a > 3 ? 10 : 20) : 30;\nSystem.out.println(res);\n```",
    ["10", "20", "30", "undefined"],
    1,
    "`a > 1` is true (`2 > 1`), so outer ternary evaluates `(a > 3 ? 10 : 20)`. In inner ternary, `2 > 3` is false, selecting 20. Output: 20.",
    "Nested Ternary Output", "output", "easy",
    "Accurately parsed nested ternary operator branches.",
    "Outer branch true -> inner condition `2 > 3` false -> yields 20."
)

add_q(
    "What is the output of this code?\n```java\nint x = 5;\nwhile (x > 0) {\n    x -= 2;\n}\nSystem.out.println(x);\n```",
    ["0", "-1", "1", "2"],
    1,
    "Start x=5. Iter 1: x becomes 3 (3 > 0 true). Iter 2: x becomes 1 (1 > 0 true). Iter 3: x becomes -1 (-1 > 0 false). Loop terminates. Final x is -1.",
    "Step Loop Termination Value", "output", "easy",
    "Tracked loop exit value when step decrements pass zero.",
    "Decrements: 5 -> 3 -> 1 -> -1; loop stops when condition `-1 > 0` is false, leaving -1."
)

add_q(
    "What does this code output?\n```java\nchar grade = 'B';\nswitch (grade) {\n    case 'A': System.out.print(\"Excellent \");\n    case 'B':\n    case 'C': System.out.print(\"Well Done \"); break;\n    case 'D': System.out.print(\"Passed \");\n    default: System.out.print(\"Invalid\");\n}\n```",
    [
        "Well Done ",
        "Excellent Well Done ",
        "Well Done Passed ",
        "Invalid"
    ],
    0,
    "Matches `case 'B':`. Since `case 'B'` has no statements, it falls directly into `case 'C':`, which prints `\"Well Done \"` and hits `break`. Output: `\"Well Done \"`.",
    "Multi-Case Sharing in Switch", "output", "easy",
    "Recognized idiomatic case sharing pattern in switch statements.",
    "Multiple cases sharing a block (case 'B': case 'C':) executes the common block once."
)

add_q(
    "What is the output of the following code?\n```java\nint count = 0;\nfor (int i = 0; i < 2; i++)\n    for (int j = 0; j < 2; j++)\n        for (int k = 0; k < 2; k++)\n            count++;\nSystem.out.println(count);\n```",
    ["6", "8", "12", "16"],
    1,
    "The 3 nested loops each run 2 times. Total iterations = `2 * 2 * 2 = 8`. Count = 8.",
    "Triple Nested Loop Iteration Count", "output", "easy",
    "Calculated multiplicative iteration count of nested loops.",
    "Multiply loop bounds for independent nested loops: 2 * 2 * 2 = 8."
)

add_q(
    "What is the output of this code?\n```java\nint sum = 0;\nfor (int i = 1; i <= 5; i++) {\n    if (i == 3) continue;\n    sum += i;\n    if (i == 4) break;\n}\nSystem.out.println(sum);\n```",
    ["7", "10", "3", "12"],
    0,
    "`i=1`: sum = 1. `i=2`: sum = 3. `i=3`: skipped by continue. `i=4`: sum = 3 + 4 = 7; then break exits loop immediately. Output: 7.",
    "Interleaved Break and Continue", "output", "medium",
    "Tracked sequential accumulation with continue and break conditions.",
    "1 + 2 = 3; 3 is skipped; 4 is added (sum=7) and then break triggers, printing 7."
)

add_q(
    "What is printed by this loop?\n```java\nint x = 1;\nwhile (x < 10) {\n    x = x * 2 + 1;\n}\nSystem.out.println(x);\n```",
    ["15", "9", "11", "31"],
    0,
    "Start x=1. Iter 1: x = 1*2 + 1 = 3 (3 < 10 true). Iter 2: x = 3*2 + 1 = 7 (7 < 10 true). Iter 3: x = 7*2 + 1 = 15 (15 < 10 false). Loop terminates. Prints 15.",
    "Recurrence Relation Loop", "output", "medium",
    "Traced arithmetic recurrence progression inside while loop.",
    "Values of x: 1 -> 3 -> 7 -> 15. When x=15, condition 15 < 10 is false, printing 15."
)

# =========================================================================
# 4. APPLICATION-BASED / SCENARIO-DRIVEN PROBLEMS (25 Questions)
# =========================================================================
add_q(
    "You are building an ATM withdrawal module for a bank in Malaysia. The user requests `withdrawAmount`. The ATM only dispenses RM 50 and RM 100 notes. How should you validate if the requested amount is dispensable before checking account balance?",
    [
        "`if (withdrawAmount % 50 != 0 || withdrawAmount <= 0) { reject(); }`",
        "`if (withdrawAmount / 50 == 0) { reject(); }`",
        "`if (withdrawAmount % 100 != 0) { reject(); }`",
        "`if (withdrawAmount > 1000) { reject(); }`"
    ],
    0,
    "Since any multiple of RM 100 is also a multiple of RM 50, checking `withdrawAmount % 50 != 0 || withdrawAmount <= 0` cleanly verifies that the amount can be dispensed in RM 50 and RM 100 notes.",
    "ATM Note Dispensation Validation", "scenario", "easy",
    "Formulated clean modular arithmetic for ATM note validation.",
    "Any sum of RM 50 and RM 100 notes must be a positive multiple of 50 (`amount % 50 == 0`)."
)

add_q(
    "A university grade assignment program converts numeric scores (0 to 100) to letter grades (A, B, C, F). A developer wants to use a `switch` statement instead of cascading `if-else`. How can scores be mapped to integer switch cases cleanly?",
    [
        "Use `switch (score)` with 101 individual case labels",
        "Use `switch (score / 10)` to map scores into buckets: 10 and 9 for A, 8 for B, 7 for C, etc.",
        "Convert score to double and switch on `(double) score`",
        "Switch on `score % 10`"
    ],
    1,
    "Dividing an integer score by 10 (`score / 10`) performs integer truncation, mapping 90-99 to 9, 80-89 to 8, etc. Cases 10 and 9 map to 'A', 8 to 'B', making a compact switch statement.",
    "Score Range Bucket Switching", "scenario", "medium",
    "Applied integer division bucket mapping to compact switch statements.",
    "`score / 10` clusters numeric ranges into clean integer buckets suitable for switch cases."
)

add_q(
    "In an e-commerce order processing pipeline, an order can have statuses: PENDING, PAID, SHIPPED, DELIVERED, CANCELLED. Why is a `switch` statement generally preferred over a 5-branch `if-else-if` ladder when branching on enum or int status codes?",
    [
        "`if-else-if` cannot compare enums",
        "`switch` statements are more readable, prevent repetitive variable evaluations, and can be compiled into efficient `tableswitch` or `lookupswitch` bytecode jump tables",
        "`switch` uses less stack memory than `if`",
        "Java prohibits more than 3 `if` statements in a single method"
    ],
    1,
    "A `switch` statement makes branch intentions clear and allows the JVM compiler to generate jump tables (`tableswitch` / `lookupswitch`) that achieve O(1) branch dispatch instead of sequential O(N) comparisons.",
    "Switch Performance & Clean Code", "scenario", "medium",
    "Understands bytecode jump table efficiency and readability of switch statements.",
    "Switch statements improve readability and enable compiler jump table optimizations."
)

add_q(
    "You are writing a CLI menu loop for a library catalog application. The menu must display at least once, accept user choice 1 to 4, and repeat until the user selects 4 (Exit). Which loop construct is the industry standard for this pattern?",
    [
        "A `for` loop from 1 to 4",
        "A `do-while` loop, because the menu must unconditionally display before reading input, and repeat while `choice != 4`",
        "An infinite recursive method call without base case",
        "A `while (false)` loop"
    ],
    1,
    "CLI menus represent the canonical use-case for `do-while` loops: the menu must render at least once before user input is acquired and evaluated.",
    "Menu-Driven Do-While Pattern", "scenario", "easy",
    "Recognized standard do-while design pattern for CLI interactive menus.",
    "Use a `do-while` loop for menu-driven applications where prompts must show at least once."
)

add_q(
    "A cellular network billing engine checks whether a phone number prefix matches domestic telecom operators. If a prefix matches Celcom, Maxis, or Digi, the domestic rate applies; otherwise international rates apply. How is this written concisely in a `switch`?",
    [
        "Write separate duplicate methods for each operator",
        "Group matching cases sequentially: `case \"012\": case \"019\": case \"016\": return DOMESTIC_RATE; default: return INTL_RATE;`",
        "Use `case \"012\" || \"019\" || \"016\":`",
        "Switch statements cannot compare phone prefix strings"
    ],
    1,
    "Sequential case labels without break fall through to a shared handler: `case \"012\": case \"019\": case \"016\": return DOMESTIC_RATE;`.",
    "Shared Case Fall-Through Pattern", "scenario", "easy",
    "Employed shared case labels for multi-match business logic.",
    "Stack case labels together without `break` to share a common code block."
)

add_q(
    "A security system monitors failed login attempts. An IP is blocked if it fails 5 consecutive attempts. A successful login resets the failure counter to 0. Which control flow structure correctly models this verification loop?",
    [
        "A single if-statement without loops",
        "A while loop checking attempts; if auth fails, increment `fails`; if `fails >= 5`, block and break; if auth succeeds, `fails = 0` and break",
        "A switch statement on the IP address",
        "A for loop that ignores successful logins"
    ],
    1,
    "A loop tracking consecutive failures with early break upon success or upon reaching the 5-failure threshold accurately models real-world rate limiting.",
    "Rate Limiting & Consecutive Failures", "scenario", "medium",
    "Modeled security rate limiting with dynamic failure tracking.",
    "Reset consecutive failure counters upon successful action; break and block when threshold is met."
)

add_q(
    "A scientific simulation models radioactive decay where a sample's atoms halve every 5 days. Starting with 10,000 atoms, which loop calculates the number of 5-day periods until fewer than 100 atoms remain?",
    [
        "`int p = 0; for (int a = 10000; a >= 100; a /= 2) p++;`",
        "`int p = 0; for (int a = 10000; a < 100; a /= 2) p++;`",
        "`int p = 0; while (a > 100) { p = 10000 / 2; }`",
        "`int p = 10000 / 100 * 5;`"
    ],
    0,
    "Starting with 10,000 atoms, each iteration halves `a` (`a /= 2`) and increments period counter `p++` as long as `a >= 100`.",
    "Simulation Loop Modeling", "scenario", "easy",
    "Correctly configured simulation decay loop bounds and updates.",
    "Loop condition `a >= 100` with update `a /= 2` accurately simulates exponential decay."
)

add_q(
    "In a game engine, the main game loop must run at 60 FPS while `isRunning` is true, but must immediately pause if `isPaused` is true, without terminating the outer game session. How is this implemented cleanly?",
    [
        "`while (isRunning) { if (isPaused) continue; updateWorld(); render(); }`",
        "`while (isRunning) { if (isPaused) break; updateWorld(); render(); }`",
        "`while (isRunning) { updateWorld(); render(); isRunning = false; }`",
        "`do { updateWorld(); } while (isPaused);`"
    ],
    0,
    "Using `if (isPaused) continue;` skips `updateWorld()` and `render()` during paused states while keeping the game loop alive awaiting user unpause.",
    "Game Loop Pause Architecture", "scenario", "medium",
    "Applied `continue` in game loops to skip rendering during pause without loop exit.",
    "`continue` skips world updates while paused without terminating the main game loop."
)

add_q(
    "A data validation routine parses a CSV file containing 10,000 rows. If a row is corrupted, it should log a warning and immediately proceed to the next row without crashing or stopping the import. Which keyword achieves this?",
    [
        "`break`",
        "`continue`",
        "`return`",
        "`System.exit(0)`"
    ],
    1,
    "`continue` immediately skips the remainder of the current row processing iteration and proceeds to read the next CSV row.",
    "Batch Processing Error Recovery", "scenario", "easy",
    "Used continue for resilient error recovery in batch ETL pipelines.",
    "`continue` skips problematic records without halting batch iteration."
)

add_q(
    "You are searching a 2D matrix representing an airport terminal grid for a lost passenger's luggage ID. Once the luggage is found, you want to terminate BOTH the row loop and the column loop immediately to save CPU cycles. What is the cleanest approach in Java?",
    [
        "Set both row and column counters to `Integer.MAX_VALUE`",
        "Use a labeled break (`search: for (...) { for (...) { if (found) break search; } }`)",
        "Throw and catch a runtime exception",
        "Call `System.exit(0)`"
    ],
    1,
    "A labeled `break search;` immediately exits both nested loops cleanly without dirty variable flags or exception overhead.",
    "2D Grid Search Early Exit", "scenario", "medium",
    "Employed labeled break for optimal multi-level search termination.",
    "Use labeled `break label;` to exit nested loops immediately upon finding a target element."
)

add_q(
    "A banking app generates a 6-digit One-Time Password (OTP). It must ensure that the generated OTP does NOT contain the digit '0' anywhere. Which loop structure generates random digits 1 to 9 for all 6 positions?",
    [
        "`for (int i = 0; i < 6; i++) { int digit = rand.nextInt(9) + 1; otp += digit; }`",
        "`for (int i = 0; i < 6; i++) { int digit = rand.nextInt(10); otp += digit; }`",
        "`while (otp.length() < 6) { int digit = 0; otp += digit; }`",
        "`for (int i = 1; i <= 6; i *= 0) { ... }`"
    ],
    0,
    "`rand.nextInt(9)` produces 0 to 8. Adding 1 shifts the range to 1 to 9, guaranteeing no digit is zero across all 6 iterations.",
    "OTP Generation Algorithm", "scenario", "easy",
    "Designed clean loop with bounded random number generation.",
    "`rand.nextInt(9) + 1` generates digits 1 to 9, preventing zero digits across 6 iterations."
)

add_q(
    "A ride-hailing app in Kuala Lumpur calculates base fare based on pickup time. Peak hours are 07:00-09:00 and 17:00-20:00. Given integer `hour` (0 to 23), which boolean expression determines if peak pricing applies?",
    [
        "`(hour >= 7 && hour <= 9) || (hour >= 17 && hour <= 20)`",
        "`hour >= 7 && hour <= 9 && hour >= 17 && hour <= 20`",
        "`hour >= 7 || hour <= 20`",
        "`(hour >= 7 || hour <= 9) && (hour >= 17 || hour <= 20)`"
    ],
    0,
    "The morning peak is `(hour >= 7 && hour <= 9)`. The evening peak is `(hour >= 17 && hour <= 20)`. Either window qualifies peak pricing, connected by `||`.",
    "Time Window Logic", "scenario", "easy",
    "Correctly modeled disjoint time intervals with logical operators.",
    "Use `||` between separate time windows and `&&` within each continuous window."
)

add_q(
    "A warehouse robot sorts packages into 3 shipping bays based on weight: Bay 1 (< 5kg), Bay 2 (5kg to 20kg inclusive), Bay 3 (> 20kg). Which `if-else` structure prevents redundant boundary checks?",
    [
        "`if (w < 5) Bay1; else if (w <= 20) Bay2; else Bay3;`",
        "`if (w < 5) Bay1; if (w >= 5 && w <= 20) Bay2; if (w > 20) Bay3;`",
        "`if (w > 20) Bay3; else if (w < 5) Bay1; else if (w >= 5 && w <= 20) Bay2;`",
        "`switch ((int) w) { ... }`"
    ],
    0,
    "Because the first condition filters out `< 5`, the `else if (w <= 20)` implicitly knows `w >= 5`. No redundant `w >= 5 &&` check is necessary, making code cleaner and faster.",
    "Efficient Decision Ladders", "scenario", "easy",
    "Eliminated redundant boundary conditions in if-else ladders.",
    "In sorted if-else ladders, previous branches already filter bounds, eliminating redundant checks."
)

add_q(
    "A network packet downloader implements an exponential backoff retry policy: if a download fails, it waits 1s, then 2s, then 4s, up to 5 max retries. Which loop header models this cleanest?",
    [
        "`for (int attempt = 1, delay = 1; attempt <= 5; attempt++, delay *= 2)`",
        "`for (int attempt = 1; attempt <= 5; delay += 2)`",
        "`while (delay < 5) { attempt *= 2; }`",
        "`for (int delay = 1; delay == 5; delay++)`"
    ],
    0,
    "Declaring both `attempt` and `delay` in the `for` loop header maintains loop state cleanly, doubling `delay *= 2` on each failed retry attempt up to 5.",
    "Exponential Backoff Loop", "scenario", "medium",
    "Engineered dual-variable for loop header for exponential retry backoff.",
    "Use a dual-variable loop header `for (int attempt=1, delay=1; ...; attempt++, delay*=2)` for backoff algorithms."
)

add_q(
    "You are developing a prime number verification function `boolean isPrime(int n)`. Why should the trial division loop terminate at `Math.sqrt(n)` rather than `n - 1`?",
    [
        "Java throws an exception if a loop exceeds the square root",
        "If `n` has a factor greater than `sqrt(n)`, it must also have a corresponding factor less than or equal to `sqrt(n)`; checking beyond `sqrt(n)` is redundant O(N) work",
        "`Math.sqrt(n)` rounds to the nearest prime",
        "`n - 1` causes an arithmetic overflow"
    ],
    1,
    "Factors occur in complementary pairs `(a * b = n)`. If both factors were strictly greater than `sqrt(n)`, their product would exceed `n`. Thus trial division up to `sqrt(n)` guarantees primality in O(sqrt(N)) time.",
    "Primality Test Optimization", "scenario", "medium",
    "Understands algorithmic optimization of trial division to O(sqrt(N)).",
    "Trial division only needs to test up to `Math.sqrt(n)` because factors pair across the square root."
)

add_q(
    "In a lottery simulation, you need to select 6 unique random numbers from 1 to 49. When a newly generated number is already picked, what control flow statement should be used to re-roll without advancing the count of picked numbers?",
    [
        "Use `continue` inside a while loop that only increments the counter when the number is confirmed unique",
        "Use `break` to terminate the lottery",
        "Use `return` to exit the application",
        "Reset all previously selected numbers to 0"
    ],
    0,
    "A `while (count < 6)` loop generates a candidate number. If already chosen, it skips incrementing `count` (or calls `continue`), ensuring exactly 6 unique numbers are collected.",
    "Lottery Unique Selection Pattern", "scenario", "medium",
    "Applied conditional loop counter advancement to ensure unique collection.",
    "Only advance the loop counter when a candidate satisfies uniqueness constraints."
)

add_q(
    "A student is building a calculator that evaluates simple mathematical operations: `+`, `-`, `*`, `/`. How should division by zero be prevented in the `/` case of a `switch` statement?",
    [
        "Rely on the switch statement to automatically prevent division by zero",
        "Inside `case '/':`, wrap division in `if (b != 0) { return a / b; } else { printError(); }`",
        "Throw an exception before the switch starts",
        "Add a `case 0:` inside the operator switch"
    ],
    1,
    "In `case '/':`, inspect the divisor `if (b == 0)` to handle the edge case gracefully rather than allowing a runtime `ArithmeticException` crash.",
    "Defensive Branch Handling", "scenario", "easy",
    "Embedded defensive zero checks inside switch branch operations.",
    "Always check `b != 0` inside division cases before performing arithmetic."
)

add_q(
    "A smart thermostat adjusts air conditioning mode based on current temperature: > 26°C -> Cooling, < 20°C -> Heating, otherwise -> Fan Only. Which structure best represents this three-state control logic?",
    [
        "`if (temp > 26) cool(); else if (temp < 20) heat(); else fanOnly();`",
        "`switch (temp) { case 26: cool(); }`",
        "`while (temp > 26) { cool(); }`",
        "`do { heat(); } while (temp < 20);`"
    ],
    0,
    "An `if-else-if-else` ladder provides clear, unambiguous branching for three non-overlapping ranges.",
    "Three-State Thermostat Logic", "scenario", "easy",
    "Selected clean if-else-if-else ladder for multi-range device control.",
    "Use if-else-if-else ladders for continuous floating-point range evaluation."
)

add_q(
    "A payment gateway verifies a user's credit card expiration date. The card expires at the end of `expMonth` in `expYear`. Given current year `curYear` and current month `curMonth`, which expression correctly validates that the card has NOT expired?",
    [
        "`expYear > curYear || (expYear == curYear && expMonth >= curMonth)`",
        "`expYear >= curYear && expMonth >= curMonth` (Fails if expYear > curYear but expMonth < curMonth)",
        "`expYear + expMonth > curYear + curMonth`",
        "`expYear == curYear && expMonth == curMonth`"
    ],
    0,
    "If the expiration year is in the future (`expYear > curYear`), the card is valid regardless of month. If it is the current year (`expYear == curYear`), the expiration month must be `>= curMonth`.",
    "Date Expiration Verification Logic", "scenario", "medium",
    "Accurately structured multi-field date validity condition.",
    "When comparing dates across years and months: `futureYear || (sameYear && validMonth)`."
)

add_q(
    "A text processing program counts the number of vowels in a string. Which control flow structure inside a character iteration loop provides the cleanest vowel matching?",
    [
        "`switch (Character.toLowerCase(ch)) { case 'a': case 'e': case 'i': case 'o': case 'u': vowelCount++; break; }`",
        "Five nested `if` statements",
        "A while loop checking each vowel sequentially",
        "Converting each character to double"
    ],
    0,
    "A `switch` statement with stacked cases `case 'a': case 'e': case 'i': case 'o': case 'u':` is clean, readable, and highly optimized by the JVM.",
    "Vowel Counting Switch Idiom", "scenario", "easy",
    "Implemented stacked case switch for multi-character matching.",
    "Stack multiple character cases together to group vowel matching cleanly."
)

add_q(
    "You are writing a numerical approximation program that approximates PI using an infinite series. The loop must stop when the change between successive approximations is less than `0.000001` (epsilon). What is the appropriate loop choice?",
    [
        "A `for` loop running fixed 100 times",
        "A `while` loop: `while (Math.abs(current - previous) >= EPSILON)`",
        "A `switch` statement on the error term",
        "A `do-while (false)` loop"
    ],
    1,
    "When termination depends on dynamic numerical convergence rather than a fixed iteration count, a `while` loop evaluating convergence threshold `Math.abs(delta) >= EPSILON` is the correct design.",
    "Convergence Loop Pattern", "scenario", "medium",
    "Selected while loop based on dynamic epsilon convergence criteria.",
    "Use while loops when termination depends on mathematical convergence rather than fixed iteration counts."
)

add_q(
    "A file upload handler allows 3 retry attempts if a network timeout occurs. If all 3 attempts fail, an error message is shown. Which loop flag pattern implements this cleanly?",
    [
        "`boolean success = false; for (int i = 1; i <= 3; i++) { if (tryUpload()) { success = true; break; } } if (!success) showError();`",
        "`for (int i = 1; i <= 3; i++) { tryUpload(); showError(); }`",
        "`while (true) { tryUpload(); }`",
        "`if (tryUpload() && tryUpload() && tryUpload()) showError();`"
    ],
    0,
    "The standard retry pattern uses a loop with early `break` on success and a boolean `success` flag checked after loop termination to handle exhaustion.",
    "Retry-Exhaustion Pattern", "scenario", "medium",
    "Applied classic retry loop pattern with boolean success flag.",
    "Use a boolean flag to track success across retry iterations and display errors upon exhaustion."
)

add_q(
    "A factory packaging machine places chocolate bars into boxes of 24. At the end of a shift, `totalBars` chocolates were produced. Which formula calculates both full boxes and leftover bars without duplicate calculations?",
    [
        "`int boxes = totalBars / 24; int leftover = totalBars % 24;`",
        "`int boxes = totalBars * 24; int leftover = totalBars / 24;`",
        "`int boxes = totalBars - 24; int leftover = 24;`",
        "`int boxes = (int) Math.sqrt(totalBars); int leftover = 0;`"
    ],
    0,
    "Integer division `/ 24` gives the number of complete boxes, and modulus `% 24` gives the remaining loose chocolates.",
    "Batch Packaging Division & Remainder", "scenario", "easy",
    "Correctly applied division and modulus for packaging batches.",
    "Division yields complete batches; modulus yields remainder."
)

add_q(
    "A developer needs to implement a countdown timer for a rocket launch from 10 down to 1, followed by printing 'Liftoff!'. Which loop header is the standard countdown idiom?",
    [
        "`for (int i = 10; i >= 1; i--)`",
        "`for (int i = 10; i > 1; i--)` (Stops at 2)",
        "`for (int i = 1; i <= 10; i--)` (Infinite negative loop)",
        "`while (i < 10) { i--; }`"
    ],
    0,
    "`for (int i = 10; i >= 1; i--)` starts at 10, decrements on each step, and includes 1 before terminating.",
    "Countdown Loop Idiom", "scenario", "easy",
    "Accurately structured countdown loop boundary and decrement.",
    "`for (int i = 10; i >= 1; i--)` runs from 10 down to 1 inclusively."
)

add_q(
    "An online exam system enforces a time limit. Every second, `timeLeft` decrements. If `timeLeft == 0`, the exam automatically submits and the loop exits. If the student clicks 'Submit' early (`isSubmitted == true`), it also exits immediately. Which while condition models this?",
    [
        "`while (timeLeft > 0 && !isSubmitted)`",
        "`while (timeLeft > 0 || !isSubmitted)`",
        "`while (timeLeft == 0 && isSubmitted)`",
        "`while (timeLeft > 0 || isSubmitted)`"
    ],
    0,
    "The exam timer loop should continue running while time remains AND the student has not yet submitted (`timeLeft > 0 && !isSubmitted`). If either condition ceases, the loop terminates immediately.",
    "Dual Condition Termination", "scenario", "easy",
    "Formulated dual-termination while loop condition for online exam timer.",
    "Connect ongoing prerequisites with `&&` so either termination event stops the loop."
)

with open("scratch/ch2.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Generated {len(questions)} questions for Chapter 2!")
