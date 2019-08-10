jQuery(document).ready(function ($) {
    var Body = $('body');
    Body.addClass('preloader-site');
});
$(window).on('load', function () {
    $('.preloader-wrapper').fadeOut();
    $('body').removeClass('preloader-site');
});

$(window).scroll(function () {
    if ($(window).scrollTop() == 0) {
        $('nav').switchClass("bg-dark", "ease");
        $('nav').switchClass("navbar-dark");

    } else {
        $('nav').addClass('navbar-dark');
        $('nav').addClass('bg-dark');
    }

})

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 1
            },
            2: {
                items: 1
            }
        }
    })
});


$(function () {

    function initMap() {

        var location = new google.maps.LatLng(25.763839, -80.189461);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({position: location, map: map});

    }

    google.maps.event.addDomListener(window, 'load', initMap);
});


// scrolling on click

var lastId,
    topMenu = $(".navbar-nav"),
    topMenuHeight = topMenu.outerHeight() + 15,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });

menuItems.click(function (e) {

    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : document.getElementById(href).offsetTop - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 800);
    e.preventDefault();
});



$(window).scroll(function () {
    var cur = 0;
    var fromTop = $(this).scrollTop() + topMenuHeight;
    menuItems2 = $('.scrollPostion'),
        menuItems2.map(function () {
            if ($(this)[0].offsetTop - 100 < fromTop)
                cur = $(this);
        });

    menuItems.map(function () {
        $(this).removeClass("active");
    });
    if (cur == 0) {
        $("[href='#']").addClass("active");
    } else
        $("[href='" + cur[0].id + "']").addClass("active");

})