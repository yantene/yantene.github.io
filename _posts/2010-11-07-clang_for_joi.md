---
layout: post
title: 情オリのため、久しぶりの C 言語
tags: [競技プログラミング]
---

![](/images/2010-11-07-clang_for_joi/IMAG0162.jpg)
昨日は東海地区高等学校商業実務総合競技大会の情報処理部門へ参戦してきました！

東海地区は全国の中でも極めてハイレベルな地区らしく(県岐商とかね)、
顧問の先生が「東海大会は狙ってない」と仰っていた理由がよく分かるような結果に終わってしまいました。

まあ、今年はこれでしばらく大会はないのですが、さりとてうかうかしている時間はありませんね。来年もあるわけだし。
僕の場合、解く速度が遅いことが一番の問題点であると認識しています。
なんで、例えばアルゴリズムなら二分木を使ったソートや探索などのパターンは抑えておきたいところです。

まあ、反省はこのくらいにして、
昨日、顧問の先生に「情オリにエントリーしたんですよー。」と話したところ、先生に結果を報告することになりました。

…こうなると適当に参加してひどい順位を取ることは許されない、と。はわわわわわ何もまだしてないよOTL

ということで、早速問題を見てみることに。

<!-- more -->

[第9回 日本情報オリンピック 予選問題](http://www.ioi-jp.org/joi/2009/2010-yo-prob_and_sol/index.html)

予選はなんの言語を使ってもいいそうですが、ここは国際情報オリンピックなどに合わせて C 言語でしょう！

最近は Java ばっか弄ってたんで、何か久しぶりでした。ソースコードは追記していきます。

## 問題 1

入力方法はどのようにしても良いようなので、
実行時点でバッファに突っ込んどいて、
`scanf` で１行ずつ読み込むことにします。
これは軽い腕試しですね。まだ楽勝です。
(とか言っちゃって、重大なバグがあったらどうしよう)

```c
#include <stdio.h>

int main(){
    int sum, hiku, i;
    scanf("%d", &sum);
    for(i = 1; i < 10; i++){
        scanf("%d", &hiku);
        sum = sum - hiku;
    }
    printf("ANS:%d\n", sum);
}
```

## 問題 2

まあTopCoderのEASY問題でよく見かけるタイプの問題。日本語な分簡単かも。

```c
#include <stdio.h>

int main(){
    int masu, me;
    scanf("%d %d", &masu, &me);
    int masuh[masu+6], meh[me], i;
    for(i = 0; i < masu; i++){
        scanf("%d", &masuh[i]);
    }
    for(i = 0; i < me; i++){
        scanf("%d", &meh[i]);
    }
    int result = 0, masup = 0, mep = 0;
    for(; masup < masu-1; result++){
        masup += meh[mep++];
        if(masup < masu-1) masup += masuh[masup];
    }
    printf("答え:%d\n", result);
}
```

## 問題 3


アルゴリズム自体はすぐに思いつきました。
すぐに書き始めました。
コンパイルも通って、入力のうちの幾つかは success しました。
しかし、入力の残りでセグメンテーション違反を起こしてしまったり、
結果の数値が違ったりと、頭を悩ませてしまいました…。
で、たった今わかりました。どこがわからなかったのかはさておき、ソースを貼りますね。

```c
#include <stdio.h>

int main(){
    /*学生人数とリスト件数をscnin、lslenにそれぞれ代入*/
    int scnin, lslen, i, j, result = 0;
    scanf("%d", &scnin);
    scanf("%d", &lslen);
    /*学生同士の関係をkankei配列に1マイナスして格納*/
    int kankei[lslen][2];
    for(i = 0; i < lslen; i++){
        scanf("%d %d", &kankei[i][0], &kankei[i][1]);
        kankei[i][0]--;
        kankei[i][1]--;
    }
    /*1の友達リストと友達の友達リストを作成し、0で初期化*/
    int friend[scnin], ffriend[scnin];
    for(i = 0; i < scnin; i++){
        friend[i] = 0;
        ffriend[i] = 0;
    }
    
    /*自分の友達を探そう！*/
    for(i = 0; i < lslen; i++){
        if(kankei[i][0] == 0){  //関係の0列目が自分なら
            friend[kankei[i][1]] = 1;   //1列目の人に1を入れる
            printf("1と%dは友達だから呼ぶね。", kankei[i][1]+1);
        }
        if(kankei[i][1] == 0){  //関係の1列目が自分なら
            friend[kankei[i][0]] = 1;   //0列目の人に1を入れる
            printf("1と%dは友達だから呼ぶね。", kankei[i][0]+1);
        }
    }
    /*友達の友達を探そう！*/
    for(j = 0; j < lslen; j++){
        if(friend[j] == 1){
            for(i = 0; i < lslen; i++){
                if(kankei[i][0] == j){  //関係の0列目がその人の友達なら
                    ffriend[kankei[i][1]] = 1;  //1列目の人に1を入れる
                    printf("%dと%dは友達だから呼ぶね。", j+1, kankei[i][1]+1);
                }
                if(kankei[i][1] == j){  //関係の1列目がその一の友達なら
                    ffriend[kankei[i][0]] = 1;  //0列目の人に1を入れる
                    printf("%dと%dは友達だから呼ぶね。", j+1, kankei[i][0]+1);
                }
            }
        }
    }
    printf("\n呼ぶ人:");
    for(i = 1; i < scnin; i++){
        if(friend[i] == 1 || ffriend[i] == 1){
            result++;
            printf("%d ", i+1);
        }
    }
    printf("\n答え:%d\n", result);
}
```

一回目に書いたソースコードは何がいけなかったのかがわからずに、
これは二回目に書き直したソースです。
なぜか数値が違ってしまう理由は、
最後のカウントで「学生の人数」と「リストの長さ」を混同していたのが原因でした。
入力の長さが大きくなると数値の誤差が大きくなってくる場合は、
走査のカウントを注意すると良い、ということでしょうかね。

なんかソースコードを載せるのって、気恥ずかしいですね。また続きを書きます。
