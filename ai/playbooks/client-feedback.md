# Playbook: Process Client Feedback

## When to Use

When a client sends new communication — email, message, meeting notes, review feedback, or any stakeholder input that may affect the project.

---

## Steps

### Step 1 — Analyst: Extract & Classify

**Agent:** Analyst

**Action:** Analyze the client communication and produce:

- Key requirements extracted (new and changed)
- Implicit requirements (what was implied but not stated)
- Ambiguities found
- Suggested clarifying questions
- Impact on existing backlog

**Input:** Raw client communication

**Output:** Client Input Analysis document

---

### Step 2 — Product Owner: Update Backlog

**Agent:** Product Owner

**Action:** Based on the Analyst's output:

- Create new PBIs for new requirements
- Update existing PBIs affected by the feedback
- Re-prioritize the backlog if needed
- Flag any scope changes or conflicts with Product Vision

**Input:** Client Input Analysis, current Product Backlog

**Output:** Updated Product Backlog, list of changes made

---

### Step 3 — Architect: Assess Technical Impact

**Agent:** Architect

**Action:** Evaluate the technical impact of the new/changed requirements:

- Feasibility assessment
- Impact on existing architecture
- New technical risks
- Effort implications

**Input:** New/changed requirements, current architecture

**Output:** Technical impact assessment

---

### Step 4 — Tester: Identify Quality Risks

**Agent:** Tester

**Action:** Based on the changes:

- Identify new test scenarios needed
- Perform regression risk analysis
- Flag any untestable requirements
- Update test strategy if needed

**Input:** Changed requirements, technical impact assessment

**Output:** Quality risk update, new test cases

---

### Step 5 — Orchestrator: Consolidate Response

**Agent:** Orchestrator

**Action:** Merge all outputs into a structured response:

- Summary of what the client communicated
- Requirements extracted
- Backlog changes proposed
- Technical impact
- Quality risks
- Clarifying questions to send back to client
- Recommended next steps
