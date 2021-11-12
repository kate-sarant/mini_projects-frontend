document.addEventListener("DOMContentLoaded", () => {
  const $celsius = document.querySelector("#celsius");
  const $fahrenheit = document.querySelector("#fahrenheit");

  $celsius.addEventListener("input", (e) => {
    const fahrenheit = (parseFloat(e.target.value) * 9) / 5 + 32 || 0;

    $fahrenheit.value = fahrenheit;
  });

  $fahrenheit.addEventListener("input", (e) => {
    const celsius = (parseFloat(e.target.value) - 32) * (5 / 9) || 0;

    $celsius.value = celsius;
  });


});
document.addEventListener("DOMContentLoaded",()=> {
  const $miles = document.querySelector("#miles");
  const $kilometers = document.querySelector("#kilometers");


  $kilometers.addEventListener("input", (e) => {
    const miles = (parseFloat(e.target.value)*1.609344) || 0 ;

    $miles.value = miles;

  });
  $miles.addEventListener("input", (e) => {
    const kilometers = (parseFloat(e.target.value)*0.621371) || 0 ;

    $kilometers.value = kilometers;
  });

})
console.log(celsius);
