// import api from '../../api/api.js'
// import util from '../../utils/util.js'

Page({
  data: {
    vols: [],
    current: 0
  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: "https://www.usubang.com/theme/get_goods_summary?themeId=" + options.id,
      success: function (res) {
        that.setData({
          vols: res.data
        })
      }
    })
  },
  bookTap: function (e) {
    var goodsid = e.currentTarget.dataset.goodsId
    var goodsimg = e.currentTarget.dataset.goodsImg
    wx.navigateTo({
      url: '../order/order?goodsid=' + goodsid + '&goodsimg=' + goodsimg
    })
  }

  // onLoad: function () {
  //   api.getVolIdList({
  //     success: (res) => {
  //       if (res.data.res === 0) {
  //         let idList = res.data.data
  //         this.getVols(idList)
  //       }
  //     }
  //   })
  // },
  // getVols: function (idList) {
  //   let vols = this.data.vols

  //   if (idList.length > 0) {
  //     api.getVolById({
  //       query: {
  //         id: idList.shift()
  //       },
  //       success: (res) => {
  //         if (res.data.res === 0) {
  //           let vol = res.data.data

  //           vol.hp_makettime = util.formatMakettime(vol.hp_makettime)
  //           vols.push(vol)
  //         }
  //         this.getVols(idList)
  //       }
  //     })
  //   } else {
  //     this.setData({ vols })
  //   }
  // },
  // handleChange: function (e) {
  //   let current = e.detail.current
  //   let volsLength = this.data.vols.length

  //   if (current === volsLength) {
  //     this.setData({
  //       current: volsLength
  //     })
  //     wx.navigateTo({
  //       url: '../history/history?page=index',
  //       success: () => {
  //         this.setData({
  //           current: volsLength - 1
  //         })
  //       }
  //     })
  //   }
  // }
})
