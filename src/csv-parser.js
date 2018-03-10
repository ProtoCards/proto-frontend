const parse = require('csv-parse')
const fs = require('fs');

fs.readFile('./cards.csv', 'utf8', (err, data) => {
    if (err) throw err;
    parser(data)
});

const parser = (data) => {
  parse(data, {columns: true}, (err, output) => {
    cardify(output)
  })
}

const cardify = (data) => {
  data.forEach(card => {
    let parsedCard = {properties: []}
    for (const prop in card) {
      console.log(prop)
      console.log(card[prop])
      if (prop.toLowerCase() === "title") {
        parsedCard.workingTitle = card[prop]
        parsedCard.properties.push({name: prop, fieldId: null, content: card[prop]})
      } else if (prop.toLowerCase() === "quantity") {
        parsedCard.quantity = card[prop]
      } else {
        parsedCard.properties.push({name: prop, fieldId: null, content: card[prop]})
      }
    }
    console.log(parsedCard)
  })

}
// { Title: 'Cats for Days',
//     Quantity: '10',
//     Health: '5',
//     Cost: '8',
//     'Sandwich Flavor': 'Ham',
//     Fruit: 'Banana',
//     Color: 'Blue' },
//
// {
//     "_id": {
//         "$oid": "5a8e157bd50b46232fd14ce0"
//     },
//     "projectId": "5a861f6ef36d2873fccf8312",
//     "quantity": 4,
//     "properties": [
//         {
//             "name": "Fish",
//             "fieldId": "H",
//             "content": "Fish"
//         },
//         {
//             "name": "Ham",
//             "fieldId": "A",
//             "content": "Tomato"
//         }
//     ]
// }
