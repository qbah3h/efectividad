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
**Decision:** Retrospectively estimate ER, AR, EC (hours), AC (hours), ET (days), AT (days) for each completed PBI. Store as structured JSON in `src/`. Use for unit test fixtures, UI presets, and framework validation.
**Alternatives:** (1) Fabricate hypothetical data, (2) Use public dataset, (3) Wait for real user data.
**Rationale:** Real project data (even estimated) is more credible than fabricated data. It dogfoods the framework — measuring the project's own effectiveness. Triple-duty: testing, demos, validation.
**Impact:** PB-029 (estimation) and PB-031 (JSON dataset) created. PB-019a/b superseded. PB-022 (unit tests) now depends on PB-031 for fixtures.

### [2026-02-25] OKR mapping as documentation, not UI relabeling

**Context:** User read about OKRs and saw the connection to the framework. Tyler tracks OKRs, story points, and sprint metrics. Question: should the calculator UI be relabeled with OKR terms?
**Decision:** Keep calculator fields generic (ER, AR, EC, AC, ET, AT) per the research paper. Create a separate mapping guide document (`src/SOFTWARE_TEAM_MAPPING.md`) that explains how to translate sprint/OKR data into calculator inputs.
**Alternatives:** (1) Relabel UI fields with OKR terms, (2) Add a mode toggle (generic vs OKR), (3) Only mention OKRs in README.
**Rationale:** Tyler's DM reveals he needs to understand the mapping, not a relabeled form. The generic fields are more universal (the framework applies beyond OKRs). A mapping guide is the right deliverable to share with Tyler and can be reused.
**Impact:** PB-030 (mapping guide) created as Must priority for Sprint 4. UI remains unchanged — value is in documentation.

### [2026-02-25] ADR-001: No architecture changes for Sprint 4

**Context:** New Sprint 4 items (validation, dataset, mapping guide, tests, deploy) were assessed for architectural impact.
**Decision:** No architecture changes needed. The existing vanilla HTML/CSS/JS stack is sufficient. The synthetic dataset will be a static JSON file loaded client-side. Unit tests will use a simple assertion script (no test framework dependency). Deployment is static GitHub Pages.
**Alternatives:** Considered adding a build step, a test framework (Jest, Mocha), or a JSON loader library.
**Rationale:** All Sprint 4 items are achievable with the existing stack. Adding build tools or frameworks violates the "no build step" constraint and adds complexity disproportionate to value. The `calculate()` function just needs to be refactored to accept parameters (not just DOM reads) for testability.
**Impact:** `index.js` will need a minor refactor: extract pure calculation logic from DOM-reading logic so functions can be tested independently. No new dependencies.
