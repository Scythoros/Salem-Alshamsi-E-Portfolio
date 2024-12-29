document.addEventListener('DOMContentLoaded', () => {
    // Function to initialize the slider for a specific section
    function initializeSlider(sliderId) {
        const sliderContainer = document.getElementById(sliderId);
        const mainImage = sliderContainer.querySelector('.main-slider img');
        const mainHead = sliderContainer.querySelector('.main-slider h3');
        const mainDescription = sliderContainer.querySelector('.main-slider p');
        const thumbnails = sliderContainer.querySelectorAll('.thumbnail');

        // Add event listeners to thumbnails
        thumbnails.forEach((thumbnail) => {
            thumbnail.addEventListener('click', () => {
                // Update the main image, heading, and description
                mainImage.src = thumbnail.src;
                mainHead.textContent = thumbnail.dataset.head;
                mainDescription.textContent = thumbnail.dataset.description;

                // Highlight the active thumbnail
                thumbnails.forEach((thumb) => thumb.classList.remove('active'));
                thumbnail.classList.add('active');
            });
        });
    }

    // Initialize sliders for each section
    initializeSlider('python-slider');
    initializeSlider('java-slider');
    initializeSlider('misc-slider');
});
