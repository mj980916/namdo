$(function(){

    $(".main> li").hover(function(){
        $(this).find(".sub").stop().slideDown()
    }, function(){
        $(".sub").stop().slideUp()
    })

    // var n = 0;
    // setInterval(function(){
    //     if(n==2){
    //         n=0
    //     }else{
    //         n++;
    //     }//if

    //     $(".lift_move").animate({"left": n * (-800) + "px"},500)

    // }, 3000)//setIn


    setInterval(function(){
        $(".lift_move").animate({left: "-800px"}, 500, function(){
            $(".lift_move").append($(".lift_move li").eq(0))
            $(".lift_move").css({left:"0"})
        })
    }, 3000)


    $(".p_click").click(function(){
        $(".popup").show()
    })
    $(".close").click(function(){
        $(".popup").hide()
    })


})//fin.