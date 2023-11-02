const expand = document.getElementById('expanding');

expand.addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open-drop');
    expand.classList.toggle('expand_more-2');
});



