# Currencyr

A simple yet advance currency converter UI plugin for jQuery. Instead of traditional "calculator" looks converter, Currencyr came with "tooltip" looks idea right near the amount selector.


## Dependencies
+ **[accounting.js](http://josscrowcroft.github.com/accounting.js)** (_included_): A library that provides reliable localisation and formatting of money and currency.
+ **[jQuery Cookie](https://github.com/carhartl/jquery-cookie)** (_included_): A simple, lightweight jQuery plugin for reading, writing and deleting cookies.


## Installation

Include these lines after jQuery library.

    <style rel="stylesheet" type="text/css" href="/path/to/currencyr.css" >
	<style rel="stylesheet" type="text/css" href="/path/to/themes/@theme@/@theme@.css" >
	<script src="/path/to/currencyr.js"></script>


## Usage

First you MUST assign the currencies, base and rates.

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


Then call the plugin right on selector.

	$('.amount').currencyr();


## Options
**numcodes** (default: 5): How many currency codes of dropdown

**pad** (default: 20): Number of space of dialog with current target in pixels

**root** (default: "currencyr"): An Id of root container without "#"


## License
Copyright 2012, Firman Wandayandi

Dual licensed under the [MIT License](http://www.opensource.org/licenses/MIT) or [GPL Version 2](http://opensource.org/licenses/GPL-2.0) licenses.