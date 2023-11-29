let modal = new bootstrap.Modal('#exampleModal');
modal.show()

function clickSecondButton(){
  document.querySelector(`#exampleModal .modal-body`).innerHTML = "２つめのボタンが押された";
  modal.show()
}
