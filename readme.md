# Currencyr

A simple yet advance currency converter ui plugin for jQuery. Instead of traditional calculator like converter, Currencyr came with tooltip like idea right near the amount. There's currency selection dropdown, click a currency code and voila you get the result.

Currencyr depends and includes **[accounting.js](http://josscrowcroft.github.com/accounting.js)** - a library that provides reliable localisation and formatting of money and currency.

## Installation

Include these lines after jQuery library.

	<style rel="stylesheet" type="text/css" href="/path/to/currencyr.css" >
	<style rel="stylesheet" type="text/css" href="/path/to/themes/theme/currencyr.css" >
	<script src="/path/to/currencyr.js"></script>

## Usage

First, you assign the currencies, base and rates.

	var currencies = {
			"AED": "United Arab Emirates Dirham",
			"AFN": "Afghan Afghani",
			"ALL": "Albanian Lek",
			"AMD": "Armenian Dram",
			...
		},
		base = 'USD',
		rates = {
			"AED": 3.673177,
			"AFN": 51.719367,
			"ALL": 107.942001,
			"AMD": 405.503334,
			...
		};

	$.currencyr( currencies, base, rates );


Calls the plugin right on selector.

	$('.amount').currencyr();

## License
Copyright 2012, Firman Wandayandi

Dual licensed under the [MIT License](http://www.opensource.org/licenses/MIT) or [GPL Version 2](http://opensource.org/licenses/GPL-2.0) licenses.