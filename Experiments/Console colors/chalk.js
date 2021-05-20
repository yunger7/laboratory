/*
  Repo: https://github.com/chalk/chalk
  Install: npm i chalk

  Other libraries:
    * colors
    * cli-color
*/

import chalk from "chalk";

const log = console.log;

log(chalk.blue("Hello world"));

log(chalk.bgBlue.black("Combined styles"));
log(chalk.blue.bgRed.bold('Hello world!'));

log(chalk.red('Nested', chalk.underline.bgBlue('styles') + '!'));

log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

let cpu = 90;
let ram = 40;
let disk = 70;
log(chalk`
CPU: {red ${cpu}%}
RAM: {green ${ram}%}
DISK: {yellow ${disk}%}
`)

log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'))

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));
