# Product risks — Feedback Nexus

These are decision risks to watch for in proposed research and future product work. They are not reports of incidents.

| Risk | Early signal | Mitigation and decision trigger |
|---|---|---|
| Score is mistaken for an objective answer | Participants defer to the number or cannot explain a choice | Keep inputs editable and ask for rationale. Revise or remove the score if two or more participants treat it as automatic. |
| Grouping obscures evidence or inflates reach | Reviewers cannot find an original quote or misread comment count as accounts | Preserve originals and show unique accounts. Pause group-level scoring until comprehension is demonstrated. |
| Account spelling creates false reach | The same customer appears with case or whitespace differences and reviewers see different score or export counts | Normalize identity at scoring, group display, and export boundaries while retaining the original record text. Add a fixture with repeated spellings to every review checklist. |
| Simulated tags appear more capable than they are | Participants say the tag is real AI or infer accuracy | In proposed research, label the suggestion and invite explicit review; do not introduce live assistance without provenance, evaluation, and error-handling decisions. |
| Planned is mistaken for a delivery promise | Participants infer a date, commitment, or customer notification from a planning-state change | Keep Planned distinct from delivery language, preserve the optional rationale as context, and test the customer-update draft before any external communication capability. |
| Real customer material is pasted into the public sample | A reviewer enters an identifiable account, quote, or sensitive support detail | Keep the capture form labeled for fictional examples and exclude submitted content from any telemetry. A production capture path requires access, consent, retention, deletion, and redaction controls first. |
| Browser-local sample is treated as a shared system | People expect teammates, permissions, or durable history | State the boundary in product and review docs. Do not add shared data without access, retention, and recovery requirements. |
| Recovery silently destroys an invalid saved workspace | A malformed saved payload falls back to fixtures and a later edit overwrites the payload before the user chooses reset | Keep the incompatible payload untouched, block persistence for the session, and make Reset sample data the explicit recovery action. |
| Convenience scope displaces the decision problem | Requests center on imports, dashboards, or automation before core comprehension | Use the Discovery Plan as a gate: invest after evidence that the explainable decision workflow is understood and valued. |

Review these signals after each proposed study. A repeated signal changes the next product decision; it does not establish demand or production readiness.
