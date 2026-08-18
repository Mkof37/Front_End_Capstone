/**
 * Alert threshold settings validation
 * Pure functions for testability — no DOM dependencies.
 */

export const THRESHOLD_FIELDS = [
    { id: 'cpu', label: 'CPU usage', min: 0, max: 100, step: 1, default: 80, suffix: '%' },
    { id: 'memory', label: 'Memory usage', min: 0, max: 100, step: 1, default: 75, suffix: '%' },
    {
        id: 'responseTime',
        label: 'Response time',
        min: 0,
        max: 2000,
        step: 10,
        default: 500,
        suffix: ' ms',
    },
    { id: 'errorRate', label: 'Error rate', min: 0, max: 50, step: 1, default: 5, suffix: '%' },
];

export const NOTIFY_CHANNELS = ['email', 'sms', 'slack', 'webhook'];

export const DEFAULT_SETTINGS = {
    cpu: 80,
    memory: 75,
    responseTime: 500,
    errorRate: 5,
    channel: 'email',
    enabled: true,
};

/**
 * Validate a single threshold field value.
 * @param {object} field - Field config from THRESHOLD_FIELDS
 * @param {number|string} value - Raw input value
 * @returns {{ valid: boolean, error?: string }}
 */
export function validateThresholdField(field, value) {
    if (value === '' || value === null || value === undefined) {
        return { valid: false, error: `${field.label} is required.` };
    }

    const num = Number(value);

    if (Number.isNaN(num)) {
        return { valid: false, error: `${field.label} must be a number.` };
    }

    if (num < field.min || num > field.max) {
        return {
            valid: false,
            error: `${field.label} must be between ${field.min} and ${field.max}.`,
        };
    }

    if (field.step > 1 && num % field.step !== 0) {
        return {
            valid: false,
            error: `${field.label} must be in steps of ${field.step}.`,
        };
    }

    return { valid: true };
}

/**
 * Validate full alert threshold settings object.
 * @param {object} settings - Settings to validate
 * @returns {{ valid: boolean, errors: Record<string, string> }}
 */
export function validateSettings(settings) {
    const errors = {};

    for (const field of THRESHOLD_FIELDS) {
        const result = validateThresholdField(field, settings[field.id]);
        if (!result.valid) {
            errors[field.id] = result.error;
        }
    }

    if (!NOTIFY_CHANNELS.includes(settings.channel)) {
        errors.channel = 'Select a valid notification channel.';
    }

    if (settings.enabled && !settings.channel) {
        errors.channel = 'Notification channel is required when alerts are enabled.';
    }

    return { valid: Object.keys(errors).length === 0, errors };
}

/**
 * Format a threshold value for display.
 * @param {object} field - Field config
 * @param {number} value - Numeric value
 * @returns {string}
 */
export function formatThresholdValue(field, value) {
    return `${Math.round(Number(value))}${field.suffix}`;
}
