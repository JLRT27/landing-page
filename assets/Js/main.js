document.addEventListener('DOMContentLoaded', (event) =>
{
  const button = document.querySelector('#bg-change');
  button.addEventListener('click', function() {
   
      document.body.style.background = "red";
     
    });

})