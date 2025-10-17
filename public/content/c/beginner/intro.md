---
title: C Lesson 1: Getting Started
difficulty: beginner
time: 25 min
prerequisites:
  - Install gcc or clang
objectives:
  - Compile and run a C program
---

## Hello C
Create `hello.c`:

```c
#include <stdio.h>

int main(void) {
  printf("Hello, C!\n"); // Print greeting
  return 0;
}
```

Compile and run:

```bash
gcc hello.c -o hello && ./hello
```
