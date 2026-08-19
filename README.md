# Front_End_Capstone

A portfolio project demonstrating professional frontend engineering
practices and AI integration capabilities.

## Overview

This capstone project showcases modern web development standards,
responsive design principles, and clean code conventions. Built as a
portfolio piece to demonstrate frontend engineering expertise, including
HTML5, CSS3, JavaScript, and AI integration.

## Features

- **Form Validation** – Separated validation modules with comprehensive edge-case testing
  - Empty field detection
  - Email format validation with @ and domain/TLD requirements
  - Whitespace-only input handling
  - Message minimum length enforcement (10+ characters)
- **Accessibility-First Design** – WCAG compliance built into forms
  - Associated `<label>` elements for all inputs
  - `aria-invalid` toggled on validation failure
  - Error regions with `role="alert"` and `aria-describedby`
  - `aria-live="polite"` for non-blocking success/error messages
  - Keyboard navigation support
- **Clean Code Architecture** – No inline event handlers or validation logic
  - Validation functions separated in `files/` for Node.js test compatibility
  - BEM naming conventions for CSS
  - Pure validation functions (no DOM access) for unit testability
- **Tested & Verified** – Every feature ships with passing tests
  - Validation test suite in `files/test-validation.js`
  - Edge case coverage (empty, invalid, boundary, whitespace inputs)
  - Tests verify correct behavior before commit
- **AI Integration Concepts** – Demonstrates Claude API patterns
  - Responsive design principles
  - Real-time optimization suggestions

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **AI Integration:** Claude API
- **Tools:** Node.js, npm

## Prerequisites

- **Node.js (LTS)** - Download from [nodejs.org](https://nodejs.org)
- **Git** - Download from [git-scm.com](https://git-scm.com)
- **VS Code** (recommended) - Download from [code.visualstudio.com](https://code.visualstudio.com)

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Mkof37/Front_End_Capstone.git

# Navigate to project
cd Front_End_Capstone

# Install dependencies
npm install

# Start development server
npm start
```

## Scripts

- `npm start`: Serve the `files/` folder with `live-server`
- `npm run dev`: Start dev server on port 3000
- `npm test`: Run validation tests on form inputs
- `npm run lint`: Run ESLint on `files/**/*.js` JavaScript files
- `npm run format`: Format `files/` with Prettier (JS, CSS, HTML)

## Running Tests

Validation tests are located in `files/test-validation.js` and validate
form input handling and edge cases. To execute tests locally:

```bash
npm test
```

Tests verify:

- Empty field rejection
- Invalid email format detection
- Message length constraints
- Whitespace-only input handling
- Keyboard navigation and focus management

Ensure you have a recent Node.js LTS installed before running tests or
development scripts.

## Form Validation Rules

### Contact Form

- **Name:** Required, non-whitespace input
- **Email:** Required, valid email format (requires @, domain, and TLD)
- **Message:** Required, minimum 10 characters

Validation occurs on form submit. All errors are announced to screen readers
via `aria-live` regions and displayed inline without blocking user workflow.
Invalid fields are marked with `aria-invalid="true"`.

## Project Structure

```text
Front_End_Capstone/
├── files/
│   ├── index.html             # Main application entry point
│   ├── app.js                 # Application logic and event handlers
│   ├── main.css               # Responsive styling and components
│   ├── test-validation.js     # Form validation test suite (Node.js)
│   ├── CLAUDE.md              # Local development guidelines copy
│   ├── WORKFLOW.md            # Vague vs. precise prompting case study
│   └── mnt/                   # Archive of previous iterations
├── .eslintrc.json             # ESLint configuration
├── .gitignore                 # Git ignore rules
├── package.json               # Project dependencies and scripts
├── package-lock.json          # Locked dependency versions
├── README.md                  # Project documentation
├── CLAUDE.md                  # Development guidelines and conventions
├── LICENSE                    # MIT License
└── node_modules/              # Installed dependencies (ignored in git)
```

## Development Approach

This capstone emphasizes **precise prompting over vague requests**. Read
[WORKFLOW.md](./files/WORKFLOW.md) for a detailed case study: vague prompts
result in forms with zero validation and accessibility failures; precise
prompts with explicit test requirements catch those issues up front.

**Core principle:** Write tests first, verify behavior, *then* commit code.
This approach ensures quality before the code ships, not after a user or
accessibility audit finds the bugs.

**Development Conventions:** See [CLAUDE.md](./CLAUDE.md) for coding standards,
ES module structure, BEM CSS conventions, and AI assistant guidelines.

## License

MIT - See [LICENSE](./LICENSE) file for details

## Example: Contact Form

The contact form demonstrates the project's core principles:

```html
<!-- Semantic HTML with labels and error regions -->
<form id="contact-form" class="contact-form">
  <fieldset>
    <legend>Send us a message</legend>
    
    <div class="contact-form__field">
      <label for="name">Name</label>
      <input 
        id="name" 
        type="text" 
        name="name" 
        required 
        aria-invalid="false"
        aria-describedby="name-error"
      />
      <div id="name-error" role="alert" class="contact-form__error"></div>
    </div>
    
    <div class="contact-form__field">
      <label for="email">Email</label>
      <input 
        id="email" 
        type="email" 
        name="email" 
        required 
        aria-invalid="false"
        aria-describedby="email-error"
      />
      <div id="email-error" role="alert" class="contact-form__error"></div>
    </div>
    
    <div class="contact-form__field">
      <label for="message">Message</label>
      <textarea 
        id="message" 
        name="message" 
        required 
        aria-invalid="false"
        aria-describedby="message-error"
      ></textarea>
      <div id="message-error" role="alert" class="contact-form__error"></div>
    </div>
  </fieldset>
  
  <button type="submit">Send Message</button>
</form>
```

Validation logic is defined in `files/test-validation.js` as pure functions and
can be imported and tested independently of the DOM via Node.js.

## Quality Standards Checklist

- [x] Code passes ESLint validation
- [x] Code is formatted with Prettier
- [x] All commits follow Conventional Commits format
- [x] README is clear and comprehensive
- [x] Project includes example/demo (Contact form)
- [x] Code includes comments for complex logic
- [x] Validation tests pass (`npm test`)
- [x] Forms use separated validation modules (no inline handlers)
- [x] All form inputs have associated labels
- [x] Error regions use `role="alert"` and `aria-invalid`

## Contributing

1. Follow [Conventional Commits](https://www.conventionalcommits.org/) format
2. Create feature branches from `main`
3. Write tests for new features and run `npm test` before committing
4. Submit pull requests with clear descriptions
5. Ensure ESLint passes: `npm run lint`
6. Format code: `npm run format`

---

**Status:** Initial setup and project scaffolding

**Last updated:** 2026-08-19
