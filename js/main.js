$(document).ready(function () {
    let tabsItem = $('.tabs-item');
    tabsItem.on('click', function (event) {
        event.preventDefault();
        let activeElement = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeElement).toggleClass('visible');
        console.log(activeElement);
        $('.tabs-item--active').toggleClass('tabs-item--active');
        $(this).toggleClass('tabs-item--active');
    });
});