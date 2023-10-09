const colors = ['Amethyst', 'Aqua', 'Aruba', 'Ash', 'Azure', 'BabyBlue', 'BabyPink', 'Banana', 'Basil', 'Belize', 'Bellflower', 'Black', 'Bluebell', 'Blush', 'Breeze', 'Brown', 'Bubblegum', 'Cactus', 'Camel', 'Canary', 'Cappuccino', 'Caramel', 'Cerise', 'Charcoal', 'Chocolate', 'Coral', 'Crimson', 'DarkLime', 'DarkTurquoise', 'Denim', 'DustyBlue', 'Eggplant', 'ElectricBlue', 'Emerald', 'Evergreen', 'Fuchsia', 'Gold', 'Graphite', 'Honeydew', 'HunterGreen', 'Indigo', 'Ink', 'Iris', 'Ivory', 'Jade', 'Jewel', 'KellyGreen', 'Kiwi', 'Lake', 'Latte', 'Lavender', 'Lemon', 'Lilac', 'Lime', 'Mallard', 'Mandarin', 'Mango', 'Mauve', 'Merlot', 'MidnightBlue', 'MidnightGhost', 'Mocha', 'Natural', 'Navy', 'Olive', 'Opal', 'Orange', 'Papaya', 'ParisPink', 'Platinum', 'Plumwine', 'Pumpkin', 'Purple', 'Rasberry', 'Red', 'RoyalBlue', 'Rust', 'Saltwater', 'Scarlet', 'Seafoam', 'Shell', 'Silver', 'SnowWhite', 'Steel', 'Taupe', 'Teal', 'Turquoise', 'Vanilla', 'Violet', 'Watermelon', 'White', 'Wildrose'];
const gene = ['Basic']

function chooseColor() {
    var randomNum = Math.floor(Math.random() * colors.length);
    return randomNum;
}

function setPic(type) {
    let randomNumber = colors[chooseColor()];
    if (type === 'primary') {
        const link = "Layers/" + type + "/Basic/" + randomNumber + ".png";
        const linesLink = "Layers/Lines/" + randomNumber + ".png";
        const faceLink = "Layers/Face/FaceLines/" + randomNumber + ".png";
        document.getElementById(type).src = link;
        document.getElementById('lines').src = linesLink;
        document.getElementById('face').src = faceLink;
    } else if (type === 'secondary') {
        const link = "Layers/" + type + "/Basic/" + randomNumber + ".png";
        document.getElementById(type).src = link;
    } else if (type === 'wings') {
        var tempRandom = Math.floor(Math.random() * 100);
        if (tempRandom > 75) {
            const wingLink = "Layers/Wings/" + randomNumber + ".png";
            document.getElementById(type).src = wingLink;
        } else {
            document.getElementById(type).src = "";
        }
    } else if (type === 'horns') {
        var tempRandom = Math.floor(Math.random() * 100);
        if (tempRandom > 50) {
            const hornLink = "Layers/Horns/SmallHorns/" + randomNumber + ".png";
            document.getElementById(type).src = hornLink;
        } else {
            document.getElementById(type).src = "";
        }
    }
}



    function runCode() {
        setPic('primary');
        setPic('secondary');
        setPic('wings');
        setPic('horns');
    }
