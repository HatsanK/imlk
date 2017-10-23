// ==UserScript==
// @id            imlk
// @name          GREEM@S KRMenu
// @version       0.2-userjs
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

$(document).ready(function(){
	$("[src='http://cdn.bn765.com/005/44199bc83e9085aabcfa42d714c72e4924934a8cb912e9b75c0ef98bf67d4a0c?93d0c01122e4f437d22ceab823e09592']").attr("src", giturl+"/images/기간한정복권.png");
	$("[src='http://cdn.bn765.com/809/1e4492b2f9669b9684258877f3056bbded1b972ab14e52829270d2895a3b9f374d171d0fcf2afdd238f7963d2dfa9685']").attr("src", giturl+"/images/패키지가샤.png");
	$("[src='http://cdn.bn765.com/531/1e4492b2f9669b9684258877f3056bbded1b972ab14e52829270d2895a3b9f37b6ea751491187786f9f85f0f9531338f267d26fd9e2ae1e8f875c42d021dce9f']").attr("src", giturl+"/images/기간한정샵.png");
    $("[src='http://cdn.bn765.com/9a2/20b0715cbf2661726bfd646031239b114b1f409a505851a59a51954a035aadd4ca54cc4b3216f0cb8f6be302be6cd1d0?de738132d32e9a510740d411f2ab5874']").attr("src", giturl+"/images/인트로덕션.png");
	$("[src='http://cdn.bn765.com/366/20b0715cbf2661726bfd646031239b11917fd6dd44897471ba9c3d967f2ec5a6?bd0fb50fdb5666687732e136289197a4']").attr("src", giturl+"/images/공지사항.png");
	$("[src='http://cdn.bn765.com/b22/20b0715cbf2661726bfd646031239b113b7634b54a6558bdc81366ebb28045d8?c728a3ee2561b78a7e21e7b0e3b08a4a']").attr("src", giturl+"/images/복각.png");
	$("[src='http://cdn.bn765.com/aa1/1e4492b2f9669b9684258877f3056bbded1b972ab14e52829270d2895a3b9f37ad4bb12160d43be8b2a06aa05902340dfe1eb1945981ef80a439a2af3ef2fad5']").attr("src", giturl+"/images/라이브복권.png");
	$("[src='http://cdn.bn765.com/850/1e4492b2f9669b9684258877f3056bbded1b972ab14e52829270d2895a3b9f376378b97e30f2a7fd52e60ce8364b2d333f45644bbedc7260e0eac5e085df1601']").attr("src", giturl+"/images/이벤트티켓가샤.png");

	/*$(document).ajaxComplete(function(){
		$("[src='http://cdn.bn765.com/5c2/20b0715cbf2661726bfd646031239b11ea7c7447fba1f1234889047a1f969033?9d0206b8a246389dfdc2748b4992b12b']").attr("src", chrome.extension.getURL("/images/각성.png"));

	});*/
});
