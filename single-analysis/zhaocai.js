/**
 * 招财号: https://pgcweb.cs.cmbchina.com/api/articles-statistics/paging/by-article?beginTime=2020-03-31T00:00:00&endTime=2020-04-06T23:59:59&pageIndex=1&pageSize=10
 */

// 招财号示例
// {"pageSize":10,"totalSize":13,"items":[{"title":"王冠与新冠：一百二十年的国运轮转","effectTime":"2020-04-06T10:02:00","readCount":0,"fansReadCount":0,"commentCount":0,"hitCount":0,"shareCount":0,"fansIncrementCount":0},{"title":"瑞幸，美帝的特洛伊木马","effectTime":"2020-04-06T08:58:03.197","readCount":40,"fansReadCount":1,"commentCount":11,"hitCount":0,"shareCount":5,"fansIncrementCount":1},{"title":"生死存亡的时刻，金融界的风控们醒醒吧","effectTime":"2020-04-05T10:30:25.49","readCount":7,"fansReadCount":0,"commentCount":0,"hitCount":0,"shareCount":2,"fansIncrementCount":0},{"title":"有名有姓的你，要举好先祖的旗帜","effectTime":"2020-04-05T08:58:33.643","readCount":22,"fansReadCount":0,"commentCount":1,"hitCount":0,"shareCount":4,"fansIncrementCount":0},{"title":"这当下，处处在逼你花钱","effectTime":"2020-04-05T08:55:30.197","readCount":7,"fansReadCount":1,"commentCount":0,"hitCount":0,"shareCount":0,"fansIncrementCount":0},{"title":"熔断、疫情、全世界的王炸与危机悬崖","effectTime":"2020-04-04T09:35:39.84","readCount":10,"fansReadCount":0,"commentCount":0,"hitCount":1,"shareCount":1,"fansIncrementCount":0},{"title":"美帝送中国一个天大的馅饼","effectTime":"2020-04-04T09:29:59.31","readCount":227,"fansReadCount":1,"commentCount":7,"hitCount":4,"shareCount":12,"fansIncrementCount":6},{"title":"逆风飞扬：如何在今夏最冷的经济寒冬中活下去","effectTime":"2020-04-02T15:43:41.113","readCount":2,"fansReadCount":0,"commentCount":0,"hitCount":0,"shareCount":0,"fansIncrementCount":0},{"title":"今非昔比，中小企业要换种活法了","effectTime":"2020-03-31T19:04:00","readCount":12,"fansReadCount":5,"commentCount":2,"hitCount":2,"shareCount":1,"fansIncrementCount":0},{"title":"为国为民，中国要放水加入海王争霸","effectTime":"2020-03-30T22:23:00","readCount":37,"fansReadCount":8,"commentCount":7,"hitCount":2,"shareCount":1,"fansIncrementCount":0}],"totalPages":2}
// {
// 	"pageSize": 10,
// 	"totalSize": 13,
// 	"items": [{
// 		"title": "王冠与新冠：一百二十年的国运轮转", // 标题
// 		"effectTime": "2020-04-06T10:02:00", // 创建时间
// 		"readCount": 3, // 阅读量
// 		"fansReadCount": 2,
// 		"commentCount": 0, // 评论量
// 		"hitCount": 0, // 点赞数量
// 		"shareCount": 1, // 分享量
// 		"fansIncrementCount": 0
// 	}],
// 	"totalPages": 2
// }
// 失败返回
// {
//     "message": "Unauthorized",
//     "errors": null
// }

/**
 * 获取单篇文章的解析数据
 * @param {String} startdate yyyy-MM-dd
 * @param {String} enddate 结束时间 yyyy-MM-dd
 * @param {String} token 招财的登录鉴权
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
async function analysis(startdate, enddate, token) {
	const promise = new Promise((resolve, reject) => {
		const url = "https://pgcweb.cs.cmbchina.com/api/articles-statistics/paging/by-article?beginTime=" + startdate + "T00:00:00&endTime=" + enddate + "T23:59:59&pageIndex=1&pageSize=10";
		const xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		// xhr.setRequestHeader("Authorization", "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJjYWFhZTZjMS0zNWQzLTRjZGItODFmYi1jYjBmNDFlMzJjZTkiLCJjY2lkIjoiY2FhYWU2YzEtMzVkMy00Y2RiLTgxZmItY2IwZjQxZTMyY2U5LTAwNjQiLCJpcCI6IjEuMjM0LjU4LjIyNyIsImV4cCI6MTU4NjQwOTEyMCwiaWF0IjoxNTg2MzIyNzIwfQ.Tov9w6QYCx4RyZaqfD-_UVAdRQrW5Hfir38C8Z5j0Os");
		xhr.setRequestHeader("Authorization", token);
		xhr.onreadystatechange = async function() {
			if (xhr.readyState == 4) {
				// JSON.parse 不执行攻击者的脚本。
				console.log('**********获取到结果*******', xhr.responseText);
				const resp = JSON.parse(xhr.responseText);
				if (resp.items) {
					// 成功了，此处进行数据封装返回
					let d = [];
					for (let i = 0; i < resp.items.length; i++) {
						const item = resp.items[i];
						const tmp = {
							title: item.title,
							view_count: item.readCount,
							reply_count: item.commentCount,
							retweet_count: item.shareCount,
							fav_count: 0,
							like_count: 0,
							created_at: item.effectTime
						};
						d.push(tmp);
					}

					const totalpagenum = resp.totalPages;
					for (let i = 2; i <= totalpagenum; i++) {
						const item = await analysisPages(startdate, enddate, i, token);
						d = d.concat(item);
					}
					resolve(d);
				} else {
					// 失败了，记录日志
					console.log("招财数据查询失败", resp);
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
 * @param {String} token 招财的登录鉴权
 * @returns {Array} [{
 * title,  // 标题
 * view_count,  // 阅读量
 * reply_count, // 评论量
 * retweet_count, // 分享量
 * fav_count, // 收藏量
 * like_count // 点赞量
 * }] 数组数据
 */
async function analysisPages(startdate, enddate, pagenum, token) {
	const promise = new Promise((resolve, reject) => {
		const url = "https://pgcweb.cs.cmbchina.com/api/articles-statistics/paging/by-article?beginTime=" + startdate + "T00:00:00&endTime=" + enddate + "T23:59:59&pageIndex=" + pagenum + "&pageSize=10";
		const xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		// xhr.setRequestHeader("Authorization", "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJjYWFhZTZjMS0zNWQzLTRjZGItODFmYi1jYjBmNDFlMzJjZTkiLCJjY2lkIjoiY2FhYWU2YzEtMzVkMy00Y2RiLTgxZmItY2IwZjQxZTMyY2U5LTAwNjQiLCJpcCI6IjEuMjM0LjU4LjIyNyIsImV4cCI6MTU4NjQwOTEyMCwiaWF0IjoxNTg2MzIyNzIwfQ.Tov9w6QYCx4RyZaqfD-_UVAdRQrW5Hfir38C8Z5j0Os");
		xhr.setRequestHeader("Authorization", token);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				// JSON.parse 不执行攻击者的脚本。
				console.log('**********获取到结果*******', xhr.responseText);
				const resp = JSON.parse(xhr.responseText);
				if (resp.items) {
					// 成功了，此处进行数据封装返回
					const d = [];
					for (let i = 0; i < resp.items.length; i++) {
						const item = resp.items[i];
						const tmp = {
							title: item.title,
							view_count: item.readCount,
							reply_count: item.commentCount,
							retweet_count: item.shareCount,
							fav_count: 0,
							like_count: 0,
							created_at: item.effectTime
						};
						d.push(tmp);
					}
					resolve(d);
				} else {
					// 失败了，记录日志
					console.log("招财数据查询失败", resp);
					resolve([]);
				}
			}
		}
		xhr.send();
	});
	return promise;
}

/**
 * 获取图片验证码
 */
async function getImageCode() {
	const promise = new Promise((resolve, reject) => {
		const url = "https://pgcweb.cs.cmbchina.com/api/captchas/image";
		const xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				// JSON.parse 不执行攻击者的脚本。
				console.log('**********获取到结果*******', xhr.responseText);
				const resp = JSON.parse(xhr.responseText);

				resolve({id: resp.id, image: resp.image});
			}
		}
		xhr.send();
	});
	return promise;
}

/**
 * 招财号登录
 * @param {String} id 图片验证码id
 * @param {String} code 图片验证码
 */
async function login(id, code) {
	const username = "13910190713";
	const password = "jcytoday001";
	const random = Math.random();
	const url = "https://pgcweb.cs.cmbchina.com/api/auth/token?randNo=" + random;
	const data = { id, code, username, password };
	return axios.post(url, data);
	// const promise = new Promise((resolve, reject) => {
	// 	const random = Math.random();
	// 	const url = "https://pgcweb.cs.cmbchina.com/api/auth/token?randNo=" + random;
	// 	const xhr = new XMLHttpRequest();
	// 	xhr.open("POST", url, true);
	// 	xhr.onreadystatechange = function() {
	// 		if (xhr.readyState == 4) {
	// 			// JSON.parse 不执行攻击者的脚本。
	// 			console.log('**********获取到结果*******', xhr.responseText);
	// 			const resp = JSON.parse(xhr.responseText);

	// 			resolve(resp.token);
	// 		}
	// 	}
	// 	const data = { id, code, username, password };
	// 	xhr.send(JSON.stringify(data));
	// });
	// return promise;
}

const ZC_Authorization = "ZC_Authorization"; // 中财号的token
const ZC_Authorization_Expires = "ZC_Authorization_Expires"; // 中财号token的过期时间

export default { analysis, getImageCode, login, ZC_Authorization, ZC_Authorization_Expires };
