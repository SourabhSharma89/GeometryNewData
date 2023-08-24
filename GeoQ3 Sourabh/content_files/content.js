
//START:Changed from Bangalore Team
var CurrQuestionIndex = 0;
//END:Changed from Bangalore Team

$(document).ready(function(){
						  
						  
						  	  ////////////Start Code for NFR////////////////
						     $(document).keydown(function(objEvent) {
												 
							
						  if(DoneClicked == 1)
						  {
							  
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
						   $(".section1").hide()
						   $(".FtrTab_Td1").css("pointer-events","none");
						   $(".newSet,.Procedure").hide();
						   $(".solution").css('visibility','hidden');
						   var attempted_num = 1;
						   var next_val = 0;
						   
						   //////////////For NFR closed//////////
						    var sb=-10000;
						  
						    var sb=-10000;
							var autorunVar = 0
							
 						    $(".autorun").css('opacity','.4');
						    $(".autorun").attr('disable','true');
						    $(".autorun").css('cursor','default');
							$(".promptComma,.prompt_New,.blankMessage,.ReducePromt").hide();
							
 							$(".solutionMainSteps,.solutionText,.green1,.green2,.red1,.red2,.green3,.red3,.remark,.blankMessage_New").hide();	
							$(".incorrect,.correct").show();
							 $(".input1").val('');
					   $(".input2").val('');
					   $(".input3").val('');
				///////////////////////////////////For Print///////////////////////////////////
				
				 myFunction= function() {
					window.print();
				};
				
				//////////////////////////////For focus on text////////////////////////////////
				
				 
				 $(".newSet").click(function(){
											 
						 sb=-10000;///set this as initial value..
											 
				 				
								
 					$(".solutionMainSteps,.solutionText").hide();
					$(".input1,.input2,.input3").val('');
					$(".incorrect,.correct").hide();
 					$(".blankMessage,.ReducePromt").hide();
 					$(".prompt_New,.remark,.promptComma").hide();
			        $(".autorun").css('opacity','.4');
					$(".autorun").css('cursor','default');
					$(".autorun").prop('disabled',false);
					$(".input1").focus();
					
											});


/////////////////////////////////////////////////////////Buttons/////////////////////////////////////////////////////////////////////////////////////////////
				
				
				  $(".done1").click(function(){ 
											 
									$(".Procedure_banner").hide();				   
				        		    
									$(".done1").css({'color':'#660066','box-shadow':'0px 0px 0px #ff0000, 0px 1px 7px #ff0000,  0px 1px 0px #ff0000,  0px 0px 3px #ff0000'});
									$(".newSet,.solution,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									$(".input1").focus();
													        
														});
						 
						 $(".newSet").click(function(){ 
													 
										////////// for NFR//////
									DoneClicked = 0	
									CurrQuestionIndex=0
									next_val++;
									nextQuesGeneration();
									attempted_num++;
									$(".input1,.input2,.input3").val('')
									$(".remark").hide()
									$(".done1").css("pointer-events","auto")
									$(".input1,.input2,.input3").css("pointer-events","auto")
									$(".calc").css("pointer-events","auto");
									/*$(".newSet,.solution").hide();*/
									$(".input1,.input2,.input3").attr("disabled",false)
									//document.getElementById("FB_TxtBox").innerHTML =""
									////////// for NFR End//////
									
 																	
									$(".autorun").css('disable','true');				 
									$(".Procedure_banner, .solutionMain").hide();				   
				        		    $(".newSet").css('color','#ffff00');
									$(".newSet").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".done1,.solution,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									
									
									////////// for NFR //////
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});                           ////////// for NFR End ////// 
									
									
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									////////// for NFR //////
									$(".green1,.green2,.red1,.red2,.green3,.red3").hide()
									$(".input1").focus();
									////////// for NFR //////
													        
													        
														});
						    $(".solution").click(function(){ 
														  
									//$(".input1").focus();
								
									$(".Procedure_banner").hide();
				        		    $(".solution").css('color','#ffff00');
									$(".solution").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".newSet,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
												        
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
	
				randRange = function (min, max) {
					var randomNum = Number(Math.round(Math.random()*(max-min))+min);
					return randomNum;
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
				
					var array_Range = 599;
					
					
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
					var ansStr1, ansStr2, ansStr3,ansStr4;
		
				
				quesGeneration = function(){
					//var R1_Arr = new Array();
				/*for (var i = 0; i<100; i++) {
					 var num1 = randRange(-7, 7); var num2 = randRange(-7, 7); // for equation
					 var num3 = randRange(-7, 7); var num4 = randRange(-7, 7); // for equation
					 var num5 = randRange(-7, 7); var num6 = randRange(-7, 7); // for equation
				     point1 = `(${num1}SS${num2})`;point2 = `(${num3}SS${num4})`;point3 = `(${num5}SS${num6})`;
					 
					 
					Answerval1x = num1; Answerval1y = Number(-1)*Number(num2);
					Answerval2x = num3; Answerval2y = Number(-1)*Number(num4);
					Answerval3x = num5; Answerval3y = Number(-1)*Number(num6);
					
					 point4 = `(${Answerval1x}SS${Answerval1y})`;point5 = `(${Answerval2x}SS${Answerval2x})`;point6 = `(${Answerval3x}SS${Answerval3y})`;
					
					 var ArrNew = [point1,point2,point3,point4,point5,point6];
					 get_areaT = get_area(num1,num2,num3,num4,num5,num6)
					 ArrNew = [...new Set(ArrNew)]
					 if (get_areaT>12 && get_areaT<20 && ArrNew.length==6) {
						Q2_Arr.push(num1+"@"+num2+"@"+num3+"@"+num4+"@"+num5+"@"+num6);
					 }
					else
					 {
					i--;	
					}
					
					
				}*/
	////alert(Q1_Arr+"   "+   (Q1_Arr).length);
	/*Q2_Arr = [" 4@3","5@4","8@7","2@7","5@9","3@2","3@8","7@6","2@5","9@8","6@5","4@7","3@5","2@9","3@5","7@6","2@3","5@9","5@4","8@7","4@7","2@3","3@8","6@5","2@7","4@3","7@6","2@9","3@2","9@8","4@3","4@7","3@5"]*/
				
				////alert((Q2_Arr).length+"   Q2_Arr")
				Q2_Arr = ["-5@-1@2@-2@-4@3","7@-7@-6@6@4@-7","6@6@0@2@0@-3","2@-3@7@-3@-7@3","-3@6@-4@1@3@-3","2@-5@6@7@3@6","-5@4@-6@-2@0@4","-7@-4@-4@3@-7@7","-6@-1@-5@-7@-1@2","-6@-3@1@2@-6@2","-4@3@-5@-2@3@3","-5@-3@4@7@-6@-1","6@1@-2@-1@6@-3","6@-4@2@7@3@-5","0@5@-6@-1@0@-1","6@-2@0@4@3@-4","5@-5@0@-2@-2@-6","-1@-3@5@3@1@5","1@-1@-3@5@-5@1","2@7@-6@6@-2@3","-4@6@1@-7@-1@5","5@-7@0@-1@-6@-1","-7@7@-6@2@1@-6","-1@2@6@3@-2@6","-5@2@5@6@-7@4","5@-6@-2@-1@1@-7","2@6@-1@3@0@-5","-3@-4@5@3@-7@-3","5@-7@5@-3@-3@-6","-7@-1@5@2@3@4","-3@2@2@-6@-2@7"]
				
			//console.log([...new Set(Q2_Arr)]+"  Q2_Arr")
						
						};
			/*/////////////////////////R1_Arr////////////////////////////////*/
			
		var loadingString = [];
				window.loadingValues = function () {
			
					//START:Changed from Bangalore Team 
					// loadingValues.fired = true;
					//END:Changed from Bangalore Team 
			
					// next_val = 25;
					loadingString = [next_val];
					////////alert(next_val+"  == next_val")
					return loadingString;
				}
						
			nextQuesGeneration = function(){
				
					if (CurrQuestionIndex != 0) {
						next_val = Number(CurrQuestionIndex);
						}
						else {
									next_val = next_val;
						}	
				
					if (next_val>=((Q2_Arr.length)-1)) {
						next_val =0;
					}
					temp1 = String(Q2_Arr[next_val]).split("@");
					val1 = temp1[0];val2 = temp1[1];val3 = temp1[2];
					val4 = temp1[3];val5 = temp1[4];val6 = temp1[5];
					
					$(".val1").html(Covert_Minus_sign(val1));$(".val2").html(Covert_Minus_sign(val2));$(".val3").html(Covert_Minus_sign(val3));
					$(".val4").html(Covert_Minus_sign(val4));$(".val5").html(Covert_Minus_sign(val5));$(".val6").html(Covert_Minus_sign(val6));
					
					Answerval1x = val2; Answerval1y = Number(-1)*Number(val1);
					Answerval2x = val4; Answerval2y = Number(-1)*Number(val3);
					Answerval3x = val6; Answerval3y = Number(-1)*Number(val5);
					
					
                    $(".val1_new1").html(Covert_Minus_sign(Answerval1y));
					$(".val1_new2").html(Covert_Minus_sign(Answerval2y));
					$(".val1_new3").html(Covert_Minus_sign(Answerval3y));
					
	                Cordinate1 = `(${Answerval1x},${Answerval1y})`;
					Cordinate2 = `(${Answerval2x},${Answerval2y})`;
					Cordinate3 = `(${Answerval3x},${Answerval3y})`;
					
					
	
	
	////////////////////////////
	//"Estimate the difference by rounding each number to the ten - thousands"

	               /* $(".val1").html(val1);
					$(".val2").html(val2);
					
						  var val3 = Number(val2)+1;
						   var val4 = (Number(val2)+1)/Number(val1)
						  $(".val3").html(val3);
						  $(".val4").html(val4);
						  
						  ansStr1="("+val4+","+0+")";
						  ansStr2="x-("+val2+"/"+val1+")";
						  ansStr21=val1+"x-"+val2;
						  ansStr3="x>"+val2+"/"+val1;
						  ansStr4=val2+"/"+val1+"<x"
						  ansStr5="("+val2+"/"+val1+",∞)";
						  ElementIndex = `${val2}/${val1}`*/
						     
						  // 	ent_ans1a = val13 ;
				//	ent_ans2a = val2+"x²–"+val14+"x+"+val11;
							  
			}
			///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
			
			quesGeneration();
				next_val = randRange(0, Q2_Arr.length-1);
			nextQuesGeneration();  ///// Calling question..
			
				donefButton = function()
				{
					 
					$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt,.portraitblankMessage,.LandScapeblankMessage,.remark").hide();
					
				
					var k1_text = document.getElementById("inputText").value;
				 	var k2_text = document.getElementById("inputText1").value;
					var k3_text = document.getElementById("inputText2").value;
					
					//k2_text=k2_text.split("–").join("-");
					//k2_text=k2_text.split("–")
					////alert(ent_ans1 +""+ent_ans2)
					
					var ent_ans1 = trimzero(k1_text);

					var ent_ans2 = trimzero(k2_text);
					
					var ent_ans3 = trimzero(k3_text);
					
					//=
					var split_ent_ans2 = String(ent_ans2).split("=")
					var evaluate_split_ent_ans21=evaluate(split_ent_ans2[0],"x",11)
					var evaluate_split_ent_ans22=evaluate(split_ent_ans2[1],"x",11)
					
					var split_ansStr2 = String(ansStr2).split("=")
					var evaluate_split_ansStr21=evaluate(split_ansStr2[0],"x",11)
					var evaluate_split_ansStr22=evaluate(split_ansStr2[1],"x",11)
					
					var evaluate_split_ent_ans2 = Math.abs(evaluate_split_ent_ans21-evaluate_split_ent_ans22)
					var evaluate_split_ansStr2 = Math.abs(evaluate_split_ansStr21-evaluate_split_ansStr22)
				
				
				//////////////////////////////////////////////////////////////////////////
	
						var ans_score1=0
						var ans_score2=0
						var ans_score3=0
						var get_score=0
						var final_score=0
								
						
						if(ent_ans1 == trimzero(ansStr1))
						{
							$(".green1").show();
							$(".red1").hide();
							ans_score1=1
						}
						else
						{
							$(".red1").show();
							$(".green1").hide();
							ans_score1=0
						}
						
						if(evaluate_split_ent_ans2 == evaluate_split_ansStr2)
						{
							$(".green2").show();
							$(".red2").hide();
							 ans_score2=1
						}
						else
						{
							$(".red2").show();
							$(".green2").hide();
							 ans_score2=0
						}
						
						if(ent_ans3 == trimzero(ansStr3) || ent_ans3 == trimzero(ansStr4))
						{
							$(".green3").show();
							$(".red3").hide();
							ans_score3=1
						}
						else
						{
							$(".red3").show();
							$(".green3").hide();
							ans_score3=0
						}
					
					
					get_score = Number(ans_score1)+Number(ans_score2)+Number(ans_score3)
					final_score=pround(get_score/3,-6)
					
					if(ent_ans1 == "" || ent_ans2 == ""|| ent_ans3 == "")
					{						
						$(".green2,.green1,.green3,.red1,.red2,.red3").hide();
						//if(String(navigator.userAgent).indexOf("Mobile") != -1 )
						if(checkMobile)
						{
							$(".portraitblankMessage").show();
							$(".portraitblankMessage").css({"margin-left":"0px","margin-top":"0px","position":"initial","float":"none","display":"inline-block"})
						}
						else
						{
							$(".LandScapeblankMessage").show();
						}
					}						
					else if (final_score == 1)
					{					
						$(".remark,.correct").show().fadeOut(2000);
						$(".Partial").hide();
					}
					else if(final_score < 1 && final_score > 0)
					{
						$(".remark,.Partial").show().fadeOut(2000);			
					}								
					else
					{									
						$(".remark,.incorrect").show().fadeOut(2000);
						$(".Partial").hide();
					}
			
								
			    }
			 
			 /////////////////  Code Start For NFR ////////////////////////
			 
			 
			//////////////////////////////////For NFR///////////////////////////////////////////////
			
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
					//SOpt = 3 ; FBOpt = 2 ; EOpt = 1
				
						if (SOpt == 0 && FBOpt == 1 && EOpt == 1) {
							///////quiz mode///////////////////
							$(".solution").css('visibility','hidden');
							
							$(".calc").css("pointer-events","auto");
						} else if (SOpt == 1 && FBOpt == 2 && EOpt == 1) {
							///////////////practice mode///////////////
							//$(".newSet").show();
							$(".solution").show();
							$(".solution").css('visibility','visible');
							$(".calc").css("pointer-events","auto");
						} else if (SOpt == 0 && FBOpt == 2 && EOpt == 1) {
							//////////////home work///////////////////
							$(".solution").css('visibility','hidden');
						    $(".calc").css("pointer-events","auto");
						} else if (SOpt == 2 && FBOpt == 2 && EOpt == 1) {
							//////////////////NFR/////////////////////////
							$(".solution").css('visibility','hidden');
							$(".calc").css("pointer-events","auto");
						} else if (SOpt == 1 && FBOpt == 2 && EOpt == 0) {
							  ////////////////after submit solution mode////////
								$(".solution").show();
								$(".solution").css('visibility','visible');
								$(".newSet").hide();
								
								$(".calc").css("pointer-events","none");
								$(".done1").css("pointer-events","none")
								$(".input1,.input2,.input3").css("pointer-events","none")
								$(".input1,.input2,.input3").attr("disabled",true)
								DoneClicked = 1;
								
								$(".done1").click(function(){ 
                      		    $(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
                        });
						        $(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
								
							 
						}else if (SOpt == 3 && FBOpt == 2 && EOpt == 1) {        ////////////////educo testing mode////////
							  
								$(".solution").show();
								$(".solution").css('visibility','visible');
								$(".newSet").show();
								$(".newSet").css('visibility','visible');
								$(".calc").css("pointer-events","auto");
								$(".done1").css("pointer-events","auto");
								$(".input1,.input2,.input3").css("pointer-events","auto");
								DoneClicked = 1;
								//$(".input1,.input2").attr("disabled",false);
								/*$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								$(".done1").click(function(){
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								});  */                                          ////////////////End educo testing mode////////
								
							 
						} else {
							/////////////////////rest/////////////////////
							/*$(".solution").hide();
							$(".calc").css("pointer-events","none");
							$(".done1").css("pointer-events","none");
							$(".input1,.input2").css("pointer-events","none");*/
					
						}
					
				}
				//////////////////
				
				// ML -- Read QuestionID
				//////////alert(Qid.length+"  == Qid.length")
				if (Qid.length<=0) {
					//////////alert(Qid.length+"  == Qid.length")
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
					
					//////////alert(FBOpt+" == FBOpt")
					$(".remark,.respond").css("display","inline-block")
					if (FBOpt == 2) {
						
						if (evals == "true") {
								$(".respond").html("Correct")
									$(".respond").css('color','#339966');
								//	document.getElementById("FB_TxtBox").innerHTML = "Correct";
														
					     }
						 	else if (evals == "partial") {
								$(".respond").html("Partially Correct")
									$(".respond").css('color','#0000CC');
								//	document.getElementById("FB_TxtBox").innerHTML = "Correct";
														
					     }
						 
						 else {
							 	$(".respond").html("Incorrect")
								$(".respond").css('color','#FF0000');
									//document.getElementById("FB_TxtBox").innerHTML = "Incorrect";
							
						 }
					}
					if (FBOpt == 1) {
						$(".respond").html("Responded")
					$(".respond").css('color','#339966');
						//document.getElementById("FB_TxtBox").innerHTML = "Responded";
						
						
						
					}
				preloadans(ans);
		}
				
				
				 //START:Changed from Bangalore Team 
					window.setQuesIndex = function setQuesIndex(QuesIndex) {
						//////////alert("setQuesIndex:" + QuesIndex)
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
				//ExternalInterface.addCallback("setPreviewMode",this,setPreviewMode);
				//PageMethods.setPreviewMode();
				//setPreviewMode();
				function readQuesID() {
					try {
						var sQid = window.location.href.substr(window.location.href.indexOf("?"));
						var QArr;
						//////////alert(sQid+"  == sQid")
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
					////////////alert(strfrmServer+"  == strfrmServer inside preloadans")
				
					//////////////For Checking Through 'Local Storage' ///////////////////////////
					////////////alert("localStorage.getItem(key) == "+localStorage.getItem("key"));
					
					/*if(localStorage.getItem("key") != null && localStorage.getItem("key") != undefined){
						var tx1 = localStorage.getItem("key").split("@serverString@");
						//////////alert("tx1 1//// == "+tx1);
					}*/
					//var tx1 = localStorage.getItem("key").split("@");
					//strfrmServer = localStorage.getItem("key")
					//////////////////////////////////////////////////////////////////////////////
				
					if(strfrmServer != undefined){
						////////////alert("strfrmServer 2 == "+strfrmServer);
						
						
						var tx1 = strfrmServer.split('@serverString@');
						
						////alert("tx1  == "+tx1);
				 
						//document.getElementById("inputText").value = String(tx1[0]);
 
						$(".input1").val(tx1[0])
						$(".input2").val(tx1[1])
							$(".input3").val(tx1[2])
				
						 temp1 = String(tx1[3]).split(",");
						
				
						ansScore1=String(tx1[4]);
						ansScore2=String(tx1[5]);
							ansScore3=String(tx1[6]);
						final_score = String(tx1[7]);

				val1 = temp1[0];val2 = temp1[1];val3 = temp1[2];
					val4 = temp1[3];val5 = temp1[4];val6 = temp1[5];
					
					$(".val1").html(Covert_Minus_sign(val1));$(".val2").html(Covert_Minus_sign(val2));$(".val3").html(Covert_Minus_sign(val3));
					$(".val4").html(Covert_Minus_sign(val4));$(".val5").html(Covert_Minus_sign(val5));$(".val6").html(Covert_Minus_sign(val6));
					
					Answerval1x = val2; Answerval1y = Number(-1)*Number(val1);
					Answerval2x = val4; Answerval2y = Number(-1)*Number(val3);
					Answerval3x = val6; Answerval3y = Number(-1)*Number(val5);
					
					
                    $(".val1_new1").html(Covert_Minus_sign(Answerval1y));
					$(".val1_new2").html(Covert_Minus_sign(Answerval2y));
					$(".val1_new3").html(Covert_Minus_sign(Answerval3y));
					
	                Cordinate1 = `(${Answerval1x},${Answerval1y})`;
					Cordinate2 = `(${Answerval2x},${Answerval2y})`;
					Cordinate3 = `(${Answerval3x},${Answerval3y})`; 
	                  
 					Attempted_score = String(tx1[8]);
							
						
						//////
						
						if(FBOpt != 1){
								if(ansScore1 == 1){
								$(".green1").show();
								$(".red1").hide();
							}
							else{
								$(".red1").show();
								$(".green1").hide();
							}
							if(ansScore2== 1){
								$(".green2").show();
								$(".red2").hide();
							}
							else{
								$(".red2").show();
								$(".green2").hide();
							}
							if(ansScore3 == 1){
								$(".green3").show();
								$(".red3").hide();
							}
							else{
								$(".red3").show();
								$(".green3").hide();
							}
					}
					
					//////// For NFR //////////////
					
				
						if (SOpt == 2) {
								$(".solution").show();
								$(".calc").css("pointer-events","none");
								$(".done1").css("pointer-events","none")
								$(".input1,.input2,.input3").css("pointer-events","none")
								
								$(".input1,.input2,.input3").attr("disabled",true)
								
                                DoneClicked = 1;
								$(".done1").click(function(){ 
								$(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
								});
							 $(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6 !important'});  
						   
						////alert("innnn")
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
			////alert($(".input1").val())

							}
							
							
					}
						
						
						/////// Closed NFR //////////////
						
						if (SOpt == 3) {        /////////for educo testing mode////////
							////////alert("hi")
								$(".solution").show();
								$(".newSet").show();
								$(".newSet,.solution").css('visibility','visible');
								$(".calc").css("pointer-events","auto");
								$(".done1").css("pointer-events","auto")
								$(".input1,.input2,.input3").css("pointer-events","auto")
								$(".input1,.input2,.input3").attr("disabled",false)
							/*	
                                DoneClicked = 1;
								$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								$(".done1").click(function(){
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								})*/
								/*if (final_score == 1) {
										$(".solution").show();
										$(".newSet").show();
								} else {
										$(".solution").show();
										$(".newSet").show();
										
								}*/
		
							}                  /////////End for educo testing mode////////
				}
				////////////////////////////////////////////////////
				doneButton = function() {
				
					////////////alert("In Final Submit")
					////////alert(numerator_Arr+"   ")
					var Responseflag="false";
					
					var FeedbackFlag = "false";
					var FeedbackText = "Incorrect";
					//document.getElementById("FB_TxtBox").innerHTML = "";
					/// make changes here according to question 
					var feed_flag = 0;
					
					//////// For NFR //////////////
					var final_score = 0;
					Attempted_score = attempted_num;
					/////// Closed NFR //////////////
					
					$(".correct,.incorrect,.blankMessage,.remark,.promptComma,.ReducePromt,.prompt_New,.portraitBlankMessage,.LandScapeBlankMessage,.blankMessage_New,.Partial,.respond").hide();
					$(".green1,.green2,.green3,.red1,.red2,.red3").hide();
					$(".portraitBlankMessage,.landScapeBlankMessage,.remark").css({"margin-left":"0px","margin-top":"0px","position":"static","float":"none","white-space":"normal"}); 

//////////////////////////////////////////////////////////////////////////
	
				var ansScore1=0;
				var ansScore2=0;				
				var ansScore3=0;
 		var ans_score1=0
						var ans_score2=0
						var ans_score3=0
						var get_score=0
						 


					
				
				$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt,.portraitblankMessage,.LandScapeblankMessage,.remark,.PromptClip").hide();
					
				
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
					
					
					var Prompt = false;
				
								
						if (ent_ans1 == trimzero(Cordinate1)) 
						{
							 
							ansScore1=1
						}
						else
						{
							ansScore1=0
						}
						
						if (ent_ans2 == trimzero(Cordinate2)) 
						{
							 
							ansScore2=1
						}
						else
						{
						 
							 ansScore2=0
						}
						
						if (ent_ans3 == trimzero(Cordinate3))
						{
						 
							ansScore3=1
						}
						else
						{
						 
							ansScore3=0
						}
						
						
					get_score = Number(ansScore1)+Number(ansScore2)+Number(ansScore3)
					final_score=pround(get_score/3,-6)
				
					if(ent_ans1 == "" || ent_ans2 == ""|| ent_ans3 == "") {


						Responseflag="false";	
						FeedbackText = "";
				
						 $(".respond").html('')

					//}else{
					
					
					 
					//}
					

						////alert("  in resonce flag false  ")
					
						if(checkMobile)
						{
							$(".portraitblankMessage").show();
							$(".portraitblankMessage").css({"margin-left":"0px","margin-top":"0px","position":"initial","float":"none","display":"inline-block"})
						}
						else
						{
							$(".LandScapeblankMessage").show();
						}
					  
						////alert()
						
						////////// for NFR //////
						$(".done1").click(function(){ 
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
									
												});
						/////////////for NFR/////////////
						
						
						if((ent_ans1 == "") && (ent_ans2 == "")&& (ent_ans3 == ""))  {
								
									Responseflag="false";
							}
							else{
								Responseflag="true";
								}
					
						
					}
					
					
					else {
						
						Responseflag="true";
						$(".remark,.respond").show().css("display","inline-block")
							
						if(FBOpt != 1){
							if(ansScore1 == 1)
						{
							$(".green1").show();
							$(".red1").hide();
						}
						else
						{
							$(".red1").show();
							$(".green1").hide();
						}
						if(ansScore2 == 1)
						{
							$(".green2").show();
							$(".red2").hide();
						}
						else
						{
							$(".red2").show();
							$(".green2").hide();
						}
								if(ansScore3 == 1)
						{
							$(".green3").show();
							$(".red3").hide();
						}
						else
						{
							$(".red3").show();
							$(".green3").hide();
						}
								
							
						}
					
					
					if(PromptTest1 || PromptTest2 || PromptTest3){
						    $(".prompt_New,.blankMessage_New,.incomplete_New,.SelectAns").hide();
							$(".PromptClip").show().delay(1000).hide(0);
							$(".green2,.green1,.green3,.red1,.red2,.red3").hide();
							 FeedbackFlag = "false";
							 FeedbackText = "";
							 feed_flag = 1;
							 $(".remark").hide();
					}else if(final_score == 1){					
							FeedbackFlag = "true";
							FeedbackText = "Correct";
							$(".respond").css('color','#339966');
							//////// For NFR //////////////
							final_score = 1;
							/////// Closed NFR //////////////
						} else if (final_score >0 && final_score < 1) {
						       ////alert("incomp")
								FeedbackFlag = "partial";
								FeedbackText = "Partially Correct";
								$(".respond").css('color','#0000CC');
					
				        }  else {
							FeedbackFlag = "false";
							FeedbackText = "Incorrect";
							$(".respond").css('color','#FF0000');
						}
						
						if(feed_flag==1) {
							
						$(".done1").click(function(){
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
												   })
						
					}	
							
							
						/////////////////////////////////////////////
						///////////////////////////////
						//////// For NFR //////////////
						
						
						if(feed_flag!=1){					
						 if (SOpt == 2) {
							////alert()
								$(".solution").show();
								$(".calc").css("pointer-events","none");
								$(".done1").css("pointer-events","none")
								$(".input1,.input2,.input3").css({"pointer-events":"none"})
								$(".input1,.input2,.input3").attr("disabled",true)
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
									//////alert('')
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
								$(".input1,.input2,.input3").css("pointer-events","auto")
								$(".input1,.input2,.input3").attr("disabled",false)
								
                                //DoneClicked = 1;
								$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								$(".done1").click(function(){
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								});
								/*if (final_score == 1) {
										$(".solution").show();
										$(".newSet").show();
								} else {
										$(".solution").show();
										$(".newSet").show();
										
								 }*/
						}   
							}
						
						/////// Closed NFR //////////////
						if (feed_flag != 1) {
							//////////alert(FBOpt+"  == FBOpt")
							if (FBOpt == 2 || FBOpt == undefined) {
								// if feedback is enabled
								////alert()
							 //document.getElementById("FB_TxtBox").innerHTML = FeedbackText;
							 $(".respond").html(FeedbackText)
							} else {

								//document.getElementById("FB_TxtBox").innerHTML = "Responded";
							  $(".respond").html("Responded")
							  $(".respond").css('color','#339966');
							 
							}
						}
					}
					/*Construct a string out of user answer so that 
					when this string is passed back to this file, it can be parsed
					to reproduce the user answer. Keep the string as small as possible
					*/
					//////////////For Checking Through 'Local Storage' ///ss_an1////////////////////////
					//////////alert(ta1+" == ta1")
					
					
					
				/*	localStorage.removeItem("key")
					////////alert(ta1+" ta1 "+ta2+" ta2 "+aa_final+" "+aa1_final+q1_text+numb)
					
					localStorage.setItem("key",$(".input1").val()+"@serverString@"+$(".input2").val()+"@serverString@"+temp1+"@serverString@"+final_score+"@serverString@"+Attempted_score);
					//////////alert("jjjj")
					localStorage.getItem("key");*/
					
					
					////////alert("localStorage.getItem(key)..Hello  ==  "+localStorage.getItem("key"));
					
 					
			//////////////////////////////////////////////////////////////////
					
					
					
					
					if(Responseflag == "false"){
						 $(".respond").html('')
						 $(".input1").html('')
						 $(".input2").html('')
					 $(".input3").html('')
					/*document.getElementById("inputText").innerHTML="";
					document.getElementById("FB_TxtBox").innerHTML="";
*/					
					
					}else{
						//////alert(q1+" ")
					/*localStorage.removeItem("key")
localStorage.setItem("key",$(".input1").val()+"@serverString@"+$(".input2").val()+"@serverString@"+$(".input3").val()+"@serverString@"+temp1+"@serverString@"+ansScore1+"@serverString@"+ansScore2+"@serverString@"+ansScore3+"@serverString@"+final_score+"@serverString@"+Attempted_score);
					localStorage.getItem("key");
					*/
					
	
					
		////alert("localStorage.getItem(key)..Hello  ==  "+localStorage.getItem("key"));
					
					
	var answerString = $(".input1").val()+"@serverString@"+$(".input2").val()+"@serverString@"+$(".input3").val()+"@serverString@"+temp1+"@serverString@"+ansScore1+"@serverString@"+ansScore2+"@serverString@"+ansScore3+"@serverString@"+final_score+"@serverString@"+Attempted_score;
					
					
				
					
					
				
					////////////alert("answerString == "+answerString);
					//writeans(Qid,answerString,FeedbackFlag);
 					//8thMar2018 BLR Comments
					//Start
				var score = 0;
					if (Responseflag == 'true')
					score = final_score
					parent.writeans(Qid, answerString, FeedbackFlag, score, Attempted_score); 
					
					}
					
					//End
					
				};
				
		//preloadans(localStorage.getItem("key"));	
				   
			/////////////////////	   NFR END  /////////////////////////////////////
				   
				   
				   
				   
			 
			 
			 
			  /////////////////  Code Close For NFR ////////////////////////	 
		
			 showSolution = function(){
				 
				 sb=0;
				 autorunVar = 1////0 when in teacher mode
				 
				     $(".correct,.incorrect,.blankMessage,.prompt,.promptComma").hide();
					 $(".autorun").css('opacity','0.4');
					 $(".autorun").attr('disabled','disabled');	
					 $(".autorun").css('cursor','default');
 					 $(".solutionMainSteps,.solutionText").hide();
					 $(".solutionMainSteps,.solutionText").hide();

 					 $(".solutionMainSteps,.solutionText").show().css({"display":"inline-block"});

					
					}
				
/*///////////////////////////////////////////////////////////////////////////*/
//$(".blankMessage_New").show();
/*//////////////////////////////////////////////////////////////////////////*/								
$(".calc_btn,.back,.delete,.clear,.solution,.done").each(function (i) { $(this).attr('tabindex', -1); })
/*/////////////////////////////////////////////////////////////////////////*/


}); //////end of Main/////////


