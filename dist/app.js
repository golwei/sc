"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _system = require("./static/utils/system.js");

var _system2 = _interopRequireDefault(_system);

var _store = require("./static/utils/store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = App({
  globalData: {},
  onLaunch: function onLaunch() {
    _system2.default.attachInfo();
    _store2.default.loadData();
  },
  onShow: function onShow() {},
  onHide: function onHide() {}
});