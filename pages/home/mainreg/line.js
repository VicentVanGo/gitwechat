var wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var lineChart = null;
//columnchart
var LIST = [];
var SELECT=[];
var Len;
var timeweek;
var columnChart = null;
//linechart
var categories = [];
var COL = {
  'ningz': 'grey', 'mengc': 'grey', 'yixuanw': 'grey', 'minghuiw': 'grey', 'hhan': 'grey', 'jiangx': 'grey', 'lid': 'grey', 'luwang': 'grey', 'huilinw': 'grey', 'ljingying': 'grey', 'dayuw': 'grey', 'chaofengw': 'grey', 'yex': 'grey', 'bdang': 'grey', 'dpang': 'grey', 'yhu': 'grey'
};
Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换
    show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: [],//下拉列表的数据
    index: 0, //选择的下拉列表下标
    listData: [{ 'folder': ' ', "driver": ' ', 'num': ' '}],
    sumofdata:0,
  },
     // 点击下拉显示框
  
  
  selectTap() {
    this.setData({
      show: !this.data.show
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },
  //touchHandler: function (e) {
        
  //},    
  
  updateData: function () {
    var that = this
    //let CIndex = this.optionTap.Index;
    wx.request({
      url: 'https://znbook.cn/hpqc/mainreg',//换成实际接口地址
      data: { 'cycle': this.data.selectData[this.data.index]},
      success: function (res) {
        console.log('3333333333333333');
        console.log('id from server is: ' + res['data']['date']);// 控制台显示 1
        LIST = [];
        Len = res['data']['num'];
        for (var d = 0; d < res['data']['num']; d++) {
          console.log("111");
          LIST[d] = { "folder": res['data']['my'][d][0], "driver": res['data']['my'][d][1], "num": res['data']['my'][d][3] };
        };
        if (Len > 0) { 
        console.log(LIST);
        that.setData({
          listData: LIST,
        });
        }
        else{
          that.setData({
            listData: [{ 'folder': 'none', "driver": 'none', 'num': 'none' }],
          });
        }
      }

    })
    //COL[this.data.selectData[this.data.index]] = 'red';
    //this.onReady();
  },
  
  onReady: function (e) {

    var that = this
    //let CIndex = this.optionTap.Index;
    wx.request({
      url: 'https://znbook.cn/hpqc/fetch',//换成实际接口地址
      //data: { 'cycle': this.data.selectData[this.data.index] },
      success: function (res) {
        console.log('3333333333333333');
        console.log('id from server is: ' + res['data']['my']);// 控制台显示 1
        SELECT = [];
        //Len = res['data']['num'];
        for (var d = 0; d < res['data']['num']; d++) {
          console.log("111");
          SELECT[d] = res['data']['my'][d];
        };
        if (res['data']['num'] > 0) {
          console.log(SELECT);
          that.setData({
            selectData: SELECT,
          });
        }
        else {
          that.setData({
            selectData: ['none'],
          });
        }
      }

    })
  },


  onLoad: function (e) {
        var windowWidth = 300;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }
        var that = this;

        /** 
         * 获取系统信息 
         */
        wx.getSystemInfo({

          success: function (res) {
            that.setData({
              winWidth: res.windowWidth,
              winHeight: res.windowHeight
            });
          }

        });
  },
     
    /**
     * 滑动切换tab
     */
  bindChange: function (e) {

      var that = this;
      that.setData({ currentTab: e.detail.current });

  },
    /**
     * 点击tab切换
     */
  swichNav: function (e) {

      var that = this;

      if (this.data.currentTab === e.target.dataset.current) {
        return false;
      } else {
        that.setData({
          currentTab: e.target.dataset.current
        })
      }
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
});