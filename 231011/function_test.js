function logHello() {
  console.log("logHello()を呼び出しました");
}

function logArguments(arg1, arg2, arg3){
  console.log(arg1);
  console.log(arg2);
  console.log(arg3);
}

function logArgumentsWithDefault(arg1, arg2 = 'arg2デフォルトの値'){
  console.log(arg1);
  console.log(arg2);
}

// 2021 * 1010を返す関数
function calc(){
  return 2021 * 1010;
}

function multiply(a, b){
  return a * b;
}

function multiplyOnesPlace(a, b){
  return a * b % 10;
}

function multiplyTensPlace(a, b){
  return parseInt(a * b % 100 / 10)
}