const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
	let arr = [];
	let result = [];
	let chunk = expr.length / 10;
 
	for (let i = 0; i < chunk; i++) {
	  let subStr = expr.slice(i * 10, i * 10 + 10);
	  arr.push(subStr);
	}
	for (let i = 0; i < arr.length; i++) {
	  if (arr[i] === "**********") {
		 result.push(' ');
	  } else {
		 arr[i] = arr[i].replace(/10/g, '.').replace(/11/g, '-').replace(/00/g, '');
		 result.push(MORSE_TABLE[arr[i]]);
	  }
	}
	return result.join('');
 }

module.exports = {
    decode
}