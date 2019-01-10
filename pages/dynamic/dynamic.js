// pages/dynamic/dynamic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[
      {
        name:'张三',
        time:'2019-01-03',
        src:"https://f12.baidu.com/it/u=2085336788,2505048394&fm=72",
        content: '　村子里的狗终于不再叫了，却显得四周更加寂静，我甚至听到了悠远的蝉鸣声。我终于忍不住抬起了头，母亲的沉默让我无措，我决定先求得母亲的原谅。                    可母亲打断了我即将出口的话，她只是又一遍的问着我，是不是发自内心的想去城市里生活。',
        contentSrc:[
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1451698316,2699404580&fm=26&gp=0.jpg',
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=375591862,702210092&fm=200&gp=0.jpg'
        ],
        shareNum:59,
        likeNum:43,
        fabulousNum:37

      },
      {
        name: '王五',
        time: '2019-01-04',
        src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=296840558,357990769&fm=26&gp=0.jpg",
        content: '小明数学不好被父母转学到一间教会学校。半年后数学成绩全A。妈妈问：“是修女教得好？是教材好？是祷告？……”“都不是，”小明说，“进学校的第一天，我看见一个人被钉死在加号上面，我就知道……他们是玩真的。',
        contentSrc: [
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1451698316,2699404580&fm=26&gp=0.jpg',
        ],
        shareNum: 207,
        likeNum: 68,
        fabulousNum: 14

      },
       {
        name: '李四',
        time: '2019-01-05',
         src: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2530132403,2665590259&fm=26&gp=0.jpg",
         content: '一天傍晚在小河边，阿Q对他的的新交女朋友说：我可以讲一个字让你笑。女友说不信。阿Q这时，走到了一只哈八狗面前，扑通一声跪地上，只听一声大喊：爹。结果引来了所有闻言者的哄堂大笑。阿Q回过头来对女友又喊了一句：妈。',
         contentSrc: [
           'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1451698316,2699404580&fm=26&gp=0.jpg',
           'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=375591862,702210092&fm=200&gp=0.jpg',
           'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1989769711,921179002&fm=26&gp=0.jpg',
           'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4124098529,2604292957&fm=200&gp=0.jpg',
           'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1391739329,206803883&fm=200&gp=0.jpg'
         ],
         shareNum: 107,
         likeNum: 64,
         fabulousNum: 75
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '动态',
    }),
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#FF910A',
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})