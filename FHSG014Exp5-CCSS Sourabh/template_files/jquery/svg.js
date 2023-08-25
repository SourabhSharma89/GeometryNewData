
$(document).ready(function(){
						   
	$(".solutionMainSteps,.middle1,.Graph_main_div").show();
	$(".Step1,.solutionText,.oogive").hide();					   
	  $(".crcl").attr({"fill":"#C00","stroke":"#C00"})

	window.count=1;
	var cn;
	
	$(".crcl").css("opacity" , "0");
	
	$(".crcl").hover(function(){
	$(".crcl").css("cursor" , "pointer");		
		
		
	});
	
	window.cord1 = 0;
	window.cord2 = 0;
	
	window.CoOrdinateX1=0;
	window.CoOrdinateX2=0;
	window.CoOrdinateX3=0;
	window.CoOrdinateX4=0;
	window.CoOrdinateX5=0;
	window.CoOrdinateX6=0;
	window.CoOrdinateX7=0;
	
	window.CoOrdinateY1=0;
	window.CoOrdinateY2=0;
	window.CoOrdinateY3=0;
	window.CoOrdinateY4=0;
	window.CoOrdinateY5=0;
	window.CoOrdinateY6=0;
	window.CoOrdinateY7=0;
	
	ReturnClass = function(className){
		cn = String(className).split('$');	
		
}
	
	
	
	
	
/////////////For mouseover show Co-ordinates///////////////////////////////////////////////////
//if (String(navigator.userAgent).indexOf("Mobile") == -1)
if(!checkMobile)
{ 	
	ReturnClass1 = function(className1){
		cn11 = String(className1).split('$');
		cn1 = cn11[0];
		cn2 = cn11[1];
		Co_Ordinates = "<b>"+cn1+",</b><b>"+cn2+"</b>"
		$(".ShowCoOrdinates").css("font-size","15px");
		$(".ShowCoOrdinates").html("");	
	}

	
	  $(".crcl").mouseover(function(e){
		 $(".ShowCoOrdinates").show();
		 
		 $(".ShowCoOrdinates").offset({left:e.pageX-35,top:e.pageY+10});

	  })
	
		$(".crcl").mouseout(function(){
			$(".ShowCoOrdinates").hide();
		})
		
}
else{
	ReturnClass1 = function(className1){
		cn11 = String(className1).split('$');
		cn1 = cn11[0];
		cn2 = cn11[1];
	}
}
		
	
	
	
	
	
///////////////////////////////mouseover end////////////////////////////////////////////////////////////	
		
/////////////////////for mouse click //////////////////////////////////////////////////////////////////
var arryName = new Array();
var countCheck = new Array();
var arryNameCount = new Array();

countCheck=[1,2,3,4]

/////////////////new /////////////////////////////
window.forPointColor = [];
//////////end new ///////////////////////////////
MakeIt=true;
window.ClickDot = function(){
	$(document).on('mouseover click', '.crcl', function (event) {
		if (event.type === "click") {
		$(this).css("opacity" , "1");
	/////////////////new /////////////////////////////
		var className  = $(this).attr("class");
			className = className.split(" ")
			className  = (className[1])
	///////////////////end new ///////////////////
		var chkIndex=0
		Ordnt = String(cn).split("@");
     if(arryName.includes(String(cn))){
		MakeIt=false;	
		indexOfThis=arryName.indexOf(String(cn))
		 count = arryNameCount[indexOfThis];
		 countCheck.push(Number(count))
		 arryName.splice(indexOfThis,1);
		 arryNameCount.splice(indexOfThis,1);
		 $(this).css("opacity" , "0");
		 path=''
		 $(".oogive").attr("d",path);
		 $(".oogive").hide();
		 $(".crcl").bind('mouseover')
		$(".crcl").css('cursor',"pointer")	 
		 }else{
			 if(countCheck.length!=0){
			 for(i=1;i<=4;i++){
				 if(countCheck.includes(Number(i))){
					count=i;   
			        MakeIt=true;
				countCheckIndex=countCheck.indexOf(i);	
					
		    	arryName.push(String(cn)) 
				
				arryNameCount.push(String(count))
				
			    countCheck.splice((countCheckIndex),1);		 
				
					 break;
					 }else{
						count=0; 
				
						 }
				 
				
				 
				 }
			 }else{
				 count=0; 
				 $(this).css("opacity" , "0"); 
			
				 }
			 
			 
			
			 }


		
		
		
		 if(count == 1 ){
			
			
			
			
			if(MakeIt){
			CoOrdinateX1 = Ordnt[0];
			CoOrdinateY1 = Ordnt[1];
	
			
			document.querySelector(".txt1").innerHTML = "A"/*"A("+cn1+","+cn2+")"*/;
			$(".txt1").css("display","inline-block");
			$(".txt1").attr({"x":Number(CoOrdinateX1)+10, "y":Number(CoOrdinateY1)+15});
			
			//forPointColor.push(className)
			
					cord1 = cn1;
					cord2 = cn2;
				
			
			forPointColor[0]=className;
	        
			if(CoOrdinateX4!==0){
				            path = "M" +" "+ CoOrdinateX1 +" "+ CoOrdinateY1 + " L " +" "+ CoOrdinateX2 +" "+ CoOrdinateY2 + " L " +" "+ CoOrdinateX3 +" "+ CoOrdinateY3 + " L " +" "+ CoOrdinateX4 +" "+ CoOrdinateY4 + " L " +" "+ CoOrdinateX1 +" "+ CoOrdinateY1;
			$(".oogive").attr("d",path);
			$(".oogive").show();
			$(".crcl").css({"pointer-events":"none"});
							}else{
								path = '';
								$(".oogive").attr("d",path);
			                    $(".oogive").hide();
							}
				
			
			}else{
			$(".txt1").css("display","none");
			$(".txt1").attr({"x":Number(0), "y":Number(0)});
	
			CoOrdinateX1 = 0;
			CoOrdinateY1 = 0;
	
		
				
				
				}
			
		}
		else if(count == 2 ){
			
			if(MakeIt){
			CoOrdinateX2 = Ordnt[0];
			CoOrdinateY2 = Ordnt[1];
			document.querySelector(".txt2").innerHTML = "B"/*"B("+cn1+","+cn2+")"*/;
			$(".txt2").css("display","inline-block");
			$(".txt2").attr({"x":Number(CoOrdinateX2)+10, "y":Number(CoOrdinateY2)+15});
			
			/////////////////new /////////////////////////////
			forPointColor[1]=className;	
			//////////////////////////////////////////////////
				cord3 = cn1;
				cord4 = cn2;
				
				if(CoOrdinateX4!==0){
				            path = "M" +" "+ CoOrdinateX1 +" "+ CoOrdinateY1 + " L " +" "+ CoOrdinateX2 +" "+ CoOrdinateY2 + " L " +" "+ CoOrdinateX3 +" "+ CoOrdinateY3 + " L " +" "+ CoOrdinateX4 +" "+ CoOrdinateY4 + " L " +" "+ CoOrdinateX1 +" "+ CoOrdinateY1;
			$(".oogive").attr("d",path);
			$(".oogive").show();
			$(".crcl").css({"pointer-events":"none"});
							}else{
								path = '';
								$(".oogive").attr("d",path);
			                    $(".oogive").hide();
							}
	
			}else{
						$(".txt2").css("display","none");
			$(".txt2").attr({"x":Number(0), "y":Number(0)});
	
			CoOrdinateX2 = 0;
			CoOrdinateY2 = 0;
	
				}
			
			
			
		}
		
		else if(count == 3 ){
			
			if(MakeIt){
			CoOrdinateX3 = Ordnt[0];
			CoOrdinateY3 = Ordnt[1];
			document.querySelector(".txt3").innerHTML = "C"/*"C("+cn1+","+cn2+")"*/;
			$(".txt3").css("display","inline-block");
			$(".txt3").attr({"x":Number(CoOrdinateX3)+10, "y":Number(CoOrdinateY3)+15});
			
			/////////////////new /////////////////////////////
			forPointColor[2]=className;	
			///////////////////////////////////////////////////////
			
			
							cord5 = cn1;
							cord6 = cn2;
							if(CoOrdinateX4!==0){
				            path = "M" +" "+ CoOrdinateX1 +" "+ CoOrdinateY1 + " L " +" "+ CoOrdinateX2 +" "+ CoOrdinateY2 + " L " +" "+ CoOrdinateX3 +" "+ CoOrdinateY3 + " L " +" "+ CoOrdinateX4 +" "+ CoOrdinateY4 + " L " +" "+ CoOrdinateX1 +" "+ CoOrdinateY1;
			$(".oogive").attr("d",path);
			$(".oogive").show();
			$(".crcl").css({"pointer-events":"none"});
							}else{
								path = '';
								$(".oogive").attr("d",path);
			                    $(".oogive").hide();
							}
				

			}else{
						$(".txt3").css("display","none");
			$(".txt3").attr({"x":Number(0), "y":Number(0)});
			CoOrdinateX3 = 0;
			CoOrdinateY3 = 0;
						
				}
			
			
		}
		else if(count == 4){
			if(MakeIt){
			CoOrdinateX4 = Ordnt[0];
			CoOrdinateY4 = Ordnt[1];
			document.querySelector(".txt4").innerHTML = "D"/*"D("+cn1+","+cn2+")"*/;
			$(".txt4").css("display","inline-block");
			$(".txt4").attr({"x":Number(CoOrdinateX4)+10, "y":Number(CoOrdinateY4)+15});
			/////////////////new /////////////////////////////
			forPointColor[3]=className;		
		/////////////////////////////////////////////////////	
						cord7 = cn1;
						cord8 = cn2;
						
			//if(co_ordinates.length==4){
			// //alert(CordinateClass)
			if(CoOrdinateX4!==0){
				            path = "M" +" "+ CoOrdinateX1 +" "+ CoOrdinateY1 + " L " +" "+ CoOrdinateX2 +" "+ CoOrdinateY2 + " L " +" "+ CoOrdinateX3 +" "+ CoOrdinateY3 + " L " +" "+ CoOrdinateX4 +" "+ CoOrdinateY4 + " L " +" "+ CoOrdinateX1 +" "+ CoOrdinateY1;
			$(".oogive").attr("d",path);
			$(".oogive").show();
			$(".crcl").css({"pointer-events":"none"});
							}else{
								path = '';
								$(".oogive").attr("d",path);
			                    $(".oogive").hide();
							}
							
			}else{
						$(".txt4").css("display","none");
			$(".txt4").attr({"x":Number(0), "y":Number(0)});
				
			CoOrdinateX4 = 0;
			CoOrdinateY4 = 0;
				
				}
			
			
		}
		
		
		/*
		else if(count == 5 ){
			
			if(MakeIt){
			CoOrdinateX5 = Ordnt[0];
			CoOrdinateY5 = Ordnt[1];
			document.querySelector(".txt5").innerHTML = "("+cn1+","+cn2+")";
			$(".txt5").css("display","inline-block");
			$(".txt5").attr({"x":Number(CoOrdinateX5)+10, "y":Number(CoOrdinateY5)+15});
			/////////////////new /////////////////////////////
			forPointColor[4]=className;	
			///////////////////////////////////////////////////
		

			}else{
						$(".txt5").css("display","none");
			$(".txt5").attr({"x":Number(0), "y":Number(0)});
			CoOrdinateX5 = 0;
			CoOrdinateY5 = 0;
				
				}
			
		}
		else if(count == 6 ){
			
						if(MakeIt){
			CoOrdinateX6 = Ordnt[0];
			CoOrdinateY6 = Ordnt[1];
			document.querySelector(".txt6").innerHTML = "("+cn1+","+cn2+")";
			$(".txt6").css("display","inline-block");
			$(".txt6").attr({"x":Number(CoOrdinateX6)+10, "y":Number(CoOrdinateY6)+15});
						
			/////////////////new /////////////////////////////
			forPointColor[5]=className;	
			/////////////////////////////////////////////////

			}else{
						$(".txt6").css("display","none");
			$(".txt6").attr({"x":Number(0), "y":Number(0)});
			
			CoOrdinateX6 = 0;
			CoOrdinateY6 = 0;
				}

			
		}
		else if(count == 7 ){
			
						if(MakeIt){
			CoOrdinateX7 = Ordnt[0];
			CoOrdinateY7 = Ordnt[1];
			document.querySelector(".txt7").innerHTML = "("+cn1+","+cn2+")";
			$(".txt7").css("display","inline-block");
			$(".txt7").attr({"x":Number(CoOrdinateX7)+10, "y":Number(CoOrdinateY7)+15});
			/////////////////new /////////////////////////////
			forPointColor[6]=className;	
			//////////////////////////////////////////////////
		

			}else{
			$(".txt7").css("display","none");
			$(".txt7").attr({"x":Number(0), "y":Number(0)});
				
			CoOrdinateX7 = 0;
			CoOrdinateY7 = 0;
				
				}
			
			
			
			
			//$(".crcl").css("pointer-events","none");
		}*/
		}else{
			 if(countCheck.length!=0){
				 
			 }
		}
			
			
	
			
	});
	
	
	
	
	
}
	
ClickDot();



solution_dot = function(){
		
	
	                    var NS = "http://www.w3.org/2000/svg";
						var svg = document.createElementNS(NS, "svg");
						
						svg.setAttribute("viewBox", "0 0 500 455");
					  
							window.dot1 = document.createElementNS(NS, "circle")
							  $(dot1).attr({
								cx: CoOrdinateX1,
								cy: CoOrdinateY1,
								r: 4.5
							  }).css({
								"fill":"#C00",
								"stroke":"#C00",
								"stroke-width":"4"
								
							  }).addClass("crcle1");
										
							  $(svg).append(dot1);
							  document.querySelector(".svg1").appendChild(svg); 
							  
							  window.dot2 = document.createElementNS(NS, "circle")
							  $(dot2).attr({
								cx: CoOrdinateX2,
								cy: CoOrdinateY2,
								r: 4.5
							  }).css({
								"fill":"#C00",
								"stroke":"#C00",
								"stroke-width":"4"
								
							  }).addClass("crcle2");
										
							  $(svg).append(dot2);
							  document.querySelector(".svg1").appendChild(svg); 
							  
							  
							  
							  window.dot3 = document.createElementNS(NS, "circle")
							  $(dot3).attr({
								cx: CoOrdinateX3,
								cy: CoOrdinateY3,
								r: 4.5
							  }).css({
								"fill":"#C00",
								"stroke":"#C00",
								"stroke-width":"4"
								
							  }).addClass("crcle3");
										
							  $(svg).append(dot3);
								document.querySelector(".svg1").appendChild(svg); 
								
								window.dot4 = document.createElementNS(NS, "circle")
							  $(dot4).attr({
								cx: CoOrdinateX4,
								cy: CoOrdinateY4,
								r: 4.5
							  }).css({
								"fill":"#C00",
								"stroke":"#C00",
								"stroke-width":"4"
								
							  }).addClass("crcle4");
										
							  $(svg).append(dot4);
								document.querySelector(".svg1").appendChild(svg); 
							 /* 
								

								window.dot5 = document.createElementNS(NS, "circle")
							  $(dot5).attr({
								cx: CoOrdinateX5,
								cy: CoOrdinateY5,
								r: 4
							  }).css({
								"fill":"#C00",
								"stroke":"#C00",
								"stroke-width":"4"
								
							  });
										
							  $(svg).append(dot5);
								document.querySelector(".svg1").appendChild(svg); 
								

								window.dot6 = document.createElementNS(NS, "circle")
							  $(dot6).attr({
								cx: CoOrdinateX6,
								cy: CoOrdinateY6,
								r: 4
							  }).css({
								"fill":"#C00",
								"stroke":"#C00",
								"stroke-width":"4"
								
							  });
										
							  $(svg).append(dot6);
								document.querySelector(".svg1").appendChild(svg); 
								
								window.dot7 = document.createElementNS(NS, "circle")
							  $(dot7).attr({
								cx: CoOrdinateX7,
								cy: CoOrdinateY7,
								r: 4
							  }).css({
								"fill":"#C00",
								"stroke":"#C00",
								"stroke-width":"4"
								
							  });
										
							  $(svg).append(dot7);
							  document.querySelector(".svg1").appendChild(svg);*/ 
					
	
	}

	
////////////////////////////////mouse click end////////////////////////////////////////////////


///////////////////////////////////Reset///////////////////////////////////////////////////////

	reset = function(){
		
		count=1;
		CoOrdinateX1=0;
		CoOrdinateX2=0;
		CoOrdinateX3=0;
		CoOrdinateX4=0;
		CoOrdinateY1=0;
		CoOrdinateY2=0;
		CoOrdinateY3=0;
		CoOrdinateY4=0;
		clickedArray = [];
		$("circle").attr({"r":"4.5"})
		countCheck=[1,2,3,4]
		arryName = [];
		arryNameCount = [];
       path = '';
	   $(".oogive").attr("d",path);
	   $(".oogive").hide();
/////////////new ////////////////////////
       forPointColor = [];
       $(".crcl").attr({"fill":"#00F","stroke":"#00F"})
//////////////end new/////////////////////
		$(".txt1").css("display","none");
		$(".crcl").css("pointer-events", "auto");
		$(".done_btn").css({"pointer-events" : "auto"});
		$(".Done_con").hide();
		$(".crcl").hover(function(){
			$(".crcl").css("cursor" , "pointer");
		});
		$(".crcl").css({"pointer-events":"auto"});
		$(".crcl").mouseover(function(){
			$(".ShowCoOrdinates").show();
		});	
		$(".txt1,.txt2,.txt3,.txt4,.txt5,.txt6,.txt7,.crcle1,.crcle2,.crcle3,.crcle4,.crcle5,.crcle11,.crcle21,.crcle31,.crcle41,.crcle51").css("display","none");
		$(".crcl").css("opacity" , "0");
		$(".oogive").css("fill","transparent");
		////alert()
		/*$("svg").each(function() {
							  // //alert("inside")
			$('dot').first().remove();
			document.getElementsByTagName('svg').item(1).remove(); 
		 ////alert()
		});	*/
		
	}
	$(".reset").click(function(){
		reset();
	})
	
	ReveseFun = (CoOrdinateX1,CoOrdinateY1,CoOrdinateX2,CoOrdinateY2,CoOrdinateX3,CoOrdinateY3,CoOrdinateX4,CoOrdinateY4)=>{
		
		
		
		//alert()
		               
							  
							  
							   /*window.dot4 = document.createElementNS(NS, "circle")
							  $(dot4).attr({
								cx: Number(Number(CoOrdinateX4)-Number(20)),
						        cy: Number(CoOrdinateY4)+Number(10),
								r: 4
							  }).css({
								"fill":colour_type3,
						"stroke":colour_type3,
						"stroke-width":"4"
								
							  });
										
							  $(svg).append(dot4);
							  document.querySelector(".svg1").appendChild(svg); */
							  
							  
							
						//document.querySelector(".txt1").innerHTML = "("+cord1+","+cord2+")";
						document.querySelector(".txt1").innerHTML = "A";
						document.querySelector(".txt2").innerHTML = "B";
						document.querySelector(".txt3").innerHTML = "C";
						document.querySelector(".txt4").innerHTML = "D";
						//document.querySelector(".txt4").innerHTML = "D("+cord7+","+cord8+")";
						
						$(".txt1,.txt2,.txt3,.txt4").css("display","inline-block");
						
						
			            $(".txt1").attr({"x":Number(CoOrdinateX1)+10, "y":Number(CoOrdinateY1)+15});
						
						$(".txt2").attr({"x":Number(CoOrdinateX2)+10, "y":Number(CoOrdinateY2)+15});
						$(".txt3").attr({"x":Number(CoOrdinateX3)+10, "y":Number(CoOrdinateY3)+15});
						
						
						$(".txt4").attr({"x":Number(CoOrdinateX4)+10, "y":Number(CoOrdinateY4)+15});
					
						$(".crcl").mouseover(function(){
							$(".ShowCoOrdinates").hide();
						});	
					
						$(".crcl").css("pointer-events" , "none");
						if(CoOrdinateX4!==0){
				            path = "M" +" "+ CoOrdinateX1 +" "+ CoOrdinateY1 + " L " +" "+ CoOrdinateX2 +" "+ CoOrdinateY2 + " L " +" "+ CoOrdinateX3 +" "+ CoOrdinateY3 + " L " +" "+ CoOrdinateX4 +" "+ CoOrdinateY4 + " L " +" "+ CoOrdinateX1 +" "+ CoOrdinateY1;
			$(".oogive").attr("d",path);
			$(".oogive").show();
							}else{
								path = '';
								$(".oogive").attr("d",path);
			                    $(".oogive").hide();
							}
						
						
	}
/////////////////////////////////Reset end/////////////////////////////////////////////////////////////
	
});