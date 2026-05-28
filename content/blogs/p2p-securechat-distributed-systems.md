---
title: "Peer-to-Peer SecureChat — Kademlia, Chord, and AES"
date: "2025-05-01"
description: "Decentralized P2P chat with structured overlay, Kademlia discovery, Chord/DHT routing, and Diffie-Hellman + AES encryption."
tags: ["Python", "Distributed Systems", "Cryptography", "P2P", "DHT"]
coverImage: "/logo.png"
featured: true
---

**Mar 2025 – May 2025** · Distributed Systems Project

A decentralized chat application with no central server — nodes form a structured overlay and route messages efficiently while keeping traffic confidential.

## Architecture

- **Kademlia** for node discovery in the overlay.
- **Chord / DHT** for efficient message routing across peers.
- **Diffie-Hellman** key exchange plus **AES** for encrypted payloads.

## Technologies

Python, socket programming, cryptography libraries, DHT primitives, Kademlia and Chord protocol implementations.

Building this reinforced how discovery, routing, and crypto layers compose in real P2P systems — and why each layer must be tested independently before integration.
