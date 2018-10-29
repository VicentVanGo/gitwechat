//index.js
//var WxSearch = require('../../../wxSearchView/wxSearchView.js');
var app = getApp();
var LIST=[];
var Len;
Page({
  data: {
  },

  // 搜索栏
  onLoad: function () {
    var that = this
    wx.request({
      url: 'https://znbook.cn/nogo',//换成实际接口地址
      //data: { 'keyname': skey },
      success: function (res) {
        console.log('id from server is: ' + res['data']['num']);
        console.log('id from server is: ' + res['data']['my']);
        LIST = [{ "bugid": 'none', "summary": 'none', "driver": 'none', "color": 'none' }];
        Len = res['data']['num'];
        for (var d = 0; d < res['data']['num']; d++) {
          //list[d]["bugid"]=res['data']['my'][d][0];
          //list[d]["summary"] = res['data']['my'][d][1];
          console.log("111");

          LIST[d] = { "bugid": res['data']['my'][d][0], "summary": res['data']['my'][d][1] };
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

  goBaidu: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../out/out?searchID=' + id,
      success: function () {

      },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }      //结束后的回调(成功，失败都会执行)
    })
  },
})
