'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    // get(p) {
    //     wx.request()
    // }
    loadData: function loadData(d) {

        wx.request({
            url: 'http://wcqt.site/admin/' + d + '.json', //仅为示例，并非真实的接口地址
            // url: 'https://api.douban.com/v2/book/1220562', //仅为示例，并非真实的接口地址
            data: {
                name: 'golwei',
                password: '654'
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function success(res) {
                // console.log("=request data=>", res)

                wx.setStorage({
                    key: d,
                    data: res.data,
                    success: function success() {
                        console.log(res.data);
                    }
                });
            }
        });
    }
};