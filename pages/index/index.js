//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 轮播图
    lbtList: [
      'https://wx3.sinaimg.cn/mw690/006vTCKNgy1glikaf9wsuj31hc0u07ow.jpg',
      'https://wx3.sinaimg.cn/mw690/006vTCKNgy1glikaf8or1j31hc0u0dym.jpg',
      'https://wx2.sinaimg.cn/mw690/006vTCKNgy1glikgmeztnj31hc0u04kw.jpg',
      'https://wx3.sinaimg.cn/mw690/006vTCKNgy1glikaf4spuj31hc0u00zn.jpg',
      'https://wx2.sinaimg.cn/mw690/006vTCKNgy1glikgmb70oj31hc0u0dls.jpg'
    ],
    // 分类
    classifyList: [{
        img: '../../static/img/tank.png',
        tit: '坦克'
      },
      {
        img: '../../static/img/warrior.png',
        tit: '战士'
      },
      {
        img: '../../static/img/assassin.png',
        tit: '刺客'
      },
      {
        img: '../../static/img/master.png',
        tit: '法师'
      },
      {
        img: '../../static/img/shooter.png',
        tit: '射手'
      },
      {
        img: '../../static/img/assist.png',
        tit: '辅助'
      },
      {
        img: '../../static/img/bgStory.png',
        tit: '背景故事'
      }
    ],
    // 好图推荐 
    list: [
      'https://wx2.sinaimg.cn/mw690/006vTCKNgy1go5np6hlwhj30rs1dgn4u.jpg',
      'https://wx2.sinaimg.cn/mw690/006vTCKNgy1go5np6utjyj311i1uothg.jpg'
    ]
  },
  // 去娱乐首页
  goRecreation() {
    wx.navigateTo({
      url: '../recreation/pages/index/index',
    })
  },
  //去英雄列表
  goclassify(e) {
    let index = e.currentTarget.dataset.index
    if (index == 0 || index == 1 || index == 2 || index == 3 || index == 4 || index == 5) {
      wx.navigateTo({
        url: '../classify/pages/index/index?index=' + index,
      })
    } else if (index == 6) { 
      wx.navigateTo({
        url: '../classify/pages/bgStory/bgStory',
      })
    }
  },
  onLoad: function () {

  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
})