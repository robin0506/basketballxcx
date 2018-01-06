
var app = getApp()
var util = require('../../utils/util.js');  

Page( {
  data: {
    phone:null,
    goodsid:0,
    goodsimg:null,
    bookToastHidden:true,
    date: '2016-10-14',
    time: '12:00'
  },
  onLoad: function (options) {
    this.setData({
      goodsid: options.goodsid,
      goodsimg: options.goodsimg,
    })   
  },
  // 地址选择
  bindAddrPickerChange : function(e){
    console.log('Addrpicker发送选择改变，携带值为', e.detail.value)
    this.setData({
      addrIndex: e.detail.value
    })
  },
  bindToastTap:function(){
      console.log('预定成功')
      this.setData({
          bookToastHidden:false
      })
  },
  hideToast:function(){
    this.setData({
          bookToastHidden:true
      })
  },
  // 日期选择
  bindDateChange: function(e){
    console.log('date picker发送选择改变，携带值为', e.detail.value)
    this.setData({
          date: e.detail.value
    })
  },
  // 时间选择
  bindTimeChange: function(e){
    console.log('time picker发送选择改变，携带值为', e.detail.value)
    this.setData({
          time: e.detail.value
    })
  }
  
})