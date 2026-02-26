# Decision Log

> This file is updated by agents (via the Orchestrator) whenever significant decisions are made.
> It provides continuity across sessions and prevents repeated discussions.

---

## Format

```
### [YYYY-MM-DD] Decision Title

**Context:** Why was this decision needed?
**Decision:** What was decided?
**Alternatives:** What else was considered?
**Rationale:** Why this option?
**Impact:** What does this affect?
```

---

<!-- Add decisions below this line -->

### [2026-02-25] Keep two-calculator Comparator identity

**Context:** Initially considered simplifying to a single calculator, but the "Comparator" identity (two side-by-side calculators) is the project's distinguishing feature. Removing it would be a breaking change that risks losing the core value proposition.
**Decision:** Keep both calculators and the "Effectiveness Comparator" name. PB-017 (comparison summary) and PB-021 (charts) remain in the backlog as planned future enhancements.
**Alternatives:** (1) Simplify to single calculator — rejected to preserve project identity and avoid breaking changes.
**Rationale:** The two-calculator layout directly enables scenario comparison, which is the primary use case. Tyler can compare a Sprint measured with story points vs one measured with OKRs, for example.
**Impact:** PB-028 (single calculator) removed from backlog. PB-017 and PB-021 remain active (not deferred).

### [2026-02-25] Use completed PBIs as synthetic test dataset

**Context:** Need test data to validate the calculator, demonstrate the framework, and provide preloaded examples. User suggested using the project's own completed Product Backlog Items (PB-001 through PB-015) as the data source.
**Decision:** Retrospectively estimate ER, AR, EC (hours), AC (hours), ET (days), AT (days) for each completed PBI. Store as structured JSON in `docs/`. Use for unit test fixtures, UI presets, and framework validation.
**Alternatives:** (1) Fabricate hypothetical data, (2) Use public dataset, (3) Wait for real user data.
**Rationale:** Real project data (even estimated) is more credible than fabricated data. It dogfoods the framework — measuring the project's own effectiveness. Triple-duty: testing, demos, validation.
**Impact:** PB-029 (estimation) and PB-031 (JSON dataset) created. PB-019a/b superseded. PB-022 (unit tests) now depends on PB-031 for fixtures.

### [2026-02-25] OKR mapping as documentation, not UI relabeling

**Context:** User read about OKRs and saw the connection to the framework. Tyler tracks OKRs, story points, and sprint metrics. Question: should the calculator UI be relabeled with OKR terms?
**Decision:** Keep calculator fields generic (ER, AR, EC, AC, ET, AT) per the research paper. Create a separate mapping guide document (`docs/SOFTWARE_TEAM_MAPPING.md`) that explains how to translate sprint/OKR data into calculator inputs.
**Alternatives:** (1) Relabel UI fields with OKR terms, (2) Add a mode toggle (generic vs OKR), (3) Only mention OKRs in README.
**Rationale:** Tyler's DM reveals he needs to understand the mapping, not a relabeled form. The generic fields are more universal (the framework applies beyond OKRs). A mapping guide is the right deliverable to share with Tyler and can be reused.
**Impact:** PB-030 (mapping guide) created as Must priority for Sprint 4. UI remains unchanged — value is in documentation.

### [2026-02-25] Sprint 4 reordered for "Tyler-first" delivery

**Context:** Original Sprint 4 ordering (PB-016 → PB-029 → PB-030 → PB-031 → PB-022 → PB-023) was optimized for internal quality. New constraint: present to Tyler as soon as possible.
**Decision:** Reorder Sprint 4 to prioritize Tyler-facing deliverables: PB-030 (mapping guide) → PB-023 (deploy) → PB-016 (validation) → PB-027 (README, promoted) → PB-029 → PB-031 → PB-022. Relax PB-023's dependency on PB-016 (NaN on zero inputs is cosmetic, not security). Promote PB-027 into Sprint 4 (+2 SP, total 21 SP).
**Alternatives:** (1) Keep original ordering — rejected because Tyler would wait 2+ weeks for anything shareable. (2) Split into two mini-sprints — unnecessary overhead for a solo dev.
**Rationale:** PB-030 (mapping guide) directly answers Tyler's DM question and can be shared standalone. PB-023 (deploy) gives Tyler a clickable URL. PB-027 (README) is the first thing Tyler sees when he visits the repo link already shared in DM. Internal items (PB-029/031/022) are deprioritized — they add zero value for Tyler's evaluation.
**Impact:** Sprint 4 renamed "Tyler-Ready". Sprint Goal defined. PB-023 dependency relaxed. PB-027 promoted from Unassigned to Sprint 4. Total SP increased from 19 to 21.

### [2026-02-25] ADR-001: No architecture changes for Sprint 4

**Context:** New Sprint 4 items (validation, dataset, mapping guide, tests, deploy) were assessed for architectural impact.
**Decision:** No architecture changes needed. The existing vanilla HTML/CSS/JS stack is sufficient. The synthetic dataset will be a static JSON file loaded client-side. Unit tests will use a simple assertion script (no test framework dependency). Deployment is static GitHub Pages.
**Alternatives:** Considered adding a build step, a test framework (Jest, Mocha), or a JSON loader library.
**Rationale:** All Sprint 4 items are achievable with the existing stack. Adding build tools or frameworks violates the "no build step" constraint and adds complexity disproportionate to value. The `calculate()` function just needs to be refactored to accept parameters (not just DOM reads) for testability.
**Impact:** `index.js` will need a minor refactor: extract pure calculation logic from DOM-reading logic so functions can be tested independently. No new dependencies.

### [2026-02-26] PB-016: Achieved Result (AR) allowed to be zero

**Context:** PB-016 requires validation to prevent NaN/Infinity from division by zero. The question arose: should AR (Achieved Result) be required > 0 like the other fields?
**Decision:** AR can be zero (valid 0% efficacy — team delivered nothing) but cannot be negative. All other fields (ER, EC, AC, ET, AT) must be strictly > 0 because they appear as denominators in the efficacy or efficiency formulas.
**Alternatives:** (1) Require all fields > 0 — rejected because AR=0 is a legitimate measurement. (2) Allow ER=0 too — rejected because ER is a denominator (efficacy = AR/ER).
**Rationale:** The framework measures goal attainment. Zero achievement is a valid (poor) outcome. Preventing it would be domain-incorrect. The efficiency formula handles AR=0 gracefully (numerator becomes 0, ratio = 0, score = 1).
**Impact:** `FIELD_DEFINITIONS` array in `index.js` uses `mustBePositive: false` for AR only. All other fields use `mustBePositive: true`.
