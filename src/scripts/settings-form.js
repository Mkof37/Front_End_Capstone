/**
 * Alert threshold settings form — UI controller
 * Follows BEM naming and project accessibility standards.
 */

import {
    THRESHOLD_FIELDS,
    DEFAULT_SETTINGS,
    validateSettings,
    formatThresholdValue,
} from './validation.js';

const STORAGE_KEY = 'alertThresholdSettings';

/**
 * Load settings from localStorage or return defaults.
 * @returns {object}
 */
export function loadSettings() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
        }
    } catch {
        // Corrupt storage — fall back to defaults
    }
    return { ...DEFAULT_SETTINGS };
}

/**
 * Persist settings to localStorage.
 * @param {object} settings
 */
export function saveSettingsToStorage(settings) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

/**
 * Read current form values from the DOM.
 * @param {HTMLFormElement} form
 * @returns {object}
 */
export function readFormValues(form) {
    const data = {};

    for (const field of THRESHOLD_FIELDS) {
        const input = form.querySelector(`#${field.id}`);
        data[field.id] = Number(input.value);
    }

    data.channel = form.querySelector('#channel').value;
    data.enabled = form.querySelector('#enabled').checked;

    return data;
}

/**
 * Apply settings values to form inputs.
 * @param {HTMLFormElement} form
 * @param {object} settings
 */
export function applySettingsToForm(form, settings) {
    for (const field of THRESHOLD_FIELDS) {
        const input = form.querySelector(`#${field.id}`);
        const output = form.querySelector(`#${field.id}-out`);
        input.value = settings[field.id];
        if (output) {
            output.textContent = formatThresholdValue(field, settings[field.id]);
        }
    }

    form.querySelector('#channel').value = settings.channel;
    form.querySelector('#enabled').checked = settings.enabled;
}

/**
 * Display validation errors on the form.
 * @param {HTMLFormElement} form
 * @param {Record<string, string>} errors
 */
export function showFormErrors(form, errors) {
    const errorSummary = form.querySelector('#settings-error-summary');
    const errorList = form.querySelector('#settings-error-list');

    for (const field of THRESHOLD_FIELDS) {
        const input = form.querySelector(`#${field.id}`);
        const errorEl = form.querySelector(`#${field.id}-error`);
        const hasError = Boolean(errors[field.id]);

        input.setAttribute('aria-invalid', hasError ? 'true' : 'false');
        if (errorEl) {
            errorEl.textContent = errors[field.id] || '';
        }
    }

    const channelError = form.querySelector('#channel-error');
    if (channelError) {
        channelError.textContent = errors.channel || '';
    }

    const errorKeys = Object.keys(errors);
    if (errorKeys.length > 0) {
        errorSummary.hidden = false;
        errorList.innerHTML = errorKeys
            .map((key) => `<li>${errors[key]}</li>`)
            .join('');
    } else {
        errorSummary.hidden = true;
        errorList.innerHTML = '';
    }
}

/**
 * Initialize the alert threshold settings form.
 */
export function initSettingsForm() {
    const form = document.getElementById('settings-form');
    if (!form) return;

    const savedMsg = form.querySelector('#settings-saved-msg');
    const settings = loadSettings();
    applySettingsToForm(form, settings);

    for (const field of THRESHOLD_FIELDS) {
        const input = form.querySelector(`#${field.id}`);
        const output = form.querySelector(`#${field.id}-out`);

        input.addEventListener('input', () => {
            output.textContent = formatThresholdValue(field, input.value);
            showFormErrors(form, {});
            savedMsg.hidden = true;
        });
    }

    form.querySelector('#save-btn').addEventListener('click', () => {
        const values = readFormValues(form);
        const { valid, errors } = validateSettings(values);

        if (!valid) {
            showFormErrors(form, errors);
            savedMsg.hidden = true;
            form.querySelector('#settings-error-summary').focus();
            return;
        }

        saveSettingsToStorage(values);
        showFormErrors(form, {});
        savedMsg.hidden = false;
    });

    form.querySelector('#reset-btn').addEventListener('click', () => {
        applySettingsToForm(form, DEFAULT_SETTINGS);
        showFormErrors(form, {});
        savedMsg.hidden = true;
        localStorage.removeItem(STORAGE_KEY);
    });
}
