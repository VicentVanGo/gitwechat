const app = getApp()
Page({
  data: {
    movies: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      //{ url: 'images/1.jpg' },
      //{ url: 'images/2.jpg' },
      //{ url: 'images/3.jpg' },
      //{ url: 'images/4.jpg' },
      //{ url: 'images/5.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ],
    routers: [
      {
        name: 'Bugzilla',
        url: 'button/index',
        icon: '/icons/work.png',
        code: '10'
      },
      {
        name: 'Bugzilla Search',
        //url: 'index/index',
        url: 'newsearch/search',
        icon: '/icons/search.png',
        code: '11'
      },
      {
        name: 'HPQC',
        url: 'search/search',
        icon: '/icons/happy.png',
        code: '10'
      },
      {
        name: 'P4',
        icon: '/icons/location.png',
        code: '11'
      },
      {
        name: 'Jenking',
        url: '/pages/Course/course',
        icon: '/icons/culture.png',
        code: '10'
      },
      {
        name: 'Install Build',
        icon: '/icons/work.png',
        code: '11'
      },
      {
        name: 'Team',
        url: '/pages/Course/course',
        icon: '/icons/join.png',
        code: '10'
      },
      {
        name: 'Family',
        icon: '/icons/contact.png',
        code: '11'
      },
      {
        name: 'TBD',
        url: '/pages/Course/course',
        icon: '/icons/more.png',
        code: '10'
      }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  },
  onShareAppMessage: function () {
    return {
      title: 'My Project',
      desc: 'Interesting',
      //path: '/page/user?id=123'
    }
  }
})