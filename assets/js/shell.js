var d_id  = 'thewisenerd';

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

function write_navbar() {
var data = "<ul class=\"main-navigation\"> \
  <li><a class='button' href=\"/about/\">About</a></li> \
  <li><a class='button' href=\"/archives/\">Archives</a></li> \
  <li><a class='button' href=\"/\">Blog</a></li></span> \
  <li><a class='button' href=\"/categories/\">Categories</a></li> \
  <li><a class='button' href=\"/projects/\">Projects</a></li> \
</ul>";
document.writeln(data);

}

$(function()
	{
		$("#site-head").hover(function()
		{
			$(".navig-bar").slideToggle();
			return false;
		}); 


		$(".post-header").hover(function()
		{
			if ( $(".navig-bar-fix").size() ) {
				$(".navig-bar").slideToggle();
			}
			return false;
		}); 

		if ( $("#currentquote").size() ) {
			newquote();
		}

	}
);
