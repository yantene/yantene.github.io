---
layout: post
title: 「あみだくじ」 by COBOL
tags: [競技プログラミング]
---

少し前の記事に「
[あみだくじ](/amidakuji.html)
」があったと思います。そこで、僕はこう書きました。

>  COBOL 版はその同級生のブログに後々掲載されるハズです。

しかし、彼はなかなか動きませんでした。

COBOL では書きにくいプログラムなのかもしれません。
ということで、今朝より、COBOLにてこのプログラムを書こうと試行錯誤を続けた上で、やっと今完成しました。

<!-- more -->

なお、OpenCOBOLでコンパイルする際、自由形式にするため
```bash
cobc -x -free amida.cbl
```
のように、freeオプションをつけました。
これにより行頭にスペースを取る必要がなくなるようです。

まあ何はともあれソースコードをご覧ください。

```cobol
IDENTIFICATION  DIVISION.
PROGRAM-ID. AMIDA.
AUTHOR.     YANTENE.

ENVIRONMENT DIVISION.
INPUT-OUTPUT    SECTION.
FILE-CONTROL.
    SELECT AMIDA-IN ASSIGN TO "./nyu.txt" ORGANIZATION IS LINE SEQUENTIAL.

DATA        DIVISION.
FILE        SECTION.
FD  AMIDA-IN.
01  YOMI-T.
    02  YOMI  OCCURS  9  PIC  X(01).
WORKING-STORAGE SECTION.
01  NAME-T.
    02  NAME  OCCURS  9  PIC  X(01)  VALUE SPACE.
01  STICK-T.
    02  STICK  OCCURS  9  PIC  X(01)  VALUE SPACE.
01  TEMP  PIC  X(01).
01  I     PIC  9(02).
01  FLG   PIC  9(01)  VALUE  0.

PROCEDURE   DIVISION.
    OPEN  INPUT  AMIDA-IN
    READ  AMIDA-IN
        NOT AT END
        PERFORM  VARYING  I  FROM  1  BY  2  UNTIL  I > 9
            MOVE YOMI(I) TO NAME(I)
        END-PERFORM
        DISPLAY  NAME-T
    END-READ
    PERFORM  UNTIL  FLG = 1
        READ    AMIDA-IN
            AT END      MOVE  1  TO  FLG
            NOT AT END  PERFORM  VARYING  I  FROM  2  BY  2  UNTIL  I > 8
                        MOVE  YOMI-T  TO  STICK-T
                        IF  STICK(I) = "-"
                            THEN  MOVE  NAME(I - 1) TO TEMP
                                  MOVE  NAME(I + 1) TO NAME(I - 1)
                                  MOVE  TEMP TO NAME(I + 1)
                        END-IF
                    END-PERFORM
                    DISPLAY  STICK-T
        END-READ
    END-PERFORM
    DISPLAY  NAME-T
    CLOSE  AMIDA-IN
    STOP  RUN.
```

なお、予め、この実行ファイルの同階層にnyu.txtが置かれ、
それにあみだくじの情報が書かれているものとします。

長いので難しいプログラムだったのではないか、
と思うかもしれませんが、そうでもありませんでした。

- ① 実行ファイルと同階層にある「nyu.txt」に入ってる入力データ(あみだくじデータ)を開いておく。
- ② まず、１行目(A〜Eの名前)を読み込み、NAME-T配列に入れ、内容を表示する。
- ③ PERFORMで2行目以降を読み込み、STICK-T配列に入れ、偶数「I」番目に”-”がある場合はNAME-T配列の「I-1」番目と「I+1」番目を入れ替える。そしてSTICK-Tを表示する。これを、読み込みきるまで続ける。
- ④ 整列済みのNAME-T配列を表示し、ファイルを閉じる。

これで完了です。

ただ、やっぱりめんどくさいですね…。
