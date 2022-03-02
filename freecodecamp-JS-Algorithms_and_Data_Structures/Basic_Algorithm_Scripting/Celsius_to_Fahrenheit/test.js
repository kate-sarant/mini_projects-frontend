const Fa =document.querySelector('#fah')
const $span = document.createElement("span");

function getVal() {
const val = document.querySelector('input').value;
Fa.appendChild($span).innerHTML = val * 9/5 + 32 +'F°';

}


function fun(){
  document.getElementById('myInput').value = '';
  document.getElementById("fah").innerHTML = '';

}
