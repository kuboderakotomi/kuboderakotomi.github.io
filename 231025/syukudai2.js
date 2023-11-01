function checkAge(){
  let year = Number(document.querySelector('#year').value);
  let answer = document.querySelector('#answer');

  if(year % 400 != 0){
    answer.innerHTML = '閏年';
  }else if(year % 100 != 0){
    answer.innerHTML = '平年';
  }else if(year % 4 != 0){
    answer.innerHTML = '閏年';
  }else{
    answer.innerHTML = '平年';
  }
}