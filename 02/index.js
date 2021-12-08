const fs = require('fs')

const dive = (cmds) => {

  let aim = 0
  let depth = 0
  let horizontalPosition = 0

  for (let index = 0; index < cmds.length; index++) {
    const element = cmds[index]
    switch (element[0]) {
      case 'down':
        aim = aim + element[1]
        break
      case 'up':
        aim = aim - element[1]
        break
      case 'forward':
        horizontalPosition = horizontalPosition + element[1]
        depth = depth + (element[1] * aim)
        break
    }
  }

  console.log(horizontalPosition * depth)
}

fs.readFile('input', (err, data) => {
  if (err) {
    throw err
  }
  const lines = data.toString()
    .split('\n')
    .map(i => {
      const move = i.split(' ')
      return [move[0], parseInt(move[1])]
    })
  
   dive(lines)
  
});