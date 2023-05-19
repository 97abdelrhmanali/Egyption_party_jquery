



let width = $(".home .navSkema .navdetails").outerWidth()
$(".home .navSkema .navdetails").css("width","0px")
$(".home .navSkema .navdetails").css("padding","0px")

$(".home .navSkema span").click(function () { 
    //////////////////hide //////////////////////
    console.log($(".home .navSkema .navdetails").outerWidth())
    if($(".home .navSkema .navdetails").css("width") == "0px"){
        $(".home .navSkema .navdetails").animate({padding:"16px"},8)
        $(".home .navSkema .navdetails").animate({width : width},500)
        console.log($(".home .navSkema .navdetails").width())
        $(".home  .detail").animate({left: "8%"},500)
    }

    else{
        $(".home .navSkema .navdetails").animate({padding:"0px"},20)
        $(".home .navSkema .navdetails").animate({width : "0px"},500)
        $(".home  .detail").animate({left: "0%"},500)
    }
})

$(".fa-xmark").click(function () {
    $(".home .navSkema .navdetails").animate({padding:"0px"},20)
    $(".home .navSkema .navdetails").animate({width : "0px"},500)
    $(".home  .detail").animate({left: "0%"},500)
})


$(window).scroll(function () {
    console.log($(window).scrollTop())
    if(($(".home .navSkema span").offset().top >= $("#details").offset().top) && ($(".home .navSkema span").offset().top < $("#duration").offset().top) )
    {
        $(".home .navSkema span").removeClass("text-white")
        $(".home .navSkema span").addClass("text-black")
    }

    else if(($(".home .navSkema span").offset().top >= $("#duration").offset().top) && ($(".home .navSkema span").offset().top < $("#contact").offset().top)){
        $(".home .navSkema span").addClass("text-white")
        $(".home .navSkema span").removeClass("text-black")
    }

    else if(($(".home .navSkema span").offset().top >= $("#contact").offset().top))
    {
        $(".home .navSkema span").removeClass("text-white")
        $(".home .navSkema span").addClass("text-black")
    }


    else{
        $(".home .navSkema span").addClass("text-white")
        $(".home .navSkema span").removeClass("text-black")
    }
})






$(".details h3").click(function () {
    $(".details p").not($(this).next().slideToggle(500)).slideUp(500)
})




/////////////time //////////////////////////////////////////////////////
var nextDate = new Date("dec 17,2023 15:30:50").getTime();
let x = setInterval(function () {
    var nowDate = new Date().getTime()
    var dis= nextDate - nowDate;
    var days = Math.floor(dis/(1000 * 60 *60 *24))
    var hours = Math.floor((dis%(1000*60*60*24)) / (1000*60*60))
    var mins = Math.floor((dis%(1000*60*60)) / (1000*60))
    var secs = Math.floor((dis%(1000*60)) / 1000)

    $(".duration .overlay .days h3").html(days + " D")
    $(".duration .overlay .hours h3").html(hours + " H")
    $(".duration .overlay .mins h3").html(mins + " M")
    $(".duration .overlay .secs h3").html(secs + " S")

},500)



let count = 100;
$("#msg").keyup(function (e) { 
    console.log($(this).val().length)
    count = 100 - $(this).val().length
    if(count > 0){
        $(".nchar").html(count)
    }

    else{
        $(".nchar").html("your availble character is finished")
    }
        
});