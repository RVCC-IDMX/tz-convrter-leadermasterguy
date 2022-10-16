/* eslint-disable prefer-destructuring */
const yargs = require('yargs');
const moment = require('moment-timezone');
moment.tz.setDefault('America/New_York');
let targetTimezone;
let command = yargs.argv._[0];
let params = yargs.argv;

if (process.argv.length > 4 || process.argv.length < 3) {
  console.log('Usage: node tz <timezone> [--format]');
  process.exit(1);
} else {
  targetTimezone = command;
}

if (params.format) {
  let month = '';
  console.log(month);
  let day = '';
  console.log(day);
  let year = '';
  console.log(year);
  let weekday = '';
  console.log(weekday);
  let absTime = '';
  console.log(absTime);
  let calcTime = '';
  console.log(calcTime);






} else {
  console.log(
    `The time here is: ${moment()
      .tz('America/New_York')
      .format()}\nThe time in ${targetTimezone} is ${moment()
      .tz(targetTimezone)
      .format()}`,
  );
}
