// pages/portfolio-page-user/portfolio-page-user.js
Page({

  /**
   * Page initial data
   */
  data: {
    modalState: "hidden",
    navState: "hidden",
    expandNav: "",
    //there are five "none"s because the maximum number of images that will show is five
    deleteButtonDisplay: ["none", "none", "none", "none", "none"],
    // userDB: {
    //   name: "Julie Russel",
    //   tags: ["Graphic Designer", "UI/UX", "Web Developer"],
    //   province: "Shanghai",
    //   profileImg: "/assets/sample-profile.png",
    //   wechatID: "JulieRussel1990",
    //   website: "www.juliestudios.com",
    //   description: "A multidisciplinary designer focused on creating refined and engaging brand experiences that stand the test of time.",
    //   portfolio: ["/assets/portfolio-img1.png", "/assets/portfolio-img2"]
    // },
    userDB: {
      name: "Julie Russel",
      biography: "A multidisciplinary designer focused on creating refined and engaging brand experiences that stand the test of time.",
      province: "Shanghai",
      websiteUrl: "www.juliestudios.com",
      creativeAreas: ["Graphic Designer", "UI/UX", "Web Developer", "Sungazer"],
      portfolio: null,
      imagesOfWork: ["/assets/portfolio-img1.png", "/assets/portfolio-img2"],
      profilePhoto: "/assets/sample-profile.png",
      wechatID: "JulieRussel1990",
    },

    demoDB: {
      "bookName": "Think and Grow Rich",
      "author": "Napoleon Hill"
    }
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

  createCreative: function(e) {
    // console.log("Creative created", e);
    // create the data structure here and POST to BaaS
    
    let creativeProfile = this.data.userDB
    console.log("creativeProfile", creativeProfile)
    let Creatives = new wx.BaaS.TableObject('creative')
    let creative = Creatives.create()

    creative.set("name", creativeProfile.name)
    creative.set("wechatID", creativeProfile.wechatID)
    creative.set("province", creativeProfile.province)
    creative.set("biography", creativeProfile.biography)
    creative.set("websiteUrl", creativeProfile.websiteUrl)
    creative.set("creativeAreas", creativeProfile.creativeAreas)

    // This was a demo to test sending the img URL to the backend 
    // (It works, but the question is "Do I want to send the URL
    //  to the backend, or do I want to send the image?")
    creative.set("profileImageDemo", creativeProfile.profilePhoto)
    
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
    creative.save().then(res => {
      // success
      console.log(res)
    }, err => {
      // HError 对象
    })

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