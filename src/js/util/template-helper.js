define(function (require) {

    var _ = require('vendor/underscore.min');

    /**
     * Don't instantiate with 'new' keyword.
     * We simply stack our template helpers onto the underscore global object.
     * We typically add common conversion/helpers methods here.
     * Usage Example:
     * From inside your .html partial use: <%= _.helper.toMoney(1234.5678) %>
     */
    _.helper = {

        // See: http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
        toMoney: function(val, decimals, decimal_sep, thousands_sep) { 
            var c = isNaN(decimals) ? 0 : Math.abs(decimals); // if decimal is zero we must take it, it means user does not want to show any decimal
            var d = decimal_sep || '.'; // if no decimal separator is passed we use the dot as default decimal separator (we MUST use a decimal separator)
            var t = (typeof thousands_sep === 'undefined') ? "," : thousands_sep; // if you don't want to use a thousands separator you can pass empty string as thousands_sep value

            var sign = (val < 0) ? '-' : ''; // extracting the absolute value of the integer part of the number and converting to string
            var i = parseInt(val = Math.abs(val).toFixed(c)) + '';

            var j = ((j = i.length) > 3) ? j % 3 : 0;
            return 'R' + sign + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(val - i).toFixed(c).slice(2) : ''); 
        }
    }

    return _.helper;
});