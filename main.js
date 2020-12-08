(function() {

  const regex = /https:\/\/mp.weixin.qq.com\/cgi-bin\/appmsgcopyright.*action=ori_whitelist.*/;
  if (regex.test(window.location.href)) {
    quickWhite(); // 快速开白按钮增加
  }

  function quickWhite() {
    // 给按钮添加一键功能
    const addBtns = document.getElementsByClassName("global_extra"); // 此处在页面上会获取到两个，第一个是单篇，第二个是长期
    const button = document.createElement("button");
    button.innerHTML = "一键添加";
    button.setAttribute("class", "weui-desktop-btn weui-desktop-btn_primary");
    button.onclick = function() {
      const world = prompt("请输入公众号名称，多个用逗号隔开", "");
      if (world) {
        // 进行操作
        onQuickClick(world);
      }
    };
    addBtns[0].appendChild(button);

    const button1 = document.createElement("button");
    button1.innerHTML = "一键添加（按名称）";
    button1.setAttribute("class", "weui-desktop-btn weui-desktop-btn_primary");
    button1.onclick = function() {
      const world = prompt("请输入公众号名称，多个用逗号隔开", "");
      if (world) {
        // 进行操作
        onQuickClick(world, 1);
      }
    };
    addBtns[0].appendChild(button1);

    const button2 = document.createElement("button");
    button2.innerHTML = "一键添加（按ID）";
    button2.setAttribute("class", "weui-desktop-btn weui-desktop-btn_primary");
    button2.onclick = function() {
      const world = prompt("请输入公众号名称，多个用逗号隔开", "");
      if (world) {
        // 进行操作
        onQuickClick(world, 2);
      }
    };
    addBtns[0].appendChild(button2);
  }

  


  /**
   * 根据参数名称获取参数内容
   * @param {String} name 参数名称
   * @return 获取到的参数结果，如果没有返回null
   */
  function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg); // 此处substing从第一个开始，是为了去掉问号
    if (r != null) {
      return unescape(r[2]);
    }
    return null;
  }


  /**
   * 获取公众号
   * @param {String} name 公众号名称或公众号id
   * @param {Number} type 操作类型 1:按账号名称 2:按账号ID
   * @param {Function} callback 回调函数，回调获取到的参数对象
   */
  function getOfficalAccount(name, type, callback) {
    if (typeof callback !== 'function') throw new Error('callback必须为函数');
    /**
     * 将当前网址截取得到参数
     */
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://mp.weixin.qq.com/cgi-bin/appmsgcopyright?action=searchacct", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        // JSON.parse 不执行攻击者的脚本。
        console.log('**********获取到结果*******', xhr.responseText);
        const resp = JSON.parse(xhr.responseText);
        // 此处返回结果示例
        // {
        // 	"base_resp": {
        // 		"err_msg": "",
        // 		"ret": 0
        // 	},
        // 	"search_list": [{
        // 		"nickname": "程序员基础课",
        // 		"openid": "ojncrwrGaXrXY7fGxPf9tQ4Vm15Q",
        // 		"pic_url": "http://wx.qlogo.cn/mmhead/Q3auHgzwzM53dRVC5Af8yHyRDoiaqvBbYSmENdZsWw3u7ibK05wCLLMQ/0",
        // 		"status": 0,
        // 		"username": "gh_46ebbd09eb1a",
        // 		"wx_name": "I_am_a_Coder_1991"
        // 	}]
        // }
        if (resp.base_resp.ret === 0) {
          // 成功了
          if (Array.isArray(resp.search_list) && resp.search_list.length > 0) {
            for(let i = 0; i < resp.search_list.length; i++) {
              const nickname = resp.search_list[i].nickname; // 账号名称
              const openid = resp.search_list[i].openid; // 开放平台账号编号
              const wx_name = resp.search_list[i].wx_name; // 账号ID
              if (type === 1) {
                // 按账号名称
                if (name === nickname) {
                  callback(nickname, openid);
                } else {
                  // callback(null, null);
                }
              } else if (type === 2) {
                // 按账号ID
                if (name === wx_name) {
                  callback(nickname, openid);
                } else {
                  // callback(null, null);
                }
              } else {
                // 默认全部添加
                callback(nickname, openid);
              }
            }
            
          } else {
            callback(null, null);
          }
        } else {
          // 失败了
          callback(null, null);
        }
      }
    }
    const id = getQueryString("id");
    const idx = getQueryString("idx");
    const token = getQueryString("token");
    const lang = getQueryString("lang");
    const data = "username=" + name + "&id=" + id + "&idx=" + idx + "&token=" + token + "&lang=" + lang + "&f=json&ajax=1";
    console.log("******发送的数据******", data);
    xhr.send(data);
  }

  /**
   * 添加白名单
   * @param {String} nickname 公众号名称
   * @param {String} openid	公众号id
   * @param {Function} callback 回调函数
   */
  function addWhiteList(nickname, openid, callback) {
    if (typeof callback !== "function") throw new Error("callback必须为函数");
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://mp.weixin.qq.com/cgi-bin/appmsgcopyright?action=add_ori_whitelist", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        // JSON.parse 不执行攻击者的脚本。
        console.log('**********获取到结果*******', xhr.responseText);
        const resp = JSON.parse(xhr.responseText);
        // 返回结果示例
        // {
        // 	"base_resp": {
        // 		"err_msg": "",
        // 		"ret": 0
        // 	}
        if (typeof callback === "function") {
          if (resp.base_resp.ret === 0) {
            callback(null)
          } else {
            callback(resp)
          }
        }

      }
    }
    const id = getQueryString("id");
    const idx = getQueryString("idx");
    const token = getQueryString("token");
    const lang = getQueryString("lang");
    // 发送参数示例
    // id=2247483668&idx=1&whitelist={"white_list":[{"nickname":"程序员基础课","openid":"ojncrwrGaXrXY7fGxPf9tQ4Vm15Q","can_modify":1,"can_hide_source":0,"can_reward":0}]}&token=432565980&lang=zh_CN&f=json&ajax=1
    const data = "id=" + id + "&idx=" + idx + "&whitelist={\"white_list\":[{\"nickname\":\"" + nickname + "\",\"openid\":\"" + openid + "\",\"can_modify\":1,\"can_hide_source\":0,\"can_reward\":0}]}&token=" + token + "&lang=zh_CN&f=json&ajax=1";
    console.log("******发送的数据******", data);
    xhr.send(data);
  }

  /**
   * 点击快速开白权限的按钮
   * @param {String} officalaccounts 多个逗号隔开的公众号账户或id
   * @param {Number} type 操作类型 1:按账号名称 2:按账号ID
   */
  function onQuickClick(officalaccounts, type) {
    // 操作列表进行添加数据
    const list = officalaccounts ? officalaccounts.replace(/，/ig,',').split(",") : [];
    let result = list.length;
    const fail = [];
    for (let i = 0; i < list.length; i++) {
      const name = list[i].trim();
      getOfficalAccount(name, type, (nickname, openid) => {
        if (nickname === null || openid === null) {
          fail.push(name);
          --result;
          refresh(result, fail);
        } else {
          addWhiteList(nickname, openid, (resp) => {
            if (resp) {
              // 加白失败
              fail.push(name);
            }
            --result;
            refresh(result, fail);
          });
        }
        
      });
    }
  }

  /**
   * 刷新页面
   * @param {Number} result 记录操作次数，当小于等于0的时候才完成刷新
   * @param {Array} fail 失败数据的账号数组
   */
  function refresh(result, fail) {
    if (result <= 0) {
      if (fail.length > 0) {
        const a = fail.join(",") + "等账号加白失败";
        alert(a);
      }
      window.location.reload();
    }
  }
})();