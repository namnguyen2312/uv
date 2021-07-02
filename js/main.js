$(document).ready(function(){
 //  $('.navbar-default .navbar-nav>li').on("click",function(){
	//   $('.navbar-default .navbar-nav>li').removeClass();
	//   $(this).addClass("active");
	// });
  $('.navbar-right>li').click(function(e) {
	    $('.navbar-right>li.active').removeClass('active');
	    var $this = $(this);
	    if (!$this.hasClass('active')) {
	        $this.addClass('active');
	    }
	    e.preventDefault();
	});
});