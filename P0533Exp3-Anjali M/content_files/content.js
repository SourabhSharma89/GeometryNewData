$(document).ready(function(){
						  
						    var sb=-10000;
							var autorunVar = 0
							
 						    $(".autorun").css('opacity','.4');
						    $(".autorun").attr('disable','true');
						    $(".autorun").css('cursor','default');
							$(".promptComma,.prompt_New,.blankMessage,.ReducePromt,.remark").hide();
							
 							$(".solutionMainSteps,.solutionText,.green1,.green2,.red1,.red2,.green3,.red3,.remark,.blankMessage_New").hide();	
							$(".incorrect,.correct").show();
							
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
 					$(".prompt,.promptComma").hide();
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
													 
									$(".autorun").css('disable','true');				 
									$(".Procedure_banner").hide();				   
				        		    $(".newSet").css('color','#ffff00');
									$(".newSet").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".solution,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									$(".input1,.input2").val('');
									
									$(".squareRoot,.green1,.green2,.green3,.red1,.red2,.red3").hide();
									$(".squareRootStart").show();
   
													        
														});
						    $(".solution").click(function(){ 
														  
									// $(".input1").focus();
								
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
	for (var i = 0; i<array_Range; i++) {
		 var num1 = randRange(2, 9); // for equation
		 var num2 = randRange(2, 9); // for equation
		
	
		            
			if ( num1 != num2 && ((num2+1) % num1 == 0) && getGCF1x(num1,num2)==1) {
			
			Q1_Arr.push(num1+"@"+num2);
		}
		else
		{
		i--;	
		}
		
		
	}
	//alert(Q1_Arr+"   "+   (Q1_Arr).length);
	Q2_Arr = Remove_Duplicate_Entry(String(Q1_Arr));		
				
				//alert((Q2_Arr).length+"   Q2_Arr")
				
			
						
						};
			/*/////////////////////////R1_Arr////////////////////////////////*/
		
			nextQuesGeneration = function(){
				
					next_val++;
				
	if (next_val>=((Q2_Arr.length)-1)) {
		next_val = 1;
	}
	temp1 = String(Q2_Arr[next_val]).split("@");
	val1 = temp1[0];
	val2 = temp1[1];
   
    
	       
	
	
	////////////////////////////
	//"Estimate the difference by rounding each number to the ten - thousands"

	                $(".val1").html(val1);
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
						  ElementIndex = `${val2}/${val1}`
						     
						  // 	ent_ans1a = val13 ;
				//	ent_ans2a = val2+"x²–"+val14+"x+"+val11;
							  
			}
			///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
			
			quesGeneration();
			nextQuesGeneration();  ///// Calling question..
			
				doneButton = function()
				{
					 
					$(".correct,.incorrect,.blankMessage,.prompt_New,.promptComma,.ReducePromt,.portraitblankMessage,.LandScapeblankMessage,.remark,.PromptMess").hide();
					
				
					var k1_text = document.getElementById("inputText").value;
				 	var k2_text = document.getElementById("inputText1").value;
					var k3_text = document.getElementById("inputText2").value;
					
					//k2_text=k2_text.split("–").join("-");
					//k2_text=k2_text.split("–")
					//alert(ent_ans1 +""+ent_ans2)
					
					var ent_ans1 = trimzero(k1_text);

					var ent_ans2 = trimzero(k2_text);
					
					var ent_ans3 = trimzero(k3_text);
					
					
					splitByEquals = trimzero(ent_ans2).split("=") ;
					evalAns = pround(evaluate(ansStr2,"x",3.11,"y",5),-4) ;
					evalAns1 = pround(evaluate(ansStr21,"x",3.11,"y",5),-4) ;
					evalEnteredAns = Math.abs(pround(evaluate(splitByEquals[0],"x",3.11,"y",5)-evaluate(splitByEquals[1],"x",3.11,"y",5),-4)) ;
					
					var Prompt = false;
					
					
					//=
					/*var split_ent_ans2 = String(ent_ans2).split("=")
					var evaluate_split_ent_ans21=evaluate(split_ent_ans2[0],"x",11)
					var evaluate_split_ent_ans22=evaluate(split_ent_ans2[1],"x",11)
					
					var split_ansStr2 = String(ansStr2).split("=")
					var evaluate_split_ansStr21=evaluate(split_ansStr2[0],"x",11)
					var evaluate_split_ansStr22=evaluate(split_ansStr2[1],"x",11)
					
					var evaluate_split_ent_ans2 = Math.abs(evaluate_split_ent_ans21-evaluate_split_ent_ans22)
					var evaluate_split_ansStr2 = Math.abs(evaluate_split_ansStr21-evaluate_split_ansStr22)
				*/
				
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
						
						if((Math.abs(evalAns)==Math.abs(evalEnteredAns) || Math.abs(evalAns1)==Math.abs(evalEnteredAns)) && ent_ans2.indexOf("=")!=-1)
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
						
						if(ent_ans3 == trimzero(ansStr3) || ent_ans3 == trimzero(ansStr4) || ent_ans3 == trimzero(ansStr5))
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
						
						/*alert(ans_score2 == 1 +"")
						alert(ElementIndex)
						alert(String(ent_ans2).indexOf(ElementIndex)!=-1)
						alert(splitByEquals[0]==0)
						alert(String(ent_ans2).indexOf("(")==-1)*/
						if(ans_score2 == 1 && String(ent_ans2).indexOf(ElementIndex)!=-1 && (splitByEquals[0]==0 || splitByEquals[1]==0) && (String(ent_ans2).indexOf("(")==-1 || String(ent_ans2).indexOf(")")==-1)){
							var Prompt = true;
							ans_score2 = 0;
					    }
					
					Zeros = trimzero(ansStr1)		
					RemoveBracZeros = removeIstAndLastIndex(Zeros);
					PromptTest1 = PrompTForBraces(RemoveBracZeros,ent_ans1);
					
					get_score = Number(ans_score1)+Number(ans_score2)+Number(ans_score3)
					final_score=pround(get_score/3,-6)
					
					if(ent_ans1 == "" || ent_ans2 == ""|| ent_ans3 == "")
					{						
						$(".green2,.green1,.green3,.red1,.red2,.red3,.PromptMess,.PromptClip").hide();
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
					}else if(PromptTest1){
						    $(".prompt_New,.blankMessage_New,.incomplete_New,.SelectAns").hide();
							$(".PromptClip").show().delay(1000).hide(0);
							$(".green2,.green1,.green3,.red1,.red2,.red3").hide();
						/*	 FeedbackFlag = "false";
							 FeedbackText = "";
							 feed_flag = 1;*/
							 $(".remark").hide();
					}else if(Prompt){
						
						$(".remark").hide();
						$(".PromptMess").show();
						$(".green2,.green1,.green3,.red1,.red2,.red3").hide();
						
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
						
/*/////////////////////////////////////////////////////////////////////////*/


}); //////end of Main/////////


