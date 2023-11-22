let answer = document.querySelector('#answer');
let outputHtml = `<ul>`;

function showAll() {
  outputHtml = `<div>`;
  let i = 0;
  while (i < tweets.length) {
    outputHtml += `<div><img src="${tweets[i].avatar}" alt="${tweets[i].name}: avatar" style="width: 10%; height: 10%; border: solid 1px #777777;"> ${tweets[i].name}: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i><hr>`;
    i++;
  }
  outputHtml += `</div>`;
  answer.innerHTML = outputHtml;
}

function showSaburo() {
  outputHtml = `<div>`;
  let i = 0;
  while (i < tweets.length) {
    if (tweets[i].name === "三郎BOT") {
      outputHtml += `<div><img src="${tweets[i].avatar}" alt="${tweets[i].name}: avatar" style="width: 10%; height: 10%; border: solid 1px #777777;"> ${tweets[i].name}: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i><hr>`;
    }
    i++;
  }
  outputHtml += `</div>`;
  answer.innerHTML = outputHtml;
}

function showJiro() {
  outputHtml = `<div>`;
  let i = 0;
  while (i < tweets.length) {
    if (tweets[i].name === "次郎") {
      outputHtml += `<div><img src="${tweets[i].avatar}" alt="${tweets[i].name}: avatar" style="width: 10%; height: 10%; border: solid 1px #777777;"> ${tweets[i].name}: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i><hr>`;
    }
    i++;
  }
  outputHtml += `</div>`;
  answer.innerHTML = outputHtml;
}

function showTaro() {
  outputHtml = `<div>`;
  let i = 0;
  while (i < tweets.length) {
    if (tweets[i].name === "太郎") {
      outputHtml += `<div><img src="${tweets[i].avatar}" alt="${tweets[i].name}: avatar" style="width: 10%; height: 10%; border: solid 1px #777777;"> ${tweets[i].name}: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i><hr>`;
    }
    i++;
  }
  outputHtml += `</div>`;
  answer.innerHTML = outputHtml;
}

// 初期表示
showAll();