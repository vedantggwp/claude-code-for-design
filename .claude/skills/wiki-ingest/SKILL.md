---
name: wiki-ingest
description: "Use when adding a new source to the wiki — documentation, article, tutorial, README, tweet, or any reference about design tools and Claude Code. Accepts a URL, file path, or pasted text. One ingest may touch 10-15 wiki pages. Triggers: 'add to wiki', 'ingest this', 'wiki-ingest', or providing a URL/doc to research."
---

# Wiki Ingest

Add a source to the wiki. Read it, discuss with the user, write or update articles, maintain cross-references.

## Pre-condition

1. Read `SCHEMA.md` at project root. If not found, tell user to run `wiki-init` first.
2. Read `wiki/index.md` to understand what already exists.
3. Read `references/article-template.md` and `references/raw-template.md` for format specs.

## Process

### 1. Accept the source

The source can be:
- **URL** — fetch with `defuddle` skill or WebFetch; save to `raw/<topic>/YYYY-MM-DD-slug.md`
- **File path** — read directly; copy to `raw/<topic>/` if not already there
- **Pasted text** — save to `raw/<topic>/YYYY-MM-DD-slug.md`

Use the `raw-template.md` frontmatter format. Pick the most relevant topic directory from the taxonomy.

### 2. Read the source in full

Read ALL content. For long sources, read in sections. Do not skip or truncate.

### 3. Surface takeaways BEFORE writing

Present to the user:
- **3-5 key takeaways** from the source
- **Entities/concepts** this introduces or updates (check against existing index)
- **Contradictions** with anything already in the wiki (read relevant existing pages)
- **Suggested topic directory** and slug

Ask: **"Anything specific you want me to emphasize or de-emphasize? Any corrections to the categorization?"**

**WAIT for the user's response before writing any wiki pages.**

### 4. Write or update the primary article

Determine where content belongs:
- **Same core topic as existing article** → merge into that article; add source to frontmatter, update affected sections
- **New concept** → create new article using `article-template.md` format
- **Spans multiple topics** → place in most relevant directory; add `See Also` cross-references

Generate slug: lowercase, hyphens, max 60 chars.
Write to `wiki/<topic>/<slug>.md`.

### 5. Update entity and concept pages

For each entity/concept touched by this source:
- **Page exists** → read it, update relevant sections, add source to frontmatter `sources` list, update `updated` date
- **Page doesn't exist** → create it with Overview, How It Works with Claude Code, See Also sections

### 6. Cascade updates

After the primary article:
1. Scan articles in the same topic directory for content affected by new source
2. Scan `wiki/index.md` entries in OTHER topics for related concepts
3. Update every materially affected article; refresh `updated` dates

### 7. Backlink audit — DO NOT SKIP

Scan ALL existing pages in `wiki/` for any that mention this source's entities/concepts but don't yet link to the new/updated page. Add `[[topic/slug]]` cross-references where appropriate.

**This is the step most commonly skipped. A compounding wiki's value comes from bidirectional links.**

### 8. Update wiki/index.md

Add or update entries under the correct topic table:
```
| [Article Title](topic/slug.md) | One-line summary | YYYY-MM-DD |
```

### 9. Update wiki/overview.md

Re-read the current overview. If this source:
- Introduces a significant concept → add to "Key Entities / Concepts"
- Shifts overall understanding → update "Current Understanding"
- Raises a new question → add to "Open Questions"
- Answers an existing question → update or remove it

### 10. Append to wiki/log.md

```
## [YYYY-MM-DD] ingest | <source title>
Source: <URL or path>
Pages written: <list>
Pages updated: <list>
Backlinks added: <count>
```

### 11. Report to user

- Summary of what was written and updated
- List of cross-references created
- Any contradictions found and how they were annotated
- Suggest related sources to ingest next

## Common Mistakes to Avoid

- NEVER write wiki pages before showing takeaways and getting user confirmation
- NEVER skip the backlink audit (step 7)
- NEVER answer from model memory — only from the source document
- NEVER modify files in `raw/` after initial save
- NEVER overwrite `wiki/log.md` — only append
- NEVER create topic subdirectories not in the SCHEMA.md taxonomy without asking first
