$(document).ready(function(){
$(".tabLinks a").click(function(e){
    e.preventDefault()
    $(".tabLinks a").removeClass("active")
    $(this).addClass("active")
    $(".about div").removeClass("active")
    $($(this).attr("href")).addClass("active")
})

   
})