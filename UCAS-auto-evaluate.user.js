// ==UserScript==
// @name         UCAS auto evaluate
// @namespace    https://www.zhihu.com/people/pinelliaternata/activities
// @version      2.0
// @description  在中国科学院大学评教系统中自动选中“非常符合/非常满意”，并将文本框最小字数改为1个字。
// @author       Sun Jiao
// @match        http://jwxk.ucas.ac.cn/evaluate/*
// @grant        none
// @license     description: CC BY-SA 4.0; code: GPL.
// ==/UserScript==

(function() {
    'use strict';
    //document.body.innerHTML = document.body.innerHTML.replace(/value=\"5\" aria-required=\"true\">/g, 'value=\"5\" aria-required=\"true\" checked=\"true\">');

    var single;
    var i;
    var item;

    for (i = 2; i <= 87; i++) {
        item = "item_" + i.toString();
        single = document.getElementsByName(item);
        if(single.length > 0){
            single[0].checked = 1;
        }
    }
    document.getElementsByName("radio_19")[1].checked = 1;

    var multi = document.getElementsByName("item_25");
    if(multi.length > 0){
        for (i = 1; i <= 2; i++) {
            multi[i].checked = 1;
        }
    }
    //document.body.innerHTML = document.body.innerHTML.replace(/minlength=\"15\"/g, 'minlength=\"1\"');

    var text;
    for (i = 14; i <= 18; i++) {
        item = "item_" + i.toString();
        text = document.getElementsByName(item);
        if(text.length > 0){
            text[0].setAttribute("minlength","1");
        }
    }

    for (i = 43; i <= 44; i++) {
        item = "item_" + i.toString();
        text = document.getElementsByName(item);
        if(text.length > 0){
            text[0].setAttribute("minlength","1");
        }
    }

    /*document.getElementsByName("item_14")[0].value = "授课老师风趣幽默而且干货多，能收获很多知识。";
    document.getElementsByName("item_15")[0].value = "我认为课堂上可以多一些互动交流。";
    document.getElementsByName("item_16")[0].value = "我平均每周在这门课程上花费4小时。";
    document.getElementsByName("item_17")[0].value = "在参与这门课之前，我对这个学科领域兴趣一般。";
    document.getElementsByName("item_18")[0].value = "我每节课都会出勤，签到，回答问题。";*/
})();
