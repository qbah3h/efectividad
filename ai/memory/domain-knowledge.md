# Domain Knowledge

> This file accumulates domain-specific knowledge discovered during the project.
> Agents reference this to maintain consistent understanding of the problem space.

---

## Format

```
### Topic

[Explanation of the domain concept, rule, or insight]

**Source:** [Where this knowledge came from]
**Relevant to:** [Which agents or decisions this affects]
```

---

<!-- Add domain knowledge below this line -->

### OKR ↔ Effectiveness Framework Mapping

The Efficacy/Efficiency/Effectiveness framework from the research paper maps directly to OKRs but adds dimensions OKRs lack:

| OKR Concept | Framework Field | Notes |
|---|---|---|
| Key Result target | Expected Result (RE) | What we planned to achieve |
| Key Result actual | Achieved Result (RA) | What we actually achieved |
| Budget/resources allocated | Expected Cost (CE) | Planned resource spend |
| Budget/resources consumed | Actual Cost (CA) | Actual resource spend |
| Planned timeline | Expected Time (TE) | Planned duration |
| Actual timeline | Actual Time (TA) | Actual duration |
| OKR Score (0.0–1.0) | ≈ Efficacy (RA/RE) | Direct equivalent |
| *(not in OKRs)* | Efficiency | Cost/time dimension OKRs lack |
| *(not in OKRs)* | Effectiveness | Composite score OKRs can't produce |

**Key insight:** OKRs measure *what* was achieved. This framework measures *how effectively* it was achieved — accounting for cost and time. This is the project's unique value proposition.

**Source:** Analysis of IBM OKR article (https://www.ibm.com/think/topics/okrs) cross-referenced with research paper (`docs/THE_CONCEPTS_OF_EFFECTIVENESS_EFFICIENCY.md`).
**Relevant to:** Product Owner (vision), Analyst (requirements), all agents (framing)

### Tyler Mann's Data Context

Tyler is an engineering leader who currently tracks:
- **Story points** (planned vs completed)
- **Sprint goals / OKRs** (set vs achieved)
- **Hours/time logged**
- **Bug counts**

His pain points: pseudo-metrics don't capture value, external factors stall work outside team control, outcome-only measurement leads to outcome bias.

His key question (DM): *"Achieved results — do you look at stories completed, story points, or prove actual ROI from the problem you are solving with what you built?"*

**Answer the framework provides:** You can use any of those as the "Result" dimension — the framework is unit-agnostic. The power is in *adding* the cost/time efficiency dimension that none of those metrics alone provide.

**Source:** `docs/information.md` — LinkedIn post, comments, and DM conversation.
**Relevant to:** Product Owner (Tyler as primary user), Analyst (requirements scoping)

### Software Team Metric Mappings

For Sprint delivery measurement:
- **ER** = Story points committed to Sprint
- **AR** = Story points completed
- **EC** = Planned team hours (team size × sprint days × hours/day)
- **AC** = Actual team hours spent
- **ET** = Sprint duration (days)
- **AT** = Actual days to deliver (including overruns)

For OKR cycle measurement:
- **ER** = Key Result target value
- **AR** = Key Result actual value
- **EC** = Budget allocated for the initiative
- **AC** = Budget consumed
- **ET** = OKR cycle length (typically 90 days)
- **AT** = Actual time to achieve the result

**Source:** Analyst synthesis from Tyler's data context + research paper formulas.
**Relevant to:** PB-030 (mapping guide), PB-031 (synthetic dataset)
