const menuBtn = document.querySelector('.js-menu-btn');    // メニューボタン
const closeBtn = document.querySelector('.js-close-btn');  // 閉じるボタン
const menuNav = document.querySelector('.js-menu-nav');    // メニュー本体

// --- 関数を定義 ---
// メニューを開く関数
const openMenu = () => {
  menuNav.classList.add('is-open');
};

// メニューを閉じる関数
const closeMenu = () => {
  menuNav.classList.remove('is-open');
};


// --- イベントリスナーを設定 ---
// 1. メニューボタンをクリックしたら、メニューを開く
menuBtn.addEventListener('click', openMenu);

// 2. 閉じるボタンをクリックしたら、メニューを閉じる
closeBtn.addEventListener('click', closeMenu);

// 3. メニューの項目や背景をクリックしたら、メニューを閉じる
/*menuNav.addEventListener('click', (event) => {
  // クリックされたのがリンク(A)か、メニューの背景(NAV)自身の場合のみ閉じる
  if (event.target.tagName === 'A' || event.target.tagName === 'NAV') {
    closeMenu();
  }
});

// 4. Escapeキーが押されたら、メニューを閉じる
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
  }
})*/