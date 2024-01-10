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
  { name: "カレーライス", price: "350円", where: "厚生棟3階", tags: ["curry"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/katu-curry.jpeg" },
  { name: "カレーライス大盛り", price: "430円", where: "厚生棟3階", tags: ["curry"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/katu-curry.jpeg" },
  { name: "カツカレー", price: "500円", where: "厚生棟3階", tags: ["curry"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/katu-curry.jpeg" },
  { name: "カツカレー大盛り", price: "580円", where: "厚生棟3階", tags: ["curry"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/katu-curry.jpeg" },
  { name: "焼肉＆カレー", price: "500円", where: "厚生棟3階", tags: ["curry"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/katu-curry.jpeg" },
  { name: "焼肉＆カレー大盛り", price: "580円", where: "厚生棟3階", tags: ["curry"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/katu-curry.jpeg" },
  { name: "日替わりランチプレート", price: "550円", where: "厚生棟3階", tags: ["curry"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/katu-curry.jpeg" },

  { name: "パンケーキ", price: "250円", where: "厚生棟3階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/katu-curry.jpeg" },
  { name: "チョコレートパンケーキ", price: "350円", where: "厚生棟3階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/katu-curry.jpeg" },
  { name: "ストロベリーパンケーキ", price: "350円", where: "厚生棟3階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/katu-curry.jpeg" },
  { name: "キャラメルパンケーキ", price: "350円", where: "厚生棟3階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/katu-curry.jpeg" },

  { name: "八王子ナポリタン", price: "400円", where: "厚生棟3階", tags: ["pasta"], png: "path/to/curry.png" },
  { name: "八王子ナポリタン大盛り", price: "500円", where: "厚生棟3階", tags: ["pasta"], png: "path/to/curry.png" },
  { name: "ボロネーゼ", price: "450円", where: "厚生棟3階", tags: ["pasta"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/assets/104044292/a449a417-c330-4a36-b53b-df74183e367c" },
  { name: "ボロネーゼ大盛り", price: "550円", where: "厚生棟3階", tags: ["pasta"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/assets/104044292/a449a417-c330-4a36-b53b-df74183e367c" },
  { name: "ストロガノフ", price: "400円", where: "厚生棟3階", tags: ["pasta"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "ストロガノフ大盛り", price: "500円", where: "厚生棟3階", tags: ["pasta"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
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
  { name: "唐揚げ定食", price: "480円", where: "厚生棟4階", tags: ["teisyoku"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "親子丼", price: "450円", where: "厚生棟4階", tags: ["teisyoku"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "オムライス", price: "480円", where: "厚生棟4階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "ガパオライス", price: "450円", where: "厚生棟4階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },
  { name: "ソースカツ丼", price: "380円", where: "厚生棟4階", tags: ["sonota"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/jenobe-ze.jpeg" },

  { name: "カレーライス", price: "350円", where: "厚生棟4階", tags: ["curry"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/katu-curry.jpeg" },
  { name: "カツカレーライス", price: "500円", where: "厚生棟4階", tags: ["curry"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/katu-curry.jpeg" },
  { name: "ジャンボチキンカツカレー", price: "580円", where: "厚生棟4階", tags: ["curry"], png: "https://github.com/kuboderakotomi/kuboderakotomi.github.io/blob/1213eb4e44a1225dd96415d8068f6021f7b70924/240110/img/katu-curry.jpeg" },

  { name: "日替わり中華麺", price: "400円", where: "厚生棟4階", tags: ["ramen"], png: "path/to/curry.png" },
  { name: "ローズラーメン", price: "330円", where: "厚生棟4階", tags: ["ramen"], png: "path/to/curry.png" },
  { name: "ローズラーメンセット", price: "440円", where: "厚生棟4階", tags: ["ramen"], png: "path/to/curry.png" },
  { name: "とんこつラーメン", price: "400円", where: "厚生棟4階", tags: ["ramen"], png: "path/to/curry.png" },
  { name: "ざるラーメン醤油", price: "300円", where: "厚生棟4階", tags: ["ramen"], png: "path/to/curry.png" },
  { name: "ざるラーメンごま", price: "300円", where: "厚生棟4階", tags: ["ramen"], png: "path/to/curry.png" },
  { name: "ラーメン", price: "270円", where: "厚生棟4階", tags: ["ramen"], png: "path/to/curry.png" },


  { name: "かけうどん", price: "270円", where: "厚生棟4階", tags: ["udon"], png: "path/to/curry.png" },
  { name: "かけそば", price: "270円", where: "厚生棟4階", tags: ["udon"], png: "path/to/curry.png" },
  { name: "日替わりうどん", price: "400円", where: "厚生棟4階", tags: ["udon"], png: "path/to/curry.png" },
  { name: "日替わりそば", price: "400円", where: "厚生棟4階", tags: ["udon"], png: "path/to/curry.png" },
  { name: "ローズうどん", price: "330円", where: "厚生棟4階", tags: ["udon"], png: "path/to/curry.png" },
  { name: "ローズそば", price: "330円", where: "厚生棟4階", tags: ["udon"], png: "path/to/curry.png" },
  { name: "ざるうどん", price: "280円", where: "厚生棟4階", tags: ["udon"], png: "path/to/curry.png" },
  { name: "ざるそば", price: "280円", where: "厚生棟4階", tags: ["udon"], png: "path/to/curry.png" },

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

document.getElementById('higawariButton').addEventListener('click', function() {
  showMenuByTag('higawari');
});

document.getElementById('sonotaButton').addEventListener('click', function() {
  showMenuByTag('sonota');
});

// 初期表示
window.onload = function() {
  showMenuByTag(); // 初期表示ではすべてのメニューを表示
};