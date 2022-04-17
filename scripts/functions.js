$('document').ready(function () {
   var $toggle = $('.nav-toggle');
   var $burger = $('.svg-burger');
   var $close = $('.svg-close');
   var $mobileNav = $('.mobile-nav');

   var showMenu = false;

   $toggle.on('click', function(){
      if (showMenu === false) {
         $burger.addClass('hidden');
         $close.addClass('show');
         $mobileNav.addClass('open-menu');
         showMenu = true;
      } else if (showMenu === true) {
         $burger.removeClass('hidden');
         $close.removeClass('show');
         $mobileNav.removeClass('open-menu');
         showMenu = false;
      }
   });





 });

 $(window).resize(function(){

   


 });