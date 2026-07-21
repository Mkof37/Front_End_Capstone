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
src/
├── index.html          # Main entry point
├── styles/
│   └── main.css        # Primary stylesheet
├── scripts/
│   ├── app.js          # Main application logic
│   ├── api.js          # Claude API integration
│   └── utils.js        # Utility functions
└── assets/
    └── images/

public/                # Static files served to users

tests/                 # Test files
```

## AI Assistant Guidelines

When using Claude Code/Cursor in this project:

1. **Code Review**: Ask for feedback on structure, performance, and accessibility
2. **Feature Development**: Request implementation of new responsive features
3. **Optimization**: Request suggestions for improving load time and UX
4. **Documentation**: Generate comments and API documentation
5. **Debugging**: Provide error traces for analysis and solutions

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

**Last Updated:** 2026-07-21  
**Version:** 1.0.0
