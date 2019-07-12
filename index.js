var figlet = require("figlet");

figlet("Hello fei!", function(err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});


console.log(
  figlet.textSync("Boo!", {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default"
  })
);
