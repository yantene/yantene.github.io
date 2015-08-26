---
layout: post
title: Arch Linux on UEFI な環境のインストール手順の備忘録
tags: [GNU/Linux, 備忘録]
---

もうすぐ(既に？)年末ですね．
年末は何かと忙しくなりますよね．
だったら暇で退屈なクリスマスのうちに
面倒ごとは済ませておきたいですよね！！！

年内には VAIO Pro が修理から返ってくる予定です．
せっかくならばストレージをスッキリして新年を迎えたいものです．
こうなったらリカバリをするしかないでしょう．

ただ，VAIO Pro が手元にある唯一の UEFI 機であることもあって，
インストールには毎度毎度ちょっと悩まされます．

VAIO Pro がかえってきたらすぐにインストールができるよう，
仮想マシンを使って手順を確認しておこうと思います．

なお，SSDに関するエラーの回避など，
[VAIO Pro 特有に必要となる追加作業](https://wiki.archlinux.org/index.php/Sony_Vaio_Pro_SVP-1x21)
もありますが，今回はそれに触れず一般的なインストール作業のみをまとめます．

## 前準備

### qcow2 イメージの作成

今回は仮想マシンに QEMU を使うので，
qcow2 イメージ上に環境構築をします．

VAIO Pro の SSD の容量は，
昔 `dd` したデータによると 256,060,514,304 バイト(らしい)です．

ということで qcow2 イメージを作成します．

~~~bash
qemu-img create -f qcow2 archlinux_uefi.qcow2 256060514304
~~~

### QEMU の起動

VAIO Pro は UEFI 機なので，QEMU 上でも UEFI を使います．
[OVMF](http://tianocore.github.io/ovmf/)
をダウンロードしてくるのですが，
作業環境が Arch であれば公式リポジトリに入っています．

~~~bash
pacman -S ovmf
~~~

パーミッションの関係で，少々強引ですが
カレントにファイルを持ってきます．

~~~bash
cp /usr/share/ovmf/ovmf_x64.bin .
~~~

そして QEMU を立ち上げます．

~~~bash
qemu-system-x86_64 -enable-kvm -m 1024 -pflash ovmf_x64.bin -boot order=d archlinux_uefi.qcow2
~~~

KVMの有効無効やメモリサイズなどはお好みで．

## インストール

### パーティショニングとファイルシステムの作成

ここからは基本的に
[Installation guide - ArchWiki](https://wiki.archlinux.org/index.php/Installation_Guide)
に沿って作業します．

とりあえずパーティショニングです．

~~~bash
sudo gdisk /dev/sda0
~~~

GPT を扱うので gdisk を使います．
(最近では fdisk でも GPT を扱えるらしいがはて)

普段，あまりメモリを食うような作業はしないですし，
実機はメモリを 8GB 積んでるので，swapは要らないかなと思います．
無駄に沢山のパーティション切るのはあまり好きではないので，
以下のように必要最低限の二つのパーティションを作成しました．

| No. | Start (sector) | End (sector) | Size       | Code | Name                   |
|-------:|---------------:|-------------:|-----------:|:-----|:-----------------------|
|   1 |           2048 |      2099199 | 1024.0 MiB | EF00 | efi\_system\_partition |
|   2 |        2099200 |    500118158 |  237.5 GiB | 8300 | linux\_root\_partition |

パーティションを切ったら次はファイルシステムを作成します．

EFI System パーティションは FAT32 を使います．
root パーティションは ext4 あたりを使えば良いと思います．

~~~bash
sudo mkfs.fat -F32 /dev/sda1
sudo mkfs.ext4 /dev/sda2
~~~

そして適当な場所にマウントします．

~~~bash
sudo mount /dev/sda2 /mnt
sudo mkdir /mnt/boot
sudo mount /dev/sda1 /mnt/boot
~~~


### パッケージのインストール

とりあえず必要なパッケージを入れておきましょう．

~~~bash
sudo pacstrap -i /mnt base base-devel vim zsh gummiboot dosfstools efibootmgr wpa_supplicant
~~~

### fstab

そして，/mnt/etc/fstabを良い感じに編集します．

~~~
PARTLABEL="linux_root_partition" /     ext4  rw,noatime,data=ordered,discard 0 1
PARTLABEL="efi_system_partition" /boot vfat  rw,relatime                     0 2
tmpfs                            /tmp  tmpfs nodev,nosuid                    0 0
~~~

ところで，ディスクを指定するのに使われる UUID や LABEL には，
ファイルシステムにより決定される **UUID** ， **LABEL** と，
パーティションにより決定される **PARTUUID** ， **PARTLABEL** があります．
**blkid** コマンドなんかで確認が出来ます．とても紛らわしいですが別物です．

これらは fstab の記述時の他，ブートローダの設定なんかでも使われるのですが，
自分は特に理由がない限り **PARTLABEL** を使うようにしています．


### chroot と諸々の設定

そしてついに新環境にchrootします．

~~~bash
sudo arch-chroot /mnt /bin/zsh
~~~

設定を色々行います．

まずロケール．

~~~bash
vim /etc/locale.gen # 必要な行をアンコメント
locale-gen
echo LANG=ja_JP.UTF-8 > /etc/locale.conf
~~~

タイムゾーン．

~~~bash
ln -s /usr/share/zoneinfo/Asia/Tokyo /etc/localtime
~~~

ハードウェアクロック．

~~~bash
hwclock --systohc --utc
~~~

ホスト名．

~~~bash
echo "YanteneLaptop" > /etc/hostname
~~~

initramfs の作成．

~~~bash
mkinitcpio -p linux
~~~

そして設定をし忘れると面倒なパスワード．

~~~bash
passwd
~~~

### ブートローダの設定

とりあえずインストール．

~~~bash
gummiboot --path=/boot install
~~~

エントリの作成．

~~~bash
vim /boot/loader/entries/arch.conf

# 以下のように記述
# title   Arch Linux
# linux   /vmlinuz-linux
# initrd  /initramfs-linux.img
# options root=PARTLABEL=linux_root_partition rw
~~~

こちらも前述の通り，PARTLABELを使用しました．

そしてブートローダの設定．

~~~bash
vim /boot/loader/loader.conf

# 以下のように記述
# default arch
# timeout 2
~~~

chroot 環境を抜けて再起動すれば，
新しく構築した環境がブートされます．

## 最後に

ホントはこの先 Xmonad を立ち上げるところまで書いていたのですが，
ハードウェアに依存する部分を含むので，
それは本質ではないと思い削りました．
また今度，VAIO Proがかえってきてから気が向いたときに投稿するつもりです．

qemu2 イメージをホスト環境でマウントする手順だけ最後に書いておこうと思います．

### qemu2 ファイルのマウント

まず，qemu2 ファイルをデバイスファイルに接続します．
/dev/nbd0 に接続するには，以下のようにします．

~~~bash
sudo mknod /dev/nbd0 b 43 0
sudo modprobe nbd max_part=8
sudo qemu-nbd --connect=/dev/nbd0 archlinux_uefi.qcow2
~~~

パーティションが存在していれば，
パーティションごとに
/dev/nbd0p1，/dev/nbd0p2
とデバイスファイルが存在しているはずです．

で，適当な場所にマウントしてやれば

~~~bash
sudo mount /dev/nbd0p2 /mnt
sudo mount /dev/nbd0p1 /mnt/boot
~~~

ファイルを触ることが出来ます．

### 最後の最後に

今年は色々お世話になりました．
来年もよろしくお願い致します．

## 参考文献

1. [Installation guide - ArchWiki](https://wiki.archlinux.org/index.php/Installation_Guide)
2. [QEMU - ArchWiki](https://wiki.archlinux.org/index.php/QEMU)
3. [Unified Extensible Firmware Interface - ArchWiki](https://wiki.archlinux.org/index.php/Unified_Extensible_Firmware_Interface)
4. [qemu 修行 (3) - /var/log/messages](http://d.hatena.ne.jp/yamanetoshi/20120806/1344228143)
