(function() {
  // chrome.storage.local.set({key: value}, function() {
  //   console.log('Value is set to ' + value);
  // });
  const regex = /https:\/\/baijiahao.baidu.com\/builder\/rc\/home/;
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
    button0.innerHTML = "一键同步简书";
    const style = "background-color: #07C160; border-color: #07C160; color: #FFFFFF; "
    + "display: inline-block; padding: 0 22px; min-width: 54px; line-height: 2.42857143; vertical-align: middle; "
    + "text-align: center; text-decoration: none; border-radius: 3px; font-size: 14px; cursor: pointer; "
    + "border-width: 1px; border-style: solid; box-sizing: content-box; "
    + "margin: 10px;";
    // + "position: absolute; right: 0; top: 0; ";
    button0.setAttribute("style", style);
    button0.onclick = function() {
      saveDraftBaiJiaHao();

    };
    div.appendChild(button0);
  }

  function saveDraftBaiJiaHao() {
    chrome.storage.local.get(["key"], function(result) {
      console.log('Value currently is ' + JSON.stringify(result.key));

      const msg = result.key; // 消息对象
      const title = "测试标题"; // msg.title;
      const markdownArticle = "# 测试文本"; // msg.markdown;
      const richText = "文本"; // msg.content;
      console.log("富文本", richText);

      const url = "https://www.jianshu.com/author/notes"; // 获取笔记列表

      const d = {
        "notebook_id": "44437740",
        "title": title,
        "at_bottom": true
      };
      axios.post(url, d).then(response => {
        console.log("成功了", response);
        // {
        //   "id": 69827504,
        //   "title": "2020-05-13",
        //   "slug": "90048332813b",
        //   "shared": false,
        //   "notebook_id": 44437740,
        //   "seq_in_nb": 0,
        //   "note_type": 1,
        //   "autosave_control": 0,
        //   "content_updated_at": 1589304118,
        //   "last_compiled_at": 0
        // }
        const saveurl = "https://www.jianshu.com/author/notes/" + response.data.id + "/content";
        axios.post(saveurl).then(r => {
          console.log("保存成功了", r);
          const url = "https://www.jianshu.com/author/notes/" + response.data.id;

          const data = {
            "id": response.data.id,
            "autosave_control": 1,
            "title": title,
            "content": content
          };
          
          axios.put(url, data).then(res => {
            console.log("成功啦，成功啦", res);
          }).catch(e => {
            console.log("失败了啊", e);
          });
        }).catch(e => {
          console.log("失败了保存内容", e);
        });
      }).catch(e => {
        console.log("失败了", e);
      });
  
      // const data = {
      //   title: title, // 标题
      //   content: richText, // 内容
      //   markdowncontent: markdownArticle, // markdown 文本
      //   not_auto_saved: "1",
      //   readType: "public",
      //   source: "pc_mdeditor",
      //   status: 2
      // };

      // const d = {
      //   // "title": "测试标题",
      //   // "markdowncontent": "写文内容![在这里插入图片描述](https://img-blog.csdnimg.cn/20200513003955882.jpeg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Nqal83NzIzMjYyNDQ=,size_16,color_FFFFFF,t_70#pic_center)\n",
      //   // "content": "<p>写文内容<img src=\"https://img-blog.csdnimg.cn/20200513003955882.jpeg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Nqal83NzIzMjYyNDQ=,size_16,color_FFFFFF,t_70#pic_center\" alt=\"在这里插入图片描述\"></p>\n\n",
      //   // "readType": "public",
      //   // "status": 2,
      //   // "not_auto_saved": "1",
      //   // "source": "pc_mdeditor"
      // };

      // const headers = {
      //   "Content-Type": "application/json",
      //   "x-ca-key": 203803574,
      //   "x-ca-nonce": "3d6cca2b-be48-44fb-832c-4ed20998a4ed",
      //   "x-ca-signature": "fwZNdueGf/2CS0oghHC/fAyxS9TgOzaocGrpBHPrJ8o=",
      //   "x-ca-signature-headers": "x-ca-key,x-ca-nonce"
      // };

      // axios.post(url, d, {
      //   headers,
      // }).then(response => {
      //   console.log("成功了", response);
      // }).catch(e => {
      //   console.log("失败了", e);
      // });
    });
  }
})();