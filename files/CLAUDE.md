# CLAUDE.md — Front_End_Capstone

Development guidelines and conventions for AI assistants working in this repo.

## Project Overview
Plain HTML5/CSS3/vanilla JavaScript portfolio project. No frameworks, no build step beyond what's already in `package.json`.

## Project Rules

1. **Every form input must have a real `<label>` element (via `for`/`id`), never a `placeholder` alone.** Placeholder-only labeling fails accessibility review — placeholder text vanishes once typing starts and isn't reliably read by all screen readers. Any PR touching a `<form>` should fail review if an input lacks an associated label.

2. **All form validation must run in JavaScript on submit, with errors shown inline and announced via `aria-live` — never `alert()` for success or error states.** `alert()` blocks the page and is easy to miss for screen reader and low-vision users. A submit handler that calls `alert()` anywhere should fail review.

3. **Any validation logic (regex, length checks, required-field checks) must ship with a runnable test file covering at minimum: empty input, boundary/edge input (e.g. exactly at a length limit, whitespace-only strings), and one clearly invalid + one clearly valid case.** Untested validation logic is the single highest-risk part of a form — it's also the easiest part to verify cheaply. A PR adding validation without a corresponding test file should fail review.

## Development
See WORKFLOW.md for the vague-vs-precise prompting comparison this project's conventions were derived from.
