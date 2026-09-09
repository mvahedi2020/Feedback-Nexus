# Feedback Nexus requirements

Help a PM evaluate feedback with context and document a planning decision. This is a fictional sample workspace.

## Acceptance criteria

- Combined search matches title, customer words and account names; segment and status filters combine.
- Manual feedback requires nonblank title, quote and account.
- Grouping two or more signals preserves every quote and shows unique affected accounts.
- Tags are simulated suggestions. Corrections persist and require explicit review.
- Impact, confidence and effort update the score; effort cannot be zero or negative.
- Rationale and status persist. Planned signals appear in the shortlist and its CSV.
- Undo restores the last change; reset restores fixtures; refresh retains changes when storage works.
- No interaction contacts customers or writes to an external system.

## Proposed success measures — not observed outcomes

| Measure | Denominator and method | Target | Guardrail |
|---|---|---|---|
| Successful triage | Participants recording a justified decision / five task-study participants | 4/5 unassisted | Status changes alone do not count |
| Time to decision | Median time among successful participants | Under 8 minutes | Explanation quality must not decline |
| Tag clarity | Participants identifying simulated suggestions / all participants | 5/5 | No belief that real AI was evaluated |
| Evidence retention | Original signals retained / selected signals | 100% | No duplicate-account inflation |

Small samples and subjective confidence can mislead. Real customer data would need explicit access and retention decisions before integration.
