//引入mockjs
const Mock = require('mockjs');

//获取mock.Random对象
const Random = Mock.Random;

//mock一组数据
const produceNewsData = function() {
    let articles = [];
    for(let i = 0; i < 100; i++){
      let newArticleObject = {
        title: random.csentence(5, 30), //Random.csentence(min, max)
        thumbnail_pic_s: random.dataImage('300*250','mock的图片'), //
        author_name: Ranodom.cname(), //Random.cname()随机生成一个常见的中文姓名
        date:Random.data() + ' ' +Random.time() //Random.date()指示生成的日期字符串的格式
      }
      articles.push(newArticleObject)
    }

    return {
      articles: articles
    }
}

//Mock.mock(url ,post/get , 返回的数据)
Mock.mock('/news.idnex', 'post', produceNewsData())
