
document.addEventListener('DOMContentLoaded', function () {
    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener('click', () => {
            window.location.href = 'inicio.html'; // Página futura del laberinto
        });
    }
});
