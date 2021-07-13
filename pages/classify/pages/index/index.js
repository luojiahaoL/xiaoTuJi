// pages/classify//pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 1,
    lists: [
      // 坦克
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735081209/1597196301_84828260_17286_sProdImgNo_2.jpg/0',
            name: '阿古朵 熊喵少女 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735060310/1591149765_84828260_26202_sProdImgNo_2.jpg/0',
            name: '蒙恬 秩序统将 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012917/1548754381_1186005513_9173_sProdImgNo_2.jpg/0',
            name: '猪八戒 无忧猛士 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012117/1548061596_704174346_15526_sProdImgNo_2.jpg/0',
            name: '嫦娥 寒月公主 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735112811/1574911983_84828260_5317_sProdImgNo_2.jpg/0',
            name: '鲁班大师 神匠 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735021910/1550543451_-695593207_5358_sProdImgNo_2.jpg/0',
            name: '盘古 破晓之神 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011815/1547797868_1186005513_14460_sProdImgNo_2.jpg/0',
            name: '盾山 无尽之盾 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122714/1545893952_-888937974_4660_sProdImgNo_2.jpg/0',
            name: '孙策 光明之海 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011517/1547544871_704174346_7885_sProdImgNo_2.jpg/0',
            name: '梦奇 入梦之灵 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011814/1547793133_1186005513_10833_sProdImgNo_2.jpg/0',
            name: '苏烈 不屈铁壁 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011517/1547544542_1186005513_19951_sProdImgNo_2.jpg/0',
            name: '铠 破灭刃锋 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010816/1546935155_704174346_7103_sProdImgNo_2.jpg/0',
            name: '东皇太一 噬灭日蚀 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011111/1547177957_704174346_5196_sProdImgNo_2.jpg/0',
            name: '太乙真人 炼金大师 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012213/1548136419_587358052_22941_sProdImgNo_2.jpg/0',
            name: '雅典娜 圣域余晖 18888金币 688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011813/1547789812_1186005513_8213_sProdImgNo_2.jpg/0',
            name: '夏侯惇 不羁之风 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011017/1547110879_-888937974_12343_sProdImgNo_2.jpg/0',
            name: '关羽 一骑当千 18888金币 688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011017/1547112459_-888937974_5892_sProdImgNo_2.jpg/0',
            name: '刘邦 双面君主 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011116/1547195507_-888937974_9398_sProdImgNo_2.jpg/0',
            name: '张飞 禁血狂兽 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011117/1547197827_-888937974_15561_sProdImgNo_2.jpg/0',
            name: '钟馗 虚灵城判 18888金币 688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010717/1546854872_704174346_30315_sProdImgNo_2.jpg/0',
            name: '芈月 永恒之月 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011111/1547177039_-888937974_31952_sProdImgNo_2.jpg/0',
            name: '牛魔 精英酋长 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012118/1548065239_-888937974_31013_sProdImgNo_2.jpg/0',
            name: '吕布 无双之魔 18888金币 688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012116/1548058939_-695593207_319_sProdImgNo_2.jpg/0',
            name: '白起 最终兵器 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010717/1546854630_-888937974_29228_sProdImgNo_2.jpg/0',
            name: '墨子 和平守望 8888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735042909/1588123056_84828260_25445_sProdImgNo_2.jpg/0',
            name: '廉颇 正义爆轰 8888金币 588钻石'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011116/1547196439_-888937974_3961_sProdImgNo_2.jpg/0',
            name: '庄周 逍遥幻梦 2888金币 288钻石'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011117/1547198710_-888937974_27087_sProdImgNo_2.jpg/0',
            name: '钟无艳 野蛮之锤 5888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011116/1547195166_704174346_13021_sProdImgNo_2.jpg/0',
            name: '项羽 霸王 免费获得'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012116/1548061039_1186005513_18938_sProdImgNo_2.jpg/0',
            name: '程咬金 热烈之斧 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011116/1547195346_-888937974_4915_sProdImgNo_2.jpg/0',
            name: '亚瑟 圣骑之力 免费获得'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735081417/1565773415_84828260_20965_sProdImgNo_2.jpg/0',
            name: '刘禅 暴走机关 2888金币/ 588钻石'
          }
        ],
      },
      // 战士
      {
        list: [{
            img: 'http://shp.qpic.cn/ishow/2735062314/1624429443_84828260_3367_sProdImgNo_2.jpg/0',
            name: '云缨 赤焰之缨 13888金币 588点券'
          }, {
            img: 'https://shp.qpic.cn/ishow/2735011317/1610529879_84828260_27040_sProdImgNo_2.jpg/0',
            name: '司空震 启蛰 13888金币 588点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735092117/1600681870_84828260_15424_sProdImgNo_2.jpg/0',
            name: '夏洛特 玫瑰剑士 限时活动获取'
          }, {
            img: 'https://shp.qpic.cn/ishow/2735060310/1591149765_84828260_26202_sProdImgNo_2.jpg/0',
            name: '蒙恬 秩序统将 13888金币 588点券'
          }, {
            img: 'http://shp.qpic.cn/ishow/2735011814/1547792541_587358052_3658_sProdImgNo_2.jpg/0',
            name: '李信 谋世之战 13888金币 588点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735081417/1565774234_84828260_28628_sProdImgNo_2.jpg/0',
            name: '马超 冷晖之枪 18888金币 688点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735062714/1561616373_1186005513_32331_sProdImgNo_2.jpg/0',
            name: '曜 星辰之子 13888金币 588点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735051317/1557741120_-695593207_22743_sProdImgNo_2.jpg/0',
            name: '云中君 流云之翼 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735021910/1550543451_-695593207_5358_sProdImgNo_2.jpg/0',
            name: '盘古 破晓之神 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012917/1548754381_1186005513_9173_sProdImgNo_2.jpg/0',
            name: '猪八戒 无忧猛士 13888金币 588点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735122710/1545878437_-888937974_26623_sProdImgNo_2.jpg/0',
            name: '狂铁 战车意志 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011517/1547544542_1186005513_19951_sProdImgNo_2.jpg/0',
            name: '铠 破灭刃锋 13888金币 588点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735011111/1547176921_-888937974_24374_sProdImgNo_2.jpg/0',
            name: '哪吒 桀骜炎枪 18888金币 688点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735111816/1574064557_84828260_8113_sProdImgNo_2.jpg/0',
            name: '杨戬 根源之目 18888金币 688点券'
          },
          {
            img: 'http://shp.qpic.cn/ishow/2735010416/1546589420_704174346_15291_sProdImgNo_2.jpg/0',
            name: '橘右京 神梦一刀 限时活动获取'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012213/1548136419_587358052_22941_sProdImgNo_2.jpg/0',
            name: '雅典娜 圣域余晖 18888金币 688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011813/1547789812_1186005513_8213_sProdImgNo_2.jpg/0',
            name: '夏侯惇 不羁之风 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011017/1547110879_-888937974_12343_sProdImgNo_2.jpg/0',
            name: '关羽 一骑当千 18888金币 688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011117/1547197827_-888937974_15561_sProdImgNo_2.jpg/0',
            name: '钟馗 虚灵城判 18888金币 688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010717/1546855166_-888937974_13516_sProdImgNo_2.jpg/0',
            name: '刘备 仁德义枪 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012115/1548054917_1186005513_15008_sProdImgNo_2.jpg/0',
            name: '露娜 月光之女 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011016/1547110689_-888937974_8925_sProdImgNo_2.jpg/0',
            name: '宫本武藏 剑圣 18888金币 688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735040920/1617970054_84828260_4697_sProdImgNo_2.jpg/0',
            name: '花木兰 传说之刃 18888金币 688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122815/1545981636_-888937974_3462_sProdImgNo_2.jpg/0',
            name: '李白 青莲剑仙 18888金币 688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012116/1548060971_-888937974_12902_sProdImgNo_2.jpg/0',
            name: '曹操 鲜血枭雄 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011111/1547177195_704174346_10605_sProdImgNo_2.jpg/0',
            name: '孙悟空 齐天大圣 18888金币 688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012118/1548065239_-888937974_31013_sProdImgNo_2.jpg/0',
            name: '吕布 无双之魔 18888金币 688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012116/1548058461_587358052_3249_sProdImgNo_2.jpg/0',
            name: '赵云 苍天翔龙 首充赠送'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011016/1547110559_-888937974_1538_sProdImgNo_2.jpg/0',
            name: '达摩 拳僧 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011117/1547198710_-888937974_27087_sProdImgNo_2.jpg/0',
            name: '钟无艳 野蛮之锤 5888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012116/1548061039_1186005513_18938_sProdImgNo_2.jpg/0',
            name: '程咬金 热烈之斧 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011017/1547110961_704174346_10410_sProdImgNo_2.jpg/0',
            name: '韩信 国士无双 王者水晶兑换'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010718/1546855469_704174346_748_sProdImgNo_2.jpg/0',
            name: '老夫子 万古长明 8888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011116/1547195346_-888937974_4915_sProdImgNo_2.jpg/0',
            name: '亚瑟 圣骑之力 免费获得'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012116/1548061162_-888937974_17425_sProdImgNo_2.jpg/0',
            name: '典韦 狂战士 13888金币 588点券'
          },
        ],
      },
      // 刺客
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735112718/1606472113_84828260_13758_sProdImgNo_2.jpg/0',
            name: '澜 鲨之猎刃 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735031110/1583893326_84828260_8052_sProdImgNo_2.jpg/0',
            name: '镜 碎镜之刃 18888金币 688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735062714/1561616373_1186005513_32331_sProdImgNo_2.jpg/0',
            name: '曜 星辰之子 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735051317/1557741120_-695593207_22743_sProdImgNo_2.jpg/0',
            name: '云中君 流云之翼 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122815/1545982129_-888937974_17438_sProdImgNo_2.jpg/0',
            name: '裴擒虎 六合虎拳 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122520/1545741773_-888937974_15746_sProdImgNo_2.jpg/0',
            name: '百里玄策 嚣狂之镰 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122714/1545892986_-888937974_13413_sProdImgNo_2.jpg/0',
            name: '元歌 无间傀儡 18888金币 688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011818/1547805711_-888937974_10947_sProdImgNo_2.jpg/0',
            name: '不知火舞 明媚烈焰 限时活动获取'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735040920/1617970054_84828260_4697_sProdImgNo_2.jpg/0',
            name: '花木兰 传说之刃 18888金币 688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011017/1547112040_704174346_1128_sProdImgNo_2.jpg/0',
            name: '兰陵王 暗影刀锋 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011111/1547176988_704174346_24806_sProdImgNo_2.jpg/0',
            name: '娜可露露 限时活动获取'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122815/1545981636_-888937974_3462_sProdImgNo_2.jpg/0',
            name: '李白 青莲剑仙 18888金币 688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012117/1548061230_587358052_15546_sProdImgNo_2.jpg/0',
            name: '貂蝉 绝世舞姬 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011111/1547177195_704174346_10605_sProdImgNo_2.jpg/0',
            name: '孙悟空 齐天大圣 18888金币 688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010816/1546935766_704174346_32696_sProdImgNo_2.jpg/0',
            name: '阿轲 信念之刃 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012116/1548058461_587358052_3249_sProdImgNo_2.jpg/0',
            name: '赵云 苍天翔龙 首充赠送'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011017/1547110961_704174346_10410_sProdImgNo_2.jpg/0',
            name: '韩信 国士无双 王者水晶兑换'
          },
        ],
      },
      // 法师
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735092409/1569290387_84828260_13119_sProdImgNo_2.jpg/0',
            name: '西施 幻纱之灵 13888金币 588点券'
          }, {
            img: 'https://shp.qpic.cn/ishow/2735012117/1548061596_704174346_15526_sProdImgNo_2.jpg/0',
            name: '嫦娥 寒月公主 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735041709/1555463252_-888937974_23776_sProdImgNo_2.jpg/0',
            name: '瑶 鹿灵守心 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011814/1547791828_587358052_13686_sProdImgNo_2.jpg/0',
            name: '上官婉儿 惊鸿之笔 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011814/1547792084_-695593207_27593_sProdImgNo_2.jpg/0',
            name: '沈梦溪 爆弹怪猫 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122715/1545894267_-888937974_12918_sProdImgNo_2.jpg/0',
            name: '司马懿 寂灭之心 18888金币 688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011814/1547792386_587358052_30628_sProdImgNo_2.jpg/0',
            name: '米莱狄 筑城者 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122915/1546066997_-888937974_2337_sProdImgNo_2.jpg/0',
            name: '弈星 天元之弈 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011517/1547544871_704174346_7885_sProdImgNo_2.jpg/0',
            name: '梦奇 入梦之灵 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011814/1547793019_587358052_13908_sProdImgNo_2.jpg/0',
            name: '女娲 至高创世 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010816/1546935013_-888937974_18784_sProdImgNo_2.jpg/0',
            name: '干将莫邪 淬命双剑 18888金币 688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012214/1548136810_-695593207_15461_sProdImgNo_2.jpg/0',
            name: '诸葛亮 绝代智谋 18888金币 688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011818/1547805711_-888937974_10947_sProdImgNo_2.jpg/0',
            name: '不知火舞 明媚烈焰 限时活动获取'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012115/1548054917_1186005513_15008_sProdImgNo_2.jpg/0',
            name: '露娜 月光之女 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011116/1547195708_-888937974_27753_sProdImgNo_2.jpg/0',
            name: '周瑜 铁血都督 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012116/1548058359_-695593207_16540_sProdImgNo_2.jpg/0',
            name: '张良 言灵之书 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010717/1546854872_704174346_30315_sProdImgNo_2.jpg/0',
            name: '芈月 永恒之月 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012117/1548061230_587358052_15546_sProdImgNo_2.jpg/0',
            name: '貂蝉 绝世舞姬 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010717/1546854630_-888937974_29228_sProdImgNo_2.jpg/0',
            name: '墨子 和平守望 8888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011815/1547797183_-888937974_29694_sProdImgNo_2.jpg/0',
            name: '王昭君 冰雪之华 8888金币/ 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735062811/1561692452_-695593207_23925_sProdImgNo_2.jpg/0',
            name: '武则天 女帝 荣耀水晶兑换'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735062316/1592899351_84828260_15903_sProdImgNo_2.jpg/0',
            name: '嬴政 王者独尊 688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735071618/1563271868_-1294974199_7569_sProdImgNo_2.jpg/0',
            name: '孙膑 逆流之时 5888金币 588钻石'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012116/1548059201_-888937974_7915_sProdImgNo_2.jpg/0',
            name: '扁鹊 善恶怪医 5888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122520/1545741122_-888937974_29615_sProdImgNo_2.jpg/0',
            name: '安琪拉 暗夜萝莉 8888金币 488钻石'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012116/1548058210_-888937974_17800_sProdImgNo_2.jpg/0',
            name: '小乔 恋之微风 5888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011815/1547798311_-695593207_10577_sProdImgNo_2.jpg/0',
            name: '妲己 魅力之狐 免费获取'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012115/1548054644_1186005513_7543_sProdImgNo_2.jpg/0',
            name: '甄姬 洛神降临 2888金币 588钻石'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011017/1547111328_-888937974_9021_sProdImgNo_2.jpg/0',
            name: '姜子牙 太古魔导 6888金币 388钻石'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012115/1548056808_1186005513_19120_sProdImgNo_2.jpg/0',
            name: '高渐离 叛逆吟游 13888金币 588点券'
          },
        ],
      },
      // 射手
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735011316/1578902973_84828260_7112_sProdImgNo_2.jpg/0',
            name: '蒙犽 烈炮小子 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122815/1545981284_-888937974_30782_sProdImgNo_2.jpg/0',
            name: '伽罗 破魔之箭 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010915/1547020571_704174346_15249_sProdImgNo_2.jpg/0',
            name: '公孙离 幻舞玲珑 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010816/1546936313_704174346_24770_sProdImgNo_2.jpg/0',
            name: '百里守约 静谧之眼 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735040716/1617785692_84828260_15360_sProdImgNo_2.jpg/0',
            name: '艾琳 精灵之舞 限时活动获取'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010718/1546855645_-888937974_3549_sProdImgNo_2.jpg/0',
            name: '黄忠 燃魂重炮 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012117/1548061347_-695593207_11446_sProdImgNo_2.jpg/0',
            name: '成吉思汗 苍狼末裔 18888金币 688点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011017/1547112804_-888937974_23780_sProdImgNo_2.jpg/0',
            name: '马可波罗 远游之枪 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122915/1546067343_-888937974_23120_sProdImgNo_2.jpg/0',
            name: '虞姬 森之风灵 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011517/1547544592_-888937974_8485_sProdImgNo_2.jpg/0',
            name: '李元芳 王都密探 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011517/1547544417_587358052_14174_sProdImgNo_2.jpg/0',
            name: '后羿 半神之弓 6888金币 388点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012115/1548055695_587358052_4454_sProdImgNo_2.jpg/0',
            name: '孙尚香 千金重弩 5888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010915/1547020180_-888937974_30178_sProdImgNo_2.jpg/0',
            name: '狄仁杰 断案大师 8888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012117/1548063908_587358052_30495_sProdImgNo_2.jpg/0',
            name: '鲁班七号 机关造物 8888金币 588钻石'
          },
        ],
      },
      // 辅助
      {
        list: [{
            img: 'https://shp.qpic.cn/ishow/2735041709/1555463252_-888937974_23776_sProdImgNo_2.jpg/0',
            name: '瑶 鹿灵守心 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011815/1547797868_1186005513_14460_sProdImgNo_2.jpg/0',
            name: '盾山 无尽之盾 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735122915/1546066857_-888937974_24682_sProdImgNo_2.jpg/0',
            name: '杨玉环 霓裳风华 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011517/1547545097_-888937974_18837_sProdImgNo_2.jpg/0',
            name: '明世隐 灵魂劫卜 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011517/1547544356_-695593207_3654_sProdImgNo_2.jpg/0',
            name: '鬼谷子 万物有灵 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735010816/1546935488_-888937974_8713_sProdImgNo_2.jpg/0',
            name: '大乔 沧海之曜 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011111/1547177957_704174346_5196_sProdImgNo_2.jpg/0',
            name: '太乙真人 炼金大师 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012116/1548059399_-695593207_13421_sProdImgNo_2.jpg/0',
            name: '蔡文姬 天籁弦音 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011017/1547112459_-888937974_5892_sProdImgNo_2.jpg/0',
            name: '刘邦 双面君主 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011116/1547195507_-888937974_9398_sProdImgNo_2.jpg/0',
            name: '张飞 禁血狂兽 13888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011116/1547196439_-888937974_3961_sProdImgNo_2.jpg/0',
            name: '庄周 逍遥幻梦 2888金币 288钻石'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735071618/1563271868_-1294974199_7569_sProdImgNo_2.jpg/0',
            name: '孙膑 逆流之时 5888金币 588钻石'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735012116/1548059201_-888937974_7915_sProdImgNo_2.jpg/0',
            name: '扁鹊 善恶怪医 5888金币 588点券'
          },
          {
            img: 'https://shp.qpic.cn/ishow/2735011017/1547111328_-888937974_9021_sProdImgNo_2.jpg/0',
            name: '姜子牙 太古魔导 6888金币 388钻石'
          },
        ],
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      index: options.index
    })
  },
  // 去皮肤详情
  goClassifDetail(e) {
    if (this.data.index == 0) {
      // 去坦克详情
      wx.navigateTo({
        url: '../classifyDetail/classifyDetail?index=' + e.currentTarget.dataset.index + '&type=tank',
      })
    } else if (this.data.index == 1) {
      // 去战士详情
      wx.navigateTo({
        url: '../classifyDetail/classifyDetail?index=' + e.currentTarget.dataset.index + '&type=warrior',
      })
    } else if (this.data.index == 2) {
      // 去刺客详情
      wx.navigateTo({
        url: '../classifyDetail/classifyDetail?index=' + e.currentTarget.dataset.index + '&type=assassin',
      })
    } else if (this.data.index == 3) {
      // 去法师详情
      wx.navigateTo({
        url: '../classifyDetail/classifyDetail?index=' + e.currentTarget.dataset.index + '&type=master',
      })
    } else if (this.data.index == 4) {
      // 去射手详情
      wx.navigateTo({
        url: '../classifyDetail/classifyDetail?index=' + e.currentTarget.dataset.index + '&type=shooter',
      })
    } else if (this.data.index == 5) {
      // // 去辅助详情
      wx.navigateTo({
        url: '../classifyDetail/classifyDetail?index=' + e.currentTarget.dataset.index + '&type=assist',
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

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