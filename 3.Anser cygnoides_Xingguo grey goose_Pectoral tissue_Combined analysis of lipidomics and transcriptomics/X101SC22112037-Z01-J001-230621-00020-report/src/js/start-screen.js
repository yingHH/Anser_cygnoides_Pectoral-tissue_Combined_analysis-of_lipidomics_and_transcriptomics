(function($) {
	var hei=$(window).height();
	var wid=$(window).width();
    $.StartScreen = function(){
        var plugin = this;

        plugin.init = function(){
            setTilesAreaSize();
            addMouseWheel();
        };
		
        var setTilesAreaSize = function(){
			if(hei>660){
				var pad_t=(hei-430)/2;
				$(".tile-area").css({
               		"padding-top":pad_t,
            	});
			}
			if(wid>1400){
				var pad_l=(wid-1112)/2;
				$(".tile-area").css({
               		"padding-left":pad_l,
            	});
			}
            var groups = $(".tile-group");
            var tileAreaWidth = 0;
            $.each(groups, function(i, t){
                tileAreaWidth += $(t).outerWidth();
            });
            $(".tile-area").css({
                width: tileAreaWidth
            });
        };
		
        var addMouseWheel = function (){
            $("body").mousewheel(function(event, delta){
                var scroll_value = delta * 50;
                $(document).scrollLeft($(document).scrollLeft() - scroll_value);
                return false;
            });
        };

        plugin.init();
    }
})(jQuery);

$(function(){
    $.StartScreen();
});
