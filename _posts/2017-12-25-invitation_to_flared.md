---
layout: post
title: Fla.red への誘い
tags: [GNU/Linux, 備忘録, Web, プログラミング]
---

この記事は
[TUT Advent Calendar 2017](https://adventar.org/calendars/2335)
の25日目の記事です。

こんにちは、やんてねです。

このブログに記事を書くのも、
[昨年の TUT Advent Calendar の記事](https://yantene.net/use_tutvpn_wisely.html)
以来1年ぶりということで、
ここ1年間の自分の多忙さ（あるいは怠惰さ）がよくわかるなあと思います。
技科大に学部1年に入学してから6年、もう修士2年で最後の年なのですが、
この1年は他の5年間に比べてとても濃い時間でした。

<!-- more -->

語りたいことはたくさんあります。
今年は、就活がありましたし、
Mastodon インスタンス [Fla.red](https://fla.red) を立てましたし、
修士生活あと半年というところであろうことか研究室変更をしましたし、
今年の冬コミで出すコンピュータクラブの部誌に記事も書きました。
就活に関しては
[ころんさんがわかりやすく書かれているので](http://collonville.hateblo.jp/entry/2017/12/17/110000)
二番煎じは避けようと思います。
（自分個人の就活に関しては直接聞いてもらえればお答えします）。
研究室変更に関しては、まあ色々と込み入った事情もあり、
ここで語るべきことではないと思うのでこちらも避けたいと思います。
部誌に関しては、
[きのうアカハナさんが書かれた通り](https://twitter.com/TUT_CClub/status/945091868781506560)
なので、こちらに関しても二番煎じかなと
（記事の見どころなんかを書いても良かったかも知れませんが）。
ということで、相も変わらず Fla.red のご紹介をばさせてもらおうかなと、そう思っております。

## Fla.red ってなんやねん

もともとは技科大生向けに作った Mastodon インスタンスです。
Mastodon とは何か、分散型ソーシャルネットワークの理念、みたいなところについては、
Mastodon Advent Calendar の記事を読まれると良いと思います。

- [Mastodon Advent Calendar 2017 (Adventar)](https://adventar.org/calendars/2178)
- [Mastodon 2 Advent Calendar 2017 (Adventar)](https://adventar.org/calendars/2265)
- [Mastodon Advent Calendar 2017 (Qiita)](https://qiita.com/advent-calendar/2017/mastodon)

今では技科大生以外にも開かれたインスタンスになっており、
ありがたいことに最近では技科大生以外のユーザもローカルTLで見かけるようになりましたが、
[Fla.red](https://fla.red)のページを見るとわかる通り各所各所に技科大ネタを詰め込んでいます。

## Fla.red の特徴

技科大ネタを満載していることはわかった、
じゃあ Fla.red って他のインスタンスとどこが違うの、
という話になりますが、4つの特徴があります。

### コードスニペット

1つ目はコードスニペットを投稿できることです。
Markdown 風に、バッククオート3つの行で括るとコードスニペットになります。
開始行のバッククオートに続いて言語名を指定することもできます。
例えば、以下のように投稿すると
````
ライプニッツの公式で円周率を求める。

```ruby
puts Array.new(1_000_000) { |n|
  4.0 / (1 + 4 * n) - 4.0 / (3 + 4 * n)
}.inject(:+)
```

3.141592153589902
````
このように表示されます。
<img src='/images/2017-12-25-invitation_to_flared/codesnippet.png'>

このようにハイライトされるのは Fla.red から見たときだけで、
他のインスタンスから同トゥートを見ても残念ながらコードスニペットは表示されませんが、
Markdown でも採用されている記法なのでそのまま見ても読みやすいものと思います。

### 数式

数式を含むトゥートを投稿することができます。
KaTeX を使っているため、描画が高速です。

インラインで使いたい際には`$`でくくります。
ディスプレイモードで使いたい際には`\[`と`\]`の行でくくります。

例えば、以下のように投稿すると
````
ライプニッツの公式は、以下のとおり。

\[
\pi = 4\sum^{\infty}_{n=0}\frac{(-1)^n}{2n + 1}
\]

$\pi$が求まるよ！
````
このように表示されます。
<img src='/images/2017-12-25-invitation_to_flared/equation.png'>

こちらも Fla.red から見たときだけレンダされます。
他のインスタンスから見たときは、、、
うーん、さすがに TeX の数式を目でパージングするのは難しそうです。

### 豊富なカスタム絵文字

#### すし

おいしそうなさまざまな寿司ネタのすしの絵文字が揃っています。
すし絵文字は GitHub にて CC-BY で[公開しています](https://github.com/yantene/sushiemoji)。

<img class='emoji' alt=":bintoro:" title="びんとろ" src="//media.fla.red/mstdn/custom_emojis/images/000/001/064/original/bintoro.png">
<img class='emoji' alt=":ebi:" title="えび" src="//media.fla.red/mstdn/custom_emojis/images/000/001/069/original/ebi.png">
<img class='emoji' alt=":ebiten:" title="えび天" src="//media.fla.red/mstdn/custom_emojis/images/000/001/070/original/ebiten.png">
<img class='emoji' alt=":hamachi:" title="はまち" src="//media.fla.red/mstdn/custom_emojis/images/000/001/052/original/hamachi.png">
<img class='emoji' alt=":ika:" title="いか" src="//media.fla.red/mstdn/custom_emojis/images/000/001/054/original/ika.png">
<img class='emoji' alt=":ikra:" title="いくら" src="//media.fla.red/mstdn/custom_emojis/images/000/001/055/original/ikra.png">
<img class='emoji' alt=":maguro:" title="まぐろ" src="//media.fla.red/mstdn/custom_emojis/images/000/001/056/original/maguro.png">
<img class='emoji' alt=":negitoro:" title="ねぎとろ" src="//media.fla.red/mstdn/custom_emojis/images/000/001/072/original/negitoro.png">
<img class='emoji' alt=":salmon:" title="サーモン" src="//media.fla.red/mstdn/custom_emojis/images/000/001/058/original/salmon.png">
<img class='emoji' alt=":tai:" title="たい" src="//media.fla.red/mstdn/custom_emojis/images/000/001/071/original/tai.png">
<img class='emoji' alt=":tamago:" title="たまご" src="//media.fla.red/mstdn/custom_emojis/images/000/001/059/original/tamago.png">
<img class='emoji' alt=":uni:" title="うに" src="//media.fla.red/mstdn/custom_emojis/images/000/001/073/original/uni.png">
<img class='emoji' alt=":zukema:" title="漬けまぐろ" src="//media.fla.red/mstdn/custom_emojis/images/000/001/061/original/zukemaguro.png">

加えて、まぐろにはアニメーションによる「流れるすし」の絵文字が用意されています。
秩序だって並べれば回転寿司をトゥート中に再現することだって可能です。
くわしくは、ぜひ Fla.red にアカウント登録して試してみてください！

#### ベン図

さまざまなパターンのベン図が揃っています。
自然言語だと、たとえば
「えんぴつまたはシャープペンシルを持ってきてください」と言われたときは
<img class='emoji' alt=":or:" title="or" src="//media.fla.red/mstdn/custom_emojis/images/000/000/038/original/or.png">
の意味になりますが、
「ケーキまたはプリンを買ってきてください」と言われたときは
<img class='emoji' alt=":xor:" title="xor" src="//media.fla.red/mstdn/custom_emojis/images/000/000/039/original/xor.png">
の意味になり、文脈によって指すパターンはバラバラです。
文脈から推測できればよいのですが、現実には判断が難しいことも少なくありません。

ベン図の絵文字があれば、先ほどのような「または」の曖昧性除去に役立つことはもちろんですが、
ほかにも「雨が降っている
<img class='emoji' alt=":conditional:" title="conditional" src="//media.fla.red/mstdn/custom_emojis/images/000/000/044/original/conditional.png">
傘を持っている ならそろそろここを出ましょうか。」
のような、自然言語ではなかなか表せないようなパターンも自由自在に表現できます。

<img class='emoji' alt=":abjunction:" title="abjunction" src="//media.fla.red/mstdn/custom_emojis/images/000/000/041/original/abjunction.png">
<img class='emoji' alt=":and:" title="and" src="//media.fla.red/mstdn/custom_emojis/images/000/000/033/original/and.png">
<img class='emoji' alt=":conditional:" title="conditional" src="//media.fla.red/mstdn/custom_emojis/images/000/000/044/original/conditional.png">
<img class='emoji' alt=":contradiction:" title="contradiction" src="//media.fla.red/mstdn/custom_emojis/images/000/000/042/original/contradiction.png">
<img class='emoji' alt=":eq:" title="eq" src="//media.fla.red/mstdn/custom_emojis/images/000/000/040/original/eq.png">
<img class='emoji' alt=":nand:" title="nand" src="//media.fla.red/mstdn/custom_emojis/images/000/000/034/original/nand.png">
<img class='emoji' alt=":nor:" title="nor" src="//media.fla.red/mstdn/custom_emojis/images/000/000/035/original/nor.png">
<img class='emoji' alt=":not:" title="not" src="//media.fla.red/mstdn/custom_emojis/images/000/000/037/original/not.png">
<img class='emoji' alt=":or:" title="or" src="//media.fla.red/mstdn/custom_emojis/images/000/000/038/original/or.png">
<img class='emoji' alt=":proposition:" title="proposition" src="//media.fla.red/mstdn/custom_emojis/images/000/000/054/original/proposition.png">
<img class='emoji' alt=":tautology:" title="tautology" src="//media.fla.red/mstdn/custom_emojis/images/000/000/043/original/tautology.png">
<img class='emoji' alt=":xor:" title="xor" src="//media.fla.red/mstdn/custom_emojis/images/000/000/039/original/xor.png">

#### その他

他にも、統計屋さんが大好き各種分布の絵文字
<img class='emoji' alt=":norm_dist:" title="正規分布" src="//media.fla.red/mstdn/custom_emojis/images/000/000/027/original/norm_dist.png">
<img class='emoji' alt=":powlaw_dist:" title="冪分布" src="//media.fla.red/mstdn/custom_emojis/images/000/000/028/original/powlaw_dist.png">
<img class='emoji' alt=":t_dist:" title="T分布" src="//media.fla.red/mstdn/custom_emojis/images/000/000/029/original/t_dist.png">
<img class='emoji' alt=":uniform_dist:" title="一様分布" src="//media.fla.red/mstdn/custom_emojis/images/000/000/030/original/uniform_dist.png">
や、町中で見かける道路標識の絵文字
<img class='emoji' alt=":jrs_207_a:" title="jrs_207_a" src="//media.fla.red/mstdn/custom_emojis/images/000/000/930/original/jrs_207_a.png">
<img class='emoji' alt=":jrs_214_2_d:" title="jrs_214_2_d" src="//media.fla.red/mstdn/custom_emojis/images/000/000/944/original/jrs_214_2_d.png">
<img class='emoji' alt=":jrs_301:" title="jrs_301" src="//media.fla.red/mstdn/custom_emojis/images/000/000/946/original/jrs_301.png">
<img class='emoji' alt=":jrs_407_b:" title="jrs_407_b" src="//media.fla.red/mstdn/custom_emojis/images/000/000/967/original/jrs_407_b.png">
<img class='emoji' alt=":jrs_316:" title="jrs_316" src="//media.fla.red/mstdn/custom_emojis/images/000/000/954/original/jrs_316.png">
<img class='emoji' alt=":jrs_319:" title="jrs_319" src="//media.fla.red/mstdn/custom_emojis/images/000/000/955/original/jrs_319.png">
<img class='emoji' alt=":jrs_325:" title="jrs_325" src="//media.fla.red/mstdn/custom_emojis/images/000/000/956/original/jrs_325.png">
<img class='emoji' alt=":jrs_325_2:" title="jrs_325_2" src="//media.fla.red/mstdn/custom_emojis/images/000/000/957/original/jrs_325_2.png">
、ウンチがあるのに尿がないのは何事かという勢いにまかせて作った検尿容器絵文字
<img class='emoji' alt=":pee:" title="検尿容器" src="//media.fla.red/mstdn/custom_emojis/images/000/000/441/original/pee.png">
などなど、さまざまな<s>使うかどうかを差し置いた思いつきの</s>絵文字を多数そろえています。

### 最新リリースに追従

独自機能を持ったインスタンスはなかなか最新リリースに追従することが難しく、
古いバージョンにとどまっているところも多いのですが、
このインスタンスは極力迅速に最新リリースに追従しています。

もちろん私の時間がとれるかどうかにもよるのですが、
今後も、拡張機能とのコンフリクトが起こらない限りはリリースの当日中にはアップグレードをしたいなと思っています。

## コントリビュート

Fla.red のソースコードは
[ここ](https://github.com/yantene/mastodon)
で公開しています。

バグ報告や新機能の要望は[Issue](https://github.com/yantene/mastodon/issues)にお願いします。
もちろん[Pull Request](https://github.com/yantene/mastodon/pulls)も大歓迎です。

## ちょっとだけ鯖缶の苦労話を

サーバにはリトアニアの格安 VPS である
Time4VPS（リンク: [アフィリエイトあり](https://billing.time4vps.eu/?affid=2509)|[なし](https://time4vps.eu/)）
の Standard VPS S Plan を使っています。
さすがにリトアニアと日本では距離があるため、
メディアサーバからの動画の再生などでラグを感じる部分はあるのですが、
それ以外には大きな不便は感じていません。

苦労と言えば、Time4VPS の Standard VPS は OpenVZ サーバであることがあります。
カーネルバージョンが 2.6.32 で固定されているため、
Docker を使って気軽にドカーッと Mastodon を立てることができませんでした
（少し値段は上がりますが、Standard VPS ではなく KVM Linux VPS を選べば Docker を使うこともできます）。
とはいえ、Docker を使わずとも公式の
[Mastodon Production Guide](https://github.com/tootsuite/documentation/blob/master/Running-Mastodon/Production-guide.md)
通りに作業をすれば簡単に立ち上げられるので大した苦労ではありません。
強いて言えば、アップグレードが少し大変ですが…。

## インスタンスをたてよう

2年契約をすれば、月あたり2.99ユーロで Mastodon インスタンスを立てられます。
支払い方法も、クレジットカードのほか、PayPal、Bitcoinなどいろいろサポートしています。
ちょっと勇気をだして、ちょっと手間をかけて、インスタンスを立ててみましょう！
ここまでこのダラダラと書かれた記事を読まれたあなたなら、きっとできます。
あなたの勇気が、真の分散型ソーシャルネットワークの夢への大きな一歩になります。

## おわりに

25日になってから、バタバタと書き始めたこの記事ですが、
とりあえずクリスマス中に書き終えることができました。
今年の TUT Advent Calendar の締めくくりがこんなグダグダした記事になってしまい、
ホント申し訳ありませんでした…。

思い返せば、学部3年のときに
[TUT Advent Calendar 2014](https://adventar.org/calendars/639)
を気まぐれで立ててから、もう4年目です。
自分が卒業したらどうなるのかなあ、
続いていくのかなあと心配に思っていましたが、
今回は[813さん](https://twitter.com/@81a3)が Advent Calendar を立ててくださりとても嬉しかったです（ありがとうございます！）。
来年以降も続いていって、あわよくば自分も卒業生として参加できたら嬉しいなあと、そう思っています。

**TODO: 近いうちに乱文を直す**
