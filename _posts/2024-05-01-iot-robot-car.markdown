---
layout: default
modal-id: 16
weight: 40
title: 'IoT Robot Car — Live Streaming, IR Control & OTA Updates'
date: '2024-05-01'
img: IoTRobotCar.png
alt: >-
  Split screenshot showing the robot car's own web control panel with a live
  camera feed on the left, and a real photo of the physical robot car on a
  wooden floor on the right
project-date: May 2024
client: University of Sheffield
category: University
profession:
  - Hardware
  - DevOps
  - Software Engineering
tags:
  - ESP32
  - Arduino
  - IoT
  - Infrared
  - OTA
description: >-
  <p>A COM3505 Internet of Things assignment involving the design and
  construction of a remotely controlled robot car using a DFRobot FireBeetle
  ESP32 development board. The system combined live video streaming, infrared
  command reception, and motor-shield-based control of speed and
  rotation.</p><p>The ESP32 hosted a dedicated web interface with separate pages
  for basic controls, advanced controls, Wi-Fi configuration, and over-the-air
  firmware updates. Through this interface, users could view the live camera
  feed and manually control the car’s movement directly from a
  browser.</p><p>Firmware updates were delivered using ElegantOTA, allowing new
  versions to be installed wirelessly without repeatedly reconnecting and
  reflashing the board over USB. Each hardware component was deliberately
  selected according to the project’s functional and performance requirements
  rather than relying only on components that were readily
  available.</p><p>Alongside the car, I independently designed and built a
  standalone infrared remote controller. The controller used a joystick
  connected to an infrared emitter to transmit movement commands to the vehicle.
  Raw joystick coordinates were converted from Cartesian x and y values into
  polar coordinates, using the resulting angle and magnitude to determine the
  car’s direction and speed.</p><p>The project received a mark of 96%.</p>
award: 'Uni: First Class'
---

