jQuery(document).ready(function ($) {
	console.log($.fn.datepicker);
	$.fn.datepicker.language['tr'] = {
		days: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"],
		daysShort: ["Pz", "Pzt", "Sal", "Çrş", "Prş", "Cu", "Cts", "Pz"],
		daysMin: ["Pz", "Pzt", "Sa", "Çr", "Pr", "Cu", "Ct", "Pz"],
		months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
		monthsShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
		today: "Bugün",
		suffix: [],
		meridiem: []
	};
	$('.js-calendar').datepicker({
		language: 'tr',
		format: "dd/mm/yyyy",
		position: "bottom right"
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 700) {
			$('.totop-link').fadeIn();
		} else {
			$('.totop-link').fadeOut();
		}
	});

	function rargePrice() {
		var $range = $("#range-price");
		var $inputFrom = $("#range-price-from");
		var $inputTo = $("#range-price-to");
		var instance;
		var min = 0;
		var max = 8000;
		var from = 1200;
		var to = 5000;
		$range.ionRangeSlider({
			skin: "round",
			type: "double",
			min: min,
			max: max,
			from: from,
			to: to,
			hide_min_max: true,
			hide_from_to: true,
			onStart: updateInputs,
			onChange: updateInputs,
			onFinish: updateInputs
		});
		instance = $range.data("ionRangeSlider");

		function updateInputs(data) {
			from = data.from;
			to = data.to;
			$inputFrom.prop("value", from);
			$inputTo.prop("value", to);
		}

		$inputFrom.on("change", function () {
			var val = $(this).prop("value"); // validate

			if (val < min) {
				val = min;
			} else if (val > to) {
				val = to;
			}

			instance.update({
				from: val
			});
			$(this).prop("value", val);
		});
		$inputTo.on("change", function () {
			var val = $(this).prop("value"); // validate

			if (val < from) {
				val = from;
			} else if (val > max) {
				val = max;
			}

			instance.update({
				to: val
			});
			$(this).prop("value", val);
		});
	}

	rargePrice();

	function rargeWeight() {
		var $range = $("#range-weight");
		var $inputFrom = $("#range-weight-from");
		var $inputTo = $("#range-weight-to");
		var instance;
		var min = 0;
		var max = 50;
		var from = 0;
		var to = 25;
		$range.ionRangeSlider({
			skin: "round",
			type: "double",
			min: min,
			max: max,
			from: from,
			to: to,
			hide_min_max: true,
			hide_from_to: true,
			onStart: updateInputs,
			onChange: updateInputs,
			onFinish: updateInputs
		});
		instance = $range.data("ionRangeSlider");

		function updateInputs(data) {
			from = data.from;
			to = data.to;
			$inputFrom.prop("value", from);
			$inputTo.prop("value", to);
		}

		$inputFrom.on("change", function () {
			var val = $(this).prop("value"); // validate

			if (val < min) {
				val = min;
			} else if (val > to) {
				val = to;
			}

			instance.update({
				from: val
			});
			$(this).prop("value", val);
		});
		$inputTo.on("change", function () {
			var val = $(this).prop("value"); // validate

			if (val < from) {
				val = from;
			} else if (val > max) {
				val = max;
			}

			instance.update({
				to: val
			});
			$(this).prop("value", val);
		});
	}

	rargeWeight();

	function rargeMeter() {
		var $range = $("#range-meter");
		var $inputFrom = $("#range-meter-from");
		var $inputTo = $("#range-meter-to");
		var instance;
		var min = 0;
		var max = 8000;
		var from = 1000;
		var to = 6500;
		$range.ionRangeSlider({
			skin: "round",
			type: "double",
			min: min,
			max: max,
			from: from,
			to: to,
			hide_min_max: true,
			hide_from_to: true,
			onStart: updateInputs,
			onChange: updateInputs,
			onFinish: updateInputs
		});
		instance = $range.data("ionRangeSlider");

		function updateInputs(data) {
			from = data.from;
			to = data.to;
			$inputFrom.prop("value", from);
			$inputTo.prop("value", to);
		}

		$inputFrom.on("change", function () {
			var val = $(this).prop("value"); // validate

			if (val < min) {
				val = min;
			} else if (val > to) {
				val = to;
			}

			instance.update({
				from: val
			});
			$(this).prop("value", val);
		});
		$inputTo.on("change", function () {
			var val = $(this).prop("value"); // validate

			if (val < from) {
				val = from;
			} else if (val > max) {
				val = max;
			}

			instance.update({
				to: val
			});
			$(this).prop("value", val);
		});
	}



	$('.js-data').datepicker({
		language: 'en',
		position: "bottom right"
	});

	$('.datapicker-inline').datepicker({
		language: 'en',
		position: "bottom right"
	});


	/////////////////////////////////////////////////////////////////
	// Preloader
	/////////////////////////////////////////////////////////////////


	var $preloader = $('#page-preloader'),
		$spinner = $preloader.find('.spinner-loader');
	$spinner.fadeOut();
	$preloader.delay(50).fadeOut('slow');


	rargeMeter();
	const mediaQueryDesktop = window.matchMedia('(max-width: 1200px)');

	function handleDesktopChange(e) {
		if (e.matches) {
			$('.js-filter-content').hide();
		} else {
			$('.js-filter-content').show();
		}
	}

	mediaQueryDesktop.addListener(handleDesktopChange);
	handleDesktopChange(mediaQueryDesktop);
	$('.js-more-filter').on('click', function () {
		$(this).parent().next('.js-filter-content').slideToggle();
	});
});
