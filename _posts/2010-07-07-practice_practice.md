---
layout: post
title: Practice!! Practice!!
tags: [日記, 競技プログラミング]
---

さっきのSRMの悔しさをバネにPracticeしてました。

ちょっと商業高校生らしく商業ティック (←どんなや) な問題を選んでみました。

いつも結果報告だけなんでたまには問題の要約を。

<!-- more -->

<div class='box'>
<div class='box-title'>SRM153 DIV2 250点問題</div>

引数として int costs (原価)、int prices (売価)、
int sales (需要)、int items (商品名)が与えられるんで、
最も利益の出る商品名をreturnしなさい。
ただし利益が同じものがあった場合は添字の少ないほうを表示し、
またもっとも利益の出る商品の利益がゼロ以下の場合は空白をreturnすること。

<ul>
<li>クラス名 : MostProfitable</li>
<li>メソッド名 : bestItem</li>
<li>引数 : int, int, int, String</li>
<li>返り値 : String</li>
</ul>
</div>

こう日本語にまとめてみると結構単純な問題だったりするんだけど、英文で読むと結構難しい。原価計算をやってる商業科の悲しい習性として「costs」の意味するところが固定費の計算をどうすればよいのか、とかを考えてしまったりしたんだけど、まあ普通にとけばよいようなんで(これに気づくのに10分くらい要した)、といてみますた。

```java
public class MostProfitable{
    public String bestItem(int[] costs, int[] prices, int[] sales, String[] items){
        int[] rieki = new int[costs.length];
        int max = 0, maxsoe = 0;
        String result;
        for(int i = 0; i < costs.length; i++){
            rieki[i] = (prices[i] - costs[i]) * sales[i];
        }
        for(int j = 0; j < costs.length; j++){
            if(max < rieki[j]){
                max = rieki[j];
                maxsoe = j;
            }
        }
        if(rieki[maxsoe] <= 0)items[maxsoe] = "";
        return items[maxsoe];
    }
}
```

昔はJavaが苦手だったのに、今ではC言語と同じように書けるようになってきたりしている。
(いや、このソースの書き方だとほぼCなんだけど)

ほいで、126.37pointsゲッチュした。やった。
