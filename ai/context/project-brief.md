# Project Brief

> This file is the primary source of truth for all agents.

---

## Project Name

Effectiveness Calculator (efectividad)

## Product Vision

A web-based Effectiveness Calculator that enables software team leads and managers to measure team/process performance using a formal operations-research framework (Efficacy, Efficiency, Effectiveness) — originally used by the U.S. military and documented by Carlos Alberto Mejía C. (Planning S.A.). The tool bridges the gap between pseudo-metrics (hours logged, tickets closed, OKR scores) and meaningful performance measurement by combining goal attainment with cost/time efficiency into a single comparable metric.

**Strategic direction (Sprint 4+):** Keep the two-calculator Comparator, create concrete mappings to software team data (sprints, story points, OKRs), and validate the framework using a synthetic dataset derived from this project's own completed Product Backlog Items.

## Target Users

- **Primary: Tyler Mann** — engineering leader exploring team measurement beyond pseudo-metrics. First external collaborator. Needs to see how his existing data (story points, sprint goals, team cost, timelines) maps to the framework.
- **Team leads / engineering managers** who need a structured, objective way to measure team or process performance beyond pseudo-metrics like hours logged or tickets closed.
- **Operations / project managers** evaluating scenario trade-offs between cost, time, and results.
- **International collaborators** — the tool and documentation are available in English (translated from original Spanish).

## Key Features

- **Two side-by-side calculator forms** to input Expected/Achieved Results, Cost, and Time for two scenarios and compare them
- Computation of Efficacy (goal attainment), Efficiency (resource utilization), and Effectiveness (composite score)
- Scoring based on the research framework's rating tables (percentage bands for efficacy, ratio thresholds for efficiency)
- **Software team mapping guide** — documentation explaining how to plug sprint/OKR data into the calculator fields
- **Preloaded examples** — preset scenarios using software team data (Sprint delivery, OKR cycle)
- **Synthetic test dataset** — derived from this project's 15 completed PBIs with estimated ER, AR, EC, AC, ET, AT values
- Research documentation translated and structured in Markdown for AI and human consumption

## Value Proposition (vs. OKRs alone)

OKRs measure *what* was achieved (Key Result target vs actual = Efficacy). This framework adds *how efficiently* it was achieved (cost × time dimension) and produces a single Effectiveness score — answering Tyler's question: "How do we measure to overcome outcome bias?"

| OKR Concept | Framework Mapping |
|---|---|
| Key Result target | Expected Result (RE) |
| Key Result actual | Achieved Result (RA) |
| Budget/resources allocated | Expected Cost (CE) |
| Budget/resources consumed | Actual Cost (CA) |
| Planned timeline | Expected Time (TE) |
| Actual timeline | Actual Time (TA) |
| OKR Score (0.0-1.0) | ≈ Efficacy (RA/RE) |
| *(not in OKRs)* | Efficiency — the cost/time dimension OKRs lack |
| *(not in OKRs)* | Effectiveness — composite score OKRs can't produce |

## Success Criteria

- The calculator produces correct results matching the rating tables from the research paper
- The tool is publicly accessible and usable on desktop and mobile
- The framework is documented well enough for software team leads (specifically Tyler) to apply it with their own data
- A synthetic dataset of 15 PBIs validates the calculator end-to-end
- Zero critical bugs (no NaN/Infinity, no incorrect scoring)

## Stakeholders

| Role | Name/Description |
|------|-----------------|
| Creator / Developer | Heikel Andres Molina (@qbah3h) |
| Target Collaborator | Tyler Mann (LinkedIn — interested in applying the framework to software teams) |
| End Users | Team leads, engineering managers, operations professionals |

## Current State

Existing codebase with 3 completed Sprints. Core two-calculator Comparator is functional in English. Research documentation is translated and structured. No automated tests, no deployment, no mobile optimization yet. New strategic direction identified: create software team mappings, build synthetic test dataset, add validation, and deploy.

## Technology Stack

- **Frontend:** Vanilla HTML, CSS, JavaScript (no framework)
- **Hosting:** Not yet deployed (GitHub repo: `qbah3h/efectividad`)
- **Tooling:** Windsurf IDE with AI workforce (`ai/` folder)

## Timeline

- Sprints 1–3 completed (core calculator, bug fixes, documentation/translation)
- Sprint 4 planned: input validation, software team mapping, synthetic dataset, testing, deployment
- No hard external deadlines — driven by Tyler collaboration and quality

## Reference Materials

- **Research paper (English):** `docs/THE_CONCEPTS_OF_EFFECTIVENESS_EFFICIENCY.md`
- **Research paper (Spanish, original):** `docs/LOS_CONCEPTOS_DE_EFECTIVIDAD_EFICIENCIA.pdf`
- **Context / origin story:** `docs/information.md` — LinkedIn discussion with Tyler Mann
- **OKR reference:** https://www.ibm.com/think/topics/okrs — IBM OKR framework overview
- **GitHub repo:** https://github.com/qbah3h/efectividad

## Backlog Location

`ai/context/product-backlog.md`
