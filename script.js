//this is for the typewriter effect
document.addEventListener("DOMContentLoaded", function () {
  const text = "Welcome to my first Portfolio page! I hope you enjoy it! 💻";
  const welcomeElement = document.getElementById("welcome-text");
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      welcomeElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 50); 
    }
  }

  typeWriter(); 
});