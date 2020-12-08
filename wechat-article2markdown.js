/**
 * 微信文章转Markdown格式
 */

(function() {
  const regex = /https:\/\/mp.weixin.qq.com\/s\?__biz.*/;
  if (regex.test(window.location.href)) {
    // 当前正常页面
    markDown();
  }

  function markDown() {
    // 给按钮添加一键功能
    const body = document.getElementsByTagName("body")[0]; // 获取body，以便增加转换按钮
    const div = document.createElement("div");
    const divstyle = ""
    + "display: inline-block; min-width: 54px; line-height: 2.42857143; vertical-align: middle; "
    + "text-align: center; text-decoration: none; border-radius: 3px; font-size: 14px; cursor: pointer; "
    // + "border-width: 1px; border-style: solid; box-sizing: content-box; "
    + "position: fixed; right: 0; top: 0; ";
    div.setAttribute("style", divstyle);
    body.appendChild(div);

    const button0 = document.createElement("button");
    button0.innerHTML = "一键同步雪球";
    const style = "background-color: #07C160; border-color: #07C160; color: #FFFFFF; "
    + "display: inline-block; padding: 0 22px; min-width: 54px; line-height: 2.42857143; vertical-align: middle; "
    + "text-align: center; text-decoration: none; border-radius: 3px; font-size: 14px; cursor: pointer; "
    + "border-width: 1px; border-style: solid; box-sizing: content-box; "
    + "margin: 10px;";
    // + "position: absolute; right: 0; top: 0; ";
    button0.setAttribute("style", style);
    button0.onclick = function() {
      const article = document.getElementById("js_article");
      const markdownArticle = html2markdown(article.innerHTML);
      // alert(markdownArticle);
      // downFlie(markdownArticle);
      saveDraftXQ();

    };
    div.appendChild(button0);

    const button1 = document.createElement("button");
    button1.innerHTML = "一键同步招财";
    button1.setAttribute("style", style);
    button1.onclick = function() {
      const article = document.getElementById("js_article");
      const markdownArticle = html2markdown(article.innerHTML);
      // alert(markdownArticle);
      // downFlie(markdownArticle);
      saveDraftZC();

    };
    div.appendChild(button1);

    const button2 = document.createElement("button");
    button2.innerHTML = "一键同步Csdn";
    button2.setAttribute("style", style);
    button2.onclick = function() {
      const article = document.getElementById("js_article");
      const markdownArticle = html2markdown(article.innerHTML);
      saveDraftCsdn();

    };
    div.appendChild(button2);
  }

  function downFlie(str) {
    // 创建a标签
    var elementA = document.createElement('a');
    
    //文件的名称为时间戳加文件名后缀
    elementA.download = +new Date() + ".md";
    elementA.style.display = 'none';
    
    //生成一个blob二进制数据，内容为json数据
    var blob = new Blob([str]);
    
    //生成一个指向blob的URL地址，并赋值给a标签的href属性
    elementA.href = URL.createObjectURL(blob);
    document.body.appendChild(elementA);
    elementA.click();
    document.body.removeChild(elementA);
  }

  /**
   * 保存雪球草稿
   */
  async function saveDraftXQ() {
    const url = "https://mp.xueqiu.com/xq/statuses/draft/save.json";
    const params = new URLSearchParams();

    const title = document.getElementById("activity-name").innerHTML.trim(); // 标题

    const content = document.getElementById("js_content"); // 内容模块儿
    const imgs = content.getElementsByTagName("img"); // 获得所有的图片模块儿

    for (let i = 0; i < imgs.length; i++) {
      const item = imgs[i];
      const dataSrc = item.getAttribute("data-src"); // 获得图片地址

      // const r1 = await downImage(dataSrc); // 下载图片
      // console.log("获取到文件数据", r1.data);
      // // saveAs(r1.data, "test.jpeg");
      // // const file = new File(r1.data, "test");
      // r1.data.lastModifiedDate = new Date();
      // r1.data.name = "test";
      // r1.data.filename = "testfilename";
      // const file = new File([r1.data], "blob-filename.jpg");
      // console.log("文件", file);
      // const r2 = await saveImageXQ(file);

      // const base64 = await downImage(dataSrc); // 暂时不可用，后台地址文件太大导致异常失败
      item.setAttribute("src", dataSrc); // 修改src地址;
    }

    // const content = document.getElementById("js_content").innerHTML.trim(); // 富文本内容
    const markdownArticle = html2markdown(content.innerHTML.trim());
    const richText = marked(markdownArticle);
    console.log("富文本", richText);
 
    params.append("id", "");
    params.append("text", richText);
    params.append("title", title); // 标题
    params.append("cover_pic", "");
    params.append("status_tag", []);
    params.append("flags", false);
    params.append("original_declare", false);
    params.append("status_industry", "");
    params.append("original_event", "");
    params.append("status_id", "");

	  axios.post(url, params).then(response => {
      console.log("成功了", response);
    }).catch(e => {
      console.log("失败了", e);
    });
  }

  /**
   * 需要重新下载上传图片，目前暂不使用
   * 微信外链更正后是可以在雪球使用的。
   * @params {ArrayBuffer} file 文件
   * {
        width: 500
        filename: "171902885a12971f3fd47b98.jpeg"
        url: "//xqimg.imedao.com"
        height: 500
      }
   */
  async function saveImageXQ(file) {
    const url = "https://mp.xueqiu.com/xq/photo/upload.json";
    // const url = "http://192.168.2.102:8000/test";
    const param = new FormData();
   //通过append向form对象添加数据
    param.append("file", file);

    const headers = { "Content-Type": "multipart/form-data" };
    return axios.post(url, param, {
      headers
    });
    // axios.post(url, params, headers).then(response => {
    //   console.log("收到返回消息", response);
    //   // {
    //   //   width: 500
    //   //   filename: "171902885a12971f3fd47b98.jpeg"
    //   //   url: "//xqimg.imedao.com"
    //   //   height: 500
    //   // }
    //   const url = response.data.url;
    // }).catch(e => {
    //   console.log("上传文件异常", e);
    // });
  }

  /**
   * 保存招财草稿
   */
  async function saveDraftZC() {
    const url = "https://pgcweb.cs.cmbchina.com/api/article-drafts";

    // const token = window.localStorage.getItem("ZC_Authorization");

    const headers = {
      Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJjYWFhZTZjMS0zNWQzLTRjZGItODFmYi1jYjBmNDFlMzJjZTkiLCJjY2lkIjoiY2FhYWU2YzEtMzVkMy00Y2RiLTgxZmItY2IwZjQxZTMyY2U5LTAwNjQiLCJpcCI6IjIyMS4yMTYuMTQxLjE3NiIsImV4cCI6MTU5MDA3NDg1OSwiaWF0IjoxNTg5OTg4NDU5fQ.amsLSuacm2XaTUc0lXw2VMHaDeaF0prPyH5t0_9T_aQ"
      // Authorization: token
    };

    const title = document.getElementById("activity-name").innerHTML.trim(); // 标题

    const content = document.getElementById("js_content"); // 内容模块儿
    const imgs = content.getElementsByTagName("img"); // 获得所有的图片模块儿

    // const canvas = document.createElement("canvas");
    for (let i = 0; i < imgs.length; i++) {
      const item = imgs[i];
      const dataSrc = item.getAttribute("data-src"); // 获得图片地址
      // const r1 = await downImage(dataSrc); // 下载图片
      // // console.log("获取到文件数据", r1.data);
      // // saveAs(r1.data, "test.jpeg");
      // const file = new File([ r1.data ], "test.jpg", {
      //   lastModified: new Date().getTime(),
      //   type: "image/jpeg"
      // });
      // const r2 = await saveImageZC(file); // 上传图片
      // return;
      // item.setAttribute("src", r2.data.imageUrl); // 修改src地址;
      // item.setAttribute("data-src", r2.data.imageUrl); // 修改data-src地址;
      // const base64 = canvas.toDataURL(dataSrc);
      const base64 = await downImage(dataSrc);
      item.setAttribute("src", base64); // 修改src地址;
      // item.setAttribute("data-src", r2.data.imageUrl); // 修改data-src地址;
    }

    // const content = document.getElementById("js_content").innerHTML.trim(); // 富文本内容
    const markdownArticle = html2markdown(content.innerHTML.trim());
    const richText = marked(markdownArticle);
    console.log("富文本", richText);

    const data = {
      title: title,
      chief: "",
      content: richText,
      cover: "",
      verticalCover: "",
      effectTime: "",
      products: [],
      id: null
    };

    axios.post(url, data, {
      headers
    }).then(response => {
      console.log("调用成功", response);
    }).catch(e => {
      console.log("发生异常", e);
    });
  }

  /**
   * 保存招财的图片，替换src地址
   * @params {ArrayBuffer} file 文件
   * {
        imageUrl: "https://pic1cdn.cmbchina.com/cmbpic/202004/8e0455a5-162a-47eb-a0d3-69c23c7a1262-w500-h500.jpeg"
        height: 500
        width: 500
      }
   */
  async function saveImageZC(file) {
    const url = "https://pgcweb.cs.cmbchina.com/api/images/upload";

    const param = new FormData();
    //通过append向form对象添加数据
    param.append("imageFile", file);
    // 场景值
    param.append("scene", "ARTICLE_BODY");

    const headers = { 
      "Content-Type": "multipart/form-data",
      Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJjYWFhZTZjMS0zNWQzLTRjZGItODFmYi1jYjBmNDFlMzJjZTkiLCJjY2lkIjoiY2FhYWU2YzEtMzVkMy00Y2RiLTgxZmItY2IwZjQxZTMyY2U5LTAwNjQiLCJpcCI6IjIyMS4yMTYuMTM3LjEwOSIsImV4cCI6MTU4NzI4NTA3MCwiaWF0IjoxNTg3MTk4NjcwfQ.WP07dMgQFLE4Lb_dsQVxz23O2MDvpXMkh-7luphWGPY"
    };

    return axios.post(url, param, {
      headers
    });
    // return axios.post(url, params, headers).then(response => {
    //   console.log("收到返回消息", response);
    //   // {
    //   //   imageUrl: "https://pic1cdn.cmbchina.com/cmbpic/202004/8e0455a5-162a-47eb-a0d3-69c23c7a1262-w500-h500.jpeg"
    //   //   height: 500
    //   //   width: 500
    //   // }
    //   const url = response.data.imageUrl;
    // }).catch(e => {
    //   console.log("上传文件异常", e);
    // });
  }

  /**
   * 保存头条
   */
  function saveDraftTT() {
    const url = "https://mp.toutiao.com/mp/agw/article/publish?source=mp&type=article";

    const title = document.getElementById("activity-name").innerHTML.trim(); // 标题
    const content = document.getElementById("js_content").innerHTML.trim(); // 富文本内容
    const markdownArticle = html2markdown(content);
    const richText = marked(markdownArticle);
    console.log("富文本", richText);

    const params = new URLSearchParams();
    params.append("article_type", 0);
    params.append("source", 0);
    params.append("content", "<p>Hello 我是测试草稿</p>");
    params.append("title", "草稿" + title);
    // 1587199669737_1630979322185736
    const now = new Date().getTime();
    params.append("title_id", now + "_1630979322185736");
    const extra = {"gd_ext":{"entrance":"hotspots","from_page":"publisher_mp","enter_from":"PC","device_platform":"mp","is_message":0}};
    params.append("extra", JSON.stringify(extra));
    params.append("educluecard", "");
    params.append("pay_question_card", "");
    params.append("pgc_feed_covers", []);
    params.append("claim_origin", 0);
    params.append("origin_debut_check_pgc_normal", 0);
    params.append("qy_self_recommendation", 0);
    params.append("is_fans_article", 0);
    params.append("govern_forward", 0);
    params.append("praise", 0);
    params.append("disable_praise", 0);
    params.append("article_ad_type", 3);
    params.append("tree_plan_article", 0);
    params.append("activity_tag", 0);
    params.append("trends_writing_tag", 0);
    params.append("community_sync", 0);
    params.append("save", 0);
    params.append("timer_status", 0);
    params.append("timer_time", "");

    axios.post(url, params).then(response => {
      console.log("调用成功", response);
    }).catch(e => {
      console.log("发生异常", e);
    });
  }

  /**
   * 下载图片数据
   * @param {String} url 文件地址
   */
  async function downImage(url) {
    const promise = new Promise(resolve => {
      axios.get(url, {
        responseType: "blob"
      }).then(response => {
        //  至关重要
        const oFileReader = new FileReader();
        oFileReader.onloadend = function (e) {
            const base64 = e.target.result;
            resolve(base64);
        };
        oFileReader.readAsDataURL(response.data);
      })
    });
    // return axios.get(url, {
    //   responseType: 'blob'
    // });

    return promise;
  }

  /**
   * 保存草稿到Csdn
   */
  async function saveDraftCsdn() {

    const article = document.getElementById("js_article");
    // const markdownArticle = html2markdown(article.innerHTML);
    // alert(markdownArticle);
    // downFlie(markdownArticle);

    // const title = document.getElementById("activity-name").innerHTML.trim(); // 标题

    const content = document.getElementById("js_content"); // 内容模块儿
    const imgs = content.getElementsByTagName("img"); // 获得所有的图片模块儿

    // const canvas = document.createElement("canvas");
    for (let i = 0; i < imgs.length; i++) {
      const item = imgs[i];
      const dataSrc = item.getAttribute("data-src"); // 获得图片地址
      const base64 = await downImage(dataSrc);
      item.setAttribute("src", base64); // 修改src地址;
      // item.setAttribute("data-src", r2.data.imageUrl); // 修改data-src地址;
    }
    const markdownArticle = html2markdown(article.innerHTML.trim());
    downFlie(markdownArticle);

    // // const url = "https://bizapi.csdn.net/blog-console-api/v3/mdeditor/saveArticle";

    // const title = document.getElementById("activity-name").innerHTML.trim(); // 标题

    // const content = document.getElementById("js_content"); // 内容模块儿
    // const imgs = content.getElementsByTagName("img"); // 获得所有的图片模块儿

    // for (let i = 0; i < imgs.length; i++) {
    //   const item = imgs[i];
    //   const dataSrc = item.getAttribute("data-src"); // 获得图片地址

    //   // const base64 = await downImage(dataSrc); // 暂时不可用，后台地址文件太大导致异常失败
    //   item.setAttribute("src", dataSrc); // 修改src地址;
    // }

    // // const content = document.getElementById("js_content").innerHTML.trim(); // 富文本内容
    // const markdownArticle = html2markdown(content.innerHTML.trim());
    // const richText = marked(markdownArticle);
    // console.log("富文本", richText);
 
    // // const data = {
    // //   title: title, // 标题
    // //   content: "你好", // 内容
    // //   markdowncontent: "# 你好", // markdown 文本
    // //   not_auto_saved: "1",
    // //   readType: "public",
    // //   source: "pc_mdeditor",
    // //   status: 2
    // // };

    // const port = chrome.runtime.connect({name: "WECHAT_ARTICLE_SYNC"});
    // const message = {
    //   title: title,
    //   content: richText,
    //   markdown: markdownArticle
    // }
    // port.postMessage(message);
    // port.onMessage.addListener(function(msg) {
    //   // msg返回消息处理结果 {errcode: 0, errmsg: "success", data: {}}
    //   if (msg.errcode === 0) {
    //     window.open("https://editor.csdn.net/md/", "_blank");
    //   }
    // });

    // // const headers = {
    // //   origin: "https://editor.csdn.net",
    // //   referer: "https://editor.csdn.net/md/",
    // // };

    // // axios.post(url, data, {
    // //   headers
    // // }).then(response => {
    // //   console.log("成功了", response);
    // // }).catch(e => {
    // //   console.log("失败了", e);
    // // });
  }
})();
