const fs = require('fs');

const countIncreases = (mapData) => {
  // Track increases
  let answer = 0;
  
  for (let index = 0; index < mapData.length; index++) {
    const element = mapData[index];

    if (index === 0) {
    } else if (element > mapData[index - 1]) {
      answer += 1
    }
  }

  return answer;
};


const groupThrees = (input) => {
  let marker = 0;

  const groups = [];

  while (marker + 2 <= input.length - 1) {
    const group = [input[marker], input[marker + 1], input[marker + 2]]
    groups.push(group.reduce((acc, val) => acc + val, 0));

    marker += 1;
  }

  return groups;
};

fs.readFile('input', (err, data) => {
  if (err) throw err;
  const lines = data.toString().split('\n').map(i => parseInt(i));
  console.log(countIncreases(groupThrees(lines)));
});