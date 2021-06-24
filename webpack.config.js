
module.exports = {
    entry: './script',
    output: {
        filename: './build.js'
    },
    optimization: {
        minimize: false
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
        ignored: '**/node_modules'
    },
}