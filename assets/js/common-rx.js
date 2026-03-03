$(document).ready(function () {
	// TwentyTwenty init
	/*if ($('.before-after').length) {
		$(".before-after").twentytwenty();
	}*/

	// Fancybox init
	/*if (document.querySelector('[data-fancybox]')) {
		Fancybox.bind('[data-fancybox]', {
			dragToClose: false,
			closeButton: false,
		});
	}*/

    // Hero carousel swiper
    const hero__carousel = document.querySelector('.hero__carousel');
	if (hero__carousel) {
		const swiper = new Swiper(hero__carousel, {
			slidesPerView: 'auto',
			allowTouchMove: true,
			spaceBetween: 20,
			loop: true,
			speed: 700,
            autoplay: {
				delay: 6000,
			},
      		pagination: {
      			el: '.hero--pagi',
      			clickable: true,
    		},
			navigation: {
      		    nextEl: '.hero--navi-next',
      		    prevEl: '.hero--navi-prev',
    		},
		});
	}

	

	// Logos carousel swiper
	const tracks = document.querySelectorAll('.hlogos__track');
	if (tracks.length) {
		tracks.forEach(track => {
			if (!track.classList.contains('is-duplicated')) {
				track.innerHTML += track.innerHTML;
				track.classList.add('is-duplicated');
			}
		});
	}

	// Reviews carousel swiper
	/*const reviews__carousel = document.querySelector('.reviews__carousel');
	if (reviews__carousel) {
		const swiper = new Swiper(reviews__carousel, {
			slidesPerView: 'auto',
			allowTouchMove: false,
			loop: true,
			speed: 1000,
			autoplay: true,
      		pagination: {
      			el: '.reviews__pagination',
      			clickable: true,
    		},
			navigation: {
      			nextEl: '.reviews__btn-next',
      			prevEl: '.reviews__btn-prev',
    		},
		});
	}*/

});

// TwentyTwenty init
$(window).on('load', function () {
	if ($('.before-after').length) {
		$(".before-after").twentytwenty();
	}
});

// Scroll links
document.addEventListener('DOMContentLoaded', function () {
	const OFFSET_DESKTOP = 90;
	const OFFSET_MOBILE = 50;
	const MOBILE_BREAKPOINT = 991.98;

	function getHeaderOffset() {
		return window.innerWidth <= MOBILE_BREAKPOINT ? OFFSET_MOBILE : OFFSET_DESKTOP;
	}

	function scrollToTarget(id) {
		const target = document.getElementById(id);
		if (target) {
			const offset = getHeaderOffset();
			const top = target.getBoundingClientRect().top + window.scrollY - offset;
			window.scrollTo({
				top: top,
				behavior: 'smooth'
			});
		}
	}

	function handleLinkClick(e) {
		const href = this.getAttribute('href');
		if (href.startsWith('#') && href.length > 1) {
			e.preventDefault();
			const id = href.substring(1);
			scrollToTarget(id);
		}
	}

	const links = document.querySelectorAll('a[href^="#"]:not([href="#"]), .scroll-btn');
	links.forEach(link => {
		link.addEventListener('click', handleLinkClick);
	});
});