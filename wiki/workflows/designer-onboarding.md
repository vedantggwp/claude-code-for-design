---
title: Designer Onboarding — Zero to Shipping
tags: [workflow, beginner, designer, onboarding]
sources: [raw/workflows/2026-04-08-builder-io-designers-guide.md, raw/workflows/2026-04-08-felix-lee-designer-guide.md, raw/workflows/2026-04-08-oliur-build-websites.md, raw/workflows/2026-04-08-jessica-hische-portfolio.md]
updated: 2026-04-08
---

# Designer Onboarding — Zero to Shipping

Four independent sources converge on the same insight: designers with zero coding experience can ship production websites using Claude Code. This page synthesizes the onboarding patterns across all four guides.

## Two Entry Points

### Claude Desktop App (recommended for beginners)
Used by: Oliur, Builder.io, Jessica Hische

1. Open Claude Desktop > navigate to **Code** tab (not Chat)
2. Create a dedicated project folder
3. Enable auto-accept edits for speed (disable for safety)
4. Click **Preview** button for local dev server
5. Describe what you want in plain English

### CLI (for more control)
Used by: Felix Lee

```bash
npm install -g @anthropic-ai/claude-code
claude
```

## The Universal Workflow

Despite different authors and audiences, all guides follow the same core loop:

```
Describe → Generate → Preview → Iterate → Deploy
```

### 1. Describe
Write a natural language prompt. Be specific about what you want:
- "Make me a personal website with an avatar, name, bio, project links, and contact form"
- "Create a Button component with primary/secondary/ghost variants, sm/md/lg sizes"

### 2. Generate
Claude reads your prompt (and optionally your Figma design via MCP), then generates code.

### 3. Preview
- **Desktop app**: Click Preview button (top-right)
- **CLI**: Ask Claude for a localhost link, or use `npx serve`
- **Fallback**: If preview is buggy, open `localhost:3000` in your browser

### 4. Iterate
Conversational refinement — just like giving feedback on a Figma file:
- "Add dark mode with a toggle in the top right"
- "Make the loading spinner smaller"
- "Add a blog grid section under projects"

**Pro tip (Oliur):** Drag images directly into the chat for avatar/image updates.

### 5. Deploy

| Platform | Guide | Best for |
|----------|-------|----------|
| Vercel | Felix Lee | Free, auto-deploy on push |
| Hostinger | Oliur | Custom domains, one-click |
| GitHub Pages | Jessica Hische | Free, simple static sites |

## The Plan-First Pattern

Felix Lee's strongest recommendation: **always ask for a plan before code**.

```
"Research how to build [X] and create a plan.md with tech stack, 
file structure, and implementation phases."
```

This mirrors Plan Mode in Claude Code — separating research from execution. Builder.io calls Plan Mode "the single habit that gets you 80% of the safety you want."

## Common Blockers

| Blocker | Fix |
|---------|-----|
| Environment variables | Get `.env` from an engineer. Never paste secrets into chat. |
| Git merge conflicts | The "boss fight." Start with solo projects, learn PRs later. |
| Preview not working | Fall back to `localhost:3000` in browser |
| Site not updating after deploy | Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R |
| Permission prompts annoying | Enable auto-accept edits (trades safety for speed) |
| Screenshots produce hardcoded values | Use Figma MCP instead of pasting screenshots |

## Mental Models for Designers

- **"Cloning a repo is like duplicating a Figma file"** — worst case, delete the folder and re-clone (Builder.io)
- **"The dev cycle mirrors a design feedback loop"** — iterate through prompts like giving feedback on a Figma comp (Felix Lee)
- **"You describe components using design vocabulary"** — the CLAUDE.md enforces translation to code (Dhika Endi Astowo)

## Framework Paths (Jessica Hische)

| Need | Framework | Hosting |
|------|-----------|---------|
| Simple portfolio | Static HTML/CSS | Free (GitHub Pages) |
| Blog/structured content | Eleventy | Free |
| Frequent visual editing | Kirby CMS | Paid hosting |

## See Also

- [[workflows/claude-code-best-practices]] — Official practices including Plan Mode and skills
- [[figma/figma-mcp-server]] — Connect Figma designs instead of pasting screenshots
- [[tools/frontend-design-plugin]] — Ensure generated code doesn't look generic
- [[design-systems/community-design-skills]] — 63+ free design skills for Claude Code
