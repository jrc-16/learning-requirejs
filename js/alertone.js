/**
 * alertone module: this module showcases that we can use different
 * styles in our module. 
 * Below we use:
 * - function declaration
 * - function expression
 * - Constructor with object property
 */

define(function() {
	function shout() {
		console.log("Im the shout function inside alertone.js");
	}

	var testMe = function() {
		var test = "Im a test in the testMe function";
		$("#firstname").append("<div>Yay</div"); // we can access jquery in our module
	};

	// Use a Constructor within our module
	function MyConstructor() {
		this.myConstVar = "im myConstVar";		
	}
	var myConstObject = new MyConstructor();
	var myAlertOneScopedVar = myConstObject.myConstVar;

	// Return an object that contains 2 methods and a property
	return {
		shout: shout, // A function declaration
		testMe: testMe, // A function expression
		myAlertOneScopedVar: myAlertOneScopedVar // An objects property
	}
});