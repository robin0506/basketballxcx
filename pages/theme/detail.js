// pages/theme/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderInfo:[],
    userlist: [
      {
        avatarUrl: "../../images/avatar1.jpg",
        nickName: "11:30-13:00",
        time: "预订",
        desc: ""
      },
      {
        avatarUrl: "../../images/avatar2.jpg",
        nickName: "15：00-15：30",
        time: "预订",
        desc: ""
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
      wx.request({
      url: "https://26273731.qcloud.la/theme/get_order_table?themeId=" + options.id+"&time=2017-06-03",
        success: function (res) {
          that.setData({
            orderInfo: res.data
          })
        }
      })  
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