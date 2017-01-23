/**
 * todo: add descrip
 */

require.config({
	paths: {
		knockout: 'knockout-3.4.1.min',
		viewModel: 'viewModel'			
	}
});

require([
	'knockout',
	'viewModel'

], function(ko, viewModel) {
	ko.applyBindings(viewModel);
	
});