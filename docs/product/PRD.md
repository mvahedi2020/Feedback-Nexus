# Feedback Nexus requirements

## Product brief

**User:** A B2B SaaS product manager preparing a planning discussion.

**Problem:** Feedback systems often separate customer words from the prioritization decision, which makes it difficult to explain why one opportunity moves forward and another does not.

**Product outcome:** Help the PM compare feedback with its original account context, form a directional priority, and record a decision that a reviewer can challenge. This is a fictional sample workspace, not evidence of customer demand or observed business impact.

## Scope and tradeoffs

The first release prioritizes traceability over automation. It preserves individual feedback when related items are grouped, exposes the inputs behind the score, and offers an explicit tag review and editable decision rationale. Those choices add steps, but prevent a tidy backlog from hiding the underlying evidence or a simulated suggestion from being mistaken for a decision.

The sample intentionally excludes CRM ingestion, live customer messaging, collaboration roles, delivery forecasting, model training, and automatic roadmap creation. Browser-only storage keeps the prototype inspectable and low-risk, while also meaning it is not a shared production workspace.

## Workflow requirements

1. Find relevant signals by customer words, account name, segment, or current planning state.
2. Compare related signals without deleting their original quotes or inflating the affected-account count.
3. Inspect a simulated tag suggestion when it would help; accepting or correcting it is optional and does not block recording a planning decision.
4. Adjust visible impact, confidence, and effort inputs; explain the choice; then record a planning state.
5. Recover from an error with Undo, retain work after refresh where browser storage is available, or export the resulting shortlist.

## Acceptance criteria

- Combined search matches title, customer words and account names; segment and status filters combine.
- Manual feedback requires nonblank title, quote and account.
- Grouping two or more signals preserves every quote and shows unique affected accounts.
- Tags are simulated suggestions. A reviewer may accept or correct a tag explicitly, or record a Planned decision with the suggested tag still unreviewed and explain why in the rationale.
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

## Concrete Northstar acceptance examples

In the fictional weekly review, a PM searches **“import”**, selects F01 and F02, and groups them. The result links both records without deleting their quotes. When either linked record is active, its affected-account detail is the unique union of **Alder Labs, Finch Studio, Cedar Systems, and Pineworks**. The PM can edit the active individual record’s impact, confidence, and effort; F01, for example, permits confidence values of 40%, 60%, 80%, or 100%, and its visible score changes from those inputs rather than from a hidden rule.

The PM may move F01 itself to **Planned** and optionally write a rationale such as “Validate import recovery before committing.” A rationale is visible editable context, not a gate, and F01 may become Planned while its simulated **Onboarding** tag remains unreviewed. The tag is supporting context, not a required condition. F04, the saved-report signal, can remain **Inbox** when the PM does not advance it; the available states are Inbox, Reviewing, Planned, and Declined.

A refresh retains the confirmed local sample state where browser storage is available. Undo immediately restores the most recent saved change. Reset opens a restore dialog and its reset action replaces browser changes with the fictional seed data, after which that replacement can be undone. Exported CSV includes individual Planned records and never contacts Northstar customers. These examples define prototype behavior, not a release promise or observed user result.
