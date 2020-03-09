$(document).ready(function(){
	$nav = $('.nav');
	$toggleCollapse = $('.toggle-collapse');

	// click event on toggle menu
	$toggleCollapse.click(function() {
		$nav.toggleClass('collapse');
	});

// animate scroll navbar

//animate scroll navbar



// Owl-carousel for blog


$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    dots:false,
    nav:true,
    navText:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]

});

// click to scroll top
$('#moveup span').click(function(){
  $('#navbar').animate({
    scrollTop:0
  },1000);
})

//click to scroll top

});

// animate menu bar
function myFunction(x) {
  x.classList.toggle("change");
}
// animate menu bar


// Animate Scroll
  AOS.init();

// Animate Scroll 

