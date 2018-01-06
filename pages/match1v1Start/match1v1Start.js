var app = getApp()
var total_micro_second = 0;
var starMatch = 0;
var totalSecond = 0;
function count_down(that) {

  if (starMatch == 0) {
    return;
  }

    var time = date_format(total_micro_second);
    that.updateTime(time);

  setTimeout(function () {
    total_micro_second += 1000;
    count_down(that);
  }
    , 1000
  )
}
// 时间格式化输出，如03:25:19 86。每10ms都会调用一次
function date_format(micro_second) {
  // 秒数
  var second = Math.floor(micro_second / 1000);
  // 小时位
  var hr = Math.floor(second / 3600);
  // 分钟位
  var min = fill_zero_prefix(Math.floor((second - hr * 3600) / 60));
  // 秒位
  var sec = fill_zero_prefix((second - hr * 3600 - min * 60));// equal to => var sec = second % 60;


  return hr + ":" + min + ":" + sec + " ";
}

function fill_zero_prefix(num) {
  return num < 10 ? "0" + num : num
}

Page({

  /**  
   * 页面的初始数据  
   */
  data: {
    startDisabled: false,
    time: "0:00:00",
    matchid :"",
    result: {
      type: 3,
      matchid: null,
      players: [
        {
          num: 0,
          facetoken: null,
          userid: null,
          power: 0,
          faceurl: null,
          nickname: '',
          score:0,
          shoot:0
        },
        {
          num: 1,
          facetoken: null,
          userid: null,
          power: 0,
          faceurl: null,
          nickname: '',
          score: 0,
          shoot: 0
        },
        {
          num: 2,
          facetoken: null,
          userid: null,
          power: 0,
          faceurl: null,
          nickname: '',
          score: 0,
          shoot: 0
        }
      ]
    }
  },
  onLoad: function (option) {
    console.log(option.matchid)
    this.setData({
      matchid : option.matchid
    })
  },

  start: function (e) {
    starMatch= 1;
    count_down(this);
    this.setData({
      startDisabled: true
    })

  },
  updateTime: function (time) {

    var data = this.data;
    data.time = time;
    this.data = data;
    this.setData({
      time: time,
    })

  },
  
  score1: function (e) {
    this.setData({
      'result.players[1].score': this.data.result.players[1].score+1
    })
    if (this.data.result.players[1].score == 5){
      //比赛结束
      var that = this;
      wx.request({
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        data: { result: JSON.stringify(this.data.result) },
        url: app.globalData.url + "/mini/endmatch.do",
        complete: function (res) {
          if (res.data.success == false) {
            wx.showModal({
              title: '提示',
              content: res.data.message,
              showCancel: false
            })
          }
          else {
            wx.navigateTo({
              url: '../match1v1End/match1v1End?matchid' + res.data.message
            })

          }
        }
      })  
    }
  },

  score2: function (e) {
    this.setData({
      'result.players[2].score': this.data.result.players[2].score + 1

    })
  },

  shoot1: function (e) {
    this.setData({
      'result.players[1].shoot': this.data.result.players[1].shoot + 1

    })
  },

  shoot2: function (e) {
    this.setData({
      'result.players[2].shoot': this.data.result.players[2].shoot + 1

    })
  },

})