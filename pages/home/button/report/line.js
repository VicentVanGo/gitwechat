var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var lineChart = null;
var COL = { '1': 'grey', '2': 'grey', '3': 'grey', '4': 'grey', '5': 'grey', '6': 'grey', '7': 'grey', '8': 'grey', '9': 'grey', '10': 'grey'};
Page({
  data: {
    show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],//下拉列表的数据
    index: 0//选择的下拉列表下标
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
    return Index;
  },
    touchHandler: function (e) {
        console.log(lineChart.getCurrentDataIndex(e));
        lineChart.showToolTip(e, {
            // background: '#7cb5ec',
            format: function (item, category) {
                return category + ' ' + item.name + ':' + item.data 
            }
        });
    },    
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
      
        //let CIndex = this.optionTap.Index;
      for (var i = 0; i < 16; i++) {
        if (i == this.data.index) {
          COL[this.data.selectData[this.data.index]] = 'red';
        }
        else{
          COL[this.data.selectData[i]] = 'grey';
        }
          
      }
        //COL[this.data.selectData[this.data.index]] = 'red';
        this.onLoad();
        
        
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
                color:COL['1'],
                format: function (val, name) {
                    return val.toFixed(2) + '万';
                }
            }, {
                name: '成交量2',
                data: [2, 0, 0, 3, null, 4, 0, 0, 2, 0],
                color: COL['2'],
                format: function (val, name) {
                    return val.toFixed(2) + '万';
                }
              }, {
                name: '成交量3',
                data: [5, 6, 6, 6, 6,2, 0, 0, 2, 0],
                color: COL['3'],
                format: function (val, name) {
                  return val.toFixed(2) + '万';
                }
            }, {
              name: '成交量4',
              data: [2, 2, 0, 1, 1, 2, 0, 0, 2, 0],
              color: COL['4'],
              format: function (val, name) {
                return val.toFixed(2) + '万';
              }
              }, {
                name: '成交量5',
                data: [3, 1, 3, 2, 1, 2, 0, 0, 2, 0],
                color: COL['5'],
                format: function (val, name) {
                  return val.toFixed(2) + '万';
                }
            }, {
              name: '成交量6',
              data: [1, 3, 2, 1, 1, 1, 0, 0, 2, 0],
              color: COL['6'],
              format: function (val, name) {
                return val.toFixed(2) + '万';
              }
              }, {
                name: '成交量7',
                data: [4, 3, 2, 2, 1, 2, 0, 0, 2, 0],
                color: COL['7'],
                format: function (val, name) {
                  return val.toFixed(2) + '万';
                }
            }, {
              name: '成交量8',
              data: [2, 4, 0, 2, 1, 2, 0, 0, 2, 0],
              color: COL['8'],
              format: function (val, name) {
                return val.toFixed(2) + '万';
              }
              }, {
                name: '成交量9',
                data: [1, 3, 2,3,3, 2, 0, 0, 2, 0],
                color: COL['9'],
                format: function (val, name) {
                  return val.toFixed(2) + '万';
                }
            }, {
              name: '成交量10',
              data: [0, 1, 2, 2,3, 2, 0, 0, 2, 0],
              color: COL['10'],
              //color:COL,
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
    }
});