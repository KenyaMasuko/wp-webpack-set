# EISHIN's Coding Set for WordPress

本リポジトリを使用することでよりスムーズにコーディングができます。

## このコーディングセットを使用してできること

- Dart Sass を css にコンパイルし、Minify することができます。
- Babel を使用して JavaScript を ES5 程度までトランスパイルできます。
- BrowserSync を使用して、ローカル環境を立てることができ、監視対象のファイルをいじると自動リロードされます。
- WebPack を使用して JavaScript ファイルの依存関係を解消し、少ないファイル数にバンドルすることができます。
- 画像ファイルを圧縮することができます。

## 主な使用ツールについて

- [Node.js](https://nodejs.org/ja/)
- [npm](https://docs.npmjs.com/about-npm)
- [yarn](https://classic.yarnpkg.com/lang/en)
- [webpack5](https://webpack.js.org/concepts/)

## 使用方法

以降は macOS を使用したインストール方法になります。<br>

1. [Node.js](https://nodejs.org/ja/)の LTS 版をインストールします。インストーラーの指示に従って進んでいけば大丈夫です。
2. Node.js がインストールできたらターミナルで `npm install --g yarn `を実行します。yarn がインストールできます。
3. yarn がインストールできたら、Local by Flywheel で開発していく Wordpress フォルダを立ち上げ、そこのトップレベルへ本リポジトリを `git clone` でローカル環境に複製します。（リポジトリのクローンについては[こちら](https://docs.github.com/ja/repositories/creating-and-managing-repositories/cloning-a-repository)）

## webpack の設定について

### WordPress を使用しない通常の HTML ファイル用のコーディングセットとの違い

- CSS,JS の読み込み<br>CSS と JS は自動で`link`,`script`が埋め込まれていましたが、本コーディングセットでは自分でパスを設定する必要があります。
- JavaSript ファイルのビルド<br>JavaScript ファイルのビルドは読み込む php ファイル名と一致させる必要はありません。（理由は、自身でパスを設定する必要があるため）どの JavaScript ファイルをビルドするかは webpack.config.js を編集します。
- WordPress のローカルサーバーを立てるために[Local](https://and-ha.com/coding/local-wordpress/)を使用します

### webpack で最初に設定すること

1. webpack.config.js ファイルに行きます。
2. `let DIRBASE`をコメントに従って設定します
3. `projectJs`オブジェクト内でエントリーポイントを指示に従って編集しましょう。
4. 以上です。

### 基本的な webpack 実行コマンド

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

### webpack 内で使用しているツール

下記は webpack 内で使用している主なツールです。各ツールごとにさまざまな設定ができますが、ここでは割愛します。

- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)

## License

License: [MIT License](https://opensource.org/licenses/MIT)<br>
Contributors: KenyaMasuko
