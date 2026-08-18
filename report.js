const report = process.argv[2] || '';
const period = typeof process.argv[3] == 'number' ? process.argv[3] : 'Invalid period';
if (report) {
    console.log(`Period: ${period}`);
}
if (period) {
    console.log(`Report: ${report}`);
}
process.exitCode = 0;
if(!report && !period) {
    console.log("Usage: node src/report.js <report> <period>");
    process.exitCode = 1;
}