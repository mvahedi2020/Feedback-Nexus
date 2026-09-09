# Control Matrix: Feedback Nexus

All records, accounts, and outputs are fictional samples. No control sends customer messages, calls AI, or connects to an external system.

| Area | Control | Expected behavior | Recovery / boundary |
|---|---|---|---|
| Navigation | Feedback inbox, Product shortlist, Decision method, brand | Changes the hash view; the active location is exposed to assistive technology | Browser back/forward works; no network navigation is required |
| Filtering | Search | Matches title, quoted feedback, and account names | Empty matches show a clear-filter action |
| Filtering | Segment and status lists | Combine with search and each other | Clear filters restores the full sample view |
| Selection | Signal checkboxes | Selects two or more signals for grouping | Group action remains disabled until two are selected |
| Selection | Group selected | Links selected signals without deleting their quotes or accounts | Undo restores the preceding browser state |
| Detail | Signal card | Opens the selected evidence and decision record | Data remains local to the browser |
| Detail | Suggested tag field | Edits the sample tag and returns it to review-needed state | Accept reviewed tag records explicit human review |
| Detail | Impact, confidence, effort | Recalculates the transparent score | Effort is constrained to 0.5–100; no zero denominator |
| Detail | Rationale and review status | Stores the decision explanation and moves Planned items into the shortlist | Undo restores the last saved state |
| Detail | Customer update draft | Reveals a sample-only draft | It states that no message is sent |
| Capture | Add feedback | Requires title, customer words, and a fictional account before saving | Cancel and Escape close the modal; focus remains trapped while open |
| Export | Export shortlist | Downloads only Planned records as CSV | Spreadsheet-formula-like cells are neutralized; no external upload |
| Recovery | Undo | Restores the immediately preceding saved browser state | Disabled with no prior change |
| Recovery | Reset sample data | Confirms and restores the original fixtures | The preceding state becomes undoable; cancel leaves it intact |
| Persistence | Browser storage | Restores valid saved sample changes after refresh | A storage warning appears when unavailable or invalid; data remains sample-only |
| Accessibility | Skip link, keyboard controls, focus outlines, dialogs | Enables keyboard navigation and visible focus | Escape closes dialogs; mobile layout avoids horizontal overflow |
