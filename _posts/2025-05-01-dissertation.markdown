---
layout: default
modal-id: 8
weight: 10
title: Dissertation — A Physical Smart-Home Voice Assistant
date: '2025-05-01'
img: Dissertation.png
alt: >-
  Fritzing-style design figure of the unPhone touchscreen device wired to a
  breadboard, showing an "Audio Detected: Streaming to API Server" UI mockup
project-date: Oct 2024 - May 2025
client: University of Sheffield (Dissertation)
category: University
profession:
  - AI
  - Hardware
  - Back-End
  - Full-Stack
tags:
  - Python
  - ESP32
  - Flask
  - Redis
  - Speech Processing
  - LLMs
description: >-
  <p>Here is a more polished and clearly structured version:</p><p>My final-year
  dissertation, supervised by Professor Hamish Cunningham, focused on the
  development of a physical smart-home voice assistant using the University of
  Sheffield’s unPhone hardware platform. The device was ESP32-based and included
  a touchscreen and onboard microphone.</p><p>The accompanying design figure is
  my own Fritzing-based proposal, showing how the device could be connected to a
  breadboard and how its on-screen feedback states might appear. On the hardware
  side, audio detection triggered recording and streaming to the backend for
  processing.</p><p>The system used a combination of large language model APIs
  and locally hosted models to interpret commands and evaluate generated
  outputs. I proposed several evaluation methods, including BERTScore and a
  range of custom metrics. This work was completed before structured LLM output
  schemas were widely available, so the generated responses were considerably
  more unpredictable and experimental.</p><p>As part of the project, I
  researched a broad range of hardware, software, text-processing, and
  audio-processing techniques. This included investigating robust wake-word
  detection, although the final wake-word implementation was removed from the
  project scope due to time constraints.</p><p>On the backend, a Flask and Redis
  service exposed through a RESTful API handled speech recognition and passed
  transcribed commands to an LLM for interpretation. I also designed and built a
  dynamic smart-home environment using Redis and additional microcontrollers,
  allowing the system to demonstrate an adaptable and intuitive smart-home
  experience.</p><p>The project was recognised as particularly ambitious for a
  third-year dissertation and ultimately achieved a first-class mark of 78%.</p>
award: 'Uni: First Class'
---

