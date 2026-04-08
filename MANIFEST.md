# Manifest

## Key Files
- `CLAUDE.md` — Project instructions and wiki operation guide
- `SCHEMA.md` — Wiki conventions, taxonomy, cross-reference format, frontmatter spec
- `.mcp.json` — QMD MCP server configuration for semantic search
- `wiki/index.md` — Master catalog of all wiki articles by topic
- `wiki/log.md` — Append-only operation history
- `wiki/overview.md` — Evolving synthesis of all wiki knowledge
- `references/article-template.md` — Template for wiki article pages
- `references/raw-template.md` — Template for raw source documents
- `references/archive-template.md` — Template for archived query answers
- `references/index-template.md` — Template for index table format
- `.claude/skills/wiki-init/SKILL.md` — Skill: bootstrap/reinitialize wiki
- `.claude/skills/wiki-ingest/SKILL.md` — Skill: add source to wiki
- `.claude/skills/wiki-query/SKILL.md` — Skill: search and answer from wiki
- `.claude/skills/wiki-lint/SKILL.md` — Skill: audit wiki health
- `.claude/skills/wiki-update/SKILL.md` — Skill: revise existing wiki pages

- `index.html` — Landing page with dynamic registry, live search, ingest modal
- `page.html` — Markdown article renderer with dynamic sidebar
- `wiki-registry.js` — Shared parser for wiki/index.md (powers search, sidebar, topic cards)
- `api/ingest.js` — Vercel serverless function: validates secret code, triggers GitHub Actions
- `.github/workflows/wiki-ingest.yml` — CI pipeline: headless Claude wiki-ingest → PR
- `first-list.md` — 65 curated URLs for wiki ingest, organized by learning tier and priority
- `intro-to-claude-code-for-design.html` — 9-slide Springpod-branded intro deck for designers
- `.claude/launch.json` — Dev server config for local preview

## Recent Changes
- 2026-04-08: Self-updating wiki — dynamic registry from wiki/index.md, ingest API + GitHub Actions, submission modal
- 2026-04-08: Created `page.html` — markdown renderer with Springpod chrome, sidebar, cross-ref resolution
- 2026-04-08: Created `index.html` — landing page with hero, problem section, 7-topic grid, featured articles, live search
- 2026-04-08: Created `intro-to-claude-code-for-design.html` — 9-slide intro deck using springpod-presentation skill
- 2026-04-08: Created `first-list.md` — 65 URLs across 9 tiers for wiki ingest (P0/P1/P2 prioritized)
- 2026-04-08: Created wiki structure — SCHEMA.md, references, skills, QMD config
- 2026-04-08: Initialized wiki with 7-topic taxonomy (figma, diagrams, visual, video, design-systems, tools, workflows)
