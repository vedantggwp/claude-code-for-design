---
source_url: https://www.figma.com/blog/introducing-claude-code-to-figma/
collected: 2026-04-08
published: 2026-02-17
type: article
---

# From Claude Code to Figma: Turning Production Code into Editable Figma Designs

Authors: Gui Seiz (Design Director of AI, Figma), Alex Kern (Software Engineer, Figma)

Key findings:

- Claude Code captures live UI from browser (production, staging, localhost) and converts to editable Figma frames
- Bidirectional workflow: code-first exploration → Figma for collaborative divergent design → roundtrip back via Figma MCP server
- Captured screens become fully editable Figma frames — organize, duplicate, annotate, refine
- Multiple screens captured in single session, preserving sequence and flow context
- Each captured screen can be sent to clipboard and pasted into any Figma file
- Figma Make generates prototypes from prompts on canvas side; Claude Code to Figma does same from code side
- Roundtrip back uses Figma MCP server with prompt + link to Figma frame
- Tool: generate_figma_design (details at developers.figma.com)
- MCP catalog: figma.com/mcp-catalog/
