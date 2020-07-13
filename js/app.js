

// Container 1

const time=document.getElementById('input')
const sub =document.querySelector('.btn')
sub.addEventListener('click',runTime)
let fadeTime = 3000

// Runtime
function runTime(e){
    if(time.value===''){    
        alert('Please Add the Time')
    }
    else{

         fadeTime=time.value*1000

    }

}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, fadeTime); 
}



// Container 2 (Calculator)



const value1=document.querySelector('#value1')
const value2=document.querySelector('#value2')

const addBtn=document.querySelector('#add')
const subtractBtn=document.querySelector('#subtract')
const multiplyBtn=document.querySelector('#multiply')
const divideBtn=document.querySelector('#divide')
const result=document.querySelector('#final-result')

// Load All Event Listeners
loadEventListeners();

//Load All Event Listeners
function loadEventListeners(){

    // Add the Numbers
    addBtn.addEventListener('click',addNums)

    //Subtract the Numbers
    subtractBtn.addEventListener('click',subNums)

    //Multiply the Numbers
    multiplyBtn.addEventListener('click',multiplyNums)

    //Divide the Numbers
    divideBtn.addEventListener('click',divideNums)

}

// Add Numbers
function addNums(e){
    if (value1.value==='' || value2.value===''){

        alert('Add Values')
    }
    else{

        result.value=parseInt(value1.value)+parseInt(value2.value);

        //Clear Input fields
        value1.value=''
        value2.value=''
        

    }

    e.preventDefault();

    
}

// Subtract Numbers
function subNums(e){
    if (value1.value==='' || value2.value===''){

        alert('Add Values')
    }
    else{

        result.value=parseInt(value1.value)-parseInt(value2.value);

        //Clear Input fields
        value1.value=''
        value2.value=''
        

    }

    e.preventDefault();

    
}

// Multiply Numbers
function multiplyNums(e){
    if (value1.value==='' || value2.value===''){

        alert('Add Values')
    }
    else{

        result.value=parseInt(value1.value)*parseInt(value2.value);

        //Clear Input fields
        value1.value=''
        value2.value=''
        

    }

    e.preventDefault();

    
}

// Divide Numbers
function divideNums(e){
    if (value1.value==='' || value2.value===''){

        alert('Add Values')
    }
    else{

        result.value=parseInt(value1.value)/parseInt(value2.value);

        //Clear Input fields
        value1.value=''
        value2.value=''
        

    }

    e.preventDefault();    
}


// Container 3



const inputText = document.getElementById('email')
inputText.addEventListener('keyup',ValidateEmail)


function ValidateEmail(e)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
inputText.style.backgroundColor = 'green'
document.form1.text1.focus();

}
else
{
inputText.style.backgroundColor = 'red'
document.form1.text1.focus();

}
}