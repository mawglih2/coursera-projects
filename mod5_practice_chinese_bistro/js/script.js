$(function (){
	$("#navbarToggle").blur(function(event){
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#collapsable-nav").collapse('hide');
		}
	});

});

(function (global) {
	var dc = {};

	var homeHtml = "snippets/home-snippet.html";
	//helper function
	var insertHtml = function (selector, html) {
		var targetElem = document.querySelector(selector);
		targetElem.innerHTML = html;
	};
	// Show loading icon inside element identified by selector
	var showLoading = function (selector) {
		var html = "<div class = 'text-center'>";
		html += "<img src = 'img/ajax-loader.gif'><div>";
		insertHtml(selector,html);
	};
	//On page load
	document.addEventListener("DOMContentLoaded", function(event) {
		//On first load sow home view
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(homeHtml, function (responseText){
				document.querySelector("#main-content").innerHTML=responseText;
			},
			false);
});
global.$dc = dc;

})(window);
