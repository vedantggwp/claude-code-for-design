---
title: Figma to Code Workflow
tags: [workflow, figma, design-team, anthropic]
sources: [raw/tools/2026-04-08-how-anthropic-teams-use-claude-code.md, raw/figma/2026-04-08-figma-code-to-canvas.md]
updated: 2026-04-08
---

# Figma to Code Workflow

How Anthropic's own Product Design team uses Claude Code — feeding Figma designs directly into autonomous coding loops. This is the reference workflow for design-to-code with Claude Code.

## Overview

Anthropic's Design team reported being 2-3x faster using Claude Code. Their workflow treats Claude as a thought partner, not just a code generator. The key insight: the boundary between "design" and "development" dissolves when an AI can operate in both modes.

## The Anthropic Design Team Workflow

### 1. Design Discovery

Before any implementation, the team uses Claude Code for **design discovery**:
- Map out error states and edge cases
- Trace logic flows and system statuses
- Identify scenarios that would normally surface during development

This shifts edge-case discovery from the development phase (expensive) to the design phase (cheap).

### 2. Figma → Claude Code

The team feeds Figma design files directly to Claude Code:
1. Share a Figma frame link
2. Claude calls `get_design_context` to extract the design as React + Tailwind code
3. Claude calls `get_variable_defs` for design tokens (colors, spacing, typography)
4. If Code Connect is set up, Claude uses `get_code_connect_map` to find real components

### 3. Autonomous Loop

The distinguishing feature of Anthropic's approach: **autonomous iteration loops**.

```
Claude writes code → runs tests → checks results → iterates
```

The human reviews periodically, not on every cycle. This is possible because:
- Tests provide automated verification
- Screenshots (via Claude in Chrome or [[tools/agent-browser]]) provide visual verification
- The design spec from Figma provides the target

### 4. PR and Review

The Design team uses Claude Code to:
- Write comprehensive unit tests
- Automate PR comments through GitHub Actions
- Handle formatting and test case refactoring

## The Bidirectional Extension

The workflow extends beyond one-directional Figma → Code:

1. **Prototype in code** — use Claude Code to rapidly build ideas
2. **Capture to Figma** — push live UI to Figma via `generate_figma_design`
3. **Design team iterates** — in Figma's native collaborative environment
4. **Pull back to code** — feed the refined design back via MCP

See [[figma/code-to-canvas]] for details on the bidirectional tools.

## What Non-Designers Use This For

The article reveals that Data Scientists at Anthropic build entire React applications despite not being fluent in TypeScript. Growth Marketing built a Figma plugin generating 100 ad variations. Legal created phone tree prototypes. The pattern: Claude Code makes design implementation accessible to non-designers.

## Key Takeaways

- Treat Claude as a **thought partner**, not a code generator
- Use **design discovery** to find edge cases before implementation
- Set up **autonomous loops** with test-based verification
- The **bidirectional workflow** lets designers and developers work in their native tools
- **Non-designers** can implement real designs with Claude Code

## See Also

- [[figma/figma-mcp-server]] — The 16 tools powering this workflow
- [[figma/code-connect]] — Makes Figma → Code more accurate by mapping components
- [[figma/code-to-canvas]] — The reverse direction for bidirectional workflows
- [[tools/frontend-design-plugin]] — Controls the aesthetic quality of generated code
- [[workflows/claude-code-best-practices]] — Official best practices for the tooling
