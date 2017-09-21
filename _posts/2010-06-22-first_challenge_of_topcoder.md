---
layout: post
title: TopCoder 初挑戦！
tags: [競技プログラミング]
---

巷でうわさの TopCoder に初挑戦してみた。
言語は Java。
今年の 4 月に登録したのはいいものの、
英語であることから敬遠していたんだけど、
何故か気が向いて Practice の SRM144 の Div2 をやってみた。

<!-- more -->

正直、競技プログラミング (いや、プログラミングというべきか) には腕に自信がなく、緊張の中での体験だった。
最初はmainメソッドを作ってしまったりして大変だったんだけど、なんとか通って興奮してしまったw

```
System> yantene has submitted the 200-point problem for 60.00 points
```

まあ、初めての経験だったんで60 pointsでもまあ仕方ないということで、
急いで書いて、効率よりも速さでしたから汚いですが記念にソースコードをｗ

```java
public class Time{
  public String whatTime(int seconds){
    int hours, minutes;
    hours = seconds / (60 * 60);
    seconds -= hours * 60 * 60;
    minutes = seconds / 60;
    seconds -= minutes * 60;
    String s_hours = String.valueOf(hours);
    String s_minutes = String.valueOf(minutes);
    String s_seconds = String.valueOf(seconds);
    String result = s_hours + ":" + s_minutes + ":" + s_seconds;
    return result;
  }
}
```
