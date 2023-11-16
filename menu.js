let btnMenu=document.getElementById('btn-menu')
let menu= document.getElementById ('menu-mobile')

btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu')
})

Menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})