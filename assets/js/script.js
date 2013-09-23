$(document).foundation();

$(document).ready(function() {
    $("#gifts-of-stocks-or-securities").load('/ways-to-give/gifts-of-stocks-or-securities');
    
    $( ".ajax-content" ).each(function( index ) {
    	var pageToLoad = window.location.pathname;
    	if(pageToLoad.charAt(pageToLoad.length-1) != '/'){pageToLoad+='/'};
    	pageToLoad = pageToLoad + $(this).attr('id');
		$(this).load(pageToLoad);
	});
	$('.futurepast').first().show();
});
