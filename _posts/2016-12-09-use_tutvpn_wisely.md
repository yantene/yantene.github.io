---
layout: post
title: ocproxy で TUT VPN を賢く使う
tags: [GNU/Linux, 備忘録]
---

この記事は
[TUT Advent Calendar 2016](http://www.adventar.org/calendars/1357)
の9日目の記事です．

みなさん，
[技科大の VPN (リンク先は学内限定)](http://www.imc.tut.ac.jp/network/vpn)
を使ってますか．
今月から教務システムが更新され，<s>成績情報がVPN経由で普通に閲覧可能になり</s>
(2017年09月20日追記: メンテナンス中の一時的なものだったようです)，
TUT VPN の利便性はますます高まっています．

TUT VPN は Cisco の VPN を採用しています．
普通は Cisco の提供する AnyConnect などを使って接続しますね．
TUT VPN で使われている AnyConnect SSL VPN Protocol の仕様は残念ながら公開されていないのですが，
それと互換のある
[OpenConnect VPN Protocol](https://tools.ietf.org/id/draft-mavrogiannopoulos-openconnect-00.html)
は IETF に仕様のドラフトが公開されています．
<!-- more -->
また，この実装である
[OpenConnect](http://www.infradead.org/openconnect/)
は，GNU LGPL で公開されています．
そのため，OpenConnect をインストールすれば，
以下のようにして TUT VPN に接続することができます．

```bash
yaourt -S openconnect # openconnect をインストール
sudo openconnect -u x123456 gw.vpn.xxx.xx.xx # 接続
```

(`x123456` は IMC のアカウント名，`gw.vpn.xxx.xx.xx` は接続先サーバ名)

しかしながら AnyConnect や OpenConnect は，
ホスト上のすべてのネットワークトラフィックをハイジャックしてしまうため，
あらゆる通信が技科大経由になってしまい，
何がとは言いませんがビミョーに不便なんですよね．
そこでいろいろ試してみたら，
[ocproxy](https://github.com/cernekee/ocproxy)
というソフトウェアが便利だったので，紹介いたします．

# 概要
ocproxy は OpenConnect と連携して動作するプロキシソフトウェアです．
OpenConnect VPN に接続する SOCKS サーバを提供します．

## メリット
- 必要なソフトウェアのみ VPN を通すことができます
- OpenConnect の起動に root 権限の必要がなくなります

## デメリット
- SOCKS に対応したソフトウェア以外は VPN 接続を行うことができません
  (tsocks を使うと解決できるのかな，わからない)

# インストール
openconnect (TUTVPN に接続するため)，
ocproxy (OpenConnect の通信を仲介するプロキシを立てるため)，
connect (SOCKS サーバに接続するため)の 3 つのソフトウェアが必要です．

yaourt を導入した Arch Linux の場合，以下のようにして導入することができます．

```bash
yaourt -S openconnect ocproxy-git connect
```

# 起動
以下のコマンドで 10484 番ポートに SOCKS プロキシが立ちます．

```bash
openconnect --script-tun --script 'ocproxy -D 10484' -u x123456 gw.vpn.xxx.xx.xx
```

本プロキシを経由したネットワークトラフィックは TUT VPN を経由します．
すなわち，SOCKS に対応したアプリケーションであれば，
`localhost:10484` を指定することで TUTVPN 経由で接続することができます．

# 例

## OpenSSH
たとえば，SSH で `wlinux.edu.tut.ac.jp` に接続するなら，以下のようにすればよいです．

```bash
ssh -o ProxyCommand='connect -S localhost:10484 %h %p' x123456@wlinux.edu.tut.ac.jp
```

また，`.ssh/config` に

```
Host wlinux.tutvpn
  Hostname wlinux.edu.tut.ac.jp
  User x123456
  ProxyCommand connect -S localhost:10484 %h %p
```

のように追記すると，

```bash
ssh wlinux.tutvpn
```

で接続できて便利です．

もちろん `scp` もできます．

```bash
scp wdev.tutvpn:~/hoge.taz .
```

## Chromium
以下のようにして Chromium (Google Chrome も同様?) を立ち上げると，
VPN 経由でブラウザが利用できます．

```bash
chromium --proxy-server="socks5://localhost:10484"
```

但し，すでに Chromium が起動している状態で，
上記のコマンドを入力して新たなプロセスを立ち上げても，
それは VPN 経由とはならないようなのでご注意下さい．

# おわりに
今回の記事では，特定のアプリケーションのみを TUT VPN に接続する方法について述べました．
何か質問等あれば，Twitter あたりでご連絡下さい．

さて，明日は
[@ponzu\_meister](http://www.adventar.org/users/13547)さんの記事です．
いろいろな意味で謎の記事なので，今から楽しみです．
