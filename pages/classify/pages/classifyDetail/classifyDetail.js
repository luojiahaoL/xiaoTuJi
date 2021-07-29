// pages/classify//pages/tank/tank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    list: [],
    // 坦克
    tankList: [
      // 阿古朵
      {
        list: [{
          img: 'https://shp.qpic.cn/ishow/2735080409/1596505166_84828260_7081_sProdImgNo_2.jpg/0',
          name: '山林之子 伴生皮肤 288点券'
        }, ]
      },
      // 蒙恬
      {
        list: [{
          img: 'https://shp.qpic.cn/ishow/2735060319/1591183169_84828260_16256_sProdImgNo_2.jpg/0',
          name: '秩序猎龙将 伴生皮肤 288点券'
        }, ]
      },
      // 猪八戒
      {
        list: [{
          img: 'https://shp.qpic.cn/ishow/2735012917/1548754664_1186005513_15076_sProdImgNo_2.jpg/0',
          name: '年年有余 伴生皮肤 288点券'
        }, {
          img: 'https://shp.qpic.cn/ishow/2735070109/1593567222_84828260_21805_sProdImgNo_2.jpg/0',
          name: '西部大镖客 s20赛季战令限定'
        }]
      },
      // 嫦娥
      {
        list: [{
          img: 'https://shp.qpic.cn/ishow/2735012117/1548061545_1186005513_32642_sProdImgNo_2.jpg/0',
          name: '露花倒影 伴生皮肤 288点券'
        }, {
          img: 'https://shp.qpic.cn/ishow/2735031110/1583893602_84828260_15902_sProdImgNo_2.jpg/0',
          name: '如梦令 情人节限定 888点券'
        }, ]
      },
      // 鲁班大师
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735112811/1574912099_84828260_10210_sProdImgNo_2.jpg/0',
            name: '归虚梦演 伴生皮肤 288点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735071216/1626077530_84828260_12525_sProdImgNo_2.jpg/0',
            name: '乓乓大师 勇者/2021限时活动获取'
          }, 
        ]
      },
      // 盘古
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735021914/1550557555_1186005513_23586_sProdImgNo_2.jpg/0',
            name: '创世神祝 伴生皮肤 288点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735042714/1619505551_84828260_22687_sProdImgNo_2.jpg/0',
            name: '重装意志 限时团购 60点券'
          }
        ]
      },
      // 盾山
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011815/1547797787_-888937974_6626_sProdImgNo_2.jpg/0',
            name: '极冰防御线 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735062713/1561614678_704174346_27309_sProdImgNo_2.jpg/0',
            name: '御銮 s16赛季限定'
          }
        ]
      },
      // 孙策
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735122715/1545894035_-888937974_16843_sProdImgNo_2.jpg/0',
            name: '海之征途 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735061311/1560395696_587358052_2801_sProdImgNo_2.jpg/0',
            name: '猫狗日记 史诗 888点券'
          }
        ]
      },
      // 梦奇
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011517/1547544798_587358052_1179_sProdImgNo_2.jpg/0',
            name: '美梦成真 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122815/1545981944_-888937974_24469_sProdImgNo_2.jpg/0',
            name: '胖达荣荣 传说 1688点券'
          }
        ]
      },
      // 苏烈
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011814/1547793083_-695593207_22518_sProdImgNo_2.jpg/0',
            name: '爱与和平 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122715/1545894172_-888937974_2245_sProdImgNo_2.jpg/0',
            name: '坚韧之力 488点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735021815/1550476403_1186005513_24617_sProdImgNo_2.jpg/0',
            name: '玄武志 猪年限定 888点券'
          }
        ]
      },
      // 铠
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011517/1547544486_-695593207_7984_sProdImgNo_2.jpg/0',
            name: '龙域领主 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122521/1545743815_-888937974_7449_sProdImgNo_2.jpg/0',
            name: '曙光守护者 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735020311/1549163028_1186005513_12582_sProdImgNo_2.jpg/0',
            name: '青龙志 猪年限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735020309/1612316881_84828260_16070_sProdImgNo_2.jpg/0',
            name: '绛天战甲 888点券'
          }
        ]
      },
      // 东皇太一
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010816/1546935100_-888937974_20765_sProdImgNo_2.jpg/0',
            name: '东海龙王 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011811/1547781731_-888937974_15789_sProdImgNo_2.jpg/0',
            name: '逐梦之光 KPL限定 888点券'
          }
        ]
      },
      // 太乙真人
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011111/1547177243_704174346_13054_sProdImgNo_2.jpg/0',
            name: '圆桌骑士 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011814/1547791725_-888937974_8265_sProdImgNo_2.jpg/0',
            name: '华丽摇滚 战队赛限定'
          },
          {
            img: 'https://wx1.sinaimg.cn/mw690/006vTCKNgy1gpkai19x1hj31hc0oiwjb.jpg',
            name: '饕餮 s9赛季限定'
          }
        ]
      },
      // 雅典娜
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735012213/1548136360_1186005513_30326_sProdImgNo_2.jpg/0',
            name: '战争女神 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122914/1546066547_-888937974_474_sProdImgNo_2.jpg/0',
            name: '神奇女侠 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011815/1547797627_587358052_19346_sProdImgNo_2.jpg/0',
            name: '冰冠公主 积分夺宝获取'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735091716/1600332363_84828260_1418_sProdImgNo_2.jpg/0',
            name: '单词大作战 s21赛季战令限定'
          }
        ]
      },
      // 夏侯惇
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011116/1547195113_-888937974_23401_sProdImgNo_2.jpg/0',
            name: '战争骑士 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010717/1546854197_-888937974_11790_sProdImgNo_2.jpg/0',
            name: '乘风破浪 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735101622/1571237560_84828260_15190_sProdImgNo_2.jpg/0',
            name: '朔风刀 s17赛季限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735020311/1549163258_-695593207_1148_sProdImgNo_2.jpg/0',
            name: '无限飓风号 荣耀水晶兑换'
          }
        ]
      },
      // 关羽
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010414/1546583043_704174346_27165_sProdImgNo_2.jpg/0',
            name: '天启骑士 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011016/1547110786_704174346_29658_sProdImgNo_2.jpg/0',
            name: '龙腾万里 鸡年限定 488点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011016/1547110738_-888937974_9300_sProdImgNo_2.jpg/0',
            name: '冰锋战神 一周年限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735092710/1601174474_84828260_11485_sProdImgNo_2.jpg/0',
            name: '武圣 五虎上将/限定 888点券'
          }
        ]
      },
      // 刘邦
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735122815/1545981730_-888937974_5948_sProdImgNo_2.jpg/0',
            name: '圣殿之光 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735032619/1585220459_84828260_9035_sProdImgNo_2.jpg/0',
            name: '夺宝奇兵 388点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010718/1546855364_-888937974_21547_sProdImgNo_2.jpg/0',
            name: '德古拉伯爵 史诗 888点券'
          }
        ]
      },
      // 张飞
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010414/1546584085_704174346_22434_sProdImgNo_2.jpg/0',
            name: '五福同心 新春专属 488点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122915/1546067514_-888937974_7835_sProdImgNo_2.jpg/0',
            name: '乱世虎臣 788点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735072116/1595320598_84828260_20885_sProdImgNo_2.jpg/0',
            name: '虎魄 五虎上将/限定 888点券'
          }
        ]
      },
      // 钟馗
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010414/1546583892_704174346_10828_sProdImgNo_2.jpg/0',
            name: '地府判官 伴生皮肤 288点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735061017/1623316709_84828260_2587_sProdImgNo_2.jpg/0',
            name: '驱傩正仪 s24赛季限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735062713/1561614859_587358052_4323_sProdImgNo_2.jpg/0',
            name: '神迹守卫 s16赛季战令限定'
          }
        ]
      },
      // 芈月
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735012115/1548057069_-695593207_4806_sProdImgNo_2.jpg/0',
            name: '红桃皇后 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122815/1545982018_-888937974_31562_sProdImgNo_2.jpg/0',
            name: '重明 s11赛季战令限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735072310/1563849952_84828260_30382_sProdImgNo_2.jpg/0',
            name: '大秦宣太后 荣耀水晶兑换'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012617/1611652313_84828260_14368_sProdImgNo_2.jpg/0',
            name: '白晶晶 限定 888点券'
          }
        ]
      },
      // 牛魔
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011517/1547545510_587358052_19442_sProdImgNo_2.jpg/0',
            name: '西部大镖客 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011814/1547792186_1186005513_14364_sProdImgNo_2.jpg/0',
            name: '制霸全明星 勇者/限定 60点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735041709/1555464199_587358052_21094_sProdImgNo_2.jpg/0',
            name: '御旌 s15赛季限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735020816/1612773298_84828260_22011_sProdImgNo_2.jpg/0',
            name: '奔雷神使 牛年限定 888点券'
          }
        ]
      },
      // 吕布
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735061715/1560756761_587358052_16866_sProdImgNo_2.jpg/0',
            name: '野性能量 勇者 488点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122815/1545981869_-888937974_22344_sProdImgNo_2.jpg/0',
            name: '圣诞狂欢 788点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735010416/1546589986_704174346_5001_sProdImgNo_2.jpg/0',
            name: '末日机甲 史诗 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011517/1547544703_730872330_10116_sProdImgNo_2.jpg/0',
            name: '天魔缭乱 传说/限定 1688点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735012117/1548063533_-888937974_32215_sProdImgNo_2.jpg/0',
            name: '猎兽之王 s14赛季限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735020816/1612773198_84828260_24517_sProdImgNo_2.jpg/0',
            name: '御风骁将 牛年限定 888点券'
          },
        ]
      },
      // 白起
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735122520/1545741295_-888937974_5780_sProdImgNo_2.jpg/0',
            name: '白色死神 488点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010816/1546935701_-888937974_25220_sProdImgNo_2.jpg/0',
            name: '狰 s8赛季限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122815/1545980757_-888937974_10980_sProdImgNo_2.jpg/0',
            name: '星夜王子 史诗 888点券'
          }
        ]
      },
      // 墨子
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010717/1546854520_-888937974_25106_sProdImgNo_2.jpg/0',
            name: '进击墨子号 勇者/限定 60点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735081209/1597195915_84828260_18032_sProdImgNo_2.jpg/0',
            name: '金属风暴 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735081209/1597196031_84828260_7625_sProdImgNo_2.jpg/0',
            name: '龙骑士 2888点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735061709/1623893873_84828260_8260_sProdImgNo_2.jpg/0',
            name: '神迹守卫 s24赛季战令限定'
          },
        ]
      },
      // 廉颇
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735090714/1599460171_84828260_8311_sProdImgNo_2.jpg/0',
            name: '无尽征程 勇者/限定 60点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735042909/1588123188_84828260_20365_sProdImgNo_2.jpg/0',
            name: '地狱岩魂 888点券'
          }
        ]
      },
      // 庄周
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010414/1546582817_704174346_12975_sProdImgNo_2.jpg/0',
            name: '鲤鱼之梦 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735030613/1551850680_-695593207_28893_sProdImgNo_2.jpg/0',
            name: '奇妙博物学 勇者/限定 60点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010414/1546582777_-888937974_6111_sProdImgNo_2.jpg/0',
            name: '蜃楼王 s4赛季限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122915/1546067889_-888937974_26030_sProdImgNo_2.jpg/0',
            name: '云端筑梦师 史诗 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012115/1579592727_84828260_26798_sProdImgNo_2.jpg/0',
            name: '玄嵩 鼠年限定/五岳-嵩山/史诗 888点券'
          },
        ]
      },
      // 钟无艳
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735012116/1548058555_1186005513_22402_sProdImgNo_2.jpg/0',
            name: '生化警戒 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011117/1547197636_704174346_27317_sProdImgNo_2.jpg/0',
            name: '王者之锤 赏金联赛专属'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122915/1546067688_-888937974_14707_sProdImgNo_2.jpg/0',
            name: '海滩丽影 王者水晶兑换'
          }
        ]
      },
      // 项羽
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011815/1547797353_1186005513_31463_sProdImgNo_2.jpg/0',
            name: '帝国元帅 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011815/1547797398_1186005513_1143_sProdImgNo_2.jpg/0',
            name: '职棒王牌 限时活动获取'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010717/1546854118_704174346_13870_sProdImgNo_2.jpg/0',
            name: '海滩派对 贵族4赠送'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011811/1547781984_704174346_7657_sProdImgNo_2.jpg/0',
            name: '科学大爆炸 勇者/限定 60点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010415/1546585918_704174346_15137_sProdImgNo_2.jpg/0',
            name: '苍穹之光 2888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012118/1548065336_704174346_5896_sProdImgNo_2.jpg/0',
            name: '霸王别姬 情人节限定 888点券'
          },
        ]
      },
      // 程咬金
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010311/1546486355_-888937974_25202_sProdImgNo_2.jpg/0',
            name: '爱与正义 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010816/1546935603_704174346_26388_sProdImgNo_2.jpg/0',
            name: '星际陆战队 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012115/1548056584_1186005513_8885_sProdImgNo_2.jpg/0',
            name: '华尔街大亨 限时限定 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122815/1545980974_-888937974_1566_sProdImgNo_2.jpg/0',
            name: '功夫厨神 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011316/1578904549_84828260_12121_sProdImgNo_2.jpg/0',
            name: '活力突击 荣耀水晶兑换'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735032619/1616758423_84828260_28395_sProdImgNo_2.jpg/0',
            name: '演武夺筹 s23赛季限定'
          },
        ]
      },
      // 亚瑟
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010415/1546585341_-888937974_25945_sProdImgNo_2.jpg/0',
            name: '死亡骑士 新手任务获取'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010415/1546585297_-888937974_22404_sProdImgNo_2.jpg/0',
            name: '狮心王 s3赛季限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011815/1547797716_-695593207_16868_sProdImgNo_2.jpg/0',
            name: '心灵战警 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010717/1610011206_84828260_4846_sProdImgNo_2.jpg/0',
            name: '潮玩骑士王 s22赛季战令皮肤'
          },
        ]
      },
      // 刘禅
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735081417/1565773518_84828260_4416_sProdImgNo_2.jpg/0',
            name: '英喵野望 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735020309/1612316927_84828260_28564_sProdImgNo_2.jpg/0',
            name: '秘密基地 王者水晶兑换'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735081417/1565774110_84828260_22885_sProdImgNo_2.jpg/0',
            name: '绅士熊喵 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122715/1545895080_-888937974_8109_sProdImgNo_2.jpg/0',
            name: '天才门将 888点券'
          }
        ]
      },
    ],
    // 战士
    warriorList: [
      // 云缨
      {
        list: [{
          img: 'http://shp.qpic.cn/ishow/2735062209/1624324191_84828260_8427_sProdImgNo_2.jpg/0',
          name: '燎原之心 伴生皮肤 288点券'
        }, ]
      },
      // 司空震
      {
        list: [{
          img: 'https://shp.qpic.cn/ishow/2735011313/1610516936_84828260_3358_sProdImgNo_2.jpg/0',
          name: '雷霆之王 伴生皮肤 288点券'
        }, ]
      },
      // 夏洛特
      {
        list: [{
          img: 'http://shp.qpic.cn/ishow/2735092117/1600681870_84828260_15424_sProdImgNo_2.jpg/0',
          name: '夏洛特 暂无皮肤'
        }, ]
      },
      // 蒙恬
      {
        list: [{
          img: 'https://shp.qpic.cn/ishow/2735060319/1591183169_84828260_16256_sProdImgNo_2.jpg/0',
          name: '秩序猎龙将 伴生皮肤 288点券'
        }, ]
      },
      // 李信
      {
        list: [{
          img: 'http://shp.qpic.cn/ishow/2735011814/1547792484_-888937974_20489_sProdImgNo_2.jpg/0',
          name: '灼热之刃 伴生皮肤 288点券'
        }, {
          img: 'http://shp.qpic.cn/ishow/2735071419/1594727550_84828260_26933_sProdImgNo_2.jpg/0',
          name: '一念神魔 传说 1688点券'
        }, ]
      },
      // 马超
      {
        list: [{
          img: 'http://shp.qpic.cn/ishow/2735081417/1565774310_84828260_3934_sProdImgNo_2.jpg/0',
          name: '幸存者 伴生皮肤 288点券'
        }, {
          img: 'http://shp.qpic.cn/ishow/2735062311/1592882864_84828260_18913_sProdImgNo_2.jpg/0',
          name: '神威 五虎上将/限定 888点券'
        }, ]
      },
      // 曜
      {
        list: [{
            img: 'http://shp.qpic.cn/ishow/2735062714/1561616685_-695593207_18038_sProdImgNo_2.jpg/0',
            name: '归虚梦演 伴生皮肤 288点券'
          }, {
            img: 'http://shp.qpic.cn/ishow/2735080709/1596764438_84828260_7764_sProdImgNo_2.jpg/0',
            name: '云鹰飞将 FMVP 1688点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735060117/1622540267_84828260_13701_sProdImgNo_2.jpg/0',
            name: '李逍遥 传说/限定 1688点券'
          }
        ]
      },
      // 云中君
      {
        list: [{
          img: 'http://shp.qpic.cn/ishow/2735051317/1557741303_704174346_14746_sProdImgNo_2.jpg/0',
          name: '荷鲁斯之眼 伴生皮肤 288点券'
        }, {
          img: 'http://shp.qpic.cn/ishow/2735120117/1606814546_84828260_690_sProdImgNo_2.jpg/0',
          name: '纤云弄巧 勇者/限定 60点券'
        }, ]
      },
      // 盘古
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735021914/1550557555_1186005513_23586_sProdImgNo_2.jpg/0',
            name: '创世神祝 伴生皮肤 288点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735042714/1619505551_84828260_22687_sProdImgNo_2.jpg/0',
            name: '重装意志 勇者/限时团购 60点券'
          }
        ]
      },
      // 猪八戒
      {
        list: [{
          img: 'https://shp.qpic.cn/ishow/2735012917/1548754664_1186005513_15076_sProdImgNo_2.jpg/0',
          name: '年年有余 伴生皮肤 288点券'
        }, {
          img: 'https://shp.qpic.cn/ishow/2735070109/1593567222_84828260_21805_sProdImgNo_2.jpg/0',
          name: '西部大镖客 勇者 388点券'
        }]
      },
      // 狂铁
      {
        list: [{
          img: 'http://shp.qpic.cn/ishow/2735122710/1545878497_-888937974_1984_sProdImgNo_2.jpg/0',
          name: '命运角斗场 伴生皮肤 288点券'
        }, {
          img: 'http://shp.qpic.cn/ishow/2735122815/1545981538_-888937974_9804_sProdImgNo_2.jpg/0',
          name: '御狮 s13赛季限定'
        }, {
          img: 'http://shp.qpic.cn/ishow/2735082609/1598406131_84828260_22687_sProdImgNo_2.jpg/0',
          name: '特工战影 活动限定'
        }, ]
      },
      // 铠
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011517/1547544486_-695593207_7984_sProdImgNo_2.jpg/0',
            name: '龙域领主 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122521/1545743815_-888937974_7449_sProdImgNo_2.jpg/0',
            name: '曙光守护者 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735020311/1549163028_1186005513_12582_sProdImgNo_2.jpg/0',
            name: '青龙志 猪年限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735020309/1612316881_84828260_16070_sProdImgNo_2.jpg/0',
            name: '绛天战甲 888点券'
          }
        ]
      },
      // 哪吒
      {
        list: [{
            img: 'http://shp.qpic.cn/ishow/2735011111/1547176838_-888937974_16069_sProdImgNo_2.jpg/0',
            name: '三太子 伴生皮肤 288点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735011814/1547792269_-888937974_17522_sProdImgNo_2.jpg/0',
            name: '逐梦之翼 KPL限定 888点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735020412/1580791329_84828260_30119_sProdImgNo_2.jpg/0',
            name: '次元突破 王者水晶兑换'
          }
        ]
      },
      // 杨戬
      {
        list: [{
            img: 'http://shp.qpic.cn/ishow/2735011116/1547195452_-888937974_6629_sProdImgNo_2.jpg/0',
            name: '埃及法老 伴生皮肤 288点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735122914/1546066640_-888937974_2303_sProdImgNo_2.jpg/0',
            name: '永曜之星 狗年限定/传说 1788点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735020916/1612860663_84828260_26932_sProdImgNo_2.jpg/0',
            name: '次元傲视 勇者/限定 60点券'
          }
        ]
      },
      // 橘右京
      {
        list: [{
          img: 'http://shp.qpic.cn/ishow/2735040813/1586324881_84828260_15556_sProdImgNo_2.jpg/0',
          name: '修罗 史诗 888点券'
        }]
      },
      // 雅典娜
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735012213/1548136360_1186005513_30326_sProdImgNo_2.jpg/0',
            name: '战争女神 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122914/1546066547_-888937974_474_sProdImgNo_2.jpg/0',
            name: '神奇女侠 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011815/1547797627_587358052_19346_sProdImgNo_2.jpg/0',
            name: '冰冠公主 积分夺宝获取'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735091716/1600332363_84828260_1418_sProdImgNo_2.jpg/0',
            name: '单词大作战 s21赛季战令限定'
          }
        ]
      },
      // 夏侯惇
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011116/1547195113_-888937974_23401_sProdImgNo_2.jpg/0',
            name: '战争骑士 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010717/1546854197_-888937974_11790_sProdImgNo_2.jpg/0',
            name: '乘风破浪 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735101622/1571237560_84828260_15190_sProdImgNo_2.jpg/0',
            name: '朔风刀 s17赛季限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735020311/1549163258_-695593207_1148_sProdImgNo_2.jpg/0',
            name: '无限飓风号 荣耀水晶兑换'
          }
        ]
      },
      // 关羽
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010414/1546583043_704174346_27165_sProdImgNo_2.jpg/0',
            name: '天启骑士 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011016/1547110786_704174346_29658_sProdImgNo_2.jpg/0',
            name: '龙腾万里 新春专属 488点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011016/1547110738_-888937974_9300_sProdImgNo_2.jpg/0',
            name: '冰锋战神 一周年限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735092710/1601174474_84828260_11485_sProdImgNo_2.jpg/0',
            name: '武圣 五虎上将/限定 888点券'
          }
        ]
      },
      // 钟馗
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010414/1546583892_704174346_10828_sProdImgNo_2.jpg/0',
            name: '地府判官 伴生皮肤 288点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735061017/1623316709_84828260_2587_sProdImgNo_2.jpg/0',
            name: '驱傩正仪 s24赛季限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735062713/1561614859_587358052_4323_sProdImgNo_2.jpg/0',
            name: '神迹守卫 s16赛季战令限定'
          }
        ]
      },
      // 刘备
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010416/1546589802_-888937974_12369_sProdImgNo_2.jpg/0',
            name: '纽约教父 限时活动获得'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010717/1546855120_-888937974_11394_sProdImgNo_2.jpg/0',
            name: '万事如意 新春专属 488点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010717/1546855075_-888937974_10734_sProdImgNo_2.jpg/0',
            name: '汉昭烈帝 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735052109/1590022994_84828260_31155_sProdImgNo_2.jpg/0',
            name: '时之恋人 传说 1688点券'
          }
        ]
      },
      // 露娜
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735012115/1548055011_-695593207_29388_sProdImgNo_2.jpg/0',
            name: '绯红之刃 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012115/1548054968_-695593207_26969_sProdImgNo_2.jpg/0',
            name: '哥特玫瑰 488点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012115/1548055071_-695593207_32429_sProdImgNo_2.jpg/0',
            name: '紫霞仙子 史诗 788点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735061310/1560394689_587358052_19887_sProdImgNo_2.jpg/0',
            name: '一生所爱 情人节限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735030216/1614674580_84828260_31404_sProdImgNo_2.jpg/0',
            name: '瓷语鉴心 勇者/限定 60点券'
          },
        ]
      },
      // 宫本武藏
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010718/1546856124_-888937974_10395_sProdImgNo_2.jpg/0',
            name: '未来纪元 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010311/1546486800_-888937974_3410_sProdImgNo_2.jpg/0',
            name: '鬼剑武藏 史诗 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010315/1546499689_-888937974_4068_sProdImgNo_2.jpg/0',
            name: '万象初新 新春专属 488点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011517/1547544230_1186005513_12661_sProdImgNo_2.jpg/0',
            name: '霸王丸 限时活动获取'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010311/1546486739_704174346_13601_sProdImgNo_2.jpg/0',
            name: '地狱之眼 传说 1688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735041817/1555578405_-695593207_18702_sProdImgNo_2.jpg/0',
            name: '幽冥之眼 300紫星币'
          }
        ]
      },
      // 花木兰
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011818/1547806007_704174346_24775_sProdImgNo_2.jpg/0',
            name: '剑舞者 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011818/1547806089_1186005513_25911_sProdImgNo_2.jpg/0',
            name: '兔女郎 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011815/1547798130_704174346_32730_sProdImgNo_2.jpg/0',
            name: '水晶猎龙者 史诗 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122815/1545981191_-888937974_23607_sProdImgNo_2.jpg/0',
            name: '青春决赛季 限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012117/1548064556_587358052_24401_sProdImgNo_2.jpg/0',
            name: '冠军飞将 FMVP 1688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735021815/1550476464_587358052_23985_sProdImgNo_2.jpg/0',
            name: '瑞麟志 猪年限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735022210/1613959367_84828260_21851_sProdImgNo_2.jpg/0',
            name: '默契交锋 情人节限定 888点券'
          },
        ]
      },
      // 李白
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010416/1546589573_704174346_20622_sProdImgNo_2.jpg/0',
            name: '范海辛 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011814/1547792602_-695593207_11754_sProdImgNo_2.jpg/0',
            name: '敏锐之力 488点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010416/1546589647_-888937974_5526_sProdImgNo_2.jpg/0',
            name: '千年之狐 史诗 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011017/1547112240_-888937974_22130_sProdImgNo_2.jpg/0',
            name: '凤求凰 鸡年限定 1788点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735022210/1613959513_84828260_31791_sProdImgNo_2.jpg/0',
            name: '鸣剑·曳影 荣耀水晶兑换'
          },
        ]
      },
      // 曹操
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010816/1546935648_-888937974_21464_sProdImgNo_2.jpg/0',
            name: '超能战警 388点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010311/1546486304_704174346_25170_sProdImgNo_2.jpg/0',
            name: '幽灵船长 史诗 788点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735012115/1548056338_587358052_23728_sProdImgNo_2.jpg/0',
            name: '死神来了 积分夺宝获得'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012116/1548058692_-888937974_28838_sProdImgNo_2.jpg/0',
            name: '烛龙 s10赛季限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735112811/1574912336_84828260_14079_sProdImgNo_2.jpg/0',
            name: '天狼征服者 KPL限定 888点券'
          },
        ]
      },
      // 孙悟空
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011815/1547797976_587358052_27691_sProdImgNo_2.jpg/0',
            name: '西部大镖客 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010415/1546586181_704174346_30735_sProdImgNo_2.jpg/0',
            name: '地狱火 传说 1688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735041817/1555578769_587358052_11881_sProdImgNo_2.jpg/0',
            name: '幽冥火 300紫星币'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010415/1546586137_704174346_27166_sProdImgNo_2.jpg/0',
            name: '美猴王 猴年限定 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010717/1546854256_-888937974_12680_sProdImgNo_2.jpg/0',
            name: '至尊宝 情人节限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122518/1545734483_-888937974_27834_sProdImgNo_2.jpg/0',
            name: '全息碎影 荣耀水晶兑换'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735061310/1560394438_-695593207_21939_sProdImgNo_2.jpg/0',
            name: '大圣娶亲 情人节限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010616/1609921831_84828260_4181_sProdImgNo_2.jpg/0',
            name: '零号·赤焰 限定/传说 1788点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010815/1610092060_84828260_6125_sProdImgNo_2.jpg/0',
            name: '零号·雷霆 300紫星币'
          }
        ]
      },
      // 吕布
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735061715/1560756761_587358052_16866_sProdImgNo_2.jpg/0',
            name: '野性能量 勇者 488点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122815/1545981869_-888937974_22344_sProdImgNo_2.jpg/0',
            name: '圣诞狂欢 788点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735010416/1546589986_704174346_5001_sProdImgNo_2.jpg/0',
            name: '末日机甲 史诗 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011517/1547544703_730872330_10116_sProdImgNo_2.jpg/0',
            name: '天魔缭乱 传说/限定 1688点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735012117/1548063533_-888937974_32215_sProdImgNo_2.jpg/0',
            name: '猎兽之王 s14赛季限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735020816/1612773198_84828260_24517_sProdImgNo_2.jpg/0',
            name: '御风骁将 牛年限定 888点券'
          },
        ]
      },
      // 赵云
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010414/1546583943_-888937974_28821_sProdImgNo_2.jpg/0',
            name: '忍●炎影 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010714/1546843996_-888937974_32118_sProdImgNo_2.jpg/0',
            name: '未来纪元 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011117/1547198036_-888937974_24464_sProdImgNo_2.jpg/0',
            name: '白执事 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011117/1547198077_704174346_31708_sProdImgNo_2.jpg/0',
            name: '皇家上将 贵族5赠送'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011117/1547198455_-888937974_11031_sProdImgNo_2.jpg/0',
            name: '嘻哈天王 限时活动获得'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010714/1546844048_-888937974_1629_sProdImgNo_2.jpg/0',
            name: '引擎之心 限定 888点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735050614/1588747506_84828260_29600_sProdImgNo_2.jpg/0',
            name: '龙胆 五虎上将/限定 888点券'
          }
        ]
      },
      // 达摩
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011016/1547110442_-888937974_30185_sProdImgNo_2.jpg/0',
            name: '大发明家 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011016/1547110488_-888937974_31239_sProdImgNo_2.jpg/0',
            name: '拳王 限时活动 60点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735041615/1555400059_587358052_23555_sProdImgNo_2.jpg/0',
            name: '黄金狮子座 传说 1688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735040118/1617274303_84828260_19476_sProdImgNo_2.jpg/0',
            name: '星际陆战队 s23赛季战令限定'
          }
        ]
      },
      // 钟无艳
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735012116/1548058555_1186005513_22402_sProdImgNo_2.jpg/0',
            name: '生化警戒 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011117/1547197636_704174346_27317_sProdImgNo_2.jpg/0',
            name: '王者之锤 赏金联赛专属'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122915/1546067688_-888937974_14707_sProdImgNo_2.jpg/0',
            name: '海滩丽影 王者水晶兑换'
          }
        ]
      },
      // 程咬金
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010311/1546486355_-888937974_25202_sProdImgNo_2.jpg/0',
            name: '爱与正义 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010816/1546935603_704174346_26388_sProdImgNo_2.jpg/0',
            name: '星际陆战队 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012115/1548056584_1186005513_8885_sProdImgNo_2.jpg/0',
            name: '华尔街大亨 限时限定 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122815/1545980974_-888937974_1566_sProdImgNo_2.jpg/0',
            name: '功夫厨神 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011316/1578904549_84828260_12121_sProdImgNo_2.jpg/0',
            name: '活力突击 荣耀水晶兑换'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735032619/1616758423_84828260_28395_sProdImgNo_2.jpg/0',
            name: '演武夺筹 s23赛季限定'
          },
        ]
      },
      // 韩信
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010414/1546583166_-888937974_22180_sProdImgNo_2.jpg/0',
            name: '教廷特使 王者水晶兑换'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010414/1546583429_-888937974_5364_sProdImgNo_2.jpg/0',
            name: '街头霸王 勇者 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010414/1546583086_704174346_30214_sProdImgNo_2.jpg/0',
            name: '白龙吟 史诗 1188点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010718/1546856000_-888937974_8686_sProdImgNo_2.jpg/0',
            name: '逐梦之影 KPL限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012115/1579592031_84828260_30952_sProdImgNo_2.jpg/0',
            name: '飞衡 限定 888点券'
          },
        ]
      },
      // 老夫子
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010718/1546855423_-888937974_22583_sProdImgNo_2.jpg/0',
            name: '潮流仙人 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735062915/1593417552_84828260_704_sProdImgNo_2.jpg/0',
            name: '醍醐杖 s20赛季限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735123120/1577794470_84828260_10792_sProdImgNo_2.jpg/0',
            name: '圣诞老人 师徒系统专属'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122521/1545743891_-888937974_8629_sProdImgNo_2.jpg/0',
            name: '功夫老勺 王者水晶兑换'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735061709/1623893732_84828260_1601_sProdImgNo_2.jpg/0',
            name: '航海奇遇记 s24赛季战令限定'
          },
        ]
      },
      // 亚瑟
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010415/1546585341_-888937974_25945_sProdImgNo_2.jpg/0',
            name: '死亡骑士 新手任务获取'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010415/1546585297_-888937974_22404_sProdImgNo_2.jpg/0',
            name: '狮心王 s3赛季限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011815/1547797716_-695593207_16868_sProdImgNo_2.jpg/0',
            name: '心灵战警 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010717/1610011206_84828260_4846_sProdImgNo_2.jpg/0',
            name: '潮玩骑士王 s22赛季战令皮肤'
          },
        ]
      },
      // 典韦
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735012116/1548060886_-695593207_31205_sProdImgNo_2.jpg/0',
            name: '黄金武士 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122518/1545734641_-888937974_7561_sProdImgNo_2.jpg/0',
            name: '穷奇 s12赛季限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735041817/1555578291_1186005513_25978_sProdImgNo_2.jpg/0',
            name: '蓝屏警告 s15赛季战令限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012115/1579592406_84828260_28115_sProdImgNo_2.jpg/0',
            name: '岱宗 鼠年限定/五岳-泰山/史诗 888点券'
          },
        ]
      },
    ],
    // 刺客
    assassinList: [
      // 澜
      {
        list: [{
          img: 'https://shp.qpic.cn/ishow/2735121114/1607666908_84828260_6772_sProdImgNo_2.jpg/0',
          name: '孤猎 伴生皮肤 288点券'
        }]
      },
      //镜
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735040117/1585734712_84828260_14703_sProdImgNo_2.jpg/0',
            name: '冰刃幻境 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012015/1611126939_84828260_23512_sProdImgNo_2.jpg/0',
            name: '炽阳神光 FMVP 1688点券'
          },
        ]
      },
      // 曜
      {
        list: [{
            img: 'http://shp.qpic.cn/ishow/2735062714/1561616685_-695593207_18038_sProdImgNo_2.jpg/0',
            name: '归虚梦演 伴生皮肤 288点券'
          }, {
            img: 'http://shp.qpic.cn/ishow/2735080709/1596764438_84828260_7764_sProdImgNo_2.jpg/0',
            name: '云鹰飞将 FMVP 1688点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735060117/1622540267_84828260_13701_sProdImgNo_2.jpg/0',
            name: '李逍遥 传说/限定 1688点券'
          }
        ]
      },
      // 云中君
      {
        list: [{
          img: 'http://shp.qpic.cn/ishow/2735051317/1557741303_704174346_14746_sProdImgNo_2.jpg/0',
          name: '荷鲁斯之眼 伴生皮肤 288点券'
        }, {
          img: 'http://shp.qpic.cn/ishow/2735120117/1606814546_84828260_690_sProdImgNo_2.jpg/0',
          name: '纤云弄巧 60点券'
        }, ]
      },
      // 裴擒虎
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735122822/1546008486_-888937974_29833_sProdImgNo_2.jpg/0',
            name: '街头旋风 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735052115/1558422157_-695593207_28326_sProdImgNo_2.jpg/0',
            name: '天狼狩猎者 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011814/1547792141_-888937974_15906_sProdImgNo_2.jpg/0',
            name: '梅西 限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735102010/1603161871_84828260_28416_sProdImgNo_2.jpg/0',
            name: '李小龙 限时活动获得'
          },
        ]
      },
      // 百里玄策
      {
        list: [{
          img: 'https://shp.qpic.cn/ishow/2735010914/1547014719_-888937974_31780_sProdImgNo_2.jpg/0',
          name: '威尼斯狂欢 伴生皮肤 288点券'
        }, {
          img: 'https://shp.qpic.cn/ishow/2735091617/1600248695_84828260_30629_sProdImgNo_2.jpg/0',
          name: '原初追逐者 S17到S20四赛季王者'
        }, {
          img: 'https://shp.qpic.cn/ishow/2735020311/1549163178_1186005513_14725_sProdImgNo_2.jpg/0',
          name: '白虎志 猪年限定/传说 1688点券'
        }, {
          img: 'http://shp.qpic.cn/ishow/2735042818/1619604171_84828260_25670_sProdImgNo_2.jpg/0',
          name: '热力回旋 五五开黑节限定 888点券'
        }]
      },
      // 元歌
      {
        list: [{
          img: 'https://shp.qpic.cn/ishow/2735122714/1545893114_-888937974_883_sProdImgNo_2.jpg/0',
          name: '午夜歌剧院 伴生皮肤 288点券'
        }, {
          img: 'https://shp.qpic.cn/ishow/2735010717/1610011288_84828260_7033_sProdImgNo_2.jpg/0',
          name: '云间偶戏 S22赛季战令限定'
        }]
      },
      // 不知火舞
      {
        list: [{
          img: 'https://shp.qpic.cn/ishow/2735032409/1585014368_84828260_11705_sProdImgNo_2.jpg/0',
          name: '魅语 史诗 888点券'
        }]
      },
      // 花木兰
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011818/1547806007_704174346_24775_sProdImgNo_2.jpg/0',
            name: '剑舞者 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011818/1547806089_1186005513_25911_sProdImgNo_2.jpg/0',
            name: '兔女郎 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011815/1547798130_704174346_32730_sProdImgNo_2.jpg/0',
            name: '水晶猎龙者 史诗 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122815/1545981191_-888937974_23607_sProdImgNo_2.jpg/0',
            name: '青春决赛季 限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012117/1548064556_587358052_24401_sProdImgNo_2.jpg/0',
            name: '冠军飞将 FMVP 1688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735021815/1550476464_587358052_23985_sProdImgNo_2.jpg/0',
            name: '瑞麟志 猪年限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735022210/1613959367_84828260_21851_sProdImgNo_2.jpg/0',
            name: '默契交锋 情人节限定 888点券'
          },
        ]
      },
      // 兰陵王
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010718/1546855534_-888937974_30456_sProdImgNo_2.jpg/0',
            name: '隐刃 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011116/1547197010_-888937974_14617_sProdImgNo_2.jpg/0',
            name: '暗隐猎兽者 史诗 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735101622/1571237378_84828260_27861_sProdImgNo_2.jpg/0',
            name: '驯魔猎人 s17赛季战令限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735022210/1613959427_84828260_6733_sProdImgNo_2.jpg/0',
            name: '默契交锋 情人节限定 888点券'
          },
        ]
      },
      // 娜可露露
      {
        list: [{
          img: 'https://shp.qpic.cn/ishow/2735011316/1578904057_84828260_3084_sProdImgNo_2.jpg/0',
          name: '晚萤 史诗 888点券'
        }]
      },
      // 李白
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010416/1546589573_704174346_20622_sProdImgNo_2.jpg/0',
            name: '范海辛 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011814/1547792602_-695593207_11754_sProdImgNo_2.jpg/0',
            name: '敏锐之力 488点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010416/1546589647_-888937974_5526_sProdImgNo_2.jpg/0',
            name: '千年之狐 史诗 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011017/1547112240_-888937974_22130_sProdImgNo_2.jpg/0',
            name: '凤求凰 鸡年限定 1788点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735022210/1613959513_84828260_31791_sProdImgNo_2.jpg/0',
            name: '鸣剑·曳影 荣耀水晶兑换'
          },
        ]
      },
      // 貂蝉
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011818/1547805890_1186005513_16129_sProdImgNo_2.jpg/0',
            name: '异域舞娘 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735123120/1577794951_84828260_18576_sProdImgNo_2.jpg/0',
            name: '圣诞恋歌 788点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735040920/1617970305_84828260_11438_sProdImgNo_2.jpg/0',
            name: '逐梦之音 KPL限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011818/1547805942_-695593207_9824_sProdImgNo_2.jpg/0',
            name: '仲夏夜之梦 传说 1688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735041817/1555578486_-888937974_22758_sProdImgNo_2.jpg/0',
            name: '金色仲夏夜 300紫星币'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010212/1577940124_84828260_1263_sProdImgNo_2.jpg/0',
            name: '猫影幻舞 传说 1688点券'
          },
        ]
      },
      // 孙悟空
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011815/1547797976_587358052_27691_sProdImgNo_2.jpg/0',
            name: '西部大镖客 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010415/1546586181_704174346_30735_sProdImgNo_2.jpg/0',
            name: '地狱火 传说 1688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735041817/1555578769_587358052_11881_sProdImgNo_2.jpg/0',
            name: '幽冥火 300紫星币'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010415/1546586137_704174346_27166_sProdImgNo_2.jpg/0',
            name: '美猴王 猴年限定 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010717/1546854256_-888937974_12680_sProdImgNo_2.jpg/0',
            name: '至尊宝 情人节限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122518/1545734483_-888937974_27834_sProdImgNo_2.jpg/0',
            name: '全息碎影 荣耀水晶兑换'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735061310/1560394438_-695593207_21939_sProdImgNo_2.jpg/0',
            name: '大圣娶亲 情人节限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010616/1609921831_84828260_4181_sProdImgNo_2.jpg/0',
            name: '零号·赤焰 限定/传说 1788点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010815/1610092060_84828260_6125_sProdImgNo_2.jpg/0',
            name: '零号·雷霆 300紫星币'
          }
        ]
      },
      // 阿轲
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735012111/1548041446_587358052_25316_sProdImgNo_2.jpg/0',
            name: '爱心护理 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012111/1548041784_1186005513_16251_sProdImgNo_2.jpg/0',
            name: '致命风华 双十一活动限定10点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012111/1548041713_587358052_31760_sProdImgNo_2.jpg/0',
            name: '暗夜猫娘 2888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122815/1545980631_-888937974_1579_sProdImgNo_2.jpg/0',
            name: '节奏热浪 史诗 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735032619/1585220528_84828260_30826_sProdImgNo_2.jpg/0',
            name: '迷踪丽影 s19赛季战令限定'
          },
        ]
      },
      // 赵云
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010414/1546583943_-888937974_28821_sProdImgNo_2.jpg/0',
            name: '忍●炎影 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010714/1546843996_-888937974_32118_sProdImgNo_2.jpg/0',
            name: '未来纪元 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011117/1547198036_-888937974_24464_sProdImgNo_2.jpg/0',
            name: '白执事 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011117/1547198077_704174346_31708_sProdImgNo_2.jpg/0',
            name: '皇家上将 贵族5赠送'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011117/1547198455_-888937974_11031_sProdImgNo_2.jpg/0',
            name: '嘻哈天王 限时活动获取'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010714/1546844048_-888937974_1629_sProdImgNo_2.jpg/0',
            name: '引擎之心 限定 888点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735050614/1588747506_84828260_29600_sProdImgNo_2.jpg/0',
            name: '龙胆 五虎上将/限定 888点券'
          }
        ]
      },
      // 韩信
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010414/1546583166_-888937974_22180_sProdImgNo_2.jpg/0',
            name: '教廷特使 王者水晶兑换'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010414/1546583429_-888937974_5364_sProdImgNo_2.jpg/0',
            name: '街头霸王 勇者 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010414/1546583086_704174346_30214_sProdImgNo_2.jpg/0',
            name: '白龙吟 史诗 1188点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010718/1546856000_-888937974_8686_sProdImgNo_2.jpg/0',
            name: '逐梦之影 KPL限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012115/1579592031_84828260_30952_sProdImgNo_2.jpg/0',
            name: '飞衡 鼠年限定/五岳-衡山/史诗 888点券'
          },
        ]
      },
    ],
    // 法师
    masterList: [
      // 西施
      {
        list: [{
          img: 'https://shp.qpic.cn/ishow/2735092412/1569299550_84828260_31469_sProdImgNo_2.jpg/0',
          name: '归虚梦演 伴生皮肤 288点券'
        }, {
          img: 'http://shp.qpic.cn/ishow/2735042018/1618915965_84828260_2160_sProdImgNo_2.jpg/0',
          name: '诗语江南 史诗 888点券'
        }]
      },
      // 嫦娥
      {
        list: [{
          img: 'https://shp.qpic.cn/ishow/2735012117/1548061545_1186005513_32642_sProdImgNo_2.jpg/0',
          name: '露花倒影 伴生皮肤 288点券'
        }, {
          img: 'https://shp.qpic.cn/ishow/2735031110/1583893602_84828260_15902_sProdImgNo_2.jpg/0',
          name: '如梦令 情人节限定 888点券'
        }, ]
      },
      // 瑶
      {
        list: [{
          img: 'https://shp.qpic.cn/ishow/2735041714/1555482117_1186005513_31127_sProdImgNo_2.jpg/0',
          name: '森'
        }, {
          img: 'https://shp.qpic.cn/ishow/2735042809/1588039187_84828260_15570_sProdImgNo_2.jpg/0',
          name: '遇见神鹿'
        }]
      },
      // 上官婉儿
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011814/1547791771_-695593207_20786_sProdImgNo_2.jpg/0',
            name: '修竹墨客 伴生皮肤 288点券'
          }, {
            img: 'https://shp.qpic.cn/ishow/2735060319/1591183305_84828260_14686_sProdImgNo_2.jpg/0',
            name: '天狼绘梦者 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735102310/1571796953_84828260_3010_sProdImgNo_2.jpg/0',
            name: '梁祝 四周年限定 周年限定活动获得'
          }
        ]
      },
      // 沈梦溪
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011814/1547792029_587358052_15847_sProdImgNo_2.jpg/0',
            name: '棒球奇才 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735081416/1565770485_84828260_19149_sProdImgNo_2.jpg/0',
            name: '鲨炮海盗猫 王者水晶兑换'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011316/1578903656_84828260_14669_sProdImgNo_2.jpg/0',
            name: '星空之诺 s18赛季战令限定'
          },
        ]
      },
      // 司马懿
      {
        list: [{
          img: 'https://shp.qpic.cn/ishow/2735122715/1545894332_-888937974_20894_sProdImgNo_2.jpg/0',
          name: '魔语军师 伴生皮肤 288点券'
        }]
      },
      // 米莱狄
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011814/1547792322_-888937974_18364_sProdImgNo_2.jpg/0',
            name: '精准探案法 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011619/1547637454_704174346_23357_sProdImgNo_2.jpg/0',
            name: '御霄 s14赛季限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735040119/1617275231_84828260_9336_sProdImgNo_2.jpg/0',
            name: '胡桃异想国 s23赛季战令限定'
          },
        ]
      },
      // 弈星
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735122915/1546067029_-888937974_2711_sProdImgNo_2.jpg/0',
            name: '踏雪寻梅 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011316/1578903461_84828260_30369_sProdImgNo_2.jpg/0',
            name: '混沌棋 s18赛季限定'
          }
        ]
      },
      // 梦奇
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011517/1547544798_587358052_1179_sProdImgNo_2.jpg/0',
            name: '美梦成真 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122815/1545981944_-888937974_24469_sProdImgNo_2.jpg/0',
            name: '胖达荣荣 传说 1688点券'
          }
        ]
      },
      // 女娲
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011814/1547792956_587358052_12993_sProdImgNo_2.jpg/0',
            name: '尼罗河女神 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735041709/1555463883_-695593207_22439_sProdImgNo_2.jpg/0',
            name: '朔望之晖 s15赛季战令限定'
          }
        ]
      },
      // 干将莫邪 
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010816/1546934949_-888937974_15454_sProdImgNo_2.jpg/0',
            name: '第七人偶 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735021211/1549941945_704174346_16208_sProdImgNo_2.jpg/0',
            name: '冰霜恋舞曲 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735080615/1565075385_84828260_19686_sProdImgNo_2.jpg/0',
            name: '久胜战神 FMVP 1688点券'
          },
        ]
      },
      // 诸葛亮
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011116/1547195752_-888937974_30303_sProdImgNo_2.jpg/0',
            name: '星航指挥官 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122714/1545891875_-888937974_8611_sProdImgNo_2.jpg/0',
            name: '掌控之力 488点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011116/1547197140_-888937974_24802_sProdImgNo_2.jpg/0',
            name: '黄金分割率 史诗 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011116/1547197101_-888937974_19235_sProdImgNo_2.jpg/0',
            name: '武陵仙君 情人节限定 1788点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735020816/1612772942_84828260_6917_sProdImgNo_2.jpg/0',
            name: '时雨天司 牛年限定/传说 1788点券'
          },
        ]
      },
      // 不知火舞
      {
        list: [{
          img: 'https://shp.qpic.cn/ishow/2735032409/1585014368_84828260_11705_sProdImgNo_2.jpg/0',
          name: '魅语 史诗 888点券'
        }]
      },
      // 露娜
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735012115/1548055011_-695593207_29388_sProdImgNo_2.jpg/0',
            name: '绯红之刃 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012115/1548054968_-695593207_26969_sProdImgNo_2.jpg/0',
            name: '哥特玫瑰 488点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012115/1548055071_-695593207_32429_sProdImgNo_2.jpg/0',
            name: '紫霞仙子 情人节限定/史诗 788点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735061310/1560394689_587358052_19887_sProdImgNo_2.jpg/0',
            name: '一生所爱 情人节限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735030216/1614674580_84828260_31404_sProdImgNo_2.jpg/0',
            name: '瓷语鉴心 勇者/限定 60点券'
          },
        ]
      },
      // 周瑜 
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011116/1547197183_-888937974_27476_sProdImgNo_2.jpg/0',
            name: '海军大将 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735101622/1571237521_84828260_722_sProdImgNo_2.jpg/0',
            name: '赤莲之焰 s17赛季战令限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122915/1546067825_-888937974_24990_sProdImgNo_2.jpg/0',
            name: '真爱至上 情人节限定 788点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735051817/1621329110_84828260_24679_sProdImgNo_2.jpg/0',
            name: '音你心动 传说/情人节限定 1688点券'
          }
        ]
      },
      // 张良
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010414/1546584023_704174346_17634_sProdImgNo_2.jpg/0',
            name: '一千零一夜 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012116/1548058113_-695593207_10881_sProdImgNo_2.jpg/0',
            name: '天堂福音 活动限定 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735020411/1549251863_1186005513_32671_sProdImgNo_2.jpg/0',
            name: '幽兰居士 勇者/限定 60点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735111816/1574064843_84828260_27576_sProdImgNo_2.jpg/0',
            name: '黄金白羊座 传说 1688点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735042818/1619604291_84828260_29559_sProdImgNo_2.jpg/0',
            name: '缤纷绘卷 55开黑节'
          }
        ]
      },
      // 芈月
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735012115/1548057069_-695593207_4806_sProdImgNo_2.jpg/0',
            name: '红桃皇后 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122815/1545982018_-888937974_31562_sProdImgNo_2.jpg/0',
            name: '重明 s11赛季限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735072310/1563849952_84828260_30382_sProdImgNo_2.jpg/0',
            name: '大秦宣太后 荣耀水晶获得'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012617/1611652313_84828260_14368_sProdImgNo_2.jpg/0',
            name: '白晶晶 限定 888点券'
          }
        ]
      },
      // 貂蝉
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011818/1547805890_1186005513_16129_sProdImgNo_2.jpg/0',
            name: '异域舞娘 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735123120/1577794951_84828260_18576_sProdImgNo_2.jpg/0',
            name: '圣诞恋歌 788点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735040920/1617970305_84828260_11438_sProdImgNo_2.jpg/0',
            name: '逐梦之音 KPL限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011818/1547805942_-695593207_9824_sProdImgNo_2.jpg/0',
            name: '仲夏夜之梦 传说 1688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735041817/1555578486_-888937974_22758_sProdImgNo_2.jpg/0',
            name: '金色仲夏夜 300紫星币'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010212/1577940124_84828260_1263_sProdImgNo_2.jpg/0',
            name: '猫影幻舞 传说 1688点券'
          },
        ]
      },
      // 墨子
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010717/1546854520_-888937974_25106_sProdImgNo_2.jpg/0',
            name: '进击墨子号 勇者/限定 60点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735081209/1597195915_84828260_18032_sProdImgNo_2.jpg/0',
            name: '金属风暴 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735081209/1597196031_84828260_7625_sProdImgNo_2.jpg/0',
            name: '龙骑士 2888点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735061709/1623893873_84828260_8260_sProdImgNo_2.jpg/0',
            name: '神迹守卫 s24赛季战令限定'
          },
        ]
      },
      // 王昭君
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011815/1547797089_587358052_9210_sProdImgNo_2.jpg/0',
            name: '精灵公主 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011815/1547797002_-695593207_2609_sProdImgNo_2.jpg/0',
            name: '凤凰于飞 鸡年限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122815/1545982384_-888937974_6340_sProdImgNo_2.jpg/0',
            name: '偶像歌手 积分夺宝获得'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122815/1545982295_730872330_9085_sProdImgNo_2.jpg/0',
            name: '幻想奇妙夜 活动限定 60点券'
          }
        ]
      },
      // 武则天
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011815/1547797249_-888937974_30592_sProdImgNo_2.jpg/0',
            name: '东方不败 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735041709/1555464890_1186005513_29965_sProdImgNo_2.jpg/0',
            name: '海洋之心 传说 1688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735041817/1555580121_-888937974_27700_sProdImgNo_2.jpg/0',
            name: '幻海之心 300紫星币'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012115/1579592833_84828260_27569_sProdImgNo_2.jpg/0',
            name: '倪克斯神谕 荣耀水晶兑换'
          }
        ]
      },
      // 嬴政
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735012117/1548063583_704174346_8272_sProdImgNo_2.jpg/0',
            name: '白昼王子 s14赛季战令限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010414/1546584184_-888937974_4559_sProdImgNo_2.jpg/0',
            name: '摇滚巨星 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122519/1545735916_-888937974_23194_sProdImgNo_2.jpg/0',
            name: '暗夜贵公子 888点券'
          },
          {
            img: 'https://wx4.sinaimg.cn/mw690/006vTCKNgy1grdl05m782j30ea08caae.jpg',
            name: '优雅恋人 内测专属'
          }
        ]
      },
      // 孙膑
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010415/1546587152_-888937974_8639_sProdImgNo_2.jpg/0',
            name: '未来旅行 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010717/1546854390_704174346_641_sProdImgNo_2.jpg/0',
            name: '天使之翼 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011111/1547177102_704174346_5257_sProdImgNo_2.jpg/0',
            name: '妖精王 s5赛季限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735071618/1563272056_-1294974199_10790_sProdImgNo_2.jpg/0',
            name: '归虚梦演 限时活动获取'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735121517/1608023389_84828260_23287_sProdImgNo_2.jpg/0',
            name: '天狼运算者 KPL限定 888点券'
          }
        ]
      },
      // 扁鹊
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010914/1547014884_-888937974_4593_sProdImgNo_2.jpg/0',
            name: '炼金王 s6赛季限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010914/1547014773_704174346_25033_sProdImgNo_2.jpg/0',
            name: '救世之瞳 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010311/1546486153_-888937974_12315_sProdImgNo_2.jpg/0',
            name: '化身博士 限时活动获得'
          }
        ]
      },
      // 安琪拉
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010311/1546486085_-888937974_9148_sProdImgNo_2.jpg/0',
            name: '玩偶对对碰 488点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010311/1546486022_-888937974_7924_sProdImgNo_2.jpg/0',
            name: '魔法小厨娘 限定 788点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122520/1545741196_-888937974_1544_sProdImgNo_2.jpg/0',
            name: '如懿 勇者/限定 60点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012111/1548041930_-888937974_29955_sProdImgNo_2.jpg/0',
            name: '心灵骇客 史诗 888点券'
          }
        ]
      },
      // 小乔
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735122914/1546065973_-888937974_5069_sProdImgNo_2.jpg/0',
            name: '万圣前夜 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011815/1547797473_587358052_17290_sProdImgNo_2.jpg/0',
            name: '缤纷独角兽 880点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012117/1548064617_1186005513_15208_sProdImgNo_2.jpg/0',
            name: '纯白花嫁 情人节限定 788点券'
          }, 
          {
            img: 'https://shp.qpic.cn/ishow/2735092717/1601197753_84828260_29701_sProdImgNo_2.jpg/0',
            name: '天鹅之梦 荣耀水晶兑换'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735032409/1585014304_84828260_3557_sProdImgNo_2.jpg/0',
            name: '青蛇 史诗 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735050821/1557323529_587358052_16229_sProdImgNo_2.jpg/0',
            name: '丁香结 勇者/限定 60点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735051817/1621329110_84828260_24679_sProdImgNo_2.jpg/0',
            name: '音你心动 传说/情人节限定 1688点券'
          }
        ]
      },
      // 妲己
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010915/1547020006_-888937974_21909_sProdImgNo_2.jpg/0',
            name: '少女阿狸 勇者 新人训练免费获得'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011815/1547798218_-695593207_3376_sProdImgNo_2.jpg/0',
            name: '魅力维加斯 史诗 新人训练免费获得'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010816/1546935550_-888937974_9392_sProdImgNo_2.jpg/0',
            name: '女仆咖啡 勇者 888点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735061617/1623836895_84828260_11275_sProdImgNo_2.jpg/0',
            name: '女仆咖啡(优化) 史诗 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735020412/1580790863_84828260_22159_sProdImgNo_2.jpg/0',
            name: '时之彼端 限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011815/1547798356_-888937974_16033_sProdImgNo_2.jpg/0',
            name: '仙境爱丽丝 限定 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010915/1547019940_-888937974_19447_sProdImgNo_2.jpg/0',
            name: '热情桑巴 限定 998点券'
          }
        ]
      },
      // 甄姬
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011117/1547197986_-888937974_23105_sProdImgNo_2.jpg/0',
            name: '花好人间 488点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011817/1547805558_1186005513_9534_sProdImgNo_2.jpg/0',
            name: '冰雪圆舞曲 88点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011117/1547197923_-888937974_22336_sProdImgNo_2.jpg/0',
            name: '游园惊梦 二周年限定 888点券/周年限定活动获得'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012115/1579592559_84828260_28538_sProdImgNo_2.jpg/0',
            name: '幽恒 鼠年限定/五岳-恒山/史诗 888点券'
          }
        ]
      },
      // 姜子牙
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735122521/1545743712_-888937974_31494_sProdImgNo_2.jpg/0',
            name: '时尚教父 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735093015/1569826907_84828260_21666_sProdImgNo_2.jpg/0',
            name: '炽热元素使 限时活动免费获取'
          }
        ]
      },
      // 高渐离
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010816/1546934892_704174346_23687_sProdImgNo_2.jpg/0',
            name: '金属狂潮 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010311/1546486693_704174346_12408_sProdImgNo_2.jpg/0',
            name: '死亡摇滚 战队赛专属'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735072218/1563792709_84828260_15194_sProdImgNo_2.jpg/0',
            name: '玩趣恶龙 限时活动免费获取'
          }
        ]
      },

    ],
    // 射手
    shooterList: [
      // 蒙犽
      {
        list: [{
          img: 'https://shp.qpic.cn/ishow/2735011316/1578903304_84828260_32096_sProdImgNo_2.jpg/0',
          name: '归虚梦演 伴生皮肤 288点券'
        }, {
          img: 'https://shp.qpic.cn/ishow/2735091716/1600332299_84828260_29540_sProdImgNo_2.jpg/0',
          name: '狂想玩偶喵 s21赛季战令限定'
        }]
      },
      // 伽罗
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735012213/1548136528_-695593207_9275_sProdImgNo_2.jpg/0',
            name: '花见巫女 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735052811/1559013339_587358052_30140_sProdImgNo_2.jpg/0',
            name: '箭羽风息 五五开黑节限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012115/1579591871_84828260_17614_sProdImgNo_2.jpg/0',
            name: '太华 鼠年限定/五岳-太华山/传说 1688点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735061810/1623982378_84828260_25647_sProdImgNo_2.jpg/0',
            name: '天狼溯光者 史诗 888点券'
          },
        ]
      },
      // 公孙离
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735040920/1617970549_84828260_22886_sProdImgNo_2.jpg/0',
            name: '花间舞 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735020816/1612773126_84828260_2178_sProdImgNo_2.jpg/0',
            name: '祈雪灵祝 牛年限定/传说 1788点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735090917/1568022839_84828260_5983_sProdImgNo_2.jpg/0',
            name: '无限星赏官 史诗 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122521/1545744100_-888937974_11165_sProdImgNo_2.jpg/0',
            name: '蜜橘之夏 浪一夏限定 888点券'
          },
        ]
      },
      // 百里守约
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735012116/1548059059_587358052_14205_sProdImgNo_2.jpg/0',
            name: '绝影神枪 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122815/1545980883_-888937974_30214_sProdImgNo_2.jpg/0',
            name: '特工魅影 史诗 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735020311/1549163108_1186005513_13944_sProdImgNo_2.jpg/0',
            name: '朱雀志 猪年限定 888点券'
          }
        ]
      },
      // 艾琳
      {
        list: [{
          img: 'https://shp.qpic.cn/ishow/2735040716/1617785833_84828260_32746_sProdImgNo_2.jpg/0',
          name: '女武神 内侧专属'
        }]
      },
      // 黄忠
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010718/1546855583_-888937974_32559_sProdImgNo_2.jpg/0',
            name: '芝加哥教父 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735050719/1588849510_84828260_2111_sProdImgNo_2.jpg/0',
            name: '烈魂 五虎上将/限定 888点券'
          }
        ]
      },
      // 成吉思汗
      {
        list: [{
          img: 'https://shp.qpic.cn/ishow/2735012117/1548061395_-695593207_12159_sProdImgNo_2.jpg/0',
          name: '维京掠夺者 伴生皮肤 288点券'
        }]
      },
      // 马可波罗
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011017/1547112742_-888937974_21515_sProdImgNo_2.jpg/0',
            name: '激情绿茵 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011517/1547544747_704174346_4185_sProdImgNo_2.jpg/0',
            name: '逐梦之星 KPL限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735070311/1593748762_84828260_23096_sProdImgNo_2.jpg/0',
            name: '暗影游猎 s20赛季战令限定'
          }
        ]
      },
      // 虞姬
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735122915/1546067426_-888937974_27914_sProdImgNo_2.jpg/0',
            name: '加勒比小姐 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122915/1546067394_-888937974_24282_sProdImgNo_2.jpg/0',
            name: '凯尔特女王 s7赛季限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010617/1609926266_84828260_29925_sProdImgNo_2.jpg/0',
            name: '启明星使 贵族9赠送'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735070910/1562640168_1186005513_17698_sProdImgNo_2.jpg/0',
            name: '云霓雀翎 传说 1688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010714/1546844213_704174346_24768_sProdImgNo_2.jpg/0',
            name: '霸王别姬 情人节限定 888点券'
          }
        ]
      },
      // 李元芳
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010416/1546589707_704174346_25552_sProdImgNo_2.jpg/0',
            name: '特种部队 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011017/1547112336_-888937974_29952_sProdImgNo_2.jpg/0',
            name: '黑猫爱糖果 勇者/限定 60点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735122715/1545895395_-888937974_16212_sProdImgNo_2.jpg/0',
            name: '逐浪之夏 浪一夏限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011316/1578903829_84828260_25154_sProdImgNo_2.jpg/0',
            name: '银河之约 s18赛季战令限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735040213/1617342019_84828260_14269_sProdImgNo_2.jpg/0',
            name: '飞鸢探春 传说/限定 1688点券'
          }
        ]
      },
      // 后羿
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010414/1546583696_-888937974_20471_sProdImgNo_2.jpg/0',
            name: '精灵王 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010414/1546583483_-888937974_6199_sProdImgNo_2.jpg/0',
            name: '阿尔法小队 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735031110/1583893703_84828260_20058_sProdImgNo_2.jpg/0',
            name: '如梦令 情人节限定 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122815/1545981080_-888937974_8274_sProdImgNo_2.jpg/0',
            name: '辉光之辰 狗年限定/史诗 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122710/1545878604_-888937974_14558_sProdImgNo_2.jpg/0',
            name: '黄金射手座 传说 1688点券'
          }
        ]
      },
      // 孙尚香
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735052109/1590023062_84828260_20731_sProdImgNo_2.jpg/0',
            name: '时之恋人 史诗 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012118/1548065293_-695593207_3283_sProdImgNo_2.jpg/0',
            name: '末日机甲 传说 1688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012115/1579592938_84828260_21520_sProdImgNo_2.jpg/0',
            name: '未来机甲 300紫星币'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735041923/1555686546_-888937974_18472_sProdImgNo_2.jpg/0',
            name: '杀手不太冷 荣耀水晶兑换'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012115/1548055591_1186005513_11229_sProdImgNo_2.jpg/0',
            name: '蔷薇恋人 内侧专属'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011814/1547793229_587358052_21750_sProdImgNo_2.jpg/0',
            name: '水果甜心 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010717/1546854311_-888937974_15340_sProdImgNo_2.jpg/0',
            name: '火炮千金 活动限定 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122711/1545880175_-888937974_25981_sProdImgNo_2.jpg/0',
            name: '沉稳之力 488点券'
          }
        ]
      },
      // 狄仁杰
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010415/1546587833_704174346_23847_sProdImgNo_2.jpg/0',
            name: '锦衣卫 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010716/1610009926_84828260_15453_sProdImgNo_2.jpg/0',
            name: '万华元夜 s22赛季限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735071118/1562841240_587358052_24910_sProdImgNo_2.jpg/0',
            name: '鹰眼统帅 信誉6专属'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012116/1548057983_587358052_18418_sProdImgNo_2.jpg/0',
            name: '魔术师 贵族6赠送'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010915/1547020116_-888937974_27050_sProdImgNo_2.jpg/0',
            name: '超时空战士 传说 988点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010415/1546587895_-888937974_30470_sProdImgNo_2.jpg/0',
            name: '阴阳师 成就系统专属'
          }
        ]
      },
      // 鲁班七号
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010416/1546589902_704174346_978_sProdImgNo_2.jpg/0',
            name: '木偶奇遇记 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010717/1546854922_-888937974_7332_sProdImgNo_2.jpg/0',
            name: '福禄兄弟 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012115/1579593019_84828260_11781_sProdImgNo_2.jpg/0',
            name: '黑桃队长 活动限定 60点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735062713/1561615046_587358052_6445_sProdImgNo_2.jpg/0',
            name: '狮舞东方 s16赛季战令限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010416/1546589851_-888937974_13025_sProdImgNo_2.jpg/0',
            name: '电玩小子 史诗 2888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122815/1545981789_-888937974_11632_sProdImgNo_2.jpg/0',
            name: '星空梦想 荣耀水晶兑换'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735071216/1626077564_84828260_20406_sProdImgNo_2.jpg/0',
            name: '乒乒小将 史诗/2021奥运会限定 888点券'
          }
        ]
      },
    ],
    // 辅助
    assistList: [
      // 瑶
      {
        list: [{
          img: 'https://shp.qpic.cn/ishow/2735041714/1555482117_1186005513_31127_sProdImgNo_2.jpg/0',
          name: '森 伴生皮肤 288点券'
        }, {
          img: 'https://shp.qpic.cn/ishow/2735042809/1588039187_84828260_15570_sProdImgNo_2.jpg/0',
          name: '遇见神鹿 史诗 888点券'
        }]
      },
      // 盾山
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011815/1547797787_-888937974_6626_sProdImgNo_2.jpg/0',
            name: '极冰防御线 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735062713/1561614678_704174346_27309_sProdImgNo_2.jpg/0',
            name: '御銮 s16赛季限定'
          }
        ]
      },
      // 杨玉环
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735122915/1546066893_-888937974_30318_sProdImgNo_2.jpg/0',
            name: '霓裳曲 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122716/1545899470_-888937974_23429_sProdImgNo_2.jpg/0',
            name: '遇见飞天 三周年限定 周年限定活动获得'
          }
        ]
      },
      // 明世隐
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011517/1547544934_1186005513_27348_sProdImgNo_2.jpg/0',
            name: '占星师 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735013011/1548817704_1186005513_10100_sProdImgNo_2.jpg/0',
            name: '虹云星官 王者水晶兑换'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735032519/1585137453_84828260_27866_sProdImgNo_2.jpg/0',
            name: '疑决卦 s19赛季限定'
          }
        ]
      },
      // 鬼谷子
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011517/1547544284_-695593207_2742_sProdImgNo_2.jpg/0',
            name: '阿摩司公爵 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122519/1545735862_-888937974_22460_sProdImgNo_2.jpg/0',
            name: '幻乐之宴 王者水晶兑换'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735111110/1605060341_84828260_22810_sProdImgNo_2.jpg/0',
            name: '原初探秘者 s21赛季限定'
          }
        ]
      },
      // 大乔
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010915/1547020060_-888937974_25739_sProdImgNo_2.jpg/0',
            name: '伊势巫女 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122521/1545743352_-888937974_24500_sProdImgNo_2.jpg/0',
            name: '守护之力 488点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735061311/1560395665_-695593207_8813_sProdImgNo_2.jpg/0',
            name: '猫狗日记 史诗 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735031110/1583893845_84828260_25450_sProdImgNo_2.jpg/0',
            name: '白蛇 史诗 888点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735070109/1625101469_84828260_6040_sProdImgNo_2.jpg/0',
            name: '白鹤梁神女 888点券'
          },
        ]
      },
      // 太乙真人
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011111/1547177243_704174346_13054_sProdImgNo_2.jpg/0',
            name: '圆桌骑士 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011814/1547791725_-888937974_8265_sProdImgNo_2.jpg/0',
            name: '华丽摇滚 战队赛限定'
          },
          {
            img: 'https://wx1.sinaimg.cn/mw690/006vTCKNgy1gpkai19x1hj31hc0oiwjb.jpg',
            name: '饕餮 s9赛季限定'
          }
        ]
      },
      // 蔡文姬
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735012116/1548059330_587358052_19594_sProdImgNo_2.jpg/0',
            name: '蔷薇王座 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735120509/1575509923_84828260_24055_sProdImgNo_2.jpg/0',
            name: '繁星吟游 勇者/限定 60点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122521/1545743274_-888937974_18094_sProdImgNo_2.jpg/0',
            name: '舞动绿茵 史诗 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122518/1545733076_-888937974_7302_sProdImgNo_2.jpg/0',
            name: '奇迹圣诞 限定 888点券'
          }
        ]
      },
      // 刘邦
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735122815/1545981730_-888937974_5948_sProdImgNo_2.jpg/0',
            name: '圣殿之光 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735032619/1585220459_84828260_9035_sProdImgNo_2.jpg/0',
            name: '夺宝奇兵 s19赛季战令限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010718/1546855364_-888937974_21547_sProdImgNo_2.jpg/0',
            name: '德古拉伯爵 史诗 888点券'
          }
        ]
      },
      // 张飞
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010414/1546584085_704174346_22434_sProdImgNo_2.jpg/0',
            name: '五福同心 新春专属 488点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122915/1546067514_-888937974_7835_sProdImgNo_2.jpg/0',
            name: '乱世虎臣 788点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735072116/1595320598_84828260_20885_sProdImgNo_2.jpg/0',
            name: '虎魄 五虎上将/限定 888点券'
          }
        ]
      },
      // 庄周
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010414/1546582817_704174346_12975_sProdImgNo_2.jpg/0',
            name: '鲤鱼之梦 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735030613/1551850680_-695593207_28893_sProdImgNo_2.jpg/0',
            name: '奇妙博物学 勇者/限定 60点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010414/1546582777_-888937974_6111_sProdImgNo_2.jpg/0',
            name: '蜃楼王 s4赛季限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122915/1546067889_-888937974_26030_sProdImgNo_2.jpg/0',
            name: '云端筑梦师 史诗 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012115/1579592727_84828260_26798_sProdImgNo_2.jpg/0',
            name: '玄嵩 鼠年限定/五岳-嵩山/史诗 888点券'
          },
        ]
      },
      // 孙膑
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010415/1546587152_-888937974_8639_sProdImgNo_2.jpg/0',
            name: '未来旅行 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010717/1546854390_704174346_641_sProdImgNo_2.jpg/0',
            name: '天使之翼 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011111/1547177102_704174346_5257_sProdImgNo_2.jpg/0',
            name: '妖精王 s5赛季限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735071618/1563272056_-1294974199_10790_sProdImgNo_2.jpg/0',
            name: '归虚梦演 限时活动获取'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735121517/1608023389_84828260_23287_sProdImgNo_2.jpg/0',
            name: '天狼运算者 KPL限定 888点券'
          }
        ]
      },
      // 扁鹊
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735010914/1547014884_-888937974_4593_sProdImgNo_2.jpg/0',
            name: '炼金王 s5赛季限定'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010914/1547014773_704174346_25033_sProdImgNo_2.jpg/0',
            name: '救世之瞳 888点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010311/1546486153_-888937974_12315_sProdImgNo_2.jpg/0',
            name: '化身博士 限时活动获取'
          }
        ]
      },
      // 姜子牙
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735122521/1545743712_-888937974_31494_sProdImgNo_2.jpg/0',
            name: '时尚教父 伴生皮肤 288点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735093015/1569826907_84828260_21666_sProdImgNo_2.jpg/0',
            name: '炽热元素使 限时活动免费获取'
          }
        ]
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      index: options.index,
    })
    if (options.type == 'tank') {
      // 坦克
      this.setData({
        list: this.data.tankList
      })
    } else if (options.type == 'warrior') {
      // 战士
      this.setData({
        list: this.data.warriorList
      })
    } else if (options.type == 'assassin') {
      // 刺客
      this.setData({
        list: this.data.assassinList
      })
    } else if (options.type == 'master') {
      // 法师
      this.setData({
        list: this.data.masterList
      })
    } else if (options.type == 'shooter') {
      // 射手
      this.setData({
        list: this.data.shooterList
      })
    } else if (options.type == 'assist') {
      //  辅助
      this.setData({
        list: this.data.assistList
      })
    }
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