---
title: "Building a Meshtastic Network Monitoring Suite"
date: "2025-06-01"
description: "Extending Meshtastic MQTT Explorer with SPLAT! coverage calculation, redundancy analysis, and Dockerized microservices."
tags: ["Python", "Docker", "Meshtastic", "SPLAT", "Vue.js"]
coverImage: "/logo.png"
featured: true
---

The [meshnetwork](https://github.com/soufian-elouazzani/meshnetwork) project is a complete monitoring solution for Meshtastic networks. It adds automatic radio coverage calculation and redundancy analysis on top of the existing [Meshtastic MQTT Explorer](https://github.com/valentintintin/meshtastic-mqtt-explorer) — all running in Docker with **zero modifications** to the upstream codebase.

**Repo:** [github.com/soufian-elouazzani/meshnetwork](https://github.com/soufian-elouazzani/meshnetwork) · **Docs:** [meshnetwork-docs](https://github.com/soufian-elouazzani/meshnetwork-docs)

## What it does

- **Coverage Service** — Uses SPLAT! and NASA SRTM terrain data to predict radio coverage per node and export GeoJSON polygons.
- **Redundancy Service** — Detects overlaps between coverage zones, scores redundancy (levels 1–5), and highlights weak points.
- **Vue.js microfrontend** — Leaflet-based viewer on port 3001 for real-time maps.

## Stack

Python daemons, PostgreSQL, Mosquitto MQTT, Docker Compose, Vue.js + Leaflet, and the existing .NET 9 / Blazor front end.

## Quick start

```bash
git clone https://github.com/soufian-elouazzani/meshnetwork.git
cd meshnetwork/docker
sudo docker compose up -d
```

Main map: `http://localhost` · Coverage viewer: `http://localhost:3001`

Coverage calculation runs in ~15 seconds per node with terrain caching (~50 MB per region). See the [full README](https://github.com/soufian-elouazzani/meshnetwork) and [architecture docs](https://github.com/soufian-elouazzani/meshnetwork-docs) for diagrams and screenshots.
