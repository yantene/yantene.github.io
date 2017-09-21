---
layout: post
title: 第 9 回 JOI 予選 5 問題 (失敗編)
tags: [競技プログラミング]
---

学校の帰り部、石川啄木の短歌
「こころよき 疲れなるかな 息もつかず 仕事をしたる 後のこの疲れ」
に歌われるような「心地よい疲労感」に包まれたある日の午後部のこと。

予選４の問題のときに再帰をお手の物にした気でいた僕は、
予選５の問題も同じ手(もろちん再帰)を思いついてしまった。
これが悪夢の始まりであったーー。

<!-- more -->

まずはそのソースコードをどうぞ。

```c
#include <stdio.h>
#include <stdlib.h>

int *pw, *ph;
long long *pcount;
int routing(int x, int y, int compass){
//  printf("%d %d¥n", x, y);
  if(x == *pw && y == *ph){
    /*到着した場合*/
//  printf("GOAL!!¥n");
    *pcount = *pcount + 1;
    if(0 == *pcount % 10000000) printf("%lld¥n", *pcount);
    return 0;
  }else if((x == *pw && compass == -1) || (y == *ph && compass == -2)){
    /*もうその方向へは進めない場合*/
//  printf("COLLISION!!¥n");
    return 0;
  }
//getchar();
  int temp;
  if(x != *pw && compass != -2){
    if(abs(compass) == 1 || abs(compass) == 0){temp = 1;}else{temp = -1;}
    routing(x+1, y, temp);  //＊＊再帰っ！＊＊
  }
  if(y != *ph && compass != -1){
    if(abs(compass) == 2 || abs(compass) == 0){temp = 2;}else{temp = -2;}
    routing(x, y+1, temp);  //＊＊再帰っ！＊＊
  }
  return 0;
}
int main(){
  int w, h, result;
  long long count = 0;
  scanf("%d %d", &w, &h);
  pw = &w;
  ph = &h;
  pcount = &count;
  getchar();
  routing(1, 1, 0);   //初期位置は(1, 1)におり、また右左折していない
  result = count % 100000;
  printf("¥nANS:%d¥n", result);
  return 0;
}
```

別に動作がおかしい訳ではない。入出力例？ちゃんと通る。入力１？通るさ。
入力２や３もお手の物。

しかし…４，５に地雷が含まれていたのであった。

96 x 87 の道路の会社へ行くルートが幾通りもあることは想像はつくが、
コンピュータならすぐに処理をしてくれる―そう信じていた。
しかし、現実はそう甘くはなかった。

実行を始めて１０秒―。 無反応。

実行を始めて１分―。 音沙汰無し。

実行を始めて1時間―。 うんともすんとも言わない。

このまま待ち続ければいずれは解答が得られるであろうが、
こんなプログラムでは本番に提出できないのは必至―。

ということで、解説を読みながら勉強中なのですが、全くわかりません。
誰か教えてください…。
