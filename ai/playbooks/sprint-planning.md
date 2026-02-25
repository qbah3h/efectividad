# Playbook: Sprint Planning

## When to Use

When preparing for or conducting Sprint Planning — selecting work for the upcoming Sprint and defining a Sprint Goal.

---

## Steps

### Step 1 — Product Owner: Propose Sprint Candidates

**Agent:** Product Owner

**Action:**

- Review the prioritized Product Backlog
- Verify top items meet Definition of Ready
- Propose a Sprint Goal based on highest-value work
- Select candidate PBIs that align with the Sprint Goal
- Ensure total Story Points fit within team velocity (if known)

**Input:** Current Product Backlog, team velocity, previous Sprint outcomes

**Output:** Proposed Sprint Goal, candidate PBI list with total points

---

### Step 2 — Architect: Technical Feasibility Check

**Agent:** Architect

**Action:**

- Review candidate PBIs for technical dependencies
- Identify any technical prep work needed
- Flag items that may be blocked by architecture decisions
- Suggest optimal implementation order

**Input:** Candidate PBI list, current architecture

**Output:** Technical feasibility notes, suggested ordering, blockers

---

### Step 3 — Tester: Test Readiness Check

**Agent:** Tester

**Action:**

- Review acceptance criteria on candidate PBIs for testability
- Identify test effort required per PBI
- Flag any PBIs with insufficient acceptance criteria
- Propose test approach for the Sprint

**Input:** Candidate PBI list

**Output:** Test readiness assessment, flagged items

---

### Step 4 — Product Owner: Finalize Sprint Backlog

**Agent:** Product Owner

**Action:** Based on Architect and Tester feedback:

- Adjust Sprint scope if needed
- Finalize Sprint Backlog
- Confirm Sprint Goal
- Document the Sprint plan

**Input:** Technical feasibility notes, test readiness assessment

**Output:** Final Sprint Backlog, Sprint Goal

---

### Step 5 — Orchestrator: Present Sprint Plan

**Agent:** Orchestrator

**Action:** Consolidate into a Sprint Planning summary:

- Sprint Goal
- Sprint Backlog (PBI list with points)
- Total capacity vs. committed points
- Known risks and dependencies
- Test approach for the Sprint
- Definition of Done reminder
