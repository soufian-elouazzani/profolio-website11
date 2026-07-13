---
title: "DevSecOps Pipeline with GitLab, Kubernetes, and Argo CD"
date: "2025-05-15"
description: "How I built a production-style GitLab CI/CD pipeline with Kubernetes, Argo CD GitOps, and SAST/SCA/DAST gates that block vulnerable builds before they reach the cluster."
tags: ["DevSecOps", "GitLab", "Kubernetes", "Argo CD", "CI/CD"]
coverImage: "https://raw.githubusercontent.com/soufian-elouazzani/http-server/refs/heads/main/docs/images/1_H9X3ox7LviQoxLBQcfx1CQ.png"
featured: true
---

**Dec 2024 – Jun 2025** · Academic Project — DevOps & Security

## Context

The goal was not simply to deploy an application to Kubernetes — it was to prove that a **secure software delivery pipeline** can catch vulnerabilities **before** they reach production. The project simulated how platform teams in regulated environments operate: every commit passes through build, test, security scan, and GitOps promotion stages, with hard gates that fail the pipeline when risk thresholds are exceeded.

Constraints included running on a local Minikube cluster, integrating multiple security tools without slowing the pipeline to a crawl, and keeping deployment state declarative via GitOps rather than imperative `kubectl apply` from CI.

## What I built

- A **GitLab CI/CD** pipeline that builds a Java/Maven application, runs unit tests, builds Docker images, and pushes artifacts to a registry.
- **Kubernetes manifests** deployed via **Argo CD** — the cluster reconciles from Git, not from manual commands.
- Integrated **SAST** (static analysis), **SCA** (dependency scanning), and **DAST** (dynamic testing) with automated pass/fail gates.
- **Observability hooks** with Prometheus and Grafana dashboards to monitor pipeline health and cluster state.
- Branch protection, signed commits, and approval workflows to model a secured SDLC.

## Technical decisions

- **Argo CD over raw kubectl in CI** — Git becomes the single source of truth for cluster state. Rollbacks are `git revert`, not manual undo. This mirrors how real teams manage drift and audit changes.
- **Security gates in CI, not as an afterthought** — SAST and SCA run on every merge request; DAST runs against a staging deployment. A critical CVE blocks the pipeline — the build never reaches Argo CD.
- **Minikube for local parity** — Same manifests and Argo CD config work locally and could be promoted to a cloud cluster with minimal changes.

## Results and takeaways

- Demonstrated that **security gates actually block bad builds** — intentionally introducing a vulnerable dependency caused the pipeline to fail at the SCA stage.
- GitOps reduced deployment anxiety: every change is traceable in Git history.
- For recruiters and clients: this project shows I understand **how software gets from code to production safely** — the same discipline applies whether you are shipping a shop, an API, or internal tooling.

## Stack

| Layer | Technologies |
|-------|-------------|
| CI/CD | GitLab CI/CD, Docker, Maven |
| Orchestration | Kubernetes, Minikube |
| GitOps | Argo CD |
| Security | SAST, SCA, DAST, SonarQube |
| Observability | Prometheus, Grafana |

## Links

- Pipeline and manifests are part of an academic DevSecOps coursework repository (available on request).
