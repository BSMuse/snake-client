const { connect } = require('./client')


const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if ( key === 'w') {
    connect().write('Move: up')
    console.log('Move: up')
  } else if ( key === 's') {
    connect().write('Move: down')
    console.log('Move: down')
  } else if ( key === 'a') {
    connect().write('Move: left')
    console.log('Move: left')
  } else if ( key === 'd') {
    connect().write('Move: right')
    console.log('Move: right')
  }
}

const setupInput = function () {
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
}; 

module.exports = { setupInput }