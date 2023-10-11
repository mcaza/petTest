const colors = ['Amethyst', 'Banana', 'Basil', 'BeachRock', 'Beef', 'BellPepper', 'Berry', 'Blackberry', 'Blueberry', 'BlueMushroom', 'BlueRaspberry', 'Bubblegum', 'BurntToast', 'Cherry', 'Cinnamon', 'Cornflower', 'CottonCandy', 'Cranberry', 'Denim', 'Dewdrop', 'Eggplant', 'FruitSnack', 'Gold', 'Goldfish', 'GreenGrape', 'Guava', 'Gumdrop', 'Haunt', 'Holiday', 'HotChocolate', 'Icing', 'Ink', 'Iron', 'JellyBean', 'Juice', 'Kiwi', 'Latte', 'Lavender', 'Leaf', 'Lemon', 'Lime', 'Love', 'Mandarin', 'Marker', 'Marmalade', 'Mocha', 'Molasses', 'Night', 'Oatmeal', 'Olive', 'Orange', 'Papaya', 'Party', 'Pastel', 'Peach', 'Pillow', 'Pine', 'Plum', 'Potato', 'PurpleGrape', 'Rock', 'Sardine', 'Seafoam', 'Shell', 'Silver', 'Snow', 'SoftServe', 'Taffy', 'Tomato', 'Vanilla', 'Waterfall', 'Yarn'];
const clothes = ['None', 'HarnessTrans', 'HarnessBrown', 'HarnessPink', 'HarnessBlue', 'BandagesChest', 'ServiceVestBeige', 'ServiceVestBlue', 'ServiceVestPink', 'ServiceVestRed'];
const hats = ['None','None','None','None', 'FlowerCrownPastel', 'Glasses', 'Halo'];

function chooseColor() {
    var randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum];
}

function chooseClothesBottom() {
    var randomNum = Math.floor(Math.random() * clothes.length);
    return clothes[randomNum];
}

function chooseClothesTop() {
    var randomNum = Math.floor(Math.random() * hats.length);
    return hats[randomNum];
}

function setOutfit(clothes, type) {
    if (clothes !== 'None') {
        const link = 'Layers/' + type + "/" + clothes + '.png';
        document.getElementById(type).src = link;
    } else {
        document.getElementById(type).src = "";
    }
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
    const randomColor = chooseColor();
    const link = file + randomColor + ".png";
    document.getElementById(type).src = link;
}

function setMarkings(color, type) {
    roll = randomNumber();
    if (roll < 50) {
        setMainColorPic(type, 'Layers/Markings/' + type + "/", color);
    } else {
        document.getElementById(type).src = "";
    }
}

function setTail(color, hair) {
    roll = randomNumber();
    document.getElementById('SecondTail').src = "";
    if (roll < 25) {
        setMainColorPic('Tail', 'Layers/Tail/Nub/', color);
    } else if (roll < 50) {
        roll = randomNumber();
        if (roll < 50) {
            setMainColorPic('Tail', 'Layers/Tail/Poof/', hair);
        } else {
            setMainColorPic('Tail', 'Layers/Tail/Poof/', color);
        }
    } else if (roll < 75) {
        roll = randomNumber();
        if (roll < 50) {
            setMainColorPic('Tail', 'Layers/Tail/Long/', hair);
        } else {
            setMainColorPic('Tail', 'Layers/Tail/Long/', color);
        }
    } else {
        setMainColorPic('Tail', 'Layers/Tail/Dragon/', color);
        setMainColorPic('SecondTail', 'Layers/Tail/Dragon/End/', hair);
    }
}

function setHair(color, hair) {
    let roll = randomNumber();
    if (roll < 33) {
        setMainColorPic('Hair', 'Layers/Hair/Floof/', color);
    } else if (roll < 66) {
        setMainColorPic('Hair', 'Layers/Hair/Wave/', hair);
    } else {
        setMainColorPic('Hair', 'Layers/Hair/Mane/', hair);
    }
}

function setNose(color) {
    var randomNum = randomNumber();
    if (randomNum < 50) {
        
    }
}

function runCode() {
    const color = chooseColor();
    const hair = chooseColor();
    const bottom = chooseClothesBottom();
    const hat = chooseClothesTop();
    setMainColorPic('Primary', 'Layers/Primary/', color);
    setMainColorPic('MainLines', 'Layers/MainLines/', color);
    setNewColorPic('Nose', 'Layers/Noses/');
    setHair(color, hair);
    setTail(color, hair);
    setMarkings(color, 'Belly');
    setMarkings(color, 'Spots');
    setOutfit(bottom, 'ClothesBottom');
    setOutfit(hat, 'ClothesTop');

    /*roll = randomNumber();
     if (roll < 50) {
         document.getElementById('Whiskers').src = 'Layers/Whiskers.png';
     } */
}
