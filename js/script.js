$(function(){
    // "use strict";
    $('#html').LineProgressbar({
        percentage: 98,
        fillBackgroundColor: '#3498db',
        backgroundColor: '#EEEEEE',
        radius: '0px',
        height: '10px',
        width: '100%'
      });
    $('#css').LineProgressbar({
        percentage: 95,
        fillBackgroundColor: '#3498db',
        backgroundColor: '#EEEEEE',
        radius: '0px',
        height: '10px',
        width: '100%'
      });
    $('#js').LineProgressbar({
        percentage: 51,
        fillBackgroundColor: '#3498db',
        backgroundColor: '#EEEEEE',
        radius: '0px',
        height: '10px',
        width: '100%'
      });
    $('#bootstrap').LineProgressbar({
        percentage: 90,
        fillBackgroundColor: '#3498db',
        backgroundColor: '#EEEEEE',
        radius: '0px',
        height: '10px',
        width: '100%'
      });
})

let preloader = document.querySelector(".preloader")
window.addEventListener("load", function(){
    preloader.style.display = "none"
})

// Color switcher js Start=====================
    // Type one Start
var colorChenge = document.querySelector("#colorChenge");
var defaultColor = "#F15412";

window.addEventListener("load", function(){
    colorChenge.value = defaultColor;
    colorChenge.addEventListener("input", updateFirst);
    colorChenge.select();
});

function updateFirst(event) {
var body = document.querySelector("body");
var lalala = body.style.background = event.target.value;
console.log(lalala);
}
    // Type one End





    // Type two Start
    let color_switcher = document.querySelector(".color_switcher")
    let colors = document.querySelectorAll(".color_switcher li")
    let cog = document.querySelector(".cog")
    cog.addEventListener("click", function(){
        color_switcher.classList.toggle("slide")
        cog.classList.toggle("radius")
    })
    colors.forEach(e => {
        e.addEventListener('click', function(){
            let body = document.querySelector("body")
            let color = e.dataset.color;
            body.style.background = color
            console.log(input);
        })
    });
    // Type two End



    // Type three Start
let color_switcher_3 = document.querySelector(".color_switcher-3")
let colors_3 = document.querySelectorAll(".color_switcher-3 li")
let cog_3 = document.querySelector(".cog-3")
cog_3.addEventListener("click", function(){
    color_switcher_3.classList.toggle("slide")
    cog_3.classList.toggle("radius")
})
colors_3.forEach(e => {
    e.addEventListener('click', function(){
        let cssLink = document.querySelector(".cssLink");
        console.log(cssLink);
        var style = e.dataset.attribute;
        console.log(style);
        cssLink.setAttribute("href", style);
    })
});
    // Type three end

// Color switcher js End =======================







  
