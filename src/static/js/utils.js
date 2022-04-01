const response = await fetch('../data.json');
const data = await response.json();

function generateCardLogo({ logo, name, active = false }) {
    const card = $('<div>', { class: 'kelas' }).append([
        $('<img>', { src: logo, class: 'logo-kelas' }),
        $('<p>').text(name),
    ]);
    return !active ? card.append($('<div>', { class: 'overlay' }).text('Coming Soon')) : card;
}

export { generateCardLogo, data };
