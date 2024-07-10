document.addEventListener('DOMContentLoaded', () => {
const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', () => {
  const output1 = document.getElementById('output1');
  output1.querySelector('p').style.color = 'red';
});
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
  const output2 = document.getElementById('output2');
  const span = document.createElement('span');
  span.textContent = 'Hello world';
  output2.appendChild(span);
});
const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => {
  const output3 = document.getElementById('output3');
  output3.querySelector('p').classList.remove('small-text');
});
const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', () => {
  const output4 = document.getElementById('output4');
  const paragraphs = output4.querySelectorAll('p');
  paragraphs.forEach(paragraph => {
    paragraph.style.color = 'red';
  });
});
const btn5 = document.getElementById('btn5');
btn5.addEventListener('click', () => {
  const message = document.getElementById('message');
  console.log(message.value);
});
});