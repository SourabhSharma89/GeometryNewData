$(document).ready(function()
{   


       if(checkMobile)
		{
			if (window.innerHeight < window.innerWidth || OrientationPort === 90 || OrientationPort === -90) 
			{	 
			$(".inputAndDoneSpaceFordevice").css({"float":"left","margin-left":"-115%","width":"112%","margin-top":"1em","border":"1px solid black"})	
			}
	
		}
		 if(!checkMobile && window.innerWidth<=1024){
			 $(".ELC").css("font-size","0.9em");
			 $(".header").css("height","8em")
		 }
		

        if(checkMobile)
		{
			$(".Device,.LandNotNeed").show();
			
		}else{
			$(".Device,.LandNotNeed").hide();
		}
	$(".solution").click(function()
	{
		$(".solutionContainer").fadeIn();
		$(".solutionMainSteps,.solutionText,.SolutionRemark,.solutionContainer").show();
		var sol_height = $(".SolutionRemark").height();

		if(checkMobile)
		{
			
			if (window.innerHeight < window.innerWidth || OrientationPort === 90 || OrientationPort === -90) 
			{	 
				$(".middle").css("margin-top",5+"px");
			}
			else
			{
				$(".middle").css("margin-top",(sol_height+5)+"px");
			}
		}
		else
		{
			
			$(".middle").css("margin-top",5+"px");
		}	
	})
	 BtnHt = $(".spec_char").innerHeight()
		SpclFont = Number($(".spec_char").css("font-size").split("px")[0])
	//alert(BtnHt+"  "+SpclFont)
	$(".spec_char1").css("height",BtnHt*1.4+"px") ;
	$(".spec_char1").css({"font-size":SpclFont*1.3+"px"}) ;
	
	headerHeight = $(".header").outerHeight(true);
				$(".container").css("height",containerfluidHeight-(headerHeight+footerHeight+5)+"px");
				$(".RootInfo").css("width","25%");
});