//app.js
App({
  onLaunch: function() {
    
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.openid) {
      typeof cb == "function" && cb(this.globalData.userInfo, that.globalData.openid)
    } else {
      //调用登录接口
      wx.login({
        success: function (r) {
          var code = r.code;
          wx.getUserInfo({
            success: function (res) {

              wx.request({
                url: 'https://9a5f4bb2.ngrok.io/decodeUserInfo.do',//自己的服务接口地址
                method: 'post',
                header: {
                  'content-type': 'application/x-www-form-urlencoded'
                },
                data: { encryptedData: res.encryptedData, iv: res.iv, code: code, userInfo: res.rawData },
                success: function (data) {

                  //4.解密成功后 获取自己服务器返回的结果
                  if (data.data.status == 1) {
                    that.globalData.userInfo = res.userInfo
                    that.globalData.openid = data.data.id
                    typeof cb == "function" && cb(that.globalData.userInfo, that.globalData.openid)
                  } else {
                    console.log('解密失败')
                  }

                },
                fail: function () {
                  console.log('系统错误')
                }
              })


            }, fail: function () {
              console.log('拒绝授权')
            }
          })
        }
      })
    }
  },

  globalData: {
    userInfo: null,
    openid: null,
    url:'https://9a5f4bb2.ngrok.io'
  },

})
