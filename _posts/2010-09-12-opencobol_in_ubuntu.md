---
layout: post
title: OpenCOBOL in Ubuntu
tags: [GNU/Linux, 備忘録, プログラミング]
---

はい、一度フったあの人 (COBOL) をいつまでも忘れられないやんてねがやってまいりました。

今日は手持ちの Linux に OpenCOBOL をいれてみました。
OpenCOBOL は簡単に言うと、Open な COBOL の C 言語トランスレーターです。
C 言語に変換したあと、`gcc` で実行形式
(Windows なら exe、Linux なら elf) にコンパイルしてくれる。

思ったより簡単にインストールできたんで、備忘録として書いておこうと思う。

<!-- more -->

## ダウンロード

ここよりOpenCOBOL(執筆時ver1.0)をDLして、ホームディレクトリ等に展開する

## インストール

端末を開いて、さっき展開したディレクトリに移動。
ここですぐmakeしようとすると怒られるそうなので、
```
sudo apt-get install libgmp3-dev libdb-dev
```
したあと、
```
./configure
make
sudo make install
```
これで使えるようになる。

## 使ってみる

試しにCOBOLでHelloWorldを書いてみたけれども、geditがCOBOLに対応していないので書きにくい。

そのせいか、すべての行頭に7文字分スペース取るの忘れてて、コンパイルするたび
```
$ cobc -x helloworld.cob
helloworld.cob:1: Warning: Invalid indicator ‘I’ at column 7 helloworld.cob:4: Warning: Invalid indicator ‘O’ at column 7
helloworld.cob:1: Error: syntax error, unexpected WORD, expecting PROGRAM_ID
```
って言われ続けてた。

ちゃんと行頭に7文字スペースを取ると、
```
$ cobc -x helloworld.cob
$ ./helloworld
わろーわーるど
```
コンパイルできました。めでたしめでたし。

では。
