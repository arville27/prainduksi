import { generateCardLogo, data } from './utils.js';

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
        congrats();
    } else {
        $('#msg').html('Oops, wrong password!').css('color', 'red');
    }
    return false;
});
