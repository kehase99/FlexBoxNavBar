function toggleMenu(){
    /**
     *  list [nav]  with its style and html elements
     */
    const navLinks = document.querySelector('.nav-links');

    // if(displayStyle === 'flex'){
    //     navLinks.style.display = 'none';
    // }
    // else{
    //     navLinks.style.display = 'flex';
    // }
    navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';

}