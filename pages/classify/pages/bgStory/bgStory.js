// pages/classify/pages/bgStory/bgStory.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      '燎原之心 云缨',
      '精灵之舞 艾琳',
      '雷霆之王 司空震',
      '鲨之猎刃 澜',
      '玫瑰剑士 夏洛特',
      '山林之子 阿古朵',
      '秩序统将 蒙恬',
      '破镜之刃 镜',
      '烈炮小子 蒙犽',
      '神匠 鲁班大师',
      '幻纱之灵 西施',
      '冷晖之枪 马超',
      '星辰之子 曜',
      '流云之翼 云中君',
      '鹿灵守心 瑶',
      '破晓之神 盘古',
      '无忧猛士 猪八戒',
      '寒月公主 嫦娥',
      '惊鸿之笔 上官婉儿',
      '谋世之战 李信',
      '爆弹怪猫 沈梦溪',
      '破魔之箭 伽罗',
      '无尽之盾 盾山',
      '寂灭之心 司马懿',
      '光明之海 孙策',
      '无间傀儡 元歌',
      '筑城者 米莱狄',
      '战车意志 狂铁',
      '天元之弈 弈星',
      '六合虎拳 裴擒虎',
      '霓裳风华 杨玉环',
      '幻舞玲珑 公孙离',
      '灵魂劫卜 明世隐',
      '至高创世 女娲',
      '入梦之灵 梦奇',
      '不屈铁壁 苏烈',
      '嚣狂之镰 百里玄策',
      '静谧之眼 百里守约'
    ]
  }, 
  // 去背景故事详情
  goBgStoryDetail(e) {
    wx.navigateTo({
      url: '../bgStoryDetail/bgStoryDetail?index=' + e.currentTarget.dataset.index,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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