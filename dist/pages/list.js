"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var app = getApp();
exports.default = Page({
  onLoad: function onLoad(e) {
    this.setData({
      currentIndex: app.globalData.listIndex
    });
    console.log("this.data==>", this.data.currentIndex);
  },
  data: {
    currentIndex: 0,
    // ======================
    category: [{
      ID: 1,
      CreatedAt: "2018-03-24T09:43:58.653880676Z",
      UpdatedAt: "2018-04-11T08:03:45.071631113Z",
      DeletedAt: null,
      Name: "监控"
    }, {
      ID: 2,
      CreatedAt: "2018-03-24T09:44:03.283369139Z",
      UpdatedAt: "2018-09-30T08:48:13.164359153Z",
      DeletedAt: null,
      Name: "智能锁"
    }, {
      ID: 3,
      CreatedAt: "2018-05-31T07:41:40.80627705Z",
      UpdatedAt: "2018-09-30T08:49:41.172357587Z",
      DeletedAt: null,
      Name: "智慧物联"
    }, {
      ID: 4,
      CreatedAt: "2018-09-22T06:24:21.00411001Z",
      UpdatedAt: "2018-09-22T06:24:21.00411001Z",
      DeletedAt: null,
      Name: "智能家居"
    }],
    products: {
      "1": [{
        ID: 1,
        CreatedAt: "2018-03-24T09:45:16.714176272Z",
        UpdatedAt: "2018-03-24T10:03:51.574660155Z",
        DeletedAt: null,
        Name: "海康威视摄像头1",
        Pric: 16.66,
        Description: "",
        Image: {
          FileName: "u=4099636654,405393272&fm=27&gp=0.jpg",
          Url: "/system/products/1/image/u-4099636654-405393272andfm-27andgp-0.20180324105118563595890.jpg"
        },
        Category: {
          ID: 0,
          CreatedAt: "0001-01-01T00:00:00Z",
          UpdatedAt: "0001-01-01T00:00:00Z",
          DeletedAt: null,
          Name: ""
        },
        CategoryID: 1,
        ColorVariations: null
      }, {
        ID: 2,
        CreatedAt: "2018-04-11T08:03:45.072045889Z",
        UpdatedAt: "2018-04-11T08:03:45.072045889Z",
        DeletedAt: null,
        Name: "海康摄像头2",
        Pric: 18.88,
        Description: "",
        Image: {
          FileName: "u=2617125759,3490822508&fm=27&gp=0.jpg",
          Url: "/system/products/2/image/u-2617125759-3490822508andfm-27andgp-0.20180411084518092413001.jpg"
        },
        Category: {
          ID: 0,
          CreatedAt: "0001-01-01T00:00:00Z",
          UpdatedAt: "0001-01-01T00:00:00Z",
          DeletedAt: null,
          Name: ""
        },
        CategoryID: 1,
        ColorVariations: null
      }],
      "2": [{
        ID: 3,
        CreatedAt: "2018-09-30T08:48:13.165991971Z",
        UpdatedAt: "2018-09-30T08:48:13.165991971Z",
        DeletedAt: null,
        Name: "小米智能锁",
        Pric: 88.77,
        Description: "",
        Image: {
          FileName: "u=4093029890,1922949438&fm=27&gp=0.jpg",
          Url: "/system/products/3/image/u-4093029890-1922949438andfm-27andgp-0.20180930081318184769745.jpg"
        },
        Category: {
          ID: 0,
          CreatedAt: "0001-01-01T00:00:00Z",
          UpdatedAt: "0001-01-01T00:00:00Z",
          DeletedAt: null,
          Name: ""
        },
        CategoryID: 2,
        ColorVariations: null
      }],
      "3": [{
        ID: 4,
        CreatedAt: "2018-09-30T08:49:41.172728541Z",
        UpdatedAt: "2018-09-30T08:49:41.172728541Z",
        DeletedAt: null,
        Name: "树莓派4",
        Pric: 12.14,
        Description: "",
        Image: {
          FileName: "u=3225774261,595345895&fm=26&gp=0.jpg",
          Url: "/system/products/4/image/u-3225774261-595345895andfm-26andgp-0.20180930084118173074838.jpg"
        },
        Category: {
          ID: 0,
          CreatedAt: "0001-01-01T00:00:00Z",
          UpdatedAt: "0001-01-01T00:00:00Z",
          DeletedAt: null,
          Name: ""
        },
        CategoryID: 3,
        ColorVariations: null
      }]
    },
    // ======================
    nav_height: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT,
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + "px",
    current: 0,
    tabStyle: {
      color: "#333",
      "width:": "80px"
    },
    activeTabStyle: {
      color: "#ff2a00",
      "border-right": "1px solid #ff2a00"
    },
    tabItems: [{ name: "男装" }, { name: "女装" }, { name: "美妆" }, { name: "配饰" }, { name: "鞋靴" }],
    height: wx.DEFAULT_CONTENT_HEIGHT,
    tabContents: [{
      subCategoryList: [{
        categoryName: "男士羽绒/棉服",
        imageUrl: "https://bfs.biyao.com/group1/M00/1B/83/rBACW1mlMEiAWNITAAAiWsyngD0082.jpg"
      }, {
        categoryName: "男士风衣/大衣",
        imageUrl: "https://bfs.biyao.com/group1/M00/18/76/rBACVFmSkKqAHYBNAAAfdj1aPOI825.jpg"
      }, {
        categoryName: "男士皮衣/棉夹克",
        imageUrl: "https://bfs.biyao.com/group1/M00/15/7B/rBACW1lTWD-APUeLAAAgYMZ9cH4426.jpg"
      }, {
        categoryName: "男士羊绒/毛衫",
        imageUrl: "https://bfs.biyao.com/group1/M00/1D/11/rBACW1nEdiOAfwQUAAAdaKb5jVI059.jpg"
      }, {
        categoryName: "男士衬衫",
        imageUrl: "https://bfs.biyao.com/group1/M00/1D/10/rBACYVnEdjqAXa7NAAAcW-pnhDk339.jpg"
      }, {
        categoryName: "男士针织衫",
        imageUrl: "https://bfs.biyao.com/group1/M00/1D/10/rBACYVnEdhqAdI2cAAAdtV7BASE873.jpg"
      }, {
        categoryName: "男士西服",
        imageUrl: "https://bfs.biyao.com/group1/M00/1D/10/rBACYVnEdp6ASDIYAAAcoXEchKM497.jpg"
      }, {
        categoryName: "男士卫衣",
        imageUrl: "https://bfs.biyao.com/group1/M00/1B/83/rBACW1mlMEiAWNITAAAiWsyngD0082.jpg"
      }, {
        categoryName: "男士马甲",
        imageUrl: "https://bfs.biyao.com/group1/M00/1B/5C/rBACVFnEdn6AeSRuAAAdMuV88TU961.jpg"
      }, {
        categoryName: "男士T桖",
        imageUrl: "https://bfs.biyao.com/group1/M00/1D/11/rBACW1nEdrqAFS0pAAAbGxuAh3s074.jpg"
      }, {
        categoryName: "男士POLO衫",
        imageUrl: "https://bfs.biyao.com/group1/M00/13/BF/rBACVFlTUwaAZDEUAAAXdtIxOTE832.jpg"
      }, {
        categoryName: "男士羽绒/棉服",
        imageUrl: "https://bfs.biyao.com/group1/M00/1B/83/rBACW1mlMEiAWNITAAAiWsyngD0082.jpg"
      }, {
        categoryName: "男士风衣/大衣",
        imageUrl: "https://bfs.biyao.com/group1/M00/18/76/rBACVFmSkKqAHYBNAAAfdj1aPOI825.jpg"
      }, {
        categoryName: "男士皮衣/棉夹克",
        imageUrl: "https://bfs.biyao.com/group1/M00/15/7B/rBACW1lTWD-APUeLAAAgYMZ9cH4426.jpg"
      }, {
        categoryName: "男士羊绒/毛衫",
        imageUrl: "https://bfs.biyao.com/group1/M00/1D/11/rBACW1nEdiOAfwQUAAAdaKb5jVI059.jpg"
      }, {
        categoryName: "男士衬衫",
        imageUrl: "https://bfs.biyao.com/group1/M00/1D/10/rBACYVnEdjqAXa7NAAAcW-pnhDk339.jpg"
      }, {
        categoryName: "男士针织衫",
        imageUrl: "https://bfs.biyao.com/group1/M00/1D/10/rBACYVnEdhqAdI2cAAAdtV7BASE873.jpg"
      }, {
        categoryName: "男士西服",
        imageUrl: "https://bfs.biyao.com/group1/M00/1D/10/rBACYVnEdp6ASDIYAAAcoXEchKM497.jpg"
      }, {
        categoryName: "男士卫衣",
        imageUrl: "https://bfs.biyao.com/group1/M00/1B/83/rBACW1mlMEiAWNITAAAiWsyngD0082.jpg"
      }, {
        categoryName: "男士马甲",
        imageUrl: "https://bfs.biyao.com/group1/M00/1B/5C/rBACVFnEdn6AeSRuAAAdMuV88TU961.jpg"
      }, {
        categoryName: "男士T桖",
        imageUrl: "https://bfs.biyao.com/group1/M00/1D/11/rBACW1nEdrqAFS0pAAAbGxuAh3s074.jpg"
      }, {
        categoryName: "男士POLO衫",
        imageUrl: "https://bfs.biyao.com/group1/M00/13/BF/rBACVFlTUwaAZDEUAAAXdtIxOTE832.jpg"
      }]
    }, {
      subCategoryList: [{
        categoryName: "羽绒服/棉衣",
        imageUrl: "https://bfs.biyao.com/group1/M00/22/75/rBACYVoJXFWAO5cFAAAb2M98n4o855.jpg"
      }, {
        categoryName: "女士风衣/大衣",
        imageUrl: "https://bfs.biyao.com/group1/M00/20/49/rBACW1n5clWAVX2uAAASnuS2XK0400.jpg"
      }, {
        categoryName: "女士针织/羊毛",
        imageUrl: "https://bfs.biyao.com/group1/M00/1E/91/rBACVFn5cmSAEScBAAAeobcsVlI982.jpg"
      }, {
        categoryName: "女士风衣/大衣",
        imageUrl: "https://bfs.biyao.com/group1/M00/1B/5C/rBACVFnEdu6AWR3KAAAWZfdXbn0829.jpg"
      }, {
        categoryName: "女士针织/羊毛",
        imageUrl: "https://bfs.biyao.com/group1/M00/22/75/rBACYVoJXFWAO5cFAAAb2M98n4o855.jpg"
      }, {
        categoryName: "连衣裙",
        imageUrl: "https://bfs.biyao.com/group1/M00/20/49/rBACW1n5cqKAVtWGAAATyCv5qtg488.jpg"
      }, {
        categoryName: "半身裙",
        imageUrl: "https://bfs.biyao.com/group1/M00/1D/10/rBACYVnEd2GAVFVFAAAUGbA2jt0796.jpg"
      }, {
        categoryName: "女式休闲裤",
        imageUrl: "https://bfs.biyao.com/group1/M00/20/49/rBACW1n5cpCAXEiRAAAS6G7GxPc087.jpg"
      }, {
        categoryName: "女士牛仔裤",
        imageUrl: "https://bfs.biyao.com/group1/M00/1E/91/rBACVFn5coaAceDXAAAYKP_2i08331.jpg"
      }, {
        categoryName: "女士短裤",
        imageUrl: "https://bfs.biyao.com/group1/M00/1D/11/rBACW1nEd0CAUNCgAAAS3TdE36o054.jpg"
      }]
    }, {
      subCategoryList: [{
        categoryName: "水/精华/霜",
        imageUrl: "https://bfs.biyao.com/group1/M00/1B/5C/rBACVFnEeRuAORxOAAATl1iWPNY037.jpg"
      }, {
        categoryName: "面膜",
        imageUrl: "https://bfs.biyao.com/group1/M00/15/7B/rBACYVlTZQeAIuPIAAAkVEeSY_w874.jpg"
      }, {
        categoryName: "卸妆",
        imageUrl: "https://bfs.biyao.com/group1/M00/13/C1/rBACVFlTZSOAF4vBAAAPBXoAoOM906.jpg"
      }, {
        categoryName: "男士护肤",
        imageUrl: "https://bfs.biyao.com/group1/M00/15/81/rBACW1lTiWyAPiEPAAAs6qov5NM096.jpg"
      }, {
        categoryName: "底妆",
        imageUrl: "https://bfs.biyao.com/group1/M00/15/7B/rBACYVlTZhKAa2xoAAAl7phK3JY573.jpg"
      }, {
        categoryName: "唇妆",
        imageUrl: "https://bfs.biyao.com/group1/M00/15/7B/rBACYVlTZQeAIuPIAAAkVEeSY_w874.jpg"
      }, {
        categoryName: "眼妆",
        imageUrl: "https://bfs.biyao.com/group1/M00/15/7D/rBACW1lTZriAA_zGAAAmKD1Td5k381.jpg"
      }, {
        categoryName: "香水",
        imageUrl: "https://bfs.biyao.com/group1/M00/13/C2/rBACVFlTZh2Aa8QJAAAePFJ0kf0429.jpg"
      }, {
        categoryName: "美妆工具",
        imageUrl: "https://bfs.biyao.com/group1/M00/13/C2/rBACVFlTazWASZoCAAAkKEeEvFs736.jpg"
      }, {
        categoryName: "美甲",
        imageUrl: "https://bfs.biyao.com/group1/M00/15/7C/rBACYVlTalGAR-L5AAAcsykQ3xs773.jpg"
      }]
    }, {
      subCategoryList: [{
        categoryName: "文胸/套装",
        imageUrl: "https://bfs.biyao.com/group1/M00/15/7D/rBACYVlTdF6AEMX9AAAl_0cr7sE250.jpg"
      }, {
        categoryName: "女士内裤",
        imageUrl: "https://bfs.biyao.com/group1/M00/15/8E/rBACYVlUcvyAeE4cAAAeuvesr3I388.jpg"
      }, {
        categoryName: "男士内裤",
        imageUrl: "https://bfs.biyao.com/group1/M00/13/C3/rBACVFlTdZaAdL_sAAAgIGJyF6E950.jpg"
      }, {
        categoryName: "秋衣秋裤",
        imageUrl: "https://bfs.biyao.com/group1/M00/15/77/rBACVFltpV-AF4qXAAAUm8xPQuY795.jpg"
      }, {
        categoryName: "袜子",
        imageUrl: "https://bfs.biyao.com/group1/M00/13/C3/rBACVFlTdRaAYRN-AAASQHYEvWw312.jpg"
      }, {
        categoryName: "俩裤袜",
        imageUrl: "https://bfs.biyao.com/group1/M00/1E/92/rBACVFn5cuOAOKKDAAAMoaW_ing799.jpg"
      }]
    }, {
      subCategoryList: [{
        categoryName: "女靴",
        imageUrl: "https://bfs.biyao.com/group1/M00/1C/7E/rBACW1m4oLSAW6hxAAAeCjJEIXA902.jpg"
      }, {
        categoryName: "女士雪地靴",
        imageUrl: "https://bfs.biyao.com/group1/M00/20/4A/rBACW1n5dr6ASj8MAAATaEMA3ik329.jpg"
      }, {
        categoryName: "女士单鞋",
        imageUrl: "https://bfs.biyao.com/group1/M00/13/AD/rBACVFlSWpiAY4lJAAAeSzACwl8995.jpg"
      }, {
        categoryName: "女士休闲鞋",
        imageUrl: "https://bfs.biyao.com/group1/M00/15/68/rBACW1lSWniACzrrAAAYINnkU5M044.jpg"
      }, {
        categoryName: "女靴",
        imageUrl: "https://bfs.biyao.com/group1/M00/20/4A/rBACW1n5dr6ASj8MAAATaEMA3ik329.jpg"
      }]
    }],
    tabContentData: []
  },
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },
  handleChange: function handleChange(e) {
    var index = e.detail.index;
    var cid = this.data.category[index].ID;
    // var index = e.detail.index;
    // console.log("id is ==>", this.data.category[index].ID);
    // console.log(e.detail.index);
    if (this.data.products[cid]) {
      this.setData({
        current: index,
        currentProducts: this.data.products[cid]
      });
    } else {
      this.setData({
        current: index,
        currentProducts: []
      });
    }
  },

  onReady: function onReady() {
    this.setData({
      currentProducts: this.data.products[1]
    });
  }
});