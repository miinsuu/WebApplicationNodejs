var args = process.argv;
for(var i=2;i<5;i++){
  console.log(args[i]);
}
console.log('A');
console.log('B');
if(args[2] === '1'){
  console.log('C1');
} else {
  console.log('C2');
}
console.log('D');
