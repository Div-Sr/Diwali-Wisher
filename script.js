$(document).ready(function(){
    $(".popup").hide();
})
let arr = [];
$(".lamp1").click(function () {
    if ($(".lamp1").hasClass("unlit")) {
        $(".lamp1").attr("class", "lamp1 lamp lit");
        $(".lamp1").attr("src", "lamp_lit.png");
        arr.push(1);
        if (arr.length == 6) {
            wishFunc();
        }
    }
})
$(".lamp2").click(function () {
    if ($(".lamp2").hasClass("unlit")) {
        $(".lamp2").attr("class", "lamp2 lamp lit");
        $(".lamp2").attr("src", "lamp_lit.png");
        arr.push(1);
        if (arr.length == 6) {
            wishFunc();
        }
    }
})
$(".lamp3").click(function () {
    if ($(".lamp3").hasClass("unlit")) {
        $(".lamp3").attr("class", "lamp3 lamp lit");
        $(".lamp3").attr("src", "lamp_lit.png");
        arr.push(1);
        if (arr.length == 6) {
            wishFunc();
        }
    }
})
$(".lamp4").click(function () {
    if ($(".lamp4").hasClass("unlit")) {
        $(".lamp4").attr("class", "lamp4 lamp lit");
        $(".lamp4").attr("src", "lamp_lit.png");
        arr.push(1);
        if (arr.length == 6) {
            wishFunc();
        }
    }
})
$(".lamp5").click(function () {
    if ($(".lamp5").hasClass("unlit")) {
        $(".lamp5").attr("class", "lamp5 lamp lit");
        $(".lamp5").attr("src", "lamp_lit.png");
        arr.push(1);
        if (arr.length == 6) {
            wishFunc();
        }
    }
})
$(".lamp6").click(function () {
    if ($(".lamp6").hasClass("unlit")) {
        $(".lamp6").attr("class", "lamp6 lamp lit");
        $(".lamp6").attr("src", "lamp_lit.png");
        arr.push(1);
        if (arr.length == 6) {
            wishFunc();
        }
    }
})

const wishFunc = async ()=>{
    await $(".popup").show();
    let fireworks = new Audio("fireworks.mp3");
    await fireworks.play();
    $('body').click(function(){
        fireworks.pause();
        $(".popup").hide();
    })
}