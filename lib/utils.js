/**
 * 工具类
 */

'use strict';

/**
 * 日期工具类
 */
class DateUtil {
  /**
   * 将日期格式化为自己的格式
   * @param {Date} date 要格式化的日期
   * @param {String} fmt 格式化格式 支持 yyyy-MM-dd 或者 yyyy-MM-dd hh:mm:ss
   */
  formatDate(date, fmt) { // author: meizz
    const o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      S: date.getMilliseconds(), // 毫秒
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (const k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
      }
    }
    return fmt;
  }
  /**
   * 判断字符串是否为日期（日期格式为：yyyy-MM-dd）
   */
  isAdDate(adDate) {
    // 从1000到9999年的日期格式
    const pattern = /^[1-9]\d{3}-((0[1-9]{1})|(1[0-2]{1}))-((0[1-9]{1})|([1-2]{1}\d{1})|(3[0-1]{1}))$/;
    if (!pattern.test(adDate)) {
      return false;
    }

    const arrAdDate = adDate.split('-');
    const adYear = parseInt(arrAdDate[0]);
    const month = parseInt(arrAdDate[1]);
    const day = parseInt(arrAdDate[2]);
    const dateTmp = new Date(adYear, month - 1, day);
    if (dateTmp.getFullYear() !== adYear || dateTmp.getMonth() !== month - 1 || dateTmp.getDate() !== day) {
      return false;
    }
    return true;
  }

  /**
   * 格式化时间戳为 yyyy-MM-dd hh:mm:ss
   * @param {timestamps} timestamp 时间戳
   */
  getLocalTime(timestamp) {
    const d = new Date(timestamp);
    const date = (d.getFullYear()) + '-' +
            (d.getMonth() + 1) + '-' +
            (d.getDate()) + ' ' +
            (d.getHours()) + ':' +
            (d.getMinutes()) + ':' +
            (d.getSeconds());
    return date;
  }

  /**
   * 格式化时间戳为 yyyy-MM-dd
   * @param {timestamps} timestamp 时间戳
   */
  getLocalDate(timestamp) {
    const d = new Date(timestamp);
    const date = (d.getFullYear()) + '-' +
      (d.getMonth() + 1) + '-' +
      (d.getDate());
    return date;
  }

  /**
   * 判断日期是否有效
   * @param {Date} date 需要进行判断的日期
   */
  isValidDate(date) {
    return date instanceof Date && !isNaN(date.getTime());
  }
}

const dateUtils = new DateUtil();
Object.freeze(dateUtils);

export default { dateUtils };
