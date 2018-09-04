//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    routers: [
      {
        //name: 'DriverSR',
        url: 'driver/column',
        icon: '/icons/dsr.png',
        code: '10',
      },
      {
        //name: 'resolve',
        url: 'resolve/line',
        icon: '/icons/reso.png',
        code: '11',
      },
      {
        //name: 'DriverPR',
        url: 'lastweek/line',
        icon: '/icons/dpr.png',
        code: '10'
      },
      {
        //name: 'Comment',
        url: 'comment/line',
        icon: '/icons/comm.png',
        code: '11'
      },
      {
        //name: 'NoGoBug',
        url: 'nogo/search',
        icon: '/icons/nogo.png',
        code: '10'
      },
      {
        //name: 'Report',
        url: 'report/line',
        icon: '/icons/repo.png',
        code: '11'
      }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  }
})
