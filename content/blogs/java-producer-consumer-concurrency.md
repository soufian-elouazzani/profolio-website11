---
title: "Producer–Consumer Pattern in Java"
date: "2023-12-01"
description: "Classic producer–consumer concurrency in Java — thread-safe bounded buffers, coordinated workers, and graceful shutdown without races or deadlocks."
tags: ["Java", "Concurrency", "Multithreading"]
coverImage: "https://raw.githubusercontent.com/soufian-elouazzani/http-server/refs/heads/main/docs/images/1_H9X3ox7LviQoxLBQcfx1CQ.png"
---

**Repo:** [github.com/soufian-elouazzani/java-prod-cons](https://github.com/soufian-elouazzani/java-prod-cons)

## Context

The producer–consumer pattern appears everywhere: job queues, message brokers, thread pools, and async pipelines. This project focused on building one **correctly** — with bounded buffers, multiple producers and consumers, and clean shutdown — without hiding behind high-level abstractions.

The challenge: shared mutable state between threads without data races, lost wakeups, or deadlocks when the buffer is full or empty.

## What I built

- A **bounded thread-safe buffer** between producers and consumers.
- **Multiple producer threads** that enqueue work items at variable rates.
- **Multiple consumer threads** that dequeue and process items.
- **Synchronization** using `wait`/`notify` (and a variant with `java.util.concurrent` primitives).
- **Graceful shutdown** — producers signal completion, consumers drain the buffer, and all threads exit cleanly.

## Technical decisions

- **Bounded buffer over unbounded queue** — Unbounded queues hide backpressure problems. A fixed capacity forces producers to block when consumers fall behind — the same behavior real systems need.
- **Monitor pattern with wait/notify** — Understanding low-level primitives before reaching for `BlockingQueue` builds intuition for spurious wakeups and the `while` loop around `wait()`.
- **Explicit shutdown protocol** — Without a poison pill or completion flag, consumers block forever on an empty buffer after producers finish.

## Results and takeaways

- Stress tests with uneven producer/consumer rates ran without lost items or deadlocks.
- The exercise directly maps to real systems: RabbitMQ consumers, thread pool executors, and CI job queues all use the same coordination patterns.
- For recruiters: this demonstrates **concurrency fundamentals** — essential for backend services, workers, and anything that processes requests asynchronously.

## Stack

| Layer | Technologies |
|-------|-------------|
| Language | Java |
| Concurrency | Threads, `synchronized`, `wait`/`notify`, `java.util.concurrent` |

## Links

- [github.com/soufian-elouazzani/java-prod-cons](https://github.com/soufian-elouazzani/java-prod-cons)
