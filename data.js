/**
 * 雪球: https://mp.xueqiu.com/xq/statuses/author/single_analysis.json?start_time=1584892800000&end_time=1586102399000
 * 头条号: https://mp.toutiao.com/mp/agw/statistic/content/content_article_daily_stat?stat_type=2&start_date=20200330&end_date=20200405&pagenum=1
 * 知乎: https://www.zhihu.com/api/v4/creator/content_statistics/answers?order_field=object_created&order_sort=descend&begin_date=2020-03-30&end_date=2020-04-06&page_no=1
 * 观察者网
 * 招财号: https://pgcweb.cs.cmbchina.com/api/articles-statistics/paging/by-article?beginTime=2020-03-31T00%3A00%3A00&endTime=2020-04-06T23%3A59%3A59&pageIndex=1&pageSize=10
 */

 // 雪球返回示例：
 // {"user_id":6082466277,"start_time":1584892800000,"end_time":1586102399000,"list":[{"status_id":145133686,"user_id":0,"title":"沙特八爷党，搅起世界的惊涛骇浪","status_count":0,"view_count":7064,"reply_count":4,"retweet_count":1,"fav_count":0,"like_count":3,"created_at":"2020-03-25 16:48:14.0","day":"20200325"},{"status_id":145249588,"user_id":0,"title":"如何在34万亿的盛宴里喝口汤","status_count":0,"view_count":4803,"reply_count":0,"retweet_count":0,"fav_count":0,"like_count":1,"created_at":"2020-03-26 16:39:41.0","day":"20200326"},{"status_id":145252723,"user_id":0,"title":"四万亿再度杀到，就问你上不上车","status_count":0,"view_count":5955,"reply_count":0,"retweet_count":0,"fav_count":0,"like_count":1,"created_at":"2020-03-26 17:11:29.0","day":"20200326"},{"status_id":145486051,"user_id":0,"title":"2.2万亿，美帝这作业抄的中国目瞪口呆","status_count":0,"view_count":4405,"reply_count":1,"retweet_count":0,"fav_count":0,"like_count":2,"created_at":"2020-03-29 20:30:06.0","day":"20200329"},{"status_id":145547072,"user_id":0,"title":"为国为民，中国要放水加入海王争霸","status_count":0,"view_count":1166,"reply_count":0,"retweet_count":0,"fav_count":0,"like_count":2,"created_at":"2020-03-30 14:44:05.0","day":"20200330"},{"status_id":145727717,"user_id":0,"title":"今非昔比，中小企业要换种活法了","status_count":0,"view_count":7601,"reply_count":0,"retweet_count":0,"fav_count":0,"like_count":2,"created_at":"2020-04-01 00:10:39.0","day":"20200401"},{"status_id":146109205,"user_id":0,"title":"有一技傍身，防大佬暴打。","status_count":0,"view_count":1327,"reply_count":0,"retweet_count":0,"fav_count":0,"like_count":0,"created_at":"2020-04-05 23:18:10.0","day":"20200405"},{"status_id":146109763,"user_id":0,"title":"这当下，处处在逼你花钱","status_count":0,"view_count":961,"reply_count":0,"retweet_count":0,"fav_count":0,"like_count":1,"created_at":"2020-04-05 23:37:14.0","day":"20200405"}],"total_analysis_view":null,"total_relation":null}

 // 头条号示例：
 // {"code":0,"data":{"data_list":[{"ad_click_count":0,"ad_inject":0,"ad_play_count":0,"ad_show_count":0,"article_id":"6793193943036068363","comment_count":0,"content_cntw":0,"external_visit_count":25,"go_detail_count":235,"growth_count":0,"image_cnt":34,"impression_count":12684,"is_original":false,"is_video":false,"link":"http://toutiao.com/i6793193943036068363","media_id":"1630979322185736","pgc_article_type":0,"play_effective_count":0,"publish_num":0,"publish_time":"","repin_count":1,"search_go_detail_count":0,"share_count":0,"surbscribe_go_detail_count":0,"surbscribe_play_effective_count":0,"title":"五菱牌口罩不开玩笑！人民需要什么，他就生产什么！"}],"end_date":"20200405","pagenum":1,"start_date":"20200330","total_num":1,"total_pagenum":1},"message":"success"}

 // 知乎示例
 // {"count": 3, "data": [{"read_count": 80, "thanked_count": 1, "collected_count": 0, "title": "\u6709\u4e00\u6280\u508d\u8eab\uff0c\u9632\u5927\u4f6c\u66b4\u6253 \u6625\u6696\u82b1\u5f00\uff0c\u5386\u53f2\u5c42\u51fa\u4e0d\u7a77\u30021\u6628\u5929\u53c8\u591a\u4e86\u4e00\u4e2a\u65b0\u82b1\u6837\uff0c\u88ab\u8feb\u627f\u8ba4\u9020\u5047\u6536\u516522\u4ebf\u3001\u80a1\u4ef76\u6b21\u7194\u65ad\u3001\u4e00\u591c\u66b4\u8dcc352\u4ebf\uff0c\u53f7\u79f0\u66b4\u5272\u8d44\u672c\u4e3b\u4e49\u97ed\u83dc\u7684\u745e\u5e78 [\u56fe\u7247]", "upvoted_count": 2, "object_created": "2020-04-04", "url_token": "1126829191", "commented_count": 0}, {"read_count": 8, "thanked_count": 0, "collected_count": 0, "title": "\u6709\u540d\u6709\u59d3\u7684\u4f60\uff0c\u8981\u4e3e\u597d\u5148\u7956\u7684\u65d7\u5e1c \u539f\u521b \u5357\u82d1\u5927\u738b \u9274\u8336\u9662 [\u56fe\u7247]", "upvoted_count": 0, "object_created": "2020-04-04", "url_token": "1129119288", "commented_count": 0}, {"read_count": 108, "thanked_count": 1, "collected_count": 0, "title": "\u4eca\u975e\u6614\u6bd4\uff0c\u4e2d\u5c0f\u4f01\u4e1a\u8981\u6362\u79cd\u6d3b\u6cd5\u4e86\u4e2d\u56fd\u6c11\u4f01\u8fc7\u53bb\u5efa\u7acb\u7684\u57fa\u7840\u662f\u4ec0\u4e48\u5462\uff1f\u4e00\u662f\u9700\u6c42\u4e0d\u9971\u548c\uff0c\u5927\u5bb6\u9700\u8981\u7684\u4e1c\u897f\u751f\u4ea7\u4e0d\u51fa\u6765\u3002\u5148\u89e3\u51b3\u6709\u65e0\u7684\u95ee\u9898\u3002 \u4e8c\u662f\u4fe1\u606f\u4e0d\u900f\u660e\uff0c\u4f9b\u9500\u4e4b\u95f4\u5b58\u5728\u4fe1\u606f\u5dee\uff0c\u56e0\u6b64\u53ef\u4ee5\u62fc\u7f1d\uff0c\u9760\u4e0d\u5bf9\u7b49\u8d5a\u94b1\u3002\u5982\u4eca\uff0c\u4ea7\u54c1\u8fc7\u5269\u7684\u5df2\u7ecf\u53bb\u4ea7\u80fd\u4e86\uff0c\u4f4e\u7aef\u91cd\u590d\u7684\u5546\u54c1\u8d8a\u6765\u8d8a\u4e0d\u53d7\u9752\u7750\uff0c\u4e49\u4e4c\u5546\u8d38\u57ce\u57fa\u672c\u90fd\u662f\u9ed1\u4eba\u548c\u7b2c\u4e09\u4e16\u754c\u56fd\u5bb6\u7684\u5144\u5f1f\uff1b\u79fb\u52a8\u4e92\u8054\u5df2\u7ecf\u6df1\u5165\u5343\u5bb6\u4e07\u6237\uff0c\u81ea\u5a92\u4f53\u548c\u77ed", "upvoted_count": 5, "object_created": "2020-03-31", "url_token": "1118963223", "commented_count": 2}]}

 // 观察者网

 // 招财号示例
 // {"pageSize":10,"totalSize":13,"items":[{"title":"王冠与新冠：一百二十年的国运轮转","effectTime":"2020-04-06T10:02:00","readCount":0,"fansReadCount":0,"commentCount":0,"hitCount":0,"shareCount":0,"fansIncrementCount":0},{"title":"瑞幸，美帝的特洛伊木马","effectTime":"2020-04-06T08:58:03.197","readCount":40,"fansReadCount":1,"commentCount":11,"hitCount":0,"shareCount":5,"fansIncrementCount":1},{"title":"生死存亡的时刻，金融界的风控们醒醒吧","effectTime":"2020-04-05T10:30:25.49","readCount":7,"fansReadCount":0,"commentCount":0,"hitCount":0,"shareCount":2,"fansIncrementCount":0},{"title":"有名有姓的你，要举好先祖的旗帜","effectTime":"2020-04-05T08:58:33.643","readCount":22,"fansReadCount":0,"commentCount":1,"hitCount":0,"shareCount":4,"fansIncrementCount":0},{"title":"这当下，处处在逼你花钱","effectTime":"2020-04-05T08:55:30.197","readCount":7,"fansReadCount":1,"commentCount":0,"hitCount":0,"shareCount":0,"fansIncrementCount":0},{"title":"熔断、疫情、全世界的王炸与危机悬崖","effectTime":"2020-04-04T09:35:39.84","readCount":10,"fansReadCount":0,"commentCount":0,"hitCount":1,"shareCount":1,"fansIncrementCount":0},{"title":"美帝送中国一个天大的馅饼","effectTime":"2020-04-04T09:29:59.31","readCount":227,"fansReadCount":1,"commentCount":7,"hitCount":4,"shareCount":12,"fansIncrementCount":6},{"title":"逆风飞扬：如何在今夏最冷的经济寒冬中活下去","effectTime":"2020-04-02T15:43:41.113","readCount":2,"fansReadCount":0,"commentCount":0,"hitCount":0,"shareCount":0,"fansIncrementCount":0},{"title":"今非昔比，中小企业要换种活法了","effectTime":"2020-03-31T19:04:00","readCount":12,"fansReadCount":5,"commentCount":2,"hitCount":2,"shareCount":1,"fansIncrementCount":0},{"title":"为国为民，中国要放水加入海王争霸","effectTime":"2020-03-30T22:23:00","readCount":37,"fansReadCount":8,"commentCount":7,"hitCount":2,"shareCount":1,"fansIncrementCount":0}],"totalPages":2}

import TouTiao from "./single-analysis/toutiao.js"; // 头条数据解析
import XueQiu from "./single-analysis/xueqiu.js"; // 需求数据解析
import ZhaoCai from "./single-analysis/zhaocai.js"; // 招财数据解析
import ZhiHu from "./single-analysis/zhihu.js"; // 知乎数据解析
import Utils from "./lib/utils.js"; // 工具类

const xqbtn = document.getElementById("xueqiu");
const start = document.getElementById("start"); // 开始时间控件
const end = document.getElementById("end"); // 结束时间控件
xqbtn.onclick = async function() {
  const start_date = Utils.dateUtils.formatDate(new Date(start.value), "yyyy-MM-dd");;
  const end_date = Utils.dateUtils.formatDate(new Date(end.value), "yyyy-MM-dd");

  console.log("获取到的时间", start_date, end_date);

  // yyyyMMdd
  const tts = Utils.dateUtils.formatDate(new Date(start_date), "yyyyMMdd");
  const tte = Utils.dateUtils.formatDate(new Date(end_date), "yyyyMMdd");
  const ttdata = await TouTiao.analysis(tts, tte); // 头条数据

  // 时间戳
  const xqs = new Date(start_date + " 00:00:00").getTime();
  const xqe = new Date(end_date + " 23:59:59").getTime();
  const xqdata = await XueQiu.analysis(xqs, xqe); // 雪球数据

  const token = window.localStorage.getItem(ZhaoCai.ZC_Authorization);
  console.log("获取到token", token);
  const zcdata = await ZhaoCai.analysis(start_date, end_date, token); // 招财号数据

  const zhdata = await ZhiHu.analysis(start_date, end_date); // 知乎数据
  
  // Excel文件名称
  const filename = "平台数据分析" + "-" + start_date + "-" + end_date + ".xlsx";
  // sheet的标题头
  const header = [ "标题", "阅读量", "评论量", "转发量", "收藏量", "点赞量", "创建时间" ];

  // 创建工作簿和工作表
  const wb = XLSX.utils.book_new(); // 工作簿，即一个Excel文件
  const ws_tt = XLSX.utils.aoa_to_sheet([header]); // 头条表
  XLSX.utils.sheet_add_aoa(ws_tt, convertJson2Array(header, ttdata)); // 增加数据 {header: ["title", "view_count","reply_count","retweet_count","fav_count","like_count"]}

  XLSX.utils.book_append_sheet(wb, ws_tt, "头条号数据");

  const ws_xq = XLSX.utils.aoa_to_sheet([header]); // 雪球表
  XLSX.utils.sheet_add_aoa(ws_xq, convertJson2Array(header, xqdata)); // 增加数据

  XLSX.utils.book_append_sheet(wb, ws_xq, "雪球数据");

  const ws_zc = XLSX.utils.aoa_to_sheet([header]); // 招财表
  XLSX.utils.sheet_add_aoa(ws_zc, convertJson2Array(header, zcdata)); // 增加数据

  XLSX.utils.book_append_sheet(wb, ws_zc, "招财号数据");

  const ws_zh = XLSX.utils.aoa_to_sheet([header]); // 知乎表
  XLSX.utils.sheet_add_aoa(ws_zh, convertJson2Array(header, zhdata)); // 增加数据

  XLSX.utils.book_append_sheet(wb, ws_zh, "知乎数据");
  // 写出Excel工作簿
  XLSX.writeFile(wb, filename);
};

/**
 * 将JSON数据改成Array，便于生成excel
 */
function convertJson2Array(header, analysisData) {
  const arr = [ header ];
  for (let i = 0; i < analysisData.length; i++) {
    const item = analysisData[i];
    arr.push([ item.title, item.view_count, item.reply_count, item.retweet_count, item.fav_count, item.like_count, item.created_at ]);
  }

  console.log("获取到转码数据", arr);
  return arr;
}
