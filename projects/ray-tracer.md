---
layout: project
type: project
image: img/RayTracer
title: "Ray Tracer From Scratch in C"
date: 2023-09-03
published: true
labels:
  - C
  - Windows GDI
  - In Progress
summary: "A ray tracer in windows built entirely from scratch."
---

First things first, this project is incomplete. The good news? Heres a yellow screen!

<img class="img-fluid" src="img/RayTracer1">

#### First Attempt

During my first attempt at this project, I was researching the math behind ray tracers. I wanted to write everything myself, and I was working in one file. Quickly things began to get messy.

I decided to forego all the vector math, in an effort to just have a color appear on the screen. Nothing showed up, but I had successfully opened a window!

#### Square One

At this point, I decided to just restart. I created a new file main.c where I opened the window, and created the gameloop.

