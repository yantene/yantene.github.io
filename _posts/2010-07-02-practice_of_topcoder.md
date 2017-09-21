---
layout: post
title: テスト週間が終わりて TopCoder の練習を行ふこと (宇治拾遺物語)
tags: [日記, 競技プログラミング]
---

はい、テスト週間が終わったんで必要以上にのんべんだらりとした生活をしてまふ。

今日はGhostTypingで6.574keys/secを超えたり、
テスト週間が終わったりしてとってもテンションが上がっちゃってたりして、
自分が何を言いたいのかわからなくなっちゃいました。

ほいでもって、TopCoderのPracticeをだらだらとやってました。
んー、やっぱり英語力がないから難しいね、
意味を理解するのに書くよりも時間をかけすぎてしまうという。

<!-- more -->

イカソーメン…いや、以下ソースコード。

```java
public class YahtzeeScore{
  public int maxPoints(int[] toss){
    int[] detame = new int[6];
    int i, max = 0;
    for(i = 0; i < 6; i++) detame[i] = 0;
    for(i = 0; i < 5; i++){
      detame[toss[i]-1] += toss[i];
    }
    for(i = 0; i < 6; i++){
      if(detame[i] > max) max = detame[i];
    }
    return max;
  }
}
```
