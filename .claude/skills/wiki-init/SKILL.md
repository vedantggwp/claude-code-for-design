---
name: wiki-init
description: "Use when bootstrapping or reinitializing the Claude Code for Design wiki. Creates the directory structure, SCHEMA.md, index, log, overview, and reference templates. Run once at setup, or to reset/extend the wiki taxonomy."
---

# Wiki Init

Bootstrap or reinitialize the LLM-maintained wiki.

## Pre-flight

1. Check if `SCHEMA.md` exists at the project root.
2. If yes, ask: "A wiki already exists. Do you want to reinitialize (destructive) or extend the taxonomy?"
3. If extending, skip to step 4 of the process.

## Process

### 1. Confirm configuration

Read the existing `SCHEMA.md` if present. Ask the user:
- Any new topic categories to add to the taxonomy?
- Any source types to add?
- Any convention changes?

### 2. Create missing directories

For each topic in the taxonomy, ensure directories exist:
```
raw/<topic>/
wiki/<topic>/
```

Also ensure: `references/`, `assets/`

### 3. Write or update SCHEMA.md

Use the existing schema as base. Update:
- Taxonomy table with any new categories
- Source types list
- Created/updated dates

### 4. Write or update wiki base files

- `wiki/index.md` — add table headers for any new taxonomy categories
- `wiki/log.md` — append init entry (never rewrite existing entries)
- `wiki/overview.md` — update if domain description changed

### 5. Verify reference templates

Check that all 4 reference templates exist in `references/`:
- `article-template.md`
- `raw-template.md`
- `archive-template.md`
- `index-template.md`

If any are missing, recreate them.

### 6. Report

Tell the user:
- Wiki location and status
- Taxonomy categories available
- Next step: run `wiki-ingest` with a source URL or file

## Common Mistakes to Avoid

- Do NOT overwrite `wiki/log.md` — it is append-only
- Do NOT delete existing wiki pages during reinitialize
- Do NOT modify anything in `raw/` — it is immutable
