/* Copyright (C) 2015 Benjamin Dahl Mikkelsen */
/*Ben-key-library v 1.0 (Release Candidate)*/

/*The main global variable used for everything in the library*/
var ben = {"keyHeld" : { 8 : false, 9 : false, 13 : false, 16 : false, 17 : false, 18 : false, 19 : false, 20 : false, 27 : false, 32 : false, 33 : false, 34 : false, 35 : false, 36 : false, 37 : false, 38 : false, 39 : false, 40 : false, 45 : false, 46 : false, 48 : false, 49 : false, 50 : false, 51 : false, 52 : false, 53 : false, 54 : false, 55 : false, 56 : false, 57 : false, 65 : false, 66 : false, 67 : false, 68 : false, 69 : false, 70 : false, 71 : false, 72 : false, 73 : false, 74 : false, 75 : false, 76 : false, 77 : false, 78 : false, 79 : false, 80 : false, 81 : false, 82 : false, 83 : false, 84 : false, 85 : false, 86 : false, 87 : false, 88 : false, 89 : false, 90 : false, 91 : false, 92 : false, 93 : false, 96 : false, 97 : false, 98 : false, 99 : false, 100 : false, 101 : false, 102 : false, 103 : false, 104 : false, 105 : false, 106 : false, 107 : false, 109 : false, 110 : false, 111 : false, 112 : false, 113 : false, 114 : false, 115 : false, 116 : false, 117 : false, 118 : false, 119 : false, 120 : false, 121 : false, 122 : false, 123 : false, 144 : false, 145 : false, 186 : false, 187 : false, 188 : false, 189 : false, 190 : false, 191 : false, 192 : false, 219 : false, 220 : false, 221 : false, 222 : false}, "lastPressed" : {"key" : "No key has been pressed", "keyCode" : "No key has been pressed"}, "lastLifted" : {"key" : "No key has been lifted", "keyCode" : "No key has been lifted"}, "keysHeld" : [], "settings" : {"consoleLogEvents" : false}};

/*The benKeyCheck function checks the JS keyCode and translates it into English*/
function benKeyCheck(key) {
	switch (key) {
		case 8:
			return "backspace";
			break;
		case 9:
			return "tab";
			break;
		case 13:
			return "enter";
			break;
		case 16:
			return "shift";
			break;
		case 17:
			return "ctrl";
			break;
		case 18:
			return "alt";
			break;
		case 19:
			return "break";
			break;
		case 20:
			return "caps lock";
			break;
		case 27:
			return "escape";
			break;
		case 32:
			return "space";
			break;
		case 33:
			return "page up";
			break;
		case 34:
			return "page down";
			break;
		case 35:
			return "end";
			break;
		case 36:
			return "home";
			break;
		case 37:
			return "left arrow";
			break;
		case 38:
			return "up arrow";
			break;
		case 39:
			return "right arrow";
			break;
		case 40:
			return "down arrow";
			break;
		case 45:
			return "insert";
			break;
		case 46:
			return "delete";
			break;
		case 48:
			return "0";
			break;
		case 49:
			return "1";
			break;
		case 50:
			return "2";
			break;
		case 51:
			return "3";
			break;
		case 52:
			return "4";
			break;
		case 53:
			return "5";
			break;
		case 54:
			return "6";
			break;
		case 55:
			return "7";
			break;
		case 56:
			return "8";
			break;
		case 57:
			return "9";
			break;
		case 65:
			return "a";
			break;
		case 66:
			return "b";
			break;
		case 67:
			return "c";
			break;
		case 68:
			return "d";
			break;
		case 69:
			return "e";
			break;
		case 70:
			return "f";
			break;
		case 71:
			return "g";
			break;
		case 72:
			return "h";
			break;
		case 73:
			return "i";
			break;
		case 74:
			return "j";
			break;
		case 75:
			return "k";
			break;
		case 76:
			return "l";
			break;
		case 77:
			return "m";
			break;
		case 78:
			return "n";
			break;
		case 79:
			return "o";
			break;
		case 80:
			return "p";
			break;
		case 81:
			return "q";
			break;
		case 82:
			return "r";
			break;
		case 83:
			return "s";
			break;
		case 84:
			return "t";
			break;
		case 85:
			return "u";
			break;
		case 86:
			return "v";
			break;
		case 87:
			return "w";
			break;
		case 88:
			return "x";
			break;
		case 89:
			return "y";
			break;
		case 90:
			return "z";
			break;
		case 91:
			return "left windows key";
			break;
		case 92:
			return "right windows key";
			break;
		case 93:
			return "select key";
			break;
		case 96:
			return "numpad 0";
			break;
		case 97:
			return "numpad 1";
			break;
		case 98:
			return "numpad 2";
			break;
		case 99:
			return "numpad 3";
			break;
		case 100:
			return "numpad 4";
			break;
		case 101:
			return "numpad 5";
			break;
		case 102:
			return "numpad 6";
			break;
		case 103:
			return "numpad 7";
			break;
		case 104:
			return "numpad 8";
			break;
		case 105:
			return "numpad 9";
			break;
		case 106:
			return "multiply";
			break;
		case 107:
			return "add";
			break;
		case 109:
			return "subtract";
			break;
		case 110:
			return "decimal";
			break;
		case 111:
			return "divide";
			break;
		case 112:
			return "f1";
			break;
		case 113:
			return "f2";
			break;
		case 114:
			return "f3";
			break;
		case 115:
			return "f4";
			break;
		case 116:
			return "f5";
			break;
		case 117:
			return "f6";
			break;
		case 118:
			return "f7";
			break;
		case 119:
			return "f8";
			break;
		case 120:
			return "f9";
			break;
		case 121:
			return "f10";
			break;
		case 122:
			return "f11";
			break;
		case 123:
			return "f12";
			break;
		case 144:
			return "num lock";
			break;
		case 145:
			return "scroll lock";
			break;
		case 186:
			return "semi-colon";
			break;
		case 187:
			return "equal sign";
			break;
		case 188:
			return "comma";
			break;
		case 189:
			return "dash";
			break;
		case 190:
			return "period";
			break;
		case 191:
			return "forward slash";
			break;
		case 192:
			return "grave accent";
			break;
		case 219:
			return "open bracket";
			break;
		case 220:
			return "back slash";
			break;
		case 221:
			return "close bracket";
			break;
		case 222:
			return "single quote";
			break;
	}
}

/*The function which is run every time a button is pressed*/
window.onkeydown = function (keyPressed) {
    if (!ben.keyHeld[keyPressed.keyCode]) {
		ben.lastPressed.keyCode = keyPressed.keyCode;
		ben.lastPressed.key = benKeyCheck(ben.lastPressed.keyCode);
		ben.keyHeld[keyPressed.keyCode] = true;
        ben.keysHeld.push(ben.lastPressed.key);
		if(typeof benKeyPressed !== "undefined"){
			benKeyPressed(ben.lastPressed.key,ben.lastPressed.keyCode);
		}
		if(ben.settings.consoleLogEvents === true){
			console.log("A key was just pressed... Key: " + ben.lastPressed.key + " KeyCode: " + ben.lastPressed.keyCode);
		}
	}
}

/*The function which is run every time a button is lifted*/
window.onkeyup = function (keyLifted){
	ben.lastLifted.keyCode = keyLifted.keyCode;
	ben.lastLifted.key = benKeyCheck(ben.lastLifted.keyCode);
	ben.keyHeld[keyLifted.keyCode] = false;
    ben.keysHeld.splice(ben.keysHeld.indexOf(ben.lastLifted.key), 1);
	if(typeof benKeyLifted !== "undefined"){
		benKeyLifted(ben.lastLifted.key,ben.lastLifted.keyCode);
	}
	if(ben.settings.consoleLogEvents === true){
		console.log("A key was just lifted... Key: " + ben.lastLifted.key + " KeyCode: " + ben.lastLifted.keyCode);
	}
}

