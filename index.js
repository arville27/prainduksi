$('.kelas').click((e)=>{
    console.log("Hello");
    $('.c-1').css({display: 'none'});
    $('.c-2').css({display:'flex'});
    $('.c-3').css({display: 'none'});
    $('.nav').css({display:'flex'});
})

$('.back-btn').click((e)=>{
    $('.c-1').css({display:'flex'});
    $('.c-2').css({display:'none'});
    $('.c-3').css({display: 'none'});
    $('.nav').css({display:'none'});
})

$(document).on('submit', '#password-form', function() {
    let jawab = document.getElementById("key").value.toUpperCase();
    let key = "SIREN"
    if(jawab === key){
        console.log("YESS");
        congrats();
    }else{
        $('#msg').html('Oops, wrong password!').css('color','red');
    }
    return false;
});


function congrats(){
    $('.c-1').css({display:'none'});
    $('.c-2').css({display:'none'});
    $('.c-3').css({display:'flex'});
    $('.nav').css({display:'flex'});
}