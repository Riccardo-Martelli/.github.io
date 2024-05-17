//Resizing
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

let vw = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vw', `${vw}px`);

//Parallaxeffect
let planet = document.getElementById('planet');
let Welcome = document.getElementById('Welcome');

window.addEventListener('scroll',() => {
  let value = window.scrollY;
   /*Welcome.style.left= value * 2.5 +'px';
   /*Welcome.style.marginRight= value * -2.5 +'px';*/
   Welcome.style.opacity = Math.abs(1 - 8.5*value/document.documentElement.scrollHeight);
    

  /* whiteDwarf.style.left = value * -5.5 +'px';*/

});


//Add sliding effects
/* modifing this section one can make headers p and img slide at different speeds */
const sectionElem = document.querySelectorAll('.section');
const headerElem = document.querySelectorAll("h2");
const header3Elem = document.querySelectorAll("h3");
const pElem = document.querySelectorAll("p");
const mailsElem = document.querySelectorAll(".hoverover");
const linksElem = document.querySelectorAll(".linkvari");
const courseElem = document.querySelectorAll(".courseElem");



const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry)=>{
		console.log(entry)
		if (entry.isIntersecting){
			entry.target.classList.add('show');
		}else{
			entry.target.classList.remove('show');
		}
	});
});

sectionElem.forEach((el) => observer.observe(el));
headerElem.forEach((el) => observer.observe(el));
header3Elem.forEach((el) => observer.observe(el));
pElem.forEach((el) => observer.observe(el));
mailsElem.forEach((el) => observer.observe(el));
linksElem.forEach((el) => observer.observe(el));
courseElem.forEach((el) => observer.observe(el));

// Add coping on hover

function protoHover1() {
    navigator.clipboard.writeText("riccardomartelli97@gmail.com");
  
    var tooltip = document.getElementById("myTooltip");
    tooltip.style.width = '150px';
    tooltip.innerHTML = "Mail Copied " +"&#x2713";
}

function protoHover2() {
    navigator.clipboard.writeText("riccardo.martelli@studenti.unimi.it");

    var tooltip = document.getElementById("myTooltip2");
    tooltip.style.width = '150px';

    tooltip.innerHTML = "Mail Copied "+"&#x2713";
  }



  function protoHover3() {

    navigator.clipboard.writeText("+39 3472847968");
    
    var tooltip = document.getElementById("myTooltip3");
    tooltip.style.width = '250px';
    tooltip.innerHTML = "Phone number copied "+"&#x2713";

  }


function copyResetFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.style.width = '200px';
  tooltip.innerHTML = "Copy to clipboard";
}
function copyResetFunc2() {
  var tooltip = document.getElementById("myTooltip2");
  tooltip.style.width = '200px';
  tooltip.innerHTML = "Copy to clipboard";
}
function copyResetFunc3() {
  var tooltip = document.getElementById("myTooltip3");
  tooltip.style.width = '200px';
  tooltip.innerHTML = "Copy to clipboard";
}


// User visits 
var n = localStorage.getItem('on_load_counter');

if (n === null) {
  n = 0;
}
n++;

localStorage.setItem("on_load_counter", n);

nums = n.toString().split('').map(Number);

document.getElementById('CounterVisitor').innerHTML = 'Your visits: ';
for (var i of nums) {
  document.getElementById('CounterVisitor').innerHTML += '<span class="counter-item">' + i + '</span>';
}

//Function click cell phone

let redFont = document.querySelectorAll('.sections');
let effect = document.querySelectorAll('.sections a span');

function onClickPhone(){
  if(screen.width <768){

   document.querySelectorAll('.sections a span').forEach( el =>{
    el.style.transform="scale(1)"
    el.style.opacity="1";
 


  });

  }

}