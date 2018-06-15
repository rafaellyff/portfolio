$(document).ready(function(){
   $("#home").mouseenter(function(){
        $("#home").animate({
            
            height: '60px',
            width: '60px'
        });
    });

   $("#home").mouseleave(function(){
        $("#home").animate({
            height: '50px',
            width: '50px'
        });
    });

    $("#instagram").mouseenter(function(){
        $("#instagram").animate({
            
            height: '60px',
            width: '60px'
        });
    });

   $("#instagram").mouseleave(function(){
        $("#instagram").animate({
            height: '50px',
            width: '50px'
        });
    });

    $("#facebook").mouseenter(function(){
        $("#facebook").animate({
            height: '60px',
            width: '60px'
        });
    });

   $("#facebook").mouseleave(function(){
        $("#facebook").animate({
           	height: '50px',
            width: '50px'
        });
    });

    $("#nome_menu").mouseenter(function(){
        $("#nome_menu").animate({letterSpacing: "5px"});
    });
    $("#nome_menu").mouseleave(function(){
        $("#nome_menu").animate({letterSpacing: "0px"});
    });

    $("#enviar").click(function(){
    	var nome = $("#input_nome").val(); 
    	var email = $("#input_email").val();
    	var assunto = $("#input_assunto").val();
    	var mensagem = $("#input_mensagem").val();
    	if (nome != "" && email != "" && assunto != "" && mensagem != "") {
       		alert("Seu email foi enviado com sucesso!");
    		$("#input_nome").val(""); 
    		$("#input_email").val("");
    		$("#input_assunto").val("");
    		$("#input_mensagem").val("");
    	} else {
    		alert("Por favor, preencha todos os campos para efetuar o envio do email!");
    	}
    });

    var owl = $('.owl-carousel');
				owl.owlCarousel({
					items:3,
					loop:true,
					margin: 10,
					autoplay:true,
					autoplayTimeout: 3000,
					autoplayHoverPause:true,
						responsive:{
						0:{
							items: 1
						},
						800:{
							items: 2
						}
					}

				});
});