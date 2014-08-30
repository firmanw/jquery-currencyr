/*!
 * jQuery Currencyr v1.1.0-rc1
 * http://firmanw.com/jquery.currencyr
 * Copyright (c) 2014 Firman Wandayandi; Licensed MIT
 */

/*****************************************
  _____
 / ___/_ _____________ ___  ______ ______
/ /__/ // / __/ __/ -_) _ \/ __/ // / __/
\___/\_,_/_/ /_/  \__/_//_/\__/\_, /_/
							  /___/

*****************************************/

;( function( $ ) {

	// Set the rates
	$.currencyr = function(rates, options) {

		$.extend($.currencyr, {
			'options': $.extend({}, {
				'base'			: null,			// Base rate currency
				'default'  		: null,         // Default currency
				'visible'  		: 5,            // Visible dropdown items
				'thousand'  	: ',',          // Thousands separator
				'decimal'   	: '.',          // Decimal point separator
				'precision'		: 2,            // Decimal places
				'remember'		: false,
				'rememberText'	: 'Remember'
			}, options),
			'rates': rates || {}
		});

	}; $.extend($.currencyr, {

		// Default locale "en"
		currency:  {
			"AED": { name: "United Arab Emirates Dirham", symbol: "AED" },
			"AFN": { name: "Afghan Afghani", symbol: "Af" },
			"ALL": { name: "Albanian Lek", symbol: "ALL" },
			"AMD": { name: "Armenian Dram", symbol: "AMD" },
			"ANG": { name: "Neth Antilles Guilder", symbol: "NAf." },
			"AOA": { name: "Angolan Kwanza", symbol: "Kz" },
			"ARS": { name: "Argentine Peso", symbol: "AR$" },
			"AUD": { name: "Australian Dollar", symbol: "AU$" },
			"AWG": { name: "Aruban Florin", symbol: "Afl." },
			"AZN": { name: "Azerbaijani Manat", symbol: "man." },
			"BAM": { name: "Bosnia and Herzegovina Convertible Marka", symbol: "KM" },
			"BBD": { name: "Barbadian Dollar", symbol: "Bds$" },
			"BDT": { name: "Bangladeshi Taka", symbol: "Tk" },
			"BGN": { name: "Bulgarian Lev", symbol: "BGN" },
			"BHD": { name: "Bahraini Dinar", symbol: "BD" },
			"BIF": { name: "Burundi Franc", symbol: "FBu" },
			"BMD": { name: "Bermuda Dollar", symbol: "BD$" },
			"BND": { name: "Brunei Dollar", symbol: "BN$" },
			"BOB": { name: "Bolivian Boliviano", symbol: "Bs" },
			"BRL": { name: "Brazilian Real", symbol: "R$" },
			"BSD": { name: "Bahamian Dollar", symbol: "BS$" },
			"BTC": { name: "Bitcoin", symbol: "BTC" },
			"BTN": { name: "Bhutan Ngultrum", symbol: "Nu." },
			"BWP": { name: "Botswana Pula", symbol: "BWP" },
			"BYR": { name: "Belarus Ruble", symbol: "BYR" },
			"BZD": { name: "Belizean Dollar", symbol: "BZ$" },
			"CAD": { name: "Canada Dollar", symbol: "CA$" },
			"CDF": { name: "Congolese Franc", symbol: "CDF" },
			"CHF": { name: "Switzerland Franc", symbol: "CHF" },
			"CLF": { name: "Chilean Unidad de Fomento", symbol: "CLF" },
			"CLP": { name: "Chilean Peso", symbol: "CL$" },
			"CNY": { name: "Chinese Yuan", symbol: "CN¥" },
			"COP": { name: "Colombian Peso", symbol: "CO$" },
			"CRC": { name: "Costa Rica Colon", symbol: "₡" },
			"CUC": { name: "Cuban Convertible Peso", symbol: "CUC$" },
			"CUP": { name: "Cuban Peso", symbol: "CU$" },
			"CVE": { name: "Cape Verde Escudo", symbol: "CV$" },
			"CZK": { name: "Czech Koruna", symbol: "Kč" },
			"DJF": { name: "Djibouti Franc", symbol: "Fdj" },
			"DKK": { name: "Danish Krone", symbol: "Dkr" },
			"DOP": { name: "Dominican Peso", symbol: "RD$" },
			"DZD": { name: "Algerian Dinar", symbol: "DA" },
			"EEK": { name: "Estonian Kroon", symbol: "Ekr" },
			"EGP": { name: "Egyptian Pound", symbol: "EGP" },
			"ERN": { name: "Eritrea Nakfa", symbol: "Nfk" },
			"ETB": { name: "Ethiopian Birr", symbol: "Br" },
			"EUR": { name: "Euro", symbol: "€" },
			"FJD": { name: "Fiji Dollar", symbol: "FJ$" },
			"FKP": { name: "Falkland Islands Pound", symbol: "FK£" },
			"GBP": { name: "British Pound", symbol: "£" },
			"GEL": { name: "Georgian Lari", symbol: "GEL" },
			"GGP": { name: "Guernsey Pound", symbol: "GGP" },
			"GHS": { name: "GHS", symbol: "GH₵" },
			"GIP": { name: "Gibraltar Pound", symbol: "GI£" },
			"GMD": { name: "Gambian Dalasi", symbol: "GMD" },
			"GNF": { name: "Guinean Franc", symbol: "FG" },
			"GTQ": { name: "Guatemala Quetzal", symbol: "GTQ" },
			"GYD": { name: "Guyana Dollar", symbol: "GY$" },
			"HKD": { name: "Hong Kong Dollar", symbol: "HK$" },
			"HNL": { name: "Honduras Lempira", symbol: "HNL" },
			"HRK": { name: "Croatian Kuna", symbol: "kn" },
			"HTG": { name: "Haiti Gourde", symbol: "HTG" },
			"HUF": { name: "Hungarian Forint", symbol: "Ft" },
			"IDR": { name: "Indonesian Rupiah", symbol: "Rp" },
			"ILS": { name: "Israeli Shekel", symbol: "₪" },
			"IMP": { name: "Isle of Man Pound", symbol: "IMP" },
			"INR": { name: "Indian Rupee", symbol: "Rs" },
			"IQD": { name: "Iraq Dinar", symbol: "IQD" },
			"IRR": { name: "Iran Rial", symbol: "IRR" },
			"ISK": { name: "Iceland Krona", symbol: "Ikr" },
			"JEP": { name: "Jersey Pound", symbol: "JEP" },
			"JMD": { name: "Jamaican Dollar", symbol: "J$" },
			"JOD": { name: "Jordanian Dinar", symbol: "JD" },
			"JPY": { name: "Japanese Yen", symbol: "¥" },
			"KES": { name: "Kenya Shilling", symbol: "Ksh" },
			"KGS": { name: "Kyrgyzstani Som", symbol: "KGS" },
			"KHR": { name: "Cambodia Riel", symbol: "KHR" },
			"KMF": { name: "Comoros Franc", symbol: "CF" },
			"KPW": { name: "North Korean Won", symbol: "KPW" },
			"KRW": { name: "South Korean Won", symbol: "₩" },
			"KWD": { name: "Kuwait Dinar", symbol: "KD" },
			"KYD": { name: "Cayman Islands Dollar", symbol: "KY$" },
			"KZT": { name: "Kazakhstan Tenge", symbol: "KZT" },
			"LAK": { name: "Lao Kip", symbol: "₭" },
			"LBP": { name: "Lebanese Pound", symbol: "LB£" },
			"LKR": { name: "Sri Langka Rupee", symbol: "SLRs" },
			"LRD": { name: "Liberian Dollar", symbol: "L$" },
			"LSL": { name: "Lesotho Loti", symbol: "LSL" },
			"LTL": { name: "Lithuanian Lita", symbol: "Lt" },
			"LVL": { name: "Latvian Lat", symbol: "Ls" },
			"LYD": { name: "Lybian Dinar", symbol: "LD" },
			"MAD": { name: "Moroccan Dirham", symbol: "MAD" },
			"MDL": { name: "Moldovan Leu", symbol: "MDL" },
			"MGA": { name: "Madagascar Ariary", symbol: "MGA" },
			"MKD": { name: "Macedonian Denar", symbol: "MKD" },
			"MMK": { name: "Myanmar Kyat", symbol: "MMK" },
			"MNT": { name: "Mongolian Tugrik", symbol: "₮" },
			"MOP": { name: "Macau Pataca", symbol: "MOP$" },
			"MRO": { name: "Mauritania Ougulya", symbol: "UM" },
			"MTL": { name: "Maltese Lira", symbol: "Lm" },
			"MUR": { name: "Mauritius Rupee", symbol: "MURs" },
			"MVR": { name: "Maldives Rufiyaa", symbol: "MVR" },
			"MWK": { name: "Malawi Kwacha", symbol: "MWK" },
			"MXN": { name: "Mexican Peso", symbol: "MX$" },
			"MYR": { name: "Malaysian Ringgit", symbol: "RM" },
			"MZN": { name: "Mozambique Metical", symbol: "MTn" },
			"NAD": { name: "Namibian Dollar", symbol: "N$" },
			"NGN": { name: "Nigerian Naira", symbol: "₦" },
			"NIO": { name: "Nicaragua Cordoba", symbol: "C$" },
			"NOK": { name: "Norwegian Krone", symbol: "Nkr" },
			"NPR": { name: "Nepalese Rupee", symbol: "NPRs" },
			"NZD": { name: "New Zealand Dollar", symbol: "NZ$" },
			"OMR": { name: "Omani Rial", symbol: "OMR" },
			"PAB": { name: "Panama Balboa", symbol: "B/." },
			"PEN": { name: "Peruvian Nuevo Sol", symbol: "S/." },
			"PGK": { name: "Papua New Guinea Kina", symbol: "PGK" },
			"PHP": { name: "Philippine Peso", symbol: "₱" },
			"PKR": { name: "Pakistani Rupee", symbol: "PKRs" },
			"PLN": { name: "Polish Zloty", symbol: "zł" },
			"PYG": { name: "Paraguayan Guarani", symbol: "₲" },
			"QAR": { name: "Qatar Rial", symbol: "QR" },
			"RON": { name: "Romanian New Leu", symbol: "RON" },
			"RSD": { name: "Serbian Dinar", symbol: "din." },
			"RUB": { name: "Russian Rouble", symbol: "RUB" },
			"RWF": { name: "Rwanda Franc", symbol: "RWF" },
			"SAR": { name: "Saudi Arabian Riyal", symbol: "SR" },
			"SBD": { name: "Solomon Islands Dollar (SBD)", symbol: "SI$" },
			"SCR": { name: "Seychelles Rupee", symbol: "SRe" },
			"SDG": { name: "Sudanese Pound", symbol: "SDG" },
			"SEK": { name: "Swedish Krona", symbol: "Skr" },
			"SGD": { name: "Singapore Dollar", symbol: "S$" },
			"SHP": { name: "St Helena Pound", symbol: "SH£" },
			"SLL": { name: "Sierra Leone Leone", symbol: "Le" },
			"SOS": { name: "Somali Shilling", symbol: "Ssh" },
			"SPL": { name: "Seborga Luigino", symbol: "SPL" },
			"SRD": { name: "Surinamese Dollar", symbol: "SR$" },
			"STD": { name: "Sao Tome Dobra", symbol: "Db" },
			"SVC": { name: "El Salvador Colon", symbol: "SV₡" },
			"SYP": { name: "Syrian Pound", symbol: "SY£" },
			"SZL": { name: "Swaziland Lilageni", symbol: "SZL" },
			"THB": { name: "Thai Baht", symbol: "฿" },
			"TJS": { name: "Tajikistan Somoni", symbol: "TJS" },
			"TMT": { name: "Turkmenistan Manat", symbol: "TMT" },
			"TND": { name: "Tunisian Dinar", symbol: "DT" },
			"TOP": { name: "Tonga Pa'ang", symbol: "T$" },
			"TRY": { name: "Turkish Lira", symbol: "TL" },
			"TTD": { name: "Trinidad Tobago Dollar", symbol: "TT$" },
			"TVD": { name: "Tuvaluan Dollar", symbol: "TVD" },
			"TWD": { name: "Taiwan Dollar", symbol: "NT$" },
			"TZS": { name: "Tanzanian Shilling", symbol: "TSh" },
			"UAH": { name: "Ukraine Hryvnia", symbol: "₴" },
			"UGX": { name: "Ugandan Shilling", symbol: "USh" },
			"USD": { name: "United States Dollar", symbol: "$" },
			"UYU": { name: "Uruguayan New Peso", symbol: "$U" },
			"UZS": { name: "Uzbekistan Som", symbol: "UZS" },
			"VEF": { name: "Venezuelan Bolivar Fuerte", symbol: "Bs.F." },
			"VND": { name: "Vietnam Dong", symbol: "₫" },
			"VUV": { name: "Vanuatu Vatu", symbol: "VT" },
			"WST": { name: "Samoa Tala", symbol: "WS$" },
			"XAF": { name: "CFA Franc BEAC", symbol: "FCFA" },
			"XAG": { name: "Silver (troy ounce)", symbol: "XAG" },
			"XAU": { name: "Gold (troy ounce)", symbol: "XAU" },
			"XCD": { name: "East Caribbean Dollar", symbol: "EC$" },
			"XDR": { name: "Special Drawing Rights", symbol: "XDR" },
			"XOF": { name: "CFA Franc BCEAO", symbol: "CFA" },
			"XPF": { name: "Pacific Franc", symbol: "CFPF" },
			"YER": { name: "Yemen Riyal", symbol: "YR" },
			"ZAR": { name: "South African Rand", symbol: "R" },
			"ZMK": { name: "Zambian Kwacha (pre-2013)", symbol: "ZK" },
			"ZMW": { name: "Zambian Kwacha", symbol: "ZMW" },
			"ZWL": { name: "Zimbabwean Dollar", symbol: "ZWL" }
		}

	});

	// Creates the object
	var Currencyr = this.Currencyr = function( subject, options ) {

		// Initial options
		this.options = $.currencyr.options;

		this.init();
		this.addSubject(subject, options);

	}; Currencyr.prototype = {

		// The collection of subjects
		subjects: [],

		// Current subject
		subject: null,

		// Current subject options
		options: null,

		// Current active currency
		currency: '',

		// Popup direction
		direction: 'bottom',

		/**
		 * Initialize
		 */
		init: function()
		{
			var self = this;

			// Set the currency symbols according to locale
			//this.setSymbols();

			// Creates the UI components
			this.uiCreateContainer();
			this.uiCreateCloseButton();
			this.uiCreateAmount();
			this.uiCreateCurrency();
			this.uiCreateDropdown();
			this.uiCreateHint();

			// Whether show remember checkbox or not
			if ( this.options.remember ) this.uiCreateRemember();

			// Enabled close the popup when document clicked
			$('html').add( this.uiCloseButton ).on( 'click', function() {
				self.close();
			});
		},

		addSubject: function( subject, options )
		{

			if ( !this.isSubjectExists(subject) ) {
				$(subject).data('currencyr_options', $.extend({}, $.currencyr.options, options));
				this.subjects.push(subject);
				this.bind(subject);
			}

		},

		isSubjectExists: function( subject )
		{

			var exists = false;

			$.each( this.subjects, function(key, value) {
				if ( $(subject).is( value ) ) exists = true;
			});

			return exists;

		},

		bind: function(subject)
		{

			var self = this;

			$(subject).on( 'click', function( event ) {
				var value = self.parseValue( $(this).text() );

				self.subject = $(this);
				self.options = $(this).data('currencyr_options');

				$(this).data('currencyr-amount', value.amount);
				$(this).data('currencyr-currency', value.currency);

				self.open( event );
			});

			// Keep the event enable on the target
			this.ui.add(subject).on( 'click', function(e) {
				 e.stopPropagation();
			});

		},

		setBase: function()
		{

			var self = this;

			if ( !this.options.base ) {
				$.each( $.currencyr.rates, function( currency, rate ) {
					if ( rate == 1 ) self.options.base = currency;
				});
			} else {
				$.currencyr.rates[ this.options.base ] = 1;
			}

			return this.options.base ? true : false;

		},

		setSymbols: function()
		{

			var self = this;

			$.each( $.currencyr.locale, function( code, symbol ) {
				$.currencyr.currency[code].symbol = symbol;
			});

		},

		open: function( event )
		{

			var $target = $(event.target),
				containerH = 0;

			this.uiInit( $target );

			if ( this.direction == 'top' ) {
				this.ui
					.addClass( 'currencyr-direction-top' )
					.css( {
						top: $target.offset().top - this.ui.outerHeight() - 20
					} )
					.animate({ top: $target.offset().top - this.ui.outerHeight() - 8, opacity: 1 }, 300 );
			} else {
				this.ui
					.removeClass( 'currencyr-direction-top' )
					.css( {
						top: $target.offset().top + $target.height() + 20
					} )
					.animate({ top: $target.offset().top + $target.height() + 8, opacity: 1 }, 300 );
			}

		},

		close: function()
		{

			this.ui.hide().removeClass('currencyr-state-opened');

		},

		uiInit: function( $target )
		{

			// Set the current currency
			if ( ( this.options.default && !( this.options.default in $.currencyr.rates ) ) || !this.options.default ) this.currency = this.options.base;
			else this.currency = this.options.default;

			value = this.remember();
			if ( value ) this.currency = value;

			// Set currency and amount
			this.uiSetCurrency( this.currency );
			this.uiSetAmount( this.formatNumber(
				this.convert( $target.data('currencyr-amount'), $target.data('currencyr-currency'), this.currency )
			) );

			// Set the ui position
			this.ui
				.css( { left: $target.offset().left - Math.min(10, $target.outerWidth() / 2) - 4, opacity: 0 } )
				.show();

			// Configures the components
			this.uiAmount.css( { marginRight: this.uiCurrency.outerWidth() } );
			this.uiDropdown.data( 'height', this.uiDropdownPane.find('div').outerHeight() * this.options.visible );
			this.uiDropdown.css( { width: this.uiCurrency.outerWidth(), height: 0, opacity: 0 } );
			this.uiDropdownContainer.css( { top: this.uiDropdown.data( 'height' ) * -1 } );
			this.uiDropdownPane.css( { top: 0 } );
			this.uiHint.hide();

			// Set the direction
			if ( ( window.innerHeight || document.documentElement.clientHeight ) - ( $target.offset().top + $target.height() + 8 ) < this.uiTop.outerHeight() + this.uiDropdown.data('height') + 20 ) this.direction = 'top';
			else this.direction = 'bottom';

		},

		uiCreateContainer: function()
		{

			// Singleton
			if ( $('.currencyr').length > 0 ) return;

			this.ui = $('<div>')
				.addClass('currencyr')
				.hide()
				.appendTo( $('body') );

			this.uiContainer = $('<div>')
				.addClass('currencyr-container')
				.appendTo( this.ui );

			this.uiTop = $('<div>')
				.addClass('currencyr-top')
				.appendTo( this.uiContainer );

			if ( this.options.remember ) {
				this.uiBottom = $('<div>')
					.addClass('currencyr-bottom')
					.appendTo( this.uiContainer );
			}

		},

		uiCreateCloseButton: function()
		{
			var self = this;

			this.uiCloseButton = $('<div>')
				.addClass('currencyr-close')
				.html('<div>')
				.appendTo( this.uiContainer );

			this.uiCloseButton.on('click', function( event ) {
				self.close();
			});
		},

		uiCreateAmount: function()
		{
			this.uiAmount = $('<div>')
				.addClass( 'currencyr-amount' )
				.appendTo( this.uiTop );

			this.uiAmountValue = $('<span>')
				.appendTo( this.uiAmount );
		},

		uiSetAmount: function( value )
		{
			this.uiAmountValue.text( value );
		},

		uiCreateCurrency: function()
		{
			var self = this;

			this.uiCurrency = $('<div>')
				.addClass('currencyr-currency')
				.appendTo( this.uiTop );

			this.uiCurrencyValue = $('<span>')
				.appendTo( this.uiCurrency );

			this.uiCurrency.on('click', function() {
				self.uiToggleDropdown();
			});
		},

		uiSetCurrency: function( value )
		{
			this.uiCurrencyValue.text( value );
		},

		uiCreateDropdown: function()
		{
			var self = this;

			this.uiDropdown = $('<div>')
				.addClass( 'currencyr-dropdown' )
				.css( {width: this.uiCurrency.outerWidth() } )
				.appendTo( this.uiTop );

			this.uiDropdown[0].addEventListener( 'wheel', self.uiDropdownWheel, false );
			this.uiDropdown[0].addEventListener( 'mousewheel', self.uiDropdownWheel, false );
			this.uiDropdown[0].addEventListener( 'DOMMouseScroll', self.uiDropdownWheel, false );
			this.uiDropdown[0].addEventListener( 'MozMousePixelScroll', self.uiDropdownWheel, false );

			this.uiDropdownContainer = $('<div>')
				.addClass( 'currencyr-dropdown-container' )
				.appendTo( this.uiDropdown );

			this.uiDropdownPane = $('<div>')
				.addClass( 'currencyr-dropdown-pane' )
				.appendTo( this.uiDropdownContainer );

			$.each( $.currencyr.rates, function(code, rate) {
				try {
					$('<div>')
						.data( 'currency-name', $.currencyr.currency[code].name )
						.data( 'currency-symbol', $.currencyr.currency[code].symbol )
						.text( code )
						.appendTo( self.uiDropdownPane )
						.on( 'mouseover', function( event ) {
							self.uiShowHint( event );
						})
						.on( 'mouseout', function( event ) {
							self.uiHideHint( event );
						})
						.on( 'click', function( event ) {
							self.exchange( event );
							self.remember( event );
						});
				} catch (e) {
					console.log( code + ' is missing in currency hash, skipped' );
				}
			});

			this.uiDropdownBar = $('<div>')
				.addClass('currencyr-dropdown-bar')
				.appendTo(this.uiDropdownContainer);

			this.uiDropdownBarTrack = $('<div>')
				.addClass('currencyr-dropdown-bar-track')
				.appendTo(this.uiDropdownBar);

			this.uiDropdownBarControl = $('<div>')
				.addClass('currencyr-dropdown-bar-control')
				.appendTo(this.uiDropdownBarTrack);

			// Make track scrollable
			this.uiDropdownBarTrack.on('mousedown', function( event ) {
				var max = $(this).outerHeight() - self.uiDropdownBarControl.outerHeight(true),
					dst = event.pageY - $(this).offset().top;

				self.uiDropdownScroll( ( self.uiDropdownPane.outerHeight() / max  ) * dst * -1 );
			});

			// Make track bar draggable
			this.uiDropdownBarControl.on('mousedown', function( event ) {
				event.stopPropagation();

				self.uiDropdownBarTrack.on('mouseup', function(e) {
					self.uiDropdownBarControl.off('mousemove');
				});

				$(this).on( 'mousemove', function(e) {
					var max = self.uiDropdownBarTrack.outerHeight() - $(this).outerHeight(true),
						dst = ( e.pageY - self.uiDropdownBarTrack.offset().top ) - ( $(this).outerHeight(true) / 2 );

					self.uiDropdownScroll( ( self.uiDropdownPane.outerHeight() / max  ) * dst * -1 );
				});
			});
		},

		uiToggleDropdown: function()
		{
			var height = this.uiDropdown.data('height'),
				state = parseInt( this.uiDropdown.css( 'opacity' ) ) ? 'close' : 'open';

			this.uiDropdown.height( height );
			this.uiDropdownContainer.height( height );

			if ( this.direction == 'top' ) this.uiDropdown.css( { top: this.uiDropdown.outerHeight()* -1 } );
			else this.uiDropdown.css( { top: this.uiTop.outerHeight() } );

			if ( state == 'open' ) {
				this.ui.addClass('currencyr-state-opened');
				this.uiDropdown.css( { opacity: 0 } ).animate( { opacity: 1 } );

				if ( this.direction == 'top' ) {
					this.uiDropdownContainer
						.css( { top: height } )
						.animate( {top: 0}, function() {
							$(this).css( { height: '100%' } );
						} );
				} else {
					this.uiDropdownContainer
						.css( { top: height * -1 } )
						.animate( {top: 0}, function() {
							$(this).css( { height: '100%' } );
						} );
				}
			} else {
				this.ui.removeClass('currencyr-state-opened');
				this.uiDropdown.css( { opacity: 1 } ).animate( { opacity: 0 } );

				if ( this.direction == 'top' ) {
					this.uiDropdownContainer.height( height ).animate( {top: height} );
				} else {
					this.uiDropdownContainer.height( height ).animate( {top: height * -1} );
				}
			}
		},

		// Handler the mouse wheel event
		uiDropdownWheel: function( e )
		{
			var	currencyr = $( window ).data( 'currencyr' ),
				deltaY = 0,
				dst = Math.round( currencyr.uiDropdownPane.position().top ),
				itemH = currencyr.uiDropdownPane.find('div').outerHeight();

			e = e || window.event;

			if ( 'detail'		in e ) deltaY = e.detail * -1;
			if ( 'deltaY'		in e ) deltaY = e.deltaY * -1;
			if ( 'wheelDelta'	in e ) deltaY = e.wheelDelta;
			if ( 'wheelDeltaY'	in e ) deltaY = e.wheelDeltaY;

			// Threshold greater number more smooth
			if ( Math.abs(deltaY) > 200 ) {
				e = $.event.fix( e );
				e.preventDefault();
				return;
			}

			// Determines the top
			if ( deltaY >= 0 ) dst += itemH;
			else dst -= itemH;

			currencyr.uiDropdownScroll( dst );

			// Lock other event
			e = $.event.fix( e );
			e.preventDefault();
		},

		// Handler when the scroll dragged
		uiDropdownScroll: function( dst )
		{
			var	self = this,
				itemH = this.uiDropdownPane.find('div').outerHeight(),
				paneMaxT = ( this.uiDropdownPane.outerHeight() - ( itemH * this.options.visible ) ) * -1,
				barDstT = 0,
				barMaxT = this.uiDropdownBarTrack.outerHeight() - this.uiDropdownBarControl.outerHeight(true	);

			this.uiHideHint();

			// Finish the animations
			this.uiDropdownPane.finish();

			// Move to exact item position
			dst += Math.abs( dst % itemH );
			if ( dst > 0 ) dst = 0;
			if ( dst < paneMaxT ) dst = paneMaxT;

			this.uiDropdownPane.find('div').on('mouseover', function( e ) {
				e.preventDefault();
			});

			// OK, now we move the pane
			this.uiDropdownPane.animate( { top: dst } );

			// Sync the bar's position
			this.uiDropdownBarControl.finish();

			barDstT = ( ( this.uiDropdown.outerHeight() - this.uiDropdownBarControl.outerHeight() ) / this.uiDropdownPane.outerHeight() ) * Math.abs( dst );
			if ( barDstT < 0 ) barDstT = 0;
			if ( barDstT > barMaxT ) barDstT = barMaxT;

			this.uiDropdownBarControl.animate({top: barDstT});
		},

		uiCreateHint: function()
		{
			this.uiHint = $('<div>')
				.addClass( 'currencyr-hint' )
				.appendTo( this.uiTop );

			this.uiHintWrapper = $('<div>')
				.addClass( 'currencyr-hint-wrapper' )
				.appendTo( this.uiHint );

			this.uiHintSymbol = $('<div>')
				.addClass( 'currencyr-hint-symbol' )
				.appendTo( this.uiHintWrapper );

			this.uiHintName = $('<div>')
				.addClass( 'currencyr-hint-name' )
				.appendTo( this.uiHintWrapper );
		},

		uiShowHint: function( event ) {
			var $target = $(event.target),
				dstTop = $target.position().top + this.uiDropdownPane.position().top;

			this.uiHintSymbol.text( $target.data('currency-symbol') );
			this.uiHintName.text( $target.data('currency-name') );

			if ( this.direction == 'top' ) dstTop -= this.uiDropdown.outerHeight();
			else dstTop += $target.outerHeight();

			this.uiHintWrapper.css({ height: $target.outerHeight() - 1});
			this.uiHint
				.stop()
				.show()
				.css( {
					left: this.uiDropdown.position().left - this.uiHintSymbol.outerWidth(),
					top: dstTop,
					opacity: 0,
					width: 0
				} )
				.animate({
					opacity: 1,
					width: this.uiHintSymbol.outerWidth() + $target.outerWidth() + this.uiHintName.outerWidth()
				} );

			this.uiHintSymbol
				.stop()
				.css( {
					left: $target.outerWidth() / 2
				} )
				.animate( {
					left: 0
				} );

			this.uiHintName
				.stop()
				.css( {
					left: $target.outerWidth() / 2
				} )
				.animate( {
					left: $target.outerWidth() + this.uiHintSymbol.outerWidth()
				} );
		},

		uiHideHint: function( event ) {
			this.uiHint
				.stop()
				.animate( { opacity: 0 }, function() {
					$(this).hide();
				} );
		},

		uiCreateRemember: function()
		{
			var self = this;

			this.uiRemember = $('<label for="currencyr-remember"><input type="checkbox" id="currencyr-remember">' + this.options.rememberText + '</label>')
				.appendTo( this.uiBottom );

			this.uiRemember.find(':checkbox')
				.on('click', function() {
					self.remember();
				})
				.attr( 'checked', this.remember() ? true : false );
		},

		/**
		 * Get/save the remember setting into cookie
		 *
		 * @return string the currency to remember
		 */
		remember: function()
		{
			if ( !this.options.remember ) return;

			var remember = this.uiRemember.find(':checkbox').get(0).checked,
				value = null,
				expires = new Date();

			var cookies = document.cookie.split(';');
			for( i = 0, l = cookies.length; i < l; i++ ) {
				var parts = cookies[i].split('=');
				if ( parts.shift() === 'currencyr-currency' ) {
					value = parts.join('=');
				}
			}

			if ( this.uiCurrencyValue.text() !== '') {
				if ( remember ) {
					value = this.uiCurrencyValue.text();
					expires.setDate(expires.getDate() + 30);

					document.cookie = "currencyr-currency=" + value + ';expires=' + expires.toUTCString() + ";path=/";
				} else {
					document.cookie = "currencyr-currency=;expires=-1;path=/";
				}
			}

			return value;
		},

		exchange: function( event )
		{
			var self = this;
				toCurrency = $(event.target).text(),
				$currency = this.uiCurrencyValue.clone(),
				$amount = this.uiAmountValue.clone(),
				dst = this.uiCurrencyValue.position().top;

			if ( this.uiCurrency.children().length == 2 || toCurrency == this.uiCurrencyValue.text() ) return;

			this.uiCurrencyValue.animate( { top: this.uiCurrency.outerHeight() * -1 }, 300, function() {
				$(this).remove();
				self.uiCurrencyValue = $currency;
			});

			$currency
				.text( toCurrency )
				.css( {
					position: 'absolute',
					top: this.uiCurrency.outerHeight()
				} )
				.appendTo( this.uiCurrency )
				.animate( { top: dst }, 300, function() {
					$(this).css( { position: 'relative', top: 'auto' } );

					self.uiAmount.css( { marginRight: self.uiCurrency.outerWidth() } );
					self.uiDropdown.css( { width: self.uiCurrency.outerWidth() } );
				});

			this.uiAmountValue
				.animate( { top: this.uiAmount.outerHeight() }, 300, function() {
					$(this).remove();
					self.uiAmountValue = $amount;
				});

			$amount
				.text( this.formatNumber( this.convert( $(this.subject).data('currencyr-amount'), $(this.subject).data('currencyr-currency'), toCurrency ) ) )
				.css( {
					position: 'absolute',
					top: this.uiAmount.outerHeight() * -1,
				} )
				.appendTo( this.uiAmount )
				.animate( { top: dst }, 300, function() {
					$(this)
						.css( {
							position: 'relative',
							top: 'auto'
						 } );

					self.uiHint.css( { left: self.uiDropdown.position().left - self.uiHintSymbol.outerWidth() } );
				});
		},

		/**
		 * Dynamically quote the regular expression
		 *
		 * @param  string str
		 * @return string
		 */
		regexQuote: function( str ) {
			return ( str + '' ).replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
		},

		/**
		 * Parse the value of the target
		 *
		 * @param  string value
		 *
		 * @return object
		 */
		parseValue: function( value )
		{
			var self = this,
				amount = parseFloat( value.replace(self.options.thousand, '').replace(self.options.decimal, '.').replace(/[^\d\.,-]/g, '') ),
				currency = value.replace(/[\d\.\s,-]/g, '' );

			$.each( $.currencyr.currency, function( code, info ) {
				var regex = new RegExp( '^(' + self.regexQuote(code) + '|' + self.regexQuote(info.symbol) + ')$', 'g' );
				if ( regex.test(currency) ) {
					currency = code;
					return;
				}
			} );

			return { 'amount': amount, 'currency': currency };
		},

		/**
		 * Convert the amount
		 *
		 * @param  float  amount
		 * @param  string from
		 * @param  string to
		 *
		 * @return float
		 */
		convert: function( amount, from, to )
		{
			return amount * ( ( 1 / $.currencyr.rates[from] ) * $.currencyr.rates[to] );
		},

		/**
		 * Format the number
		 *
		 * @param  float value
		 *
		 * @return string
		 */
		formatNumber: function( value ) {
			base = parseInt( Math.abs( value || 0 ), 10 ) + '';
			rem = base.length > 3 ? base.length % 3 : 0;

			return ( value < 0 ? '-' : '' ) +
				( rem > 0 ? base.substr( 0, rem ) + this.options.thousand : '' ) +
				base.substr( rem ).replace( /(\d{3})(?=\d)/g, '$1' + this.options.thousand ) +
				( this.options.precision ? this.options.decimal + value.toFixed( this.options.precision ).split('.')[1] : '' );
		}

	};

	/**
	 * Plug it in
	 */
	$.fn.currencyr = function( options ) {

		// Find the whether if the rates given on not
		if ( typeof $.currencyr.rates === 'undefined' ) throw 'Hi, this is Currencyr, unfortunately $.currencyr() never called.';

		// Singleton
		if (typeof $( window ).data( 'currencyr' ) === 'undefined') $( window ).data( 'currencyr', new Currencyr( this, options) );
		else $( window ).data( 'currencyr' ).addSubject(this, options);

		return $( window ).data( 'currencyr' );

	};

} ).apply( window, [jQuery] );