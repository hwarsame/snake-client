const net = require("net")
const {IP, PORT} = require('./constants')


const connect = function() {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT
  });
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log('You have successfully connected to the server! :)');
    conn.write("Name: JOE");
  });
  conn.on("connect", (data) =>{
    // setTimeout(()=>{
    //   conn.write('Move: up')
    // }, 3000)
    
  });
  return conn;
};


module.exports = connect;