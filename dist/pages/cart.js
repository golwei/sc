"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// fixedView2.js
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + "px",
    arry: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    isShow: true
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