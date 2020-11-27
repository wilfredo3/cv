function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);

//actualBlock is the section we are animation
var offset = $(window).scrollTop() - actualBlock.offset().top,
    windowHeight = $(window).height();

if( offset >= -windowHeight && offset <= 0 ) {
   // section entering the viewport
   translateY = (-offset)*100/windowHeight;
   scale = 1;
   opacity = 1;
} else if( offset > 0 && offset <= windowHeight ) {
   //section leaving the viewport 
   scale = (1 - ( offset * 0.3/windowHeight));
   opacity = ( 1 - ( offset/windowHeight) );
   translateY = 0;
   boxShadowBlur = 40*(offset/windowHeight);
}