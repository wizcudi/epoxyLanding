
const hamburger = document.getElementById('hamburger')
const navContents = document.getElementById('nav-ul')



const toggleNav = () => {
    if (navContents.style.display === "none" || navContents.style.display === "") {
        navContents.style.display = 'flex'
    } else {
        navContents.style.display = 'none'
    }
}




hamburger.addEventListener('click', toggleNav)