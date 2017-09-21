---
layout: post
title: C によるすごろく
tags: [日記, 参加記, プログラミング]
---

先週の日曜日、県立大学の高校生向けのC言語講座にて代表に選ばれたので，プレゼンテーションで発表する機会がありました。

数百人の前だったので、緊張のせいか早口になってしまいましたがなんとか乗り切りました(；´∀｀)

<!-- more -->

発表した内容は「Cによるすごろく」で、コンソールベースのすごろくプログラムです。と言うことでソースコードをのせますねん（載せてもいい・・・よね！？）

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
#include <windows.h>

#define KYORI 60    //5の倍数で距離を指定

int p_nin = 0, point[4] = {0}, nokori[4] = {KYORI, KYORI, KYORI, KYORI}, win = 0;
char ruler[KYORI+8] = {"START"};

void sugoroku(char *name, int p_num);

void main(){
    int count;
    char name[4][13] = {"","COM02","COM03","COM04"}, str_temp[13];
    srand((unsigned int)time(0));

    for(count = 0; count < KYORI/5  ; count++){
        strcat(ruler, "----");
        if(count < (KYORI/5)-1){
            strcat(ruler, "o");
        }
    }
    strcat(ruler, "GOAL");

    printf("***すごろく***\n\n");
    printf("1人目のプレイヤーの名前を教えてください(全角６文字以内)　:");
    gets(name[0]);
    if(strlen(name[0]) > 12){
        printf("文字数が多すぎます\n");
        getchar();
        exit(1);
    }
    for(count = 1; count < 4; count++){
        printf("%d人目のプレイヤーの名前を教えてください(エントリーを終了し、COMにする場合はcを入力)　:",count+1);
        gets(str_temp);
        if(strcmp(str_temp, "c") == 0){
            count = 4;
        }
        else{
            if(strlen(str_temp) > 12){
                printf("文字数が多すぎます\n");
                getchar();
                exit(1);
            }
            strcpy(name[count], str_temp);
            p_nin++;
        }
    }
    printf("\n＊プレイヤーエントリー\n");
    for(count = 0; count < 4; count++){
        printf("　%d人目のプレイヤー:%s\n",count+1 ,name[count]);
    }
    printf("\n\n試合開始！！");
    getchar();
    while(1){
        sugoroku(name[0], 0);
        sugoroku(name[1], 1);
        sugoroku(name[2], 2);
        sugoroku(name[3], 3);
    }
}

void sugoroku(char *name, int p_num){
    if(nokori[p_num] != 0){
        int randn, blank, count;
        if(p_num <= p_nin){
            printf("\n %d. %sさん、サイコロを振ってください(Press Enter Key)　　　　　残り%dマス", p_num+1, name, nokori[p_num]);
            getchar();
        }
        else{
            printf("\n %d. %sさんがサイコロを振ります　　　　　残り%dマス\n", p_num+1, name, nokori[p_num]);
        }
        for(count = 1; count <= 5; count++){
            printf("・");
            Sleep(500);
        }
        randn = (rand() % 6)+1;
        printf("%dです", randn);
        Sleep(1000);
        point[p_num] += randn;
        if(point[p_num] >= KYORI+1){
            nokori[p_num] = point[p_num]-KYORI;
            point[p_num] -= nokori[p_num]*2;
        }
        else{
            nokori[p_num] = KYORI-point[p_num];
        }
        printf("\n\n%s\n",ruler);
        for(count = 0; count <= 3; count++){
            printf("   |");
            for(blank = 0; blank < point[count]; blank++){
                printf(" ");
            }
            printf("%d",count+1);
            for(blank = 0; blank < nokori[count]; blank++){
                printf(" ");
            }
            printf("|\n");
        }
        printf("%s",ruler);
        if(nokori[p_num] == 0){
            win++;
            if(win <= 3){
                printf("　　　　%sさん、%d抜けです！\n", name, win);
                Sleep(1000);
            }
            else{
                printf("　　　　%sさん、ドベです。残念でした。\n", name);
                getchar();
                exit(1);
            }
        }
        else{
            printf("　　　　残り%dマス\n", nokori[p_num]);
            Sleep(1500);
        }
        printf("\n");
    }
}
```

ソースコードにて `Sleep` 関数を使っているんで
`windows.h` をつかうか `unistd.h` を使おうか迷ったんだけど、
プレゼンテーションでは Windows だったので `windows.h` をつかった。
`unistd.h` を Windows 上で使う方法ってあるのかな？？

ずっと気になっていたんだけど教えてけろー

あと、基本情報はＣ言語で受けることに。

これまでずっと全商情報処理検定１級に向けて COBOL を勉強してきたんだけど、
頑張ります(｀･ω･´)ゞ

ではではー
