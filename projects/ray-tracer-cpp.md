---
layout: project
type: project
title: "Ray Tracer in C++"
image: img/ray-tracer-cpp/thumbnail.png
img: /img/ray-tracer-cpp
imageurls:
  - Final-Demo.png
  - cones-unions/Final-Demo.png
date: 2025-02-13
published: true
labels:
  - Ray Tracing
  - C++
  - Parallelism
  - OpenMP
  - Visual Studio
summary: "Another ray tracer in windows built by following 'Ray Tracing in One Weekend.'"
sourcecode: "https://github.com/kylebueche/Ray-Tracer-2.0"
---

### More Features

<hr>

This is my 2nd Ray Tracer, this time written in C++. I wanted to expand on my [first Ray Tracer]({{ site.baseurl }}/projects/ray-tracer-c/), which I did essentially blind, learning the fundamentals.

<br>

I added features like:
- Skybox Lighting
- Stochastic Sampling
- Depth of Field
- Multithreading
- Outputting to PNG files
- Planes, Cones, and Unions

<br>

### Optimization

<hr>

I dropped the render time for a 4K image from 12 hours to 1 hour after implementing multi-threading with OpenMP.

<br>

I followed [Ray Tracing in One Weekend - The Book Series](https://raytracing.github.io/) while building this project for guidance on features. They're a great learning resource.
