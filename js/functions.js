// const strBtn = document.querySelector("#strBtn")
// const agiBtn = document.querySelector("#agiBtn")
// const intBtn = document.querySelector("#intBtn")

// strBtn.addEventListener("click", () =>  {
//     filterSelection("strHero")
// });
// agiBtn.addEventListener("click", () => {
//     filterSelection("agiHero")
// });
// intBtn.addEventListener("click", () =>  {
//     filterSelection("intHero")
// });


$("#strBtn").click(function(){
    $(".intHero").hide();
    $(".agiHero").hide();
    $(".strHero").show();
  });

$("#agiBtn").click(function(){
    $(".strHero").hide();
    $(".intHero").hide();
    $(".agiHero").show();
});

$("#intBtn").click(function(){
    $(".strHero").hide();
    $(".agiHero").hide();
    $(".intHero").show();
});

$("#allBtn").click(function(){
    $(".strHero").show();
    $(".agiHero").show();
    $(".intHero").show();
});

let url = 

$("#searchBtn").click(function(){
    fetch('https://api.opendota.com/api/heroes/120/itemPopularity')
    .then(response => response.text())
    .then(data => console.log(data));
    })
    .catch(function() {
    
  
});

