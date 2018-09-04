//index.js
//var WxSearch = require('../../wxSearchView/wxSearchView.js');
const app = getApp()
var LIST=[];
Page({
  data: {
    listData: [{}]
  },
  onLoad: function (option) {
    console.log(option['searchValue']);
    var skey = option['searchValue'];
    var that = this
    wx.request({
      url: 'http://123.206.68.186:443/nogo',//换成实际接口地址
      data: { 'keyname': skey },
      success: function (res) {
        console.log('id from server is: ' + res['data']['num']);
        LIST=[];
        for (var d = 0; d < res['data']['num']; d++) {
          //list[d]["bugid"]=res['data']['my'][d][0];
          //list[d]["summary"] = res['data']['my'][d][1];
          console.log("111");
          LIST[d] = { "bugid": res['data']['my'][d][0], "summary": res['data']['my'][d][1] };
        }
        //console.log(LIST);
        that.setData({
          listData: LIST
        });
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
  updatedata(){
    
    console.log(this.data.listData);
  }
})