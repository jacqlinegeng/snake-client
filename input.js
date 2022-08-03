let connection;

const handleUserInput = function(key) {
  // your code here
  console.log(key);
  if (key === 's') {
    connection.write("Move: down");
  }
  
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  
  if (key === 'r') {
    connection.write("Say: weewoooooo");
  }
  if (key === '\u0003') {
    process.exit(); // terminate the program
  }
};

const setupInput = (conn)=> {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => handleUserInput(key));
  return stdin;
};

module.exports = {setupInput};