/**
 * 主页js
 */

import ZhaoCai from "./single-analysis/zhaocai.js"; // 招财数据解析

const zc_div = document.getElementById("form-wrapper"); // 招财登录框

// 判断是否有token，且token是否过期，如果没有过期，就隐藏招财登录框，反之则显示登录框
const token = window.localStorage.getItem(ZhaoCai.ZC_Authorization);
const expire = parseInt(window.localStorage.getItem(ZhaoCai.ZC_Authorization_Expires));

if (token && !isNaN(expire) && expire > new Date().getTime() && false) {
  // 存在token，且token没有过期
  zc_div.setAttribute("style", "display: none;");
} else {
  // token不存在，或者是token过期
  zc_div.setAttribute("style", "display: block;");
  const refresh = document.getElementById("zc_refresh_imgcode"); // 刷新验证码按钮
  const zc_imgcode = document.getElementById("zc_imgcode"); // 验证码图片
  const zc_imgcode_input = document.getElementById("zc_imgcode_text"); // 验证码输入框
  const zc_login = document.getElementById("zc_login"); // 登录按钮
  let codeid = ""; // 图片验证码id号码
  refresh.onclick = async function() {
    const resp = await ZhaoCai.getImageCode();
    codeid = resp.id;
    console.log("get image", resp.id, resp.image);
    zc_imgcode.setAttribute("src", resp.image);
  };

  zc_login.onclick = async function() {
    const code = zc_imgcode_input.value;
    ZhaoCai.login(codeid, code).then((response) => {
      console.log("获取到了token", response);
      const now = new Date();
      now.setDate(now.getDate() + 30);
      window.localStorage.setItem(ZhaoCai.ZC_Authorization, response.data.token);
      window.localStorage.setItem(ZhaoCai.ZC_Authorization_Expires, now.getTime());
      alert("登录成功");
      // zc_div.setAttribute("style", "display: none");
    });
  };
}

