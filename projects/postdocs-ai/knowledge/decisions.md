# Decisions

## Purpose

Record human decisions that define testing intent.

| Decision | Status | Source | Last verified | Evidence | Owner | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Do not write tests during initial project knowledge-base setup. | confirmed | human | 2026-07-07 | User request | QA Lead | This task creates knowledge only. |
| Use public user documentation as the initial authoritative source for project knowledge. | confirmed | human | 2026-07-07 | User request; https://learn.postdocs.ai/ | QA Lead | App exploration and test authoring are deferred. |

## Pending Decisions

| Decision needed | Status | Source | Evidence | Owner | Needed for |
| --- | --- | --- | --- | --- | --- |
| Select first smoke scenario. | unknown | QA setup | `knowledge/user-journeys.md` | QA Lead | Test authoring. |
| Approve test accounts and target environment. | unknown | QA setup | `project-context.md` | QA Lead | Authenticated exploration and automation. |
| Define AI-output acceptance criteria. | unknown | QA setup | `knowledge/risks.md` | QA Lead/Product | Regression test design. |
| Approve mock-mode strategy for integrations. | unknown | QA setup | `knowledge/integrations.md` | QA Lead/Product/Engineering | Local and deterministic testing. |
