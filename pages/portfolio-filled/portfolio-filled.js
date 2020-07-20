// pages/portfolio-filled/portfolio-filled.js



Page({

  /**
   * Page initial data
   */
  data: {
    //there are five "none"s because the maximum number of images that will show is five
    deleteButtonDisplay: ["none", "none", "none", "none", "none"],
    userDB: {
      name: "Julie Russel",
      tags: ["Graphic Designer", "UI/UX", "Web Developer"],
      location: "Shanghai",
      profileImg: "/assets/sample-profile.png",
      description: "A multidisciplinary designer focused on creating refined and engaging brand experiences that stand the test of time.",
      portfolio: ["/assets/portfolio-img1.png", "/assets/portfolio-img2"]
    }
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