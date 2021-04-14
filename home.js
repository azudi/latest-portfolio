let click=true;
document.querySelector(".drop-list>span").onclick=function(){
if(click){
document.querySelector(".drop-list>div").style.display="block";
click=false;
}
else{
document.querySelector(".drop-list>div").style.display="none";
click=true;
}
}

let clicker=true;
document.querySelector(".navicon").onclick=function(){
if(clicker){
document.querySelector(".nav-div").style.left="0";
clicker=false;
}
else{
document.querySelector(".nav-div").style.left="-100%";
clicker=true;
}
}


var i=0,j=0;
    
   document.querySelector(".next").onclick=function(){
     document.querySelector(".back").style.display="inline-flex"
     i=i-100;
     j++;
     var slider=document.querySelector(".slider>div>div");
     slider.style.left=i+"%";
     if(j==document.querySelectorAll(".slider>div>div>div").length-1){
       document.querySelector(".next").style.display="none"
     }
     if(document.querySelector("body").clientWidth>=576){
        if(j==document.querySelectorAll(".slider>div>div>div").length-4){
        document.querySelector(".next").style.display="none"
        }
     }
     if(document.querySelector("body").clientWidth>=768){
     if(j==document.querySelectorAll(".slider>div>div>div").length-5){
     document.querySelector(".next").style.display="none"
     }
     }
   
   }
   
   document.querySelector(".back").onclick=function(){
   document.querySelector(".next").style.display="inline-flex"
   i=i+100;
   j--;
   if(j<=0){
   document.querySelector(".back").style.display="none"
   i=0;
   }
   var slider=document.querySelector(".slider>div>div");
   slider.style.left=i+"%";
   }
   
  $(".to-top").click(function(){
    $("body,html").animate({scrollTop:0})
    });
    
    window.onscroll=function (){
    if(document.querySelector("body").scrollTop>500){
         document.querySelector(".to-top").style.display="inline-flex";
   }
  
   else if(document.querySelector("html").scrollTop>500){
   document.querySelector(".to-top").style.display="inline-flex";
   }
   else{
   document.querySelector(".to-top").style.display="none"; 
   }
    
    }
    
    document.querySelector(".port-scroll").onclick=function(){
       $("body,html").animate({scrollTop:document.querySelector(".port-stop").getBoundingClientRect().top})
       
    }
    document.querySelector(".about-scroll").onclick=function(){
    $("body,html").animate({scrollTop:document.querySelector(".about-stop").getBoundingClientRect().top})
    
    }
    document.querySelector(".exp-scroll").onclick=function(){
    $("body,html").animate({scrollTop:document.querySelector(".exp-stop").getBoundingClientRect().top})
    
    }
    document.querySelector(".con-scroll").onclick=function(){
    $("body,html").animate({scrollTop:document.querySelector(".con-stop").getBoundingClientRect().top})
    
    }
    document.querySelector(".ser-scroll").onclick=function(){
    $("body,html").animate({scrollTop:document.querySelector(".ser-stop").getBoundingClientRect().top})
    }