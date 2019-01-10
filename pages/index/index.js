//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  onLoad: function () {
   wx.setNavigationBarTitle({
     title: '首页',
   }),
   wx.setNavigationBarColor({
     frontColor: '#ffffff',
     backgroundColor: '#FF910A',
   })
  }
 
})
