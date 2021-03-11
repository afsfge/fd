var body = $response.body; // 声明一个变量body并以响应消息体赋
let url=$request.url;

if(url.indexOf("go=fontInfo&id=")!=-1){
	let obj = JSON.parse(body);
	obj.buy=1;
	body = JSON.stringify(obj); // 重新打包回json字符串
}