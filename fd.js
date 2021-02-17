var body = $response.body; // 声明一个变量body并以响应消息体赋
let url=$request.url;

console.log(url+":"+body);

var freeAd={
                "ADChapterEndCoinVideo": "1",
                "ADChapterEndFreeVideo": "1",
                "ADCodeBiKanChapterStartPop": "1",
                "ADCodeBottomGuide": "1",
                "ADCodeNewEndVideo": "1",
                "ADCodeNewInsert": "1",
                "ADCodeNewInsertVideo": "1",
                "ADCodeNewUnlock": "1",
                "ADCodeNewUnlockAuto": "1",
                "ADCodeReadBottomFloat": "1",
                "ADCodeReadEnd": "1",
                "ADCodeReadEndIncentiveVideo": "1",
                "ADCodeReadEndShadow": "1",
                "ADCodeReadFullScreen": "1",
                "ADCodeReadInsert": "1",
                "ADCodeReadInsertFixed": "1",
                "ADCodeReadInsertVideo": "1",
                "ADCodeReadMiddlePop": "1",
                "ADCodeReadStartIncentiveVideo": "1",
                "ADCodeReadTopPop": "1",
                "ADCodeReadTopVideoButton": "1",
                "ADCodeSingleBookVideo": "1"
            };
if(url.endsWith("getInfo")){
	var obj = JSON.parse(body);
	obj.data.vip.is_vip="1";
	obj.data.vip_end_time="4092579678000";
	obj.data.vip.freeAd=freeAd;
	body = JSON.stringify(obj); // 重新打包回json字符串
}

if(url.endsWith("getAds")){
	var obj = JSON.parse(body);
	obj.data.hideDay="1000";
	obj.data.ids=[];
	body = JSON.stringify(obj); // 重新打包回json字符串
}

console.log("修改后:"+body);

$done(body); // 结束修改
