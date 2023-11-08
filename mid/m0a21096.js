let answer = document.querySelector('#answer');
let outputHtml = `<ul>`;

//整形
let i = 0;
while(i < tweets.length) {
  outputHtml += `<li>${tweets[i].avatar}<b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
  i++;
}

//button
function showAll() {
  let element = document.querySelector("#modal");
  // 2. Elementオブジェクトの背景色スタイルを更新する
  element.style.backgroundColor = "red";
}
function showSaburo() {
  let element = document.querySelector("#modal");
  // 2. Elementオブジェクトの背景色スタイルを更新する
  element.style.backgroundColor = "red";
}
function showJiro() {
  let element = document.querySelector("#modal");
  // 2. Elementオブジェクトの背景色スタイルを更新する
  element.style.backgroundColor = "red";
}
function showTaro() {
  let element = document.querySelector("#modal");
  // 2. Elementオブジェクトの背景色スタイルを更新する
  element.style.backgroundColor = "red";
}
outputHtml += `</ul>`;
answer.innerHTML = outputHtml;