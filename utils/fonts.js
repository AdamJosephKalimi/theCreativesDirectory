const loadFonts = () => {
//load Less font
    wx.loadFontFace({
      family: 'Less',
      source: 'url("https://s3.us-west-2.amazonaws.com/secure.notion-static.com/69ef5cc1-c55e-49b4-96e8-40902a6e57d3/Less.otf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200713T045756Z&X-Amz-Expires=86400&X-Amz-Signature=227dceac9ee2ef5aebc39f74e3925e33c926818af431165984bb0fa3a7a42031&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Less.otf%22")',
      success: console.log('Loaded Less font')
    })
//load Less Bold font
wx.loadFontFace({
  family: 'Less Bold',
  source: 'url("https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ef29b384-b235-41b8-9fd5-737c53839afb/Less-Bold.otf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200713T045752Z&X-Amz-Expires=86400&X-Amz-Signature=893e906a5a6ba34c250c19d9f0dbbb5c7f1f741e168ce54b546e4993669cb32b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Less-Bold.otf%22")',
  success: console.log('Loaded Less Bold font')
})

//load NewYork font
wx.loadFontFace({
  family: 'NewYork',
  source: 'url("https://s3.us-west-2.amazonaws.com/secure.notion-static.com/26968d78-c688-48d7-8bae-2e14e12f5a8b/NewYorkExtraLargeRegular.otf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200713T045746Z&X-Amz-Expires=86400&X-Amz-Signature=5c1a90e9666787a1d4bca5764179155d97788dd54a15df35fdcbb4a3f7cad97c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22NewYorkExtraLargeRegular.otf%22")',
  success: console.log('Loaded NewYork font')
})
//load NewYork Medium font

wx.loadFontFace({
  family: 'NewYork Medium',
  source: 'url("https://s3.us-west-2.amazonaws.com/secure.notion-static.com/30028477-f884-4152-a6ad-b42f7df04e6a/NewYorkExtraLargeMedium.otf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200713T060208Z&X-Amz-Expires=86400&X-Amz-Signature=40e951a66b572bf9b3f5e1f65f6990fc6e6dc604d781b1bb8a629e50487867cb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22NewYorkExtraLargeMedium.otf%22")',
  success: console.log('Loaded NewYork Medium font')
})

//load NewYork Black font
wx.loadFontFace({
  family: 'NewYork Black',
  source: 'url("https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3ae950df-f715-4732-8a8c-5b88e5e2b314/NewYorkExtraLargeBlack.otf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200713T060645Z&X-Amz-Expires=86400&X-Amz-Signature=d5c433cfec1698c8e6690be775ba7f89ac3d749cee871a1b2f296299d54acafb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22NewYorkExtraLargeBlack.otf%22")',
  success: console.log('Loaded NewYork Black font')
})

}

module.exports = loadFonts