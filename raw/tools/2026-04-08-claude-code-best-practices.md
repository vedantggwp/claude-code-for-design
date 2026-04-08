---
source_url: https://www.anthropic.com/engineering/claude-code-best-practices
collected: 2026-04-08
published: Unknown
type: documentation
---

# Best Practices for Claude Code

Official Anthropic guide. Key practices:

- Highest-leverage practice: give Claude a way to verify its own work (tests, screenshots, expected outputs)
- 4-phase workflow: Explore (Plan Mode) → Plan → Implement (Normal Mode) → Commit
- Plan Mode: Ctrl+G to edit plan in editor, separates research from execution
- Context window management is the central constraint. Performance degrades as it fills
- Use /clear between unrelated tasks, /compact for targeted summarization, /btw for side questions
- Skills (.claude/skills/ with SKILL.md) provide domain-specific on-demand context without bloating every session
- Subagents (.claude/agents/*.md) run in their own context windows with scoped tool permissions
- Fan-out pattern: generate file list, then loop `claude -p` per file with --allowedTools
- Auto mode classifier blocks scope escalation and hostile-content-driven actions
- Writer/Reviewer pattern: two parallel sessions for implementation + review
- CLI: claude -p "prompt", claude --continue, claude --resume, --output-format json/stream-json
- Slash commands: /init, /clear, /compact, /rewind, /rename, /permissions, /hooks, /plugin, /btw
- Keyboard: Esc (stop), Esc+Esc (rewind menu), Ctrl+G (open plan in editor)
- MCP servers mentioned: Notion, Figma, databases
- CLI tools: gh, aws, gcloud, sentry-cli
- Claude in Chrome extension for UI verification
- File locations: CLAUDE.md (project root, ~/.claude/CLAUDE.md, parent/child dirs), CLAUDE.local.md, .claude/skills/*/SKILL.md, .claude/agents/*.md
- Skills YAML frontmatter: name, description, disable-model-invocation fields; $ARGUMENTS variable
- Subagent YAML frontmatter: name, description, tools (Read, Grep, Glob, Bash), model (opus)
