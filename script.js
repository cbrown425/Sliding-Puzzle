

backgroundList = ['left top', 'center top', 'right top', 'left center', 'center center', 'right center', 'left bottom', 'bottom center'];
tileList = ['.tile1', '.tile2', '.tile3', '.tile4', '.tile5', '.tile6', '.tile7', '.tile8', '.tile9'];

function shuffleArray(a) { //array shuffle function
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function blankPos(tile) { //determines white tile position based on opacity
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
function getProperty(element) { // gets background position (image portion) 
    var bgrElement = document.querySelector(`.tile${element}`);
    var style = getComputedStyle(bgrElement);
    var backgroundPos = style.backgroundPosition;
    return backgroundPos;
}
function clickTile(tile) {
    var whitePosition = null;
   for(i=0; i < tileList.length; i++) {
        if (blankPos(i+1) == '0') {
            whitePosition = i+1;
    }
   }
   if(whitePosition == 1) {
   switch(tile) {
        case 4:
            document.querySelector(`.tile${tile}`).style.opacity = "0%";
            document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
            document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = getProperty(tile);
            console.log(getProperty(tile));
            break;
        case 2:
            document.querySelector(`.tile${tile}`).style.opacity = "0%";
            document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
            document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = getProperty(tile);
            console.log(getProperty(tile));
            break;
   }
}
   else if(whitePosition == 2) {
    switch(tile) {
        case 5:
            document.querySelector(`.tile${tile}`).style.opacity = "0%";
            document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
            document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = getProperty(tile);
            console.log(getProperty(tile));
            break;
        case 3:
            document.querySelector(`.tile${tile}`).style.opacity = "0%";
            document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
            document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = getProperty(tile);
            console.log(getProperty(tile));
            break;
        case 1:
            document.querySelector(`.tile${tile}`).style.opacity = "0%";
            document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
            document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = getProperty(tile);
            console.log(getProperty(tile));
            break;
 
    }
   }
   else if(whitePosition == 3) {
    switch(tile) {
        case 2:
            document.querySelector(`.tile${tile}`).style.opacity = "0%";
            document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
            document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = getProperty(tile);
            console.log(getProperty(tile));
            break;
        case 6:
            document.querySelector(`.tile${tile}`).style.opacity = "0%";
            document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
            document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = getProperty(tile);
            console.log(getProperty(tile));
            break; 
    }
   }
   else if(whitePosition == 4) {
    switch(tile) {
        case 1:
            document.querySelector(`.tile${tile}`).style.opacity = "0%";
            document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
            document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = getProperty(tile);
            console.log(getProperty(tile));
            break;
        case 7:
            document.querySelector(`.tile${tile}`).style.opacity = "0%";
            document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
            document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = getProperty(tile);
            console.log(getProperty(tile));
            break;
        case 5:
            document.querySelector(`.tile${tile}`).style.opacity = "0%";
            document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
            document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = getProperty(tile);
            console.log(getProperty(tile));
            break;
 
    }
   }
   else if(whitePosition == 5) {
    switch(tile) {
        case 2:
            document.querySelector(`.tile${tile}`).style.opacity = "0%";
            document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
            document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = getProperty(tile);
            console.log(getProperty(tile));
            break;
        case 4:
            document.querySelector(`.tile${tile}`).style.opacity = "0%";
            document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
            document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = getProperty(tile);
            console.log(getProperty(tile));
            break;
        case 6:
            document.querySelector(`.tile${tile}`).style.opacity = "0%";
            document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
            document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = getProperty(tile);
            console.log(getProperty(tile));
            break;
         case 8:
            document.querySelector(`.tile${tile}`).style.opacity = "0%";
            document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
            document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = getProperty(tile);
            console.log(getProperty(tile));
            break;
    }
   }
   else if(whitePosition == 6) {
    switch(tile) {
        case 3:
            document.querySelector(`.tile${tile}`).style.opacity = "0%";
            document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
            document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = getProperty(tile);
            console.log(getProperty(tile));
            break;
        case 5:
            document.querySelector(`.tile${tile}`).style.opacity = "0%";
            document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
            document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = getProperty(tile);
            console.log(getProperty(tile));
            break;
        case 9:
            document.querySelector(`.tile${tile}`).style.opacity = "0%";
            document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
            document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = getProperty(tile);
            console.log(getProperty(tile));
            break;
 
    }
   }
   else if(whitePosition == 7) {
    switch(tile) {
        case 8:
            document.querySelector(`.tile${tile}`).style.opacity = "0%";
            document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
            document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = getProperty(tile);
            console.log(getProperty(tile));
            break;
        case 4:
            document.querySelector(`.tile${tile}`).style.opacity = "0%";
            document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
            document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = getProperty(tile);
            console.log(getProperty(tile));
            break; 
    }
   }
   else if(whitePosition == 8) {
    switch(tile) {
        case 7:
            document.querySelector(`.tile${tile}`).style.opacity = "0%";
            document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
            document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = getProperty(tile);
            console.log(getProperty(tile));
            break;
        case 9:
            document.querySelector(`.tile${tile}`).style.opacity = "0%";
            document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
            document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = getProperty(tile);
            console.log(getProperty(tile));
            break;
        case 5:
            document.querySelector(`.tile${tile}`).style.opacity = "0%";
            document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
            document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = getProperty(tile);
            console.log(getProperty(tile));
            break;
 
    }
   }
   else if(whitePosition == 9) {
    switch(tile) {
        case 8:
            document.querySelector(`.tile${tile}`).style.opacity = "0%";
            document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
            document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = getProperty(tile);
            console.log(getProperty(tile));
            break;
        case 6:
            document.querySelector(`.tile${tile}`).style.opacity = "0%";
            document.querySelector(`.tile${whitePosition}`).style.opacity = "100%";
            document.querySelector(`.tile${whitePosition}`).style.backgroundPosition = getProperty(tile);
            console.log(getProperty(tile));
            break;
    }
   }
    console.log("WHITE POSITION: " + whitePosition);
    }

function shuffle() {
    var shuffleList = shuffleArray(backgroundList);
    var shuffleTiles = shuffleArray(tileList);
    for(i = 0; i < shuffleTiles.length; i++) {
        if (i == 8) {
            document.querySelector(shuffleTiles[i]).style.opacity = "0%";
            console.log("TEST");
        }
        else {
            document.querySelector(shuffleTiles[i]).style.opacity = "100%";
            document.querySelector(shuffleTiles[i]).style.backgroundPosition = shuffleList[i];
        }
    }
}