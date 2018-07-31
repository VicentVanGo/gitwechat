//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    routers: [
      {
        name: 'Driver',
        url: 'driver/column',
        icon: '/icons/timg.jpg',
        code: '10'
      },
      {
        name: 'Report',
        url: 'report/line',
        icon: '/icons/tongji2.png',
        code: '11'
      },
      {
        name: 'Resolve',
        url: 'resolve/line',
        icon: '/icons/tongji2.png',
        code: '10'
      },
      {
        name: 'Comment',
        url: 'comment/line',
        icon: '/icons/tongji2.png',
        code: '11'
      },
      {
        name: 'Python',
        url: '/pages/Course/course',
        icon: '/icons/mail.png',
        code: '10'
      },
      {
        name: 'JavaScript',
        icon: '/icons/mail.png',
        code: '11'
      }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  }
})
