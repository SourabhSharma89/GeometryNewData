$(document).ready(function(){
						   
						   window.abc=0;
	var OrientationPort= window.orientation
	 if(checkMobile){

		 if (window.innerHeight < window.innerWidth || OrientationPort === 90 || OrientationPort === -90) {	 
		 	 
		 		 $(".question").css("padding-bottom", "0%")
				  $(".fntsz").css("font-size", "1.5em")
 		$(".doneDiv").css("margin-top","1.2em")
		 }
		 else{
			 $(".question").css("padding-bottom", "8%")
			  $(".fntsz").css("font-size", "1.8em")
			  $(".doneDiv").css("margin-left","8em")
			  
			  
			 }
		 
		 }
		 
		  else{
			  $(".question").css("padding-bottom", "0%")
				$(".fntsz").css("font-size", "1.4em")
				
			 }
	  
				
					  
						   });