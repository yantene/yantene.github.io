---
layout: post
title: SONY VAIO T(SVT1311AJ)上のLinuxで輝度調整をする
tags: [GNU/Linux, 備忘録]
---

つい先日，4度目の修理から帰ってきたVAIO．ハードウェアの問題で使用中突然SSDとの通信途絶えてしまうという困ったちゃんで，何度も何度も修理に出していました．今回の修理で基盤交換が行われて返ってきてからは今のところ順調に使えています．

さて，当然安定して動くことを確認したらArchをインストールしたわけですが，そこでひとつ大きな問題が発生しました．輝度調整キーである「Fn+F5/F6」が利かないのです．常に最大輝度で，バッテリーを無駄に食うわ，無駄に眩しいわでたいへん困っていました．その後色々と調べたところ，コンソール上で輝度変更を行うことができました．

<!-- more -->

つ事で，今回はこちらのサイトを参考に輝度調整をするシェルスクリプトを書いてみました．

## ソースコード

以下を/usr/bin/brightnessに保存してください．

```bash
#!/bin/bash
brightness=`cat /sys/class/backlight/intel_backlight/brightness`
maxbrightness=`cat /sys/class/backlight/intel_backlight/max_brightness`
if [ $# = 0 ]; then
  echo $(($brightness / (${maxbrightness} / 15)))
  exit 0
elif [ $# = 1 ]; then
  if [ $1 = up ]; then
    brightness=$((${brightness} + $((${maxbrightness} / 15))))
  elif [ $1 = down ]; then
    brightness=$((${brightness} - $((${maxbrightness} / 15))))
  else
    brightness=$(($1 * ${maxbrightness} / 15))
  fi
 
  if [ ${brightness} -le 0 ]; then
    brightness=$((1 * ${maxbrightness} / 15))
  elif [ ${brightness} -gt ${maxbrightness} ]; then
    brightness=${maxbrightness}
  fi
  echo ${brightness} > /sys/class/backlight/intel_backlight/brightness
else
  echo "引数の数が多過ぎます"
  exit 1
fi
```
