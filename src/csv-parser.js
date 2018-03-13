const parse = require('csv-parse/lib/sync')
const fs = require('fs');

const read = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) throw err;
      resolve(data)
    })
  })
}

const importFile = async (filename) => {
  let csvString = await read(filename)
  let csvArray = parse(csvString)
  let column_names = csvArray.shift()
  console.log(column_names)
  console.info(csvArray)
  // update column names if needed so there's a Title and Type
  const objects = []
  csvArray.forEach((line) => {
    const obj = {}
    for (i = 0; i < line.length; i++) {
      obj[column_names[i]] = line[i]
    }
    objects.push(obj)
  })
  console.log(objects)
  console.log(cardify(objects))
}

importFile('./cards.csv')

// const parser = (data) => {
//   parse(data, {columns: true}, (err, output) => {
//     // console.log(output)
//     // output.map(card => {
//     //   card['tiiiiitle'] = card['Title']
//     //   delete card['Title']
//     //   return card['tiiiiitle']
//     // })
//     cardify(output)
//   })
// }

const cardify = (data) => {
  const cards = []
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
    cards.push(parsedCard)
  })
  return cards
}
