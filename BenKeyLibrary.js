/* Copyright (C) 2015 Benjamin Dahl Mikkelsen */
/*Ben-key-library v 1.0 (Release Candidate)*/

/*The main global variable used for everything in the library*/
var ben = {"keyHeld" : { 8 : false, 9 : false, 13 : false, 16 : false, 17 : false, 18 : false, 19 : false, 20 : false, 27 : false, 32 : false, 33 : false, 34 : false, 35 : false, 36 : false, 37 : false, 38 : false, 39 : false, 40 : false, 45 : false, 46 : false, 48 : false, 49 : false, 50 : false, 51 : false, 52 : false, 53 : false, 54 : false, 55 : false, 56 : false, 57 : false, 65 : false, 66 : false, 67 : false, 68 : false, 69 : false, 70 : false, 71 : false, 72 : false, 73 : false, 74 : false, 75 : false, 76 : false, 77 : false, 78 : false, 79 : false, 80 : false, 81 : false, 82 : false, 83 : false, 84 : false, 85 : false, 86 : false, 87 : false, 88 : false, 89 : false, 90 : false, 91 : false, 92 : false, 93 : false, 96 : false, 97 : false, 98 : false, 99 : false, 100 : false, 101 : false, 102 : false, 103 : false, 104 : false, 105 : false, 106 : false, 107 : false, 109 : false, 110 : false, 111 : false, 112 : false, 113 : false, 114 : false, 115 : false, 116 : false, 117 : false, 118 : false, 119 : false, 120 : false, 121 : false, 122 : false, 123 : false, 144 : false, 145 : false, 186 : false, 187 : false, 188 : false, 189 : false, 190 : false, 191 : false, 192 : false, 219 : false, 220 : false, 221 : false, 222 : false}, "lastPressed" : {"key" : "No key has been pressed", "keyCode" : "No key has been pressed"}, "lastLifted" : {"key" : "No key has been lifted", "keyCode" : "No key has been lifted"}, "keysHeld" : [], "settings" : {"consoleLogEvents" : false}};


/*Translate array to human readeble*/
var keyNames = {8 : "backspace", 9 : "tab", 13 : "enter", 16 : "shift", 17 : "ctrl", 18 : "alt", 19 : "break", 20 : "caps lock", 27 : "escape", 32 : "space", 33 : "page up", 34 : "page down", 35 : "end", 36 : "home", 37 : "left arrow", 38 : "up arrow", 39 : "right arrow", 40 : "down arrow", 45 : "insert", 46 : "delete", 48 : "0", 49 : "1", 50 : "2", 51 : "3", 52 : "4", 53 : "5", 54 : "6", 55 : "7", 56 : "8", 57 : "9", 65 : "a", 66 : "b", 67 : "c", 68 : "d", 69 : "e", 70 : "f", 71 : "g", 72 : "h", 73 : "i", 74 : "j", 75 : "k", 76 : "l", 77 : "m", 78 : "n", 79 : "o", 80 : "p", 81 : "q", 82 : "r", 83 : "s", 84 : "t", 85 : "t", 86 : "v", 87 : "w", 88 : "x", 89 : "y", 90 : "z", 91 : "left windows key", 92 : "right windows key", 93 : "select key", 96 : "numpad 0", 97 : "numpad 1", 98 : "numpad 2", 99 : "numpad 3", 100 : "numpad 4", 101 : "numpad 5", 102 : "numpad 6", 103 : "numpad 7", 104 : "numpad 8", 105 : "numpad 9", 106 : "multiply", 107 : "add", 109 : "substract", 110 : "decimal", 112 : "f1", 113 : "f2", 114 : "f3", 115 : "f4", 116 : "f5", 117 : "f6", 118 : "f7", 119 : "f8", 120 : "f9", 121 : "f10", 122 : "f11", 113 : "f12", 144 : "num lock", 145 : "scroll lock", 186 : "semi-colon", 187 : "equal sign", 188 : "comma", 189 : "dash", 190 : "period", 191 : "forward slash", 192 : "grave accent", 219 : "open brackets", 220 : "back slash", 221 : "close bracket", 222 : "single quote"}



/*The function which is run every time a button is pressed*/
window.onkeydown = function (keyPressed) {
    if (!ben.keyHeld[keyPressed.keyCode]) {
		ben.lastPressed.keyCode = keyPressed.keyCode;
		ben.lastPressed.key = keyNames[ben.lastPressed.keyCode];
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
	ben.lastLifted.key = keyNames[ben.lastLifted.keyCode];
	ben.keyHeld[keyLifted.keyCode] = false;
    ben.keysHeld.splice(ben.keysHeld.indexOf(ben.lastLifted.key), 1);
	if(typeof benKeyLifted !== "undefined"){
		benKeyLifted(ben.lastLifted.key,ben.lastLifted.keyCode);
	}
	if(ben.settings.consoleLogEvents === true){
		console.log("A key was just lifted... Key: " + ben.lastLifted.key + " KeyCode: " + ben.lastLifted.keyCode);
	}
}

