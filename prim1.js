const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

let date = new Date ();

if (argv._[0] == "add")
{
    if (argv.d) date.setDate(date.getDate()+argv.d);
    if (argv.date) date.setDate(date.getDate()+argv.date);
    if (argv.m) date.setMonth(date.getMonth()+argv.m);
    if (argv.month) date.setMonth(date.getMonth()+argv.month);
}
else if (argv._[0] == "sub")
{
    if (argv.d) date.setDate(date.getDate()-argv.d);
    if (argv.date) date.setDate(date.getDate()-argv.date);
    if (argv.m) date.setMonth(date.getMonth()-argv.m);
    if (argv.month) date.setMonth(date.getMonth()-argv.month);
}
else
{
    if (argv.d) date=date.getDate();
    if (argv.date) date=date.getDate();
    if (argv.m) date=date.getMonth();
    if (argv.month) date=date.getMonth();
    if (argv.y) date=date.getFullYear()
    if (argv.year) date=date.getFullYear();
}
console.log(date)
