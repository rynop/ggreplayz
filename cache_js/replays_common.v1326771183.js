$(function() {
	$('form').submit(function () {
		$('.btn .primary').button('loading');
	});

	$("a[rel=popover]")
	.popover({
		offset: 10,
		html: true
	})
	.click(function(e) {
		e.preventDefault()
	});
	
	$( "#hudSlider" ).slider({
		value:10,
		min: 5,
		max: 60,
		step: 5,
		slide: function( event, ui ) {
			$( "#hudTime" ).val( ui.value );
		}
	});
	$( "#hudTime" ).val( $( "#hudSlider" ).slider( "value" ) ).change(function(){
		$( "#hudSlider" ).slider("value",$(this).val());
	});

	if($("input:checked",'#hudOptions').length > 0){
		$('#hudSliderContainer').show();
	}
	$("input:checkbox",'#hudOptions').click(function(e) {
		if($("input:checked",'#hudOptions').length > 0){
			$('#hudSliderContainer').show();
		}
		else {
			$('#hudSliderContainer').hide();
		}
	});
});
$(function() {
	$('form').submit(function () {
		$('.btn .primary').button('loading');
	});

	$("a[rel=popover]")
	.popover({
		offset: 10,
		html: true
	})
	.click(function(e) {
		e.preventDefault()
	});
	
	$( "#hudSlider" ).slider({
		value:10,
		min: 5,
		max: 60,
		step: 5,
		slide: function( event, ui ) {
			$( "#hudTime" ).val( ui.value );
		}
	});
	$( "#hudTime" ).val( $( "#hudSlider" ).slider( "value" ) ).change(function(){
		$( "#hudSlider" ).slider("value",$(this).val());
	});

	if($("input:checked",'#hudOptions').length > 0){
		$('#hudSliderContainer').show();
	}
	$("input:checkbox",'#hudOptions').click(function(e) {
		if($("input:checked",'#hudOptions').length > 0){
			$('#hudSliderContainer').show();
		}
		else {
			$('#hudSliderContainer').hide();
		}
	});
});