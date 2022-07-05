# EISHIN's Coding Set for WordPress
本リポジトリを使用することでよりスムーズにコーディングができます。

## このコーディングセットを使用してできること
- Dart Sassをcssにコンパイルし、Minifyすることができます。
- Babelを使用してJavaScriptをES5程度までトランスパイルできます。
- BrowserSyncを使用して、ローカル環境を立てることができ、監視対象のファイルをいじると自動リロードされます。
- WebPackを使用してJavaScriptファイルの依存関係を解消し、少ないファイル数にバンドルすることができます。
- 画像ファイルを圧縮することができます。

## 主な使用ツールについて
- [Node.js](https://nodejs.org/ja/)
- [npm](https://docs.npmjs.com/about-npm)
- [yarn](https://classic.yarnpkg.com/lang/en)
- [webpack5](https://webpack.js.org/concepts/)

## 使用方法
以降はmacOSを使用したインストール方法になります。<br>
1. [Node.js](https://nodejs.org/ja/)のLTS版をインストールします。インストーラーの指示に従って進んでいけば大丈夫です。
2. Node.jsがインストールできたらターミナルで `npm install --g yarn
`を実行します。yarnがインストールできます。
3. yarnがインストールできたら、Local by Flywheelで開発していくWordpressフォルダを立ち上げ、そこのトップレベルへ本リポジトリを `git clone` でローカル環境に複製します。（リポジトリのクローンについては[こちら](https://docs.github.com/ja/repositories/creating-and-managing-repositories/cloning-a-repository)）

## webpackの設定について
### webpackで最初に設定すること
1. webpack.config.jsファイルに行きます。
2. `let DIRBASE`をコメントに従って設定します
3. `projectJs`オブジェクト内で`entry`を指示に従って編集しましょう。
4. 以上です。
### 基本的なwebpack実行コマンド
一通り下記コマンドを実行してみましょう。
ビルドしたファイルは`developThemeName`で設定したフォルダ配下に`assets`フォルダとしてビルドされます。また
<table style='width: 100%;'>
  <tr>
    <th>実行したい内容</th>
    <th>実行コマンド</th>
  </tr>
  <tr>
    <td>開発用にビルド＆ローカルサーバーを立てる</td>
    <td>yarn run dev</td>
  </tr>
  <tr>
    <td>商用にビルド</td>
    <td>yarn run build</td>
  </tr>
  <tr>
    <td>商用にビルドしてローカルサーバーを立てる</td>
    <td>yarn run build:server</td>
  </tr>
  <tr>
    <td>開発用にビルドする</td>
    <td>yarn run webpack:dev</td>
  </tr>
</table>

### webpack内で使用しているツール
下記はwebpack内で使用している主なツールです。各ツールごとにさまざまな設定ができますが、ここでは割愛します。
- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)


## License
License: [MIT License](https://opensource.org/licenses/MIT)<br>
Contributors: KenyaMasuko
