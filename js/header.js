jQuery('document').ready(function($){
	var menuBtn = $('.menu-icon'),
	menu = $('.navigation ul');
	menu2 = $('.logo img')

	menuBtn.click(function(){

		if (menu.hasClass('show')) {
			menu.removeClass('show');

		}else{
			menu.addClass('show')
		}

		if (menu2.hasClass('show')) {
			menu2.removeClass('show');

		}else{
			menu2.addClass('show')
		}
	})
});
