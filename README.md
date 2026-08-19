# Front_End_Capstone

A portfolio project demonstrating professional frontend engineering practices and AI integration capabilities.

## Overview

This capstone project showcases modern web development standards, responsive design principles, and clean code conventions. Built as a portfolio piece to demonstrate frontend engineering expertise, including HTML5, CSS3, JavaScript, and AI integration.

## Features

- AI-powered responsive design analysis
- Automatic content adaptation
- Real-time optimization suggestions
- Interactive preview and testing

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
npm run dev
```

## Scripts

- `npm start`: Serve the `src/` folder with `live-server` (default)
- `npm run dev`: Start dev server on port 3000
- `npm test`: Run unit tests (Node.js built-in test runner)
- `npm run lint`: Run ESLint on `src/` JavaScript files
- `npm run format`: Format sources with Prettier

## Running Tests

Unit tests live in the `tests/` directory and run using Node's built-in test runner. To execute tests locally:

```bash
npm test
```

Ensure you have a recent Node.js LTS installed before running tests or development scripts.

## Project Structure

```
Front_End_Capstone/
├── src/
│   ├── index.html           # Main application entry point
│   ├── styles/
│   │   └── main.css         # Responsive styling and components
│   └── scripts/
│       └── app.js           # Application logic and event handlers
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
├── CLAUDE.md                # Development guidelines and conventions
├── LICENSE                  # MIT License
└── .gitignore               # Git ignore rules
```

## Development

See [CLAUDE.md](./CLAUDE.md) for development conventions and AI assistant guidelines.

## License

MIT - See [LICENSE](./LICENSE) file for details

## Contributing

1. Follow [Conventional Commits](https://www.conventionalcommits.org/) format
2. Create feature branches from `main`
3. Submit pull requests with clear descriptions

---

**Status:** Initial setup and project scaffolding
