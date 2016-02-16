/*!
 * jQuery plugin for Silder v0.0.1
 * http://www.imyy.org/
 * QQ:574035
 * Copyright (c) 2016 Kvkens(yueming@ehaier.com)
 * Dual licensed under the MIT and GPL licenses.
 * Date: 2014-10-28 18:00:00
 */
;(function($){
	$.fn.slider = function(options){
		var default = {
			color : "red"
		};
		var settings = $.extend(default,options);
		return this.each(function(){
			$(this).css("color",settings.color);
		});
		
	}
	
})(jQuery);
