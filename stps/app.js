// functionality for  scrolling with click button
$(document).ready(function(){

  $("h2").on('click', function(event) {
    if (this.hash !== "") {
          event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

      });
    }
  });
});

// ---------ends here------


// Validation javascript
document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector('form');
    const email = document.getElementById("vemail");
    const phone = document.getElementById("vphone");
    const name = document.getElementById("vfname");
    const $submit =document.getElementById("button");
    const $emailError = document.querySelector(".email-error");
    const $nameError = document.querySelector(".name-error");
    const $numberError = document.querySelector(".number-error");
    //only numbers Regex
    const nums = /^[0-9]+$/;
    // full name with space or dot Regex
    const checkname =/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    //valid email Regex
    const checkEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      let emailIsValid =false;
      let nameIsValid =false;
      let phoneIsValid = false;

const getEmailValidation = (email) => {
  if(
       email !=="" &&
     checkEmail.test(email)
   ){
     emailIsValid = true;
  }else{
     emailIsValid = false;
   }
 };
const getNameValidation=(name)=>{
  if(
    name !== "" &&
    checkname.test(name))
    {
      nameIsValid = true;
    }else {
      nameIsValid =false;
    }
};
  const getphoneValidation=(phone)=>{

    if (
      phone !=="" &&
      nums.test(phone)
    ){
      phoneIsValid = true;
    }else{
       phoneIsValid = false;
    }
  }

     const checkBtn = () => {
     if (emailIsValid && nameIsValid &&phoneIsValid) {
       $submit.disabled = false;
     } else {
       $submit.disabled = true;
     }
   };


  email.addEventListener("input", (e) => {
      getEmailValidation(e.target.value);


    if (!emailIsValid) {
      email.classList.add("is-invalid");
      $emailError.classList.remove("d-none");
    } else {
      email.classList.remove("is-invalid");
      $emailError.classList.add("d-none");
    }
    checkBtn();
});
  name.addEventListener("input",(e)=>{
    getNameValidation(e.target.value);
    if(!nameIsValid){
      name.classList.add("is-invalid");
      $nameError.classList.remove("d-none");
    } else {
      name.classList.remove("is-invalid");
      $nameError.classList.add("d-none");
    }
    checkBtn();
  });

  phone.addEventListener("input", (e) => {
      getphoneValidation(e.target.value);

      if (!phoneIsValid) {
        phone.classList.add("is-invalid");
        $numberError.classList.remove("d-none");
      } else {
        phone.classList.remove("is-invalid");
        $numberError.classList.add("d-none");
      }
      checkBtn();
    });

      // error messages
      $emailError.classList.add("d-none");
      $nameError.classList.add("d-none");
      $numberError.classList.add("d-none");
});




// ------------footer year------------
  $(document).ready(function(){
    $('#currentYear').text(new Date().getFullYear());
  });
