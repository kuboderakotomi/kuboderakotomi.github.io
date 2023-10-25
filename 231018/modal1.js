console.log("modal.jsを読み込みました");
function showModal(){
  // 1. id="modal"のElementオブジェクトを取得する
  let element = document.querySelector("#modal");

  // 2. Elementオブジェクトのコンテンツの中身を更新する
  element.innerHTML = "ボタンがクリックされたぞ";
}

