(function() {

  const xlsxscript = document.createElement("script");
  xlsxscript.type = "text/javascript";
  xlsxscript.src = "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.15.2/xlsx.core.min.js";
  document.head.appendChild(xlsxscript);

  console.log("页面加载完毕");
  const regexUserIncrease = /https:\/\/mp.weixin.qq.com\/misc\/useranalysis\?1=1.*/; // 用户增长界面
  const regexUserAttribute = /https:\/\/mp.weixin.qq.com\/misc\/useranalysis\?action=attr.*/; // 用户属性
  const regexFrequentReadUserAnalysis = /https:\/\/mp.weixin.qq.com\/misc\/useranalysis\?action=activity_analysis_page&attr_type=4.*/; // 常读用户分析
  if (regexUserIncrease.test(window.location.href)) {
    // 用户增长
    userIncrease();
  } else if (regexUserAttribute.test(window.location.href)) {
    // 用户属性
    userAttribute();
  } else if (regexFrequentReadUserAnalysis.test(window.location.href)) {
    // 常读用户分析
    // frequentReadUserAnalysis();
  }

  /**
   * 添加用户增长按钮
   */
  function userIncrease() {
    // 给按钮添加一键功能
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = ''
    + 'const body = document.getElementsByTagName("body")[0]; // 获取body，以便增加转换按钮 \n'
    + 'const div = document.createElement("div"); \n'
    + 'const divstyle = "" \n'
    + '+ "display: inline-block; min-width: 54px; line-height: 2.42857143; vertical-align: middle; " \n'
    + '+ "text-align: center; text-decoration: none; border-radius: 3px; font-size: 14px; cursor: pointer; " \n'
    + '+ "position: fixed; right: 0; top: 0; "; \n'
    + 'div.setAttribute("style", divstyle); \n'
    + 'div.setAttribute("id", "downUserIncrease"); \n'
    + 'body.appendChild(div); \n'

    + 'const button0 = document.createElement("button"); \n'
    + 'button0.innerHTML = "下载用户增长数据"; \n'
    + 'const style = "background-color: #07C160; border-color: #07C160; color: #FFFFFF; " \n'
    + '+ "display: inline-block; padding: 0 22px; min-width: 54px; line-height: 2.42857143; vertical-align: middle; " \n'
    + '+ "text-align: center; text-decoration: none; border-radius: 3px; font-size: 14px; cursor: pointer; " \n'
    + '+ "border-width: 1px; border-style: solid; box-sizing: content-box; " \n'
    + '+ "margin: 10px;"; \n'
    + 'button0.setAttribute("style", style); \n'
    + 'button0.onclick = function() { \n'
      + 'console.log("***********", window.cgiData); \n'
      + 'downUserIncrease(); \n'
      + '}; \n'
      + 'div.appendChild(button0); \n'
    +'function downUserIncrease() { \n'
      + '// Excel文件名称 \n'
      + 'const filename = "平台数据分析" + "-" + new Date().getTime() + ".xlsx"; \n'
      + '// sheet的标题头 \n'
      + 'const header = [ "新增关注人数", "取消关注人数", "净增关注人数", "累计关注人数", "日期" ]; \n'
    
      + '// 创建工作簿和工作表 \n'
      + 'const wb = XLSX.utils.book_new(); // 工作簿，即一个Excel文件 \n'
      + 'for (let i = 0; i < window.cgiData.list.length; i++) { \n'
      + '  const ws_tt = XLSX.utils.aoa_to_sheet([header]); // 头条表 \n'
      + '  const item = window.cgiData.list[i]; \n'
      + '  XLSX.utils.sheet_add_aoa(ws_tt, convertJson2Array(header, item.list)); \n'
    
      + '  XLSX.utils.book_append_sheet(wb, ws_tt, "第" + (i + 1) + "页"); \n'
      + '}'
      + '// 写出Excel工作簿 \n'
      + 'XLSX.writeFile(wb, filename); \n'
    + '}'
    + '/** \n'
    + '* 将JSON数据改成Array，便于生成excel \n'
    + '*/ \n'
    + 'function convertJson2Array(header, analysisData) { \n'
    + ' const arr = [ header ]; \n'
    + ' for (let i = 0; i < analysisData.length; i++) { \n'
      + ' const item = analysisData[i]; \n'
      + ' arr.push([ item.new_user, item.cancel_user, item.netgain_user, item.cumulate_user, item.date ]); \n'
     + '} \n'
   
     + 'console.log("获取到转码数据", arr); \n'
     + 'return arr; \n'
    + '}';
      document.getElementsByTagName("body")[0].appendChild(script);
    // const body = document.getElementsByTagName("body")[0]; // 获取body，以便增加转换按钮
    // const div = document.createElement("div");
    // const divstyle = ""
    // + "display: inline-block; min-width: 54px; line-height: 2.42857143; vertical-align: middle; "
    // + "text-align: center; text-decoration: none; border-radius: 3px; font-size: 14px; cursor: pointer; "
    // // + "border-width: 1px; border-style: solid; box-sizing: content-box; "
    // + "position: fixed; right: 0; top: 0; ";
    // div.setAttribute("style", divstyle);
    // div.setAttribute("id", "downUserIncrease");
    // body.appendChild(div);

    // const button0 = document.createElement("button");
    // button0.innerHTML = "下载用户增长数据";
    // const style = "background-color: #07C160; border-color: #07C160; color: #FFFFFF; "
    // + "display: inline-block; padding: 0 22px; min-width: 54px; line-height: 2.42857143; vertical-align: middle; "
    // + "text-align: center; text-decoration: none; border-radius: 3px; font-size: 14px; cursor: pointer; "
    // + "border-width: 1px; border-style: solid; box-sizing: content-box; "
    // + "margin: 10px;";
    // // + "position: absolute; right: 0; top: 0; ";
    // button0.setAttribute("style", style);
    // button0.onclick = function() {
    //   // TODO 下载用户增长数据
    //   console.log("***********", window.cgiData);

    // };
    // div.appendChild(button0);
  }

  /**
   * 添加用户属性按钮
   */
  function userAttribute() {
    // 给按钮添加一键功能
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = ''
    + 'const body = document.getElementsByTagName("body")[0]; // 获取body，以便增加转换按钮 \n'
    + 'const div = document.createElement("div"); \n'
    + 'const divstyle = "" \n'
    + '+ "display: inline-block; min-width: 54px; line-height: 2.42857143; vertical-align: middle; " \n'
    + '+ "text-align: center; text-decoration: none; border-radius: 3px; font-size: 14px; cursor: pointer; " \n'
    + '+ "position: fixed; right: 0; top: 0; "; \n'
    + 'div.setAttribute("style", divstyle); \n'
    + 'div.setAttribute("id", "downUserAttribute"); \n'
    + 'body.appendChild(div); \n'

    + 'const button0 = document.createElement("button"); \n'
    + 'button0.innerHTML = "下载用户属性数据"; \n'
    + 'const style = "background-color: #07C160; border-color: #07C160; color: #FFFFFF; " \n'
    + '+ "display: inline-block; padding: 0 22px; min-width: 54px; line-height: 2.42857143; vertical-align: middle; " \n'
    + '+ "text-align: center; text-decoration: none; border-radius: 3px; font-size: 14px; cursor: pointer; " \n'
    + '+ "border-width: 1px; border-style: solid; box-sizing: content-box; " \n'
    + '+ "margin: 10px;"; \n'
    + 'button0.setAttribute("style", style); \n'
    + 'button0.onclick = function() { \n'
      + 'console.log("***********", window.cgiData); \n'
      + 'downUserAttribute(); \n'
      + '}; \n'
      + 'div.appendChild(button0); \n'
    +'function downUserAttribute() { \n'
      + '// Excel文件名称 \n'
      + 'const filename = "平台数据分析" + "-" + new Date().getTime() + ".xlsx"; \n'
      + '// sheet的标题头 \n'
    
      + '// 创建工作簿和工作表 \n'
      + 'const wb = XLSX.utils.book_new(); // 工作簿，即一个Excel文件 \n'
      + 'for (let i = 0; i < window.cgiData.list.length; i++) { \n'
      + '  const item = window.cgiData.list[i]; \n'

      + '  const agesheader = [ "年龄", "用户数", "占比" ]; \n'
      + '  const ws_ages = XLSX.utils.aoa_to_sheet([agesheader]); // 头条表 \n'
      + '  XLSX.utils.sheet_add_aoa(ws_ages, convertAgesJson2Array(agesheader, item.ages)); \n'
      + '  XLSX.utils.book_append_sheet(wb, ws_ages, "年龄分布" + item.date + "第" + (i + 1) + "页"); \n'

      + '  const gendersheader = [ "性别", "用户数", "占比" ]; \n'
      + '  const ws_gender = XLSX.utils.aoa_to_sheet([gendersheader]); // 头条表 \n'
      + '  XLSX.utils.sheet_add_aoa(ws_gender, convertAgesJson2Array(gendersheader, item.genders)); \n'
      + '  XLSX.utils.book_append_sheet(wb, ws_gender, "性别分布" + item.date + "第" + (i + 1) + "页"); \n'

      + '  const langheader = [ "语言", "用户数", "占比" ]; \n'
      + '  const ws_lang = XLSX.utils.aoa_to_sheet([langheader]); // 头条表 \n'
      + '  XLSX.utils.sheet_add_aoa(ws_lang, convertAgesJson2Array(langheader, item.langs)); \n'
      + '  XLSX.utils.book_append_sheet(wb, ws_lang, "语言分布" + item.date + "第" + (i + 1) + "页"); \n'

      + '  const regionsheader = [ "编号", "父编号", "地域", "用户数", "占比" ]; \n'
      + '  const ws_regions = XLSX.utils.aoa_to_sheet([regionsheader]); // 头条表 \n'
      + '  XLSX.utils.sheet_add_aoa(ws_regions, convertRegionsJson2Array(regionsheader, item.regions)); \n'
      + '  XLSX.utils.book_append_sheet(wb, ws_regions, "地域分布" + item.date + "第" + (i + 1) + "页"); \n'

      + '  const platformheader = [ "终端", "用户数", "占比" ]; \n'
      + '  const ws_platform = XLSX.utils.aoa_to_sheet([platformheader]); // 头条表 \n'
      + '  XLSX.utils.sheet_add_aoa(ws_platform, convertAgesJson2Array(platformheader, item.platforms)); \n'
      + '  XLSX.utils.book_append_sheet(wb, ws_platform, "终端分布" + item.date + "第" + (i + 1) + "页"); \n'

      + '}'
      + '// 写出Excel工作簿 \n'
      + 'XLSX.writeFile(wb, filename); \n'
    + '}'
    + '/** \n'
    + '* 将JSON数据改成Array，便于生成excel \n'
    + '*/ \n'
    + 'function convertAgesJson2Array(header, analysisData) { \n'
    + ' const arr = [ header ]; \n'
    + ' for (let i = 0; i < analysisData.length; i++) { \n'
      + ' const item = analysisData[i]; \n'
      + ' arr.push([ item.name, item.count, item.percent ]); \n'
     + '} \n'
   
     + 'console.log("获取到转码数据", arr); \n'
     + 'return arr; \n'
    + '}'

    + 'function convertRegionsJson2Array(header, analysisData) { \n'
    + ' const arr = [ header ]; \n'
    + ' for (let i = 0; i < analysisData.length; i++) { \n'
      + ' const item = analysisData[i]; \n'
      + ' arr.push([ item.region.region_id, item.region.parent_region_id, item.region.region_name, item.count, item.percent ]); \n'
     + '} \n'
   
     + 'console.log("获取到转码数据", arr); \n'
     + 'return arr; \n'
    + '}'
      document.getElementsByTagName("body")[0].appendChild(script);
    // const body = document.getElementsByTagName("body")[0]; // 获取body，以便增加转换按钮
    // const div = document.createElement("div");
    // const divstyle = ""
    // + "display: inline-block; min-width: 54px; line-height: 2.42857143; vertical-align: middle; "
    // + "text-align: center; text-decoration: none; border-radius: 3px; font-size: 14px; cursor: pointer; "
    // // + "border-width: 1px; border-style: solid; box-sizing: content-box; "
    // + "position: fixed; right: 0; top: 0; ";
    // div.setAttribute("style", divstyle);
    // div.setAttribute("id", "downUserAttribute");
    // body.appendChild(div);

    // const button0 = document.createElement("button");
    // button0.innerHTML = "下载用户属性数据";
    // const style = "background-color: #07C160; border-color: #07C160; color: #FFFFFF; "
    // + "display: inline-block; padding: 0 22px; min-width: 54px; line-height: 2.42857143; vertical-align: middle; "
    // + "text-align: center; text-decoration: none; border-radius: 3px; font-size: 14px; cursor: pointer; "
    // + "border-width: 1px; border-style: solid; box-sizing: content-box; "
    // + "margin: 10px;";
    // // + "position: absolute; right: 0; top: 0; ";
    // button0.setAttribute("style", style);
    // button0.onclick = function() {
    //   // TODO 下载用户增长数据
    //   console.log("***********", window);

    // };
    // div.appendChild(button0);
  }

  /**
   * 添加常读用户分析按钮
   */
  function frequentReadUserAnalysis() {
    // 给按钮添加一键功能
    const body = document.getElementsByTagName("body")[0]; // 获取body，以便增加转换按钮
    const div = document.createElement("div");
    const divstyle = ""
    + "display: inline-block; min-width: 54px; line-height: 2.42857143; vertical-align: middle; "
    + "text-align: center; text-decoration: none; border-radius: 3px; font-size: 14px; cursor: pointer; "
    // + "border-width: 1px; border-style: solid; box-sizing: content-box; "
    + "position: fixed; right: 0; top: 0; ";
    div.setAttribute("style", divstyle);
    div.setAttribute("id", "downFrequentReadUserAnalysis");
    body.appendChild(div);

    const button0 = document.createElement("button");
    button0.innerHTML = "下载常读用户分析数据";
    const style = "background-color: #07C160; border-color: #07C160; color: #FFFFFF; "
    + "display: inline-block; padding: 0 22px; min-width: 54px; line-height: 2.42857143; vertical-align: middle; "
    + "text-align: center; text-decoration: none; border-radius: 3px; font-size: 14px; cursor: pointer; "
    + "border-width: 1px; border-style: solid; box-sizing: content-box; "
    + "margin: 10px;";
    // + "position: absolute; right: 0; top: 0; ";
    button0.setAttribute("style", style);
    button0.onclick = function() {
      // TODO 下载用户增长数据
      console.log("***********", window.cgiData);

    };
    div.appendChild(button0);
  }

  function downUserIncrease() {
    // Excel文件名称
    const filename = "平台数据分析" + "-" + start_date + "-" + end_date + ".xlsx";
    // sheet的标题头
    const header = [ "新增关注人数", "取消关注人数", "净增关注人数", "累计关注人数", "日期" ];;
  
    // 创建工作簿和工作表
    const wb = XLSX.utils.book_new(); // 工作簿，即一个Excel文件
    for (let i = 0; i < window.cgiData.list.length; i++) {
      const ws_tt = XLSX.utils.aoa_to_sheet([header]); // 头条表
      const item = window.cgiData.list[i];
      XLSX.utils.sheet_add_aoa(ws_tt, convertJson2Array(header, item.list)); // 增加数据 {header: ["title", "view_count","reply_count","retweet_count","fav_count","like_count"]}
  
      XLSX.utils.book_append_sheet(wb, ws_tt, "第" + (i + 1) + "页");
    }
    
    // 写出Excel工作簿
    XLSX.writeFile(wb, filename);
  }
 
  /**
  * 将JSON数据改成Array，便于生成excel
  */
  function convertJson2Array(header, analysisData) {
   const arr = [ header ];

   for (let i = 0; i < analysisData.length; i++) {
     const item = analysisData[i];
     arr.push([ item.name, item.count, item.percent ]);
   }
 
   console.log("获取到转码数据", arr);
   return arr;
  }


  
})();
 