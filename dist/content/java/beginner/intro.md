---
title: Java Lesson 1: Getting Started
difficulty: beginner
time: 25 min
prerequisites:
  - Install JDK 21
objectives:
  - Compile and run a Java program
---

## Hello Java
Create `Hello.java`:

```java
public class Hello {
  public static void main(String[] args) {
    System.out.println("Hello, Java!"); // Print greeting
  }
}
```

Compile and run:

```bash
javac Hello.java && java Hello
```
