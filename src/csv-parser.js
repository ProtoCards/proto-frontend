const parse = require('csv-parse')
const fs = require('fs');

const read = new Promise((resolve, reject) => {
  fs.readFile('./cards.csv', 'utf8', (err, data) => {
    if (err) throw err;
    resolve(data)
  })
})

read.then((data) => {
  parser(data)
})


const parser = (data) => {
  parse(data, {columns: true}, (err, output) => {
    // console.log(output)
    // output.map(card => {
    //   card['tiiiiitle'] = card['Title']
    //   delete card['Title']
    //   return card['tiiiiitle']
    // })
    cardify(output)
  })
}

const cardify = (data) => {
  data.forEach(card => {
    let parsedCard = {
      workingTitle: null,
      printQuantity: 1,
      cardType: null,
      properties: []
    }
    for (const prop in card) {
      if (prop.toLowerCase() === "title") {
        parsedCard.workingTitle = card[prop]
        parsedCard.properties.push({name: prop, fieldId: null, content: card[prop]})
      } else if (prop.toLowerCase() === "type") {
        parsedCard.cardType = card[prop]
        parsedCard.properties.push({name: "Type", fieldId: null, content: card[prop]})
      } else if (prop.toLowerCase() === "quantity") {
        parsedCard.printQuantity = parseInt(card[prop])
      } else if (card[prop] === "") {
      } else {
        parsedCard.properties.push({name: prop, fieldId: null, content: card[prop]})
      }
    }
    console.log(parsedCard)
  })
}
