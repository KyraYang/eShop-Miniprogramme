// pages/user/user.js
const qcloud = require('../../vendor/wafer2-client-sdk/index.js')
const config = require('../../config.js')
Page({
  /**
   * Page initial data
   */
  data: {
    userInfo: NaN,
  },

  tapToLog() {
    qcloud.login({
      success: result => {
        console.log('success')
        console.log(result)
        wx.setStorageSync('userInfo', result)
        this.setData({
          userInfo: result
        })
      },
      fail: result => {
        console.log('fail')
        console.log(result)
      }
    })
  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    console.log('onLoad')
    wx.getSetting({
      success: result=>{
        if(result.authSetting['scope.userInfo']){
          let userInfo = wx.getStorageSync('userInfo')
          if (userInfo) {
            this.setData({
              userInfo: userInfo
            })
          }
        }else{
          wx.setStorageSync('userInfo', NaN)
          this.setData({
            userInfo: NaN
          })
        }
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
  onShow: function() {},

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