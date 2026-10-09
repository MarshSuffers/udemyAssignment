"use strict";
// data:
//initial amount
// annual contribution
//expected return
// duration
Object.defineProperty(exports, "__esModule", { value: true });
function calculateInvestment(data) {
    const { initAmount, annualContribution, expectReturn, duration } = data;
    if (initAmount < 0) {
        return 'Initial invesment amount must be at least 0';
    }
    if (duration <= 0) {
        return 'No amount of valid years provided.';
    }
    if (expectReturn <= 0) {
        return 'Expected return must be greater than 0';
    }
    let total = initAmount;
    let totalCont = 0;
    let totalIntEarned = 0;
    const annualResults = [];
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectReturn);
        totalIntEarned = total - totalCont - initAmount;
        totalCont = totalCont + annualContribution;
        total = total + annualContribution;
        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalContributions: totalCont,
            totalInterestEarned: totalIntEarned,
        });
    }
    return annualResults;
} // => result[]
function printResults(results) {
    //print the result data
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log('------------');
    }
}
const investmentData = {
    initAmount: 1000,
    annualContribution: 100,
    expectReturn: 0.09,
    duration: 10,
};
const results = calculateInvestment(investmentData);
printResults(results);
//# sourceMappingURL=calc.js.map