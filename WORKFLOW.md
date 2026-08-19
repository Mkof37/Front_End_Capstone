# FE-03: AI-Assisted Workflow Comparison

## Prompts Used

**Round 1 (vague):** "Add a settings form to the app."

**Round 2 (precise):** Build an alert threshold settings form matching `Capstone/alert_threshold_settings.html`. Use BEM classes in `src/styles/main.css`, separate modules (`validation.js`, `settings-form.js`), range inputs for CPU (0–100%), memory (0–100%), response time (0–2000 ms, step 10), and error rate (0–50%). Include notify channel select and enable-alerts toggle. Validate all fields before save; persist to `localStorage`. Accessibility: `<label>` + `for`, `aria-invalid`, `role="alert"`, `aria-live`, `<fieldset>`/`<legend>`. Write tests in `tests/settings-form.test.js` and run `npm test` before finishing.

## Time Comparison

| Phase | Round 1 (vague) | Round 2 (precise) |
|-------|-----------------|-------------------|
| Prompt + generation | ~2 min | ~8 min (plan + code + tests) |
| Manual review/fixes | ~15 min (would need a11y pass, refactor) | ~3 min (verify tests, spot-check UI) |
| **Total** | **~17 min** (and still incomplete) | **~11 min** (shippable) |

Round 2 felt slower during generation but finished faster end-to-end because review surface was smaller and tests caught logic errors immediately.

## Specific Diffs

Round 1 changed one file (`src/index.html`, +35 lines). Round 2 touched seven files (+626 / −32 lines vs. round 1):

- **Structure:** Round 1 inlined styles, an `onclick` handler, and a `<script>` block in HTML. Round 2 split validation (`validation.js`), UI controller (`settings-form.js`), styles (BEM in `main.css`), and 13 unit tests.
- **Correctness:** Round 1 validated only name/email — the capstone-relevant CPU/memory fields had no range checks. Round 1 used `email.indexOf('@')` (accepts `"a@"`). Round 2 validates all four thresholds, enforces response-time step multiples of 10, and rejects invalid notification channels.
- **Accessibility:** Round 1 inputs had no associated labels (`<p>Name: <input>`). Round 2 uses `<label for>`, `<output>`, `aria-describedby`, an error summary with `role="alert"`, and a `<fieldset>` grouping metric sliders.
- **Edge cases:** Round 1 showed success even when alerts were disabled and thresholds were untouched. Round 2 handles reset-to-defaults, corrupt `localStorage`, and clears field errors on slider input.
- **Review effort:** Round 1 required reading inline JS for XSS (`innerHTML`), guessing intended fields, and rewriting before merge. Round 2 review was mostly "do tests pass?" and a quick a11y scan.

## AI Mistake Caught

During Round 2, the first validation draft only checked empty strings on range inputs — which can never be empty — mirroring Round 1's fake validation. The verification step (`npm test`) exposed this: tests for out-of-range CPU and invalid response-time steps failed until range and step logic was added to `validateThresholdField()`.

## Takeaway

A one-sentence prompt produces *something*, but you inherit its assumptions (name/email fields nobody asked for). A spec with file references, constraints, and a test command produces code you can verify instead of rewrite.
