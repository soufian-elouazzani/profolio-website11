---
title: "HTTP Server in Java — From Scratch"
date: "2024-04-01"
description: "A custom HTTP server in Java: TCP sockets, request parsing, routing, and responses without servlet containers."
tags: ["Java", "Networking", "HTTP"]
coverImage: "/logo.png"
---

**Repo:** [github.com/soufian-elouazzani/http-server](https://github.com/soufian-elouazzani/http-server)

Before reaching for Spring or Tomcat, it helps to understand what a server actually does on the wire. This project implements HTTP handling in plain Java:

- Accept TCP connections and read byte streams.
- Parse request lines and headers.
- Map paths to handlers and write status lines plus bodies.

The exercise clarifies connection lifecycle, keep-alive behavior, and why frameworks abstract these details — while still leaving you able to debug them when things break in production.
