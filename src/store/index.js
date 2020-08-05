import Vue from 'vue'
import Vuex from 'vuex'

import user from "./user"
import cart from "./cart"
import order from "./order"
import collect from "./collect"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //商品信息
    product:[
      {
        product_id: 1,
        product_name: "Redmi K30",
        category_id: 1,
        product_title: "120Hz流速屏，全速热爱",
        product_intro: "120Hz高帧率流速屏/ 索尼6400万前后六摄 / 6.67'小孔径全面屏 / 最高可选8GB+256GB大存储 / 高通骁龙730G处理器 / 3D四曲面玻璃机身 / 4500mAh+27W快充 / 多功能NFC",
        product_picture: require("../assets/imgs/phone/Redmi-k30.png"),
        product_price: 2000,
        product_selling_price: 1599,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/Redmi-k30-1.png"),
          require("../assets/imgs/phone/picture/Redmi-k30-2.png"),
          require("../assets/imgs/phone/picture/Redmi-k30-3.png"),
          require("../assets/imgs/phone/picture/Redmi-k30-4.png"),
          require("../assets/imgs/phone/picture/Redmi-k30-5.png"),
        ]
      },
      {
        product_id: 2,
        product_name: "Redmi K30 5G",
        category_id: 1,
        product_title: "双模5G,120Hz流速屏",
        product_intro: "双模5G / 三路并发 / 高通骁龙765G / 7nm 5G低功耗处理器 / 120Hz高帧率流速屏 / 6.67'小孔径全面屏 / 索尼6400万前后六摄 / 最高可选8GB+256GB大存储 / 4500mAh+30W快充 / 3D四曲面玻璃机身 / 多功能NFC",
        product_picture: require("../assets/imgs/phone/Redmi-k30-5G.png"),
        product_price: 2599,
        product_selling_price: 2599,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/Redmi K30 5G-1.jpg"),
          require("../assets/imgs/phone/picture/Redmi K30 5G-2.jpg"),
          require("../assets/imgs/phone/picture/Redmi K30 5G-3.jpg"),
          require("../assets/imgs/phone/picture/Redmi K30 5G-4.jpg"),
          require("../assets/imgs/phone/picture/Redmi K30 5G-5.jpg"),
        ]
      
      },
      {
        product_id: 3,
        product_name: "小米CC9 Pro",
        category_id: 1,
        product_title: "1亿像素,五摄四闪",
        product_intro: "1亿像素主摄 / 全场景五摄像头 / 四闪光灯 / 3200万自拍 / 10 倍混合光学变焦，50倍数字变焦 / 5260mAh ⼤电量 / 标配 30W疾速快充 / ⼩米⾸款超薄屏下指纹 / 德国莱茵低蓝光认证 / 多功能NFC / 红外万能遥控 / 1216超线性扬声器",
        product_picture: require("../assets/imgs/phone/Mi-CC9.png"),
        product_price: 2799,
        product_selling_price: 2599,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/MI CC9 Pro-1.jpg"),
          require("../assets/imgs/phone/picture/MI CC9 Pro-2.jpg"),
          require("../assets/imgs/phone/picture/MI CC9 Pro-3.jpg"),
          require("../assets/imgs/phone/picture/MI CC9 Pro-4.jpg"),
          require("../assets/imgs/phone/picture/MI CC9 Pro-5.jpg"),
        ]
      },
      {
        product_id: 4,
        product_name: "Redmi 8",
        category_id: 1,
        product_title: "5000mAh超长续航",
        product_intro: "5000mAh超长续航 / 高通骁龙439八核处理器 / 4GB+64GB",
        product_picture: require("../assets/imgs/phone/Redmi-8.png"),
        product_price: 799,
        product_selling_price: 699,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/Redmi 8-1.jpg"),
          require("../assets/imgs/phone/picture/Redmi 8-2.jpg"),
          require("../assets/imgs/phone/picture/Redmi 8-3.jpg"),
          require("../assets/imgs/phone/picture/Redmi 8-4.jpg"),
          require("../assets/imgs/phone/picture/Redmi 8-5.jpg"),
        ]
      },
      {
        product_id: 5,
        product_name: "Redmi 8A",
        category_id: 1,
        product_title: "5000mAh超长续航",
        product_intro: "5000mAh超长续航 / 高通骁龙439八核处理器 / 4GB+64GB / 1200万AI后置相机",
        product_picture: require("../assets/imgs/phone/Redmi-8A.png"),
        product_price: 599,
        product_selling_price: 699,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/Redmi 8A-1.jpg"),
      ]
      },
      {
        product_id: 6,
        product_name: "Redmi Note8 Pro",
        category_id: 1,
        product_title: "6400万全场景四摄",
        product_intro: "6400万四摄小金刚拍照新旗舰超强解析力，超震撼",
        product_picture: require("../assets/imgs/phone/Redmi-Note8-pro.png"),
        product_price: 1399,
        product_selling_price: 1199,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/Redmi Note8 Pro-1.png"),
          require("../assets/imgs/phone/picture/Redmi Note8 Pro-2.png"),
          require("../assets/imgs/phone/picture/Redmi Note8 Pro-3.png"),
          require("../assets/imgs/phone/picture/Redmi Note8 Pro-4.png"),
          require("../assets/imgs/phone/picture/Redmi Note8 Pro-5.png"),
      ]
      },
      {
        product_id: 7,
        product_name: "Redmi Note8",
        category_id: 1,
        product_title: "千元4800万四摄",
        product_intro: "千元4800万四摄 | 高通骁龙665 | 小金刚品质保证",
        product_picture: require("../assets/imgs/phone/Redmi-Note8.png"),
        product_price: 999,
        product_selling_price: 999,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/Redmi Note8-1.jpg"),
          require("../assets/imgs/phone/picture/Redmi Note8-2.jpg"),
          require("../assets/imgs/phone/picture/Redmi Note8-3.jpg"),
          require("../assets/imgs/phone/picture/Redmi Note8-4.jpg"),
          require("../assets/imgs/phone/picture/Redmi Note8-5.jpg"),
      ]
      },
      {
        product_id: 8,
        product_name: "Redmi 7A",
        category_id: 1,
        product_title: "小巧大电量 持久流畅",
        product_intro: "小巧大电量，持久又流畅骁龙8核高性能处理器 | 4000mAh超长续航 | AI人脸解锁 | 整机防泼溅",
        product_picture: require("../assets/imgs/phone/Redmi-7A.png"),
        product_price: 599,
        product_selling_price: 539,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/Redmi 7A-1.jpg"),
          require("../assets/imgs/phone/picture/Redmi 7A-2.jpg"),
          require("../assets/imgs/phone/picture/Redmi 7A-3.jpg"),
          require("../assets/imgs/phone/picture/Redmi 7A-4.jpg"),
          require("../assets/imgs/phone/picture/Redmi 7A-5.jpg"),
      ]
      },
      {
        product_id: 9,
        product_name: "小米电视4A 32英寸",
        category_id: 2,
        product_title: "人工智能系统，高清液晶屏",
        product_intro: "小米电视4A 32英寸 | 64位四核处理器 | 1GB+4GB大内存 | 人工智能系统",
        product_picture: require("../assets/imgs/appliance/MiTv-4A-32.png"),
        product_price: 799,
        product_selling_price: 799,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/MiTv-4A-32-1.jpg"),
          require("../assets/imgs/phone/picture/MiTv-4A-32-2.jpg"),
          require("../assets/imgs/phone/picture/MiTv-4A-32-3.jpg"),
          require("../assets/imgs/phone/picture/MiTv-4A-32-4.jpg"),
      ]
      },
      {
        product_id: 10,
        product_name: "小米全面屏电视E55A",
        category_id: 2,
        product_title: "全面屏设计，人工智能语音",
        product_intro: "全面屏设计 | 内置小爱同学 | 4K + HDR | 杜比DTS | PatchWall | 海量内容 | 2GB + 8GB大存储 | 64位四核处理器",
        product_picture: require("../assets/imgs/appliance/MiTv-E55A.png"),
        product_price: 2099,
        product_selling_price: 1899,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/MiTv-E55A-1.jpg"),
          require("../assets/imgs/phone/picture/MiTv-E55A-2.jpg"),
          require("../assets/imgs/phone/picture/MiTv-E55A-3.jpg"),
          require("../assets/imgs/phone/picture/MiTv-E55A-4.jpg"),
      ]
      },
      {
        product_id: 11,
        product_name: "小米全面屏电视E65A",
        category_id: 2,
        product_title: "全面屏设计，人工智能语音",
        product_intro: "人工智能语音系统 | 海量影视内容 | 4K 超高清屏 | 杜比音效 | 64位四核处理器 | 2GB + 8GB大存储",
        product_picture: require("../assets/imgs/appliance/MiTv-E65A.png"),
        product_price: 3999,
        product_selling_price: 2799,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/MiTv-E65A-1.jpg"),
          require("../assets/imgs/phone/picture/MiTv-E65A-2.jpg"),
          require("../assets/imgs/phone/picture/MiTv-E65A-3.jpg"),
          require("../assets/imgs/phone/picture/MiTv-E65A-4.jpg"),
      ]
      },
      {
        product_id: 12,
        product_name: "小米电视4X 43英寸",
        category_id: 2,
        product_title: "FHD全高清屏，人工智能语音",
        product_intro: "人工智能语音系统 | FHD全高清屏 | 64位四核处理器 | 海量片源 | 1GB+8GB大内存 | 钢琴烤漆",
        product_picture: require("../assets/imgs/appliance/MiTv-4X-43.png"),
        product_price: 1499,
        product_selling_price: 1299,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/MiTv-4X 43-1.jpg"),
          require("../assets/imgs/phone/picture/MiTv-4X 43-2.jpg"),
          require("../assets/imgs/phone/picture/MiTv-4X 43-3.jpg"),
      ]
      },
      {
        product_id: 13,
        product_name: "小米电视4C 55英寸",
        category_id: 2,
        product_title: "4K HDR，人工智能系统",
        product_intro: "人工智能 | 大内存 | 杜比音效 | 超窄边 | 4K HDR | 海量片源 | 纤薄机身| 钢琴烤漆",
        product_picture: require("../assets/imgs/appliance/MiTv-4C-55.png"),
        product_price: 1999,
        product_selling_price: 1799,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/MiTv-4C 55-1.jpg"),
          require("../assets/imgs/phone/picture/MiTv-4C 55-2.jpg"),
          require("../assets/imgs/phone/picture/MiTv-4C 55-3.jpg"),
      ]
      },
      {
        product_id: 14,
        product_name: "小米电视4A 65英寸",
        category_id: 2,
        product_title: "4K HDR，人工智能系统",
        product_intro: "人工智能 | 大内存 | 杜比音效 | 超窄边 | 4K HDR | 海量片源 | 纤薄机身| 钢琴烤漆",
        product_picture: require("../assets/imgs/appliance/MiTv-4A-65.png"),
        product_price: 2999,
        product_selling_price: 2799,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/MiTv-4A 65-1.jpg"),
      ]
      },
      {
        product_id: 15,
        product_name: "小米壁画电视 65英寸",
        category_id: 2,
        product_title: "壁画外观，全面屏，远场语音",
        product_intro: "纯平背板 | 通体13.9mm | 远场语音 | 4K+HDR | 杜比+DTS | 画框模式 | 内置小爱同学 | PatchWall | SoundBar+低音炮 | 四核处理器+大存储",
        product_picture: require("../assets/imgs/appliance/MiTv-ArtTv-65.png"),
        product_price: 6999,
        product_selling_price: 6999,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/MiTv-ArtTv-65-1.jpg"),
      ]
      },
      {
        product_id: 16,
        product_name: "米家互联网空调C1（一级能效）",
        category_id: 3,
        product_title: "变频节能省电，自清洁",
        product_intro: "一级能效 | 1.5匹 | 全直流变频 | 高效制冷/热 | 静音设计 | 自清洁 | 全屋互联",
        product_picture: require("../assets/imgs/appliance/AirCondition-V1C1.png"),
        product_price: 2699,
        product_selling_price: 2599,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/AirCondition-V1C1-1.jpg"),
      ]
      },
      {
        product_id: 17,
        product_name: "米家空调",
        category_id: 3,
        product_title: "出众静音，快速制冷热",
        product_intro: "大1匹 | 三级能效 | 静音 | 快速制冷热 | 广角送风 | 除湿功能 | 高密度过滤网 | 典雅外观",
        product_picture: require("../assets/imgs/appliance/AirCondition-F3W1.png"),
        product_price: 1799,
        product_selling_price: 1699,
        product_sales: 8,
        details_picture :[
          require("../assets/imgs/phone/picture/AirCondition-F3W1-1.jpg"),
      ]
      },
      {
        product_id: 18,
        product_name: "米家互联网洗烘一体机 Pro 10kg",
        category_id: 4,
        product_title: "智能洗烘，省心省力",
        product_intro: "国标双A+级洗烘能力 / 22种洗烘模式 / 智能投放洗涤剂 / 支持小爱同学语音遥控 / 支持OTA在线智能升级 / 智能空气洗 / 除菌率达99.9%+",
        product_picture: require("../assets/imgs/appliance/Washer-Pro-10.png"),
        product_price: 2999,
        product_selling_price: 2999,
        product_sales: 7,
        details_picture :[
          require("../assets/imgs/phone/picture/Washer-Pro-10-1.jpg"),
          require("../assets/imgs/phone/picture/Washer-Pro-10-2.jpg"),
          require("../assets/imgs/phone/picture/Washer-Pro-10-3.jpg"),
          require("../assets/imgs/phone/picture/Washer-Pro-10-4.jpg"),
      ]
      },
      {
        product_id: 19,
        product_name: "Redmi K20/ K20 Pro 怪力魔王保护壳",
        category_id: 5,
        product_title: "怪力魔王专属定制",
        product_intro: "优选PC材料，强韧张力，经久耐用 / 精选开孔，全面贴合机身 / 手感轻薄细腻，舒适无负担 / 三款颜色可选，彰显个性，与众不同",
        product_picture: require("../assets/imgs/accessory/protectingShell-RedMi-K20&pro.png"),
        product_price: 39,
        product_selling_price: 39,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/protectingShell-RedMi-K20&pro-1.jpg"),
      ]
      },
      {
        product_id: 20,
        product_name: "小米9 ARE U OK保护壳",
        category_id: 5,
        product_title: "一个与众不同的保护壳",
        product_intro: "彰显独特个性 / 轻薄无负担 / 优选PC材料 / 贴合机身 / 潮流五色",
        product_picture: require("../assets/imgs/accessory/protectingShell-Mi-9.png"),
        product_price: 49,
        product_selling_price: 39,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/protectingShell-Mi-9-1.jpg"),
          require("../assets/imgs/phone/picture/protectingShell-Mi-9-2.jpg"),
      ]
      },
      {
        product_id: 21,
        product_name: "小米CC9&小米CC9美图定制版 标准高透贴膜",
        category_id: 6,
        product_title: "高清透亮，耐磨性强",
        product_intro: "耐磨性强，防护更出众 / 疏油疏水，有效抗水抗脏污 / 高清透亮，保留了原生屏幕的亮丽颜色和清晰度 / 操作灵敏，智能吸附 / 进口高端PET材质，裸机般手感",
        product_picture: require("../assets/imgs/accessory/protectingMen-Mi-CC9.png"),
        product_price: 19,
        product_selling_price: 19,
        product_sales: 9,
        details_picture :[
          require("../assets/imgs/phone/picture/protectingMen-Mi-CC9-1.jpg"),
      ]
      },
      {
        product_id: 22,
        product_name: "小米CC9e 标准高透贴膜",
        category_id: 6,
        product_title: "高清透亮，耐磨性强",
        product_intro: "耐磨性强，防护更出众 / 疏油疏水，有效抗水抗脏污 / 高清透亮，保留了原生屏幕的亮丽颜色和清晰度 / 操作灵敏，智能吸附 / 进口高端PET材质，裸机般手感",
        product_picture: require("../assets/imgs/accessory/protectingMen-Mi-CC9e.png"),
        product_price: 19,
        product_selling_price: 19,
        product_sales: 9,
        details_picture :[
          require("../assets/imgs/phone/picture/protectingMen-Mi-CC9e-1.jpg"),
      ]
      },
      {
        product_id: 23,
        product_name: "小米USB充电器30W快充版（1A1C）",
        category_id: 7,
        product_title: "多一种接口，多一种选择",
        product_intro: "双口输出 / 30W 输出 / 可折叠插脚 / 小巧便携",
        product_picture: require("../assets/imgs/accessory/charger-30w.png"),
        product_price: 59,
        product_selling_price: 59,
        product_sales: 8,
        details_picture :[
          require("../assets/imgs/phone/picture/charger-30w-1.jpg"),
          require("../assets/imgs/phone/picture/charger-30w-2.jpg"),
          require("../assets/imgs/phone/picture/charger-30w-3.jpg"),
          require("../assets/imgs/phone/picture/charger-30w-4.jpg"),
      ]
      },
      {
        product_id: 24,
        product_name: "小米USB充电器快充版（18W）",
        category_id: 7,
        product_title: "安卓、苹果设备均可使用",
        product_intro: "支持QC3.0设备充电 / 支持iOS设备充电/ 美观耐用",
        product_picture: require("../assets/imgs/accessory/charger-18w.png"),
        product_price: 29,
        product_selling_price: 29,
        product_sales: 8,
        details_picture :[
          require("../assets/imgs/phone/picture/charger-18w-1.jpg"),
          require("../assets/imgs/phone/picture/charger-18w-2.jpg"),
          require("../assets/imgs/phone/picture/charger-18w-3.jpg"),
      ]
      },
      {
        product_id: 25,
        product_name: "小米USB充电器60W快充版（6口）",
        category_id: 7,
        product_title: "6口输出，USB-C输出接口",
        product_intro: "6口输出 / USB-C输出接口 / 支持QC3.0快充协议 / 总输出功率60W",
        product_picture: require("../assets/imgs/accessory/charger-60w.png"),
        product_price: 129,
        product_selling_price: 129,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/charger-60w-1.jpg"),
          require("../assets/imgs/phone/picture/charger-60w-2.jpg"),
          require("../assets/imgs/phone/picture/charger-60w-3.jpg"),
          require("../assets/imgs/phone/picture/charger-60w-4.jpg"),
      ]
      },
      {
        product_id: 26,
        product_name: "小米USB充电器36W快充版（2口）",
        category_id: 7,
        product_title: "6多重安全保护，小巧便携",
        product_intro: "双USB输出接口 / 支持QC3.0快充协议 / 多重安全保护 / 小巧便携",
        product_picture: require("../assets/imgs/accessory/charger-36w.png"),
        product_price: 59,
        product_selling_price: 59,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/charger-36w-1.jpg"),
          require("../assets/imgs/phone/picture/charger-36w-2.jpg"),
          require("../assets/imgs/phone/picture/charger-36w-3.jpg"),
          require("../assets/imgs/phone/picture/charger-36w-4.jpg"),
          require("../assets/imgs/phone/picture/charger-36w-5.jpg"),
      ]
      },
      {
        product_id: 27,
        product_name: "小米车载充电器快充版",
        category_id: 7,
        product_title: "让爱车成为移动充电站",
        product_intro: "QC3.0 双口输出 / 智能温度控制 / 5重安全保护 / 兼容iOS&Android设备",
        product_picture: require("../assets/imgs/accessory/charger-car.png"),
        product_price: 69,
        product_selling_price: 69,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/charger-car-1.jpg"),
          require("../assets/imgs/phone/picture/charger-car-2.jpg"),
          require("../assets/imgs/phone/picture/charger-car-3.jpg"),
          require("../assets/imgs/phone/picture/charger-car-4.jpg"),
          require("../assets/imgs/phone/picture/charger-car-5.jpg"),
          require("../assets/imgs/phone/picture/charger-car-6.jpg"),
      ]
      },
      {
        product_id: 28,
        product_name: "小米车载充电器快充版(37W)",
        category_id: 7,
        product_title: "双口快充，车载充电更安全",
        product_intro: "单口27W 快充 / 双口输出 / 多重安全保护",
        product_picture: require("../assets/imgs/accessory/charger-car-37w.png"),
        product_price: 49,
        product_selling_price: 49,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/charger-car-37w-1.jpg"),
          require("../assets/imgs/phone/picture/charger-car-37w-2.jpg"),
          require("../assets/imgs/phone/picture/charger-car-37w-3.jpg"),
          require("../assets/imgs/phone/picture/charger-car-37w-4.jpg"),
          require("../assets/imgs/phone/picture/charger-car-37w-5.jpg"),
      ]
      
      },
      {
        product_id: 29,
        product_name: "小米二合一移动电源（充电器）",
        category_id: 7,
        product_title: "一个设备多种用途",
        product_intro: "5000mAh充沛电量 / 多协议快充 / USB 口输出",
        product_picture: require("../assets/imgs/accessory/charger-tio.png"),
        product_price: 99,
        product_selling_price: 99,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/charger-tio-1.jpg"),
          require("../assets/imgs/phone/picture/charger-tio-2.jpg"),
          require("../assets/imgs/phone/picture/charger-tio-3.jpg"),
          require("../assets/imgs/phone/picture/charger-tio-4.jpg"),
          require("../assets/imgs/phone/picture/charger-tio-5.jpg"),
      ]
      },
      {
        product_id: 30,
        product_name: "小米无线充电宝青春版10000mAh",
        category_id: 8,
        product_title: "能量满满，无线有线都能充",
        product_intro: "10000mAh大容量 / 支持边充边放 / 有线无线都能充 / 双向快充",
        product_picture: require("../assets/imgs/accessory/charger-10000mAh.png"),
        product_price: 129,
        product_selling_price: 129,
        product_sales: 8,
        details_picture :[
          require("../assets/imgs/phone/picture/charger-10000mAh-1.jpg"),
          require("../assets/imgs/phone/picture/charger-10000mAh-2.jpg"),
          require("../assets/imgs/phone/picture/charger-10000mAh-3.jpg"),
          require("../assets/imgs/phone/picture/charger-10000mAh-4.jpg"),
          require("../assets/imgs/phone/picture/charger-10000mAh-5.jpg"),
      ]
      },
      {
        product_id: 31,
        product_name: "小米CC9 Pro/尊享版 撞色飘带保护壳",
        category_id: 5,
        product_title: "全面贴合，无感更舒适",
        product_intro: "优选环保PC材质，强韧张力，全面贴合，无感更舒适",
        product_picture: require("../assets/imgs/accessory/protectingShell-Mi-CC9Pro.png"),
        product_price: 69,
        product_selling_price: 69,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/protectingShell-Mi-CC9Pro-1.jpg"),
      ]
      },
      {
        product_id: 32,
        product_name: "Redmi K20系列 幻境之心保护壳",
        category_id: 5,
        product_title: "柔软坚韧,全面贴合",
        product_intro: "优质环保材质，柔软坚韧 / 全面贴合，有效抵抗灰尘 / 鲜亮三种颜色可选，为爱机随时换装",
        product_picture: require("../assets/imgs/accessory/protectingShell-RedMi-K20.png"),
        product_price: 39,
        product_selling_price: 39,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/protectingShell-RedMi-K20-1.jpg"),
      ]
      },
      {
        product_id: 33,
        product_name: "小米9 SE 街头风保护壳黑色",
        category_id: 5,
        product_title: "个性时尚,细节出众",
        product_intro: "个性时尚 / 细节出众 / 纤薄轻巧 / 多彩时尚",
        product_picture: require("../assets/imgs/accessory/protectingShell-Mi-9SE.png"),
        product_price: 49,
        product_selling_price: 49,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/protectingShell-Mi-9SE-1.jpg"),
      ]
      },
      {
        product_id: 34,
        product_name: "小米9 街头风保护壳 红色",
        category_id: 5,
        product_title: "个性时尚,细节出众",
        product_intro: "时尚多彩 / 细节出众 / 纤薄轻巧 / 是腕带也是支架",
        product_picture: require("../assets/imgs/accessory/protectingShell-Mi-9-red.png"),
        product_price: 49,
        product_selling_price: 49,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/protectingShell-Mi-9-red-1.jpg"),
      ]
      },
      {
        product_id: 35,
        product_name: "小米MIX 3 极简保护壳蓝色",
        category_id: 5,
        product_title: "时尚简约设计，手感细腻顺滑",
        product_intro: "时尚简约设计，手感细腻顺滑 / 优质环保PC原材料，强韧张力，经久耐用 / 超薄 0.8MM厚度",
        product_picture: require("../assets/imgs/accessory/protectingShell-Mix-3.png"),
        product_price: 49,
        product_selling_price: 12.9,
        product_sales: 10,
        details_picture :[
          require("../assets/imgs/phone/picture/protectingShell-Mix-3-1.jpg"),
      ]
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,//用户登录状态模块
    cart, //购物车模块
    order, //订单模块
    collect //收藏模块
    
  }
})
