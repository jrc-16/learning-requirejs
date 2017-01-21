/**
 * main.js: This demonstrates how to use modules (external js files)
 * and use them within our main.js file
 */

// []: an array of modules to be loaded and provided 
// as inputs to the anonaymous function()
// function: values returned from our modules
require(['jquery', 'message', 'alertone'], function($, message, alertone) {
	$('#firstname').html(message); // Use $ (jquery) and access our returned message modules value

	alertone.shout(); // Use our alertone modules shout() method

	alertone.testMe(); // Use our alertone modules testMe() method

	$("body").prepend("<div>"+alertone.myAlertOneScopedVar+"</div>"); // Use our alertone modules Contructor objects property
}); 