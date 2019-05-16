// pages/user/user.js
const qcloud = require('../../vendor/wafer2-client-sdk/index.js')
const config = require('../../config.js')
const app = getApp()
Page({
  /**
   * Page initial data
   */
  data: {
    userInfo: NaN,
  },

  tapToLog() {
app.login({
  success:({userInfo}) =>{
    wx.setStorageSync('userInfo', userInfo)
    this.setData({
      userInfo: userInfo
    })
  }
})
  },
  
 

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    console.log('onLoad')
    app.checkUserInfo({
      success:({userInfo}) =>{
        this.setData({
          userInfo: userInfo
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
    app.checkUserInfo({
      success: ({ userInfo }) => {
        this.setData({
          userInfo: userInfo
        })
      }
    })
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