// $('#search').change(function () {
//     $('#img-urls').empty();
//     dumpImages($('#search').val());
//   });
  
//   // Traverse the  tree, and print the folder and nodes.
//   function dumpImages(query) {
//     const items = document.getElementsByClassName(query);
//     dumpNodes(items);
//     // $('#img-urls').append(dumpNodes(items));
//   }
  
//   function dumpNodes(nodes) {
//     for (let i = 0; i < nodes.length; i++) {
//       $('#img-urls').append(nodes[i].getAttribute("data-src"));
//     }
//   }

  (function() {

    // const regex = /https:\/\/mp.weixin.qq.com\/cgi-bin\/appmsgcopyright.*action=ori_whitelist.*/;
    const regex = /(https:\/\/mp.weixin.qq.com\/s\/ZAtE5F7IItV1t0H8rgKlFA)|(https:\/\/mp.weixin.qq.com\/s\/oRBeGjK-mqTEq5nEaU0wvg)|(https:\/\/mp.weixin.qq.com\/s\/KCw9HVwVPWqHpCpv-hVJgw)/;
    if (regex.test(window.location.href)) {
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
        button0.innerHTML = "一键下载图片";
        const style = "background-color: #07C160; border-color: #07C160; color: #FFFFFF; "
        + "display: inline-block; padding: 0 22px; min-width: 54px; line-height: 2.42857143; vertical-align: middle; "
        + "text-align: center; text-decoration: none; border-radius: 3px; font-size: 14px; cursor: pointer; "
        + "border-width: 1px; border-style: solid; box-sizing: content-box; "
        + "margin: 10px;";
        // + "position: absolute; right: 0; top: 0; ";
        button0.setAttribute("style", style);
        button0.onclick = function() {
          queryImages();
    
        };
        div.appendChild(button0);
    }

    function queryImages() {
        // const nodes = document.getElementsByClassName("rich_pages wxw-img");
        const nodes = document.getElementsByTagName("img");

        // 给按钮添加一键功能
        const body = document.getElementsByTagName("body")[0]; // 获取body，以便增加转换按钮
        const div = document.createElement("div");
        const divstyle = ""
        + "display: inline-block; min-width: 54px; line-height: 2.42857143; vertical-align: middle; "
        + "text-align: center; text-decoration: none; border-radius: 3px; font-size: 14px; cursor: pointer; "
        // + "border-width: 1px; border-style: solid; box-sizing: content-box; "
        + "position: fixed; right: 0; top: 50px; ";
        div.setAttribute("style", divstyle);
        body.appendChild(div);

        for (let i = 0; i < nodes.length; i++) {
            let tmp = nodes[i].getAttribute("data-src");
            if (tmp == undefined) {
                tmp = nodes[i].getAttribute("data-croporisrc");
            }

            if (tmp == undefined) {
                tmp = nodes[i].getAttribute("src");
            }
            // console.log(nodes[i].getAttribute("data-src"));
            // const a0 = document.createElement("a");
            // a0.href = nodes[i].getAttribute("data-src");
            // a0.innerHTML = i + 1;
            // const style = "background-color: #07C160; border-color: #07C160; color: #FFFFFF; "
            // + "display: inline-block; padding: 0 22px; min-width: 54px; line-height: 2.42857143; vertical-align: middle; "
            // + "text-align: center; text-decoration: none; border-radius: 3px; font-size: 14px; cursor: pointer; "
            // + "border-width: 1px; border-style: solid; box-sizing: content-box; "
            // + "margin: 10px;";
            // // + "position: absolute; right: 0; top: 0; ";
            // a0.setAttribute("style", style);
            // a0.setAttribute("download", i + 1 + "." + tmp.substring(tmp.indexOf("wx_fmt=") + "wx_fmt=".length));
            // div.appendChild(a0);

            downloadImgByBlob(tmp);
        }
    }

    /**
     * 下载图片
     * @param {string} url  图片地址
     */
    function downloadImgByBlob(url) {
        var img = new Image()
        img.onload = function() {
            var canvas = document.createElement('canvas')
            canvas.width = img.width
            canvas.height = img.height
            var ctx = canvas.getContext('2d')
            // 将img中的内容画到画布上
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
            // 将画布内容转换为Blob
            canvas.toBlob((blob) => {
                // blob转为同源url
                var blobUrl = window.URL.createObjectURL(blob)
                // 创建a链接
                var a = document.createElement('a')
                a.href = blobUrl
                a.download = name
                // 触发a链接点击事件，浏览器开始下载文件
                a.click()
            })
        }
        img.src = url
        // 必须设置，否则canvas中的内容无法转换为blob
        img.setAttribute('crossOrigin', 'Anonymous')
    }
  })();