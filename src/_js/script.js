document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            // when window width is >= 1280px
            1280: {
                slidesPerView: 5,
                spaceBetween: 30
            }
        }
    });

  // Initialize star ratings
  const starRatings = document.querySelectorAll('.star-rating');
  starRatings.forEach(container => {
    const rating = parseInt(container.dataset.rating);
    const starsHtml = Array(5).fill().map((_, index) => `
      <svg class="star ${index < rating ? '' : 'empty'}" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    `).join('');
    container.innerHTML = starsHtml;
  });

  // Initialize Splide
  new Splide('.testimonial-slider', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    autoplay: true,
    interval: 3000,
    gap: '1rem',
    pagination: false,
    trimSpace: false,
    padding: "5%", // Ensures centering of cards
    arrows: true,
    breakpoints: {
      1024: {
        perPage: 2,
        gap: '2rem',
      },
      640: {
        perPage: 1,
        gap: '1rem',
      },
    },
  }).mount();
});