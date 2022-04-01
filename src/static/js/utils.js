const response = await fetch('../data.json');
const data = await response.json();

function generateCardLogo({ id, logo, name, active = false }) {
    const card = $('<div>', { class: 'kelas' }).append([
        $('<img>', { src: logo, class: 'logo-kelas', 'data-id': id }),
        $('<p>').text(name),
    ]);
    return !active ? card.append($('<div>', { class: 'overlay' }).text('Coming Soon')) : card;
}

function generatePopupCard(group1, group2) {
    return $('<div>', { class: 'popup-card' }).append([
        $('<h1>', { class: 'popup-title' }).text('Prainduksi'),
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

export { generateCardLogo, generatePopupCard, data };
