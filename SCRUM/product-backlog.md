# Product Backlog — Effectiveness Calculator

> **Product Vision:** A web-based Effectiveness Calculator that allows users to compare two scenarios by computing Efficacy, Efficiency, and Effectiveness scores — based on a formal operations-research framework (originally used by the U.S. military) as documented by Carlos Alberto Mejía C. (Planning S.A.).

---

## Completed Items (Done)

### Sprint 1 — Core Calculator (Spanish)

| ID | User Story | Status | Commit(s) |
|----|-----------|--------|-----------|
| PB-001 | **Project scaffolding:** As a developer, I need a basic project structure (`index.js`, `package.json`) so that development can begin. | ✅ Done | `11d2724` |
| PB-002 | **Basic UI with two calculators:** As a user, I want to see two side-by-side calculator forms (in Spanish) so I can input Expected Result, Achieved Result, Expected Cost, Actual Cost, Expected Time, and Actual Time for two scenarios and compare them. | ✅ Done | `9d301a0` |
| PB-003 | **CSS styling:** As a user, I want a clean, readable layout with card-style calculator panels, styled inputs, and a responsive grid so the tool is easy to use. | ✅ Done | `9d301a0` |
| PB-004 | **Calculation logic (Efficacy, Efficiency, Effectiveness):** As a user, I want to click "Calcular" and see the computed Efficacy (RA/RE), Efficiency ((RA/(CA×TA))/(RE/(CE×TE))), and Effectiveness (average of scores / max score) displayed as results. | ✅ Done | `9d301a0` |
| PB-005 | **Research document (PDF):** As a product owner, I need the source research document (`LOS_CONCEPTOS_DE_EFECTIVIDAD_EFICIENCIA.pdf`) included in the repo so the formulas and rating tables are traceable. | ✅ Done | `9d301a0` |

### Sprint 2 — Bug Fixes & Scoring Corrections

| ID | User Story | Status | Commit(s) |
|----|-----------|--------|-----------|
| PB-006 | **Fix efficacy scoring scale:** As a user, I need the efficacy score to be correct — 0 points for ≤20% fulfillment up to 5 points for >91% — because the original implementation had the scale inverted. | ✅ Done | `ab9df05` |
| PB-007 | **Separate efficiency scoring function:** As a user, I need efficiency scored by its quotient (ratio <1 → 1 pt, =1 → 3 pts, >1 → 5 pts) instead of reusing the percentage-based efficacy scoring, so results match the research framework's rating tables. | ✅ Done | `ab9df05` |
| PB-008 | **Effectiveness as percentage:** As a user, I want Effectiveness displayed as a percentage (average of both scores divided by max score of 5) so it's intuitive to read. | ✅ Done | `ab9df05` |

### Sprint 3 — Documentation & Translation

| ID | User Story | Status | Commit(s) |
|----|-----------|--------|-----------|
| PB-009 | **PDF to Markdown:** As a developer/contributor, I need the research document converted from PDF to Markdown (`LOS_CONCEPTOS_DE_EFECTIVIDAD_EFICIENCIA.md`) so that AI tools and collaborators can read and reference it directly. | ✅ Done | `787f791` |
| PB-010 | **Structured Markdown documentation:** As a reader, I want the research document reorganized with proper headings, tables, and sections so it's easy to navigate and understand. | ✅ Done | `429034b` |
| PB-011 | **Context & information file:** As a product owner, I need an `information.md` file capturing the origin story (LinkedIn conversation with Tyler Mann about measuring team performance) and explaining why this project exists. | ✅ Done | `4667b81` |
| PB-012 | **Translate documentation to English:** As an international user/contributor, I want the research document translated to English (`THE_CONCEPTS_OF_EFFECTIVENESS_EFFICIENCY.md`) so non-Spanish speakers can understand the framework. | ✅ Done | `6ff400c` |
| PB-013 | **Translate code to English:** As a developer, I want all HTML labels, JS variable names, function names, and comments translated from Spanish to English so the codebase is accessible to English-speaking contributors. | ✅ Done | `6ff400c` |

### Housekeeping

| ID | User Story | Status | Commit(s) |
|----|-----------|--------|-----------|
| PB-014 | **Code review workflow:** As a developer, I want a Windsurf workflow (`.windsurf/workflows/review.md`) for reviewing code changes for bugs, security issues, and improvements. | ✅ Done | `665bfca` |
| PB-015 | **Product Backlog:** As a product owner, I need a `SCRUM/product-backlog.md` file that serves as the project's "database" — tracking what was built, why, and in what order. | ✅ Done | current |

---

## Backlog Items (To Do / Future)

| ID | User Story | Priority | Notes |
|----|-----------|----------|-------|
| PB-016 | **Input validation & error handling:** As a user, I want clear error messages when I enter zero or negative values (division by zero) so the calculator doesn't show NaN or Infinity. | High | Currently no guard against zero inputs for cost/time fields. |
| PB-017 | **Side-by-side comparison summary:** As a user, I want a comparison panel that shows both scenarios' results together (winner highlighted) so I can quickly see which scenario is more effective. | Medium | The two calculators work independently — no visual comparison. |
| PB-018 | **Responsive/mobile design:** As a mobile user, I want the calculator panels to stack vertically on small screens so the tool is usable on phones. | Medium | Current flexbox layout may break on narrow viewports. |
| PB-019 | **Map framework to software teams:** As a team lead, I want guidance or examples on how to apply this framework to software team measurement (story points, sprint goals, delivery timelines) as discussed in the LinkedIn conversation with Tyler Mann. | High | This is the next logical step from `information.md`. |
| PB-020 | **Persist/export results:** As a user, I want to save or export my calculation results (CSV, PDF, or local storage) so I can reference them later. | Low | |
| PB-021 | **Visual charts:** As a user, I want bar or radar charts visualizing efficacy, efficiency, and effectiveness scores so the comparison is more intuitive. | Low | |

---

## Source Material

- **Research paper:** `THE_CONCEPTS_OF_EFFECTIVENESS_EFFICIENCY.md` — Carlos Alberto Mejía C., Planning S.A.
- **Original (Spanish):** `LOS_CONCEPTOS_DE_EFECTIVIDAD_EFICIENCIA.pdf`
- **Context/origin:** `information.md` — LinkedIn discussion with Tyler Mann on measuring team performance