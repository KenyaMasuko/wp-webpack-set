/**
 * This is a main entrypoint for Webpack config.
 *
 * @since 1.0.0
 */
const path = require("path");

let DIRBASE = {
  domain: "webpack.local", //Local by Flywheelで発行されたサイトのドメインを適宜定義しましょう。：'http://'はナシ
  wordpressThemesFolder: "../app/public/wp-content/themes", // WordPressの(wp-content内にある)'themes'フォルダまでのパスを定義しましょう：ルートディレクトリ(gulpfile.jsなどがあるディレクトリ)から相対パスで記述(基本的に変更しなくて良い)
  developThemeName: "twentytwenty", // 開発を行なっていきたいWordPressのテーマフォルダ名を指定しましょう：twentyseventeenなら'twentyseventeen'（案件ごとに変えてください)
  destAssets: "assets", // テーマフォルダ内に吐き出されるコンパイル後のアセットフォルダの名前を指定しましょう。特別変更する必要なければデフォルトのままでOKです。
};

// Paths to find our files and provide BrowserSync functionality.
const projectPaths = {
  projectDir: __dirname, // Current project directory absolute path.
  projectJsPath: path.join(__dirname, "src/assets/js"),
  projectScssPath: path.join(__dirname, "src/assets/styles"),
  projectImagesPath: path.join(__dirname, "src/assets/images"),
  projectOutput: path.join(
    __dirname,
    `${DIRBASE.wordpressThemesFolder}/${DIRBASE.developThemeName}/${DIRBASE.destAssets}`
  ),
  projectWebpack: path.join(__dirname, "webpack"),
};

// Files to bundle
const projectFiles = {
  // BrowserSync settings
  browserSync: {
    enable: true, // enable or disable browserSync
    host: "localhost",
    port: 3000,
    mode: "proxy", // proxy | server
    proxy: `http://${DIRBASE.domain}/`,
    // BrowserSync will automatically watch for changes to any files connected to our entry,
    // including both JS and Sass files. We can use this property to tell BrowserSync to watch
    // for other types of files, in this case PHP files, in our project.
    files: `${DIRBASE.wordpressThemesFolder}/${DIRBASE.developThemeName}/**/*.php`,
    reload: true, // Set false to prevent BrowserSync from reloading and let Webpack Dev Server take care of this
    // browse to http://localhost:3000/ during development,
  },
  // JS configurations for development and production
  projectJs: {
    eslint: true, // enable or disable eslint  | this is only enabled in development env.
    filename: "js/[name].js",
    entry: {
      //バンドルしたいファイルの分だけ
      // {jsファイル名} : projectPaths.projectJsPath + '/{jsファイル名}'　と記述します
      index: projectPaths.projectJsPath + "/index.js",
    },
    rules: {
      test: /\.m?js$/,
    },
  },
  // CSS configurations for development and production
  projectCss: {
    postCss: projectPaths.projectWebpack + "/postcss.config.js",
    // stylelintの設定がかなりめんどくさいので、とりあえずはstylelintをfalseにする
    stylelint: false, // enable or disable stylelint | this is only enabled in development env.
    filename: "css/style.css",
    use: "sass", // sass || postcss
    // ^ If you want to change from Sass to PostCSS or PostCSS to Sass then you need to change the
    // styling files which are being imported in "assets/src/js/frontend.js" and "assets/src/js/backend.js".
    // So change "import '../sass/backend.scss'" to "import '../postcss/backend.pcss'" for example
    rules: {
      sass: {
        test: /\.s[ac]ss$/i,
      },
      postcss: {
        test: /\.pcss$/i,
      },
    },
    //プロジェクトで使用していないcssを削除する
    purgeCss: {
      // PurgeCSS is only being activated in production environment
      paths: [
        // Specify content that should be analyzed by PurgeCSS
        __dirname + "/assets/src/js/**/*",
        __dirname + "/templates/**/**/*",
        __dirname + "/template-parts/**/**/*",
        __dirname + "/blocks/**/**/*",
        __dirname + "/*.php",
      ],
    },
  },
  // Source Maps configurations
  projectSourceMaps: {
    // Sourcemaps are nice for debugging but takes lots of time to compile,
    // so we disable this by default and can be enabled when necessary
    enable: false,
    env: "dev", // dev | dev-prod | prod
    // ^ Enabled only for development on default, use "prod" to enable only for production
    // or "dev-prod" to enable it for both production and development
    devtool: "source-map", // type of sourcemap, see more info here: https://webpack.js.org/configuration/devtool/
    // ^ If "source-map" is too slow, then use "cheap-source-map" which struck a good balance between build performance and debuggability.
  },
  // Images configurations for development and production
  projectImages: {
    rules: {
      test: /\.(jpe?g|png|gif|svg|webp|mp4|mov)$/i,
    },
    // Optimization settings
    options: {
      // Lossless optimization with custom option
      // Feel free to experiment with options for better result for you
      // More info here: https://webpack.js.org/plugins/image-minimizer-webpack-plugin/
      plugins: [
        ["gifsicle", { interlaced: true }],
        ["jpegtran", { progressive: true }],
        ["optipng", { optimizationLevel: 5 }],
        [
          "svgo",
          {
            plugins: [{ removeViewBox: false }],
          },
        ],
      ],
    },
  },
};

// Merging the projectFiles & projectPaths objects
const projectOptions = {
  ...projectPaths,
  ...projectFiles,
  projectConfig: {
    // add extra options here
  },
};

// Get the development or production setup based
// on the script from package.json
module.exports = (env) => {
  if (env.NODE_ENV === "production") {
    return require("./webpack/config.production")(projectOptions);
  } else {
    return require("./webpack/config.development")(projectOptions);
  }
};
