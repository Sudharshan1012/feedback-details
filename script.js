var Feedback=[];
function addFeedback(){
    var string=document.getElementById("feedback").value;
    Feedback.push(string);
 document.getElementById("feedback").value = " ";
    document.getElementById("result").innerHTML = "Feedback Details ";
    document.getElementById("result1").innerHTML = "Successfully Added Feedback Details";
}
 
function displayFeedback(){
    document.getElementById("result").innerHTML="";
    document.getElementById("result1").innerHTML="";
  document.getElementById("result").innerHTML +="Feedback Details ";
    for (var i=0;i<Feedback.length;i++) {
        document.getElementById("result1").innerHTML += "Feedback " + (i+1) + "<br>"+Feedback[i]+"<br>";
    }
    Feedback=[];
}