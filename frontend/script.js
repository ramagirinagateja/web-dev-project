//alert("hey this is my first js file");

//document.querySelector("img").src=jane.png;
let h2=document.querySelector("h2");
let btn=document.getElementById("toggle");
let img=document.querySelector("img");
let p=document.querySelector("p");
let count=0;
btn.addEventListener("click",function(){
    if(count==0){
    h2.innerText="jane";
    img.src="jane.png";
    p.innerText="female";
    }
    else if(count==1){
        //3rd person data
        h2.innerText="teja";
        img.src="john.png";
        p.innerText="female";
    }
    else if(count==2){
        //4th person data
    }
    count++;
    if(count==3){
        count = 0;
    }

});
let rdm=document.getElementById("random");
rdm.addEventListener("click",function(){
    //url:https://randomuser.me/api
    fetch("https://randomuser.me/api ")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        var details=data.results[0];
        document.getElementById("img").src=details.picture.large;
        document.getElementById("gender").innerText=details.gender;
        var fullname=details.name.first +" "+details.name.last;
        document.getElementById("name").innerText=fullname;
    })
    
});
