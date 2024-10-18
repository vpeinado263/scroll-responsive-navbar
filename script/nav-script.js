//Conecta la etiqueta que tiene la clase nav-container
var navbar = document.querySelector('.nav-container')

//Cuando haga scroll
window.onscroll = () => {
    //si se realiza scroll pasando los 20 px desde el top de la pantalla
    if (window.scrollY > 20) {
        //Agregale a la etiqueta con la que te conectaste la clase nav-active
        navbar.classList.add('nav-active');
    } else {
        // y si no, si se esta a menos de 20px quitale la clase nav-active
        navbar.classList.remove('nav-active');
    }
};