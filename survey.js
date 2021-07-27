const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  console.log(`${answer} is a very nice name! `);
  let name = answer;

  rl.question("What activity do you like to do? ", (answer) => {
    console.log(`${answer} sounds like fun!`);
    let activity = answer;

    rl.question("What do you listen while doing your that? ", (answer) => {
      console.log(`I like ${answer} too!`);
      let music = answer;

      rl.question("What is your favourite meal? ", (answer) => {
        console.log(`${answer} sounds good.`);
        let meal = answer;

        rl.question("What is your favourite dessert? ", (answer) => {
          console.log(`${answer} is very sweet!`);
          let dessert = answer;

          rl.question("Which sport is your favourite? ", (answer) => {
            console.log(`${answer} is very competitive!`);
            let sport = answer;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              console.log(`${answer} is very powerful!`);
              let superpower = answer;


              console.log(`${name} loves ${activity} while listening to ${music} music. At ${meal} time, ${name} enjoys ${dessert} 
              after the meal. Sometimes ${name} plays ${sport} and ${name}'s superpower is ${superpower}!`);

              rl.close();
            });
          });
        });
      });
    });
  });
});


