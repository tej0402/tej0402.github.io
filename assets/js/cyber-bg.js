const canvas = document.getElementById('cyber-canvas');
const ctx = canvas.getContext('2d');

let width, height;

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

window.addEventListener('resize', resize);
resize();

// Matrix characters - using Katakana and standard alphabet
// Matrix characters - Telugu, Hindi, Malayalam, Tamil, Kannada, English
const chars = 'అఆఇఈఉఊఋఎఏఐఒఓఔకఖగఘఙచఛజఝఞటఠడఢణతథదధనపఫబభమయరలవశషసహళక్షజ్ఞअआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहक्षत्रज्ञഅആഇഈഉഊഋഎഏഐഒഓഔകഖഗഘങചഛജഝഞടഠഡഢണതഥദധനപഫബഭമയരലവശഷസഹളഴറಅಆಇಈಉಊಋಎಏಐಒಓಔಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹಳಕ್ಷಜ್ಞஅஆஇஈஉஊஎஏஐஒஓஔகஙசஞடணதநபமயரலவழளறனABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const charArray = chars.split('');

const fontSize = 16;
const columns = width / fontSize;

// Array of drops - one per column
const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

// Colors from the theme
const colors = [
    '#d946ef', // Fuchsia
    '#8b5cf6', // Violet
    '#06b6d4'  // Cyan
];

function draw() {
    // Translucent black background to create trail effect
    // Using a very low opacity to make trails longer
    ctx.fillStyle = 'rgba(15, 23, 42, 0.05)'; // Slate 900 with opacity
    ctx.fillRect(0, 0, width, height);

    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        // Random color for each character
        const color = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillStyle = color;

        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Sending the drop back to the top randomly after it has crossed the screen
        // adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Incrementing Y coordinate
        drops[i]++;
    }
}

// Run the animation
setInterval(draw, 33);
