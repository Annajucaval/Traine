var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function helloWorld() {
    return "Hello, World!";
  }
  
  console.log(helloWorld());