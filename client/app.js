//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({

  onLaunch: function() {
    qcloud.setLoginUrl(config.service.loginUrl)
  },
  login({success,error}) {
    qcloud.login({
      success: result => {
        console.log('success')
        console.log(result)
        let userInfo = result
        success && success({
          userInfo
        })
      },
      fail: result => {
        console.log('fail')
        console.log(result)
      }
    })
  },

  checkUserInfo({success,error}) {
    wx.getSetting({
      success: result => {
        let userInfo = null
        if (result.authSetting['scope.userInfo']) {
          userInfo = wx.getStorageSync('userInfo')
        } else {
          wx.removeStorageSync('userInfo')
        }
        success && success({
          userInfo
        })
      }
    })
  }
})