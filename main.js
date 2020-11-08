$(function () {
    // Open and Close Menu
    $('.hamburger-menu').on('click', function () {
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');
    });

    AOS.init({
        easing: 'ease',
        duration: 1000,
    })
});