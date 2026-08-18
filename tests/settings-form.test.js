/**
 * Tests for alert threshold settings validation
 * Run with: npm test
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
    validateThresholdField,
    validateSettings,
    formatThresholdValue,
    THRESHOLD_FIELDS,
    DEFAULT_SETTINGS,
    NOTIFY_CHANNELS,
} from '../src/scripts/validation.js';

describe('validateThresholdField', () => {
    const cpuField = THRESHOLD_FIELDS.find((f) => f.id === 'cpu');

    it('accepts valid values within range', () => {
        const result = validateThresholdField(cpuField, 80);
        assert.equal(result.valid, true);
    });

    it('rejects empty values', () => {
        const result = validateThresholdField(cpuField, '');
        assert.equal(result.valid, false);
        assert.match(result.error, /required/i);
    });

    it('rejects values below minimum', () => {
        const result = validateThresholdField(cpuField, -1);
        assert.equal(result.valid, false);
        assert.match(result.error, /between 0 and 100/);
    });

    it('rejects values above maximum', () => {
        const result = validateThresholdField(cpuField, 101);
        assert.equal(result.valid, false);
    });

    it('rejects non-numeric values', () => {
        const result = validateThresholdField(cpuField, 'abc');
        assert.equal(result.valid, false);
        assert.match(result.error, /number/i);
    });
});

describe('validateSettings', () => {
    it('accepts default settings', () => {
        const result = validateSettings(DEFAULT_SETTINGS);
        assert.equal(result.valid, true);
        assert.deepEqual(result.errors, {});
    });

    it('rejects invalid response time step', () => {
        const result = validateSettings({ ...DEFAULT_SETTINGS, responseTime: 505 });
        assert.equal(result.valid, false);
        assert.ok(result.errors.responseTime);
    });

    it('rejects invalid notification channel', () => {
        const result = validateSettings({ ...DEFAULT_SETTINGS, channel: 'pigeon' });
        assert.equal(result.valid, false);
        assert.ok(result.errors.channel);
    });

    it('requires channel when alerts are enabled', () => {
        const result = validateSettings({ ...DEFAULT_SETTINGS, enabled: true, channel: '' });
        assert.equal(result.valid, false);
        assert.ok(result.errors.channel);
    });
});

describe('formatThresholdValue', () => {
    it('formats CPU with percent suffix', () => {
        const cpuField = THRESHOLD_FIELDS.find((f) => f.id === 'cpu');
        assert.equal(formatThresholdValue(cpuField, 80), '80%');
    });

    it('formats response time with ms suffix', () => {
        const respField = THRESHOLD_FIELDS.find((f) => f.id === 'responseTime');
        assert.equal(formatThresholdValue(respField, 500), '500 ms');
    });
});

describe('constants', () => {
    it('defines four threshold fields matching capstone spec', () => {
        assert.equal(THRESHOLD_FIELDS.length, 4);
        const ids = THRESHOLD_FIELDS.map((f) => f.id);
        assert.deepEqual(ids, ['cpu', 'memory', 'responseTime', 'errorRate']);
    });

    it('defines four notification channels', () => {
        assert.equal(NOTIFY_CHANNELS.length, 4);
    });
});
