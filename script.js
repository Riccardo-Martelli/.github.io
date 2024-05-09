//Resizing
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

let vw = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vw', `${vw}px`);

//Parallaxeffect
let whiteDwarf = document.getElementById('whitedwarf');
let Welcome = document.getElementById('welcome');

window.addEventListener('scroll',() => {
  let value = window.scrollY;

   Welcome.style.marginTop= value * 2.5 +'px';
   Welcome.style.opacity = Math.abs(1 - 15*value/document.documentElement.scrollHeight);
   
   

  /* whiteDwarf.style.left = value * -5.5 +'px';*/

});


//Add sliding effects
/* modifing this section one can make headers p and img slide at different speeds */
const sectionElem = document.querySelectorAll('.section');

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

// Add coping on hover

function protoHover1() {
    navigator.clipboard.writeText("riccardomartelli97@gmail.com");
  
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Mail Copied " +"&#x2713";
}

function protoHover2() {
    navigator.clipboard.writeText("riccardo.martelli@studenti.unimi.it");

    var tooltip = document.getElementById("myTooltip2");
    tooltip.innerHTML = "Mail Copied "+"&#x2713";
  }
  function protoHover3() {
    navigator.clipboard.writeText("+39 3472847968");

    var tooltip = document.getElementById("myTooltip3");
    tooltip.innerHTML = "Phone number Copied "+"&#x2713";
  }


function copyResetFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
function copyResetFunc2() {
  var tooltip = document.getElementById("myTooltip2");
  tooltip.innerHTML = "Copy to clipboard";
}
function copyResetFunc3() {
  var tooltip = document.getElementById("myTooltip3");
  tooltip.innerHTML = "Copy to clipboard";
}
