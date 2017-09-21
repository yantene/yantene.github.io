---
layout: post
title: TopCoder の SRM に初参加。
tags: [日記, 競技プログラミング]
---

SRM475に初参加してみた。

もろちんDIV2の250をやったわけですが。翻訳に何度かかけてなんとなく意を掴み、書き始めたんですが、Compileしつつ手直しも終えて、いざTest!と思ひければ

```
An illegalaccess exception occurred. Make sure your method is declared to be public.
```
おいおいマジかよ(汗) いつでも俺の心とメソッドはパブリックだゼ！

<!-- more -->

プログラムを見ても
```java
class RabbitVoting{
    String getWinner(String[] names, String[] votes){
        int[] touhyou = {0};
        int i, j, max = 0, maxs = 0, doten = 0;
        String h;
        for(i = 0; i < names.length; i++){
            if(names[i].equals(votes[i]) == false){
                for(j = 0; j < names.length; j++){
                    if(names[j].equals(votes[i])){
                        touhyou[j]++;
                    }
                }
            }
        }
        for(i = 0; i < names.length; i++){
            if(max < touhyou[i]){
                max = touhyou[i];
                maxs = i;
            }else if(max == touhyou[i]){
                doten = touhyou[i];
            }
        }
        h = names[maxs];
        if(doten == max){
            h = " ";
        }
        return h;
    }
}
```

裸になって何が悪い！このコードで何が悪い！

みたいなね。

いや、何が悪いかコメントか何かで教えてください。お願いします OTL

※追記

classもmethodもpublicにするのを忘れてました。はい、いわれたことを素直に聞けってね。ごめんなさい。

いや、publicにしてもTest、通らなかったんだけどね。
