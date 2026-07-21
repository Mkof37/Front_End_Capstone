/**
 * Responsive AI Converter - Main Application Logic
 * Handles UI interactions and AI API integration
 */

// DOM Elements
const inputTextarea = document.getElementById('input');
const analyzeBtn = document.getElementById('analyzeBtn');
const outputBox = document.getElementById('output');

/**
 * Initialize application
 */
function initApp() {
    analyzeBtn.addEventListener('click', handleAnalyze);
    inputTextarea.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'Enter') {
            handleAnalyze();
        }
    });
}

/**
 * Handle analyze button click
 */
async function handleAnalyze() {
    const input = inputTextarea.value.trim();

    if (!input) {
        displayError('Please enter some content to analyze.');
        return;
    }

    setLoading(true);

    try {
        // Placeholder for AI API call
        // In production, this would call Claude API via backend
        const result = await simulateAIAnalysis(input);
        displayResult(result);
    } catch (error) {
        displayError(`Error: ${error.message}`);
    } finally {
        setLoading(false);
    }
}

/**
 * Simulate AI analysis (placeholder)
 * @param {string} input - The input text to analyze
 * @returns {Promise<string>} - The AI analysis result
 */
async function simulateAIAnalysis(input) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Return mock recommendation
    return `
        <h3>📊 Responsive Design Analysis</h3>
        <p><strong>Input processed:</strong> ${input.substring(0, 50)}...</p>
        <div class="recommendations">
            <h4>✨ Key Recommendations:</h4>
            <ul>
                <li>Use CSS Grid for complex layouts (better than floats)</li>
                <li>Implement mobile-first responsive design</li>
                <li>Optimize images with srcset for different viewports</li>
                <li>Add proper viewport meta tags</li>
                <li>Consider accessibility (WCAG 2.1 AA compliance)</li>
            </ul>
        </div>
        <p><em>💡 Connect Claude API to get real AI-powered recommendations!</em></p>
    `;
}

/**
 * Display result in output box
 * @param {string} result - The result HTML to display
 */
function displayResult(result) {
    outputBox.innerHTML = result;
}

/**
 * Display error message
 * @param {string} message - The error message
 */
function displayError(message) {
    outputBox.innerHTML = `<p class="error" style="color: #e74c3c;">${message}</p>`;
}

/**
 * Set loading state on button
 * @param {boolean} isLoading - Whether loading or not
 */
function setLoading(isLoading) {
    analyzeBtn.disabled = isLoading;
    analyzeBtn.textContent = isLoading ? 'Analyzing...' : 'Analyze with AI';
    analyzeBtn.style.opacity = isLoading ? 0.6 : 1;
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
