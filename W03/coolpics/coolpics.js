
let gallerySection = document.querySelector('.gallery');
let modal = document.querySelector('dialog');
let modalImage = modal.querySelector('img');

gallerySection.addEventListener('click', (event) => {
    console.log(event.target.src);
    if (event.target.src !== undefined) {

        let modalImageSmall = event.target.src;
        let modalAltText = event.target.alt;
        let modalImageLarge = modalImageSmall.replace('-sm.', '-full.');
        modalImage.src = modalImageLarge;
        modalImage.alt = modalAltText;
        
        modalImage.addEventListener('load', () => {
            modal.showModal();
        });

    }
});

modal.addEventListener('click', (event) => {
    if (event.target !== modalImage) {
        modal.close();
    }
});
