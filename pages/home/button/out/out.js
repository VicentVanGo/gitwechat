// pages/home/button/out/out.js
var ID ;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:'' ,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    console.log(option['searchID']);
    var skey = option['searchID'];
    var that = this;
    //ID[0]['url'] = "https://bugzilla.eng.vmware.com/show_bug.cgi?id=" + skey
    ID = "https://bugzilla.eng.vmware.com/show_bug.cgi?id=" + skey;
    that.setData({
      listData: ID
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})