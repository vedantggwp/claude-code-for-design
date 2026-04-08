---
source_url: https://help.figma.com/hc/en-us/articles/32132100833559
collected: 2026-04-08
published: Unknown
type: documentation
---

# Guide to the Figma MCP Server

Two server modes:
- Remote Server (recommended): hosted at https://mcp.figma.com/mcp, available on all seats/plans
- Desktop Server: requires Dev or Full seat on paid plans, runs locally at http://127.0.0.1:3845/mcp

15+ supported clients: Claude Code, Claude Desktop, VS Code, Cursor, Windsurf, Android Studio, Amazon Q, Codex, Copilot CLI, Replit, Factory

Core capabilities:
1. Canvas Writing — create/modify native Figma content from MCP client (remote only, free beta, will become usage-based paid)
2. Code Generation — select frames, convert to code
3. Design-to-Code — capture live UI, convert to design layers
4. Context Extraction — pull variables, components, layout data
5. Code Connect Integration — maintain component-to-code consistency

Claude Code setup (plugin install — preferred):
  claude plugin install figma@claude-plugins-official

Claude Code setup (manual):
  claude mcp add --transport http figma https://mcp.figma.com/mcp

User-wide scope:
  claude mcp add --scope user --transport http figma https://mcp.figma.com/mcp

Desktop server:
  claude mcp add --transport http figma-desktop http://127.0.0.1:3845/mcp

Then: /mcp → select figma → Authenticate → Allow Access in browser

Desktop server settings: image mode (localhost links vs download), enable Code Connect
Two prompting modes: Selection-based (desktop only) and Link-based (paste frame URL)
