---
title: C++ Lesson 1: Getting Started
difficulty: beginner
time: 25 min
prerequisites:
  - Install g++ or clang++
objectives:
  - Compile and run a C++ program
---

## Hello C++
Create `hello.cpp`:

```cpp
#include <iostream>
using namespace std;

int main() {
  cout << "Hello, C++!" << endl; // Print greeting
  return 0;
}
```

Compile and run:

```bash
g++ hello.cpp -o hello && ./hello
```
