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
   Welcome.style.opacity = Math.abs(1 - 8.5*value/document.documentElement.scrollHeight);
 
  let current ='';

  sect.forEach(elem =>{
    const sectionTop = elem.offsetTop;
    const sectionHeight = elem.clientHeight;

    if(scrollY > (sectionTop-sectionHeight/3)){
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
  
    var tooltip = document.getElementById("myTooltip");
              
    if(document.documentElement.lang==="en"){
    tooltip.style.width = '150px';
    tooltip.innerHTML = "Mail Copied " +"&#x2713";
    }else{
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

  function protoHover4() {
    navigator.clipboard.writeText("riccardo.martelli@studenti.unimi.it");

    if(document.documentElement.lang==="en"){
      var tooltip = document.getElementById("myTooltip4");
      tooltip.style.width = '150px';
      tooltip.innerHTML = "Mail Copied " +"&#x2713";
      }else{
        var tooltip = document.getElementById("myTooltip4");
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
function copyResetFunc4() {
  if(window.screen.width>=767){
    if(document.documentElement.lang==="en"){
      var tooltip = document.getElementById("myTooltip4");
      tooltip.style.width = '200px';
      tooltip.innerHTML = "Copy to clipboard";
        }else{
      var tooltip = document.getElementById("myTooltip4");
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

//Function click 
function addHighAnimation(tooltip) {
  tooltip.classList.add('jiggle');
  
  // Remove jiggle animation after it completes
  setTimeout(function() {
      removeHighAnimation(tooltip);
  }, 500); 
}

function removeHighAnimation(tooltip) {
  tooltip.classList.remove('jiggle');
}



function clickPriceHighschool(element){

  const highschool = element.children;
  highschool[0].style.visibility = "visible";
  highschool[0].style.opacity = 100;
  highschool[0].style.transition='opacity 0.5s';
  addHighAnimation(highschool[0]);

}
function clickPriceHighschoolOnMouseOut(element){

  const highschool = element.children;
  highschool[0].style.opacity=0;
  highschool[0].style.transition='opacity 3s';

}

//Paragraphs
document.addEventListener("DOMContentLoaded", function() {

  var paragraphs = document.querySelectorAll(".paragraph");

  paragraphs.forEach(function(paragraph) {
      var text = paragraph.textContent;
      var sentences = text.split(',');
      paragraph.innerHTML = '';

      sentences.forEach(function(sentence, index) {
          var trimmedSentence = sentence.trim();

          var tooltip = document.createElement('div');
          tooltip.className = 'tooltip-par';
          tooltip.textContent = getPrice(trimmedSentence);
          document.body.appendChild(tooltip);

          var textNode = document.createElement('span');
          textNode.textContent = trimmedSentence;
          const toolOffSetWidth = 60;/*Corresponding to the CSS value */
          
          document.addEventListener('scroll',function (event) {
            if(tooltip.style.opacity > 0 && tooltip.style.opacity <= 100){
          
            // Start fading out over 0.5 seconds
            const duration = 500; // 0.5 seconds
            const startTime = Date.now();

            function fade() {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              tooltip.style.opacity = 1 - progress;

              // Continue the animation if not complete
              if (progress < 1) {
                requestAnimationFrame(fade);
              }
            }

            requestAnimationFrame(fade);
          }

          });
          
          textNode.addEventListener('click', function(event) {
                  /* ADD vibration on click*/
                  if ('vibrate' in navigator) {// Check if the Vibration API is supported
                        // Vibrate for 100 ms when clicked//It can be modified with an array [vibrate, pause, vibrate]
                        navigator.vibrate(100);  
                } else {
                    console.log("Vibration API not supported on this device.");
                }

              tooltip.style.opacity = 100;
            
              var rect = textNode.getBoundingClientRect();
              var lineHeight = parseFloat(window.getComputedStyle(textNode).lineHeight);
              var tooltipHeight = tooltip.offsetHeight;

              var isMultiline = rect.height >= lineHeight;

              if(trimmedSentence==='...'){
                tooltip.style.width='175px';
                tooltip.style.height='62.5px';

                }
              document.documentElement.style.setProperty("--visibility",'visible'); // hides the tooltip tip


              if (isMultiline) {//For when it crosses the line (eol)
                //Multiline positioning
                tooltip.style.left = (rect.left + rect.width - toolOffSetWidth) + 'px';
                tooltip.style.top = (rect.bottom + window.scrollY - 60 -lineHeight) + 'px';

              } else if(!isMultiline) {
                  // Inline positioning
                  tooltip.style.left = (rect.left +rect.width/2 - toolOffSetWidth/2) + 'px';
                  tooltip.style.top = (rect.bottom + window.scrollY -60) + 'px';

                  if(trimmedSentence==='...'){

                    tooltip.style.top = (rect.bottom + window.scrollY - 175/2) + 'px';

                    if(screen.width>468){
                      tooltip.style.left = (rect.left +rect.width/2 - toolOffSetWidth/2 - 58) + 'px'; 
                    }
                    else{
                      tooltip.style.height='57.5px';
                      document.documentElement.style.setProperty("--visibility",'hidden'); // hides the tooltip tip

                      if(rect.left>screen.width/1.5){
                        tooltip.style.left = (rect.left  - Math.abs(toolOffSetWidth/screen.width)/2 - 130) + 'px'; 

                      }else if(rect.left<=screen.width/1.5){
                        tooltip.style.left = (rect.left - Math.abs(toolOffSetWidth/screen.width)/2-75) + 'px'; 
                      }else{
                        tooltip.style.left = (rect.left  - Math.abs(toolOffSetWidth/screen.width)/2 - 100) + 'px'; 
                      }

                    }
                  }
              }

              tooltip.style.display = 'block';

              document.querySelectorAll('.tooltip-par').forEach(function(element) {/*Handles other tooltips */
                  if (element !== tooltip) {
                      element.style.display = 'none';
                  }
              });
              addAnimation(tooltip);

              // Prevent click propagation
              event.stopPropagation();
          });

          paragraph.appendChild(textNode);

          if (index < sentences.length - 1) {
              paragraph.appendChild(document.createTextNode(', '));
          }

      });
  });
   
    
    function addAnimation(tooltip) {
      tooltip.classList.add('jiggles');
      
      // Remove jiggle animation after it completes
      setTimeout(function() {
          removeAnimation(tooltip);
      }, 500); 
  }
 
  function removeAnimation(tooltip) {
      tooltip.classList.remove('jiggles');
  }

  //Function scroll 
function addFadeOut(tooltip) {
  tooltip.classList.add('animation-fadeout');
  
  // Remove jiggle animation after it completes
  setTimeout(function() {
      removeFadeOut(tooltip);
  }, 500); 
}

function removeFadeOut(tooltip) {
  tooltip.classList.remove('animation-fadeout');
}

  // Event listener to hide tooltips when clicking outside
document.addEventListener('click', function(event) {
    document.querySelectorAll('.tooltip-par').forEach(function(element) {
        element.style.display = 'none';
    });
});

  function getPrice(sentence) {
      switch (sentence.trim()) {
          case "Machine learning":case "Deep Learning":case "Numerical Simulation":
          case "Many Body Theory": case"Meccanica Quantistica Relativistica e Teoria dei Campi":case "Simulazione Numerica":
          case "Calculus 1":
          case "Calculus 2":
          case "Calculus 3":            
          case "Calculus 4":
          case "Analisi 1":
          case "Analisi 2":
          case "Analisi 3":
          case "Analisi 4": case "Relativistic Quantum Mechanics and Field Theory":
              return '45€';
          case "Geometria Differenziale":case "Metodi Matematici per la Meccanica Classica":case "Gruppi di Lie e Algebre di Lie":case "Analisi Funzionale":case "Serie di Fourier":
          case "Fourier Series":case "Mathematical Method for Classical Mechanics":case "Relatività Generale":case "Teoria dei Grouppi per Modelli Matematici":
          case "Differential Geometry": case "Lie Groups and Lie algebras": case "Functional Analysis":
          case "R": case "MATLAB": case "Fluid Dynamics": case"Fluidodinamica": case"General Relativity": case "Group Theory for Mathematical Modeling": case "Genetic Algorithms": case "Algoritmi Genetici": case "Simulated Annealing": case "Reinforcement Learning":
          case"Metropolis Algorithm": case "Algoritmo Metropolis":
            return '30€';
          case "Linear Algebra":case "Algebra Lineare":case"Termodinamica":case"Meccanica Classica":
          case "C++":case "C":case "Python":case "HTML":case "CSS":case "JavaScript":case "Mathematica":case "Tensorflow":case "Keras":case "Scikit-learn":case "SQL":case "Bash":case "Cuda":case "Sed":case "Awk":case "Data Analysis":
          case "Mathematical Methods for Physics or Engineering":case "Meccanica Quantistica":case "Metodi Matematici per la Fisica e l'Ingegneria":case "":
          case "Lagrangian and Hamiltonian formulations": case"Formulazioni Lagrangiane e Hamiltoniane della Meccanica":
          case "Classical Mechanics": case"Fourier Transform":
          case "Thermodynamics":case "Data Representation":case "Probability and statistics":case "Measure Theory":case "Bayesian Probability":case "Probability Distributions":case "Sampling":case "Discrete Distributions":case "Statistical Tests":
          case "Discrete Mathematics": case "Padè approximations":case"Probabilità e Statistica":case"Teoria della Misura":case"Probabilità Bayesiana":case"Distribuzioni di Probabilità":case"Distribuzioni Discrete":case"Tests Statistici":case"Serie di Taylor":case"Serie di Laurent":case"Taylor Series":
          case "Laurent Series":  case "Complex Analysis": case"Analisi Complessa":case "Elettromagnetismo":case "Elettrodinamica": case"Trasformate di Laplace": case"Trasformate di Fourier":case"Trasformate Integrali":case"Aprossimazioni di Padè":case"Matematica del Discreto":case"Monte Carlo Simulation":
          case "Algebra Lineare":case "Quantum Mechanics":case "Electromagnetism":case "Electrodynamics":case "p-values":case "Data Analysis":case "Integral Transformations":case "Laplace Transform":
          case"Fisica 1":case"Fisica 2":case"Physics 1":case"Physics 2":case"Stochastic Calculus":case"Analisi Stocastica":
          case "Econometrics": case "Black & Scholes Equations": case "Pricing of Derivatives": case "Portfolio Management": case "Modern Portfolio Theory": case "Monte Carlo Simulation in Finance": case "Investment Decisions": case "Portfolio Selection": case "Risk-based Strategies": case "Risk Parity": case "Maximum Diversification Portfolio": case "Trading (Equity-Commodities-Forex-Futures)": case "Risk Management": case "Alternative Assets (Real Estate-Private Equity-Hedge Funds)": case "Credit":
          case "Currency": case "Commodities": case "Asset Allocation": case "Dynamic Portfolio Management": case "Quantitative Risk Management": case "Machine Learning for Finance": case "Statistical Arbitrage": case "High-Frequency Trading (HFT)": case "Market Making": case "Asset Pricing Models": case "Value at Risk (VaR)": case "Expected Shortfall": case "Portfolio Optimization": case "Multi-Asset Strategies": case "Derivatives Pricing": case "Quantitative Trading Strategies":
          case "Entropy Based Allocation and Advanced Allocation": case "Econometria": case "Equazioni di Black-Scholes": case "Valutazione dei derivati": case "Gestione del portafoglio": case "Teoria moderna del portafoglio": case "Simulazione Monte Carlo in finanza": case "Decisioni di investimento": case "Selezione del portafoglio": case "Strategie basate sul rischio": case "Risk Parity": case "Portafoglio di massima diversificazione": case "Allocazione basata sull'entropia": case "Allocazione avanzata": 
          case "Gestione del rischio": case "Assets Alternativi (Real Estate-Private Equity-Hedge Funds)": case "Credit": case "FX": case "Commodities": 
          case "Asset Allocation": case "Gestione dinamica del portafoglio": case "Gestione quantitativa del rischio": case "Machine Learning per la finanza": case "Arbitraggio statistico": case "High-Frequency Trading (HFT)": case "Market Making": case "Modelli per la valutazione degli Assets": case "Value at Risk (VaR)": case "Expected Shortfall": case "Ottimizzazione del portafoglio": case "Strategie multi-asset": case "Valutazione dei derivati": case "Strategie di trading quantitativo":
          case "Modelli Stocastici per la Finanza": case "Stochastic Models for Finance":
           return '25€';

          default:
            if(document.documentElement.lang==="en"){
                  return 'Contact me for more info';

                }else{
                  return 'Contattatami per altri corsi';
                }
             
      }
  }
});

/*Banner interaction*/
document.addEventListener('DOMContentLoaded', function () {
  const banner = document.getElementById('cookie-consent-banner');
  const closeButton = document.getElementById('close-banner');

  closeButton.addEventListener('click', function () {
    banner.style.display = 'none';
    localStorage.setItem('analyticsNoticeClosed', 'true');
  });

  if (!localStorage.getItem('analyticsNoticeClosed')) {
    banner.style.display = 'block';
  }
});

/////////////////////////////////////////////
////////////MOVING TITLE
/////////////////////////////////////////////

let titleText = "Riccardo Martelli - Math, Physics, Computer Science & Quantitative Finance ";
let position = 0;
let interval;

function moveTitle() {
    document.title = titleText.substring(position) + titleText.substring(0, position);
    position = (position + 1) % titleText.length;
}

function startMoving() {
  interval = setInterval(moveTitle, 200); //Set vel
  setTimeout(stopMoving, 15400); // Moves for 5 sec
  position = 0;
}

function stopMoving() {
  clearInterval(interval);
  setTimeout(startMoving, 5000); // Stops for 5 sec, then starts again
}

startMoving();

/////////////////////////////////////////////
////////////SHOOTING STARS
/////////////////////////////////////////////

const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas(); // Set initial size

class Star {
    constructor() {
        this.reset();
    }

    reset() {//Data
        this.x = -Math.random() * canvas.width * 0.5;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speed = Math.random() * 4 + 2;
        this.trail = [];
        this.trailLength = Math.random() * 30 + 10;
    }

    update() {//Dynamics
        this.trail.push({ x: this.x, y: this.y });

        if (this.trail.length > this.trailLength) {
            this.trail.shift();
        }

        this.x += this.speed;

        if (this.x > canvas.width) {
            this.reset();
        }
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = "rgb(200,100,10)";
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        for (let i = 0; i < this.trail.length; i++) {
            const alpha = i / this.trail.length;
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.beginPath();
            ctx.arc(this.trail[i].x, this.trail[i].y, this.size / 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

const stars = [];//Creates the stars
for (let i = 0; i < 30; i++) {
    stars.push(new Star());
}

function animate() {//Defines the animation
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const star of stars) {
        star.update();
        star.draw();
    }

    requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", resizeCanvas);


/////////////////////////////////////////////
////////////SLIDE BUTTON DM
/////////////////////////////////////////////

// Load dark mode preference from localStorage
let isDarkMode = localStorage.getItem("darkMode") === "enabled";
const slider = document.querySelector(".slider");

// Set initial mode
if (isDarkMode) {
      document.body.classList.add("dark-mode");/*in case I want to add some class for dark mode */
      document.documentElement.style.setProperty('--dark-modeBkg', 'white');
      document.documentElement.style.setProperty('--text-color', 'black');
      document.querySelectorAll('.GitHub').forEach(img => {
        img.src = 'github-mark/github-mark.svg';
    }); 
      slider.setAttribute("data-tooltip", "Dark Mode");

  
      
}else {
      document.documentElement.style.setProperty('--dark-modeBkg', '#333');
      document.documentElement.style.setProperty('--text-color', 'white');
      document.querySelectorAll('.GitHub').forEach(img => {
    img.src = 'github-mark/github-mark-white.svg';
}); 
        slider.setAttribute("data-tooltip", "Light Mode" );
        const gitHubImage = document.querySelector('.GitHub');
        const gitHuba = document.querySelector('.git-a');
        gitHuba.addEventListener('mouseenter', () => {
          gitHubImage.src = 'github-mark/github-mark.svg';
        });
       
          gitHuba.addEventListener('mouseleave', () => {
            gitHubImage.src =  "github-mark/github-mark-white.svg"; // Revert image on hover out
          });
}

const toggle = document.getElementById("modeToggle");
toggle.addEventListener("change", () => {
    slider.setAttribute("data-tooltip", isDarkMode ? "Light Mode" : "Dark Mode");
    isDarkMode = !isDarkMode;
    document.body.classList.toggle("dark-mode");
    if (isDarkMode) {
      localStorage.setItem("darkMode", "enabled");
      document.documentElement.style.setProperty('--dark-modeBkg', 'white');
      document.documentElement.style.setProperty('--text-color', 'black');
      document.querySelectorAll('.GitHub').forEach(img => {
        img.src = 'github-mark/github-mark.svg';
    });  
    // Change image on hover
    const gitHubImage = document.querySelector('.GitHub');
    const gitHuba = document.querySelector('.git-a');
    gitHuba.addEventListener('mouseenter', () => {
      gitHubImage.src = 'github-mark/github-mark.svg';
    });
   
      gitHuba.addEventListener('mouseleave', () => {
        gitHubImage.src =  "github-mark/github-mark.svg"; // Revert image on hover out
      });
   

  } else {
      localStorage.setItem("darkMode", "disabled");
      document.documentElement.style.setProperty('--dark-modeBkg', '#333');
      document.documentElement.style.setProperty('--text-color', 'white');
      document.querySelectorAll('.GitHub').forEach(img => {
        img.src = 'github-mark/github-mark-white.svg';
    });    
    const gitHubImage = document.querySelector('.GitHub');
    const gitHuba = document.querySelector('.git-a');
    gitHuba.addEventListener('mouseenter', () => {
      gitHubImage.src = 'github-mark/github-mark.svg';
    });
   
      gitHuba.addEventListener('mouseleave', () => {
        gitHubImage.src =  "github-mark/github-mark-white.svg"; // Revert image on hover out
      });

  }
});



