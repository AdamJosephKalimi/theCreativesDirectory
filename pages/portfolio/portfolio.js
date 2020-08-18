// pages/portfolio/portfolio.js
Page({

 /**
   * Page initial data
   */
  data: {
    modalState: "hidden",
    navState: "hidden",
    expandNav: "open",
    //there are five "none"s because the maximum number of images that will show is five
    deleteButtonDisplay: ["none", "none", "none", "none", "none"],
    userDB: {
      name: "Julie Russel",
      biography: "A multidisciplinary designer focused on creating refined and engaging brand experiences that stand the test of time.",
      province: "Shanghai",
      websiteUrl: "www.juliestudios.com",
      creativeAreas: ["Graphic Designer", "UI/UX", "Web Developer"],
      portfolio: null,
      imagesOfWork: ["/assets/portfolio-img1.png", "/assets/portfolio-img2"],
      profilePhoto: "/assets/sample-profile.png",
      wechatID: "JulieRussel1990",
    },
    loggedIn: false 
  },

    // Custom Functions

    closeNav: function(){
      this.setData({expandNav: ""})
      this.setData({navState: "hidden"})
    },
  
    closeDeleteModal: function(){
      this.setData({modalState: "hidden"})
    },
  
    showHideDelete: function(e){
      //get number from data-number
      const targetNumber = e.currentTarget.dataset.number
      //console.log(this.data.deleteButtonDisplay)
      /*makes sure bindtap only triggers the closest delete button instead of
      triggering every single button */
      if (this.data.deleteButtonDisplay[targetNumber] === "none"){
        this.data.deleteButtonDisplay[targetNumber] = "block"
        }
      else{
        this.data.deleteButtonDisplay[targetNumber] = "none"
        }
      this.setData({deleteButtonDisplay: this.data.deleteButtonDisplay})
      //console.log(this.data.deleteButtonDisplay[0])
    },
  
    navHandler: function(){
      if (this.data.expandNav==="open"){
        this.setData({expandNav: ""})
        this.setData({navState: "hidden"})
      }
      else{
        this.setData({expandNav: "open"})
        this.setData({navState: "active"})
      }
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
        // let userDB = this.data.userDB

        // Is it a bad idea to run setData in this function?
        this.setData({
          userDB: {
            name: data.detail.userInfo.nickName,
            province: data.detail.userInfo.province,            
            profilePhoto: data.detail.userInfo.avatarUrl,
            websiteUrl: "www.a3collective.com",
            creativeAreas: ["Graphic Designer", "UI/UX", "Web Developer"],
          },
          loggedIn: true,
          modalState: "hidden"
        })
  
      }, err => {
        // **err 有两种情况**：用户拒绝授权，HError 对象上会包含基本用户信息：id、openid、unionid；其他类型的错误，如网络断开、请求超时等，将返回 HError 对象（详情见下方注解）
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