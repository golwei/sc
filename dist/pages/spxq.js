"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// fixedView2.js
exports.default = Page({
  subtraction: function subtraction(e) {
    console.log(e);
    var val = e.detail.toString();
    console.log(val);
    wx.showToast({ title: val, icon: "none" });
  },
  addition: function addition(e) {
    console.log(e);
    var val = e.detail.toString();
    console.log(val);
    this.setData({ num: e.detail });
    wx.showToast({ title: val, icon: "none" });
    console.log(this.data.num);
  },

  data: {
    num: 0,
    goods01: {
      Category: "监控",
      ColorVariations: [{
        Color: "红",
        ID: 1,
        Name: "",
        SizeVariations: [{
          ID: 1,
          Name: "",
          Num: 0,
          Size: "M"
        }, {
          ID: 2,
          Name: "",
          Num: 0,
          Size: "S"
        }]
      }],
      Description: "高清/夜视黑光摄像机",
      ID: 1,
      Image: "/system/products/1/image/u-4099636654-405393272andfm-27andgp-0.20180324105118563595890.jpg",
      Name: "海康威视摄像头1",
      Pric: 16.66
    },
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + "px",
    arry: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    isShow: false
  },
  onLoad: function onLoad(e) {
    var this_ = this;
    wx.request({
      url: "https://wcqt.site/admin/products/" + e.id + ".json",
      success: function success(res) {
        this_.setData({ product: res.data });
        console.log(res);
      }
    });
  },
  commit: function commit(e) {
    console.log(e);
    wx.switchTab({
      url: "index"
    });
  },
  show: function show() {
    this.setData({
      isShow: false
    });
  },
  navigateBack: function navigateBack() {
    wx.navigateBack();
  }
});