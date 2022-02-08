
///// factorial ---
function factorialize(num) {
  if(num === 1 | num === 0 ){
    return 1;
  }else{
  }return num * factorialize(num-1);
}
////////desplay

function desplay(){
const value = document.querySelector('#fuct_input').value;
const span = document.getElementById("desplay")
span.innerHTML = factorialize(value) ;
}
// erase button

function eraser(){
  document.querySelector('#fuct_input').value = '';
  document.getElementById("desplay").innerHTML = '';

}
