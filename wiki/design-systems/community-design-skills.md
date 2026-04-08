---
title: Community Design Skills Ecosystem
tags: [design-systems, skills, plugins, community]
sources: [raw/design-systems/2026-04-08-63-design-skills.md, raw/design-systems/2026-04-08-design-system-designer-workflow.md]
updated: 2026-04-08
---

# Community Design Skills Ecosystem

Beyond Anthropic's official [[tools/frontend-design-plugin]], a growing community has built 63+ design-specific skills spanning the full design lifecycle — from user research through developer handoff.

## MC Dean's Designer Skills (63 skills, 8 plugins)

**Install:** `/plugin marketplace add Owl-Listener/designer-skills`
**License:** MIT (free, open-source)

| Plugin | Skills | Key Command |
|--------|--------|-------------|
| **Design Research** | User Personas, Empathy Mapping, Journey Mapping | `/discover` |
| **Systems** | Token Coverage Audit, Naming Consistency, Accessibility Compliance, Theming Validation, Component Specs | — |
| **Strategy** | UX Strategy, Problem Statements, Metrics Definition | `/strategize` |
| **UI Design** | Accessible Color Palettes, WCAG AA Compliance, Primary/Secondary/Neutral/Semantic color systems | — |
| **Interaction Design** | Interactive Behavior Docs, State Management, Micro-Interaction Specs, User Flow Analysis | — |
| **Prototyping & Testing** | Heuristic Evaluation, Usability Testing, Severity Flagging, Accessibility Testing | `/prototyping-testing:evaluate` |
| **Design Operations** | Developer Handoff, Measurement Specs, Edge Cases, QA Checklists, Settings Patterns | `/design-ops:handoff` |
| **Designer Toolkit** | Portfolio Case Studies, Design Rationale, Project Templates | `/designer-toolkit:write-case-study` |

### Why These Skills Matter

MC Dean's key insight: skills encode **how experienced designers reason**, not just what they produce. The skills use conditional application logic ("if X context, then Y approach") rather than theoretical exposition. This means:

- Junior designers get scaffolding that mirrors senior thinking
- Senior designers free cognitive resources from predictable structural work toward taste and judgment
- The skills are "amplifiers, not replacements"

## CLAUDE.md as Design System Brain

Dhika Endi Astowo's approach (Design Systems Collective) shows how CLAUDE.md becomes the quality gate for a design system:

```markdown
# Design System Standards
- Spacing: 4px base (4/8/16/24/32/48)
- Typography: Inter
- Accessibility: WCAG 2.1 AA
- Component states: hover, focus, active, disabled
- Dark mode: required for all components
- Methodology: Atomic Design
```

With this in CLAUDE.md, Claude **cannot deviate** from documented standards. Every generated component automatically uses the correct tokens, spacing, and accessibility patterns.

### Natural Language Component Generation

```
"Create a Button component following CLAUDE.md standards. 
Include primary, secondary, and ghost variants. 
Sizes: sm, md, lg. Add loading state with spinner."
```

Claude generates the full component with correct tokens, states, and accessibility — because the CLAUDE.md tells it exactly what "correct" means.

## The Skill Ecosystem Landscape

| Source | Skills | Focus |
|--------|--------|-------|
| Anthropic `frontend-design` | 1 | Anti-convergence aesthetics |
| MC Dean `designer-skills` | 63 | Full design lifecycle |
| TypeUI (community) | Unknown | Design skill registries via CLI |
| impeccable.style | Unknown | Enhanced frontend-design |

## See Also

- [[tools/frontend-design-plugin]] — Anthropic's official anti-convergence skill
- [[tools/distributional-convergence]] — The problem skills solve
- [[workflows/designer-onboarding]] — Getting started with Claude Code as a designer
- [[workflows/claude-code-best-practices]] — How skills fit in the broader architecture
