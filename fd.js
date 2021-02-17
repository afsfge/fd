var body = $response.body; // 声明一个变量body并以响应消息体赋
// let url=$request.url;

if(url.endsWith("getAds")){
	let obj = JSON.parse(body);
	obj.data.ids=[];
	body = JSON.stringify(obj); // 重新打包回json字符串
}

$done(body); // 结束修改
