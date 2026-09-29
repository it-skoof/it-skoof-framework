import {defineConfig, container} from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import path from 'node:path';

const {ModuleFederationPlugin} = container;
const __dirname = import.meta.dirname;

export default defineConfig((env, {mode}) => {

    
    const buildMode = mode ? mode : 'development'
    console.log('WEBPACK IS STARTED: MODE - ', buildMode);

    

    return ({
        mode: buildMode,
        entry: './src/root.tsx',
        module: {
            rules: [
                {
                    test: /\.png$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.scss$/,
                    exclude: /\.module\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.module\.scss$/,
                    use: [
                    'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    namedExport: false,
                                },
                            },
                        },
                        'sass-loader',
                    ],
                },
                {
                    test: /\.tsx?/i,
                    use: 'ts-loader'
                }
            ]
        },
        plugins: [
            
            new HTMLWebpackPlugin({template: path.resolve('./src/index.html'), scriptLoading: 'module'}),
            new ModuleFederationPlugin({
                name: 'webpackHost',
                
                shared: {
                    react: {
                        singleton: true,
                    },
                    'react-dom': {
                        singleton: true,
                    },
                     'react-router-dom': {
                        singleton: true,
                    },
                },
                remotes: {
                   miniQuiz: `promise import("https://miniquizlet.netlify.app/assets/miniQuiz.js")`,
                   typer: `promise import("https://iamtyper.netlify.app/assets/typer.js")`
                },
            }), 
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
            publicPath: '/'
        },
        resolve: {
            extensions: ['.tsx', '.jsx', '.ts', '.js'],
            alias: {
                '@': path.resolve('.', 'src/'),
                '@atoms': path.resolve(__dirname, 'src/atoms/'),

            }
        },
        devServer: {
            port: 8080,
            hot: true,
            historyApiFallback: true,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }
    })
})