/**
 * 头条号: https://mp.toutiao.com/mp/agw/statistic/content/content_article_daily_stat?stat_type=2&start_date=20200330&end_date=20200405&pagenum=1
 */


// 头条号示例：
// {"code":0,"data":{"data_list":[{"ad_click_count":0,"ad_inject":0,"ad_play_count":0,"ad_show_count":0,"article_id":"6793193943036068363","comment_count":0,"content_cntw":0,"external_visit_count":25,"go_detail_count":235,"growth_count":0,"image_cnt":34,"impression_count":12684,"is_original":false,"is_video":false,"link":"http://toutiao.com/i6793193943036068363","media_id":"1630979322185736","pgc_article_type":0,"play_effective_count":0,"publish_num":0,"publish_time":"","repin_count":1,"search_go_detail_count":0,"share_count":0,"surbscribe_go_detail_count":0,"surbscribe_play_effective_count":0,"title":"五菱牌口罩不开玩笑！人民需要什么，他就生产什么！"}],"end_date":"20200405","pagenum":1,"start_date":"20200330","total_num":1,"total_pagenum":1},"message":"success"}
// {
// 	"code": 0,
// 	"data": {
// 		"data_list": [{
// 			"ad_click_count": 0,
// 			"ad_inject": 0,
// 			"ad_play_count": 0,
// 			"ad_show_count": 0,
// 			"article_id": "6793193943036068363",
// 			"comment_count": 0, // 评论量
// 			"content_cntw": 0,
// 			"external_visit_count": 31,
// 			"go_detail_count": 244, // 阅读量
// 			"growth_count": 0,
// 			"image_cnt": 34,
// 			"impression_count": 12872, // 推荐量
// 			"is_original": false,
// 			"is_video": false,
// 			"link": "http://toutiao.com/i6793193943036068363",
// 			"media_id": "1630979322185736",
// 			"pgc_article_type": 0,
// 			"play_effective_count": 0,
// 			"publish_num": 0,
// 			"publish_time": "",
// 			"repin_count": 1, // 收藏量
// 			"search_go_detail_count": 0,
// 			"share_count": 0, // 转发量
// 			"surbscribe_go_detail_count": 0,
// 			"surbscribe_play_effective_count": 0,
// 			"title": "五菱牌口罩不开玩笑！人民需要什么，他就生产什么！"
// 		}],
// 		"end_date": "20200407",
// 		"pagenum": 1,
// 		"start_date": "20200325",
// 		"total_num": 1,
// 		"total_pagenum": 1
// 	},
// 	"message": "success"
// }

// 失败返回
// {
//     "code": 100004,
//     "data": null,
//     "err_no": 100004,
//     "message": "user not login",
//     "now": 0,
//     "reason": ""
// }

/**
 * 获取单篇文章的解析数据
 * @param {String} startdate yyyyMMdd
 * @param {String} enddate 结束时间 yyyyMMdd
 * @returns {Array} [{
 * title,  // 标题
 * view_count,  // 阅读量
 * reply_count, // 评论量
 * retweet_count, // 分享量
 * fav_count, // 收藏量
 * like_count, // 点赞量
 * created_at // 创建时间
 * }] 数组数据
 */
async function analysis(startdate, enddate) {
	const promise = new Promise((resolve, reject) => {
		const url = "https://mp.toutiao.com/mp/agw/statistic/content/content_article_daily_stat?stat_type=2&start_date=" + startdate + "&end_date=" + enddate + "&pagenum=1";
		const xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.onreadystatechange = async function() {
			if (xhr.readyState == 4) {
				// JSON.parse 不执行攻击者的脚本。
				console.log('**********获取到结果*******', xhr.responseText);
				const resp = JSON.parse(xhr.responseText);
				if (resp.code === 0) {
					// 成功了，此处进行数据封装返回
					const d = [];
					for (let i = 0; i < resp.data.data_list.length; i++) {
						const item = resp.data.data_list[i];
						const tmp = {
							title: item.title,
							view_count: item.go_detail_count,
							reply_count: item.comment_count,
							retweet_count: item.share_count,
							fav_count: item.repin_count,
							like_count: 0,
							created_at: ""
						};
						d.push(tmp);
					}

					const totalpagenum = resp.data.total_pagenum;
					for (let i = 2; i <= totalpagenum; i++) {
						console.log("********", analysisPages);
						// const item = await analysisPages(startdate, enddate, i);
						// d.push(item);
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

/**
 * 获取单篇文章的分页解析数据
 * @param {String} startdate yyyy-MM-dd
 * @param {String} enddate 结束时间 yyyy-MM-dd
 * @param {Number} pagenum 页码
 * @returns {Array} [{
 * title,  // 标题
 * view_count,  // 阅读量
 * reply_count, // 评论量
 * retweet_count, // 分享量
 * fav_count, // 收藏量
 * like_count, // 点赞量
 * created_at // 创建时间
 * }] 数组数据
 */
async function analysisPages(startdate, enddate, pagenum) {
	const promise = new Promise((resolve, reject) => {
		const url = "https://mp.toutiao.com/mp/agw/statistic/content/content_article_daily_stat?stat_type=2&start_date=" + startdate + "&end_date=" + enddate + "&pagenum=" + pagenum;
		const xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				// JSON.parse 不执行攻击者的脚本。
				console.log('**********获取到结果*******', xhr.responseText);
				const resp = JSON.parse(xhr.responseText);
				if (resp.code === 0) {
					// 成功了，此处进行数据封装返回
					const d = [];
					for (let i = 0; i < resp.data.data_list.length; i++) {
						const item = resp.data.data_list[i];
						const tmp = {
							title: item.title,
							view_count: item.go_detail_count,
							reply_count: item.comment_count,
							retweet_count: item.share_count,
							fav_count: item.repin_count,
							like_count: 0,
							created_at: ""
						};
						d.push(tmp);
					}
					resolve(d);
				} else {
					// 失败了，记录日志
					console.log("头条数据查询失败", resp);
					resolve([]);
				}
			}
		}
		xhr.send();
	});
	return promise;
}

export default { analysis };