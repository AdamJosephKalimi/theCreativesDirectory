// pages/portfolio-page-empty/portfolio-page-empty.js
Page({


  /**
   * Page initial data
   */
  data: {
    modalState: "hidden",
    userDB: {
      name: "",
      biography: "Add bio",
      province: "",
      websiteUrl: "",
      creativeAreas: ["Graphic Designer", "UI/UX", "Web Developer"],
      portfolio: null,
      imagesOfWork: ["/assets/portfolio-img1.png", "/assets/portfolio-img2"],
      profilePhoto: "demoURL",
      wechatID: "",
    },
    loggedIn: false 
    // name: "Adam"
  },
  openModal: function(){
    this.setData({modalState: "active"})
  },
  closeModal: function(){
    this.setData({modalState: "hidden"})
  },

  /**
   * User Login
   */
  userInfoHandler(data) {
    wx.BaaS.auth.loginWithWechat(data).then(user => {
        // user 包含用户完整信息，详见下方描述
        let userDB = this.data.userDB

        console.log("originalDB", userDB)
        console.log("data - avatar", data.detail.userInfo)
        this.setData({
          userDB: {
            name: data.detail.userInfo.nickName,
            province: data.detail.userInfo.province,            
            profilePhoto: data.detail.userInfo.avatarUrl,
          },
          loggedIn: true
        })
  
      }, err => {
        // **err 有两种情况**：用户拒绝授权，HError 对象上会包含基本用户信息：id、openid、unionid；其他类型的错误，如网络断开、请求超时等，将返回 HError 对象（详情见下方注解）
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // check to see if the user is logged in. 
    // If user is logged in, change loggedIn to true.
    this.setData ({
      // loggedIn: true
    });
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