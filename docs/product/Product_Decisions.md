# Product decisions — Feedback Nexus

This record makes the choices behind the prototype reviewable. It does not report customer evidence or delivery commitments.

## Evidence board over an automated roadmap

**Alternatives considered:** an unstructured inbox, automatic ranking and roadmap generation, or an evidence board with an explicit planning decision. **Chosen compromise:** preserve individual quotes and account context, expose editable inputs, and let the PM record the final state and rationale. The score is directional support, not a recommendation that applies itself. **Cost:** more review time and no single objective priority. **Reconsider when:** sessions show reviewers cannot explain the score, need fields not shown, or prefer a simpler evidence view.

## Unique accounts when grouping

**Alternatives considered:** merge duplicates, count every comment as reach, or retain every signal while showing distinct accounts. **Chosen compromise:** retain originals and use unique affected accounts to avoid inflation. Individual signals keep their scores; group scores are not added. **Cost:** reviewers must distinguish related comments from reach. **Reconsider when:** participants cannot form a decision from grouped evidence or another impact unit proves more meaningful.

## Simulated tag suggestions with review

**Alternatives considered:** no suggestion, automatic labels, or a visibly simulated editable suggestion. **Chosen compromise:** show the suggestion and make acceptance or correction an explicit review action, while allowing a planning state without a prerequisite tag review. **Cost:** optional review adds triage time and has no model-accuracy claim. **Reconsider when:** users ignore the tag, mistake it for evaluated AI, or consented evidence justifies separately evaluated assistance.

## Local prototype boundary

**Alternatives considered:** connect live systems, build collaboration, or keep browser-local storage. **Chosen compromise:** local storage, export, and recovery make the sample inspectable without customer data. **Cost:** no shared record, permissions, or production workflow. **Reconsider when:** validated demand supports explicit privacy, access, retention, integration, and operational decisions.
