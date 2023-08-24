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
						   $(".section1").css('display',"none");
						   $(".footer").css("pointer-events","none");
						   $(".FtrTab_Td3").css("pointer-events","auto");
						   $(".newSet,.Procedure").hide();
						   $(".solution").css('visibility','hidden');
						   var attempted_num = 1;
						   var next_val = 0;
						   
						   //////////////For NFR closed//////////
						  
				var sb=-10000;   
				var autorunVar = 0   
	   			    
				$(".autorun").css('opacity','.4'); 
				$(".autorun").attr('disable','true');
				$(".autorun").css('cursor','default');
				$(".promptComma,.prompt_New,.blankMessage,.ReducePromt,.blankMessage_New,.remark").hide();
				$(".Wrng1,.Wrt1,.Wrng2,.Wrt2,.Wrng3,.Wrt3,.Wrng4,.Wrt4,.Wrng5,.Wrt5,.Wrng6,.Wrt6,.Wrng7,.Wrt7").hide();
				
				$(".solutionMainSteps,.solutionText").hide();	
				$(".incorrect,.correct").show();
				 			
				///////////////////////////////////For Print///////////////////////////////////
				
				myFunction= function() 
				{
					window.print();
				};

				//////////////////////////////For focus on text////////////////////////////////
				
				 
				$(".newSet").click(function()
				{
					sb=-10000;///set this as initial value..
					$(".solutionMainSteps,.solutionText").hide();
					$(".input1").val('');
					$(".incorrect,.correct").hide();
					$(".blankMessage,.ReducePromt").hide();
					$(".prompt_New,.promptComma").hide();
					$(".autorun").css('opacity','.4');
					$(".autorun").css('cursor','default');
					$(".autorun").prop('disabled',false);
					$(".input1").focus();
				});
        
/////////////////////////////////////////////////////////Buttons/////////////////////////////////////////////////////////////////

				$(".done1").click(function()
				{ 
					$(".Procedure_banner").hide();				   
					
					$(".done1").css({'color':'#660066','box-shadow':'0px 0px 0px #ff0000, 0px 1px 7px #ff0000,  0px 1px 0px #ff0000,  0px 0px 3px #ff0000'});
					$(".newSet,.solution,.Procedure").css({'color':'white','box-shadow':'none'});
					$(".Procedure").css({'color':'black','box-shadow':'none'});
					$(".input1").focus();
				});
				
				$(".newSet").click(function()
				{ 
					$(".autorun").css('disable','true');				 
					$(".Procedure_banner").hide();				   
					$(".newSet").css('color','#ffff00');
					$(".newSet").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
					$(".solution,.Procedure").css({'color':'white','box-shadow':'none'});
					$(".done1").css({'color':'black','box-shadow':'none'});
					$(".Procedure").css({'color':'black','box-shadow':'none'});
					$(".input1,.input2").val('');
					$(".Wrng1,.Wrt1,.Wrng2,.Wrt2,.Wrng3,.Wrt3,.Wrng4,.Wrt4,.Wrng5,.Wrt5,.Wrng6,.Wrt6,.Wrng7,.Wrt7").hide();
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
									 					 
													 
									powerClick = 0;	
									
									
									ClickToAnsDiv = 0;
													 
									$(".autorun").css('disable','true');
									
									$(".squareRoot").hide();									
									$(".squareRootStart").show();
									$(".powerOn").show();
									$(".powerOf").hide();	
									
									$(".Procedure_banner").hide();				   
				        		    $(".newSet").css('color','#ffff00');
									$(".newSet").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".solution,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									$(".input1,.input2,.input3,.input4").val('')
									
									////////// for NFR //////
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});                           ////////// for NFR End ////// 
									
									
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									////////// for NFR //////
				});
				
				$(".solution").click(function()
				{ 
					$(".Procedure_banner").hide();
					$(".solution").css('color','#ffff00');
					$(".solution").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
					$(".newSet,.Procedure").css({'color':'white','box-shadow':'none'});
					$(".done1").css({'color':'black','box-shadow':'none'});
					$(".solution").blur();
					$(".input1").focus();
				});
/*///////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////////*/

				randRange = function (min, max) 
				{
					var randomNum = Number(Math.round(Math.random()*(max-min))+min);
					return randomNum;
				}	
				
				///////////////////////////////////////////////////
					
				var next_val = 0;
				var array_Range = 600;
				var R1_Arr = new Array();
				var R2_Arr = new Array();
				
				Q1_Arr = new Array();
				Q2_Arr = new Array();
				Q3_Arr = new Array();
				Q4_Arr = new Array();	
				Q5_Arr = new Array();	
				Q6_Arr = new Array();
				Q7_Arr = new Array();	
			
				var temp1;
				//y1 = yvarNew[0];y2 = yvarNew[1];y3 = yvarNew[2];y4 = yvarNew[3];y5 = yvarNew[4];y6 = yvarNew[5];y7 = yvarNew[6];y8 = yvarNew[6];
			 /*SlopeArr.length==1*//* && (y7==14 || y7==15 || y7==16) && (y1==1 || y1==2 || y1==3) && (Slope2%2==0 || Slope2%5==0) */
				quesGeneration = function(){  
					
					//var R1_Arr = new Array();
					for (var i = 0; i<array_Range; i++) {
					
						num1 = randRange(-7, 7);
						num2 = randRange(-7, 7);
						num3 = randRange(270, 270);

						//as_1 = getGCF1x(num1,num2)

						if(num1!=num2 && num1!=0 && num2!=0 && Math.abs(num1)>=4 && Math.abs(num2)>=2){
						R1_Arr.push(num1+"@"+num2+"@"+num3);
						}

					}
					    R1_Arr = [...new Set(R1_Arr)];
						console.log(R1_Arr);
						////alert(R1_Arr.length+"....")
						 
						/*R1_Arr = ["3@-2@90@1",
								  "2@-2@90@2",
								  "2@-3@90@3",
								  "4@-2@90@4",
								  "1@-2@90@5",
								  "1@-3@90@6",
								  "4@-3@90@7",
								  "2@-3@90@8",
								  "4@-1@90@9",
								  "3@-1@90@10",
								  "3@-3@90@11",
								  "4@-1@90@12",
								  ]*/
						
						//R1_Arr = shuffle(R1_Arr)
						
						
				}
			  
					
			/*/////////////////////////////////////////////////////////*/
			/*/////////////////////////R1_Arr////////////////////////////////*/
				var loadingString = [];
				window.loadingValues = function () {
			
					//START:Changed from Bangalore Team 
					// loadingValues.fired = true;
					//END:Changed from Bangalore Team 
			
					// next_val = 25;
					loadingString = [next_val];
					//////////alert(next_val+"  == next_val")
					return loadingString;
				}
				var dataURL;	
				var GCFnum;
		
			nextQuesGeneration = function(){
					//next_val++;
				if (CurrQuestionIndex != 0) {
						next_val = Number(CurrQuestionIndex);
				} else {
						next_val = next_val;
				}
									
									if (next_val>((R1_Arr.length)-1)) {
										next_val = 0;
									}
									temp1 = String(R1_Arr[next_val]).split("@");
											
									        val1 = temp1[0];
											val2 = temp1[1];
											val3 = temp1[2];
											val4 = temp1[3];

											$(".val1").html(Convert_Minus_sign(val1));
											$(".val2").html(Convert_Minus_sign(val2));
											if(val2<0){
												$(".val2_new").html(Convert_Minus_sign(val2));
											}else{
												$(".val2_new").html(val2);
											}
											
											if(val1<0){
												$(".val1_new").html(Convert_Minus_sign(val1));
												$(".val1_new1").html((Math.abs(val1)));
												val1_new1 = Math.abs(val1)
												
											}else{
												$(".val1_new").html(val1);
												$(".val1_new1").html(Convert_Minus_sign(Number(Number(-1)*val1)));
												val1_new1 = Number(-1)*val1;
												
											}
											
											$(".val3").html(val3);
											
											
											
											
											
											
											
											
								
											
									
									
									
											

			}

			///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			  
			quesGeneration(); 
			next_val = randRange(0, R1_Arr.length-1);
			nextQuesGeneration();  ///// Calling question..
			
			doneButtonMain = function(){
				$(".remark,.correct,.incorrect,.blankMessage,.prompt_New,.promptComma,.ReducePromt,.blank,.portraitblankMessage,.LandScapeblankMessage,.blankMessage_New").hide();
				$(".Wrng1,.Wrt1,.Wrng2,.Wrt2,.Wrng3,.Wrt3,.Wrng4,.Wrt4,.Wrng5,.Wrt5,.Wrng6,.Wrt6,.Wrng7,.Wrt7").hide();
				
						var k1_text = trimzero(document.getElementById("inputText").value);
						var k2_text = trimzero(document.getElementById("inputText1").value);
						
						
						k1_text=k1_text.split("𝘩").join("h").split("𝑥").join("x").split("𝑧").join("z").split("–").join("-");
						k2_text=k2_text.split("𝘩").join("h").split("𝑥").join("x").split("𝑧").join("z").split("–").join("-");
						
						k1_text1 = pround(evaluate(k1_text,"h",3.9,"x",2.9,"z",4.9),-3);
						k2_text1 = pround(evaluate(k2_text,"h",3.9,"x",2.9,"z",4.9),-3);
					
					////alert(Ans1)
						
						Ans1 = pround(evaluate(Ans1,"h",3.9,"x",2.9,"z",4.9),-3);
						Ans2 = pround(evaluate(Ans2,"h",3.9,"x",2.9,"z",4.9),-3);
						
												////alert(k3_text+"  "+k3_text1+"  "+Ans3)

						
					//k1_text=k1_text.split("𝑦").join("y").split("–").join("-");
					////alert(k1_text)
					/*ent_ans1 = trimzero(k1_text) ;
					
					ent_ans1 = ent_ans1.split("=");
					ent_ans1L = pround(evaluate(ent_ans1[0],"y",3.9,"x",2.9,"z",4.9),-3);
					ent_ans1R = pround(evaluate(ent_ans1[1],"y",3.9,"x",2.9,"z",4.9),-3);
					
					finalAns1 = finalAns.split("=");
					evalAnsL  = pround(evaluate(finalAns1[0],"y",3.9,"x",2.9,"z",4.9),-3);
					evalAnsR  = pround(evaluate(finalAns1[1],"y",3.9,"x",2.9,"z",4.9),-3);
					
					evalAns = pround(Math.abs(ent_ans1L-ent_ans1R),-3);
					equation = pround(Math.abs(evalAnsL-evalAnsR),-3);*/
	
					//equation = pround(evaluate(finalAns,"y",3.9,"x",2.9),-3);
					//evalAns = pround(evaluate(ent_ans1,"y",3.9,"x",2.9),-3);
					////alert(equation+"  "+evalAns)

									var score1=0;
									var score2=0;
									var score3=0;
									var score4=0;
									
									 score1 = (k1_text1 == Ans1);
									 score2 = (k2_text1 == Ans2);
									
									 ////alert(score1+"  "+score2+"  "+score3+"  "+score4)

									
									if (score1 == 1) {
										$(".Wrt1").show();
										$(".Wrng1").hide();
									} else {
										$(".Wrng1").show();
										$(".Wrt1").hide();
									}
									
									if (score2 == 1) {
										$(".Wrt2").show();
										$(".Wrng2").hide();
									} else {
										$(".Wrng2").show();
										$(".Wrt2").hide();
									}
									
									

									

									
			                 var finalScore=(Number(score1)+Number(score2))/2;
							////alert("final_ans "+k1_text+" = "+Ans1+";  "+k2_text+" = "+Ans2+";  "+k3_text+" = "+Ans3+";  "+k4_text+" = "+Ans4);

							////alert(finalScore)
					
								if(trimzero(k1_text) == "" || trimzero(k2_text) == "") {
									////alert("  jj")
									$(".prompt_New,.remark").hide();
									$(".remark,.blankMessage_New").show();
									$(".Wrng1,.Wrt1,.Wrng2,.Wrt2,.Wrng3,.Wrt3,.Wrng4,.Wrt4,.Wrng5,.Wrt5,.Wrng6,.Wrt6,.Wrng7,.Wrt7").hide();
								
								} else if (finalScore == 1) {
									$(".remark").show();
									$(".correct").show().fadeOut(2500);
									
								} else if (finalScore < 1 && finalScore > 0) {
									$(".prompt_New").hide();
									$(".partialcorrect_New").show().fadeOut(2500);
									
								} else {
									$(".remark").show();
									$(".incorrect").show().fadeOut(2000);
								}
			}	                                            
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
					      SOpt = 3; 
						FBOpt = 2; 
						EOpt = 1;
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
				////////////////alert(Qid.length+"  == Qid.length")
				if (Qid.length<=0) {
					////////////////alert(Qid.length+"  == Qid.length")
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
					
					////////////////alert(FBOpt+" == FBOpt")
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
						////////////////alert("setQuesIndex:" + QuesIndex)
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
						////////////////alert(sQid+"  == sQid")
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
						//////////////////alert("strfrmServer 2 == "+strfrmServer);
						////alert("")
						
						var tx1 = strfrmServer.split('@serverString@');
						
						$(".input1").val(tx1[0])
						

					    temp1 = String(tx1[1]).split(",");
						
						/////alert(temp1)
						//////////////NFR////////////////////
						final_score = String(tx1[2]);
						
						                   val1 = temp1[0];
											val2 = temp1[1];
											val3 = temp1[2];
											val4 = temp1[3];

											$(".val1").html(Convert_Minus_sign(val1));
											$(".val2").html(Convert_Minus_sign(val2));
											if(val2<0){
												$(".val2_new").html(Convert_Minus_sign(val2));
											}else{
												$(".val2_new").html(val2);
											}
											
											if(val1<0){
												$(".val1_new").html(Convert_Minus_sign(val1));
												$(".val1_new1").html((Math.abs(val1)));
												val1_new1 = Math.abs(val1)
												
											}else{
												$(".val1_new").html(val1);
												$(".val1_new1").html(Convert_Minus_sign(Number(Number(-1)*val1)));
												val1_new1 = Number(-1)*val1;
												
											}
											
											$(".val3").html(val3);
											
											
					//////// For NFR //////////////

					Attempted_score = String(tx1[3]);
						
					//////// For NFR //////////////
            
	
					
					
				
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
					
					$(".remark,.correct,.incorrect,.blankMessage,.prompt_New,.promptComma,.ReducePromt,.blank,.portraitblankMessage,.LandScapeblankMessage,.blankMessage_New").hide();
				    $(".Wrng1,.Wrt1,.Wrng2,.Wrt2,.Wrng3,.Wrt3,.Wrng4,.Wrt4,.Wrng5,.Wrt5,.Wrng6,.Wrt6,.Wrng7,.Wrt7").hide();
				
						var k1_text = trimzero(document.getElementById("inputText").value);

						


		
						
						k1_text = String(k1_text).split("–").join("-");
						Cordinate = `(${val2},${val1_new1})`
						Cordinate = String(Cordinate).split("–").join("-");
						


					RemoveBracCordinate = removeIstAndLastIndex(Cordinate);
					PromptTest1 = PrompTForBraces(RemoveBracCordinate,k1_text);


		
	
					if(k1_text == "") {			
						 
						Responseflag="false";
						FeedbackText = "";
						$(".respond").html('')
						$(".blankMessage_New").show().css("display","inline-block");
						////////// for NFR //////
						$(".done1").click(function(){ 
 					    $(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
									
												});
						/////////////for NFR/////////////
						
					}
					
					else {
						Responseflag="true";
					 $(".remark,.respond").show().css("display","inline-block")
					 
				        if (k1_text == trimzero(Cordinate)) {
							FeedbackFlag = "true";
							FeedbackText = "Correct";
							$(".remark").show().css("display","inline-block")
							$(".respond").css('color','#339966');
							//////// For NFR //////////////
							final_score = 1;
							/////// Closed NFR //////////////							
							
						} else if (PromptTest1){
							
							$(".prompt2").show().css("display","inline-block");
							$(".prompt2").show();
							$(".remark").hide();
							FeedbackFlag = "false";
							FeedbackText = "";
							feed_flag = 1;
							
	
							
						} else {
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
										$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8").css({"pointer-events":"none"})
										$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8").attr("disabled",true)
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
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8").css("pointer-events","auto")
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8").attr("disabled",false)
								
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
					
					/*document.getElementById("inputText").innerHTML="";
					document.getElementById("FB_TxtBox").innerHTML="";
*/					
					
					}else{
						//////alert(q1+" ")
						
					/*localStorage.removeItem("key")
					localStorage.setItem("key",$(".input1").val()+"@serverString@"+temp1+"@serverString@"+final_score+"@serverString@"+Attempted_score);
					localStorage.getItem("key");*/
					
					
					////alert("localStorage.getItem(key)..Hello  ==  "+localStorage.getItem("key"));
					
					
					var answerString = $(".input1").val()+"@serverString@"+temp1+"@serverString@"+final_score+"@serverString@"+Attempted_score;
					
				
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
		
			 showSolution = function(){
				 
				 sb=0;
				 autorunVar = 1////0 when in teacher mode
				 
				     $(".correct,.incorrect,.blankMessage,.prompt,.prompt_New,.promptComma").hide();
					 $(".autorun").css('opacity','0.4');
					 $(".autorun").attr('disabled','disabled');	
					 $(".autorun").css('cursor','default');
 					 $(".solutionMainSteps,.solutionText").hide();
					 $(".solutionMainSteps,.solutionText").hide();

 					 $(".solutionMainSteps,.solutionText,.SolutionRemark").hide();
 					 $(".solutionMainSteps,.solutionText,.SolutionRemark").show().css({"display":"inline-block"});
                      
					  $(".final_line").attr({"x1":xCoordinate(0),"y1": yCoordinate(0),"x2": xCoordinate(val1),"y2": yCoordinate(val2)});
					  $(".final_line2").attr({"x1":xCoordinate(0),"y1": yCoordinate(0),"x2": xCoordinate(val2),"y2": yCoordinate(Number(-1)*Number(val1))});
		              $(".final_line,.final_line2").show();
					  $(".crcle1").attr({"cx":xCoordinate(val1)+"px","cy":yCoordinate(val2)+"px"})
					  $(".crcle2").attr({"cx":xCoordinate(val2)+"px","cy":yCoordinate(Number(-1)*Number(val1))+"px"})
					  $(".crcle1,.crcle2").css("display","inline-block");
					  document.querySelector(".txt1").innerHTML = `A(${val1},${val2})`;
					  document.querySelector(".txt2").innerHTML = `B(${val2},${Number(-1)*Number(val1)})`;
					  
					  if(val2>0){
						$(".txt1").attr({"x":Number(xCoordinate(val1))-40, "y":Number(yCoordinate(val2))-15});  
					  }else{
					    $(".txt1").attr({"x":Number(xCoordinate(val1))-40, "y":Number(yCoordinate(val2))+30});
					  }
					  
					  if(Number(Number(-1)*Number(val1))>0){
						$(".txt2").attr({"x":Number(xCoordinate(val2))-40, "y":Number(yCoordinate(Number(-1)*Number(val1)))-15});
					  }else{
					    $(".txt2").attr({"x":Number(xCoordinate(val2))-40, "y":Number(yCoordinate(Number(-1)*Number(val1)))+30});
					  }
					  
					  
					  $(".txt1,.txt2").css("display","inline-block");
					}
				
/*///////////////////////////////////////////////////////////////////////////*/

/*//////////////////////////////////////////////////////////////////////////*/								
$(".calc_btn,.back,.delete,.clear,.solution").each(function (i) { $(this).attr('tabindex', -1); })							
/*/////////////////////////////////////////////////////////////////////////*/
	
}); //////end of Main/////////