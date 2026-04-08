---
source_url: https://www.anthropic.com/news/how-anthropic-teams-use-claude-code
collected: 2026-04-08
published: 2025-07-24
type: article
---

# How Anthropic Teams Use Claude Code

Teams covered: Product Design, Product Engineering, Security Engineering, Data Infrastructure, Data Scientists, Inference, Growth Marketing, Legal.

Key findings:

- Product Design team feeds Figma design files to Claude Code and sets up autonomous loops (write code → run tests → iterate)
- Design team uses Claude Code for design discovery — mapping error states, logic flows, system statuses to identify edge cases during design phase
- Design team also writes comprehensive unit tests and automates PR comments through GitHub Actions
- Data Scientists build entire React applications for visualizing RL model performance despite not being fluent in TypeScript
- Growth Marketing built agentic workflow with two specialized sub-agents: processes CSV of ads, identifies underperformers, generates hundreds of variations
- Growth Marketing also built a Figma plugin that programmatically generates up to 100 ad variations
- Security Engineering shifted to TDD with Claude, debugging 3x faster
- Legal team created phone tree prototype navigation systems
- Core finding: agentic coding tools dissolve boundary between technical and non-technical work
- Most successful teams treat Claude Code as thought partner, not code generator
- CLAUDE.md files consolidate scattered technical knowledge alongside MCP
- Example: Claude built Vim key bindings for itself with minimal human review
