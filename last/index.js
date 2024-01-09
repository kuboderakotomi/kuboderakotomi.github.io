let answer = document.querySelector('#answer');
let outputHtml = `<ul>`;

function showMenu() {
  outputHtml = `<div>`;
  let i = 0;
  while (i < menu.length) {
    outputHtml += `<div>　　<img src="${menu[i].png}" alt="${menu[i].name}: avatar" style="width: 7%; height: 7%; border: solid 1px #777777;"> <b>${menu[i].name}:</b> ${menu[i].price} <i>${menu[i].where}</i><hr>`;
    i++;
  }
  outputHtml += `</div>`;
  answer.innerHTML = outputHtml;
}

function showRice() {
  outputHtml = `<div>`;
  let i = 0;
  while (i < menu.length) {
    if (menu[i].name === "カレー") {
      outputHtml += `<div>　　<img src="${menu[i].png}" alt="${menu[i].name}: avatar" style="width: 7%; height: 7%; border: solid 1px #777777;"> <b>${menu[i].name}:</b> ${menu[i].price} <i>${menu[i].where}</i><hr>`;
    }
    if (menu[i].name === "カツカレー") {
      outputHtml += `<div>　　<img src="${menu[i].avatar}" alt="${menu[i].name}: avatar" style="width: 7%; height: 7%; border: solid 1px #777777;"> <b>${menu[i].name}:</b> ${menu[i].price} <i>${menu[i].where}</i><hr>`;
    }
    i++;
  }
  outputHtml += `</div>`;
  answer.innerHTML = outputHtml;
}

function showNoodle() {
  outputHtml = `<div>`;
  let i = 0;
  while (i < tweets.length) {
    if (tweets[i].name === "次郎") {
      outputHtml += `<div>　　<img src="${tweets[i].avatar}" alt="${tweets[i].name}: avatar" style="width: 7%; height: 7%; border: solid 1px #777777;"> <b>${tweets[i].name}:</b> ${tweets[i].message} <i>${tweets[i].tweetedAt}</i><hr>`;
    }
    i++;
  }
  outputHtml += `</div>`;
  answer.innerHTML = outputHtml;
}

function showKitchin() {
  outputHtml = `<div>`;
  let i = 0;
  while (i < tweets.length) {
    if (tweets[i].name === "太郎") {
      outputHtml += `<div>　　<img src="${tweets[i].avatar}" alt="${tweets[i].name}: avatar" style="width: 7%; height: 7%; border: solid 1px #777777;"> <b>${tweets[i].name}:</b> ${tweets[i].message} <i>${tweets[i].tweetedAt}</i><hr>`;
    }
    i++;
  }
  outputHtml += `</div>`;
  answer.innerHTML = outputHtml;
}

// 初期表示
showMenu();