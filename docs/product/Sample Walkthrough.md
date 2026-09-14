# Sample walkthrough — Feedback Nexus

This is a public walkthrough of the fictional Northstar sample. It uses only browser-local data; no feedback is sent anywhere. Start from the original fixtures: choose **Reset sample data**, read the confirmation, and reset it. Reset replaces local browser edits.

1. Open **Feedback inbox** and search for **import**. You should see **F01 — Show exactly where an import failed** and **F02 — Retry failed rows without starting over**. F01 starts with Alder Labs, Finch Studio, and Cedar Systems; F02 starts with Pineworks and Alder Labs.
2. Select F01 and F02, then choose **Group selected (2)**. The records stay visible as separate evidence: neither quote nor account list is deleted. Open F01’s detail panel. Its affected-account line reads the unique four-account union: **Alder Labs, Finch Studio, Cedar Systems, Pineworks**. Do not add the two displayed counts; Alder Labs appears in both source records.
3. Clear the search, then compare that import-recovery evidence with **F04 — Save the weekly operations report**. F04 remains separate and starts as Inbox. This is a deliberate PM tradeoff: reach is a directional input, while the original quote, segment, confidence, and effort remain available to challenge the comparison.
4. In F01’s detail panel, inspect the suggested **Onboarding** tag. You may accept it, edit it, or leave it unreviewed. Tag review is optional: it supplies context and does not block a planning decision.
5. Change F01 confidence to **40%**. Its individual score becomes **1.6**: three original accounts × impact 4 × 0.4 ÷ effort 3. The four-account group union is evidence context; it does not alter F01’s individual score. The score is not a delivery commitment or an automatic recommendation.
6. Enter a decision rationale and move F01 to **Planned**. Open **Product shortlist** to see the individual Planned record, then use **Export shortlist** if you want the local CSV. The export includes planned individual records only.
7. Select **Undo** to restore the last saved change. **Reset sample data** opens a confirmation dialog before replacing browser changes; that replacement can also be undone.

The walkthrough leaves one question deliberately open: whether preserved evidence and a transparent directional score help real PMs more than their current workflow. The proposed study tests that before adding automation, collaboration, or integrations.
