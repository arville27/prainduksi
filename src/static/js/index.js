import { generateCardLogo, data, generatePopupCard } from './utils.js';

// Demi input box yang cantik ;-;
$(".form-container > input[type='password']").on('focus', () => {
    $('.form-container').css({
        'border-color': 'gold',
        'box-shadow': '0 0 10px gold',
    });
});

$(".form-container > input[type='password']").on('focusout', () => {
    $('.form-container').css({
        'border-color': 'black',
        'box-shadow': 'none',
    });
});

// Generate card kelas
$('.kelas-container').append(data['classes'].map((data) => generateCardLogo(data)));

// Password popup
$('.logo-kelas').on('click', (e) => {
    const id = $(e.target).attr('data-id');
    const content = $('.content');
    const container = $('.popup-container');
    const attended = data['classes'].find((item) => item.id === id);
    content.toggleClass('blur');
    container.empty().fadeIn(250).css({ display: 'flex' }).append(generatePopupCard(data['ti10'], attended));
    $('#close-popup').on('click', () => {
        content.toggleClass('blur');
        container.fadeOut(250);
    });
});

// Back button from video page
$('.back-btn').on('click', (e) => {
    $('.c-3').css({
        display: 'none',
    });
    $('.c-1 , .sosmed-container').css({
        display: 'flex',
    });
});

$(document).on('submit', '#password-form', async (e) => {
    e.preventDefault();
    let jawab = document.getElementById('key').value.toUpperCase();
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ auth: jawab }),
    };
    const res = await fetch('/api/auth', option);
    if (res.status === 200) {
        console.log('SUCCESS');
        $('.content').toggleClass('blur');
        $('.popup-container').fadeOut(250);
        $('.c-3').css({
            display: 'flex',
        });
        $('.c-1 , .sosmed-container').css({
            display: 'none',
        });
    } else {
        $('#msg').html('Oops, wrong password!').css('color', 'red');
    }
    return false;
});
