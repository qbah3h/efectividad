# Lessons Learned

> This file captures insights gained during the project.
> Agents reference this to avoid repeating mistakes and to apply proven approaches.

---

## Format

```
### [YYYY-MM-DD] Lesson Title

**What happened:** [Description of the situation]
**What we learned:** [The insight]
**Action:** [What to do differently going forward]
```

---

<!-- Add lessons below this line -->

### [2026-02-25] External stakeholder input reshapes product direction

**What happened:** Tyler Mann's LinkedIn post and DM conversation revealed that the project's value proposition was not clearly articulated for the target audience. The original "two-calculator comparator" design was built from the framework's perspective, not from the user's data perspective.
**What we learned:** Real stakeholder questions (like Tyler's "do you look at stories completed, story points, or actual ROI?") are more valuable for scoping than internal feature brainstorming. They reveal what the user actually has (data) and needs (interpretation), not what the developer assumes.
**Action:** Always start new feature scoping from the stakeholder's existing data and workflow, not from the framework's capabilities. When in doubt, analyze the stakeholder's exact words for implicit data context.

### [2026-02-25] Dogfooding creates credible test data

**What happened:** Instead of fabricating hypothetical test data, the team decided to use the project's own completed PBIs (retrospectively estimated) as the synthetic dataset.
**What we learned:** Using your own project as the test case (dogfooding) serves triple duty: (1) test fixtures, (2) demo data, (3) framework validation. It's more credible to show Tyler "here's how we measured our own project" than hypothetical numbers.
**Action:** When building tools that measure processes, use the tool's own development process as the first test case whenever possible.

### [2026-02-25] Optimize for stakeholder presentation, not internal quality

**What happened:** Sprint 4 was originally ordered for internal quality (validation → dataset → tests → deploy). When the goal shifted to "present to Tyler ASAP", re-analysis of Tyler's conversation revealed the backlog order was misaligned — the most Tyler-valuable items (mapping guide, deploy, README) were mid-to-late in the sprint.
**What we learned:** When optimizing for stakeholder presentation speed, prioritize *shareable documentation* and *live access* over internal quality items (tests, validation). Tests don't impress stakeholders; working demos and clear explanations do. A document that answers the stakeholder's exact question (Tyler's DM) is more impactful than a bug-free tool they can't access.
**Action:** Before finalizing Sprint ordering, always ask: "If I could only deliver 2 items before talking to the stakeholder, which 2?" Put those first.

### [2026-02-26] Validation rules must respect domain semantics, not just prevent errors

**What happened:** During PB-016 (input validation), the initial instinct was to require all fields > 0. But domain analysis revealed AR (Achieved Result) = 0 is a valid measurement (team delivered nothing = 0% efficacy). Blindly requiring > 0 would have rejected a legitimate use case.
**What we learned:** Input validation is not purely a technical concern — it must be informed by domain knowledge. The Analyst should always review validation rules against the domain model before the Architect designs the implementation. Each field's constraints derive from its role in the formulas (denominator vs numerator) and its real-world meaning.
**Action:** For any validation task, start by listing each field's role in formulas (denominator? numerator? both?) and its real-world meaning. Derive constraints from both, not just "prevent errors."
