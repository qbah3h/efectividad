/**
 * Effectiveness Calculator
 *
 * Compares two scenarios by computing Efficacy, Efficiency, and Effectiveness.
 *
 * Formulas:
 *   - Efficacy  = Achieved Result / Expected Result
 *   - Efficiency = (Achieved Result / (Actual Cost * Actual Time))
 *                / (Expected Result / (Expected Cost * Expected Time))
 *   - Effectiveness = average(efficacyScore, efficiencyScore) / MAX_SCORE
 */

/** Maximum score on the efficacy/efficiency scale. */
const MAX_SCORE = 5;

/**
 * Field definitions for validation.
 * Each field has a base ID (without the form suffix), a display label,
 * and whether it must be strictly greater than zero.
 */
const FIELD_DEFINITIONS = [
    { id: 'expectedResult', label: 'Expected Result (ER)', mustBePositive: true },
    { id: 'achievedResult', label: 'Achieved Result (AR)', mustBePositive: false },
    { id: 'expectedCost',   label: 'Expected Cost (EC)',   mustBePositive: true },
    { id: 'actualCost',     label: 'Actual Cost (AC)',     mustBePositive: true },
    { id: 'expectedTime',   label: 'Expected Time (ET)',   mustBePositive: true },
    { id: 'actualTime',     label: 'Actual Time (AT)',     mustBePositive: true },
];

/**
 * Shows an inline error message for a specific field.
 * @param {string} fieldId - The full DOM element ID (e.g. "expectedResult1").
 * @param {string} message - The error message to display.
 */
function showFieldError(fieldId, message) {
    const errorSpan = document.getElementById(`error-${fieldId}`);
    const inputField = document.getElementById(fieldId);
    if (errorSpan) {
        errorSpan.textContent = message;
        errorSpan.classList.add('visible');
    }
    if (inputField) {
        inputField.parentElement.classList.add('error');
    }
}

/**
 * Clears all validation errors for a given calculator form.
 * @param {string} formId - The form identifier suffix ("1" or "2").
 */
function clearErrors(formId) {
    FIELD_DEFINITIONS.forEach(function (field) {
        const fullId = field.id + formId;
        const errorSpan = document.getElementById(`error-${fullId}`);
        const inputField = document.getElementById(fullId);
        if (errorSpan) {
            errorSpan.textContent = '';
            errorSpan.classList.remove('visible');
        }
        if (inputField) {
            inputField.parentElement.classList.remove('error');
        }
    });
}

/**
 * Validates all input fields for a given calculator form.
 * Shows inline error messages for invalid fields.
 * @param {string} formId - The form identifier suffix ("1" or "2").
 * @returns {boolean} True if all fields are valid, false otherwise.
 */
function validateForm(formId) {
    clearErrors(formId);
    var isValid = true;

    FIELD_DEFINITIONS.forEach(function (field) {
        var fullId = field.id + formId;
        var input = document.getElementById(fullId);
        var rawValue = input.value.trim();

        if (rawValue === '') {
            showFieldError(fullId, field.label + ' is required.');
            isValid = false;
            return;
        }

        var numValue = Number(rawValue);

        if (isNaN(numValue)) {
            showFieldError(fullId, field.label + ' must be a number.');
            isValid = false;
            return;
        }

        if (field.mustBePositive && numValue <= 0) {
            showFieldError(fullId, field.label + ' must be greater than zero.');
            isValid = false;
            return;
        }

        if (!field.mustBePositive && numValue < 0) {
            showFieldError(fullId, field.label + ' cannot be negative.');
            isValid = false;
            return;
        }
    });

    return isValid;
}

/**
 * Reads the numeric value of a form input element.
 * @param {string} elementId - The DOM element ID.
 * @returns {number} The parsed numeric value.
 */
function getInputValue(elementId) {
    return Number(document.getElementById(elementId).value);
}

/**
 * Calculates and displays efficacy, efficiency, and effectiveness
 * for the given calculator form.
 * @param {string} formId - The form identifier suffix ("1" or "2").
 */
function calculate(formId) {
    if (!validateForm(formId)) {
        document.getElementById(`results${formId}`).classList.add('hidden');
        return;
    }

    const expectedResult = getInputValue(`expectedResult${formId}`);
    const achievedResult = getInputValue(`achievedResult${formId}`);
    const expectedCost = getInputValue(`expectedCost${formId}`);
    const actualCost = getInputValue(`actualCost${formId}`);
    const expectedTime = getInputValue(`expectedTime${formId}`);
    const actualTime = getInputValue(`actualTime${formId}`);

    const efficacy = achievedResult / expectedResult;
    const efficiency = (achievedResult / (actualCost * actualTime))
        / (expectedResult / (expectedCost * expectedTime));

    const efficacyScore = getEfficacyScore(efficacy * 100);
    const efficiencyScore = getEfficiencyScore(efficiency);
    const effectiveness = ((efficacyScore + efficiencyScore) / 2) / MAX_SCORE;

    document.getElementById(`efficacy${formId}`).textContent =
        `${(efficacy * 100).toFixed(2)}% (${efficacyScore} points)`;
    document.getElementById(`efficiency${formId}`).textContent =
        `${efficiency.toFixed(2)} (${efficiencyScore} points)`;
    document.getElementById(`effectiveness${formId}`).textContent =
        `${(effectiveness * 100).toFixed(0)}%`;

    document.getElementById(`results${formId}`).classList.remove('hidden');
}

/**
 * Returns a score (0–5) based on the efficacy percentage.
 * Higher percentages yield higher scores.
 * @param {number} percentage - Efficacy expressed as a percentage (0–100+).
 * @returns {number} Score from 0 to 5.
 */
function getEfficacyScore(percentage) {
    if (percentage <= 20) return 0;
    if (percentage <= 40) return 1;
    if (percentage <= 60) return 2;
    if (percentage <= 80) return 3;
    if (percentage <= 90) return 4;
    return 5;
}

/**
 * Returns a score (1, 3, or 5) based on the efficiency ratio.
 *   - ratio > 1 → 5 (exceeded expectations)
 *   - ratio === 1 → 3 (met expectations)
 *   - ratio < 1 → 1 (below expectations)
 * @param {number} ratio - The efficiency ratio (decimal).
 * @returns {number} Score: 1, 3, or 5.
 */
function getEfficiencyScore(ratio) {
    if (ratio > 1) return 5;
    if (ratio === 1) return 3;
    return 1;
}

/* --- Event Listeners --- */

document.getElementById('calcForm1').addEventListener('submit', function (event) {
    event.preventDefault();
    calculate('1');
});

document.getElementById('calcForm2').addEventListener('submit', function (event) {
    event.preventDefault();
    calculate('2');
});