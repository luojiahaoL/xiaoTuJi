// pages/component/imgList/imgList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    img(e) {
      let url = e.currentTarget.dataset.url; 
      //用户需要授权
      wx.getSetting({
        success: (res) => {
          if (!res.authSetting['scope.writePhotosAlbum']) {
            wx.authorize({
              scope: 'scope.writePhotosAlbum',
              success: () => {
                // 同意授权
                wx.showModal({
                  title: '是否保存图片？',
                  showCancel: true, //是否显示取消按钮 
                  confirmText: "是", //默认是“确定”
                  confirmColor: 'red', //确定文字的颜色
                  success: res => {
                    if (res.cancel) {
                      //点击取消,默认隐藏弹框
                    } else {
                      //点击确定 
                      this.isimg(url);
                    }
                  },
                  fail: function (res) {}, //接口调用失败的回调函数 
                })
              },
              fail: (res) => {
                console.log('不同意授权', res);
              }
            })
          } else {
            // 已经授权了
            wx.showModal({
              title: '是否保存图片？',
              // content: '内容',
              showCancel: true, //是否显示取消按钮 
              confirmText: "是", //默认是“确定”
              confirmColor: 'red', //确定文字的颜色
              success: res => {
                if (res.cancel) {
                  //点击取消,默认隐藏弹框
                } else {
                  //点击确定 
                  this.isimg(url);
                }
              },
              fail: function (res) {}, //接口调用失败的回调函数 
            })
          }
        },
        fail: (res) => {
          console.log('接口调用失败', res);
        }
      })
    },
    isimg(url) {
      wx.getImageInfo({
        src: url,
        success: (res) => {
          let path = res.path;
          wx.saveImageToPhotosAlbum({
            filePath: path,
            success: (res) => {
              wx.showToast({
                title: '图片保存成功',
                icon: 'none',
                duration: 2000
              })
            },
            fail: (res) => {
              wx.showToast({
                title: '图片保存失败',
                icon: 'none',
                duration: 2000
              })
            }
          })
        },
        fail: (res) => {
          wx.showToast({
            title: '图片下载失败',
            icon: 'none',
            duration: 2000
          })
        }
      })
    },
  }
})