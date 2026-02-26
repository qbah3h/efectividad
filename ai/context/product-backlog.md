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
| PB-015 | **Product Backlog:** As a product owner, I need a `ai/context/product-backlog.md` file that serves as the project's "database" — tracking what was built, why, and in what order. | ✅ Done | current |

---

## Backlog Items (To Do / Future)

Items are ordered by priority (highest first). All items must meet the Definition of Ready before entering a Sprint.

---

### PB-016 — Input validation & error handling

- **User Story:** As a user, I want clear error messages when I enter zero, negative, or non-numeric values so the calculator doesn't show NaN or Infinity.
- **Acceptance Criteria:**
  - Given any cost or time field is zero or negative, when I click Calculate, then an inline error message appears and no calculation is performed.
  - Given any field is empty or non-numeric, when I click Calculate, then an inline error message appears indicating which field is invalid.
  - Given all fields are valid positive numbers, when I click Calculate, then the calculation proceeds normally.
- **Story Points:** 3
- **Priority:** Must
- **Status:** To Do
- **Dependencies:** None
- **Sprint:** 4 (candidate)
- **Notes:** Currently no guard against zero inputs — division by zero produces NaN/Infinity in results.

---

### PB-022 — Unit tests for calculation logic

- **User Story:** As a developer, I want automated unit tests for `getEfficacyScore`, `getEfficiencyScore`, and the `calculate` function so that scoring regressions (like those fixed in Sprint 2) are caught automatically.
- **Acceptance Criteria:**
  - Given the test suite runs, then all efficacy scoring boundaries (≤20%, ≤40%, ≤60%, ≤80%, ≤90%, >90%) return the correct score (0–5).
  - Given the test suite runs, then efficiency scoring thresholds (ratio <1, =1, >1) return 1, 3, 5 respectively.
  - Given the test suite runs, then effectiveness is correctly computed as the average of both scores divided by MAX_SCORE.
  - Given edge-case inputs (0, negative, very large), then tests document expected behavior.
- **Story Points:** 3
- **Priority:** Must
- **Status:** To Do
- **Dependencies:** None (can be written against current code)
- **Sprint:** 4 (candidate)
- **Notes:** Core formulas were already buggy once (Sprint 2 — inverted scale, wrong scoring function). Tests are critical to prevent regressions. Use a lightweight framework compatible with vanilla JS (e.g., simple assertion scripts, or a minimal test runner).

---

### PB-023 — Deploy to GitHub Pages

- **User Story:** As a user, I want to access the calculator at a public URL so I can use it without cloning the repo.
- **Acceptance Criteria:**
  - Given the repo is pushed to GitHub, then the app is served at `https://qbah3h.github.io/efectividad/`.
  - Given the deployment is live, then all calculator functionality works identically to local.
- **Story Points:** 2
- **Priority:** Must
- **Status:** To Do
- **Dependencies:** PB-016 (should fix critical bugs before publishing)
- **Sprint:** 4 (candidate)
- **Notes:** Static site — no build step needed. Configure GitHub Pages to serve from `src/` or root.

---

### PB-017 — Side-by-side comparison summary

- **User Story:** As a user, I want a comparison panel below the calculators that shows both scenarios' results together with the winner highlighted so I can quickly see which scenario is more effective.
- **Acceptance Criteria:**
  - Given both calculators have results, when I view the comparison panel, then I see efficacy, efficiency, and effectiveness for both scenarios in a single table.
  - Given one scenario has a higher effectiveness score, then that scenario's column is visually highlighted as the winner.
  - Given both scenarios have equal effectiveness, then the panel indicates a tie.
  - Given only one calculator has results, then the comparison panel is not shown (or shows a message to calculate both).
- **Story Points:** 5
- **Priority:** Should
- **Status:** To Do
- **Dependencies:** PB-016 (valid results required for meaningful comparison)
- **Sprint:** Unassigned
- **Notes:** The two calculators currently work independently with no visual comparison.

---

### PB-018 — Responsive / mobile design

- **User Story:** As a mobile user, I want the calculator panels to stack vertically on small screens and all controls to be touch-friendly so the tool is usable on phones.
- **Acceptance Criteria:**
  - Given a viewport ≤768px, then the two calculator panels stack vertically instead of side-by-side.
  - Given a mobile device, then all input fields and buttons are at least 44px touch targets.
  - Given any screen size, then no horizontal scrolling is required.
- **Story Points:** 3
- **Priority:** Should
- **Status:** To Do
- **Dependencies:** None (independent of other items)
- **Sprint:** Unassigned
- **Notes:** Current flexbox layout may break on narrow viewports.

---

### PB-019a — Spike: Map effectiveness framework to software teams

- **User Story:** As a team lead, I want a research document that explains how to apply the Efficacy/Efficiency/Effectiveness framework to software team measurement (story points, sprint goals, delivery timelines).
- **Acceptance Criteria:**
  - Given the document exists, then it maps each framework dimension (Efficacy, Efficiency, Effectiveness) to concrete software team metrics.
  - Given the document exists, then it includes at least 2 worked examples (e.g., Sprint delivery, quarterly OKR).
  - Given the document exists, then it references the original research paper and the LinkedIn discussion with Tyler Mann.
- **Story Points:** 5 (timeboxed spike)
- **Priority:** Should
- **Status:** To Do
- **Dependencies:** None
- **Sprint:** Unassigned
- **Notes:** This is the next logical step from `information.md` and the LinkedIn conversation. Output is a Markdown document, not code. Timeboxed to prevent scope creep.

---

### PB-019b — Software team presets in calculator

- **User Story:** As a team lead, I want preset examples in the calculator (e.g., "Sprint Delivery", "Quarterly OKR") so I can quickly see how the framework applies to software team scenarios.
- **Acceptance Criteria:**
  - Given I click a preset button, then the calculator fields are populated with example values for that scenario.
  - Given the preset is loaded, then a tooltip or note explains what each value represents in the software team context.
- **Story Points:** 3
- **Priority:** Could
- **Status:** To Do
- **Dependencies:** PB-019a (research must define the mappings first)
- **Sprint:** Unassigned
- **Notes:** Follow-up to the research spike. Depends on PB-019a output.

---

### PB-024 — Reset / clear calculator

- **User Story:** As a user, I want a "Reset" button on each calculator form so I can clear all inputs and results to start a new calculation.
- **Acceptance Criteria:**
  - Given I click Reset, then all input fields in that calculator are cleared.
  - Given I click Reset, then the results section is hidden.
- **Story Points:** 1
- **Priority:** Should
- **Status:** To Do
- **Dependencies:** None
- **Sprint:** Unassigned
- **Notes:** Currently no way to clear inputs without manually deleting each field.

---

### PB-025 — Basic accessibility (a11y)

- **User Story:** As a user with assistive technology, I want the calculator to have proper ARIA labels, keyboard navigation, and sufficient color contrast so I can use it without a mouse.
- **Acceptance Criteria:**
  - Given I navigate with a keyboard, then I can tab through all inputs and buttons in logical order.
  - Given I use a screen reader, then all form fields have descriptive labels.
  - Given the results are displayed, then they are announced to screen readers.
  - Given the color scheme, then all text meets WCAG 2.1 AA contrast ratio (≥4.5:1).
- **Story Points:** 3
- **Priority:** Could
- **Status:** To Do
- **Dependencies:** None
- **Sprint:** Unassigned
- **Notes:** No ARIA labels or keyboard navigation currently exists.

---

### PB-021 — Visual charts

- **User Story:** As a user, I want a radar chart visualizing efficacy, efficiency, and effectiveness scores for both scenarios so the comparison is more intuitive.
- **Acceptance Criteria:**
  - Given both calculators have results, then a radar chart displays both scenarios' scores overlaid.
  - Given only one calculator has results, then the chart shows a single scenario.
  - Given the chart is rendered, then it uses a lightweight, no-dependency charting approach (Canvas or SVG, no paid libraries).
- **Story Points:** 5
- **Priority:** Could
- **Status:** To Do
- **Dependencies:** PB-016 (valid data), PB-017 (comparison context)
- **Sprint:** Unassigned
- **Notes:** Radar chart chosen over bar chart — better for multi-dimensional comparison. Consider Chart.js (free, lightweight) or pure SVG.

---

### PB-020a — Save results to local storage

- **User Story:** As a user, I want my calculation results saved in the browser so I can close the tab and see them when I return.
- **Acceptance Criteria:**
  - Given I calculate results, then they are persisted in localStorage.
  - Given I reload the page, then the last calculated results and inputs are restored.
  - Given I click a "Clear saved data" button, then localStorage is cleared.
- **Story Points:** 3
- **Priority:** Could
- **Status:** To Do
- **Dependencies:** PB-016 (only valid results should be saved)
- **Sprint:** Unassigned
- **Notes:** Split from original PB-020. Simplest persistence option — no server needed.

---

### PB-020b — Export results to CSV

- **User Story:** As a user, I want to export my calculation results as a CSV file so I can analyze them in a spreadsheet.
- **Acceptance Criteria:**
  - Given both calculators have results, then I can click "Export CSV" and download a file with all inputs and scores.
  - Given the CSV is opened in Excel/Google Sheets, then columns are correctly labeled and data is properly formatted.
- **Story Points:** 2
- **Priority:** Won't (this Sprint)
- **Status:** To Do
- **Dependencies:** PB-016, PB-017
- **Sprint:** Unassigned
- **Notes:** Split from original PB-020. Deferred to a future Sprint.

---

### PB-026 — Language toggle (English / Spanish)

- **User Story:** As a Spanish-speaking user, I want to toggle the UI between English and Spanish so I can use the tool in my preferred language.
- **Acceptance Criteria:**
  - Given I click a language toggle, then all labels, buttons, and result text switch to the selected language.
  - Given I switch languages, then my current inputs and results are preserved.
  - Given I reload the page, then my language preference is remembered (via localStorage).
- **Story Points:** 5
- **Priority:** Won't (this Sprint)
- **Status:** To Do
- **Dependencies:** None
- **Sprint:** Unassigned
- **Notes:** The UI was translated from Spanish to English in Sprint 3, but the original Spanish audience is now unserved. A toggle would serve both.

---

### PB-027 — README / user-facing documentation

- **User Story:** As a visitor to the GitHub repo, I want a clear README explaining what this project is, how to use the calculator, and the theory behind it so I can understand and contribute.
- **Acceptance Criteria:**
  - Given I open the repo, then the README includes: project description, screenshot, usage instructions, link to live demo (once deployed), and link to the research paper.
  - Given I want to contribute, then the README includes setup instructions (`git clone`, open `index.html`).
- **Story Points:** 2
- **Priority:** Should
- **Status:** To Do
- **Dependencies:** PB-023 (needs live URL for demo link)
- **Sprint:** Unassigned
- **Notes:** Currently no user-facing documentation in the repo root.

---

## Dependency Map

```
PB-016 (validation)
  ├── PB-017 (comparison) — needs valid results
  ├── PB-021 (charts) — needs valid data
  ├── PB-020a (local storage) — only save valid results
  ├── PB-020b (CSV export) — needs valid data
  └── PB-023 (deploy) — fix bugs before publishing

PB-019a (research spike)
  └── PB-019b (presets) — needs research output

PB-023 (deploy)
  └── PB-027 (README) — needs live URL for demo link

Independent: PB-022, PB-018, PB-024, PB-025, PB-026
```

---

## Source Material

- **Research paper:** `src/THE_CONCEPTS_OF_EFFECTIVENESS_EFFICIENCY.md` — Carlos Alberto Mejía C., Planning S.A.
- **Original (Spanish):** `src/LOS_CONCEPTOS_DE_EFECTIVIDAD_EFICIENCIA.pdf`
- **Context/origin:** `src/information.md` — LinkedIn discussion with Tyler Mann on measuring team performance