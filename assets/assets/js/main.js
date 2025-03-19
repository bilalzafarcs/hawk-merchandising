! function (e) {
	"use strict";
	let i = document.getElementById("scroll_top");
	i && i.addEventListener("click", function () {
		document.body.scrollTop = 0, document.documentElement.scrollTop = 0
	}), e(".menu-icon").on("click", function () {
		e(".offcanvas__area").addClass("showed")
	}), e("#offcanvas_close").on("click", function () {
		e(".offcanvas__area").removeClass("showed")
	}), e("btn_click").on("click", function () {
		window.location = "/Account/Login"
	}), e(".search-close").on("click", function () {
		e(this).hide(), e(".search-icon").show(), e(".header__search").removeClass("showed")
	});
	let n = document.querySelector("#header__sticky");
	window.pageYOffset, n && e(window).scroll(function () {
		e(".header__area-2").css("position", "fixed")
	});
	let o = window.counterUp.default,
		s = e => {
			e.forEach(e => {
				let i = e.target;
				e.isIntersecting && !i.classList.contains("is-visible") && (o(i, {
					duration: 1500,
					delay: 16
				}), i.classList.add("is-visible"))
			})
		},
		t = new IntersectionObserver(s, {
			threshold: 1
		});
	document.querySelectorAll(".counter-active").forEach(e => {
		t.observe(e)
	}), new Swiper(".testimonial__slider", {
		loop: !0,
		pagination: {
			el: ".swiper-pagination"
		}
	});
	var a = new Swiper(".main-slider", {
		slidesPerView: 1,
		centeredSlides: !0,
		loop: !0,
		speed: 1500,
		loopedSlides: 6,
		navigation: {
			nextEl: ".btn-next",
			prevEl: ".btn-prev"
		}
	}),
		l = new Swiper(".slider-thumbs", {
			slidesPerView: 3,
			spaceBetween: 0,
			centeredSlides: !0,
			loop: !0,
			speed: 1500,
			slideToClickedSlide: !0
		});
	a.controller.control = l, l.controller.control = a, new Swiper(".team__slider", {
		freemode: !0,
		slidesPerView: 1,
		spaceBetween: 30,
		breakpoints: {
			640: {
				slidesPerView: 1
			},
			768: {
				slidesPerView: 2
			},
			1024: {
				slidesPerView: 3
			},
			1300: {
				slidesPerView: 4
			}
		}
	}), document.querySelector(".mixit-active") && mixitup(".mixit-active"), new WOW({
		animateClass: "animated",
		mobile: !0
	}).init(), jQuery(document).ready(function () {
		e(".offcanvas-menu").meanmenu({
			meanScreenWidth: "1365",
			meanMenuContainer: ".offcanvas__menu",
			meanMenuCloseSize: "24px"
		}), e(".exp-active").progressBar({
			animation: !0,
			height: "8",
			barColor: "#ff4904"
		});
		var i = e(".price-type");
		i.on("click", function () {
			i.is(":checked") ? (e(".monthly_price").hide(), e(".yearly_price").show()) : (e(".monthly_price").show(), e(".yearly_price").hide())
		}), e(".package__duration-2 button").on("click", function () {
			e(this).addClass("active").siblings().removeClass("active"), "yearly" == e(this).text().toLowerCase() ? (e(".monthly_price").hide(), e(".yearly_price").show()) : (e(".monthly_price").show(), e(".yearly_price").hide())
		})
	}), new Swiper(".hero__slider", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: 0,
		speed: 3e3,
		autoplay: {
			delay: 2500,
			disableOnInteraction: !1
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: !0
		}
	})
}(jQuery);

jQuery(document).ready(function($) {
	$('.vid-car').owlCarousel({
		loop: false,
		margin: 10,
		nav: false,
		 responsiveClass:true,
		responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
	});

	var modal = $('.video-gallery #videoModal');

	$('.video-gallery #openModal').click(function() {
		var videosrc = $(this).attr("data-video-src");
		var videHtml = `
<div class="modal-content">
<span class="close-modal">&times;</span>
<video controls>
<source src="${videosrc}" type="video/mp4">
Your browser does not support the video tag.
</video>
</div>`;

		modal.html(videHtml).fadeIn();

		modal.find('.close-modal').click(function() {
			modal.fadeOut().empty(); 
		});
	});

	$(window).click(function(event) {
		if ($(event.target).is(modal)) {
			modal.fadeOut().empty();
		}
	});
});