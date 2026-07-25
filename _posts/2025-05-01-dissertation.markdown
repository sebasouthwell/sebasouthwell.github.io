---
layout: default
modal-id: 8
weight: 10
title: Dissertation — A Physical Smart-Home Voice Assistant
date: 2025-05-01
img: Dissertation.png
alt: 'Fritzing-style design figure of the unPhone touchscreen device wired to a breadboard, showing an "Audio Detected: Streaming to API Server" UI mockup'
project-date: Oct 2024 - May 2025
client: University of Sheffield (Dissertation)
award: 'Uni: First Class'
category: University
profession: [AI, Hardware, Back-End, Full-Stack]
tags: [Python, ESP32, Flask, Redis, Speech Processing, LLMs]
description: >
  My final-year dissertation, supervised by Professor Hamish Cunningham: a
  physical smart-home voice assistant built on the University of
  Sheffield's unPhone hardware platform (ESP32-based, with touchscreen and
  onboard mic). The design figure shown here is my own Fritzing-based
  proposal for wiring the device to a breadboard and mocking up its
  on-screen feedback states. On the hardware side, audio detection triggers
  capture and streaming to the backend — I researched proper wake-word
  detection but didn't get a reliable implementation working in time; on
  the backend, a Flask/Redis
  service exposed over a RESTful API handles speech recognition, passes the
  transcribed command to an LLM for interpretation, and returns synthesised
  speech back to the device — combining LLMs, speech processing and IoT
  into one working pipeline (78%).
---
