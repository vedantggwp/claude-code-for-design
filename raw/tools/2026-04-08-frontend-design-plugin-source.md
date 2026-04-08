---
source_url: https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design
collected: 2026-04-08
published: Unknown
type: readme
---

# Frontend Design Plugin — Source Code

Install count: 455,628. Anthropic Verified. Authors: Prithvi Rajasekaran, Alexander Bricken.

Structure (3 files total):
- .claude-plugin/plugin.json
- skills/frontend-design/SKILL.md
- README.md

plugin.json:
```json
{
  "name": "frontend-design",
  "version": "1.0.0",
  "description": "Frontend design skill for UI/UX implementation",
  "author": {
    "name": "Prithvi Rajasekaran, Alexander Bricken",
    "email": "prithvi@anthropic.com, alexander@anthropic.com"
  }
}
```

SKILL.md description field: "Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, or applications."

Key sections in SKILL.md:
1. Design Thinking — understand purpose, pick BOLD aesthetic tone, identify differentiation
2. Frontend Aesthetics Guidelines — Typography (avoid generic fonts), Color & Theme (CSS variables, dominant+accent), Motion (CSS-only or Motion library, staggered reveals), Spatial Composition (asymmetry, overlap, grid-breaking), Backgrounds (atmosphere, textures, gradients)
3. Anti-patterns — Never use Inter/Roboto/Arial/system fonts, purple gradients on white, predictable layouts
4. Meta-instruction — Vary between light/dark themes, different fonts, different aesthetics. Never converge on common choices like Space Grotesk.

The entire plugin value is prompt engineering in one SKILL.md file.
