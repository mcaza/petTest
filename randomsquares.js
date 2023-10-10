const colors = ['Amethyst', 'Banana', 'Basil', 'BeachRock', 'Beef', 'BellPepper', 'Berry', 'Blackberry', 'Blueberry', 'BlueMushroom', 'BlueRasperry', 'Bubblegum', 'BurntToast', 'Cherry', 'Cinnamon', 'Cornflower', 'CottonCandy', 'Cranberry', 'Denim', 'Dewdrop', 'Eggplant', 'FruitSnack', 'Gold', 'Goldfish', 'GreenGrape', 'Guava', 'Gumdrop', 'Haunt', 'Holiday', 'HotChocolate', 'Icing', 'Ink', 'Iron', 'JellyBean', 'Juice', 'Kiwi', 'Latte', 'Lavender', 'Leaf', 'Lemon', 'Lime', 'Love', 'Mandarin', 'Marker', 'Marmalade', 'Mocha', 'Molasses', 'Night', 'Oatmeal', 'Olive', 'Orange', 'Papaya', 'Party', 'Pastel', 'Peach', 'Pillow', 'Pine', 'Plum', 'Potato', 'PurpleGrape', 'Rock', 'Sardine', 'Seafoam', 'Shell', 'Silver', 'Snow', 'SoftServe', 'Taffy', 'Tomato', 'Vanilla', 'Waterfall', 'Yarn'];

function chooseColor() {
    var randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum];
}

function randomNumber() {
    var randomNum = Math.floor(Math.random() * 100);
    return randomNum;
}

function setMainColorPic(type, file, mainColor) {
    const link = file + mainColor + ".png";
    document.getElementById(type).src = link;
}

function setNewColorPic(type, file) {
    const randomColor = choosecolor();
    const link = file + randomColor + ".png";
    document.getElementById(type).src = link;
}

function runCode() {
    const color = chooseColor();
    const hair = chooseColor();
    setMainColorPic('Primary', 'Layers/Primary/', color);
    setMainColorPic('MainLines', 'Layers/MainLines/', color);
    let roll = randomNumber();
    if (roll < 33) {
        setMainColorPic('Hair', 'Layers/Hair/Floof/', color);
    } else if (roll < 66) {
        setMainColorPic('Hair', 'Layers/Hair/Wave/', hair);
    } else {
        setMainColorPic('Hair', 'Layers/Hair/Mane/', hair);
    }
   /* roll = randomNumber(); */
    roll = 45;
    if (roll < 25) {
        setMainColorPic('Tail', 'Layers/Tail/Nub/', color);
    } else if (roll < 50) {
        setMainColorPic('Tail', 'Layers/Tail/Poof/', hair);
    } else if (roll < 75) {
        setMainColorPic('Tail', 'Layers/Tail/Long/', color);
    } else {
        setMainColorPic('Tail', 'Layers/Tail/Dragon/', color);
        setMainColorPic('SecondTail', 'Layers/Tail/Dragon/End/', hair);
    } 
    /*roll = randomNumber();
    if (roll < 50) {
        setMainColorPic('Spots', 'Layers/Markings/Belly/', color);
    }
    roll = randomNumber();
    if (roll < 50) {
        setMainColorPic('Belly', 'Layers/Markings/Belly/', color);
    }*/
}
