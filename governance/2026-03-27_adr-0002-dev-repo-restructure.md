---
doc_id: GOV-ADR-0002
version: v1.0.0
date: 2026-03-27
owner: Repository Operations
status: accepted
reviewers:
  - Marshall W. Morrison
---

# ADR-0002: Development Repository Restructure

## Change Log
- v1.0.0 (2026-03-27): Initial decision record for dev repo restructure from github/dev fork to canonical SSS structure.

## Context
The `marshallsignaturegold-crypto/dev` repository was forked from `github/dev` (the github.dev web editor repo) and repurposed to house SSS programme materials. Files were placed at root with no directory structure, the README was the default github/dev text, and multiple branding/factual inconsistencies existed across documents.

Key issues identified:
- Entity name inconsistency ("Signature Sovereign Solutions, LLC" vs "Signature Sovereign Solutions LLC")
- Title inconsistency ("Founder & COO" vs "Co-Founder & Chief Operating Officer")
- Defunct bank reference (First Republic Bank — FDIC seized May 2023)
- Date misalignment (TSX dashboards using 2024 dates vs March 2026 programme timeline)
- No directory structure matching the canonical `00_admin/` through `08_data_room/` architecture established in the companion operations repo

## Decision
1. Adopt the same canonical numbered directory structure (`00_admin/` through `08_data_room/`) used in `sigysovops/IndiSovereign-Operations-S1`.
2. Add `ui/dashboards/` for React TSX compliance dashboards.
3. Add `governance/` for ADRs and change tracking.
4. Standardize all branding per AGENTS.md brand rules.
5. Fix all factual errors (First Republic Bank, date consistency).
6. Replace github/dev default README with programme-specific README.
7. Create AGENTS.md and .github/copilot-instructions.md for AI agent context.

## Consequences
- All new files use canonical paths exclusively.
- Brand consistency enforced via AGENTS.md rules.
- Cross-repo alignment achieved with IndiSovereign-Operations-S1.
- Original root-level files superseded by canonically-placed corrected versions.
