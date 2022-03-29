$('.kelas').click(() => {
    $('.c-1').css({ display: 'none' });
    $('.c-2').css({ display: 'flex' });
    $('.c-3').css({ display: 'none' });
    $('.nav').css({ display: 'flex' });
});

$('.back-btn').click(() => {
    $('.c-1').css({ display: 'flex' });
    $('.c-2').css({ display: 'none' });
    $('.c-3').css({ display: 'none' });
    $('.nav').css({ display: 'none' });
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
        congrats();
    } else {
        $('#msg').html('Oops, wrong password!').css('color', 'red');
    }
    return false;
});

function congrats() {
    $('.c-1').css({ display: 'none' });
    $('.c-2').css({ display: 'none' });
    $('.c-3').css({ display: 'flex' });
    $('.nav').css({ display: 'flex' });
}
