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
var making = false;

function makeBoard() {
 
 
  board = getAllOnBoard();
  if(/[1-8K-R]/.test(board)){
    console.log('CLEAR DIGITS to START making board')
    return 0;
  }
  
  if(!(/9/.test(board))){
    console.log('PUT 1 island to START making board')
    return 0;
  }
 
  if (drawingBoard == true) {
    for (i = 0; i < 16; i++) makeBoard2();
  }

  if (making) {
    document.getElementById("makeB").innerHTML = "START making board";
    clearInterval(idTimeout);
    making = false;
  } else {
    document.getElementById("makeB").innerHTML = "STOP making board";
    making = true;
    idTimeout = setInterval(makeBoard2, 100);
  }
}

var maxBRIDGELENGTH = 2;

function changedBridgeLength() {
  number = parseInt(document.getElementById("bridgeLength").value);
  if (number >= 1 && number < wymiar - 1) {
    maxBRIDGELENGTH = number;
  } else {
    document.getElementById("bridgeLength").value = wymiar - 2;
    maxBRIDGELENGTH = wymiar - 2;
  }
}

function minusLen() {
  number = parseInt(document.getElementById("bridgeLength").value);
  if (number > 1) {
    document.getElementById("bridgeLength").value = number - 1;

    maxBRIDGELENGTH--;
  }
}

function plusLen() {
  number = parseInt(document.getElementById("bridgeLength").value);
  if (number < wymiar - 2) {
    document.getElementById("bridgeLength").value = number + 1;

    maxBRIDGELENGTH++;
  }
}
function makeBoard2() {
  board = getAllOnBoard();

  do {
    r = Math.floor(Math.random() * wymiar * wymiar); // r=random ID on the board
  } while (!(board[r] == "E"));

  if (
    board[r - 1] == "9" ||
    board[r + 1] == "9" ||
    board[r + wymiar] == "9" ||
    board[r - wymiar] == "9"
  ) {
    return 0;
  }

  bridge = "";
  if (r < 1) r = 0;
  getAllOnBoard();
  ///^EE?E?E?9/
  if (maxBRIDGELENGTH < 1 || maxBRIDGELENGTH > wymiar - 2) maxBRIDGELENGTH = 1;

  patt = "^E";
  for (i = 1; i < maxBRIDGELENGTH; i++) {
    patt += "E?";
  }
  patt += "9";
  patt = new RegExp(patt);

  if (patt.test(whatsLeftBoard(board, r))) {
    id = findIdOfClosestEmptyIsland(r, whatsLeftBoard(board, r), "left");
    bridge = "t";
    if (r % 2) bridge = "f";
    board = Array.from(board);
    board[r] = "9";
    for (i = id + 1; i < r; i++) {
      board[i] = bridge;
    }
    setAllOnBoard(board.toString().replaceAll(",", ""));
    /* if (krok == 0) {
      stepsy[0] = getAllOnBoard();
    }
    krok++;
    stepsy[krok] = getAllOnBoard();
    pointedStep = krok;
    navigate();*/
  } else if (patt.test(whatsRightBoard(board, r))) {
    id = findIdOfClosestEmptyIsland(r, whatsRightBoard(board, r), "right");
    bridge = "t";
    if (r % 2) bridge = "f";
    board = Array.from(board);
    board[r] = "9";
    for (i = id - 1; i > r; i--) {
      board[i] = bridge;
    }
    setAllOnBoard(board.toString().replaceAll(",", ""));
    /* if (krok == 0) {
      stepsy[0] = getAllOnBoard();
    }
    krok++;
    stepsy[krok] = getAllOnBoard();
    pointedStep = krok;
    navigate();*/
  } else if (patt.test(whatsUpBoard(board, r))) {
    id = findIdOfClosestEmptyIsland(r, whatsUpBoard(board, r), "up");
    bridge = "i";
    if (r % 2) bridge = "i";
    board = Array.from(board);
    board[r] = "9";
    for (i = id + wymiar; i < r; i += wymiar) {
      board[i] = bridge;
    }
    setAllOnBoard(board.toString().replaceAll(",", ""));
    /*if (krok == 0) {
      stepsy[0] = getAllOnBoard();
    }
    krok++;
    stepsy[krok] = getAllOnBoard();
    pointedStep = krok;
    navigate();*/
  } else if (patt.test(whatsDownBoard(board, r))) {
    id = findIdOfClosestEmptyIsland(r, whatsDownBoard(board, r), "down");
    bridge = "i";
    if (r % 2) bridge = "h";
    board = Array.from(board);
    board[r] = "9";
    for (i = id - wymiar; i > r; i -= wymiar) {
      board[i] = bridge;
    }
    setAllOnBoard(board.toString().replaceAll(",", ""));
    /*if (krok == 0) {
      stepsy[0] = getAllOnBoard();
    }
    krok++;
    stepsy[krok] = getAllOnBoard();
    pointedStep = krok;
    navigate();*/
  }
}

function findIdOfClosestEmptyIsland(id0, str, direction) {
  minIndex = str.indexOf(9);

  if (minIndex > 0) {
    switch (direction) {
      case "left":
        return id0 - minIndex - 1;
      case "right":
        return id0 + minIndex + 1;
      case "up":
        return id0 - (minIndex + 1) * wymiar;
      case "down":
        return id0 + (minIndex + 1) * wymiar;
      default:
        break;
    }
  }
  return -1;
}
