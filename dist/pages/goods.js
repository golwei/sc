"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  onLoad: function onLoad(e) {
    console.log(e);
    var this_ = this;
    wx.request({
      url: "https://wcqt.site/admin/products/" + e.id + ".json",
      success: function success(res) {
        this_.setData({ product: res.data });
        console.log(res);
      }
    });
  },
  data: {}
});