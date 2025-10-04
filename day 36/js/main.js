// $(window).ready(function(){
//     alert("Jquery is working")
// })


// $('#header')


// $('.paragrafi')


// $('ul li').mouseover(function(){
//     alert('Mouse over')
// })


// $('ol li').mouseout(function(){
//     alert('Mouse out')
// })


$('#btn').click(function(){
    console.log($('#h1').text());
    $('#h1').text('testing text');
})


$('#btn2').click(function(){
    console.log('clicked')
})

$('#mydiv').click(function(){
    $(this).addclass('clicked');
})

.find('span')
.attr('title' , 'hover over me')


$('#btn4').click(function(){
    $('.hidden').hide();
})
$('#btn3').click(function(){
    $('.hidden').show();
})




/*
 click
 keydown
 keyup
 mouseover
 mouseout
 focus
 resiz
 */