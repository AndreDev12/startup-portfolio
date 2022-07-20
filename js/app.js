const formCta = document.querySelector('#form__cta');
const headerBar = document.querySelector('.header__bar');
const headerMenu = document.querySelector('.header__menu');
const logoText = document.querySelector('.header__logo-text');
const navigation = document.querySelector('.navigation');
const square = document.querySelector('#square');

document.addEventListener('scroll', scrolling);
document.addEventListener('scroll', showSquare);
formCta.addEventListener('click', preventRecharge);
headerMenu.addEventListener('click', showNavigation);

function preventRecharge(e){
    e.preventDefault();
}

function scrolling(){ 
    if(window.innerWidth >= 768){
        if(window.scrollY > 0){
            headerBar.classList.add('background-white');
            logoText.style.color = 'var(--black)';
        }else{
            headerBar.classList.remove('background-white');
            logoText.style.color = 'var(--white)';
        }
    }
}

function showNavigation(e){
    if(e.target.classList.contains('fa-times')){
        e.target.classList.remove('fa-times');
        e.target.classList.add('fa-bars');
        navigation.classList.toggle('navigation-show');
    }else{
        e.target.classList.add('fa-times');
        e.target.classList.remove('fa-bars');
        navigation.classList.toggle('navigation-show');
    }
}

function showSquare(){
    if(window.scrollY >= 700){
        square.style.display = 'block';
    }else{
        square.style.display = 'none';
    }
}

// jQuery
window.onload = function(){
    $('#onload').fadeOut();
}

$(window).on('scroll', function() {
    var wScroll = $(this).scrollTop();

    // Fixed nav
    wScroll > 1 ? $('.header__bar').addClass('fixed-nav') : $('.header__bar').removeClass('fixed-nav');
});


$(window).scroll(function (){ //on scroll event on window
    var position = $(this).scrollTop(); //position scrolled sofar
    $('.section').each(function(){ //for each loop(checks for every element with that class)
    //for your every section on site or your class of main sections you are targetting
        var target = $(this).offset().top; // each element position from top
        var targetBot = target + $(this).height();
        var id = $(this).attr('id'); //this element ID - should be same as data-id on your nav link
        $('.navigation__link[data-id=' + id + ']').removeClass('hovered'); //clearing
        if(position >= target && targetBot >= position){ //if you are scrolled over element with some id
            $('.navigation__link[data-id=' + id + ']').addClass('hovered');
            //this will check wich element you are scrolled on and selects in menu that item with same data-id  
        }
    });
});