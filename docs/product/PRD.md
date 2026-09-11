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

In the fictional weekly review, a PM searches **“import”**, selects F01 and F02, and groups them. The result must retain both customer quotes, show two distinct Northstar accounts, and leave the original records available for inspection. The PM can set impact to 4, confidence to 3, and effort to 2; the visible score changes from those inputs rather than from a hidden rule. They may move the group to **Planned** with a rationale such as “Unblocks first-value recovery for two accounts,” even if they leave its simulated **Onboarding** tag unreviewed. The tag is supporting context, not a required gate.

A separate saved-report signal can remain **Exploring** when its evidence is thinner. Changing a status without rationale must not create an unexplained committed decision. A refresh retains the confirmed local sample state where browser storage is available; Undo returns the most recent change; Reset restores the fictional fixtures only after its confirmation flow. Exported CSV includes the resulting Planned shortlist and never contacts Northstar customers. These examples define prototype behavior, not a release promise or observed user result.
