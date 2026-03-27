# 04_models — Financial Models & Scenario Analysis

## Purpose

This directory contains financial models, projections, and scenario analyses for the SignatureSovereign SafeTrade Program, including corridor economics, capital structure models, and DFC/MIGA coverage scenarios.

## Intended Artifacts

| File | Description | ID Convention |
|------|-------------|---------------|
| `corridor-economics.md` | Trade corridor financial model | `FM-NNN` |
| `capital-structure.md` | Entity capital structure analysis | `FM-NNN` |
| `dfc-pri-scenario.md` | DFC Political Risk Insurance scenarios | `FM-NNN` |
| `gold-trade-volume.md` | Gold tonnage and volume projections | `FM-NNN` |

## ID Convention

Financial model documents use the prefix: `FM-NNN`

Example: `FM-001` — Corridor Economics Baseline Model

## Important Labeling Requirements

All forward-dated projections MUST be clearly labeled:
- `[SCENARIO — Projected for YYYY-MM-DD]`
- `[BASELINE — As of YYYY-MM-DD]`

Do NOT present projected market prices (gold, silver, commodities) as current spot prices without a clear scenario/projection label.

## Cross-Reference

See `ui/dashboards/sss-treasury-management.tsx` for the dashboard implementation of treasury models.

---

*Signature Sovereign Solutions LLC — Co-Founder & Chief Operating Officer: Marshall W. Morrison*
