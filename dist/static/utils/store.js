'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _confJson = require('./conf.json.js');

var _confJson2 = _interopRequireDefault(_confJson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    // get(p) {
    //     wx.request()
    // }
    getData: function getData(e) {
        wx.request({
            url: 'http://47.244.22.141/' + e,
            success: function success(res) {
                console.log("request res==>", res);
                wx.setStorageSync(e, res.data);
            }
        });
    },
    getData1: function getData1(e) {
        wx.request({
            url: 'http://47.52.22.240:8080/admin/' + e + '.json',
            success: function success(res) {
                console.log("request res==>", res);
                wx.setStorageSync(e, res.data);
            }
        });
    },

    //get
    loadData: function loadData(d) {
        console.log('conf.url==>', _confJson2.default.url);
        wx.request({
            url: _confJson2.default.url + d + '.json', //仅为示例，并非真实的接口地址
            // url: 'https://api.douban.com/v2/book/1220562', //仅为示例，并非真实的接口地址
            data: {
                name: 'golwei',
                password: '654'
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function success(res) {
                wx.setStorageSync('d', res.data);
                // console.log("=request data=>", res)
            }
        });
    }
};