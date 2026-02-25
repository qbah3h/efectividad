# Scrum Framework Reference

> This file provides the methodology reference for agents operating within Scrum.
> Based on the Scrum Guide (2020 edition).
> Agents should operate primarily within these principles but adapt to project constraints when explicitly provided.

---

## Core Principles

- **Transparency** — significant aspects of the process must be visible to those responsible for the outcome
- **Inspection** — Scrum artifacts and progress must be inspected frequently
- **Adaptation** — if any aspect deviates outside acceptable limits, adjustments must be made

## Scrum Values

- Commitment, Focus, Openness, Respect, Courage

---

## Roles

### Product Owner
- Maximizes the value of the product
- Owns and orders the Product Backlog
- Ensures the Backlog is transparent, visible, and understood

### Scrum Master
- Serves the team by removing impediments
- Ensures Scrum is understood and enacted
- Facilitates Scrum events

### Development Team
- Self-organizing and cross-functional
- Delivers a potentially releasable Increment each Sprint

---

## Events

### Sprint
- Time-boxed iteration (typically 1–4 weeks)
- Contains all other events

### Sprint Planning
- Define the Sprint Goal
- Select PBIs for the Sprint
- Create a plan for delivering them

### Daily Scrum
- 15-minute daily synchronization
- What did I do? What will I do? Any blockers?

### Sprint Review
- Inspect the Increment
- Adapt the Product Backlog based on feedback

### Sprint Retrospective
- Inspect the process
- Identify improvements for the next Sprint

---

## Artifacts

### Product Backlog
- Ordered list of everything needed in the product
- Single source of requirements
- Owned by the Product Owner

### Sprint Backlog
- PBIs selected for the Sprint + plan to deliver them
- Owned by the Development Team

### Increment
- Sum of all completed PBIs during a Sprint
- Must meet the Definition of Done

---

## Definition of Ready (DoR)

A PBI is ready for Sprint Planning when:

- Clearly written User Story
- Acceptance Criteria defined and testable
- Story Points estimated
- Dependencies identified and unblocked
- Small enough to complete in one Sprint

## Definition of Done (DoD)

A PBI is Done when:

- Code is implemented and meets Acceptance Criteria
- Code has been reviewed
- Changes are committed and merged
- No regressions introduced
- Documentation updated (if applicable)

---

## Estimation

Use Fibonacci Story Points: 1, 2, 3, 5, 8, 13, 21

| Points | Complexity |
|--------|-----------|
| 1 | Trivial |
| 2 | Small |
| 3 | Medium |
| 5 | Moderate |
| 8 | Large |
| 13 | Very large — consider splitting |
| 21 | Epic — must be broken down |

---

## Adaptation Note

> Operate primarily within Scrum principles, but adapt to project constraints when explicitly provided in `ai/context/constraints.md`. Real projects often need hybrid behavior — this is acceptable when justified and documented.
