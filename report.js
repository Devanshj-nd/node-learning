const args = process.argv.slice(2);

if (args.length !== 2) {
    console.error("Usage: node src/report.js <report> <period>");
    process.exitCode = 1;
    process.exit();
}

const [report, period] = args;

const operators = ['&', '&&', '|', '||'];

if (operators.includes(report) || operators.includes(period)) {
    console.error("Invalid input: report and period cannot be operators");
    process.exitCode = 1;
    process.exit();
}

console.log(`Report: ${report}`);
console.log(`Period: ${period}`);