var body = $response.body; // 声明一个变量body并以响应消息体赋
let url=$request.url;

// console.log(url+":"+body);

var vip={
			"card_id": "3000001262666877",
            "cards":
            {
                "vip":
                {
                    "end_time": "2099-03-17 18:31:03",
                    "name": "飞读会员卡",
                    "start_time": "2021-02-17 18:31:03"
                }
            },
            "equity":
            [
                {
                    "endTime": "2099-03-17 18:31:03",
                    "equityId": "107",
                    "equityType": "1",
                    "name": "免广告"
                },
                {
                    "endTime": "2099-03-17 18:31:03",
                    "equityId": "108",
                    "equityType": "4",
                    "name": "缓存"
                },
                {
                    "endTime": "2099-03-17 18:31:03",
                    "equityId": "109",
                    "equityType": "7",
                    "name": "尊贵标识"
                },
                {
                    "endTime": "2099-03-17 18:31:03",
                    "equityId": "110",
                    "equityType": "2",
                    "name": "音量键翻页"
                }
            ],
            "freeAd":
            {
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
            },
            "icon":
            {
                "vip": "https://img.midukanshu.com/browser/banner/2c52efc076f922d75d8bd6dc753c83c0.png"
            },
            "is_vip": "1",
            "special_desc": "听书权益全新上线",
            "vip_end_time": "2099-03-17 18:31:03"
        };

if(url.endsWith("getInfo")){
	let obj = JSON.parse(body);
	let data=obj.data;
	data.vip=vip;
	body = JSON.stringify(obj); // 重新打包回json字符串
	console.log("修改后："+body);
}

if(url.endsWith("equityInfo")){
	let obj = JSON.parse(body);
	obj.data=vip;
	body = JSON.stringify(obj); // 重新打包回json字符串
	console.log("修改后："+body);
}

if(url.endsWith("getAds")){
	let obj = JSON.parse(body);
	obj.data.ids=[];
	body = JSON.stringify(obj); // 重新打包回json字符串
}

$done(body); // 结束修改
