"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// fixedView2.js
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + "px",
    arry: [],
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