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
    tooltip.style.animation= "jiggle 0.5s"; 
    tooltip.innerHTML = "Mail Copied " +"&#x2713";
    }else{
      var tooltip = document.getElementById("myTooltip");
      tooltip.style.width = '150px';
      tooltip.style.animation= "jiggle 0.5s"; 
      tooltip.innerHTML = "Mail Copiata " +"&#x2713";
    }
}

function protoHover2() {
    navigator.clipboard.writeText("riccardo.martelli@studenti.unimi.it");

    if(document.documentElement.lang==="en"){
      var tooltip = document.getElementById("myTooltip2");
      tooltip.style.width = '150px';
      tooltip.style.animation= "jiggle 0.5s"; 
      tooltip.innerHTML = "Mail Copied " +"&#x2713";
      }else{
        var tooltip = document.getElementById("myTooltip2");
        tooltip.style.width = '150px';
        tooltip.style.animation= "jiggle 0.5s"; 
        tooltip.innerHTML = "Mail Copiata " +"&#x2713";
      }
  }



  function protoHover3() {

    navigator.clipboard.writeText("+39 3472847968");
    if(document.documentElement.lang==="en"){
      var tooltip = document.getElementById("myTooltip3");
      tooltip.style.width = '250px';
      tooltip.style.animation = 'jiggle 0.5s';
      tooltip.innerHTML = "Phone number copied " +"&#x2713";
      }else{
        var tooltip = document.getElementById("myTooltip3");
        tooltip.style.width = '200px';
        tooltip.style.animation = 'jiggle 0.5s';
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

document.addEventListener('DOMContentLoaded', () => {
  const paragraphs = document.querySelectorAll('.tooltip-paragraph');

  paragraphs.forEach((paragraph, paraIndex) => {
      const sentences = paragraph.innerHTML.split(', ');

      const tooltipData = {
          0: '1', // Sentence one
          1: '2', // Sentence two
          2: '3', // Sentence three
          // Add more mappings as needed
      };

      // Clear the paragraph
      paragraph.innerHTML = '';

      sentences.forEach((sentence, index) => {
          const sentenceElement = document.createElement('span');
          sentenceElement.className = 'tooltip-trigger';
          sentenceElement.textContent = sentence;

          if (index < sentences.length - 1) {
              sentenceElement.textContent += ', ';
          }

          sentenceElement.dataset.number = tooltipData[index + (paraIndex * sentences.length)] || '';
          paragraph.appendChild(sentenceElement);
      });
  });

  document.querySelectorAll('.tooltip-trigger').forEach(trigger => {
      trigger.addEventListener('click', function(event) {
          // Remove existing tooltips
          let existingTooltip = document.querySelector('.tooltip-par');
          if (existingTooltip) {
              existingTooltip.remove();
          }

          // Create a new tooltip
          const number = this.getAttribute('data-number');
          const tooltip = document.createElement('div');
          tooltip.className = 'tooltip-par jiggle';
          tooltip.textContent = `Number: ${number}`;

          document.body.appendChild(tooltip);

          // Position the tooltip
          const range = document.createRange();
          range.setStart(this.firstChild, 0);
          range.setEnd(this.firstChild, 1);
          const rect = range.getBoundingClientRect();
          const tooltipRect = tooltip.getBoundingClientRect();
          const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

          const top = rect.top + scrollTop - tooltipRect.height - 5;
          const left = rect.left + scrollLeft;

          tooltip.style.left = `${left}px`;
          tooltip.style.top = `${top}px`;

          // Show the tooltip
          tooltip.style.display = 'block';

          // Remove the jiggle class after the animation ends
          tooltip.addEventListener('animationend', () => {
              tooltip.classList.remove('jiggle');
          });

          // Hide the tooltip when clicking outside
          const handleClickOutside = (event) => {
              if (!trigger.contains(event.target) && !tooltip.contains(event.target)) {
                  tooltip.remove();
                  document.removeEventListener('click', handleClickOutside);
              }
          };

          document.addEventListener('click', handleClickOutside);
      });
  });
});