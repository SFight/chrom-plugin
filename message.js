(function() {
  chrome.runtime.onConnect.addListener(function(port) {
    // port.name 用于判断当前是来自哪个链接
    port.onMessage.addListener(function(msg) {
      // msg消息对象
      if (port.name === "WECHAT_ARTICLE_SYNC") {
        // 微信文章同步
        chrome.storage.local.set({key: msg}, function() {
          console.log('Value is set to ' + JSON.stringify(msg));
        });
        port.postMessage({errcode: 0, errmsg: "success", data: {}});
      } else {
        // 不确定是什么
        port.postMessage({errcode: 1001, errmsg: "Unknown message", data: {}});
      }
    });
  });

  // chrome.runtime.onMessage.addListener(
  //   function(request, sender, sendResponse) {
  //     console.log(sender.tab ?
  //                 "来自内容脚本：" + sender.tab.url :
  //                 "来自扩展程序");
  //     if (request.greeting == "您好")
  //       sendResponse({farewell: "再见"});
  //   });
})();