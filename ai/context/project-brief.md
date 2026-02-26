# Project Brief

> This file is the primary source of truth for all agents.

---

## Project Name

Effectiveness Calculator (efectividad)

## Product Vision

A web-based Effectiveness Calculator that allows users to compare two scenarios by computing Efficacy, Efficiency, and Effectiveness scores — based on a formal operations-research framework (originally used by the U.S. military) as documented by Carlos Alberto Mejía C. (Planning S.A.). The tool bridges quantitative and qualitative measurement by scoring raw ratios into qualitative bands and combining them into a single comparable metric.

## Target Users

- **Team leads / engineering managers** who need a structured, objective way to measure team or process performance beyond pseudo-metrics like hours logged or tickets closed.
- **Operations / project managers** evaluating scenario trade-offs between cost, time, and results.
- **International collaborators** — the tool and documentation are available in English (translated from original Spanish).

## Key Features

- Two side-by-side calculator forms to input Expected/Achieved Results, Cost, and Time for two scenarios
- Computation of Efficacy (goal attainment), Efficiency (resource utilization), and Effectiveness (composite score)
- Scoring based on the research framework's rating tables (percentage bands for efficacy, ratio thresholds for efficiency)
- Research documentation translated and structured in Markdown for AI and human consumption

## Success Criteria

- The calculator produces correct results matching the rating tables from the research paper
- The tool is publicly accessible and usable on desktop and mobile
- The framework is documented well enough for software team leads to apply it to their context
- Zero critical bugs (no NaN/Infinity, no incorrect scoring)

## Stakeholders

| Role | Name/Description |
|------|-----------------|
| Creator / Developer | Heikel Andres Molina (@qbah3h) |
| Target Collaborator | Tyler Mann (LinkedIn — interested in applying the framework to software teams) |
| End Users | Team leads, engineering managers, operations professionals |

## Current State

Existing codebase with 3 completed Sprints. Core calculator is functional in English. Research documentation is translated and structured. No automated tests, no deployment, no mobile optimization yet.

## Technology Stack

- **Frontend:** Vanilla HTML, CSS, JavaScript (no framework)
- **Hosting:** Not yet deployed (GitHub repo: `qbah3h/efectividad`)
- **Tooling:** Windsurf IDE with AI workforce (`ai/` folder)

## Timeline

- Sprints 1–3 completed (core calculator, bug fixes, documentation/translation)
- Sprint 4 planned: input validation, comparison features, testing
- No hard external deadlines — driven by collaboration interest and quality

## Reference Materials

- **Research paper (English):** `src/THE_CONCEPTS_OF_EFFECTIVENESS_EFFICIENCY.md`
- **Research paper (Spanish, original):** `src/LOS_CONCEPTOS_DE_EFECTIVIDAD_EFICIENCIA.pdf`
- **Context / origin story:** `src/information.md` — LinkedIn discussion with Tyler Mann
- **GitHub repo:** https://github.com/qbah3h/efectividad

## Backlog Location

`ai/context/product-backlog.md`
