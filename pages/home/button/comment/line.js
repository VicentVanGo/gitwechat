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
            console.log('11111111111111111111');
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }
        console.log('2222222222222');
        wx.request({
          url: 'http://10.40.90.26:8000/comment',//换成实际接口地址
          //data: { 'id': 1 },
          success: function (res) {
          //chartData.main.data = res.data.data;
          //chartData.main.data = res.data.category;
            //var getdata = JSON.stringify(res);
            console.log('3333333333333333');
            console.log('id from server is: ' + res['data']);// 控制台显示 1
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
              categories: [1,2,3,4,5,6,7,8,9,10],
              animation: true,
              // background: '#f5f5f5',
              series: [{
                name: '成交量1',
                //data: simulationData.data,
                data: data1,
                color: COL['1'],
                format: function (val, name) {
                  return val.toFixed(2) + '万';
                }
              }, {
                name: '成交量2',
                data: data2,
                color: COL['2'],
                format: function (val, name) {
                  return val.toFixed(2) + '万';
                }
              }, {
                name: '成交量3',
                data: data3,
                color: COL['3'],
                format: function (val, name) {
                  return val.toFixed(2) + '万';
                }
              }, {
                name: '成交量4',
                data: data4,
                color: COL['4'],
                format: function (val, name) {
                  return val.toFixed(2) + '万';
                }
              }, {
                name: '成交量5',
                data: data5,
                color: COL['5'],
                format: function (val, name) {
                  return val.toFixed(2) + '万';
                }
              }, {
                name: '成交量6',
                data: data6,
                color: COL['6'],
                format: function (val, name) {
                  return val.toFixed(2) + '万';
                }
              }, {
                name: '成交量7',
                data: data7,
                color: COL['7'],
                format: function (val, name) {
                  return val.toFixed(2) + '万';
                }
              }, {
                name: '成交量8',
                data: data8,
                color: COL['8'],
                format: function (val, name) {
                  return val.toFixed(2) + '万';
                }
              }, {
                name: '成交量9',
                data: data9,
                color: COL['9'],
                format: function (val, name) {
                  return val.toFixed(2) + '万';
                }
              }, {
                name: '成交量10',
                data: data10,
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
        })
        
    }
});