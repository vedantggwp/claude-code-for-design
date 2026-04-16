---
name: wiki-update
description: "Use when revising, correcting, or expanding an existing wiki page. Checks downstream effects before modifying. Triggers: 'wiki-update', 'update wiki page', 'fix this wiki article', 'correct the wiki on'."
---

# Wiki Update

Revise an existing wiki page with full downstream effect checking.

## Pre-condition

1. Read `SCHEMA.md` for conventions.
2. Identify the target page — by name, slug, or topic.
3. Read the target page in full.

## Process

### 1. Understand the change

Ask the user what needs to change:
- **Correction** — factual error, outdated information
- **Expansion** — new details, additional sections
- **Restructure** — reorganize content, split/merge pages

### 2. Check downstream effects

Before making any changes, search for all pages that reference the target:

```
grep -r "[[topic/slug]]" wiki/
```

List every page that links to or mentions the target. These may need updating too.

### 3. Present the change plan

Tell the user:
- What will change in the target page
- Which downstream pages may be affected
- Whether any contradictions will be introduced or resolved

Ask: **"Does this look right? Any adjustments?"**

**WAIT for confirmation before writing.**

### 4. Apply the change

Update the target page:
- Modify content as discussed
- Update frontmatter `updated` date
- Add source to `sources` list if the update comes from a new source
- Preserve existing cross-references

### 5. Cascade downstream updates

For each page that references the target:
- Check if the reference context is still accurate
- Update summary text, relationship descriptions, or See Also entries as needed
- Refresh `updated` dates on modified pages

### 6. Contradiction sweep

After updating, scan nearby articles (same topic directory + cross-topic references) for:
- Claims that now contradict the updated content
- Outdated summaries of the updated page's content

If found, annotate with source attribution rather than silently choosing one version.

### 7. Update wiki/index.md

If the page title or summary changed, update the index entry.

### 8. Append to wiki/log.md

```
## [YYYY-MM-DD] update | <page title>
Changed: <brief description of change>
Downstream: <list of pages also updated>
```

### 9. Report to user

- What was changed
- Downstream pages updated
- Any contradictions found and annotated

## Common Mistakes to Avoid

- NEVER update without checking downstream references first
- NEVER write changes before getting user confirmation
- NEVER silently resolve contradictions — annotate with attribution
- NEVER modify files in `raw/`
- NEVER skip updating `wiki/index.md` when page title/summary changes
