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
