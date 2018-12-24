$(document).ready(function(){
    var modal = $('.modalBack')
    $(".show").click(function(e){
        e.preventDefault()
        $(".modal").addClass("active")
        $(".modal-content").addClass("active")
    })
    $(".remove").click(function(e){
        e.preventDefault()
        $(".modal").removeClass("active")
    })

})