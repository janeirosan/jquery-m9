$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#btn-cancel').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const newImageAddress = $('#newimg-address').val();
        const newItem = $('<li style="display: none"></li>')
        $(`<img src="${newImageAddress}">`).appendTo(newItem);
        $(`<div class="overlay-imglink">
            <a href="${newImageAddress}" target="_blank" title="See full size">See full size</a>
            </div>`).appendTo(newItem);
            $(newItem).appendTo('ul');
            $(newItem).fadeIn();
            $('#newimg-address').val('');
    })
})