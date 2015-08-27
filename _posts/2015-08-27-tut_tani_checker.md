---
layout: post
title: 技科大の成績確認ツールを作ってみた
tags: [Web, プログラミング, GNU/Linux]
---

豊橋技科大では，
明日 (8月27日) の午前 9 時より今年度前期の成績発表が行われます．
学内ネットワークより Dream Campus へ接続することで
今期の修得単位と評価の確認ができるようになるわけですが，
自宅より VPN を通してアクセスを行おうとすると
IP アドレスにより弾かれてしまいます．

![](/images/2015-08-27-tut_tani_checker/refuse.png)

しかし，VPN を通し，さらに技科大のサーバへ SSH でログインすると，
学内向けの IP アドレスを割り振ってくれるようで，
Dream Campus へのアクセスが可能となります．
これまでには，これを利用した成績確認手法として，
SSH の X11 forwarding を用い Firefox を立ち上げる手法や，
ネイティブ環境のブラウザに SOCKS プロキシを噛ませて接続する手法が提案されてきました．

今回は，この成績確認をターミナル内で完結させることを目的に，
手軽に成績確認の行えるスクリプトを書いてみました．
プログラムは GitHub で公開しています．

[TUT TAN'I Checker - https://github.com/yantene/tut_tani_checker](https://github.com/yantene/tut_tani_checker)

VPN を張り， SSH でログインしたら，
あとは README.md に記述した手順を踏めば良いだけなので簡単だと思います．

しかし Dream Campus にログインする必要があるため，
パスワードを入力するステップが存在します．
得体の知れないスクリプトにパスワードを入力するのも不安かと思うので，
簡単なコードの説明をしておこうかと思います．

## コード説明

プログラムは，ソースファイル `tut_tani_checker.sh` 1つからなります．
見ての通り， `bash` のシェルスクリプトです．

以下， 処理の始まる 20 行目から順に解説を行います．

### Dream Campus の認証情報の入力

成績確認には Dream Campus へのログインが必要です．
そのため，情報メディア基盤センターのアカウント名とパスワードを要求します．

```bash
read -p "Account ID: " id
read -sp "Password: " password; echo
```

`read` コマンドに `-p` オプションを与えるとプロンプトを表示できます．
また， `-s` オプションを与えると入力された文字列のエコーバックを行いません．

### ログインページからセッション ID 等を取得

#### cookie ファイルの作成

まず，セッション ID の cookie を保存するファイルを作ります．

```bash
cookie=`mktemp cookie.XXXXXX`
```

`mktemp` は適当に temp ファイルを作成してくれるコマンドです．
既存のファイルと衝突しないように命名してくれるため重宝します．

### ログインページのダウンロード

次にログインページにアクセスし，
セッション ID を取得し cookie ファイルに保存しておきます．
また，取得した HTML は変数 `login_html` へ格納しておきます．
なお， `$DC_LOGIN` にはログインページの URL が格納されています．

```bash
login_html=`curl "$DC_LOGIN"\
  --silent \
  --cookie-jar $cookie`
```

つまり，ログインページを開いた直後の状況ですね．

![](/images/2015-08-27-tut_tani_checker/login.png)

続いて取得した HTML から，
埋め込まれたフォームデータを取り出します．
そして，次のステップでログインする際に
POST パラメータとして `curl` に渡せるよう，
オプションパラメタとして使えるよう整形しておきます．

```bash
account_data="--data-urlencode txtID=$id"
password_data="--data-urlencode txtPassWord=$password"

login_parameters="`form_data $login_html \
  | sed -r 's/^(.*)$/--data-urlencode \1/' \
  | tr '\n' ' '` $account_data $password_data"
```

`curl` で POST パラメータを送信するには，
`--data` オプションを使用します．
今回は URL エンコードも行って欲しいので
`--data-urlencode` を使用しました．

また，以上のようなフォームデータの整形は今後も度々行うので，
以下のような関数を一番上で定義しています．

```bash
form_data() {
  echo "$*" \
    | grep -o -P '<input.+?>' \
    | sed -r 's/^.+name="([^"]+)".+value="([^"]*)".+$/\1=\2/' \
    | sed -r '/^[^= ]+=[^ ]*$/!d'
}
```

html を引数に，
有効なフォームデータを取り出し，
`curl` の POST パラメータのオプションの形式に整形しています．

### Dream Campus にログイン

取得した cookie と，先ほど整形したパラメタを渡して，
おもむろにログインします．

```bash
curl "$DC_LOGIN" \
  --silent \
  --cookie $cookie \
  --referer "$DC_LOGIN" \
  $login_parameters > /dev/null
```

これは，ログインページに情報を入力し，
ログインボタンを押したところを意味します．

![](/images/2015-08-27-tut_tani_checker/login_entered.png)

これでセッション ID は晴れてログイン状態になりました．

### 全件の成績明細までページをたどる

ここからは全成績を表示するページまで延々とたどっていきます．

まず，成績照会のページを開きます．
ここは，どの成績を照会するか選択を行う画面です．
`$DC_SELECT` に成績照会のページの URL が格納されています．

```bash
select_html=`curl "$DC_SELECT" \
  --silent \
  --cookie $cookie`
```

![](/images/2015-08-27-tut_tani_checker/select.png)

そこからフォームデータを取得し，
成績明細のページを要求するようオプションパラメタとして整形します．

```bash
select_parameters=`form_data $select_html \
  | sed -r '/^.*btnGpa.*$/d' \
  | sed -r 's/^(.*)$/--data-urlencode \1/' \
  | tr '\n' ' '`
```

整形したオプションパラメタを使用して，
成績明細のページを開きます．

```bash
results_html=`curl "$DC_SELECT" \
  -L \
  --silent \
  --cookie $cookie \
  $select_parameters`
```

![](/images/2015-08-27-tut_tani_checker/fifty.png)

この時点では成績を 50 件しか取得できていません．
全件の成績が欲しいので，
表示件数を「全件」とするようオプションパラメタを作ります．

```bash
all_results_request="--data-urlencode rdlGrid\$ddlLines=0"

all_results_parameters="`form_data $results_html \
  | sed -r 's/^(.*)$/--data-urlencode \1/' \
  | tr '\n' ' '` $all_results_request"
```

そして作成したパラメタを与え，成績情報を再取得します．
`$DC_RESULTS` には成績明細のページの URL が格納されています．

```bash
all_results=`curl "$DC_RESULTS" \
  --silent \
  --cookie $cookie \
  $all_results_parameters`
```

![](/images/2015-08-27-tut_tani_checker/all.png)

これでようやくすべての成績情報が手に入りました．

### 成績情報のパージングと表示

正規表現はそのままなので解説しませんが，
まあ見たままゆるゆるでやっています．
あまり検証していないので取りこぼしがあるかもしれません．

```bash
record_line_ptn='<td align="center">.+</td>'
record_data_ptn='<td align="center"><font color="0">([0-9]+)<\/font><\/td><td align="center"><font color="0">(.期)<\/font><\/td><td align="left"><font color="0">(.+<br>　?)?(.+)<\/font><\/td><td align="left"><font color="0">(.+)<\/font><\/td><td align="center"><font color="0">([0-9.]+)<\/font><\/td><td align="center"><font color="0">(履修放)?(.+)<\/font><\/td>'

echo "$all_results" \
  | grep -o -P "$record_line_ptn" \
  | sed -r "s/$record_data_ptn/\1年 \2\t\8\t\4(\5)/" \
  | sed -r 's/(&#[0-9]+)/\1;/' \
  | nkf -w --numchar-input \
  | sort -k 1,1 -k 2,2r
```

すると，

```
2014年 前期	Ｃ	難しい講義(山田 難吉)
2014年 前期	Ａ	易しい講義(山本 易久)
2014年 後期	Ｂ	普通の講義(山中 凡平)
2014年 後期	棄	退屈な講義(山川 退蔵)
2015年 前期	Ｄ	鬼畜な講義(山下 鬼太)
```

のように講義名や評価が表示されます．

### cookie ファイルの削除

作成した cookie のファイルを削除しておきます．

```bash
rm $cookie
```

以上が処理の流れです．

## 最後に

かなり説明を端折ったところもありますが，
概ね処理の流れは説明できたと思います．

ご不明な点等ありましたら，
お気軽に
[Twitter](https://twitter.com/yantene)
で声をかけてください．

最後にですが，
くれぐれもこのスクリプトの使用は自己責任でお願いします．
何か問題が起きたとしても一切の責任は負いかねますので，悪しからず．
