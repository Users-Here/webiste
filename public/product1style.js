// JavaScript for Thumbnail Carousel
$(document).ready(function () {
    $('.thumbnail').on('click', function () {
        $('.thumbnail').removeClass('active');
        $(this).addClass('active');

        // Replace main image source with the clicked thumbnail's data-large value
        const largeImage = $(this).data('large');
        $('.main-image').attr('src', largeImage);
    });
});
