$(document).ready(function() {

    $.currencyr( currency.codes, currency.base, currency.rates );
    $( '.amount' ).currencyr();

 });
