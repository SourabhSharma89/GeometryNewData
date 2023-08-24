//START:Changed from Bangalore Team
var CurrQuestionIndex = 0;
//END:Changed from Bangalore Team

$(document).ready(function(){
						   
						   
	function isMobileDevice() {
		return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
	};
		
	checkMobile=isMobileDevice();		  
						  //////////////NFR///////////////////
						    $(document).keydown(function(objEvent) {
												 
						  if(DoneClicked == 1) {
							 $(function() {
									// gather all inputs of selected types
									var inputs = $('.tab,.done1,.calc'), inputTo;
									// bind on keydown
									inputs.on('keydown', function(e) {
										// if we pressed the tab
										if (e.keyCode == 9 || e.which == 9) {
											// prevent default tab action
											e.preventDefault();
											if (e.shiftKey) {
												// get previous input based on the current input
												inputTo = inputs.get(inputs.index(this) - 1);
											} else {
												// get next input based on the current input
												inputTo = inputs.get(inputs.index(this) + 1);
											}
											// move focus to inputTo, otherwise focus first input
											if (inputTo) {
												inputTo.focus();
											} else {
												inputs[0].focus();
											}
										}
									});
								});
						  }
						  else if(DoneClicked == 0)
						  {
							  
    
						  }
						  })
						   var DoneClicked = 0
						   $(".section1").css('display',"none");
						   $(".footer").css("pointer-events","none");
						   $(".FtrTab_Td3").css("pointer-events","auto");
						   $(".newSet,.Procedure").hide();
						   $(".solution").css('visibility','hidden');
						   window.option1 = 0;
						   window.FromInnerText = "";
						   var attempted_num = 1;
						   var next_val = 0;
						   window.QuizFlag1 = false;
							window.QuizFlag2 = false;
							window.QuizFlag3 = false;
							window.DiscType1 = "";
							window.DiscType2 = "";
							window.DiscType3 = "";
							window.FinalDtQuiz = "";
							 window.finalAns = 3;
						  window.finalAnsLength = 3;
						  window.clickedArray = [];
						   //////////////For NFR closed//////////
						  
						    var sb=-10000;
							var autorunVar = 0
							var animCount=0;
                       $(".disable_div").hide();
					    $(".howTo_div").css("right",25+"px" );
						$(".howTo_div").css("top",3+"%");	
						if(checkMobile)
						{
							var port = window.matchMedia("(orientation:portrait)")	
							if(port.matches){
							 $(".howTo_div").css("right",50+"%" );
							 $(".howTo_div").css("top",4+"%");	
							 $(".howTo_div").css("width",0.78*($(".solutionMainSteps").width()-$(".Graph_main_div").width()));
							 $(".remark").css("left","35%");
							 $(".Step1_5").css({"margin-left":"2%","width":"98%"});
							 $(".prompt_New,.remark,.Wrng,.Wrt").css("font-size","80%");
							}else{
								$(".howTo_div").css("top",8+"%");
								$(".prompt_New").css("left","20%");
								$(".prompt_New,.remark,.Wrng,.Wrt").css("font-size","80%");
							}
						}
                            
 						    $(".autorun").css('opacity','.4');
						    $(".autorun").attr('disable','true');
						    $(".autorun").css('cursor','default');
							$(".promptComma,.prompt,.blankMessage,.ReducePromt").hide();
							
 							$(".solutionMainSteps,.solutionText").hide();	
							$(".incorrect,.correct").show();
							 
				///////////////////////////////////For Print///////////////////////////////////
				
				 myFunction= function() {
					window.print();
				};
				
				//////////////////////////////For focus on text////////////////////////////////
				
				 
				 $(".newSet").click(function(){
											 
					sb=-10000;///set this as initial value..
					 $(".howTo_div").css("right",25+"px" );
					  animCount=1
						if(animCount==1){	
						  $(".Graph_main_div").removeClass('graph_anim');
						  $(".Graph_main_div").removeClass('extraclass');
						  animCount=0
						}
					
 					$(".solutionMainSteps,.solutionText,.howTo_div").hide();
					
					$(".incorrect,.correct").hide();
 					$(".blankMessage_New,.ReducePromt").hide();
 					$(".prompt_New,.promptComma").hide();
			        $(".autorun").css('opacity','.4');
					$(".autorun").css('cursor','default');
					$(".autorun").prop('disabled',false);
					
				});


/////////////////////////////////////////////////////////Buttons/////////////////////////////////////////////////////////////
				
				
			  $(".done1").click(function(){ 						 
				$(".Procedure_banner").hide();
				$(".done1").css({'color':'#660066','box-shadow':'0px 0px 0px #ff0000, 0px 1px 7px #ff0000,  0px 1px 0px #ff0000,  0px 0px 3px #ff0000'});
				$(".newSet,.solution,.Procedure").css({'color':'white','box-shadow':'none'});
				$(".Procedure").css({'color':'black','box-shadow':'none'});
				$(".input1").focus();
														
			});
						 
			 $(".newSet").click(function(){
										 console.log("TechAdd");
										 $(".HowGridPloating").show();
										 $('input[name="selector"]').prop('checked',false);	
										 if(!checkMobile){					   
	$(".howTo_div").show();
	}
				check_click=0;
				howVar = 1;
				var mql4 = window.matchMedia("(orientation:portrait)")
				if(mql4.matches){ 
				window.check_click=1;				 
				window.sol_click=0;		
				$(".Enter_ans").css("color","#C00");
					$(".AllImages,.image_Arrow").show();
					 $(".howTo_div").css("right",50+"%" );
			   }
				
				$(".autorun").css('disable','true');				 
				$(".Procedure_banner").hide();				   
				$(".newSet").css('color','#ffff00');
				$(".newSet").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
				$(".solution,.Procedure").css({'color':'white','box-shadow':'none'});
				$(".done1").css({'color':'black','box-shadow':'none'});
				$(".Procedure").css({'color':'black','box-shadow':'none'});
				$(".input1,.input2,.input").val('');
				$(".solutionContainer,.solutionMainSteps,.middle1,.Graph_main_div").show();
				$(".Step1,.solutionText").hide();
				//$(".howTo_div").show();
				$(".Wrt,.Wrng").hide();
				////////// for NFR//////
									DoneClicked = 0	
									CurrQuestionIndex=0
									next_val++;
									nextQuesGeneration();
									attempted_num++;
									$(".input1,.input2,.input3,.input4").val('')
									$(".done1").css("pointer-events","auto")
									$(".input1,.input2,.input3,.input4").css("pointer-events","auto")
									$(".calc").css("pointer-events","auto");
									$(".Procedure_banner,.prompt_New,.solutionMain").hide();
									/*$(".newSet,.solution").hide();*/
									$(".input1,.input2,.input3,.input4").attr("disabled",false)
									
									$(".respond").html("");
									$(".Wrng1,.Wrt1,.Wrng2,.Wrt2,.Wrng3,.Wrt3,.Wrng4,.Wrt4").hide();
									////////// for NFR End//////
										$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});                           
									////////// for NFR End ////// 
									
									
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									////////// for NFR //////
				reset();
				
					
			});
			 
			$(".solution").click(function(){ 	
				
				var mql5 = window.matchMedia("(orientation:portrait)")
				if(mql5.matches){
					$(".Enter_ans").css("color","#000");
					sol_click=1;
					$(".AllImages,.image_Arrow").hide();
				}
				
				$(".input1").focus();
				$(".Procedure_banner").hide();
				$(".solution").css('color','#ffff00');
				$(".solution").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
				$(".newSet,.Procedure").css({'color':'white','box-shadow':'none'});
				$(".done1").css({'color':'black','box-shadow':'none'});
				$(".Procedure").css({'color':'black','box-shadow':'none'});
				$(".HowGridPloating").hide();
				
				
				
			});
							
			 $(".Procedure").click(function(){ 
											
				$(".input1").focus();
				 autorunVar = 1; 
				 sb=-1;
										 
				$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt").hide();
				$(".solutionMainSteps,.solutionText").hide();
				$(".autorun").css('opacity','.4');
				$(".autorun").css('disable','true');
				$(".autorun").css('cursor','default');
				$(".autorun").attr('disabled',true);
				$(".Procedure").css('color','red');
				$(".Procedure").css({'color':'red','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
				$(".newSet,.solution").css({'color':'white','box-shadow':'none'});
				$(".done1").css({'color':'black','box-shadow':'none'});
				$(".Procedure_banner").fadeIn();	
			
		});
							  
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

		   $(".Cross_PB").click(function(){
										 
				$(".Procedure_banner").hide();	
				$(".input1").focus();
				
			});	
			 
		   $(".Cross_BM").click(function(){
										 
				$(".blankMessage").hide();
				$(".promptComma").hide();
				$(".prompt").hide();
				$(".ReducePromt").hide();
				$(".input1").focus();
				
			});	

/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
	            //////////alert(Math.round(Math.random()*(4-2))+2)
				randRange = function (min, max) {
					var randomNum = Number(Math.round(Math.random()*(max-min))+min);
					return randomNum;
				 }	
				area=function(polygon) {
				var total = 0;
				for (var i = 0; i < polygon.length; i++) {
					var addX = polygon[i][0];
					var addY = polygon[i === polygon.length - 1 ? 0 : i + 1][1];
					var subX = polygon[i === polygon.length - 1 ? 0 : i + 1][0];
					var subY = polygon[i][1];
					total += (addX * addY * 0.5) - (subX * subY * 0.5);
				}
				return Math.abs(total);
			  }
					var range_startX1 = 1000;
					var range_finX1 = 9999;
					var range_startX2 = 1000000;
					var range_finX2 = 9999999;
					var range_startX3 = 100000;
					var range_finX3 = 999999;
					var range_startX4 = 1000;
					var range_finX4 = 9999;
					var array_Range = 600;
					
					///////////////////////////////////////////////////
					
					var next_val = 0;
				
					var array_Range = 100;
					
					var R1_Arr = new Array();
					var R2_Arr = new Array();
					var R3_Arr = new Array();
					var R4_Arr = new Array();
					
					var R5_Arr = new Array();
					var R11_Arr = new Array();
					var R1_indexArr = new Array();
					
					Q1_Arr = new Array();
					Q2_Arr = new Array();
					Q3_Arr = new Array();
					Q4_Arr = new Array();	
					Q5_Arr = new Array();	
					Q6_Arr = new Array();
					Q7_Arr = new Array();	
				
					var temp_str;
					var ta1;
					var ta2;
					var ta3;
					var ta4;
					var ta5;
					var ta6;
					var ta7;
					var ta8;
					var q1_txt;
					var counter = 0;
					var wt_id1;
					
					var abc = 0;
					var ActualArr = []
				
				quesGeneration = function(){
					
	/*for (var i = 1; i<=Number(40); i++) {

		num1 = randRange(-7, 7);   //x1
		num2 = randRange(-7, 7);   //y1
		num3 = randRange(-7, 7);   //x2
		num4 = num2;   //y2
		num5 = num3;   //x3
		num6 = randRange(-7, 7);   //y3
		num7 = num1;   //x4
		num8 = num6;   //y4
		yTest = randRange(1, 3);
		
		
		OptionShuffle = ["Triangle","Square","Rectangle"]
		OptionShuffle = shuffle(OptionShuffle);
		ArrNewTest = [`${num1}1.1${num2}`,`${num3}1.1${num4}`,`${num5}1.1${num6}`]
		ArrNewTest = [...new Set(ArrNewTest)]
		var polygons = [[num1, num2], [num3, num4], [num5, num6], [num7, num8]];
		AreaRequired = area(polygons)
		Length1 = pround(Math.sqrt((num3-num1)**2+(num4-num2)**2),-2);
		Length2 = pround(Math.sqrt((num5-num3)**2+(num6-num4)**2),-2);
		Length3 = pround(Math.sqrt((num7-num5)**2+(num8-num6)**2),-2);
		Length4 = pround(Math.sqrt((num7-num1)**2+(num8-num2)**2),-2);
		var LengthCal = [Length1,Length2,Length3,Length4]
		LengthCal = [...new Set(LengthCal)]
		Slope1 = pround(Number(Number(Number(num4)-Number(num2))/Number(Number(num3)-Number(num1))),-2)
		Slope2 = pround(Number(Number(Number(num6)-Number(num4))/Number(Number(num5)-Number(num3))),-2)
		
		Product = Slope1*Slope2
		Length11 = Length1/2;
		
		SecondCordinateX = num3;
		
		SecondCordinateY = (num4+num6)/2;
		
		
		
		
		ThirdCordinateX = (num5+num7)/2;
		ThirdCordinateY = num6
		
		
if(AreaRequired>30 && LengthCal.length==1 && Length11%2==0){
			Q1_Arr.push(num1+"@"+num2+"@"+SecondCordinateX+"@"+SecondCordinateY+"@"+ThirdCordinateX+"@"+ThirdCordinateY+"@"+num1+"@"+num2+"@"+num3+"@"+num4+"@"+num5+"@"+num6+"@"+num7+"@"+num8+"@"+AreaRequired+"@"+OptionShuffle[0]+"@"+OptionShuffle[1]+"@"+OptionShuffle[2]+"@"+"V"+i);
		}
		else{
			i--;
		}
	}
	
	Q2_Arr = [...new Set(Q1_Arr)]
	////////alert(Q2_Arr.length)
	console.log(Q2_Arr+"  "+Q2_Arr.length)*/
	/*ArrNewTest.length==3 && num1!=0 && num3!=0 && num5!=0 && num2!=0 && num4!=0 && num6!=0 && Product==-1 && !String(AreaRequired).includes(".")*/
	
	Q2_Arr = ["3@-3@-5@1@-1@5@3@-3@-5@-3@-5@5@3@5@64@Triangle@Square@Rectangle@V1",
			  "-2@1@6@-2@2@-7@-2@1@6@1@6@-7@-2@-7@64@Triangle@Square@Rectangle@V2",
			  "-5@-5@7@1@1@7@-5@-5@7@-5@7@7@-5@7@144@Square@Triangle@Rectangle@V3",
			  "-6@6@6@2@0@-6@-6@6@6@6@6@-6@-6@-6@144@Rectangle@Square@Triangle@V4",
			  "-1@1@7@-3@3@-7@-1@1@7@1@7@-7@-1@-7@64@Triangle@Square@Rectangle@V5",
			  "-3@-6@5@-2@3@2@-3@-6@5@-6@5@2@-3@2@64@Square@Triangle@Rectangle@V6",
			  "5@-5@-7@1@0@7@5@-5@-7@-5@-7@7@5@7@144@Triangle@Square@Rectangle@V7",
			  "7@7@-1@3@5@-1@7@7@-1@7@-1@-1@7@-1@64@Rectangle@Triangle@Square@V8",
			  "-4@-4@4@0@0@4@-4@-4@4@-4@4@4@-4@4@64@Triangle@Square@Rectangle@V9",
			  "-7@4@1@2@-5@-4@-7@4@1@4@1@-4@-7@-4@64@Rectangle@Square@Triangle@V10",
			  "-6@4@2@-2@-4@-4@-6@4@2@4@2@-4@-6@-4@64@Triangle@Square@Rectangle@V11",
			  "3@-3@-5@1@-1@5@3@-3@-5@-3@-5@5@3@5@64@Triangle@Square@Rectangle@V12",
			  "6@2@-2@-2@2@-6@6@2@-2@2@-2@-6@6@-6@64@Square@Triangle@Rectangle@V13",
			  "1@-5@-7@-1@-3@3@1@-5@-7@-5@-7@3@1@3@64@Triangle@Square@Rectangle@V14",
			  "7@-5@-5@1@1@7@7@-5@-5@-5@-5@7@7@7@144@Triangle@Square@Rectangle@V15",
			  "6@-5@-2@-1@2@3@6@-5@-2@-5@-2@3@6@3@64@Rectangle@Square@Triangle@V16",
			  "-3@-2@5@2@1@6@-3@-2@5@-2@5@6@-3@6@64@Triangle@Square@Rectangle@V17",
			  "-6@-2@2@2@-2@6@-6@-2@2@-2@2@6@-6@6@64@Square@Triangle@Rectangle@V18",
			  "-3@3@5@-1@1@-5@-3@3@5@3@5@-5@-3@-5@64@Rectangle@Triangle@Square@V19",
			  "-3@4@5@0@1@-4@-3@4@5@4@5@-4@-3@-4@64@Square@Triangle@Rectangle@V20"
			  /*/*"-3@6@5@2@1@-2@-3@6@5@6@5@-2@-3@-2@64@Triangle@Square@Rectangle@V21",
			  "3@-6@-5@-2@-1@2@3@-6@-5@-6@-5@2@3@2@64@Triangle@Rectangle@Square@V22",
			  "5@-5@-3@-1@1@3@5@-5@-3@-5@-3@3@5@3@64@Square@Rectangle@Triangle@V23",
			  "4@3@-4@-1@0@-5@4@3@-4@3@-4@-5@4@-5@64@Square@Triangle@Rectangle@V24",
			  "-4@-5@4@-1@0@3@-4@-5@4@-5@4@3@-4@3@64@Triangle@Rectangle@Square@V25",
			  "5@4@-3@0@1@-4@5@4@-3@4@-3@-4@5@-4@64@Rectangle@Triangle@Square@V26",
			  "7@-5@-5@1@1@7@7@-5@-5@-5@-5@7@7@7@144@Rectangle@Triangle@Square@V27",
			  "2@-3@-6@1@-2@5@2@-3@-6@-3@-6@5@2@5@64@Triangle@Rectangle@Square@V28",
			  "7@4@-1@0@3@-4@7@4@-1@4@-1@-4@7@-4@64@Triangle@Rectangle@Square@V29",
			  "2@-5@-6@-1@-2@3@2@-5@-6@-5@-6@3@2@3@64@Rectangle@Square@Triangle@V30",
			  "5@6@-7@0@-1@-6@5@6@-7@6@-7@-6@5@-6@144@Triangle@Square@Rectangle@V31","-2@-1@6@3@2@7@-2@-1@6@-1@6@7@-2@7@64@Rectangle@Triangle@Square@V32","-6@-1@2@3@-2@7@-6@-1@2@-1@2@7@-6@7@64@Triangle@Square@Rectangle@V33","-5@4@3@0@-1@-4@-5@4@3@4@3@-4@-5@-4@64@Square@Rectangle@Triangle@V34","-6@-5@6@1@0@7@-6@-5@6@-5@6@7@-6@7@144@Square@Triangle@Rectangle@V35","6@-4@-2@0@2@4@6@-4@-2@-4@-2@4@6@4@64@Square@Triangle@Rectangle@V36","-7@-4@1@0@-3@4@-7@-4@1@-4@1@4@-7@4@64@Triangle@Rectangle@Square@V37","1@-1@-7@3@-3@7@1@-1@-7@-1@-7@7@1@7@64@Triangle@Square@Rectangle@V38","-6@-6@2@-2@-2@2@-6@-6@2@-6@2@2@-6@2@64@Rectangle@Triangle@Square@V39","-3@-4@5@0@1@4@-3@-4@5@-4@5@4@-3@4@64@Rectangle@Triangle@Square@V40"*/]
				
		};
					
			/*/////////////////////////R1_Arr////////////////////////////////*/
		
			/*/////////////////////////R1_Arr////////////////////////////////*/
		
				/*/////////////////////////R1_Arr////////////////////////////////*/

			var loadingString = [];
				window.loadingValues = function () {
					//START:Changed from Bangalore Team 
					// loadingValues.fired = true;
					//END:Changed from Bangalore Team 
					// next_val = 25;
					loadingString = [next_val];
					//////////////////alert(next_val+"  == next_val")
					return loadingString;
				}
				var dataURL;	
				var GCFnum;
				
				
		nextQuesGeneration = function(){
				  	
			if (CurrQuestionIndex != 0) {
				next_val = Number(CurrQuestionIndex);
			} else {
				next_val = next_val;
			}
			    $('input[name="selector"]').prop('checked',false);
				$(".solutionContainer,.solutionMainSteps,.middle1,.Graph_main_div").show();
				$(".Step1,.solutionText,.tick").hide();
				$(".Step1_2,.Step1_3,.Step1_4,.Step1_5,.Step1_6,.Step1_7").hide();
				howVar = 1;
				abc = 0;
				//next_val++;
				if (next_val>=((Q2_Arr.length)-1)) {
					next_val = 0;
				}
				temp1 = String(Q2_Arr[next_val]).split("@");
				clickedArray = [];
				var [val1,val2,val3,val4,val5,val6,Sval1,Sval2,Sval3,Sval4,Sval5,Sval6,Sval7,Sval8,Tota,OptionVal1,OptionVal2,OptionVal3,Version]=[temp1[0],temp1[1],temp1[2],temp1[3],temp1[4],temp1[5],temp1[6],temp1[7],temp1[8],temp1[9],temp1[10],temp1[11],temp1[12],temp1[13],temp1[14],temp1[15],temp1[16],temp1[17],temp1[18]];
				$(".val1").html(ConvertSmalltoBig(val1));$(".val2").html(ConvertSmalltoBig(val2));
				$(".val1_new").html(ConvertSmalltoBig(val2));$(".val2_new").html(ConvertSmalltoBig(Number(-1)*Number(val1)));
				$(".val3").html(ConvertSmalltoBig(val3));$(".val4").html(ConvertSmalltoBig(val4));
				$(".val3_new").html(ConvertSmalltoBig(val4));$(".val4_new").html(ConvertSmalltoBig(Number(-1)*Number(val3)));
				$(".val5").html(ConvertSmalltoBig(val5));$(".val6").html(ConvertSmalltoBig(val6));
				$(".val5_new").html(ConvertSmalltoBig(val6));$(".val6_new").html(ConvertSmalltoBig(Number(-1)*Number(val5)));
				$(".Sval1").html(ConvertSmalltoBig(Sval1));$(".Sval2").html(ConvertSmalltoBig(Sval2));
				$(".Sval3").html(ConvertSmalltoBig(Sval3));$(".Sval4").html(ConvertSmalltoBig(Sval4));
				$(".Sval5").html(ConvertSmalltoBig(Sval5));$(".Sval6").html(ConvertSmalltoBig(Sval6));
				$(".Sval7").html(ConvertSmalltoBig(Sval7));$(".Sval8").html(ConvertSmalltoBig(Sval8));
				$(".Opt1").html(OptionVal1);$(".Opt2").html(OptionVal2);$(".Opt3").html(OptionVal3);
				
				XcordinateNew1 = xCordinateFun(val2);YcordinateNew1 = yCordinateFun(Number(-1)*Number(val1));
				XcordinateNew2 = xCordinateFun(val4);YcordinateNew2 = yCordinateFun(Number(-1)*Number(val3));
				XcordinateNew3 = xCordinateFun(val6);YcordinateNew3 = yCordinateFun(Number(-1)*Number(val5));
				
				num11 = xCordinateFun((val1));num21 = yCordinateFun((val2));num31 = xCordinateFun((val3));num41 = yCordinateFun((val4));
		        num51 = xCordinateFun((val5));num61 = yCordinateFun((val6));
				Cordinate1 = `(${val1},${val2})`;
				Cordinate2 = `(${val3},${val4})`;
				Cordinate3 = `(${val5},${val6})`;
				/*num71 = xCordinateFun((val7));num81 = yCordinateFun((val8));*/
		
		        length1 = pround(Math.sqrt(Number(Number(val6)-Number(val2))**2+Number(Number(val5)-Number(val1))**2),-2)
				length2 = pround(Math.sqrt(Number(Number(val3)-Number(val1))**2+Number(Number(val4)-Number(val2))**2),-2)
				
				$(".length1").html(length1)
				$(".length2").html(length2)
				
				polygons = [[val1, val2], [val3, val4], [val5, val6]];
				AreaRequired = area(polygons)
		        Ans1 = AreaRequired;
				////alert(Ans1)
				
				$(".Ans1").html(Ans1)
				Snum11 = xCordinateFun((Sval1));Snum21 = yCordinateFun((Sval2));Snum31 = xCordinateFun((Sval3));Snum41 = yCordinateFun((Sval4));
		        Snum51 = xCordinateFun((Sval5));Snum61 = yCordinateFun((Sval6)); Snum71 = xCordinateFun((Sval7));Snum81 = yCordinateFun((Sval8));
				
				Side1 = Math.abs(Number(Sval1)-Number(Sval3));
				Side1Half = Side1/2
				$(".Side1").html(Side1)
				$(".Side1Half").html(Side1Half)
				
				if(temp1[18]=="V1"){
					Side1Half1 = Side1/2
					Side1Half2 = Side1/2
					Side1Half3 = Side1/2
					Side1Half4 = Side1/2
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}else if(temp1[18]=="V2"){
					Side1Half1 = Side1/2
					Side1Half2 = 3
					Side1Half3 = Side1/2
					Side1Half4 = 5
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}else if(temp1[18]=="V3"){
					Side1Half1 = Side1/2
					Side1Half2 = Side1/2
					Side1Half3 = Side1/2
					Side1Half4 = Side1/2
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}else if(temp1[18]=="V4"){
					Side1Half1 = Side1/2
					Side1Half2 = 4
					Side1Half3 = 6
					Side1Half4 = 8
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}else if(temp1[18]=="V5"){
					Side1Half1 = Side1/2
					Side1Half2 = Side1/2
					Side1Half3 = Side1/2
					Side1Half4 = Side1/2
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}else if(temp1[18]=="V6"){
					Side1Half1 = 6
					Side1Half2 = Side1/2
					Side1Half3 = Side1/2
					Side1Half4 = 2
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}else if(temp1[18]=="V7"){
					Side1Half1 = 5
					Side1Half2 = Side1/2
					Side1Half3 = Side1/2
					Side1Half4 = 7
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}else if(temp1[18]=="V8"){
					Side1Half1 = 2
					Side1Half2 = Side1/2
					Side1Half3 = Side1/2
					Side1Half4 = 6
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}else if(temp1[18]=="V9"){
					Side1Half1 = Side1/2
					Side1Half2 = Side1/2
					Side1Half3 = Side1/2
					Side1Half4 = Side1/2
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}else if(temp1[18]=="V10"){
					Side1Half1 = 2
					Side1Half2 = 2
					Side1Half3 = 6
					Side1Half4 = 6
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}else if(temp1[18]=="V11"){
					Side1Half1 = 2
					Side1Half2 = 6
					Side1Half3 = 6
					Side1Half4 = 2
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}else if(temp1[18]=="V12"){
					Side1Half1 = Side1/2
					Side1Half2 = Side1/2
					Side1Half3 = Side1/2
					Side1Half4 = Side1/2
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}else {
					Side1Half1 = Side1/2
					Side1Half2 = Side1/2
					Side1Half3 = Side1/2
					Side1Half4 = Side1/2
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}
				
				$(".cal1Main").html(`${Side1**2}`)
				$(".cal2Main").html(`${0.5*Side1*Side1Half1}`)
				$(".cal3Main").html(`${0.5*Side1*Side1Half2}`)
				$(".cal4Main").html(`${0.5*Side1Half3*Side1Half4}`)
				
				
				
		}
			////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
			quesGeneration();
			next_val=randRange(0,(Q2_Arr.length)-1)
			nextQuesGeneration();  ///// Calling question..
			
			$(".crcl").click(function(){
									  //////alert()
					let First1=$(this).attr("name");
					//////alert(First1)
					checkBox(First1);
					
		});
		
		checkBox = function(num1){
			////alert(num1)
			
			const FinalAnsLength=finalAnsLength;
			var ArrNew=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122","123","124","125","126","127","128","129","130","131","132","133","134","135","136","137","138","139","140","141","142","143","144","145","146","147","148","149","150","151","152","153","154","155","156","157","158","159","160","161","162","163","164","165","166","167","168","169","170","171","172","173","174","175","176","177","178","179","180","181","182","183","184","185","186","187","188","189","190","191","192","193","194","195","196","197","198","199","200","201","202","203","204","205","206","207","208","209","210","211","212","213","214","215","216","217","218","219","220","221","222","223","224","225","226","227","228","229","230","231","232","233","234","235","236","237","238","239","240","241","242","243","244","245","246","247","248","249","250","251","252","253","254","255","256","257","258","259","260","261","262","263","264","265","266","267","268","269","270","271","272","273","274","275","276","277","278","279","280","281","282","283","284","285","286","287","288","289","290","291","292","293","294","295","296","297","298","299","300"];
			var ArrNew1=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122","123","124","125","126","127","128","129","130","131","132","133","134","135","136","137","138","139","140","141","142","143","144","145","146","147","148","149","150","151","152","153","154","155","156","157","158","159","160","161","162","163","164","165","166","167","168","169","170","171","172","173","174","175","176","177","178","179","180","181","182","183","184","185","186","187","188","189","190","191","192","193","194","195","196","197","198","199","200","201","202","203","204","205","206","207","208","209","210","211","212","213","214","215","216","217","218","219","220","221","222","223","224","225","226","227","228","229","230","231","232","233","234","235","236","237","238","239","240","241","242","243","244","245","246","247","248","249","250","251","252","253","254","255","256","257","258","259","260","261","262","263","264","265","266","267","268","269","270","271","272","273","274","275","276","277","278","279","280","281","282","283","284","285","286","287","288","289","290","291","292","293","294","295","296","297","298","299","300"];
			
			var ClickedNT=[];
			var indexis = clickedArray.indexOf(num1)
			////alert(clickedArray)
			if(indexis!=-1){
			clickedArray.splice(indexis,1)
			
            }else{
			clickedArray.push(num1);
			
			clickedArray.sort(function(a, b){return a - b});
			if(clickedArray.length==FinalAnsLength){
			   for(x of clickedArray){ClickedNT.push(x);}
			 ArrNew=ArrNew.filter(p => !ClickedNT.includes(p));
			 
			 for(f of ArrNew){
			 $(".crcl"+f).css("pointer-events","none")
			 }
			 
			 console.log(ArrNew)
			 
			}
			
            }
			if (clickedArray.length<FinalAnsLength){
				for(f of ArrNew1){
			   $(".crcl"+f).css("pointer-events","auto")
				}
			}
			}
			
			firstRadioReturn = ()=>{
				option1 = 1
				FromInnerText = document.getElementById("myBtn1").innerText
			}
			secondRadioReturn = ()=>{
				option1 = 2
				FromInnerText = document.getElementById("myBtn2").innerText
			}
			thirdRadioReturn = ()=>{
				option1 = 3
				FromInnerText = document.getElementById("myBtn3").innerText
			}
			
				doneButtonMain = function(){
					
					 $(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt,.blankMessage_New,.blankMessage_New1,.port,.land,.prompt_New,.blankMessage_New").hide();
					 
					 var k1_text =  document.getElementById("inputText").value;
					 var k2_text =  document.getElementById("inputText1").value;
					 var k3_text =  document.getElementById("inputText2").value;
					// var k4_text =  document.getElementById("inputText3").value;
					// var k5_text =  document.getElementById("inputText4").value;
					
					var score1,score2,score3,finalScore;

					var ent_ans1 = trimzero(k1_text) ;
					var ent_ans2 = trimzero(k2_text) ;
					var ent_ans3 = trimzero(k3_text) ;
				
				
					if( ent_ans1 == 0 )
					{
						score1 = 1
						
						
					}
					else
					{
						score1 = 0
						
						
					}
				  	if( ent_ans2 == Number(temp1[0])*Number(temp1[2])  )
					{
						score2 = 1
						//$(".Wrt6").show();
						//$(".Wrng6").hide();
						
					}
					else
					{
						score2 = 0
						//$(".Wrt6").hide();
						//$(".Wrng6").show();
					}

					if( ent_ans3 == Number(temp1[0])*Number(temp1[3])  )
					{
						score3 = 1
						//$(".Wrt7").show();
						//$(".Wrng7").hide();
					}
					else
					{
						score3 = 0
						//$(".Wrt7").hide();
						//$(".Wrng7").show();
					}
					
					
					var flag=false;
					var eqn=temp1[0]+"x";
					
					var x1 = toGetXAxis(CoOrdinateX1)
					var y1 =toGetYAxis(CoOrdinateY1)
					
					var x2 = toGetXAxis(CoOrdinateX2)
					var y2 =toGetYAxis(CoOrdinateY2)
							
					var x3 = toGetXAxis(CoOrdinateX3)
					var y3 =toGetYAxis(CoOrdinateY3)
					
				
					var newArr=[CoOrdinateX1+"1.1"+CoOrdinateY1,CoOrdinateX2+"1.1"+CoOrdinateY2,CoOrdinateX3+"1.1"+CoOrdinateY3]
					
					

					if( (evaluate(eqn,"x",x1) == y1) && (evaluate(eqn,"x",x2) == y2)&& (evaluate(eqn,"x",x3) == y3)){
					
				      flag=true;
					  score4=1;
					 
						}
					else{
						 flag=false;
						 score4=0;
						
						}
					
					 
					
				if(score1==1){
					$(".Wrt5").show();
					$(".Wrng5").hide();
				}else{
					$(".Wrt5").hide();
					$(".Wrng5").show();
				}
				
				if(score2==1){
					$(".Wrt6").show();
					$(".Wrng6").hide();
				}else{
					$(".Wrt6").hide();
					$(".Wrng6").show();
				}
				
				if(score3==1){
					$(".Wrt7").show();
					$(".Wrng7").hide();
				}else{
					$(".Wrt7").hide();
					$(".Wrng7").show();
				}
				
				if(score4==1){
					$(".Wrt2").show();
					$(".Wrng2").hide();
				}else{
					$(".Wrt2").hide();
					$(".Wrng2").show();
				}
					
				finalScore = Number(Number(score1)+Number(score2)+Number(score3)+Number(score4))/4;	
///////////////////////////////////////////////////////////////////////////////////////////////////////////
				     	if(ent_ans1 == "" || ent_ans2 == "" || ent_ans3 == "" ){
							$(".blank").html("Enter the");
							$(".blank1").html("value");
							$(".blankMessage_New").show();
							$(".Wrng,.Wrt").hide();
						}
						else if(CoOrdinateX3 == 0) {
							
						    $(".blank").html("Plot the");
							$(".blank1").html("graph");
							$(".blankMessage_New").show();
							$(".Wrng,.Wrt").hide();
							
						}else if (finalScore==1){
							
							 $(".remark,.correct").show().fadeOut(2000);
						}else if(finalScore>0 && finalScore<1){
							
							$(".remark,.P_correct").show().fadeOut(2000);
							
						}else{	
							   	
						        $(".remark,.incorrect").show().fadeOut(2000);
							
							}
						
					//}
				 }
				//////////////////////////////////// for NFR ////////////////////////////////////	
			//////////////////////////////////// for NFR ////////////////////////////////////	
			
			reviewMode = false;
				var Qid;
				var FBOpt;
				var HOpt;
				var SOpt;
				var VOpt;
				var MOpt;
				var EOpt;
				readQuesID();
				setModes();
				
				//$(".calc").css("pointer-events","auto");
				function setModes() {
					
					
					/*    SOpt = 3; 
						FBOpt = 2; 
						EOpt = 1;*/
					
					    if (SOpt == 0 && FBOpt == 1 && EOpt == 1) {
							$(".solution").css('visibility','hidden');
							$(".calc").css("pointer-events","auto");
						} else if (SOpt == 1 && FBOpt == 2 && EOpt == 1) {
							//$(".newSet").show();
							$(".solution").show();
							$(".solution").css('visibility','visible');
							$(".calc").css("pointer-events","auto");
						} else if (SOpt == 0 && FBOpt == 2 && EOpt == 1) {
							$(".solution").css('visibility','hidden');
						    $(".calc").css("pointer-events","auto");
						} else if (SOpt == 2 && FBOpt == 2 && EOpt == 1) {
							$(".solution").css('visibility','hidden');
							$(".calc").css("pointer-events","auto");
						} else if (SOpt == 1 && FBOpt == 2 && EOpt == 0) {
								$(".solution").show();
								$(".solution").css('visibility','visible');
								$(".newSet").hide();
								$(".calc").css("pointer-events","none");
								$(".done1").css("pointer-events","none")
								$(".input1,.input2,.input3,.input4").css("pointer-events","none")
								$(".input1,.input2,.input3,.input4").attr("disabled",true)
								DoneClicked = 1;
								$(".done1").click(function(){ 
                        $(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
                        });
						        $(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
							 
						}else if (SOpt == 3 && FBOpt == 2 && EOpt == 1) {        
								$(".solution").show();
								$(".solution").css('visibility','visible');
								$(".newSet").show();
								$(".newSet").css('visibility','visible');
								$(".calc").css("pointer-events","auto");
								$(".done1").css("pointer-events","auto");
								$(".input1,.input2,.input3,.input4").css("pointer-events","auto");
							 
						} else {
							/////////////////////rest/////////////////////
							/*$(".solution").hide();
							$(".calc").css("pointer-events","none");
							$(".done1").css("pointer-events","none");
							$(".input1,.input2,.input3,.input4").css("pointer-events","none");*/
						}
				}
				//////////////////
				
				// ML -- Read QuestionID
				////////////////////////alert(Qid.length+"  == Qid.length")
				if (Qid.length<=0) {
					////////////////////////alert(Qid.length+"  == Qid.length")
					setPreviewMode();
				}
				/*$(".QuesDiv").show();
				$(".LoadingDiv").hide();  */                 ///////////It should be closed while uploading the file
				//function setstuValues(ans, evals) {
				window.setstuValues = function setstuValues(ans, evals) {
					//8thMar2018 BLR Comments
					//Start
					
					$("#QuesDiv").show();
        			$("#LoadingDiv").hide();
					
					//End
					
					////////////////////////alert(FBOpt+" == FBOpt")
					$(".remark,.respond").css("display","inline-block")
					if (FBOpt == 2) {
						if (evals == "true") {
							$(".respond").html("Correct");
							$(".respond").css('color','#339966');
							
					     }else if (evals == "partial") {
							 $(".respond").html("Partially Correct");
							$(".respond").css('color','#0000CC');	
							
					     } else {
							 $(".respond").html("Incorrect");
							 $(".respond").css('color','#FF0000');
						 }
					}
					if (FBOpt == 1) {
						$(".respond").html("Responded");
						$(".respond").css('color','#339966');
					}
					preloadans(ans);
				}
				
				 //START:Changed from Bangalore Team 
					window.setQuesIndex = function setQuesIndex(QuesIndex) {
						////////////////////////alert("setQuesIndex:" + QuesIndex)
						CurrQuestionIndex = QuesIndex;
				
						//8thMar2018 BLR Comments
						//Start
						
						 $("#QuesDiv").show();
       					 $("#LoadingDiv").hide();
						
						//End
						
						nextQuesGeneration();
					}
					//END:Changed from Bangalore Team 

				//ExternalInterface.addCallback("setstuValues", this, setstuValues);
				//PageMethods.setstuValues();
				//setstuValues();
				function setPreviewMode() {
					reviewMode = true;
					
					$(".solution").show();
					$(".solution").css('visibility','visible');
					// show solution in review mode
				}
				
				function readQuesID() {
					try {
						var sQid = window.location.href.substr(window.location.href.indexOf("?"));
						var QArr;
						////////////////////////alert(sQid+"  == sQid")
						//var sQid = "http://localhost/EducoTestPrep/HTMLFRQuestionCheck/131-B0132Exp3AL.html?Qid=101$h=0$s=0$f=2"
						QArr = sQid.split("$");
						////Below code are used for opening the file without loader//////
						if (QArr.length < 2) {
									$("#QuesDiv").show();
									$("#LoadingDiv").hide();
						}
						////////////////////////////.. End ..//////////////////////////////

 						Qid = QArr[0].substr(QArr[0].indexOf("Qid")+4);
						FBOpt = QArr[3].substr(QArr[0].indexOf("f")+3);
						HOpt = QArr[1].substr(QArr[0].indexOf("h")+3);
						SOpt = QArr[2].substr(QArr[0].indexOf("s")+3);
						VOpt = QArr[4].substr(QArr[0].indexOf("v")+3);
						MOpt = QArr[5].substr(QArr[0].indexOf("m")+3);
						EOpt = QArr[6].substr(QArr[0].indexOf("e")+3);

					} catch (ex) {
					}
				}
				
				////////////////////// NFR Closed ////////////
				//////////////////////////////////////////////
		
				function preloadans(strfrmServer) {
					
				
					if(strfrmServer != undefined){
						//////////////////////////alert("strfrmServer 2 == "+strfrmServer);
						////////////alert("")
						
						var tx1 = strfrmServer.split('@serverString@');
						
						$(".input1").val(String(tx1[0]))
						$(".input2").val(String(tx1[1]))
						$(".input3").val(String(tx1[2]))
					
   						temp1 = String(tx1[3]).split(",");
						
						score1=String(tx1[4])
						score2=String(tx1[5])
						score3=String(tx1[6])
						
						final_score = String(tx1[7]);
						
						Attempted_score = String(tx1[8]);
						finalScore = String(tx1[9])
						score4=String(tx1[10]);
						$(".input4").val(String(tx1[11]))
						CoOrdinateX1=String(tx1[12]);
						CoOrdinateY1=String(tx1[13]);
						CoOrdinateX2=String(tx1[14]);
						CoOrdinateY2=String(tx1[15]);
						CoOrdinateX3=String(tx1[16]);
						CoOrdinateY3=String(tx1[17]);
						
						score5=String(tx1[18]);
						option1 = String(tx1[19]);
						finalScore1 = String(tx1[20]);
						FromInnerText = String(tx1[21]);
						score6 = String(tx1[22]);
						
						
						
						var NS = "http://www.w3.org/2000/svg";
						var svg = document.createElementNS(NS, "svg");
						    svg.setAttribute("viewBox", "0 0 500 455");
							window.dot1 = document.createElementNS(NS, "circle")
							  $(dot1).attr({
								cx: CoOrdinateX1,
								cy: CoOrdinateY1,
								r: 4
							  }).css({
								"fill":"#C00",
								"stroke":"#C00",
								"stroke-width":"4"
								
							  }).addClass("crcle11");
										
							  $(svg).append(dot1);
							  document.querySelector(".svg1").appendChild(svg); 
							  
							  window.dot2 = document.createElementNS(NS, "circle")
							  $(dot2).attr({
								cx: CoOrdinateX2,
								cy: CoOrdinateY2,
								r: 4
							  }).css({
								"fill":"#C00",
								"stroke":"#C00",
								"stroke-width":"4"
								
							  }).addClass("crcle21");
										
							  $(svg).append(dot2);
							  document.querySelector(".svg1").appendChild(svg); 
							  
							  
							  
							  window.dot3 = document.createElementNS(NS, "circle")
							  $(dot3).attr({
								cx: CoOrdinateX3,
								cy: CoOrdinateY3,
								r: 4
							  }).css({
								"fill":"#C00",
								"stroke":"#C00",
								"stroke-width":"4"
								
							  }).addClass("crcle31");
										
							  $(svg).append(dot3);
								document.querySelector(".svg1").appendChild(svg);
						
						if(option1 == 1){
							//////alert("1")
							$('input[id="f-option"]').prop('checked',true); 
						}else if(option1 == 2){
							//////alert("2")
							$('input[id="s-option"]').prop('checked',true); 
							
						}else if(option1 == 3){
							//////alert("2")
							$('input[id="t-option"]').prop('checked',true); 
							
						}
						
						else{
							$('input[name="selector"]').prop('checked',false); 
						}
				
				ReveseFun(CoOrdinateX1,CoOrdinateY1,CoOrdinateX2,CoOrdinateY2,CoOrdinateX3,CoOrdinateY3)	
						
						////////////alert(DoneArr)
				var [val1,val2,val3,val4,val5,val6,Sval1,Sval2,Sval3,Sval4,Sval5,Sval6,Sval7,Sval8,Tota,OptionVal1,OptionVal2,OptionVal3,Version]=[temp1[0],temp1[1],temp1[2],temp1[3],temp1[4],temp1[5],temp1[6],temp1[7],temp1[8],temp1[9],temp1[10],temp1[11],temp1[12],temp1[13],temp1[14],temp1[15],temp1[16],temp1[17],temp1[18]];
				$(".val1").html(ConvertSmalltoBig(val1));$(".val2").html(ConvertSmalltoBig(val2));
				$(".val1_new").html(ConvertSmalltoBig(val2));$(".val2_new").html(ConvertSmalltoBig(Number(-1)*Number(val1)));
				$(".val3").html(ConvertSmalltoBig(val3));$(".val4").html(ConvertSmalltoBig(val4));
				$(".val3_new").html(ConvertSmalltoBig(val4));$(".val4_new").html(ConvertSmalltoBig(Number(-1)*Number(val3)));
				$(".val5").html(ConvertSmalltoBig(val5));$(".val6").html(ConvertSmalltoBig(val6));
				$(".val5_new").html(ConvertSmalltoBig(val6));$(".val6_new").html(ConvertSmalltoBig(Number(-1)*Number(val5)));
				$(".Sval1").html(ConvertSmalltoBig(Sval1));$(".Sval2").html(ConvertSmalltoBig(Sval2));
				$(".Sval3").html(ConvertSmalltoBig(Sval3));$(".Sval4").html(ConvertSmalltoBig(Sval4));
				$(".Sval5").html(ConvertSmalltoBig(Sval5));$(".Sval6").html(ConvertSmalltoBig(Sval6));
				$(".Sval7").html(ConvertSmalltoBig(Sval7));$(".Sval8").html(ConvertSmalltoBig(Sval8));
				$(".Opt1").html(OptionVal1);$(".Opt2").html(OptionVal2);$(".Opt3").html(OptionVal3);
				
				XcordinateNew1 = xCordinateFun(val2);YcordinateNew1 = yCordinateFun(Number(-1)*Number(val1));
				XcordinateNew2 = xCordinateFun(val4);YcordinateNew2 = yCordinateFun(Number(-1)*Number(val3));
				XcordinateNew3 = xCordinateFun(val6);YcordinateNew3 = yCordinateFun(Number(-1)*Number(val5));
				
				num11 = xCordinateFun((val1));num21 = yCordinateFun((val2));num31 = xCordinateFun((val3));num41 = yCordinateFun((val4));
		        num51 = xCordinateFun((val5));num61 = yCordinateFun((val6));
				Cordinate1 = `(${val1},${val2})`;
				Cordinate2 = `(${val3},${val4})`;
				Cordinate3 = `(${val5},${val6})`;
				/*num71 = xCordinateFun((val7));num81 = yCordinateFun((val8));*/
		
		        length1 = pround(Math.sqrt(Number(Number(val6)-Number(val2))**2+Number(Number(val5)-Number(val1))**2),-2)
				length2 = pround(Math.sqrt(Number(Number(val3)-Number(val1))**2+Number(Number(val4)-Number(val2))**2),-2)
				
				$(".length1").html(length1)
				$(".length2").html(length2)
				
				polygons = [[val1, val2], [val3, val4], [val5, val6]];
				AreaRequired = area(polygons)
		        Ans1 = AreaRequired;
				////alert(Ans1)
				
				$(".Ans1").html(Ans1)
				Snum11 = xCordinateFun((Sval1));Snum21 = yCordinateFun((Sval2));Snum31 = xCordinateFun((Sval3));Snum41 = yCordinateFun((Sval4));
		        Snum51 = xCordinateFun((Sval5));Snum61 = yCordinateFun((Sval6)); Snum71 = xCordinateFun((Sval7));Snum81 = yCordinateFun((Sval8));
				
				Side1 = Math.abs(Number(Sval1)-Number(Sval3));
				Side1Half = Side1/2
				$(".Side1").html(Side1)
				$(".Side1Half").html(Side1Half)
				
				if(temp1[18]=="V1"){
					Side1Half1 = Side1/2
					Side1Half2 = Side1/2
					Side1Half3 = Side1/2
					Side1Half4 = Side1/2
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}else if(temp1[18]=="V2"){
					Side1Half1 = Side1/2
					Side1Half2 = 3
					Side1Half3 = Side1/2
					Side1Half4 = 5
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}else if(temp1[18]=="V3"){
					Side1Half1 = Side1/2
					Side1Half2 = Side1/2
					Side1Half3 = Side1/2
					Side1Half4 = Side1/2
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}else if(temp1[18]=="V4"){
					Side1Half1 = Side1/2
					Side1Half2 = 4
					Side1Half3 = 6
					Side1Half4 = 8
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}else if(temp1[18]=="V5"){
					Side1Half1 = Side1/2
					Side1Half2 = Side1/2
					Side1Half3 = Side1/2
					Side1Half4 = Side1/2
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}else if(temp1[18]=="V6"){
					Side1Half1 = 6
					Side1Half2 = Side1/2
					Side1Half3 = Side1/2
					Side1Half4 = 2
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}else if(temp1[18]=="V7"){
					Side1Half1 = 5
					Side1Half2 = Side1/2
					Side1Half3 = Side1/2
					Side1Half4 = 7
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}else if(temp1[18]=="V8"){
					Side1Half1 = 2
					Side1Half2 = Side1/2
					Side1Half3 = Side1/2
					Side1Half4 = 6
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}else if(temp1[18]=="V9"){
					Side1Half1 = Side1/2
					Side1Half2 = Side1/2
					Side1Half3 = Side1/2
					Side1Half4 = Side1/2
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}else if(temp1[18]=="V10"){
					Side1Half1 = 2
					Side1Half2 = 2
					Side1Half3 = 6
					Side1Half4 = 6
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}else if(temp1[18]=="V11"){
					Side1Half1 = 2
					Side1Half2 = 6
					Side1Half3 = 6
					Side1Half4 = 2
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}else if(temp1[18]=="V12"){
					Side1Half1 = Side1/2
					Side1Half2 = Side1/2
					Side1Half3 = Side1/2
					Side1Half4 = Side1/2
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}else {
					Side1Half1 = Side1/2
					Side1Half2 = Side1/2
					Side1Half3 = Side1/2
					Side1Half4 = Side1/2
					$(".Side1Half1").html(Side1Half1)
					$(".Side1Half2").html(Side1Half2)
					$(".Side1Half3").html(Side1Half3)
					$(".Side1Half4").html(Side1Half4)
				}
				
				$(".cal1Main").html(`${Side1**2}`)
				$(".cal2Main").html(`${0.5*Side1*Side1Half1}`)
				$(".cal3Main").html(`${0.5*Side1*Side1Half2}`)
				$(".cal4Main").html(`${0.5*Side1Half3*Side1Half4}`)
				//////alert(ActualArr)
           
						////////////////////////////.. fr ..//////////////////////////////
		
				if (FBOpt != 1) {
				
				
				if(finalScore1==1){
					$(".Wrt1").show();
					$(".Wrng1").hide();
				}else{
					$(".Wrt1").hide();
					$(".Wrng1").show();
				}
				
				if(score4==1){
					$(".Wrt2").show();
					$(".Wrng2").hide();
				}else{
					$(".Wrt2").hide();
					$(".Wrng2").show();
				}
				
				if(score5==1){
					$(".Wrt3").show();
					$(".Wrng3").hide();
				}else{
					$(".Wrt3").hide();
					$(".Wrng3").show();
				}
				
				if(score6==1){
					$(".Wrt4").show();
					$(".Wrng4").hide();
				}else{
					$(".Wrt4").hide();
					$(".Wrng4").show();
				}
					
					
				}
					
							
	
 						
				
						if (SOpt == 2) {
							
								$(".solution").show();
								$(".calc").css("pointer-events","none");
								$(".done1").css("pointer-events","none")
								$(".input1,.input2,.input3,.input4").css("pointer-events","none")
								$(".input1,.input2,.input3,.input4").attr("disabled",true)
                                DoneClicked = 1;
								$(".done1").click(function(){ 
                        $(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
                        });
						        $(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
						
						if (final_score == 1) {
								$(".solution").css('visibility','hidden');
								$(".newSet").css('visibility','hidden');
								$(".newSet").hide();
						} else {
								$(".solution").css('visibility','visible');
								$(".solution").show();
								$(".newSet").css('visibility','visible');
								$(".newSet").show();
								$(".newSet").click(function(){
								$(".newSet,.solution").css('visibility','hidden');
								});
								}
							}
						}
						
					 
						if (SOpt == 3) {        
								$(".solution").show();
								$(".newSet").show();
								$(".newSet,.solution").css('visibility','visible');
								$(".calc").css("pointer-events","auto");
								$(".done1").css("pointer-events","auto")
								$(".input1,.input2,.input3,.input4").css("pointer-events","auto")
								$(".input1,.input2,.input3,.input4").attr("disabled",false)
                                DoneClicked = 1;
								$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								$(".done1").click(function(){
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								})
							}                  /////////End for educo testing mode////////
				}
				////////////////////////////////////////////////////
				
				
				////////////////////////////////////////////////////
				doneButton = function() {
					var Responseflag="false";
					var FeedbackFlag = "false";
					var FeedbackText = "Incorrect";
					$(".respond").html("")
					
					feed_flag = 0;
					
					//////// For NFR //////////////
					final_score = 0;
					finalScore = 0;
					Attempted_score = attempted_num;
					/////// Closed NFR //////////////
					//////alert(FromInnerText +" option "+option1)
					 $(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt,.blankMessage_New,.blankMessage_New1,.port,.land,.prompt_New,.blankMessage_New").hide();
					 
					 
					// var k5_text =  document.getElementById("inputText4").value;
					
					var score1,score2,score3,score4,score5,finalScore;

					var k1_text = String(document.getElementById("inputText").value).split("–").join("-");
				 	var k2_text = String(document.getElementById("inputText1").value).split("–").join("-");
					var k3_text = String(document.getElementById("inputText2").value).split("–").join("-");
					
					var ent_ans1 = trimzero(k1_text);
					var ent_ans2 = trimzero(k2_text);
					var ent_ans3 = trimzero(k3_text);
					
					Cordinate1 = String(Cordinate1).split("–").join("-");
					Cordinate2 = String(Cordinate2).split("–").join("-");
					Cordinate3 = String(Cordinate3).split("–").join("-");
					
					RemoveBracCordinate1 = removeIstAndLastIndex(Cordinate1);
					PromptTest1 = PrompTForBraces(RemoveBracCordinate1,ent_ans1);
					
					RemoveBracCordinate2 = removeIstAndLastIndex(Cordinate2);
					PromptTest2 = PrompTForBraces(RemoveBracCordinate2,ent_ans2);
					
					RemoveBracCordinate3 = removeIstAndLastIndex(Cordinate3);
					PromptTest3 = PrompTForBraces(RemoveBracCordinate3,ent_ans3);
					
					
					
					
					var flag=false;
					//var eqn=temp1[0]+"*"+"x";
					//////////alert(eqn)
					
					

					$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt").hide();
 					$(".Handcursor").hide();
					ansScore=0;
					$(".correct,.incorrect,.partially,.blankMessage,.prompt_New,.promptComma,.ReducePromt").hide();
					ans_arr=[]
					for(var i=0;i<14;i +=2){
					ans_arr.push(xCordinateFun(temp1[i])+"@"+yCordinateFun(temp1[i+1])+"@"+temp1[i]+"@"+temp1[i+1])
				    }
//////alert(ans_arr);
				for(var i=0;i<ans_arr.length;i++){
//console.log(ans_arr+" case1 "+ans_arr.length);
	//console.log((CoOrdinateX1+" == "+String(ans_arr[i]).split("@")[0])+" && "+(CoOrdinateY1+" == "+String(ans_arr[i]).split("@")[1])+" ("+String(ans_arr[i]).split("@")[2]+", "+String(ans_arr[i]).split("@")[3])
					if((CoOrdinateX1 == String(ans_arr[i]).split("@")[0]) && (CoOrdinateY1 == String(ans_arr[i]).split("@")[1])){
						ans_arr.splice(i,1)
						ansScore++;
						score1=1;
					  //////alert(CoOrdinateX1+" "+CoOrdinateY1+"  "+ansScore);
					  
					   $("."+forPointColor[0]).attr({"fill":"green","stroke":"#00F"})
					  colour_type = "#00F";
						break;
                       
					}else{
						  $("."+forPointColor[0]).attr({"fill":"#C00","stroke":"#00F"})
						  
					  colour_type = "#00F";
					  score1=0;
						
						}
					
				}
				
				
				for(var i=0;i<ans_arr.length;i++){
				//	console.log(ans_arr+" case2 "+ans_arr.length);
//console.log((CoOrdinateX2+" =2= "+String(ans_arr[i]).split("@")[0])+" && "+(CoOrdinateY2+" == "+String(ans_arr[i]).split("@")[1])+" ("+String(ans_arr[i]).split("@")[2]+", "+String(ans_arr[i]).split("@")[3])
					if((CoOrdinateX2 == String(ans_arr[i]).split("@")[0]) && (CoOrdinateY2 == String(ans_arr[i]).split("@")[1])){
							ans_arr.splice(i,1)
						ansScore++;
						score2=1;
						//////alert(CoOrdinateX2+" "+CoOrdinateY2+"  "+ansScore)
						$("."+forPointColor[1]).attr({"fill":"green","stroke":"#00F"})
					    colour_type1 = "#00F";
						break;
                       
					}else{
						  $("."+forPointColor[1]).attr({"fill":"#C00","stroke":"#00F"})
						  colour_type1 = "#00F";
						  score2=0;
						}
					
				}
				
				
				
				for(var i=0;i<ans_arr.length;i++){
				//	console.log(ans_arr+" case3 "+ans_arr.length);
//console.log((CoOrdinateX3+" =3= "+String(ans_arr[i]).split("@")[0])+" && "+(CoOrdinateY3+" == "+String(ans_arr[i]).split("@")[1])+" ("+String(ans_arr[i]).split("@")[2]+", "+String(ans_arr[i]).split("@")[3])
					if((CoOrdinateX3 == String(ans_arr[i]).split("@")[0]) && (CoOrdinateY3 == String(ans_arr[i]).split("@")[1])){
						ans_arr.splice(i,1)
						ansScore++;
						score3=1;
					//	////alert(CoOrdinateX3+" "+CoOrdinateY3+"  "+ansScore)
					$("."+forPointColor[2]).attr({"fill":"green","stroke":"#00F"})
					    colour_type2 = "#00F";
						break;
                       
					}else{
						  $("."+forPointColor[2]).attr({"fill":"#C00","stroke":"#00F"})
						  colour_type2 = "#00F";
						  score3=0;
						}
					
				}
				//alert(Ans1)
				
				finalScore1 = pround(Number(Number(score1)+Number(score2)+Number(score3))/3,-2);
				
				if(finalScore1==1){
					finalScore1 = 1;
				}else{
					finalScore1 = 0;
				}
				
				
				
				
				if (ent_ans1 == trimzero(Cordinate1)) 
						{
							 
							score4=1
						}
						else
						{
							score4=0
						}
						
						if (ent_ans2 == trimzero(Cordinate2)) 
						{
							 
							score5=1
						}
						else
						{
						 
							 score5=0
						}
						
						if (ent_ans3 == trimzero(Cordinate3))
						{
						 
							score6=1
						}
						else
						{
						 
							score6=0
						}
				finalScore = Number(Number(finalScore1)+Number(score4)+Number(score5)+Number(score6))/4;
				//QuizFlag1 = score5 == 1 ? true : false;
						//QuizFlag2 = score3 == 1 ? true : false;
						
						//DiscType1 = "G604101";
						//DiscType2 = "G601102";
						
						//FinalDtQuiz=`${QuizFlag1}Ê${DiscType1}`;
							
				if (FBOpt != 1) {
				
				
				if(finalScore1==1){
					$(".Wrt1").show();
					$(".Wrng1").hide();
				}else{
					$(".Wrt1").hide();
					$(".Wrng1").show();
				}
				
				if(score4==1){
					$(".Wrt2").show();
					$(".Wrng2").hide();
				}else{
					$(".Wrt2").hide();
					$(".Wrng2").show();
				}
				
				if(score5==1){
					$(".Wrt3").show();
					$(".Wrng3").hide();
				}else{
					$(".Wrt3").hide();
					$(".Wrng3").show();
				}
				
				if(score6==1){
					$(".Wrt4").show();
					$(".Wrng4").hide();
				}else{
					$(".Wrt4").hide();
					$(".Wrng4").show();
				}
					
					
				}
						
				
						
						if ((finalScore<1) && (finalScore>0)) {
		                     FeedbackText = "";
		                     FeedbackFlag = "partial";
	                    }
	
	
	
					if( CoOrdinateX3 == 0 && ent_ans1 == "" && ent_ans2 == "" && ent_ans3 == ""){$(".blank").html("Plot the");$(".blank1").html("Points.");$(".blankMessage_New").show().delay(1000).hide(0);$(".Wrng,.Wrt").hide()
						//////alert()	
						Responseflag="false";
						var FeedbackText = "";
						$(".respond").html("")
					
						////////// for NFR //////
						$(".done1").click(function(){ 
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
												});
						/////////////for NFR/////////////
						
					}else {
						
					   if(CoOrdinateX3 == 0) {
							$(".blank").html("Plot the");
							$(".blank1").html("Points.");
							$(".blankMessage_New").show().delay(1000).hide(0);;
							$(".Wrng,.Wrt").hide();

						Responseflag="true";
						var FeedbackText = "";
						$(".remark,.respond").show().css("display","inline-block")
						$(".respond").html("")
					
						$(".done1").click(function(){ 
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
												});
							
						} else if(ent_ans1 == "" || ent_ans2 == "" || ent_ans3 == "") {
							$(".blank").html("Enter the");
							$(".blank1").html("value.");
							$(".blankMessage_New").show().delay(1000).hide(0);
							$(".Wrng,.Wrt").hide();

						Responseflag="true";
						var FeedbackText = "";
						$(".remark,.respond").show().css("display","inline-block")
						$(".respond").html("")
					
						$(".done1").click(function(){ 
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
												});
							
						}else{
						
						$(".remark,.respond").show().css("display","inline-block")
						Responseflag="true";
						
				    	if(PromptTest1 || PromptTest2 || PromptTest3){
						   
							$(".blankMessage_New").show().delay(1000).hide(0);;
							$(".Wrng,.Wrt").hide();
							 FeedbackFlag = "false";
							 FeedbackText = "";
							 feed_flag = 1;
							 $(".remark").hide();
					    }else if (finalScore==1) {
							FeedbackFlag = "true";
							FeedbackText = "Correct";
							//////// For NFR //////////////
							final_score = 1;
							$(".respond").css('color','#339966');
							/////// Closed NFR //////////////
							
						}else if ((finalScore>0) && (finalScore<1)) {
							FeedbackText = "Partially Correct";
			                FeedbackFlag = "partial";
							$(".respond").css('color','#0000CC');
							
						}  else {
							FeedbackFlag = "false";
							FeedbackText = "Incorrect";
							$(".respond").css('color','#FF0000');
						}
									
						
						if(feed_flag!=1){
								if (SOpt == 2) {
										$(".solution").show();
										$(".calc").css("pointer-events","none");
										$(".done1").css("pointer-events","none")
										$(".input1,.input2,.input3,.input4").css({"pointer-events":"none"})
										$(".input1,.input2,.input3,.input4").attr("disabled",true)
										DoneClicked = 1;
								$(".done1").click(function(){ 
								$(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
								});
								$(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
										
								$(".tab").focus();		
								
										
										
								if (final_score == 1) {
										$(".solution").css('visibility','hidden');
										$(".newSet").css('visibility','hidden');
				
								} else {
									////////////////////alert('')
										$(".solution").css('visibility','visible');
										//$(".solution").css('visibility','visible');
										$(".newSet").css('visibility','visible');
										$(".newSet,.solution").show();
										$(".newSet").click(function(){
								        $(".newSet,.solution").css('visibility','hidden');
								
															
								});
									}
				
								}
								
								
								if (SOpt == 3) {                    /////////for educo testing mode////////
							
								$(".solution").show();
								$(".newSet").show();
								$(".newSet,.solution").css('visibility','visible');
								$(".calc").css("pointer-events","auto");
								$(".done1").css("pointer-events","auto")
								$(".input1,.input2,.input3,.input4").css("pointer-events","auto")
								$(".input1,.input2,.input3,.input4").attr("disabled",false)
								
                                //DoneClicked = 1;
								$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								$(".done1").click(function(){
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								});
								
						}   
							}
						}
						
						/////// Closed NFR //////////////
						if (feed_flag != 1) {
							////////////////////alert(FBOpt+"  == FBOpt")
							if (FBOpt == 2 || FBOpt == undefined) {
								// if feedback is enabled
								$('.respond').html(FeedbackText);
								
							} else {
								
								$('.respond').html("Responded");
								 $(".respond").css('color','#339966');
								
							}
						}
					}
					  
					/*Construct a string out of user answer so that when this string is passed back to this file, it can be parsed to reproduce the user answer. Keep the string as small as possible */
 					
			//////////////////////////////////////////////////////////////////
					
					
					if(Responseflag == "false"){
						 $(".respond").html('')
						 $(".input1").html('')
						 $(".input2").html('')
						
						var FeedbackText = "";
						
					}else{
						
						
					/*localStorage.removeItem("key")
					//////////////alert($(temp1+"")
					localStorage.setItem("key",$('.input1').val()+"@serverString@"+$('.input2').val()+"@serverString@"+$('.input3').val()+"@serverString@"+temp1+"@serverString@"+score1+"@serverString@"+score2+"@serverString@"+score3+"@serverString@"+final_score+"@serverString@"+Attempted_score+"@serverString@"+finalScore+"@serverString@"+score4+"@serverString@"+$('.input4').val()+"@serverString@"+CoOrdinateX1+"@serverString@"+CoOrdinateY1+"@serverString@"+CoOrdinateX2+"@serverString@"+CoOrdinateY2+"@serverString@"+CoOrdinateX3+"@serverString@"+CoOrdinateY3+"@serverString@"+score5+"@serverString@"+option1+"@serverString@"+finalScore1+"@serverString@"+FromInnerText+"@serverString@"+score6);
					////////////////////////alert("jjjj")
					localStorage.getItem("key");*/
					
					//FromInnerText
					////////////alert("localStorage.getItem(key)..Hello  ==  "+localStorage.getItem("key"));
					
					
					var answerString = $('.input1').val()+"@serverString@"+$('.input2').val()+"@serverString@"+$('.input3').val()+"@serverString@"+temp1+"@serverString@"+score1+"@serverString@"+score2+"@serverString@"+score3+"@serverString@"+final_score+"@serverString@"+Attempted_score+"@serverString@"+finalScore+"@serverString@"+score4+"@serverString@"+$('.input4').val()+"@serverString@"+CoOrdinateX1+"@serverString@"+CoOrdinateY1+"@serverString@"+CoOrdinateX2+"@serverString@"+CoOrdinateY2+"@serverString@"+CoOrdinateX3+"@serverString@"+CoOrdinateY3+"@serverString@"+score5+"@serverString@"+option1+"@serverString@"+finalScore1+"@serverString@"+FromInnerText+"@serverString@"+score6;
					
					//ExternalInterface.call("writeans",Qid,answerString,FeedbackFlag);
					//////////////////////////alert("answerString == "+answerString);
					//writeans(Qid,answerString,FeedbackFlag);
 					//8thMar2018 BLR Comments
					//Start
					//////////////////alert(final_score+"  final_score")
					//////////////alert(finalScore)
					score = finalScore;
				   //	if (FeedbackFlag == 'true'){
					//	score = finalScore;
					//}else if (FeedbackFlag == 'partial'){
					//	score = finalScore;
					//}else{
					//	score = finalScore;
					//}
					parent.writeans(Qid, answerString, FeedbackFlag, score, Attempted_score,FinalDtQuiz);
					
					}
					
					//End
					
				};
						
				//preloadans(localStorage.getItem("key"));			  
			 showSolution = function(){
				
				
				 $(".howTo_div").hide();
				animCount++;
				
				
				if(animCount==1){
					
				 // reset(); 
				 
				  $(".disable_div").show();
				  setTimeout(function(){
					   $(".Graph_main_div").addClass('graph_anim');	
					   $(".solutionText").hide();
				  });
				 
				 setTimeout(function(){
                    
					sb=0;
					autorunVar = 1  ////0 when in teacher mode
					//howVar = 2;
				     $(".correct,.incorrect,.blankMessage,.prompt,.promptComma").hide();
					 $(".autorun").css('opacity','0.4');
					 $(".autorun").attr('disabled','disabled');
					 $(".autorun").css('cursor','default');
					 $(".solutionMainSteps,.solutionText").hide();
					 $(".solutionMainSteps,.solutionText,.Step1").show().css({"display":"inline-block"});
				//	 $(".howTo").show(); 
					 
					 $(".howTo_div").hide();
					  $(".txt1,.txt2,.txt3,.txt4,.txt5,.txt6,.txt7").css("display","none");
		             $(".crcl").css("opacity" , "0");
					 $(".oogive").hide();
					 path=''
			         sol();
					 
					
				  },1800);
				 
				  setTimeout(function(){
					   $(".disable_div").hide();
					   	right_howtodiv  = ($(".solutionMainSteps").width()+($(".Graph_main_div").width()-($(".Btn_td1").width())*2))/2;
	                    $(".howTo_div").css("right",right_howtodiv+"px" );
						if(checkMobile)
						{
							var port = window.matchMedia("(orientation:portrait)")	
							if(port.matches){
								$(".howTo_div").css("right",50+"%" );
							}
						}
						
						
				  },2000);
				 
				}
				
				else{
					  $(".Graph_main_div").removeClass('graph_anim').addClass('extraclass');
					  $(".solutionMainSteps,.solutionText,.Step1").show().css({"display":"inline-block"});
					  sol();
				}
					 
					 

			}
			
			
			function sol(){
				//////alert(num11)
				//////alert(num11)
				$("circle").attr({"r":"0"})
						  var [val1,val2,val3,val4,val5,val6,Sval1,Sval2,Sval3,Sval4,Sval5,Sval6,Sval7,Sval8,Tota,OptionVal1,OptionVal2,OptionVal3,Version]=[temp1[0],temp1[1],temp1[2],temp1[3],temp1[4],temp1[5],temp1[6],temp1[7],temp1[8],temp1[9],temp1[10],temp1[11],temp1[12],temp1[13],temp1[14],temp1[15],temp1[16],temp1[17],temp1[18]];
				$(".val1").html(ConvertSmalltoBig(val1));$(".val2").html(ConvertSmalltoBig(val2));
				$(".val3").html(ConvertSmalltoBig(val3));$(".val4").html(ConvertSmalltoBig(val4));
				$(".val5").html(ConvertSmalltoBig(val5));$(".val6").html(ConvertSmalltoBig(val6));
				$(".Sval1").html(ConvertSmalltoBig(Sval1));$(".Sval2").html(ConvertSmalltoBig(Sval2));
				$(".Sval3").html(ConvertSmalltoBig(Sval3));$(".Sval4").html(ConvertSmalltoBig(Sval4));
				$(".Sval5").html(ConvertSmalltoBig(Sval5));$(".Sval6").html(ConvertSmalltoBig(Sval6));
				$(".Sval7").html(ConvertSmalltoBig(Sval7));$(".Sval8").html(ConvertSmalltoBig(Sval8));
				$(".Opt1").html(OptionVal1);$(".Opt2").html(OptionVal2);$(".Opt3").html(OptionVal3);
				
				num11 = xCordinateFun((val1));num21 = yCordinateFun((val2));num31 = xCordinateFun((val3));num41 = yCordinateFun((val4));
		        num51 = xCordinateFun((val5));num61 = yCordinateFun((val6));
				
				/*num71 = xCordinateFun((val7));num81 = yCordinateFun((val8));*/
		
		        length1 = pround(Math.sqrt(Number(Number(val6)-Number(val2))**2+Number(Number(val5)-Number(val1))**2),-2)
				length2 = pround(Math.sqrt(Number(Number(val3)-Number(val1))**2+Number(Number(val4)-Number(val2))**2),-2)
				
				$(".length1").html(length1)
				$(".length2").html(length2)
		
		      
				
				
				Snum11 = xCordinateFun((Sval1));Snum21 = yCordinateFun((Sval2));Snum31 = xCordinateFun((Sval3));Snum41 = yCordinateFun((Sval4));
		        Snum51 = xCordinateFun((Sval5));Snum61 = yCordinateFun((Sval6)); Snum71 = xCordinateFun((Sval7));Snum81 = yCordinateFun((Sval8));
				       
				         CoOrdinateX1 = num11;
						 CoOrdinateX2 = num31;
						 CoOrdinateX3 = num51;
						// CoOrdinateX4 = num71;
						 CoOrdinateY1 = num21;
						 CoOrdinateY2 = num41;
						 CoOrdinateY3 = num61;
						 
						 CoOrdinateSX1 = num11;
						 CoOrdinateSY1 = num21;
						 
						 CoOrdinateSX2 = Snum31;
						 CoOrdinateSY2 = Snum41;
						 
						 CoOrdinateSX3 = Snum51;
						 CoOrdinateSY3 = Snum61;
						 
						 CoOrdinateSX4 = Snum71;
						 CoOrdinateSY4 = Snum81;
						 
						 /* CoOrdinateY4 = num81;*/
						 
						 
						 /* CoOrdinateSX1 = Snum11;
						 CoOrdinateSX2 = Snum31;
						 CoOrdinateSX3 = Snum51;
						  CoOrdinateSY1 = Snum21;
						 CoOrdinateSY2 = Snum41;
						 CoOrdinateSY3 = Snum61;*/
						 
						XcordinateNew1 = xCordinateFun(val2);YcordinateNew1 = yCordinateFun(Number(-1)*Number(val1));
						XcordinateNew2 = xCordinateFun(val4);YcordinateNew2 = yCordinateFun(Number(-1)*Number(val3));
						XcordinateNew3 = xCordinateFun(val6);YcordinateNew3 = yCordinateFun(Number(-1)*Number(val5));
					   
					  	solution_dot();
						
						$(".circle4").attr({"cx":XcordinateNew1+"px","cy":YcordinateNew1+"px","r":4.5,"stroke-width":4.5})
						$(".circle5").attr({"cx":XcordinateNew2+"px","cy":YcordinateNew2+"px","r":4.5,"stroke-width":4.5})
						$(".circle6").attr({"cx":XcordinateNew3+"px","cy":YcordinateNew3+"px","r":4.5,"stroke-width":4.5})
						$(".circle4,.circle5,.circle6").css("display","inline-block");
						
						
						path = "M" +" "+ CoOrdinateX1 +" "+ CoOrdinateY1 + " L " +" "+ CoOrdinateX2 +" "+ CoOrdinateY2 + " L " +" "+ CoOrdinateX3 +" "+ CoOrdinateY3 + " L " +" "+ CoOrdinateX1 +" "+ CoOrdinateY1;
			$(".oogive").attr("d",path);
			$(".oogive").show();
						
						
						path1 = "M" +" "+ XcordinateNew1 +" "+ YcordinateNew1 + " L " +" "+ XcordinateNew2 +" "+ YcordinateNew2 + " L " +" "+ XcordinateNew3 +" "+ YcordinateNew3 + " L " +" "+ XcordinateNew1 +" "+ YcordinateNew1;
			$(".oogive1").attr("d",path1);
			$(".oogive1").show();
			
			
			            document.querySelector(".txt1").innerHTML = "A'";
						document.querySelector(".txt2").innerHTML = "B'";
						document.querySelector(".txt3").innerHTML = "C'";
						document.querySelector(".txt4").innerHTML = "A";
						document.querySelector(".txt5").innerHTML = "B";
						document.querySelector(".txt6").innerHTML = "C";
						
						console.log(Snum11 + " + " + Snum21 + " + " + Snum31 + " + " + Snum41 + " + " + Snum51 + " + " + Snum61 + " + " + Snum71 + " + " + Snum81)
						
						
						$(".txt1,.txt2,.txt3,.txt4,.txt5,.txt6,.txt7").css("display","inline-block");
						$(".txt7").css("display","none	");
						$(".oogive").css("fill","#af4c1242")
						if(temp1[18]=="V1"){
					    $(".txt1").attr({"x":Number(CoOrdinateX1)+10, "y":Number(CoOrdinateY1)+15});
						$(".txt2").attr({"x":Number(CoOrdinateX2)-25, "y":Number(CoOrdinateY2)+5});
						$(".txt3").attr({"x":Number(CoOrdinateX3)-10, "y":Number(CoOrdinateY3)-10});
						
						$(".txt4").attr({"x":Number(XcordinateNew1)-20, "y":Number(YcordinateNew1)+15});
						$(".txt5").attr({"x":Number(XcordinateNew2)-15, "y":Number(YcordinateNew2)-10});
						$(".txt6").attr({"x":Number(XcordinateNew3)+10, "y":Number(YcordinateNew3)+10});
						
						}else if(temp1[18]=="V2"){
					    $(".txt1").attr({"x":Number(CoOrdinateX1)-20, "y":Number(CoOrdinateY1)-10});
						$(".txt2").attr({"x":Number(CoOrdinateX2)+10, "y":Number(CoOrdinateY2)+5});
						$(".txt3").attr({"x":Number(CoOrdinateX3)-5, "y":Number(CoOrdinateY3)+30});
						
						$(".txt4").attr({"x":Number(XcordinateNew1)+10, "y":Number(YcordinateNew1)});
						$(".txt5").attr({"x":Number(XcordinateNew2)+10, "y":Number(YcordinateNew2)+10});
						$(".txt6").attr({"x":Number(XcordinateNew3)-25, "y":Number(YcordinateNew3)+10});
						
						}else if(temp1[18]=="V3"){
					    $(".txt1").attr({"x":Number(CoOrdinateX1)-10, "y":Number(CoOrdinateY1)+25});
						$(".txt2").attr({"x":Number(CoOrdinateX2)+10, "y":Number(CoOrdinateY2)+10});
						$(".txt3").attr({"x":Number(CoOrdinateX3)-10, "y":Number(CoOrdinateY3)-10});
						
						$(".txt4").attr({"x":Number(XcordinateNew1)-10, "y":Number(YcordinateNew1)-10});
						$(".txt5").attr({"x":Number(XcordinateNew2)-10, "y":Number(YcordinateNew2)+25});
						$(".txt6").attr({"x":Number(XcordinateNew3)+15, "y":Number(YcordinateNew3)+10});
						
						}else if(temp1[18]=="V4"){
					     $(".txt1").attr({"x":Number(CoOrdinateX1)-30, "y":Number(CoOrdinateY1)+10});
						$(".txt2").attr({"x":Number(CoOrdinateX2)+10, "y":Number(CoOrdinateY2)-5});
						$(".txt3").attr({"x":Number(CoOrdinateX3)+10, "y":Number(CoOrdinateY3)+25});
						
						$(".txt4").attr({"x":Number(XcordinateNew1)+10, "y":Number(YcordinateNew1)});
						$(".txt5").attr({"x":Number(XcordinateNew2)+10, "y":Number(YcordinateNew2)+10});
						$(".txt6").attr({"x":Number(XcordinateNew3)-25, "y":Number(YcordinateNew3)+10});
						
						}else if(temp1[18]=="V5"){
					    $(".txt1").attr({"x":Number(CoOrdinateX1)-25, "y":Number(CoOrdinateY1)+0});
						$(".txt2").attr({"x":Number(CoOrdinateX2)+10, "y":Number(CoOrdinateY2)+5});
						$(".txt3").attr({"x":Number(CoOrdinateX3)-10, "y":Number(CoOrdinateY3)+25});
						
						$(".txt4").attr({"x":Number(XcordinateNew1)+10, "y":Number(YcordinateNew1)});
						$(".txt5").attr({"x":Number(XcordinateNew2)+10, "y":Number(YcordinateNew2)+10});
						$(".txt6").attr({"x":Number(XcordinateNew3)-25, "y":Number(YcordinateNew3)+10});
						
						}else if(temp1[18]=="V6"){
					    $(".txt1").attr({"x":Number(CoOrdinateX1)-25, "y":Number(CoOrdinateY1)+15});
						$(".txt2").attr({"x":Number(CoOrdinateX2)+10, "y":Number(CoOrdinateY2)+15});
						$(".txt3").attr({"x":Number(CoOrdinateX3)-5, "y":Number(CoOrdinateY3)-10});
						
						$(".txt4").attr({"x":Number(XcordinateNew1)+10, "y":Number(YcordinateNew1)});
						$(".txt5").attr({"x":Number(XcordinateNew2)-30, "y":Number(YcordinateNew2)+0});
						$(".txt6").attr({"x":Number(XcordinateNew3), "y":Number(YcordinateNew3)-10});
						
						}else if(temp1[18]=="V7"){
					     $(".txt1").attr({"x":Number(CoOrdinateX1)+10, "y":Number(CoOrdinateY1)+15});
						$(".txt2").attr({"x":Number(CoOrdinateX2)-35, "y":Number(CoOrdinateY2)+10});
						$(".txt3").attr({"x":Number(CoOrdinateX3)-25, "y":Number(CoOrdinateY3)-10});
						
						$(".txt4").attr({"x":Number(XcordinateNew1)-30, "y":Number(YcordinateNew1)+15});
						$(".txt5").attr({"x":Number(XcordinateNew2)+15, "y":Number(YcordinateNew2)+10});
						$(".txt6").attr({"x":Number(XcordinateNew3)+5, "y":Number(YcordinateNew3)+25});
						
						}else if(temp1[18]=="V8"){
					    $(".txt1").attr({"x":Number(CoOrdinateX1)+10, "y":Number(CoOrdinateY1)+10});
						$(".txt2").attr({"x":Number(CoOrdinateX2)-30, "y":Number(CoOrdinateY2)+10});
						$(".txt3").attr({"x":Number(CoOrdinateX3)+10, "y":Number(CoOrdinateY3)+20});
						
						$(".txt4").attr({"x":Number(XcordinateNew1)+10, "y":Number(YcordinateNew1)});
						$(".txt5").attr({"x":Number(XcordinateNew2)+10, "y":Number(YcordinateNew2)+10});
						$(".txt6").attr({"x":Number(XcordinateNew3)-25, "y":Number(YcordinateNew3)+10});
						
						}else if(temp1[18]=="V9"){
					     $(".txt1").attr({"x":Number(CoOrdinateX1)-30, "y":Number(CoOrdinateY1)+15});
						$(".txt2").attr({"x":Number(CoOrdinateX2)+10, "y":Number(CoOrdinateY2)-10});
						$(".txt3").attr({"x":Number(CoOrdinateX3)+10, "y":Number(CoOrdinateY3)-10});
						
						$(".txt4").attr({"x":Number(XcordinateNew1)+10, "y":Number(YcordinateNew1)});
						$(".txt5").attr({"x":Number(XcordinateNew2)+10, "y":Number(YcordinateNew2)+10});
						$(".txt6").attr({"x":Number(XcordinateNew3)+10, "y":Number(YcordinateNew3)+25});
						
						}else if(temp1[18]=="V10"){
					     $(".txt1").attr({"x":Number(CoOrdinateX1)-30, "y":Number(CoOrdinateY1)+15});
						$(".txt2").attr({"x":Number(CoOrdinateX2)+10, "y":Number(CoOrdinateY2)+10});
						$(".txt3").attr({"x":Number(CoOrdinateX3)+0, "y":Number(CoOrdinateY3)+25});
						
						$(".txt4").attr({"x":Number(XcordinateNew1)+10, "y":Number(YcordinateNew1)});
						$(".txt5").attr({"x":Number(XcordinateNew2)+10, "y":Number(YcordinateNew2)+10});
						$(".txt6").attr({"x":Number(XcordinateNew3)-25, "y":Number(YcordinateNew3)+10});
						}else if(temp1[18]=="V11"){
					      $(".txt1").attr({"x":Number(CoOrdinateX1)-30, "y":Number(CoOrdinateY1)+15});
						$(".txt2").attr({"x":Number(CoOrdinateX2)+10, "y":Number(CoOrdinateY2)+10});
						$(".txt3").attr({"x":Number(CoOrdinateX3)+0, "y":Number(CoOrdinateY3)+25});
						
						$(".txt4").attr({"x":Number(XcordinateNew1)+10, "y":Number(YcordinateNew1)});
						$(".txt5").attr({"x":Number(XcordinateNew2)+10, "y":Number(YcordinateNew2)+10});
						$(".txt6").attr({"x":Number(XcordinateNew3)-25, "y":Number(YcordinateNew3)+10});
						}else if(temp1[18]=="V12"){
					    $(".txt1").attr({"x":Number(CoOrdinateX1)+10, "y":Number(CoOrdinateY1)+15});
						$(".txt2").attr({"x":Number(CoOrdinateX2)-30, "y":Number(CoOrdinateY2)+10});
						$(".txt3").attr({"x":Number(CoOrdinateX3)-15, "y":Number(CoOrdinateY3)-10});
						
						$(".txt4").attr({"x":Number(XcordinateNew1)-20, "y":Number(YcordinateNew1)-10});
						$(".txt5").attr({"x":Number(XcordinateNew2)+20, "y":Number(YcordinateNew2)+10});
						$(".txt6").attr({"x":Number(XcordinateNew3)+10, "y":Number(YcordinateNew3)+10});
						}else if(temp1[18]=="V13"){
					     $(".txt1").attr({"x":Number(CoOrdinateX1)+10, "y":Number(CoOrdinateY1)+15});
						$(".txt2").attr({"x":Number(CoOrdinateX2)-30, "y":Number(CoOrdinateY2)+10});
						$(".txt3").attr({"x":Number(CoOrdinateX3)+10, "y":Number(CoOrdinateY3)+10});
						
						$(".txt4").attr({"x":Number(XcordinateNew1)-30, "y":Number(YcordinateNew1)+15});
						$(".txt5").attr({"x":Number(XcordinateNew2)+10, "y":Number(YcordinateNew2)-10});
						$(".txt6").attr({"x":Number(XcordinateNew3)-25, "y":Number(YcordinateNew3)+10});
						}else if(temp1[18]=="V14"){
					   $(".txt1").attr({"x":Number(CoOrdinateX1)+10, "y":Number(CoOrdinateY1)+15});
						$(".txt2").attr({"x":Number(CoOrdinateX2)-30, "y":Number(CoOrdinateY2)+10});
						$(".txt3").attr({"x":Number(CoOrdinateX3)-15, "y":Number(CoOrdinateY3)-10});
						
						$(".txt4").attr({"x":Number(XcordinateNew1)-25, "y":Number(YcordinateNew1)+10});
						$(".txt5").attr({"x":Number(XcordinateNew2)-20, "y":Number(YcordinateNew2)-10});
						$(".txt6").attr({"x":Number(XcordinateNew3)+10, "y":Number(YcordinateNew3)+10});
						}else if(temp1[18]=="V15"){
					   $(".txt1").attr({"x":Number(CoOrdinateX1)+10, "y":Number(CoOrdinateY1)+15});
						$(".txt2").attr({"x":Number(CoOrdinateX2)-30, "y":Number(CoOrdinateY2)+10});
						$(".txt3").attr({"x":Number(CoOrdinateX3)-15, "y":Number(CoOrdinateY3)-10});
						
						$(".txt4").attr({"x":Number(XcordinateNew1)-25, "y":Number(YcordinateNew1)+10});
						$(".txt5").attr({"x":Number(XcordinateNew2)-20, "y":Number(YcordinateNew2)-10});
						$(".txt6").attr({"x":Number(XcordinateNew3)+10, "y":Number(YcordinateNew3)+10});
						}else if(temp1[18]=="V16"){
							$(".txt1").attr({"x":Number(CoOrdinateX1)+10, "y":Number(CoOrdinateY1)+15});
					   $(".txt2").attr({"x":Number(CoOrdinateX2)-30, "y":Number(CoOrdinateY2)+10});
						$(".txt3").attr({"x":Number(CoOrdinateX3)-15, "y":Number(CoOrdinateY3)-10});
						
						$(".txt4").attr({"x":Number(XcordinateNew1)-25, "y":Number(YcordinateNew1)+10});
						$(".txt5").attr({"x":Number(XcordinateNew2)-20, "y":Number(YcordinateNew2)-10});
						$(".txt6").attr({"x":Number(XcordinateNew3)+10, "y":Number(YcordinateNew3)+10});
						}else if(temp1[18]=="V17"){
					    $(".txt1").attr({"x":Number(CoOrdinateX1)+10, "y":Number(CoOrdinateY1)+15});
					   $(".txt2").attr({"x":Number(CoOrdinateX2)+10, "y":Number(CoOrdinateY2)+10});
						$(".txt3").attr({"x":Number(CoOrdinateX3)-15, "y":Number(CoOrdinateY3)-10});
						
						$(".txt4").attr({"x":Number(XcordinateNew1)-25, "y":Number(YcordinateNew1)+10});
						$(".txt5").attr({"x":Number(XcordinateNew2)-25, "y":Number(YcordinateNew2)+15});
						$(".txt6").attr({"x":Number(XcordinateNew3)+10, "y":Number(YcordinateNew3)+10});
						}else if(temp1[18]=="V18"){
					    $(".txt1").attr({"x":Number(CoOrdinateX1)+10, "y":Number(CoOrdinateY1)+15});
					   $(".txt2").attr({"x":Number(CoOrdinateX2)+10, "y":Number(CoOrdinateY2)+10});
						$(".txt3").attr({"x":Number(CoOrdinateX3)-15, "y":Number(CoOrdinateY3)-10});
						
						$(".txt4").attr({"x":Number(XcordinateNew1)-25, "y":Number(YcordinateNew1)+10});
						$(".txt5").attr({"x":Number(XcordinateNew2)-25, "y":Number(YcordinateNew2)+15});
						$(".txt6").attr({"x":Number(XcordinateNew3)+10, "y":Number(YcordinateNew3)+10});
						}
						else if(temp1[18]=="V19"){
					    $(".txt1").attr({"x":Number(CoOrdinateX1)+10, "y":Number(CoOrdinateY1)-10});
					   $(".txt2").attr({"x":Number(CoOrdinateX2)+10, "y":Number(CoOrdinateY2)+10});
						$(".txt3").attr({"x":Number(CoOrdinateX3)-15, "y":Number(CoOrdinateY3)+25});
						
						$(".txt4").attr({"x":Number(XcordinateNew1)+10, "y":Number(YcordinateNew1)+10});
						$(".txt5").attr({"x":Number(XcordinateNew2)-25, "y":Number(YcordinateNew2)+15});
						$(".txt6").attr({"x":Number(XcordinateNew3)-25, "y":Number(YcordinateNew3)+10});
						}
						else if(temp1[18]=="V20"){
					      $(".txt1").attr({"x":Number(CoOrdinateX1)+10, "y":Number(CoOrdinateY1)-10});
					   $(".txt2").attr({"x":Number(CoOrdinateX2)+10, "y":Number(CoOrdinateY2)+25});
						$(".txt3").attr({"x":Number(CoOrdinateX3)+10, "y":Number(CoOrdinateY3)+25});
						
						$(".txt4").attr({"x":Number(XcordinateNew1)+10, "y":Number(YcordinateNew1)+10});
						$(".txt5").attr({"x":Number(XcordinateNew2)-25, "y":Number(YcordinateNew2)+15});
						$(".txt6").attr({"x":Number(XcordinateNew3)-25, "y":Number(YcordinateNew3)+10});
						}
			           /*$(".txt1").attr({"x":Number(CoOrdinateX1)+10, "y":Number(CoOrdinateY1)+15});
						$(".txt2").attr({"x":Number(CoOrdinateX2)+10, "y":Number(CoOrdinateY2)+15});
						$(".txt3").attr({"x":Number(CoOrdinateX3)+10, "y":Number(CoOrdinateY3)+15});*/
						//$(".txt4").attr({"x":Number(CoOrdinateX4)+10, "y":Number(CoOrdinateY4)+15});
						/*
						$(".txt5").attr({"x":Number(CoOrdinateX5)+10, "y":Number(CoOrdinateY5)+15});
						$(".txt6").attr({"x":Number(CoOrdinateX6)+10, "y":Number(CoOrdinateY6)+15});
						$(".txt7").attr({"x":Number(CoOrdinateX7)+10, "y":Number(CoOrdinateY7)+15});*/
						$(".crcl").mouseover(function(){
							$(".ShowCoOrdinates").hide();
						});	
					
						$(".crcl").css({"pointer-events":"none"});
//////////alert(num11)
					/*if(CoOrdinateX2 <= 0){
			     			 $(".crcl,.crcl1,.crcl2,.crcl3").css("opacity" , "0");
					 }
					 
					 else if(CoOrdinateX1 > 0){
						
						$(".crcle1").attr({"cx":num11+"px","cy":num21+"px"})
						$(".crcle2").attr({"cx":num31+"px","cy":num41+"px"})
						
						
						
					 	$(".crcl1,.crcl2,.crcl3").css("opacity" , "0");
						$(".final_line,.final_line2").css("display","none");
						
					 }*/
						
					   /* LineDrawSol();
						
						$(".crcle1,.crcle2,.crcle3").css("display","inline-block");
						//////alert(val2)
						document.querySelector(".txt1").innerHTML = `A(${temp1[1]},${temp1[2]})`;
						document.querySelector(".txt2").innerHTML = `B(${temp1[3]},${temp1[4]})`;
						document.querySelector(".txt3").innerHTML = `B(${temp1[5]},${temp1[6]})`;
						//document.querySelector(".txt3").innerHTML = "C("+2+","+td5+")";
						
					    $(".txt1,.txt2,.txt3").css("display","inline-block");
					
						
						$(".txt1").attr({"x":Number(CoOrdinateX1)+10, "y":Number(CoOrdinateY1)+15});
						$(".txt2").attr({"x":Number(CoOrdinateX2)+10, "y":Number(CoOrdinateY2)+15});
						$(".txt2").attr({"x":Number(CoOrdinateX3)+10, "y":Number(CoOrdinateY3)+15});
						//$(".txt3").attr({"x":Number(CoOrdinateX3)+10, "y":Number(CoOrdinateY3)+15});
							
                        $(".crcle1,.crcle2,.crcle3").css("opacity" , "1");

				*/
			}
			
			
			
					
				
/////////////////////////////////////////////////////////////////////////////////////////////	

/*/////////////////////////////////////////////////////////////////////////*/
	
}); //////end of Main/////////


