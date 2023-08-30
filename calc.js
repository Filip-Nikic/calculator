
const cScreen = document.getElementById('currentOperationScreen')
const lScreen = document.getElementById('lastOperationScreen')

let output= "";

let fNumber = 0; //Big number on current screen
let sNumber = 0; //Small number on upper, last, screen
let tNumber = 0;  //Smallest number when you click =

let lastClick="";
let lastOper="";

let oper = 0; //If arithmetic operations are done twice
let equal=0; //If equals was clicked twice in a row 


const numbers = document.querySelectorAll('.number');
numbers.forEach((number)=>{number.addEventListener('click',()=>{
let input = number.textContent;
calc_output(input);
})
})

document.getElementById("delete").addEventListener("click", reset_all);


function calc_output(input){	
	if (input==="0" && cScreen.textContent==="0") {
		return
	}
	if (input==="." && cScreen.textContent==="0") {
		output="0";
	}
	if (lastClick==="+" || lastClick==="-" || lastClick==="x" || lastClick==="÷") {
		output=input;
	} else{
		output=output+input;
	}
	fNumber=output;
	cScreen.textContent=fNumber;
	lastClick="";
	equal=0;
}

function reset_all(){
	cScreen.textContent=0;
	lScreen.textContent="";
	output="";
	lastClick="";
	lastOper="";
	oper=0;
}


document.getElementById("addition").addEventListener("click", add);
document.getElementById("subtraction").addEventListener("click", subtract);
document.getElementById("multiplication").addEventListener("click", multiply);
document.getElementById("division").addEventListener("click", divide);

function add(){	
	equal=0;
	if (oper) {
		alert(lastOper);
		calculate_new(lastOper, "+");
		lastClick="+";
		lastOper="+";
		return;
	}
	lastClick="+";
	lastOper="+";
	lScreen.textContent=cScreen.textContent+lastClick;
	sNumber=parseFloat(cScreen.textContent);
	oper=1;
}
function subtract(){
	equal=0;
	if (oper) {
		alert(lastOper);
		calculate_new(lastOper, "-");
		lastClick="-";
		lastOper="-";
		return;
	}
	lastClick="-";
	lastOper="-";
	lScreen.textContent=cScreen.textContent+lastClick;
	sNumber=parseFloat(cScreen.textContent);
	oper=1;
}
function multiply(){
	equal=0;
	if (oper) {
		alert(lastOper);
		calculate_new(lastOper, "x");
		lastClick="x";
		lastOper="x";
		return;
	}
	lastClick="x";
	lastOper="x";
	lScreen.textContent=cScreen.textContent+lastClick;
	sNumber=parseFloat(cScreen.textContent);
	oper=1;
}
function divide(){
	equal=0;
	if (oper) {
		alert(lastOper);
		calculate_new(lastOper, "÷");
		lastClick="÷";
		lastOper="÷";
		return;
	}
	lastClick="÷";
	lastOper="÷";
	lScreen.textContent=cScreen.textContent+lastClick;
	fNumber=parseFloat(cScreen.textContent);
	oper=1;
}

document.getElementById("enter").addEventListener("click", calculate);

function calculate(){
	oper=0;	
	if (equal){
		if (lastOper==="+") {		
			sNumber=parseFloat(cScreen.textContent);
			fNumber=sNumber+tNumber;	
			cScreen.textContent=fNumber;
			lScreen.textContent=sNumber+lastOper+tNumber;
			return
			}
		if (lastOper==="-") {
			sNumber=parseFloat(cScreen.textContent);
			fNumber=sNumber-tNumber;	
			cScreen.textContent=fNumber;
			lScreen.textContent=sNumber+lastOper+tNumber;
			return
		}
		if (lastOper==="x") {
			sNumber=parseFloat(cScreen.textContent);
			fNumber=sNumber*tNumber;	
			cScreen.textContent=fNumber;
			lScreen.textContent=sNumber+lastOper+tNumber;
			return
		}
		if (lastOper==="÷") {
			sNumber=parseFloat(cScreen.textContent);
			fNumber=sNumber/tNumber;	
			cScreen.textContent=fNumber;
			lScreen.textContent=sNumber+lastOper+tNumber;
			return
		}
		
	} else{
		equal=1;
		if (lastOper==="+") {		
			tNumber=parseFloat(cScreen.textContent);
			fNumber=sNumber+tNumber;	
			cScreen.textContent=fNumber;
			lScreen.textContent=sNumber+lastOper+tNumber;
			return
			}
		if (lastOper==="-") {
			tNumber=parseFloat(cScreen.textContent);
			fNumber=sNumber-tNumber;	
			cScreen.textContent=fNumber;
			lScreen.textContent=sNumber+lastOper+tNumber;
			return
		}
		if (lastOper==="x") {
			tNumber=parseFloat(cScreen.textContent);
			fNumber=sNumber*tNumber;	
			cScreen.textContent=fNumber;
			lScreen.textContent=sNumber+lastOper+tNumber;
			return
		}
		if (lastOper==="÷") {
			tNumber=parseFloat(cScreen.textContent);
			fNumber=sNumber/tNumber;	
			cScreen.textContent=fNumber;
			lScreen.textContent=sNumber+lastOper+tNumber;
			return
		}
	}	
	
}

function calculate_new(stuff, new_stuff){
	tNumber=0;
	if (stuff==="+") {
		fNumber=parseFloat(cScreen.textContent);
		fNumber=sNumber+fNumber;
		sNumber=fNumber;
		cScreen.textContent=fNumber;
		lScreen.textContent=sNumber+new_stuff;
		return
		}
	if (stuff==="-") {
		fNumber=parseFloat(cScreen.textContent);
		fNumber=sNumber-fNumber;
		sNumber=fNumber;
		cScreen.textContent=fNumber;
		lScreen.textContent=sNumber+new_stuff;
		return
	}
	if (stuff==="x") {
		fNumber=parseFloat(cScreen.textContent);
		fNumber=sNumber*fNumber;
		sNumber=fNumber;
		cScreen.textContent=fNumber;
		lScreen.textContent=sNumber+new_stuff;
		return
	}
	if (stuff==="÷") {
		fNumber=parseFloat(cScreen.textContent);
		fNumber=sNumber/fNumber;
		sNumber=fNumber;
		cScreen.textContent=fNumber;
		lScreen.textContent=sNumber+new_stuff;
		return
	}
}

