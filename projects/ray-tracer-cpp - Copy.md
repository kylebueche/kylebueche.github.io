---
layout: project
type: project
title: "Planetary Terrain Generator"
image: img/terrain-generator/thumbnail.png
img: /img/terrain-generator
imageurls:
  - thumbnail.png
date: 2026-05-28
published: true
labels:
  - WebGPU
  - Shaders
  - WGSL
  - SDFs
  - Terrain
summary: "A terrain generator built using compute shaders"
sourcecode: "https://compute.toys/view/3138"
sourcecodesite: "Compute.toys"
---

### How it's Done

<hr>

I started with a standard ray marcher and a sphere. Then I implemented 3d perlin noise, and layered octaves of it on top of each other to create complex mountainous offsets. To get a smooth ocean, I union the noisy sphere with a normal sphere.

<br>

### Colors

<hr>

To color the terrain, I stuff a color return value into the terrain SDF. I calculate the height of the point relative to the ocean, and match it to a manually selected color scale of 15 different colors.

<br>


### Finishing touches

<hr>

To add some dazzle, I made some stars. If a ray doesn't hit the planet, I hash the pixel coordinate for a unique random number generator that remains stable across frames. I choose with a low probability whether the pixel should become a star, and color it a random greyscale value if so.

Finally, I did a quick post-process bloom effect, to give the effect that the beaches are glowing.
