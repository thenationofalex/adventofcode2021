const fs = require('fs')

class Sea {
    
    constructor() {
        this.school = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    addFishToSea (fish) {
        this.school[fish]++
    }

    getAllTheFish () {
        return this.school.reduce((a,b) => a + b)
    }

    age(days) {
        for (let i = 0; i < days; i++) {
            let [d0, d1, d2, d3, d4, d5, d6, d7, d8] = this.school
            this.school[0] = d1
            this.school[1] = d2
            this.school[2] = d3
            this.school[3] = d4
            this.school[4] = d5
            this.school[5] = d6
            this.school[6] = d7 + d0
            this.school[7] = d8
            this.school[8] = d0
        }
    }
}


fs.readFile('input', (err, data) => {
    if (err) {
      throw err
    }
    const lines = data
        .toString()
        .trim()
        .split(',')
        .map(x => parseInt(x))
    
    const theSea = new Sea()

    lines.forEach(line => {
        theSea.addFishToSea(line)
    })

    theSea.age(256)
    console.log(theSea.getAllTheFish())

})
