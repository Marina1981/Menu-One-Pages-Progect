window.addEventListener('load',
    function (){
        document.getElementById('hamburgerIconId').addEventListener('click', onHamburgerIconClicked);
        //---
        document.getElementById('buttonFastFootId').addEventListener('click', onButtonFastFootClicked);
        //---
        document.getElementById('buttonDrinksId').addEventListener('click',  onButtonDrinksClicked);
        //---
        document.getElementById('buttonChickenId').addEventListener('click', onButtonChickenClicked);
        //---
        document.getElementById('buttonRiceId').addEventListener('click',  onButtonRiceClicked);
        //---
        document.getElementById('subscribeId').addEventListener('click', onSubscribeClicked);
        //---
        document.getElementById('buttonRightId').addEventListener('click', onButtonRightClicked);
        //---
        document.getElementById('buttonLeftId').addEventListener('click', onButtonLeftClicked);
        //---
        document.getElementById('happyHourButtonId').addEventListener('click', onButtonHappyHourClicked);
        //---
        document.getElementById('partyTimeButtonId').addEventListener('click',  onButtonPartyTimeClicked);
        //---
        document.getElementById('breakfastButtonId').addEventListener('click', onButtonBreakfastClicked);
        //---
        document.getElementById('lunchButtonId').addEventListener('click', onButtonLunchClicked);
        //---
        document.getElementById('dinnerButtonId').addEventListener('click', onButtonDinnerClicked);
        //---
        document.addEventListener('scroll', onScrollbarScrolled);
        //---

        //---
        {////
            let GaleryElemList = document.getElementsByClassName('meal-carousel-front-box__gallery-container');//список всех объектов с этим классом

            for(let i = 0; i < GaleryElemList.length; ++i)
            {
                let nBoxCount = GaleryElemList[i].querySelectorAll('.meal-gallery-container__item-box').length;//возвращает количество с этим классом, которые принадлежат каждому контейнеру галлереи
                GaleryElemList[i].style.marginLeft =
                    -Math.max(nBoxCount - 3,0)*33.33 + "%";// сдвигаем влево весь бокс на количество элементов + делаем, чтоб в DOM в нужное поле установить нужно езначение, потому что в разных браузерах могут быть нюансы с усьтановкой из фйла стилей

            };
        }////
} );
//---------------------------------------------------------------------------------------------------------------
function changeActiveMealsMultiCarouselChoiceButton(active_button_id){

    let buttonList = document.getElementsByClassName('meals-multi-carousel__carusel-choice-button');

    for (let i = 0; i < buttonList.length; ++i) {

        let buttonId = buttonList[i].id;

        if (buttonId === active_button_id){
            buttonList[i].classList.remove('meals-multi-carousel__carusel-choice-button--inactive');
            buttonList[i].classList.add('meals-multi-carousel__carusel-choice-button--active');

        } else {
            buttonList[i].classList.remove('meals-multi-carousel__carusel-choice-button--active');
            buttonList[i].classList.add('meals-multi-carousel__carusel-choice-button--inactive');
        }
    }
}
//-----------------------------------------------------------------------------------------------------------
 function  changeActiveMealCarouselFrontBoxGalleryContainer(active_gallery_id) {

     let galleryContainerList =  document.getElementsByClassName('meal-carousel-front-box__gallery-container');
     for (let i = 0; i < galleryContainerList.length; ++i){

         let id = galleryContainerList[i].id;

         if (id === active_gallery_id){
             galleryContainerList[i].classList.remove('meal-carousel-front-box__gallery-container--inactive');
             galleryContainerList[i].classList.add('meal-carousel-front-box__gallery-container--active');
         } else {
             galleryContainerList[i].classList.remove('meal-carousel-front-box__gallery-container--active');
             galleryContainerList[i].classList.add('meal-carousel-front-box__gallery-container--inactive');
         }
     }
 }
//-----------------------------------------------------------------------------------------------------------
function hamburgerCross(x) {
    x.classList.toggle("change");
}
//-----------------------------------------------------------------------------------------------------------
function dropDownList() {
   let form = document.getElementById('menubarId');
   if (form.style.display === 'block'){
       form.style.display = 'none';
   } else {
       form.style.display = 'block';
   }
}
//--------------------------------------------------------------------------------------------------------
function onHamburgerIconClicked() {
    hamburgerCross(this);
    dropDownList('menubarId');
}
//--------------------------------------------------------------------------------------------------------
function onButtonFastFootClicked() {
    changeActiveMealsMultiCarouselChoiceButton('buttonFastFootId');

    changeActiveMealCarouselFrontBoxGalleryContainer('fastFootBoxId');
}
//--------------------------------------------------------------------------------------------------------
function onButtonDrinksClicked() {

    changeActiveMealsMultiCarouselChoiceButton('buttonDrinksId');

    changeActiveMealCarouselFrontBoxGalleryContainer('drinksId');

}
//--------------------------------------------------------------------------------------------------------
function onButtonChickenClicked() {

    changeActiveMealsMultiCarouselChoiceButton('buttonChickenId');

    changeActiveMealCarouselFrontBoxGalleryContainer('chickenBoxId');
}
//--------------------------------------------------------------------------------------------------------
function onButtonRiceClicked() {

    changeActiveMealsMultiCarouselChoiceButton('buttonRiceId');

    changeActiveMealCarouselFrontBoxGalleryContainer('riceBoxId');
}
//--------------------------------------------------------------------------------------------------------

function onSubscribeClicked(e) {

    resetSubscribeButtonAnimatedReaction(e);

    resetInputButtonAnimatedReaction(e);

    let email = document.getElementById('emailInputId').value;//получаем содержимое инпута
    let sEmailList = localStorage.getItem('subscriptionEmailList');//из локал хранилища забираем список элементов

    if(sEmailList == null){                                        // условие, если списка не сущ.= Null, то создать массив списка.
        let emailList = [];
        emailList.push(email);// добавить элемент в список
        let serializedList = JSON.stringify(emailList);
        localStorage.setItem('subscriptionEmailList',serializedList);

    } else {
        let emailList = JSON.parse(sEmailList);
        emailList.push(email);// добавить элемент в список
        let serializedList = JSON.stringify(emailList);
        localStorage.setItem('subscriptionEmailList',serializedList);

    }
    //---
    document.getElementById('emailInputId').value = '';
   // e.stopPropagation();
   // e.preventDefault();
    return false;
}
//--------------------------------------------------------------------------------------------------------
function onButtonRightClicked() {

    let el = document.querySelector('.meal-carousel-front-box__gallery-container--active');//получаем первый объект с таким классом
    let sLMargin = el.style.marginLeft; //получаем левый марджин строковый
    let fLMargin = parseFloat(sLMargin);//функция перевода строки в число(без %)

    if (fLMargin < 0)
        el.style.marginLeft = (fLMargin + 33.33) + "%";//сдвигаем марджин

}
//--------------------------------------------------------------------------------------------------------
function onButtonLeftClicked() {

    let el = document.querySelector('.meal-carousel-front-box__gallery-container--active');
    let sLMargin = el.style.marginLeft;
    let fLMargin = parseFloat(sLMargin);
    let nBoxCount = el.querySelectorAll('.meal-gallery-container__item-box').length;

    if (fLMargin >  -Math.max(nBoxCount - 3, 0)*33.33){
        el.style.marginLeft = (fLMargin - 33.33) + "%";//сдвигаем марджин
    }
}
//--------------------------------------------------------------------------------------------------------
function resetSubscribeButtonAnimatedReaction(e) {

    let email = document.getElementById('emailInputId').value;//получаем содержимое инпута
    let subscribeButton = document.getElementById('subscribeId');

    subscribeButton.classList.remove('form-subscriptions__button-subscription--animated');

    if (email === ''){
        subscribeButton.classList.add('form-subscriptions__button-subscription--animated');
    }


}
//----------------------------------------------------------------------------------------------------------
 function resetInputButtonAnimatedReaction(e) {
     let email = document.getElementById('emailInputId').value;
     let inputButton = document.getElementById('emailInputId');
     if (email !== ''){
         inputButton.classList.add('form-subscriptions__input-email--animated');
     }else{
         inputButton.classList.remove('form-subscriptions__input-email--animated');
     }
 }
//-----------------------------------------------------------------------------------------------------------
function onButtonHappyHourClicked(e){
    changeActiveMealtimeMenubarMenuButton('happyHourButtonId');

    changeActiveMealsDescriptionSection('happyHourBoxId');
}
//-----------------------------------------------------------------------------------------------------------
function onButtonPartyTimeClicked(e){
    changeActiveMealtimeMenubarMenuButton('partyTimeButtonId');

    changeActiveMealsDescriptionSection('partyTimeBoxId');
}

//-----------------------------------------------------------------------------------------------------------
function onButtonBreakfastClicked(e){
    changeActiveMealtimeMenubarMenuButton('breakfastButtonId');

    changeActiveMealsDescriptionSection('breakfastBoxId');
}
//-----------------------------------------------------------------------------------------------------------
function onButtonLunchClicked(e){
    changeActiveMealtimeMenubarMenuButton('lunchButtonId');

    changeActiveMealsDescriptionSection('lunchBoxId');
}
//-----------------------------------------------------------------------------------------------------------
function onButtonDinnerClicked(e){
    changeActiveMealtimeMenubarMenuButton('dinnerButtonId');

    changeActiveMealsDescriptionSection('dinnerBoxId');
}
//-----------------------------------------------------------------------------------------------------------

function changeActiveMealtimeMenubarMenuButton(active_button_id){

    let buttonList = document.getElementsByClassName('mealtime-menubar__menu-button');

    for (let i = 0; i < buttonList.length; ++i) {

        let buttonId = buttonList[i].id;

        if (buttonId === active_button_id){
            buttonList[i].classList.remove('mealtime-menubar__menu-button--inactive');
            buttonList[i].classList.add('mealtime-menubar__menu-button--active');

        } else {
            buttonList[i].classList.remove('mealtime-menubar__menu-button--active');
            buttonList[i].classList.add('mealtime-menubar__menu-button--inactive');
        }
    }
}
//-----------------------------------------------------------------------------------------------------------
function  changeActiveMealsDescriptionSection(active_gallery_id) {

    let galleryContainerList =  document.getElementsByClassName('meals-description-section');
    for (let i = 0; i < galleryContainerList.length; ++i){

        let id = galleryContainerList[i].id;

        if (id === active_gallery_id){
            galleryContainerList[i].classList.remove('meals-description-section--inactive');
            galleryContainerList[i].classList.add('meals-description-section--active');
        } else {
            galleryContainerList[i].classList.remove('meals-description-section--active');
            galleryContainerList[i].classList.add('meals-description-section--inactive');
        }
    }
}

//-----------------------------------------------------------------------------------------------------------
function onScrollbarScrolled() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navArrowId").style.bottom = "0";
    } else {
        document.getElementById("navArrowId").style.bottom = "-100px";
    }
}


//-----------------------------------------------------------------------------------------------------------