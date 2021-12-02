// toogle  what to do icon
$(document).ready(function(){
    // alert ("Working")
    $("#image1").click(function(){
        $("#design").show(2000)
        $("#image1").hide(2000)
        $("#design").addClass("alignDesign")
        $("span").addClass("boldDesign")
    })

    $("#image2").click(function(){
        $("#development").show(2000)
        $("#image2").hide(2000)
        $("#development").addClass("alignDesign")
        $("span").addClass("boldDesign")
    })
    $("#image3").click(function(){
        $("#product").show(2000)
        $("#image3").hide(2000)
        $("#product").addClass("alignDesign")
        $("span").addClass("boldDesign")
    })
    // hover effect on portfolio
    $("#port").hover(function(){
        $(".hover").show()
    })
})



// User response
