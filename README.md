# Effectiveness Comparator

A web-based calculator that measures **Efficacy**, **Efficiency**, and **Effectiveness** using a formal operations-research framework — originally developed for the U.S. military and documented by Carlos Alberto Mejía C. (Planning S.A.).

Compare two scenarios side-by-side to see which one performed better — not just in results, but in how well resources and time were used.

**[Try it live →](https://qbah3h.github.io/efectividad/)**

---

## What It Measures

| Metric | Formula | What it tells you |
|---|---|---|
| **Efficacy** | Achieved Result ÷ Expected Result | How close you got to the goal (scored 0–5) |
| **Efficiency** | (AR / AC × AT) ÷ (ER / EC × ET) | How well you used your resources and time (scored 1, 3, or 5) |
| **Effectiveness** | Average of both scores ÷ max score | Overall performance as a percentage |

> Most metrics only tell you *what happened*. This framework tells you *how well it happened given your constraints*.

---

## How to Use

1. Open the [calculator](https://qbah3h.github.io/efectividad/)
2. Enter your data for **Calculator 1**:
   - **Expected Result (ER):** What you planned to achieve
   - **Achieved Result (AR):** What you actually achieved
   - **Expected Cost (EC):** Planned budget or resources
   - **Actual Cost (AC):** What you actually spent
   - **Expected Time (ET):** Planned duration
   - **Actual Time (AT):** Actual duration
3. Click **Calculate** to see Efficacy, Efficiency, and Effectiveness scores
4. Optionally fill **Calculator 2** with a second scenario to compare

### For Software Teams

If you manage sprints, OKRs, or engineering teams, see the **[Software Team Mapping Guide](docs/SOFTWARE_TEAM_MAPPING.md)** — it explains how to plug your story points, team hours, and sprint data into the calculator with worked examples.

---

## Quick Start (Local Development)

```bash
git clone https://github.com/qbah3h/efectividad.git
cd efectividad
```

Open `docs/index.html` in your browser. No build step, no dependencies, no server required.

---

## Project Structure

```
efectividad/
├── docs/                  # App + documentation (served by GitHub Pages)
│   ├── index.html         # Calculator UI
│   ├── index.js           # Calculation logic
│   ├── styles.css         # Styling
│   ├── SOFTWARE_TEAM_MAPPING.md   # Guide for software teams
│   └── THE_CONCEPTS_OF_EFFECTIVENESS_EFFICIENCY.md  # Research paper
├── ai/                    # AI workforce (Scrum-inspired agents)
└── README.md              # You are here
```

---

## The Theory

The framework comes from the research paper *"The Concepts of Effectiveness, Efficiency, and Efficacy"* by Carlos Alberto Mejía C. — [read the full paper](docs/THE_CONCEPTS_OF_EFFECTIVENESS_EFFICIENCY.md).

Key insight: **OKRs and KPIs measure what was achieved. This framework measures how effectively it was achieved — accounting for cost and time.** A team that hits 90% of its goal by burning 3× the budget *looks* great on a dashboard, but the Effectiveness score reveals the hidden cost.

---

## Tech Stack

- **Vanilla HTML/CSS/JS** — no frameworks, no build step
- **GitHub Pages** — zero-cost static hosting
- **No backend** — everything runs in the browser

---

## Origin

This project started from my own investigation into measuring team performance using a formal operations-research framework (originally developed for the U.S. military). About 10 months later, I came across a [LinkedIn post by Tyler Mann](docs/information.md) raising the exact same problem — that existing metrics like velocity and story points measure *activity*, not *performance*. That conversation validated the approach and led to adding the **[Software Team Mapping Guide](docs/SOFTWARE_TEAM_MAPPING.md)**, which maps the framework specifically to sprint-based engineering teams.

---

## License

This project is open source. The underlying research paper is by Carlos Alberto Mejía C., Planning S.A.
