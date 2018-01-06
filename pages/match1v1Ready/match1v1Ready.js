// pages/match1v1/match1v1.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    position: 'back',
    hiddenmodalput: true,
    flag : -1,
    matchid: null,
    result :{
      type: 3,
      date : null,
      userid: null,
      players: [
        {
          num: 0,
          facetoken: null,
          userid: null,
          power: 0,
          faceurl: null,
          nickname:''
        },
        {
          num: 1,
          facetoken: null,
          userid: null,
          power: 0,
          faceurl: null,
          nickname: ''
        },
        {
          num: 2,
          facetoken: null,
          userid: null,
          power: 0,
          faceurl: null,
          nickname: ''
        }
      ]
    }
   
  },
  modalinput: function () {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },  
  qiehuan: function (e) {
    if (this.data.position == 'front') {
      this.setData({
        position: 'back'
      })
    } else {
      this.setData({
        position: 'front'
      })
    }
  },
    becomeMarker: function (e) {
      this.setData({
        flag : 0,
        hiddenmodalput: !this.data.hiddenmodalput
      })
    },
    becomePlayer1: function (e) {
      this.setData({
        flag: 1,
        hiddenmodalput: !this.data.hiddenmodalput
      })
    },
    becomePlayer2: function (e) {
      this.setData({
        flag: 2,
        hiddenmodalput: !this.data.hiddenmodalput
      })
    },
    startMatch:function(e){
      this.setData({
        'result.userid': app.globalData.openid
      })
      var that = this;
      wx.request({
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        data: { result: JSON.stringify(this.data.result) },
        url: app.globalData.url + "/mini/startmatch.do",
        complete: function (res) {
          if (res.data.success == false) {
            wx.showModal({
              title: '提示',
              content: res.data.message
            })
          }
          else {
            wx.navigateTo({
              url: '../match1v1Start/match1v1Start?matchid' + res.data.message
            })

          }
        }
      })  
    },
    takePhoto() {
      const ctx = wx.createCameraContext()
      ctx.takePhoto({
        quality: 'normal',
        success: (res) => {
          var url = ""
          if (this.data.flag == 0) {
            url = app.globalData.url+ "/mini/becomeScorer.do";
          }
          else{
            url = app.globalData.url +"/mini/becomePlayer.do";
          }
          var that = this;
          wx.uploadFile({
            url: url,
            filePath: res.tempImagePath,
            name: 'img',
            header: {
              "Content-Type": "multipart/form-data"
            },
            formData:
            {
              type: 3 
            },
            success: function (res) {
              var jsonData = JSON.parse(res.data);
              if(jsonData.error == ""| jsonData.error==null){
                if (that.data.flag == 0){
                that.setData(
                  {
                    'result.players[0].power': jsonData.power,
                    'result.players[0].faceurl': jsonData.faceurl,
                    'result.players[0].userid': jsonData.userid,
                    'result.players[0].facetoken': jsonData.facetoken,
                    'result.players[0].nickname': jsonData.nickname,
                    hiddenmodalput: true  
                  }
                );
                } else if (that.data.flag == 1) {
                  that.setData(
                    {
                      'result.players[1].power': jsonData.power,
                      'result.players[1].faceurl': jsonData.faceurl,
                      'result.players[1].userid': jsonData.userid,
                      'result.players[1].facetoken': jsonData.facetoken,
                      'result.players[1].nickname': jsonData.nickname,
                      hiddenmodalput: true  
                    }
                  );
                }else if (that.data.flag == 2) {
                  that.setData(
                    {
                      'result.players[2].power': jsonData.power,
                      'result.players[2].faceurl': jsonData.faceurl,
                      'result.players[2].userid': jsonData.userid,
                      'result.players[2].facetoken': jsonData.facetoken,
                      'result.players[2].nickname': jsonData.nickname,
                      hiddenmodalput: true  
                    }
                  );
                }
              }
              else{
                wx.showToast({
                  title: jsonData.error,
                  icon: 'loading',
                  duration: 700
                })
              }
            },
            fail: function (res) {
            }
          })
        }
      })
    },
    error(e) {
      console.log(e.detail)
    },
  // becomeMarker: function () {
  //   var _this = this;
  //   wx.chooseImage({
  //     count: 1, // 默认9  
  //     sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有  
  //     sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有  
  //     success: function (res) {
  //       // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
  //       _this.setData({
  //         tempFilePaths: res.tempFilePaths
  //       })
  //     }
  //   })
  // }
})