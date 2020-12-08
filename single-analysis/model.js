/**
 * 导出解析数据的数据模型
 */

'use strict';

class AnalysisModel {
	constructor() {
		this.title = ""; // 标题
		this.view_count = 0; // 阅读量
		this.reply_count = 0; // 评论量
		this.retweet_count = 0;  // 转发量
		this.fav_count = 0; // 收藏量
		this.like_count = 0; // 点赞量
	}
}

module.exports = AnalysisModel;