const target = document.querySelectorAll('[data-anime')
// const targetBtn = document.querySelectorAll('[data-anime-btn')
const targetH2 = document.querySelectorAll('[data-anime-h2')

const animationClass = 'animate'
// const animationBtnClass = 'animateBtn'
const animationH2Class = 'animateH2'


function debounce(func, wait, immediate) {
   let timeout
   return () => {
       const context = this, args = arguments
       const later = () => {
           timeout = null
           if(!immediate) func.apply(context, args)
       };
       const callNow = immediate && !timeout
       clearTimeout(timeout)
       timeout = setTimeout(later, wait)
       if(callNow) func.apply(context, args)
   }
}


function animeScroll() {
   const windowTop = window.pageYOffset + (window.innerHeight * 0.75)
   target.forEach((el) => {
      if(windowTop > el.offsetTop){
         el.classList.add(animationClass)
      }else{
         el.classList.remove(animationClass)
      }
   })
}


// function animeScrollBtn() {
//    const windowTop = window.pageYOffset + (window.innerHeight * 0.75)
//    targetBtn.forEach((el) => {
//       if(windowTop > el.offsetTop){
//          el.classList.add(animationBtnClass)
//       }else{
//          el.classList.remove(animationBtnClass)
//       }
//    })
// }

function animeScrollH2() {
   const windowTop = window.pageYOffset + (window.innerHeight * 0.75)
   targetH2.forEach((el) => {
      if(windowTop > el.offsetTop){
         el.classList.add(animationH2Class)
      }else{
         el.classList.remove(animationH2Class)
      }
   })
}

if(target.length && targetH2.length){
   window.addEventListener('scroll', debounce(() => {
      animeScroll()
      // animeScrollBtn()
      animeScrollH2()
   }, 7))
}


