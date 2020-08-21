let getCreatives = (uid, cb) => {
    // let tableName = "creatives",
    let Creatives = new wx.BaaS.TableObject("creatives"),
    query = new wx.BaaS.Query()

    Creatives.setQuery(query).find()
        .then(res => cb(res))
        .catch(err => console.dir(err))
}


module.exports = {
    getCreatives
}