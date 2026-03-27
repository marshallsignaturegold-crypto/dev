# 07_automation — CI Scripts & Document Generators

## Purpose

This directory contains automation scripts, CI/CD pipelines, document generators, and tooling for the SignatureSovereign SafeTrade Program repository operations.

## Intended Artifacts

| File | Description |
|------|-------------|
| Document generators | Scripts to generate/update registers from templates |
| CI/CD workflows | GitHub Actions for document validation |
| Linting scripts | Markdown, TSX, and HTML validation |

## Conventions

- All scripts must be documented with usage instructions
- Scripts should not contain secrets or credentials (use `.env` / secrets management)
- Automation output artifacts go to `dist/` (excluded via `.gitignore`)

---

*Signature Sovereign Solutions LLC — Co-Founder & Chief Operating Officer: Marshall W. Morrison*
