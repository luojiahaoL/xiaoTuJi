// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tit: '', 
    list:[],
    shows: false,
    cont: '' 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // // test
    wx.request({
      url: '',
      method: 'GET',
      success: (res) => { 
        console.log('text',res.data);
      },
    })
  },


  // 搜索
  isshow() {
    let obj = this.data.cont
    // 开启加载
    wx.showLoading({ title: '加载中...', })
    // 左边的
    wx.request({
      url: 'http://wallpaper.apc.360.cn/index.php',
      data: {
        c: 'WallPaper',
        a: 'search',
        kw: obj,
        start: 1,
        count: 100
      },
      method: 'GET',
      header: {
        'content-Type': 'application/json'
      },
      success: (res) => {
        wx.hideLoading()
        if (res.data.data.length == 0) {
          wx.showToast({
            title: '获取图片失败,换个关键字试试',
            icon: 'none',
            duration: 2000
          })
        } else {
          var list=[]
          for(let i=0;i<res.data.data.length;i++){ 
            list.push(res.data.data[i].url)
          }
          this.setData({
            list: list
          }) 
        } 
      },
    }) 
  },
  // 获取input里面的值
  isinput(e) {
    this.setData({
      cont: e.detail.value
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