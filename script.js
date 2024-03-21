// Function to switch language
function switchLanguage(lang) {
  const currentUrl = window.location.href;
  let newUrl = currentUrl;

  if (lang === 'en') {
    newUrl = currentUrl.replace('?lang=it', '?lang=en'); // Replace lang parameter for English version
  } else if (lang === 'it') {
    newUrl = currentUrl.replace('?lang=en', '?lang=it'); // Replace lang parameter for Italian version
  }

  window.location.href = newUrl;
}

// Function to preview uploaded image
function previewImage(event) {
  const input = event.target;
  const reader = new FileReader();

  reader.onload = function() {
    const imgElement = document.getElementById('teacher-image');
    imgElement.src = reader.result;
  }

  reader.readAsDataURL(input.files[0]);
}

