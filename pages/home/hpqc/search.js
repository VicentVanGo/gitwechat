//index.js
//var WxSearch = require('../../../wxSearchView/wxSearchView.js');
var app = getApp();
var LIST=[];
var Len;
var Desp={};
Page({
  data: {
  },

  // 搜索栏
  onLoad: function () {
  },

  mainnew: function () {
    wx.navigateTo({
      url: '../mainnew/line',
      success: function () {
      },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }      //结束后的回调(成功，失败都会执行)
    })  
  },
  mainreg: function () {
    wx.navigateTo({
      url: '../mainreg/line',
      success: function () {
      },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }      //结束后的回调(成功，失败都会执行)
    })
  },
  upnew: function () {
    wx.navigateTo({
      url: '../upnew/line',
      success: function () {
      },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }      //结束后的回调(成功，失败都会执行)
    })
  },
  upreg: function () {
    wx.navigateTo({
      url: '../upreg/line',
      success: function () {
      },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }      //结束后的回调(成功，失败都会执行)
    })
  },
  productionreg: function () {
    wx.navigateTo({
      url: '../productionreg/line',
      success: function () {
      },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }      //结束后的回调(成功，失败都会执行)
    })
  }
})
