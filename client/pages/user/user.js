// pages/user/user.js
const qcloud = require('../../vendor/wafer2-client-sdk/index.js')
const config = require('../../config.js')
Page({

  /**
   * Page initial data
   */
  data: {
userInfo: null,
  },

tapToLog(){
  qcloud.setLoginUrl('https://fyjzxrls.qcloud.la/weapp/login'),
qcloud.login({
  success: result =>{
    console.log('success')
    console.log(result)
  },
  fail: result =>{
    console.log('fail')
    console.log(result)
  }
})
this.setData({
  userInfo: {
    nickName: "优达学城",
    avatarUrl: "", // 头像 URL 地址
  }, // 虚拟数据
})
},


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})