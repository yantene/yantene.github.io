---
layout: post
title: 「あみだくじ」
tags: [競技プログラミング]
---

部活で、同級生と「何かアルゴリズムやらんかー」と話していたところ、
「どう書く？org (2017年09月21日追記: サービス終了？)」にて
[こんな問題](https://web.archive.org/web/20081204130355/http://ja.doukaku.org/103/)
を見つけました。

ということで、その同級生は COBOL で、自分 C でこの「あみだくじ」なる問題を解いてみました。

学校の PC は Windows だったからでしょうか、
Linux のようにバッファにデータを貯めて単純に
`scanf`で読み込んでいく方法が通用しませんでした。
`scanf`内に`\n`をいれてやったら動くようになりました。

<!-- more -->

```c
#include <stdio.h>
#include <string.h>

int main(){
  char namae[5], temp, yokobo[4];
  int i, j;
  scanf("%c %c %c %c %c", &namae[0],  &namae[1], &namae[2], &namae[3], &namae[4]);
  for(i = 0; i < 5; i++){
    scanf("\n|%c|%c|%c|%c|", &yokobo[0], &yokobo[1], &yokobo[2], &yokobo[3]);
    for(j = 0; j < 4; j++){
      if((int) yokobo[j] == (int) '-'){
        temp = namae[j];
        namae[j] = namae[j+1];
        namae[j+1] = temp;
      }
    }
  }
  for(i = 0; i < 5; i++){
    printf("%c ", namae[i]);
  }
  scanf("%d", &i);
  return 0;
}
```

あんま美しいコードじゃないですが、ご容赦ください。
COBOL 版はその同級生のブログに後々掲載されるいハズです。
