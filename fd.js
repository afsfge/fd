var body = $response.body; // 声明一个变量body并以响应消息体赋
let url=$request.url;

console.log(url+":"+body);

if(url.endsWith("getInfo")){
	var obj = JSON.parse(body);
	obj.data.vip.is_vip="1";
	obj.data.vip_end_time="4092579678000";
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
