---
source_url: https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/
collected: 2026-04-08
published: Unknown
type: api-reference
---

# Figma MCP Server — Tools and Prompts Reference

16 tools total:

| Tool | Description | Availability |
|------|-------------|--------------|
| generate_figma_design | Generate design layers from live UI. Sends to new/existing files or clipboard. Exempt from rate limits. | Remote only, select clients |
| get_design_context | Get design context for layer/selection. Default: React + Tailwind. Customizable via prompt. | Both |
| get_variable_defs | Return variables and styles (colors, spacing, typography) | Both |
| get_code_connect_map | Retrieve Figma-node-to-code-component mappings | Both |
| add_code_connect_map | Add mapping between Figma node ID and code component | Both |
| get_screenshot | Screenshot of selection for layout fidelity | Both |
| create_design_system_rules | Create rule file for codebase-aware frontend code translation | Both |
| get_metadata | Sparse XML with layer IDs, names, types, position, sizes | Both |
| get_figjam | FigJam diagram metadata in XML with screenshots | FigJam |
| generate_diagram | Generate FigJam diagrams from Mermaid syntax | Both |
| whoami | Authenticated user identity, email, plans, seat types | Remote only |
| get_code_connect_suggestions | Detect and suggest Code Connect mappings | Both |
| send_code_connect_mappings | Confirm Code Connect mappings after suggestions | Both |
| use_figma | General-purpose: create, edit, delete, inspect any Figma object. Free beta, will become paid. | Both |
| search_design_system | Search connected design libraries by text query | Both |
| create_new_file | Create blank Design or FigJam file in drafts | Both |

Key details:
- get_design_context default output: React + Tailwind, changeable to Vue, HTML+CSS, iOS, SwiftUI
- use_figma best invoked with figma-use skill
- get_code_connect_map returns: componentName, source, snippet, snippetImports, snippetNestedFunctions, version, label
- Remote supports clientFrameworks/clientLanguages params on get_code_connect_map
- Selection-based prompting only with desktop server; remote requires link
