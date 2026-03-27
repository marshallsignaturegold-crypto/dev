# ui/dashboards — TSX Compliance & Management Dashboards

## Purpose

This directory contains React/TypeScript (TSX) compliance and management dashboard components for the SignatureSovereign SafeTrade Program. These are prototype/reference dashboards demonstrating the operational infrastructure of the programme.

## Components

| File | Purpose | ID |
|------|---------|-----|
| `sss-kyc-workflow.tsx` | KYC/AML investor onboarding pipeline | `UI-001` |
| `sss-entity-structure-manager.tsx` | Corporate entity structure tracker | `UI-002` |
| `sss-treasury-management.tsx` | Cash flow & liquidity management | `UI-003` |
| `sss-political-risk-insurance.tsx` | DFC/MIGA coverage tracker | `UI-004` |
| `sss-sanctions-screening.tsx` | OFAC/SDN compliance screening | `UI-005` |
| `sss-submodule-matrix.tsx` | 48 sub-module architecture matrix | `UI-006` |

## Technical Stack

- **Framework:** React functional components with `useState` hooks
- **Styling:** Tailwind CSS utility classes (`slate-900` dark mode, `amber-400/500` accents)
- **State:** Local component state (no external state management — prototype)
- **Data:** Hardcoded mock data — these are prototypes, not production applications

## Important Notes

- **All mock data uses 2026 dates** for internal consistency with the March 2026 programme timeline
- **JPMorgan Chase (Escrow Services)** is used for escrow functions — First Republic Bank ceased to exist (FDIC seizure May 2023)
- All financial figures are mock/prototype data for demonstration purposes

## ID Convention

Dashboard components use the prefix: `UI-NNN`

---

*Signature Sovereign Solutions LLC — Co-Founder & Chief Operating Officer: Marshall W. Morrison*
