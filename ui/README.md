# ui — React/TSX Dashboard Components

This directory contains React prototype dashboard components for the **SafeTrade Program / AI-SMCC** compliance and management systems.

## Technology Stack

- **Framework:** React (functional components with hooks)
- **Styling:** Tailwind CSS (slate-900 + amber-400/500 palette)
- **State Management:** React useState (prototype level)
- **Language:** TypeScript JSX (.tsx)

> **Note:** These are prototype/mockup dashboards with hardcoded demonstration data. They are not production applications and do not connect to live data sources.

## Contents

| File | Description |
|------|-------------|
| `dashboards/sss-kyc-workflow.tsx` | KYC/AML investor onboarding pipeline |
| `dashboards/sss-entity-structure-manager.tsx` | Corporate entity structure tracker |
| `dashboards/sss-treasury-management.tsx` | Cash flow & liquidity dashboard |
| `dashboards/sss-political-risk-insurance.tsx` | DFC/MIGA political risk coverage tracker |
| `dashboards/sss-sanctions-screening.tsx` | OFAC/SDN sanctions compliance dashboard |
| `dashboards/sss-submodule-matrix.tsx` | 48 sub-module architecture matrix |

## Running the Dashboards

These TSX files require a React project scaffold to render. To use them:

```bash
npx create-react-app sss-dashboards --template typescript
cd sss-dashboards
# Copy TSX files into src/
npm start
```

Or use a tool like [StackBlitz](https://stackblitz.com/) or [CodeSandbox](https://codesandbox.io/) for quick prototyping.

---

*Signature Sovereign Solutions LLC | Q1 2026*
