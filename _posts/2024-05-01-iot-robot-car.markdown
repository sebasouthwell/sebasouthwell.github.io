---
layout: default
modal-id: 16
weight: 40
title: IoT Robot Car — Live Streaming, IR Control & OTA Updates
date: 2024-05-01
img: IoTRobotCar.png
alt: Split screenshot showing the robot car's own web control panel with a live camera feed on the left, and a real photo of the physical robot car on a wooden floor on the right
project-date: May 2024
client: University of Sheffield
category: University
award: 'Uni: First Class'
profession: [Hardware, DevOps, Software Engineering]
tags: [ESP32, Arduino, IoT, Infrared, OTA]
description: >
  A COM3505 (Internet of Things) assignment: a robot car built on a DFRobot
  FireBeetle (ESP32), with a live-streaming camera, infrared command
  reception, and motor-shield-driven speed and rotation control. The board
  hosts its own web interface — Basic Control, Advanced Control, Wi-Fi
  setup and OTA update pages — serving both the live camera feed and manual
  motor controls, with firmware updates pushed over the air via ElegantOTA
  rather than re-flashing over USB every time. Every piece of hardware was
  deliberately chosen for the task rather than just using whatever was
  available. Alongside the car itself, I separately designed and built a
  standalone IR remote controller — an infrared emitter driven by a
  joystick, converting the joystick's raw Euclidean x/y readings into polar
  coordinates (angle and magnitude) to derive direction and speed (96%).
---
