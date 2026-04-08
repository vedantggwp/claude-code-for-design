---
title: Claude Code Best Practices for Design
tags: [workflow, best-practices, skills, subagents, context-management]
sources: [raw/tools/2026-04-08-claude-code-best-practices.md]
updated: 2026-04-08
---

# Claude Code Best Practices for Design

Official Anthropic practices, filtered for design workflows. The single highest-leverage practice: give Claude a way to verify its own work.

## Overview

The official best practices document covers general Claude Code usage. This page extracts the practices most relevant to design workflows, where visual verification and iterative refinement are central.

## The 4-Phase Design Workflow

1. **Explore (Plan Mode)** — research the codebase, understand existing design patterns, read design tokens. Use `Ctrl+G` to edit the plan in your editor.
2. **Plan** — define what you'll build, which components to use, what design system to follow.
3. **Implement (Normal Mode)** — generate code, run tests, take screenshots for visual verification.
4. **Commit** — review diff, run final visual QA, commit.

## Skills: On-Demand Design Context

Skills (`.claude/skills/*/SKILL.md`) provide domain-specific guidance **without bloating every session**. This is critical for design because:

- CLAUDE.md loads every session — putting design guidance here wastes context on non-design tasks
- Skills load just-in-time when the task matches the skill's description
- A design skill can be ~400 tokens but dramatically change output quality (see [[tools/frontend-design-plugin]])

### Skill configuration

```yaml
---
name: my-design-skill
description: "Use when building UI components with our brand's design system"
---
```

The `description` field controls when Claude loads the skill. Write it as a trigger condition.

Skills support `$ARGUMENTS` for parameterized invocation: `/my-skill dark-mode` passes "dark-mode" as the argument.

## Subagents: Isolated Design Review

Subagents (`.claude/agents/*.md`) run in their own context windows with scoped tool permissions. For design:

- **Screenshot reviewer agent** — takes screenshots and compares to Figma designs
- **Accessibility auditor agent** — checks generated UI for a11y issues
- **Design token validator agent** — verifies code uses correct tokens from the design system

```yaml
---
name: design-reviewer
description: "Reviews generated UI against Figma design specs"
tools: [Read, Grep, Glob, Bash]
model: opus
---
```

## Context Window Management

Context window is the central constraint. Design workflows are particularly hungry because:
- Figma MCP responses include detailed component hierarchies
- Screenshots consume significant context
- Design token definitions can be long

Practices:
- Use `/clear` between unrelated design tasks
- Use `/compact` to summarize completed design work
- Use `/btw` for quick design questions that shouldn't enter main history
- Prefer `get_metadata` (sparse XML) over `get_design_context` (full code) for initial exploration

## Verification for Design

The highest-leverage practice applied to design:

- **Screenshots** — use Claude in Chrome or agent-browser to capture the running UI
- **Visual diff** — compare screenshot against Figma design
- **Test suites** — component tests verify behavior, visual regression tests verify appearance
- **Autonomous loops** — Claude writes code → runs tests → takes screenshot → iterates (see [[workflows/figma-to-code]])

## Fan-Out Pattern for Design Systems

For bulk operations across a design system (updating 50 components to a new token system):

```bash
# Generate file list
find src/components -name "*.tsx" > component-list.txt

# Process each with constrained tools
cat component-list.txt | xargs -I{} claude -p "Update {} to use new design tokens" --allowedTools Edit,Read,Grep
```

## See Also

- [[tools/frontend-design-plugin]] — The most important design skill
- [[tools/distributional-convergence]] — Why skills matter for design quality
- [[figma/figma-mcp-server]] — The primary design data source
- [[workflows/figma-to-code]] — How Anthropic's Design team applies these practices
