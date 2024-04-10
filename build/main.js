
const appInit = ()=>{
    const humbergurBtn = document.getElementById("humbergur-btn")
    const mobileMenu = document.getElementById("mobile-menu")
    const appMain = document.getElementById("app-main")

    const toggleMenu = ()=>{
        mobileMenu.classList.toggle("hidden")
        mobileMenu.classList.toggle("flex")
        appMain.classList.toggle("hidden")
        appMain.classList.toggle("flex")
        humbergurBtn.classList.toggle('toggle-btn')
    }
    
    humbergurBtn.addEventListener('click',toggleMenu)
    mobileMenu.addEventListener('click',toggleMenu)

}


document.addEventListener('DOMContentLoaded',appInit)

