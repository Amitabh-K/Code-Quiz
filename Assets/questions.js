var quizSet1 = {
	question:function questionSelect(num){
					var question = questionSet1[num];
					return question;
				},
	selection:function selectionSelect(num){
					var selection = selectionSet1[num];
					return selection;
				},
	answer:function answerSelect(num){
					var answer = answerSet1[num];
					return answer;
				},
	
};

var quizSet2 = {
	question:function questionSelect(num){
					var question = questionSet2[num];
					return question;
				},
	selection:function selectionSelect(num){
					var selection = selectionSet2[num];
					return selection;
				},
	answer:function answerSelect(num){
					var answer = answerSet2[num];
					return answer;
				},					
};


//for quiz set 1
var questionSet1 = [
	"The method or operator used to identify the array is",					
	"Consider the following code snippet: var grand_Total=eval(“10*10+5”); The output for the above statement would be :" ,
	"A function with no return value is called?",
	"JavaScript is interpreted by ______.",					
	"A ________ object is a reference to one of the classes in a Java package, such as"			
];

var selectionSet1 = [
	"isarrayType()","==","===","typeof",
	"10*10+5","105 as a string","105 as an integer value","Exception is thrown",
	"Procedures","Method","Static function","Dynamic function",
	"Client","Server","Object","None of the above",
	"JavaArray","JavaObject","JavaClass","JavaObject"
];

var answerSet1 = [
	"d",					
	"c",
	"a",
	"a",					
	"c"
	
];

//for quiz set 2
var questionSet2 = [
		"The _______ method of an Array object adds and/or removes elements from an array.",
		"How to write an ‘if’ statement for executing some code.If “i” is NOT equal to 5?",
		"Which of the following is not a valid JavaScript variable name?",						
		"What is the JavaScript syntax for printing values in Console?",						
		"What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?"
];

var selectionSet2 = [
	"Reverse","Shift","Slice","Splice",
	"if(i<>5)","if i<>5","if(i!=5)","if i!=5",
	"2names","_first_and_last_names","FirstAndLast","None of the above)",					
	"print(5)"," console.log(5);"," console.print(5);","print.console(5);",					
	"strip()","trim()","stripped()","trimmed()"
];

var answerSet2 = [					
	"d",
	"c",
	"A",				
	"b",					
	"b"
];










