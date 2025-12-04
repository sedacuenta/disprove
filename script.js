document.querySelector('a[href="#ideas"]').addEventListener('click', function(e){
    e.preventDefault(); // evitar salto brusco
    const target = document.querySelector('#ideas');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
