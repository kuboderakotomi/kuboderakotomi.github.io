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
  { name: "カレー", price: "350円", where: "厚生棟4階", tags: ["curry"], png: "https://github-production-user-asset-6210df.s3.amazonaws.com/104044292/295228900-6b3b54dd-d7f8-4fea-adfd-6877fc88e0ea.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240109T140328Z&X-Amz-Expires=300&X-Amz-Signature=1247eb2f498e088bb0d49d590c65e0b9df05c3f9f8ca1a386fb563cfa8a88c67&X-Amz-SignedHeaders=host&actor_id=104044292&key_id=0&repo_id=483590471"},
  { name: "カツカレー", price: "350円", where: "厚生棟3階", tags: ["curry"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/katu-curry.jpeg" },
  { name: "ざるそば", price: "300円", where: "厚生棟4階", tags: ["udon"], png: "path/to/curry.png" },
  { name: "ナポリタン", price: "350円", where: "厚生棟3階", tags: ["pasta"], png: "path/to/curry.png" },
  { name: "ジェノベーゼ", price: "350円", where: "厚生棟3階", tags: ["pasta"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "ローズラーメン", price: "350円", where: "厚生棟3階", tags: ["ramen"], png: "path/to/curry.png" },
  { name: "からあげ定食", price: "350円", where: "厚生棟3階", tags: ["teisyoku"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/karaage-teisyoku.jpeg" },
  { name: "チキンカツ定食", price: "350円", where: "厚生棟3階", tags: ["higawari"], png: "path/to/curry.png" },
  { name: "ボロネーゼ", price: "400円", where: "厚生棟3階", tags: ["pasta"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/assets/104044292/a449a417-c330-4a36-b53b-df74183e367c" }

  // ... 他のメニューも同様にタグを追加
];


let answer = document.querySelector('#answer');

function showMenuByTag(tag = '') {
  let filteredMenu;

  if (tag === '') {
    filteredMenu = menu; // タグが指定されていない場合、すべてのメニューを表示
  } else {
    filteredMenu = menu.filter(item => item.tags.includes(tag));
  }

  let outputHtml = '';
  filteredMenu.forEach(item => {
    outputHtml += `
      <div class="menu-card">
        <img src="${item.imgSrc}" alt="${item.name}">
        <h4>${item.name}:</h4>
        <p>${item.price} - ${item.where}</p>
      </div>
    `;
  });
  document.getElementById('answer').innerHTML = outputHtml;
}

// ボタンのクリックイベント
document.getElementById('allMenuButton').addEventListener('click', function() {
  showMenuByTag('');
});
document.getElementById('curryButton').addEventListener('click', function() {
  showMenuByTag('curry');
});

document.getElementById('pastaButton').addEventListener('click', function() {
  showMenuByTag('pasta');
});

document.getElementById('udonButton').addEventListener('click', function() {
  showMenuByTag('udon');
});

document.getElementById('ramenButton').addEventListener('click', function() {
  showMenuByTag('ramen');
});

document.getElementById('teisyokuButton').addEventListener('click', function() {
  showMenuByTag('teisyoku');
});

document.getElementById('higawariButton').addEventListener('click', function() {
  showMenuByTag('higawari');
});

// 初期表示
window.onload = function() {
  showMenuByTag(); // 初期表示ではすべてのメニューを表示
};