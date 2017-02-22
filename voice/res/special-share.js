//高度自适应
$(function(){
	    $.fn.autoHeight = function(){	
		function autoHeight(elem){
			elem.style.height = 'auto';
			elem.scrollTop = 0; //防抖动
			elem.style.height = elem.scrollHeight + 'px';
		}
		this.each(function(){
			autoHeight(this);
			$(this).on('keyup', function(){
				autoHeight(this);
			});
		});
	}				
	$('textarea[autoHeight]').autoHeight();
})

//播放暂停
$(function(){
	var playing = false;
	var $audio = $(".picture").find("audio");
	$(".cd-btn").on("click", function () {
		currentAudio = $audio.get(0);
	    $audio.attr("src", $audio.data("src"));
	    if (playing) {
	        playing = false;
	        $("#stop").hide();
			$("#start").show();
	        $(this).parent(".picture").siblings(".cd-out,.sharecd-out").removeClass('cd-antion');
	        currentAudio.pause();	        
	    } else{
		    playing = true;
		    $("#start").hide();
			$("#stop").show();
		    $(this).parent(".picture").siblings(".cd-out,.sharecd-out").addClass('cd-antion');
		    currentAudio.play();
	    }	    
	});	
});