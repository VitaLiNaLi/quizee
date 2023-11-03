const fs = require('fs');
const path = require('path');

class Topics {
  static getTopics() {
    const topics = fs.readdirSync(path.join(__dirname, 'topics'), (err) => {
      if (err) throw err; // не прочитать содержимое папки
   });
   return topics.map((el) => el.replace('.txt', '').replaceAll('_', ' '));
  }
}

console.log(Topics.getTopics());

module.exports = Topics;
