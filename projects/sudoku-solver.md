---
layout: project
type: project
image: <img width="474" alt="image" src="https://github.com/kylebueche/kylebueche.github.io/assets/38002610/c2707d50-936c-4dd4-a8d8-700ce56c74a8">
title: "Sudoku Solver"
date: 2023-04-21
published: true
labels:
  - Java
  - ICS211
summary: "A program that recursively solves any sudoku problem that has a solution."
---

This project is a program that can solve any solvable sudoku problem through recursion. I completed this project in my 1st year at UH Manoa, in my ICS 211 course. I learned a lot about brute forcing solutions and proper recursion throughout this project.

This program chooses a legal answer for each open square from left to right, top to bottom. It does this until there are no more legal options in a given square, at this point it backtracks and tries the next legal option for a previous square. This repeats until the sudoku is solved or is deemed unsolvable.

Here is my program solving the famous 'AI Escargot' problem:

<img width="474" alt="image" src="https://github.com/kylebueche/kylebueche.github.io/assets/38002610/c2707d50-936c-4dd4-a8d8-700ce56c74a8">
