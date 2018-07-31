var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var lineChart = null;
var COL = 'red';
var columnChart = null;
var chartData = {
  main: {
    title: '总成交量',
    data: [15, 20, 45, 37, 18, 20, 15, 20, 45, 37, 18, 20],
    categories: ['2012', '2013', '2014', '2015', '2016', '2017', '2012', '2013', '2014', '2015', '2016', '2017']
  },
  sub: [{
    title: '2012年度成交量',
    data: [70, 40, 65, 100, 34, 18],
    categories: ['1', '2', '3', '4', '5', '6']
  }, {
    title: '2013年度成交量',
    data: [55, 30, 45, 36, 56, 13],
    categories: ['1', '2', '3', '4', '5', '6']
  }, {
    title: '2014年度成交量',
    data: [76, 45, 32, 74, 54, 35],
    categories: ['1', '2', '3', '4', '5', '6']
  }, {
    title: '2015年度成交量',
    data: [76, 54, 23, 12, 45, 65],
    categories: ['1', '2', '3', '4', '5', '6']
  }]
};

Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,
    chartTitle: '总成交量',
    isMainChartDisplay: true,
    show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['1', '2', '3', '4', '5', '6'],//下拉列表的数据
    index: 0//选择的下拉列表下标
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
        name: '成交量',
        data: chartData.main.data,
        format: function (val, name) {
          return val.toFixed(2) + '万';
        }
      }]
    });
  },
  touchHandler: function (e) {
    console.log(lineChart.getCurrentDataIndex(e));
    lineChart.showToolTip(e, {
      // background: '#7cb5ec',
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
    var index = columnChart.getCurrentDataIndex(e);
    if (index > -1 && index < chartData.sub.length && this.data.isMainChartDisplay) {
      this.setData({
        chartTitle: chartData.sub[index].title,
        isMainChartDisplay: false
      });
      columnChart.updateData({
        categories: chartData.sub[index].categories,
        series: [{
          name: '成交量',
          data: chartData.sub[index].data,
          format: function (val, name) {
            return val.toFixed(2) + '万';
          }
        }]
      });

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
  createSimulationData: function () {
        var categories = [];
        var data = [];
        for (var i = 0; i < 10; i++) {
            categories.push('2016-' + (i + 1));
            data.push(Math.random()*(20-10)+10);
        }
        // data[4] = null;
        return {
            categories: categories,
            data: data
        }
  },
  updateData: function () {
        var simulationData = this.createSimulationData();
        var series = [{
            name: '成交量1',
            data: simulationData.data,
            format: function (val, name) {
                return val.toFixed(2) + '万';
            }
        }];
        lineChart.updateData({
            categories: simulationData.categories,
            series: series
        });
  },

  onReady: function (e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    columnChart = new wxCharts({
      canvasId: 'columnCanvas',
      type: 'column',
      animation: true,
      categories: chartData.main.categories,
      series: [{
        name: '成交量',
        data: chartData.main.data,
        format: function (val, name) {
          return val.toFixed(2) + '万';
        }
      }],
      yAxis: {
        format: function (val) {
          return val + '万';
        },
        title: 'hello',
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


  onLoad: function (e) {
        var windowWidth = 300;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }
        
        var simulationData = this.createSimulationData();
        lineChart = new wxCharts({
            canvasId: 'lineCanvas',
            type: 'line',
            categories: simulationData.categories,
            animation: true,
            // background: '#f5f5f5',
            series: [{
                name: '成交量1',
                data: simulationData.data,
                format: function (val, name) {
                    return val.toFixed(2) + '万';
                }
            }, {
                name: '成交量2',
                data: [2, 0, 0, 3, null, 4, 0, 0, 2, 0],
                format: function (val, name) {
                    return val.toFixed(2) + '万';
                }
              }, {
                name: '成交量3',
                data: [1, 1, 0, 1, 1,2, 0, 0, 2, 0],
                format: function (val, name) {
                  return val.toFixed(2) + '万';
                }
            }, {
              name: '成交量4',
              data: [2, 2, 0, 1, 1, 2, 0, 0, 2, 0],
              format: function (val, name) {
                return val.toFixed(2) + '万';
              }
              }, {
                name: '成交量5',
                data: [3, 1, 3, 2, 1, 2, 0, 0, 2, 0],
                format: function (val, name) {
                  return val.toFixed(2) + '万';
                }
            }, {
              name: '成交量6',
              data: [1, 3, 2, 1, 1, 1, 0, 0, 2, 0],
              format: function (val, name) {
                return val.toFixed(2) + '万';
              }
              }, {
                name: '成交量7',
                data: [4, 3, 2, 2, 1, 2, 0, 0, 2, 0],
                format: function (val, name) {
                  return val.toFixed(2) + '万';
                }
            }, {
              name: '成交量8',
              data: [2, 4, 0, 2, 1, 2, 0, 0, 2, 0],
              format: function (val, name) {
                return val.toFixed(2) + '万';
              }
              }, {
                name: '成交量9',
                data: [1, 3, 2,3,3, 2, 0, 0, 2, 0],
                format: function (val, name) {
                  return val.toFixed(2) + '万';
                }
            }, {
              name: '成交量10',
              data: [0, 1, 2, 2,3, 2, 0, 0, 2, 0],
              color:COL,
              format: function (val, name) {
                return val.toFixed(2) + '万';
              }
            }
              ],
            xAxis: {
                disableGrid: true
            },
            yAxis: {
                title: '成交金额 (万元)',
                format: function (val) {
                    return val.toFixed(2);
                },
                min: 0
            },
            width: windowWidth,
            height: 300,
            dataLabel: false,
            dataPointShape: true,
            extra: {
                lineStyle: 'straight'
            }
        });
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
  }
});