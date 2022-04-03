const response = await fetch('/api/event/members');
const data = await response.json();

// active = 0 === Belum Mulai
// active = 1 === Mulai
// active = 2 === Selesai
function generateCardLogo({ logo, name, active = 0 }) {
    const card = $('<div>', { class: 'kelas' }).append([
        $('<img>', { src: logo, class: 'logo-kelas' }),
        $('<p>').text(name),
    ]);
    if (active === 0) return card.append($('<div>', { class: 'overlay' }).text('Coming Soon'));
    else if (active === 1) return card;
    else if (active === 2) return card.append($('<div>', { class: 'overlay' }).text('Finished'));
}

function generatePopupCard(group1, group2) {
    return $('<div>', { class: 'popup-card' }).append([
        $('<div>', { class: 'title-container' }).append([
            $('<h3>').text('Prainduksi'),
            $('<h1>', { class: 'popup-title' })
                .text('Call of The Sea')
                .append($('<span>', { class: 'material-icons-round' }).text('sailing'))
                .prepend($('<span>', { class: 'material-icons-round' }).text('sailing')),
        ]),
        $('<div>', { class: 'logo-container' }).append([
            $('<div>', { class: 'image-container' }).append([
                $('<img>', { src: group1.logo }),
                $('<h3>').text(group1.name),
            ]),
            $('<span>', { class: 'material-icons-round' }).text('close'),
            $('<div>', { class: 'image-container' }).append([
                $('<img>', { src: group2.logo }),
                $('<h3>').text(group2.name),
            ]),
        ]),
        $('<form>', { action: '', id: 'password-form' }).append([
            $('<div>', { class: 'form-container' }).append([
                $('<label>', { for: 'key', class: 'material-icons-round' }).text('key'),
                $('<input>', {
                    type: 'password',
                    id: 'key',
                    autocomplete: 'off',
                    placeholder: 'Enter the password',
                }),
                $('<input>', { type: 'submit', name: 'submit', value: 'Submit' }),
            ]),
            $('<span>', { id: 'msg' }),
        ]),
        $('<span>', { id: 'close-popup', class: 'material-icons-round close-icon' }).text('close'),
    ]);
}

function generateVideoPage({ video, poster }) {
    return [
        $('<video>', { class: 'invitation', src: video }),
        $('<div>', { class: 'vid-content' }).append([
            $('<div>', { class: 'text-container' }).append([
                $('<h1>').text('Congratulations !'),
                $('<p>').text(
                    'You can download invitation and get the link through buttons below bla bla... gatau lagi wa mo tulis apa...'
                ),
            ]),
            $('<div>', { class: 'button-container' }).append([
                $('<a>', { href: poster, class: 'download-inv' }).text('Download Invitation'),
                $('<a>', { id: 'clip-copy', class: 'copy-link' }).text('Copy Link'),
            ]),
        ]),
    ];
}

export { generateCardLogo, generatePopupCard, generateVideoPage, data };
