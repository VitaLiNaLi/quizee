const inquirer = require("inquirer");
const Topics = require("./Topics");
const Questions = require("./Questions");

class Random {
  static Randomchoice(topic) {
    
    const Count = Questions.getQuestions(topic).length;
    const Random = [
      Math.floor(Math.random() * Count),
      Math.floor(Math.random() * Count),
      Math.floor(Math.random() * Count),
    ];
    return Random;
  }
  static RandomQuestions(Random) {
    const que = [
      Questions.getQuestions(topic)[Random[0]].question,
      Questions.getQuestions(topic)[Random[1]].question,
      Questions.getQuestions(topic)[Random[2]].question,
    ];

    return que;
  }
  static RandomAnswers(Random) {
    const ans = [
      Questions.getQuestions(topic)[Random[0]].answer,
      Questions.getQuestions(topic)[Random[1]].answer,
      Questions.getQuestions(topic)[Random[2]].answer,
    ];
    return ans;
  }
}

module.exports = Random;
