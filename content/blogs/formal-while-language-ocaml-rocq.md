---
title: "WHILE Language — OCaml Interpreters and Rocq Proofs"
date: "2025-01-15"
description: "Formal methods: WHILEb/WHILEb-- parsers in OCaml, natural semantics, and machine-checked proofs in Rocq (Coq)."
tags: ["OCaml", "Rocq", "Formal Methods", "Semantics"]
coverImage: "/logo.png"
---

**Repo:** [github.com/soufian-elouazzani/formal-while-language](https://github.com/soufian-elouazzani/formal-while-language)

The repository is organized in three parts:

1. **Préliminaires** — Grammars for WHILEb-- and WHILEb, plus natural semantics (SN) rules for `if expr then P else Q`.
2. **Partie principale** — OCaml parsers and executors for WHILEb-- and WHILEb, including a whitespace-tolerant analyzer.
3. **Extensions** — Lazy lists, memory management, step counters, interactive stepping, and proofs in `TD6et7.v`.

## Why it matters

Syntax and semantics are separate artifacts. Parsers can be correct while proofs about execution fail — formal verification forces you to align grammars, operational rules, and implementations.

Coq proofs in `TD6et7.v` cover natural semantics (SN) and structural operational semantics (SOS), with French write-ups in `3-1-ANSWERS.txt` for human-readable reasoning alongside machine-checked steps.
