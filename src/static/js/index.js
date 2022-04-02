import { generateCardLogo, data, generatePopupCard, generateVideoPage } from './utils.js';

// Generate card kelas
$('.kelas-container').append(data['classes'].map((data) => generateCardLogo(data)));

// Password popup
$('.logo-kelas').on('click', (e) => {
    const id = $(e.target).attr('data-id');
    const content = $('.content, .bg-vid');
    const container = $('.popup-container');
    const attended = data['classes'].find((item) => item.id === id);
    content.toggleClass('blur');
    container.empty().fadeIn(400).css('display', 'flex').append(generatePopupCard(data['ti10'], attended));
    $('#close-popup').on('click', () => {
        content.toggleClass('blur');
        container.fadeOut(250);
    });
    // Demi input box yang cantik ;-;
    $("input[type='password']").on('focus', () => {
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
});

$(document).on('submit', '#password-form', async (e) => {
    e.preventDefault();

    let jawab = document.getElementById('key').value.toUpperCase();
    const id = $(e.target).attr('data-id');
    const attended = data['classes'].find((item) => item.id === id);

    const option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ auth: jawab, id }),
    };
    const res = await fetch('/api/auth', option);
    if (res.status === 200) {
        const container = $('.c-3');
        $('.content').toggleClass('blur');
        await $('.popup-container').fadeOut(350).promise();

        $('.c-1, .sosmed-container').css('display', 'none');
        container.fadeIn(250).css('display', 'flex').append(generateVideoPage(attended));

        // Back button from video page
        $('.back-btn').on('click', async () => {
            await container.fadeOut(250).promise();
            container.empty();
            $('.c-1 , .sosmed-container').fadeIn(750).css('display', 'flex');
        });

        $('video.invitation')[0].play();
    } else {
        $('#msg').html('Oops, wrong password!').css('color', 'red');
    }
});
