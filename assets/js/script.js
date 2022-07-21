$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('#cabecalho').addClass("sticky");
        }else{
            $('#cabecalho').removeClass("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
});
