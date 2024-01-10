const expButtons  = document.querySelectorAll('.expandBtn')

expButtons.forEach(e=>{
    e.addEventListener('click',e=>{
        if(e.target.parentElement.parentElement.parentElement.children[1].classList.contains('active')){
            e.target.setAttribute('src','/assets/images/icon-plus.svg')
            e.target.parentElement.parentElement.parentElement.children[1].classList.remove('active')
        }else{
            e.target.setAttribute('src','/assets/images/icon-minus.svg')
            e.target.parentElement.parentElement.parentElement.children[1].classList.add('active')
        }
    })
})