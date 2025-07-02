export function typeText(element, text, speed = 100, delayBetweenLoop = 1000) {
  if (!element) return;

  let index = 0;
  let currentText = "";

  function startTyping() {
    index = 0;
    currentText = "";
    element.textContent = "";

    const interval = setInterval(() => {
      if (index < text.length) {
        currentText += text.charAt(index);
        element.textContent = currentText;
        index++;
      } else {
        clearInterval(interval);
        setTimeout(startTyping, delayBetweenLoop); // ulang setelah jeda
      }
    }, speed);
  }

  startTyping();
}
