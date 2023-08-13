const navHam = document.querySelector('.navham');
const navList = document.querySelector('.navlist')

navHam.addEventListener('click', ()=>{
    navHam.classList.toggle('active');
    navList.classList.toggle('active');
})

document.querySelectorAll('.nav-item').forEach((n) =>{
    n.addEventListener('click', ()=>{
        navList.classList.remove('active');
       
    })
})