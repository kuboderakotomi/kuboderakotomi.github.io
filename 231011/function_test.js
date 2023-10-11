function ft1(am1,am2,am3){
  console.log(`仮引数: ${am1}`);
  console.log(`仮引数: ${am2}`);
  console.log(`仮引数: ${am3}`);
}

ft1(1,2,3);

function ft2(am1 = "default"){
  console.log(`仮引数: ${am1}`);
}

ft2();
ft2("カスタマイズした値");