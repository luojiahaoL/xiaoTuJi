// pages/yule/yuleList/yuleList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        img: '../../static/img/service.jpg',
        tit: '客服',
        url: ''
      },
      {
        img: '../../static/img/text.jpg',
        tit: '测试',
        url: '../text/text'
      },
      {
        img: '../../static/img/rainbow.jpg',
        tit: '彩虹屁',
        url: '../rainbow/rainbow'
      } ,  
      {
        img: '../../static/img/code.jpg',
        tit: '二维码生成',
        url: '../code/code'
      },
      {
        img: '../../static/img/lamp1.jpg',
        tit: '开关灯',
        url: '../lamp/lamp'
      },
      {
        img: '../../static/img/scarecrow.jpg',
        tit: '稻草人',
        url: '../scarecrow/scarecrow'
      },
      {
        img: '../../static/img/loadiongOne.jpg',
        tit: '加载中',
        url: '../loadiongOne/loadiongOne'
      },
      {
        img: '../../static/img/flight.jpg',
        tit: '飞行',
        url: '../flight/flight'
      },
      {
        img: '../../static/img/rotateRainbow.jpg',
        tit: '旋转彩虹',
        url: '../rotateRainbow/rotateRainbow'
      }, 
      {
        img: '../../static/img/batman.png',
        tit: '蝙蝠侠',
        url: '../batman/batman'
      },
      {
        img: '../../static/img/grasshopper.png',
        tit: '蚱蜢',
        url: '../grasshopper/grasshopper'
      }   ,
      {
        img: '../../static/img/love.png',
        tit: '爱心',
        url: '../love/love'
      },
      {
        img: '../../static/img/roadRoller.png',
        tit: '压路机',
        url: '../roadRoller/roadRoller'
      } ,
      {
        img: '../../static/img/toyTrain.png',
        tit: '玩具列车',
        url: '../toyTrain/toyTrain'
      } ,
      {
        img: '../../static/img/meteor.png',
        tit: '流星',
        url: '../meteor/meteor'
      },
      {
        img: '../../static/img/hyperspace.png',
        tit: '超空间',
        url: '../hyperspace/hyperspace'
      },
      {
        img: '../../static/img/ghost.png',
        tit: '幽灵',
        url: '../ghost/ghost'
      },
      {
        img: '../../static/img/cocktail.png',
        tit: '鸡尾酒',
        url: '../cocktail/cocktail'
      },
      {
        img: '../../static/img/dog.png',
        tit: '小黄狗',
        url: '../dog/dog'
      },
      {
        img: '../../static/img/cat.png',
        tit: '猫咪',
        url: '../cat/cat'
      },
      {
        img: '../../static/img/parrot.png',
        tit: '鹦鹉',
        url: '../parrot/parrot'
      },
    ]
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   wx.getSetting({ 
     success:res=>{
      //  console.log(res.authSetting['scope.userInfo']);
     }
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