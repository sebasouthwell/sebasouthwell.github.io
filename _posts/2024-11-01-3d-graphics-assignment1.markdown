---
layout: default
modal-id: 14
weight: 60
title: "3D Computer Graphics — Assignment 1: A Custom Scene"
date: 2024-11-01
img: Graphics3DAssignment1.png
alt: Live screenshot of the running OpenGL scene, showing a name plaque, a repeating dice-logo wall texture, Robot1 in its hat, and a spinning textured Earth globe
project-date: Oct 2024 - Nov 2024
client: University of Sheffield
category: University
profession: [Software Engineering, Front-End]
tags: [Java, OpenGL, JOGL, 3D Graphics, Scene Graph]
description: >
  A from-scratch 3D scene built in Java with JOGL (OpenGL bindings) for
  COM4503, with my own hierarchical scene-graph engine underneath rather
  than a ready-made framework. The design deliberately separates concerns:
  a base SGNode class handles recursive tree traversal (draw/update/dispose,
  composite-pattern style), a TransformNode subclass carries the actual
  matrices, and a ModelNode leaf type is the only part that touches
  renderable geometry — so structure and rendering never get tangled
  together. Multi-part objects like the robots reuse a foundationTransforms()
  factory method I wrote to generate their scale/translate/rotate node
  chains automatically, instead of hand-writing the same boilerplate for
  every limb. Robot1's dancing is driven by a Euclidean-distance method I
  added to SGNode itself, comparing world-transform positions to detect
  proximity to Robot2, which patrols the scene independently. On top of
  that: a spacecraft you fly with WASD/arrow-key controls, a room lit by a
  point light and spotlight, a skybox that tracks the camera, and a
  textured globe spinning on an axle. All the textures were made from
  scratch in GIMP and Blender, including the repeating dice-logo texture on
  the walls — the same personal logo used in this site's own radial menu.
  This screenshot is from recompiling and actually running my original
  submission. Assessed alongside Assignment 2, together worth 74% for the
  module.
---
