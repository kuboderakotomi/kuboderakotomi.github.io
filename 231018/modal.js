console.log("modal.jsを読み込みました");


function showModal(){
  let element = document.querySelector("#modal");
  element.innerHTML = "クリックされたぞ"
}
function changeRed(){
  let element = document.querySelector("#modal");
    element.style.backgroundColor = "red"
}
function changeYellow(){
  let element = document.querySelector("#modal");
  element.style.backgroundColor = "yellow"
}
function changeGreen(){
  let element = document.querySelector("#modal");
  element.style.backgroundColor = "green"
}