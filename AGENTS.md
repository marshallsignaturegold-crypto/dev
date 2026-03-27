# AGENTS.md — AI Agent Context & Brand Rules

## Repository Identity

This is the **development and institutional documents repository** for the **SignatureSovereign SafeTrade Program**.

- **GitHub Org:** `marshallsignaturegold-crypto`
- **Repo:** `dev`
- **Companion Repo:** `sigysovops/IndiSovereign-Operations-S1`

---

## Brand Naming Rules

### Exact Entity Name
- **Correct:** `Signature Sovereign Solutions LLC`
- **Incorrect:** `Signature Sovereign Solutions, LLC` (no comma before LLC)
- **Incorrect:** `Signature Sovereign Solution` (missing final "s")
- **Incorrect:** `SSS LLC`

### Brand Hierarchy (Three Sub-Brands)
| Brand | Scope | Entity |
|-------|-------|--------|
| **SignatureSovereign** | Corridor-wide umbrella brand | Signature Sovereign Solutions LLC |
| **IndiSovereign** | India / Bihar brand only | BIBC (Bihar International Business Centre) |
| **SovereignSomaliland** | Somaliland / BEZ brand only | SSTLC / SCMC |

### Program Naming Hierarchy
```
SafeTrade Program
  └── AI-SMCC v12.0  (Afro-Indian Strategic Minerals & Capital Corridor)
       └── IMEC-SSTP  (India-Middle East-Europe Corridor — SSS Trade Program)
```

---

## Leadership Title Standardization

- **Marshall W. Morrison** — `Co-Founder & Chief Operating Officer`
- **Correct:** "Co-Founder & Chief Operating Officer"
- **Incorrect:** "Founder & COO", "Co-Founder & COO", "Founder & Chief Operating Officer"

Apply this title consistently across ALL documents, HTML files, TSX components, README files, and generated content.

---

## Factual Verification Requirements

When generating or editing content, apply the following rules:

### Market Data
- Any gold/silver price above current real-world spot MUST be labeled: `[SCENARIO — Projected for [DATE]]`
- Current real-world gold spot (as of March 2026): ~$3,050/oz
- Documents that project $5,008/oz for March 2026 represent a **scenario model**, not a current market price

### Legislative/Policy References
- DFC exposure cap under BUILD Act 2018: **$60 billion** (enacted)
- DFC Modernization Act expanding to $205B: **proposed/projected** — NOT enacted as of March 2026
- Always distinguish: enacted legislation vs. proposed legislation vs. scenario projections

### Geopolitical Events
- Israeli recognition of Somaliland: **not confirmed as of March 2025**
- Any reference to post-March 2025 diplomatic events should be labeled as projected/forward scenario
- DP World Berbera concession: **real and operational** ✅
- IMEC corridor (G20 announcement September 2023): **factual** ✅

### Banking References
- **First Republic Bank**: FDIC-seized May 2023, acquired by JPMorgan Chase — do NOT reference as an active institution
- Use `JPMorgan Chase (Escrow Services)` for escrow functions previously attributed to First Republic

---

## Document Dating Conventions

- All mock/prototype data should use **2026** dates for consistency with the March 2026 programme timeline
- Format: `YYYY-MM-DD` (ISO 8601)
- Current programme baseline date: `2026-03-27`

---

## Register ID Conventions

Match the canonical conventions from `sigysovops/IndiSovereign-Operations-S1`:

| Prefix | Domain |
|--------|--------|
| `DOC-ADMIN-NNN` | Administrative documents |
| `DOC-BINDER-NNN` | Institutional binder documents |
| `LR-NNN` | Legal & regulatory registers |
| `OC-NNN` | Outreach & correspondence |
| `RR-NNN` | Research registers |
| `FM-NNN` | Financial model registers |
| `UI-NNN` | Dashboard & visualization components |
| `ADR-NNN` | Architecture Decision Records |

---

## Canonical Directory Structure

```
marshallsignaturegold-crypto/dev/
├── README.md
├── AGENTS.md           ← This file
├── .gitignore
├── 00_admin/           ← Status tracking, governance
├── 01_binder/          ← Institutional-ready documents
├── 02_registers/       ← Structured control-plane data
├── 03_research/        ← Research & evidence base
├── 04_models/          ← Financial models
├── 05_visuals/         ← Diagrams & presentations
├── 06_outreach/        ← Stakeholder mapping & correspondence
├── 07_automation/      ← CI scripts & generators
├── 08_data_room/       ← HTML master documents
├── ui/dashboards/      ← TSX compliance dashboards
└── governance/         ← Architecture Decision Records
```

---

## Cross-Repo Awareness

This repo (`marshallsignaturegold-crypto/dev`) and `sigysovops/IndiSovereign-Operations-S1` are **companion repositories**:

- **`marshallsignaturegold-crypto/dev`**: Development repo — dashboards, institutional documents, HTML deliverables
- **`sigysovops/IndiSovereign-Operations-S1`**: Operations repo — intelligence hub, binder pipeline, registers, research

When referencing documents or registers from the companion repo, use the full path:
`sigysovops/IndiSovereign-Operations-S1/[path]`

---

## Classification

All materials in this repository are:

> **CONFIDENTIAL — Institutional Distribution Only**

Do not include personal identifying information beyond named principals. Do not commit API keys, credentials, or live financial data.

---

*Last updated: 2026-03-27*
