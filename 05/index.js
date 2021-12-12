const fs = require('fs')

fs.readFile('input', (err, data) => {
  if (err) {
    throw err
  }
  const lines = data.toString().trim().split('\n')
  hydrothermal(lines)
})

const range = (start, end) => {
  let pointer = [parseInt(start), parseInt(end)].sort((a,b) => a - b)
  let r = []

  for (let index = 0; index < (pointer[1] - pointer[0]); index++) {
    r.push(pointer[0] + index)
  }
  r.push(pointer[pointer.length - 1])

  return end > start ? r : r.reverse()
}

const hydrothermal = (input) => {
  const map = new Map()
  
  input.forEach(line => {
    let [start, finish] = line
      .split(' -> ')
      .map(i => i.split(','))

    const xRange = range(start[0], finish[0])
    const yRange = range(start[1], finish[1])

    if (xRange.length > 1 && yRange.length > 1) {

      for (let index = 0; index < xRange.length; index++) {
        let mapKey =`x${xRange[index]}y${yRange[index]}`
        map.set(mapKey, (map.get(mapKey) + 1 || 1))
      }

    } else if (xRange.length > yRange.length) {

      for (let index = 0; index < xRange.length; index++) {
        let mapKey =`x${xRange[index]}y${yRange[0]}`
        map.set(mapKey, (map.get(mapKey) + 1 || 1))
      }

    } else {
      for (let index = 0; index < yRange.length; index++) {
        let mapKey =`x${xRange[0]}y${yRange[index]}`
        map.set(mapKey, (map.get(mapKey) + 1 || 1))
      }
    }

  })


  let linesCrossed = 0

  for (let [key, value] of map) {
    if (parseInt(value) > 1) {
      linesCrossed += 1
    }
  }
    
  console.log(linesCrossed)
}
