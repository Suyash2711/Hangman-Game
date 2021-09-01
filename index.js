
var questions = ["History's most expensive Goalkeeper","Signed his first contract on a napkin","Swedish professional footballer who plays as a striker for Serie A club Milan","A Chelsea legend in terms of his club goals","He would miss matches because he had a fear of flying","Real Madrid's right winger","Never got caught offside","Never got a red card","He used to touch the crossbar everytime real madrid scored a goal","He holds the record for most clean sheets kept in a single season, with 24"]; //Array of questions
var hint = ["£71.6m move from Athletic Bilbao to Chelsea","FC Barcelona sporting director Carles Rexach was so impressed with his skills that he wanted to make a contract immediately and there was only a tissue paper.","At 10 years old he was used as a second half sub and scored 8 goals.","Not just a footballer in his home country, he helped stop a civil war in Ivory Coast after qualifying for the World Cup","Nicknamed the non-flying Dutchman ","Used to be a rugby player when he was young but changed to football","Real Madrid's current manager","German retired professional footballer who played as a right back or defensive midfielder","Popularly dubbed 'San Iker' for his ability to produce spectacular saves","He has the title of Premier League history's most clean sheets with 202"]; //Array of hints
var answer = ["KEPA ARRIZABALAGA","LIONEL MESSI","ZLATAN IBRAHIMOVIC","DIDIER DROGBA","DENNIS BERGKAMP","GARETH BALE","ZINEDINE ZIDANE","PHILIPPE LAHM","IKER CASILLAS","PETR CECH"]; //Array of answers
var random = Math.floor(Math.random()*questions.length); //Generate random number

var selectedQ = questions[random]; //Selected question

var selectedH = hint[random]; //Selected hint

var selectedA = answer[random]; //Selected answer

var category = "Football"; //Choose category

var lives= 0;
var live = 7;
var win=0;

var space= [];

var wrong= [];

var SPc=['Tab','Control','Shift','Meta','Alt','Enter','Backspace',']','[',';',"'",'"',',','.','/','1','2','3','4','5','6','7','8','9','0'];
var repeat=[];
var totalMistakes = 7;

line();
line2();
line3();

document.getElementById("hint").style.display = "none";

document.getElementById('question').innerHTML = selectedQ;

document.getElementById('hint').innerHTML = selectedH;

document.getElementById('category').innerHTML = category;

function show()    //Making the hint button show hint on click
{
    var element = document.getElementById("hint");
    element.classList.add("show");
}

for(var i=0; i < selectedA.length; i++)  //Generating dashes and "//" for spaces
    {
        if(answer[random][i] == " ")
            {
                space.push("/");
            }
        else
            {
                space.push("_");
            }
    }

        document.getElementById("dash").innerHTML = space.join(" ");

function enter(e)
{
    
    console.log(e.key);
        if(SPc.indexOf(e.key)==-1&&repeat.indexOf(e.key.toUpperCase())==-1){
            repeat.push(e.key.toUpperCase());
            if(answer[random].indexOf(e.key.toUpperCase()) != -1){
                for(var t=0; t< answer[random].length; t++)
                {   
                    if(e.key.toUpperCase() == selectedA[t])
                        {
                            space[t]= e.key.toUpperCase();
                                    document.getElementById("dash").innerHTML = space.join(" ");
                                        win+=1;
                                        if(win == selectedA.length-1)	
                                        {
                                            document.getElementById("category").innerHTML = "Congratulations, YOU WON. Refresh to start again.";	
                                        }
                        }
                }
            }else{
                    wrong.push(e.key);
                    var s="Wrong Alphabets: ";
                    wrong.forEach(function(item){
                        s+=item.toUpperCase()+" ";
                    });
                    document.getElementById('wrongAlpha').innerText=s;
                    live-=1;
                    document.getElementById('lives').innerText="Lives : "+live;
                    console.log("wrong");
                    lives +=1;
                    console.log(lives);
                    switch(lives){
                        case 1: line4();
                            break;
                        case 2: line5();
                            break;
                        case 3: line6();
                            break;
                        case 4: line7();
                            break;
                        case 5: line8();
                            break;
                        case 6: line9();
                            break;
                        case 7: line10();
                    }
            }
        }else if(repeat.indexOf(e.key.toUpperCase())!=1 && SPc.indexOf(e.key)==-1){
            alert("Duplicate Entry "+e.key.toUpperCase());
        }
       
    }
function line()
{
var canvas = document.getElementById("anim");
var ctx = canvas.getContext("2d");
ctx.moveTo(20, 200);
ctx.lineTo(20, 30);
ctx.stroke();
}

function line2()
{
var canvas = document.getElementById("anim");
var ctx = canvas.getContext("2d");
ctx.moveTo(10,50);
ctx.lineTo(200,50);
ctx.stroke();
}

function line3()
{
var canvas = document.getElementById("anim");
var ctx = canvas.getContext("2d");
ctx.moveTo(175,30);
ctx.lineTo(175,70);
ctx.stroke();
ctx.strokeStyle = "#fff";
}

function line4()
{
var canvas = document.getElementById("anim");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(175, 90, 20, 0, 2 * Math.PI);
ctx.stroke();
ctx.strokeStyle = "#fff";
}

function line5()
{
var canvas = document.getElementById("anim");
var ctx = canvas.getContext("2d");
ctx.moveTo(175,110);
ctx.lineTo(175,150);
ctx.stroke();
}

function line6()
{
var canvas = document.getElementById("anim");
var ctx = canvas.getContext("2d");
ctx.moveTo(175,150);
ctx.lineTo(160,180);
ctx.stroke();
ctx.strokeStyle = "#fff";
}

function line7()
{
var canvas = document.getElementById("anim");
var ctx = canvas.getContext("2d");
ctx.moveTo(175,150);
ctx.lineTo(190,180);
ctx.stroke();
}

function line8()
{
var canvas = document.getElementById("anim");
var ctx = canvas.getContext("2d");
ctx.moveTo(175,120);
ctx.lineTo(190,150);
ctx.stroke();  
}

function line9()
{
var canvas = document.getElementById("anim");
var ctx = canvas.getContext("2d");
ctx.moveTo(175,120);
ctx.lineTo(160,150);
ctx.stroke();  
}

function line10()
{
var canvas = document.getElementById("anim");
var ctx = canvas.getContext("2d");
ctx.moveTo(130,180);
ctx.lineTo(220,100);
ctx.stroke();  
ctx.strokeStyle = "#900d0d";
document.getElementById("category").innerHTML = "Better luck next time, Refresh to try again";
    console.log(win);
}