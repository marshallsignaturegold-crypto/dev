# ADR-0001: Repository Restructure

**Date:** 2026-03-27
**Status:** Accepted
**Deciders:** Marshall W. Morrison — Co-Founder & Chief Operating Officer, Signature Sovereign Solutions LLC

---

## Context

The `marshallsignaturegold-crypto/dev` repository was a fork of `github/dev` (the github.dev web editor repository). As a result:

1. The `README.md` was the default github/dev fork README ("Press the . key on any repo") — containing zero project information
2. All project files were dumped at root level with no directory structure (HTML documents, TSX dashboards, and Markdown letters all flat in the root)
3. No `.gitignore` was present — missing standard exclusions
4. No `AGENTS.md` existed — no AI agent context file with brand rules
5. Multiple branding inconsistencies existed across documents
6. Factual errors existed in code files (defunct First Republic Bank reference, 2024 dates inconsistent with 2026 programme timeline)
7. No governance or admin structure matched the canonical paths used in the companion repo `sigysovops/IndiSovereign-Operations-S1`

---

## Decision

Adopt the canonical `00_admin/` through `08_data_room/` directory structure, mirroring the architecture established in `sigysovops/IndiSovereign-Operations-S1`, plus `ui/dashboards/` for TSX components and `governance/` for ADRs.

### New Structure

```
marshallsignaturegold-crypto/dev/
├── README.md                          ← NEW: Full project README
├── AGENTS.md                          ← NEW: AI agent context & brand rules
├── .gitignore                         ← NEW: Node/Python/OS exclusions
├── 00_admin/
│   ├── README.md
│   └── STATUS.md
├── 01_binder/
│   ├── README.md
│   └── government-outreach-letter.md
├── 02_registers/
│   └── README.md
├── 03_research/
│   └── README.md
├── 04_models/
│   └── README.md
├── 05_visuals/
│   └── README.md
├── 06_outreach/
│   └── README.md
├── 07_automation/
│   └── README.md
├── 08_data_room/
│   ├── README.md
│   ├── SSS_AIA_SMCC_Master_Institutional_Document.html
│   └── SafeTrade_Program_Masters_Thesis.html
├── ui/
│   └── dashboards/
│       ├── README.md
│       ├── sss-kyc-workflow.tsx
│       ├── sss-entity-structure-manager.tsx
│       ├── sss-treasury-management.tsx
│       ├── sss-political-risk-insurance.tsx
│       ├── sss-sanctions-screening.tsx
│       └── sss-submodule-matrix.tsx
└── governance/
    ├── README.md
    └── 2026-03-27_adr-0001-repository-restructure.md  ← This file
```

### Fixes Applied

| Issue | Fix |
|-------|-----|
| Default github/dev README | Replaced with full project README |
| No AGENTS.md | Created with brand rules and verification requirements |
| No .gitignore | Created with Node/Python/OS exclusions |
| First Republic Bank reference in `sss-treasury-management.tsx` | Replaced with JPMorgan Chase (Escrow Services) — First Republic seized by FDIC May 2023 |
| All mock data with 2024 dates | Updated to 2026 for consistency with March 2026 programme timeline |
| "Founder & COO" title inconsistency | Standardized to "Co-Founder & Chief Operating Officer" |
| "Signature Sovereign Solution" (missing "s") | Fixed to "Signature Sovereign Solutions" |
| Entity name comma inconsistency | Standardized to "Signature Sovereign Solutions LLC" (no comma) |

---

## Consequences

### Positive
- Repository is now professional-grade and institutionally presentable
- Structure mirrors the companion repo `sigysovops/IndiSovereign-Operations-S1`
- AI agents interacting with this repository have clear brand rules and verification requirements via `AGENTS.md`
- Critical factual errors (defunct bank reference) are corrected
- All new work follows canonical paths

### Neutral
- Files that were previously at root have been relocated to canonical subdirectories
- Any external links or references pointing to root-level files will need updating

### Negative
- None identified

---

## References

- Companion repo: `sigysovops/IndiSovereign-Operations-S1`
- FDIC First Republic seizure: https://www.fdic.gov/resources/resolutions/bank-failures/failed-bank-list/first-republic.html
- IMEC G20 announcement: https://www.whitehouse.gov/briefing-room/statements-releases/2023/09/09/fact-sheet-world-leaders-launch-a-landmark-india-middle-east-europe-economic-corridor/
- DFC BUILD Act 2018 (current $60B cap): https://www.dfc.gov/who-we-are/overview

---

*ADR-0001 — Accepted 2026-03-27*
*Signature Sovereign Solutions LLC — Marshall W. Morrison, Co-Founder & Chief Operating Officer*
