/*
 ...191135
 ..64.....71
 ..31........57561528..36.......3145.79....91.31231518.51282771.611912
 ...414916...15.....66.77........19..153...84....75....635......31...71
 ........56..15411847. 66........86..53.14.53....96....412744...83451
 .929.....41.47........81........15..65..3218....51....72.......39...34
 ..86....15..59........28........79..29...673....62....114......35....16
 ...27335....77........7313841..5631.59....44....38....41465716.11.....984
 ..........................................................................................
 .003338070504090210021240150501001505070210061006150112030415070104070708131305150904.061.
 .Made.by.Jack.Splinter.2022.12.04.........................................................		
*/
var krok = 0;
var stepsy = new Array();

stepsy[0] = "0";
var pointedStep = 0;
var znakKroku = ",";
var focuss = 1;

var stateBoard = "";
var pola = "";
var czas = 0;
var idTimeout = 0;
var menu2aHIDDEN = false;
var menu2bHIDDEN = false;
var menu1HIDDEN = false;

var clicked = false;
var settingBoard = false;
var drawingBoard = true;
var solvingBoard = false;
var wymiar = 16;
var sampleSize = 5;
var unlocked = false;
var unlocked1 = false;
var unlocked2 = false;
var unlocked3 = false;
var startv = 0;
var endv = 0;
var endH = 0;
var startH = 0;
var whereI = 0;
var whereJ = 0;
var showSettings = false;
var themeNUMBER = 1;
var colorBACKGROUND = theme[1][0];
var colorBOARD = theme[1][1];
var colorBOARDBORDER = theme[1][2];
var colorCIRCLE = theme[1][3];
var colorDIG = theme[1][4];
var colorING = theme[1][5];
var colorINGDIGIT = theme[1][6];
var colorCHECK = theme[1][7];
var colorCHECKDIGIT = theme[1][8];
var colorCHECKTICKED = theme[1][9];
var colorCHECKTICKEDDIGIT = theme[1][10];
var colorBRIDGE = theme[1][11];
var colorBRIDGECHECKED = theme[1][12];
var colorINGE = theme[1][13];

var gameNumber = 0;
var isAllTicked=false;

function onLoud() {
  loadStyles();
  hideClassLoad();
  loadTheme();
  changeBackgroundColor();
  sampleSize = solution16;
  drawBoard();
  document.getElementById("ThemeNumber").value = 1;
  document.getElementById("setB").style.display = "inline";
  document.getElementById("drawB").style.display = "inline";
  document.getElementById("playB").style.display = "inline";
  document.getElementById("drawB").style.background = "green";
  document.getElementById("GameNumber").value = 1;
  document.getElementById('bridgeLength').value=2;

  //solve(1);
  stepsy[0] = getAllOnBoard();
  step0();
}


function printBoard(){
  beforeTN=parseInt(document.getElementById("ThemeNumber").value);
  document.getElementById("ThemeNumber").value=2;
  themeNUMBER = 2;
  loadTheme();
  window.print();

  document.getElementById("ThemeNumber").value=beforeTN;
  themeNUMBER = beforeTN;
  loadTheme();
}

function saveBoard(){
    content=getAllOnBoard();
    a=document.getElementById('aSave')
    a.href = window.URL.createObjectURL(new Blob([content], {type: "text/plain"}));
    a.download = "solution"+wymiar+"_"+(new Date()).getTime()+".txt";
    
}

function hideClassLoad() {
  hideClass = document.createElement("style");
  hideClass.setAttribute("id", "hideClass");
  hideClass.innerHTML =
    ".hideMenu{border: 1px dashed gray; width: 40px; background-color: " +
    colorBACKGROUND +
    "; color: gray; padding: 5px; margin: 5px;}   .hideMenu:hover{border: 1px gray; border-style: dashed; background-color: " +
    colorBACKGROUND +
    "; color: gray;}";
  document.getElementsByTagName("head")[0].appendChild(hideClass);
}

function hideClassChange() {
  document.getElementsByTagName("head")[0].removeChild(hideClass);
  hideClass = document.createElement("style");
  hideClass.setAttribute("id", "hideClass");
  hideClass.innerHTML =
    ".hideMenu{border: 1px dashed gray; width: 40px; background-color: " +
    colorBACKGROUND +
    "; color: gray; padding: 5px; margin: 5px;}   .hideMenu:hover{border: 1px gray; border-style: dashed; background-color: " +
    colorBACKGROUND +
    "; color: gray;}";
  document.getElementsByTagName("head")[0].appendChild(hideClass);
}

function hideMenu1() {
  if (!menu1HIDDEN) {
    document.getElementById("menu2hide1").style.display = "none";
    menu1HIDDEN = true;
    document.getElementById('hide1').innerHTML='+';
  } else {
    document.getElementById("menu2hide1").style.display = "inline";
    menu1HIDDEN = false;
    document.getElementById('hide1').innerHTML='-';
  }
}
function hideMenu2a() {
  if (!menu2aHIDDEN) {
    document.getElementById("menu2hide2a").style.display = "none";
    menu2aHIDDEN = true;
    document.getElementById('hide2a').innerHTML='++';
  } else {
    document.getElementById("menu2hide2a").style.display = "inline";
    menu2aHIDDEN = false;
    
    document.getElementById('hide2a').innerHTML='--';
  }
}

function hideMenu2b() {
  if (!menu2bHIDDEN) {
    document.getElementById("menu2hide2b").style.display = "none";
    menu2bHIDDEN = true;
    document.getElementById('hide2b').innerHTML='+++';
  } else {
    document.getElementById("menu2hide2b").style.display = "inline";
    menu2bHIDDEN = false;
    document.getElementById('hide2b').innerHTML='---';
  }
}

function changeBackgroundColor() {
  colorBACKGROUND = document.getElementById("colorBackground").value;
  colorBackground();
  hideClassChange();
}
function changeBoardColor() {
  colorBOARD = document.getElementById("colorBoard").value;
  colorBoard();
}
function changeBoardBorderColor() {
  colorBOARDBORDER = document.getElementById("colorBoardBorder").value;
  colorBoard();
}
function changeCircleColor() {
  colorCIRCLE = document.getElementById("colorCircle").value;
  colorCircle();
  changeTickedColor();
  changeTickedWrongColor();
}

function changeDigitColor() {
  colorDIG = document.getElementById("colorDigit").value;
  colorCircle();
}
function changeTickedColor() {
  colorING = document.getElementById("colorTicked").value;
  colorTicked();
}

function changeTickedWrongColor() {
  colorINGE = document.getElementById("colorTickedWrong").value;
  colorTickedWrong();
}

function changeTickedDigitColor() {
  colorINGE = document.getElementById("colorTickedDigit").value;
  colorTicked();
  colorTickedWrong();
}
function changeCheckedColor() {
  colorCHECK = document.getElementById("colorChecked").value;
  colorChecked();
}
function changeCheckedDigitColor() {
  colorCHECKDIGIT = document.getElementById("colorCheckedDigit").value;
  colorChecked();
}
function changeCheckedTickedColor() {
  colorCHECKTICKED = document.getElementById("colorCheckedTicked").value;
  colorCheckedTicked();
}
function changeCheckedTickedDigitColor() {
  colorCHECKTICKEDDIGIT = document.getElementById(
    "colorCheckedTickedDigit"
  ).value;
  colorCheckedTicked();
}
function changeBridgeColor() {
  colorBRIDGE = document.getElementById("colorBridge").value;
  colorBridge();
}
function changeBridgeCheckedColor() {
  colorBRIDGECHECKED = document.getElementById("colorBridgeChecked").value;
  colorBridgeChecked();
}
function getTheme() {
  actualTheme = "";
  actualTheme +=
    colorBACKGROUND +
    "," +
    colorBOARD +
    "," +
    colorBOARDBORDER +
    "," +
    colorCIRCLE +
    "," +
    colorDIG +
    "," +
    colorING +
    "," +
    colorINGDIGIT +
    "," +
    colorCHECK +
    "," +
    colorCHECKDIGIT +
    "," +
    colorCHECKTICKED +
    "," +
    colorCHECKTICKEDDIGIT +
    "," +
    colorBRIDGE +
    "," +
    colorBRIDGECHECKED+
    "," +
    colorINGE;

  prompt("Actual theme", actualTheme);
}

function setTheme() {
  themeStr = prompt("Set theme");

  if (/^[#,a-zA-Z0-9]+$/.test(themeStr)) {
    themeArray = themeStr.split(",");

    colorBACKGROUND = themeArray[0];
    colorBOARD = themeArray[1];
    colorBOARDBORDER = themeArray[2];
    colorCIRCLE = themeArray[3];
    colorDIG = themeArray[4];
    colorING = themeArray[5];
    colorINGE = themeArray[13];
    colorINGDIGIT = themeArray[6];
    colorCHECK = themeArray[7];
    colorCHECKDIGIT = themeArray[8];
    colorCHECKTICKED = themeArray[9];
    colorCHECKTICKEDDIGIT = themeArray[10];
    colorBRIDGE = themeArray[11];
    colorBRIDGECHECKED = themeArray[12];
    colorBackground();
    changeBackgroundColor();
    colorBoard();
    colorCircle();
    colorTicked();
    colorTickedWrong();
    colorChecked();
    colorCheckedTicked();
    colorBridge();
    colorBridgeChecked();

    document.getElementById("colorBackground").value = colorBACKGROUND;
    document.getElementById("colorBoard").value = colorBOARD;
    document.getElementById("colorBoardBorder").value = colorBOARDBORDER;
    document.getElementById("colorCircle").value = colorCIRCLE;
    document.getElementById("colorDigit").value = colorDIG;
    document.getElementById("colorTicked").value = colorING;
    document.getElementById("colorTickedWrong").value = colorINGE;
    document.getElementById("colorTickedDigit").value = colorINGDIGIT;
    document.getElementById("colorChecked").value = colorCHECK;
    document.getElementById("colorCheckedDigit").value = colorCHECKDIGIT;
    document.getElementById("colorCheckedTicked").value = colorCHECKTICKED;
    document.getElementById("colorCheckedTickedDigit").value =
      colorCHECKTICKEDDIGIT;
    document.getElementById("colorBridge").value = colorBRIDGE;
    document.getElementById("colorBridgeChecked").value = colorBRIDGECHECKED;
  }
  hideClassChange();
}

function themeDetails() {
  document.getElementById("themeSettings").style.display = "none";

  if (showSettings == false) {
    document.getElementById("themeSettings").style.display = "inline";
    showSettings = true;
  } else {
    document.getElementById("themeSettings").style.display = "none";
    showSettings = false;
  }
}

function changedThemeNumber() {
  number = parseInt(document.getElementById("ThemeNumber").value);
  max = theme.length - 1;

  if (number > max) {
    document.getElementById("ThemeNumber").value = max;
  }
}

function minusTheme() {
  number = parseInt(document.getElementById("ThemeNumber").value);
  if (number > 1) {
    document.getElementById("ThemeNumber").value = number - 1;
  }
}
function plusTheme() {
  number = parseInt(document.getElementById("ThemeNumber").value);
  if (number < theme.length - 1) {
    document.getElementById("ThemeNumber").value = number + 1;
  }
}
function loadTheme() {
  number = parseInt(document.getElementById("ThemeNumber").value);
  if (number > 0 && number < sampleSize.length) {
    themeNUMBER = number;
  }

  colorBACKGROUND = theme[themeNUMBER][0];
  colorBOARD = theme[themeNUMBER][1];
  colorBOARDBORDER = theme[themeNUMBER][2];
  colorCIRCLE = theme[themeNUMBER][3];
  colorDIG = theme[themeNUMBER][4];
  colorING = theme[themeNUMBER][5];
  colorINGE = theme[themeNUMBER][13];
  colorINGDIGIT = theme[themeNUMBER][6];
  colorCHECK = theme[themeNUMBER][7];
  colorCHECKDIGIT = theme[themeNUMBER][8];
  colorCHECKTICKED = theme[themeNUMBER][9];
  colorCHECKTICKEDDIGIT = theme[themeNUMBER][10];
  colorBRIDGE = theme[themeNUMBER][11];
  colorBRIDGECHECKED = theme[themeNUMBER][12];
  colorBackground();
  colorBoard();
  colorCircle();
  colorTicked();
  colorTickedWrong();
  colorChecked();
  colorCheckedTicked();
  colorBridge();
  colorBridgeChecked();

  document.getElementById("colorBackground").value = colorBACKGROUND;
  document.getElementById("colorBoard").value = colorBOARD;
  document.getElementById("colorBoardBorder").value = colorBOARDBORDER;
  document.getElementById("colorCircle").value = colorCIRCLE;
  document.getElementById("colorDigit").value = colorDIG;
  document.getElementById("colorTicked").value = colorING;
  document.getElementById("colorTickedWrong").value = colorINGE;
  document.getElementById("colorTickedDigit").value = colorINGDIGIT;
  document.getElementById("colorChecked").value = colorCHECK;
  document.getElementById("colorCheckedDigit").value = colorCHECKDIGIT;
  document.getElementById("colorCheckedTicked").value = colorCHECKTICKED;
  document.getElementById("colorCheckedTickedDigit").value =
    colorCHECKTICKEDDIGIT;
  document.getElementById("colorBridge").value = colorBRIDGE;
  document.getElementById("colorBridgeChecked").value = colorBRIDGECHECKED;

  hideClassChange();
}

function changedGameNumber() {
  number = parseInt(document.getElementById("GameNumber").value);
  max = sampleSize.length - 1;

  if (number > max) {
    document.getElementById("GameNumber").value = max;
  }
}

function minusGame() {
  number = parseInt(document.getElementById("GameNumber").value);
  if (number > 1) {
    document.getElementById("GameNumber").value = number - 1;
  }
}
function plusGame() {
  number = parseInt(document.getElementById("GameNumber").value);
  if (number < sampleSize.length - 1) {
    document.getElementById("GameNumber").value = number + 1;
  }
}

function playGame() {
  number = parseInt(document.getElementById("GameNumber").value);
  if (number > 0 && number < sampleSize.length) {
    sample(number);
    gameNumber = number;
  }
  orangeBoard0 = false;
}

function solveGame() {
  number = parseInt(document.getElementById("GameNumber").value);
  if (number > 0 && number < sampleSize.length) {
    solve(number);
    gameNumber = number;
  }
  orangeBoard0 = false;
}

function fillDigits() {
  if (settingBoard) {
    clearGreens();
    board = getAllOnBoard();
    var arra = [];
    for (i = 0; i < wymiar * wymiar; i++) {
      arra.push(0);
    }

    for (i = 0; i < wymiar * wymiar; i++) {
      right = 0;
      left = 0;
      down = 0;
      up = 0;
      field = board[i];
      if (i % wymiar != wymiar - 1) right = board[i + 1];
      if (i < wymiar * (wymiar - 1)) down = board[i + wymiar];
      if (i % wymiar > 0) left = board[i - 1];
      if (i > wymiar) up = board[i - wymiar];

      if (i != wymiar * (i + 1) - 1 && i < wymiar * wymiar - 1) {
        if (/[1-9]/.test(field)) {
          if (right == "t") {
            arra[i] += 1;
          } else if (right == "f") {
            arra[i] += 2;
          }
        }
      }
      if (i < wymiar * (wymiar - 1)) {
        if (/[1-9]/.test(field)) {
          if (down == "i") {
            arra[i] += 1;
          } else if (down == "h") {
            arra[i] += 2;
          }
        }
      }

      if (i > wymiar) {
        if (/[1-9]/.test(field)) {
          if (up == "i") {
            arra[i] += 1;
          } else if (up == "h") {
            arra[i] += 2;
          }
        }
      }

      if (i != wymiar * i) {
        if (/[1-9]/.test(field)) {
          if (left == "t") {
            arra[i] += 1;
          } else if (left == "f") {
            arra[i] += 2;
          }
        }
      }

      if (
        /[1-9]/.test(field) &&
        /^[Ehi0]*$/.test(left) && // if '' or 'E' or 'h' or 'i' then tick it !
        /^[Ehi0]*$/.test(right) &&
        /^[Etf0]*$/.test(up) &&
        /^[Etf0]*$/.test(down)
      ) {
        arra[i] = "S";
      }
    }

    board2 = "";
    for (i = 0; i < wymiar * wymiar; i++) {
      if (arra[i] > 0 || arra[i] == "S") {
        board2 += arra[i];
      } else {
        board2 += board[i];
      }
    }
    setAllOnBoard(board2);
  }
}

function clearDigits() {
  checkIfNotMoreBridgesThanShouldBe();
  checkIfNotLessBridgesThanShouldBe();

  if (settingBoard) {
    clearGreens();

    board = getAllOnBoard();
    for (i = 1; i < 9; i++) {
      board = board.replaceAll(i, 9);
    }
    setAllOnBoard(board);
  }
}

function colorCircleId(color, idC) {
  ingsss = Array.from(document.getElementsByClassName("in"));
  ingsss.forEach((innn) => {
    if (innn.id == "m" + (idC + 1)) {
      nevv = "inc";
      innn.className = nevv;
    }
  });
}


function colorBridgeId(color, idB) {
  for (ii = 1; ii <= 4; ii++) {
    ingss = Array.from(document.getElementsByClassName("m" + ii));
    ingss.forEach((inn) => {
      if (inn) {
        if (inn.id == "m" + (idB + 1)) {
          inn.className = "mc" + ii;
        }
      }
    });
  }
}

function colorDigitIdUncheck(colorFrom, idD) {
  ings = Array.from(document.getElementsByClassName("ingc"));
  ings.forEach((ing) => {
    if (ing.id == "in" + (idD + 1)) {
      nevv = "ing";
      ing.className = nevv;
    }
  });
  ings = Array.from(document.getElementsByClassName("inc"));
  ings.forEach((inn) => {
    if (inn.id == "in" + (idD + 1)) {
      nevv = "in";
      inn.className = nevv;
    }
  });
}

function colorDigitId(color, idD) {
  ings = Array.from(document.getElementsByClassName("ing"));
  ings.forEach((ing) => {
    if (ing.id == "in" + (idD + 1)) {
      nevv = "ingc";
      ing.className = nevv;
    }
  });
  ings = Array.from(document.getElementsByClassName("in"));
  ings.forEach((inn) => {
    if (inn.id == "in" + (idD + 1)) {
      nevv = "inc";
      inn.className = nevv;
    }
  });
}

function colorBridgeIdChange(colorFrom, colorTo, idB) {
  for (ii = 1; ii <= 4; ii++) {
    ingss = Array.from(document.getElementsByClassName("mc" + ii));
    ingss.forEach((inn) => {
      if (inn) {
        if (inn.id == "m" + (idB + 1)) {
          inn.className = "m" + ii;
        }
      }
    });
  }
}

function colorBackground() {
  // 0 = background
  document.body.style.backgroundColor = colorBACKGROUND;
}

function colorBoard() {
  document.getElementById("mostq").style.backgroundColor = colorBOARD;
  document.getElementById("mostq").style.border =
    colorBOARDBORDER + " solid 2px";
}

function colorBody(color) {
  picked = document.getElementById("colorpicker").value;
  document.body.style.backgroundColor = color;
}
function colorIsland(color) {
  ings = Array.from(document.getElementsByClassName("ing"));
  ings.forEach((ing) => {
    ing.className = "ing";
    colorING = color;
  });
}

function colorDigits(color) {
  ings = Array.from(document.getElementsByClassName("ing"));
  ings.forEach((ing) => {
    nevv = "ing";
    ing.className = nevv;
  });
  ings = Array.from(document.getElementsByClassName("in"));
  ings.forEach((inn) => {
    nevv = "in";
    inn.className = nevv;
  });
  colorDIG = color;
}

function lock() {
  unlocked = false;
  unlocked1 = false;
  unlocked2 = false;
  unlocked3 = false;
  document.getElementById("unlockSize1").innerHTML = "Lock 1";
  document.getElementById("unlockSize2").innerHTML = "Lock 2";
  document.getElementById("unlockSize3").innerHTML = "Lock 3";
  document.getElementById("unlockSize1").style.background = "";
  document.getElementById("unlockSize2").style.background = "";
  document.getElementById("unlockSize3").style.background = "";
}

function unlockSize(nr) {
  unlocked = false;
  if (nr == 1) {
    if (unlocked1) {
      unlocked1 = false;
      document.getElementById("unlockSize1").innerHTML = "Lock 1";
      document.getElementById("unlockSize1").style.background = "";
    } else {
      unlocked1 = true;
      document.getElementById("unlockSize1").innerHTML = "Ready";
      document.getElementById("unlockSize1").style.background = "green";
    }
  }
  if (nr == 2) {
    if (unlocked2) {
      unlocked2 = false;
      document.getElementById("unlockSize2").innerHTML = "Lock 2";
      document.getElementById("unlockSize2").style.background = "";
    } else {
      unlocked2 = true;
      document.getElementById("unlockSize2").innerHTML = "Ready";
      document.getElementById("unlockSize2").style.background = "green";
    }
  }
  if (nr == 3) {
    if (unlocked3) {
      unlocked3 = false;
      document.getElementById("unlockSize3").innerHTML = "Lock 3";
      document.getElementById("unlockSize3").style.background = "";
    } else {
      unlocked3 = true;
      document.getElementById("unlockSize3").innerHTML = "Ready";
      document.getElementById("unlockSize3").style.background = "green";
    }
  }
  if (unlocked1 && unlocked2 && unlocked3) {
    unlocked = true;
  }
}

function changeSize(size) {
  if (unlocked) {
    document.getElementById("bridgeLength").value=2;  
    changedBridgeLength();
  
    krok = 0;
    wymiar = size;
    document.getElementById("GameNumber").value = 1;
    document.getElementById("wymiar").innerHTML = size;
    switch (size) {
      case 16:
        sampleSize = solution16;
        document.getElementById("size16").style.backgroundColor = "green";
        document.getElementById("size25").style.backgroundColor = "black";
        document.getElementById("size36").style.backgroundColor = "black";

        document.getElementById("CONTENT").style.width = "473px";
        document.getElementById("CONTENT").style.height = "473px";
        document.getElementById("mostq").style.width = "453px";
        document.getElementById("mostq").style.height = "453px";

        drawBoard(size);
        rows = Array.from(document.getElementsByClassName("row"));
        rows.forEach((row) => {
          row.style.width = "453px";
        });
        break;
      case 25:
        sampleSize = solution25;
        document.getElementById("size16").style.background = "black";
        document.getElementById("size25").style.background = "green";
        document.getElementById("size36").style.background = "black";

        document.getElementById("CONTENT").style.width = "725px";
        document.getElementById("CONTENT").style.height = "725px";
        document.getElementById("mostq").style.width = "705px";
        document.getElementById("mostq").style.height = "705px";

        drawBoard(size);
        rows = Array.from(document.getElementsByClassName("row"));
        rows.forEach((row) => {
          row.style.width = "705px";
        });
        break;
      case 36:
        sampleSize = solution36;
        document.getElementById("size16").style.background = "black";
        document.getElementById("size25").style.background = "black";
        document.getElementById("size36").style.background = "green";

        document.getElementById("CONTENT").style.width = "1035px";
        document.getElementById("CONTENT").style.height = "1035px";
        document.getElementById("mostq").style.width = "1015px";
        document.getElementById("mostq").style.height = "1015px";

        drawBoard(size);
        rows = Array.from(document.getElementsByClassName("row"));
        rows.forEach((row) => {
          row.style.width = "1015px";
        });
        break;

      default:
        break;
    }


    
    lock();
    stepsy = [];
    krok = 0;
    stepsy[0] = getAllOnBoard();
    step0();
    navigate();

    document.getElementById("innav").value = 0;
  }
}

function drawBoard() {
  var str = '<form name="forma" action="">';

  for (i = 1; i <= wymiar; i++) {
    //rows
    str += '<div class="row">';
    for (j = 1; j <= wymiar; j++) {
      //columns
      id = (i - 1) * wymiar + j;
      if ((i % 2 == 1 && j % 2 == 1) || (i % 2 == 0 && j % 2 == 0)) {
        str +=
          '<div class="p" id="p' +
          id +
          '">' +
          "<input " +
          'onclick="inone(' +
          id +
          ')" ' +
          'onchange="change(' +
          id +
          ')" ' +
          'onfocus="focused(' +
          id +
          ')" ' +
          'class="in' +
          '" ' +
          'name="in' +
          id +
          '" ' +
          'id="in' +
          id +
          '" ' +
          'type="text" ' +
          'maxlength="1"' +
          "></div>";
      } else {
        str +=
          '<div class="p" id="p' +
          id +
          '">' +
          "<input " +
          'onclick="ones(' +
          id +
          ')" ' +
          'onchange="change(' +
          id +
          ')" ' +
          'onfocus="focused(' +
          id +
          ')" ' +
          'class="m0" ' +
          'name="in' +
          id +
          '" ' +
          'id="in' +
          id +
          '" ' +
          'type="text" ' +
          'maxlength="1"' +
          "></div>";
      }
    }
    str += "</div>"; //end of row
  }
  str += "</form>";

  document.getElementById("mostq").innerHTML = str;
}

function setB() {
  changeInl2m0();

  document.getElementById("drawB").style.background = "black";
  document.getElementById("setB").style.background = "green";
  document.getElementById("playB").style.background = "black";

  settingBoard = true;
  drawingBoard = false;
  solvingBoard = false;
}

function playB() {
  changeInl2m0();
  document.getElementById("drawB").style.background = "black";
  document.getElementById("setB").style.background = "black";
  document.getElementById("playB").style.background = "green";

  settingBoard = false;
  drawingBoard = false;
  solvingBoard = true;
}

function drawB() {
  settingBoard = false;
  drawingBoard = true;
  solvingBoard = false;

  document.getElementById("drawB").style.background = "green";
  document.getElementById("setB").style.background = "black";
  document.getElementById("playB").style.background = "black";
}

function changeInl2m0() {
  patt0 = new RegExp("inl");

  for (var i = 1; i <= wymiar * wymiar; i++) {
    p = document.getElementById("p" + i); // p1 p2 .. p100
    if (patt0.test(p.innerHTML)) {
      p.innerHTML =
        '<input class="m0" id="m' +
        i +
        '" ' +
        'oninput="cli(' +
        i +
        ')" onmousedown="ones(\'' +
        i +
        "')\" " +
        "></div>";
    }
  }
}

function inone(id) {
  step0();
  if (drawingBoard == true) {
    p = document.getElementById("p" + id); // m1 m2 m3 m50 ...

    val = document.forms["forma"].elements["in" + id].value;

    p.innerHTML =
      "<input " +
      'onclick="ones(' +
      id +
      ')" ' +
      'onchange="change(' +
      id +
      ')" ' +
      'onfocus="focused(' +
      id +
      ')" ' +
      'class="m0" ' +
      'name="in' +
      id +
      '" ' +
      'id="in' +
      id +
      '" ' +
      'type="text" ' +
      'maxlength="1"' +
      'value="">';
  }

  if (solvingBoard == true) {
    p = document.getElementById("p" + id); // m1 m2 m3 m50 ...

    val = document.forms["forma"].elements["in" + id].value;

    p.innerHTML =
      "<input " +
      'onclick="intwo(' +
      id +
      ')" ' +
      'onchange="change(' +
      id +
      ')" ' +
      'onfocus="focused(' +
      id +
      ')" ' +
      'class="ing' +
      '" ' +
      'name="in' +
      id +
      '" ' +
      'id="in' +
      id +
      '" ' +
      'type="text" ' +
      'maxlength="1"' +
      'value="' +
      val +
      '">';
  }
  step();
}

function intwo(id) {
  step0();

  if (drawingBoard == true || solvingBoard == true) {
    p = document.getElementById("p" + id); // m1 m2 m3 m50 ...

    val = document.forms["forma"].elements["in" + id].value;

    p.innerHTML =
      "<input " +
      'onclick="inone(' +
      id +
      ')" ' +
      'onchange="change(' +
      id +
      ')" ' +
      'onfocus="focused(' +
      id +
      ')" ' +
      'class="in' +
      '" ' +
      'name="in' +
      id +
      '" ' +
      'id="in' +
      id +
      '" ' +
      'type="text" ' +
      'maxlength="1"' +
      'value="' +
      val +
      '">';
  }
  step();
}

function ones(id) {
  if (solvingBoard == true) {
    setStartEndV(id);
    if (startv == 0 || endv == 0) {
      // endh
      three(id);
      return 0;
    }

    if (whereI == wymiar || whereI == 1) {
      three(id);
      return 0;
    }
    stretchV(id, "i", 5);
  }
  step0();

  p = document.getElementById("p" + id); // m1 m2 m3 m50 ...

  if (drawingBoard == true) {
    p.innerHTML =
      "<input " +
      'onclick="inone(' +
      id +
      ')" ' +
      'onchange="change(' +
      id +
      ')" ' +
      'onfocus="focused(' +
      id +
      ')" ' +
      'class="in' +
      '" ' +
      'name="in' +
      id +
      '" ' +
      'id="in' +
      id +
      '" ' +
      'type="text" ' +
      'maxlength="1"' +
      'value="">';
  } else if (solvingBoard == true) {
    p.innerHTML =
      '<input class="m1' +
      '" id="m' +
      id +
      '" ' +
      "onmousedown=\"two('" +
      id +
      "')\" " +
      "></div>";
  }
  step();
  //stretchH(id,'t',4);
}

function two(id) {
  if (solvingBoard == true) {
    stretchV(id, "h", 5);
  }
  step0();

  p = document.getElementById("p" + id); // m1 m2 m3 m50 ...

  if (drawingBoard == true) {
    p.innerHTML =
      "<input " +
      'onclick="inone(' +
      id +
      ')" ' +
      'onchange="change(' +
      id +
      ')" ' +
      'onfocus="focused(' +
      id +
      ')" ' +
      'class="in' +
      '" ' +
      'name="in' +
      id +
      '" ' +
      'id="in' +
      id +
      '" ' +
      'type="text" ' +
      'maxlength="1"' +
      'value="">';
  } else if (solvingBoard == true) {
    p.innerHTML =
      '<input class="m2' +
      '" id="m' +
      id +
      '" ' +
      "onmousedown=\"three('" +
      id +
      "')\" " +
      "></div>";
  }
  step();
}

function three(id) {
  if (solvingBoard == true) {
    setStartEndH(id);
    stretchV(id, "E", 5);

    if (startH == 0 || endH == 0) {
      // endh
      five(id);
      return 0;
    }

    if ((whereJ == wymiar || whereJ == 1) && whereI != 1 && whereI != wymiar) {
      five(id);
      return 0;
    }
    stretchH(id, "t", 4);
  }
  step0();

  p = document.getElementById("p" + id); // m1 m2 m3 m50 ...

  if (drawingBoard == true) {
    p.innerHTML =
      "<input " +
      'onclick="inone(' +
      id +
      ')" ' +
      'onchange="change(' +
      id +
      ')" ' +
      'onfocus="focused(' +
      id +
      ')" ' +
      'class="in' +
      '" ' +
      'name="in' +
      id +
      '" ' +
      'id="in' +
      id +
      '" ' +
      'type="text" ' +
      'maxlength="1"' +
      'value="">';
  } else if (solvingBoard == true) {
    p.innerHTML =
      '<input class="m3' +
      '" id="m' +
      id +
      '" ' +
      "onmousedown=\"four('" +
      id +
      "')\" " +
      "></div>";
  }
  step();
}

function four(id) {
  if (solvingBoard == true) {
    stretchH(id, "f", 4);
  }
  step0();

  p = document.getElementById("p" + id); // m1 m2 m3 m50 ...

  if (drawingBoard == true) {
    p.innerHTML =
      "<input " +
      'onclick="inone(' +
      id +
      ')" ' +
      'onchange="change(' +
      id +
      ')" ' +
      'onfocus="focused(' +
      id +
      ')" ' +
      'class="in' +
      '" ' +
      'name="in' +
      id +
      '" ' +
      'id="in' +
      id +
      '" ' +
      'type="text" ' +
      'maxlength="1"' +
      'value="">';
  } else if (solvingBoard == true) {
    p.innerHTML =
      '<input class="m4' +
      '" id="m' +
      id +
      '" ' +
      "onmousedown=\"five('" +
      id +
      "')\" " +
      "></div>";
  }
  step();
}

function five(id) {
  if (solvingBoard == true) {
    stretchH(id, "E", 4);
  }

  step0();
  p = document.getElementById("p" + id); // m1 m2 m3 m50 ...

  if (drawingBoard == true) {
    p.innerHTML =
      "<input " +
      'onclick="inone(' +
      id +
      ')" ' +
      'onchange="change(' +
      id +
      ')" ' +
      'onfocus="focused(' +
      id +
      ')" ' +
      'class="in' +
      '" ' +
      'name="in' +
      id +
      '" ' +
      'id="in' +
      id +
      '" ' +
      'type="text" ' +
      'maxlength="1"' +
      'value="">';
  } else if (solvingBoard == true) {
    p.innerHTML =
      '<input class="m0" id="m' +
      id +
      '" ' +
      'oninput="cli(' +
      id +
      ')" onmousedown="ones(\'' +
      id +
      "')\" " +
      "></div>";
  }

  step();
}

function change(inId) {
  el = document.forms["forma"].elements["in" + inId];
  val = el.value;

  p = document.getElementById("p" + inId); // in1 in2
  patt0 = new RegExp("inl");
  if (patt0.test(p.innerHTML)) el.value = "";

  if (
    val != "1" &&
    val != "2" &&
    val != "3" &&
    val != "4" &&
    val != "5" &&
    val != "6" &&
    val != "7" &&
    val != "8"
  ) {
    el.value = "";
  }

  if (solvingBoard == true) {
    el.value = "X";
  }
}

// clear Input field outside a circle (island)
function cli(id) {
  document.forms["forma"].elements["m" + id].value = "";
}

function changeNav() {
  el = document.getElementById("innav");
  val = el.value;

  val = parseInt(val);
  if (val >= 0 && val <= krok) {
    el.value = val;
    goBackTo(val);
  } else {
    el.value = krok;
  }
}

function focused(inId) {
  // 1 2 3 ... 100
  focuss = inId;
}

document.onkeydown = checkKeycode;

function checkKeycode(e) {
  iledol = wymiar;
  ilegora = wymiar;
  ileprawo = 1;
  ilelewo = 1;

  if (focuss >= wymiar * wymiar) {
    ileprawo = 0;
  }

  if (focuss > wymiar * wymiar - wymiar) {
    iledol = 0;
  }

  if (focuss <= wymiar) {
    ilegora = 0;
  }

  if (focuss <= 1) {
    ilelewo = 0;
  }

  var keycode;
  if (window.event) keycode = window.event.keyCode;
  else if (e) keycode = e.which;
  if (keycode == 39) {
    focuss += ileprawo;
    if (document.getElementById("in" + focuss))
      document.getElementById("in" + focuss).focus();
  }
  if (keycode == 37) {
    focuss -= ilelewo;
    if (document.getElementById("in" + focuss))
      document.getElementById("in" + focuss).focus();
  }
  if (keycode == 38) {
    focuss -= ilegora;
    if (document.getElementById("in" + focuss))
      document.getElementById("in" + focuss).focus();
  }
  if (keycode == 40) {
    focuss += iledol;
    if (document.getElementById("in" + focuss))
      document.getElementById("in" + focuss).focus();
  }
}

//up - 38
//down - 40
//left - 37
//right - 39

function step0() {
  if (solvingBoard == true) {
    if (krok == 0) {
      //stepsy[0]=getBoard();
      stepsy[0] = getAllOnBoard();
    }
  }
  lock();
}

function step() {
  orangeBoard0 = false;
  //if (solvingBoard == true) {
    lock();
    krok++;

    stepsy[krok] = getAllOnBoard();
    pointedStep = krok;
    navigate();
 // }
  getAllOnBoard(); 
  checkIfNotMoreBridgesThanShouldBe();
  checkIfNotLessBridgesThanShouldBe();
}

function goBackTo(step) {
  if (step >= 0 && step <= krok) {
    setAllOnBoard(stepsy[step]);
    pointedStep = parseInt(step);
  }
  navigate();
}

function navigate() {
  var navLeft = document.getElementById("navLeft");
  var nav0 = document.getElementById("nav0");
  var navA = document.getElementById("navA");
  var navZ = document.getElementById("navZ");
  var navRight = document.getElementById("navRight");

  navLeft.innerHTML =
    '<span  id="navL" onmousedown="goBackTo(\'' +
    (pointedStep - 1) +
    "')\">&lt;</span>";

  navA.innerHTML =
    '<input type="text" id="innav" name="inputNav"' +
    'onchange="changeNav()" value="' +
    pointedStep +
    '" maxlength="5">';
  navZ.innerHTML =
    "<span onclick=\"goBackTo('" + krok + "')\">" + krok + "</span>";

  navRight.innerHTML =
    '<span  id="navR" onmousedown="goBackTo(\'' +
    (pointedStep + 1) +
    "')\">&gt;</span>";

  //document.getElementById('innav').focus();
}

function klik(sid) {
  document.getElementById("sid" + sid).style.color = "red";
  goBackTo(sid);
  clicked = true;
}

function thick(sid) {
  document.getElementById("sid" + sid).style.color = "red";
  goBackTo(sid);
  clicked = false;
}

function thin(sid) {
  document.getElementById("sid" + sid).style.color = "silver";
  if (!clicked) goBackTo(krok);
}

function clearBridges() {
  uncheckLink();
  if (drawingBoard) {
    step0();
    step();
    inputy = getInputs();

    var digit = "";
    var nr = 0;

    for (var x = 0; x < wymiar * wymiar; x++) {
      //od 1 2 do ... 100
      digit = inputy.substring(x, x + 1);
      nr = x + 1;
      id = nr;
      p = document.getElementById("p" + id); // m1 m2 m3 m50 ... in1 in2

      if (digit == "E") {
        p.innerHTML =
          '<input class="m0" id="m' +
          id +
          '" ' +
          'oninput="cli(' +
          id +
          ')" onmousedown="ones(\'' +
          id +
          "')\" " +
          ">";
      }
    }

  //  step();
  }
  //step0();

  step();
}

function clearGrays() {
  var board = getBoard();
  for (var i = 0; i < wymiar * wymiar; i++) {
    board = board.replace("2", "0");
  }
  setBoard(board);
}

function clearBoard() {
  if (drawingBoard) {
    var dwa = "";
    for (var i = 0; i < wymiar * wymiar; i++) {
      dwa += "E";
    }

    setInputs(dwa);
    drawB();
  }
}

function sample(id) {
  playB();
  if (wymiar == 16) {
    what = solution16[id];
  } else if (wymiar == 25) {
    what = solution25[id];
  } else if (wymiar == 36) {
    what = solution36[id];
  }

  what = what.replaceAll("t", "E");
  what = what.replaceAll("f", "E");
  what = what.replaceAll("h", "E");
  what = what.replaceAll("i", "E");

  setInputs(what);
  step();
}

function solve(id) {
  playB();
  if (wymiar == 16) {
    what = solution16[id];
  } else if (wymiar == 25) {
    what = solution25[id];
  } else if (wymiar == 36) {
    what = solution36[id];
  }

  setAllOnBoard(what);
  step();
}

function getAllOnBoard() {
  changeInl2m0();

  pola = "";
  for (var i = 1; i <= wymiar * wymiar; i++) {
    //od 1 do wymiar^2
    pole = document.getElementById("p" + i);

    inpt = document.forms["forma"].elements["in" + i];
    if (inpt) {
      patti = new RegExp("inone");
      if (patti.test(pole.innerHTML)) plus = 48; //48 - white ... 12345678 bo 49 to 1
      pattig = new RegExp("intwo");
      if (pattig.test(pole.innerHTML)) plus = 74; //74 - green ... KLMNOPQR

      val = inpt.value;
      val = parseInt(val);
      if (val) pola += String.fromCharCode(val + plus);
      else if (patti.test(pole.innerHTML)) {
        // empty island withour a digit - 9
        pola += String.fromCharCode(9 + plus);
      } else {
        pola += "E"; // empty space - E
      }
    } else {
      patt0a = new RegExp("ones");
      patt0b = new RegExp("inone");
      if (patt0a.test(pole.innerHTML) || patt0b.test(pole.innerHTML))
        pola += "E"; //E - empty white field
      else {
        patt1 = new RegExp("two");
        if (patt1.test(pole.innerHTML)) pola += "i";
        else {
          patt2 = new RegExp("three");
          if (patt2.test(pole.innerHTML)) pola += "h";
          else {
            patt3 = new RegExp("four");
            if (patt3.test(pole.innerHTML)) pola += "t";
            else {
              patt4 = new RegExp("five");
              if (patt4.test(pole.innerHTML)) pola += "f";
            }
          }
        }
      }
    }
  }

  return pola;
}

function setAllOnBoard(board) {
  var digit = "";
  var nr = 0;

  for (var x = 0; x < wymiar * wymiar; x++) {
    //od 1 2 do ... 100
    digit = board.substring(x, x + 1);
    nr = x + 1;
    id = nr;
    p = document.getElementById("p" + id); // m1 m2 m3 m50 ... in1 in2

    switch (digit.toLowerCase()) {
      case "k":
      case "l":
      case "m":
      case "n":
      case "o":
      case "p":
      case "q":
      case "r":
        p.innerHTML =
          "<input " +
          'onclick="intwo(' +
          id +
          ')" ' +
          'onchange="change(' +
          id +
          ')" ' +
          'onfocus="focused(' +
          id +
          ')" ' +
          'class="ing' +
          '" ' +
          'name="in' +
          id +
          '" ' +
          'id="in' +
          id +
          '" ' +
          'type="text" ' +
          'maxlength="1"' +
          'value="' +
          (digit.charCodeAt(0) - 74) +
          '">';
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
        p.innerHTML =
          "<input " +
          'onclick="inone(' +
          id +
          ')" ' +
          'onchange="change(' +
          id +
          ')" ' +
          'onfocus="focused(' +
          id +
          ')" ' +
          'class="in' +
          '" ' +
          'name="in' +
          id +
          '" ' +
          'id="in' +
          id +
          '" ' +
          'type="text" ' +
          'maxlength="1"' +
          'value="' +
          digit +
          '">';
        break;
      case "9":
        p.innerHTML =
          "<input " +
          'onclick="inone(' +
          id +
          ')" ' +
          'onchange="change(' +
          id +
          ')" ' +
          'onfocus="focused(' +
          id +
          ')" ' +
          'class="in' +
          '" ' +
          'name="in' +
          id +
          '" ' +
          'id="in' +
          id +
          '" ' +
          'type="text" ' +
          'maxlength="1"' +
          'value="">';
        break;
      case "s":
        p.innerHTML =
          "<input " +
          'onclick="intwo(' +
          id +
          ')" ' +
          'onchange="change(' +
          id +
          ')" ' +
          'onfocus="focused(' +
          id +
          ')" ' +
          'class="ing' +
          '" ' +
          'name="in' +
          id +
          '" ' +
          'id="in' +
          id +
          '" ' +
          'type="text" ' +
          'maxlength="1"' +
          'value="">';
        break;
      case "e":
        p.innerHTML =
          '<input class="m0" id="m' +
          id +
          '" ' +
          'oninput="cli(' +
          id +
          ')" onmousedown="ones(\'' +
          id +
          "')\" " +
          "></div>";
        break;
      case "i":
        p.innerHTML =
          '<input class="m1' +
          '" id="m' +
          id +
          '" ' +
          "onmousedown=\"two('" +
          id +
          "')\" " +
          "></div>";
        break;
      case "h":
        p.innerHTML =
          '<input class="m2' +
          '" id="m' +
          id +
          '" ' +
          "onmousedown=\"three('" +
          id +
          "')\" " +
          "></div>";
        break;
      case "t":
        p.innerHTML =
          '<input class="m3' +
          '" id="m' +
          id +
          '" ' +
          "onmousedown=\"four('" +
          id +
          "')\" " +
          "></div>";
        break;
      case "f":
        p.innerHTML =
          '<input class="m4' +
          '" id="m' +
          id +
          '" ' +
          "onmousedown=\"five('" +
          id +
          "')\" " +
          "></div>";
        break;
      default:
        break;
    }
  }
}

function getBoard(){
  changeInl2m0();

  pola = "";
  for (var i = 1; i <= wymiar * wymiar; i++) {
    //od 1 do wymiar^2
    pole = document.getElementById("p" + i);

    inpt = document.forms["forma"].elements["in" + i];
    if (inpt) {
      pola += "9"; // there's an island so don't white it
    } else {
      patt0a = new RegExp("ones");
      patt0b = new RegExp("inone");
      if (patt0a.test(pole.innerHTML) || patt0b.test(pole.innerHTML))
        pola += "0";
      else {
        patt1 = new RegExp("two");
        if (patt1.test(pole.innerHTML)) pola += "i";
        else {
          patt2 = new RegExp("three");
          if (patt2.test(pole.innerHTML)) pola += "h";
          else {
            patt3 = new RegExp("four");
            if (patt3.test(pole.innerHTML)) pola += "t";
            else {
              patt4 = new RegExp("five");
              if (patt4.test(pole.innerHTML)) pola += "f";
            }
          }
        }
      }
    }
  }
  return pola;
}

function getAllOnBoard2() {
  prompt("Actual board state", getAllOnBoard());
}

function setStartEndV(id) {
  startv = 0;
  endv = 0;
  isStartv = false;
  isEndv = false;
  setWhereIJ(id);

  // -------------------------------------------vertical
  if ((whereI != 1) & (whereI != wymiar)) {
    for (k = whereI + 1; k <= wymiar; k++) {
      polak = pola[whereJ - 1 + wymiar * (k - 1)];
      if (/[tfK-R1-9]/.test(polak)) {
        // only if island on the down !
        if (!isEndv) {
          if (/[tfK-R]/.test(polak)) {
            endv = 0;
          } else {
            endv = k;
          }
          isEndv = true;
        }
      }
    }
    for (k = whereI - 1; k >= 0; k--) {
      polak = pola[whereJ - 1 + wymiar * k];
      if (/[tfK-R1-9]/.test(polak)) {
        // only if island on the up
        if (!isStartv) {
          if (/[tfK-R]/.test(polak)) {
            startv = 0;
          } else {
            startv = k + 1;
          }
          isStartv = true;
        }
      }
    }
  }
}

function setWhereIJ(id) {
  whereamI = 0;
  id--;
  whereI = (id - (id % wymiar)) / wymiar + 1;
  whereJ = (id % wymiar) + 1;
}

function setStartEndH(id) {
  isStartH = false;
  isEndH = false;
  startH = 0;
  endH = 0;
  setWhereIJ(id);

  if ((whereJ != 1) & (whereJ != wymiar)) {
    for (k = whereJ + 1; k <= wymiar; k++) {
      polak = pola[(whereI - 1) * wymiar + k - 1];
      if (/[ihK-R1-9]/.test(polak)) {
        // only if island on the right !
        if (!isEndH) {
          if (/[ihK-R]/.test(polak)) {
            endH = 0;
          } else {
            endH = k;
          }
          isEndH = true;
        }
      }
    }
    for (k = whereJ - 1; k >= 1; k--) {
      polak = pola[(whereI - 1) * wymiar + k - 1];
      if (/[ihK-R1-9]/.test(polak)) {
        // only if island on the left
        if (!isStartH) {
          if (/[ihK-R]/.test(polak)) {
            startH = 0;
          } else {
            startH = k;
          }
          isStartH = true;
        }
      }
    }
  }  
}

function stretchH(id, type, dir) {
  // 4 - horizontal 5- vertical
  setStartEndH(id);
  setWhereIJ(id);
  if (whereJ == wymiar && /[tf]/.test(type)) {
    return 0;
  }
  if (whereJ == 1 && /[tf]/.test(type)) {
    return 0;
  }

  if (!startH) {
    return 0;
  }

  if (startH > 0 && endH > 0) {
    ajdiStart = (whereI - 1) * wymiar + startH + 1;
    ajdiEnd = ajdiStart + endH - startH - 2;

    for (i = ajdiStart; i <= ajdiEnd; i++) {
      p = document.getElementById("p" + i); // m1 m2 m3 m50 ... in1 in2
      id = i;
      switch (type.toLowerCase()) {
        case "9":
          break;
        case "e":
          p.innerHTML =
            '<input class="m0" id="m' +
            id +
            '" ' +
            'oninput="cli(' +
            id +
            ')" onmousedown="ones(\'' +
            id +
            "')\" " +
            "></div>";
          break;
        case "i":
          p.innerHTML =
            '<input class="m1' +
            '" id="m' +
            id +
            '" ' +
            "onmousedown=\"two('" +
            id +
            "')\" " +
            "></div>";
          break;
        case "h":
          p.innerHTML =
            '<input class="m2' +
            '" id="m' +
            id +
            '" ' +
            "onmousedown=\"three('" +
            id +
            "')\" " +
            "></div>";
          break;
        case "t":
          p.innerHTML =
            '<input class="m3' +
            '" id="m' +
            id +
            '" ' +
            "onmousedown=\"four('" +
            id +
            "')\" " +
            "></div>";
          break;
        case "f":
          p.innerHTML =
            '<input class="m4' +
            '" id="m' +
            id +
            '" ' +
            "onmousedown=\"five('" +
            id +
            "')\" " +
            "></div>";
          break;
        default:
          break;
      }
    }
  }
}

function stretchV(id, type, dir) {
  // 4 - horizontal 5- vertical
  setStartEndV(id);
  setWhereIJ(id);

  if (whereI == wymiar && /[ih]/.test(type)) {
    return 0;
  }
  if (whereI == 1 && /[ih]/.test(type)) {
    return 0;
  }
  if (startv > 0 && endv > 0) {
    ajdiStart = (startv - 1) * wymiar + wymiar + whereJ;
    ajdiEnd = ajdiStart + wymiar * (endv - startv - 2);

    for (i = ajdiStart; i <= ajdiEnd; i += wymiar) {
      p = document.getElementById("p" + i); // m1 m2 m3 m50 ... in1 in2
      id = i;
      switch (type.toLowerCase()) {
        case "9":
          break;
        case "e":
          p.innerHTML =
            '<input class="m0" id="m' +
            id +
            '" ' +
            'oninput="cli(' +
            id +
            ')" onmousedown="ones(\'' +
            id +
            "')\" " +
            "></div>";
          break;
        case "i":
          p.innerHTML =
            '<input class="m1' +
            '" id="m' +
            id +
            '" ' +
            "onmousedown=\"two('" +
            id +
            "')\" " +
            "></div>";
          break;
        case "h":
          p.innerHTML =
            '<input class="m2' +
            '" id="m' +
            id +
            '" ' +
            "onmousedown=\"three('" +
            id +
            "')\" " +
            "></div>";
          break;
        case "t":
          p.innerHTML =
            '<input class="m3' +
            '" id="m' +
            id +
            '" ' +
            "onmousedown=\"four('" +
            id +
            "')\" " +
            "></div>";
          break;
        case "f":
          p.innerHTML =
            '<input class="m4' +
            '" id="m' +
            id +
            '" ' +
            "onmousedown=\"five('" +
            id +
            "')\" " +
            "></div>";
          break;
        default:
          break;
      }
    }
  }
}

function clearGreens() {
  isAllTicked=false;
  board = getAllOnBoard();

  board = board.replaceAll("K", 1);
  board = board.replaceAll("L", 2);
  board = board.replaceAll("M", 3);
  board = board.replaceAll("N", 4);
  board = board.replaceAll("O", 5);
  board = board.replaceAll("P", 6);
  board = board.replaceAll("Q", 7);
  board = board.replaceAll("R", 8);
  board = board.replaceAll("S", 9);
  setAllOnBoard(board);
}

function setAllOnBoard2() {
  board = prompt("Load saved board state");

  setAllOnBoard(board);
}

function getBoard2() {
  prompt("Actual bridges state", getBoard());
}

function setBoard2() {
  board = prompt("Load saved bridges state");

  setBoard(board);
}

function setBoard(board) {
  var digit = "";
  var nr = 0;

  for (var x = 0; x < wymiar * wymiar; x++) {
    //od 1 2 do ... 100
    digit = board.substring(x, x + 1);
    nr = x + 1;
    id = nr;
    p = document.getElementById("p" + id); // m1 m2 m3 m50 ... in1 in2

    switch (digit.toLowerCase()) {
      case "9":
        break;
      case "0":
        p.innerHTML =
          '<input class="m0" id="m' +
          id +
          '" ' +
          'oninput="cli(' +
          id +
          ')" onmousedown="ones(\'' +
          id +
          "')\" " +
          "></div>";
        break;
      case "i":
        p.innerHTML =
          '<input class="m1' +
          '" id="m' +
          id +
          '" ' +
          "onmousedown=\"two('" +
          id +
          "')\" " +
          "></div>";
        break;
      case "h":
        p.innerHTML =
          '<input class="m2' +
          '" id="m' +
          id +
          '" ' +
          "onmousedown=\"three('" +
          id +
          "')\" " +
          "></div>";
        break;
      case "t":
        p.innerHTML =
          '<input class="m3' +
          '" id="m' +
          id +
          '" ' +
          "onmousedown=\"four('" +
          id +
          "')\" " +
          "></div>";
        break;
      case "f":
        p.innerHTML =
          '<input class="m4' +
          '" id="m' +
          id +
          '" ' +
          "onmousedown=\"five('" +
          id +
          "')\" " +
          "></div>";
        break;
      default:
        break;
    }
  }
}

function setInputs2() {
  var inputy = prompt("Load saved islands");

  inputy = inputy.replaceAll("t", "E");
  inputy = inputy.replaceAll("f", "E");
  inputy = inputy.replaceAll("h", "E");
  inputy = inputy.replaceAll("i", "E");

  setInputs(inputy);
}

function setInputs(inputy) {
  var digit = "";
  var nr = 0;

  for (var x = 0; x < wymiar * wymiar; x++) {
    //od 1 2 do ... 100
    digit = inputy.substring(x, x + 1);
    nr = x + 1;
    id = nr;
    p = document.getElementById("p" + id); // m1 m2 m3 m50 ... in1 in2

    if (digit.toUpperCase() == "E" || digit == "") {
      p.innerHTML =
        '<input class="m0" id="m' +
        id +
        '" ' +
        'oninput="cli(' +
        id +
        ')" onmousedown="ones(\'' +
        id +
        "')\" " +
        ">";
    } else {
      if (
        digit != "1" &&
        digit != "2" &&
        digit != "3" &&
        digit != "4" &&
        digit != "5" &&
        digit != "6" &&
        digit != "7" &&
        digit != "8"
      ) {
        digit = "";
      }

      p.innerHTML =
        "<input " +
        'onclick="inone(' +
        id +
        ')" ' +
        'onchange="change(' +
        id +
        ')" ' +
        'onfocus="focused(' +
        id +
        ')" ' +
        'class="in' +
        '" ' +
        'name="in' +
        id +
        '" ' +
        'id="in' +
        id +
        '" ' +
        'type="text" ' +
        'maxlength="1"' +
        'value="' +
        digit +
        '">';
    }
  }
}

function getInputs() {
  forma = document.forms["forma"];

  inputy = "";
  for (var x = 1; x <= wymiar * wymiar; x++) {
    //od 1 2 3 ... do 100
    inpt = forma.elements["in" + x];
    if (inpt) {
      val = inpt.value;
      if (val == "") val = "0";
    } else val = "E";
    inputy += val;
  }

  return inputy;
}

function getInputs2() {
  prompt("Actual islands state", getInputs());
}

function shortenBoard(board) {
  //console.log(board);
  changeWhat = [
    "EEEE",
    "EEE",
    "EE",
    "ttt",
    "tt",
    "fff",
    "ff",
    "hhh",
    "hh",
    "iii",
    "ii",
  ];
  changeTo = ["t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d"];
  for (i = 0; i < changeWhat.length; i++) {
    board = board.replaceAll(changeWhat[i], changeTo[i]);
  }
  // console.log(board);

  return board;
}
function lengthenBoard(board) {
  //console.log(board);
  changeWhat = ["z", "x", "y", "v"];
  changeTo = ["EEEEEE", "EEEE", "EEE", "EE"];
  for (i = 0; i < changeWhat.length; i++) {
    board = board.replaceAll(changeWhat[i], changeTo[i]);
  }
  //console.log(board);
  return board;
}
