window.onload = function() {
    var contenedor = document.getElementById('contenedor_carga')
    contenedor.style.visibility = 'hidden'
    contenedor.style.opacity = '0'
}

var menu = document.getElementById('enlaces')
var nav = document.getElementById('nav')
var abrir = document.getElementById('open')
var botones = document.getElementsByClassName('btn-header')
var cerrar = true





//Menu desplazamiento
function desplazamiento() {


    var desplaza_Y = window.pageYOffset

    if (desplaza_Y <= 288) {
        nav.classList.remove('nav__segundo')
        nav.className = ('nav__primero')
        nav.style.transition = '1s'
        menu.style.top = '80px'
    } else {
        nav.classList.remove('nav__primero')
        nav.className = ('nav__segundo')
        nav.style.transition = '1s'
        menu.style.top = '100px'
    }
}

window.addEventListener('scroll', function() {

    console.log(window.pageYOffset)
    desplazamiento()
})

//Menu Bar

function apertura() {
    if (cerrar) {
        menu.style.width = '50vw'
        cerrar = false
    } else {
        menu.style.width = '0%'
        menu.style.overflow = 'hidden'
        cerrar = true
    }
}

abrir.addEventListener('click', function() {
    apertura()
})
window.addEventListener('resize', function() {
    if (screen.width >= 700) {
        cerrar = true
        menu.style.removeProperty('overflow')
        menu.style.removeProperty('width')
    }
})

//para dar cualguier click en la pantalla y cerras el menubar
window.addEventListener('click', function(e) {
    console.log(e.target)
    if (cerrar == false) {
        var span = document.querySelector('span')
        if (e.target !== span && e.target !== abrir) {
            menu.style.width = '0'
            menu.style.overflow = 'hidden'
            cerrado = true
        }
    }
})