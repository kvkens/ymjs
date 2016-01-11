/**
 * @author: Kvkens(yueming@ehaier.com)
 * @describtion: ehaier base
 * @date: 2016-01-11 11:00:00
 * @license : MIT
 */

var ym = {
	/**
	 * 获得URL GET参数 
	 * example.do?name=Kvkens
	 * @param {Object} name
	 */
	getParams : function(name){
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     	var r = window.location.search.substr(1).match(reg);
     	if(r!=null)return  unescape(r[2]); return null;
	},
	/**
	 * 获得指定格式时间 
	 * yyyy-MM-dd hh:mm:ss 星期w
	 * @param {Object} formatStr
	 */
	getNowDate : function(formatStr){
		var str = formatStr;   
	    var Week = ['日','一','二','三','四','五','六'];  
	  	var data = new Date();
	    str=str.replace(/yyyy|YYYY/,data.getFullYear());   
	    str=str.replace(/yy|YY/,(data.getYear() % 100)>9?(data.getYear() % 100).toString():'0' + (data.getYear() % 100));   
	  
	    str=str.replace(/MM/,data.getMonth()>9?(data.getMonth()+1).toString():'0' + (data.getMonth()+1));   
	    str=str.replace(/M/g,data.getMonth());   
	  
	    str=str.replace(/w|W/g,Week[data.getDay()]);   
	  
	    str=str.replace(/dd|DD/,data.getDate()>9?data.getDate().toString():'0' + data.getDate());   
	    str=str.replace(/d|D/g,data.getDate());   
	  
	    str=str.replace(/hh|HH/,data.getHours()>9?data.getHours().toString():'0' + data.getHours());   
	    str=str.replace(/h|H/g,data.getHours());   
	    str=str.replace(/mm/,data.getMinutes()>9?data.getMinutes().toString():'0' + data.getMinutes());   
	    str=str.replace(/m/g,data.getMinutes());   
	  
	    str=str.replace(/ss|SS/,data.getSeconds()>9?data.getSeconds().toString():'0' + data.getSeconds());   
	    str=str.replace(/s|S/g,data.getSeconds());   
	  
	    return str;   
	}
};