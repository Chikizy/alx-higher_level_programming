#!/usr/bin/node
function add (a, b) {
  if (process.argv.length !== 4) {
    console.log('NaN');
  } else {
    const sum = a + b;
    console.log(sum);
  }
}
add(Number(process.argv[2]), Number(process.argv[3]));
