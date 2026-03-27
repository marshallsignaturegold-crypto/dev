# AGENTS

Registered agents and their operational scope for this repository.

| Agent | Scope | Instruction file |
|-------|-------|-----------------|
| Copilot (global) | All files | `.github/copilot-instructions.md` |
| Dashboard agent | `ui/dashboards/**` | Inline TSX conventions |
| Data room agent | `08_data_room/**` | HTML document standards |
| Outreach agent | `06_outreach/**` | Brand voice + compliance |

## Brand Rules (MANDATORY)

### Entity Name
- **Correct:** `Signature Sovereign Solutions LLC`
- **Wrong:** `Signature Sovereign Solutions, LLC` (no comma)
- **Wrong:** `Signature Sovereign Solution LLC` (missing "s")
- **Wrong:** `Signature Sovereign Solutions` (missing LLC)

### Leadership Title
- **Correct:** `Marshall W. Morrison, Co-Founder & Chief Operating Officer`
- **Wrong:** `Founder & COO` (must be "Co-Founder")
- **Wrong:** `Founder & Chief Operating Officer` (must be "Co-Founder")

### Program Name Hierarchy
| Level | Name | Use Context |
|-------|------|-------------|
| Public brand | SafeTrade Program / Sovereign SafeTrade Program | External comms, outreach |
| Technical/Institutional | AIA-SMCC (Afro-Indian Strategic Minerals & Capital Corridor) | Master docs, investor materials |
| Policy alignment | IMEC-SSTP (Sovereign SafeTrade Program under IMEC framework) | Government policy documents |

### Sub-Brand Rules
| Brand | Scope | NEVER use for |
|-------|-------|---------------|
| **SignatureSovereign** | Corridor-wide umbrella | India-only or Somaliland-only contexts |
| **IndiSovereign** | India/Bihar BIBC only | Somaliland/BEZ contexts |
| **SovereignSomaliland** | Somaliland/BEZ SSTLC/SCMC only | India/Bihar contexts |

## Constraints

1. Never reference Airtable or any external secret or credential.
2. No external secrets; use only `secrets.GITHUB_TOKEN` in workflows.
3. All outputs must be editable via PR.
4. YAML must remain concise and prose-free.
5. Factual claims require a minimum of 3 sources unless a documented exception exists.
6. Market data (gold price, silver price, DFC ceiling) must be labeled with date and "scenario/projected" qualifier when used outside original document context.
7. All dates in TSX dashboards must be internally consistent with the Q1 2026 programme timeline.
8. First Republic Bank references are PROHIBITED — the bank was seized by FDIC May 2023.

## Cross-Repo Awareness

| Repo | Role |
|------|------|
| `marshallsignaturegold-crypto/dev` (THIS) | Development, dashboards, institutional docs |
| `sigysovops/IndiSovereign-Operations-S1` | Operations, intelligence hub, binder pipeline |

## Register ID Conventions (from IndiSovereign-Operations-S1)

- Document IDs: `DOC-<DOMAIN>-<NNN>` (e.g., `DOC-BINDER-001`)
- Version tags: `vMAJOR.MINOR` (e.g., `v0.1`)
- Register families: `LR-*`, `OC-*`, `KPI-*`, `CL-*`, `CM-*`, `FM-*`, `SH-*`, `DEC-*`, `RR-*`
- Evidence: `EV-NNNN`
- Variables: `VAR-NNNN`
- Sources: `SRC-NNNN`
- Governance: `GOV-ADR-NNNN`
