/*
 ...191135
 ..64.....71
 ..31........57561528..36.......3145.79....91.31231518.51282771.611912
 ...414916...15.....66.77........19..153...84....75....635......31...71
 ........56..15411847. 66........86..53.14.53....96....412744...83451
 .929.....41.47........81........15..65..3218....51....72.......39...34
 ..86....15..59........28........79..29...673....62....114......35....16
 ...27335....77........7313841..5631.59....44....38....41465716.11.....984
 ..........................................................................................
 .003338070504090210021240150501001505070210061006150112030415070104070708131305150904.061.
 .Made.by.Jack.Splinter.2022.12.04.........................................................		
*/

var krok=0;
var stepsy = new Array;

stepsy[0]='0';
var pointedStep=0;
var znakKroku=',';
var focuss=1;

var stateBoard='';
var pola='';
var czas=0;
var idTimeout=0;

var clicked=false;
var settingBoard=false;
var drawingBoard=true;
var solvingBoard=false;
var wymiar=16;
var unlocked=false;
var unlocked1=false;
var unlocked2=false;
var unlocked3=false;
var startv=0;
var endv=0;
var endH=0;
var startH=0;
var whereI=0;
var whereJ=0;
var dontStep=false;
function onLoud(){

	
		wymiar=parseInt(document.getElementById('wymiar').innerHTML);
		drawBoard();
		
		document.getElementById('rightDemoDescription').style.display="inline";
		document.getElementById('demoBoardStateButton').style.display="inline";
		document.getElementById('demoInputsStateButton').style.display="inline";
		document.getElementById('demoAllStateButton').style.display="inline";
		document.getElementById('timer').style.display="inline";

		document.getElementById('setB').style.display="inline";
		document.getElementById('drawB').style.display="inline";
		document.getElementById('playB').style.display="inline";

		document.getElementById('drawB').style.background="green";
		unlocked=true;		
		changeSize(16)
}

function lock(){


	unlocked=false;
	unlocked1=false;
	unlocked2=false;
	unlocked3=false;
	document.getElementById('unlockSize1').innerHTML="Lock 1";
	document.getElementById('unlockSize2').innerHTML="Lock 2";
	document.getElementById('unlockSize3').innerHTML="Lock 3";
	document.getElementById('unlockSize1').style.background="";
	document.getElementById('unlockSize2').style.background="";
	document.getElementById('unlockSize3').style.background="";
}

function unlockSize(nr){
	unlocked=false;
	if (nr==1){
		if(unlocked1){
			unlocked1=false;
			document.getElementById('unlockSize1').innerHTML="Lock 1";
			document.getElementById('unlockSize1').style.background="";
		}
		else{
			unlocked1=true;
			document.getElementById('unlockSize1').innerHTML="Ready";
			document.getElementById('unlockSize1').style.background="green";
		}
	}
	if (nr==2){
		if(unlocked2){
			unlocked2=false;
			document.getElementById('unlockSize2').innerHTML="Lock 2";
			document.getElementById('unlockSize2').style.background="";
		}
		else{
			unlocked2=true;
			document.getElementById('unlockSize2').innerHTML="Ready";
			document.getElementById('unlockSize2').style.background="green";
		}
	}
	if (nr==3){
		if(unlocked3){
			unlocked3=false;
			document.getElementById('unlockSize3').innerHTML="Lock 3";
			document.getElementById('unlockSize3').style.background="";
		}
		else{
			unlocked3=true;
			document.getElementById('unlockSize3').innerHTML="Ready";
			document.getElementById('unlockSize3').style.background="green";
		}
	}
	if(unlocked1 && unlocked2 && unlocked3){
	unlocked=true;}
}

function changeSize(size){
	if(unlocked){
		lock();
	stepsy=[];
	krok=0;
	navigate();
	document.getElementById('innav').value='0';
	wymiar=size;
	document.getElementById('wymiar').innerHTML=size;
	switch (size){
		case 16:
			document.getElementById('size16').style.backgroundColor='green';
			document.getElementById('size25').style.backgroundColor='black';
			document.getElementById('size36').style.backgroundColor='black';

			document.getElementById('PAGE').style.width="890px";
			document.getElementById('CONTENT').style.width="650px";
			document.getElementById('CONTENT').style.height="586px";
			document.getElementById('MENU_RIGHT').style.height="586px";
			document.getElementById('MENU_LEFT').style.height="596px";
			document.getElementById('mostq').style.width="453px";
			document.getElementById('mostq').style.height="453px";

			
	drawBoard(size);
	rows = Array.from(document.getElementsByClassName('row'));
			rows.forEach(row => {
				row.style.width="453px";
			  });
			break;
		case 25:
			document.getElementById('size16').style.background='black';
			document.getElementById('size25').style.background='green';
			document.getElementById('size36').style.background='black';
			
			document.getElementById('PAGE').style.width="980px";
			document.getElementById('CONTENT').style.width="740px";
			document.getElementById('CONTENT').style.height="786px";
			document.getElementById('MENU_RIGHT').style.height="786px";
			document.getElementById('MENU_LEFT').style.height="796px";
			document.getElementById('mostq').style.width="700px";
			document.getElementById('mostq').style.height="700px";
			


	drawBoard(size);
	rows = Array.from(document.getElementsByClassName('row'));
			rows.forEach(row => {
				row.style.width="700px";
			  });
			break;
		case 36:
			document.getElementById('size16').style.background='black';
			document.getElementById('size25').style.background='black';
			document.getElementById('size36').style.background='green';
			
			document.getElementById('PAGE').style.width="1290px";
			document.getElementById('CONTENT').style.width="1040px";
			document.getElementById('CONTENT').style.height="1090px";
			document.getElementById('MENU_RIGHT').style.height="1090px";
			document.getElementById('MENU_LEFT').style.height="1100px";
			document.getElementById('mostq').style.width="1010px";
			document.getElementById('mostq').style.height="1010px";
			
	drawBoard(size);
	rows = Array.from(document.getElementsByClassName('row'));
			rows.forEach(row => {
				row.style.width="1010px";
			  });
			break;
			
		default: break;

		}	}
}

function drawBoard(){
	var str='<form name="forma" action="">';
    
	for (i=1;i<=wymiar;i++){ //rows
			str+='<div class="row">';
		for (j=1;j<=wymiar;j++){ //columns
			id=(i-1)*wymiar+j;
			if(i%2==1 && j%2==1 || i%2==0 && j%2==0){
				 str+='<div class="p" id="p'+id+'">'+
						'<input '+ 
							'onclick="inone('+id+')" '+
							'onchange="change('+id+')" '+
							'onfocus="focused('+id+')" '+
							'class="in" '+
							'name="in'+id+'" '+
							'id="in'+id+'" '+
							'type="text" '+
							'maxlength="1"'+
							'></div>'; 
			}
			else{
				 str+='<div class="p" id="p'+id+'">'+
						'<input '+
							'onclick="intwo('+id+')" '+
							'onchange="change('+id+')" '+
							'onfocus="focused('+id+')" '+ 
							'class="inl" '+
							'name="in'+id+'" '+
							'id="in'+id+'" '+
							'type="text" '+
							'maxlength="1"'+
							'></div>'; 
			}
		} 
		str+='</div>'; //end of row
	}
	str+='</form>';
	
	document.getElementById('mostq').innerHTML=str;
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

function drawB(){


	settingBoard=false;
	drawingBoard=true;
	solvingBoard=false;
	
	document.getElementById('drawB').style.background="green";
	document.getElementById('setB').style.background="black";
	document.getElementById('playB').style.background="black";
		
}

function changeInl2m0(){
	
	patt0=new RegExp("inl");

		for(var i=1;i<=wymiar*wymiar;i++){
		p=document.getElementById('p'+i); // p1 p2 .. p100 
		if (patt0.test(p.innerHTML)){
			p.innerHTML='<input class="m0" id="m'+i+'" '+
				'oninput="cli('+i+')" onmousedown="ones(\''+i+'\')" '+
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

	if(solvingBoard==true){
		setStartEndV(id);
		if (startv==0 || endv==0){ // endh
			three(id);
			return 0;
		}

		if ((whereI==wymiar || whereI==1) ){
			three(id);
			return 0;
		}
		stretchV(id,'i',5);
	}
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
			'<input class="m1" id="m'+id+'" '+
			'onmousedown="two(\''+id+'\')" '+
			'></div>';
	}
	step();
	//stretchH(id,'t',4);

}



function two(id){
	
	if(solvingBoard==true){
	stretchV(id,'h',5);
	}
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
			'<input class="m2" id="m'+id+'" '+
			'onmousedown="three(\''+id+'\')" '+
			'></div>';
	}
	step();

}



function three(id){
	
	if(solvingBoard==true){
		setStartEndH(id);
		stretchV(id,'E',5);

		if (startH==0 || endH==0){ // endh
			five(id);
			return 0;
		}

		if ((whereJ==wymiar || whereJ==1) &&(whereI!=1 && whereI!=wymiar) ){
			
			five(id);
			return 0;
		}
		stretchH(id,'t',4);
	}
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
			'<input class="m3" id="m'+id+'" '+
			'onmousedown="four(\''+id+'\')" '+
			'></div>';
	}
	step();

}



function four(id){
	
	if(solvingBoard==true){
		stretchH(id,'f',4);
	}
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
			'<input class="m4" id="m'+id+'" '+
			'onmousedown="five(\''+id+'\')" '+
			'></div>';
	}
	step();

}


function five(id){
	
	if(solvingBoard==true){
		stretchH(id,'E',4);
	}
	

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
			'<input class="m0" id="m'+id+'" '+
			'oninput="cli('+id+')" onmousedown="ones(\''+id+'\')" '+
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
	clearTimeout(idTimeout);
		document.getElementById('stoper').innerHTML='00:00:00'
			document.getElementById('pause').innerHTML=
				'<img src="images/play2.png" onclick="startStoper()" alt="" title="start">'
			czas=0	
}

function pauseStoper(){
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
		//alert("solwing");
		el.value='X';		
	}
	
}


// clear Input field outside a circle (island)
function cli(id){ 	
	document.forms['forma'].elements['m'+id].value="";
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
		
		//stepsy[0]=getBoard();
		stepsy[0]=getAllOnBoard();
	}
	}
	lock();
}
	
function step(){
	if(solvingBoard==true){
	lock();
	krok++;
	
	stepsy[krok]=getAllOnBoard();
	pointedStep=krok;
	navigate();
	}
}

function goBackTo(step){
	
	
	if (step>=0 && step<=krok){
		setAllOnBoard(stepsy[step]);
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

//document.getElementById('innav').focus();
	
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


function clearBoard(){

	inputy=getInputs();
	
	var digit='';	
	var nr=0;	
	
	for(var x=0;x<wymiar*wymiar;x++){ //od 1 2 do ... 100
		digit=inputy.substring(x,x+1);
		nr=x+1;
		id=nr;
		p=document.getElementById('p'+id); // m1 m2 m3 m50 ... in1 in2
		
		if(digit=="N"){
			p.innerHTML=
				'<input class="m0" id="m'+id+'" '+
				'oninput="cli('+id+')" onmousedown="ones(\''+id+'\')" '+
				'>';
		}
		
	}
	
}


function clearGrays(){
	var board=getBoard();
	for(var i=0;i<wymiar*wymiar;i++){
		board=board.replace('2','0');
	}
	setBoard(board);	
}

function clearInputs(){
	for(i=1;i<=3;i++){
		document.getElementById('solution'+i).style.visibility='hidden';
		document.getElementById('sample'+i).style.background='';
	}

	var dwa='';
	for(var i=0;i<wymiar*wymiar;i++){
		dwa+='n';
	}

	setInputs(dwa);
}



function sample(id){
	

	playB();
	if(wymiar==16){
		setInputs(sample16[id]);

	}
	else if(wymiar==25){
		setInputs(sample25[id]);
	}
	else if(wymiar==36){
		setInputs(sample36[id]);
	}
	for(i=1;i<=3;i++){
		if(i==id){
			document.getElementById('solution'+i).style.visibility='visible';
			document.getElementById('sample'+i).style.background='green';
		}
		else{
			document.getElementById('solution'+i).style.visibility='hidden';
			document.getElementById('sample'+i).style.background='';
		}
	}

}

function solve(id){
	
	if(wymiar==16){
		setAllOnBoard(solution16[id]);
	}
	else if(wymiar==25){
		setAllOnBoard(solution25[id]);
	}
	else if(wymiar==36){
		setAllOnBoard(solution36[id]);
	}

	document.getElementById('solution'+id).style.visibility='hidden';
}

function getAllOnBoard(){
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



function setAllOnBoard(board){
	
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
				'<input class="m0" id="m'+id+'" '+
				'oninput="cli('+id+')" onmousedown="ones(\''+id+'\')" '+
				'></div>';
			break;
		case "i":
			p.innerHTML=
				'<input class="m1" id="m'+id+'" '+
				'onmousedown="two(\''+id+'\')" '+
				'></div>';
			break;
		case "h":
			p.innerHTML=
				'<input class="m2" id="m'+id+'" '+
				'onmousedown="three(\''+id+'\')" '+
				'></div>';
				break;
		case "t":
			p.innerHTML=
				'<input class="m3" id="m'+id+'" '+
				'onmousedown="four(\''+id+'\')" '+
				'></div>';
			break;
		case "f":
			p.innerHTML=
				'<input class="m4" id="m'+id+'" '+
				'onmousedown="five(\''+id+'\')" '+
				'></div>';
			break;
		default:
			break;
		
		}
		
	
		
	}
	
}

function getBoard(){
	changeInl2m0();
	
	
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

function getAllOnBoard2(){
	prompt('Actual board state',getAllOnBoard())
}

function setStartEndV(id){
	startv=0;
	endv=0;
	isStartv=false;
	isEndv=false;
	setWhereIJ(id);


	// -------------------------------------------vertical
	if (whereI!=1 & whereI!=wymiar){
		for(k=whereI+1;k<=wymiar;k++){
			polak=pola[(whereJ-1)+wymiar*(k-1)];
			if(/[tfK-R1-9]/.test(polak)) { // only if island on the down !
				if(!isEndv){
					if(/[tf]/.test(polak)) {
						endv=0;
					}
					else{
						endv=k;
					}
					isEndv=true;
				}
			}
		}
		for(k=whereI-1;k>=0;k--){
			polak=pola[(whereJ-1)+wymiar*(k)];
			if(/[tfK-R1-9]/.test(polak)) { // only if island on the up
				if(!isStartv){
					if(/[tf]/.test(polak)) {
						startv=0;
					}
					else{
						startv=k+1;
						}
					isStartv=true;
				}
			}
			
		}
	}
}

function setWhereIJ(id){
	
	whereamI=0;
	whereI=0;
	whereJ=0;
	for (i=1;i<=wymiar;i++){ //rows
		for (j=1;j<=wymiar;j++){ //columns
			whereamI++;
			if (whereamI==id){
				//alert(i+" - "+j);
				whereI=i;
				whereJ=j;
			}	
		}
	}
}

function setStartEndH(id){
	isStartH=false;
	isEndH=false;
	startH=0;
	endH=0;
	setWhereIJ(id);
	

	if (whereJ!=1 & whereJ!=wymiar){
		for(k=whereJ+1;k<=wymiar;k++){
			polak=pola[(whereI-1)*wymiar+k-1];
			if(/[ihK-R1-9]/.test(polak)) { // only if island on the right !
				if(!isEndH){
					if(/[ih]/.test(polak)) {
						endH=0;
					}
					else{
						endH=k;
					}
					isEndH=true;
				}
			}
		}
		//todo: if green island then do nothing KLMNOPQR !!! 
		for(k=whereJ-1;k>=1;k--){
			polak=pola[(whereI-1)*wymiar+k-1];
			if(/[ihK-R1-9]/.test(polak)) { // only if island on the left
				if(!isStartH){
					
					if(/[ih]/.test(polak)) {
						startH=0;
					}
					else{
						startH=k;
					}
					isStartH=true;
				}

			}
		}
}
}

function stretchH(id,type,dir){ // 4 - horizontal 5- vertical
	pola2='';
	board=getAllOnBoard();
	setStartEndH(id);
	
	setWhereIJ(id);
	if (whereJ==wymiar && /[tf]/.test(type)){
		return 0;
	}
	if (whereJ==1 && /[tf]/.test(type)){
		return 0;
	}


	

	if(!startH ){
		return 0;
	}

	whereamI=0;
		for (i=1;i<=wymiar;i++){ //rows
			for (j=1;j<=wymiar;j++){ //columns
				if(whereI==i && ( j<=startH || j>=endH)){
					pola2+=pola[whereamI];
				}else if(whereI==i && ( j>startH && j<endH)){
					pola2+=type;
				}else{
					pola2+=pola[whereamI];
				}
				whereamI++;
				
				}
			}
		
	setAllOnBoard(pola2);

}


function stretchV(id,type,dir){ // 4 - horizontal 5- vertical
	pola2='';
	whereamI=0;
	board=getAllOnBoard();
	setStartEndV(id);
	
	
	setWhereIJ(id);

	if (whereI==wymiar && /[ih]]/.test(type)){
		return 0;
	}
	if (whereI==1 && /[ih]/.test(type)){
		return 0;
	}
	
	whereamI=0;

		pola3='';
		whereamI=0;
		if(1==1){
		for (i=1;i<=wymiar;i++){ //rows
			for (j=1;j<=wymiar;j++){ //columns
			
				if(whereJ==j && ( i<=startv || i>=endv)){
					pola3+=pola[whereamI];
				}else
				if(whereJ==j && i>startv && i<endv && startv>0) {
					pola3+=type;
				}
				else{
					pola3+=pola[whereamI];
				}
				whereamI++;
				}
			}
		}
		pola2=pola3;
		
	

	setAllOnBoard(pola2);

}
function clearGreens(){
	board=getAllOnBoard();
	board=board.replaceAll('K',1);
	board=board.replaceAll('L',2);
	board=board.replaceAll('M',3);
	board=board.replaceAll('N',4);
	board=board.replaceAll('O',5);
	board=board.replaceAll('P',6);
	board=board.replaceAll('Q',7);
	board=board.replaceAll('R',8);
	setAllOnBoard(board);
	
}

function setAllOnBoard2(){
	board=prompt("Load saved board state")
	for(i=1;i<=3;i++){
		document.getElementById('solution'+i).style.visibility='hidden';
		document.getElementById('sample'+i).style.background='';
	}
	setAllOnBoard(board);
}

function getBoard2(){
	prompt('Actual bridges state',getBoard())
}

function setBoard2(){
	board=prompt("Load saved bridges state")
	for(i=1;i<=3;i++){
		document.getElementById('solution'+i).style.visibility='hidden';
		document.getElementById('sample'+i).style.background='';
	}
	setBoard(board);
}

function setBoard(board){
	
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
				'<input class="m0" id="m'+id+'" '+
				'oninput="cli('+id+')" onmousedown="ones(\''+id+'\')" '+
				'></div>';
			break;
		case "i":
			p.innerHTML=
				'<input class="m1" id="m'+id+'" '+
				'onmousedown="two(\''+id+'\')" '+
				'></div>';
			break;
		case "h":
			p.innerHTML=
				'<input class="m2" id="m'+id+'" '+
				'onmousedown="three(\''+id+'\')" '+
				'></div>';
			break;
		case "t":
			p.innerHTML=
				'<input class="m3" id="m'+id+'" '+
				'onmousedown="four(\''+id+'\')" '+
				'></div>';
			break;
		case "f":
			p.innerHTML=
				'<input class="m4" id="m'+id+'" '+
				'onmousedown="five(\''+id+'\')" '+
				'></div>';
			break;
		default:
			break;
		
		}
	}
}

function setInputs2(){
	for(i=1;i<=3;i++){
		document.getElementById('solution'+i).style.visibility='hidden';
		document.getElementById('sample'+i).style.background='';
	}
	var inputy=prompt('Load saved islands');
	setInputs(inputy);
}

function setInputs(inputy){
	
	var digit='';	
	var nr=0;	
	
	for(var x=0;x<wymiar*wymiar;x++){ //od 1 2 do ... 100
		digit=inputy.substring(x,x+1);
		nr=x+1;
		id=nr;
		p=document.getElementById('p'+id); // m1 m2 m3 m50 ... in1 in2
		
		if(digit.toUpperCase()=="N" || digit==""){
			
			p.innerHTML=
					'<input class="m0" id="m'+id+'" '+
					'oninput="cli('+id+')" onmousedown="ones(\''+id+'\')" '+
					'>';
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


function getInputs(){
	
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

function getInputs2(){
	prompt('Actual islands state',getInputs());
}





