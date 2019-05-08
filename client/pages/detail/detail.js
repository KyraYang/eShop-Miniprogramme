// client/pages/detail/detail.js
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
    onLoad: function(options) {
      this.getProduct(options.id)
    },

    getProduct(id) {
      wx.showLoading({
        title: '商品数据加载中...',
      })
      qcloud.request({
            url: config.service.productDetail + id,
            success: result => {
              console.log(result.data)
              wx.hideLoading()
              if (!result.data.code) {
                this.setData({
                  product: result.data.data
                })
              } else {
                setTimeout(() => {
                  wx.navigateBack()
                }, 2000)
              }
        },
        fail: result => {
          wx.hideLoading()
          setTimeout(() => {
            wx.navigateBack()
          }, 2000)
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