const webpack = require('webpack');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MergeJsonWebpackPlugin = require('merge-jsons-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const path = require('path');

const utils = require('./utils.js');

const getTsLoaderRule = env => {
  const rules = [
    {
      loader: 'cache-loader',
      options: {
        cacheDirectory: path.resolve('build/cache-loader')
      }
    },
    {
      loader: 'thread-loader',
      options: {
        // There should be 1 cpu for the fork-ts-checker-webpack-plugin.
        // The value may need to be adjusted (e.g. to 1) in some CI environments,
        // as cpus() may report more cores than what are available to the build.
        workers: require('os').cpus().length - 1
      }
    },
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
        happyPackMode: true
      }
    }
  ];
  if (env === 'development') {
    rules.unshift({
      loader: 'react-hot-loader/webpack'
    });
  }
  return rules;
};

module.exports = options => {
  return {
    cache: options.env !== 'production',
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      modules: ['node_modules'],
      alias: {
        app: utils.root('src/main/webapp/app/'),
        node_modules: path.resolve(__dirname, '../node_modules/')
      }
    },
    module: {
      rules: [
        {
          test: /\.less$/,
          loader: 'less-loader', // compiles Less to CSS
          options: {
            modifyVars: {
              'primary-color': '#1DA57A'
            },
            javascriptEnabled: true
          }
        },
        {
          test: /\.tsx?$/,
          use: getTsLoaderRule(options.env),
          include: [utils.root('./src/main/webapp/app')],
          exclude: [utils.root('node_modules')]
        },
        {
          test: /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/i,
          loader: 'file-loader',
          options: {
            digest: 'hex',
            hash: 'sha512',
            name: 'content/[hash].[ext]'
          }
        },
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          loader: 'source-map-loader'
        },
        {
          test: /\.tsx?$/,
          enforce: 'pre',
          loader: 'tslint-loader',
          exclude: [utils.root('node_modules')]
        }
      ]
    },
    stats: {
      children: false
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
    plugins: [
      new SWPrecacheWebpackPlugin({
        cacheId: 'topwork',
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'service-worker.js',
        minify: true,
        staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
      }),
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true
      }),
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery'
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: `'${options.env}'`,
          BUILD_TIMESTAMP: `'${new Date().getTime()}'`,
          VERSION: `'${utils.parseVersion()}'`,
          DEBUG_INFO_ENABLED: options.env === 'development',
          API_FE_TOPWORK_URL: `'${utils.parseConfigKey(options.server_env, 'API_FE_TOPWORK_URL')}'`,
          FE_TOPWORK_URL: `'${utils.parseConfigKey(options.server_env, 'FE_TOPWORK_URL')}'`,

          FCM_APP_NAME: `'${utils.parseConfigKey(options.server_env, 'FCM_APP_NAME')}'`,
          FCM_APP_ID: `'${utils.parseConfigKey(options.server_env, 'FCM_APP_ID')}'`,
          FCM_API_KEY: `'${utils.parseConfigKey(options.server_env, 'FCM_API_KEY')}'`,
          FCM_PROJECT_ID: `'${utils.parseConfigKey(options.server_env, 'FCM_PROJECT_ID')}'`,
          FCM_MESSAGING_SENDER_ID: `'${utils.parseConfigKey(options.server_env, 'FCM_MESSAGING_SENDER_ID')}'`,
          FCM_USE_PUBLIC_VAPI_KEY: `'${utils.parseConfigKey(options.server_env, 'FCM_USE_PUBLIC_VAPI_KEY')}'`,
          CLOUD_FRONT: `'${utils.parseConfigKey(options.server_env, 'CLOUD_FRONT')}'`,
          SENTRY_ENV: `'${utils.parseConfigKey(options.server_env, 'SENTRY_ENV')}'`,
        }
      }),
      new ForkTsCheckerWebpackPlugin({ tslint: true }),
      new CopyWebpackPlugin([
        { from: './public', to: '' },
        { from: './src/main/webapp/static/', to: 'content' },
        { from: './src/main/webapp/favicon.ico', to: 'favicon.ico' },
        { from: './src/main/webapp/manifest.webapp', to: 'manifest.webapp' },
        { from: './src/main/webapp/robots.txt', to: 'robots.txt' }
      ]),
      new HtmlWebpackPlugin({
        title: 'Caching',
        template: './src/main/webapp/index.html',
        chunksSortMode: 'dependency',
        inject: 'body'
      }),
      new BaseHrefWebpackPlugin({ baseHref: '/' }),
      new MergeJsonWebpackPlugin({
        output: {
          groupBy: [
            { pattern: './src/main/webapp/i18n/en/*.json', fileName: './i18n/en.json' },
            { pattern: './src/main/webapp/i18n/ja/*.json', fileName: './i18n/ja.json' }
          ]
        }
      })
    ]
  };
};
