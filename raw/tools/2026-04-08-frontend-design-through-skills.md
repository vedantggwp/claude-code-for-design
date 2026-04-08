---
source_url: https://claude.com/blog/improving-frontend-design-through-skills
collected: 2026-04-08
published: Unknown
type: article
---

# Improving Frontend Design through Skills

Authors: Prithvi Rajasekaran, Justin Wei, Alexander Bricken (Applied AI team)

Key findings:

- LLMs produce generic "AI slop" designs due to distributional convergence — safe design choices dominate web training data
- Skills solve steerability: markdown documents loaded just-in-time based on task requirements
- ~400 token prompt covering 4 design dimensions: Typography, Color/Theme, Motion, Backgrounds
- Typography alone produces significant improvement; mandating interesting fonts improves other aspects too
- "Prompting altitude" concept: avoid low-altitude hardcoded logic (exact hex codes) and vague high-altitude guidance
- Mid-altitude targeted language works best — engages model to think critically about design dimensions
- web-artifacts-builder skill overcomes single-HTML-file constraint using React + Tailwind + shadcn/ui + Parcel
- Even with anti-pattern instructions, Claude converges on other common choices (e.g., Space Grotesk)
- Final skill includes meta-instruction to "think outside the box"

Frontend aesthetics skill covers:
- Typography: Avoid Inter/Roboto/Open Sans/Lato/system fonts. Prefer JetBrains Mono, Fira Code (code); Playfair Display, Crimson Pro (editorial); IBM Plex, Source Sans 3 (technical); Bricolage Grotesque, Newsreader (distinctive). Extreme weight contrasts (100/200 vs 800/900), size jumps 3x+.
- Color & Theme: CSS variables. Dominant colors with sharp accents. IDE themes and cultural aesthetics.
- Motion: CSS-only for HTML, Motion library for React. Orchestrated page loads with staggered reveals.
- Backgrounds: Layer CSS gradients, geometric patterns, contextual effects.

Resources:
- Frontend design plugin: github.com/anthropics/claude-code/tree/main/plugins/frontend-design
- Frontend aesthetics cookbook: github.com/anthropics/claude-cookbooks/blob/main/coding/prompting_for_frontend_aesthetics.ipynb
- Skill creator: github.com/anthropics/skills/tree/main/skill-creator
- web-artifacts-builder: github.com/anthropics/skills/blob/main/web-artifacts-builder/SKILL.md
