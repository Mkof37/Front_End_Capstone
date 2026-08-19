# Claude Code Guidelines & Project Stack

## Project Overview

**Front_End_Capstone** - A portfolio-building project showcasing modern frontend engineering practices. Demonstrates responsive design, AI integration, and best practices in web development for building a professional portfolio.

## Technology Stack

### Frontend
- **HTML5**: Semantic markup structure
- **CSS3**: Responsive design, Flexbox, Grid layouts
- **JavaScript (ES6+)**: Modern vanilla JS, async/await, fetch API
- **Live Server**: Local development server

### Backend/AI Integration
- **Node.js (LTS)**: Runtime environment
- **Claude API**: AI-powered content analysis and suggestions
- **Express.js** (when needed): REST API framework

### Development Tools
- **Git**: Version control with Conventional Commits
- **npm**: Package management
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **VS Code**: Primary IDE
- **GitLens**: Git history and blame tracking

## Coding Conventions

### JavaScript
```javascript
// Use const/let (no var)
// Prefer arrow functions
// Use descriptive variable names
// Comment complex logic
// Use async/await over .then()
```

### CSS
```css
/* BEM naming convention for classes */
.component-name { }
.component-name__element { }
.component-name--modifier { }

/* Mobile-first media queries */
@media (min-width: 768px) { }
```

### Commits

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat: add new feature`
- `fix: correct a bug`
- `docs: documentation updates`
- `style: formatting, missing semicolons, etc`
- `refactor: code restructuring without feature changes`
- `test: add or update tests`
- `chore: dependencies, config, build scripts`

### File Structure

```
Front_End_Capstone/
├── files/
│   ├── index.html          # Main application entry point
│   ├── app.js              # Application logic and event handlers
│   ├── main.css            # Responsive styling and BEM components
│   ├── test-validation.js  # Form validation test suite (Node.js)
│   ├── WORKFLOW.md         # Vague vs. precise prompting case study
│   └── mnt/                # Archive of previous iterations
├── package.json            # npm dependencies and scripts
├── .eslintrc.json          # ESLint configuration
├── README.md               # Project documentation
├── CLAUDE.md               # Development guidelines
├── LICENSE                 # MIT License
└── .gitignore              # Git ignore rules
```

## AI Assistant Guidelines

When using Claude Code/Cursor in this project:

1. **Code Review**: Ask for feedback on structure, performance, and accessibility
2. **Feature Development**: Request implementation of new responsive features
3. **Optimization**: Request suggestions for improving load time and UX
4. **Documentation**: Generate comments and API documentation
5. **Debugging**: Provide error traces for analysis and solutions

## Project Rules (learned from FE-03)

These rules are testable and project-specific. If a change violates one, it should fail review.

1. **Forms use separated validation modules — never inline `<script>` or `onclick` handlers.**
   All validation logic lives in `files/` as pure functions. Validation functions must be pure (no DOM access) so `test-validation.js` can import and assert on them. Inline handlers in HTML are rejected.

2. **Every form input must have an associated `<label for="id">`, error region with `role="alert"`, and `aria-invalid` toggled on validation failure.**
   Forms use BEM classes (e.g., `contact-form__field`, `contact-form__error`) defined in `files/main.css`, not inline `style=""` attributes. Grouped controls use `<fieldset>`/`<legend>`.

3. **New features ship with a verification step: write tests in `files/test-validation.js` and confirm `npm test` passes before committing.**
   Form validation must match the test assertions exactly. Do not accept empty-string checks as sufficient validation—verify actual business logic (min/max length, format, trimming whitespace).

### Example Prompts

- "Review my responsive CSS and suggest accessibility improvements"
- "Generate unit tests for the API integration module"
- "Critique my README and suggest one key improvement"

## Quality Standards

- [ ] Code passes ESLint validation
- [ ] Code is formatted with Prettier
- [ ] All commits follow Conventional Commits format
- [ ] README is clear and comprehensive
- [ ] Project includes example/demo
- [ ] Code includes comments for complex logic

## Getting Started

1. Clone repository
2. Run `npm install`
3. Follow `.gitignore` to avoid committing node_modules, .env files
4. Make changes in feature branches
5. Commit with Conventional Commits format
6. Submit PR to main

---

**Last Updated:** 2026-08-18  
**Version:** 1.1.0
