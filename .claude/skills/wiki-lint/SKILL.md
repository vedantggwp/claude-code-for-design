---
name: wiki-lint
description: "Use to audit wiki health — find broken links, orphan pages, contradictions, missing cross-references, and stale content. Run periodically or after bulk ingests. Triggers: 'wiki-lint', 'check wiki health', 'audit wiki'."
---

# Wiki Lint

Health audit for the wiki. Two categories: deterministic checks (auto-fixable) and heuristic checks (report only).

## Pre-condition

1. Read `SCHEMA.md` for conventions and taxonomy.
2. Read `wiki/index.md` for the current catalog.

## Deterministic Checks (auto-fix)

These are structural issues with unambiguous fixes. Apply automatically.

### RED — Broken References

**Index consistency:**
- File exists in `wiki/<topic>/` but missing from `wiki/index.md` → add entry with `(no summary)` placeholder
- `wiki/index.md` entry points to nonexistent file → mark as `[MISSING]`; do not delete the entry

**Internal links:**
- `[[topic/slug]]` reference points to nonexistent page → search wiki/ for same-named file elsewhere
  - Exactly one match → fix the path
  - Zero or multiple matches → report to user

**Raw references:**
- Source link in frontmatter points to nonexistent `raw/` file → search raw/ for similar filename
  - Exactly one match → fix the path
  - Zero or multiple matches → report to user

### YELLOW — Structural Issues

**Missing frontmatter:**
- Wiki page lacks required YAML frontmatter (title, tags, sources, updated) → report with specific missing fields

**See Also gaps:**
- Within each topic directory, articles that clearly relate but don't cross-reference → add `See Also` links

**Orphan removal:**
- Remove broken `[[slug]]` links that point to deleted pages

## Heuristic Checks (report only)

These require human judgment. Present findings, do not auto-fix.

### BLUE — Content Quality

- **Contradictions** — articles that make conflicting claims without source attribution
- **Stale content** — pages with `updated` dates >90 days old that reference fast-moving tools
- **Orphan pages** — wiki pages with zero inbound links from other pages
- **Missing concept pages** — entities/concepts mentioned in 3+ articles but lacking a dedicated page
- **Coverage gaps** — taxonomy categories with fewer than 2 articles
- **Thin pages** — articles with fewer than 100 words of content
- **Archive drift** — archive pages whose cited source articles have substantially changed since archival

## Process

### 1. Run deterministic checks

Scan all files in `wiki/` and `raw/`. Apply auto-fixes. Track what was fixed.

### 2. Run heuristic checks

Analyze content quality. Compile report.

### 3. Write lint report

Create `wiki/lint-report-YYYY-MM-DD.md` (not in a topic directory — at wiki root level):

```markdown
---
title: Lint Report YYYY-MM-DD
tags: [lint, maintenance]
sources: []
updated: YYYY-MM-DD
---

# Lint Report — YYYY-MM-DD

## Summary
- RED issues: N found, M auto-fixed
- YELLOW issues: N found, M auto-fixed
- BLUE issues: N found (manual review needed)

## Auto-Fixed (RED/YELLOW)
<list of fixes applied>

## Needs Attention (BLUE)
<list of heuristic findings with specific page references>
```

### 4. Append to wiki/log.md

```
## [YYYY-MM-DD] lint | <N> issues found, <M> auto-fixed
```

### 5. Report to user

Present findings by severity. For BLUE items, suggest specific actions:
- "Consider ingesting a source about X to fill the coverage gap"
- "These two articles contradict each other on Y — which is correct?"
- "Page Z has no inbound links — should it be cross-referenced from W?"

## Common Mistakes to Avoid

- NEVER auto-fix heuristic issues — they require human judgment
- NEVER delete index entries for missing files — mark them `[MISSING]` instead
- NEVER modify files in `raw/`
- NEVER rewrite `wiki/log.md` — only append
