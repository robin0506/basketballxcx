//index.js
//获取应用实例
var app = getApp()
var myData = require('../../utils/data')
var util = require('../../utils/util')
function isEmptyObject(e) {
  var t;
  for (t in e)
    return !1;
  return !0
}

Page({
  // 页面初始数据
  data: {
    userInfo: {},
    addrDate: util.replacePhone(myData.userData().addrs, true)
  },
  onLoad: function () {
    // var that = this
    // app.getUserInfo(function (userInfo, openid) {
    //   that.setData({ userInfo: userInfo }),
    //     that.setData({ openid: openid })
    // })
  },
  onShow : function(){
    var that = this;
    // 判断是否是第一次授权，非第一次授权且授权失败则进行提醒
    wx.getSetting({
      success: function success(res) {
        console.log(res.authSetting);
        var authSetting = res.authSetting;
        if (isEmptyObject(authSetting)) {
          console.log('首次授权');
        } else {
          console.log('不是第一次授权', authSetting);
          // 没有授权的提醒
          if (authSetting['scope.userInfo'] === false || authSetting['scope.camera'] === false) {
            wx.showModal({
              title: '用户未授权',
              content: '如需正常开启比赛，请按确定并在授权管理中选中“用户信息”，然后点按确定。即可正常使用。',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                  wx.openSetting({
                    success: function success(res) {
                      console.log('openSetting success', res.authSetting);

                      if (res.authSetting['scope.userInfo'] === true) {
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
                                      app.globalData.userInfo = res.userInfo
                                      app.globalData.openid = data.data.id
                                      that.setData({ userInfo: res.userInfo })
                                      typeof cb == "function" && cb(app.globalData.userInfo, app.globalData.openid)
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
                    }
                  });
                }
              }
            })
          }
        }
      }
    });
  },
  // 地址编辑
  editAddr: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../edit_addr/edit_addr?addrid=' + e.currentTarget.dataset.addrid
    })
  }

})
