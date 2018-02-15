// Jeffrey Chuc

const maxRangeSum = (dataIn) => {
  dataSet = dataIn.split(' ');
  dataSet = dataSet.map((n) => parseInt(n));
  let numDays = dataSet.shift();
  let startPointer;
  let endPointer;
  // let maxData = {start: 0, end: 0, total: 0};
  let currMax;
  let max = 0;
  for (let i = 0; i < dataSet.length; i++)  {
    for (let j = i + 1; j < dataSet.length; j++)  {
      currMax = sumArray(dataSet, i, j);
      if ( currMax > max) {
        max = currMax;
      }
    }
  }
  return max;
};

const sumArray = (arrayIn, start, end) => {
  let sum = 0;
  for (let i = start; i <= end; i++)  {
    sum += arrayIn[i];
  }
  return sum;
};

console.log(maxRangeSum('10 7 -3 -10 4 2 8 -2 4 -5 -6'));

const textDollarHelper = (numIn) => {
  const translateHash = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11 : "eleven",
    12 : "twelve",
    13 : "thirteen",
    14 : "fourteen",
    15 : "fifteen",
    16 : "sixteen",
    17 : "seventeen",
    18 : "eighteen",
    19 : "nineteen",
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninty',
    100: 'hundred',
    1000: 'thousand',
    1000000: 'million',
  };
  let finString = '';
  if (numIn < 21 || (numIn % 10 === 0 && numIn <= 90)) {
    finString += translateHash[numIn];
  }
  else if (numIn < 100) {
    finString = translateHash[Math.floor(numIn / 10) * 10] + " " + textDollarHelper(numIn % 10);
  }
  else if (numIn >= 100)  {
    // console.log('num in is greater than 100');
    let magnitude = Math.pow(10, (numIn.toString().length - 1));
    while (!(magnitude in translateHash)) {
      // console.log('magnitude is not in translate hash');
      magnitude = Math.floor(magnitude / 10);
    }
    let prefix = Math.floor(numIn / magnitude);
    let remain = numIn - (prefix * magnitude);
    // console.log(prefix, remain);
    // console.log('magnitude is ', magnitude);
    // console.log(prefix, 'prefix');
    // console.log(remain);
    finString += textDollarHelper(prefix) + " " + translateHash[magnitude];
    if (remain !== 0) {
        // console.log(remain);
        finString += " " + textDollarHelper(remain);
    }
  }
  return finString;
};

const textDollar = (numIn) => {
  let finString = '';
  finString += textDollarHelper(numIn) + ' dollar';
  if (numIn > 1)  {
    finString += 's';
  }
  return finString;
}

console.log(textDollar(3));
console.log(textDollar(46));
console.log(textDollar(466));
console.log(textDollar(1234));
console.log(textDollar(10));
console.log(textDollar(21));
console.log(textDollar(2200)); //extra test case mentioned in directions
