# Prototype validation

Verified locally on September 8, 2026, with Node 24, a production Vite build, and headless Chrome on macOS.

- Lint, strict TypeScript checks, production build: passed.
- Four product-logic tests: passed (scoring, duplicate evidence preservation, distinct accounts, export escaping and fixture immutability).
- Browser checks: search, duplicate grouping, tag correction and review, status/rationale, refresh persistence, CSV download, undo, navigation/back, submission, reset, mobile filtering and unavailable storage passed.
- Mobile viewport: 390 × 844; desktop: 1440 × 1000. No horizontal overflow or captured page errors.
- First Lighthouse production-build run: performance 100, accessibility 96 (mobile simulated throttling). Remaining link distinction was subsequently corrected. Full reports are in the implementation handoff.
- npm dependency audit: zero reported vulnerabilities.

The deployed GitHub Pages site also passed the full walkthrough. Its Lighthouse mobile run scored 98 performance and 100 accessibility. GitHub's verify-and-deploy workflow passed all gates. Public verification uses a signed-out browser with no credentials or application setup.

The independent review added CSV-formula neutralization and full saved-record validation. The final suite has six unit tests and three repository browser tests, including an incomplete-record recovery regression. Those regressions passed before the final baseline update.

The screenshot and workflow recording in ../media show the actual running prototype. These are software checks, not a claim of human usability or demand. No human research has been conducted. Proposed customer metrics remain unmeasured.

## Latest implementation check

After the editorial evidence-board update, lint, strict type checking, six unit tests, a production build, three browser workflows, and `npm audit --audit-level=high` passed. A browser review confirmed desktop and 390 × 844 layouts, grouped F01/F02 while preserving unique account evidence, and restored the grouping with Undo. Updated desktop screenshot, mobile screenshot, and workflow recording are in ../media. This remains software verification only.

## Proposed five-participant study and scoring protocol

No human study has run. If Northstar moves beyond this portfolio prototype, recruit five consenting B2B SaaS PM or product-operations participants who triage feedback at least weekly. In a 30-minute moderated session with fictional data, reserve an eight-minute task for each person to find the F01/F02 import-recovery evidence, group it, explain the unique-account count, alter one priority input, and decide whether to mark F01 Planned. Do not tell them that the tag is simulated until they encounter it; ask what they think it represents and whether it mattered to their decision.

Score each participant on a 0–2 rubric for evidence traceability (can locate both source quotes), score interpretation (can state how impact, confidence, and effort affect direction), decision rationale (ties the selected state to visible evidence), tag clarity (identifies it as a suggestion, not evaluated AI), and recovery (can use Undo after a deliberate change). For every dimension, 0 means incorrect or unable, 1 means partly correct or completed only after moderator help, and 2 means complete independently. Record moderator help separately and do not count neutral task instructions as help. A successful unassisted triage is at least 8/10, has no critical tag-boundary error, and needs no help identifying, grouping, or deciding on the task; the proposed threshold is four of five. This supplemental comprehension score does not replace the PRD’s published task-completion threshold. Two participants repeating any critical misunderstanding pauses expansion and sends the workflow back to design.

The earlier lint, unit, browser, build, audit, and visual results above remain historical technical results. They validate the prototype’s implementation at the stated time; they are not participant scores, customer research, adoption, or outcome data.
