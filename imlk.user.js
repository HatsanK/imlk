// ==UserScript==
// @id            imlk
// @name          GREEM@S KRMenu
// @version       0.4-userjs
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
    $("[src='http://cdn.bn765.com/aa1/1e4492b2f9669b9684258877f3056bbded1b972ab14e52829270d2895a3b9f37ad4bb12160d43be8b2a06aa05902340dfe1eb1945981ef80a439a2af3ef2fad5']").attr("src", giturl+"/images/live-ticket.png");
    $("[src='http://cdn.bn765.com/850/1e4492b2f9669b9684258877f3056bbded1b972ab14e52829270d2895a3b9f376378b97e30f2a7fd52e60ce8364b2d333f45644bbedc7260e0eac5e085df1601']").attr("src", giturl+"/images/gasha-eventicket.png");

    /*$(document).ajaxComplete(function(){
        $("[src='http://cdn.bn765.com/5c2/20b0715cbf2661726bfd646031239b11ea7c7447fba1f1234889047a1f969033?9d0206b8a246389dfdc2748b4992b12b']").attr("src", giturl+"/images/awake.png");

    });*/

    // 일부 번역 시작
    replaceTextOnPage('ｱｲﾄﾞﾙﾏｽﾀｰ', '아이돌마스터');
    replaceTextOnPage('ﾐﾘｵﾝﾗｲﾌﾞ', '밀리언라이브');

    replaceTextOnPage('限定カード一覧', '한정카드 목록');
    // 일부 번역 끝

    // 아이돌 이름 번역
    // -- Vo 시작
    
    replaceTextOnPage('天海春香', '아마미 하루카');
    replaceTextOnPage('天海', '아마미');
    replaceTextOnPage('春香', '하루카');

    replaceTextOnPage('如月千早', '키사라기 치하야');
    replaceTextOnPage('如月', '키사라기');
    replaceTextOnPage('千早', '치하야');

    replaceTextOnPage('四条 貴音', '시죠 타카네');
    replaceTextOnPage('四条', '시죠');
    replaceTextOnPage('貴音', '타카네');

    replaceTextOnPage('水瀬 伊織', '미나세 이오리');
    replaceTextOnPage('水瀬', '미나세');
    replaceTextOnPage('伊織', '이오리');

    replaceTextOnPage('三浦あずさ', '미우라 아즈사');
    replaceTextOnPage('三浦', '미우라');
    replaceTextOnPage('あずさ', '아즈사');

    replaceTextOnPage('春日未来', '카스가 미라이');
    replaceTextOnPage('春日', '카스가');
    //replaceTextOnPage('未来', '미라이'); // 미래, 미라이 해석 문제. 가장 큰 문제라 제외.

    replaceTextOnPage('木下ひなた', '키노시타 히나타');
    replaceTextOnPage('木下', '키노시타');
    replaceTextOnPage('ひなた', '히나타');

    replaceTextOnPage('ジュリア', '쥴리아'); //전각
    replaceTextOnPage('ｼﾞｭﾘｱ', '쥴리아'); //반각

    replaceTextOnPage('高山紗代子', '타카야마 사요코');
    replaceTextOnPage('高山', '타카야마');
    replaceTextOnPage('紗代子', '사요코');

    replaceTextOnPage('田中琴葉', '타나카 코토하');
    replaceTextOnPage('田中', '타나카');
    replaceTextOnPage('琴葉', '코토하');

    replaceTextOnPage('天空橋朋花', '텐쿠바시 토모카');
    replaceTextOnPage('天空橋', '텐쿠바시');
    replaceTextOnPage('朋花', '토모카');

    replaceTextOnPage('箱崎星梨花', '하코자키 세리카');
    replaceTextOnPage('箱崎', '하코자키');
    replaceTextOnPage('星梨花', '세리카');

    replaceTextOnPage('松田亜利沙', '마츠다 아리사');
    replaceTextOnPage('松田', '마츠다');
    replaceTextOnPage('亜利沙', '아리사');

    replaceTextOnPage('最上静香', '모가미 시즈카');
    replaceTextOnPage('最上', '모가미');
    replaceTextOnPage('静香', '시즈카');

    replaceTextOnPage('望月 杏奈', '모치즈키 안나');
    replaceTextOnPage('望月', '모치즈키');
    replaceTextOnPage('杏奈', '안나');

    replaceTextOnPage('矢吹可奈', '모치즈키 안나');
    replaceTextOnPage('矢吹', '모치즈키');
    replaceTextOnPage('可奈', '안나');

    // -- Vo 끝
    // -- Da 시작

    replaceTextOnPage('我那覇響', '가나하 히비키');
    replaceTextOnPage('我那覇', '가나하');
    replaceTextOnPage('響', '히비키'); // 문제발생?

    replaceTextOnPage('菊地真', '키쿠치 마코토');
    replaceTextOnPage('菊地', '키쿠치');
    replaceTextOnPage('真', '마코토');

    replaceTextOnPage('高槻やよい', '타카츠키 야요이');
    replaceTextOnPage('高槻', '타카츠키');
    replaceTextOnPage('やよい', '야요이');

    replaceTextOnPage('エミリースチュアート', '에밀리 스튜어트'); // 전각 성명
    replaceTextOnPage('ｴﾐﾘｰｽﾁｭｱｰﾄ', '에밀리 스튜어트'); // 반각 성명
    replaceTextOnPage('エミリー', '에밀리'); // 전각 성
    replaceTextOnPage('ｴﾐﾘｰ', '에밀리'); // 반각 성
    replaceTextOnPage('スチュアート', '스튜어트'); // 전각 이름
    replaceTextOnPage('ｽﾁｭｱｰﾄ', '스튜어트'); // 반각 이름

    replaceTextOnPage('大神環', '오오가미 타마키');
    replaceTextOnPage('大神', '오오가미');
    replaceTextOnPage('環', '타마키');

    replaceTextOnPage('北上麗花', '키타카미 레이카');
    replaceTextOnPage('北上', '키타카미');
    replaceTextOnPage('麗花', '레이카');

    replaceTextOnPage('高坂海美', '코사카 우미');
    replaceTextOnPage('高坂', '코사카');
    replaceTextOnPage('海美', '우미');
    
    replaceTextOnPage('佐竹美奈子', '사타케 미나코');
    replaceTextOnPage('佐竹', '사타케');
    replaceTextOnPage('美奈子', '미나코');
    
    replaceTextOnPage('島原エレナ', '시마바라 엘레나'); // 전각 성명
    replaceTextOnPage('島原ｴﾚﾅ', '시마바라 엘레나'); // 반각 성명
    replaceTextOnPage('島原', '시마바라');
    replaceTextOnPage('エレナ', '엘레나'); // 전각 이름
    replaceTextOnPage('ｴﾚﾅ', '엘라나'); // 반각 이름
    
    replaceTextOnPage('永吉昴', '나가요시 스바루');
    replaceTextOnPage('永吉', '나가요시');
    replaceTextOnPage('昴', '스바루');
    
    replaceTextOnPage('野々原茜', '노노하라 아카네');
    replaceTextOnPage('野々原', '노노하라');
    replaceTextOnPage('茜', '아카네');
    
    replaceTextOnPage('馬場このみ', '바바 코노미');
    replaceTextOnPage('馬場', '바바');
    replaceTextOnPage('このみ', '코노미');
    
    replaceTextOnPage('福田のり子', '후쿠다 노리코');
    replaceTextOnPage('福田', '후쿠다');
    replaceTextOnPage('のり子', '노리코');
    
    replaceTextOnPage('舞浜歩', '마이하마 아유무');
    replaceTextOnPage('舞浜', '마이하마');
    replaceTextOnPage('歩', '아유무');
    
    replaceTextOnPage('真壁瑞希', '마카베 미즈키');
    replaceTextOnPage('真壁', '마카베');
    replaceTextOnPage('瑞希', '미즈키');
    
    replaceTextOnPage('百瀬莉緒', '모모세 리오');
    replaceTextOnPage('百瀬', '모모세');
    replaceTextOnPage('莉緒', '리오');
    
    replaceTextOnPage('横山奈緒', '요코야마 나오');
    replaceTextOnPage('横山', '요코야마');
    replaceTextOnPage('奈緒', '나오');

    // -- Da 끝
    // -- Vi 시작

    replaceTextOnPage('秋月律子', '아키즈키 리츠코');
    replaceTextOnPage('秋月', '아키즈키');
    replaceTextOnPage('律子', '리츠코');

    replaceTextOnPage('萩原雪歩', '하기와라 유키호');
    replaceTextOnPage('萩原', '하기와라');
    replaceTextOnPage('雪歩', '유키호');
    
    replaceTextOnPage('星井美希', '호시이 미키');
    replaceTextOnPage('美希', '호시이');
    replaceTextOnPage('星井', '미키');
    
    replaceTextOnPage('双海亜美', '후타미 아미'); // 후타아마미 용 절약
    replaceTextOnPage('双海真美', '후타미 마미');
    replaceTextOnPage('双海', '후타미');
    replaceTextOnPage('亜美', '아미');
    replaceTextOnPage('真美', '마미');
    
    replaceTextOnPage('伊吹翼', '이부키 츠바사');
    replaceTextOnPage('伊吹', '이부키');
    replaceTextOnPage('翼', '츠바사'); // 날개라는 뜻도 있어서 오류 발생 가능성
    
    replaceTextOnPage('北沢志保', '키타자와 시호');
    replaceTextOnPage('北沢', '키타자와');
    replaceTextOnPage('志保', '시호');
    
    replaceTextOnPage('篠宮可憐', '시노미야 카렌');
    replaceTextOnPage('篠宮', '시노미야');
    replaceTextOnPage('可憐', '카렌');
    
    replaceTextOnPage('周防桃子', '스오 모모코');
    replaceTextOnPage('周防', '스오');
    replaceTextOnPage('桃子', '모모코');
    
    replaceTextOnPage('徳川まつり', '토쿠가와 마츠리');
    replaceTextOnPage('徳川', '토쿠가와');
    replaceTextOnPage('まつり', '마츠리');
    
    replaceTextOnPage('所恵美', '토코로 메구미');
    replaceTextOnPage('所', '토코로');
    replaceTextOnPage('恵美', '메구미');
    
    replaceTextOnPage('二階堂千鶴', '니카이도 치즈루');
    replaceTextOnPage('二階堂', '니카이도');
    replaceTextOnPage('千鶴', '치즈루');
    
    replaceTextOnPage('ロコ', '로코'); // 전각 가타카나
    replaceTextOnPage('ﾛｺ', '로코'); // 반각 가타카나

    replaceTextOnPage('伴田路子', '한다 로코'); // 실제 이름
    replaceTextOnPage('伴田', '한다'); 
    replaceTextOnPage('路子', '로코'); 
    
    replaceTextOnPage('宮尾美也', '미야모 미야');
    replaceTextOnPage('宮尾', '미야모');
    replaceTextOnPage('美也', '미야');
    
    replaceTextOnPage('豊川風花', '토요카와 후카');
    replaceTextOnPage('豊川', '토요카와');
    replaceTextOnPage('風花', '후카');
    
    replaceTextOnPage('中谷育', '나카타니 이쿠');
    replaceTextOnPage('中谷', '나카타니');
    replaceTextOnPage('育', '이쿠');
    
    replaceTextOnPage('七尾百合子', '나나오 유리코');
    replaceTextOnPage('七尾', '나나오');
    replaceTextOnPage('百合子', '유리코');

    // -- Vi 끝

    // 엑스트라 시작
    replaceTextOnPage('高槻かすみ', '타카츠키 카스미');
    replaceTextOnPage('かすみ', '카스미'); // 성 부분은 야요이 재사용.

    replaceTextOnPage('玲音', '레온'); // 맞는지 모름.

    replaceTextOnPage('音無小鳥', '오토나시 코토리');
    replaceTextOnPage('音無', '오토나시');
    replaceTextOnPage('小鳥', '코토리');
    // 엑스트라 끝

    // 밀리시타 시작
    replaceTextOnPage('桜守歌織', '사쿠라모리 카오리');
    replaceTextOnPage('桜守', '사쿠라모리');
    replaceTextOnPage('歌織', '카오리');

    replaceTextOnPage('白石紬', '시라이시 츠무기');
    replaceTextOnPage('白石', '시라이시');
    replaceTextOnPage('紬', '츠무기');

    replaceTextOnPage('青羽美咲', '아오바 미사키');
    replaceTextOnPage('青羽', '아오바');
    replaceTextOnPage('美咲', '미사키');
    // 밀리시타 끝
    // 아이돌 끝
    
    
    // --- Text Replacer on StackOverflow
    function replaceTextOnPage(from, to){
        getAllTextNodes().forEach(function(node){
          node.nodeValue = node.nodeValue.replace(new RegExp(quote(from), 'g'), to);
        });
      
        function getAllTextNodes(){
          var result = [];
      
          (function scanSubTree(node){
            if(node.childNodes.length) 
              for(var i = 0; i < node.childNodes.length; i++) 
                scanSubTree(node.childNodes[i]);
            else if(node.nodeType == Node.TEXT_NODE) 
              result.push(node);
          })(document);
      
          return result;
        }
      
        function quote(str){
          return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        }
      }
});
