const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  conn.on("connect", () => {
    console.log('you ded cuz you idle ')
    conn.write('Name: AAD')
    // conn.write('Move: down')
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports= {connect}

