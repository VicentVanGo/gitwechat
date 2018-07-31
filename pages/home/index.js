const app = getApp()
Page({
  data: {
    movies: [
      //{ url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'images/mail.png' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ],
    routers: [
      {
        name: 'Bugzilla',
        url: 'button/index',
        icon: '/icons/tongji2.png',
        code: '10'
      },
      {
        name: 'Team',
        url: 'index/index',
        icon: '/icons/team1.png',
        code: '11'
      },
      {
        name: 'Happy Time',
        url: '/pages/Course/course',
        icon: '/icons/happy.png',
        code: '10'
      },
      {
        name: 'Location',
        icon: '/icons/location.png',
        code: '11'
      },
      {
        name: 'Company Culture',
        url: '/pages/Course/course',
        icon: '/icons/culture.png',
        code: '10'
      },
      {
        name: 'Work Time',
        icon: '/icons/work.png',
        code: '11'
      },
      {
        name: 'Join us',
        url: '/pages/Course/course',
        icon: '/icons/join.png',
        code: '10'
      },
      {
        name: 'Contact us',
        icon: '/icons/contact.png',
        code: '11'
      },
      {
        name: 'See More',
        url: '/pages/Course/course',
        icon: '/icons/more.png',
        code: '10'
      }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  }
})