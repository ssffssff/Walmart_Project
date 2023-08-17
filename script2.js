document.addEventListener('DOMContentLoaded', function() {
  const greetingElement = document.getElementById("greeting");
  const greetingText = "Innovate, Integrate, Illuminate!";
  let charIndex = 0;

  function typeWriterEffect() {
    if (charIndex < greetingText.length) {
      const char = greetingText.charAt(charIndex);
      const span = document.createElement("span");

      // Apply gradient color to each character
      span.style.background = "linear-gradient(45deg, #121212, #0e4d92)";
      span.style.webkitBackgroundClip = "text";
      span.style.backgroundClip = "text";
      span.style.color = "transparent";

      // Add underscore before the character
      span.textContent = "_";
      greetingElement.appendChild(span);

      // Apply rotation animation
      span.style.animation = "rotateIn 0.2s ease-in-out forwards";

      // Delay before displaying the character
      setTimeout(() => {
        span.textContent = char; // Display the character
        typeWriterEffect(); // Continue with the next character
      }, 100);

      charIndex++;
    }
  }

  typeWriterEffect();
});
