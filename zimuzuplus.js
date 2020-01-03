// ==UserScript==
// @name			字幕组字幕下载页面扩展脚本
// @icon			http://www.zmz2019.com/favicon.ico
// @author			LisonFan
// @version			1.0
// @description		给字幕组的字幕下载页面增加一个字幕版本对应的视频文件下载链接
// @match			http://www.zmz2019.com/subtitle/*
// @grant			none
// @license			MIT License
// @require         https://lib.baomitu.com/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function ($) {
    'use strict';

    let subtitleInfoList = $("ul.subtitle-info").find("li")
    $.each(subtitleInfoList, function () {
        let tmpStr = $(this).text()
        if (tmpStr.search(/^版本/g) > -1) {
            let title = tmpStr.substring(3)
            title = title.replace(/(\.zip|\.rar)$/, "")
            let url = "https://rarbg.to/torrents.php?search=" + title
            let a = "<a href='" + url + "' target='_blank' style='color: red;'>" + title + "</a>"
            $(this).html($(this).html().replace(title, a))
        }
    })
})(jQuery);
