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