// below code takes care of read more and less link behaviour on main page

document.querySelector(".clickMore").addEventListener("click",function()
{
  document.querySelector(".clickMore").classList.add("hide");
  document.querySelector(".more").classList.remove("hide");
  var x = window.matchMedia("only screen and (max-width: 600px)");
  if (x.matches)
  { // If media query matches
    document.querySelector(".mainPage").style.paddingTop= "0px"

   }
   else
   {

    }


});

document.querySelector(".clickLess").addEventListener("click",function()
{
  document.querySelector(".clickMore").classList.remove("hide");
  document.querySelector(".more").classList.add("hide");
});
