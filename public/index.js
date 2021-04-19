const swup = new Swup();

$(".checkbox").click(function(){
    $("."+this.id+"-textbox").toggleClass("hidden") })

// document.querySelectorAll(".icon-down")[0].addEventListener("click",function(){
//     document.querySelector(".d-1").classList.add("hidden")
// });
// document.querySelectorAll(".icon-down")[1].addEventListener("click",function(){
//     document.querySelector(".d-2").classList.add("hidden")
    
// });
// document.querySelectorAll(".icon-up")[0].addEventListener("click", function(){
//     document.querySelector(".d-1").classList.remove("hidden")
// });
// document.querySelectorAll(".icon-up")[1].addEventListener("click", function(){
//     document.querySelector(".d-2").classList.remove("hidden")
// });

$(".icon-down").click(function(){
    $("." +this.id ).slideToggle()
    $("#"+this.id).toggleClass("rotate")
})

$(".change-input").click(function(){
    $(".project-link").attr("type","file")
    $(".change-input").html("<p class='change-input-1'>Insert github link instead</p>")
   
})
$(".change-input-1").click(function(){
    $(".project-link").attr("type","text")
    $(".change-input-1").html("<p class='change-input'>Upload the folder instead</p>")
})