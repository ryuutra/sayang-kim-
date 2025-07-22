
function openEnvelope() {
  const envelope = document.querySelector('.envelope');
  const message = document.getElementById('message');

  envelope.classList.add('opened');
  setTimeout(() => {
    message.classList.add('show');
  }, 1000);
}
