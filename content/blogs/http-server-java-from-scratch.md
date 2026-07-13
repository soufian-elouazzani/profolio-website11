---
title: "HTTP Server in Java — From Scratch"
date: "2024-04-01"
description: "Building a working HTTP server in plain Java — TCP sockets, request parsing, routing, and responses without Tomcat or Spring."
tags: ["Java", "Networking", "HTTP"]
coverImage: "https://raw.githubusercontent.com/soufian-elouazzani/http-server/refs/heads/main/docs/images/1_H9X3ox7LviQoxLBQcfx1CQ.png"
---

**Repo:** [github.com/soufian-elouazzani/http-server](https://github.com/soufian-elouazzani/http-server)

## Context

Frameworks like Spring Boot and servlet containers hide the mechanics of HTTP. Before relying on them in production, I wanted to understand **exactly what happens on the wire** when a browser sends a request and a server responds.

The goal: a minimal but correct HTTP server in plain Java that accepts connections, parses requests, routes to handlers, and writes proper responses — no external web framework.

## What I built

- A **TCP server** that accepts connections on a configurable port and reads byte streams.
- An **HTTP request parser** that extracts the method, path, headers, and body from raw input.
- A **router** that maps paths and methods to handler functions.
- **Response builders** that write status lines, headers, and bodies back to the client.
- Support for common status codes (200, 404, 500) and static file serving.

## Technical decisions

- **Blocking I/O first, optimize later** — A thread-per-connection model is simple and correct for learning. It makes connection lifecycle and resource cleanup visible.
- **Parse before route** — Separating parsing from routing means malformed requests fail fast with 400 responses instead of crashing handlers.
- **No framework magic** — Every line of code is traceable. When something breaks behind nginx or a load balancer later, I know what the origin server is actually doing.

## Results and takeaways

- The server handles concurrent browser requests and serves static HTML/CSS correctly.
- Debugging taught me why keep-alive, content-length, and chunked encoding matter — details frameworks handle silently until they do not.
- For recruiters and clients: understanding HTTP at this level means faster debugging when APIs misbehave, CORS blocks requests, or proxies strip headers.

## Stack

| Layer | Technologies |
|-------|-------------|
| Language | Java |
| Networking | TCP sockets, `java.io` streams |
| Protocol | HTTP/1.1 (subset) |

## Links

- [github.com/soufian-elouazzani/http-server](https://github.com/soufian-elouazzani/http-server)
