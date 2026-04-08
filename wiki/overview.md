---
title: Overview
tags: [overview, synthesis]
sources: [raw/tools/2026-04-08-claude-code-best-practices.md, raw/tools/2026-04-08-how-anthropic-teams-use-claude-code.md, raw/tools/2026-04-08-frontend-design-through-skills.md, raw/figma/2026-04-08-figma-mcp-server-setup.md, raw/figma/2026-04-08-figma-mcp-tools-reference.md]
updated: 2026-04-08
---

# Claude Code for Design — Overview

> Evolving synthesis of everything in the wiki. Updated by wiki-ingest when sources shift the understanding.

## Current Understanding

Claude Code connects to design workflows through multiple integration layers:

- **Figma MCP Server** — 16 tools for reading designs, writing to canvas, managing Code Connect mappings. Two modes: remote (hosted, all plans) and desktop (local, Dev seat). The bidirectional code-to-canvas workflow lets code flow to Figma and back. See [[figma/figma-mcp-server]].
- **Frontend Design Plugin** — 455K installs. A ~400 token skill that counters distributional convergence (the tendency of LLMs to produce generic "AI slop" designs). Names anti-patterns explicitly to steer the model toward bold, distinctive aesthetics. See [[tools/frontend-design-plugin]].
- **Skills System** — on-demand context loading. Skills are markdown files that load just-in-time based on task match, avoiding the context bloat of putting everything in CLAUDE.md. Critical for design because design guidance is only needed on design tasks. See [[workflows/claude-code-best-practices]].
- **Code Connect** — maps Figma components to codebase components so the LLM uses your real design system instead of generating generic approximations. See [[figma/code-connect]].
- **Autonomous Loops** — Anthropic's Design team runs Claude in loops: write code → run tests → take screenshots → iterate. This is the most productive design workflow documented. See [[workflows/figma-to-code]].

### The Core Problem: Distributional Convergence

LLMs trained on web data sample from the high-probability center — producing Inter fonts, purple gradients, white backgrounds. The fix: mid-altitude prompting that names anti-patterns and engages the model's design reasoning. See [[tools/distributional-convergence]].

## Open Questions

- ~~What is the best workflow for Figma-to-code with Code Connect?~~ Documented in [[workflows/figma-to-code]]
- How do design tokens flow from Figma variables to code theme systems? (Partially answered by Code Connect, needs dedicated article)
- What image generation tools work best inside Claude Code sessions? (Nano Banana, Satori, etc. — not yet ingested)
- How should visual QA loops work — screenshots, diff comparison, iteration? (Partially answered by best practices, needs dedicated article)
- What does the community skills ecosystem look like? (63+ design skills reported — not yet ingested)
- How do non-designers use Claude Code for design? (Anthropic's Data Science + Marketing teams — partially documented)

## Key Entities / Concepts

- **Figma MCP Server** — [[figma/figma-mcp-server]] — 16-tool bridge between Claude Code and Figma
- **Code Connect** — [[figma/code-connect]] — component-to-code mapping system
- **Code to Canvas** — [[figma/code-to-canvas]] — bidirectional design workflow
- **Frontend Design Plugin** — [[tools/frontend-design-plugin]] — anti-convergence skill (455K installs)
- **Distributional Convergence** — [[tools/distributional-convergence]] — why LLMs make generic designs
- **Figma to Code Workflow** — [[workflows/figma-to-code]] — Anthropic Design team's reference workflow
- **Claude Code Best Practices** — [[workflows/claude-code-best-practices]] — official practices for design context

- **Community Design Skills** — [[design-systems/community-design-skills]] — 63+ skills across 8 plugins (MC Dean)
- **Claude Code Ultimate Guide** — [[tools/claude-code-ultimate-guide]] — 3.1K-star community reference (Florian Bruniaux)
- **Designer Onboarding** — [[workflows/designer-onboarding]] — zero to shipping, synthesized from 4 guides
- **Figma Roundtrip Limitations** — [[figma/figma-roundtrip-limitations]] — honest assessment of bidirectional workflow friction

## Key People

- **Prithvi Rajasekaran** — Anthropic Applied AI, frontend-design plugin author
- **Alexander Bricken** — Anthropic Applied AI, frontend-design plugin co-author
- **Cat Wu** — Anthropic, frontend-design skill launch
- **Jake Albaugh** — Figma Developer Advocate, MCP server
- **Gui Seiz** — Figma Design Director of AI, code-to-canvas
- **Boris Cherny** — Claude Code creator
- **Dylan Field** — Figma CEO, integration announcements
- **MC Dean** — 63 design skills across 8 plugins (Owl-Listener/designer-skills)
- **Dhika Endi Astowo** — Design system designer workflow with CLAUDE.md
- **Felix Lee** — Most prolific designer-focused Claude Code educator
- **Jessica Hische** — Famous letterer, portfolio workshop signals creative professional adoption
- **Florian Bruniaux** — Claude Code Ultimate Guide (3.1K stars)
