# Claude Code for Design — Wiki

This is an LLM-maintained knowledge base about using Claude Code for design tasks, following Karpathy's LLM-wiki pattern.

## Wiki Operations

Use these skills to interact with the wiki:

| Skill | Command | Purpose |
|-------|---------|---------|
| `wiki-init` | `/wiki-init` | Bootstrap or reinitialize the wiki |
| `wiki-ingest` | `/wiki-ingest` | Add a new source (URL, file, or text) |
| `wiki-query` | `/wiki-query` | Ask questions, get answers from wiki |
| `wiki-lint` | `/wiki-lint` | Audit wiki health, fix broken links |
| `wiki-update` | `/wiki-update` | Revise an existing wiki page |

## Critical Rules

1. **ALWAYS read SCHEMA.md before any wiki operation** — it defines conventions, taxonomy, and cross-reference format
2. **NEVER modify files in `raw/`** — source documents are immutable
3. **NEVER overwrite `wiki/log.md`** — it is append-only
4. **ALWAYS surface takeaways before writing** — ingest asks for user confirmation first
5. **ALWAYS run the backlink audit after ingest** — bidirectional links are what make the wiki compound
6. **Use `[[topic/slug]]` for cross-references** — topic matches the taxonomy directory name

## Search

QMD is configured as an MCP server for semantic search across wiki pages. When available, prefer `qmd query` over manual index scanning.

## File Structure

- `SCHEMA.md` — wiki conventions, taxonomy, frontmatter format
- `raw/` — immutable source documents organized by topic
- `wiki/` — compiled knowledge articles organized by topic
- `wiki/index.md` — master catalog of all articles
- `wiki/log.md` — append-only operation history
- `wiki/overview.md` — evolving synthesis
- `references/` — templates for article, raw, archive, and index formats
- `.mcp.json` — QMD MCP server configuration
