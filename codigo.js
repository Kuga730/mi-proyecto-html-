document.addEventListener('mousemove', function(e) {
    var animacion = document.getElementById('animacion');
    var posX = e.clientX - (animacion.offsetWidth / 2);
    var posY = e.clientY - (animacion.offsetHeight / 2);
    animacion.style.left = posX + 'px';
    animacion.style.top = posY + 'px';
});
#animacion {
    pointer-events: none;
}
