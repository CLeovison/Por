//Light & Dark Mode Section

const lightDark = document.querySelector('.light-dark');
let theme = document.querySelector('.light-dark > .theme')



lightDark.addEventListener('click', ()=>{
    //theme.classList.toggle('fa-moon')

   if(theme.classList.contains('fa-moon')){
    document.body.classList.add('active')
    theme.classList.remove('fa-moon')
    theme.classList.add('fa-sun')
   }else{
    theme.classList.remove('fa-sun')
    theme.classList.add('fa-moon')
    document.body.classList.remove('active');
   }
})