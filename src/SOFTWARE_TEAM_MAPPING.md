# How to Measure Software Team Effectiveness

**A practical guide for mapping your sprint and OKR data to the Effectiveness framework.**

> This document explains how to use the [Effectiveness Calculator](https://qbah3h.github.io/efectividad/) with software team data. You don't need to understand the underlying math — just follow the field mappings and plug in your numbers.

---

## Table of Contents

1. [The Problem with Current Metrics](#1-the-problem-with-current-metrics)
2. [What This Framework Adds](#2-what-this-framework-adds)
3. [Calculator Field Mappings](#3-calculator-field-mappings)
4. [Worked Example 1: Sprint Delivery](#4-worked-example-1-sprint-delivery)
5. [Worked Example 2: OKR Cycle](#5-worked-example-2-okr-cycle)
6. [How to Read the Results](#6-how-to-read-the-results)
7. [FAQ](#7-faq)
8. [References](#8-references)

---

## 1. The Problem with Current Metrics

Most software teams measure performance with one of these:

| Metric | What it tells you | What it misses |
|---|---|---|
| **Story points completed** | Volume of work done | Was it the *right* work? At what cost? |
| **Tickets closed** | Task completion count | Complexity, value, and effort are invisible |
| **Hours logged** | Time spent | Zero correlation with value delivered |
| **OKR score (0.0–1.0)** | Goal attainment | Did you burn 2× the budget to hit that 0.7? |
| **Bug count** | Quality signal | Doesn't connect to business outcomes |

These are **pseudo-metrics** — they measure activity, not performance. They answer *"what happened?"* but not *"how well did we perform given our resources and constraints?"*

Worse, measuring only outcomes leads to **outcome bias**: a team that hits 90% of its goal by burning 3× the budget looks great on an OKR dashboard, but the organization lost money.

---

## 2. What This Framework Adds

The Effectiveness framework (rooted in operations research, originally used by the U.S. military) measures three layers:

| Layer | Question it answers | Formula |
|---|---|---|
| **Efficacy** | Did we hit the goal? | `Achieved Result / Expected Result` |
| **Efficiency** | Did we hit it without burning disproportionate time and cost? | `(AR / (AC × AT)) / (ER / (EC × ET))` |
| **Effectiveness** | Overall: how well did we perform? | Average of both scores, as a percentage |

**The key insight:** You don't have to choose between measuring effort and outcomes. This framework combines both into a single, comparable metric.

### What OKRs measure vs. what this framework measures

| OKR Concept | Framework Equivalent | Notes |
|---|---|---|
| Key Result target | **Expected Result (ER)** | What you planned to achieve |
| Key Result actual | **Achieved Result (AR)** | What you actually achieved |
| *(not tracked)* | **Expected Cost (EC)** | Budget/hours you planned to spend |
| *(not tracked)* | **Actual Cost (AC)** | Budget/hours you actually spent |
| *(not tracked)* | **Expected Time (ET)** | Planned timeline |
| *(not tracked)* | **Actual Time (AT)** | Actual timeline |
| OKR Score (0.0–1.0) | ≈ Efficacy | Direct equivalent — goal attainment |
| *(nothing)* | **Efficiency** | The cost/time dimension OKRs completely lack |
| *(nothing)* | **Effectiveness** | Composite score OKRs cannot produce |

**Bottom line:** OKRs tell you *what* was achieved. This framework tells you *how effectively* it was achieved — factoring in cost and time.

---

## 3. Calculator Field Mappings

The calculator has 6 input fields per scenario. Here's what to put in each one for software teams:

### Option A: Sprint Delivery Measurement

Use this when measuring a single sprint's performance.

| Calculator Field | What to enter | Example |
|---|---|---|
| **Expected Result (ER)** | Story points committed to the sprint | `40` |
| **Achieved Result (AR)** | Story points completed (Done) | `35` |
| **Expected Cost (EC)** | Planned team hours = team size × sprint days × hours/day | `400` (5 devs × 10 days × 8 hrs) |
| **Actual Cost (AC)** | Actual team hours spent (from time tracking or estimate) | `450` |
| **Expected Time (ET)** | Sprint length in days | `10` |
| **Actual Time (AT)** | Actual days to deliver all committed work (including overruns) | `12` |

> **"Do you look at stories completed, story points, or prove actual ROI?"**
> — The framework is unit-agnostic. You can use story points, stories completed, features delivered, or even revenue generated as ER/AR. The power isn't in *which* unit you pick — it's in adding the cost and time dimensions that none of those metrics alone provide.

### Option B: OKR Cycle Measurement

Use this when measuring a quarterly OKR cycle.

| Calculator Field | What to enter | Example |
|---|---|---|
| **Expected Result (ER)** | Key Result target value | `100` (e.g., 100 new users) |
| **Achieved Result (AR)** | Key Result actual value at end of cycle | `85` |
| **Expected Cost (EC)** | Budget allocated for the initiative (hours or $) | `2000` (hours) |
| **Actual Cost (AC)** | Budget actually consumed | `2400` |
| **Expected Time (ET)** | OKR cycle length in days | `90` |
| **Actual Time (AT)** | Actual days to achieve the result | `95` |

### Option C: Comparing Two Approaches

This is where the **Comparator** design shines. Use Calculator 1 for one approach and Calculator 2 for another:

- **Sprint A** (measured by story points) vs. **Sprint B** (measured by features delivered)
- **Team Alpha** vs. **Team Beta** on the same quarter
- **Before process change** vs. **After process change**
- **Sprint measured with story points** vs. **same sprint measured with OKR scores**

The framework produces a comparable Effectiveness score for both, even if the underlying units differ.

---

## 4. Worked Example 1: Sprint Delivery

### Scenario

A 5-person team runs a 2-week sprint:

| Data Point | Planned | Actual |
|---|---|---|
| Story points | 40 committed | 35 completed |
| Team hours | 400 (5 × 10 days × 8 hrs) | 450 (overtime) |
| Duration | 10 working days | 12 days (2-day overrun) |

### Calculator Inputs

| Field | Value |
|---|---|
| Expected Result (ER) | `40` |
| Achieved Result (AR) | `35` |
| Expected Cost (EC) | `400` |
| Actual Cost (AC) | `450` |
| Expected Time (ET) | `10` |
| Actual Time (AT) | `12` |

### Step-by-Step Calculation

**1. Efficacy** = AR / ER = 35 / 40 = **0.875 (87.5%)**

Rating: 81–90% → **4 points** (out of 5)

*Interpretation: The team hit 87.5% of its sprint goal — strong delivery.*

**2. Efficiency** = (AR / (AC × AT)) / (ER / (EC × ET))

- Achieved output per unit of cost×time: 35 / (450 × 12) = 35 / 5,400 = 0.00648
- Expected output per unit of cost×time: 40 / (400 × 10) = 40 / 4,000 = 0.01000
- Ratio: 0.00648 / 0.01000 = **0.648**

Rating: Quotient < 1 → **1 point** (Inefficient)

*Interpretation: Despite decent delivery, the team burned more time and cost than planned. The efficiency score captures what OKRs miss — this sprint cost more than it should have.*

**3. Effectiveness** = (Efficacy Score + Efficiency Score) / 2 / MAX_SCORE

= (4 + 1) / 2 / 5 = 2.5 / 5 = **50%**

### What This Tells You

An OKR-only view would score this sprint at **0.875** — a great result. But the Effectiveness score is **50%**, revealing that the team had to burn significant extra time and cost to achieve that delivery. This is exactly the kind of insight that overcomes **outcome bias**.

The question becomes: *Was hitting 87.5% of the sprint goal worth 12.5% more hours and a 2-day schedule overrun?* Now you have the data to discuss it objectively.

---

## 5. Worked Example 2: OKR Cycle

### Scenario

An engineering team has a quarterly OKR: **"Increase API response time performance by reducing p95 latency from 800ms to 400ms."**

| Data Point | Planned | Actual |
|---|---|---|
| Latency reduction (ms) | 400ms reduction target | 340ms reduction achieved |
| Engineering hours | 2,000 allocated | 1,800 used |
| Timeline | 90 days (Q1) | 85 days (finished early) |

### Calculator Inputs

| Field | Value |
|---|---|
| Expected Result (ER) | `400` |
| Achieved Result (AR) | `340` |
| Expected Cost (EC) | `2000` |
| Actual Cost (AC) | `1800` |
| Expected Time (ET) | `90` |
| Actual Time (AT) | `85` |

### Step-by-Step Calculation

**1. Efficacy** = 340 / 400 = **0.85 (85%)**

Rating: 81–90% → **4 points**

*Interpretation: Hit 85% of the latency target — solid, but didn't fully close the gap.*

**2. Efficiency** = (340 / (1800 × 85)) / (400 / (2000 × 90))

- Achieved: 340 / 153,000 = 0.002222
- Expected: 400 / 180,000 = 0.002222
- Ratio: 0.002222 / 0.002222 = **1.00**

Rating: Quotient = 1 → **3 points** (Efficient)

*Interpretation: Even though the team didn't hit 100% of the goal, they used proportionally less time and cost — meaning their resource efficiency exactly matched expectations.*

**3. Effectiveness** = (4 + 3) / 2 / 5 = 3.5 / 5 = **70%**

### What This Tells You

An OKR score of 0.85 looks like a miss — Google-style OKR culture might say "aspirational targets mean 0.7 is acceptable, 0.85 is good." But that ignores *how* the team got there.

The Effectiveness score of **70%** reveals this was a **well-managed initiative**: the team under-spent on hours, finished ahead of schedule, and still delivered 85% of the goal. That's a team you want to recognize and replicate, not one you want to push harder.

### Comparison: Using the Comparator

Now imagine you put this OKR in Calculator 1 and a different team's OKR in Calculator 2:

- **Team A** (above): 85% goal attainment, under budget, early → **70% Effectiveness**
- **Team B**: 95% goal attainment, 40% over budget, 2 weeks late → **50% Effectiveness**

Team B looks better on the OKR dashboard. Team A is objectively more effective. **This is the framework's value.**

---

## 6. How to Read the Results

### Efficacy Score (0–5 points)

| Points | Fulfillment | Interpretation |
|---|---|---|
| 0 | 0–20% | Critical failure — goal mostly unmet |
| 1 | 21–40% | Poor — significant underdelivery |
| 2 | 41–60% | Below target — needs investigation |
| 3 | 61–80% | Acceptable — room for improvement |
| 4 | 81–90% | Good — strong delivery |
| 5 | >91% | Excellent — goal met or exceeded |

### Efficiency Score (1, 3, or 5 points)

| Points | Rating | Meaning |
|---|---|---|
| 1 | Inefficient | Used more resources per result than planned |
| 3 | Efficient | Resource usage matched the plan |
| 5 | Very efficient | Achieved more result per unit of cost×time than expected |

### Effectiveness (0–100%)

| Range | Interpretation |
|---|---|
| 0–30% | Poor — both goal attainment and resource usage were bad |
| 31–50% | Below average — one dimension is dragging the other down |
| 51–70% | Good — solid performance with room to improve |
| 71–90% | Very good — strong on both dimensions |
| 91–100% | Exceptional — high delivery with efficient resource use |

### Key Insight: Watch for Mismatches

The most actionable results come when efficacy and efficiency scores **diverge**:

- **High efficacy + Low efficiency** → "We hit the goal, but it cost too much." Investigate overtime, scope creep, or resource waste.
- **Low efficacy + High efficiency** → "We were resource-efficient but missed the goal." Investigate scope ambition, external blockers, or wrong targets.
- **Both high** → Replicate this process.
- **Both low** → Systemic issue — review planning, team capacity, or goal-setting.

---

## 7. FAQ

### "What units should I use for Expected/Achieved Result?"

Whatever your team already tracks: story points, stories completed, features shipped, revenue generated, latency reduced, users acquired. The framework is unit-agnostic. The only requirement is that ER and AR use the **same unit** so the ratio is meaningful.

### "What if we don't track hours?"

Use your best estimate. For sprint measurement: `team size × sprint days × hours per day` is a reasonable proxy for Expected Cost. For Actual Cost, even a rough estimate (did we work overtime? lose a team member? get interrupted?) is better than nothing. The framework works with imperfect data — it surfaces the *direction* of inefficiency, not an accounting-precise number.

### "What counts as 'time' — calendar days or working days?"

Either, as long as you're consistent between ET and AT. If your sprint is 10 working days and it overran by 2 working days, use ET=10 and AT=12. If you prefer calendar days, use calendar days for both.

### "Can I compare teams with different sizes?"

Yes, if you normalize the cost dimension. Example: a 5-person team with EC=400 hours and a 3-person team with EC=240 hours are already normalized by their respective capacities. The efficiency ratio handles the comparison.

### "How does this overcome outcome bias?"

Outcome bias occurs when you evaluate a decision based solely on its outcome, ignoring the process. A team that hits 95% of its goal by burning 2× the budget and working weekends for a month *looks* great on an OKR dashboard. The Efficiency score exposes the hidden cost: that 95% came at a disproportionate price. The Effectiveness composite gives you the full picture.

### "How is this different from Velocity?"

Velocity (story points per sprint) measures throughput — how much work flows through the team. It says nothing about whether the *right* work was done, whether it was done on budget, or whether the timeline was met. Velocity is an input to this framework (you can use it to set ER), but it's not a substitute for Effectiveness.

---

## 8. References

- **Research paper:** [The Concepts of Effectiveness, Efficiency, and Efficacy](../src/THE_CONCEPTS_OF_EFFECTIVENESS_EFFICIENCY.md) — Carlos Alberto Mejía C., Planning S.A.
- **OKR framework:** [IBM — What are OKRs?](https://www.ibm.com/think/topics/okrs)
- **Calculator:** [Effectiveness Comparator](https://qbah3h.github.io/efectividad/) — try it with your own data
- **Origin story:** This guide was inspired by a [LinkedIn discussion](../src/information.md) about measuring software team performance beyond pseudo-metrics.
