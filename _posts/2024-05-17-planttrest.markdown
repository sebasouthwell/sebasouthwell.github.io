---
layout: default
modal-id: 17
weight: 45
title: Planttrest — Offline-First Plant Sighting PWA
date: 2024-05-17
img: Planttrest.png
alt: Screenshot of the Planttrest sighting grid showing three real plant sightings, a dog rose, a sunflower and a calycanthus, each with feature badges for seeds, fruit and flower colour
project-date: Jan 2024 - May 2024
client: University of Sheffield
category: University
profession: [Software Engineering, Full-Stack, Back-End, Front-End, DevOps]
tags: [Node.js, Express, MongoDB, Socket.io, Service Worker, SPARQL, GitHub Actions, Group Project]
description: >-
  <p>A three-person team project for COM3504/COM6504, "The Intelligent
  Web", built around the module's three teaching blocks: the basic tools
  of the advanced web, offline and multimodal interaction, and the Web of
  Data. The brief was a progressive web app for logging and identifying
  plant sightings in the wild.</p><p>I built the bulk of the application's
  architecture: the Express and EJS backend, the MongoDB and Mongoose data
  models, and the real-time layer. Sightings, identification suggestions
  and comments are handled through Socket.io rooms, using the full-duplex,
  bidirectional communication the module taught as an alternative to
  request-response polling.</p><p>The offline experience follows the
  module's Progressive Web App architecture directly: a Service Worker
  with its own app shell and Manifest.json, caching static assets so the
  app loads instantly regardless of network state. New sightings and
  comments made offline are queued in IndexedDB and flushed automatically
  through the Background Sync API once the connection returns.</p><p>For
  plant identification, I implemented a client-side SPARQL client that
  queries DBpedia's public endpoint directly, applying the module's Linked
  Data and knowledge graph teaching. Rather than a static lookup table, a
  plant is identified by resolving a DBpedia resource URI into its common
  name, scientific name and abstract live in the browser, with other users
  able to suggest and accept corrected identifications.</p><p>Sightings
  also include photo upload, geolocation and an OpenStreetMap picker, and
  the repository runs its own GitHub Actions CI pipeline with build status
  posted to Discord. Built collaboratively with two teammates in WebStorm
  using git branching, and submitted as the module's assessed group
  project.</p>
---
