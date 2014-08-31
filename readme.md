# jQuery Currencyr

A tooltip UI style realtime currency converter plugin for jQuery.


## Installation

Include these lines after jQuery.

	<style rel="stylesheet" type="text/css" href="jquery.currencyr.css" >
	<script src="jquery.currencyr.js"></script>

Please note: This plugin is requires jQuery v1.9.0-rc1 or later.

## Usage

First you MUST assign Hash rates.

	var rates = {
		"AED": 3.673177,
		"AFN": 51.719367,
		"ALL": 107.942001,
		"AMD": 405.503334,
		…
	};

Initialize the plugin.

	$.currencyr(rates, options);

Then call the plugin right on selector.

	$('.amount').currencyr();
	
You can also pass the options to change the default behaviour.

	$('.another-amount').currencyr(options);

## Options

+ **base**: _string_ - Base rate currency
+ **default**: _string_ - Default currency (default: **base**)
+ **visible**: _number_ - Visible dropdown items (default: 5)
+ **thousand**: _string_ - Thousand separator (default: ",")
+ **decimal**: _string_ - Decimal point separator (default: ".")
+ **precision**: _number_ - Decimal places (default: 2)
+ **remember**: _boolean_ - Whether enable or disable remember feature (default: true)
+ **rememberText**: _string_ - Text for remember checkbox (default: Remember)

## Localisation

To enable translation, simply override the `jQuery.currencyr.currency` object. See `dist/locale` for example.

## Changelog

**1.1.0-rc1**

+ Rewritten the plugin from scratch with tons improvements.
+ Add Bower support

**1.0.1**

+ Fixed dropdown on Firefox. "DOMMouseScroll" reported invalid event, replaced by "MozMousePixelScroll" and "wheel".

**1.0.0**

+ Initial release


## License

Licensed under the [MIT License](http://www.opensource.org/licenses/MIT)

Copyright © 2014 Firman Wandayandi
