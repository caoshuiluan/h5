//本地环境
// export const DATA_URL="http://10.248.51.25:26880/habsl/"

//测试环境
export const DATA_URL = 'http://10.2.108.99:26880/habsl/'

//代理测试环境
//  export const DATA_URL="https://proxytest.sinosafe.com.cn/habsl-api-dev/habsl/"

export default {
    //交互返回代码转换
    getResultByCode(code) {
        let returnStr = "";
        switch (code) {
            case 0:
                return true;
            case 500:
                returnStr = "正在拼命加载，请稍后再试。";
                break;
            case 2000:
                returnStr = "操作失败";
                break;
            case 404:
                returnStr = "接口不存在";
                break;
            case 12001:
                returnStr = "登录可能已失效，请重新登录操作";
                break;
            default:
                return "none;"
        }
        return returnStr;
    },
    //获取手机表示符号
    getGuid() {
        var guid = "";
        for (var i = 1; i <= 32; i++) {
            var n = Math.floor(Math.random() * 16.0).toString(16);
            guid += n;
            if (i == 8 || i == 12 || i == 16 || i == 20) guid += "-";
        }
        return guid;
    },
    getLStorage(name) {
        return sessionStorage.getItem(name)
    },
    setLStorage(name, value) {
        return sessionStorage.setItem(name, value)
    },
    delLStorage(name) {
        return sessionStorage.removeItem(name)
    }
}
//ajax加密
export function ajaxMD5(data){
	data = data || {};
	let sortData = '';
	let timestamp = new Date().getTime();
	data.timestamp = timestamp;
	//按对象属性进行排序
	let objkeys = Object.keys(data).sort();
	objkeys.forEach(val=>{
		sortData += (val+"="+data[val]);
	});
	//拼接字符串，并md5加密
	let sign = md5(sortData+'*Haxb_*Cnmobi_*20170807_*XinBao-SignSecret_*By5Hirson');
	return {sign, timestamp}
}
