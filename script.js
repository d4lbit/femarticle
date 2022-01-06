
if (window.innerWidth < 750) {
    document.getElementById('show').onclick = function showMobile() {
    const author = document.getElementById("author")
    author.classList.toggle('hide')
    const socialsMobile = document.getElementById('hidden-mobile')
    socialsMobile.classList.toggle('visible');
    }
} else {
    document.getElementById('show').onmousemove = function showDesktop() {
        const socialsDesktop = document.getElementById('hidden-desktop')
        socialsDesktop.classList.toggle('visible')
    }
}
