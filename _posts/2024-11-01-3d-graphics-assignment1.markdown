---
layout: default
modal-id: 14
weight: 60
title: '3D Computer Graphics — Assignment 1: A Custom Scene'
date: '2024-11-01'
img: Graphics3DAssignment1.png
alt: >-
  Live screenshot of the running OpenGL scene, showing a name plaque, a
  repeating dice-logo wall texture, Robot1 in its hat, and a spinning textured
  Earth globe
project-date: Oct 2024 - Nov 2024
client: University of Sheffield
category: University
profession:
  - Software Engineering
  - Front-End
tags:
  - Java
  - OpenGL
  - JOGL
  - 3D Graphics
  - Scene Graph
description: >-
  <p>Here is the revised version with the mathematical, rendering, and animation
  work brought forward more clearly:</p><p>A from-scratch 3D scene developed in
  Java with JOGL, the Java bindings for OpenGL, for COM4503. Rather than relying
  on a ready-made framework, I designed and implemented my own hierarchical
  scene-graph engine for managing geometry, transformations, animation,
  lighting, and rendering.</p><p>The architecture was designed around
  dynamically controllable scene components and swappable meshes. A base
  <code>SGNode</code> class handled recursive tree traversal through draw,
  update, and disposal operations using a composite-pattern structure. A
  <code>TransformNode</code> subclass stored transformation matrices, while
  <code>ModelNode</code> leaf objects connected the scene graph to renderable
  geometry. This separation allowed meshes, materials, transformations, and
  behaviours to be replaced or controlled independently without tightly coupling
  scene structure to the rendering implementation.</p><p>The project involved
  substantial use of 3D mathematics, including vectors, matrices,
  coordinate-space transformations, hierarchical world transforms,
  Euclidean-distance calculations, rotations, scaling, translation, and
  animation interpolation. Parent and child transformations were composed
  throughout the graph so that complex objects could be moved and animated while
  preserving the relative positions of their individual parts.</p><p>For
  multi-part objects such as the robots, I created a reusable
  <code>foundationTransforms()</code> factory method that automatically
  generated scale, translation, and rotation node chains. This avoided repeating
  transformation boilerplate for every limb and made articulated models easier
  to construct, modify, and animate.</p><p>I also devised and implemented a
  complete keyframe animation system. This allowed object transformations to be
  interpolated between defined animation states, supporting coordinated movement
  across multiple scene-graph nodes. Robot1’s dancing behaviour used this system
  and was triggered through a Euclidean-distance method that I added to
  <code>SGNode</code>. The method compared world-space positions to detect when
  Robot1 moved close to Robot2, which independently patrolled the
  scene.</p><p>The rendering pipeline used custom shaders that I wrote myself,
  with Blinn-Phong-based lighting calculations for ambient, diffuse, and
  specular illumination. The scene included both a point light and a spotlight,
  requiring lighting and surface calculations to be performed within the shader
  pipeline.</p><p>Additional features included a spacecraft controlled using
  WASD and the arrow keys, a skybox that followed the camera, and a textured
  globe rotating on an axle. All textures were created from scratch in GIMP,
  including the repeating dice-logo wall texture, which uses the same personal
  logo featured in this website’s radial menu.</p><p>The screenshot was captured
  by recompiling and running my original submission. This assignment was
  assessed alongside Assignment 2, with both assignments collectively
  contributing to a module mark of 74%.</p>
---

