$(document).ready(function(){
    //typing animation Script
    var typed = new Typed(".typing-1",{
    strings: ["SLIDE 1"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
    });
    var typed = new Typed(".typing-2",{
        strings: ["SLIDE 2"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
    
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoWidth:true,
        singleItem: true,
        autoHeight:true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            }
        }
    }); 
});