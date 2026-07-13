---
title: "Peer-to-Peer SecureChat — Kademlia, Chord, and AES"
date: "2025-05-01"
description: "A decentralized P2P chat with Kademlia discovery, Chord/DHT routing, and Diffie-Hellman + AES encryption — no central server required."
tags: ["Python", "Distributed Systems", "Cryptography", "P2P", "DHT"]
coverImage: "/logo.png"
featured: true
---

**Mar 2025 – May 2025** · Distributed Systems Project

## Context

Most chat applications rely on a central server — a single point of failure and a trust bottleneck. This project asked: **can nodes discover each other, route messages, and encrypt traffic without any central coordinator?**

The constraints were educational but realistic: implement structured overlay routing (not naive broadcast), handle node join/leave, and encrypt payloads so intermediaries cannot read message content.

## What I built

- A **decentralized chat network** where each node runs the same peer software and participates in discovery and routing.
- **Kademlia-based node discovery** — new peers find the overlay without a bootstrap directory server beyond an initial seed list.
- **Chord / DHT routing** — messages traverse the overlay efficiently using consistent hashing, not flooding.
- **Diffie-Hellman key exchange + AES encryption** — session keys established per conversation; payloads encrypted end-to-end across hops.
- CLI and socket-based interface for multi-node local testing.

## Technical decisions

- **Structured overlay over flooding** — Flooding works for demos but does not scale. Chord gives O(log N) routing, which matters as the overlay grows.
- **Separate discovery from routing** — Kademlia handles "who is in the network?" while Chord handles "how do I reach node X?" Testing each layer independently caught integration bugs early.
- **DH + AES over rolling your own crypto** — Standard libraries for key exchange and symmetric encryption; custom crypto is where security projects usually fail.

## Results and takeaways

- Successfully demonstrated peer-to-peer messaging across 5+ local nodes with encrypted payloads.
- Node churn (peers joining and leaving) required careful finger-table maintenance — a real-world lesson in distributed state.
- For recruiters: this project proves I understand **networking, concurrency, and cryptography as composable layers** — skills that transfer directly to API gateways, message queues, and secure backends.

## Stack

| Layer | Technologies |
|-------|-------------|
| Language | Python 3 |
| Networking | TCP sockets, custom protocol |
| Discovery | Kademlia |
| Routing | Chord DHT |
| Crypto | Diffie-Hellman, AES (cryptography library) |

## Links

- Academic distributed systems coursework (repository available on request).
