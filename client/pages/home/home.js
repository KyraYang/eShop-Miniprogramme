// pages/home/home.js
const qcloud = require('../../vendor/wafer2-client-sdk/index.js')
const config = require('../../config.js')
Page({
  /**
   * Page initial data
   */
  data: {},
  /**
   * Lifecycle function--Called when page load
   */
onTap:(event)=>{
  let tapItem = event.currentTarget.dataset.id
  console.log(tapItem)
  wx.navigateTo({
    url: '../detail/detail?id='+tapItem,
  })
},



  onLoad: function(options) {
    this.getProductList()
  },
  getProductList() {
    wx.showLoading({
      title: '商品数据加载中...',
    })
    qcloud.request({
      url: config.service.productList,
      success: result => {
        wx.hideLoading()
        if (!result.data.code) {
          this.setData({
            productList: result.data.data
          })
          let discountItem = this.data.productList[0]
          let listItem = this.data.productList.slice(1)
          this.setData({
            discountItem: discountItem,
            listItem: listItem
          })
        } else {
          wx.showToast({
            title: '商品加载失败',
          })
        }
      },
      fail: result => {
        wx.hideLoading()
        wx.showToast({
          title: '商品加载失败',
        })
      }
    })
  },
  
  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  }
})