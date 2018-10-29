//index.js
//var WxSearch = require('../../../wxSearchView/wxSearchView.js');
var app = getApp();
var LIST=[];
var Len;
var Desp={};
Page({
  data: {
    listData: [{ "drivers": ' ', "submitter": ' ', "desp": ' ' }]
  },

  // 搜索栏
  onLoad: function () {
    var that = this
    wx.request({
      url: 'https://znbook.cn/perforce/day',//换成实际接口地址
      success: function (res) {
        console.log('id from server is: ' + res['data']['date']);
        LIST = [{ "drivers": 'none', "submitter": 'none', "desp": 'none'}];
        Len = res['data']['num'];
        for (var d = 0; d < Len; d++) {
          console.log("111");
          LIST[d] = { "drivers": res['data']['my']['drivers'][d], "submitter": res['data']['my']['submitter'][d], "desp": res['data']['my']['desp'][d] };
        };
        //if (Len >= 8) { Len = 8 };
        //console.log(LIST);
        that.setData({
          listData: LIST,
          //sumofdata: Len,
        });
        //console.log(Len);
      },
    })
  },
  

  gotip: function (e) {
    var desp = e.currentTarget.dataset.id;
    wx.showModal({
      title: 'Description',
      content: desp,
      showCancel:false,
      confirmText:'Ok',
      confirmColor: '#4169E1',
      success: function (res) {
        if (res.confirm) {
          console.log('ok')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })


    /*wx.navigateTo({
      url: '../out/out?searchID=' + id,
      success: function () {

      },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }      //结束后的回调(成功，失败都会执行)
    })*/
  },
  goweek: function () {
    wx.navigateTo({
      url: '../p4week/search',
      success: function () {
      },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }      //结束后的回调(成功，失败都会执行)
    })
  }
})
