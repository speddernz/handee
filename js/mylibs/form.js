// JavaScript Document
$(document).ready(function(){
						   
						   
						   
						   
						   
						   
   /*EMAIL ALERT*/
   $("#email-form").submit(function(e){
		
		e.preventDefault();
		
		var email = $("#a-email").val();
		/*var spam = $("#spam").val();*/
		
		$("#email-form input:text").removeClass("error-focus");
		
		
		if(email==""){
			alert('empty');		
			$("#alert-status").html("Enter Email here").slideDown("fast");
			$("#a-email").focus().addClass("error-focus");
		
		}
		else {
			alert('Email: '+email);		
		
		/* if(spam!==""){
				
			$("#alert-status").html("Spam Attack!!").slideDown("fast");
			
		
		}else{*/
					
			$("#alert-status").html("Sending message").slideDown("fast");
			
			
			var formData = $(this).serialize();
			
			
			$.ajax({
				type:"POST", 
				url:"a-email.php",
				data: formData,
				success: function(rtnMsg){
					
					if(rtnMsg=="error"){
					
						$("#alert-status").html("Error").slideDown("fast");
						}else if(rtnMsg=="success");
						
						$("#alert-status").html("Success").slideDown("fast");
						
						$("#email-form input:text").val("Your Email Address");
					
					
					
			}//close success function
				
				
		});//colse ajax
		}//close else
		
	/*	$("#email-form").click(function(){
		$("#status").slideUp("fast");
		$("#contact-form input:text, #contact-form textarea").removeClass("error");
		});*/
		
	});//close submit
						   
						   
						   
						   
		
		
		/*MOBILE ALERT*/
		$("#mobile-form").submit(function(e){
		
		e.preventDefault();
		
		var email = $("#a-email").val();
		/*var spam = $("#spam").val();*/
		
		$("#email-form input:text").removeClass("error-focus");
		
		if(email==""){
			
			
					
			$("#alert-status").html("Enter mobile number").slideDown("fast");
			$("#a-email").focus().addClass("error-focus");
		
		}
		else if(spam!==""){
					
			$("#alert-status").html("Spam Attack!!").slideDown("fast");
			
		
	}else{
					
			successMessage("Email being sent please be patient");
			
			
			var formData = $(this).serialize();
			
			
			$.ajax({
				type:"POST", 
				url:"a-email.php",
				data: formData,
				success: function(rtnMsg){
					
					if(rtnMsg=="error"){
						
						errorMessage('Opps, something went wrong - message hasnt been sent');
						}else if(rtnMsg=="success");
						
						successMessage('Thanks '+name+', your message has been sent successfully');
						
						$("#email-form input:text").val("Your Email Address");
					
					
					
			}//close success function
				
				
		});//colse ajax
		}//close else
		
	/*	$("#email-form").click(function(){
		$("#status").slideUp("fast");
		$("#contact-form input:text, #contact-form textarea").removeClass("error");
		});*/
		
	});//close submit
						   
						   
						   
	
		
		
		
		
		
		
		
		
		
						   
						   
						   
						   
			/*CONTACT FORM*/			   
						   
						   

	$("#contact-form").submit(function(e){
		
		e.preventDefault();
		
		var name = $("#name").val();
		var email = $("#email").val();
		var subject = $("#subject").val();
		var message = $("#message").val();
		var spam = $("#spam").val();
		
		$("#contact-form input:text, #contact-form textarea").removeClass("error-focus");
		
		if(name==""){
			errorMessage('Enter your name')
			$("#name").focus().addClass("error-focus");
		}else if(email==""){
					
			errorMessage('Enter  email')
			$("#email").focus().addClass("error-focus");
				
		
		}else if(!isValidEmail(email)){
			errorMessage('Enter valid email')
			
		}else if
		(subject==""){
					
			errorMessage('Enter your subject')
			$("#email").focus().addClass("error-focus");
				
		
		}else if(message==""){
					
			errorMessage('Enter your message')
			$("#message").focus().addClass("error-focus");
				
		}
		
		else if(spam!==""){
					
			errorMessage('SPAM ATTACK')
			
		
	}else{
					
			successMessage("Email being sent please be patient");
			
			
			var formData = $(this).serialize();
			
			
			$.ajax({
				type:"POST", 
				url:"send-mail.php",
				data: formData,
				success: function(rtnMsg){
					
					if(rtnMsg=="error"){
						
						errorMessage('Opps, something went wrong - message hasnt been sent');
						}else if(rtnMsg=="success");
						
						successMessage('Thanks '+name+', your message has been sent successfully');
						
						$("#contact-form input:text, #contact-form textarea").val("");
					
					
					
			}//close success function
				
				
		});//colse ajax
		}//close else
		
	});//close submit
	$("#contact-form #reset").click(function(){
		$("#status").slideUp("fast");
		$("#contact-form input:text, #contact-form textarea").removeClass("error");
		});
	
});//close ready handler
	
//functions
function errorMessage(message){
	$("#status").removeClass("success").addClass("error");
	statusMessage(message);
}

function successMessage(message){
	$("#status").removeClass("error").addClass("success");
	statusMessage(message);
}

function statusMessage(message){
	$("#status").html(message).slideDown("fast");
}

function isValidEmail(email) {
	var emailRx = /^[\w\.-]+@[\w\.-]+\.\w+$/;
	return  emailRx.test(email);
}