// pages/player/player.js
var app = getApp()
// 当前页数  
var pageNum = 1;  

Page({
  data: {
    players: [],
    players_length: 0,
    hidden: true,
    scrollTop: 0 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowHeight: res.windowHeight + 65,
          windowWidth: res.windowWidth
        })
      }
    });  
    loadMsgData(that);  
  },
  upper: function () {
    var that = this;
    pageNum = 1;
    that.setData({
      players: [],
      players_length: 0
    });
    loadMsgData(that);  
  },
  lower: function (e) {
    var that = this;
    loadMsgData(that);  
  },

})

// 加载数据  
var loadMsgData = function (that) {
  that.setData({
    hidden: false
  });
  wx.request({
    url: "https://26273731.qcloud.la/players/get_players_all?page=" + pageNum + "&pageSize=6",
    success: function (res) {
       var next_data = res.data;
    that.setData({
      players: that.data.players.concat(next_data),
      players_length: that.data.players_length + next_data.length,
      hidden: true
    });
    pageNum++;
    }
  }) 
  
}
