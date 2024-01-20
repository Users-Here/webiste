document.addEventListener('DOMContentLoaded', function () {
    // Get the main product image and the image gallery
    const mainImage = document.getElementById('mainImage');
    const imageGallery = document.getElementById('imageGallery');

    // Add click event listener to the gallery images
    imageGallery.addEventListener('click', function (event) {
        if (event.target.classList.contains('gallery-image')) {
            // Set the clicked image as the main product image
            mainImage.src = event.target.src;

            // Remove the 'selected' class from all images
            const galleryImages = document.querySelectorAll('.gallery-image');
            galleryImages.forEach(image => {
                image.classList.remove('selected');
            });

            // Add the 'selected' class to the clicked image
            event.target.classList.add('selected');
        }
    });
});
