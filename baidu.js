var baiduHomePage = chrome.contextMenus.create({"title": "百度首页","contexts":["page","link"], "onclick": goBaiduHomePage});

function goBaiduHomePage(info, tab) {
	var url = "http://www.baidu.com";
	chrome.tabs.create({	"url":url	});
}


var baisuSearch = chrome.contextMenus.create({
	"title":"百度直达",
	"contexts":["selection"],
	"onclick":function(info,tab){
	   var url = "http://www.baidu.com/s?wd="+info.selectionText;
	   chrome.tabs.create({"url":url});
	}
})
