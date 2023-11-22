function doFetch(){
  fetch("https://morimorihoge.github.io/teu2023f/tweets.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        let answerHtml = "<ul>";
        json.forEach(function(tweet){
          answerHtml += `<li>${tweet.name}</li>`;
        });
        answerHtml += "</ul>";
        document.querySelector('#answer').innerHTML = answerHtml;
      });
}
//アロー関数
let doFetch = () => {
  fetch("https://morimorihoge.github.io/teu2023f/tweets.json")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        let answerHtml = "<ul>";
        json.forEach((tweet) => {
          answerHtml += `<li>${tweet.name}</li>`;
        });
        answerHtml += "</ul>";
        document.querySelector('#answer').innerHTML = answerHtml;
      });
}














