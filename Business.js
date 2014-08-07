$(document).ready(function() {
	    $(".btn").on("click",function() {
	    	$(this).closest("#filler").find(".hidden").fadeToggle();
	    });
	  });