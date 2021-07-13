// 彩虹屁
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cont: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({ title: '加载中...', })
    // 接口
    wx.request({
      url: 'https://chp.shadiao.app/api.php',
      method: 'GET',
      header: {
        'content-Type': 'application/json'
      },
      success: (res) => {
        wx.hideLoading()
        this.setData({
          cont: res.data
        })
      },
    })
  },
  again() {
    wx.showLoading({ title: '加载中...', })
    wx.request({
      url: 'https://chp.shadiao.app/api.php',
      method: 'GET',
      header: {
        'content-Type': 'application/json'
      },
      success: (res) => {
        wx.hideLoading()
        this.setData({
          cont: res.data
        })
      },
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