let backgroundList = ['left top', 'center top', 'right top', 'left center', 'center center', 'right center', 'left bottom', 'bottom center'];
let tileList = ['.tile1', '.tile2', '.tile3', '.tile4', '.tile5', '.tile6', '.tile7', '.tile8', '.tile9'];

function shuffleArray(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function isWhiteTile(tile) { 
    var tilePos = document.querySelector(".tile"+tile);
    var style = getComputedStyle(tilePos);
    var opacity = style.opacity;
    if (opacity == '0') {
        return 0;
    }
    else {
        return 1;
    }
}
function tilePos(element) { // gets background position (image portion) 
    var bgrElement = document.querySelector(`.tile${element}`);
    var style = getComputedStyle(bgrElement);
    var backgroundPos = style.backgroundPosition;
    return backgroundPos;
}
function switchTile(tile, whitePosition) {
    document.querySelector(`.tile${tile}`).style.opacity = "0%";
    document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
    document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = tilePos(tile);
    console.log(tilePos(tile));
}
function clickTile(tile) { 
    var whitePosition = null;
    for(i=0; i < tileList.length; i++) { //determines white tile position by checking opacity, 0 = white
        if (isWhiteTile(i+1) == '0') {
            whitePosition = i+1;
        }
   }
   if(whitePosition == 1) {
    switch(tile) {
        case 4:
        case 2:
            switchTile(tile, whitePosition);
            break;
        }
    }
   else if(whitePosition == 2) {
    switch(tile) {
        case 5:
        case 3:
        case 1:
            switchTile(tile, whitePosition);
            break;
 
        }
   }
   else if(whitePosition == 3) {
    switch(tile) {
        case 2:
        case 6:
            switchTile(tile, whitePosition);
            break; 
        }
   }
   else if(whitePosition == 4) {
    switch(tile) {
        case 1:
        case 7:
        case 5:
            switchTile(tile, whitePosition);
            break;
 
        }
   }
   else if(whitePosition == 5) {
    switch(tile) {
        case 2:
        case 4:
        case 6:
        case 8:
            switchTile(tile, whitePosition);
            break;
        }
   }
   else if(whitePosition == 6) {
    switch(tile) {
        case 3:
        case 5:
        case 9:
            switchTile(tile, whitePosition);
            break;
 
        }
    }
   else if(whitePosition == 7) {
    switch(tile) {
        case 8:
        case 4:
            switchTile(tile, whitePosition);
            break; 
        }
   }
   else if(whitePosition == 8) {
    switch(tile) {
        case 7:
        case 9:
        case 5:
            switchTile(tile, whitePosition);
            break;
 
        }
   }
   else if(whitePosition == 9) {
    switch(tile) {
        case 8:
        case 6:
            switchTile(tile, whitePosition);
            break;
            }
        }
    }

function shuffle() {
    var shuffleList = shuffleArray(backgroundList);
    var shuffleTiles = shuffleArray(tileList);

    for(i = 0; i < shuffleTiles.length; i++) {
        if (i == 8) { //white tile position
            document.querySelector(shuffleTiles[i]).style.opacity = "0%";
        }
        else {
            document.querySelector(shuffleTiles[i]).style.opacity = "100%";
            document.querySelector(shuffleTiles[i]).style.backgroundPosition = shuffleList[i];
        }
    }
}
