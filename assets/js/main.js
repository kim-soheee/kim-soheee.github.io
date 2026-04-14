/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

})(jQuery);


/* image slideshows */

let truffles = document.getElementById('Truffles-image');
let truffles_imagenum = 0;

let run = document.getElementById('Run-image');
let run_imagenum = 0;

let youth = document.getElementById('Youth-image');
let youth_imagenum = 0;

let camp = document.getElementById('Camp-image');
let camp_imagenum = 0;

setInterval(() => {;
	truffles.src = `./abtme_pg_media/Truffles/Truffles${truffles_imagenum+1}.jpeg`;
	truffles_imagenum = (truffles_imagenum +1)%6;

	run.src = `./abtme_pg_media/Run/Run${run_imagenum+1}.jpeg`;
	run_imagenum = (run_imagenum +1)%8;

	youth.src = `./abtme_pg_media/Youth/Youth${youth_imagenum+1}.jpg`;
	youth_imagenum = (youth_imagenum +1)%4;

	camp.src = `./abtme_pg_media/Camp/Camp${camp_imagenum+1}.JPG`;
	camp_imagenum = (camp_imagenum +1)%7;
}, 3000);


