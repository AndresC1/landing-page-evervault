const NavbarComponent = document.querySelector('#NavbarComponent')
const btnNavbar = document.querySelector('#btnNavbar')
const BoxInitNavbar = document.querySelector('#BoxInitNavbar')
const urlNavbar = document.querySelector('#urlNavbar')
const sectionLogin = document.querySelector('#sectionLogin')



btnNavbar.addEventListener('click', () => {
    if(urlNavbar.classList.contains('hidden')) {
        urlNavbar.classList.remove('hidden')
        sectionLogin.classList.remove('hidden')
    } else{
        urlNavbar.classList.add('hidden')
        sectionLogin.classList.add('hidden')
    }
})