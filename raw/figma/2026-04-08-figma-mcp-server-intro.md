---
source_url: https://www.figma.com/blog/introducing-figma-mcp-server/
collected: 2026-04-08
published: 2025-06-04
type: article
---

# Introducing our MCP server: Bringing Figma into your workflow

Author: Jake Albaugh (Developer Advocate, Figma)

Original beta announcement (June 2025). Three initial tools:
1. get_design_context — code output
2. get_screenshot — visual/layout context
3. get_variable_defs — variable definitions

Server translates design intent through 4 context channels:
1. Pattern metadata — components, variables, styles, Code Connect
2. Screenshots — visual/layout context
3. Interactivity — pseudocode/React representations
4. Content — text, SVG, images, layer names, annotations

Key concepts:
- Code Connect lets Figma share exact path to code file the agent needs
- Variable code syntax surfaces exact token names/code to LLM
- Default output: React + Tailwind, more frameworks planned
- Initially desktop-only, remote capabilities came later
- Configurable settings control what tools return (context window optimization)
- Supported clients at launch: Copilot in VS Code, Cursor, Windsurf, Claude Code
