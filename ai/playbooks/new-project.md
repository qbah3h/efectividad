# Playbook: New Project Setup

## When to Use

When starting a brand new project or onboarding the AI workforce to an existing project for the first time.

---

## Steps

### Step 1 — Analyst: Extract Project Understanding

**Agent:** Analyst

**Action:** Analyze all available project materials and produce:

- Project summary
- Functional requirements
- Non-functional requirements
- Open questions and ambiguities

**Input:** Raw project documents, client briefs, existing code

**Output:** Requirements document → used to populate `ai/context/project-brief.md`

---

### Step 2 — Product Owner: Define Product Vision & Initial Backlog

**Agent:** Product Owner

**Action:** Based on the Analyst's output:

- Define the Product Vision
- Create an initial Product Backlog with prioritized PBIs
- Identify epics that need refinement

**Input:** Analyst's requirements document, project-brief.md

**Output:** Product Backlog file, updated project-brief.md with vision

---

### Step 3 — Architect: Define Technical Foundation

**Agent:** Architect

**Action:** Based on requirements and backlog:

- Propose system architecture
- Select technology stack (or validate existing one)
- Identify technical risks
- Create initial ADRs

**Input:** Requirements, Product Backlog, existing codebase (if any)

**Output:** Architecture overview, ADRs → stored in `ai/memory/decisions.md`

---

### Step 4 — Tester: Define Quality Strategy

**Agent:** Tester

**Action:** Based on requirements and architecture:

- Define overall test strategy
- Identify high-risk quality areas
- Propose test types needed
- Review acceptance criteria on initial backlog items

**Input:** Requirements, Product Backlog, Architecture overview

**Output:** Test strategy document, quality risk assessment

---

### Step 5 — Orchestrator: Consolidate & Present

**Agent:** Orchestrator

**Action:** Merge all agent outputs into a single project kickoff document:

- Project summary
- Product Vision and initial backlog
- Architecture overview
- Test strategy
- Open questions requiring stakeholder input
- Recommended next steps
