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

  
  gop4: function () {
    wx.navigateTo({
      url: '../p4/search',
      success: function () {
      },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }      //结束后的回调(成功，失败都会执行)
    })
  },
  
  gop4week: function () {
    wx.navigateTo({
      url: '../p4week/search',
      success: function () {
      },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }      //结束后的回调(成功，失败都会执行)
    })
  }
})
