// --- Day 1: Sonar Sweep ---
const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'input'), "utf8", (err, data) => {
  if (err) {
    throw err
  }
  
  let answer = 1
  const mapData = data.split('\n')

  for (let index = 0; index < mapData.length; index++) {
    const element = mapData[index];

    if (index === 0) {
      console.log(element, "(N/A - no previous measurement)")
    } else if (element > mapData[index - 1]) {
      console.log(element, "(increased)")
      answer += 1
    }
  }

  console.log(answer)
  return answer
})
