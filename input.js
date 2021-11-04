let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  

  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    } else if (key === 'w') {
      connection.write('Move: up');
      conn.write('Say: Im lost pls help')
    } else if (key === 'a') {
      connection.write('Move: left');
      conn.write('Say: Wow thanks 4 help')
    } else if (key === 's') {
      conn.write('Move: down');
      conn.write('Say: WAIT! This no Help')
    } else if (key === 'd') {
      conn.write('Move: right');
      conn.write('Say: NOOOOOOOOO HELP!')
    }
  };

  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = setupInput;