function signup(){

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

localStorage.setItem("email",email);
localStorage.setItem("password",password);

alert("Account created!");
window.location="login.html";

}

function login(){

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

let storedEmail=localStorage.getItem("email");
let storedPassword=localStorage.getItem("password");

if(email===storedEmail && password===storedPassword){

window.location="dashboard.html";

}
else{

alert("Wrong login details");

}

}

function logout(){

window.location="login.html";

}

function getAnswer(){

let q=document.getElementById("question").value.toLowerCase();

let answer="Sorry I don't know this answer.";

if(q.includes("photosynthesis")){

answer="Photosynthesis is the process by which green plants prepare food using sunlight, carbon dioxide and water.";

}

else if(q.includes("newton")){

answer="Newton's First Law states that a body remains at rest or motion unless acted upon by an external force.";

}

else if(q.includes("capital of india")){

answer="The capital of India is New Delhi.";

}

document.getElementById("answerBox").innerText=answer;

}