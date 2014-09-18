// yay!
// will fill in headers later.
// hope this works.

// prefs
var embed_width = "640";
var embed_height = "480";
var privacy_enabled = 1; // youtube vs. youtube-nocookie
var show_suggested_videos = 0; // '?rel=0' vs ''

function fix_player(embed_id) {
	var embed_code = '';
	embed_code += "<iframe";
	embed_code += " width=\"" + embed_width + "\"";
	embed_code += " height=\"" + embed_height + "\"";
	embed_code += " src=\"//www.youtube";
	if (privacy_enabled)
		embed_code += "-nocookie";
	embed_code += ".com/embed/";
	embed_code += embed_id;
	if (show_suggested_videos)
		embed_code += "?rel=0";
	embed_code += "\"";
	embed_code += " frameborder=\"0\"";
	embed_code += " allowfullscreen";
	embed_code += "></iframe>";
	return embed_code;
}

$(function() {
	if ( $('.embed-youtube').size() ) {
		$('.embed-youtube').html(function(){
			if ( $('.embed-youtube').attr('id') == undefined ) {
				return "no video id set!";
			} else {
				return fix_player( $('.embed-youtube').attr('id') );
			}
		});
	}
});
