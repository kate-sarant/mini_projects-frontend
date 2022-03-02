let converter={
 I : 1, II: 2, III:3, IV:4, V:5, VI:6, VII:7, VIII:8, IX:9
 }
 let converter1={
    X:10,XX:20,XXX:30,XL:40,L:50,LX:60,LXX:70,LXXX:80,XC:90
 }
 let converter2={
    C:100,CC:200,CCC:300,CD:400,D:500,DC:600,DCC:700,DCCC:800,CM:900
 }

    let result= []
  function convertToRoman(number){

        if(number >= 1000){
                  let l = 'M'
                  result.push(l.repeat(number/1000))
                    if(number%1000  < 1000){
                    number = number%1000
                  }
                }
           if(100 <=number && number <= 999){
                      let border = String(number)[0]
                      for(let i=0; i <= Number(border) ; i++){
                        if(Object.values(converter2)[i]/ Number(border) == 100){
                          result.push(Object.keys(converter2)[i])
                          number = number-Object.values(converter2)[i]
                        }
                        }

                    }
    if(10 <= number && number <= 99){

                      let border= String(number)[0]

                      for(let i = 0; i < Number(border) ; i++){

                        if(Object.values(converter1)[i]===  Number(border)*10  ){
                          result.push(Object.keys(converter1)[i])

                            number = number-Object.values(converter1)[i]

                          }
                        }
                }

    if(number <= 9){

                    for(let i = 0; i <= number; i++){

                      if(Object.values(converter)[i] == number){
                        result.push(Object.keys(converter)[i])
                        result = result.join("")
                          result = String(result)

                        return result
                      }
                  }
                    }
                    result = result.join("")
                      result = String(result)
                    return result
                }



//
// =============================
// =============== desplay
// ==============================

const Fa = document.querySelector('#fah')
const $span = document.createElement("span");

function getVal() {
const val = document.querySelector('input').value;
// alert(convertToRoman(val))
Fa.appendChild($span).innerHTML = convertToRoman(val);
console.log(convertToRoman(val))
}


function fun(){
  document.getElementById('myInput').value = '';
  document.getElementById("fah").innerHTML = '';

}
