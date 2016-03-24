module.exports = {
	trackEvent: function(category, action, label, value) {
	    ga('send', 'event', category, action, label, value);
	},

	trackVPage: function(name) {
	    name = name.replace(/\!/g, '');
	    ga('send', 'pageview', name + '.html');
	}
};