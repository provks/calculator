var expression = '', number, decimal, equal, operator, allowSR = true;
var textview = document.forms['calculator']['textview'];

function check(exp) {
	if (exp == Infinity) {
		expression = "Infinity, aakhir karna kya chahte ho?";
	}
	console.log(exp);
	if (exp == NaN) {
		expression = "Error";
	}
}

function insertNum(num) {
	if (equal) {
		expression = num;
		textview.value = expression;
		number = true;
		equal = false;
	}
	else {
		expression = textview.value + num;
		textview.value = expression;
		number = true;
	}
	if (operator) decimal = false;
	// SR('a');
}

function insertOp(op) {
	textview.value = expression + op;
	operator = true;
	equal = false;
	allowSR = false;
	// SR('a');
}

function insertDec() {
	if (number && !decimal) {
		textview.value = expression + '.';
		decimal = true;
		operator = false;
	}
}

function calc() {
	if (expression) {
		// setting correct operators
		expression = expression.toString().replace("÷", "/");
		expression = expression.toString().replace("×", "*");
		expression = expression.toString().replace("−", "-");
		expression = eval(expression);
		check(expression);
		textview.value = expression;
		equal = true;
		decimal = false; 
		number = false;
		allowSR = true;
		// SR('a');
	}
}

function reset() {
	expression = "";
	textview.value = expression;
	decimal = false;
}

function backSpace() {
	expression = textview.value;
	expression = expression.substring(0, expression.length - 1);
	textview.value = expression;
}

function sqroot() {
	expression = Math.sqrt(expression);
	check(expression);
	textview.value = expression;
}


function sq() {
	calc();
	expression = expression * expression;
	check(expression);
	textview.value = expression;
}