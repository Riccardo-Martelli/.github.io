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

const sect = document.querySelectorAll('section');
const navElem = document.querySelectorAll('nav ul li');

window.addEventListener('scroll',() => {
  let value = window.scrollY;
   /*Welcome.style.left= value * 2.5 +'px';
   /*Welcome.style.marginRight= value * -2.5 +'px';*/
   Welcome.style.opacity = Math.abs(1 - 8.5*value/document.documentElement.scrollHeight);
    

  /* whiteDwarf.style.left = value * -5.5 +'px';*/
  /*Highlight section */
  let current ='';

  sect.forEach(elem =>{
    const sectionTop = elem.offsetTop;
    const sectionHeight = elem.clientHeight;

    if(scrollY > (sectionTop-sectionHeight-0.05)){
      current = elem.getAttribute('id');
    }
  })

  navElem.forEach( li => {
    li.classList.remove('active');
    if(li.classList.contains(current)){
        li.classList.add('active');
    }
  })

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
const flowCharts = document.querySelectorAll(".flowcharts");



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

const blurrin = new IntersectionObserver((entries) => {
	entries.forEach((entry)=>{
		console.log(entry)
		if (entry.isIntersecting){
			entry.target.classList.add('blurEff');
		}else{
			entry.target.classList.remove('blurEff');
		}
	});
});

flowCharts.forEach((el) => blurrin.observe(el));

// Add coping on hover

function protoHover1() {
    navigator.clipboard.writeText("riccardomartelli97@gmail.com");
  
    if(document.documentElement.lang==="en"){
    var tooltip = document.getElementById("myTooltip");
    tooltip.style.width = '150px';
    tooltip.innerHTML = "Mail Copied " +"&#x2713";
    }else{
      var tooltip = document.getElementById("myTooltip");
      tooltip.style.width = '150px';
      tooltip.innerHTML = "Mail Copiata " +"&#x2713";
    }
}

function protoHover2() {
    navigator.clipboard.writeText("riccardo.martelli@studenti.unimi.it");

    if(document.documentElement.lang==="en"){
      var tooltip = document.getElementById("myTooltip2");
      tooltip.style.width = '150px';
      tooltip.innerHTML = "Mail Copied " +"&#x2713";
      }else{
        var tooltip = document.getElementById("myTooltip2");
        tooltip.style.width = '150px';
        tooltip.innerHTML = "Mail Copiata " +"&#x2713";
      }
  }



  function protoHover3() {

    navigator.clipboard.writeText("+39 3472847968");
    if(document.documentElement.lang==="en"){
      var tooltip = document.getElementById("myTooltip3");
      tooltip.style.width = '250px';
      tooltip.innerHTML = "Phone number copied " +"&#x2713";
      }else{
        var tooltip = document.getElementById("myTooltip3");
        tooltip.style.width = '200px';
        tooltip.innerHTML = "Numero Copiato " +"&#x2713";
      }
  }


function copyResetFunc() {
  if(window.screen.width>=767){
    if(document.documentElement.lang==="en"){
  var tooltip = document.getElementById("myTooltip");
  tooltip.style.width = '200px';
  tooltip.innerHTML = "Copy to clipboard";
    }else{
      var tooltip = document.getElementById("myTooltip");
  tooltip.style.width = '100px';
  tooltip.innerHTML = "Copia";
    }
  }
}
function copyResetFunc2() {
  if(window.screen.width>=767){
    if(document.documentElement.lang==="en"){
      var tooltip = document.getElementById("myTooltip2");
      tooltip.style.width = '200px';
      tooltip.innerHTML = "Copy to clipboard";
        }else{
          var tooltip = document.getElementById("myTooltip2");
      tooltip.style.width = '100px';
      tooltip.innerHTML = "Copia";
        }
  }
}
function copyResetFunc3() {
  if(window.screen.width>=767){
    if(document.documentElement.lang==="en"){
      var tooltip = document.getElementById("myTooltip3");
      tooltip.style.width = '200px';
      tooltip.innerHTML = "Copy to clipboard";
        }else{
          var tooltip = document.getElementById("myTooltip3");
      tooltip.style.width = '100px';
      tooltip.innerHTML = "Copia";
        }
  }
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

function clickPriceHighschool(element){

  const highschool = element.children;
  highschool[0].style.visibility="visible";

}
function clickPriceHighschoolOnMouseOut(element){

  const highschool = element.children;
  highschool[0].style.visibility="hidden";
}

