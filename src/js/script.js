// const { lastRun } = require("gulp");

//swiper slider kaljan
const swiper = new Swiper('.buy-kaljan-container', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.buy-kaljan-button-prev',
      prevEl: '.buy-kaljan-button-next',
    },
  });
//swiper slider money
  const swiper2 = new Swiper('.block-slider', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.prev-btn',
      prevEl: '.next-btn',
    },
  });
//swiper slider content
  const swiperContent = new Swiper('.content-slider-container-current', {
    // Optional parameters
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
//swiper slider content
  const swiperContent2 = new Swiper('.content-slider-container-next', {
    // Optional parameters
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

 

  
  //prise
//  при клике на стрелочку вниз скрываем клас
//прячем класс цену который виден (будем добавлять класс с прозрачностью)

//находим стрелочку
// let arrowDown = document.querySelector('.arrowDown');
// //находим класс цену
// let price = document.querySelector('.price')
// arrowDown.addEventListener('click',function(){
//   price.classList.toggle('active')
// })


//open video -click
//находим все видео определяем клик по текущему и добавляем класс

let currentVideoAll = document.querySelectorAll('.current-video');
//находим скрытые видео 
let videoAllHiden = document.querySelectorAll('.video-bg-hiden')

let headerVideoAll = document.querySelectorAll('.header-video')
//запрещаем скрол при открытом видео
let body = document.body;
//для первого видео
// let header = document.querySelector('.header');
let currentVideo = document.querySelector('.current-video');
let videoHiden =document.querySelector('.video-bg-hiden')



// let btnClose = document.querySelector('.btn-close');

// btnClose.addEventListener('click',function(e){
 
//   e.stopPropagation()
//   if(videoHiden.classList.contains('video-bg-active')){
//     videoHiden.classList.remove('video-bg-active')
//   } 
//   videoHiden.classList.remove('video-bg-active')
//   body.classList.remove('no-scroll')
// })


//запускалось видео при клике на само автоВидео

// currentVideoAll.forEach(elem => {
//   elem.addEventListener('click', function(event){
//       let dataId = event.target.dataset.id;
     
//       videoAllHiden.forEach(elemHiden => {
//           if(elemHiden.classList.contains(dataId)){
//               elemHiden.classList.add('video-bg-active')
//               body.classList.add('no-scroll')

//             let curVideo = elemHiden.querySelector('.header-video')
//             curVideo.play()
//           }
//       })
//     })
// })



//Поэкранный скролл
let infoSection = document.querySelector('.info-section');
$(function() {
  $.scrollify({
    section : ".scroll-page",
    easing: "easeOutExpo",
    scrollSpeed: 1000,
    setHeights: false,
  });
});
//добавление класса при скролле
$(window).scroll(function() {
  var height = $(window).scrollTop();
  console.log(height)
//        /*Если сделали скролл на 100px задаём новый класс*/
  if(height > 100){
  $('.info-section').addClass('info-section-active');
  } 
  else{
       /*Если меньше  удаляем класс */
  $('.info-section').removeClass('info-section-active');
  }
    if(height>600){
      $('.info-section').removeClass('info-section-active')
      
    }
      //прячем play при прокрутки первого экрана
      if(height>100){
        $('.btn-play-wrapper-header').addClass('hiden-play')
        
      }else{
        $('.btn-play-wrapper-header').removeClass('hiden-play')
      }
      //фиксируем меню , на момент поднятие блока
      if(height>100){
        $('.header-wrapper').addClass('fixed-menu')
      }
      else{
        $('.header-wrapper').removeClass('fixed-menu')
      }

      //скрываем главный title на момент прокрутки
      if(height>100){
        $('.header-title').addClass('hiden-title')
      }
      else{
        $('.header-title').removeClass('hiden-title')
      }
      //покзываем текст
      if(height>100){
        $('.info-title , .info-subtitle').addClass('info-hiden')
      }
      else{
        $('.info-title ,.info-subtitle').removeClass('info-hiden')
      }

      
      
      
  });


 
      $('.payment-item-scroll').addClass('vcvc')
    
 
  

//swiper slider
swiperContent.on('slideChange',function(){
  let sliderIndex = swiperContent.realIndex;
  let lineAll = document.querySelectorAll('.verical-line');
  
  lineAll.forEach(elem =>{
      let elemId = elem.dataset.line
      if(sliderIndex == elemId){
          elem.classList.add('line-active')
      }
      else{
          elem.classList.remove('line-active')
      }
  })
})

swiperContent2.on('slideChange',function(){
  let sliderIndex = swiperContent2.realIndex;
  console.log(sliderIndex)
  let lineAll = document.querySelectorAll('.verical-line');


  lineAll.forEach(elem =>{
        // console.log(elem.dataset.id)
        let elemId = elem.dataset.lin
        // console.log(elemId)
        if(sliderIndex == elemId){
            elem.classList.add('line-active-next')
        }
        else{
            elem.classList.remove('line-active-next')
        }
    })
  })


//new

//находим все кнопки включения видео на странице
let currentPlayBtnAll = document.querySelectorAll('.current-video-btn');

currentPlayBtnAll.forEach(elem =>{
  elem.addEventListener('click',function(){
    //по клику на кнопку сверяем дата-атрибут
    let dataBtn = elem.dataset.id;
   //находим все скрытые видео 
   let videoAllHiden = document.querySelectorAll('.video-bg-hiden');
    //перебираем скрытое видео и сверяем с дата атрибутом
    //если они совпадают добавляем класс
    videoAllHiden.forEach(vHiden =>{
      if(vHiden.classList.contains(dataBtn)){
        //скрывае надпись scroll
        let scroll = document.querySelectorAll('.scroll');
        scroll.forEach(elem =>{
          elem.style.zIndex ="-1"
        })
        vHiden.classList.add('video-bg-active')
        //запрещаем скролл
        body.classList.add('no-scroll')
        // document.body.style.overflow = 'hidden';
        // находим у элемена клласс и запускаем его
        $ .scrollify.disable ();
        let curVideo = vHiden.querySelector('.header-video')
            curVideo.play()
            this.closest('.btn-play-wrapper').classList.add('hiden-btn-video')
      }      
    })
  })
})
//closeVideo
//нужно найти все кнопки "закрыть"
let btnCloseVideoAll = document.querySelectorAll('.btn-close');
let hidenPlayAll = document.querySelectorAll('.btn-play-wrapper');

//перебираем кнопки 
btnCloseVideoAll.forEach(elem =>{
  elem.addEventListener('click',function(event){
    //если дата атрибут совпадает то удаляем активный клас
    // let dataClose = event.target.dataset.close;
    videoAllHiden.forEach(elem =>{
      if(elem.classList.contains('video-bg-active')){
        (elem.classList.remove('video-bg-active'))
        //востанавлеваем скрол
        body.classList.remove('no-scroll');
        //востанавливаем поэкранный скролл
        $ .scrollify.enable ();
        //возвращаем плей ,проходимся повсем и находим и удаляем класс который скрывал
        let hidenPlaybtnAll = document.querySelectorAll('.btn-play-wrapper');
        hidenPlaybtnAll.forEach(elem =>{
          elem.classList.remove('hiden-btn-video')
        })
         //показываем надпись scroll
         let scroll = document.querySelectorAll('.scroll');
         scroll.forEach(elem =>{
           elem.style.zIndex ="4"
         })
      }
    })
  })
})
let btnPlayVideo2 = document.querySelectorAll('.img-fullscreen');

btnPlayVideo2.forEach(el =>{
  el.addEventListener('click',function(){
    videoAllHiden.forEach(vHiden =>{
      let dataBtn = el.dataset.id;
      if(vHiden.classList.contains(dataBtn)){
        console.log('yes')
        vHiden.classList.add('video-bg-active')
        //запрещаем скролл
        body.classList.add('no-scroll')
        // document.body.style.overflow = 'hidden';
        // находим у элемена клласс и запускаем его
        $ .scrollify.disable ();
        let curVideo = vHiden.querySelector('.header-video')
            curVideo.play()
            this.closest('.btn-play-wrapper').classList.add('hiden-btn-video')
      }      
    })
  })
})


//скрол до элемента 
// window.addEventListener('scroll',function(){
//   let scrolDistance = window.scrollY
//   console.log(scrolDistance)
// })

let paymentScrolRight = document.querySelector('.payment-item-scroll');
let formAdress = document.querySelector('.form-adress');
let stepAll = document.querySelectorAll('.payment-line-text');
// console.log(objDiv.scrollTop = objDiv.scrollHeight) 
// paymentScrolRight.addEventListener('scroll',function(){

//       let formAdresDistance = formAdress.offsetTop
//       console.log(formAdresDistance)
//   // let scrolDistance = addres.scrollY
//   // console.log(scrolDistance)
// })
// function offset(formAdress) {
 
paymentScrolRight.addEventListener('scroll',function(){
  const formAdressDistance= offset(formAdress).top;
  
  // console.log(formAdressDistance)
  if(formAdressDistance <= 190){
    // console.log('da')
    stepAll.forEach((elem,index)=>{
    //  console.log(elem,index)
    let elIndex = index;
    // console.log(elIndex)
    if(elem,elIndex == 0){
      elem.classList.remove('active-step') 
    }
    if(elem,elIndex == 1){
      elem.classList.add('active-step')
    }
    })

  }
  if(formAdressDistance > 300){
   // console.log('da')
   stepAll.forEach((elem,index)=>{
    //  console.log(elem,index)
    let elIndex = index;
    // console.log(elIndex)
    if(elem,elIndex == 0){
      elem.classList.add('active-step') 
    }
    if(elem,elIndex == 1){
      elem.classList.remove('active-step')
    }
    })
  }
  if(formAdressDistance <= -800){
    // console.log('da')
    stepAll.forEach((elem,index)=>{
     //  console.log(elem,index)
     let elIndex = index;
     // console.log(elIndex)
     if(elem,elIndex == 1){
       elem.classList.remove('active-step') 
     }
     if(elem,elIndex == 2){
       elem.classList.add('active-step')
     }
     })
   }
   if(formAdressDistance >= -800){
    // console.log('da')
    stepAll.forEach((elem,index)=>{
     //  console.log(elem,index)
     let elIndex = index;
     // console.log(elIndex)
     if(elem,elIndex == 2){
       elem.classList.remove('active-step') 
     }
     
     })
   }
   if(formAdressDistance <=-800){
     let scrolDown = document.querySelector('.scroll');
     scrolDown.classList.add('hiden-scroll')
   }
   if(formAdressDistance >=-700){
    let scrolDown = document.querySelector('.scroll');
    scrolDown.classList.remove('hiden-scroll')
  }

  console.log(formAdressDistance)
});

function offset(el) {
  var rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}


//payment btn videobg
//получили все видео
let paymentVideoAll = document.querySelectorAll('.payment-video');
//получили все кнопки
let btnPaymentAll = document.querySelectorAll('.btn-color');

//по клику узнаем дата
btnPaymentAll.forEach(elem => {
  elem.addEventListener('click', function(){
    //получили дата
    let btnPaymentId = elem.dataset.paymentVideo
    console.log(btnPaymentId)
    
    //проверка если у елемента есть класс такойже как атрибут  
    paymentVideoAll.forEach(elem =>{
      elem.classList.add('payment-video-hiden')
      if(elem.classList.contains(btnPaymentId)){
        elem.classList.remove('payment-video-hiden')
       
      }
     
    })
    
  })
})