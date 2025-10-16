document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const caption = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0;
    let images = [];

    // Indsaml alle billeder + captions
    galleryItems.forEach((img, index) => {
        images.push({
            src: img.src,
            caption: img.getAttribute("data-caption") || ""
        });

        img.addEventListener("click", () => {
            currentIndex = index;
            openLightbox();
        });
    });

    function openLightbox() {
        lightbox.style.display = "flex";
        updateLightbox();
    }

    function closeLightbox() {
        lightbox.style.display = "none";
    }

    function updateLightbox() {
        lightboxImg.src = images[currentIndex].src;
        caption.textContent = images[currentIndex].caption;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightbox();
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightbox();
    }

    // Event listeners
    closeBtn.addEventListener("click", closeLightbox);
    nextBtn.addEventListener("click", showNext);
    prevBtn.addEventListener("click", showPrev);

    // Luk hvis man klikker udenfor billedet
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
});
