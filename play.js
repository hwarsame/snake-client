// const net = require("net");
// establishes a connection with the game server
const connect = require('./client')

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  

  const handleUserInput = function(key){
    if (key === '\u0003') {
      process.exit();
    }
  }
  stdin.on('data', handleUserInput);
  return stdin
};
console.log("Connecting ...");
connect();
setupInput();
