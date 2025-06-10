---
title: "Ray Tracer From Scratch in C"
layout: project
type: project
image: img/ray-tracer-c/thumbnail.png
img: /img/ray-tracer-c
imageurls:
  - thumbnail.png
  - displaying-gradient-1.png
date: 2023-09-03
published: true
labels:
  - Ray Tracing
  - Windows GDI
  - C
  - Linear Algebra
summary: "A ray tracer in windows built entirely from scratch."
sourcecode: "https://github.com/kylebueche/ray-tracer"
---

### From Scratch, in C

<hr>

I started this project with one goal: Hand-roll everything. My Ray Tracer is really inefficient, but it was an invaluable learning experience.

<br>

The final demo render took 2 minutes.

<br>

### Current Features

<hr>

- Spheres and Planes
- Point Lights, Directional Lights, and Sphere Lights
- Lambertian & Specular Reflection
- Refraction & Refractive Index
- Soft shadows
- MSAA.

<br>

### Under the Hood

<hr>

And here's some cool algorithms and data structures I implemented:
- Enum-Union Struct to chain different struct types into one list
 - This was tedious, I yearned for C++
- Vector Math
- Ray-Plane & Ray-Sphere Intersection
- Sum of Lambertians
- Camera rig
- Frame buffer that renders to the screen in square-sized chunks
