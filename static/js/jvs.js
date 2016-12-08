var k=0;
var words = ["Chelsea","Barcelona","Madrid","Manchester","Arsenal","Paris","Munich","Juventus","Milan"];
var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var pushans = [];
var iscorrect = false;
var iscorrect_letter = false;
var total_no_ans;
var correct_ans = 0;
var positions = [];
var genarray = [];
var times_gameloop_run = 1;
var level = 2;
var userclicked = [];
String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}
function myFunction() {
    var x = Math.floor((Math.random() * 25) + 0);
    return x;
}
function myFunction1() {
    var x = Math.floor((Math.random() * 9) + 0);
    return x;
}
function random_storing_letters() {
    var x = Math.floor((Math.random() * 9) + 0);
    return x;
}
// A $( document ).ready() block.
function repeatwords() {
$("#start_screen_background").hide(); 
$("#start_screen").hide();
$("#screen4").hide();
$("#screen3").hide();
$("#screen1").hide();
$("#screen2").show();
var ct1= myFunction1();
var x = Math.random();
var y = Math.round(x);
var z;
if(y == 0)
{
	z = words[ct1].shuffle();
	iscorrect = false;
}
else if (y == 1)
{
	z = words[ct1];
	iscorrect = true;
}
$("#words").html(z);
}

function repeatletters() {
	$("#start_screen_background").hide(); 
	$("#start_screen").hide();
	$("#screen4").hide();
	$("#screen3").hide();
	$("#screen2").hide();
	$("#screen1").show();
	var ct = myFunction();
	pushans.push(letters[ct]);
	console.log(pushans);
	$("#leer").html(letters[ct]);
}

function checkans2(abc) {
	userclicked.push(abc.innerHTML);
	console.log(userclicked);
	var a = pushans.indexOf(abc.innerHTML);
	if(a === -1)
	iscorrect_letter = false;
	else 
	iscorrect_letter = true;
	if(userclicked.length===2)
	call_result();
}
 
function showletters() {

$("#start_screen").hide();
$("#screen1").hide();
$("#screen2").hide();
$("#screen3").hide();
$("#screen4").show();

for(var i=0;i<9;i++)				//randomly generating an array which shows letters to chose from. genarray
{
	var rn = myFunction();
	genarray.push(letters[rn]);
}
console.log(genarray);
for(var o=0;o<2;o++)				//randomly replacing 
{
	var replace = Math.floor(( Math.random() * 9) + 0);
	positions.push(replace);
	console.log(positions);
	genarray[replace] = pushans[o];
}
console.log(genarray);
//creating table

function appendText() {

	var content = "<table id = 'table1'>"
	for(i=0; i<3; i++)
	{
		content +='<tr>';
		for(j=0;j<3;j++)
		{
			console.log(genarray[k]);
			content += '<td onclick = "checkans2(this)">' + genarray[k] + '</td>';
			k++;
		}
		content +='</tr>';
	}
	content += "</table>"
	$('#screen4').append(content);
}
appendText();
}

function gameloop() {
	
	if(times_gameloop_run % 5 === 0)
		repeatletters();
	else
		repeatwords();
	
	times_gameloop_run++;
}


function click_handler(abc) {
	if(abc === 1 && iscorrect === true)
	{
		correct_ans++;
	}
	else if(abc === 2 &&iscorrect===false)
	{
		correct_ans++;
	}
}


function call_result() {
	document.getElementById("result_words").innerHTML = "no of correct ans:"+correct_ans;
	if(iscorrect_letter === true)
	{
	document.getElementById("result_letter").innerHTML = "recalled correctly";
	}
	else
	document.getElementById("result_letter").innerHTML = "unable to recall";
	$("#screen2").hide();
	$("#screen1").hide();
	$("#screen4").hide();
	$("#screen3").show();
}

var start_game = function(callback) 
{
	
	var timesRun = 0;
	var interval = setInterval(function(){
    timesRun += 1;
    gameloop();
	//console.log(timesRun);
	if(timesRun === 11)
	{
		clearInterval(interval);
		callback();
	}
	
	}, 2000);
	
	
}

$( document ).ready(function() {
    
	
	$("#start_screen").show();
	$("#screen1").hide();
	$("#screen2").hide();
	$("#screen3").hide();
	$("#screen4").hide();

});
	
   