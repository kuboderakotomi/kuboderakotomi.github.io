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
  { name: "カレーライス", price: "350円", where: "厚生棟3階", tags: ["curry"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/assets/104044292/f808dc1e-ebba-4250-9638-da68196cb2e5" },
  { name: "カレーライス大盛り", price: "430円", where: "厚生棟3階", tags: ["curry"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/assets/104044292/f808dc1e-ebba-4250-9638-da68196cb2e5" },
  { name: "カツカレー", price: "500円", where: "厚生棟3階", tags: ["curry"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/assets/104044292/79a40461-43d0-4b73-96bd-6f64ba49adf4" },
  { name: "カツカレー大盛り", price: "580円", where: "厚生棟3階", tags: ["curry"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/assets/104044292/79a40461-43d0-4b73-96bd-6f64ba49adf4" },
  { name: "焼肉＆カレー", price: "500円", where: "厚生棟3階", tags: ["curry"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/katu-curry.jpeg" },
  { name: "焼肉＆カレー大盛り", price: "580円", where: "厚生棟3階", tags: ["curry"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/katu-curry.jpeg" },
  { name: "日替わりランチプレート", price: "550円", where: "厚生棟3階", tags: ["curry"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/katu-curry.jpeg" },

  { name: "パンケーキ", price: "250円", where: "厚生棟3階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/katu-curry.jpeg" },
  { name: "チョコレートパンケーキ", price: "350円", where: "厚生棟3階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/katu-curry.jpeg" },
  { name: "ストロベリーパンケーキ", price: "350円", where: "厚生棟3階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/katu-curry.jpeg" },
  { name: "キャラメルパンケーキ", price: "350円", where: "厚生棟3階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/katu-curry.jpeg" },

  { name: "八王子ナポリタン", price: "400円", where: "厚生棟3階", tags: ["pasta"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/assets/104044292/16c35b34-f0d5-4ee6-8b90-b3678d0ca4f4" },
  { name: "八王子ナポリタン大盛り", price: "500円", where: "厚生棟3階", tags: ["pasta"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/assets/104044292/16c35b34-f0d5-4ee6-8b90-b3678d0ca4f4" },
  { name: "ボロネーゼ", price: "450円", where: "厚生棟3階", tags: ["pasta"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/assets/104044292/a449a417-c330-4a36-b53b-df74183e367c" },
  { name: "ボロネーゼ大盛り", price: "550円", where: "厚生棟3階", tags: ["pasta"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/assets/104044292/a449a417-c330-4a36-b53b-df74183e367c" },
  { name: "ストロガノフ", price: "400円", where: "厚生棟3階", tags: ["pasta"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/assets/104044292/e22cf0a9-f9ae-4253-abbe-dae4915815c2" },
  { name: "ストロガノフ大盛り", price: "500円", where: "厚生棟3階", tags: ["pasta"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/assets/104044292/e22cf0a9-f9ae-4253-abbe-dae4915815c2" },
  { name: "フランクスパ", price: "450円", where: "厚生棟3階", tags: ["pasta"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "フランクスパ大盛り", price: "550円", where: "厚生棟3階", tags: ["pasta"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "日替わりパスタプレート", price: "530円", where: "厚生棟3階", tags: ["pasta"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "日替わりパスタプレート大盛り", price: "630円", where: "厚生棟3階", tags: ["pasta"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },

  { name: "日替わりスープ", price: "100円", where: "厚生棟3階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "ポテトフライ", price: "200円", where: "厚生棟3階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "サラダ", price: "200円", where: "厚生棟3階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },

  { name: "肉ランチ", price: "700円", where: "厚生棟3階", tags: ["teisyoku"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "魚ランチ", price: "700円", where: "厚生棟3階", tags: ["teisyoku"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "どんぶりランチ", price: "600円", where: "厚生棟3階", tags: ["teisyoku"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "肉野菜炒め", price: "500円", where: "厚生棟3階", tags: ["teisyoku"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "カツ丼", price: "500円", where: "厚生棟3階", tags: ["teisyoku"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "工科丼", price: "500円", where: "厚生棟3階", tags: ["teisyoku"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },

  { name: "日替わりランチ", price: "480円", where: "厚生棟4階", tags: ["teisyoku"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "唐揚げ定食", price: "480円", where: "厚生棟4階", tags: ["teisyoku"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/assets/104044292/d4975311-fa60-49e0-a861-964b95f19d08" },
  { name: "親子丼", price: "450円", where: "厚生棟4階", tags: ["teisyoku"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "オムライス", price: "480円", where: "厚生棟4階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "ガパオライス", price: "450円", where: "厚生棟4階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "ソースカツ丼", price: "380円", where: "厚生棟4階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },

  { name: "カレーライス", price: "350円", where: "厚生棟4階", tags: ["curry"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/assets/104044292/f808dc1e-ebba-4250-9638-da68196cb2e5" },
  { name: "カツカレーライス", price: "500円", where: "厚生棟4階", tags: ["curry"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/assets/104044292/79a40461-43d0-4b73-96bd-6f64ba49adf4" },
  { name: "ジャンボチキンカツカレー", price: "580円", where: "厚生棟4階", tags: ["curry"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/katu-curry.jpeg" },

  { name: "日替わり中華麺", price: "400円", where: "厚生棟4階", tags: ["ramen"], png: "path/to/curry.png" },
  { name: "ローズラーメン", price: "330円", where: "厚生棟4階", tags: ["ramen"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/assets/104044292/cfd0d797-fff0-487e-a407-39693c274e6e" },
  { name: "ローズラーメンセット", price: "440円", where: "厚生棟4階", tags: ["ramen"], png: "path/to/curry.png" },
  { name: "とんこつラーメン", price: "400円", where: "厚生棟4階", tags: ["ramen"], png: "path/to/curry.png" },
  { name: "ざるラーメン醤油", price: "300円", where: "厚生棟4階", tags: ["ramen"], png: "path/to/curry.png" },
  { name: "ざるラーメンごま", price: "300円", where: "厚生棟4階", tags: ["ramen"], png: "path/to/curry.png" },
  { name: "ラーメン", price: "270円", where: "厚生棟4階", tags: ["ramen"], png: "path/to/curry.png" },


  { name: "かけうどん", price: "270円", where: "厚生棟4階", tags: ["udon"], png: "path/to/curry.png" },
  { name: "かけそば", price: "270円", where: "厚生棟4階", tags: ["udon"], png: "path/to/curry.png" },
  { name: "日替わりうどん", price: "400円", where: "厚生棟4階", tags: ["udon"], png: "path/to/curry.png" },
  { name: "日替わりそば", price: "400円", where: "厚生棟4階", tags: ["udon"], png: "path/to/curry.png" },
  { name: "ローズうどん", price: "330円", where: "厚生棟4階", tags: ["udon"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/assets/104044292/f02098f8-08c4-4b8f-a931-ecf47ac4879f" },
  { name: "ローズそば", price: "330円", where: "厚生棟4階", tags: ["udon"], png: "path/to/curry.png" },
  { name: "ざるうどん", price: "280円", where: "厚生棟4階", tags: ["udon"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/assets/104044292/40c11667-de6b-4ae9-8e1a-23b648cf2227" },
  { name: "ざるそば", price: "280円", where: "厚生棟4階", tags: ["udon"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/assets/104044292/82c61022-524e-464d-9d28-ce0588323ba6" },

  { name: "唐揚げ1個", price: "60円", where: "厚生棟4階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "唐揚げ2個", price: "120円", where: "厚生棟4階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "唐揚げ3個", price: "180円", where: "厚生棟4階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "ポテトサラダ", price: "120円", where: "厚生棟4階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "サラダ温泉卵", price: "120円", where: "厚生棟4階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "みそ汁", price: "70円", where: "厚生棟4階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "小ライス", price: "120円", where: "厚生棟4階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "大盛り（ご飯・麺）", price: "120円", where: "厚生棟4階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" }

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
        <img src="${item.png}" alt="${item.name}">
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

document.getElementById('sonotaButton').addEventListener('click', function() {
  showMenuByTag('sonota');
});




// 初期表示
window.onload = function() {
  showMenuByTag(''); // 初期表示ではすべてのメニューを表示
};