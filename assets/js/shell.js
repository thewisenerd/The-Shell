//can't follow what we're (not) said to do, can we? :high-five:

var d_id  = 'thewisenerd';

var navig_bar_data = "<ul class=\"main-navigation\"> \
  <li><a class='button' href=\"/about/\">about</a></li> \
  <li><a class='button' href=\"/\">home</a></li></span> \
  <li><a class='button' href=\"/projects/\">projects</a></li> \
</ul>";

jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
    
    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});

function get_disqus_shortname() {
	return d_id;
}

$(function()
	{
		$("#site-head").hover(function()
		{
			$(".navig-bar").stop().animate(
				{ height: "toggle",
				opacity: "toggle" },
				{duration: 300}
			);

			return false;
		}); 


		$(".post-header").hover(function()
		{
			if ( $(".navig-bar-fix").size() ) {
				$(".navig-bar").stop().animate(
					{ height: "toggle",
					opacity: "toggle" },
					{duration: 300}
				);
			}
			return false;
		}); 

		if ( $("#currentquote").size() ) {
			newquote();
		}

		if ( $(".navig-bar").size() ) {
			$(".navig-bar").html(function() {
				return navig_bar_data;
			});
		}

	}
);
