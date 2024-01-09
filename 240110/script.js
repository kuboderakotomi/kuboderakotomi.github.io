var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


//menu
let menu = [

  {name: "カレー", price: "350円", where: "厚生棟4階", png:"img/curry.jpg"},
  {name: "カツカレー", price: "350円", where: "厚生棟3階", png: "https://morimorihoge.github.io/teu2019f/images/omocha_robot.png"},
  {name:"ざるそば",price:"300円", where:"厚生棟4階", png:"https://photos.app.goo.gl/MpdS5iv8xWv4WhQg7"},
  {name: "ナポリタン", price: "350円", where: "厚生棟3階", png: "https://morimorihoge.github.io/teu2019f/images/omocha_robot.png"},
  {name:"ボロネーゼ",price:"400円", where:"厚生棟3階", png:"https://drive.google.com/file/d/19f1HMImL_VIIUM4eyJdJsRCSKiR1Kjso/view"}

]

let answer = document.querySelector('#answer');

function showMenu(category) {
  let filteredMenu;

  if (category === '全メニュー') {
    filteredMenu = menu;
  } else {
    filteredMenu = menu.filter(item => item.name === category);
  }

  let outputHtml = '';

  filteredMenu.forEach(item => {
    outputHtml += `
      <div class="menu-card">
        <img src="${item.png}" alt="${item.name}: avatar">
        <h4>${item.name}</h4>
        <p>${item.price} - ${item.where}</p>
      </div>
    `;
  });

  answer.innerHTML = outputHtml;
}

// 初期表示
window.onload = function () {
  showMenu('全メニュー');
};
