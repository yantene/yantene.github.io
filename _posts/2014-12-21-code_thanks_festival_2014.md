---
layout: post
title: CODE THANKS FESTIVAL 2014 に行ってきた
tags: [日記, 参加記, 競技プログラミング]
---

この記事は
[TUT Advent Calendar 2014](http://www.adventar.org/calendars/639)
の21日目です．

豊橋技術科学大学 B3 3系の[やんてね](http://twitter.com/yantene)です．

正直技科大は全然関係ないです，すみません．

来年もCODE FESTIVALが開催されれば，
技科大生に参加してほしいなという思いだと受けとって下さい．

<!-- more -->

## CODE FESTIVAL とは？

[CODE FESTIVAL](http://recruit-jinji.jp/code_fes2014/)
は，リクルートさんが主催する競技プログラミングのオンサイトなコンテストです．

詳しくは
[コンテスト概要](http://recruit-jinji.jp/code_fes2014/outline.html)
を見て下さい．

コンテストのシステムには，予選，本戦ともに
[AtCoder](http://atcoder.jp/)
を使っているので，
メジャーな言語であればその多くは使うことが出来ます．

## CODE FESTIVAL 予選

予選はオンライン上で予選A(2014-09-20)と
予選B(2014-10-23)の2日程に分かれて行われました．
予選Aの上位120人，予選Bの上位80人の合わせて200人が
東京で行われる本戦へ参加することが出来ます．
自分はその両方に参加しました．

### 予選A

[予選A](http://code-festival-2014-quala.contest.atcoder.jp/)
の問題は
[こちら](http://code-festival-2014-quala.contest.atcoder.jp/assignments)
から見ることが出来ます．
これらの問題を21:00〜22:59の2時間で解きます．
予選Aでは120位以内(本戦参加資格のない人もいるので実際は140位くらいまで？)に入る必要があります．

自分の問題の提出履歴は
[こんな感じ](http://code-festival-2014-quala.contest.atcoder.jp/submissions/all?user_screen_name=yantene)
でした．

#### A，B問題

[A問題](http://code-festival-2014-quala.contest.atcoder.jp/tasks/code_festival_qualA_a)
や
[B問題](http://code-festival-2014-quala.contest.atcoder.jp/tasks/code_festival_qualA_b)
は自分の使っている言語やライブラリの使い方さえ分かれば，一発Accepted(以下AC)できる問題です．
・・・とか書いていて，自分の結果を見てみるとB問題で一回Wrong Answer(以下WA)出してるあたり
ちょっとツラミあります．

私の提出した解答は
[これ(A問題) ](http://code-festival-2014-quala.contest.atcoder.jp/submissions/234871)
と
[これ(B問題) ](http://code-festival-2014-quala.contest.atcoder.jp/submissions/235471)
です．

#### C問題

[C問題](http://code-festival-2014-quala.contest.atcoder.jp/tasks/code_festival_qualA_c)
はよくあるうるう年の問題でした．
うるう年は400年に97回訪れます．
この周期を含む部分は97の倍数として計算し，
それ以外の部分はis_uru?メソッドを作りそれで計算を行いました．
とりあえず一発ACでした．
[C問題の私の解答](http://code-festival-2014-quala.contest.atcoder.jp/submissions/236434)
は絶対に見てはいけません．
ソースコードが公開されることを忘れてクッソきたない変数名をつけています(色んな意味で)．

ここまで30分で終えています．残り90分もある．
あとはD問題を解くだけ．なんだ余裕じゃん，なんて思っていた時期が私にもありました．

この油断が身を滅ぼす結果となりました．

#### D問題

[D問題](http://code-festival-2014-quala.contest.atcoder.jp/tasks/code_festival_qualA_d)
は，数字K種類を使って作ることのできる数のうち，ある整数Aに最も近いものを求める問題です．
一応部分点が設定されており，逐次探索を行って一部Time Limit Exceeded(以下TLE)を出しても，
30点はもらえる問題でした．
このときの記憶は曖昧なのですが，最初から部分点を狙いに行くのを嫌って，
意味不明なアプローチで問題を解こうとしておりました．

予選から60分が経ち，試行錯誤の中WAやRuntime Error(以下RE)を食らいながら
疲れ果ててランキングをふと見てみると，
(確か)40位〜100位くらいまでをD問題を部分点で切り抜けている人たちで占められていました．
D問題は最初から部分点を狙いに行くべきだったということに気づき，
すぐに実装を変えました．

予選開始から90分でやっとD問題の部分点を手に入れたのですが，時すでに遅し．
自分は170位台になっており，D問題を満点でACする他，予選Aで本戦に行く方法はなくなりました．
残り30分足掻き続けたものの，ダメでした．

私の解答は
[これ](http://code-festival-2014-quala.contest.atcoder.jp/submissions/237723)
です．

#### 結果

獲得点数は330点．

[ランキング](http://code-festival-2014-quala.contest.atcoder.jp/standings#page_9)
は178位というなんと言うかまあとても悔しい結果に終わりました．

見てみると81位以下はみな，D問題を部分点で解いており，
もう少し早く部分点解法に気づけばと思うとホント悔しかったです．

### 予選B

[予選B](http://code-festival-2014-qualb.contest.atcoder.jp/)
の問題は
[こちら](http://code-festival-2014-qualb.contest.atcoder.jp/assignments)
から見ることが出来ます．
これらの問題を予選Aと同様21:00〜22:59の2時間で解きます．
予選Aでは80位以内
(本戦参加資格がない人に加え予選A通過者もいるので実際は120位くらいまで？)
に入る必要があります．

問題の提出履歴は
[こんな感じ](http://code-festival-2014-qualb.contest.atcoder.jp/submissions/all?user_screen_name=yantene)
です．

正直言って予選Bはボロボロでした．
つらすぎて未だに復習もしていません．

#### A，B問題

今回の
[A問題](http://code-festival-2014-qualb.contest.atcoder.jp/tasks/code_festival_qualB_a)
や
[B問題](http://code-festival-2014-qualb.contest.atcoder.jp/tasks/code_festival_qualB_b)
も予選Aと同様，言語の使い方が分かれば一発ACできる問題です．
とは言え易しすぎた予選Aの問題ほどシンプルではありませんでしたが，
両方一発ACすることが出来ました．

私の解答は
[これ(A問題) ](http://code-festival-2014-qualb.contest.atcoder.jp/submissions/256079)
と
[これ(B問題) ](http://code-festival-2014-qualb.contest.atcoder.jp/submissions/256653)
です．

ここまで約7分です．

#### C問題

もうよく覚えていませんが，全然解けませんでした．
部分点もないので全探索してTLE出しまくっても点数もらえませんでしたまる．

#### D問題

C問題に対し悪戦苦闘を繰り返す中残り30分となり，
さすがに危機感を覚えてD問題を見てみると，
なんと部分点が．

また部分点にしてやられたと苦笑いをしながら解きました．
とりあえず適当に書いて部分点を手に入れ，残り20分は穏やかな気持ちで過ごしました．

私の解答は
[これ](http://code-festival-2014-qualb.contest.atcoder.jp/submissions/258925)
です．

#### 結果

獲得点数は230点．

[ランキング](http://code-festival-2014-qualb.contest.atcoder.jp/standings#page_17)
は330位というまあ夢も希望もない結果に終わりました．

予選Bは問題が難しい上に参加者のレベルが滅茶苦茶高かったように思います．

CODE FESTIVAL行きたかったなあと思いながら散って行きました．

## CODE THANKS FESTIVAL!?

本戦も終わったある日，こんなメールが届きました

> 先日は、CODE FESTIVAL 2014の予選へご参加ありがとうございました。
> お陰様で、有難いことに想像以上の数のエントリーをいただくことができました。
> しかしその一方で、「もっと多くの人がプログラミングをより好きになるきっかけを作りたい」という想いに反し、
> 予選通過のボーダーが非常に高くなってしまったことを残念に思っておりました。
>
> つきましては、日帰りのささやかなコンテストではありますが、
> 予選で200点以上獲得された方を対象に、
> [CODE THANKS FESTIVAL 2014](http://recruit-jinji.jp/code_fes2014/lp.html)
> の開催を決定いたしました。
> 是非オンサイトコンテストをお楽しみください。

！？

こちらについてもCODE FESTIVALと同様，
東京までの交通費は全額支給してくださるらしく，最初は目を疑いました．

リクルートさんふとももすぎますよ…．

参加者の都合を考えてか，A日程(12月7日)とB日程(12月14日)の二日間，都合の良い日の方に参加できるようです．

どちらの日程も大学の考査期間やレポートの期限ラッシュと被ってはいましたが，

<blockquote class="twitter-tweet" lang="ja">
<p>CODE THANKS FESTIVAL、12月14日に行きます。よろしくお願いします。</p>&mdash; やんてね (@yantene)
<a href="https://twitter.com/yantene/status/539313273233891328">2014, 12月 1</a>
</blockquote>

行くことを決心しました．

## CODE THANKS FESTIVAL 2014 B日程 当日

### Arch Linux Install Battle

CODE THANKS FESTIVAL 当日になるまで，色々なことがありました．

一番大きかったのが，VAIO Proの故障です．
液晶モジュールがおかしくなったらしく，画面が酷く乱れるようになりました．

さすがにこれをCODE THANKS FESTIVALで使うのは厳しいので，前々日に修理に出していました．

思い返してみれば，
[セキュリティ・キャンプ](http://www.ipa.go.jp/jinzai/renkei/camp2012/)
では初期不良という爆弾を持ったVAIO T(SSDとの通信が突然ハードウェア的に切断される)
を持っていったし，
[mixi Scrap Challenge](https://mixi.co.jp/recruit/event/challenge-2014/)
では今回と同様VAIO Proの修理中だったし，
何か遠方のイベントに参加する時にはVAIOが不調であるというジンクスがありそうです．

今回は仕方なしにVAIO Tさんに登場してもらうことにしました．

<blockquote class="twitter-tweet" lang="ja">
<p>VAIO Tさん激重(物理)なんだよなぁ．肝心なときにいつも故障して役に立たないVAIO Proの軽さ</p>&mdash; やんてね (@yantene)
<a href="https://twitter.com/yantene/status/543788258094641154">2014, 12月 13</a>
</blockquote>

<blockquote class="twitter-tweet" lang="ja">
<p>とりあえずVAIO TさんにArchの環境入れておこう</p>&mdash; やんてね (@yantene)
<a href="https://twitter.com/yantene/status/543820003196149760">2014, 12月 13</a>
</blockquote>

前日までバタバタしていたこともあって，
VAIO ProのSSDからddしたデータをVAIO TのSSDにそのまま移していたら当日の朝になりました．

しかし，VAIO ProがUEFI搭載であるのに対し，VAIO TはLegacy BIOSです．
そのままのデータではブートローダを起動させることが出来ません．

とにかく時間が足らず，Arch Linuxのインストール用USBメモリを作り，
そのまま6時ごろに家を出発しました．

新幹線に乗り，時間が出来たところでBIOSからブートできるようにする作業を始めました．
幸いVAIO ProはGPTに対応しているので，やるべきことは

- UEFI System PartitionをBIOS Boot Partitionに書き換えること
- ブートローダをgummibootからSyslinuxに置き換えること
- fstabを書き換える必要があれば書き換えること

くらいです．

いや，くらいのはずでした．

あろうことか私は，bootパーティションをふっ飛ばしてしまったのです．

<blockquote class="twitter-tweet" lang="ja">
<p>新幹線の中でbootパーティションを壊した</p>&mdash; やんてね (@yantene)
<a href="https://twitter.com/yantene/status/543919192399818752">2014, 12月 14</a>
</blockquote>

何があったのでしょうか．自分でもよくわかりません．
気がついたら，空っぽになったbootパーティションがそこにありました．

ブート云々以前の問題で，Linuxカーネルすらも失ってしまったのです．

絶望顔で迎えた品川到着．

現地につくまではゆっくりと作業できる場所はあらず，
仕方なしと東京を楽しんでいました．

<blockquote class="twitter-tweet" lang="ja">
<p>先頭車両 <a href="http://t.co/wtxEZ6WtxW">pic.twitter.com/wtxEZ6WtxW</a></p>&mdash; やんてね (@yantene)
<a href="https://twitter.com/yantene/status/543926552849694721">2014, 12月 14</a>
</blockquote>

ゆりかもめの先頭車両です．テーマパークのジェットコースターみたいで楽しかったです．

テレコムセンターに到着し，
ビルの中で田舎者らしく迷子になってオロオロしながらもなんとかたどり着き，
携帯のテザリングを使ってカーネルやら何やらをダウンロードして復旧に努めていました．

その甲斐あって

<blockquote class="twitter-tweet" lang="ja">
<p>よっしゃああああああ</p>&mdash; やんてね (@yantene)
<a href="https://twitter.com/yantene/status/543940210753429505">2014, 12月 14</a>
</blockquote>

<blockquote class="twitter-tweet" lang="ja">
<p>Arch立ち上がったあああああ</p>&mdash; やんてね (@yantene)
<a href="https://twitter.com/yantene/status/543940256970465280">2014, 12月 14</a>
</blockquote>

なんとかCODE THANKS FESTIVALに参加する権利を手に入れました．

なお，この日に行ったパケット通信は…

<blockquote class="twitter-tweet" lang="ja">
<p>CODE THANKS FESTIVALに行ったのがいつなのかよくわかる <a href="http://t.co/Fu1wGsOCkd">pic.twitter.com/Fu1wGsOCkd</a></p>&mdash; やんてね (@yantene)
<a href="https://twitter.com/yantene/status/546627987609645057">2014, 12月 21</a>
</blockquote>

うむ．

### CODE THANKS FESTIVAL 2014

交通費の申請，何度も何度も書き直しました．

印鑑を忘れるという失態に加え，
計算ミスをやらかしてしまい，ホント迷惑かけました…．

それが終わったら弁当やTシャツを受け取り，
席についてコンテストを待つばかりとなりました．

<blockquote class="twitter-tweet" lang="ja">
<p>よろしくおねがいします <a href="https://twitter.com/hashtag/codefes?src=hash">#codefes</a> <a href="http://t.co/wGXxj8DrHX">pic.twitter.com/wGXxj8DrHX</a></p>&mdash; やんてね (@yantene)
<a href="https://twitter.com/yantene/status/543954512910626816">2014, 12月 14</a>
</blockquote>

今回は3時間で8問の問題を解きます．

問題は
[こちら](http://code-thanks-festival-2014-b-open.contest.atcoder.jp/)
から見ることが出来ます．これらの問題を12:00〜15:00の3時間で解きます．
5問以上解くことができればトートバッグが手に入るということで，意気込みます．

自分の問題の提出履歴は
[こんな感じ](http://code-thanks-festival-2014-b.contest.atcoder.jp/submissions/all?user_screen_name=yantene)
でした．

WAが多く見えるのは，ちょくだいさんが
「AtCoderのサーバ強いからテストケース通さないでどんどんSubmitしていいよ．今回ペナルティないし．(超意訳)」
と言ったからだかんね！！(超言い訳)

#### A問題

[A問題](http://code-thanks-festival-2014-b-open.contest.atcoder.jp/tasks/code_thanks_festival_14_qualb_a)
はホントやるだけです．2回もWAしてるのはきっと気のせい．

私の解答は
[これ](http://code-thanks-festival-2014-b.contest.atcoder.jp/submissions/299686)
です．

#### B問題

[B問題](http://code-thanks-festival-2014-b-open.contest.atcoder.jp/tasks/code_thanks_festival_14_qualb_b)
は全探索…いや比較しただけです．1回WAしたのは演算の順序を忘れてたからです．セーフセーフ．

私の解答は
[これ](http://code-thanks-festival-2014-b.contest.atcoder.jp/submissions/299850)
です．

#### C問題

[C問題](http://code-thanks-festival-2014-b-open.contest.atcoder.jp/tasks/code_thanks_festival_14_qualb_c)
はまあ比較するだけです．1回WAしたのは…コーディングミスかな？

私の解答は
[これ](http://code-thanks-festival-2014-b.contest.atcoder.jp/submissions/300022)
です．
}\}

{\{section
#### D問題

[D問題](http://code-thanks-festival-2014-b-open.contest.atcoder.jp/tasks/code_thanks_festival_14_qualb_d)
は数えるだけでした．一発ACできました．それにしても「足ゲーム」というネーミングセンス好き．

私の解答は
[これ](http://code-thanks-festival-2014-b.contest.atcoder.jp/submissions/300283)
です．

ここまで20分です．

#### E問題

[E問題](http://code-thanks-festival-2014-b-open.contest.atcoder.jp/tasks/code_thanks_festival_14_qualb_e)
は全探索しました．一応メモ化して高速化してます．

私の解答は
[これ](http://code-thanks-festival-2014-b.contest.atcoder.jp/submissions/301246)
です．

これにACしたことでトートバッグの獲得が確定しました．

#### F問題

[F問題](http://code-thanks-festival-2014-b-open.contest.atcoder.jp/tasks/code_thanks_festival_14_qualb_f)
はDPらしいです．確かにDPっぽさありました．

自分はメモ化再帰でやってます．まあDPとやってることはきっと同じですね．よくわからないですが．

私の解答は
[これ](http://code-thanks-festival-2014-b.contest.atcoder.jp/submissions/301505)
です．

#### G問題

[G問題](http://code-thanks-festival-2014-b-open.contest.atcoder.jp/tasks/code_thanks_festival_14_qualb_g)
はよくある(らしい)ゲームの問題です．

樹形図のようなものを書きながら解法は思いついたのですが，AC出来ませんでした．

模範解法を聞く限りアプローチはあっているようなのですが，WAやTLEを取りきれず…．

どうやらターンの実装に問題があるようです．

私が提出してWAしたコードは
[これ](http://code-thanks-festival-2014-b.contest.atcoder.jp/submissions/301942)
です．

#### H問題

[H問題](http://code-thanks-festival-2014-b-open.contest.atcoder.jp/tasks/code_thanks_festival_14_qualb_h)
は実装方法がすぐに思いつかなかったので殆どコードは書いてません．

#### 結果

6問正解して600点でした．

[ランキング](http://code-thanks-festival-2014-b.contest.atcoder.jp/standings#page_1)
は18位と，希望のある順位でした．

G問題を解けなかったことが心残りですが，
来年こそは CODE FESTIVAL 本戦に参加できるよう精進せねばと感じました．

そして収穫物

<blockquote class="twitter-tweet" lang="ja">
<p>表紙にちょくだいさんのサイン貰った！(水性ペンだったので乾かし中) <a href="http://t.co/oEwwmsLSpB">pic.twitter.com/oEwwmsLSpB</a></p>&mdash; やんてね (@yantene)
<a href="https://twitter.com/yantene/status/544013886320410624">2014, 12月 14</a>
</blockquote>

油性ペンを持って行くべきでした．

### 懇親会

寿司，唐揚げ，ピザ，美味しかったです．

ぼっち勢だったのでただひたすら食べてました．

書道コーディングではCOBOL書いてました．

辛かったです．

でもAtCoderでCOBOLが使えるようになるのを夢見てがんばりました．

ちょくだいさんには誰も使わないと一蹴されました．そのとおりでした．

さて，TUT Advent Calendar 2014，明日の記事はれーさまの“卒研発表で炎上しないために”です．

自分は卒研発表当日，朝目覚めることが出来ず見ることが出来ませんでしたので，
来年の卒研発表の為にも注目していきたいと思っています．
