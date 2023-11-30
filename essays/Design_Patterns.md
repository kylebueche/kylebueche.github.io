---
layout: essay
type: essay
title: "Design Patterns"
# All dates must be YYYY-MM-DD format!
date: 2023-11-29
published: true
labels:
  - Computer Science
---

<img width="300px" class="rounded float-start pe-4" src="../img/interview.jpg">

In a common interview in the Computer Science field, you may find yourself asked "What are design patterns?”, followed by “What design patterns have you used in your own code?” How you answer these questions now can tell you a lot about what habits of yours are solid, and what habits you may need to improve.

#### Coding Style

Let's get one thing straight. Everyone's coding style is different, and there are many people online who won't approve of yours, no matter what your style is. The only person who should ever dictate how to style your code is an employer (Especially in a team setting). Aside from that, do your own thing.

#### Design Patterns

Let's answer that first question. I think that the best way to explain design patterns is by explaining what they do. A given design pattern can allow others to read your code and understand what it's doing without looking too far into it, as long as they're aware that you're using the design pattern. Conforming to a design pattern creates readable, scalable, and consistent code, which is just a lot more pleasant to deal with than scattered messy code. Design patterns can be as simple or as complex as you need.

An example of a design pattern is defining a method in a parent class, such that all classes that inherit it are required to incorporate that method. If you need to do a lot of area calculations on different shapes, you could incorporate a square and circle class that inherit from shape. Then shape could require an area method, thus ensuring that circle.area() and square.area() will always work.

The next question gets a bit tricky, because it's hard to say what counts as a design pattern and what doesn't. An example of a design pattern in my own code is error handling by value. I don't like the idea of throwing errors because then you don't know when something will throw one. If you have documented error return values, you can then write code to handle each error case with a simple switch or with if statements. Another design pattern is the separation of concerns. This could be incorporated as the separation of tasks into different functions. Like one function to handle a user input, and another to handle the response to that input. This could be further expanded into a complete separation of frontend and backend, which is commonplace in many workplace scenarios. I've used this design pattern in both C and C++ projects for my university course in Program Structure. I would consider these to be design patterns, but there may be some who don't.
