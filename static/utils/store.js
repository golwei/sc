import conf from './conf.json'
export default {
    // get(p) {
    //     wx.request()
    // }
    getData(e) {
        wx.request({
            url: 'http://47.244.22.141/' + e,
            success: function (res) {
                console.log("request res==>", res)
                wx.setStorageSync(e, res.data)
            }
        })
    },
    getData1(e) {
        wx.request({
            url: 'http://47.52.22.240:8080/admin/' + e + '.json',
            success: function (res) {
                console.log("request res==>", res)
                wx.setStorageSync(e, res.data)
            }
        },

        )
    },
    //get
    loadData(d) {
        console.log('conf.url==>', conf.url)
        wx.request(
            {
                url: conf.url + d + '.json', //仅为示例，并非真实的接口地址
                // url: 'https://api.douban.com/v2/book/1220562', //仅为示例，并非真实的接口地址
                data: {
                    name: 'golwei',
                    password: '654'
                },
                header: {
                    'content-type': 'application/json' // 默认值
                },
                success: function (res) {
                    wx.setStorageSync('d', res.data)
                    // console.log("=request data=>", res)
                }
            }
        )

    }
}