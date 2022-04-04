import { generateCardLogo, data, generatePopupCard, generateVideoPage } from './utils.js';

// Preloader
$(document).ready(() => {
    $('#preloader').fadeOut(750);
});

// Generate card kelas
$('.kelas-container').append(data.participants.map((group) => generateCardLogo(group)));

// Password popup
$('.logo-kelas').on('click', async () => {
    const content = $('.content, .bg-vid, .sosmed-container');
    const container = $('.popup-container');
    const active = await (await fetch('/api/event/active')).json();
    content.toggleClass('blur');
    container.empty().fadeIn(400).css('display', 'flex').append(generatePopupCard(data.organizer, active));
    $('#close-popup').one('click', () => {
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
    const answer = document.getElementById('key').value.toUpperCase();
    const active = await (await fetch('/api/event/active')).json();
    const option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret: answer }),
    };
    const res = await fetch('/api/auth', option);
    if (res.status === 200) {
        const container = $('.c-3');
        $('.content, .bg-vid, .sosmed-container').removeClass('blur');
        await $('.popup-container').fadeOut(350).promise();

        $('.c-1').css('display', 'none');
        $('.back-btn').addClass('visible');
        container.empty().fadeIn(250).css('display', 'flex').append(generateVideoPage(active));

        const { link } = await (await fetch('/api/event/active/link')).json();

        // Back button from video page
        $('.back-btn').one('click', async () => {
            $('.back-btn').removeClass('visible');
            await container.fadeOut(500).promise();
            container.empty();
            $('.c-1 , .sosmed-container').fadeIn(750).css('display', 'flex');
        });

        // Clipboard copy from video page
        $('#clip-copy').on('click', () => navigator.clipboard.writeText(link));

        $('video.invitation')[0].play();
    } else {
        $('#msg').html('Oops, wrong password!').css('color', 'red');
    }
});

// Blinking text
const listWords = ['PPBP 1', 'PPBP 2', 'PPTI 11', 'PPTI 12', 'PPTI 13'];
let idxArr = 0;
let idx = 0;
let currentWord = listWords[idxArr];

function typeWriter() {
    if (idx < currentWord.length) {
        document.getElementById('typed-target').innerHTML += currentWord.charAt(idx++);
        setTimeout(typeWriter, 100);
    } else if (idx === currentWord.length && idxArr < listWords.length - 1) {
        idxArr++;
        setTimeout(() => {
            typeDeleter(currentWord);
            currentWord = listWords[idxArr];
        }, 2000);
    } else if (idxArr === listWords.length - 1) {
        idxArr = 0;
        setTimeout(() => {
            typeDeleter(currentWord);
            currentWord = listWords[idxArr];
        }, 2000);
    }
}

function typeDeleter(currentWord) {
    if (idx > 0) {
        idx--;
        let kata = currentWord.slice(0, idx);
        document.getElementById('typed-target').innerHTML = kata;
        setTimeout(() => typeDeleter(currentWord), 200);
    } else {
        typeWriter();
    }
}

typeWriter();
