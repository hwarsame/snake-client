const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',// IP address here,
    port: '50541'// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log('You have successfully connected to the server! :)')
  });
  return conn;
};

console.log("Connecting ...");
connect();