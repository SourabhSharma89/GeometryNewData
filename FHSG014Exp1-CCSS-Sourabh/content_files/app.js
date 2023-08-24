$(document).ready(function()
{
		var OrientationPort = window.orientation                                                                    
		if(checkMobile)   
		{   
			if (window.innerHeight < window.innerWidth || OrientationPort === 90 || OrientationPort === -90) 
			{	 
				$(".question").css("padding-bottom", "1%")
				$(".fntsz").css("font-size", "1.5em")
				$(".solutionMainSteps").css({"width":"95%","margin-left":"4%"}) ;
			}
			else
			{   
				$(".question").css("padding-bottom", "8%")
				$(".fntsz").css("font-size", "1.8em")
				$(".InputAndDoneTbl").css("width","98%") ;
				$(".solutionMainSteps").css({"width":"99%","margin-left":"1%"}) ;
				$(".mar").css("margin-top","4%") ;
				$(".SolutionRemark").css("background","white") ;
				$(".Flex").css("display","block") ;
				$(".LeftPart,.RightPart").css({"margin":"0","padding":"0","border":"none"}) ;
			}    
		}
		else   
		{
			$(".question").css("padding-bottom", "0%")
			$(".fntsz").css("font-size", "1.4em")
		}	
		
		if(checkMobile  && (window.innerHeight> window.innerWidth))
		{
			$(".Step1").css('width','98%');
			window.ua = navigator.userAgent.toLowerCase();
			window.isAndroid = ua.indexOf("android") > -1;	
			fntSz = $(".container-fluid").css('font-size').split('px').join('');                 
			if(isAndroid) // for Android
			{
				$(".container-fluid").css({"font-size": (fntSz-3)+"px"});
			}
			else // for iPhone                          
			{
				$(".remark").css({"font-size": (fntSz)+"px"});
			}
		}
});