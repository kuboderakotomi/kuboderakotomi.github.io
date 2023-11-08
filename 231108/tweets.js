let answer = document.querySelector('#answer');
let outputHtml = `<ul>`;

//while版
let i = 0;
while(i < tweets.length){
  outputHtml += `<li><b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
  i++;
}

// outputHtmlを更新する処理を書く
// for版
for(let i = 0;i < tweets.length;i++){
  outputHtml += `<li>${tweets[i]}</li>`;
}

//Array#forEach版
let twArray = function(tweet){
  outputHtml += `<li><b>${tweet.name}</b>: ${tweet.message} <i>${tweet.tweetedAt}</i></li>`;
  console.log(tweet);
};
tweets.forEach(twArray);

//Array.forEach()の匿名関数使用バージョン
tweets.forEach(function(tweet){
  outputHtml += `<li><b>${tweet.name}</b>: ${tweet.message} <i>${tweet.tweetedAt}</i></li>`;
});

outputHtml += `</ul>`;
answer.innerHTML = outputHtml;




