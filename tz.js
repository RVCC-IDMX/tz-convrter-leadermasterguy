/* eslint-disable prefer-destructuring */
const yargs = require('yargs');
const moment = require('moment-timezone');
/* gives error if no arguments are given */
if (process.argv.length < 3) {
  console.log('Usage: node tz <timezone> [--format]');
  process.exit(1);
}

/* initializes variables */
moment.tz.setDefault('America/New_York');
let targetTimezone = '';
if (yargs.argv._[0]) {
  targetTimezone = yargs.argv._[0];
}
const params = yargs.argv;

/* gets string representation of timezone name (ex: America/New_York -> New York) */
const timezoneArray = targetTimezone.split('/');
const timezoneString = timezoneArray[timezoneArray.length - 1].replace('_', ' ');

/* if --format, print formatted times */
if (params.format) {
  console.log(
    `The time here is: ${moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}\nThe time in ${timezoneString} is: ${moment().tz(targetTimezone).format('dddd, MMMM Do YYYY, h:mm:ss a')}`,
  );
/* if not --format, print unformatted times */
} else {
  console.log(
    `The time here is: ${moment()
      .tz('America/New_York')
      .format()}\nThe time in ${timezoneString} is ${moment()
      .tz(targetTimezone)
      .format()}`,
  );
}
