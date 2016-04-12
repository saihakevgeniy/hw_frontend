
// ------------------------------------------EVENTS----------------------------------------
(function($) {
	$(function(){
		$('.mainRegistration').click(mainRegistrationClick);
		$('#registration').click(registrationClick);
		$('.mainLogin').click(mainLogClick);
		$('.login').click(loginClick);
		$('#goOut').click(goOut);
		$('#getProducts').click(getProductsEvents);
		$('#postReview').click(sendPostReview);


	});
})(jQuery)

// ------------------------------------------Click functions----------------------------------
function styleHeader(){
	$('.mainLogin').hide();
	$('.mainRegistration').hide();
	$(".container").hide();
	$(".title").hide();
}

function mainRegistrationClick(){
	$(".authorization").show();
	styleHeader();
	
	return false;
};

function registrationClick(){
	registApp();
	$(".authorization").hide();
	$(".loginForm").show();
	return false;
};

function mainLogClick() {
	$(".loginForm").show();
	styleHeader();
	return false;
};

function loginClick() {
	if(($('#usernameLogin').val()) && ($('#passwordLogin').val())){
		$('#goOut').css("display","inline-block");
		$('.loginForm').hide();	
		$("#getProducts").show();
		logApp();
		return false;
	}
};
function goOut(){
	$('.mainLogin').css('display', 'inline-block');
	$('.mainRegistration').css('display', 'inline-block');
	$('#goOut').hide();
	return false;
};

function getProductsEvents() {
	$("ul.titleProduct").show();	
	$("#getProducts").hide();
	$('.loginForm').hide();	
	$(".authorization").hide();

	listProductsApp();
	return false;
};

function getProduct() {
	numProduct=+($(this).attr('value'));
	$(".title").removeClass('liActive')
	$(this).addClass('liActive');
	$('.container').show();
	$('.leftCol > div').hide();
	$('.reviews > div').hide();
	$('.leftCol > div').eq($(this).attr('value')).show();
	$('.reviews > div').eq($(this).attr('value')).show();
	return false;	
};

function sendPostReview() {
	if(token!=''){
		sendReviewApp(numProduct);
		$(".warningNotLog").css("display","none");
	}
	else
		$(".warningNotLog").css("display","block");	
};



