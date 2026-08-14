  const pwd = document.getElementById('password');
  const eyesOpen = document.getElementById('eyes-open');
  const eyesClosed = document.getElementById('eyes-closed');
  const hands = document.getElementById('hands');

  function peekAway() {
    eyesOpen.style.display = 'none';
    eyesClosed.style.display = 'block';
    hands.style.display = 'block';
  }

  function lookNormal() {
    eyesOpen.style.display = 'block';
    eyesClosed.style.display = 'none';
    hands.style.display = 'none';
  }

  pwd.addEventListener('focus', peekAway);
  pwd.addEventListener('blur', lookNormal);