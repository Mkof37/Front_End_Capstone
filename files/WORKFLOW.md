# WORKFLOW.md — Vague vs. Precise Prompting: Contact Form

**Feature:** Contact form for the portfolio site.
**Round 1 prompt:** "add a contact form" (accepted as-is, no review).
**Round 2 prompt:** File-referenced, with explicit constraints, example behavior, and a required verification step (write tests, run them, fix failures).

## Correctness

Round 1's form has zero validation. `type="text"` on the email field means even the browser's native email check never runs, and there's nothing stopping an empty submission — the `alert('Thank you for your message!')` fires no matter what's typed, including nothing at all. Round 2 validates every field on submit, rejects empty/invalid input before anything is "sent," and — critically — the validation logic was actually run against 10 test cases (empty fields, malformed email, a message just under the length limit, a whitespace-only name) rather than assumed correct. All 10 passed. One real mistake worth naming: the first version of the email regex was written from memory; I didn't just trust it — I ran it against `a@b` (a string that looks email-shaped but has no TLD) specifically because that's the kind of edge case a lazy regex often misses. It correctly rejected it, but that's a check I had to think to run, not something the prompt guaranteed on its own.

## Accessibility

Round 1 uses `placeholder` as the only field label — a real accessibility failure, since placeholder text disappears once a user starts typing and isn't reliably announced as a label by all screen readers. There's no error messaging at all, so a screen reader user gets no signal when something's wrong. Round 2 gives every field a real `<label>`, ties error text to its input with `aria-describedby`, flags invalid fields with `aria-invalid`, and uses `aria-live="polite"` regions so error and success messages are announced without the user having to go looking for them. Round 2 also replaces the blocking `alert()` — which is disruptive and easy to miss for screen reader and low-vision users — with an inline, non-blocking success message.

## Edge Cases

Round 1 handles exactly one path: a user fills in something (or nothing) and clicks submit, and it "succeeds" regardless. Round 2 explicitly covers: empty submission, malformed email, a message just below the 10-character minimum, whitespace-only input (a name of `"   "` reads as non-empty to a naive `.length` check, but shouldn't pass), and keyboard-only navigation (focus moves to the first invalid field on failed submit). The whitespace-only case is the one I wouldn't have thought to test if the prompt hadn't explicitly asked for a test checklist as part of the deliverable, not an afterthought.

## Review Effort

This is the part the mentor tip called out, and it held up exactly as described. Round 1 took under a minute to generate and looks done at a glance — but every flaw above would only surface later, most likely after a real user hit one (or during an accessibility audit, at a worse time to fix it). Round 2 took longer up front — writing the precise prompt took real thought, and running the verification step added a few extra minutes — but it shipped with its problems already found and fixed, and I didn't have to review it afterward looking for what might be wrong, because the test file *is* that review, committed alongside the code. End-to-end, Round 2 was slower to write and faster to trust.
