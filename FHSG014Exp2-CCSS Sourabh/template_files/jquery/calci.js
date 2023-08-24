$(window).load(function(){
						  
						  
 			   
	/*////////////////////////////////////////////////Code Calculator ///////////////////////////////////////////////////////////////////*/						   						  
  
							 //var $txt = null; // Keep track of currently active input
							 var maxLength = 65;
							  
							 $(".input1,.input2").prop('maxlength',maxLength);
					  
						  
							$txt = $(".input1");  
							$(".input1").focus(); 
							$(".input1").on("focus", function(e) 
							{
								$txt = $(".input1");
								$(".input1").focus(); 
								tabindex="1";
								keyPressed();
							});
							  
						   $(".input2").on("focus", function(e) {
															 
															// ////alert("a")
									  
							  $txt = $(".input2");
							  $(".input2").focus(); 
							   tabindex="2";
							  keyPressed();
							 
				  
	  
							  });
						   
						   
							
							   if(String(navigator.userAgent).indexOf("Mobile") != -1){
							  
							  
							   
							}else{
								  $(".done1").on("focus", function(e) {
								  $(".input1").focus().val($(".input1").val()); 
	  
							  });
								  
							}
							 
							 
  /////////////////////////////////////////////////////////////////////////////////////					   
							 $(".calc_btn").on("click", function(e) {
																  
								//  $txt .focus();
								  
								  if (! $txt) return false; // If tracker is cleared, just return
								  
								  var prev = $txt.val();
								  
								  var bt = this.value;
								  var pos = $txt[0].selectionStart;
								  //////alert(bt)
								  if(pos>maxLength-1)
								  {
									  bt.val()=""
								  }
								  
								   
									if(bt == "-")
									{   
										bt = "– ";
										var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
										$txt.val(newValue);
										$txt[0].setSelectionRange(pos+2, pos+2);
									}
									else if(bt == "+")
									{
										bt = " + ";
										var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
										$txt.val(newValue);
										$txt[0].setSelectionRange(pos+3, pos+3);
									} else if(bt == "⟩")
									{
										bt = " ⟩";
										var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
										$txt.val(newValue);
										$txt[0].setSelectionRange(pos+2, pos+2);
									} else if(bt == "⟨")
									{
										bt = "⟨ ";
										var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
										$txt.val(newValue);
										$txt[0].setSelectionRange(pos+3, pos+3);
									}
									
									else if(bt == "≥")
									{
										bt = " ≥ ";
										var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
										$txt.val(newValue);
										$txt[0].setSelectionRange(pos+3, pos+3);
									}
									
									
									else if(bt == "≤")
									{
										bt = " ≤ ";
										var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
										$txt.val(newValue);
										$txt[0].setSelectionRange(pos+3, pos+3);
									}
									
									
									else if(bt == "{") {
										bt = "{ ";
										var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
										$txt.val(newValue);
										$txt[0].setSelectionRange(pos+2, pos+2);
									}
									else if(bt == "}") {
										bt = " }";
										var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
										$txt.val(newValue);
										$txt[0].setSelectionRange(pos+2, pos+2);
									}
									else if(bt == "(") {
										bt = "( ";
										var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
										$txt.val(newValue);
										$txt[0].setSelectionRange(pos+2, pos+2);
									}
									else if(bt == ")") {
										bt = " )";
										var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
										$txt.val(newValue);
										$txt[0].setSelectionRange(pos+2, pos+2);
									}
									else if(bt == "/")
									{
										bt = " / ";
										var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
										$txt.val(newValue);
										$txt[0].setSelectionRange(pos+3, pos+3);
									}else if(bt == ",")
									{
										bt = ", ";
										var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
										$txt.val(newValue);
										$txt[0].setSelectionRange(pos+2, pos+2);
									} else if(bt == "𝑥") {
										//////alert(bt)
										bt = "𝑥";
										var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
										$txt.val(newValue);
										$txt[0].setSelectionRange(pos+2, pos+2);
									} else if(bt == "𝑦") {
										//////alert(bt)
										bt = "𝑦";
										var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
										$txt.val(newValue);
										$txt[0].setSelectionRange(pos+2, pos+2);
									}else if(bt == "𝑥²") {
										////alert()
										//////alert(bt)
										bt = "𝑥²";
										var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
										$txt.val(newValue);
										$txt[0].setSelectionRange(pos+3, pos+3);
									} else if(bt == "𝘩²") {
										////alert()
										//////alert(bt)
										bt = "𝘩²";
										var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
										$txt.val(newValue);
										$txt[0].setSelectionRange(pos+3, pos+3);
									} else if(bt == "𝑥²") {
										//////alert(bt)
										bt = "𝑥²";
										var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
										$txt.val(newValue);
										$txt[0].setSelectionRange(pos+3, pos+3);
									} else if(bt == "𝑥³") {
										//////alert(bt)
										bt = "𝑥³";
										var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
										$txt.val(newValue);
										$txt[0].setSelectionRange(pos+3, pos+3);
									} else if(bt == "𝑅") {
										//////alert(bt)
										bt = "𝑅";
										var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
										$txt.val(newValue);
										$txt[0].setSelectionRange(pos+2, pos+2);
									} else{
									   
									   var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									  $txt.val(newValue);
									  $txt[0].setSelectionRange(pos+1, pos+1);
								   }
									   
								   
								  
								   $txt.focus();
									  
								  });  
  /////////////////////////////////////////////////////////////////////////////////////
  
  var tabVar = Number(1);
							  
							  tabRotation = function(){
							  
								  tabVar++;
								  if(tabVar >= 3){
									  
									   tabVar = 1;
								  }
								  
								  if(tabVar == 1){
									   $(".input1").focus().val($(".input1").val()); 
								  }else if(tabVar == 2){
									   $(".input2").focus().val($(".input2").val()); 
									   tabVar = 0;
								  }/*else if(tabVar == 3){
									   $(".input3").focus().val($(".input3").val()); 
								  }else if(tabVar == 4){
									   $(".input4").focus().val($(".input4").val()); 
									   tabVar = 0;
								  }else if(tabVar == 5){
									   
									   
								  }*/
							  }
  ////////////////////////////////////////////////////////////////
							  $(".tab").on("click",function(){
									  
									  tabRotation();
							  })
  /////////////////////////////////////////////////////////////////
							   
	/////////////////////////////////////////////////////////////////////////////////////
			  
							 $('.back').on('click',function() {
							
								
								//var NewmyInput = String($txt.val()).replace(/??/g,"bb");
								
									var $myInput = String($txt.val()).split("").join("ris");
									var position = $txt[0].selectionStart;
								
								 var tst = true;
									if(position!=0){
										var $myInput1 = String($myInput).split("ris");
										
										
										var str1 = ["0","1","2","3","4","5","6","7","8","9"," ","²","³","4","5","6","7","–","+",")","("]
									/*	var str2 = "?";
										var n = str1.localeCompare(str2);
										
										
										////alert(n)
										*/
										
										
										
										if(str1.includes($myInput1[position-1])){
												$myInput1.splice(position-1,1);
												tst = true;
											}else{
													$myInput1.splice(position-2,2);
												tst = false;
												}
										
										
									
										$myInput = $myInput1.join("ris")
										
										//$myInput = String($myInput).replace(/bb/g,"??");
									}
									$txt.val(String($myInput).split("ris").join(""))
									
									if(tst){
												$txt[0].setSelectionRange(position-1, position-1);
											}else{
													$txt[0].setSelectionRange(position-2, position-2);
												
												}
									
									
									$txt.focus();
							});
							  
							  
							  
							  
						 $('.delete').on('click',function() {
							   
							var $myInput = String($txt.val()).split("").join("ris");
							var position = $txt[0].selectionStart;
						    var $myInput1 = String($myInput).split("ris");
							
							
							
							var str1 = ["0","1","2","3","4","5","6","7","8","9"," ","²","³","4","5","6","7","–","+","(",")"]
							var tst = true;	
										
										//////alert($myInput1[position])
										if(str1.includes($myInput1[position])){
												$myInput1.splice(position,1);
												tst = true;
											}else{
													$myInput1.splice(position,2);
												tst = false;
												}
										
							
							
								
								$myInput = $myInput1.join("ris")
								$txt.val(String($myInput).split("ris").join(""))
								
								if(tst){
												$txt[0].setSelectionRange(position, position);
											}else{
													$txt[0].setSelectionRange(position, position);
												
												}
							
								
								
								$txt.focus();
								
							});
							  
							$('.clear').on('click',function() {
					
					
					$txt.val('');
					$txt.focus();
					 
					
				});  
  /*/////////////////////////////////////// Code on KeyPress ////////////////////////////////////////////////*/
							  
  /*/////////////////////////////////////// Code on KeyPress ////////////////////////////////////////////////*/
  
							  
							  $(".input1").keypress(function(e){
									   inputKeyRestrict(e);
								  
								   
									   $txt = $(".input1"); 
									  if( e.which==27){
										  $(".prompt").hide();
										  $(".Procedure_banner").hide();
										  $(".ReducePromt").hide();
										  $(".blankMessage").hide();
									  }
									  if( e.which==13){
									  
										  doneButton()
										  document.getElementById("inputText").value;
										  
						  
										  $txt.focus();
									  }
								  $txt.focus();
								  
							});
							  $(".input2").keypress(function(e){
									  inputKeyRestrict(e);
								   
									   $txt = $(".input2"); 
									  if( e.which==27){
										  $(".prompt").hide();
										  $(".Procedure_banner").hide();
										  $(".ReducePromt").hide();
										  $(".blankMessage").hide();
									  }
									  if( e.which==13){
										  
										  doneButton();
										  document.getElementById("inputText1").value;
										  
			  
										  $txt.focus();
									  }
									  
									   
								  $txt.focus();
								  
								  
								   
							});
							  $(".input3").keypress(function(e){
									  inputKeyRestrict(e);
								   
									   $txt = $(".input3"); 
									  if( e.which==27){
										  $(".prompt").hide();
										  $(".Procedure_banner").hide();
										  $(".ReducePromt").hide();
										  $(".blankMessage").hide();
									  }
									  if( e.which==13){
										  
										  doneButton();
										  document.getElementById("inputText2").value;
										  
			  
										  $txt.focus();
									  }
									  
									   
								  $txt.focus();
								  
								  
								   
							});
							   $(".input4").keypress(function(e){
									  inputKeyRestrict(e);
								   
									   $txt = $(".input4"); 
									  if( e.which==27){
										  $(".prompt").hide();
										  $(".Procedure_banner").hide();
										  $(".ReducePromt").hide();
										  $(".blankMessage").hide();
									  }
									  if( e.which==13){
										  
										  doneButton();
										  document.getElementById("inputText3").value;
										  
			  
										  $txt.focus();
									  }
									  
									   
								  $txt.focus();
								  
								  
								   
							});
							  
	  ////////////////////Restrict the values/////////////////////////////////						
	  inputKeyRestrict = function(e) {
			   //alert("e.which == "+e.which)		
			  
				var restrict = ( e.which == 8 || e.which == 44 || e.which == 40 || e.which == 41 || e.which == 62 || e.which == 60 || e.which == 9 || e.which == 189|| e.which == undefined || e.which == 0 ) ? null : String.fromCharCode(e.which).match(/[^0-9]/);
			  if (restrict) {e.preventDefault();}
			  
			
	  };
  

  /*//////////////////////////////////////////////////////////////////////////////////////////////////////*/
  
  keyPressed = function(event){   
   
								   var x = event.which || event.keyCode;
								   //////alert(x);
								  
								   var rClick = String($txt.val()).length+1
			   
								if(x==62 && maxLength >= rClick)
								{
									var secondValue = document.querySelector("#great1");
									var bt1 = secondValue.getAttribute("data-value"); 

									var prev = $txt.val();

									var pos = $txt[0].selectionStart;
									event.preventDefault();
									var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
									$txt.val(newValue);
									$txt[0].setSelectionRange(pos+2, pos+2);
								}
								
								
								
								
								if(x==60 && maxLength >= rClick)
								{
									var secondValue = document.querySelector("#less1");
									var bt1 = secondValue.getAttribute("data-value"); 

									var prev = $txt.val();

									var pos = $txt[0].selectionStart;
									event.preventDefault();
									var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
									$txt.val(newValue);
									$txt[0].setSelectionRange(pos+2, pos+2);
								}
								   
							  /////////////////////////////////////////////////////////////////////////////////////////

							  if(x==40 && maxLength >= rClick)
							  {
								  var secondValue = document.querySelector("#OpenBrac");
								  var bt1 = secondValue.getAttribute("data-value"); 

								  var prev = $txt.val();

								  var pos = $txt[0].selectionStart;
								  event.preventDefault();
								  var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
								  $txt.val(newValue);
								  $txt[0].setSelectionRange(pos+2, pos+2
									  );
							  }
								 
							/////////////////////////////////////////////////////////////////////////////////////////
							
							if(x==41 && maxLength >= rClick)
							{
								var secondValue = document.querySelector("#CloseBrac");
								var bt1 = secondValue.getAttribute("data-value"); 

								var prev = $txt.val();

								var pos = $txt[0].selectionStart;
								event.preventDefault();
								var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
								$txt.val(newValue);
								$txt[0].setSelectionRange(pos+2, pos+2
									);
							}
							   
						  /////////////////////////////////////////////////////////////////////////////////////////
							  
								/*if(x==104 && maxLength >= rClick)
								{
									var secondValue = document.querySelector("#charxx");
									var bt1 = secondValue.getAttribute("data-value"); 

									var prev = $txt.val();

									var pos = $txt[0].selectionStart;
									event.preventDefault();
									var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
									$txt.val(newValue);
									$txt[0].setSelectionRange(pos+2, pos+2
										);
								}*/
								   
							  /////////////////////////////////////////////////////////////////////////////////////////

							  	/*if(x==61 && maxLength >= rClick)
								{
									var secondValue = document.querySelector("#equal");
									var bt1 = secondValue.getAttribute("data-value"); 

									var prev = $txt.val();

									var pos = $txt[0].selectionStart;
									event.preventDefault();
									var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
									$txt.val(newValue);
									$txt[0].setSelectionRange(pos+3, pos+3);
								}*/
							/////////////////////////////////////////////////////////////////////////////////////////

								/*if(x==43 && maxLength >= rClick)
								{
									var secondValue = document.querySelector("#plus");
									var bt1 = secondValue.getAttribute("data-value"); 
								                                              
									var prev = $txt.val();
									
									var pos = $txt[0].selectionStart;
									event.preventDefault();
									var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
									$txt.val(newValue);
									$txt[0].setSelectionRange(pos+3, pos+3);
								}*/

							/////////////////////////////////////////////////////////////////////////////////////////

								if(x==45 && maxLength >= rClick)
								{
									var secondValue = document.querySelector("#minus");
									var bt1 = secondValue.getAttribute("data-value"); 
								                                              
									var prev = $txt.val();
									
									var pos = $txt[0].selectionStart;
									event.preventDefault();
									var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
									$txt.val(newValue);
									$txt[0].setSelectionRange(pos+2, pos+2);
								}

							/////////////////////////////////////////////////////
								   
								/*if(x==120 && maxLength >= rClick)
								{
									var secondValue = document.querySelector("#charx");
									var bt1 = secondValue.getAttribute("data-value"); 
									var prev = $txt.val();
									
									var pos = $txt[0].selectionStart;
									event.preventDefault();
									var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
									$txt.val(newValue);
									$txt[0].setSelectionRange(pos+2, pos+2);
								}*/
								
								
								if(x==44 && maxLength >= rClick)
								{
									var secondValue = document.querySelector("#comma");
									var bt1 = secondValue.getAttribute("data-value"); 
									var prev = $txt.val();
									
									var pos = $txt[0].selectionStart;
									event.preventDefault();
									var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
									$txt.val(newValue);
									$txt[0].setSelectionRange(pos+2, pos+2);
								}

							/////////////////////////////////////////////////////
								   
								/*if(x==121 && maxLength >= rClick)
								{
									var secondValue = document.querySelector("#chary");
									var bt1 = secondValue.getAttribute("data-value"); 
									var prev = $txt.val();
									
									var pos = $txt[0].selectionStart;
									event.preventDefault();
									var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
									$txt.val(newValue);
									$txt[0].setSelectionRange(pos+2, pos+2);
								}*/

							/////////////////////////////////////////////////////
								   
								if(x==122 && maxLength >= rClick)
								{
									var secondValue = document.querySelector("#charz");
									var bt1 = secondValue.getAttribute("data-value"); 
									var prev = $txt.val();
									
									var pos = $txt[0].selectionStart;
									event.preventDefault();
									var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
									$txt.val(newValue);
									$txt[0].setSelectionRange(pos+2, pos+2);
								}
								
							/////////////////////////////////////////////////////
								   
								if(x==114 && maxLength >= rClick)
								{
									var secondValue = document.querySelector("#charR");
									var bt1 = secondValue.getAttribute("data-value"); 
									var prev = $txt.val();
									
									var pos = $txt[0].selectionStart;
									event.preventDefault();
									var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
									$txt.val(newValue);
									$txt[0].setSelectionRange(pos+2, pos+2);
								}
							  }
							
  }); 
  
  