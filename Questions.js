const fs = require('fs');
const path = require('path');
const { EOL } = require('os');

class Questions{
  static getQuestions(topic) {
    const file = topic.replaceAll(' ', '_') + '.txt';
    const dataStr = fs.readFileSync(path.join(__dirname, 'topics', file), 'utf-8')
    const data = dataStr.split(EOL)
    const cards = [];
    for (let i = 0; i < data.length; i += 3) {
      const card = { question: data[i], answer: data[i+1]};
      cards.push(card);
    }
    return cards
  }
}

module.exports = Questions