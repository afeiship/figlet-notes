var figlet = require("figlet");
var chalk = require("chalk");

figlet("Hello fei!", function(err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

console.log(
  chalk.green(
    figlet.textSync("Boo!", {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default"
    })
  )
);
