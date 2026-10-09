
// selectors
let gallerySection = document.querySelector('.gallery');
let modal = document.querySelector('dialog');
let modalImage = modal.querySelector('img');

// Try later this and loop foreach
// let picture = document.querySelector('.gallery img');


// event listener img clicked, open modal
gallerySection.addEventListener('click', (event) => {
    console.log(event.target.src);
    // modal
    if (event.target.src !== undefined) {
        
        // set modal image source
        let modalImageSmall = event.target.src;
        let modalImageLarge = modalImageSmall.replace('-sm.', '-full.');
        modalImage.src = modalImageLarge;
        
        // wait for modal to load image before showing modal 
        modalImage.addEventListener('load', () => { // add listener to ' load '
            modal.showModal(); // then show
        }); 

        // or in one line
        // modalImage.src = event.target.src.replace('-sm.', '-full.');
    }
});

// Close modal on click
modal.addEventListener('click', (event) => {
    if (event.target !== modalImage) {
        modal.close();
    }
});
















// const gallery = document.querySelector('.gallery');
// const modal = document.querySelector('dialog');
// const modalImage = modal.querySelector('img');
// const closeButton = modal.querySelector('.close-viewer');

// // Event listener for opening the modal
// gallery.addEventListener('click', openModal);

// function openModal(e) {

//     // Code to show modal  - Use event parameter 'e'   

// }
// // Close modal on button click
// closeButton.addEventListener('click', () => {
//     modal.close();
// });

// // Close modal if clicking outside the image
// modal.addEventListener('click', (event) => {
//     if (event.target === modal) {
//         modal.close();
//     }
// });
