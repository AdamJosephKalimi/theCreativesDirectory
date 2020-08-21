// pages/portfolio/portfolio.js

let app = getApp()
Page({

  // I want to declare a global variable (var app = getApp()) so that I can 
  // check if userInfo is stored in globalData. This is how we'll run a check
  // to see if the user has been created or not

 /**
   * Page initial data
   */
  data: {
    modalState: "hidden",
    navState: "hidden",
    expandNav: "open",
    //there are five "none"s because the maximum number of images that will show is five
    deleteButtonDisplay: ["none", "none", "none", "none", "none"],

    formData: {
      profilePhoto: "",
      name: "Name",
      biography: "Demo",
      weChatID: "Demo",
      province: "I am based in...",
      websiteUrl: "Website URL (optional)",
      creativeAreas: [],
      imagesOfWork: ["/assets/portfolio-img1.png", "/assets/portfolio-img2"],
      portfolio: null,
      imagesOfWork: null
    },

    userDB: {
      name: "",
      biography: "test",
      province: "",
      websiteUrl: "",
      creativeAreas: ["", "", ""],
      portfolio: null,
      imagesOfWork: ["/assets/portfolio-img1.png", "/assets/portfolio-img2"],
      profilePhoto: "",
      wechatID: "",
    },
    loggedIn: false 
  },

    /**
   * User Login
   */
  // This happens when a user clicks the WeChat Login button on the modal
  userInfoHandler(data) {
    wx.BaaS.auth.loginWithWechat(data).then(user => {
        // Is it a bad idea to run setData in this function?

        console.log("LoginWithWeChat user", user)

        this.setData({
          formData: {
            name: data.detail.userInfo.nickName,
            province: data.detail.userInfo.province,            
            profilePhoto: data.detail.userInfo.avatarUrl,
            websiteUrl: "Website URL",
            creativeAreas: [""],
            biography: "Bio",
            weChatID: "WeChat ID",
            creativeAreas: [],
            portfolio: null,
            imagesOfWork: null
          },
          loggedIn: true,
          modalState: "hidden",
          profile: user.toJSON()
          
        })

      }, err => {
        // **err 有两种情况**：用户拒绝授权，HError 对象上会包含基本用户信息：id、openid、unionid；其他类型的错误，如网络断开、请求超时等，将返回 HError 对象（详情见下方注解）
    })
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

    formSubmit: function(e) {
      let value = e.detail.value
      let profilePhoto = this.data.formData.profilePhoto
      let userID = this.data.profile.id
      console.log('form info: ', e.detail.value)

      console.log("Profile", userID)
      // These keep the placeholder text in the input fields 
      // in the case that the user leaves the field blank
       
      if (value.settingsBio == "") value.settingsBio = "Bio";
      if (value.settingsWeChatID == "") value.settingsWeChatID = "WeChat ID";
      if (value.settingsWebsiteURL == "") value.settingsWebsiteURL = "Website URL";

      this.setData({
        formData: {
          profilePhoto: profilePhoto,
          name: value.settingsName,
          biography: value.settingsBio,
          weChatID: value.settingsWeChatID,
          province: value.settingsProvince,
          websiteUrl: value.settingsWebsiteURL,
          creativeAreas: [],
          imagesOfWork: ["/assets/portfolio-img1.png", "/assets/portfolio-img2"],
          portfolio: null,
          imagesOfWork: null
        }
      })

    },

  /**
   * Create creative in the backend by saving the form
   */
  createCreative: function(e) {
    // console.log("Creative created", e);
    // create the data structure here and POST to BaaS
    
    console.log("searching for user info in globaldata 2: ", app.globalData)


    // let creativeProfile = this.data.formData
    // console.log("creativeProfile", creativeProfile)
    // let Creatives = new wx.BaaS.TableObject('creative')
    // let creative = Creatives.create()

    // creative.set("name", creativeProfile.name)
    // creative.set("wechatID", creativeProfile.wechatID)
    // creative.set("province", creativeProfile.province)
    // creative.set("biography", creativeProfile.biography)
    // creative.set("websiteUrl", creativeProfile.websiteUrl)
    // creative.set("profileImage", creativeProfile.profilePhoto)
    // creative.set("creativeAreas", creativeProfile.creativeAreas)
    // creative.set("openID", creativeProfile.creativeAreas)

    // This was a demo to test sending the img URL to the backend 
    // (It works, but the question is "Do I want to send the URL
    //  to the backend, or do I want to send the image?")
    
    /** To do
     * 1. Set up feature for users to upload files
     * 2. Update these columns in the DB to reflect the correct data type (an array of file, or an array of strings, etc)
     * 3. Use "Second way to push to DB" as this will allow me to delete the 
     *    individual lines of code above and just send the object in page data
     *    to the database.
    */
    // creative.set("portfolio", creativeProfile.portfolio)
    // creative.set("imagesOfWork", creativeProfile.imagesOfWork)
    // creative.set("profilePhoto", creativeProfile.profilePhoto)
    

    // First way to push to DB
    // creative.save().then(res => {
      // success
      // console.log(res)
    // }, err => {
      // HError 对象
    // })

    // Second way to push to DB
    // FIX ISSUES WITH imagesOfWork, portfolio, and profilePhoto
    // in order to get this working.
    // creative.set(creativeProfile).save().then(res => {
    //   // success
    //   console.log(res)
    // }, err => {
    //   // HError 对象
    // })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // WeChat user info is saved to global data at the point of submittin the form
    console.log("searching for user info in globaldata 1: ", app.globalData)

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