let connection;
const { MOVEMENT_KEY } = require('./constants');

const handleUserInput = function(key) {
  // your code here
  console.log(key);

  if (key === '\u0003') {
    console.log("thanks for playing");
    process.exit(); // terminate the program
  }

  connection.write(MOVEMENT_KEY[key]);
};

const setupInput = (conn)=> {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};