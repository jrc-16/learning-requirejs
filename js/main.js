/* My first require module */

// jquery: an array of modules to be loaded and provided 
// as inputs to the anonaymous function($)
require(['jquery', 'message'], function($, message) {
	$('#firstname').html(message);
}); 