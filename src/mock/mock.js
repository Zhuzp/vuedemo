//引入mockjs
const Mock = require('mockjs');

// //获取mock.Random对象
// const Random = Mock.Random;
//
// //mock一组数据
// const produceNewsData = function() {
//     let articles = [];
//     for(let i = 0; i < 100; i++){
//       let newArticleObject = {
//         title: random.csentence(5, 30), //Random.csentence(min, max)
//         thumbnail_pic_s: random.dataImage('300*250','mock的图片'), //
//         author_name: Ranodom.cname(), //Random.cname()随机生成一个常见的中文姓名
//         date:Random.data() + ' ' +Random.time() //Random.date()指示生成的日期字符串的格式
//       }
//       articles.push(newArticleObject)
//     }
//
//     return {
//       articles: articles
//     }
// }
//
// //Mock.mock(url ,post/get , 返回的数据)
// Mock.mock('/news.index', 'post', produceNewsData())
let Random = Mock.Random

Mock.mock('/news/index',{
  "seller": {
    "name": "@cname",
    "description": "@csentence",
    "deliveryTime|28-38": 0,
    "score|1-5.1": 0,
    "serviceScore|1-5.1": 0,
    "foodScore|1-5.1": 0,
    "rankRate|1-100": 0,
    "minPrice|15-30": 0,
    "deliveryPrice|1-9": 0,
    "ratingCount|1-100.1": 0,
    "sellCount|1-100": 0,
    "bulletin": "@csentence",
    "imgUrl": Random.image( "40*40", "#fff", "haha" )
    // "supports": [
    //   {
    //     "type": 0,
    //     "description": "在线支付满28减5"
    //   },
    //   {
    //     "type": 1,
    //     "description": "VC无限橙果汁全场8折"
    //   },
    //   {
    //     "type": 2,
    //     "description": "单人精彩套餐"
    //   },
    //   {
    //     "type": 3,
    //     "description": "该商家支持发票,请下单写好发票抬头"
    //   },
    //   {
    //     "type": 4,
    //     "description": "已加入“外卖保”计划,食品安全保障"
    //   }
    // ],
    // "avatar": "http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg",
    // "pics": [
    //   "http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180",
    //   "http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180",
    //   "http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180",
    //   "http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180"
    // ],
    // "infos": [
    //   "该商家支持发票,请下单写好发票抬头",
    //   "品类:其他菜系,包子粥店",
    //   "北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340",
    //   "营业时间:10:00-20:30"
    // ]
  },
})
