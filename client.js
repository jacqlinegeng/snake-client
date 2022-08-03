const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',// IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log('Successfully connected to game server');
    conn.write("Name: Jacqline")
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  // setTimeout(() => {
  //   conn.write("Move: up");
  // }, 1000);

  setTimeout(() => {
    conn.write("Move: down");
  }, 1500);

  setTimeout(() => {
    conn.write("Move: left");
  }, 2000);

  setTimeout(() => {
    conn.write("Move: right");
  }, 2500);

  setTimeout(() => {
    conn.write("Move: up");
  }, 3000);

  setTimeout(() => {
    conn.write("Move: left");
  }, 3500);


  return conn;
};

module.exports = {
  connect,
};