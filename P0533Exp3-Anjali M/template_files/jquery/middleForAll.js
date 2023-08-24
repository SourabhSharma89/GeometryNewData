$(document).ready(function()
{
	$(".solution").click(function()
	{
										   
		$(".solutionContainer").fadeIn();
		$(".solutionMainSteps,.solutionText,.SolutionRemark,.solutionContainer").show();
		var sol_height = $(".SolutionRemark").height();
							 
		$(".middle").css("margin-top",(sol_height)+"px");
								 
	})
							
});