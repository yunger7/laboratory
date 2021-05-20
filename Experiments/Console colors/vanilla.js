/* === Color Reference === */

// Reset = "\x1b[0m"
// Bright = "\x1b[1m"
// Dim = "\x1b[2m"
// Underscore = "\x1b[4m"
// Blink = "\x1b[5m"
// Reverse = "\x1b[7m"
// Hidden = "\x1b[8m"

// FgBlack = "\x1b[30m"
// FgRed = "\x1b[31m"
// FgGreen = "\x1b[32m"
// FgYellow = "\x1b[33m"
// FgBlue = "\x1b[34m"
// FgMagenta = "\x1b[35m"
// FgCyan = "\x1b[36m"
// FgWhite = "\x1b[37m"

// BgBlack = "\x1b[40m"
// BgRed = "\x1b[41m"
// BgGreen = "\x1b[42m"
// BgYellow = "\x1b[43m"
// BgBlue = "\x1b[44m"
// BgMagenta = "\x1b[45m"
// BgCyan = "\x1b[46m"
// BgWhite = "\x1b[47m"

/* === Tests === */
console.log('\x1b[36m%s\x1b[0m', 'I am cyan');
console.log('\x1b[35m%s\x1b[0m', 'Magenta let\'s gooooo');
console.log('\x1b[34m%s\x1b[0m', 'Blue text');
console.log('\x1b[1m%s\x1b[0m', "I am bright");
console.log('\x1b[2m%s\x1b[0m', "I am dim");
console.log('\x1b[5m%s\x1b[0m', "Does this even do anything?");
console.log('\x1b[7m%s\x1b[0m', 'I am reversed');
console.log('\x1b[41m%s\x1b[0m', 'Red background');
console.log('\x1b[43m\x1b[30m%s\x1b[0m', 'I have a yellow background and black text');
console.log('\x1b[44m\x1b[30m%s\x1b[0m', 'Blue background and black text');