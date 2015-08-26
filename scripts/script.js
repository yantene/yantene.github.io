function changeBgColor() {
  // 現在時刻の取得
  var now = new Date();
  var hours = now.getHours();
  var mins  = now.getMinutes();
  var secs  = now.getSeconds();
  var secsOfTheDay = (hours * 60 + mins) * 60 + secs;

  // 色相，彩度，輝度の決定
  var h = (secsOfTheDay % (60 * 60)) / (60 * 60); // 1時間周期で色相を変化
  var s = 0.3; // 彩度は決め打ち
  var lightnessOfTheSky = 1.0 - Math.abs(secsOfTheDay / (12 * 60 * 60) - 1.0);
  var geta = 0.3;
  var l = lightnessOfTheSky * (1 - geta) + geta; // 輝度は空の明るさ応じて変化

  // 背景へ色を適用
  var color = 'hsl(' + Math.round(h * 360) + ','
                     + Math.round(s * 100) + '%,'
                     + Math.round(l * 100) + '%)';
  var body = document.getElementsByTagName('body')[0];
  body.style.backgroundColor = color;
};

function setMenuTitleStyle() {
  var menuTitleAry = document.getElementsByClassName('menu_title');
  for (var idx = 0; idx < menuTitleAry.length; ++idx) {
    var menuTitle = menuTitleAry[idx];
    var origTitle = '# ' + menuTitle.innerHTML.replace(/[\s\r\n]+/g, '');
    var styledTitle = '';

    var h = 0.1;
    var s = 0.5;
    var l = 0.75;

    for (var i = 0; i < origTitle.length; ++i) {
      styledTitle +=
        '<span style=\'color: hsl(' + Math.round(h * 360) + ','
                                    + Math.round(s * 100) + '%,'
                                    + Math.round(l * 100) + '%)\;\'>'
        + origTitle[i]
        + '</span>';
      h += 0.03;
    }

    menuTitle.innerHTML = styledTitle;
  }
}

function setCopyright() {
  var footer = document.getElementsByTagName('footer')[0];
  var year = new Date().getYear() + 1900;
  footer.textContent = footer.textContent.replace("\xA9", "\xA9 2010 - " + year);
};

window.onload = function() {
  // 背景色を設定
  changeBgColor();
  // 10 秒ごとに色を変化させる
  setInterval(changeBgColor, 10000);

  // メニュータイトルへのスタイル指定
  setMenuTitleStyle();

  // フッタにコピーライトを設定
  setCopyright();
};
