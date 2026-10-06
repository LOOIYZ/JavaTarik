# -*- coding: utf-8 -*-
"""
Generate 100 questions each for:
- Chapter 3: Arrays (1D, 2D, Jagged, bounds, copying, passing to methods, Arrays class)
- Chapter 4: Methods (headers, return types, pass-by-value, overloading, recursion, variable scope)
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
# CHAPTER 3: ARRAYS (100 QUESTIONS)
# =========================================================================
ch3 = []

# --- Ch 3: 1. Theory (25 Qs) ---
add_q(ch3, "What is an array in Java?",
    ["A dynamically resizable list of heterogeneous elements", "A fixed-size indexed collection of elements of the same data type stored in contiguous memory", "A primitive data type like int or char", "A key-value hash map"],
    1, "In Java, an array is an object holding a fixed number of values of a single type. Once instantiated, its size cannot be changed.",
    "Array Fundamentals", "theory", "easy", "Understands core definition and fixed-size nature of Java arrays.", "Remember: Java arrays have a fixed length once created.")

add_q(ch3, "What are the default values assigned to elements of an array declared as `int[] numbers = new int[5];`?",
    ["Garbage memory values", "All 0s", "All nulls", "All -1s"],
    1, "When an array is allocated on the heap, all its elements are automatically initialized to their default type values. For numeric primitives (int, byte, short, long), the default is 0.",
    "Array Default Values", "theory", "easy", "Knows default element values for numeric primitive arrays.", "Array elements default to 0 for numeric types, false for boolean, and null for objects.")

add_q(ch3, "What is the default value for elements of an array declared as `boolean[] flags = new boolean[3];`?",
    ["true", "false", "0", "null"],
    1, "The default value for primitive boolean elements in a newly instantiated array is `false`.",
    "Boolean Array Initialization", "theory", "easy", "Knows boolean array defaults.", "Boolean array elements initialize to `false` by default.")

add_q(ch3, "What property is used to determine the number of elements in an array in Java?",
    ["`arr.length()`", "`arr.length`", "`arr.size()`", "`arr.count`"],
    1, "In Java, arrays have a public final field `length` (not a method). `String` has `.length()` and collections have `.size()`.",
    "Array Length Property", "theory", "easy", "Distinguishes array `.length` field from string `.length()` method.", "Arrays use the `.length` field; do not include parentheses.")

add_q(ch3, "What runtime exception is thrown if you attempt to access an array at an invalid index (e.g. `arr[-1]` or `arr[arr.length]`)?",
    ["`NullPointerException`", "`ArrayIndexOutOfBoundsException`", "`IllegalArgumentException`", "`IndexOutOfBoundsException`"],
    1, "Accessing an array with an index `< 0` or `>= arr.length` throws `java.lang.ArrayIndexOutOfBoundsException`.",
    "Array Bounds", "theory", "easy", "Knows the exact exception thrown on invalid array indexing.", "Negative indices or index >= length throw `ArrayIndexOutOfBoundsException`.")

add_q(ch3, "What happens when you assign one array variable to another: `int[] b = a;`?",
    ["A deep copy of all elements is created in a new memory location", "Both variables reference the exact same array object on the heap (aliasing)", "The elements of a are converted to double", "A compilation error occurs"],
    1, "Array variables store references to heap objects. `b = a` copies the memory address (reference), so both `a` and `b` point to the identical array object.",
    "Array Reference Copying", "theory", "medium", "Understands reference assignment vs deep object copying.", "`b = a` copies the reference, not the elements; mutating `b[0]` modifies `a[0]`.")

add_q(ch3, "What is a 'jagged' (ragged) array in Java?",
    ["An array that contains different primitive types in each row", "A multidimensional array where each row can have a different number of columns", "An array that has no memory allocated", "A circular array buffer"],
    1, "In Java, a 2D array is an 'array of arrays'. Each row is an independent 1D array object, meaning rows can have varying lengths.",
    "Jagged Arrays", "theory", "medium", "Understands non-rectangular jagged arrays in Java.", "Java 2D arrays are arrays of arrays, so rows can have different lengths.")

add_q(ch3, "Which method in the standard Java library is the most efficient native way to copy a subsegment of an array?",
    ["`System.arraycopy()`", "`Arrays.copyRange()`", "A manual `for` loop", "`clone()`"],
    0, "`System.arraycopy()` is a native system call that copies bytes directly in memory, offering maximum performance.",
    "Array Copy Performance", "theory", "medium", "Knows System.arraycopy as the native high-performance array copy mechanism.", "Use `System.arraycopy()` for fast, low-level block copying.")

add_q(ch3, "What does `Arrays.binarySearch(arr, key)` require before it can be reliably used?",
    ["The array must contain only positive numbers", "The array must be sorted in ascending order", "The array cannot contain duplicates", "The array must have an even length"],
    1, "Binary search relies on sorted ordering to eliminate half of the search space at each step. If the array is unsorted, results are undefined.",
    "Binary Search Preconditions", "theory", "medium", "Understands that binary search strictly requires a pre-sorted array.", "Always sort arrays before invoking `Arrays.binarySearch()`.")

add_q(ch3, "What does `Arrays.equals(arr1, arr2)` compare for two 1D primitive arrays?",
    ["Whether `arr1 == arr2` (same memory reference)", "Whether both arrays have the same length and corresponding pairs of elements are equal", "Whether the sum of elements in both arrays is identical", "Whether both arrays were created on the same thread"],
    1, "`Arrays.equals(arr1, arr2)` checks if both arrays have identical lengths and equal element values at corresponding indices.",
    "Arrays.equals Semantics", "theory", "easy", "Understands content equality testing via Arrays.equals.", "Use `Arrays.equals()` to compare element values, not `==` which only compares references.")

add_q(ch3, "What happens when you pass an array to a method and modify one of its elements inside that method?",
    ["The modification is lost when the method returns because Java is pass-by-value", "The modification persists in the caller's array because the method received a copy of the reference pointing to the original heap object", "Throws an `UnsupportedOperationException`", "The original array is duplicated automatically"],
    1, "Java is pass-by-value, meaning the reference is copied. Both the caller and method point to the same array object on the heap, so element mutations persist.",
    "Pass-by-Value Array Mutation", "theory", "medium", "Understands how pass-by-value applies to object references.", "Mutations to array elements inside methods affect the caller because both reference the same heap array.")

add_q(ch3, "What does `Arrays.toString(arr)` return for a 1D integer array `int[] arr = {1, 2, 3};`?",
    ["`\"1 2 3\"`", "`\"[1, 2, 3]\"`", "`\"1, 2, 3\"`", "`\"{1, 2, 3}\"`"],
    1, "`Arrays.toString()` returns a bracketed, comma-delimited string representation: `\"[1, 2, 3]\"`.",
    "Arrays.toString Formatting", "theory", "easy", "Knows standard string representation format of Arrays.toString.", "`Arrays.toString()` formats arrays as `[elem1, elem2, ...]`. ")

add_q(ch3, "Which method should be used to produce a readable String representation of a 2D or multidimensional array?",
    ["`Arrays.toString(matrix)`", "`Arrays.deepToString(matrix)`", "`matrix.toString()`", "`String.valueOf(matrix)`"],
    1, "`Arrays.toString()` on a 2D array prints object hash codes for inner arrays. `Arrays.deepToString()` recursively traverses nested arrays to print complete contents.",
    "Deep String Representation", "theory", "medium", "Knows deepToString for multidimensional arrays.", "Use `Arrays.deepToString()` for nested or multidimensional arrays.")

add_q(ch3, "What is the return value of `Arrays.binarySearch(arr, key)` when the key is NOT found in the sorted array?",
    ["`-1`", "`-(insertion_point + 1)`", "`0`", "`Integer.MIN_VALUE`"],
    1, "In Java, `Arrays.binarySearch()` returns `-(insertion_point + 1)`, which is negative and encodes the exact index where the key would be inserted.",
    "Binary Search Return Value", "theory", "hard", "Mastery of binary search negative insertion point formula.", "Unfound keys yield `-(insertion point + 1)`; check `< 0` to detect absence.")

add_q(ch3, "How many elements can an array declared as `int[][] grid = new int[4][5];` store in total?",
    ["9", "20", "4", "5"],
    1, "A 4x5 2D array contains 4 rows of 5 columns each, storing `4 * 5 = 20` elements.",
    "2D Array Capacity", "theory", "easy", "Calculates total capacity of 2D rectangular arrays.", "Total elements in rectangular matrix = rows * columns.")

add_q(ch3, "Can an array be resized in Java after it has been created?",
    ["Yes, by assigning a new value to `arr.length`", "No, array sizes are strictly immutable once instantiated; to resize, a new array must be created and elements copied over", "Yes, using `arr.resize(newSize)`", "Yes, if declared with the `var` keyword"],
    1, "Arrays in Java have fixed length. To 'resize', you must allocate a new larger array (e.g. via `Arrays.copyOf()`) and reassign the reference.",
    "Array Immutability", "theory", "easy", "Understands array size immutability in Java.", "Arrays cannot change size; create a new array and copy elements.")

add_q(ch3, "What is stored in an array declared as `String[] words = new String[3];` before any elements are assigned?",
    ["Empty strings `\"\"`", "`null` for all elements", "`\"null\"` string literals", "Undefined memory values"],
    1, "Because `String` is a reference type (object), its array elements initialize to `null` by default.",
    "Reference Array Initialization", "theory", "easy", "Knows that reference array elements initialize to null.", "Object and String array elements default to `null`.")

add_q(ch3, "In a 2D array `int[][] matrix`, what does `matrix.length` represent?",
    ["The total number of cells in the entire matrix", "The number of rows", "The number of columns in the first row", "The size in bytes"],
    1, "`matrix.length` represents the number of rows (the length of the outer array). `matrix[0].length` represents the number of columns in row 0.",
    "2D Array Dimensions", "theory", "easy", "Distinguishes row count from column count in 2D arrays.", "`matrix.length` is row count; `matrix[i].length` is column count for row i.")

add_q(ch3, "Which sorting algorithm is implemented by `Arrays.sort()` for primitive types (e.g. `int[]`) in standard modern Java?",
    ["Bubble Sort", "Dual-Pivot Quicksort", "Merge Sort", "Insertion Sort only"],
    1, "For primitive arrays, `Arrays.sort()` uses a highly optimized Dual-Pivot Quicksort offering O(N log N) average performance.",
    "Primitive Sorting Algorithm", "theory", "medium", "Knows Java's Dual-Pivot Quicksort implementation.", "`Arrays.sort(primitive[])` uses Dual-Pivot Quicksort.")

add_q(ch3, "Can an array in Java have a length of 0 (`new int[0]`)?",
    ["No, length must be at least 1", "Yes, zero-length arrays are valid objects and frequently used to represent empty collections without returning null", "No, it causes an IllegalArgumentException", "Only for String arrays"],
    1, "A zero-length array is completely valid. It is an instantiated array object with `.length == 0` and is an industry-standard pattern for returning empty results safely.",
    "Zero-Length Arrays", "theory", "medium", "Understands zero-length array validity and usage.", "Zero-length arrays (`new int[0]`) are valid and avoid returning null.")

add_q(ch3, "What is the effect of invoking `.clone()` on a 1D primitive array `int[] copy = original.clone();`?",
    ["Creates a shallow copy that actually contains a completely independent copy of all primitive values", "Fails to compile because arrays do not implement Cloneable", "Returns the exact same reference as original", "Throws a CloneNotSupportedException"],
    0, "For 1D primitive arrays, `.clone()` duplicates the array object and all its primitive elements, creating an independent array.",
    "Array Cloning", "theory", "medium", "Understands clone() behavior on 1D primitive arrays.", "Calling `.clone()` on a 1D primitive array creates an independent copy of values.")

add_q(ch3, "What happens if you invoke `.clone()` on a 2D array `int[][] copy = matrix.clone();`?",
    ["It clones all rows deeply, creating independent 1D row arrays", "It performs a shallow copy: `copy` is a new outer array, but its rows still reference the exact same 1D row arrays as `matrix`", "It throws ClassCastException", "It converts the 2D array to 1D"],
    1, "`.clone()` on multidimensional arrays is shallow: only the outer array is duplicated; the inner row references still point to the original rows.",
    "Multidimensional Array Shallow Clone", "theory", "hard", "Deep understanding of shallow vs deep cloning in 2D arrays.", "`.clone()` on 2D arrays copies row references, not the inner row objects.")

add_q(ch3, "Which statement creates an anonymous array passed directly to a method `printItems(new int[]{1, 2, 3})`?",
    ["`printItems({1, 2, 3})`", "`printItems(new int[]{1, 2, 3})`", "`printItems(int[3]{1, 2, 3})`", "`printItems(new array(1, 2, 3))`"],
    1, "Anonymous array creation requires `new int[]{...}`. The array initializer `{1, 2, 3}` without `new int[]` is only permitted during direct variable declarations.",
    "Anonymous Array Syntax", "theory", "medium", "Knows anonymous array instantiation syntax.", "Use `new int[]{1, 2, 3}` when passing array literals directly to methods.")

add_q(ch3, "What does `Arrays.fill(arr, 7)` do?",
    ["Appends the number 7 to the end of the array", "Assigns the value 7 to every element in the array", "Checks if the array contains 7", "Throws an exception if array is already full"],
    1, "`Arrays.fill()` assigns the specified value to all elements of the array.",
    "Arrays.fill Utility", "theory", "easy", "Knows the behavior of Arrays.fill.", "`Arrays.fill(arr, val)` sets every element in `arr` to `val`.")

add_q(ch3, "What is the maximum allowed array index for an array of size N in Java?",
    ["N", "N - 1", "N + 1", "2^31 - 1"],
    1, "Because Java arrays use zero-based indexing, the valid indices range from `0` to `N - 1`.",
    "Zero-Based Indexing", "theory", "easy", "Knows maximum index is length - 1.", "In zero-based indexing, the last element is always at index `length - 1`.")

# --- Ch 3: 2. Error Identification (25 Qs) ---
add_q(ch3, "Why does the following array declaration fail to compile?\n```java\nint[5] arr = new int[];\n```",
    ["Arrays cannot store int", "Dimension size [5] cannot appear in the type declaration, and size is missing in the `new int[]` allocation", "new keyword cannot be used with arrays", "int must be capitalized Integer"],
    1, "In Java, dimensions cannot be specified on the left side (`int[5] arr` is illegal). The size belongs in the instantiation: `int[] arr = new int[5];`.",
    "Array Declaration Syntax Error", "error", "easy", "Spotted misplaced dimension size in array declaration.", "Specify size during allocation `new int[5]`, not in the type declaration `int[]`.")

add_q(ch3, "What error occurs at runtime in this code?\n```java\nint[] nums = {10, 20, 30};\nSystem.out.println(nums[3]);\n```",
    ["Prints null", "Prints 0", "Throws ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3", "Compilation error: array index must be constant"],
    2, "An array of 3 elements has valid indices 0, 1, and 2. Index 3 is out of bounds, throwing `ArrayIndexOutOfBoundsException` at runtime.",
    "Off-By-One ArrayIndexOutOfBoundsException", "error", "easy", "Identified runtime ArrayIndexOutOfBoundsException on boundary index.", "Valid indices for length 3 are 0, 1, and 2; index 3 triggers an exception.")

add_q(ch3, "Identify the compilation error in the following snippet:\n```java\nint[] arr = new int[3];\narr.length = 5;\n```",
    ["Cannot assign a value to final variable length", "length is a method and requires parentheses", "arr is not in scope", "Length must be modified using setLength()"],
    0, "The `length` field of an array is `public final`. It is strictly read-only and cannot be reassigned.",
    "Immutable Array Length Field", "error", "easy", "Recognized that array length is a final read-only field.", "`arr.length` is a final field and cannot be reassigned.")

add_q(ch3, "Why does the following standalone array initialization fail to compile?\n```java\nint[] nums;\nnums = {1, 2, 3};\n```",
    ["Numbers must be separated by semicolons", "Array initializer `{...}` can only be used in a declaration; reassignment requires `new int[]{1, 2, 3}`", "nums is a reserved word", "Curly braces are only for code blocks"],
    1, "Array shortcut syntax `{1, 2, 3}` is only valid at the point of declaration (`int[] nums = {1, 2, 3};`). In later statements, it must be written as `nums = new int[]{1, 2, 3};`.",
    "Array Initializer Shortcut Rules", "error", "medium", "Recognized illegal array shortcut assignment after declaration.", "Outside the declaration statement, allocate with `new int[]{...}`.")

add_q(ch3, "What is the runtime exception thrown by this code?\n```java\nint[] data = null;\nSystem.out.println(data.length);\n```",
    ["`ArrayIndexOutOfBoundsException`", "`NullPointerException`", "`IllegalArgumentException`", "`0`"],
    1, "Attempting to access a field (`.length`) or index on an array reference that is `null` throws `NullPointerException`.",
    "Null Array Dereference", "error", "easy", "Identified NullPointerException when dereferencing null array.", "Accessing `.length` on a null array reference throws `NullPointerException`.")

add_q(ch3, "Why does this code fail to compile?\n```java\nint[][] matrix = new int[][];\n```",
    ["matrix must be 3D", "Cannot allocate a multidimensional array without at least specifying the first (row) dimension", "new int[][] requires curly braces", "matrix cannot be named matrix"],
    1, "When allocating a multidimensional array, the first dimension must always be specified: `new int[3][]` or `new int[3][3]`.",
    "Missing Dimension in 2D Array", "error", "medium", "Caught missing first dimension in multidimensional array instantiation.", "The first (row) dimension size must always be provided when instantiating multidimensional arrays.")

add_q(ch3, "What is the bug in this enhanced for loop intended to double array values?\n```java\nint[] arr = {1, 2, 3};\nfor (int x : arr) {\n    x = x * 2;\n}\nSystem.out.println(arr[0]);\n```",
    ["Compilation error: for-each cannot multiply", "Logic bug: `x` is a local copy; modifying `x` does NOT change the array element in `arr`, so `arr[0]` remains 1", "Throws ArrayIndexOutOfBoundsException", "Prints 0"],
    1, "In an enhanced for-each loop, `x` holds a copy of each primitive value. Modifying `x` does not alter the underlying array element.",
    "Enhanced For Loop Primitive Mutation Bug", "error", "medium", "Understands that for-each loop variable is a local copy for primitives.", "Use standard indexed for loop `arr[i] = ...` if you need to mutate elements.")

add_q(ch3, "Identify the bug in this array search:\n```java\nint[] arr = {5, 2, 8, 1, 9};\nint idx = Arrays.binarySearch(arr, 8);\n```",
    ["binarySearch cannot search integers", "The array is not sorted; calling `Arrays.binarySearch` on an unsorted array produces undefined results", "idx must be boolean", "arr must be declared final"],
    1, "`Arrays.binarySearch` requires the array to be sorted beforehand (`Arrays.sort(arr)`). Searching an unsorted array results in undefined behavior.",
    "Unsorted Binary Search Bug", "error", "medium", "Spotted binary search invoked on unsorted array.", "Always call `Arrays.sort()` before calling `Arrays.binarySearch()`.")

add_q(ch3, "Why does this code throw an exception?\n```java\nint[][] jagged = new int[3][];\njagged[0][0] = 5;\n```",
    ["`ArrayIndexOutOfBoundsException`", "`NullPointerException` because row 0 is null (its columns have not been allocated yet)", "`ClassCastException`", "`ArrayStoreException`"],
    1, "`new int[3][]` allocates an outer array of 3 rows, but each row is `null`. Accessing `jagged[0][0]` dereferences `null`, throwing `NullPointerException`.",
    "Unallocated Jagged Row NullPointerException", "error", "medium", "Identified unallocated row dereference in jagged array.", "Allocate the row `jagged[0] = new int[2];` before accessing its elements.")

add_q(ch3, "What is wrong with this negative array size declaration?\n```java\nint size = -5;\nint[] arr = new int[size];\n```",
    ["Compilation error: size cannot be negative", "Throws `NegativeArraySizeException` at runtime", "Array allocates 5 elements in reverse", "Throws `ArrayIndexOutOfBoundsException`"],
    1, "Attempting to allocate an array with a negative dimension throws `java.lang.NegativeArraySizeException` at runtime.",
    "NegativeArraySizeException", "error", "easy", "Recognized NegativeArraySizeException on negative dimension.", "Instantiating an array with negative length throws `NegativeArraySizeException`.")

add_q(ch3, "Why does this code fail to compile?\n```java\nint[] arr = {1, 2, 3};\nint len = arr.length();\n```",
    ["length is not a method for arrays; it is a field and must be written as `arr.length`", "arr is not an object", "int cannot store length", "length() returns long"],
    0, "`length` is a field for arrays, not a method. Appending `()` causes: 'cannot find symbol: method length()'.",
    "Array length() Method Error", "error", "easy", "Distinguishes array field `.length` from method `.length()`.", "Do not write `arr.length()`; use `arr.length` without parentheses.")

add_q(ch3, "What is the issue with comparing two arrays using `==`?\n```java\nint[] a = {1, 2, 3};\nint[] b = {1, 2, 3};\nif (a == b) { System.out.println(\"Equal\"); }\n```",
    ["Compile error: == cannot be used on arrays", "`==` compares memory addresses (references), not array element contents, so the condition evaluates to false", "Throws NullPointerException", "a and b are automatically merged"],
    1, "`==` tests reference identity (whether both variables point to the exact same heap object). Because `a` and `b` are separate array objects, `a == b` is false. Use `Arrays.equals(a, b)`.",
    "Array Reference Equality Trap", "error", "easy", "Avoids using `==` for array element content equality.", "Use `Arrays.equals(a, b)` to compare element contents, not `==`.")

add_q(ch3, "Identify the error in this array allocation:\n```java\nint[] arr = new int[3]{1, 2, 3};\n```",
    ["new int[] cannot take braces", "Cannot specify array dimension `[3]` when an array initializer `{1, 2, 3}` is provided", "int must be Integer", "braces must contain semicolons"],
    1, "When an explicit array initializer `{...}` is supplied, the dimension between brackets MUST be left empty (`new int[]{1, 2, 3}`). Specifying `[3]` causes a compilation error.",
    "Array Initializer Dimension Conflict", "error", "medium", "Caught dimension specification conflict with array initializer.", "Leave brackets empty `new int[]{...}` when initializing with elements.")

add_q(ch3, "Why does this loop produce an `ArrayIndexOutOfBoundsException`?\n```java\nint[] arr = {10, 20, 30};\nfor (int i = 0; i <= arr.length; i++) {\n    System.out.println(arr[i]);\n}\n```",
    ["i starts at 0 instead of 1", "Using `<=` causes the loop to attempt accessing `arr[3]`, which is out of bounds", "println cannot print array elements", "i++ is invalid"],
    1, "Because array indices are 0 to `length - 1`, the loop must use `< arr.length`. Using `<=` attempts to access `arr[arr.length]`, throwing `ArrayIndexOutOfBoundsException`.",
    "Off-By-One Array Loop Bounds", "error", "easy", "Spotted `<=` boundary error in array loop.", "Always use `< arr.length` when iterating array indices.")

add_q(ch3, "What happens when compiling this array type mismatch?\n```java\nint[] arr = new double[5];\n```",
    ["Automatic widening from int to double", "Compilation error: incompatible types: double[] cannot be converted to int[]", "Runtime ClassCastException", "Elements are truncated to 0"],
    1, "Array types in Java are not covariant across primitive types. `double[]` is an entirely incompatible type from `int[]`, causing a compilation error.",
    "Incompatible Primitive Array Types", "error", "medium", "Recognized that primitive arrays cannot be cross-assigned.", "Primitive array types cannot be assigned to one another (`int[]` cannot reference `double[]`).")

add_q(ch3, "Why does printing an array directly produce weird text like `[I@15db9742`?\n```java\nint[] arr = {1, 2, 3};\nSystem.out.println(arr);\n```",
    ["The array memory was corrupted", "Arrays inherit Object's default `toString()` method, which prints type descriptor `[I` and hex hashcode instead of contents", "Java does not support printing arrays", "Array is uninitialized"],
    1, "Arrays do not override `Object.toString()`. Printing `arr` prints the default object representation. To print elements, use `Arrays.toString(arr)`.",
    "Default Array toString Output", "error", "easy", "Understands why arrays print type descriptors instead of contents.", "Use `Arrays.toString(arr)` to display array contents instead of `arr.toString()`.")

add_q(ch3, "Identify the bug in this code:\n```java\nint[][] matrix = new int[3][3];\nfor (int r = 0; r < matrix.length; r++) {\n    for (int c = 0; c < matrix.length; c++) {\n        matrix[r][c] = r + c;\n    }\n}\n```",
    ["Compilation error", "Using `matrix.length` for column bound works for square matrices but fails for rectangular or jagged matrices where `matrix[r].length` must be used", "r + c cannot be assigned to int", "c must start at 1"],
    1, "In non-square or jagged matrices, the number of columns in row `r` is `matrix[r].length`. Using `matrix.length` (number of rows) as the column bound causes logic bugs or out-of-bounds exceptions.",
    "2D Column Bound Trap", "error", "medium", "Identified fragile column bound assumption in 2D array traversal.", "Always use `matrix[r].length` for the column loop bound.")

add_q(ch3, "Why does the following snippet fail to compile?\n```java\nint[] arr = new int[5];\narr[0] = 3.14;\n```",
    ["3.14 is out of bounds", "Compilation error: possible lossy conversion from double to int", "arr[0] is read-only", "arr requires casting to float"],
    1, "`arr` is an `int[]`. Assigning a `double` literal `3.14` to an `int` element violates type safety and causes a compile error without an explicit cast `(int) 3.14`.",
    "Lossy Conversion in Array Element", "error", "easy", "Caught type mismatch during array element assignment.", "Array elements must match the array's declared component type.")

add_q(ch3, "What is the runtime exception in this code?\n```java\nString[] names = new String[3];\nSystem.out.println(names[0].toUpperCase());\n```",
    ["`ArrayIndexOutOfBoundsException`", "`NullPointerException` because `names[0]` is null", "`ClassCastException`", "`IllegalArgumentException`"],
    1, "A newly instantiated `String[]` has all elements initialized to `null`. Calling `.toUpperCase()` on `names[0]` dereferences `null`, throwing `NullPointerException`.",
    "Null Element Dereference", "error", "easy", "Recognized NullPointerException on uninitialized object array element.", "String array elements default to `null`; initialize them before calling methods.")

add_q(ch3, "What is wrong with this array copy implementation?\n```java\nint[] a = {1, 2, 3};\nint[] b = new int[2];\nSystem.arraycopy(a, 0, b, 0, a.length);\n```",
    ["System.arraycopy cannot copy ints", "Throws `ArrayIndexOutOfBoundsException` because `b` has length 2 and cannot accommodate 3 elements", "b must be null initially", "Source pos must be 1"],
    1, "`System.arraycopy` attempts to copy 3 elements into `b`, which only has capacity 2. It throws `ArrayIndexOutOfBoundsException` at runtime.",
    "System.arraycopy Destination Overflow", "error", "medium", "Spotted destination capacity overflow in System.arraycopy.", "Destination array must have sufficient remaining capacity to hold copied elements.")

add_q(ch3, "Why does this code cause a compilation error?\n```java\nint[] a, b[];\na = new int[3][3];\n```",
    ["a is a 1D array (`int[]`), but `new int[3][3]` is a 2D array (`int[][]`)", "b is not initialized", "new int[3][3] must be assigned to b only", "Brackets after b are illegal"],
    0, "In `int[] a, b[];`, `a` is a 1D array `int[]`, while `b` has extra brackets making it a 2D array `int[][]`. Assigning a 2D array to `a` causes an incompatible types compile error.",
    "C-Style Array Declaration Trap", "error", "hard", "Mastered mixed dimension declaration parsing in Java.", "`int[] a, b[];` makes `a` 1D and `b` 2D; keep brackets on type for clarity (`int[][] b;`).")

add_q(ch3, "What is the bug in this array search algorithm?\n```java\nboolean found = false;\nfor (int x : arr) {\n    if (x == target) found = true;\n    else found = false;\n}\n```",
    ["Loop causes infinite iteration", "The `else found = false;` overwrites previous successful matches, so `found` only reflects the very last element in the array", "x cannot be compared to target", "arr cannot be iterated with for-each"],
    1, "Setting `found = false` in the `else` branch overwrites any earlier match. Once found, the search should set `found = true; break;`.",
    "Search Flag Overwrite Bug", "error", "easy", "Caught premature flag overwrite in linear search loop.", "Do not reset search flags to false in the loop; set `true` and break upon match.")

add_q(ch3, "Why does this reverse array algorithm fail?\n```java\nfor (int i = 0; i < arr.length; i++) {\n    int temp = arr[i];\n    arr[i] = arr[arr.length - 1 - i];\n    arr[arr.length - 1 - i] = temp;\n}\n```",
    ["Throws ArrayIndexOutOfBoundsException", "It swaps every element twice, restoring the array to its original order at the end", "temp cannot be declared inside for loop", "arr[i] is read-only"],
    1, "Iterating across the entire length swaps elements to the middle and then swaps them right back! The loop should only run to `arr.length / 2`.",
    "Two-Pointer Reverse Double-Swap Bug", "error", "medium", "Identified redundant double-swap bug in array reversal.", "To reverse an array in-place, loop only up to `arr.length / 2`.")

add_q(ch3, "What is wrong with this array comparison?\n```java\nint[][] m1 = {{1, 2}, {3, 4}};\nint[][] m2 = {{1, 2}, {3, 4}};\nboolean eq = Arrays.equals(m1, m2);\n```",
    ["Compilation error", "`Arrays.equals` performs shallow comparison on 2D arrays, comparing inner array references rather than nested values; `Arrays.deepEquals` must be used", "m1 and m2 cannot have 2 elements", "Arrays class cannot compare matrices"],
    1, "`Arrays.equals` on a 2D array compares the row array references (`m1[0] == m2[0]`), returning false. To compare multidimensional array contents deeply, use `Arrays.deepEquals(m1, m2)`.",
    "2D Arrays.equals vs deepEquals Trap", "error", "medium", "Distinguishes Arrays.equals from Arrays.deepEquals for multidimensional arrays.", "Use `Arrays.deepEquals()` to compare multidimensional arrays by content.")

add_q(ch3, "Identify the error in this code:\n```java\nfinal int[] arr = {1, 2, 3};\narr[0] = 100; // Line 2\narr = new int[5]; // Line 3\n```",
    ["Line 2 causes a compile error: cannot modify elements of a final array", "Line 3 causes a compile error: cannot assign a value to final variable arr", "Both Line 2 and Line 3 cause compile errors", "No errors"],
    1, "A `final` array reference cannot be reassigned to point to another array (Line 3 fails). However, the array's contents are NOT immutable; mutating `arr[0] = 100` on Line 2 is completely valid.",
    "Final Array Reference vs Content Mutability", "error", "medium", "Understands that final applies to the array reference, not its elements.", "`final int[] arr` prevents reassigning `arr`, but array elements can still be modified.")

# --- Ch 3: 3. Output (25 Qs) ---
add_q(ch3, "What is the output of the following code?\n```java\nint[] a = {1, 2, 3};\nint[] b = a;\nb[0] = 99;\nSystem.out.println(a[0]);\n```",
    ["1", "99", "0", "NullPointerException"],
    1, "`b` and `a` refer to the exact same array object on the heap. Mutating `b[0]` modifies `a[0]`. Outputs 99.",
    "Array Aliasing Output", "output", "easy", "Correctly traced aliased array reference mutation.", "`b = a` aliases the array; modifying `b[0]` directly updates `a[0]`.")

add_q(ch3, "What is the output of this code?\n```java\nint[] arr = new int[3];\narr[0] = 5;\narr[arr[0] - 4] = 10;\nSystem.out.println(arr[1]);\n```",
    ["0", "5", "10", "ArrayIndexOutOfBoundsException"],
    2, "`arr[0]` is 5. `arr[0] - 4 = 5 - 4 = 1`. So `arr[1] = 10`. Printing `arr[1]` outputs 10.",
    "Computed Array Index Output", "output", "easy", "Accurately evaluated expression inside array index brackets.", "Evaluate the index expression: 5 - 4 = 1, so `arr[1] = 10`.")

add_q(ch3, "What does this code print?\n```java\nint[][] m = {{1, 2, 3}, {4, 5}};\nSystem.out.println(m.length + \" \" + m[0].length + \" \" + m[1].length);\n```",
    ["2 3 2", "5 3 2", "2 3 3", "3 2 2"],
    0, "`m.length` is the number of rows (2). `m[0].length` is 3. `m[1].length` is 2. Outputs `2 3 2`.",
    "Jagged Array Lengths Output", "output", "easy", "Calculated dimensions of jagged 2D array.", "Rows = 2; row 0 length = 3; row 1 length = 2.")

add_q(ch3, "What is the output of the following code?\n```java\nint[] arr = {10, 20, 30, 40, 50};\nint sum = 0;\nfor (int i = 1; i < arr.length - 1; i++) {\n    sum += arr[i];\n}\nSystem.out.println(sum);\n```",
    ["150", "90", "140", "60"],
    1, "The loop runs for `i = 1, 2, 3` (excluding indices 0 and 4). `sum = arr[1] + arr[2] + arr[3] = 20 + 30 + 40 = 90`.",
    "Array Subsegment Sum", "output", "easy", "Tracked loop boundary bounds on array summation.", "Indices 1, 2, 3 sum to 20 + 30 + 40 = 90.")

add_q(ch3, "What does the following snippet print?\n```java\nint[] arr = {1, 2, 3, 4, 5};\nint p = 1;\nfor (int x : arr) {\n    if (x % 2 == 0) p *= x;\n}\nSystem.out.println(p);\n```",
    ["8", "15", "120", "24"],
    0, "Even numbers in the array are 2 and 4. Product `p = 1 * 2 * 4 = 8`.",
    "Even Elements Product", "output", "easy", "Computed product of filtered array elements.", "Even elements are 2 and 4; 2 * 4 = 8.")

add_q(ch3, "What is the output of this code?\n```java\nint[][] grid = new int[2][3];\nint val = 1;\nfor (int i = 0; i < grid.length; i++) {\n    for (int j = 0; j < grid[i].length; j++) {\n        grid[i][j] = val++;\n    }\n}\nSystem.out.println(grid[1][1]);\n```",
    ["2", "4", "5", "6"],
    2, "Matrix layout: Row 0 has `1, 2, 3`. Row 1 has `4, 5, 6`. `grid[1][1]` is 5.",
    "2D Array Population Output", "output", "medium", "Traced 2D matrix sequential value assignment.", "Row 1 elements are 4, 5, 6; index [1][1] is 5.")

add_q(ch3, "What is printed by this code?\n```java\nint[] arr = {5, 3, 9, 1, 7};\nArrays.sort(arr);\nSystem.out.println(arr[0] + \" \" + arr[arr.length - 1]);\n```",
    ["5 7", "1 9", "9 1", "3 7"],
    1, "After sorting, `arr` becomes `{1, 3, 5, 7, 9}`. The minimum element `arr[0]` is 1, and the maximum element `arr[arr.length - 1]` is 9.",
    "Sorted Array Extremes", "output", "easy", "Identified first and last elements after Arrays.sort().", "Sorted array is {1, 3, 5, 7, 9}; first is 1, last is 9.")

add_q(ch3, "What is the output of this code?\n```java\nint[] a = {1, 2, 3, 4, 5};\nint[] b = new int[3];\nSystem.arraycopy(a, 1, b, 0, 3);\nSystem.out.println(Arrays.toString(b));\n```",
    ["[1, 2, 3]", "[2, 3, 4]", "[3, 4, 5]", "[0, 0, 0]"],
    1, "`System.arraycopy(a, 1, b, 0, 3)` copies 3 elements from `a` starting at index 1 (`2, 3, 4`) into `b` starting at index 0. `b` becomes `[2, 3, 4]`.",
    "System.arraycopy Output", "output", "medium", "Tracked source and destination indices in System.arraycopy.", "Copies elements at index 1, 2, 3 (2, 3, 4) into b.")

add_q(ch3, "What does the following snippet print?\n```java\nint[] arr = {1, 2, 3};\nint[] copy = arr.clone();\ncopy[0] = 50;\nSystem.out.println(arr[0] + \" \" + copy[0]);\n```",
    ["50 50", "1 50", "1 1", "Error"],
    1, "`.clone()` on a 1D primitive array creates an independent copy. Mutating `copy[0]` does not affect `arr[0]`. Prints `1 50`.",
    "1D Array Clone Independence", "output", "easy", "Recognized independent mutation in cloned 1D array.", "Cloning a 1D primitive array isolates changes to the copy.")

add_q(ch3, "What is the output of this code?\n```java\nint[] arr = {10, 20, 30, 40};\nfor (int i = 0; i < arr.length / 2; i++) {\n    int t = arr[i];\n    arr[i] = arr[arr.length - 1 - i];\n    arr[arr.length - 1 - i] = t;\n}\nSystem.out.println(arr[1]);\n```",
    ["10", "20", "30", "40"],
    2, "The loop reverses the array in-place to `{40, 30, 20, 10}`. `arr[1]` is 30.",
    "In-Place Array Reversal Output", "output", "medium", "Accurately traced in-place two-pointer array reversal.", "Reversed array is {40, 30, 20, 10}; index 1 is 30.")

add_q(ch3, "What does the following code print?\n```java\nint[][] m = new int[3][3];\nfor (int i = 0; i < 3; i++) m[i][i] = 1;\nint sum = 0;\nfor (int[] row : m)\n    for (int cell : row) sum += cell;\nSystem.out.println(sum);\n```",
    ["1", "3", "9", "0"],
    1, "`m[i][i] = 1` sets the main diagonal cells `[0][0], [1][1], [2][2]` to 1. All other 6 cells remain 0. Sum is 3.",
    "Identity Matrix Diagonal Sum", "output", "easy", "Calculated sum of main diagonal entries.", "3 diagonal cells each have 1; total sum is 3.")

add_q(ch3, "What is the output of this code?\n```java\nint[] arr = {1, 2, 3, 4, 5};\nint[] sub = Arrays.copyOfRange(arr, 1, 4);\nSystem.out.println(sub.length + \" \" + sub[0] + \" \" + sub[sub.length - 1]);\n```",
    ["3 2 4", "4 2 5", "3 1 3", "3 2 5"],
    0, "`Arrays.copyOfRange(arr, from, to)` copies indices `[1, 4)` (exclusive of 4), containing elements at indices 1, 2, 3: `{2, 3, 4}`. Length is 3, first is 2, last is 4.",
    "copyOfRange Bounds", "output", "medium", "Understands half-open interval `[from, to)` in copyOfRange.", "`copyOfRange(arr, 1, 4)` copies indices 1, 2, 3 (`{2, 3, 4}`).")

add_q(ch3, "What does the following snippet print?\n```java\nint[] arr = {2, 4, 6, 8, 10};\nint idx = Arrays.binarySearch(arr, 6);\nSystem.out.println(idx);\n```",
    ["1", "2", "3", "-3"],
    1, "Element 6 is located at index 2. Binary search returns its zero-based index: 2.",
    "Binary Search Exact Match Output", "output", "easy", "Found exact element index via binary search.", "Element 6 is at index 2.")

add_q(ch3, "What is the output of this code?\n```java\nint[] arr = {10, 20, 30, 40};\nint idx = Arrays.binarySearch(arr, 25);\nSystem.out.println(idx);\n```",
    ["-2", "-3", "-1", "2"],
    1, "25 is not present. It would be inserted at index 2 (between 20 and 30). Formula: `-(insertion_point + 1) = -(2 + 1) = -3`.",
    "Binary Search Insertion Point Output", "output", "hard", "Calculated negative insertion point formula in binary search.", "25 belongs at index 2; returns `-(2 + 1) = -3`.")

add_q(ch3, "What does this code print?\n```java\nint[] a = {1, 2};\nint[] b = {1, 2};\nSystem.out.println((a == b) + \" \" + Arrays.equals(a, b));\n```",
    ["true true", "false true", "true false", "false false"],
    1, "`a == b` compares references (different objects on heap -> false). `Arrays.equals(a, b)` compares element contents -> true. Output: `false true`.",
    "Reference vs Element Equality", "output", "easy", "Distinguishes reference identity from content equality.", "`==` is false for distinct array instances; `Arrays.equals` is true.")

add_q(ch3, "What is the output of this code?\n```java\nint[] arr = {1, 2, 3};\nint shift = arr[0];\nfor (int i = 0; i < arr.length - 1; i++) {\n    arr[i] = arr[i + 1];\n}\narr[arr.length - 1] = shift;\nSystem.out.println(Arrays.toString(arr));\n```",
    ["[1, 2, 3]", "[2, 3, 1]", "[3, 2, 1]", "[2, 1, 3]"],
    1, "This algorithm performs a left circular shift by 1 position. `{1, 2, 3}` becomes `{2, 3, 1}`.",
    "Left Circular Array Shift", "output", "medium", "Traced left circular shift algorithm correctly.", "First element 1 shifts to the back; result is `[2, 3, 1]`.")

add_q(ch3, "What does the following code print?\n```java\nint[] a = new int[5];\nArrays.fill(a, 1, 4, 9);\nSystem.out.println(Arrays.toString(a));\n```",
    ["[9, 9, 9, 0, 0]", "[0, 9, 9, 9, 0]", "[9, 9, 9, 9, 0]", "[0, 9, 9, 0, 0]"],
    1, "`Arrays.fill(a, from, to, val)` fills range `[1, 4)` (indices 1, 2, 3) with 9. Index 0 and 4 remain 0. Output: `[0, 9, 9, 9, 0]`.",
    "Arrays.fill Range Output", "output", "medium", "Correctly applied range bounds in Arrays.fill.", "Fills indices 1, 2, and 3 with 9; indices 0 and 4 remain 0.")

add_q(ch3, "What is the output of this code?\n```java\nint[][] jagged = new int[2][];\njagged[0] = new int[]{1, 2};\njagged[1] = new int[]{3, 4, 5};\nint count = 0;\nfor (int[] row : jagged) count += row.length;\nSystem.out.println(count);\n```",
    ["5", "6", "4", "2"],
    0, "Row 0 has length 2. Row 1 has length 3. Total elements `count = 2 + 3 = 5`.",
    "Jagged Array Element Count", "output", "easy", "Calculated total cell count across ragged rows.", "Row lengths 2 + 3 = 5 total elements.")

add_q(ch3, "What is printed by this code?\n```java\nint[] arr = {4, 1, 8, 3};\nint max = arr[0];\nfor (int i = 1; i < arr.length; i++) {\n    if (arr[i] > max) max = arr[i];\n}\nSystem.out.println(max);\n```",
    ["4", "1", "8", "3"],
    2, "The loop tracks the running maximum element. The largest value in `{4, 1, 8, 3}` is 8.",
    "Linear Maximum Finding", "output", "easy", "Traced linear scan for maximum array element.", "Maximum element is 8.")

add_q(ch3, "What does this snippet print?\n```java\nint[] arr = {10, 20, 30};\nint x = arr[--arr.length - 1];\nSystem.out.println(x);\n```",
    ["Compilation error: cannot modify final field length", "20", "30", "ArrayIndexOutOfBoundsException"],
    0, "`arr.length` is a final variable and cannot be modified with `--`. The code fails to compile.",
    "Attempted Length Decrement Error", "output", "hard", "Spotted compile-time error modifying final field length.", "`arr.length` is final and cannot be modified with `--`.")

add_q(ch3, "What is the output of this code?\n```java\nint[] arr = {1, 2, 3, 2, 1};\nboolean isPal = true;\nfor (int i = 0; i < arr.length / 2; i++) {\n    if (arr[i] != arr[arr.length - 1 - i]) {\n        isPal = false;\n        break;\n    }\n}\nSystem.out.println(isPal);\n```",
    ["true", "false", "1", "0"],
    0, "Indices compare: `arr[0] (1) == arr[4] (1)`, `arr[1] (2) == arr[3] (2)`. All symmetric pairs match, so `isPal` remains `true`.",
    "Palindrome Array Verification", "output", "easy", "Traced symmetric two-pointer array palindrome check.", "The array reads identically forwards and backwards; output is true.")

add_q(ch3, "What is the output of this code?\n```java\nint[] nums = {1, 2, 3};\nfor (int i = 0; i < nums.length; i++) {\n    nums[i] = nums[nums.length - 1 - i];\n}\nSystem.out.println(Arrays.toString(nums));\n```",
    ["[3, 2, 1]", "[3, 2, 3]", "[1, 2, 1]", "[1, 2, 3]"],
    1, "`i=0`: `nums[0] = nums[2] = 3` -> `{3, 2, 3}`. `i=1`: `nums[1] = nums[1] = 2`. `i=2`: `nums[2] = nums[0] = 3` (because nums[0] was overwritten with 3!). Result: `[3, 2, 3]`.",
    "Overwritten Reverse Without Temp", "output", "hard", "Spotted missing temporary variable leading to asymmetric overwrite.", "Without a temp swap, earlier overwritten values corrupt later assignments: `[3, 2, 3]`.")

add_q(ch3, "What does this code print?\n```java\nint[][] m = {{1, 2}, {3, 4}};\nSystem.out.println(m[1][0] + m[0][1]);\n```",
    ["5", "3", "7", "23"],
    0, "`m[1][0]` is 3. `m[0][1]` is 2. `3 + 2 = 5`.",
    "2D Array Cross Cell Sum", "output", "easy", "Accurately accessed 2D array coordinates.", "`m[1][0] = 3` and `m[0][1] = 2`; 3 + 2 = 5.")

add_q(ch3, "What is the output of this code?\n```java\nint[] a = {1, 2, 3};\nint[] b = a.clone();\nSystem.out.println((a == b) + \" \" + (a[0] == b[0]));\n```",
    ["false true", "true true", "false false", "true false"],
    0, "`a == b` is false because `.clone()` allocates a distinct new array instance. `a[0] == b[0]` is true because primitive values are equal (`1 == 1`). Output: `false true`.",
    "Cloned Array Identity vs Element Equality", "output", "medium", "Distinguished cloned instance identity from element value equality.", "Cloned array is a distinct object (`a != b`), but copied elements match (`1 == 1`).")

add_q(ch3, "What is printed by this code?\n```java\nint[] arr = {10, 5, 20, 15};\nint target = 20;\nint foundIdx = -1;\nfor (int i = 0; i < arr.length; i++) {\n    if (arr[i] == target) { foundIdx = i; break; }\n}\nSystem.out.println(foundIdx);\n```",
    ["0", "1", "2", "3"],
    2, "Element 20 is located at index 2. The loop breaks immediately and prints 2.",
    "Linear Search Index Output", "output", "easy", "Traced linear search target match and break index.", "Target 20 is found at index 2.")

# --- Ch 3: 4. Scenario (25 Qs) ---
add_q(ch3, "You are developing a student grading system for a class of 40 students in University of Malaya. Scores range from 0 to 100. Why is an array `int[] scores = new int[40];` more suitable than declaring 40 individual variables (`score1, score2, ...`)?",
    ["Arrays use less CPU cache", "Arrays allow indexed iteration using loops, simplified statistical calculations (average, min, max), and clean parameter passing to methods", "Individual variables cannot hold numbers above 30", "Java restricts methods to 10 local variables"],
    1, "Arrays provide indexed sequential access, enabling modular loop processing for computing averages, sorting, and passing datasets cleanly.",
    "Array vs Discrete Variables", "scenario", "easy", "Understands benefits of arrays for bulk homogenous data processing.", "Arrays enable indexed iteration and modular aggregation functions.")

add_q(ch3, "An e-commerce analytics dashboard tracks daily sales for 12 months. Since months have different numbers of days (28 to 31), which data structure represents this calendar without wasting memory cells?",
    ["A rectangular 2D array `int[12][31]`", "A jagged 2D array where each row `month` is allocated with its exact number of days `sales[m] = new int[daysInMonth]`", "A 1D array of 365 elements with complex index offsets", "A 3D cube array"],
    1, "A jagged array allocates exact column counts per row, eliminating unused empty cells for shorter months.",
    "Jagged Array Calendar Design", "scenario", "medium", "Designed memory-efficient jagged array for variable-length monthly data.", "Jagged arrays allocate exact row capacities, saving memory on irregular month lengths.")

add_q(ch3, "A high-frequency sensor records 10,000 temperature readings every second. A developer needs to clear the array to zero between capture cycles. Which method is the fastest standard way to zero out the array?",
    ["Looping through each index and assigning `arr[i] = 0;`", "`Arrays.fill(arr, 0);`", "Re-allocating a new array `arr = new int[10000];` on every cycle", "`System.gc()`"],
    1, "`Arrays.fill(arr, 0)` is optimized and avoids triggering garbage collector overhead from repeated heap reallocations.",
    "Array Reuse vs Garbage Collection", "scenario", "medium", "Understands memory reuse and Arrays.fill to prevent GC pressure.", "Reuse arrays with `Arrays.fill(arr, 0)` to avoid GC pressure from frequent re-allocations.")

add_q(ch3, "You are writing a seat reservation engine for a cinema hall with 10 rows and 15 seats per row. How do you check if Seat 8 in Row 4 is currently booked (where false means available, true means booked)?",
    ["`if (seats[4][8]) { ... }`", "`if (seats[3][7]) { ... }` (adjusting for zero-based indexing)", "`if (seats[8][4]) { ... }`", "`if (seats[4 * 15 + 8]) { ... }`"],
    1, "In zero-based indexing, Row 4 is index `3` and Seat 8 is index `7`. The condition is `if (seats[3][7])`.",
    "Zero-Based Coordinate Mapping", "scenario", "easy", "Correctly mapped 1-based human seat coordinates to 0-based array indices.", "Translate 1-based human coordinates to 0-based array indices by subtracting 1.")

add_q(ch3, "A weather station needs to compute the median temperature from an unsorted array of daily readings. What is the standard algorithm using Java's built-in libraries?",
    ["Sum all elements and divide by length", "Sort the array using `Arrays.sort(temps);`, then pick the middle element `temps[temps.length / 2]`", "Call `Arrays.binarySearch(temps, 0)`", "Use `Arrays.toString(temps)`"],
    1, "The median requires sorted order. Sort with `Arrays.sort()`, then access the middle index.",
    "Median Calculation Algorithm", "scenario", "easy", "Applied Arrays.sort to calculate median statistics.", "Sort the array first; the median is at index `length / 2`.")

add_q(ch3, "A mobile game inventory system has a maximum capacity of 20 items. When an inventory array is full and a player picks up a new item, how can the system dynamically expand capacity to 30 items?",
    ["Call `inventory.length = 30;`", "Use `inventory = Arrays.copyOf(inventory, 30);` to allocate a new array of size 30 with existing elements copied over", "Call `inventory.expand(10);`", "Java arrays expand automatically when an element is added"],
    1, "`Arrays.copyOf(inventory, 30)` creates a new array of length 30, copies the existing 20 elements, and returns the new reference.",
    "Dynamic Capacity Expansion Pattern", "scenario", "medium", "Employed Arrays.copyOf for dynamic array resizing.", "Use `Arrays.copyOf(arr, newSize)` to resize arrays dynamically.")

add_q(ch3, "You are implementing a digital image filter that processes grayscale pixels represented as a 2D array `int[][] image`. A blurring algorithm needs to access neighboring pixels `(r-1, c)`, `(r+1, c)`, `(r, c-1)`, `(r, c+1)`. What boundary check must precede accessing neighbor `image[nr][nc]`?",
    ["`nr >= 0 && nr < image.length && nc >= 0 && nc < image[nr].length`", "`nr > 0 && nc > 0`", "`image[nr][nc] != null`", "`nr == nc`"],
    0, "To prevent `ArrayIndexOutOfBoundsException`, neighbor coordinates must be verified: `nr >= 0 && nr < rows && nc >= 0 && nc < cols`.",
    "2D Grid Neighbor Bounds Guard", "scenario", "medium", "Implemented robust boundary guard condition for 2D matrix traversal.", "Always verify `0 <= r < rows` and `0 <= c < cols` before accessing matrix neighbors.")

add_q(ch3, "A banking fraud detection service checks whether a transaction sequence is strictly sorted in chronological order. Which linear scan correctly checks if an array `long[] timestamps` is sorted ascendingly?",
    ["`for (int i = 0; i < len - 1; i++) if (timestamps[i] > timestamps[i+1]) return false; return true;`", "`for (int i = 0; i < len; i++) if (timestamps[i] < timestamps[i+1]) return false;`", "`return Arrays.binarySearch(timestamps, 0) >= 0;`", "`return timestamps[0] < timestamps[len - 1];`"],
    0, "Iterate from 0 to `len - 2`. If any element exceeds its successor (`timestamps[i] > timestamps[i+1]`), the array is not sorted. If all pass, return true.",
    "Sorted Array Verification Scan", "scenario", "medium", "Designed clean O(N) verification algorithm for sorted sequence.", "Check `timestamps[i] > timestamps[i+1]`; return false on the first inversion.")

add_q(ch3, "A flight booking engine stores connecting airport route distances in an adjacency matrix `int[][] dist`. How is an airport route between Airport `i` and Airport `j` verified as non-existent (assuming 0 represents no direct flight)?",
    ["`if (dist[i][j] == 0)`", "`if (dist[i] == null)`", "`if (dist.length == 0)`", "`if (i == j)`"],
    0, "In a graph adjacency matrix, `dist[i][j] == 0` designates that no direct edge/flight exists between node `i` and node `j`.",
    "Adjacency Matrix Edge Verification", "scenario", "easy", "Understands graph representation via 2D adjacency matrix.", "In an adjacency matrix, 0 represents the absence of a direct connection between vertices.")

add_q(ch3, "A lottery system draws 6 winning numbers from 1 to 49. To rapidly check if a player's picked number is among the winners, what is the most efficient search approach if the winning numbers array is kept sorted?",
    ["Linear search scanning from index 0 to 5", "`Arrays.binarySearch(winners, pickedNumber) >= 0`", "`winners.contains(pickedNumber)`", "Sorting the array on every check"],
    1, "`Arrays.binarySearch` on a pre-sorted array runs in O(log N) time and returns an index `>= 0` if the target is found.",
    "Binary Search Membership Check", "scenario", "easy", "Applied binary search for fast O(log N) membership testing.", "Use `Arrays.binarySearch(sortedArr, key) >= 0` for fast membership checks.")

add_q(ch3, "A music playlist app implements a shuffle feature that randomizes the order of songs in `String[] playlist`. Which industry-standard algorithm shuffles an array in-place in O(N) time?",
    ["Bubble Shuffle", "Fisher-Yates (Knuth) Shuffle algorithm: iterate backwards from `n-1` to 1, swapping `arr[i]` with a random index `0 <= j <= i`", "Sorting by song length", "Reversing the array twice"],
    1, "The Fisher-Yates shuffle runs in O(N) time and guarantees that every permutation is equally probable.",
    "Fisher-Yates Shuffle Algorithm", "scenario", "hard", "Mastered the Fisher-Yates in-place array shuffling algorithm.", "Fisher-Yates iterates backwards, swapping each element with a random index `[0, i]`.")

add_q(ch3, "A logistics company packs containers with item weights. To find the top 3 heaviest items in an array of 1,000 weights, what is the cleanest approach using Java's `Arrays` utility?",
    ["`Arrays.sort(weights);` then read the last 3 elements at indices `len - 1`, `len - 2`, `len - 3`", "Search with `Arrays.binarySearch()`", "Use `Arrays.fill()`", "Reverse the array 3 times"],
    0, "Sorting with `Arrays.sort(weights)` places the largest items at the end of the array, allowing immediate retrieval of the top 3 items.",
    "Top-K via Array Sorting", "scenario", "easy", "Retrieved top-K extreme values via sorted array indexing.", "Sort ascendingly; the top K elements reside at the end of the array.")

add_q(ch3, "You are writing a barcode scanner validation module that verifies an EAN-13 barcode stored as `int[] digits = new int[13];`. The check digit formula requires summing odd-positioned digits and multiplying even-positioned digits by 3. How do you traverse alternating positions cleanly?",
    ["Two separate loops: one with `i += 2` starting at 0, and another with `i += 2` starting at 1", "A single while loop incrementing by 0.5", "Recursion only", "Enhanced for loop without index"],
    0, "Using two loops with step increment `i += 2` cleanly separates odd and even parity indices without needing `if (i % 2 == 0)` branching on every iteration.",
    "Parity Stride Loop Traversal", "scenario", "medium", "Designed stride loops for alternating parity index processing.", "Use step `i += 2` to iterate even and odd index positions independently.")

add_q(ch3, "A ride-sharing app maintains a circular buffer of the last 5 GPS coordinate points using an array `double[] buffer = new double[5];`. When a new reading arrives, how is the insertion index updated so it wraps around to index 0 after index 4?",
    ["`insertIdx = (insertIdx + 1) % buffer.length;`", "`insertIdx = insertIdx + 1; if (insertIdx > 5) insertIdx = 0;`", "`insertIdx = insertIdx % 4;`", "`insertIdx = buffer.length - 1;`"],
    0, "The modulus operator `(idx + 1) % size` wraps around seamlessly: `(4 + 1) % 5 = 0`.",
    "Circular Buffer Wrap-Around", "scenario", "easy", "Applied modular arithmetic for circular buffer index wrapping.", "`index = (index + 1) % capacity` wraps buffer pointers in O(1) time.")

add_q(ch3, "A machine learning pipeline receives feature vectors of length 512. It must compute the Euclidean dot product between two vectors `a` and `b` of equal length. Which loop structure computes this correctly?",
    ["`double dot = 0; for (int i = 0; i < a.length; i++) dot += a[i] * b[i];`", "`double dot = 0; for (int x : a) dot += x * b[x];`", "`double dot = Arrays.binarySearch(a, b);`", "`double dot = a.length * b.length;`"],
    0, "The dot product multiplies corresponding elements `a[i] * b[i]` and sums them across the vector length.",
    "Vector Dot Product Computation", "scenario", "easy", "Implemented vector dot product via indexed traversal.", "Multiply corresponding elements `a[i] * b[i]` and accumulate into sum.")

add_q(ch3, "A video streaming player tracks buffer health across 60 seconds. A drop below 20% in any second triggers a bitrate downgrade. Which search pattern terminates as soon as the first substandard second is found?",
    ["Linear search with early return/break: `for (int val : buffer) if (val < 20) { triggerDowngrade(); break; }`", "Summing all buffer values and checking the average", "Sorting the buffer array first", "Scanning the entire array twice"],
    0, "Early termination via `break` on the first failing condition saves CPU cycles and triggers responsive bitrate adjustments.",
    "Early Exit Quality Check", "scenario", "easy", "Used early loop termination for real-time quality alerting.", "Break immediately upon encountering a failing condition to minimize latency.")

add_q(ch3, "A medical heart monitor logs ECG pulse rates. A noise filter removes the single highest and single lowest outlier spikes before averaging the remaining readings. How is this calculated efficiently?",
    ["`Arrays.sort(ecg); double sum = 0; for (int i = 1; i < ecg.length - 1; i++) sum += ecg[i]; double avg = sum / (ecg.length - 2);`", "Subtract max from min", "Divide total sum by ecg.length", "Zero out index 0"],
    0, "Sorting places the minimum at index 0 and maximum at `length - 1`. Summing indices `1` through `length - 2` and dividing by `length - 2` yields the trimmed mean.",
    "Trimmed Mean Outlier Removal", "scenario", "medium", "Implemented trimmed mean statistical calculation.", "Sort array, sum from index 1 to `length - 2`, and divide by `length - 2`.")

add_q(ch3, "An image processing tool transposes an N x N square matrix (swapping rows and columns: `m[r][c]` with `m[c][r]`). How is this done in-place without swapping elements back to their original spots?",
    ["`for (int r = 0; r < N; r++) for (int c = r + 1; c < N; c++) swap(m[r][c], m[c][r]);`", "`for (int r = 0; r < N; r++) for (int c = 0; c < N; c++) swap(m[r][c], m[c][r]);`", "`m = m.clone();`", "Reverse each row"],
    0, "Iterating with column bound `c = r + 1` strictly visits elements above the main diagonal, swapping each with its transpose counterpart exactly once.",
    "In-Place Matrix Transposition", "scenario", "hard", "Mastered upper-triangular indexing for in-place matrix transposition.", "Traverse strictly above diagonal (`c = r + 1`) to avoid double-swapping elements.")

add_q(ch3, "A supermarket inventory system tracks item stock levels. A restocking alert must list all item indices where `stock[i] == 0`. What should the method return when no items are out of stock?",
    ["`null`", "An empty array `new int[0]`", "A single-element array containing -1", "Throw a NullPointerException"],
    1, "Returning a zero-length array `new int[0]` is the standard Java best practice; it prevents `NullPointerException` in calling code that loops over results.",
    "Zero-Length Array Return Idiom", "scenario", "medium", "Follows industry pattern of returning empty arrays instead of null.", "Return `new int[0]` instead of `null` to prevent caller NullPointerExceptions.")

add_q(ch3, "A data warehouse pipeline receives a stream of 1,000,000 integers. It needs to count the frequency of occurrences of values between 0 and 99. Which data structure achieves O(1) frequency tallying with minimal memory?",
    ["A hash map with boxing", "A frequency count array `int[] counts = new int[100];` where each value directly indexes `counts[val]++`", "Sorting the 1,000,000 integers on every insertion", "A 2D matrix"],
    1, "A direct-addressed frequency array (bucket/tally array) provides instantaneous O(1) updates without object allocation or hash collision overhead.",
    "Direct-Address Frequency Array", "scenario", "easy", "Applied direct-addressed bucket array for high-performance counting.", "Use direct index mapping `counts[val]++` for bounded integer counting.")

add_q(ch3, "A game developer needs to represent a chess board. Each square holds a piece identifier. What is the most natural representation in Java?",
    ["`int[64]` 1D array", "`int[8][8]` 2D array", "`int[8][8][8]` 3D array", "64 discrete variables"],
    1, "An 8x8 2D array `int[8][8]` matches the 2D grid rank and file coordinates of a chessboard.",
    "Grid Representation Choice", "scenario", "easy", "Selected 2D matrix layout for grid-based game board.", "Represent 2D grids naturally with an 8x8 2D array.")

add_q(ch3, "A weather tracking program finds the hottest temperature recorded in a year across all cities: `double[][] cityTemps`. What is the correct nested search idiom?",
    ["`double max = cityTemps[0][0]; for (double[] row : cityTemps) for (double t : row) if (t > max) max = t;`", "`double max = 0; if (cityTemps.length > max) max = cityTemps.length;`", "`double max = cityTemps[0].length;`", "`Arrays.sort(cityTemps); return cityTemps[0][0];`"],
    0, "Iterating through every cell of the 2D array with enhanced for-loops and maintaining a running maximum initialized to `cityTemps[0][0]` finds the global maximum.",
    "Global Matrix Extremum Search", "scenario", "easy", "Implemented clean nested for-each traversal for global matrix maximum.", "Initialize `max` to `grid[0][0]` and scan all cells via nested for-each loops.")

add_q(ch3, "A warehouse scanning app reads RFID tags into an array. Due to radio reflections, duplicate tag IDs are captured. If the array is sorted, how can duplicates be filtered into a unique array in O(N) time?",
    ["By using a two-pointer pass copying elements only when `arr[i] != arr[i-1]`", "By running binary search on every element", "By reversing the array", "By filling the array with zeros"],
    0, "In a sorted array, duplicate elements are consecutive. A single two-pointer linear pass detects transitions `arr[i] != arr[i-1]` in O(N) time.",
    "Sorted Array Deduplication", "scenario", "medium", "Mastered two-pointer O(N) deduplication on sorted arrays.", "Compare adjacent elements `arr[i] != arr[i-1]` in a sorted array to filter duplicates in O(N) time.")

add_q(ch3, "A student records quiz scores: `int[] scores = {85, 92, 78, 90};`. They want to calculate the average score as a `double`. Which formula avoids integer division truncation?",
    ["`double avg = (double) sum / scores.length;`", "`double avg = sum / scores.length;`", "`double avg = (double)(sum / scores.length);`", "`double avg = sum / (scores.length * 1.0f);`"],
    0, "Casting `sum` to `double` before dividing ensures floating-point division is performed, preserving fractional averages.",
    "Array Average Precision", "scenario", "easy", "Avoided integer division truncation in array average calculation.", "Cast `sum` to `double` prior to division: `(double) sum / length`.")

add_q(ch3, "An audio synthesizer creates a 1-second sine wave at 44.1 kHz sampling rate. How many elements must the audio buffer array hold?",
    ["441", "4,410", "44,100", "441,000"],
    2, "A 44.1 kHz sampling rate requires 44,100 samples per second. An array of `new double[44100]` is required.",
    "Audio Buffer Sizing", "scenario", "easy", "Correctly sized audio sample buffer based on sampling frequency.", "At 44.1 kHz, 1 second of audio requires exactly 44,100 sample elements.")

with open("scratch/ch3.json", "w", encoding="utf-8") as f:
    json.dump(ch3, f, indent=2, ensure_ascii=False)

print(f"Generated {len(ch3)} questions for Chapter 3!")
