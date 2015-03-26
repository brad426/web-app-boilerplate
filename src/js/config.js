require.config({

	baseUrl: 'js/',
	waitSeconds: 30,

	paths: {
		partial: '../partial',
		json: '../json',
		jquery: 'vendor/jquery.min'
	},

	deps: ['index'],

	shim: {
		'vendor/backbone.min': {
			deps: ['vendor/underscore.min', 'vendor/jquery.min'],
			exports: 'Backbone'
		},
		'vendor/underscore.min': {
			exports: '_'
		},
		'vendor/plugin/jquery/jquery.placeholder': {
			deps: ['vendor/jquery.min'],
			exports: '$'
		},
		'vendor/jquery.min': {
			exports: '$'
		}
	}
});
