#!/usr/bin/node
const size = Number(process.argv[2]);
let str = '';
if (isNaN(size)) {
  console.log('Missing size');
}
for (let i = 0; i < size; i++) {
  str += 'X';
}
let j = 0;
while (j < size) {
  console.log(str);
  j++;
}
