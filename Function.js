let count =0;
let countRev =0;
const emailTest = 'test123@gmail.com';
const passwordTest = 'test123';
const selArray = ['ex1','ex2','ex3'];
const revArray = ['box1','box2','box3'];


// function for the mobile menu selector
const myFunction = () => {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//function to select the next element for the mobile selector
const next = () =>{
  count++
  count = Math.abs(count % 3);
  
  
  for( i =0; i<selArray.length;i++){
    if(selArray[i] != selArray[count]){
      document.getElementById(selArray[i]).style.display = 'none';
    }
    else{
      document.getElementById(selArray[i]).style.display = 'block';
    }
  }

}

//function to select the previous element for the mobile selector
const prev = () =>{
  count--
  if(count <0){
    count =2;
  }
  count = Math.abs(count % 3);
  
  
  for( i =0; i<selArray.length;i++){
    if(selArray[i] != selArray[count]){
      document.getElementById(selArray[i]).style.display = 'none';
    }
    else{
      document.getElementById(selArray[i]).style.display = 'block';
    }
  }

}

//function to select the next element for the mobile selector
const nextRev = () =>{
  countRev++
  countRev = Math.abs(countRev % 3);
  
  
  for( i =0; i<revArray.length;i++){
    if(revArray[i] != revArray[countRev]){
      document.getElementById(revArray[i]).style.display = 'none';
    }
    else{
      document.getElementById(revArray[i]).style.display = 'flex';
    }
  }
}

const prevRev = () =>{
  countRev--
  if(countRev <0){
    countRev =2;
  }
  countRev = Math.abs(countRev % 3);
  
  
  for( i =0; i<revArray.length;i++){
    if(revArray[i] != revArray[countRev]){
      document.getElementById(revArray[i]).style.display = 'none';
    }
    else{
      document.getElementById(revArray[i]).style.display = 'flex';
    }
  }

}

const validateUser = () =>{
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if(email === emailTest && password === passwordTest){
    
  }
  else{
    document.getElementById('invalidSpan').style.display = 'block';
    return false;
  }
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

