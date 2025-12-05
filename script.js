// Scroll suave a la sección #ideas
document.querySelector('a[href="#ideas"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#ideas').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Inicializar EmailJS una sola vez
(function() {
    emailjs.init({
        publicKey: "36ZITvRj650zNYqlN",
    });
})();

// Enviar formulario correctamente
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_disprovesupport', 'template_disprovesupport', this)
        .then(() => {
            alert('SUCCESS!');
        })
        .catch((error) => {
            alert('FAILED...', error);
        });
});
