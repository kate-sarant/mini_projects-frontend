
function reverseString() {

const val = document.querySelector('input').value;
const desplay = document.querySelector('#desplay')
const buget = []

for(let i in val){
  buget.unshift(val[i])
}
desplay.innerHTML = buget.toString().replace(/,/g,'')
return buget.toString().replace(/,/g,'')
}
function erase(){
  document.querySelector('input').value = '';
document.getElementById("desplay").innerHTML = '';

}
