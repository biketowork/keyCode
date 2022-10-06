const log=document.getElementById('log');
const input=document.querySelector('#text');

input.addEventListener('keypress', press );


function press(e) {
   log.textContent += `${e.code}`;
}
  


