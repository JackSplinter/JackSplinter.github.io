/*
 ..######
  .##....##
  .##.......########..##.......####.##....##.########.########.######
  ..######..##.....##.##........##..###...##....##....##.......##...##
  .......##.########..##........##..##.##.##....##....######...######
  .##....##.##........##........##..##..####....##....##.......##...##
  ..######..##........######...####.##...###....##....########.##....##
 	
 	* Copyright 2022 © Jack Splinter
 		
*/
var krok=0;
var stepsy = new Array;

stepsy[0]='0';
var pointedStep=0;
var znakKroku=',';
var focuss=1;

var stateBoard='';

var czas=0;
var idTimeout=0;

var clicked=false;
var settingBoard=false;
var drawingBoard=true;
var solvingBoard=false;

function checkMSIE(){
		
		document.getElementById('sampleButton').style.display='block';
		document.getElementById('clearBoardButton').style.display='block';
		document.getElementById('clearInputsButton').style.display='block';
		
		document.getElementById('rightDemoDescription').style.display="inline";
		document.getElementById('demoBoardStateButton').style.display="inline";
		document.getElementById('demoInputsStateButton').style.display="inline";
		document.getElementById('demoAllStateButton').style.display="inline";
		document.getElementById('timer').style.display="inline";

		document.getElementById('setB').style.display="inline";
		document.getElementById('drawB').style.display="inline";
		document.getElementById('playB').style.display="inline";

		document.getElementById('drawB').style.background="green";
				
}


function setB(){

	changeInl2m0();
	
	document.getElementById('drawB').style.background="black";
	document.getElementById('setB').style.background="green";
	document.getElementById('playB').style.background="black";
	
	settingBoard=true;
	drawingBoard=false;
	solvingBoard=false;
	}

function playB(){
	changeInl2m0();

	document.getElementById('drawB').style.background="black";
	document.getElementById('setB').style.background="black";
	document.getElementById('playB').style.background="green";

	settingBoard=false;
	drawingBoard=false;
	solvingBoard=true;
		
}

function drawB(bool){


	settingBoard=false;
	drawingBoard=true;
	solvingBoard=false;
	
	document.getElementById('drawB').style.background="green";
	document.getElementById('setB').style.background="black";
	document.getElementById('playB').style.background="black";
		
}

function changeInl2m0(){
	var wymiar=parseInt(document.getElementById('wymiar').innerHTML);
	patt0=new RegExp("inl");

		for(var i=1;i<=wymiar*wymiar;i++){
		p=document.getElementById('p'+i); // p1 p2 .. p100 
		if (patt0.test(p.innerHTML)){
			p.innerHTML='<div class="m0" id="m'+i+'" '+
				'onmousedown="ones(\''+i+'\')" '+
				'></div>';
		}
	}
}



function inone(id){
	step0();
		if(drawingBoard==true){
	
			p=document.getElementById('p'+id); // m1 m2 m3 m50 ...
		
			val=document.forms['forma'].elements['in'+id].value;
			
			p.innerHTML=
			'<input '+ 
				'onclick="intwo('+id+')" '+ 
				'onchange="change('+id+')" '+ 
				'onfocus="focused('+id+')" '+  
				'class="inl" '+
				'name="in'+id+'" '+ 
				'id="in'+id+'" '+ 
				'type="text" '+
				'maxlength="1"'+
				'value="">';
		
		}

		if(solvingBoard==true){
			p=document.getElementById('p'+id); // m1 m2 m3 m50 ...
		
			val=document.forms['forma'].elements['in'+id].value;
		
			p.innerHTML=
			'<input '+ 
				'onclick="intwo('+id+')" '+ 
				'onchange="change('+id+')" '+ 
				'onfocus="focused('+id+')" '+  
				'class="ing" '+
				'name="in'+id+'" '+ 
				'id="in'+id+'" '+ 
				'type="text" '+
				'maxlength="1"'+
				'value="'+val+'">';
				
		}
	step();
}


function intwo(id){
	step0();

	if(drawingBoard==true || solvingBoard==true){
		p=document.getElementById('p'+id); // m1 m2 m3 m50 ...
	
		val=document.forms['forma'].elements['in'+id].value;
		
		p.innerHTML=
		'<input '+ 
			'onclick="inone('+id+')" '+ 
			'onchange="change('+id+')" '+ 
			'onfocus="focused('+id+')" '+  
			'class="in" '+
			'name="in'+id+'" '+ 
			'id="in'+id+'" '+ 
			'type="text" '+
			'maxlength="1"'+
			'value="'+val+'">';
	}
	step();
}


function ones(id){
	step0();
	
	p=document.getElementById('p'+id); // m1 m2 m3 m50 ...

	if(drawingBoard==true){
	p.innerHTML=
	'<input '+ 
		'onclick="inone('+id+')" '+ 
		'onchange="change('+id+')" '+ 
		'onfocus="focused('+id+')" '+  
		'class="in" '+
		'name="in'+id+'" '+ 
		'id="in'+id+'" '+ 
		'type="text" '+
		'maxlength="1"'+
		'value="">';
	}
	else if(solvingBoard==true){
	p.innerHTML=
			'<div class="m1" id="m'+id+'" '+
			'onmousedown="two(\''+id+'\')" '+
			'></div>';
	}
	step();
}



function two(id){
step0();
	
	p=document.getElementById('p'+id); // m1 m2 m3 m50 ...

	if(drawingBoard==true){
	p.innerHTML=
	'<input '+ 
		'onclick="inone('+id+')" '+ 
		'onchange="change('+id+')" '+ 
		'onfocus="focused('+id+')" '+  
		'class="in" '+
		'name="in'+id+'" '+ 
		'id="in'+id+'" '+ 
		'type="text" '+
		'maxlength="1"'+
		'value="">';
	}
	else if(solvingBoard==true){
	p.innerHTML=
			'<div class="m2" id="m'+id+'" '+
			'onmousedown="three(\''+id+'\')" '+
			'></div>';
	}
	step();
}



function three(id){
step0();
	
	p=document.getElementById('p'+id); // m1 m2 m3 m50 ...

	if(drawingBoard==true){
	p.innerHTML=
	'<input '+ 
		'onclick="inone('+id+')" '+ 
		'onchange="change('+id+')" '+ 
		'onfocus="focused('+id+')" '+  
		'class="in" '+
		'name="in'+id+'" '+ 
		'id="in'+id+'" '+ 
		'type="text" '+
		'maxlength="1"'+
		'value="">';
	}
	else if(solvingBoard==true){
	p.innerHTML=
			'<div class="m3" id="m'+id+'" '+
			'onmousedown="four(\''+id+'\')" '+
			'></div>';
	}
	step();
}



function four(id){
step0();
	
	p=document.getElementById('p'+id); // m1 m2 m3 m50 ...

	if(drawingBoard==true){
	p.innerHTML=
	'<input '+ 
		'onclick="inone('+id+')" '+ 
		'onchange="change('+id+')" '+ 
		'onfocus="focused('+id+')" '+  
		'class="in" '+
		'name="in'+id+'" '+ 
		'id="in'+id+'" '+ 
		'type="text" '+
		'maxlength="1"'+
		'value="">';
	}
	else if(solvingBoard==true){
	p.innerHTML=
			'<div class="m4" id="m'+id+'" '+
			'onmousedown="five(\''+id+'\')" '+
			'></div>';
	}
	step();
}


function five(id){
step0();
	
	p=document.getElementById('p'+id); // m1 m2 m3 m50 ...

	if(drawingBoard==true){
	p.innerHTML=
	'<input '+ 
		'onclick="inone('+id+')" '+ 
		'onchange="change('+id+')" '+ 
		'onfocus="focused('+id+')" '+  
		'class="in" '+
		'name="in'+id+'" '+ 
		'id="in'+id+'" '+ 
		'type="text" '+
		'maxlength="1"'+
		'value="">';
	}
	else if(solvingBoard==true){
	p.innerHTML=
			'<div class="m0" id="m'+id+'" '+
			'onmousedown="ones(\''+id+'\')" '+
			'></div>';
	}
	step();
}


function startStoper(){
	czas--;
	document.getElementById('pause').innerHTML=
		'<img src="images/pause2.png" onclick="pauseStoper()" alt="" title="pauza">'
	stoper();
}

function stoper(){

	czas++;
	hou=(czas-czas%3600)/3600
	min=(czas-czas%60)/60
	sec=czas%60;
	
	if (min>=60)
		min=min%60;
	if (min<10) 
		min='0'+min;
		
	if (sec<10)
		sec='0'+sec;
	minelo=min+':'+sec
	if (hou>=0){	
		if (hou<10) {
			hou='0'+hou;
		}
		minelo=hou+':'+min+':'+sec
	}
	document.getElementById('stoper').innerHTML=minelo
	
	idTimeout=setTimeout("stoper()",1000);
	
}

function stopStoper(){
	//alert(idTimeout)
	clearTimeout(idTimeout);
		document.getElementById('stoper').innerHTML='00:00:00'
			document.getElementById('pause').innerHTML=
				'<img src="images/play2.png" onclick="startStoper()" alt="" title="start">'
			czas=0	
}

function pauseStoper(){
	//alert(idTimeout)
	clearTimeout(idTimeout);
	document.getElementById('pause').innerHTML=
		'<img src="images/play2.png" onclick="startStoper()" alt="" title="start">'
}


function change(inId){
	
	
	el=document.forms['forma'].elements['in'+inId];
	val=el.value;
	
	
	p=document.getElementById('p'+inId); // in1 in2 
	patt0=new RegExp("inl");
	if (patt0.test(p.innerHTML))
		el.value='';
	
	if (val!='1' && val!='2' && val!='3' && val!='4' && val!='5' && val!='6' && val!='7' && val!='8' ){
		el.value='';
	}
	
	if(solvingBoard==true){
		el.value='';		
	}
	
}


function changeNav(){
	el=document.forms['formNav'].elements['innav'];
	val=el.value;
	val=parseInt(val);
	if (val>=0 && val<=krok){
		el.value=val;
		goBackTo(val);
	}
	else{
		el.value=krok;
	}
}


function focused(inId){ // 1 2 3 ... 100
	focuss=inId;
}

document.onkeydown = checkKeycode
function checkKeycode(e) {
	var wymiar=parseInt(document.getElementById('wymiar').innerHTML);	

	iledol=wymiar
	ilegora=wymiar
	ileprawo=1
	ilelewo=1
	
	
	if(focuss>=wymiar*wymiar){
		ileprawo=0
	}

	if(focuss>wymiar*wymiar-wymiar){
		iledol=0
	}

	if(focuss<=wymiar){
		ilegora=0
	}
	
	if (focuss<=1){
		ilelewo=0
	}
	
	var keycode;
	if (window.event) keycode = window.event.keyCode;
	else if (e) keycode = e.which;
	if (keycode==39){
		focuss+=ileprawo;
		if(document.getElementById('in'+focuss))
			document.getElementById('in'+focuss).focus()
	}
	if (keycode==37){
		focuss-=ilelewo;
		if(document.getElementById('in'+focuss))
			document.getElementById('in'+focuss).focus()
	}
	if (keycode==38){
		focuss-=ilegora;
		if(document.getElementById('in'+focuss))
			document.getElementById('in'+focuss).focus()
	}
	if (keycode==40){
		focuss+=iledol;
		if(document.getElementById('in'+focuss))
			document.getElementById('in'+focuss).focus()
	}
//alert("keycode: " + keycode);
}

//up - 38
//down - 40
//left - 37
//right - 39


function step0(){
	if(solvingBoard==true){
		if (krok==0){
		var wymiar=parseInt(document.getElementById('wymiar').innerHTML);
		//stepsy[0]=getBoard(wymiar);
		stepsy[0]=getAllOnBoard(wymiar);
	}
	}
}
	
function step(){
	if(solvingBoard==true){
	
	var wymiar=parseInt(document.getElementById('wymiar').innerHTML);
	
	krok++;
	
	stepsy[krok]=getAllOnBoard(wymiar);
	
	var steps=document.getElementById('steps');
	kroki=steps.innerHTML;
	kroki+='<span class="steps" id="sid'+krok+'" onmouseover="thick(\''+krok+'\')" '+
	'onmouseout="thin(\''+krok+'\')" onclick="klik(\''+krok+'\')">'+znakKroku+'</span>';
	steps.innerHTML=kroki;
	
	pointedStep=krok;
	navigate();
	}
}

function goBackTo(step){
	var wymiar=parseInt(document.getElementById('wymiar').innerHTML);
	
	if (step>=0 && step<=krok){
		setAllOnBoard(stepsy[step], wymiar);
		pointedStep=parseInt(step);
	}
	navigate();
	
}

function navigate(){
	var navLeft=document.getElementById('navLeft');
	var nav0=document.getElementById('nav0');
	var navA=document.getElementById('navA');
	var navZ=document.getElementById('navZ');
	var navRight=document.getElementById('navRight');
	
	navLeft.innerHTML='<span  id="navL" onmousedown="goBackTo(\''+(pointedStep-1)+'\')">&lt;</span>';
	
	navA.innerHTML='<input type="text" id="innav" name="inputNav"'+
			'onchange="changeNav()" value="'+pointedStep+'" maxlength="5">';
	navZ.innerHTML='<span onclick="goBackTo(\''+(krok)+'\')">'+krok+'</span>';
		
	navRight.innerHTML='<span  id="navR" onmousedown="goBackTo(\''+(pointedStep+1)+'\')">&gt;</span>';

	document.getElementById('innav').focus();
	
}

function klik(sid){
	document.getElementById('sid'+sid).style.color="red";
	goBackTo(sid);
	clicked=true;
}

function thick(sid){
	document.getElementById('sid'+sid).style.color="red";
	goBackTo(sid);
	clicked=false;
}

function thin(sid){
	document.getElementById('sid'+sid).style.color="silver";
	if(!clicked)
		goBackTo(krok);
}


function clearBoard(wymiar){
	inputy=getInputs(wymiar);
	wymiar=parseInt(wymiar);
	
	var digit='';	
	var nr=0;	
	
	for(var x=0;x<wymiar*wymiar;x++){ //od 1 2 do ... 100
		digit=inputy.substring(x,x+1);
		nr=x+1;
		id=nr;
		p=document.getElementById('p'+id); // m1 m2 m3 m50 ... in1 in2
		
		if(digit=="N"){
			p.innerHTML=
				'<div class="m0" id="m'+id+'" '+
				'onmousedown="ones(\''+id+'\')" '+
				'></div>';
		}
		
	}
	
}


function clearGrays(wymiar){
	var board=getBoard(wymiar);
	for(var i=0;i<wymiar*wymiar;i++){
		board=board.replace('2','0');
	}
	setBoard(board, wymiar);	
}

function clearInputs(wymiar){
	if (wymiar=='10')
		setInputs('0n0n0n0n0nn0n0n0n0n00n0n0n0n0nn0n0n0n0n00n0n0n0n0nn0n0n0n0n00n0n0n0n0nn0n0n0n0n00n0n0n0n0nn0n0n0n0n0',wymiar);
	if (wymiar=='16'){
		var dwa='0n0n0n0n0n0n0n0nn0n0n0n0n0n0n0n0';
		dwa8=dwa+dwa+dwa+dwa+dwa+dwa+dwa+dwa;
		setInputs(dwa8,wymiar);
	}
	if (wymiar=='20'){
		var dwa='0n0n0n0n0n0n0n0n0n0nn0n0n0n0n0n0n0n0n0n0';
		dwa0=dwa+dwa+dwa+dwa+dwa+dwa+dwa+dwa+dwa+dwa;
		setInputs(dwa0,wymiar);
	}
}



function sample(board,wymiar){
	playB();
	setInputs(board, wymiar);
	
	document.getElementById('sampleButtonSolve').style.display='inline';
}

function solve(board,wymiar){
	setBoard(board, wymiar);
	document.getElementById('sampleButtonSolve').style.display='none';
}

function getAllOnBoard(wymiar){
	changeInl2m0();

	pola='';
	for(var i=1;i<=wymiar*wymiar;i++){ //od 1 do wymiar^2
		pole=document.getElementById('p'+i); 
		
		inpt=document.forms['forma'].elements['in'+i];
		if(inpt){
			patti=new RegExp("inone");
			if (patti.test(pole.innerHTML))
				plus=48; //48 - white ... 12345678 bo 49 to 1 
			pattig=new RegExp("intwo");
			if (pattig.test(pole.innerHTML))
				plus=74; //74 - green ... KLMNOPQR
						
			val=inpt.value;
			val=parseInt(val);
			if (val)
				pola+=String.fromCharCode(val+plus);
			else
				pola+=String.fromCharCode(9+plus); // there's an empty island - input without a digit
		}
		else{
		
		patt0a=new RegExp("ones");
		patt0b=new RegExp("inone");
		if (patt0a.test(pole.innerHTML) || patt0b.test(pole.innerHTML))
			pola+='E'; //E - empty white field
		else{
				patt1=new RegExp("two");
				if (patt1.test(pole.innerHTML))
					pola+='i';
				else{
					patt2=new RegExp("three");
					if (patt2.test(pole.innerHTML))
						pola+='h';
					else{
						patt3=new RegExp("four");
						if (patt3.test(pole.innerHTML))
							pola+='t';
						else{
							patt4=new RegExp("five");
							if (patt4.test(pole.innerHTML))
								pola+='f';
						}
					}
				}
			}
		}
	
	}

	return pola;
}

function setAllOnBoard(board,wymiar){
	wymiar=parseInt(wymiar);
	var digit='';	
	var nr=0;	
	
	for(var x=0;x<wymiar*wymiar;x++){ //od 1 2 do ... 100
		digit=board.substring(x,x+1);
		nr=x+1;
		id=nr;
		p=document.getElementById('p'+id); // m1 m2 m3 m50 ... in1 in2
		
		switch (digit.toLowerCase()){
		case "k":
		case "l":
		case "m":
		case "n":
		case "o":
		case "p":
		case "q":
		case "r":
			p.innerHTML=
				'<input '+ 
				'onclick="intwo('+id+')" '+ 
				'onchange="change('+id+')" '+ 
				'onfocus="focused('+id+')" '+  
				'class="ing" '+
				'name="in'+id+'" '+ 
				'id="in'+id+'" '+ 
				'type="text" '+
				'maxlength="1"'+
				'value="'+(digit.charCodeAt(0)-74)+'">';	
			break;
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
			p.innerHTML=
				'<input '+ 
				'onclick="inone('+id+')" '+ 
				'onchange="change('+id+')" '+ 
				'onfocus="focused('+id+')" '+  
				'class="in" '+
				'name="in'+id+'" '+ 
				'id="in'+id+'" '+ 
				'type="text" '+
				'maxlength="1"'+
				'value="'+digit+'">';	
			break;
		case "9":
			p.innerHTML=
			'<input '+ 
			'onclick="inone('+id+')" '+ 
			'onchange="change('+id+')" '+ 
			'onfocus="focused('+id+')" '+  
			'class="in" '+
			'name="in'+id+'" '+ 
			'id="in'+id+'" '+ 
			'type="text" '+
			'maxlength="1"'+
			'value="">';
			break;
		case "s":
			p.innerHTML=
			'<input '+ 
			'onclick="intwo('+id+')" '+ 
			'onchange="change('+id+')" '+ 
			'onfocus="focused('+id+')" '+  
			'class="ing" '+
			'name="in'+id+'" '+ 
			'id="in'+id+'" '+ 
			'type="text" '+
			'maxlength="1"'+
			'value="">';
			break;
		case "e":
			p.innerHTML=
				'<div class="m0" id="m'+id+'" '+
				'onmousedown="ones(\''+id+'\')" '+
				'></div>';
			break;
		case "i":
			p.innerHTML=
				'<div class="m1" id="m'+id+'" '+
				'onmousedown="two(\''+id+'\')" '+
				'></div>';
			break;
		case "h":
			p.innerHTML=
				'<div class="m2" id="m'+id+'" '+
				'onmousedown="three(\''+id+'\')" '+
				'></div>';
			break;
		case "t":
			p.innerHTML=
				'<div class="m3" id="m'+id+'" '+
				'onmousedown="four(\''+id+'\')" '+
				'></div>';
			break;
		case "f":
			p.innerHTML=
				'<div class="m4" id="m'+id+'" '+
				'onmousedown="five(\''+id+'\')" '+
				'></div>';
			break;
		default:
			break;
		
		}
		
	
		
	}
	
}

function getBoard(wymiar){
	changeInl2m0();
	
	//kod=input.charCodeAt(0); //A-65 ... Z-90       0-48 ... 9 -57
	//	val=String.fromCharCode(parseInt(val)+55);
	
	pola='';
	for(var i=1;i<=wymiar*wymiar;i++){ //od 1 do wymiar^2
		pole=document.getElementById('p'+i); 
		
		inpt=document.forms['forma'].elements['in'+i];
		if(inpt){
				pola+='9'; // there's an island so don't white it
		}
		else{
		
		patt0a=new RegExp("ones");
		patt0b=new RegExp("inone");
		if (patt0a.test(pole.innerHTML) || patt0b.test(pole.innerHTML))
			pola+='0';
		else{
				patt1=new RegExp("two");
				if (patt1.test(pole.innerHTML))
					pola+='i';
				else{
					patt2=new RegExp("three");
					if (patt2.test(pole.innerHTML))
						pola+='h';
					else{
						patt3=new RegExp("four");
						if (patt3.test(pole.innerHTML))
							pola+='t';
						else{
							patt4=new RegExp("five");
							if (patt4.test(pole.innerHTML))
								pola+='f';
						}
					}
				}
			}
		}
	
	}

	return pola;
}

function getAllOnBoard2(wymiar){
	prompt('Actual board state',getAllOnBoard(wymiar))
}

function setAllOnBoard2(wymiar){
	board=prompt("Load saved board state")
	setAllOnBoard(board, wymiar);
}

function getBoard2(wymiar){
	prompt('Actual bridges state',getBoard(wymiar))
}

function setBoard2(wymiar){
	board=prompt("Load saved bridges state")
	setBoard(board, wymiar);
}

function setBoard(board,wymiar){
	wymiar=parseInt(wymiar);
	var digit='';	
	var nr=0;	
	
	for(var x=0;x<wymiar*wymiar;x++){ //od 1 2 do ... 100
		digit=board.substring(x,x+1);
		nr=x+1;
		id=nr;
		p=document.getElementById('p'+id); // m1 m2 m3 m50 ... in1 in2
		
		switch (digit.toLowerCase()){
		case "9":
			break;
		case "0":
			p.innerHTML=
				'<div class="m0" id="m'+id+'" '+
				'onmousedown="ones(\''+id+'\')" '+
				'></div>';
			break;
		case "i":
			p.innerHTML=
				'<div class="m1" id="m'+id+'" '+
				'onmousedown="two(\''+id+'\')" '+
				'></div>';
			break;
		case "h":
			p.innerHTML=
				'<div class="m2" id="m'+id+'" '+
				'onmousedown="three(\''+id+'\')" '+
				'></div>';
			break;
		case "t":
			p.innerHTML=
				'<div class="m3" id="m'+id+'" '+
				'onmousedown="four(\''+id+'\')" '+
				'></div>';
			break;
		case "f":
			p.innerHTML=
				'<div class="m4" id="m'+id+'" '+
				'onmousedown="five(\''+id+'\')" '+
				'></div>';
			break;
		default:
			break;
		
		}
	}
}

function setInputs2(wymiar){
	var inputy=prompt('Load saved islands');
	setInputs(inputy,wymiar);
}

function setInputs(inputy,wymiar){
	wymiar=parseInt(wymiar);
	var digit='';	
	var nr=0;	
	
	for(var x=0;x<wymiar*wymiar;x++){ //od 1 2 do ... 100
		digit=inputy.substring(x,x+1);
		nr=x+1;
		id=nr;
		p=document.getElementById('p'+id); // m1 m2 m3 m50 ... in1 in2
		
		if(digit.toUpperCase()=="N" || digit==""){
			
			p.innerHTML=
					'<div class="m0" id="m'+id+'" '+
					'onmousedown="ones(\''+id+'\')" '+
					'></div>';
		}
		else{
			
			if(digit!="1" && digit!="2" && digit!="3" && digit!="4" && digit!="5" && digit!="6" && digit!="7" && digit!="8"){
				digit="";
			}
						
			p.innerHTML=
			'<input '+ 
				'onclick="inone('+id+')" '+ 
				'onchange="change('+id+')" '+ 
				'onfocus="focused('+id+')" '+  
				'class="in" '+
				'name="in'+id+'" '+ 
				'id="in'+id+'" '+ 
				'type="text" '+
				'maxlength="1"'+
				'value="'+digit+'">';
		
		}
	}
	
}


function getInputs(wymiar){
	wymiar=parseInt(wymiar);
	forma=document.forms['forma'];
		
	inputy='';
	for(var x=1;x<=wymiar*wymiar;x++){ //od 1 2 3 ... do 100
		inpt=forma.elements['in'+x];
		if (inpt){
			val=inpt.value;
			if(val=="")
				val='0';
		}
		else
			val='N';
		inputy+=val;
	}
	
	return inputy;
}

function getInputs2(wymiar){
	prompt('Actual islands state',getInputs(wymiar));
}





