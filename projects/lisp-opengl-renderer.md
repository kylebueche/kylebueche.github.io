---
layout: project
type: project
image: img/lisp-opengl-renderer/thumbnail.png
img: /img/lisp-opengl-renderer
imageurls:
  - Fractal-Tree.png
videourls:
  - ICS481_HW5_bueche.mp4
  - Fractal-Interpolation-1.mp4
  - Fractal-Interpolation-2.mp4
  - ICS481_HW3_bueche.mp4
title: "Common Lisp OpenGL Renderer"
date: 2024-12-17
published: true
labels:
  - Fractals
  - OpenGL
  - Lisp
  - Keyframes
  - Transforms
  - Shading
  - Emacs
summary: "A renderer I developed in OpenGL, featuring procedural meshes and fractals."
---

### OpenGL

<hr>

I used Lisp to build an immediate-mode OpenGL renderer with a ton of features.

<br>

In my final demo, I show features like:
  - Fractals
  - Transforms
  - Keyframes
  - Smooth and Flat Shading
  - Height Fields
  - Character Joint Rigs

<br>

The terrain is generated using a height field, with y values displaced by a bunch of random sine waves, and trees are placed on random points throughout the scene.

<br>

### Fractals

<hr>

I'm most proud of my fractal system, I found that interpolating between random fractals leads to chaotic and beautiful behavior.

<br>

### 2D

<hr>

My renderer also has 2D capabilities, and I used it to make a model animation recreating geometry dash.
