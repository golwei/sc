export default {
    // get(p) {
    //     wx.request()
    // }
    loadData() {
        wx.request(
            {
                url: 'http://wcqt.site/admin/grids.json', //仅为示例，并非真实的接口地址
                // url: 'https://api.douban.com/v2/book/1220562', //仅为示例，并非真实的接口地址
                data: {
                    name: 'golwei',
                    password: '654'
                },
                header: {
                    'content-type': 'application/json' // 默认值
                },
                success: function (res) {
                    // console.log("=request data=>", res)

                    wx.setStorage({
                        key: 'grids',
                        data: res.data,
                        success: function () {
                        }
                    })
                    // console.log(res.data)
                }
            }
        )

    }
}