"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = require("../static/utils/store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = getApp();
exports.default = Page({
  golist: function golist(e) {
    // console.log("golist==>", e.currentTarget.dataset.id);
    app.globalData.listIndex = e.currentTarget.dataset.id;
    console.log("global==>", app.globalData.listIndex);
    // app.globalData.listIndex
    wx.switchTab({
      url: "./list"
    });
  },
  handleChange: function handleChange(e) {
    console.log(e);
    wx.showToast({
      title: "\u5207\u6362\u5230\u7B2C" + (index + 1) + "\u9879"
    });
  },
  handleAnimationfinish: function handleAnimationfinish(index) {
    console.log("handleAnimationfinish", index);
  },


  swiperChange: function swiperChange(e) {
    console.log(e);
    this.setData({
      swiperCurrent: e.detail.current
    });
  },
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },

  onLoad: function onLoad() {
    var this_ = this;
    var e = "swipers";
    wx.request({
      url: "https://wcqt.site/" + e,
      success: function success(res) {
        this_.setData({ swipers: res.data });
        wx.setStorageSync(e, res.data);
      }
    });
    wx.request({
      url: "https://wcqt.site/" + "grids",
      success: function success(res) {
        this_.setData({ grids: res.data });
        wx.setStorageSync("grids", res.data);
      }
    });

    // store.getData("swipers");
    // store.getData("grids");
  },
  data: {
    swipers: [],
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + "px",
    items: [{
      src: "http://images.uileader.com/20171103/5906a28c-0f12-4b71-8df2-98791d8716f6.jpg",
      title: "放肆玩乐，轻巧办公"
    }, {
      src: "http://images.uileader.com/20171103/34795a1c-1365-4256-b9c1-6fb4af1de3da.jpg",
      title: "高温保护，一路驰骋"
    }, {
      src: "http://images.uileader.com/20171103/926a6fdc-80f6-4244-8354-860627c88115.jpg",
      title: "七夕好货，独家礼赠"
    }],
    items2: [{
      title: "Glow",
      score: 9.7,
      src: "http://images.uileader.com/20171103/5c7dfdc3-c6ed-4968-82f7-4d55c191dead.jpg"
    }, {
      title: "Got ",
      score: 7.8,
      src: "http://images.uileader.com/20171103/dd760606-ab0f-45b2-a030-bab65e0b2a56.jpg"
    }, {
      title: "MISS SLOANE",
      score: 8.9,
      src: "http://images.uileader.com/20171103/14feebf0-3061-4681-bb45-fa27d76af891.jpg"
    }, {
      title: "gifted",
      score: 8.8,
      src: "http://images.uileader.com/20171103/7d89142f-b88d-4001-8196-7fd6834c2630.jpg"
    }, {
      title: "BORN LEADER",
      score: 9.2,
      src: "http://images.uileader.com/20171103/5fce28ba-fd02-48cb-a1c2-ce0ff3801844.jpg"
    }, {
      title: "Big Little Lies",
      score: 7.1,
      src: "http://images.uileader.com/20171103/2cdb945d-349d-4d19-8347-629675adde76.jpg"
    }, {
      title: "MANCHESTER SEA",
      score: 9.7,
      src: "http://images.uileader.com/20171103/727a3953-fafb-44e7-8fd8-92e84e11442f.jpg"
    }, {
      title: "金刚",
      score: 8.8,
      src: "http://images.uileader.com/20171103/4ac53f4c-1e62-40ce-87d9-2b7638cf00be.jpg"
    }, {
      title: "THE CIRCLE",
      score: 8.3,
      src: "http://images.uileader.com/20171103/b13d8fbd-bb0e-4510-b680-4a559b79407c.jpg"
    }, {
      title: "UNITED KINDOM",
      score: 8.6,
      src: "http://images.uileader.com/20171103/f5d59af6-c4af-4faa-b36a-3473b78a7612.jpg"
    }, {
      title: "UNITED KINDOM",
      score: 8.6,
      src: "http://images.uileader.com/20171103/aa1b5858-8d6d-4e8b-9723-87fd802c78d9.jpg"
    }, {
      title: "UNITED KINDOM",
      score: 9.3,
      src: "http://images.uileader.com/20171103/6439465c-bac6-4d4f-bfd2-4376d0465b95.jpg"
    }, {
      title: "UNITED KINDOM",
      score: 9.6,
      src: "http://images.uileader.com/20171103/9e65711d-c1dc-450f-878a-fab40bd09b55.jpg"
    }],
    items3: [],
    swiperCurrent: 0,
    items4: [{
      src: "http://images.uileader.com/20171110/e5b64484-b5e0-472a-bf52-ac95fb5685d3.jpg",
      title: "放肆玩乐，轻巧办公"
    }, {
      src: "http://images.uileader.com/20171110/e33376a8-c599-42e5-87ed-84aec360a61d.jpg",
      title: "高温保护，一路驰骋"
    }, {
      src: "http://images.uileader.com/20171110/37cc4a4e-a253-4fcd-a4f6-d9710e8f63e8.jpg",
      title: "七夕好货，独家礼赠"
    }]
  }
});