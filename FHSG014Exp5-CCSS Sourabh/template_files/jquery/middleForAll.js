// JavaScript Document

$(document).ready(function(){
	if(!checkMobile){					   
	$(".howTo_div").show();
	}	
	$(".Graph_main_div").css("margin-top",(15)+"px");	
		
		 $(".solution").click(function(){
									   
			$(".solutionContainer").fadeIn();
			$(".solutionMainSteps,.solutionText,.SolutionRemark,.solutionContainer").show();
			var sol_height = $(".SolutionRemark").height();						 
			$(".Graph_main_div").css("margin-top",(15)+"px");	
			$(".middle").css("margin-top",(0)+"px");
							 
         });
		
		$(".section4").show();
		
		 /*if(checkMobile){
			 $('input[type="text"], textarea').each(function(){
				 $(this).attr('readonly',false);
			 });
		 }*/
		  
		
})
