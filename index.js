const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

let para1 = document.getElementById('para1');
let para2 = document.getElementById('para2');

function generate() {
  let arr = [];
  let str = '';
  let num = prompt('Please enter length of password');
  if (!num) {
    num = prompt('Please enter a number');
  } else if (num > 15) {
    num = prompt('Please enter a number less than 15');
  } else {
    for (let i = 0; i < num; i++) {
      arr.push(characters[Math.floor(Math.random() * characters.length)]);
    }
    str = arr.join('');
    return str;
  }
}

function meh() {
  console.log(1);
  para2.textContent = generate();
  para3.textContent = generate();
}
