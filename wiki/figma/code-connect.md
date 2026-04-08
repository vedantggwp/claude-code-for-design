---
title: Code Connect
tags: [figma, code-connect, design-system, mapping]
sources: [raw/figma/2026-04-08-figma-mcp-tools-reference.md, raw/figma/2026-04-08-figma-mcp-server-intro.md]
updated: 2026-04-08
---

# Code Connect

Code Connect is Figma's system for mapping design components to their codebase counterparts. When the Figma MCP server encounters a component with a Code Connect mapping, it gives the LLM the exact file path, import statement, and usage snippet — eliminating the guesswork of "which React component corresponds to this Figma frame?"

## Overview

Without Code Connect, the LLM sees a Figma component and has to guess which code component it maps to. With Code Connect, the mapping is explicit: Figma node `1:42` → `src/components/Button.tsx` with exact props and imports.

The mapping includes:
- `componentName` — name of the code component
- `source` — file path or URL to the component source
- `snippet` — usage code example
- `snippetImports` — import statements
- `snippetNestedFunctions` — any nested function patterns
- `version` — component version
- `label` — human-readable label

## MCP Tools for Code Connect

| Tool | Purpose |
|------|---------|
| `get_code_connect_map` | Read existing mappings for selected nodes |
| `add_code_connect_map` | Create a new mapping between node and component |
| `get_code_connect_suggestions` | Auto-detect components and suggest mappings |
| `send_code_connect_mappings` | Confirm suggested mappings |

The `get_code_connect_map` tool on the remote server accepts `clientFrameworks` and `clientLanguages` parameters to filter which mappings are returned — useful when a design system has both React and iOS implementations.

## How It Works with Claude Code

1. Select a Figma frame containing components with Code Connect mappings
2. Claude calls `get_code_connect_map` to get the component-to-code mapping
3. Instead of generating code from scratch, Claude imports and uses the actual codebase components
4. Result: generated code uses your real design system, not generic approximations

The `create_design_system_rules` tool takes this further — it generates a rules file that teaches the agent how to translate *any* design into code that follows your codebase's patterns.

## Setting Up Code Connect

Code Connect requires the desktop server or a Figma Dev/Full seat. Enable it in desktop server settings.

For the remote server, Code Connect data is included automatically when mappings exist for the queried components.

## Why It Matters

The core problem: LLMs generate code that *looks like* the design but doesn't use your actual components. You get a `<button className="bg-blue-500 px-4 py-2">` instead of `<Button variant="primary">`. Code Connect solves this by telling the LLM exactly which component to use and how to use it.

## See Also

- [[figma/figma-mcp-server]] — The server that exposes Code Connect tools
- [[design-systems/design-tokens]] — How design tokens flow from Figma to code
- [[workflows/figma-to-code]] — The full workflow where Code Connect is most impactful
