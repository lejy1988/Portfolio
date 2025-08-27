//this is for the typewriter effect
document.addEventListener("DOMContentLoaded", function () {
  const text = "Welcome to my first Portfolio page! You have no idea how long it took me to get this writing to be typed out one letter at a time...Hope you like it! 🎉";
  const welcomeElement = document.getElementById("welcome-text");
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      welcomeElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100); 
    }
  }

  typeWriter(); 
});