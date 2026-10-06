# -*- coding: utf-8 -*-
"""
Generate 100 questions each for:
- Chapter 5: Input & Output (File, Scanner, PrintWriter, Streams, try-with-resources, EOF, checked exceptions)
- Chapter 6: Classes & Objects (OOP, constructors, this, static vs instance, encapsulation, access modifiers)
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
# CHAPTER 5: INPUT & OUTPUT (100 QUESTIONS)
# =========================================================================
ch5 = []

# --- Ch 5: 1. Theory (25 Qs) ---
add_q(ch5, "What does the `java.io.File` class represent in Java?",
    ["A physical open data stream connected to disk", "An abstract representation of file and directory pathnames, not the actual file contents", "A database table on disk", "A temporary RAM buffer"],
    1, "`java.io.File` represents an abstract path to a file or directory on the file system. It provides metadata methods (`exists()`, `length()`, `delete()`), not methods to read/write file content bytes.",
    "File Class Abstraction", "theory", "easy", "Understands that File represents pathnames, not open streams.", "`java.io.File` encapsulates pathnames and metadata, not file stream contents.")

add_q(ch5, "Which checked exception must be handled or declared when instantiating a `Scanner` to read from a `File` (`new Scanner(new File(\"data.txt\"))`)?",
    ["`IOException` or `FileNotFoundException`", "`NullPointerException`", "`NoSuchElementException`", "`FileCorruptedException`"],
    0, "`new Scanner(File)` throws `java.io.FileNotFoundException` (a subclass of `IOException`), which is a checked exception that must be caught or declared in a `throws` clause.",
    "FileNotFoundException Checked Exception", "theory", "easy", "Knows that opening a file with Scanner requires handling FileNotFoundException.", "`FileNotFoundException` is a checked exception required when opening files with Scanner.")

add_q(ch5, "What is the primary advantage of the Java 7 'try-with-resources' statement (`try (PrintWriter pw = new PrintWriter(file)) { ... }`)?",
    ["It automatically executes file writes on a background thread", "It guarantees that the resource is automatically closed when the try block exits, even if an exception occurs, eliminating resource leaks", "It doubles file transfer speeds", "It prevents FileNotFoundException"],
    1, "Try-with-resources automatically closes any resource implementing `AutoCloseable`, ensuring streams are closed reliably without verbose `finally` blocks.",
    "Try-With-Resources Architecture", "theory", "easy", "Understands automatic resource closure via try-with-resources.", "Try-with-resources guarantees automatic closure of `AutoCloseable` streams.")

add_q(ch5, "What interface must a class implement to be eligible for use in a try-with-resources statement?",
    ["`java.io.Serializable`", "`java.lang.AutoCloseable`", "`java.lang.Cloneable`", "`java.lang.Runnable`"],
    1, "Any resource managed in a try-with-resources header must implement `java.lang.AutoCloseable` (or its subinterface `java.io.Closeable`).",
    "AutoCloseable Interface", "theory", "medium", "Identifies AutoCloseable as the contract for try-with-resources.", "Classes used in try-with-resources must implement `java.lang.AutoCloseable`.")

add_q(ch5, "What happens if you write data using `PrintWriter` but forget to invoke `.close()` or `.flush()`?",
    ["The data is immediately written to disk regardless", "Buffered data may remain stuck in memory buffers and never get written to the physical file on disk", "The operating system crashes", "A runtime BufferOverflowException is thrown"],
    1, "`PrintWriter` buffers output for efficiency. Failing to `close()` or `flush()` means buffered data may be lost when the JVM terminates.",
    "Buffer Flushing Importance", "theory", "medium", "Understands why streams must be flushed or closed.", "Always close or flush output streams to ensure buffered data is persisted to disk.")

add_q(ch5, "What is the difference between byte streams (`InputStream` / `OutputStream`) and character streams (`Reader` / `Writer`) in Java?",
    ["Byte streams read 8-bit raw binary data (images, audio); character streams handle 16-bit Unicode characters with automatic encoding translation", "Byte streams are for text; character streams are for binary", "Character streams are deprecated", "Byte streams cannot read files"],
    0, "Byte streams process raw 8-bit bytes (ideal for images, audio, PDFs). Character streams process 16-bit Unicode characters, handling character sets like UTF-8.",
    "Byte Streams vs Character Streams", "theory", "medium", "Distinguishes 8-bit binary streams from 16-bit character streams.", "Use Byte streams (`InputStream/OutputStream`) for binary and Character streams (`Reader/Writer`) for text.")

add_q(ch5, "How can you configure a `PrintWriter` to APPEND data to an existing file rather than overwriting it?",
    ["`new PrintWriter(file, true)`", "Wrap a `FileWriter` with append set to true: `new PrintWriter(new FileWriter(file, true))`", "`new PrintWriter(file).setAppend(true)`", "`new AppendPrintWriter(file)`"],
    1, "`PrintWriter` has no direct append constructor for `File`. To append, wrap a `FileWriter` instantiated with `append = true`: `new PrintWriter(new FileWriter(\"data.txt\", true))`.",
    "File Appending Pattern", "theory", "medium", "Knows the standard pattern for appending text to files in Java.", "Use `new PrintWriter(new FileWriter(fileName, true))` to append to existing files.")

add_q(ch5, "What exception is thrown if you call `scanner.nextInt()` when the next token in the file is the word \"Apple\"?",
    ["`NumberFormatException`", "`java.util.InputMismatchException`", "`NoSuchElementException`", "`FileNotFoundException`"],
    1, "`Scanner.nextInt()` throws `InputMismatchException` when the available token cannot be parsed into the expected integer type.",
    "InputMismatchException", "theory", "easy", "Recognized InputMismatchException when token type doesn't match.", "`Scanner.nextInt()` throws `InputMismatchException` on non-numeric tokens.")

add_q(ch5, "What exception is thrown if you call `scanner.next()` or `scanner.nextLine()` when there are no more tokens left in the file (End of File)?",
    ["`EOFException`", "`java.util.NoSuchElementException`", "`NullPointerException`", "`IndexOutOfBoundsException`"],
    1, "`Scanner` throws `NoSuchElementException` when attempting to read past the end of the input stream without checking `hasNext()`.",
    "End of File NoSuchElementException", "theory", "easy", "Knows NoSuchElementException occurs when reading past EOF with Scanner.", "Always check `scanner.hasNext()` before reading to avoid `NoSuchElementException` at EOF.")

add_q(ch5, "Which method of `java.io.File` should you invoke to test whether a physical file actually exists on disk before reading it?",
    ["`file.isAvailable()`", "`file.exists()`", "`file.canRead()`", "`file.isOpen()`"],
    1, "`file.exists()` returns `true` if the file or directory denoted by the abstract pathname actually exists on disk.",
    "File.exists() Method", "theory", "easy", "Knows File.exists() to verify file existence.", "Use `file.exists()` to check if a file is present on the file system.")

add_q(ch5, "What is the cross-platform way to reference the system file path separator character in Java (e.g. `/` on Unix vs `\\` on Windows)?",
    ["Hardcode `\"/\"` everywhere", "`File.separator` (or `System.getProperty(\"file.separator\")`)", "`Path.delimiter`", "`System.pathChar`"],
    1, "`File.separator` provides the platform-specific directory separator character (`\\` on Windows, `/` on Linux/macOS), ensuring cross-platform portability.",
    "Platform-Independent File.separator", "theory", "easy", "Knows File.separator for cross-platform filesystem paths.", "Use `File.separator` to avoid hardcoding platform-specific slashes.")

add_q(ch5, "What does `BufferedReader.readLine()` return when it reaches the end of the file (EOF)?",
    ["Throws an `EOFException`", "`null`", "An empty string `\"\"`", "`-1`"],
    1, "`BufferedReader.readLine()` returns `null` when the end of the stream is reached, allowing clean while-loop condition checks: `while ((line = br.readLine()) != null)`.",
    "BufferedReader EOF Marker", "theory", "medium", "Understands BufferedReader returns null at EOF.", "`BufferedReader.readLine()` returns `null` when End of File is reached.")

add_q(ch5, "What does `InputStream.read()` return when the end of the stream is reached?",
    ["`0`", "`null`", "`-1`", "Throws `EOFException`"],
    2, "The `read()` method of byte input streams returns an `int` representing the byte read (0 to 255), or `-1` to signal the End of File.",
    "Byte Stream EOF Marker", "theory", "medium", "Knows that byte read() returns -1 at EOF.", "`InputStream.read()` returns `-1` when End of File is reached.")

add_q(ch5, "Why is `BufferedReader` generally preferred over `Scanner` when processing very large text files (e.g. 500 MB)?",
    ["Scanner cannot read files larger than 10MB", "`BufferedReader` has a large default memory buffer (8KB) and performs simple line reads without regular expression parsing overhead, making it significantly faster", "`BufferedReader` runs on the GPU", "Scanner only works with System.in"],
    1, "`Scanner` uses complex regular expressions for tokenizing on every read. `BufferedReader` reads large chunks into memory and parses lines simply, making it dramatically faster for high-volume I/O.",
    "BufferedReader vs Scanner Performance", "theory", "medium", "Understands performance trade-offs between BufferedReader and Scanner.", "`BufferedReader` is much faster than `Scanner` because it avoids regex tokenization.")

add_q(ch5, "What happens when you create a new `PrintWriter(new File(\"existing.txt\"))` if the file already exists on disk?",
    ["It throws a `FileAlreadyExistsException`", "It truncates the file, completely overwriting its existing contents to an empty file", "It appends to the existing file", "It creates a backup file"],
    1, "Instantiating a `PrintWriter` directly with a `File` or file name truncates the target file to 0 bytes if it already exists, overwriting all previous contents.",
    "PrintWriter Default Overwrite", "theory", "medium", "Understands that new PrintWriter overwrites existing files.", "Instantiating `PrintWriter(File)` truncates and overwrites existing files.")

add_q(ch5, "What does `file.createNewFile()` do in Java?",
    ["Deletes the file and recreates it", "Atomically creates a new, empty file if and only if a file with this name does not yet exist, returning true; otherwise returns false", "Throws an exception if the file does not exist", "Creates a directory"],
    1, "`file.createNewFile()` atomically creates an empty file only if it doesn't already exist. It returns `true` if created, `false` if already present.",
    "File.createNewFile Atomic Semantics", "theory", "easy", "Knows File.createNewFile semantics.", "`file.createNewFile()` creates the file if it does not already exist.")

add_q(ch5, "How do you delete a file from the file system using the `File` class?",
    ["`file.remove()`", "`file.delete()`", "`file.erase()`", "`file.unlink()`"],
    1, "`file.delete()` deletes the file or empty directory denoted by the abstract pathname and returns a boolean indicating success.",
    "File.delete Method", "theory", "easy", "Knows File.delete() method.", "Use `file.delete()` to remove files or empty directories from disk.")

add_q(ch5, "What is the difference between an absolute path and a relative path in Java?",
    ["Absolute paths are relative to the user's home folder; relative paths are from root", "An absolute path begins from the file system root (e.g. `C:\\` or `/`); a relative path is resolved relative to the current working directory where the JVM was launched", "Relative paths only work on Windows", "There is no difference"],
    1, "Absolute paths specify the complete location from the root directory. Relative paths are resolved against the current working directory (`System.getProperty(\"user.dir\")`).",
    "Absolute vs Relative Paths", "theory", "easy", "Distinguishes absolute filesystem paths from relative paths.", "Relative paths resolve against the JVM's current working directory.")

add_q(ch5, "What does `file.mkdir()` versus `file.mkdirs()` do in Java?",
    ["`mkdir()` creates only the named directory (fails if parent folders are missing); `mkdirs()` creates the directory along with all necessary missing parent directories", "`mkdir()` is for files; `mkdirs()` is for folders", "`mkdirs()` creates hidden directories", "They are identical synonyms"],
    0, "`mkdir()` creates only the final directory if parent directories exist. `mkdirs()` creates the entire hierarchical folder path including any missing ancestor directories.",
    "mkdir vs mkdirs", "theory", "medium", "Distinguishes single-level mkdir from recursive mkdirs.", "Use `mkdirs()` to create nested directories including missing parents.")

add_q(ch5, "What is a standard character encoding in Java for international text portability across operating systems?",
    ["ASCII", "UTF-8", "Windows-1252", "ISO-8859-1"],
    1, "UTF-8 is the industry-standard variable-length character encoding capable of encoding all 1,112,064 valid character code points in Unicode.",
    "UTF-8 Character Encoding", "theory", "easy", "Recognizes UTF-8 as standard character encoding.", "UTF-8 is the universal standard for cross-platform text encoding.")

add_q(ch5, "Can `java.io.File` be used to rename or move a file on disk?",
    ["No, renaming requires deleting and creating a new file", "Yes, using `file.renameTo(destFile)`", "Yes, using `file.move()`", "Only in Java 17+"],
    1, "`file.renameTo(File dest)` renames or moves the file to the destination path atomically on most platforms.",
    "File.renameTo Method", "theory", "easy", "Knows File.renameTo() for renaming and moving files.", "Use `file.renameTo(newFile)` to rename or move a file.")

add_q(ch5, "What happens if an unhandled `FileNotFoundException` is thrown inside a method that does NOT declare `throws FileNotFoundException` or `throws IOException`?",
    ["The method compiles and ignores the exception", "The compiler issues an 'unreported exception; must be caught or declared to be thrown' error", "The JVM terminates at compile time", "It converts into an unchecked RuntimeException automatically"],
    1, "Because `FileNotFoundException` is a checked exception, the Java compiler enforces the Catch-or-Specify requirement. Failing to catch or declare it causes a compilation error.",
    "Catch-or-Specify Requirement", "theory", "easy", "Understands compiler enforcement of checked exceptions.", "Checked exceptions must be caught in a try-catch or declared with `throws`.")

add_q(ch5, "What is the standard stream represented by `System.in` in Java?",
    ["`java.io.PrintStream` connected to standard error", "`java.io.InputStream` connected to standard input (typically keyboard)", "`java.io.Reader`", "`java.io.FileReader`"],
    1, "`System.in` is a `java.io.InputStream` object representing the standard input stream provided by the host environment.",
    "System.in Stream Type", "theory", "easy", "Identifies System.in as an InputStream.", "`System.in` is an instance of `java.io.InputStream`.")

add_q(ch5, "What is the standard stream represented by `System.out` in Java?",
    ["`java.io.PrintWriter`", "`java.io.PrintStream` connected to standard output", "`java.io.Writer`", "`java.io.OutputStream`"],
    1, "`System.out` is an instance of `java.io.PrintStream` configured to write to the console's standard output.",
    "System.out Stream Type", "theory", "easy", "Identifies System.out as a PrintStream.", "`System.out` is an instance of `java.io.PrintStream`.")

add_q(ch5, "Can a try-with-resources statement declare multiple resources in a single try header?",
    ["No, only one resource per try statement", "Yes, separated by semicolons: `try (Scanner sc = ...; PrintWriter pw = ...) { ... }`", "Yes, separated by commas", "Only if they are of the exact same type"],
    1, "Multiple resources can be declared inside the try parentheses, separated by semicolons. They are closed in reverse order of declaration upon exit.",
    "Multiple Resources in Try-With-Resources", "theory", "medium", "Knows syntax for managing multiple resources in try-with-resources.", "Separate multiple resources with semicolons in the try header.")

# --- Ch 5: 2. Error Identification (25 Qs) ---
add_q(ch5, "Why does the following snippet fail to compile?\n```java\nimport java.util.Scanner;\nimport java.io.File;\npublic class Test {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(new File(\"input.txt\"));\n    }\n}\n```",
    ["Scanner cannot accept File objects", "Unreported exception `java.io.FileNotFoundException`; must be caught or declared to be thrown", "new File is missing path extension", "Scanner must be closed on line 5"],
    1, "Instantiating `Scanner(File)` throws checked exception `FileNotFoundException`. `main` must either wrap it in `try-catch` or declare `throws FileNotFoundException`.",
    "Unreported FileNotFoundException Error", "error", "easy", "Caught unhandled checked exception on File Scanner creation.", "Handle or declare `FileNotFoundException` when creating a Scanner from a File.")

add_q(ch5, "What error occurs at runtime in this code if `scores.txt` is an empty file?\n```java\nScanner sc = new Scanner(new File(\"scores.txt\"));\nint firstScore = sc.nextInt();\n```",
    ["Returns 0", "`java.util.NoSuchElementException`", "`NullPointerException`", "`ArrayIndexOutOfBoundsException`"],
    1, "Calling `sc.nextInt()` on an empty stream without verifying `sc.hasNextInt()` throws `NoSuchElementException` because no tokens are available.",
    "NoSuchElementException on Empty File", "error", "easy", "Spotted reading from empty file without hasNextInt() guard.", "Check `scanner.hasNextInt()` before calling `scanner.nextInt()` to prevent NoSuchElementException.")

add_q(ch5, "Identify the bug in this file-reading loop:\n```java\nScanner sc = new Scanner(new File(\"data.txt\"));\nwhile (sc.hasNext()) {\n    String first = sc.next();\n    String second = sc.next();\n}\n```",
    ["Syntax error in while condition", "If the file contains an odd number of tokens, the second `sc.next()` call throws `NoSuchElementException` on the final loop iteration", "sc.next() only reads numbers", "Infinite loop"],
    1, "Calling `sc.next()` twice per iteration assumes an even count of tokens. If odd, the second call fails with `NoSuchElementException` on EOF.",
    "Dual Token Read Without Check Bug", "error", "medium", "Caught unsafe dual-token consumption without intermediate hasNext() check.", "Ensure each `next()` call has a matching `hasNext()` check.")

add_q(ch5, "Why does this file write operation produce an empty 0-byte file?\n```java\nPrintWriter pw = new PrintWriter(new File(\"output.txt\"));\npw.println(\"Hello World\");\n// program terminates\n```",
    ["Hello World is an invalid string", "The PrintWriter was never closed (`pw.close()`) or flushed (`pw.flush()`), leaving buffered data in memory before program termination", "File output requires FileOutputStream", "output.txt is read-only"],
    1, "`PrintWriter` buffers output data. If the stream is not closed or flushed, data remains in the buffer and is discarded upon program exit.",
    "Unclosed PrintWriter Buffer Loss", "error", "easy", "Recognized data loss due to missing close/flush on PrintWriter.", "Always close PrintWriter (or use try-with-resources) to flush data to disk.")

add_q(ch5, "Why does the following try-with-resources snippet fail to compile?\n```java\nString text = \"Hello\";\ntry (text) {\n    System.out.println(text);\n}\n```",
    ["println cannot print text", "Incompatible types: String does not implement `java.lang.AutoCloseable`", "try cannot take variables", "text must be final"],
    1, "Only objects that implement `java.lang.AutoCloseable` can be used as resources in a try-with-resources statement. `String` does not implement `AutoCloseable`.",
    "Non-AutoCloseable in Try-With-Resources", "error", "medium", "Caught non-AutoCloseable object used in try-with-resources.", "Only classes implementing `AutoCloseable` can be managed in try-with-resources.")

add_q(ch5, "Identify the issue in this file path declaration on Windows:\n```java\nFile f = new File(\"C:\\data\\scores.txt\");\n```",
    ["File cannot accept drive letters", "Backslashes `\\d` and `\\s` are treated as escape sequences, causing compilation errors: illegal escape character", "scores.txt must be uppercase", "File path must end with a slash"],
    1, "In Java string literals, a backslash `\\` introduces an escape sequence. Single backslashes must be escaped (`\"C:\\\\data\\\\scores.txt\"`) or forward slashes used (`\"C:/data/scores.txt\"`).",
    "Unescaped Windows Backslash Error", "error", "easy", "Caught unescaped backslashes in Windows file path literal.", "Escape backslashes (`\\\\`) or use forward slashes (`/`) in path strings.")

add_q(ch5, "What exception is thrown when running this code if `file.txt` contains \"42.5\"?\n```java\nScanner sc = new Scanner(new File(\"file.txt\"));\nint val = sc.nextInt();\n```",
    ["`java.util.InputMismatchException`", "`NumberFormatException`", "`ClassCastException`", "`ArithmeticException`"],
    0, "`42.5` is a floating-point token. `sc.nextInt()` expects integer digits and throws `InputMismatchException`.",
    "Scanner Float Token InputMismatchException", "error", "easy", "Identified InputMismatchException on floating-point token.", "Use `sc.nextDouble()` when reading decimal numbers with Scanner.")

add_q(ch5, "Why does the following code fail to compile?\n```java\ntry (PrintWriter pw = new PrintWriter(\"out.txt\")) {\n    pw.println(\"Data\");\n}\npw.println(\"More Data\");\n```",
    ["PrintWriter cannot take filename strings", "Cannot find symbol: variable 'pw' is out of scope outside the try-with-resources block", "println cannot be called twice", "try must have a catch block"],
    1, "Resources declared in the try-with-resources header have their scope confined strictly to the try block. They are inaccessible after the block closes.",
    "Try-With-Resources Variable Scope Error", "error", "easy", "Recognized resource variable out of scope outside try block.", "Resources declared in try-with-resources are local to that try block.")

add_q(ch5, "What is the bug in this code intended to process comma-separated values?\n```java\nScanner sc = new Scanner(\"Apple,Orange,Banana\");\nwhile (sc.hasNext()) {\n    System.out.println(sc.next());\n}\n```",
    ["Throws ClassCastException", "Default Scanner delimiter is whitespace; since there are no spaces, it reads the entire string `Apple,Orange,Banana` in one single token instead of splitting by commas", "Only prints Apple", "sc cannot scan Strings"],
    1, "By default, `Scanner` splits on whitespace. To tokenize comma-separated text, set `sc.useDelimiter(\",\");`.",
    "Scanner Delimiter Configuration Bug", "error", "medium", "Spotted missing custom delimiter in comma-separated Scanner parsing.", "Call `sc.useDelimiter(\",\")` to split by commas instead of whitespace.")

add_q(ch5, "Identify the compilation error in this snippet:\n```java\nFile file = new File(\"data.txt\");\nfile.write(\"Hello\");\n```",
    ["data.txt must exist", "Cannot find symbol: method write(String) does not exist in `java.io.File`", "write must return boolean", "file must be opened first"],
    1, "`java.io.File` does not have write methods. To write to a file, wrap it in a `PrintWriter`, `FileWriter`, or `FileOutputStream`.",
    "File Class Has No Write Method Error", "error", "easy", "Recognized that java.io.File does not have read/write methods.", "Use `PrintWriter` or `FileWriter` to write text; `File` only manages path metadata.")

add_q(ch5, "What is wrong with this code that reads numbers until EOF?\n```java\nScanner sc = new Scanner(new File(\"nums.txt\"));\nwhile (sc.hasNextLine()) {\n    int n = sc.nextInt();\n    System.out.println(n);\n}\n```",
    ["nums.txt cannot contain numbers", "Mismatched condition: checking `hasNextLine()` does not guarantee the next token is an integer, leading to `InputMismatchException` or skipping lines without consuming newlines", "nextInt cannot print", "while must be for"],
    1, "Checking `hasNextLine()` verifies a line exists, but `nextInt()` only reads a token. If the line is empty or contains non-numeric text, `sc.nextInt()` fails. Check `sc.hasNextInt()` instead.",
    "Mismatched Scanner Check Condition", "error", "medium", "Caught condition mismatch between hasNextLine() and nextInt().", "Pair `hasNextInt()` with `nextInt()`, and `hasNextLine()` with `nextLine()`.")

add_q(ch5, "Why does this code cause a compiler error?\n```java\nFileReader fr = new FileReader(\"data.txt\");\nint c = fr.read();\n```",
    ["read() requires byte array", "Unreported exceptions: `FileNotFoundException` (from FileReader) and `IOException` (from read()) must be caught or declared", "c must be char", "FileReader is deprecated"],
    1, "Both `new FileReader` and `fr.read()` throw checked exceptions (`FileNotFoundException` and `IOException`) that must be handled or declared.",
    "Multiple Checked Exceptions in I/O", "error", "easy", "Recognized unhandled checked exceptions from FileReader and read().", "Handle both `FileNotFoundException` and `IOException` when working with FileReader.")

add_q(ch5, "What is the issue with this resource leak pattern?\n```java\nScanner sc = new Scanner(new File(\"data.txt\"));\nint x = sc.nextInt();\nint result = 100 / x; // If x is 0, ArithmeticException thrown!\nsc.close();\n```",
    ["data.txt is deleted", "If `x == 0`, `ArithmeticException` is thrown before `sc.close()` executes, leaving the file handle unclosed and leaking system resources", "Scanner cannot read into int", "result must be double"],
    1, "If an exception occurs before `sc.close()`, the close call is bypassed. Using try-with-resources guarantees closure even during exceptions.",
    "Resource Leak on Exception Bypass", "error", "medium", "Identified resource leak caused by unhandled exception bypassing close().", "Use try-with-resources to ensure streams close even when runtime exceptions occur.")

add_q(ch5, "Why does this code fail to compile?\n```java\nFile dir = new File(\"myFolder\");\nString[] files = dir.listFiles();\n```",
    ["myFolder must be absolute path", "Incompatible types: `dir.listFiles()` returns `File[]`, not `String[]` (use `dir.list()` for String array)", "listFiles cannot be called on File", "files must be List"],
    1, "`dir.listFiles()` returns an array of `File` objects (`File[]`). To obtain an array of file name strings, use `dir.list()`.",
    "listFiles vs list Return Type", "error", "easy", "Distinguished listFiles() returning File[] from list() returning String[].", "`dir.listFiles()` returns `File[]`; `dir.list()` returns `String[]`.")

add_q(ch5, "What error occurs in this code snippet?\n```java\nPrintWriter pw = new PrintWriter(\"data.txt\");\npw.write(65);\npw.close();\n```",
    ["Throws IllegalArgumentException", "No compile error, but `pw.write(65)` interprets 65 as an ASCII/Unicode character code, writing the character 'A' instead of the number 65 (use `print(65)` for numbers)", "data.txt cannot be created", "65 is out of bounds"],
    1, "`write(int)` writes the character corresponding to the integer code point (65 -> 'A'). To write the numeric text \"65\", call `pw.print(65)`.",
    "PrintWriter write vs print Semantic Bug", "error", "medium", "Caught semantic bug: write(int) writes char code point instead of formatted integer.", "Use `pw.print(n)` or `pw.println(n)` to write formatted numeric text; `pw.write(n)` writes a single char.")

add_q(ch5, "Why does the following snippet fail to compile?\n```java\nScanner sc = new Scanner(new File(\"input.txt\"));\ntry {\n    // read\n} finally {\n    sc.close();\n}\n```",
    ["finally cannot close Scanner", "The `new Scanner(File)` instantiation is outside the try block and its checked `FileNotFoundException` is not caught or declared", "sc is not visible in finally", "Scanner cannot be closed in finally"],
    1, "Because `new Scanner(new File(...))` is outside the `try` block, its checked `FileNotFoundException` remains unhandled.",
    "Instantiation Outside Try Block Error", "error", "medium", "Caught checked exception thrown prior to try block entry.", "Place file stream instantiations inside the try header or declare throws.")

add_q(ch5, "What is the bug in this line reading loop?\n```java\nScanner sc = new Scanner(new File(\"data.txt\"));\nwhile (sc.hasNextLine()) {\n    System.out.println(sc.next());\n}\n```",
    ["Throws NullPointerException", "Condition checks `hasNextLine()`, but body reads `sc.next()` (single word), desynchronizing token and line tracking and potentially causing infinite loop if spaces exist", "next() is deprecated", "sc must be closed"],
    1, "`sc.next()` consumes only one whitespace-delimited word, while `hasNextLine()` checks for line presence. If a line has multiple words, this causes confusing mismatch logic.",
    "hasNextLine vs next Token Desync", "error", "medium", "Identified desynchronization between hasNextLine() and next().", "Pair `hasNextLine()` strictly with `nextLine()` to consume entire lines.")

add_q(ch5, "Why does this file deletion attempt fail silently at runtime?\n```java\nFile dir = new File(\"myDirectory\");\nboolean success = dir.delete();\n```",
    ["dir must be a file, not a directory", "If the directory is non-empty (contains files or subdirectories), `dir.delete()` fails and returns `false` without throwing an exception", "delete() is not a method of File", "Requires administrator privileges in all cases"],
    1, "In Java, `File.delete()` can only delete directories that are completely empty. If files reside inside, it fails and returns `false`.",
    "Non-Empty Directory Deletion Failure", "error", "easy", "Understands that File.delete() requires directories to be empty.", "Directories must be empty before `file.delete()` can delete them.")

add_q(ch5, "What is the issue with this `FileWriter` instantiation?\n```java\nFileWriter fw = new FileWriter(\"data.txt\", false);\n```",
    ["false is an illegal parameter", "No syntax error, but `false` explicitly tells FileWriter to OVERWRITE the file instead of appending", "FileWriter cannot take boolean", "data.txt must exist"],
    1, "The boolean parameter in `FileWriter(fileName, append)` controls append mode. Setting `false` explicitly overwrites existing file content.",
    "FileWriter Append Parameter Flag", "error", "easy", "Recognized append flag boolean parameter in FileWriter.", "Pass `true` as the second parameter to append to a file: `new FileWriter(name, true)`.")

add_q(ch5, "Why does this code throw `NullPointerException`?\n```java\nFile dir = new File(\"nonExistentFolder\");\nfor (File f : dir.listFiles()) {\n    System.out.println(f.getName());\n}\n```",
    ["f.getName() is null", "If the path does not exist or is not a directory, `dir.listFiles()` returns `null`, causing the enhanced for-loop to throw `NullPointerException`", "File cannot be iterated", "println cannot print filenames"],
    1, "`listFiles()` returns `null` (not an empty array) if the abstract pathname does not denote an existing directory. Iterating over `null` triggers `NullPointerException`.",
    "listFiles Null Return Trap", "error", "medium", "Caught NullPointerException from listFiles() on non-existent directory.", "Check `dir.exists() && dir.isDirectory()` before calling `dir.listFiles()`.")

add_q(ch5, "What compilation error occurs here?\n```java\nFile f = new File(\"data.txt\");\nScanner sc = new Scanner(f);\nsc.close();\nint x = sc.nextInt();\n```",
    ["sc.close() cannot be called", "No compile error, but throws `IllegalStateException: Scanner closed` at runtime when reading from closed Scanner", "data.txt is deleted", "x must be String"],
    1, "Calling read methods on a `Scanner` that has already been closed throws `java.lang.IllegalStateException: Scanner closed`.",
    "Reading from Closed Scanner", "error", "easy", "Identified IllegalStateException when reading closed Scanner.", "Cannot read tokens from a Scanner after invoking `.close()`.")

add_q(ch5, "Why does this code fail to compile?\n```java\ntry (Scanner sc = new Scanner(new File(\"in.txt\"))) {\n    int a = sc.nextInt();\n} catch (IOException e) {\n    System.out.println(e.getMessage());\n}\n```",
    ["Scanner does not throw IOException", "It compiles cleanly because `FileNotFoundException` is a subclass of `IOException` and is caught", "in.txt cannot be read", "catch block must be FileNotFoundException only"],
    1, "Because `FileNotFoundException` extends `IOException`, catching `IOException` covers `FileNotFoundException` completely. The code compiles cleanly with no error.",
    "Polymorphic Exception Catching in I/O", "error", "medium", "Recognized polymorphic catching of FileNotFoundException via IOException.", "Catching `IOException` safely catches `FileNotFoundException` as a subtype.")

add_q(ch5, "Identify the bug in this line count algorithm:\n```java\nScanner sc = new Scanner(new File(\"doc.txt\"));\nint lines = 0;\nwhile (sc.hasNextLine()) {\n    lines++;\n}\n```",
    ["Throws ClassCastException", "Infinite loop: `sc.hasNextLine()` checks for a line, but `sc.nextLine()` is never called inside the loop to consume it, causing `hasNextLine()` to remain true perpetually", "lines cannot be incremented", "lines starts at 0"],
    1, "Checking `hasNextLine()` without calling `nextLine()` creates an infinite loop because the input position never advances.",
    "Infinite Loop Missing nextLine Advance", "error", "easy", "Spotted infinite loop caused by missing nextLine() advancement.", "Call `sc.nextLine()` inside the loop to advance the stream position.")

add_q(ch5, "What is wrong with this code?\n```java\nPrintWriter pw = new PrintWriter(new File(\"res.txt\"));\npw.printf(\"Total: %d\", 45.5);\n```",
    ["res.txt cannot be created", "Throws `IllegalFormatConversionException` at runtime because `%d` cannot format a floating-point number (45.5)", "pw cannot call printf", "Total must be in single quotes"],
    1, "`%d` expects an integer argument. Passing floating-point literal `45.5` causes a runtime `IllegalFormatConversionException`.",
    "PrintWriter Formatted Output Type Mismatch", "error", "easy", "Spotted printf specifier mismatch in PrintWriter output.", "Use `%f` or `%.2f` for decimal numbers in `printf`.")

add_q(ch5, "Why does this try-with-resources statement produce an error?\n```java\nScanner sc = new Scanner(System.in);\ntry (sc) {\n    int n = sc.nextInt();\n}\n// in Java 8:\n```",
    ["Scanner cannot be closed", "In Java 8, resources in try-with-resources must be freshly declared inside the parentheses (`try (Scanner sc = ...)`); passing existing variables `try (sc)` was only added in Java 9", "System.in is read-only", "n is out of scope"],
    1, "In Java 8, try-with-resources strictly required a new variable declaration within the header. Using effectively final existing variables was introduced in Java 9.",
    "Java 8 Try-With-Resources Syntax Limitation", "error", "hard", "Mastered version differences in try-with-resources variable declaration.", "In Java 8, declare resources directly in the try parentheses: `try (Scanner sc = ...)`.")

# --- Ch 5: 3. Output (25 Qs) ---
add_q(ch5, "What is the output of this code if \"test.txt\" contains the text `\"10 20 30\"`?\n```java\nScanner sc = new Scanner(new File(\"test.txt\"));\nint sum = 0;\nwhile (sc.hasNextInt()) {\n    sum += sc.nextInt();\n}\nSystem.out.println(sum);\n```",
    ["60", "10", "30", "0"],
    0, "The scanner reads 10, 20, and 30 sequentially. `sum = 10 + 20 + 30 = 60`.",
    "File Integer Sum Output", "output", "easy", "Computed sum of tokens read from file via Scanner.", "Tokens 10, 20, 30 sum to 60.")

add_q(ch5, "What does this code print given a string-backed Scanner?\n```java\nScanner sc = new Scanner(\"One Two Three Four\");\nsc.next();\nString val = sc.next();\nSystem.out.println(val);\n```",
    ["One", "Two", "Three", "Four"],
    1, "The first `sc.next()` consumes \"One\". The second `sc.next()` reads \"Two\". Outputs `Two`.",
    "Sequential Token Consumption Output", "output", "easy", "Tracked token pointer progression in Scanner.", "First next() reads 'One'; second next() reads 'Two'.")

add_q(ch5, "What is the output of this code?\n```java\nScanner sc = new Scanner(\"100 Java 200\");\nint a = sc.nextInt();\nString b = sc.next();\nint c = sc.nextInt();\nSystem.out.println(a + c + \" \" + b);\n```",
    ["300 Java", "100200 Java", "100 Java 200", "InputMismatchException"],
    0, "`a = 100`, `b = \"Java\"`, `c = 200`. `a + c = 300`. Outputs `\"300 Java\"`.",
    "Mixed Token Parsing Output", "output", "easy", "Parsed mixed integer and string tokens.", "`100 + 200 = 300`, followed by String \"Java\".")

add_q(ch5, "What is the output of this code?\n```java\nScanner sc = new Scanner(\"cat,dog,bird\");\nsc.useDelimiter(\",\");\nint count = 0;\nwhile (sc.hasNext()) {\n    sc.next();\n    count++;\n}\nSystem.out.println(count);\n```",
    ["1", "3", "2", "0"],
    1, "Delimiter `,` splits into 3 tokens: `\"cat\"`, `\"dog\"`, `\"bird\"`. Count is 3.",
    "Custom Delimiter Token Count", "output", "easy", "Counted tokens using custom comma delimiter.", "3 comma-separated tokens yield count = 3.")

add_q(ch5, "What does the following snippet print?\n```java\nFile f = new File(\"nonexistent_file_12345.xyz\");\nSystem.out.println(f.exists() + \" \" + f.length());\n```",
    ["false 0", "true 0", "false -1", "NullPointerException"],
    0, "For non-existent files, `exists()` returns `false` and `length()` returns `0L` (0 bytes). Outputs `false 0`.",
    "Non-Existent File Metadata Output", "output", "easy", "Understands File metadata return values for non-existent paths.", "`f.exists()` is false; `f.length()` is 0 for non-existent files.")

add_q(ch5, "What is the output of this code?\n```java\nScanner sc = new Scanner(\"12\\n34\\n56\");\nint count = 0;\nwhile (sc.hasNextLine()) {\n    sc.nextLine();\n    count++;\n}\nSystem.out.println(count);\n```",
    ["1", "2", "3", "6"],
    2, "The string contains 3 newline-separated lines (`12`, `34`, `56`). `count` is 3.",
    "Line Count Scanner Output", "output", "easy", "Counted newline-separated lines via Scanner.", "3 lines separated by \\n yield count = 3.")

add_q(ch5, "What is printed by this code?\n```java\nString s = \"42\";\nScanner sc = new Scanner(s);\nSystem.out.println(sc.hasNextInt() + \" \" + sc.hasNextDouble());\n```",
    ["true true", "true false", "false true", "false false"],
    0, "An integer token like \"42\" can be interpreted as both a valid `int` (42) and a valid `double` (42.0). Both return `true`.",
    "Scanner Dual Number Match Output", "output", "medium", "Understands that integer tokens are also valid doubles for Scanner.", "\"42\" satisfies both `hasNextInt()` and `hasNextDouble()`.")

add_q(ch5, "What does this code print?\n```java\nScanner sc = new Scanner(\"10 20 stop 30 40\");\nint sum = 0;\nwhile (sc.hasNextInt()) {\n    sum += sc.nextInt();\n}\nSystem.out.println(sum);\n```",
    ["100", "30", "10", "InputMismatchException"],
    1, "`hasNextInt()` evaluates to `true` for 10 and 20 (`sum = 30`). When it encounters \"stop\", `hasNextInt()` returns `false`, terminating the loop immediately without an exception. Prints 30.",
    "Non-Int Token Loop Termination", "output", "medium", "Recognized clean loop termination upon non-numeric token.", "Encountering non-int token 'stop' causes `hasNextInt()` to return false cleanly.")

add_q(ch5, "What is the output of this code?\n```java\nFile f = new File(\"parent/child/test.txt\");\nSystem.out.println(f.getName());\n```",
    ["test.txt", "child/test.txt", "parent/child/test.txt", "test"],
    0, "`f.getName()` extracts only the simple name of the file (the last path component), which is `test.txt`.",
    "File.getName Output", "output", "easy", "Extracted simple file name via File.getName().", "`f.getName()` returns the terminal file name `test.txt`.")

add_q(ch5, "What does this snippet print?\n```java\nScanner sc = new Scanner(\"A B C\");\nint count = 0;\nwhile (sc.hasNext()) {\n    count++;\n    if (count == 2) break;\n    sc.next();\n}\nSystem.out.println(count);\n```",
    ["1", "2", "3", "0"],
    1, "`count` increments to 1, consumes 'A'. Loop checks `hasNext()`, `count` increments to 2, hits `break`. Output is 2.",
    "Scanner Loop Break Counter", "output", "easy", "Traced early loop break in Scanner token loop.", "Loop breaks when `count == 2`, outputting 2.")

add_q(ch5, "What is the output of this code?\n```java\nScanner sc = new Scanner(\"100\\n200\");\nint a = sc.nextInt();\nString rem = sc.nextLine();\nSystem.out.println(\"[\" + rem + \"]\");\n```",
    ["[\\n]", "[200]", "[]", "[100]"],
    2, "`sc.nextInt()` consumes `100`, leaving the newline character in the line. `sc.nextLine()` immediately reads the empty remainder of the first line, resulting in an empty string `\"\"`. Prints `[]`.",
    "Scanner Leftover Newline Output", "output", "medium", "Mastered Scanner newline buffer consumption output.", "`sc.nextLine()` consumes the empty remainder of the line following nextInt(), producing `[]`.")

add_q(ch5, "What does this code output?\n```java\nScanner sc = new Scanner(\"1 2 3 4 5\");\nint sum = 0;\nwhile (sc.hasNext()) {\n    int n = Integer.parseInt(sc.next());\n    if (n % 2 != 0) sum += n;\n}\nSystem.out.println(sum);\n```",
    ["9", "6", "15", "10"],
    0, "Odd numbers are 1, 3, 5. Their sum is `1 + 3 + 5 = 9`.",
    "Parsed Token Odd Sum", "output", "easy", "Summed odd tokens parsed with Integer.parseInt.", "Odd numbers 1, 3, 5 sum to 9.")

add_q(ch5, "What does this snippet print?\n```java\nFile f = new File(\"/home/user/docs\");\nSystem.out.println(f.getParent());\n```",
    ["/home/user", "/home", "docs", "null"],
    0, "`f.getParent()` returns the pathname string of the parent directory: `/home/user`.",
    "File.getParent Output", "output", "easy", "Identified parent directory path component.", "`f.getParent()` yields `/home/user`.")

add_q(ch5, "What is the output of this code?\n```java\nScanner sc = new Scanner(\"true false true\");\nint trueCount = 0;\nwhile (sc.hasNextBoolean()) {\n    if (sc.nextBoolean()) trueCount++;\n}\nSystem.out.println(trueCount);\n```",
    ["1", "2", "3", "0"],
    1, "Tokens are booleans: `true`, `false`, `true`. Two are true, so `trueCount` is 2.",
    "Boolean Scanner Token Count", "output", "easy", "Counted true boolean tokens with Scanner.", "Two `true` tokens yield trueCount = 2.")

add_q(ch5, "What is printed by this code?\n```java\nScanner sc = new Scanner(\"Alpha Beta Gamma\");\nString res = \"\";\nwhile (sc.hasNext()) {\n    res = sc.next() + \" \" + res;\n}\nSystem.out.println(res.trim());\n```",
    ["Gamma Beta Alpha", "Alpha Beta Gamma", "Gamma Alpha", "Beta Alpha Gamma"],
    0, "Each token is prepended: \"Alpha \" -> \"Beta Alpha \" -> \"Gamma Beta Alpha \". Result is `Gamma Beta Alpha`.",
    "Reversed Token Concatenation", "output", "medium", "Traced reverse prepending of tokens.", "Tokens prepended sequentially produce `Gamma Beta Alpha`.")

add_q(ch5, "What does this code print?\n```java\nFile f = new File(\"a/b/c/file.txt\");\nSystem.out.println(f.getName().endsWith(\".txt\"));\n```",
    ["true", "false", "NullPointerException", "Error"],
    0, "`f.getName()` is `\"file.txt\"`, which ends with `\".txt\"`, printing `true`.",
    "File Extension Verification Output", "output", "easy", "Verified file extension matching.", "`file.txt` ends with `.txt` -> true.")

add_q(ch5, "What is the output of this code?\n```java\nScanner sc = new Scanner(\"10, 20, 30\");\nsc.useDelimiter(\",\\\\s*\");\nint sum = 0;\nwhile (sc.hasNextInt()) {\n    sum += sc.nextInt();\n}\nSystem.out.println(sum);\n```",
    ["60", "10", "0", "InputMismatchException"],
    0, "Delimiter `,\\s*` matches commas followed by optional spaces. Tokens are clean integers 10, 20, 30. Sum is 60.",
    "Regex Delimiter Scanner Output", "output", "medium", "Understands regex delimiters in Scanner.", "Cleanly delimited integers sum to 60.")

add_q(ch5, "What does this code print?\n```java\nScanner sc = new Scanner(\"Line1\\nLine2\\nLine3\");\nint count = 0;\nwhile (sc.hasNext()) {\n    sc.next();\n    count++;\n}\nSystem.out.println(count);\n```",
    ["3", "1", "6", "0"],
    0, "`sc.next()` treats newlines as standard whitespace delimiters. It consumes 3 tokens: `Line1`, `Line2`, `Line3`. Count is 3.",
    "Whitespace Token Traversal Output", "output", "easy", "Recognized newlines as whitespace delimiters for next().", "Newlines act as whitespace delimiters; 3 tokens counted.")

add_q(ch5, "What is the output of this code?\n```java\nFile f = new File(\"test.dat\");\nboolean isDir = f.isDirectory();\nSystem.out.println(isDir);\n```",
    ["false", "true", "NullPointerException", "Compilation error"],
    0, "If `test.dat` does not exist or is a regular file, `f.isDirectory()` returns `false`.",
    "File.isDirectory Evaluation", "output", "easy", "Evaluated isDirectory on non-directory pathname.", "`isDirectory()` returns false for files or non-existent paths.")

add_q(ch5, "What is printed by this code?\n```java\nScanner sc = new Scanner(\"5 10 15\");\nint p = 1;\nwhile (sc.hasNextInt()) {\n    p *= sc.nextInt();\n}\nSystem.out.println(p);\n```",
    ["750", "30", "150", "50"],
    0, "`5 * 10 * 15 = 50 * 15 = 750`.",
    "Scanner Token Product Output", "output", "easy", "Calculated cumulative product of scanned tokens.", "`5 * 10 * 15 = 750`.")

add_q(ch5, "What does this code output?\n```java\nScanner sc = new Scanner(\"apple   banana\\tcherry\");\nint count = 0;\nwhile (sc.hasNext()) {\n    sc.next();\n    count++;\n}\nSystem.out.println(count);\n```",
    ["3", "1", "4", "5"],
    0, "Scanner treats any sequence of spaces, multiple spaces, and tabs as a single delimiter. It reads 3 words: count = 3.",
    "Variable Whitespace Token Parsing", "output", "easy", "Handled variable whitespace and tabs cleanly.", "Multiple spaces and tabs collapse into delimiters; 3 tokens.")

add_q(ch5, "What is the output of this code?\n```java\nScanner sc = new Scanner(\"123 456\");\nint a = sc.nextInt();\nint b = sc.nextInt();\nSystem.out.println(b - a);\n```",
    ["333", "-333", "0", "123456"],
    0, "`a = 123`, `b = 456`. `456 - 123 = 333`.",
    "Token Difference Output", "output", "easy", "Computed difference between two consecutive tokens.", "`456 - 123 = 333`.")

add_q(ch5, "What does this code print?\n```java\nScanner sc = new Scanner(\"hello world\");\nSystem.out.println(sc.next().toUpperCase() + \" \" + sc.next().length());\n```",
    ["HELLO 5", "HELLO 11", "HELLO WORLD", "hello 5"],
    0, "First token: `\"hello\"` -> `\"HELLO\"`. Second token: `\"world\"` -> length is 5. Prints `HELLO 5`.",
    "Token Method Invocations", "output", "easy", "Evaluated String methods on consecutive scanned tokens.", "Outputs `HELLO 5`.")

add_q(ch5, "What is the output of this code?\n```java\nScanner sc = new Scanner(\"10 20\");\nsc.close();\ntry {\n    sc.next();\n} catch (IllegalStateException e) {\n    System.out.println(\"Caught\");\n}\n```",
    ["Caught", "10", "Nothing", "NullPointerException"],
    0, "Invoking `next()` on a closed Scanner throws `IllegalStateException`, which is caught and prints `Caught`.",
    "Closed Scanner Exception Handling", "output", "medium", "Caught IllegalStateException on closed Scanner invocation.", "Reading closed Scanner throws IllegalStateException; caught cleanly.")

add_q(ch5, "What does this code print?\n```java\nScanner sc = new Scanner(\"3 0 2\");\nint total = 0;\nwhile (sc.hasNextInt()) {\n    int n = sc.nextInt();\n    if (n == 0) continue;\n    total += n;\n}\nSystem.out.println(total);\n```",
    ["5", "3", "0", "2"],
    0, "3 is added (total=3); 0 is skipped by continue; 2 is added (total=5). Outputs 5.",
    "Token Sum with Filter Continue", "output", "easy", "Filtered scanned tokens using continue.", "`3 + 2 = 5`.")

# --- Ch 5: 4. Scenario (25 Qs) ---
add_q(ch5, "You are building an audit logging service for a banking gateway that records every fund transfer. Multiple transactions must be written over time to `transfers.log`. Why should you use `FileWriter` with `append = true` rather than standard `PrintWriter`?",
    ["Standard PrintWriter does not support strings", "Standard PrintWriter constructor `new PrintWriter(file)` truncates the log file to 0 bytes on every restart, erasing all prior audit records; `append = true` preserves history", "Append mode encrypts files automatically", "FileWriter uses less disk space"],
    1, "Overwriting mode erases existing data. Audit trails require append mode (`new FileWriter(file, true)`) to preserve chronological historical logs.",
    "Audit Log Appending Design", "scenario", "easy", "Understands why append mode is critical for transaction audit logging.", "Always use append mode for audit logs to avoid overwriting historical records.")

add_q(ch5, "A university grading system processes a CSV file `students.csv` containing 5,000 student marks. Some rows have missing or corrupted scores. How should the file reader handle an `InputMismatchException` on a corrupted line without aborting the remaining 4,999 students?",
    ["Let the program crash and restart", "Wrap the line parsing in a try-catch block inside the loop, log a warning with `e.getMessage()`, skip the invalid row with `sc.nextLine()`, and continue reading", "Delete the file", "Rely on the OS to fix the CSV"],
    1, "Resilient ETL pipelines catch parsing exceptions inside the loop, log the bad record, flush to the next line, and continue processing remaining rows.",
    "Resilient Batch File Parsing", "scenario", "medium", "Implemented resilient exception recovery inside file processing loops.", "Catch parsing exceptions inside the read loop to skip corrupt rows and continue processing.")

add_q(ch5, "A mobile app downloads a temporary configuration file `config.tmp`. To ensure the file does not remain on user devices if the app crashes, what method of `java.io.File` should be invoked immediately after creation?",
    ["`file.deleteNow()`", "`file.deleteOnExit()`", "`file.makeTemporary()`", "`file.purge()`"],
    1, "`file.deleteOnExit()` registers the file for automatic deletion when the JVM terminates normally.",
    "deleteOnExit Cleanup Pattern", "scenario", "medium", "Knows deleteOnExit for automatic temporary file cleanup.", "Use `file.deleteOnExit()` to automatically clean up temporary files upon JVM exit.")

add_q(ch5, "A file upload microservice receives high-resolution profile pictures. Why MUST binary streams (`FileInputStream` / `FileOutputStream`) be used instead of character streams (`FileReader` / `FileWriter`)?",
    ["FileReader cannot open files larger than 1MB", "Character streams interpret bytes as character encodings (e.g. UTF-8), corrupting raw binary bytes (like PNG/JPEG headers and compressed byte sequences) during translation", "FileInputStream uses GPU memory", "Image files cannot have file extensions"],
    1, "Character streams translate bytes into characters based on character sets. Arbitrary binary data (like images) contains byte sequences that are invalid characters, causing corruption.",
    "Binary Data Integrity with Byte Streams", "scenario", "medium", "Understands why binary data requires byte streams to avoid encoding corruption.", "Never use character streams for binary files (images, audio); use `InputStream`/`OutputStream`.")

add_q(ch5, "You are developing a cross-platform desktop application running on Windows, macOS, and Linux. How should you construct a path to a configuration file inside the user's home folder `\"app/config.json\"`?",
    ["Hardcode `\"C:\\\\app\\\\config.json\"`", "Use `System.getProperty(\"user.home\") + File.separator + \"app\" + File.separator + \"config.json\"` (or `java.nio.file.Path.of(...)`)", "Hardcode `\"/home/app/config.json\"`", "Use relative path `\"../config.json\"`"],
    1, "Combining `System.getProperty(\"user.home\")` with `File.separator` guarantees correct path resolution across all operating systems without hardcoded path assumptions.",
    "Cross-Platform Path Construction", "scenario", "easy", "Constructed portable cross-platform file paths using system properties.", "Use `user.home` and `File.separator` for cross-platform file path resolution.")

add_q(ch5, "A medical device logs patient heartbeat data every millisecond. A developer observes that writing to disk on every reading causes severe CPU latency. What I/O enhancement resolves this bottleneck?",
    ["Write to console instead", "Wrap the output stream in a `BufferedWriter` or `BufferedOutputStream` to accumulate writes in an in-memory buffer before flushing to disk in bulk", "Delete old readings", "Use Scanner to write data"],
    1, "Buffering aggregates many small byte writes into large memory blocks, minimizing costly hardware disk write system calls.",
    "Buffered I/O Performance Optimization", "scenario", "easy", "Applied buffered streams to eliminate disk I/O bottlenecks.", "Wrap streams in `BufferedWriter` or `BufferedOutputStream` to minimize hardware disk operations.")

add_q(ch5, "An e-commerce receipt generator writes PDF receipts. If disk space runs out during writing, a `IOException` occurs. How does try-with-resources guarantee that file handles are not leaked in the operating system?",
    ["It automatically deletes the corrupted file", "It calls `close()` in an implicit finally block, guaranteeing release of OS file descriptors regardless of whether the try block completes or throws an exception", "It retries the write operation 3 times", "It frees RAM memory"],
    1, "Try-with-resources guarantees resource release via an automatic finally block, preventing operating system file handle exhaustion even during disk errors.",
    "Resource Leak Prevention Under Failure", "scenario", "medium", "Understands OS file descriptor lifecycle management via try-with-resources.", "Try-with-resources guarantees `close()` execution even during I/O errors.")

add_q(ch5, "A data migration script processes a 10 GB transaction log. Why will calling `Files.readAllLines(path)` cause an `OutOfMemoryError: Java heap space`, and what should you do instead?",
    ["Files.readAllLines only works on text under 100 bytes", "`readAllLines` attempts to load the entire 10 GB file into heap memory at once; instead, stream lines lazily using `BufferedReader` or `Files.lines()`", "Log files cannot be read in Java", "Files must be split manually in Windows Explorer"],
    1, "`readAllLines` loads all lines into a `List<String>` in RAM, crashing on files larger than heap memory. `BufferedReader.readLine()` or `Files.lines()` streams one line at a time in O(1) memory.",
    "Streaming Large Files vs In-Memory Buffering", "scenario", "hard", "Avoided heap exhaustion by streaming large files line-by-line.", "Stream large files with `BufferedReader` to process records in O(1) memory.")

add_q(ch5, "A CLI utility accepts user commands until the user presses Ctrl+D (Unix) or Ctrl+Z (Windows), signaling End of File (EOF). How should the input loop detect this condition cleanly?",
    ["`while (true) { String s = sc.nextLine(); }`", "`while (sc.hasNextLine()) { String s = sc.nextLine(); process(s); }`", "`if (sc.next() == null)`", "`while (System.in.available() > 0)`"],
    1, "`sc.hasNextLine()` returns `false` when EOF (Ctrl+D / Ctrl+Z) is reached on `System.in`, allowing clean termination.",
    "Console EOF Detection Pattern", "scenario", "easy", "Used hasNextLine() to detect console EOF cleanly.", "`sc.hasNextLine()` returns false when EOF (Ctrl+D/Ctrl+Z) is reached.")

add_q(ch5, "A backup routine copies a folder structure. Before creating a file in a subfolder `backup/2026/oct/data.txt`, the directory hierarchy does not yet exist. What method call ensures all parent folders are created first?",
    ["`new File(\"backup/2026/oct\").mkdirs();`", "`new File(\"backup/2026/oct\").mkdir();`", "`new File(\"backup/2026/oct/data.txt\").createNewFile();`", "`System.createDirectory();`"],
    0, "`mkdirs()` creates the target directory along with all non-existent ancestor directories in the path, preventing `FileNotFoundException` when creating the nested file.",
    "Recursive Parent Directory Creation", "scenario", "medium", "Applied mkdirs() to ensure parent directory paths exist before file creation.", "Call `parentDir.mkdirs()` to create all necessary parent directories before creating nested files.")

add_q(ch5, "A point-of-sale terminal saves daily receipt totals to `receipts.txt`. If the application crashes unexpectedly mid-day, how can you ensure the latest receipt was actually written to the disk platter immediately after `pw.println(receipt)`?",
    ["Reboot the POS terminal", "Call `pw.flush();` immediately after writing the receipt to force the buffer to commit to disk", "Close and reopen the file after every character", "Set PrintWriter to read-only"],
    1, "`flush()` forces any bytes buffered in memory to be written immediately to the underlying file, guaranteeing durability before a potential crash.",
    "Durability via Explicit Buffer Flushing", "scenario", "easy", "Understands immediate persistence via explicit flush().", "Call `pw.flush()` to force immediate disk synchronization for critical records.")

add_q(ch5, "A student records quiz scores in a text file. Each row contains: `StudentName Score`. For example: `Alice 95`. If student names can contain spaces (e.g. `Mary Jane 88`), why does calling `sc.next()` followed by `sc.nextInt()` fail, and how is it fixed?",
    ["`sc.next()` only reads 'Mary', treating 'Jane' as the score and throwing `InputMismatchException`; read the entire line with `sc.nextLine()` and parse from the last space", "Scanner cannot read letters", "Change Scanner to BufferedReader without parsing", "Scores must be written first"],
    0, "`sc.next()` breaks on whitespace. For multi-word names, reading the whole line with `nextLine()` and splitting at the last space or delimiter correctly isolates the name from the trailing score.",
    "Multi-Word Token Parsing Strategy", "scenario", "medium", "Handled multi-word tokens with trailing numbers cleanly.", "Read full lines with `nextLine()` and split on the last delimiter when names contain spaces.")

add_q(ch5, "A cloud service needs to atomic-rename a completed upload from `upload.part` to `upload.final`. Why is `file.renameTo()` preferred over reading and rewriting all bytes?",
    ["renameTo encrypts the payload", "`renameTo()` performs an O(1) filesystem metadata update without moving or copying raw byte data on disk, completing instantaneously", "renameTo runs on the network", "rewriting bytes is forbidden in Java"],
    1, "On the same filesystem volume, `renameTo()` updates only directory pointer metadata in O(1) time, avoiding reading/writing gigabytes of data.",
    "Atomic O(1) File Renaming", "scenario", "medium", "Understands O(1) filesystem metadata renaming vs byte copying.", "`renameTo()` updates file metadata in O(1) time without copying bytes.")

add_q(ch5, "An automated report generator exports a table of sales figures to `report.txt`. Columns must align perfectly: Item (width 20, left-aligned), Quantity (width 8, right-aligned), Price (width 10, right-aligned, 2 decimals). Which statement achieves this?",
    ["`pw.printf(\"%-20s %8d %10.2f%n\", item, qty, price);`", "`pw.println(item + \" \" + qty + \" \" + price);`", "`pw.printf(\"%20s %-8d %.2f\", item, qty, price);`", "`pw.write(item + qty + price);`"],
    0, "`%-20s` left-aligns strings; `%8d` right-aligns integers; `%10.2f` right-aligns decimals; `%n` adds a portable newline.",
    "Column-Aligned File Reporting", "scenario", "medium", "Engineered column-aligned formatted file output with printf.", "Use `%-20s %8d %10.2f%n` for aligned tabular report generation.")

add_q(ch5, "A malware scanner checks file extensions. A user renames `virus.exe` to `virus.txt.exe`. How should the scanner isolate the TRUE file extension?",
    ["Find the first period `indexOf('.')`", "Find the last period `lastIndexOf('.')` and extract the substring following it", "Check if filename contains \"exe\"", "Split by spaces"],
    1, "Files can have multiple dots (e.g. `archive.tar.gz`). The true file extension is the substring following the final dot: `name.substring(name.lastIndexOf('.') + 1)`.",
    "File Extension Isolation via lastIndexOf", "scenario", "easy", "Isolated terminal file extension via lastIndexOf('.').", "Use `lastIndexOf('.')` to identify the final extension in multi-dotted filenames.")

add_q(ch5, "A web application saves user avatars to disk. To prevent malicious users from uploading filenames like `../../etc/passwd` to overwrite system files (Directory Traversal Attack), what check must be applied?",
    ["Convert filename to uppercase", "Validate that `file.getCanonicalPath()` starts with the intended base upload directory path and reject paths containing `..`", "Change file extension to .jpg", "Delete the file if it has numbers"],
    1, "Directory Traversal occurs when filenames contain `..`. Resolving canonical paths (`file.getCanonicalFile().toPath().startsWith(baseDir)`) prevents escaping the sandbox.",
    "Directory Traversal Security Guard", "scenario", "hard", "Applied path canonicalization to defeat Directory Traversal attacks.", "Verify that `canonicalPath` starts with the authorized base directory to prevent directory traversal.")

add_q(ch5, "A logging framework rotates log files when `app.log` exceeds 50 MB. How does it check the file size in Java?",
    ["`if (logFile.length() > 50 * 1024 * 1024)`", "`if (logFile.size() > 50)`", "`if (logFile.count() > 50000)`", "`if (logFile.length() > 50)`"],
    0, "`file.length()` returns the file size in bytes as a `long`. 50 MB is `50 * 1024 * 1024` bytes.",
    "File Size Check for Log Rotation", "scenario", "easy", "Calculated byte threshold for file size checks.", "`file.length()` returns bytes; 50 MB = `50 * 1024 * 1024` bytes.")

add_q(ch5, "A dictionary app loads 100,000 words from `words.txt`. Why should you pre-allocate a collection rather than repeatedly re-reading the file from disk on every user keystroke?",
    ["Files lock the computer", "Disk I/O is thousands of times slower than RAM memory access; loading words once into an in-memory Set/Trie on startup ensures instant search response times", "Java files expire after 5 minutes", "Scanner cannot read dictionaries"],
    1, "Disk access latency is orders of magnitude slower than RAM. Caching static reference data in memory upon startup eliminates repeated disk bottlenecks.",
    "In-Memory Caching vs Disk I/O", "scenario", "easy", "Recognized the necessity of in-memory caching over repetitive disk I/O.", "Cache static file data in memory on startup to avoid high disk latency.")

add_q(ch5, "A banking data pipeline receives files from external vendors encoded in UTF-8. On Windows, the default system charset might be Windows-1252. How do you guarantee the file is read using UTF-8 regardless of the operating system default?",
    ["`new Scanner(file, \"UTF-8\")` (or `new InputStreamReader(new FileInputStream(file), StandardCharsets.UTF_8)`)", "`new Scanner(file)` without arguments", "Rename file to .utf8", "Change Windows system locale"],
    0, "Explicitly specifying the charset (`\"UTF-8\"` or `StandardCharsets.UTF_8`) ensures portable, consistent character decoding across all host OS platforms.",
    "Explicit Charset Specification", "scenario", "medium", "Enforced explicit UTF-8 charset decoding across differing OS environments.", "Always specify `StandardCharsets.UTF_8` when creating readers and scanners.")

add_q(ch5, "A command-line tool counts the total number of words, lines, and characters in a text file (like Unix `wc`). Which Scanner methods can be combined to track all three metrics in a single pass?",
    ["Read line by line with `nextLine()`, incrementing lines, adding `line.length() + 1` to characters, and splitting the line by whitespace `line.trim().split(\"\\\\s+\")` to count words", "Call `read()` 3 times", "Open 3 separate Scanner instances simultaneously", "Use `sc.nextInt()`"],
    0, "Reading line-by-line enables tracking lines, characters, and words concurrently in a single efficient O(N) linear pass.",
    "Word Count (wc) Single-Pass Design", "scenario", "medium", "Designed clean single-pass line, word, and character counter.", "Process line-by-line to aggregate lines, characters, and words in a single pass.")

add_q(ch5, "A database exporter dumps records to a CSV file. If a customer's address contains a comma (e.g. `\"123 Main St, Apt 4\"`), what must the exporter do to prevent breaking the CSV column structure?",
    ["Remove the comma from the address", "Wrap the field in double quotes: `\"\\\"\" + address + \"\\\"\"` (standard RFC 4180 CSV escaping)", "Throw an exception", "Replace the comma with a question mark"],
    1, "In CSV formats, fields containing delimiter characters (commas) must be enclosed in double quotes according to RFC 4180.",
    "CSV Field Escaping Rules", "scenario", "easy", "Applied RFC 4180 CSV escaping for comma-containing fields.", "Enclose fields containing commas within double quotes in CSV exports.")

add_q(ch5, "A sensor data collector creates a daily file named `log_YYYY_MM_DD.txt`. How should the file name string be generated dynamically using Java's `LocalDate`?",
    ["`String name = \"log_\" + LocalDate.now() + \".txt\";`", "`String name = \"log_today.txt\";`", "`String name = new File(LocalDate.now());`", "`String name = LocalDate.toString().replace('-', '_');`"],
    0, "`LocalDate.now().toString()` outputs `YYYY-MM-DD` (ISO-8601). String concatenation `\"log_\" + LocalDate.now() + \".txt\"` produces `log_2026-10-06.txt` cleanly.",
    "Dynamic Filename Formatting", "scenario", "easy", "Constructed dynamic date-stamped filenames cleanly.", "Use `LocalDate.now()` to generate date-stamped dynamic filenames.")

add_q(ch5, "A distributed system worker checks if a lock file `process.lock` exists before starting. If it exists, another worker is already running. If it does NOT exist, it must create it atomically. What method provides this atomic check-and-create?",
    ["`if (!file.exists()) file.createNewFile();` (Race condition!)", "`file.createNewFile()` (returns true only if created atomically by this process)", "`file.mkdir()`", "`file.renameTo()`"],
    1, "`file.createNewFile()` is an atomic filesystem operation. It returns `true` if and only if the file did not exist and was created by this call, avoiding race conditions.",
    "Atomic Lock File Creation", "scenario", "hard", "Used atomic createNewFile to prevent race conditions in process locking.", "Use `file.createNewFile()` for atomic lock file creation without race conditions.")

add_q(ch5, "A desktop application saves user preferences to `prefs.properties`. Which standard Java class is specifically designed to load and store key-value configuration pairs from/to a stream?",
    ["`java.util.Properties` via `.load(InputStream)` and `.store(OutputStream, comments)`", "`java.util.Scanner`", "`java.io.PrintWriter` only", "`java.util.ArrayList`"],
    0, "`java.util.Properties` is the built-in Java class for managing key-value configuration files, with native stream loading and saving support.",
    "Properties Configuration Storage", "scenario", "easy", "Recognized java.util.Properties for configuration persistence.", "Use `java.util.Properties` to load and save key-value application preferences.")

add_q(ch5, "A backup script verifies file integrity after copying a 2 GB database file from source to destination. What is the most reliable check to ensure the file was not corrupted during copying?",
    ["Compare `source.length() == dest.length()` only", "Compute and compare cryptographic hash checksums (e.g. SHA-256 or MD5) of both files", "Compare file creation timestamps", "Check if `dest.exists()` is true"],
    1, "While file size equality is a quick initial check, computing and matching a cryptographic checksum (SHA-256) guarantees exact bit-for-bit data integrity.",
    "File Integrity Verification via Checksums", "scenario", "medium", "Understands cryptographic checksum comparison for reliable file transfer verification.", "Compute SHA-256 checksums to verify bit-level file copy integrity.")

with open("scratch/ch5.json", "w", encoding="utf-8") as f:
    json.dump(ch5, f, indent=2, ensure_ascii=False)

print(f"Generated {len(ch5)} questions for Chapter 5!")
