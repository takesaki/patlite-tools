# Patlite操作スクリプト

## テスト手順 
1. パトライトとはEtherCableで繋がってる前提
1. vscodeでコンテナ起動
1. axiosのインストール
    ```sh
    npm i axios
    ```
1. テスト実行
    ```sh
    npm run dev
    ```
1. 一定間隔ごとに点灯内容が変わる


## 移行手順
1. axiosのインストールを忘れずに
    ```sh
    npm i axios
    ```
1. ソースのコピー
    
    `src/patlite.ts`

1. 呼び出し元のソースを書く

    ```typescript
    import {Patlite} from './patlite';

    // 引数のIPまたはホスト名は変更する
    const patlite = new Patlite('192.168.10.1');

    patlite.green();     // 緑点灯
    patlite.greenslow(); // 緑遅い点滅
    patlite.greenfast(); // 緑早い点滅
    patlite.greenoff();  // 緑消灯

    patlite.yellow();     // 黄点灯
    patlite.yellowslow(); // 黄遅い点滅
    patlite.yellowfast(); // 黄早い点滅
    patlite.yellowoff();  // 黄消灯

    patlite.red();        // 赤点灯
    patlite.redslow();    // 赤遅い点滅
    patlite.redfast();    // 赤早い点滅
    patlite.redoff();     // 赤消灯

    patlite.off();        // 全消灯
    ```

> [!NOTE]
> 緑点灯の後に黄点灯をcallすると緑と黄色が同時に点灯する、緑を消して黄色だけにしたい場合は別途、緑のoffを呼び出す
