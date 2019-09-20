 module.exports = {
    devServer : {
        proxy : {
            '/api' : {
                target : 'http://39.97.33.178',
                changeOrigin : true
            }
        }
    }
}
// export default es6的写法
//  module.exports 传统的写法
