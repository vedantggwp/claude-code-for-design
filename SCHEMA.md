# Wiki Schema

## Identity

- **Path:** /Users/ved/Developer/springpod/claude-code-for-design
- **Domain:** Claude Code for Design — tools, MCP servers, skills, plugins, and CLIs for design workflows
- **Source types:** Documentation, tutorials, API references, blog posts, tweets, GitHub READMEs
- **Created:** 2026-04-08

## Page Frontmatter

Every wiki page must start with YAML frontmatter:

```yaml
---
title: <page title>
tags: [tag1, tag2]
sources: [raw/topic/source-file.md]
updated: YYYY-MM-DD
---
```

## Cross-References

Use `[[topic/slug]]` where:
- `topic` = one of the taxonomy directories below
- `slug` = filename without `.md`, lowercase, hyphen-separated

Example: `[[figma/code-connect]]` resolves to `wiki/figma/code-connect.md`

For same-topic references, the topic prefix may be omitted: `[[code-connect]]`

## Log Entry Format

```
## [YYYY-MM-DD] <operation> | <title>
```

Operations: `init`, `ingest`, `query`, `update`, `lint`

## Taxonomy (wiki/ subdirectories)

| Directory | Scope |
|-----------|-------|
| `figma` | Figma MCP, Code Connect, design tokens, variables, component extraction |
| `diagrams` | D2, Mermaid, PlantUML, architecture diagrams, flowcharts, ERDs |
| `visual` | Image generation, social cards, thumbnails, Satori, Nano Banana, icons |
| `video` | Remotion, animation, motion design, video rendering |
| `design-systems` | Tokens, component libraries, theme systems, accessibility, responsive |
| `tools` | CLIs, MCP servers, plugins, skills for design workflows |
| `workflows` | End-to-end design patterns, tutorials, recipes combining multiple tools |

## Raw Source Taxonomy

`raw/` uses the same topic directories. Sources are saved as:

```
raw/<topic>/YYYY-MM-DD-descriptive-slug.md
```

Published date unknown: omit date prefix (`descriptive-slug.md`).

## Conventions

- `raw/` is immutable — skills never modify source documents
- `wiki/log.md` is append-only — never rewritten, only appended
- `wiki/index.md` is updated on every operation that adds or changes pages
- `wiki/` supports exactly one level of topic subdirectories (from the taxonomy above)
- All markdown links inside wiki/ files use paths relative to current file
- In conversation output, use project-root-relative paths
- Conflict annotations: when sources disagree, annotate with source attribution rather than silently choosing one
- Slugs: lowercase, hyphen-separated, max 60 characters, no special characters
