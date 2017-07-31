$(document).ready(function() {
	$(".tab_header .item").on("click", function(){
		var number = $(this).data("option");
		// remove all actives
		$('.tab_header .item').removeClass('active');
		//add active to the one that is clicked
		$(this).addClass('active');
		
		$('.tab_container .container_item').hide();

		$('div[data-item="'+ number +'"]').show();

	});

});