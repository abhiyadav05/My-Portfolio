
document.querySelector('.cross').style.display = 'none';
document.querySelector('.menu-icon').addEventListener("click", () => {
    document.querySelector('.navbar').classList.toggle('navbarremove');
    if (document.querySelector('.navbar').classList.contains('navbarremove')) {
        document.querySelector('.line').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else {
        document.querySelector('.line').style.display = 'none'
        document.querySelector('.cross').style.display = 'inline'
    }
});