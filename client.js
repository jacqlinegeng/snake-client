const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log('Successfully connected to game server');
    conn.write("Name: Jacqline");
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  // setTimeout(() => {
  //   conn.write("Move: up");
  // }, 1000);

  // setTimeout(() => {
  //   conn.write("Move: down");
  // }, 1500);

  // setTimeout(() => {
  //   conn.write("Move: left");
  // }, 2000);

  // setTimeout(() => {
  //   conn.write("Move: right");
  // }, 2500);

  // setTimeout(() => {
  //   conn.write("Move: up");
  // }, 3000);

  // setTimeout(() => {
  //   conn.write("Move: left");
  // }, 3500);


  return conn;
};

module.exports = {
  connect
};