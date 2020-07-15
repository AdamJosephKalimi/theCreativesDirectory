// pages/home-directory/home-directory.js
const loadFonts = require("../../utils/fonts.js")
Page({

  /**
   * Page initial data
   */
  data: {
    usersDB: [
      {
        name: "Julie Rusell",
        profilePhoto: "/assets/sample-profile1.png",
        creativeAreas: ["Graphic Designer", "UI/UX", "Web Developer"],
        bio: "A multidisciplinary designer focused on creating refined and engaging brand experiences that stand the test of time."
      },
      {
        name: "Chelsea Christoph",
        profilePhoto: "/assets/sample-profile1.png",
        creativeAreas: ["Illustrator"],
        bio: "Designer, letterer, and doodler who specializes in making all things cute and loves working and collaborating with passionate folks from..."
      },
      {
        name: "Mark Li",
        profilePhoto: "/assets/sample-profile1.png",
        creativeAreas: ["Branding", "Consulting", "Art Direction"],
        bio: "Creating distinct worlds and exploring how a brand thinks, feels, and behaves. This includes identity systems, content creation and all the materials..."
      }
    ]

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    loadFonts()

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