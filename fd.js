var body = $response.body; // 声明一个变量body并以响应消息体赋

body={
    "code": 0,
    "message": "成功",
    "currentTime": 1613552660,
    "data":
    {
        "audit_avatar": "",
        "audit_nickname": "用户1262666877",
        "avatar": "https://img.midukanshu.com/mdwz/icon/default.png",
        "avatarAuditStatus": "",
        "avatar_data":
        {
            "code": "0",
            "msg": "",
            "status_name": ""
        },
        "bind_mobile": "",
        "drawUrl": "",
        "goldCoin": 0,
        "goldCoinMoney": 0,
        "invite_code": "A1262666877",
        "login_status": "1",
        "mobile": "180****3562",
        "nickname": "用户1262666877",
        "nicknameAuditStatus": "",
        "nickname_data":
        {
            "code": "0",
            "msg": "",
            "status_name": ""
        },
        "qutoutiao": "",
        "readTime": 0,
        "readTimeContent": "",
        "todayGoldCoin": 0,
        "todayGoldCoinMoney": 0,
        "tuid_wallet": 0,
        "userId": "1262666877",
        "user_id": "1262666877",
        "vip":
        {
            "cards":
            {},
            "equity":
            [],
            "freeAd":
            {
                "ADChapterEndCoinVideo": "2",
                "ADChapterEndFreeVideo": "2",
                "ADCodeBiKanChapterStartPop": "2",
                "ADCodeBottomGuide": "2",
                "ADCodeNewEndVideo": "2",
                "ADCodeNewInsert": "2",
                "ADCodeNewInsertVideo": "2",
                "ADCodeNewUnlock": "2",
                "ADCodeNewUnlockAuto": "2",
                "ADCodeReadBottomFloat": "2",
                "ADCodeReadEnd": "2",
                "ADCodeReadEndIncentiveVideo": "2",
                "ADCodeReadEndShadow": "2",
                "ADCodeReadFullScreen": "2",
                "ADCodeReadInsert": "2",
                "ADCodeReadInsertFixed": "2",
                "ADCodeReadInsertVideo": "2",
                "ADCodeReadMiddlePop": "2",
                "ADCodeReadStartIncentiveVideo": "2",
                "ADCodeReadTopPop": "2",
                "ADCodeReadTopVideoButton": "2",
                "ADCodeSingleBookVideo": "2"
            },
            "icon":
            {
                "vip": "https://img.midukanshu.com/browser/banner/684721e6ab85827fff2fbef8afcc7aea.png"
            },
            "is_vip": "1",
            "special_desc": "听书权益全新上线",
            "vip_end_time": "4092579678000"
        },
        "weixin": "",
        "welfare_task": "https://wz.midukanshu.com/task/index.html"
    }
};
body = JSON.stringify(body);
$done(body); // 结束修改
