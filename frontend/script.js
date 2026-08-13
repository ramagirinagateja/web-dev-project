//alert("hey this is my first js file");

//document.querySelector("img").src=jane.png;
let h2=document.querySelector("h2");
let btn=document.getElementById("toggle");
let img=document.querySelector("img");
let p=document.querySelector("p");
btn.addEventListener("click",function(){
    h2.innerText="jane";
    img.src="jane.png";
    p.innerText="female";

});

