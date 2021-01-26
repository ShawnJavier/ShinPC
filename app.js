const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLink');
    const navLink = document.querySelectorAll('.navLink li');

    burger.addEventListener('click' ,()=>{
        nav.classList.toggle('nav-active');
        navLink.forEach((link, index)=>{
            if(link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + .5}s`;
            }
        });
        burger.classList.toggle('toggle');
    });    
}

navSlide();

// for AOS animation
AOS.init();

