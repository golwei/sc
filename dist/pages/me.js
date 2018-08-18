"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + "px",
    STATUS_BAR_HEIGHT: wx.STATUS_BAR_HEIGHT,
    url: "http://images.uileader.com/20180321/9e5ff8b2-d6a1-4a56-ab63-88bcd00560b0.png",
    items: [],
    alpha: 0,
    className: ""
  },
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },

  onReady: function onReady() {
    var arr = [];
    for (var i = 1; i <= 5; i++) {
      arr.push("\u5217\u8868\u9879\u76EE" + i);
    }
    this.setData({
      items: arr
    });
    console.log(this.data.items);
  }
});