const fs = require('fs')

const powerConsumption = (gamma, epsilon) => gamma * epsilon

const diagnostic = (input) => {
  let gamma = ""
  let epsilon = ""

  let array0 = []
  let array1 = []
  let counter = 0

  const iter = (input) => {
    if (counter !== input.length) {
      
      let row = input[counter].split('')

      for (let index = 0; index < row.length; index++) {
        const element = row[index];
        if (parseInt(element) === 0) {
          if (array0[index] === undefined) array0[index] = 0
          array0[index] += 1
        } else {
          if (array1[index] === undefined) array1[index] = 0
          array1[index] += 1
        }
      }
      counter += 1
      iter(input)
    }
  }

  iter(input)

  for (let index = 0; index < array0.length; index++) {
    if (parseInt(array0[index]) > parseInt(array1[index])) {
      gamma = gamma + "0"
    } else {
      gamma = gamma + "1"
    }

    if (parseInt(array0[index]) < parseInt(array1[index])) {
      epsilon = epsilon + "0"
    } else {
      epsilon = epsilon + "1"
    }

    
  }

  console.log(parseInt(gamma, 2) * parseInt(epsilon, 2))
}

fs.readFile('input', (err, data) => {
  if (err) {
    throw err
  }
  const lines = data.toString().split('\n')
  diagnostic(lines)
});