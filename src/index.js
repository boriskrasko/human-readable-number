const digits = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
};

const decades = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
};
module.exports = function toReadable (number) {
  let strFromNumbers = number.toString();
  		if( strFromNumbers.length == 1) {
  			result = digits[number];
  		} else  if (number <= 20) {
  			result = decades[number];
  		} else if (strFromNumbers.length == 2 && strFromNumbers[1] == 0) {
        result = decades[Math.floor(number/10)*10];
      } else if (number <= 99) {
        result = decades[Math.floor(number/10)*10] + ' ' + digits[number - Math.floor(number/10)*10];
      } else if (strFromNumbers[2] == 0 && strFromNumbers[1] == 0) {
        result = digits[strFromNumbers[0] * 1] + ' ' + 'hundred';
      } else if (strFromNumbers[1] == 0) {
        result = digits[strFromNumbers[0] * 1] + ' ' + 'hundred' + ' ' + digits[strFromNumbers[2] * 1];
      } else if (strFromNumbers[1] == 1 || strFromNumbers[2] == 0) {
        result = digits[strFromNumbers[0] * 1] + ' ' + 'hundred' + ' ' + decades[(strFromNumbers[1] + strFromNumbers[2]) * 1];
      } else {
        result = digits[strFromNumbers[0] * 1] + ' ' + 'hundred' + ' ' + decades[(strFromNumbers[1] * 10)] + ' ' + digits[strFromNumbers[2] * 1];
      }
   // return console.log(result);
   return result;
}

// toReadable (987);
