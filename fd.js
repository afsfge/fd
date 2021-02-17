var body = $response.body; // 声明一个变量body并以响应消息体赋

body=body.replace(/is_vip\":\d+/g,'is_vip":1').replace(/vip_end_time\":\d/g,'vip_end_time":4092579678000');


$done(body); // 结束修改
