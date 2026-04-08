---
title: Figma MCP Server
tags: [figma, mcp, integration, core]
sources: [raw/figma/2026-04-08-figma-mcp-server-setup.md, raw/figma/2026-04-08-figma-mcp-tools-reference.md, raw/figma/2026-04-08-figma-mcp-server-intro.md]
updated: 2026-04-08
---

# Figma MCP Server

The Figma MCP server is the primary bridge between Claude Code and Figma. It exposes 16 tools for reading designs, generating code, writing to the canvas, and managing Code Connect mappings.

## Overview

Launched June 2025 (desktop-only beta), expanded to a hosted remote server with canvas writing capabilities. Two deployment modes serve different needs:

**Remote Server** (recommended for most users):
- Hosted at `https://mcp.figma.com/mcp`
- Available on all Figma seats and plans
- OAuth authentication via browser
- Supports canvas writing (`use_figma`, `generate_figma_design`)
- Link-based prompting only (paste Figma frame URL)

**Desktop Server** (for selection-based workflows):
- Runs locally at `http://127.0.0.1:3845/mcp`
- Requires Dev or Full seat on paid Figma plans
- Selection-based prompting (select in Figma desktop, prompt agent)
- Can download images directly to project folder

## Setup

### Plugin install (preferred)

```bash
claude plugin install figma@claude-plugins-official
```

This installs MCP server settings + agent skills for common workflows.

### Manual setup

```bash
# Project-scoped
claude mcp add --transport http figma https://mcp.figma.com/mcp

# User-wide (all projects)
claude mcp add --scope user --transport http figma https://mcp.figma.com/mcp

# Desktop server
claude mcp add --transport http figma-desktop http://127.0.0.1:3845/mcp
```

Then authenticate: `/mcp` → select **figma** → **Authenticate** → Allow Access in browser.

## Tool Inventory (16 tools)

### Design Reading

| Tool | What it does |
|------|-------------|
| `get_design_context` | Extracts design context as code. Default: React + Tailwind. Customizable to Vue, HTML+CSS, iOS, SwiftUI. |
| `get_screenshot` | Takes screenshot of selection for visual/layout reference. Keep this on. |
| `get_metadata` | Sparse XML with layer IDs, names, types, positions, sizes. Good for large designs. |
| `get_variable_defs` | Returns variables and styles — colors, spacing, typography tokens. |
| `search_design_system` | Searches connected design libraries for components, variables, styles by text query. |

### Canvas Writing

| Tool | What it does |
|------|-------------|
| `use_figma` | General-purpose: create, edit, delete, inspect any Figma object. Free during beta, will become usage-based paid. Best used with the `figma-use` skill. |
| `generate_figma_design` | Captures live UI from browser and converts to editable Figma frames. Remote only, select clients. Exempt from rate limits. |
| `create_new_file` | Creates blank Design or FigJam file in user's drafts. |
| `generate_diagram` | Generates FigJam diagrams from Mermaid syntax (flowchart, Gantt, state, sequence). |

### Code Connect

| Tool | What it does |
|------|-------------|
| `get_code_connect_map` | Retrieves mapping between Figma node IDs and codebase components. Returns componentName, source, snippet, imports. |
| `add_code_connect_map` | Adds new mapping between a Figma node ID and its code component. |
| `get_code_connect_suggestions` | Auto-detects and suggests Code Connect mappings. |
| `send_code_connect_mappings` | Confirms suggested mappings. |
| `create_design_system_rules` | Creates rule file for agents to translate designs into codebase-aware frontend code. |

### Utility

| Tool | What it does |
|------|-------------|
| `whoami` | Returns authenticated user identity, email, plans, seat types. Remote only. |
| `get_figjam` | Returns FigJam diagram metadata in XML with screenshots. FigJam files only. |

## How the Server Translates Design Intent

The MCP server provides 4 context channels to the LLM:

1. **Pattern metadata** — components, variables, styles, Code Connect mappings
2. **Screenshots** — visual/layout context for fidelity checking
3. **Interactivity** — pseudocode and React representations of behavior
4. **Content** — text, SVG, images, layer names, annotations

This holistic context is what makes it more useful than a simple screenshot — the LLM understands the *structure*, not just the pixels.

## Limitations and Gotchas

- Canvas writing via `use_figma` is free during beta but **will become usage-based paid**
- `generate_figma_design` is remote-only and limited to select MCP clients
- Selection-based prompting only works with desktop server; remote requires frame links
- Only clients listed in the [Figma MCP Catalog](https://www.figma.com/mcp-catalog) can connect
- `get_design_context` default is React + Tailwind — explicitly prompt for other frameworks

## See Also

- [[figma/code-connect]] — The component mapping system that powers `get_code_connect_map`
- [[figma/code-to-canvas]] — The bidirectional workflow using `generate_figma_design`
- [[tools/frontend-design-plugin]] — The skill that controls how Claude generates frontend code
- [[workflows/figma-to-code]] — End-to-end workflow from Figma designs to production code
