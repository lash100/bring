	$(document).ready(function(){
		$(".btn").click(function(){
			$(".input").toggleClass("active");
			$(this).toggleClass("animate");
	  });
    });


    $(document).ready(function(){
    $(".filter-dropdown").click(function(){
        $(".filter-out").toggle(400);
    });
});





    $(document).ready(function(){
    $("#EatDrink").click(function(){
    $(".nomeri1").show();
    $(".nomeri2, .nomeri3,.nomeri4").css({display:'none'});

    });
});


    $(document).ready(function(){
    $("#Services").click(function(){
    $(".nomeri2").show();
    $(".nomeri1, .nomeri3,.nomeri4").css({display:'none'});

    });
});

    $(document).ready(function(){
    $("#Rent-items").click(function(){
    $(".nomeri3").show();
    $(".nomeri1, .nomeri2,.nomeri4").css({display:'none'});


    });
});

    $(document).ready(function(){
    $("#Bring-online-shopping").click(function(){
    $(".nomeri4").show();
    $(".nomeri1, .nomeri2,.nomeri3").css({display:'none'});


    });
});






$("#EatDrink").click(function() {
    $('html,body').animate({
        scrollTop: $(".EatDrink-container").offset().top-200},
        'slow');
});

$("#Services").click(function() {
    $('html,body').animate({
        scrollTop: $(".Services-container").offset().top-200},
        'slow');
});
$("#Rent-items").click(function() {
    $('html,body').animate({
        scrollTop: $(".Rent-item-container").offset().top-200},
        'slow');
});
$("#Bring-online-shopping").click(function() {
    $('html,body').animate({
        scrollTop: $(".Bring-online-shopping-container").offset().top-200},
        'slow');
});