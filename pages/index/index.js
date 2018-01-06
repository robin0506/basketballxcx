//index.js
//获取应用实例
var app = getApp()
Page({
  data: {

    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,

    soccerPics: [
      '../../images/soccer/1.jpg',
      '../../images/soccer/2.jpg',
      '../../images/soccer/3.jpg'
    ],
    players: "球员：",
    playersNum: 5,
    match: " 比赛场次：",
    matchCount: 23,
    title: "重要数据",
  }, 
  onLoad: function () {
    var that = this
    app.getUserInfo(function (userInfo, openid) {
      that.setData({ userInfo: userInfo }),
        that.setData({ openid: openid })
    })
  },
  onShow:function(){
    this.setData({ openid: app.globalData.openid })
  
  },
  
  bindToastTap1V1: function (e) {
    if (app.globalData.openid) {

      var that = this;
      wx.request({
        url: app.globalData.url + "/mini/checkOpenidinMatch.do?openid=" + app.globalData.openid,
        success: function (res) {
          if(res.data=="true"){
            wx.navigateTo({
              url: '../match1v1Ready/match1v1Ready'
            })
          }
          else {

          }
        }
      })  
      wx.showToast({
        title: "请稍等",
        icon: 'loading',
        duration: 5000
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '您没有授权，请前往‘我的’完成授权'
      })

    }
  },
    bindToastTap3V3: function (e) {
      wx.navigateTo({
        url: '../match1v1Start/match1v1Start?matchid=1232131313' 
      })
  },
  //   bindToastTap4V4: function (e) {
  //     wx.navigateTo({
  //       url: '../match1v1/match1v1'
  //     })
  //   
    
})   

