---
title: Code to Canvas — Bidirectional Figma Workflow
tags: [figma, workflow, bidirectional, canvas-writing]
sources: [raw/figma/2026-04-08-figma-code-to-canvas.md, raw/figma/2026-04-08-figma-mcp-server-setup.md]
updated: 2026-04-08
---

# Code to Canvas — Bidirectional Figma Workflow

The defining feature of the Figma + Claude Code integration: code and design flow in both directions. Build in code, push to Figma for collaborative design review, then pull back into code via the MCP server.

## Overview

Traditionally, the workflow was one-directional: design in Figma → implement in code. The bidirectional workflow adds the reverse: capture running UI → editable Figma frames. This creates a loop:

```
Code (Claude Code) → Live UI → Figma (collaborative design) → Code (via MCP)
```

## Code → Figma: `generate_figma_design`

This tool captures live UI from a browser (production, staging, or localhost) and converts it into fully editable Figma frames.

**What it produces:**
- Editable Figma frames (not screenshots — actual layers you can modify)
- Multiple screens captured in a single session, preserving sequence and flow
- Each screen can be sent to clipboard and pasted into any Figma file

**Availability:** Remote server only, select MCP clients. Exempt from standard rate limits.

**Usage pattern:**
1. Run your app locally or point to a staging URL
2. Ask Claude to capture the UI to Figma
3. Claude calls `generate_figma_design` with the live interface
4. Result appears in your Figma file as editable frames

## Figma → Code: `get_design_context`

The reverse direction uses the standard MCP server tools:

1. Share a Figma frame link with Claude
2. Claude calls `get_design_context` (outputs React + Tailwind by default)
3. Optionally calls `get_variable_defs` for design tokens
4. Optionally calls `get_code_connect_map` for component mappings
5. Generates code that matches the design

## The Roundtrip Workflow

As described by Figma's design director Gui Seiz:

1. **Explore in code** — use Claude Code to rapidly prototype ideas
2. **Capture to Figma** — push working UI into Figma for the design team
3. **Diverge in Figma** — designers iterate, duplicate, annotate, explore alternatives
4. **Converge back to code** — select the winning direction, feed it back via MCP

This is particularly powerful because:
- Designers work in their native tool (Figma), not code
- Developers don't rebuild from scratch — they import from Figma
- The captured frames are real Figma objects, not static images

## Figma Make vs Claude Code to Figma

Two paths to the same destination:
- **Figma Make** — prompt-to-prototype on the canvas side (Figma's AI)
- **Claude Code to Figma** — capture from code side (Claude's AI)

Both produce editable Figma frames. Different starting points, same result.

## Limitations

- `generate_figma_design` is remote-only and limited to select clients
- Canvas writing is free during beta — will become usage-based paid
- Captured frames are structural approximations, not pixel-perfect replicas
- Complex interactive states may not fully capture

## See Also

- [[figma/figma-mcp-server]] — The server powering both directions
- [[figma/code-connect]] — Makes the Figma → Code direction more accurate
- [[workflows/figma-to-code]] — Anthropic's Design team's full workflow
