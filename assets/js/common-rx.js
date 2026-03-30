$(document).ready(function () {
	// TwentyTwenty init
	/*if ($('.before-after').length) {
		$(".before-after").twentytwenty();
	}*/

	// Fancybox init
	if (document.querySelector('[data-fancybox]')) {
		Fancybox.bind('[data-fancybox]', {
			dragToClose: false,
			closeButton: false,
		});
	}

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
		});
	}

	// Logos carousel swiper
	const hlogos__carousel = document.querySelector('.hlogos__carousel');
	if (hlogos__carousel) {
		const swiper = new Swiper(hlogos__carousel, {
			slidesPerView: 'auto',
			allowTouchMove: false,
			spaceBetween: 40,
			loop: true,
			speed: 1000,
            autoplay: {
				delay: 3000,
			},
		});
	}
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

// Toggles
document.addEventListener('DOMContentLoaded', function () {
	const toggleBlocks = document.querySelectorAll('.block__toggle');

	if (toggleBlocks.length === 0) {
		return;
	}

	toggleBlocks.forEach(block => {
		const header = block.querySelector('.toggle__header');
		const button = block.querySelector('.toggle__header-btn');
		const content = block.querySelector('.toggle__content');

		if (!header || !button || !content) {
			return;
		}

		header.addEventListener('click', function () {
			if (content.style.maxHeight) {
				content.style.maxHeight = null;
				content.style.paddingBottom = null;
				button.classList.remove('v_active');
				content.classList.remove('c_active');
				block.classList.remove('t_active');
			} else {
				content.style.maxHeight = content.scrollHeight + 20 + 'px';
				content.style.paddingBottom = '20px';
				button.classList.add('v_active');
				content.classList.add('c_active');
				block.classList.add('t_active');
			}
		});
	});
});