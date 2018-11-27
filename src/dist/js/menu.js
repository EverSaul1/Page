$(function() {
    /** Menu*/
    var nosotros = $('#nosotros').offset().top,
        niveles = $('#niveles').offset().top,
        matricula = $('#matricula').offset().top,
        contacto = $('#contacto').offset().top

    window.addEventListener('resize', function() {
        var nosotros = $('#nosotros').offset().top,
            niveles = $('#niveles').offset().top,
            matricula = $('#matricula').offset().top,
            contacto = $('#contacto').offset().top
    })
    $('#enlace-Inicio').on('click', function(e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: 0 //nos lleva el item menu a los mas alto
        }, 600)
    })
    $('#enlace-Nosotros').on('click', function(e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: nosotros - 100
        }, 600)
    })
    $('#enlace-Niveles').on('click', function(e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: niveles - 100
        }, 600)
    })
    $('#enlace-Matricula').on('click', function(e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: matricula - 100
        }, 600)
    })
    $('#enlace-Contacto').on('click', function(e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: contacto - 100
        }, 600)
    })
})