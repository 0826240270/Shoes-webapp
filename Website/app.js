let mouseCursor = document.querySelector('.cursor');
let menuBar = document.querySelectorAll('.menu-bar ul li');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

menuBar.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add('color-link');
    })

    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
        link.classList.remove('link-grow');
    })
})
