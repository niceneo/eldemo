// mock 动态创建数据，在json-server启动是，指定此db.js文件即可

var Mock = require('mockjs')

module.exports =  function() {
    return {
        user: Mock.mock({
            'name':'@cname',
            'age|18-25': 22,
            'sex': 'girl'
        }),
        userlist: Mock.mock({
            'name':'@cname',
            'age|18-26': 26,
            'sex': 'boy'
        }),
        userinfo: Mock.mock({
            'name': '@cname',
            'cname|min-max': 'string'
        })
    }
}