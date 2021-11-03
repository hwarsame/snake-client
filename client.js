const net = require("net");


const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',// IP address here,
    port: '50541'// PORT number here,
  });
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log('You have successfully connected to the server! :)')
    conn.write("Name: BIG");
  });
  conn.on("connect", (data) =>{
    // setTimeout(()=>{
    //   conn.write('Move: up')
    // }, 3000)
    
  })
  return conn;
};


module.exports = connect