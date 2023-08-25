$(document).ready(function(){
						    
						window.SpaceClick=0;
						  
	/**************************************************For Graph File************************************************************************/					
						var ClickToAnsDivForGraph = 0;
						window.howVar = 1;
						
						width  = ($(".solutionMainSteps").width()-($(".Graph_main_div").width()-($(".Btn_td1").width()*2)))/2;
	                    $(".Graph_main_div").css("left",-width+"px" );
						
						if(checkMobile)
						{
							var port = window.matchMedia("(orientation:portrait)")	
							if(port.matches){
								width  = ($(".solutionMainSteps").width()-($(".Graph_main_div").width()+($(".image_Arrow").width())))/2;
	                            $(".Graph_main_div").css("left",-width+"px" );
								
								
							}else{
								width  = ($(".solutionMainSteps").width()-($(".Graph_main_div").width()-($(".Btn_td1").width()*2)))/2;
	                            $(".Graph_main_div").css("left",-width+"px" );
							}
						}
						
						$(".howTo_div").hide();	
						$(".howToForDevice,.ClickToAnsDivForGraph,.ClickToAnsDiv").hide();
						
						/*window.calc_btn = $(".KeyPadKeyDevice").innerHeight();
						$(".keypadKeys").css("margin-top",calc_btn/3+"px");*/
						
						
						
						
						var check_potrait = window.matchMedia("(orientation:portrait)")
						
						$(".howTo_button").click(function(){
							if(howVar == 1)	{						  
								$(".howTo_div").toggle();
								if(check_potrait.matches){
									$(".AllImages,.image_Arrow").hide();
								}
								$(".Enter_ans").css("color","#000");
							}
							else{
								$(".howTo_div").toggle();
								$(".Graph_main_div").removeClass('graph_anim').addClass('extraclass');
								
								$(".solutionContainer,.solutionMainSteps,.middle1,.Step1").toggle();
								$(".solutionContainer,.solutionMainSteps,.middle1,.Graph_main_div").show();
								
							}
							 
						}) 
						
						$(".step_cross_img").click(function(){
							if(howVar == 1)	{								
								$(".howTo_div").hide();	
							}
							else{
								$(".howTo_div").hide();	
								$(".Graph_main_div").removeClass('graph_anim').addClass('extraclass');
								$(".solutionContainer,.solutionMainSteps,.middle1,.Step1").toggle();	
								$(".solutionContainer,.solutionMainSteps,.middle1,.Graph_main_div").show();	
							}
						})
						
						
						
						ht=$(".steps").height();	
						
						$(".howTo_div").css({"top":ht+"px"});
						
						
						window.ScreenHeight = $(window).innerHeight();
						window.ScreenWidth = $(window).innerWidth();
						
						if(ScreenWidth > 1600 && ScreenHeight<720){
							$(".Graph_main_div").css("width","31.5%");
							//$(".howTo").css("right","28%");
							$(".downArrow").css("margin-left",-27+"%");
						}
						
						if(ScreenWidth > 2000 && ScreenHeight<1000){
							$(".Graph_main_div").css("width","31%");
							//$(".howTo").css("right","28%");
						}
						
						$(".Cross_Img1").click(function(){
							$(".Done_con").hide();						
						})
						
						
						if ((String(navigator.userAgent).indexOf("Mobile") != -1)){ 
							var mql2 = window.matchMedia("(orientation:portrait)")
							 if(mql2.matches){ 
								$(".button_div").css("display","none");
								$(".buttonDivForDevice").css("display","inline-block");
								//$(".AllImages,.image_Arrow").css("display","none");
								
								$(".howTo").hide();
								$(".ClickToAnsDivForGraph,.KeypadArea,.keypadKeys").css("display","inline-block");
							 }
							 else{
							 	$(".ClickToAnsDiv,.howToForDevice").css("display","inline-block");
								$(".howTo").hide();
							 }
						}
						 
						 divHeight = $(".howTo").height();
						 $(".howTo_div").css("top",divHeight+5+"px");
						
						
						
						var mql3 = window.matchMedia("(orientation:portrait)")
							 if(mql3.matches){ 
							check_click=0;				 
							window.sol_click=0;				 
							
							$(".Enter_ans").click(function(){
								check_click++;
								alert(check_click+" @@@@ "+sol_click)
								if(check_click==1){
									$(".AllImages,.image_Arrow").hide();
									$(".howTo_div,.Step1").hide();
									$(".solutionContainer").show();
									$(".Enter_ans").css("color","#C00");
								}
								else if(check_click==2 && sol_click==1){
									alert(2)
									$(".AllImages,.image_Arrow").hide();
									$(".howTo_div").hide();
									$(".solutionContainer").show();
									$(".Step1").show();
									$(".Enter_ans").css("color","#000");
									check_click=0;
								}else if(check_click==2 && sol_click==0){
									
									$(".AllImages,.image_Arrow").show();
									$(".howTo_div").hide();
									$(".solutionContainer").show();
									$(".Step1").hide();
									$(".Enter_ans").css("color","#000");
									check_click=0;
								}
								
							})
						}
						
						/*if ((String(navigator.userAgent).indexOf("Mobile") != -1)){ 
							$(".ClickToAnsDiv,.howToForDevice").show();
							$(".howTo").hide();
					    }*/
						
						
						 $(".ClickToAnsDiv").click(function(){
							$(".AreaForKeypadAndInputInDevice").toggle();
							$(".solutionContainer,.solutionMainSteps,.middle1").show();
							$(".solutionContainer,.solutionMainSteps,.middle1,.Graph_main_div").show();
							
						 });
										
						 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**************************************************End Graph File****************************************************************************/




					 
					 $(".step1").click(function(){ 
												$(".input1").focus();
										SpaceClick = 1;			   
									$(".SpaceBarDiv,.spacebar").show();
								
								$(".step1").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step3,.step4,.step5,.step6,.step7,.step8").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
						  
						  
						       $(".middle").hide();
								$(".Step1_div").show();
							
						  
						    });
							
							
							  $(".step2").click(function(){ 
														 $(".input1").focus();
						    		SpaceClick = 2;
								$(".middle").hide();
								$(".Step2_div").show();									 
								$(".SpaceBarDiv,.spacebar").show();
									  
									  $(".step2").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
	$(".step1,.step3,.step4,.step5,.step6,.step7,.step8").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
							  
						    });
							  
							  
							  
							    $(".step3").click(function(){ 
						  			SpaceClick = 3;
							    $(".middle").hide();
								$(".Step3_div").show();	
									  $(".SpaceBarDiv").show();
									   
									   $(".step3").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step1,.step4,.step5,.step6,.step7,.step8").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
						  			
						  
						    });
					 
					 
					 
					  $(".step4").click(function(){ 
						  			SpaceClick = 4;
							    $(".middle").hide();
								$(".Step4_div").show();	
									   $(".SpaceBarDiv").show();
									   
									   $(".step4").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step3,.step1,.step5,.step6,.step7,.step8").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
						  			
						  
						    });
					 
					 
					 
					  $(".step5").click(function(){ 
						  			SpaceClick = 5;
							    $(".middle").hide();
								$(".Step5_div").show();	
									 $(".SpaceBarDiv").show();
									   
									   $(".step5").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step3,.step4,.step1,.step6,.step7,.step8").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
						  			
						  
						    });
					 
					  $(".step6").click(function(){ 
						  			SpaceClick = 6;
							    $(".middle").hide();
								$(".Step6_div").show();	
									   $(".SpaceBarDiv").show();
									   
									   $(".step6").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step3,.step1,.step5,.step4,.step7,.step8").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
						  			
						  
						    });
					 
					 
					  $(".step7").click(function(){ 
						  			SpaceClick = 7;
							    $(".middle").hide();
								$(".Step7_div").show();	
									$(".SpaceBarDiv").show();
									   
									   $(".step7").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step3,.step1,.step5,.step6,.step4,.step8").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
						  	
						    });
					 
					 
					  $(".step8").click(function(){ 
						  			SpaceClick = 8;
							    $(".middle").hide();
								$(".Step8_div").show();	
									   $(".SpaceBarDiv").hide();
									   
									   $(".step8").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step3,.step1,.step5,.step6,.step7,.step4").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
						  	
						    });
					 
					 
					 
					 /*******************************************************************************************************************************************/
					 
						$(document).keydown(function(e){
								  
								
								  if(e.which==32 && SpaceClick!=0){
													
									  spacebarClickFunction();
												
								  }
											  });  	
					 
					  
				
			
				
				/*	$(".spacebar").click(function(){
								
												spacebarClickFunction();
												 
												  });
					*/
					
						spacebarClickFunction = function(){
							SpaceClick++;	
					
						//alert(SpaceClick)
							
							if(SpaceClick==2)
							{
								 $(".middle").hide();
								$(".Step2_div").show();	
									   $(".step2").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step8,.step3,.step1,.step5,.step6,.step7,.step4").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
								
							}
							else if(SpaceClick==3)
							{
								   $(".middle").hide();
								$(".Step3_div").show();	
									   $(".SpaceBarDiv").show();
									   
									   $(".step3").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step1,.step4,.step5,.step6,.step7,.step8").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
			
								
							}else if(SpaceClick==4)
							{
								   $(".middle").hide();
								$(".Step4_div").show();	
									   $(".SpaceBarDiv").show();
									   
									   $(".step4").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step1,.step3,.step5,.step6,.step7,.step8").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
			
								
							}else if(SpaceClick==5)
							{
								   $(".middle").hide();
								$(".Step5_div").show();	
									   $(".SpaceBarDiv").show();
									   
									   $(".step5").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step1,.step4,.step3,.step6,.step7,.step8").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
			
								
							}else if(SpaceClick==6)
							{
								   $(".middle").hide();
								$(".Step6_div").show();	
									   $(".SpaceBarDiv").show();
									   
									   $(".step6").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step1,.step4,.step5,.step3,.step7,.step8").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
			
								
							}else if(SpaceClick==7)
							{
								   $(".middle").hide();
								$(".Step7_div").show();	
									   $(".SpaceBarDiv").show();
									   
									   $(".step7").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
								$(".step2,.step1,.step4,.step5,.step6,.step3,.step8").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
			
								
							}else if(SpaceClick==8)
							{
							$(".middle").hide();
							$(".Step8_div").show();	
							$(".SpaceBarDiv").hide();
							
							$(".step8").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});	
							$(".step2,.step1,.step4,.step5,.step6,.step7,.step3").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
			
								
							}
							$(".input1 ").focus();
						}
					
				
		 });