let i = 0;
let num = 0;
while (i <= 10000) {
  num += i;
  i++;
}

let num = 1;
while (true){
  num = num+1;
  if(num >= 50000){
    break;
  }
}
console.log(`num:${num}`);


let num = 0;
while(i < 100){
  num++;
  if(num % 15 != 0){
    console.log(`FizzBuzz`);
  } else if (num % 3 != 0){
    console.log(`Fizz`);
  } else if (num % 5 != 0) {
    console.log(`Buzz`);
  } else {
    continue;
  }
  console.log(num);
}

