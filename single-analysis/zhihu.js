/**
 * 知乎: https://www.zhihu.com/api/v4/creator/content_statistics/articles?order_field=object_created&order_sort=descend&begin_date=2020-03-30&end_date=2020-04-06&page_no=1
 */

// 知乎示例
// {"count": 3, "data": [{"read_count": 80, "thanked_count": 1, "collected_count": 0, "title": "\u6709\u4e00\u6280\u508d\u8eab\uff0c\u9632\u5927\u4f6c\u66b4\u6253 \u6625\u6696\u82b1\u5f00\uff0c\u5386\u53f2\u5c42\u51fa\u4e0d\u7a77\u30021\u6628\u5929\u53c8\u591a\u4e86\u4e00\u4e2a\u65b0\u82b1\u6837\uff0c\u88ab\u8feb\u627f\u8ba4\u9020\u5047\u6536\u516522\u4ebf\u3001\u80a1\u4ef76\u6b21\u7194\u65ad\u3001\u4e00\u591c\u66b4\u8dcc352\u4ebf\uff0c\u53f7\u79f0\u66b4\u5272\u8d44\u672c\u4e3b\u4e49\u97ed\u83dc\u7684\u745e\u5e78 [\u56fe\u7247]", "upvoted_count": 2, "object_created": "2020-04-04", "url_token": "1126829191", "commented_count": 0}, {"read_count": 8, "thanked_count": 0, "collected_count": 0, "title": "\u6709\u540d\u6709\u59d3\u7684\u4f60\uff0c\u8981\u4e3e\u597d\u5148\u7956\u7684\u65d7\u5e1c \u539f\u521b \u5357\u82d1\u5927\u738b \u9274\u8336\u9662 [\u56fe\u7247]", "upvoted_count": 0, "object_created": "2020-04-04", "url_token": "1129119288", "commented_count": 0}, {"read_count": 108, "thanked_count": 1, "collected_count": 0, "title": "\u4eca\u975e\u6614\u6bd4\uff0c\u4e2d\u5c0f\u4f01\u4e1a\u8981\u6362\u79cd\u6d3b\u6cd5\u4e86\u4e2d\u56fd\u6c11\u4f01\u8fc7\u53bb\u5efa\u7acb\u7684\u57fa\u7840\u662f\u4ec0\u4e48\u5462\uff1f\u4e00\u662f\u9700\u6c42\u4e0d\u9971\u548c\uff0c\u5927\u5bb6\u9700\u8981\u7684\u4e1c\u897f\u751f\u4ea7\u4e0d\u51fa\u6765\u3002\u5148\u89e3\u51b3\u6709\u65e0\u7684\u95ee\u9898\u3002 \u4e8c\u662f\u4fe1\u606f\u4e0d\u900f\u660e\uff0c\u4f9b\u9500\u4e4b\u95f4\u5b58\u5728\u4fe1\u606f\u5dee\uff0c\u56e0\u6b64\u53ef\u4ee5\u62fc\u7f1d\uff0c\u9760\u4e0d\u5bf9\u7b49\u8d5a\u94b1\u3002\u5982\u4eca\uff0c\u4ea7\u54c1\u8fc7\u5269\u7684\u5df2\u7ecf\u53bb\u4ea7\u80fd\u4e86\uff0c\u4f4e\u7aef\u91cd\u590d\u7684\u5546\u54c1\u8d8a\u6765\u8d8a\u4e0d\u53d7\u9752\u7750\uff0c\u4e49\u4e4c\u5546\u8d38\u57ce\u57fa\u672c\u90fd\u662f\u9ed1\u4eba\u548c\u7b2c\u4e09\u4e16\u754c\u56fd\u5bb6\u7684\u5144\u5f1f\uff1b\u79fb\u52a8\u4e92\u8054\u5df2\u7ecf\u6df1\u5165\u5343\u5bb6\u4e07\u6237\uff0c\u81ea\u5a92\u4f53\u548c\u77ed", "upvoted_count": 5, "object_created": "2020-03-31", "url_token": "1118963223", "commented_count": 2}]}
// {
// 	"count": 10,
// 	"data": [{
// 		"read_count": 207, // 阅读量
// 		"thanked_count": 3, // 喜欢量 点赞量
// 		"collected_count": 0, // 收藏量
// 		"title": "\u745e\u5e78\u5d1b\u8d77\u7684\u5f88\u5feb\u300217\u4e2a\u6708\u5b8c\u6210\u4e86\u5168\u7403\u6700\u5febIPO\uff0c24\u4e2a\u6708\u5168\u56fd\u5f00\u8bbe4507\u5bb6\u95e8\u5e97\uff0c\u8d85\u8fc7\u661f\u5df4\u514b\uff0c\u6210\u4e3a\u4e2d\u56fd\u6700\u5927\u7684\u8fde\u9501\u5496\u5561\u54c1\u724c\uff0c\u4e0a\u5e027\u4e2a\u6708\uff0c\u5e02\u503c\u7834\u767e\u4ebf\u7f8e\u5143\u3002\u800c\u5012\u4e0b\u4e5f\u771f\u5feb\u30024\u67082\u65e5\uff0c\u745e\u5e78\u88ab\u8feb\u81ea\u66dd\u201c\u4f2a\u9020\u4ea4\u661322\u4ebf\u201d\u3002\u6d88\u606f\u4e00\u51fa\uff0c\u745e\u5e78\u5496\u5561\u76d8\u524d\u80a1\u4ef7\u4e0b\u8dcc85%\uff0c352\u4ebf\u7070\u98de\u70df\u706d\u3002 [\u56fe\u7247]",
// 		"upvoted_count": 4, // 赞同量
// 		"object_created": "2020-04-06", // 创建时间
// 		"url_token": "1131691850",
// 		"commented_count": 2 // 评论量
// 	}]
// }
// 失败返回
// 空

/**
 * 获取单篇文章的解析数据
 * @param {String} startdate 开始时间 yyyy-MM-dd
 * @param {String} enddate 结束时间 yyyy-MM-dd
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
async function analysis(startdate, enddate) {
	const promise = new Promise((resolve, reject) => {
		const url = "https://www.zhihu.com/api/v4/creator/content_statistics/articles?order_field=object_created&order_sort=descend&begin_date=" + startdate + "&end_date=" + enddate + "&page_no=1";
		const xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.onreadystatechange = async function() {
			if (xhr.readyState == 4) {
				// JSON.parse 不执行攻击者的脚本。
				console.log('**********获取到结果*******', xhr.responseText);
				const resp = xhr.responseText !== "" ? JSON.parse(xhr.responseText) : {};
				if (resp.data) {
					// 成功了，此处进行数据封装返回
					const d = [];
					for (let i = 0; i < resp.data.length; i++) {
						const item = resp.data[i];
						const tmp = {
							title: item.title,
							view_count: item.read_count,
							reply_count: item.commented_count,
							retweet_count: 0,
							fav_count: item.collected_count,
							like_count: item.thanked_count,
							created_at: item.object_created
						};
						d.push(tmp);
					}

					const totalpagenum = Math.ceil(resp.count / 10);
					for (let i = 2; i <= totalpagenum; i++) {
						const item = await analysisPages(startdate, enddate, i);
						d.push(item);
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
 * @param {String} startdate yyyyMMdd
 * @param {String} enddate 结束时间 yyyyMMdd
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
		const url = "https://www.zhihu.com/api/v4/creator/content_statistics/articles?order_field=object_created&order_sort=descend&begin_date=" + startdate + "&end_date=" + enddate + "&page_no=" + pagenum;
		const xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				// JSON.parse 不执行攻击者的脚本。
				console.log('**********获取到结果*******', xhr.responseText);
				const resp = JSON.parse(xhr.responseText);
				if (resp.data) {
					// 成功了，此处进行数据封装返回
					const d = [];
					for (let i = 0; i < resp.data.length; i++) {
						const item = resp.data[i];
						const tmp = {
							title: item.title,
							view_count: item.read_count,
							reply_count: item.commented_count,
							retweet_count: 0,
							fav_count: item.collected_count,
							like_count: item.thanked_count,
							created_at: item.object_created
						};
						d.push(tmp);
					}
					resolve(d);
				} else {
					// 失败了，记录日志
					console.log("知乎数据查询失败", resp);
					resolve([]);
				}
			}
		}
		xhr.send();
	});
	return promise;
}

export default { analysis };