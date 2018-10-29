var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var lineChart = null;
//columnchart
var LIST = [];
var Len;
var timeweek;
var columnChart = null;
var chartData = {
  main: {
    title: 'Report Bug Num',
    data: [],
    categories: ['ningz', 'mengc', 'yixuanw', 'minghuiw', 'hhan',
      'jiangx', 'lid', 'luwang', 'huilinw', 'ljingying',
      'dayuw', 'chaofengw', 'yex', 'bdang', 'dpang',
      'yhu']
  },
};
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
    currentTab: 0,
    secondtab:'...',
    chartTitle: 'Report Bug Num',
    isMainChartDisplay: true,
    show: true,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['ningz', 'mengc', 'yixuanw', 'minghuiw', 'hhan',
      'jiangx', 'lid', 'luwang', 'huilinw', 'ljingying',
      'dayuw', 'chaofengw', 'yex', 'bdang', 'dpang',
      'yhu'],//下拉列表的数据
    index: 16, //选择的下拉列表下标
    listData: [{ 'bugid': 0, "summary":  0 }],
    sumofdata:0,
  },
     // 点击下拉显示框
  
  backToMainChart: function () {
    this.setData({
      chartTitle: chartData.main.title,
      isMainChartDisplay: true
    });
    columnChart.updateData({
      categories: chartData.main.categories,
      series: [{
        name: 'resolve num',
        data: chartData.main.data,
        format: function (val, name) {
          return val.toFixed(0);
        }
      }]
    });
  },
  touchHandler1: function (e) {
    console.log(lineChart.getCurrentDataIndex(e));
    lineChart.showToolTip(e, {
      // background: '#7cb5ec',
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },
  touchHandler: function (e) {
    var index = columnChart.getCurrentDataIndex(e);
    if (index > -1 && index < chartData.main.categories.length && this.data.isMainChartDisplay) {
      var skey = chartData.main.categories[index];
      var that = this
      wx.request({
        url: 'https://znbook.cn/info/repo',//换成实际接口地址
        data: { 'keyname': skey },
        success: function (res) {
          console.log('id from server is: ' + res['data']['num']);
          console.log('id from server is: ' + res['data']['my']);
          LIST=[];
          Len = res['data']['num'];
          for (var d = 0; d < res['data']['num']; d++) {
            //list[d]["bugid"]=res['data']['my'][d][0];
            //list[d]["summary"] = res['data']['my'][d][1];
            console.log("111");
            LIST[d] = { "bugid": res['data']['my'][d][0], "summary": res['data']['my'][d][1] };
          };
          if (Len >= 8) { Len = 8 };
          //console.log(LIST);
          that.setData({
            listData: LIST,
            secondtab: skey,
            currentTab: 1,
            sumofdata: Len,
          });
        },
      })
      
    }
  },
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

    //let CIndex = this.optionTap.Index;
    for (var i = 0; i < 16; i++) {
      if (i == this.data.index) {
        COL[this.data.selectData[this.data.index]] = 'red';
      }
      else {
        COL[this.data.selectData[i]] = 'grey';
      }

    }
    //COL[this.data.selectData[this.data.index]] = 'red';
    this.onReady();


  },

  onReady: function (e) {

    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    wx.request({
      url: 'https://znbook.cn/report',//换成实际接口地址
      //data: { 'id': 1 },
      success: function (res) {
        //chartData.main.data = res.data.data;
        //chartData.main.data = res.data.category;
        //var getdata = JSON.stringify(res);
        console.log('3333333333333333');
        console.log('id from server is: ' + res['data']);// 控制台显示 1
        var categories = res['data']['day'];
        var data1 = res['data']['y01'];
        var data2 = res['data']['y02'];
        var data3 = res['data']['y03'];
        var data4 = res['data']['y04'];
        var data5 = res['data']['y05'];
        var data6 = res['data']['y06'];
        var data7 = res['data']['y07'];
        var data8 = res['data']['y08'];
        var data9 = res['data']['y09'];
        var data10 = res['data']['y10'];
        var data11 = res['data']['y11'];
        var data12 = res['data']['y12'];
        var data13 = res['data']['y13'];
        var data14 = res['data']['y14'];
        var data15 = res['data']['y15'];
        var data16 = res['data']['y16'];
        //var simulationData = this.createSimulationData();
        lineChart = new wxCharts({
          canvasId: 'lineCanvas',
          type: 'line',
          categories: categories,
          animation: true,
          // background: '#f5f5f5',
          series: [{
            name: 'ningz',
            //data: simulationData.data,
            data: data1,
            color: COL['ningz'],
            format: function (val, name) {
              return val.toFixed(0);
            }
          }, {
            name: 'mengc',
            data: data2,
            color: COL['mengc'],
            format: function (val, name) {
              return val.toFixed(0);
            }
          }, {
            name: 'yixuanw',
            data: data3,
            color: COL['yixuanw'],
            format: function (val, name) {
              return val.toFixed(0);
            }
          }, {
            name: 'minghuiw',
            data: data4,
            color: COL['minghuiw'],
            format: function (val, name) {
              return val.toFixed(0);
            }
          }, {
            name: 'hhan',
            data: data5,
            color: COL['hhan'],
            format: function (val, name) {
              return val.toFixed(0);
            }
          }, {
            name: 'jiangx',
            data: data6,
            color: COL['jiangx'],
            format: function (val, name) {
              return val.toFixed(0);
            }
          }, {
            name: 'lid',
            data: data7,
            color: COL['lid'],
            format: function (val, name) {
              return val.toFixed(0);
            }
          }, {
            name: 'luwang',
            data: data8,
            color: COL['luwang'],
            format: function (val, name) {
              return val.toFixed(0);
            }
          }, {
            name: 'huilinw',
            data: data9,
            color: COL['huilinw'],
            format: function (val, name) {
              return val.toFixed(0);
            }
          }, {
            name: 'ljingying',
            data: data10,
            color: COL['ljingying'],
            //color:COL,
            format: function (val, name) {
              return val.toFixed(0);
            }
            }, {
              name: 'dayuw',
              data: data11,
              color: COL['dayuw'],
              //color:COL,
              format: function (val, name) {
                return val.toFixed(0);
              }
            }, {
            name: 'chaofengw',
            data: data12,
            color: COL['chaofengw'],
            //color:COL,
            format: function (val, name) {
              return val.toFixed(0);
            }
          }, {
            name: 'yex',
            data: data13,
            color: COL['yex'],
            //color:COL,
            format: function (val, name) {
              return val.toFixed(0);
            }
          }, {
            name: 'bdang',
            data: data14,
            color: COL['bdang'],
            //color:COL,
            format: function (val, name) {
              return val.toFixed(0);
            }
          }, {
            name: 'dpang',
            data: data15,
            color: COL['dpang'],
            //color:COL,
            format: function (val, name) {
              return val.toFixed(0);
            }
          }, {
            name: 'yhu',
            data: data16,
            color: COL['yhu'],
            //color:COL,
            format: function (val, name) {
              return val.toFixed(0);
            }
          }
          ],
          xAxis: {
            disableGrid: true
          },
          yAxis: {
            title: 'Bug Num',
            format: function (val) {
              return val.toFixed(0);
            },
            min: 0
          },
          width: windowWidth,
          height: 250,
          dataLabel: false,
          dataPointShape: true,
          extra: {
            lineStyle: 'straight'
          }
        });
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
    wx.request({
      url: 'https://znbook.cn/week/rep',//换成实际接口地址
      //data: { 'id': 1 },
      success: function (res) {
        chartData.main.data = res['data']['comdd'];
        timeweek = res['data']['comd'];
        columnChart = new wxCharts({
          canvasId: 'columnCanvas',
          type: 'column',
          animation: true,
          categories: chartData.main.categories,
          series: [{
            name: timeweek,
            data: chartData.main.data,
            format: function (val, name) {
              return val.toFixed(0);
            }
          }],
          yAxis: {
            format: function (val) {
              return val;
            },
            //title: 'comment num',
            min: 0
          },
          xAxis: {
            disableGrid: false,
            type: 'calibration'
          },
          extra: {
            column: {
              width: 12
            }
          },
          width: windowWidth,
          height: 300,
        });
      },
    })
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