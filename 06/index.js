const fs = require('fs')

class Sea {

    static school = []
    
    constructor() {
        this.school = []
    }

    addFishToSea (fish) {
        this.school.push(fish)
    }

    getAllTheFish () {
        return this.school.length
    }

    age() {
        this.school.forEach(fish => {
            if (fish.age === 0) {
                fish.age = 6
                this.addFishToSea({ age: 8 })
            } else {
                fish.age -= 1
            }
        })
        console.log(this.getAllTheFish())
    }
}


fs.readFile('input', (err, data) => {
    if (err) {
      throw err
    }
    const lines = data.toString().trim().split(',')
    
    const theSea = new Sea()

    lines.forEach(line => {
        theSea.addFishToSea({ age: parseInt(line) })
    })

    const timeLine = 256
    let counter = 0

    while (counter !== timeLine) {
        theSea.age()
        counter += 1
    }

    console.log(theSea.getAllTheFish())

})
