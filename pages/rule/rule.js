var app = getApp()
Page({
  data: {
    showModalStatus: false,
    position : 'front',
    hiddenmodalput: true,
  },
  modalinput: function () {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },  
  //取消按钮  
  cancel: function () {
    // this.setData({
    //   hiddenmodalput: true
    // });
  },
  //确认  
  confirm: function () {
    
    // this.setData({
    //   hiddenmodalput: true
    // })
  },
  powerDrawer: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
  },
  ceshi: function (e) {
    var that = this;
    //获取汇率  
    wx.request({
      url: app.globalData.url + "/mini/ceshi.do",
      success: function (res) {
        if (res.data.power == 0) {
          wx.navigateTo({
            url: '../match1v1Ready/match1v1Ready'
          })
        }
        else {

        }
      }
    }) 
  },
  qiehuan: function (e) {
    if(this.data.position == 'front'){
      this.setData({
        position: 'back'
      })
    }  else{
      this.setData({
        position: 'front'
      })
    }
    console.log(this.data.position)
  },
  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例
    var animation = wx.createAnimation({
      duration: 200, //动画时长
      timingFunction: "linear", //线性
      delay: 0 //0则不延迟
    });

    // 第2步：这个动画实例赋给当前的动画实例  
    this.animation = animation;

    // 第3步：执行第一组动画  
    animation.opacity(0).rotateX(-100).step();

    // 第4步：导出动画对象赋给数据对象储存  
    this.setData({

      animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后，执行第二组动画  
    setTimeout(function () {
      // 执行第二组动画  
      animation.opacity(1).rotateX(0).step();
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象  
      this.setData({
        animationData: animation
      })

      //关闭  
      if (currentStatu == "close") {
        this.setData(
          {
            showModalStatus: false,
            
          }
        );
      }

    }.bind(this), 200)

    // 显示  
    if (currentStatu == "open") {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'normal',
      success: (res) => {
        this.cameraContext
        this.setData({
          src: res.tempImagePath

        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  }, 
})
