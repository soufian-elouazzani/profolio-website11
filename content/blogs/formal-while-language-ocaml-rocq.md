---
title: "WHILE Language — OCaml Interpreters and Rocq Proofs"
date: "2025-01-15"
description: "Formal methods project: WHILEb/WHILEb-- parsers and interpreters in OCaml, natural semantics, and machine-checked proofs in Rocq (Coq)."
tags: ["OCaml", "Rocq", "Formal Methods", "Semantics"]
coverImage: "https://raw.githubusercontent.com/soufian-elouazzani/formal-while-language/refs/heads/main/docs/images/programmation-fonctionnelle.jpg"
---

**Repo:** [github.com/soufian-elouazzani/formal-while-language](https://github.com/soufian-elouazzani/formal-while-language)

## Context

Programming languages are defined by two artifacts: **syntax** (what programs look like) and **semantics** (what programs mean). Most developers write interpreters without proving they match the specification. This formal methods project required building both — an OCaml implementation **and** machine-checked proofs that the implementation respects the rules.

The WHILE language family (WHILEb-- and WHILEb) is a minimal imperative language with conditionals, assignment, and loops — enough complexity to be interesting, small enough to prove properties about.

## What I built

The repository is organized in three parts:

1. **Préliminaires** — Formal grammars for WHILEb-- and WHILEb, plus natural semantics (SN) rules for `if expr then P else Q`.
2. **Partie principale** — OCaml parsers and executors:
   - `WHILEb--.ml` — core analyzer and executor
   - `WHILEb.ml` — extended variant
   - `WHILEb_With_Spaces.ml` — whitespace-tolerant lexical analysis
3. **Extensions optionnelles** — Lazy lists, memory management, step counters, interactive step-by-step debugger, and Rocq proofs in `TD6et7.v`.

## Technical decisions

- **Syntax and semantics as separate artifacts** — The parser can accept a program the semantics rules do not cover. Keeping grammars and operational rules in separate documents forces alignment.
- **Natural semantics (SN) before SOS** — Big-step semantics are easier to implement as interpreters; small-step (SOS) proofs in Coq capture finer-grained execution properties.
- **Rocq for machine-checked proofs** — Human-written proofs in `3-1-ANSWERS.txt` accompany Coq proofs in `TD6et7.v` — if the proof checker accepts it, the property holds.

## Results and takeaways

- OCaml interpreters correctly execute WHILEb programs including nested conditionals and loops.
- Coq proofs in `TD6et7.v` cover natural semantics (SN) and structural operational semantics (SOS) properties.
- For recruiters: this project shows **rigorous thinking about correctness** — the same discipline applies to API contracts, database migrations, and any system where "it works on my machine" is not good enough.

## Stack

| Layer | Technologies |
|-------|-------------|
| Implementation | OCaml |
| Verification | Rocq (Coq) |
| Concepts | Natural semantics, SOS, formal grammars |

## Links

- [github.com/soufian-elouazzani/formal-while-language](https://github.com/soufian-elouazzani/formal-while-language)
