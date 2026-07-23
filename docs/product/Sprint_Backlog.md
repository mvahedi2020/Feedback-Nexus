# Sprint Backlog: Feedback Nexus

## Sprint Goal
Deliver the core Triage Board with drag-and-drop capability and complete the 1-way Zendesk integration so real feedback can start flowing into the app.

## Current Sprint (Sprint 6)

### 1. [Feature] React DnD Kanban Board (5 Story Points)
**Description:** Implement the Triage Board UI using `@hello-pangea/dnd`. 
**Acceptance Criteria:**
- 4 hardcoded columns: Inbox, Reviewing, Approved, Rejected.
- Dragging a card between columns updates the item's `status` in the mock database.
- Hover states and active drag styling match the Figma designs perfectly.
**Assignee:** Alex K. (Frontend)

### 2. [Backend] Zendesk Webhook Listener (3 Story Points)
**Description:** Create a `/api/webhooks/zendesk` endpoint to ingest Zendesk tickets that are tagged with "feature-request".
**Acceptance Criteria:**
- Validate Zendesk webhook HMAC signatures.
- Parse the Zendesk payload and extract the `requester.email`, `ticket.id`, and `ticket.description`.
- Save to the Feedback items table.
**Assignee:** Marcus T. (Backend)

### 3. [Design] Empty States & Onboarding (2 Story Points)
**Description:** The Triage board looks broken when there are 0 items. Implement an empty state.
**Acceptance Criteria:**
- Render a premium empty state illustration.
- Include a CTA button: "Connect Zendesk" or "Create Manual Feedback".
**Assignee:** Sarah J. (Design)

## Backlog (Next Sprint)
- [Feature] Auto-tagging using OpenAI API.
- [Integration] 2-way sync with Jira (Push approved feedback to a Jira Epic).
