
/* -------------- FUNÇÕES ----------------- */
// $(document).ready(function(){
$(document).ready(function(){	
	$("#home").mouseenter(function(){
     	   $("#home").animate({letterSpacing: "8px"});
    	});
    	$("#home").mouseleave(function(){
        	$("#home").animate({letterSpacing: "0px"});
    });
});    	



/* -------------- FUNÇÃO DE SLIDE PARA TEXTO ------------- */
$(document).ready(function(){
    	$("#flip").click(function(){
        	$("#panel").slideToggle("slow");
    	});
});

/* -------------- FUNÇÃO DE ALERTA DE TEXTO PARA CONTATO ---------- */

$(document).ready(function(){
  	$("#enviar").click(function(){
    	var email = $("#email").val();
    	var mensagem = $("#msg").val();

   		if (email != "" && mensagem != "") {
      	alert("Sua mensagem foi enviada! Retornarei o contato em breve, obrigado!");
      	$("#email").val("");
      	$("#msg").val("");
    	} else {
      	alert("Opa! Parece que você não preencheu os campos corretamente! Por favor, confira e preencha os campos antes de enviar sua mensagem!");
    	}
  	});
});  	

