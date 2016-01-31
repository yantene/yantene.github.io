---
layout: post
title: Windows タブレット KEIAN KVI-70B に Arch Linux をインストールする
tags: [日記, GNU/Linux, 備忘録]
---

![](/images/2016-02-01-install_arch_on_kvi-70b/mini_env.jpg)

だいぶ遅くなりましたが，あけましておめでとうございます．

年明け，
[GoodWill 刈谷店](http://www.goodwill.jp/contents/shop_kariya_entrance.php)
に初詣を済ませてきたのですが，
そこでこんなタブレット端末を見かけました．
[KEIAN KVI-70B](http://www.amazon.co.jp/dp/B015QZIT9C/ref=as_sl_pc_tf_lc?tag=yantene-22&camp=243&creative=1615&linkCode=as1&creativeASIN=B015QZIT9C&adid=038ZD8BCGB0Y1SZQPN5A&&ref-refURL=http%3A%2F%2Frcm-fe.amazon-adsystem.com%2Fe%2Fcm%3Ft%3Dyantene-22%26o%3D9%26p%3D8%26l%3Das1%26asins%3DB015QZIT9C%26ref%3Dtf_til%26fc1%3D000000%26IS2%3D1%26lt1%3D_blank%26m%3Damazon%26lc1%3D0000FF%26bc1%3DFFFFFF%26bg1%3DFFFFFF%26f%3Difr)
約 ¥10,000 の Windows10 タブレットです．
昨年の夏に秋葉原で買った WinTab7 とその姿形は非常に似ており，
また技適証明番号は同一のため，
恐らく OS をアップグレードしたマイナーチェンジモデルだと思います．

<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">左: 前に秋葉で買って壊したやつ<br>右: 今回買ったやつ <a href="https://t.co/wkWDvxzJPn">pic.twitter.com/wkWDvxzJPn</a></p>&mdash; やんてね (@yantene) <a href="https://twitter.com/yantene/status/683262330419806208">2016, 1月 2</a></blockquote>

その WinTab7 はと言えば昨年秋頃に UEFI 設定をミスして文鎮化させてしまったのですが，
それに懲りず今回また買ってしまいました．

<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">新しいおもちゃ <a href="https://t.co/ajKHI62b3n">pic.twitter.com/ajKHI62b3n</a></p>&mdash; やんてね (@yantene) <a href="https://twitter.com/yantene/status/683261759382134784">2016, 1月 2</a></blockquote>

では，早速 Arch Linux を入れていこうかと思います．

## デバイスについて

### スペック

大まかな仕様は
[公式の Web ページ](https://www.keian.co.jp/products/kvi-70b/)
に記載されているので割愛します．
一般的な Bay Trail タブレットといった印象です．

### ハードウェア

一応プリインの Windows を立ち上げてハードの詳細を確認しました．

![](/images/2016-02-01-install_arch_on_kvi-70b/devices.png)

I²C…嫌な感じがしますね．

## 現在の状況

### できたこと

- Arch Linux インストール
- Wi-Fi 接続
  - [ドライバ](https://github.com/hadess/rtl8723bs)があった．
  - 早くカーネルにマージされないかなぁ…．
- micro SDHC アクセス
  - 何不自由なく認識した．
- X の起動
  - カーネルパラメタに `nomodeset` を指定のため `xf86-video-intel` 使用不可．
  - フレームバッファ (`xf86-video-fbdev`) なので重い，重い．
  - でもまあ使えないことはない．

### できていないこと

- タッチパネル認識
  - I²C接続っぽい．難しそう．
- 音声出力
  - `dmesg` が音声関連でなにか言ってるけど，不明．

### 試していないこと

- Bluetooth
  - [ドライバはある](https://github.com/lwfinger/rtl8723bs_bt/)ようなのでできそう？
- HDMI 出力
  - デバイスが見えていないっぽいので難しいかも．

## インストール手順

基本的には
[Arch linux on Acer Iconia Tab 8 W / Installation / Arch Linux Forums](https://bbs.archlinux.org/viewtopic.php?id=194513)
にしたがってインストールを進めていきます．

### 用意するもの

#### USB メモリ (1 GB 程度)

ArchLinux のインストールメディアに使用します．

#### USB キーボード

今回は実務訓練中の作業であったので，手持ちの HHKB Professional 2 を使用しました．
一般のキーボードに比して静電容量無接点方式のキーボードは消費電力が高いので，
タブレット端末に接続する上で適切な選択とは言いがたいですね…．

#### OTG アダプタ (セルフパワー)

本端末には充電用及び周辺機器接続用にたった一つの micro USB ポートしか搭載していません．
端末の電力事情を考えると
セルフパワーの OTG アダプタを使用することになるか思うのですが，
ただでさえ容量の少ないバッテリしか積んでいないので，
周辺機器を使っている間充電が行えないのはつらいです．

そこで今回は端末に給電しながら周辺機器を使用できる
[ルートアール 充電可能 4 ポートスリム OTG ハブ](http://www.amazon.co.jp/dp/B010EFZISY/ref=as_sl_pc_tf_lc?tag=yantene-22&camp=243&creative=1615&linkCode=as1&creativeASIN=B010EFZISY&adid=0K795HSTZZ1JBPXHH4QM&&ref-refURL=http%3A%2F%2Frcm-fe.amazon-adsystem.com%2Fe%2Fcm%3Ft%3Dyantene-22%26o%3D9%26p%3D8%26l%3Das1%26asins%3DB010EFZISY%26ref%3Dtf_til%26fc1%3D000000%26IS2%3D1%26lt1%3D_blank%26m%3Damazon%26lc1%3D0000FF%26bc1%3DFFFFFF%26bg1%3DFFFFFF%26f%3Difr)
を購入し，使用しました．
筆者も詳しくは知らないのですが，給電機能には規格や相性があるらしく，
本端末で使用できるかどうかは半ばイチかバチかの賭けだったのですが，
無事動作することを確認しました．

![](/images/2016-02-01-install_arch_on_kvi-70b/otg_hub1.jpg)
![](/images/2016-02-01-install_arch_on_kvi-70b/otg_hub2.jpg)

#### USB LAN アダプタ

インストール作業に使用します．
今回は手持ちの
[BUFFALO Giga USB3.0対応 有線LANアダプター LUA4-U3-AGT](http://www.amazon.co.jp/dp/B00L3SC4UC/ref=as_sl_pc_tf_lc?tag=yantene-22&camp=243&creative=1615&linkCode=as1&creativeASIN=B00L3SC4UC&adid=1CBEZ6NG6ZRFRW5CKFC6&&ref-refURL=http%3A%2F%2Frcm-fe.amazon-adsystem.com%2Fe%2Fcm%3Ft%3Dyantene-22%26o%3D9%26p%3D8%26l%3Das1%26asins%3DB00L3SC4UC%26ref%3Dtf_til%26fc1%3D000000%26IS2%3D1%26lt1%3D_blank%26m%3Damazon%26lc1%3D0000FF%26bc1%3DFFFFFF%26bg1%3DFFFFFF%26f%3Difr)
を使用しました．
アダプタは USB3.0 対応ではありますが，
今回は OTG アダプタを介して使用するため規格上 USB3.0 の速度では使えない (ハズ) です．

![](/images/2016-02-01-install_arch_on_kvi-70b/lan_adapter.jpg)

なお，インストール時に Wi-Fi ドライバを当てられるならば，
本アダプタはなくても良さそうです (多分．試してないので)．

### ブートメディアの作成

KVI-70B は Bay Trail タブレットにありがちな IA32 UEFI を搭載しています．
公式の Arch Linux インストールメディアに付属しているブートローダではブートできないため，
インストールメディアを少しいじる必要があります．

公式の Arch Linux インストールメディアのイメージは読み込み専用で，内容の変更ができません．
これでは不都合なので，
USB メモリをフォーマットしてからイメージからファイルを移すという少し面倒な手順を踏みます．

#### USB メモリのフォーマットとマウント

```bash
sudo gdisk /dev/sdb
# ストレージ全体を EFI System Partition (ef00) にしてください
sudo mkfs.vfat -F32 -n ARCHISO /dev/sdb1
mkdir ./usbdrive
sudo mount /dev/sdb1 ./usbdrive
```

#### 公式の Arch Linux インストールメディアの中身をコピー

```bash
mkdir ./archiso
sudo mount archlinux-2016.01.01-dual.iso ./archiso
sudo cp -r ./archiso/* ./usbdrive
sudo umount ./archiso
```

#### ブートローダ周りをいじいじ

`bootia32.efi` をどっかから持ってきてインストールメディア内に配置します．

```bash
wget https://github.com/jfwells/linux-asus-t100ta/raw/master/boot/bootia32.efi
sudo mv ./bootia32.efi ./usbdrive/EFI/boot/
sudo mkdir -p ./usbdrive/boot/grub
sudo -E nvim ./usbdrive/boot/grub/grub.cfg
```

`./usbdrive/boot/grub/grub.cfg` にお好きなテキストエディタで以下のように記述してください．

```
menuentry 'Arch Linux i686'{
  echo 'Loading Linux core repo kernel ...'
  linux /arch/boot/i686/vmlinuz archisobasedir=arch archisolabel=ARCHISO nomodeset i915.modeset=0 irqpoll
  echo 'Loading initial ramdisk ...'
  initrd /arch/boot/i686/archiso.img
}
```

最後に USB メモリをアンマウント．

```bash
sudo umount ./usbdrive
```

これでとりあえずインストールメディアは完成です．

### #archlinuxinstallbattle

#### ブート

本端末に OTG ハブを介して，作成した USB メモリを接続します．
そしておもむろに電源を入れると，
無事 Arch Linux のインストールメディアが起動しました．
WinTab7 では UEFI の設定をミスって文鎮化させたため今回は触りたくなかったのですが，
嬉しいことに本端末は最初から外部デバイスからのブートが有効になっていたようです．ありがたや．

#### ネットワーク接続

USB LAN アダプタをつなぎます．
そしてまたおもむろに

```bash
dhcpcd
```

これでネットに繋がると思います．

#### インストール

VAIO Pro にインストールするときに書いたインストールスクリプトがそのまま使えそうだったので，
それを流用しました．

まずはダウンロード

```bash
wget https://raw.githubusercontent.com/yantene/arch-installer/master/installer.sh
```

そして実行．

```bash
sh ./installer.sh
# device (/dev/sda): /dev/mmcblk0
# hostname (YanteneLaptop): <ホスト名>
# username (yantene): <ユーザ名>
# password: <パスワード>
```

これでインストールは終わりです．
やー，早いですね．

そして最後，カーネルパラメータに `nomodeset i915.modeset=0 irqpoll` を付与します．

```bash
nvim /mnt/boot/loader/entries/arch.conf
# before: options root=PARTLABEL=linux_btrfs_partition rw
# after:  options root=PARTLABEL=linux_btrfs_partition rw nomodeset i915.modeset=0 irqpoll
```

そして再起動すれば新環境の Arch Linux が立ち上がるはずです．
インストールスクリプトに入力したユーザ名とパスワードでログインしてください．

### 環境セットアップ

#### ネットワーク接続

何はともあれ Wi-Fi を使えるようにします．

```bash
yaourt -S linux-headers rtl8723bs-dkms-git
git clone https://github.com/hadess/rtl8723bs
sudo cp ./rtl8723bs/*.bin /lib/firmware/rtlwifi/

sudo dkms install rtl8723bs/2
sudo systemctl enable dkms
```

とりあえず再起動すれば，
NIC が見えるようになります．

```bash
ip a
# 1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default 
#     link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
#     inet 127.0.0.1/8 scope host lo
#        valid_lft forever preferred_lft forever
#     inet6 ::1/128 scope host 
#        valid_lft forever preferred_lft forever
# 2: wlan0: <BROADCAST,MULTICAST> mtu 1500 qdisc mq state DOWN group default qlen 1000
#     link/ether xx:xx:xx:xx:xx:xx brd ff:ff:ff:ff:ff:ff
```

あとは[Netctl](https://wiki.archlinuxjp.org/index.php/Netctl)あたりで接続できると思います．

#### X のインストールと起動

`xf86-video-intel` が使えないので `xf86-video-fbdev` を入れるところ以外は至って普通です．

X とかいろいろインストールして

```bash
yaourt -S xorg-server xorg-xinit xorg-server-utils xorg-twm xorg-xclock xterm xf86-video-fbdev
```

`startx` すれば

```bash
startx
```

いけます．

ここまでくれば，
あとは好きなウィンドウマネージャなりデスクトップ環境なりをインストールして楽しむだけです！

![](/images/2016-02-01-install_arch_on_kvi-70b/screenshot.png)

## 総括

タッチパネルが使えないので屋外で気軽に使えないし，
音声出力が使えないのでオーディオプレイヤーにもできない．

割とつらそうなのですが，
HHKB とタブレット端末って**物理的にミニマルな開発環境という感覚**に浸れて僕は好きです．

<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">すばらしさ <a href="https://t.co/GSB7kO3352">pic.twitter.com/GSB7kO3352</a></p>&mdash; つよし (@yantene) <a href="https://twitter.com/yantene/status/693839860222656512">2016, 1月 31</a></blockquote>

この環境でスタバドヤァとかおしゃれでいいんじゃないですかね！！！

## 参考文献

- [Arch linux on Acer Iconia Tab 8 W / Installation / Arch Linux Forums](https://bbs.archlinux.org/viewtopic.php?id=194513)
- [わかめそばmogmog: VivoTab Note 8 で遊ぶ - ArchLinux インストール](http://www.wakamesoba98.net/2015/01/vivotab-note-8-archlinux.html)
- 
