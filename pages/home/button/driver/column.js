var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
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
        chartTitle: '总成交量',
        isMainChartDisplay: true
    },
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
    onReady: function (e) {
        var windowWidth = 320;
        try {
          var res = wx.getSystemInfoSync();
          windowWidth = res.windowWidth;
        } catch (e) {
          console.error('getSystemInfoSync failed!');
        }
        wx.request({
          url: 'http://localhost:4000/wechat/server/test',//换成实际接口地址
          data: { 'id': 1 },
          success: function (res) {
            //chartData.main.data = res.data.data;
            //chartData.main.data = res.data.category;
            console.log('id from server is: ' + res.data);// 控制台显示 1
          }
        })
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
                //title: 'Bug Num',
                min: 0
            },
            xAxis: {
                disableGrid: false,
                type: 'calibration',
                
            },
            extra: {
                column: {
                    width: 12
                }
            },
            width: windowWidth,
            height: 300,
        });
    }
});