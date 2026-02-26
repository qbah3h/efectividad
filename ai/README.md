# AI Workforce — Reusable AI Delivery Organization

A modular, injectable AI agent system designed to be copied into any project. It provides a team of specialized AI agents coordinated by an Orchestrator, with project-specific context separated from reusable agent definitions.

---

## Folder Structure

```
ai/
├── orchestrator.md          # The brain — coordinates all agents
├── README.md                # This file — documentation
├── agents/                  # Role definitions (reusable across projects)
│   ├── product-owner.md     # Backlog, prioritization, scope
│   ├── analyst.md           # Requirements, domain understanding
│   ├── architect.md         # System design, technical decisions
│   ├── tester.md            # Test strategy, quality risks
│   └── improvement-agent.md # Post-task analysis, continuous improvement
├── playbooks/               # Reusable workflows
│   ├── new-project.md       # Onboard AI workforce to a new project
│   ├── client-feedback.md   # Process incoming client communication
│   └── sprint-planning.md   # Plan a Sprint
├── context/                 # Project-specific (replace per project)
│   ├── project-brief.md     # What the project is about
│   └── constraints.md       # Boundaries and limitations
├── memory/                  # Evolves during the project
│   ├── decisions.md         # Decision log for continuity
│   ├── lessons-learned.md   # Insights gained
│   └── domain-knowledge.md  # Accumulated domain understanding
├── templates/               # Artifact formats
│   └── pbi-template.md      # Product Backlog Item template
└── frameworks/              # Methodology references
    └── scrum.md             # Scrum framework reference
```

---

## Quick Start

### 1. Copy the `ai/` folder into your project

```
your-project/
├── ai/          ← paste here
├── docs/
├── ...
```

### 2. Fill in your project context

Edit these two files with your project-specific information:

- **`ai/context/project-brief.md`** — project name, vision, users, features, tech stack
- **`ai/context/constraints.md`** — technical, budget, time, scope limitations

These are the **only files you need to change** when reusing the workforce on a new project.

### 3. Start using the workforce

Open a new AI session (Windsurf Cascade, ChatGPT, Claude, etc.) and use one of the methods below.

---

## How to Use

### Method A — Full Orchestrator Session (Recommended)

Paste this into a new AI session:

```
Use the AI workforce defined in the /ai folder.
You are the Orchestrator defined in ai/orchestrator.md.
Load agents from ai/agents/*.md.
Project context is in ai/context/project-brief.md and ai/context/constraints.md.
Memory is in ai/memory/*.md.

[Your request here]
```

**Example:**

```
Use the AI workforce defined in the /ai folder.
You are the Orchestrator defined in ai/orchestrator.md.
Load agents from ai/agents/*.md.
Project context is in ai/context/project-brief.md and ai/context/constraints.md.

Review my Product Backlog and suggest improvements.
```

### Method B — Single Agent Session

When you only need one agent, reference it directly:

```
Act as the Product Owner defined in ai/agents/product-owner.md.
Project context is in ai/context/project-brief.md.

Create user stories for the login feature.
```

### Method C — Playbook Execution

Trigger a specific workflow:

```
Use the AI workforce defined in the /ai folder.
You are the Orchestrator.
Execute the playbook in ai/playbooks/client-feedback.md.

Here is the client's message:
[paste client message]
```

### Method D — Windsurf Cascade with File References

In Windsurf, you can use `@` mentions to reference files directly:

```
Act as the Orchestrator in @ai/orchestrator.md.
Use agents in @ai/agents/.
Context is in @ai/context/project-brief.md.

Process this client feedback: [message]
```

---

## Agents

| Agent | File | Scope |
|-------|------|-------|
| **Orchestrator** | `ai/orchestrator.md` | Coordinates agents, sequences work, merges outputs |
| **Product Owner** | `ai/agents/product-owner.md` | Backlog management, prioritization, Sprint planning |
| **Analyst** | `ai/agents/analyst.md` | Requirements extraction, domain research, ambiguity detection |
| **Architect** | `ai/agents/architect.md` | System design, tech decisions, feasibility assessment |
| **Tester** | `ai/agents/tester.md` | Test strategy, quality risks, acceptance validation |
| **Improvement Agent** | `ai/agents/improvement-agent.md` | Post-task analysis, instruction refinement, knowledge capture |

---

## Playbooks

| Playbook | File | When to Use |
|----------|------|-------------|
| **New Project** | `ai/playbooks/new-project.md` | Starting a new project or onboarding the workforce |
| **Client Feedback** | `ai/playbooks/client-feedback.md` | Processing incoming client communication |
| **Sprint Planning** | `ai/playbooks/sprint-planning.md` | Preparing for Sprint Planning |

---

## Reusing on a New Project

### What to replace (project-specific)

| File | Action |
|------|--------|
| `ai/context/project-brief.md` | **Replace** with your project's information |
| `ai/context/constraints.md` | **Replace** with your project's constraints |
| `ai/memory/decisions.md` | **Clear** entries (keep the template header) |
| `ai/memory/lessons-learned.md` | **Clear** entries (keep the template header) |
| `ai/memory/domain-knowledge.md` | **Clear** entries (keep the template header) |

### What stays the same (reusable)

| Folder | Why |
|--------|-----|
| `ai/agents/` | Role definitions are project-agnostic |
| `ai/playbooks/` | Workflows are project-agnostic |
| `ai/templates/` | Artifact formats are standardized |
| `ai/frameworks/` | Methodology references are universal |
| `ai/orchestrator.md` | Coordination logic is project-agnostic |

---

## Maintaining Memory

The `ai/memory/` folder provides continuity across AI sessions.

After significant interactions, update:

- **`decisions.md`** — when an important decision is made
- **`lessons-learned.md`** — when something unexpected happens (good or bad)
- **`domain-knowledge.md`** — when new domain insights are discovered

You can ask the Orchestrator to do this:

```
Update ai/memory/decisions.md with the architecture decision we just made.
```

---

## Extending the Workforce

### Adding a new agent

1. Create `ai/agents/[role-name].md`
2. Follow the existing agent structure:
   - Role description
   - Responsibilities
   - Input Expectations
   - Output Contracts
   - Behavior Rules
   - Uncertainty Handling
   - Context Files
3. Add the agent to `ai/orchestrator.md` under "Available Agents"

### Adding a new playbook

1. Create `ai/playbooks/[workflow-name].md`
2. Follow the existing playbook structure:
   - When to Use
   - Steps (which agent does what, in order)
   - Input/Output per step

### Adding a new template

1. Create `ai/templates/[template-name].md`
2. Reference it from the relevant agent(s)

---

## Continuous Improvement Pipeline

The workforce includes a built-in learning loop triggered automatically after every task:

```
Task → Orchestrator → Agents execute → Results → Improvement Agent → Instruction Updates
```

### How it works

1. **Orchestrator** coordinates task execution (Phases 1-3)
2. **Phase 4 (Mandatory)** — Orchestrator sends an `IMPROVEMENT_REQUEST` to the Improvement Agent
3. **Improvement Agent** analyzes execution quality and produces a structured report
4. If instruction updates are warranted, the Improvement Agent proposes **targeted, non-destructive edits**
5. Orchestrator reviews and applies approved changes
6. Reusable knowledge is captured in `ai/memory/lessons-learned.md`

### Safety guarantees

- The Orchestrator never edits agent instructions directly
- Only additive refinements — no destructive rewrites
- Changes must be generalizable, not overfitted to one task
- Failures are always analyzed — they are high-priority learning data

---

## Design Principles

- **Agents are roles** — reusable across projects
- **Context is project-specific** — replace per project
- **Playbooks are workflows** — reusable step-by-step processes
- **Memory evolves** — captures decisions and knowledge over time
- **The Orchestrator is the brain** — not optional, it coordinates everything
- **Uncertainty is handled explicitly** — agents ask questions instead of assuming
- **Outputs are contracted** — every agent has defined output formats
- **Continuous improvement is automatic** — every task triggers learning analysis
