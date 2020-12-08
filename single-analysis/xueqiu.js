/**
 * 雪球: https://mp.xueqiu.com/xq/statuses/author/single_analysis.json?start_time=1584892800000&end_time=1586102399000
 */

// 雪球返回示例：
// {"user_id":6082466277,"start_time":1584892800000,"end_time":1586102399000,"list":[{"status_id":145133686,"user_id":0,"title":"沙特八爷党，搅起世界的惊涛骇浪","status_count":0,"view_count":7064,"reply_count":4,"retweet_count":1,"fav_count":0,"like_count":3,"created_at":"2020-03-25 16:48:14.0","day":"20200325"},{"status_id":145249588,"user_id":0,"title":"如何在34万亿的盛宴里喝口汤","status_count":0,"view_count":4803,"reply_count":0,"retweet_count":0,"fav_count":0,"like_count":1,"created_at":"2020-03-26 16:39:41.0","day":"20200326"},{"status_id":145252723,"user_id":0,"title":"四万亿再度杀到，就问你上不上车","status_count":0,"view_count":5955,"reply_count":0,"retweet_count":0,"fav_count":0,"like_count":1,"created_at":"2020-03-26 17:11:29.0","day":"20200326"},{"status_id":145486051,"user_id":0,"title":"2.2万亿，美帝这作业抄的中国目瞪口呆","status_count":0,"view_count":4405,"reply_count":1,"retweet_count":0,"fav_count":0,"like_count":2,"created_at":"2020-03-29 20:30:06.0","day":"20200329"},{"status_id":145547072,"user_id":0,"title":"为国为民，中国要放水加入海王争霸","status_count":0,"view_count":1166,"reply_count":0,"retweet_count":0,"fav_count":0,"like_count":2,"created_at":"2020-03-30 14:44:05.0","day":"20200330"},{"status_id":145727717,"user_id":0,"title":"今非昔比，中小企业要换种活法了","status_count":0,"view_count":7601,"reply_count":0,"retweet_count":0,"fav_count":0,"like_count":2,"created_at":"2020-04-01 00:10:39.0","day":"20200401"},{"status_id":146109205,"user_id":0,"title":"有一技傍身，防大佬暴打。","status_count":0,"view_count":1327,"reply_count":0,"retweet_count":0,"fav_count":0,"like_count":0,"created_at":"2020-04-05 23:18:10.0","day":"20200405"},{"status_id":146109763,"user_id":0,"title":"这当下，处处在逼你花钱","status_count":0,"view_count":961,"reply_count":0,"retweet_count":0,"fav_count":0,"like_count":1,"created_at":"2020-04-05 23:37:14.0","day":"20200405"}],"total_analysis_view":null,"total_relation":null}
// {
// 	"user_id": 6082466277,
// 	"start_time": 1585670400000,
// 	"end_time": 1586275199000,
// 	"list": [{
// 		"status_id": 145727717,
// 		"user_id": 0,
// 		"title": "今非昔比，中小企业要换种活法了", // 标题
// 		"status_count": 0,
// 		"view_count": 8090, // 阅读数量
// 		"reply_count": 0, // 评论数量
// 		"retweet_count": 0, // 转发数量
// 		"fav_count": 0, // 收藏数量
// 		"like_count": 2, // 点赞数量
// 		"created_at": "2020-04-01 00:10:39.0", // 文章创建时间
// 		"day": "20200401"
// 	}],
// 	"total_analysis_view": null,
// 	"total_relation": null
// }

// 失败返回
// {
//     "error_description": "遇到错误，请刷新页面或者重新登录帐号后再试",
//     "error_uri": "/statuses/author/single_analysis.json",
//     "error_data": null,
//     "error_code": "400016"
// }
/**
 * 获取单篇文章的解析数据
 * @param {Number} starttimestamp 开始时间戳
 * @param {Number} endtimestamp 结束时间戳
 * @returns {Array} [{
 * title, // 标题
 * view_count, // 阅读量
 * reply_count, // 评论量
 * retweet_count, // 转发量
 * fav_count, // 收藏量
 * like_count, // 点赞量
 * created_at // 创建时间
 * }] 数组数据
 */
async function analysis(starttimestamp, endtimestamp) {
	const promise = new Promise((resolve, reject) => {
		const url = "https://mp.xueqiu.com/xq/statuses/author/single_analysis.json?start_time=" + starttimestamp + "&end_time=" + endtimestamp;
		const xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				// JSON.parse 不执行攻击者的脚本。
				console.log('**********获取到结果*******', xhr.responseText);
				const resp = JSON.parse(xhr.responseText);
				if (resp.list) {
					// 成功了，此处进行数据封装返回
					const d = [];
					for (let i = 0; i < resp.list.length; i++) {
						const item = resp.list[i];
						const tmp = {
							title: item.title,
							view_count: item.view_count,
							reply_count: item.reply_count,
							retweet_count: item.retweet_count,
							fav_count: item.fav_count,
							like_count: item.like_count,
							created_at: item.created_at
						};
						d.push(tmp);
					}
					resolve(d);
				} else {
					// 失败了，记录日志
					console.log("雪球数据查询失败", resp);
					resolve([]);
				}
			}
		}
		xhr.send();
	});
	return promise;
}

export default { analysis };
