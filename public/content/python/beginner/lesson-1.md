---
lang: python
slug: lesson-1
title: Python Basics — Variables and Types
time: 20 min
difficulty: beginner
prerequisites: []
objectives:
  - Understand variables, assignment, and basic types
  - Use print and input safely
---

## Overview
Python is an interpreted, high-level language that emphasizes readability. In this lesson, we introduce variables, basic types, and simple I/O.

## Variables and Assignment
Variables are created on assignment. Names should be descriptive.

```python
# Assigning variables
message = "Hello"
count = 3           # integer
pi = 3.14159        # float
is_active = True    # boolean

print(message, count, pi, is_active)
```

## Basic Types
Common types include `int`, `float`, `str`, and `bool`.

```python
# Type conversion and string formatting
age = int("42")
name = "Ada"
print(f"{name} is {age} years old")
```

## Input
Use `input()` to read from stdin. Convert strings to the needed type.

```python
# Reading input (commented for non-interactive environments)
# user = input("Your name: ")
# print("Welcome,", user)
```

## Practice
- Create variables for your name and favorite number, then print them.
- Convert a string to an integer and add 10.
