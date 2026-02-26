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
