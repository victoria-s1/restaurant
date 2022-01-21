// Initialize Swiper

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5.0,
    spaceBetween: 5,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
