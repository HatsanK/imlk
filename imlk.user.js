// ==UserScript==
// @id            imlk
// @name          GREEM@S KRMenu
// @version       0.6.0
// @author        l4disk,HatsanK
// @description   그리마스 메뉴 번역
// @include       http://imas.gree-apps.net/*
// @resource      customCSS https://raw.githubusercontent.com/HatsanK/imlk/master/custom.css
// @require       http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @grant         GM_addStyle
// @grant         GM_getResourceText
// ==/UserScript==

GM_addStyle (GM_getResourceText ("customCSS") );

var giturl = "https://raw.githubusercontent.com/HatsanK/imlk/master/"

// -- Replace image
$(document).ready(function(){
    $("[src='http://cdn.bn765.com/005/44199bc83e9085aabcfa42d714c72e4924934a8cb912e9b75c0ef98bf67d4a0c?93d0c01122e4f437d22ceab823e09592']").attr("src", giturl+"/images/limitime-ticket.png");
    $("[src='http://cdn.bn765.com/809/1e4492b2f9669b9684258877f3056bbded1b972ab14e52829270d2895a3b9f374d171d0fcf2afdd238f7963d2dfa9685']").attr("src", giturl+"/images/gasha-package.png");
    $("[src='http://cdn.bn765.com/531/1e4492b2f9669b9684258877f3056bbded1b972ab14e52829270d2895a3b9f37b6ea751491187786f9f85f0f9531338f267d26fd9e2ae1e8f875c42d021dce9f']").attr("src", giturl+"/images/limitime-shop.png");
    $("[src='http://cdn.bn765.com/9a2/20b0715cbf2661726bfd646031239b114b1f409a505851a59a51954a035aadd4ca54cc4b3216f0cb8f6be302be6cd1d0?de738132d32e9a510740d411f2ab5874']").attr("src", giturl+"/images/introduction.png");
    $("[src='http://cdn.bn765.com/366/20b0715cbf2661726bfd646031239b11917fd6dd44897471ba9c3d967f2ec5a6?bd0fb50fdb5666687732e136289197a4']").attr("src", giturl+"/images/notice.png");
    $("[src='http://cdn.bn765.com/b22/20b0715cbf2661726bfd646031239b113b7634b54a6558bdc81366ebb28045d8?c728a3ee2561b78a7e21e7b0e3b08a4a']").attr("src", giturl+"/images/repri.png");
    $("[src='http://cdn.bn765.com/aa1/1e4492b2f9669b9684258877f3056bbded1b972ab14e52829270d2895a3b9f37ad4bb12160d43be8b2a06aa05902340dfe1eb1945981ef80a439a2af3ef2fad5']").attr("src", giturl+"/images/live-ticketgasha.png");
    $("[src='http://cdn.bn765.com/850/1e4492b2f9669b9684258877f3056bbded1b972ab14e52829270d2895a3b9f376378b97e30f2a7fd52e60ce8364b2d333f45644bbedc7260e0eac5e085df1601']").attr("src", giturl+"/images/gasha-eventicket.png");
    $("[src='http://cdn.bn765.com/a2c/e4f71985efb653fb760fd54e204afe2513e36a37352693c1bfd329c22f494638?4a6ac627a31c9de73272056afb7dd3fc']").attr("src", giturl+"/images/pagetop.jpg");
    $("[src='http://cdn.bn765.com/ded/4261f0084835ba525df4df83261b0c1de3b630530d2f9e9fd4d3ef6769581af991efc7d0c51ded6189a934da6eedf933?1ad5133c4b5fb4493b8125d3e679c44a']").attr("src", giturl+"/images/recommend.png");
    $("[src='http://cdn.bn765.com/042/1e4492b2f9669b9684258877f3056bbded1b972ab14e52829270d2895a3b9f3790547ef888d78c5ed0f82f26ca68b314e398d4ed5f73fd4f1f72e1d9950a336c']").attr("src", giturl+"/images/ps_learn.jpg");
    $("[src='http://cdn.bn765.com/ad0/4261f0084835ba525df4df83261b0c1df82af2a846ae3ecf897c44d5d700f573434ed7111e9d860e81c2d902d7f7293d?c9c5f45e6e39e4c80b7759212b45301b']").attr("src", giturl+"/images/theaterunit.png");
    $("[src='http://cdn.bn765.com/e80/44199bc83e9085aabcfa42d714c72e49553ec2b06301cb72bccf854f3b632d2a?aebe391ac9831bca85fe9798a683e786']").attr("src", giturl+"/images/event-masterticket.jpg");
    /*$(document).ajaxComplete(function(){
        $("[src='http://cdn.bn765.com/5c2/20b0715cbf2661726bfd646031239b11ea7c7447fba1f1234889047a1f969033?9d0206b8a246389dfdc2748b4992b12b']").attr("src", giturl+"/images/awake.png");

    });*/
});
