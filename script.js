function sayhi(){
    document.write("hello world")
}
sayhi(); 
//var fruits =[3,4];
//document.write(fruits);
//var phrase="to be or not to be";
//var phrase="to be or not to be";
//var name =window.prompt("what is your name?");
//var age =window.prompt("how old are you?");
//document.write("hey"+ name +",how are you today")
//var num1 =window.prompt("enter a number");
//var num2 =window.prompt("enter another number");

//num1= parseFloat(num1);
//num2= parseFloat(num2);
//document.write(num1 + num2);
//document.write(phrase);
//document.write(phrase.length);
//document.write(phrase.substring(4,8));
//document.write(phrase.charAt(1));
//document.write(phrase.lastIndexOf("e"));
//document.write(phrase.charAt(2));
//document.write(phrase +phrase);
/*var messages=document.getElementById("messages");
messages.style.color="red";
messages.style.backgroundcolor="blue";
var textbox=document.getElementById("textbox");
var button=document.getElementById("button");
button.addEventListener("click", function(){
    var newmessage=document.createElement("li");
    newmessage.innerHTML=textbox.value;
    messages.appendChild(newmessage);
    textbox.value="text";

})*/
/*var image=document.getElementById("image");
image.addEventListener("mouseover", function(){
    this.style="box-shadow: 20px 20px 20px red";
    this.width="550";
})
function handleclick(element){
    element.innerHTML="sent"
    element.style="background-color:blue;"
}*/
/*var password ="wordpass";
var response;
var entrycount=0;
var entrylimit=3;
var error=false;
while(response!=password && !error){
    if(entrycount<entrylimit){
        response=window.prompt("enter password");
    entrycount++;

    }else{
        error=true;
    }
    

}
if(error){
    alert("too many entries");
}else
alert("you got it");*/
var questions=[
    {
        prompt:"who are you?",
        answer:"man"
    },
    {
        prompt:"how are you?",
        answer:"fine"
    },
]
var score=0;
for (var i=0;i< questions.length; i++) {
    var response=window.prompt(questions[i].prompt);
    if (response== questions[i].answer) {
        score++;
        alert("correct");
        
    }else{
        alert("false");
    

    }
    
}


alert("yout score is"+score)