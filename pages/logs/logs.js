//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    userlist: [
      {
        avatarUrl: "../../images/avatar1.jpg",
        nickName: "小可爱",
        time: "3天前",
        desc: "很不错"
      },
      {
        avatarUrl: "../../images/avatar2.jpg",
        nickName: "我爱吃好吃的",
        time: "1小时前",
        desc: "非常nice，自己跟着做了一遍，也不错，真的很好吃啊"
      }
    ],
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
