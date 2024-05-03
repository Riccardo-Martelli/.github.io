//Add sliding effects
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
//https://medium.com/@tamilnambicse/copy-text-with-the-click-of-a-button-using-clipboard-api-in-javascript-a7f53abdc310
/*document.getElementById("copyButton").addEventListener("click", function () {
  var copyText = document.getElementById("copyText").value;

  navigator.clipboard
    .writeText(copyText)
    .then(function () {
      alert("Text copied to clipboard: " + copyText);
    })
    .catch(function (error) {
      alert("Failed to copy text: " + error);
    });
});*/

function protoHover1() {
    navigator.clipboard.writeText("riccardomartelli97@gmail.com");
  
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Mail Copied";
}

function protoHover2() {
    navigator.clipboard.writeText("riccardo.martelli@studenti.unimi.it");

    var tooltip = document.getElementById("myTooltip2");
    tooltip.innerHTML = "Mail Copied";
  }


function copyResetFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

//Add parallax effect
