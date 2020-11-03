const $nav = document.querySelector('.icon-nav'),
    $lista = document.querySelector('.nav-links');
$nav.addEventListener("click",()=> {
    $lista.classList.toggle('nav-active');
});