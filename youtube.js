(function() {

  const regex = /https:\/\/www.youtube.com\/.*/;
  if (regex.test(window.location.href)) {
    // subtitle(); // 添加字幕导出按钮
  }

  function subtitle() {
    // 给按钮添加一键功能
    const body = document.getElementsByTagName("body")[0]; // 获取body，以便增加转换按钮
    const div = document.createElement("div");
    const divstyle = ""
    + "display: inline-block; min-width: 54px; line-height: 2.42857143; vertical-align: middle; "
    + "text-align: center; text-decoration: none; border-radius: 3px; font-size: 14px; cursor: pointer; "
    // + "border-width: 1px; border-style: solid; box-sizing: content-box; "
    + "position: fixed; right: 0; top: 100px; ";
    div.setAttribute("style", divstyle);
    body.appendChild(div);

    const button0 = document.createElement("button");
    button0.innerHTML = "下载英文字幕";
    const style = "background-color: #07C160; border-color: #07C160; color: #FFFFFF; "
    + "display: inline-block; padding: 0 22px; min-width: 54px; line-height: 2.42857143; vertical-align: middle; "
    + "text-align: center; text-decoration: none; border-radius: 3px; font-size: 14px; cursor: pointer; "
    + "border-width: 1px; border-style: solid; box-sizing: content-box; "
    + "margin: 10px;";
    // + "position: absolute; right: 0; top: 0; ";
    button0.setAttribute("style", style);
    button0.onclick = function() {
      
      saveAsrEN();

    };
    div.appendChild(button0);

    const button1 = document.createElement("button");
    button1.innerHTML = "下载中文字幕";
    button1.setAttribute("style", style);
    button1.onclick = function() {
      saveAsrCN();

    };
    div.appendChild(button1);
  }

  function saveAsrEN() {
    // const url = window.ytInitialPlayerResponse.captions.playerCaptionsTracklistRenderer.captionTracks[0].baseUrl;
    const url = "";
    console.log('***************', window, url);
  }

  function saveAsrCN() {

  }

})();