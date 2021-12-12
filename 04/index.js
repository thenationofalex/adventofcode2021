const fs = require('fs')

fs.readFile('input', (err, data) => {
  if (err) {
    throw err
  }
  const lines = data.toString().split('\n\n')

  const numberInput = lines.shift().split(',')
  const draws = []
  const games = lines

  let tmp = []

  /**
   * ✅ group draws into array of 5 nums
   * ✅ foreach draw (5 nums)
   * ✅ loop through each game card
   * ✅ mark numbers as needed
   * ✅ after we've marked the cards
   * look for a winner in a
   * ✅ row
   * or a column
   * if winner end 
   * else repeat
   */


  numberInput.forEach(num => {
    if (tmp.length <= 5) {
      tmp.push(parseInt(num))
    } else {
      draws.push(tmp)
      tmp = []
    }
  })

  let bingo = false
  let counter = 0

  let gamesWithStatus = []

  draws.forEach(draw => {
    draw.forEach(num => {
      games.map(g => {
        let card = g.split('\n').map(n => {
          return n.replace('  ', ' ').split(' ').map(nn => {
            return { m: num === parseInt(nn), n: parseInt(nn) }
          })
        })
      })
    })
  })
  
  console.log(games)

});