'use strict'
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // webpack4부터 mode가 존재 production development 두개로 환경 셋팅 가능
    // webpack plugin megrge 사용하여 분기 처리 할 수 있다.
    mode: 'development',
    devtool: 'source-map',
    // build 대상 파일
    entry: {
        main: "./src/main.js"
    },
    // output build 결과를 저장하는 경로
    output: {
        filename: "[name].[chunkhash]-bundle.js",
        chunkFilename: "[id].js",
        path: path.resolve(__dirname, "../dist"),
    },
    devServer: {
        // historyApiFallback: true,
        // noInfo: true,
        contentBase: path.resolve(__dirname, "../dist"),
        // open: true,
        // hot: true,
        // inline: true,
        host: 'localhost',
        // host: '10.10.102.78',
        port: '8888'
        // contentBase: path.resolve(__dirname, "../dist")
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node-modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"], {
            root: path.resolve(__dirname, "..")
        }),
        // 엔트리 포인트 중 하나의 모듈의 이름을 변경하거나 새로운 것을 추가하는 경우 생성된 번들은 빌드에서 이름이
        // 변경되지만 index.html에 script는 여전히 이전의 이름을 참조한다.그렇게 때문에 우리는 주기적으로
        // 번들링 된 파일을 index.html에 삽입을 시켜야하는 번거로움이 있다.
        //     이런 불편함을 html - webpack - plugin이 해결해 준다.
        //     html - webpack - plugin은 정의되어있는 기본 template을 기준으로 번들링 시에 새로운 html 파일을
        // 생성해 준다.이때 파일을 생성할 때 번들링된 javascript 파일을 삽입해준다.
        new HtmlWebpackPlugin({
            title: "Jun Yong",
            filename:'index.html', // 생성되는 파일이름
            template: path.join(__dirname, "../example/index.html"),  //템플릿 파일 이름
            // chunks 속성은 잘모름..
            // chunks: ['css', 'index', 'app', 'system', 'monitor']
        })
    ],
    // webpack4 최적화 관련 플러그인이 모두 optimization 속송으로 통합됨
    // commonsChunkPlugin도 사라지고 이쪽으로 통합됨
    optimization: {
        minimize: false, // true / false 예전 webpack3 UgilfyJsPlugin 계승함 대체됨
        // splitChunks가 CommonsChunkPlugin을 계승함 대체됨
        // mode가 production이면 자동으로 minimze랑 splitChunks 자동 true
        splitChunks: {
            cacheGroups: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendors",
                chunks: "all"
            }
        },
        //. concatenateModules 옵션은 ModuleConcatenationPlugin을 계승합니다.
        concatenateModules: true,
    }
}