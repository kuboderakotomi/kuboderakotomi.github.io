let answer = document.querySelector('#answer');
let outputHtml = `<ul>`;

//while版
let i = 0;
while(i < fruitNames.length){
  outputHtml += `<li>${fruitNames[i]}</li>`;
  i++;
}

// outputHtmlを更新する処理を書く
// for版
//for(let i = 0;i < fruitNames.length;i++){
//  outputHtml += `<li>${fruitNames[i]}</li>`;
//}

outputHtml += `</ul>`;
answer.innerHTML = outputHtml;






