---
name: wiki-query
description: "Use when asking questions about design tools, Claude Code integrations, or any topic covered by the wiki. Searches the wiki, synthesizes an answer from existing pages, and optionally archives the answer as a new page. Triggers: 'what do I know about', 'wiki-query', 'search wiki', or design-related questions."
---

# Wiki Query

Search the wiki and synthesize answers from compiled knowledge.

## Pre-condition

1. Read `SCHEMA.md` to locate the wiki.
2. If QMD MCP is available, prefer `qmd query` for semantic search. Otherwise, use `wiki/index.md` as the entry point.

## Process

### 1. Understand the question

Parse what the user is asking. Identify:
- Key entities/concepts to look up
- Relevant topic directories from the taxonomy
- Whether this is a factual lookup or a synthesis question

### 2. Search the wiki

**If QMD MCP is available:**
- Run `qmd query "<question>"` to find relevant pages
- Read the top results in full

**If QMD is not available:**
- Read `wiki/index.md` to find relevant articles
- Follow one level of `[[topic/slug]]` cross-references
- Read each relevant article

### 3. Synthesize the answer

- Draw ONLY from wiki content — never from model training data
- Cite sources with `[[topic/slug]]` links inline
- If the wiki doesn't have enough to answer, say so explicitly: "The wiki doesn't cover this yet. Would you like me to research and ingest sources about it?"
- If sources in the wiki disagree, present both views with attribution

### 4. Offer to archive

After answering, ask: **"Want me to save this answer as a wiki page?"**

If yes:
- Use `references/archive-template.md` format
- Place in the most relevant topic directory
- Add `[Archived]` prefix in `wiki/index.md`
- Append to `wiki/log.md`:
  ```
  ## [YYYY-MM-DD] query | Archived: <page title>
  ```
- Archive pages are point-in-time snapshots — never cascade-updated

### 5. Suggest further research

If the question revealed gaps in the wiki, suggest:
- Specific sources to ingest
- Related topics that lack coverage
- Open questions to add to `wiki/overview.md`

## Common Mistakes to Avoid

- NEVER answer from model memory when wiki pages exist on the topic
- NEVER modify existing wiki pages during a query (use wiki-update for that)
- NEVER create non-archive pages during a query operation
- ALWAYS offer to archive — the user's question is itself knowledge worth compiling
