
//sleciona o botao pela classe .menu__button 
//e armazena na const button
const button = document.querySelector('.hamb_menu__button')


const imgMenuHamburguer = "url(https://i.ibb.co/HNDHFKf/menu-hamb.png)"
const imgMenuFechar = "url(https://i.ibb.co/DKNfGdk/menu-ham-x.png)"


button.addEventListener('click', () => {
    const menuNav = document.querySelector('.hamb_menu__nav')
    menuNav.classList.contains('hamb_menu__nav-active')
      ? button.style.backgroundImage = imgMenuHamburguer
      : button.style.backgroundImage = imgMenuFechar
    menuNav.classList.toggle('hamb_menu__nav-active')
  })
  







