$(document).ready(function () {
    $('div').text('Holisss')

    $('#boton').click(function (e) {
        e.preventDefault();
        console.log('Me hicistes clics')
    });

    $('#div').fadeOut();

    $.ajax({
        url: "https://randomuser.me/api/",
        dataType: "json",
        success: function (response) {
            console.log(response.results[0])
            $('textarea').text(response.results[0].name.first)
            $('img').attr({ src: response.results[0].picture.large, alt: 'Fotito' })
        }
    });
});
