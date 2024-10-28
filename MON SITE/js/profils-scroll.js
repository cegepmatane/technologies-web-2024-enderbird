const containerListeVignettes = document.querySelector(".container-profil-selecteur");

// active le scroll quand on est dessus
containerListeVignettes.addEventListener('mouseenter', () => {
    document.body.style.overflow = 'hidden'; // pu de scroll dans le body (donc ça active le scroll de profils)
    containerListeVignettes.style.overflowX = 'auto';
});

// disactive le scroll quand pu dessus
containerListeVignettes.addEventListener('mouseleave', () => {
    document.body.style.overflow = ''; // active
    containerListeVignettes.style.overflowX = 'hidden';
});

// Allow scrolling of the container with the mouse wheel
containerListeVignettes.addEventListener('wheel', (event) => {
    // Prevent default scrolling behavior
    event.preventDefault();
    // Scroll the container
    containerListeVignettes.scrollLeft += event.deltaY; // Scroll left/right based on vertical wheel movement
});