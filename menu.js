const inquirer = require("inquirer");
const Topics = require("./Topics");
const Questions = require("./Questions");
const Random = require("./Random");

console.log("Hi, welcome to Quizee");

inquirer
  .prompt([
    {
      type: "list",
      name: "topic",
      message: "Выберите тему?",
      choices: Topics.getTopics(),
    },
  ])
  .then((answers) => {
    const topic = answers.topic;
    const num = Random.Randomchoice(topic);
    const que = Random.RandomQuestions(num);
    const ans = Random.RandomAnswers(num);

    inquirer
      .prompt([
        {
          type: "input",
          name: "answer0",
          message: que[0],
        },
        {
          type: "input",
          name: "answer1",
          message: que[1],
        },
        {
          type: "input",
          name: "answer2",
          message: que[2],
        },
      ])
      .then((answers) => {
        console.log(
          `вы ответили ${answers.answer0} - верный ответ: ${ans[0]}, ${
            answers.answer0 == ans[0] ? 1 : 0
          } баллов`
        );
        console.log(
          `вы ответили ${answers.answer1} - верный ответ: ${ans[1]}, ${
            answers.answer1 == ans[1] ? 1 : 0
          } баллов`
        );
        console.log(
          `вы ответили ${answers.answer2} - верный ответ: ${ans[2]}, ${
            answers.answer2 == ans[2] ? 1 : 0
          } баллов`
        );
        console.log(
          `итого ${
            (answers.answer0 == ans[0] ? 1 : 0) +
            (answers.answer1 == ans[1] ? 1 : 0) +
            (answers.answer2 == ans[2] ? 1 : 0)
          } баллов`
        );
      });
  });
