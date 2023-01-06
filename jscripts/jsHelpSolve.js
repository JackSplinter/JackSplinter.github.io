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

function helpMe() {
  if (solvingBoard == true) {
    helpSolve();
    orangeBoard0 = false;
  }
}

orangeBoard0 = false;

function uncheckLink() {
  board = getAllOnBoard();
  for (iu = 0; iu < wymiar * wymiar; iu++) {
    if (/^[tfhi]/.test(board[iu])) {
      colorBridgeIdChange("orange", colorBRIDGE, iu);
    }
    if (/^[1-9K-S]/.test(board[iu])) {
      colorDigitIdUncheck("orange", iu);
    }
  }
}

function checkLink() {
  board = getAllOnBoard();
  if (orangeBoard0 == false) {
    orangeBoard = Array.from(board);
    orangeBoard0 = true;
  }
  idA = -1;
  for (i = 0; i < wymiar * wymiar; i++) {
    if (/^[K-S]/.test(board[i])){ //  now starts from TICKED ISLAND /^[1-9K-S]/.- earlier started from FIRST ISLAND
      idA = i;
      break;
    }
  }
  if(idA<0){
   
  for (i = 0; i < wymiar * wymiar; i++) {
    if (/^[1-9]/.test(board[i])){ //  if there is no TICKED then starts with FIRST
      idA = i;
      break;
    }
  }
  }

  colorDigitId("orange", idA);

  orangeBoard[idA] = "Z";

  for (i = 0; i < wymiar * wymiar; i++) {
    if (/^[1-9K-S]/.test(board[i])) {
      if (/^[tf]+Z/.test(whatsLeftBoard(orangeBoard, i))) {
        idIsland = findIdOfClosestConnectedZIsland(
          i,
          whatsLeftBoard(orangeBoard, i),
          "left"
        );
        for (x = i - 1; x > idIsland; x--) {
          colorBridgeId("orange", x);
        }
        colorDigitId("orange", i);
        orangeBoard[i] = "Z";
      }
      if (/^[tf]+Z/.test(whatsRightBoard(orangeBoard, i))) {
        idIsland = findIdOfClosestConnectedZIsland(
          i,
          whatsRightBoard(orangeBoard, i),
          "right"
        );
        for (x = i + 1; x < idIsland; x++) {
          colorBridgeId("orange", x);
        }

        colorDigitId("orange", i);
        orangeBoard[i] = "Z";
      }
      if (/^[hi]+Z/.test(whatsUpBoard(orangeBoard, i))) {
        idIsland = findIdOfClosestConnectedZIsland(
          i,
          whatsUpBoard(orangeBoard, i),
          "up"
        );
        for (x = i - wymiar; x > idIsland; x -= wymiar) {
          colorBridgeId("orange", x);
        }
        colorDigitId("orange", i);
        orangeBoard[i] = "Z";
      }
      if (/^[hi]+Z/.test(whatsDownBoard(orangeBoard, i))) {
        idIsland = findIdOfClosestConnectedZIsland(
          i,
          whatsDownBoard(orangeBoard, i),
          "down"
        );
        for (x = i + wymiar; x < idIsland; x += wymiar) {
          colorBridgeId("orange", x);
        }
        colorDigitId("orange", i);
        orangeBoard[i] = "Z";
      }
    }
  }
}

function findIdOfClosestConnectedZIsland(id1, str, direction) {
  // str is  whatsLeft(id) ..Right ..Up or ..Down ...
  // this island should have at least 1 bridge to ME

  minIndex = -1; // minimal position in the string
  // looking for Z island in the string
  minIndex = str.indexOf("Z");

  // if found a Z island in str
  if (minIndex > 0) {
    switch (direction) {
      case "left":
        return id1 - minIndex - 1;
      case "right":
        return id1 + minIndex + 1;
      case "up":
        return id1 - (minIndex + 1) * wymiar;
      case "down":
        return id1 + (minIndex + 1) * wymiar;
      default:
        break;
    }
  }
  return -1;
}

function reverseString(str) {
  rts = "";
  for (z = str.length - 1; z >= 0; z--) {
    rts += str[z];
  }
  return rts;
}

function whatsLeftBoard(board, id) {
  str = "";

  if (id % wymiar == 0) {
    return str;
  } else {
    for (k = id - (id % wymiar); k < id; k++) {
      str += board[k];
    }
  }
  return reverseString(str);
}

function whatsRightBoard(board, id) {
  str = "";

  if ((id + 1) % wymiar == 0) {
    return str;
  } else {
    for (k = id + 1; k < id + (wymiar - (id % wymiar)); k++) {
      str += board[k];
    }
  }
  return str;
}

function whatsUpBoard(board, id) {
  str = "";

  if (id < wymiar) {
    return str;
  } else {
    for (k = id - wymiar; k >= 0; k -= wymiar) {
      str += board[k];
    }
  }
  return str;
}

function whatsDownBoard(board, id) {
  str = "";

  if (id >= wymiar * (wymiar - 1)) {
    return str;
  } else {
    for (k = id + wymiar; k < wymiar * wymiar; k += wymiar) {
      str += board[k];
    }
  }
  return str;
}

function whatsLeft(id) {
  str = "";
  board = stepsy[stepsy.length - 1];
  if (id % wymiar == 0) {
    return str;
  } else {
    for (k = id - (id % wymiar); k < id; k++) {
      str += board[k];
    }
  }
  return reverseString(str);
}

function whatsRight(id) {
  str = "";
  board = stepsy[stepsy.length - 1];

  if ((id + 1) % wymiar == 0) {
    return str;
  } else {
    for (k = id + 1; k < id + (wymiar - (id % wymiar)); k++) {
      str += board[k];
    }
  }
  return str;
}

function whatsUp(id) {
  str = "";
  board = stepsy[stepsy.length - 1];

  if (id < wymiar) {
    return str;
  } else {
    for (k = id - wymiar; k >= 0; k -= wymiar) {
      str += board[k];
    }
  }
  return str;
}

function whatsDown(id) {
  str = "";

  board = stepsy[stepsy.length - 1];

  if (id >= wymiar * (wymiar - 1)) {
    return str;
  } else {
    for (k = id + wymiar; k < wymiar * wymiar; k += wymiar) {
      str += board[k];
    }
  }
  return str;
}

function helpSolveIslandsComplete() {
  board = stepsy[stepsy.length - 1];
  var arrb = [];
  for (u = 0; u < wymiar * wymiar; u++) {
    arrb.push(0);
  }

  for (var i = 0; i < wymiar * wymiar; i++) {
    right = 0;
    left = 0;
    down = 0;
    up = 0;
    field = board[i];
    if (i % wymiar < wymiar - 1) right = board[i + 1];
    if (i < wymiar * (wymiar - 1)) down = board[i + wymiar];
    if (i % wymiar > 0) left = board[i - 1];
    if (i >= wymiar) up = board[i - wymiar];

    switch (field) {
      case "R":
        arrb[i - 1] = "f";
        arrb[i + 1] = "f";
        arrb[i - wymiar] = "h";
        arrb[i + wymiar] = "h";
        break;
      case "P":
        if (/[Ehi]/.test(left)) {
          arrb[i + 1] = "f";
          arrb[i - wymiar] = "h";
          arrb[i + wymiar] = "h";
        } else if (/[Ehi]/.test(right)) {
          arrb[i - 1] = "f";
          arrb[i - wymiar] = "h";
          arrb[i + wymiar] = "h";
        } else if (/[Etf]/.test(up)) {
          arrb[i + 1] = "f";
          arrb[i - 1] = "f";
          arrb[i + wymiar] = "h";
        } else if (/[Etf]/.test(down)) {
          arrb[i + 1] = "f";
          arrb[i - 1] = "f";
          arrb[i - wymiar] = "h";
        } else if (!up) {
          arrb[i + 1] = "f";
          arrb[i - 1] = "f";
          arrb[i - wymiar] = "h";
        } else if (!down) {
          arrb[i + 1] = "f";
          arrb[i - 1] = "f";
          arrb[i + wymiar] = "h";
        }
        break;
      case "N":
        if (/[Ehi]/.test(left) && /[Ehi]/.test(right)) {
          arrb[i - wymiar] = "h";
          arrb[i + wymiar] = "h";
          board[i - wymiar] = "h";
          board[i + wymiar] = "h";
        }
        if (/[Etf]/.test(up) && /[Etf]/.test(down)) {
          arrb[i - 1] = "f";
          arrb[i + 1] = "f";
        }
        if (/[Ehi]/.test(left) && /[Etf]/.test(up)) {
          arrb[i + 1] = "f";
          arrb[i + wymiar] = "h";
        }
        if (/[Ehi]/.test(left) && /[Etf]/.test(down)) {
          arrb[i - wymiar] = "h";
          arrb[i + 1] = "f";
        }
        if (/[Etf]/.test(up) && /[Ehi]/.test(right)) {
          arrb[i - 1] = "f";
          arrb[i + wymiar] = "h";
        }
        if (/[Etf]/.test(down) && /[Ehi]/.test(right)) {
          arrb[i - 1] = "f";
          arrb[i - wymiar] = "h";
        }
        if (!down && !right) {
          arrb[i - 1] = "f";
          arrb[i - wymiar] = "h";
        }
        if (!down && !left) {
          arrb[i + 1] = "f";
          arrb[i - wymiar] = "h";
        }
        if (!up && !right) {
          arrb[i - 1] = "f";
          arrb[i + wymiar] = "h";
        }
        if (!up && !left) {
          arrb[i + 1] = "f";
          arrb[i + wymiar] = "h";
        }
        break;
      case "L":
        if (/[Ehi]/.test(left) && /[Ehi]/.test(right) && /[Etf]/.test(up)) {
          arrb[i + wymiar] = "h";
        }
        break;

      case "7":
        bridge7 = 0;
        if (left == "t") bridge7++;
        if (left == "f") bridge7 += 2;
        if (right == "t") bridge7++;
        if (right == "f") bridge7 += 2;
        if (up == "i") bridge7++;
        if (up == "h") bridge7 += 2;
        if (down == "i") bridge7++;
        if (down == "h") bridge7 += 2;
        if (bridge7 == 7) {
          arrb[i] = "Q";
        }

        break;
      case "6":
        if (countBridgesOfIsland(i) == 6) arrb[i] = "P";
        break;
      case "5":
        bridge5 = 0;
        if (left == "t") bridge5++;
        if (left == "f") bridge5 += 2;
        if (right == "t") bridge5++;
        if (right == "f") bridge5 += 2;
        if (up == "i") bridge5++;
        if (up == "h") bridge5 += 2;
        if (down == "i") bridge5++;
        if (down == "h") bridge5 += 2;
        if (bridge5 == 5) {
          arrb[i] = "O";
        }

        break;
      case "4":
        bridge4 = 0;
        if (left == "t") bridge4++;
        if (left == "f") bridge4 += 2;
        if (right == "t") bridge4++;
        if (right == "f") bridge4 += 2;
        if (up == "i") bridge4++;
        if (up == "h") bridge4 += 2;
        if (down == "i") bridge4++;
        if (down == "h") bridge4 += 2;
        if (bridge4 == 4) {
          arrb[i] = "N";
        }

        break;

      case "3":
        bridge3 = 0;
        if (left == "t") bridge3++;
        if (left == "f") bridge3 += 2;
        if (right == "t") bridge3++;
        if (right == "f") bridge3 += 2;
        if (up == "i") bridge3++;
        if (up == "h") bridge3 += 2;
        if (down == "i") bridge3++;
        if (down == "h") bridge3 += 2;
        if (bridge3 == 3) {
          arrb[i] = "M";
        }

        break;
      case "2":
        bridge2 = 0;
        if (left == "t") bridge2++;
        if (left == "f") bridge2 += 2;
        if (right == "t") bridge2++;
        if (right == "f") bridge2 += 2;
        if (up == "i") bridge2++;
        if (up == "h") bridge2 += 2;
        if (down == "i") bridge2++;
        if (down == "h") bridge2 += 2;
        if (bridge2 == 2) {
          arrb[i] = "L";
        }

        break;
      case "1":
        bridge1 = 0;
        if (left == "t") bridge1++;
        if (right == "t") bridge1++;
        if (up == "i") bridge1++;
        if (down == "i") bridge1++;
        if (bridge1 == 1) {
          arrb[i] = "K";
        }

        break;
      default:
        break;
    }
  }
  board2 = "";
  for (j = 0; j < wymiar * wymiar; j++) {
    if (/[fMONPQKLh]/.test(arrb[j])) {
      board2 += arrb[j];
    } else {
      board2 += board[j];
    }
  }
  setAllOnBoard(board2);
}

function countBridgesOfIsland(id) {
  board = stepsy[stepsy.length - 1];
  sum = 0;
  right = 0;
  left = 0;
  down = 0;
  up = 0;
  right = whatsRight(id);
  down = whatsDown(id);
  left = whatsLeft(id);
  up = whatsUp(id);
  if (/^[Etf]*[f]+[Etf]*[1-8K-R]/.test(left)) sum += 2; // 2 bridges  - must be f before ISLAND
  if (/^[Etf]*[f]+[Etf]*[1-8K-R]/.test(right)) sum += 2;
  if (/^[Ehi]*[h]+[Ehi]*[1-8K-R]/.test(up)) sum += 2;
  if (/^[Ehi]*[h]+[Ehi]*[1-8K-R]/.test(down)) sum += 2;

  if (/^[Et]*[t]+[Et]*[1-8K-R]/.test(left)) sum++; // 1 bridges  - must be only t before ISLAND
  if (/^[Et]*[t]+[Et]*[1-8K-R]/.test(right)) sum++;
  if (/^[Ei]*[i]+[Ei]*[1-8K-R]/.test(up)) sum++;
  if (/^[Ei]*[i]+[Ei]*[1-8K-R]/.test(down)) sum++;

  return sum;
}

function KRto18(str) {
  if (/^[K-R]$/.test(str)) return str.charCodeAt(0) - 74;
  if (/^[1-8]$/.test(str)) return parseInt(str);
  return -1;
}

function checkIfNotMoreBridgesThanShouldBe() {
  foundONE = false;
  board = stepsy[stepsy.length - 1];
  counted = 0;
  for (i = 0; i < wymiar * wymiar; i++) {
    if (/[K-R]/.test(board[i])) {
      counted = countBridgesOfIsland(i);

      shouldHave = KRto18(board[i]);

      if (counted > shouldHave) {
      document.getElementById('in'+(i+1)).className='inge';
       // console.log("ISLAND ID=" +i +" ((" +shouldHave +")) HAS TOO MANY BRIDGES =" +counted);
        foundONE = true;
      }
    }
  }/*
  if (!foundONE) {
    console.log("ISLANDs HAVEN'T TOO MANY BRIDGES");
  }*/
}

function checkIfNotLessBridgesThanShouldBe() {
  foundONE = false;
  board = stepsy[stepsy.length - 1];
  counted = 0;
  for (i = 0; i < wymiar * wymiar; i++) {
    if (/[K-R]/.test(board[i])) {
      counted = countBridgesOfIsland(i);
      shouldHave = KRto18(board[i]);
      if (counted < shouldHave) {
        document.getElementById('in'+(i+1)).className='inge';
        //console.log("ISLAND ID=" +  i +  " ((" +  shouldHave +  ")) HAS NOT ENOUGH BRIDGES =" +  counted        );        foundONE = true;
      }
    }
  }/*
  if (!foundONE) {
    console.log("ISLANDs HAVEN'T GOT TOO LITTLE BRIDGES");
  }*/
}

function countMissingBridgesOfIsland(id) {
  board = stepsy[stepsy.length - 1];
  missing = 0;
  numberOfIsland = parseInt(board[id]);

  missing = numberOfIsland - countBridgesOfIsland(id);

  if (missing > 0) {
    return missing;
  }

  return 0;
}

function findIdOfClosestNotTickedIsland(id0, str, direction) {
  // str is  whatsLeft(id) ..Right ..Up or ..Down ...
  // this island should have at least 1 missing bridge

  minIndex = str.length - 1; // minimal position in the string
  idS = -1; // position in the string

  for (var i = 1; i <= 7; i++) {
    // looking for 1,2,3,4,5,6,7 island in the string
    idS = str.indexOf(i);

    if (idS >= 0 && idS < minIndex) {
      minIndex = idS; // finding minimal position  - closest to id0
    }
  }
  // if found an island in str
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

function helpSolveBridges() {
  do {
    isSomethingToDo = false;

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

      if (i < wymiar * wymiar - 1) right = board[i + 1];
      if (i < wymiar * (wymiar - 1)) down = board[i + wymiar];
      if (i > 0) left = board[i - 1];
      if (i >= wymiar) up = board[i - wymiar];
      //horizontal single
      if (
        i > 0 &&
        i < wymiar * wymiar &&
        i % wymiar != 0 &&
        (i + 1) % wymiar != 0
      ) {
        if (/[E]/.test(field) && /[t]/.test(right)) {
          arra[i] = "t";
        }
      }
      if (
        i > 0 &&
        i < wymiar * wymiar &&
        i % wymiar != 0 &&
        (i + 1) % wymiar != 0
      ) {
        if (/[E]/.test(field) && /[t]/.test(left)) {
          arra[i] = "t";
        }
      }
      //vertical single
      if (i >= wymiar && i < (wymiar - 1) * wymiar) {
        if (/[E]/.test(field) && /[i]/.test(up)) {
          arra[i] = "i";
        }
      }
      if (i >= wymiar && i < (wymiar - 1) * wymiar) {
        if (/[E]/.test(field) && /[i]/.test(down)) {
          arra[i] = "i";
        }
      }
      //
      //horizontal double
      if (
        i > 0 &&
        i < wymiar * wymiar &&
        i % wymiar != 0 &&
        (i + 1) % wymiar != 0
      ) {
        if (/[Et]/.test(field) && /[f]/.test(right)) {
          arra[i] = "f";
          arra[i] = "f";
        }
      }
      if (
        i > 0 &&
        i < wymiar * wymiar &&
        i % wymiar != 0 &&
        (i + 1) % wymiar != 0
      ) {
        if (/[Et]/.test(field) && /[f]/.test(left)) {
          arra[i] = "f";
        }
      }
      // vertical double
      if (i >= wymiar && i < (wymiar - 1) * wymiar) {
        if (/[Ei]/.test(field) && /[h]/.test(up)) {
          arra[i] = "h";
        }
      }
      if (i >= wymiar && i < (wymiar - 1) * wymiar) {
        if (/[Ei]/.test(field) && /[h]/.test(down)) {
          arra[i] = "h";
        }
      }
    }
    board2 = "";
    for (i = 0; i < wymiar * wymiar; i++) {
      if (/[tfihK-R]/.test(arra[i])) {
        board2 += arra[i];
        isSomethingToDo = true;
      } else {
        board2 += board[i];
      }
    }
    setAllOnBoard(board2);
  } while (isSomethingToDo);
}

function checkIfAllTicked(){


  board = getAllOnBoard();
  if(/[1-8]/.test(board)){
    isAllTicked=false;
  }
  else{
    isAllTicked=true;
  }
}



function helpSolve() {

  if(stepsy[stepsy.length - 1]==stepsy[stepsy.length - 4])
   return 0;

  checkIfAllTicked();  
  if(isAllTicked) {
    return 0;
  }

  step0();
  step();

  board = stepsy[stepsy.length - 1];
  var arra = [];
  for (i = 0; i < wymiar * wymiar; i++) {
    arra.push(0);
  }

  for (i = 0; i < wymiar * wymiar; i++) {
    field = board[i];

    switch (field) {
      case "E":
      case "S":
      case "9":
      case "h":
      case "i":
      case "f":
      case "t":
      case "K":
      case "L":
      case "M":
      case "N":
      case "O":
      case "P":
      case "Q":
      case "R":
        break;
      case "8":
        arra[i - 1] = "f";
        arra[i + 1] = "f";
        arra[i - wymiar] = "h";
        arra[i + wymiar] = "h";
        arra[i] = "R";
        break;
      case "7":
        if (board[i - 1] != "f" && !arra[i - 1]) arra[i - 1] = "t";
        if (board[i + 1] != "f" && !arra[i + 1]) arra[i + 1] = "t";
        if (board[i - wymiar] != "h" && !arra[i - wymiar])
          arra[i - wymiar] = "i";
        if (board[i + wymiar] != "h" && !arra[i + wymiar])
          arra[i + wymiar] = "i";
        // if 2 sides are TICKED and they have 3 bridges, the others 2 will have 4

        //       /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/
        // - on edge or EmptEE or "EE I II " or TICKED island with at least 1 bridge to actual island
        // LR
        if (
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i))
        ) {
          if (
            (board[i + 1] == "t" && board[i - 1] == "f") ||
            (board[i + 1] == "f" && board[i - 1] == "t")
          ) {
            arra[i + wymiar] = "h";
            arra[i - wymiar] = "h";
            arra[i] = "Q";
            break;
          }
        } //UD
        if (
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) &&
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i))
        ) {
          if (
            (board[i + wymiar] == "i" && board[i - wymiar] == "h") ||
            (board[i + wymiar] == "h" && board[i - wymiar] == "i")
          ) {
            arra[i + 1] = "f";
            arra[i - 1] = "f";
            arra[i] = "Q";
            break;
          }
        } //LD
        if (
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i))
        ) {
          if (
            (board[i - 1] == "t" && board[i + wymiar] == "h") ||
            (board[i - 1] == "f" && board[i + wymiar] == "i")
          ) {
            arra[i + 1] = "f";
            arra[i - wymiar] = "h";
            arra[i] = "Q";
            break;
          }
        } //DR
        if (
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i))
        ) {
          if (
            (board[i + wymiar] == "i" && board[i + 1] == "f") ||
            (board[i + wymiar] == "h" && board[i + 1] == "t")
          ) {
            arra[i - 1] = "f";
            arra[i - wymiar] = "h";
            arra[i] = "Q";
            break;
          }
        } //RU
        if (
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i))
        ) {
          if (
            (board[i + 1] == "t" && board[i - wymiar] == "h") ||
            (board[i + 1] == "f" && board[i - wymiar] == "i")
          ) {
            arra[i - 1] = "f";
            arra[i + wymiar] = "h";
            arra[i] = "Q";
            break;
          }
        } //LU
        if (
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) &&
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i))
        ) {
          if (
            (board[i - 1] == "t" && board[i - wymiar] == "h") ||
            (board[i - 1] == "f" && board[i - wymiar] == "i")
          ) {
            arra[i + 1] = "f";
            arra[i + wymiar] = "h";
            arra[i] = "Q";
            break;
          }
        }
        break;
      case "6":
        if (whatsUp(i) == "") {
          arra[i - 1] = "f";
          arra[i + 1] = "f";
          arra[i + wymiar] = "h";
          arra[i] = "P";
          break;
        } else if (whatsDown(i) == "") {
          arra[i - 1] = "f";
          arra[i + 1] = "f";
          arra[i - wymiar] = "h";
          arra[i] = "P";
          break;
        } else if (whatsRight(i) == "") {
          arra[i - 1] = "f";
          arra[i - wymiar] = "h";
          arra[i + wymiar] = "h";
          arra[i] = "P";
          break;
        } else if (whatsLeft(i) == "") {
          arra[i - wymiar] = "h";
          arra[i + 1] = "f";
          arra[i + wymiar] = "h";
          arra[i] = "P";
          break;
        } // now we are in the middle, so lets look for "II I K-R" on the left, right, top, bottom
        else if (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))) {
          arra[i - wymiar] = "h";
          arra[i + 1] = "f";
          arra[i + wymiar] = "h";
          arra[i] = "P";
          break;
        } else if (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
          arra[i - wymiar] = "h";
          arra[i - 1] = "f";
          arra[i + wymiar] = "h";
          arra[i] = "P";
          break;
        } else if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))) {
          arra[i - 1] = "f";
          arra[i + 1] = "f";
          arra[i + wymiar] = "h";
          arra[i] = "P";
          break;
        } else if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) {
          arra[i - wymiar] = "h";
          arra[i - 1] = "f";
          arra[i + 1] = "f";
          arra[i] = "P";
          break;
        }
        // if 6 has 1 side left and has 4 or 5 bridges connected to TICKED islands then know what to do
        //LRU
        if (
          /^[tf]+[K-R]/.test(whatsLeft(i)) && //  TICKED island connected with 1or2 bridges to ME
          /^[tf]+[K-R]/.test(whatsRight(i)) &&
          /^[ih]+[K-R]/.test(whatsUp(i))
        ) {
          if (countBridgesOfIsland(i) == 4) {
            arra[i + wymiar] = "h";
            arra[i] = "P";
            break;
          } else if (countBridgesOfIsland(i) == 5) {
            if (board[i + wymiar] == "i" || arra[i + wymiar] == "i") {
              arra[i + wymiar] = "h";
            } else {
              arra[i + wymiar] = "i";
            }
            arra[i] = "P";
            break;
          }
        }
        //LRD
        else if (
          /^[tf]+[K-R]/.test(whatsLeft(i)) && //  TICKED island connected with 1or2 bridges to ME
          /^[tf]+[K-R]/.test(whatsRight(i)) &&
          /^[ih]+[K-R]/.test(whatsDown(i))
        ) {
          if (countBridgesOfIsland(i) == 4) {
            arra[i - wymiar] = "h";
            arra[i] = "P";
            break;
          } else if (countBridgesOfIsland(i) == 5) {
            if (board[i - wymiar] == "i" || arra[i - wymiar] == "i") {
              arra[i - wymiar] = "h";
            } else {
              arra[i - wymiar] = "i";
            }
            arra[i] = "P";
            break;
          }
        }
        //ULD
        else if (
          /^[tf]+[K-R]/.test(whatsLeft(i)) && //  TICKED island connected with 1or2 bridges to ME
          /^[ih]+[K-R]/.test(whatsUp(i)) &&
          /^[ih]+[K-R]/.test(whatsDown(i))
        ) {
          if (countBridgesOfIsland(i) == 4) {
            arra[i + 1] = "f";
            arra[i] = "P";
            break;
          } else if (countBridgesOfIsland(i) == 5) {
            if (board[i + 1] == "t" || arra[i + 1] == "t") {
              arra[i + 1] = "f";
            } else {
              arra[i + 1] = "t";
            }

            arra[i] = "P";
            break;
          }
        }
        //URD
        else if (
          /^[tf]+[K-R]/.test(whatsRight(i)) && //  TICKED island connected with 1or2 bridges to ME
          /^[ih]+[K-R]/.test(whatsUp(i)) &&
          /^[ih]+[K-R]/.test(whatsDown(i))
        ) {
          if (countBridgesOfIsland(i) == 4) {
            arra[i - 1] = "f";
            arra[i] = "P";
            break;
          } else if (countBridgesOfIsland(i) == 5) {
            if (board[i - 1] == "t" || arra[i - 1] == "t") {
              arra[i - 1] = "f";
            } else {
              arra[i - 1] = "t";
            }

            arra[i] = "P";
            break;
          }
        }

        // if on 2 sides is 1 or TICKED island with 1 bridge then side 3 and 4 will have got 2 bridges
        // LR
        if (
          /^[tE]+1|^t+[K-Q]/.test(whatsLeft(i)) && // not connected 1 island or TICKED island connected with 1 bridge to ME
          /^[tE]+1|^t+[K-Q]/.test(whatsRight(i))
        ) {
          // not connected 1 island or TICKED island connected with 1 bridge to ME
          arra[i + wymiar] = "h";
          arra[i - wymiar] = "h";
         // arra[i] = "P";
          break;
        }
        // UD
        else if (
          /^[iE]+1|^i+[K-Q]/.test(whatsUp(i)) && // not connected 1 island or TICKED island connected with 1 bridge to ME
          /^[iE]+1|^i+[K-Q]/.test(whatsDown(i))
        ) {
          // not connected 1 island or TICKED island connected with 1 bridge to ME
          arra[i + 1] = "f";
          arra[i - 1] = "f";
          //arra[i] = "P";
          break;
        }
        // LD
        if (
          /^[tE]+1|^t+[K-Q]/.test(whatsLeft(i)) && // not connected 1 island or TICKED island connected with 1 bridge to ME
          /^[iE]+1|^i+[K-Q]/.test(whatsDown(i))
        ) {
          // not connected 1 island or TICKED island connected with 1 bridge to ME
          arra[i + 1] = "f";
          arra[i - wymiar] = "h";
          //arra[i] = "P";
          break;
        }
        // LU
        if (
          /^[tE]+1|^t+[K-Q]/.test(whatsLeft(i)) && // not connected 1 island or TICKED island connected with 1 bridge to ME
          /^[iE]+1|^i+[K-Q]/.test(whatsUp(i))
        ) {
          // not connected 1 island or TICKED island connected with 1 bridge to ME
          arra[i + 1] = "f";
          arra[i + wymiar] = "h";
          //arra[i] = "P";
          break;
        }
        // RU
        if (
          /^[iE]+1|^i+[K-Q]/.test(whatsUp(i)) && // not connected 1 island or TICKED island connected with 1 bridge to ME
          /^[tE]+1|^t+[K-Q]/.test(whatsRight(i))
        ) {
          // not connected 1 island or TICKED island connected with 1 bridge to ME
          arra[i + wymiar] = "h";
          arra[i - 1] = "f";
         // arra[i] = "P";
          break;
        }
        // RD
        if (
          /^[iE]+1|^i+[K-Q]/.test(whatsDown(i)) && // not connected 1 island or TICKED island connected with 1 bridge to ME
          /^[tE]+1|^t+[K-Q]/.test(whatsRight(i))
        ) {
          // not connected 1 island or TICKED island connected with 1 bridge to ME
          arra[i - 1] = "f";
          arra[i - wymiar] = "h";
        //  arra[i] = "P";
          break;
        }

        // if on one side is 1  or TICKEN with 1 to ME then other sides will have got also 1 bridge at least
        if (/^[Et]*1|^t+[K-Q]/.test(whatsLeft(i))) {
          if (board[i + wymiar] != "h" && !arra[i + wymiar])
            arra[i + wymiar] = "i";
          if (board[i - wymiar] != "h" && !arra[i - wymiar])
            arra[i - wymiar] = "i";
          if (board[i + 1] != "f" && !arra[i + 1]) arra[i + 1] = "t";
        } else if (/^[Et]*1|^t+[K-Q]/.test(whatsRight(i))) {
          if (board[i + wymiar] != "h" && !arra[i + wymiar])
            arra[i + wymiar] = "i";
          if (board[i - wymiar] != "h" && !arra[i - wymiar])
            arra[i - wymiar] = "i";
          if (board[i - 1] != "f" && !arra[i - 1]) arra[i - 1] = "t";
        } else if (/^[Ei]*1|^i+[K-Q]/.test(whatsDown(i))) {
          if (board[i - 1] != "f" && !arra[i - 1]) arra[i - 1] = "t";
          if (board[i - wymiar] != "h" && !arra[i - wymiar])
            arra[i - wymiar] = "i";
          if (board[i + 1] != "f" && !arra[i + 1]) arra[i + 1] = "t";
        } else if (/^[Ei]*1|^i+[K-Q]/.test(whatsUp(i))) {
          if (board[i + wymiar] != "h" && !arra[i + wymiar])
            arra[i + wymiar] = "i";
          if (board[i - 1] != "f" && !arra[i - 1]) arra[i - 1] = "t";
          if (board[i + 1] != "f" && !arra[i + 1]) arra[i + 1] = "t";
        }
        break;
      case "5":
        // if 1. side is TICKED with 1 bridge /^[t]+[K-Q]+/ - 1 bridge connected with K-Q
        // and 2. side can not be accessed -    /^[Ehi]*[hiK-R]+[1-8]*|^E*$/  - this way CAN NOT GO
        // so side 3 and 4 will have got 4 bridges
        //- /^[Eft]+[1-8]+|^[ft]+[K-R]+/ - side with bridge K-R to actual island or ready to connect 1-8

        //       /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/
        // - on edge or EmptEE or "EE I II " or TICKED island with at least 1 bridge to actual island
        // LR
        if (
          /^[t]+[K-Q]+/.test(whatsLeft(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))
        ) {
          arra[i + wymiar] = "h";
          arra[i - wymiar] = "h";
          arra[i] = "O";
          break;
        } //UD
        if (
          /^[i]+[K-Q]+/.test(whatsUp(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))
        ) {
          arra[i + 1] = "f";
          arra[i - 1] = "f";
          arra[i] = "O";
          break;
        } //LD
        if (
          /^[t]+[K-Q]+/.test(whatsLeft(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))
        ) {
          arra[i + 1] = "f";
          arra[i - wymiar] = "h";
          arra[i] = "O";
          break;
        } //DR
        if (
          /^[i]+[K-Q]+/.test(whatsDown(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))
        ) {
          arra[i - 1] = "f";
          arra[i - wymiar] = "h";
          arra[i] = "O";
          break;
        } //RU
        if (
          /^[i]+[K-Q]+/.test(whatsUp(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))
        ) {
          arra[i - 1] = "f";
          arra[i + wymiar] = "h";
          arra[i] = "O";
          break;
        } //LU
        if (
          /^[t]+[K-Q]+/.test(whatsLeft(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))
        ) {
          arra[i + 1] = "f";
          arra[i + wymiar] = "h";
          arra[i] = "O";
          break;
        }

        //        /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/   - on edge or EmptEE or "EE I II " or TICKED island with at least 1 bridge to actual island
        if (
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) &&
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i))
        ) {
          if (board[i + 1] == "E" && countBridgesOfIsland(i) == 3) {
            arra[i + 1] = "f";
            arra[i] = "O";
            break;
          }
          if (board[i + 1] == "E" && countBridgesOfIsland(i) == 4) {
            arra[i + 1] = "t";

            arra[i] = "O";
            break;
          }
          if (board[i + 1] == "t" && countBridgesOfIsland(i) == 4) {
            arra[i + 1] = "f";
            arra[i] = "O";
            break;
          }
        } else if (
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i))
        ) {
          if (board[i - wymiar] == "E" && countBridgesOfIsland(i) == 3) {
            arra[i - wymiar] = "h";
            arra[i] = "O";
            break;
          }
          if (board[i - wymiar] == "E" && countBridgesOfIsland(i) == 4) {
            arra[i - wymiar] = "i";

            arra[i] = "O";
            break;
          }
          if (board[i - wymiar] == "i" && countBridgesOfIsland(i) == 4) {
            arra[i - wymiar] = "h";
            arra[i] = "O";
            break;
          }
        } else if (
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) &&
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i))
        ) {
          if (board[i - 1] == "E" && countBridgesOfIsland(i) == 3) {
            arra[i - 1] = "f";
            arra[i] = "O";
            break;
          }
          if (board[i - 1] == "E" && countBridgesOfIsland(i) == 4) {
            arra[i - 1] = "t";

            arra[i] = "O";
            break;
          }
          if (board[i - 1] == "t" && countBridgesOfIsland(i) == 4) {
            arra[i - 1] = "f";
            arra[i] = "O";
            break;
          }
        } else if (
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) &&
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i))
        ) {
          if (board[i + wymiar] == "E" && countBridgesOfIsland(i) == 3) {
            arra[i + wymiar] = "h";
            arra[i] = "O";
            break;
          }
          if (board[i + wymiar] == "E" && countBridgesOfIsland(i) == 4) {
            arra[i + wymiar] = "i";
            arra[i] = "O";
            break;
          }
          if (board[i + wymiar] == "i" && countBridgesOfIsland(i) == 4) {
            arra[i + wymiar] = "h";
            arra[i] = "O";
            break;
          }
        } else if (whatsUp(i) == "") {
          if (board[i - 1] != "f" && !arra[i - 1]) arra[i - 1] = "t";
          if (board[i + 1] != "f" && !arra[i + 1]) arra[i + 1] = "t";
          if (board[i + wymiar] != "h" && !arra[i + wymiar])
            arra[i + wymiar] = "i";

          break;
        } else if (whatsDown(i) == "") {
          if (board[i - 1] != "f" && !arra[i - 1]) arra[i - 1] = "t";
          if (board[i + 1] != "f" && !arra[i + 1]) arra[i + 1] = "t";
          if (board[i - wymiar] != "h" && !arra[i - wymiar])
            arra[i - wymiar] = "i";

          break;
        } else if (whatsRight(i) == "") {
          if (board[i - 1] != "f" && !arra[i - 1]) arra[i - 1] = "t";
          if (board[i - wymiar] != "h" && !arra[i - wymiar])
            arra[i - wymiar] = "i";
          if (board[i + wymiar] != "h" && !arra[i + wymiar])
            arra[i + wymiar] = "i";

          break;
        } else if (whatsLeft(i) == "") {
          if (board[i - wymiar] != "h" && !arra[i - wymiar])
            arra[i - wymiar] = "i";
          if (board[i + 1] != "f" && !arra[i + 1]) arra[i + 1] = "t";
          if (board[i + wymiar] != "h" && !arra[i + wymiar])
            arra[i + wymiar] = "i";

          break;
        } else if (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))) {
          if (board[i - wymiar] != "h" && !arra[i - wymiar])
            arra[i - wymiar] = "i";
          if (board[i + 1] != "f" && !arra[i + 1]) arra[i + 1] = "t";
          if (board[i + wymiar] != "h" && !arra[i + wymiar])
            arra[i + wymiar] = "i";

          break;
        } else if (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
          if (board[i - wymiar] != "h" && !arra[i - wymiar])
            arra[i - wymiar] = "i";
          if (board[i - 1] != "f" && !arra[i - 1]) arra[i - 1] = "t";
          if (board[i + wymiar] != "h" && !arra[i + wymiar])
            arra[i + wymiar] = "i";

          break;
        } else if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))) {
          if (board[i - 1] != "f" && !arra[i - 1]) arra[i - 1] = "t";
          if (board[i + 1] != "f" && !arra[i + 1]) arra[i + 1] = "t";
          if (board[i + wymiar] != "h" && !arra[i + wymiar])
            arra[i + wymiar] = "i";

          break;
        } else if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) {
          if (board[i - wymiar] != "h" && !arra[i - wymiar])
            arra[i - wymiar] = "i";
          if (board[i - 1] != "f" && !arra[i - 1]) arra[i - 1] = "t";
          if (board[i + 1] != "f" && !arra[i + 1]) arra[i + 1] = "t";

          break;
        }
        break;
      case "4":
        // if 4 has 2 sides left (1 side with 2 bridges to TICKED and 2. side NOT GO, or 2 sides with 1 bridge to TICKED)
        // and has 2 bridges connected TO IT and 1 side has missing 1 bridge then 2. side will have 1 bridge minimum
        //RU
        if (
          (/^[f]+[K-R]/.test(whatsRight(i)) && //  TICKED island connected 2 bridges to ME
            /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))) || // CAN NOT GO there
          (/^[h]+[K-R]/.test(whatsUp(i)) && //  TICKED island connected 2 bridges to ME
            /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) || // CAN NOT GO there
          (/^t+[K-Q]/.test(whatsRight(i)) && // TICKED island connected 1 bridge to ME
            /^i+[K-Q]/.test(whatsUp(i))) // TICKED island connected 1 bridge to ME
        ) {
          if (countBridgesOfIsland(i) == 2) {
            idC = -1;
            idC = findIdOfClosestNotTickedIsland(i, whatsLeft(i), "left");
            missingC = 0;
            missingC = countMissingBridgesOfIsland(idC);
            if (idC >= 0 && missingC == 1) {
              if (!arra[i + wymiar] && board[i + wymiar] != "h")
                arra[i + wymiar] = "i";

              break;
            }
            idC = -1;
            idC = findIdOfClosestNotTickedIsland(i, whatsDown(i), "down");
            missingC = 0;
            missingC = countMissingBridgesOfIsland(idC);
            if (idC >= 0 && missingC == 1) {
              if (!arra[i - 1] && board[i - 1] != "f") arra[i - 1] = "t";
              break;
            }
          }
        }
        //LD
        if (
          (/^[f]+[K-R]/.test(whatsLeft(i)) && //  TICKED island connected 2 bridges to ME
            /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) || // CAN NOT GO there
          (/^[h]+[K-R]/.test(whatsDown(i)) && //  TICKED island connected 2 bridges to ME
            /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))) || // CAN NOT GO there
          (/^i+[K-Q]/.test(whatsDown(i)) && // TICKED island connected 1 bridge to ME
            /^t+[K-Q]/.test(whatsLeft(i))) // TICKED island connected 1 bridge to ME
        ) {
          if (countBridgesOfIsland(i) == 2) {
            idC = -1;
            idC = findIdOfClosestNotTickedIsland(i, whatsRight(i), "right");
            missingC = 0;
            missingC = countMissingBridgesOfIsland(idC);
            if (idC >= 0 && missingC == 1) {
              if (!arra[i - wymiar] && board[i - wymiar] != "h")
                arra[i - wymiar] = "i";
              break;
            }
            idC = -1;
            idC = findIdOfClosestNotTickedIsland(i, whatsUp(i), "up");
            missingC = 0;
            missingC = countMissingBridgesOfIsland(idC);
            if (idC >= 0 && missingC == 1) {
              if (!arra[i + 1] && board[i + 1] != "f") arra[i + 1] = "t";
              break;
            }
          }
        }

        //LU
        if (
          (/^[f]+[K-R]/.test(whatsLeft(i)) && //  TICKED island connected 2 bridges to ME
            /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))) || // CAN NOT GO there
          (/^[h]+[K-R]/.test(whatsUp(i)) && //  TICKED island connected 2 bridges to ME
            /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))) || // CAN NOT GO there
          (/^i+[K-Q]/.test(whatsUp(i)) && // TICKED island connected 1 bridge to ME
            /^t+[K-Q]/.test(whatsLeft(i))) // TICKED island connected 1 bridge to ME
        ) {
          if (countBridgesOfIsland(i) == 2) {
            idC = -1;
            idC = findIdOfClosestNotTickedIsland(i, whatsRight(i), "right");
            missingC = 0;
            missingC = countMissingBridgesOfIsland(idC);
            if (idC >= 0 && missingC == 1) {
              if (!arra[i + wymiar] && board[i + wymiar] != "h")
                arra[i + wymiar] = "i";

              break;
            }
            idC = -1;
            idC = findIdOfClosestNotTickedIsland(i, whatsDown(i), "down");
            missingC = 0;
            missingC = countMissingBridgesOfIsland(idC);
            if (idC >= 0 && missingC == 1) {
              if (!arra[i + 1] && board[i + 1] != "f") arra[i + 1] = "t";
              break;
            }
          }
        }
        //RD
        if (
          (/^[f]+[K-R]/.test(whatsRight(i)) && //  TICKED island connected 2 bridges to ME
            /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) || // CAN NOT GO there
          (/^[h]+[K-R]/.test(whatsDown(i)) && //  TICKED island connected 2 bridges to ME
            /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) || // CAN NOT GO there
          (/^t+[K-Q]/.test(whatsRight(i)) && // TICKED island connected 1 bridge to ME
            /^i+[K-Q]/.test(whatsDown(i))) // TICKED island connected 1 bridge to ME
        ) {
          if (countBridgesOfIsland(i) == 2) {
            idC = -1;
            idC = findIdOfClosestNotTickedIsland(i, whatsLeft(i), "left");
            missingC = 0;
            missingC = countMissingBridgesOfIsland(idC);
            if (idC >= 0 && missingC == 1) {
              if (!arra[i - wymiar] && board[i - wymiar] != "h")
                arra[i - wymiar] = "i";
              break;
            }
            idC = -1;
            idC = findIdOfClosestNotTickedIsland(i, whatsUp(i), "up");
            missingC = 0;
            missingC = countMissingBridgesOfIsland(idC);
            if (idC >= 0 && missingC == 1) {
              if (!arra[i - 1] && board[i - 1] != "f") arra[i - 1] = "t";
              break;
            }
          }
        }

        //RL
        if (
          (/^[f]+[K-R]/.test(whatsRight(i)) && //  TICKED island connected 2 bridges to ME
            /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))) || // CAN NOT GO there
          (/^[f]+[K-R]/.test(whatsLeft(i)) && //  TICKED island connected 2 bridges to ME
            /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) || // CAN NOT GO there
          (/^t+[K-Q]/.test(whatsRight(i)) && // TICKED island connected 1 bridge to ME
            /^t+[K-Q]/.test(whatsLeft(i))) // TICKED island connected 1 bridge to ME
        ) {
          if (countBridgesOfIsland(i) == 2) {
            idC = -1;
            idC = findIdOfClosestNotTickedIsland(i, whatsUp(i), "up");
            missingC = 0;
            missingC = countMissingBridgesOfIsland(idC);
            if (idC >= 0 && missingC == 1) {
              if (!arra[i + wymiar] && board[i + wymiar] != "h")
                arra[i + wymiar] = "i";

              break;
            }
            idC = -1;
            idC = findIdOfClosestNotTickedIsland(i, whatsDown(i), "down");
            missingC = 0;
            missingC = countMissingBridgesOfIsland(idC);
            if (idC >= 0 && missingC == 1) {
              if (!arra[i - wymiar] && board[i - wymiar] != "h")
                arra[i - wymiar] = "i";
              break;
            }
          }
        }

        //UD
        if (
          (/^[h]+[K-R]/.test(whatsUp(i)) && //  TICKED island connected 2 bridges to ME
            /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) || // CAN NOT GO there
          (/^[h]+[K-R]/.test(whatsDown(i)) && //  TICKED island connected 2 bridges to ME
            /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))) || // CAN NOT GO there
          (/^i+[K-Q]/.test(whatsUp(i)) && // TICKED island connected 1 bridge to ME
            /^i+[K-Q]/.test(whatsDown(i))) // TICKED island connected 1 bridge to ME
        ) {
          if (countBridgesOfIsland(i) == 2) {
            idC = -1;
            idC = findIdOfClosestNotTickedIsland(i, whatsLeft(i), "left");
            missingC = 0;
            missingC = countMissingBridgesOfIsland(idC);
            if (idC >= 0 && missingC == 1) {
              if (!arra[i + 1] && board[i + 1] != "f") arra[i + 1] = "t";
              break;
            }
            idC = -1;
            idC = findIdOfClosestNotTickedIsland(i, whatsRight(i), "right");
            missingC = 0;
            missingC = countMissingBridgesOfIsland(idC);
            if (idC >= 0 && missingC == 1) {
              if (!arra[i - 1] && board[i - 1] != "f") arra[i - 1] = "t";
              break;
            }
          }
        }

        // if 1. side is TICKED with 1 bridge /^[t]+[K-Q]+/ - 1 bridge connected with K-Q
        // and 2. side is TICKED with 1 bridge /^[t]+[K-Q]+/ - 1 bridge connected with K-Q
        // and 3. side can not be accessed -    /^[Ehi]*[hiK-R]+[1-8]*|^E*$/  - this way CAN NOT GO
        // so side  4 will have got 2 bridges
        //
        // UD

        if (
          /^[i]+[K-Q]+/.test(whatsDown(i)) &&
          /^[i]+[K-Q]+/.test(whatsUp(i))
        ) {
          if (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))) {
            //CAN NOT GO
            arra[i + 1] = "f";
            arra[i] = "N";
            break;
          }
          if (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
            arra[i - 1] = "f";
            arra[i] = "N";
            break;
          }
        }
        // LR
        if (
          /^[t]+[K-Q]+/.test(whatsLeft(i)) &&
          /^[t]+[K-Q]+/.test(whatsRight(i))
        ) {
          if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) {
            arra[i - wymiar] = "h";
            arra[i] = "N";
            break;
          }
          if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))) {
            arra[i + wymiar] = "h";
            arra[i] = "N";
            break;
          }
        }
        // LU
        if (
          /^[t]+[K-Q]+/.test(whatsLeft(i)) &&
          /^[i]+[K-Q]+/.test(whatsUp(i))
        ) {
          if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) {
            arra[i + 1] = "f";
            arra[i] = "N";
            break;
          }
          if (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
            arra[i + wymiar] = "h";
            arra[i] = "N";
            break;
          }
        }
        // DR
        if (
          /^[t]+[K-Q]+/.test(whatsRight(i)) &&
          /^[i]+[K-Q]+/.test(whatsDown(i))
        ) {
          if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))) {
            arra[i - 1] = "f";
            arra[i] = "N";
            break;
          }

          if (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))) {
            arra[i - wymiar] = "h";
            arra[i] = "N";
            break;
          }
        }
        // DL
        if (
          /^[t]+[K-Q]+/.test(whatsLeft(i)) &&
          /^[i]+[K-Q]+/.test(whatsDown(i))
        ) {
          if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))) {
            arra[i + 1] = "f";
            arra[i] = "N";
            break;
          }
          if (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
            arra[i - wymiar] = "h";
            arra[i] = "N";
            break;
          }
        }
        // UR
        if (
          /^[t]+[K-Q]+/.test(whatsRight(i)) &&
          /^[i]+[K-Q]+/.test(whatsUp(i))
        ) {
          if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) {
            arra[i - 1] = "f";
            arra[i] = "N";
            break;
          }
          if (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))) {
            arra[i + wymiar] = "h";
            arra[i] = "N";
            break;
          }
        }

        // if 1. side is TICKED with 1 bridge /^[t]+[K-Q]+/ - 1 bridge connected with K-Q
        // or 1. side is NOT CONNECTED and has onsly 1 bridge missing
        // and 2. side can not be accessed -    /^[Ehi]*[hiK-R]+[1-8]*|^E*$/  - this way CAN NOT GO
        // so side 3 and 4 will have got at least 1 bridge
        //- /^[Eft]+[1-8]+|^[ft]+[K-R]+/ - side with bridge K-R to actual island or ready to connect 1-8

        //       /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/
        // - on edge or EmptEE or "EE I II " or TICKED island with at least 1 bridge to actual island
        // LR

        if (
          ((/^[t]+[K-Q]+/.test(whatsLeft(i)) || // 1 bridge and TICKED
            (/^E+[1-8]/.test(whatsLeft(i)) && // EMPTY with NOT TICKED
              countMissingBridgesOfIsland(
                findIdOfClosestNotTickedIsland(i, whatsLeft(i), "left")
              ) == 1)) && //MISSING 1 bridge
            /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) || // CAN NOT GO
          ((/^[t]+[K-Q]+/.test(whatsRight(i)) ||
            (/^E+[1-8]/.test(whatsRight(i)) &&
              countMissingBridgesOfIsland(
                findIdOfClosestNotTickedIsland(i, whatsRight(i), "right")
              ) == 1)) &&
            /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)))
        ) {
          if (board[i + wymiar] != "h" && !arra[i + wymiar])
            arra[i + wymiar] = "i";
          if (board[i - wymiar] != "h" && !arra[i - wymiar])
            arra[i - wymiar] = "i";
        } //UD
        if (
          ((/^[i]+[K-Q]+/.test(whatsUp(i)) ||
            (/^E+[1-8]/.test(whatsUp(i)) &&
              countMissingBridgesOfIsland(
                findIdOfClosestNotTickedIsland(i, whatsUp(i), "up")
              ) == 1)) &&
            /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) ||
          ((/^[i]+[K-Q]+/.test(whatsDown(i)) ||
            (/^E+[1-8]/.test(whatsDown(i)) &&
              countMissingBridgesOfIsland(
                findIdOfClosestNotTickedIsland(i, whatsDown(i), "down")
              ) == 1)) &&
            /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)))
        ) {
          if (board[i + 1] != "f" && !arra[i + 1]) arra[i + 1] = "t";
          if (board[i - 1] != "f" && !arra[i - 1]) arra[i - 1] = "t";
        } //LD

        if (
          ((/^[t]+[K-Q]+/.test(whatsLeft(i)) ||
            (/^E+[1-8]/.test(whatsLeft(i)) &&
              countMissingBridgesOfIsland(
                findIdOfClosestNotTickedIsland(i, whatsLeft(i), "left")
              ) == 1)) &&
            /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) ||
          (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) &&
            (/^[i]+[K-Q]+/.test(whatsDown(i)) ||
              (/^E+[1-8]/.test(whatsDown(i)) &&
                countMissingBridgesOfIsland(
                  findIdOfClosestNotTickedIsland(i, whatsDown(i), "down")
                ) == 1)))
        ) {
          if (board[i + 1] != "f" && !arra[i + 1]) arra[i + 1] = "t";
          if (board[i - wymiar] != "h" && !arra[i - wymiar])
            arra[i - wymiar] = "i";
        } //DR

        if (
          ((/^[i]+[K-Q]+/.test(whatsDown(i)) ||
            (/^E+[1-8]/.test(whatsDown(i)) &&
              countMissingBridgesOfIsland(
                findIdOfClosestNotTickedIsland(i, whatsDown(i), "down")
              ) == 1)) &&
            /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) ||
          (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) &&
            (/^[t]+[K-Q]+/.test(whatsRight(i)) ||
              (/^E+[1-8]/.test(whatsRight(i)) &&
                countMissingBridgesOfIsland(
                  findIdOfClosestNotTickedIsland(i, whatsRight(i), "right")
                ) == 1)))
        ) {
          if (board[i - 1] != "f" && !arra[i - 1]) arra[i - 1] = "t";
          if (board[i - wymiar] != "h" && !arra[i - wymiar])
            arra[i - wymiar] = "i";
        } //RU
        if (
          ((/^[i]+[K-Q]+/.test(whatsUp(i)) ||
            (/^E+[1-8]/.test(whatsUp(i)) &&
              countMissingBridgesOfIsland(
                findIdOfClosestNotTickedIsland(i, whatsUp(i), "up")
              ) == 1)) &&
            /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) ||
          (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) &&
            (/^[t]+[K-Q]+/.test(whatsRight(i)) ||
              (/^E+[1-8]/.test(whatsRight(i)) &&
                countMissingBridgesOfIsland(
                  findIdOfClosestNotTickedIsland(i, whatsRight(i), "right")
                ) == 1)))
        ) {
          if (board[i - 1] != "f" && !arra[i - 1]) arra[i - 1] = "t";
          if (board[i + wymiar] != "h" && !arra[i + wymiar])
            arra[i + wymiar] = "i";
        } //LU
        if (
          ((/^[t]+[K-Q]+/.test(whatsLeft(i)) ||
            (/^E+[1-8]/.test(whatsLeft(i)) &&
              countMissingBridgesOfIsland(
                findIdOfClosestNotTickedIsland(i, whatsLeft(i), "left")
              ) == 1)) &&
            /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))) ||
          (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) &&
            (/^[i]+[K-Q]+/.test(whatsUp(i)) ||
              (/^E+[1-8]/.test(whatsUp(i)) &&
                countMissingBridgesOfIsland(
                  findIdOfClosestNotTickedIsland(i, whatsUp(i), "up")
                ) == 1)))
        ) {
          if (board[i + 1] != "f" && !arra[i + 1]) arra[i + 1] = "t";
          if (board[i + wymiar] != "h" && !arra[i + wymiar])
            arra[i + wymiar] = "i";
        }
        //        /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/
        // - on edge or EmptEE or "EE I II " or TICKED island with at least 1 bridge to actual island

        if (
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) &&
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i)) &&
          board[i + 1] == "E" &&
          countBridgesOfIsland(i) == 3
        ) {
          if (board[i + 1] != "f" && !arra[i + 1]) {
            arra[i + 1] = "t";
            arra[i] = "N";

            break;
          }
        } else if (
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) &&
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i)) &&
          board[i + 1] == "t" &&
          countBridgesOfIsland(i) == 3
        ) {
          arra[i + 1] = "f";
          arra[i] = "N";
          break;
        } else if (
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) &&
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i)) &&
          board[i + 1] == "E" &&
          countBridgesOfIsland(i) == 2
        ) {
          arra[i + 1] = "f";
          board[i + 1] = "f";

          arra[i] = "N";
          break;
        } else if (
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) &&
          board[i - wymiar] == "E" &&
          countBridgesOfIsland(i) == 3
        ) {
          if (board[i - wymiar] != "h" && !arra[i - wymiar]) {
            arra[i - wymiar] = "i";
            arra[i] = "N";
            break;
          }
        } else if (
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) &&
          board[i - wymiar] == "i" &&
          countBridgesOfIsland(i) == 3
        ) {
          arra[i - wymiar] = "h";
          arra[i] = "N";
          break;
        } else if (
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) &&
          board[i - wymiar] == "E" &&
          countBridgesOfIsland(i) == 2
        ) {
          arra[i - wymiar] = "h";
          arra[i] = "N";
          break;
        } else if (
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) &&
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i)) &&
          board[i - 1] == "E" &&
          countBridgesOfIsland(i) == 3
        ) {
          if (board[i - 1] != "f" && !arra[i - 1]) {
            arra[i - 1] = "t";
            arra[i] = "N";
            break;
          }
        } else if (
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) &&
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i)) &&
          board[i - 1] == "t" &&
          countBridgesOfIsland(i) == 3
        ) {
          arra[i - 1] = "f";
          arra[i] = "N";
          break;
        } else if (
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) &&
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i)) &&
          board[i - 1] == "E" &&
          countBridgesOfIsland(i) == 2
        ) {
          arra[i - 1] = "f";
          arra[i] = "N";
          break;
        } else if (
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) &&
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i)) &&
          board[i + wymiar] == "E" &&
          countBridgesOfIsland(i) == 3
        ) {
          if (board[i + wymiar] != "h" && !arra[i + wymiar]) {
            arra[i + wymiar] = "i";
            arra[i] = "N";
            break;
          }
        } else if (
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) &&
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i)) &&
          board[i + wymiar] == "i" &&
          countBridgesOfIsland(i) == 3
        ) {
          arra[i + wymiar] = "h";
          arra[i] = "N";
          break;
        } else if (
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) &&
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i)) &&
          board[i + wymiar] == "E" &&
          countBridgesOfIsland(i) == 2
        ) {
          arra[i + wymiar] = "h";
          arra[i] = "N";
          break;
        }
        // other method
        else if (whatsUp(i) == "" && whatsLeft(i) == "") {
          //left up corner
          arra[i + 1] = "f";
          arra[i + wymiar] = "h";
          arra[i] = "N";
          break;
        } else if (whatsUp(i) == "" && whatsRight(i) == "") {
          //righ up corner
          arra[i - 1] = "f";
          arra[i + wymiar] = "h";
          arra[i] = "N";
          break;
        } else if (whatsDown(i) == "" && whatsLeft(i) == "") {
          //left down corner
          arra[i + 1] = "f";
          arra[i - wymiar] = "h";
          arra[i] = "N";
          break;
        } else if (whatsUp(i) == "" && whatsLeft(i) == "") {
          //right down corner
          arra[i - 1] = "f";
          arra[i - wymiar] = "h";
          arra[i] = "N";
          break;
        } // left and up side are taken by K-R or Empty or I II --
        else if (
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))
        ) {
          arra[i + 1] = "f";
          arra[i + wymiar] = "h";
          arra[i] = "N";
          break;
        } else if (
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))
        ) {
          arra[i - 1] = "f";
          arra[i + wymiar] = "h";
          arra[i] = "N";
          break;
        } else if (
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))
        ) {
          arra[i + 1] = "f";
          arra[i - wymiar] = "h";
          arra[i] = "N";
          break;
        } else if (
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))
        ) {
          arra[i - 1] = "f";
          arra[i - wymiar] = "h";
          arra[i] = "N";
          break;
        } // left and right taken
        else if (
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))
        ) {
          arra[i + wymiar] = "h";
          arra[i - wymiar] = "h";
          arra[i] = "N";
          break;
        } // down and up
        else if (
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))
        ) {
          arra[i + 1] = "f";
          arra[i - 1] = "f";
          arra[i] = "N";
          break;
        }
        break;
      case "3":
        // 2=3 and 1 without bridge  // if 3 is connected to TICKED 2 (L) island
        //           and 2. side CAN NOT GO and 3. side is island 1  so CAN NOT connect to 1 so 1 bridge to 4. side
        //LR
        if (
          (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && // CAN NOT GO THERE
            /^f+L/.test(whatsRight(i))) || // TICKED island 2(L) connect with 2 bridges to ME
          (/^f+L/.test(whatsLeft(i)) && // /
            /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i)))
        ) {
          if (/^E+1/.test(whatsUp(i))) {
            //  ISLAND 1  without bridge then connect to other island 1 bridge
            arra[i + wymiar] = "i";
            arra[i] = "M";
            break;
          } else if (/^E+1/.test(whatsDown(i))) {
            arra[i - wymiar] = "i";
            arra[i] = "M";
            break;
          }
        } //UD
        else if (
          (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && // CAN NOT GO THERE
            /^h+L/.test(whatsDown(i))) || // TICKED island 2(L) connect with 2 bridges to ME
          (/^h+L/.test(whatsUp(i)) && // /
            /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)))
        ) {
          if (/^E+1/.test(whatsLeft(i))) {
            //  ISLAND 1  without bridge then connect to other island 1 bridge
            arra[i + 1] = "t";
            arra[i] = "M";
            break;
          } else if (/^E+1/.test(whatsRight(i))) {
            arra[i - 1] = "t";
            arra[i] = "M";
            break;
          }
        }
        //LD
        else if (
          (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && // CAN NOT GO THERE
            /^h+L/.test(whatsDown(i))) || // TICKED island 2(L) connect with 2 bridges to ME
          (/^f+L/.test(whatsLeft(i)) && // /
            /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)))
        ) {
          if (/^E+1/.test(whatsRight(i))) {
            //  ISLAND 1  without bridge then connect to other island 1 bridge
            arra[i - wymiar] = "i";
            arra[i] = "M";
            break;
          } else if (/^E+1/.test(whatsUp(i))) {
            arra[i + 1] = "t";
            arra[i] = "M";
            break;
          }
        }
        //LU
        else if (
          (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && // CAN NOT GO THERE
            /^h+L/.test(whatsUp(i))) || // TICKED island 2(L) connect with 2 bridges to ME
          (/^f+L/.test(whatsLeft(i)) && // /
            /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)))
        ) {
          if (/^E+1/.test(whatsRight(i))) {
            //  ISLAND 1  without bridge then connect to other island 1 bridge
            arra[i + wymiar] = "i";
            arra[i] = "M";
            break;
          } else if (/^E+1/.test(whatsDown(i))) {
            arra[i + 1] = "t";
            arra[i] = "M";
            break;
          }
        }

        //RU
        else if (
          (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i)) && // CAN NOT GO THERE
            /^h+L/.test(whatsUp(i))) || // TICKED island 2(L) connect with 2 bridges to ME
          (/^f+L/.test(whatsRight(i)) && // /
            /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)))
        ) {
          if (/^E+1/.test(whatsLeft(i))) {
            //  ISLAND 1  without bridge then connect to other island 1 bridge
            arra[i + wymiar] = "i";
            arra[i] = "M";
            break;
          } else if (/^E+1/.test(whatsDown(i))) {
            arra[i - 1] = "t";
            arra[i] = "M";
            break;
          }
        }
        //RD
        else if (
          (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i)) && // CAN NOT GO THERE
            /^h+L/.test(whatsDown(i))) || // TICKED island 2(L) connect with 2 bridges to ME
          (/^f+L/.test(whatsRight(i)) && // /
            /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)))
        ) {
          if (/^E+1/.test(whatsLeft(i))) {
            //  ISLAND 1  without bridge then connect to other island 1 bridge
            arra[i - wymiar] = "i";
            arra[i] = "M";
            break;
          } else if (/^E+1/.test(whatsUp(i))) {
            arra[i - 1] = "t";
            arra[i] = "M";
            break;
          }
        }
        // 1-3--2  or 1-2-3--2// if that TICKED ONE is with 1 or 2(L) connected to 1(K) and one of 2 ways is 2, so there can be only 1 bridge between 2 and 3        //
        //if there is a '3' island with 1 bridge to TICKED island and and with 2 ways to go, check if 1 of them have only 1 missing bridge, so the other one will have at least 1 bridge

        // /^[Ehi]*[hiK-R]+[1-8]*|^E*$/ - if left or right then CAN NO  GO  = CAN NOT BRIDGE BE THERE
        // /^[E]+[1-8]/ - up or down THERE IS with no BRIDGES to actual so can go there

        //LR
        if (
          (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && // CAN NOT GO THERE
            /^t+Lt+K|^t*K/.test(whatsRight(i))) || // TICKED island 1(K) or -2-1 (-L-K) connected with 1 bridge to ME
          (/^t+Lt+K|^t*K/.test(whatsLeft(i)) && // / TICKED island 1(K) or -2-1 (-L-K) connected with 1 bridge to ME
            /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) // CAN NOT GO THERE
        ) {
          if (/^[Ei]*[2]/.test(whatsUp(i))) {
            // if UP is ISLAND 2 with or without bridge then connect to other island 1 bridge
            if (!arra[i + wymiar] && board[i + wymiar] != "h")
              arra[i + wymiar] = "i";
          }
          if (/^[Ei]*[2]/.test(whatsDown(i))) {
            // if DOWN is ISLAND 2 with or without bridge then connect to other island 1 bridge
            if (!arra[i - wymiar] && board[i - wymiar] != "h")
              arra[i - wymiar] = "i";
          }
        }
        //UD
        if (
          (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && // CAN NOT GO THERE
            /^i+Li+K|^i*K/.test(whatsDown(i))) || // TICKED island 1(K) or -2-1 (-L-K) connected with 1 bridge to ME
          (/^i+Li+K|^i*K/.test(whatsUp(i)) && // / TTICKED island 1(K) or -2-1 (-L-K) connected with 1 bridge to ME
            /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) // CAN NOT GO THERE
        ) {
          if (/^[Et]*[2]/.test(whatsLeft(i))) {
            // if is ISLAND 2 with or without bridge then connect to other island 1 bridge
            if (!arra[i + 1] && board[i + 1] != "f") arra[i + 1] = "t";
          }
          if (/^[Et]*[2]/.test(whatsRight(i))) {
            // if is ISLAND 2 with or without bridge then connect to other island 1 bridge
            if (!arra[i - 1] && board[i - 1] != "f") arra[i - 1] = "t";
          }
        }
        //UL
        if (
          (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && // CAN NOT GO THERE
            /^i+Li+K|^i*K/.test(whatsUp(i))) || // TTICKED island 1(K) or -2-1 (-L-K) connected with 1 bridge to ME
          (/^t+Lt+K|^t*K/.test(whatsLeft(i)) && // / TTICKED island 1(K) or -2-1 (-L-K) connected with 1 bridge to ME
            /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))) // CAN NOT GO THERE
        ) {
          if (/^[Ei]*[2]/.test(whatsDown(i))) {
            // if is ISLAND 2 with or without bridge then connect to other island 1 bridge
            if (!arra[i + 1] && board[i + 1] != "f") arra[i + 1] = "t";
          }
          if (/^[Et]*[2]/.test(whatsRight(i))) {
            // if is ISLAND 2 with or without bridge then connect to other island 1 bridge
            if (!arra[i + wymiar] && board[i + wymiar] != "h")
              arra[i + wymiar] = "i";
          }
        }
        //UR
        if (
          (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && // CAN NOT GO THERE
            /^t+Lt+K|^t*K/.test(whatsRight(i))) || // TTICKED island 1(K) or -2-1 (-L-K) connected with 1 bridge to ME
          (/^i+Li+K|^i*K/.test(whatsUp(i)) && // / TTICKED island 1(K) or -2-1 (-L-K) connected with 1 bridge to ME
            /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) // CAN NOT GO THERE
        ) {
          if (/^[Ei]*[2]/.test(whatsDown(i))) {
            // if is ISLAND 2 with or without bridge then connect to other island 1 bridge
            if (!arra[i - 1] && board[i - 1] != "f") arra[i - 1] = "t";
          }
          if (/^[Et]*[2]/.test(whatsLeft(i))) {
            // if is ISLAND 2 with or without bridge then connect to other island 1 bridge
            if (!arra[i + wymiar] && board[i + wymiar] != "h")
              arra[i + wymiar] = "i";
          }
        }
        //DR
        if (
          (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) && // CAN NOT GO THERE
            /^t+Lt+K|^t*K/.test(whatsRight(i))) || // TTICKED island 1(K) or -2-1 (-L-K) connected with 1 bridge to ME
          (/^i+Li+K|^i*K/.test(whatsDown(i)) && // / TTICKED island 1(K) or -2-1 (-L-K) connected with 1 bridge to ME
            /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) // CAN NOT GO THERE
        ) {
          if (/^[Ei]*[2]/.test(whatsUp(i))) {
            // if is ISLAND 2 with or without bridge then connect to other island 1 bridge
            if (!arra[i - 1] && board[i - 1] != "f") arra[i - 1] = "t";
          }
          if (/^[Et]*[2]/.test(whatsLeft(i))) {
            // if is ISLAND 2 with or without bridge then connect to other island 1 bridge
            if (!arra[i - wymiar] && board[i - wymiar] != "h")
              arra[i - wymiar] = "i";
          }
        }
        //DL
        if (
          (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && // CAN NOT GO THERE
            /^i+Li+K|^i*K/.test(whatsDown(i))) || // TTICKED island 1(K) or -2-1 (-L-K) connected with 1 bridge to ME
          (/^t+Lt+K|^t*K/.test(whatsLeft(i)) && // / TTICKED island 1(K) or -2-1 (-L-K) connected with 1 bridge to ME
            /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) // CAN NOT GO THERE
        ) {
          if (/^[Ei]*[2]/.test(whatsUp(i))) {
            // if is ISLAND 2 with or without bridge then connect to other island 1 bridge
            if (!arra[i + 1] && board[i + 1] != "f") arra[i + 1] = "t";
          }
          if (/^[Et]*[2]/.test(whatsRight(i))) {
            // if is ISLAND 2 with or without bridge then connect to other island 1 bridge
            if (!arra[i - wymiar] && board[i - wymiar] != "h")
              arra[i - wymiar] = "i";
          }
        }

        //if there is a '3' island with 1 bridge to TICKED island and and with 2 ways to go, check if 1 of them have only 1 missing bridge, so the other one will have at least 1 bridge

        // /^[Ehi]*[hiK-R]+[1-8]*|^E*$/ - if left or right then CAN NO  GO  = CAN NOT BRIDGE BE THERE
        // /^[E]+[1-8]/ - up or down THERE IS with no BRIDGES to actual so can go there

        //LR
        if (
          (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && // CAN NOT GO THERE
            /^[t]+[K-R]/.test(whatsRight(i)) && // TICKED island connected with 1 bridge to ME
            /^[E]+[1-8]/.test(whatsUp(i)) && // CAN GO
            /^[E]+[1-8]/.test(whatsDown(i))) || // CAN GO
          (/^[t]+[K-R]/.test(whatsLeft(i)) && // / TICKED island connected with 1 bridge to ME
            /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i)) && // CAN NOT GO THERE
            /^[E]+[1-8]/.test(whatsUp(i)) && // CAN GO
            /^[E]+[1-8]/.test(whatsDown(i))) // CAN GO
        ) {
          idC = -1;
          idC = findIdOfClosestNotTickedIsland(i, whatsUp(i), "up");
          missingC = 0;
          missingC = countMissingBridgesOfIsland(idC);
          if (idC >= 0 && missingC == 1) {
            arra[i + wymiar] = "i";
            break;
          }
          idC = -1;
          idC = findIdOfClosestNotTickedIsland(i, whatsDown(i), "down");
          missingC = 0;
          missingC = countMissingBridgesOfIsland(idC);
          if (idC >= 0 && missingC == 1) {
            arra[i - wymiar] = "i";
            break;
          }
        }
        //UD
        if (
          (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && // CAN NOT GO THERE
            /^[i]+[K-R]/.test(whatsDown(i)) && // TICKED island connected with 1 bridge to ME
            /^[E]+[1-8]/.test(whatsLeft(i)) && // CAN GO
            /^[E]+[1-8]/.test(whatsRight(i))) || // CAN GO
          (/^[i]+[K-R]/.test(whatsUp(i)) && // / TICKED island connected with 1 bridge to ME
            /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) && // CAN NOT GO THERE
            /^[E]+[1-8]/.test(whatsLeft(i)) && // CAN GO
            /^[E]+[1-8]/.test(whatsRight(i))) // CAN GO
        ) {
          idC = -1;
          idC = findIdOfClosestNotTickedIsland(i, whatsLeft(i), "left");
          missingC = 0;
          missingC = countMissingBridgesOfIsland(idC);
          if (idC >= 0 && missingC == 1) {
            arra[i + 1] = "t";
            break;
          }
          idC = -1;
          idC = findIdOfClosestNotTickedIsland(i, whatsRight(i), "right");
          missingC = 0;
          missingC = countMissingBridgesOfIsland(idC);
          if (idC >= 0 && missingC == 1) {
            arra[i - 1] = "t";
            break;
          }
        }
        //UL
        if (
          (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && // CAN NOT GO THERE
            /^[i]+[K-R]/.test(whatsUp(i)) && // TICKED island connected with 1 bridge to ME
            /^[E]+[1-8]/.test(whatsRight(i)) && // CAN GO
            /^[E]+[1-8]/.test(whatsDown(i))) || // CAN GO
          (/^[t]+[K-R]/.test(whatsLeft(i)) && // / TICKED island connected with 1 bridge to ME
            /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && // CAN NOT GO THERE
            /^[E]+[1-8]/.test(whatsRight(i)) && // CAN GO
            /^[E]+[1-8]/.test(whatsDown(i))) // CAN GO
        ) {
          idC = -1;
          idC = findIdOfClosestNotTickedIsland(i, whatsDown(i), "down");
          missingC = 0;
          missingC = countMissingBridgesOfIsland(idC);
          if (idC >= 0 && missingC == 1) {
            arra[i + 1] = "t";
            break;
          }
          idC = -1;
          idC = findIdOfClosestNotTickedIsland(i, whatsRight(i), "right");
          missingC = 0;
          missingC = countMissingBridgesOfIsland(idC);
          if (idC >= 0 && missingC == 1) {
            arra[i + wymiar] = "i";
            break;
          }
        }
        //UR
        if (
          (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && // CAN NOT GO THERE
            /^[t]+[K-R]/.test(whatsRight(i)) && // TICKED island connected with 1 bridge to ME
            /^[E]+[1-8]/.test(whatsLeft(i)) && // CAN GO
            /^[E]+[1-8]/.test(whatsDown(i))) || // CAN GO
          (/^[i]+[K-R]/.test(whatsUp(i)) && // / TICKED island connected with 1 bridge to ME
            /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i)) && // CAN NOT GO THERE
            /^[E]+[1-8]/.test(whatsLeft(i)) && // CAN GO
            /^[E]+[1-8]/.test(whatsDown(i))) // CAN GO
        ) {
          idC = -1;
          idC = findIdOfClosestNotTickedIsland(i, whatsDown(i), "down");
          missingC = 0;
          missingC = countMissingBridgesOfIsland(idC);
          if (idC >= 0 && missingC == 1) {
            arra[i - 1] = "t";
            break;
          }
          idC = -1;
          idC = findIdOfClosestNotTickedIsland(i, whatsLeft(i), "left");
          missingC = 0;
          missingC = countMissingBridgesOfIsland(idC);
          if (idC >= 0 && missingC == 1) {
            arra[i + wymiar] = "i";
            break;
          }
        }
        //DR
        if (
          (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) && // CAN NOT GO THERE
            /^[t]+[K-R]/.test(whatsRight(i)) && // TICKED island connected with 1 bridge to ME
            /^[E]+[1-8]/.test(whatsUp(i)) && // CAN GO
            /^[E]+[1-8]/.test(whatsLeft(i))) || // CAN GO
          (/^[i]+[K-R]/.test(whatsDown(i)) && // / TICKED island connected with 1 bridge to ME
            /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i)) && // CAN NOT GO THERE
            /^[E]+[1-8]/.test(whatsUp(i)) && // CAN GO
            /^[E]+[1-8]/.test(whatsLeft(i))) // CAN GO
        ) {
          idC = -1;
          idC = findIdOfClosestNotTickedIsland(i, whatsUp(i), "up");
          missingC = 0;
          missingC = countMissingBridgesOfIsland(idC);
          if (idC >= 0 && missingC == 1) {
            arra[i - 1] = "t";
            break;
          }
          idC = -1;
          idC = findIdOfClosestNotTickedIsland(i, whatsLeft(i), "left");
          missingC = 0;
          missingC = countMissingBridgesOfIsland(idC);
          if (idC >= 0 && missingC == 1) {
            arra[i - wymiar] = "i";
            break;
          }
        }
        //DL
        if (
          (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && // CAN NOT GO THERE
            /^[i]+[K-R]/.test(whatsDown(i)) && // TICKED island connected with 1 bridge to ME
            /^[E]+[1-8]/.test(whatsUp(i)) && // CAN GO
            /^[E]+[1-8]/.test(whatsRight(i))) || // CAN GO
          (/^[t]+[K-R]/.test(whatsLeft(i)) && // / TICKED island connected with 1 bridge to ME
            /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) && // CAN NOT GO THERE
            /^[E]+[1-8]/.test(whatsUp(i)) && // CAN GO
            /^[E]+[1-8]/.test(whatsRight(i))) // CAN GO
        ) {
          idC = -1;
          idC = findIdOfClosestNotTickedIsland(i, whatsUp(i), "up");
          missingC = 0;
          missingC = countMissingBridgesOfIsland(idC);
          if (idC >= 0 && missingC == 1) {
            arra[i + 1] = "t";
            break;
          }
          idC = -1;
          idC = findIdOfClosestNotTickedIsland(i, whatsRight(i), "right");
          missingC = 0;
          missingC = countMissingBridgesOfIsland(idC);
          if (idC >= 0 && missingC == 1) {
            arra[i - wymiar] = "i";
            break;
          }
        }
        // the same as with '5' case
        //       /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/  - there is only 1 way left .
        // - on edge or EmptEE or "EE I II " or TICKED island with at least 1 bridge to actual island
        if (
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) &&
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i))
        ) {
          if (board[i + 1] == "E" && countBridgesOfIsland(i) == 2) {
            arra[i + 1] = "t";
            arra[i] = "M";
            break;
          }
          if (board[i + 1] == "E" && countBridgesOfIsland(i) == 1) {
            arra[i + 1] = "f";
            arra[i] = "M";
            break;
          }
          if (board[i + 1] == "t" && countBridgesOfIsland(i) == 2) {
            arra[i + 1] = "f";
            arra[i] = "M";
            break;
          }
        } else if (
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i))
        ) {
          if (board[i - wymiar] == "E" && countBridgesOfIsland(i) == 2) {
            arra[i - wymiar] = "i";
            arra[i] = "M";
            break;
          }
          if (board[i - wymiar] == "E" && countBridgesOfIsland(i) == 1) {
            arra[i - wymiar] = "h";
            arra[i] = "M";
            break;
          }
          if (board[i - wymiar] == "i" && countBridgesOfIsland(i) == 2) {
            arra[i - wymiar] = "h";
            arra[i] = "M";
            break;
          }
        } else if (
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) &&
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i))
        ) {
          if ((board[i - 1] == "E") & (countBridgesOfIsland(i) == 2)) {
            arra[i - 1] = "t";
            arra[i] = "M";
            break;
          }
          if (board[i - 1] == "E" && countBridgesOfIsland(i) == 1) {
            arra[i - 1] = "f";
            arra[i] = "M";
            break;
          }
          if (board[i - 1] == "t" && countBridgesOfIsland(i) == 2) {
            arra[i - 1] = "f";
            arra[i] = "M";
            break;
          }
        } else if (
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) &&
          /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) &&
          /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i))
        ) {
          if (board[i + wymiar] == "E" && countBridgesOfIsland(i) == 2) {
            arra[i + wymiar] = "i";
            arra[i] = "M";
            break;
          }
          if (board[i + wymiar] == "E" && countBridgesOfIsland(i) == 1) {
            arra[i + wymiar] = "h";
            arra[i] = "M";
            break;
          }
          if (board[i + wymiar] == "i" && countBridgesOfIsland(i) == 2) {
            arra[i + wymiar] = "h";
            arra[i] = "M";
            break;
          }
        } // other
        else if (whatsUp(i) == "" && whatsLeft(i) == "") {
          //left up corner
          if (board[i + 1] != "f" && !arra[i + 1]) arra[i + 1] = "t";
          if (board[i + wymiar] != "h" && !arra[i + wymiar])
            arra[i + wymiar] = "i";
        }
        if (whatsUp(i) == "" && whatsRight(i) == "") {
          //righ up corner
          if (board[i - 1] != "f" && !arra[i - 1]) arra[i - 1] = "t";
          if (board[i + wymiar] != "h" && !arra[i + wymiar])
            arra[i + wymiar] = "i";
        }
        if (whatsDown(i) == "" && whatsLeft(i) == "") {
          //left down corner
          if (board[i + 1] != "f" && !arra[i + 1]) arra[i + 1] = "t";
          if (board[i - wymiar] != "h" && !arra[i - wymiar])
            arra[i - wymiar] = "i";
        }
        if (whatsUp(i) == "" && whatsLeft(i) == "") {
          //right down corner
          if (board[i - 1] != "f" && !arra[i - 1]) arra[i - 1] = "t";
          if (board[i - wymiar] != "h" && !arra[i - wymiar])
            arra[i - wymiar] = "i";
        } // left and up side are taken by K-R or Empty or I II --

        if (
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))
        ) {
          if (board[i + 1] != "f" && !arra[i + 1]) arra[i + 1] = "t";
          if (board[i + wymiar] != "h" && !arra[i + wymiar])
            arra[i + wymiar] = "i";
        }
        if (
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))
        ) {
          if (board[i - 1] != "f" && !arra[i - 1]) arra[i - 1] = "t";
          if (board[i + wymiar] != "h" && !arra[i + wymiar])
            arra[i + wymiar] = "i";
        }
        if (
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))
        ) {
          if (board[i + 1] != "f" && !arra[i + 1]) arra[i + 1] = "t";
          if (board[i - wymiar] != "h" && !arra[i - wymiar])
            arra[i - wymiar] = "i";
        }
        if (
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))
        ) {
          if (board[i - 1] != "f" && !arra[i - 1]) arra[i - 1] = "t";
          if (board[i - wymiar] != "h" && !arra[i - wymiar])
            arra[i - wymiar] = "i";
        } // left and right taken

        if (
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))
        ) {
          if (board[i + wymiar] != "h" && !arra[i + wymiar])
            arra[i + wymiar] = "i";
          if (board[i - wymiar] != "h" && !arra[i - wymiar])
            arra[i - wymiar] = "i";
        } // down and up

        if (
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))
        ) {
          if (board[i + 1] != "f" && !arra[i + 1]) arra[i + 1] = "t";
          if (board[i - 1] != "f" && !arra[i - 1]) arra[i - 1] = "t";
        } //if 2 sides CAN'T BE  ... and 1 side is TICKED with 1 bridge, so II bridges on other side
        // - TICKED ISLAND  with 1 BRIDGE - /^[t]+[KLMNOPQ]+/.test(whatsRight(i))

        if (
          /^[i]+[KLMNOPQ]+/.test(whatsDown(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))
        ) {
          arra[i + 1] = "f";
          break;
        }

        if (
          /^[t]+[KLMNOPQ]+/.test(whatsRight(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))
        ) {
          arra[i + wymiar] = "h";
          break;
        }

        if (
          /^[i]+[KLMNOPQ]+/.test(whatsDown(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))
        ) {
          arra[i - 1] = "f";
          break;
        }

        if (
          /^[t]+[KLMNOPQ]+/.test(whatsLeft(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))
        ) {
          arra[i + wymiar] = "h";
          break;
        }
        if (
          /^[t]+[KLMNOPQ]+/.test(whatsLeft(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))
        ) {
          arra[i - wymiar] = "h";
          break;
        }
        if (
          /^[i]+[KLMNOPQ]+/.test(whatsUp(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))
        ) {
          arra[i - 1] = "f";
          break;
        }
        if (
          /^[i]+[KLMNOPQ]+/.test(whatsUp(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))
        ) {
          arra[i + 1] = "f";
          break;
        }
        if (
          /^[t]+[KLMNOPQ]+/.test(whatsRight(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))
        ) {
          arra[i - wymiar] = "h";
          break;
        }
        if (
          /^[i]+[KLMNOPQ]+/.test(whatsUp(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))
        ) {
          arra[i + wymiar] = "h";
          break;
        }
        if (
          /^[i]+[KLMNOPQ]+/.test(whatsDown(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))
        ) {
          arra[i - wymiar] = "h";
          break;
        }
        if (
          /^[t]+[KLMNOPQ]+/.test(whatsLeft(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))
        ) {
          arra[i + 1] = "f";
          break;
        }
        if (
          /^[t]+[KLMNOPQ]+/.test(whatsRight(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))
        ) {
          arra[i - 1] = "f";
          break;
        }
        break;
      case "2": //if there is a '2' island with no bridges and with 2 ways to go, check if 1 of them have only 1 missing bridge, so the other one will have at least 1 bridge
        // /^[Ehi]*[hiK-R]+[1-8]*|^E*$/ - if left or right then CAN NO  GO  = CAN NOT BRIDGE BE THERE
        // /^[E]+[1-8]/ - up or down THERE IS with no BRIDGES to actual so can go there

        //LR
        if (
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i)) &&
          /^[E]+[1-8]/.test(whatsUp(i)) &&
          /^[E]+[1-8]/.test(whatsDown(i))
        ) {
          idC = -1;
          idC = findIdOfClosestNotTickedIsland(i, whatsUp(i), "up");
          missingC = 0;
          missingC = countMissingBridgesOfIsland(idC);
          if (idC >= 0 && missingC == 1) {
            if (!arra[i + wymiar] && board[i + wymiar] != "h")
              arra[i + wymiar] = "i";
            break;
          }
          idC = -1;
          idC = findIdOfClosestNotTickedIsland(i, whatsDown(i), "down");
          missingC = 0;
          missingC = countMissingBridgesOfIsland(idC);
          if (idC >= 0 && missingC == 1) {
            if (!arra[i - wymiar] && board[i - wymiar] != "h")
              arra[i - wymiar] = "i";
            break;
          }
        }
        //UD
        if (
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) &&
          /^[E]+[1-8]/.test(whatsLeft(i)) &&
          /^[E]+[1-8]/.test(whatsRight(i))
        ) {
          idC = -1;
          idC = findIdOfClosestNotTickedIsland(i, whatsLeft(i), "left");
          missingC = 0;
          missingC = countMissingBridgesOfIsland(idC);
          if (idC >= 0 && missingC == 1) {
            if (!arra[i + 1] && board[i + 1] != "f") arra[i + 1] = "t";
            break;
          }
          idC = -1;
          idC = findIdOfClosestNotTickedIsland(i, whatsRight(i), "right");
          missingC = 0;
          missingC = countMissingBridgesOfIsland(idC);
          if (idC >= 0 && missingC == 1) {
            if (!arra[i - 1] && board[i - 1] != "f") arra[i - 1] = "t";
            break;
          }
        }
        //UL
        if (
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) &&
          /^[E]+[1-8]/.test(whatsDown(i)) &&
          /^[E]+[1-8]/.test(whatsRight(i))
        ) {
          idC = -1;
          idC = findIdOfClosestNotTickedIsland(i, whatsDown(i), "down");
          missingC = 0;
          missingC = countMissingBridgesOfIsland(idC);
          if (idC >= 0 && missingC == 1) {
            if (!arra[i + 1] && board[i + 1] != "f") arra[i + 1] = "t";
            break;
          }
          idC = -1;
          idC = findIdOfClosestNotTickedIsland(i, whatsRight(i), "right");
          missingC = 0;
          missingC = countMissingBridgesOfIsland(idC);
          if (idC >= 0 && missingC == 1) {
            if (!arra[i + wymiar] && board[i + wymiar] != "h")
              arra[i + wymiar] = "i";
            break;
          }
        }
        //UR
        if (
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i)) &&
          /^[E]+[1-8]/.test(whatsLeft(i)) &&
          /^[E]+[1-8]/.test(whatsDown(i))
        ) {
          idC = -1;
          idC = findIdOfClosestNotTickedIsland(i, whatsDown(i), "down");
          missingC = 0;
          missingC = countMissingBridgesOfIsland(idC);
          if (idC >= 0 && missingC == 1) {
            if (!arra[i - 1] && board[i - 1] != "f") arra[i - 1] = "t";
            break;
          }
          idC = -1;
          idC = findIdOfClosestNotTickedIsland(i, whatsLeft(i), "left");
          missingC = 0;
          missingC = countMissingBridgesOfIsland(idC);
          if (idC >= 0 && missingC == 1) {
            if (!arra[i + wymiar] && board[i + wymiar] != "h")
              arra[i + wymiar] = "i";
            break;
          }
        }
        //DR
        if (
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i)) &&
          /^[E]+[1-8]/.test(whatsLeft(i)) &&
          /^[E]+[1-8]/.test(whatsUp(i))
        ) {
          idC = -1;
          idC = findIdOfClosestNotTickedIsland(i, whatsUp(i), "up");
          missingC = 0;
          missingC = countMissingBridgesOfIsland(idC);
          if (idC >= 0 && missingC == 1) {
            if (!arra[i - 1] && board[i - 1] != "f") arra[i - 1] = "t";
            break;
          }
          idC = -1;
          idC = findIdOfClosestNotTickedIsland(i, whatsLeft(i), "left");
          missingC = 0;
          missingC = countMissingBridgesOfIsland(idC);
          if (idC >= 0 && missingC == 1) {
            if (!arra[i - wymiar] && board[i - wymiar] != "h")
              arra[i - wymiar] = "i";
            break;
          }
        }
        //DL
        if (
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) &&
          /^[E]+[1-8]/.test(whatsRight(i)) &&
          /^[E]+[1-8]/.test(whatsUp(i))
        ) {
          idC = -1;
          idC = findIdOfClosestNotTickedIsland(i, whatsUp(i), "up");
          missingC = 0;
          missingC = countMissingBridgesOfIsland(idC);
          if (idC >= 0 && missingC == 1) {
            if (!arra[i + 1] && board[i + 1] != "f") arra[i + 1] = "t";
            break;
          }
          idC = -1;
          idC = findIdOfClosestNotTickedIsland(i, whatsRight(i), "right");
          missingC = 0;
          missingC = countMissingBridgesOfIsland(idC);
          if (idC >= 0 && missingC == 1) {
            if (!arra[i - wymiar] && board[i - wymiar] != "h")
              arra[i - wymiar] = "i";
            break;
          }
        }

        if (
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))
        ) {
          arra[i + wymiar] = "h";
          arra[i] = "L";
          break;
        } else if (
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))
        ) {
          arra[i - 1] = "f";
          arra[i] = "L";
          break;
        } else if (
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))
        ) {
          arra[i + 1] = "f";
          arra[i] = "L";
          break;
        } else if (
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))
        ) {
          arra[i - wymiar] = "h";
          arra[i] = "L";
          break;
        } // if 1 or 2 on one left side and nothing on 2 other sides - so on the other side there will be at least 1 bridge

        if (
          /^[Et]*[12KLMNOPQ][2-8]*/.test(whatsLeft(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))
        ) {
          if (board[i + 1] != "f" && !arra[i + 1]) arra[i + 1] = "t";
        }
        if (
          /^[Et]*[12KLMNOPQ][2-8]*/.test(whatsLeft(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))
        ) {
          if (board[i + wymiar] != "h" && !arra[i + wymiar])
            arra[i + wymiar] = "i";
        }
        if (
          /^[Et]*[12KLMNOPQ][2-8]*/.test(whatsLeft(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))
        ) {
          if (board[i - wymiar] != "h" && !arra[i - wymiar])
            arra[i - wymiar] = "i";
        } // 1 on the upside
        if (
          /^[Ei]*[12KLMNOPQ][2-8]*/.test(whatsUp(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))
        ) {
          if (board[i + 1] != "f" && !arra[i + 1]) arra[i + 1] = "t";
        }
        if (
          /^[Ei]*[12KLMNOPQ][2-8]*/.test(whatsUp(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))
        ) {
          if (board[i - 1] != "f" && !arra[i - 1]) arra[i - 1] = "t";
        }
        if (
          /^[Ei]*[12KLMNOPQ][2-8]*/.test(whatsUp(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))
        ) {
          if (board[i + wymiar] != "h" && !arra[i + wymiar])
            arra[i + wymiar] = "i";
        } // 1 on the right
        if (
          /^[Et]*[12KLMNOPQ][2-8]*/.test(whatsRight(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))
        ) {
          if (board[i - 1] != "f" && !arra[i - 1]) arra[i - 1] = "t";
        }
        if (
          /^[Et]*[12KLMNOPQ][2-8]*/.test(whatsRight(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))
        ) {
          if (board[i - wymiar] != "h" && !arra[i - wymiar])
            arra[i - wymiar] = "i";
        }
        if (
          /^[Et]*[12KLMNOPQ][2-8]*/.test(whatsRight(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))
        ) {
          if (board[i + wymiar] != "h" && !arra[i + wymiar])
            arra[i + wymiar] = "i";
        } // 1 on the down
        if (
          /^[Ei]*[12KLMNOPQ][2-8]*/.test(whatsDown(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))
        ) {
          if (board[i - wymiar] != "h" && !arra[i - wymiar])
            arra[i - wymiar] = "i";
        }
        if (
          /^[Ei]*[12KLMNOPQ][2-8]*/.test(whatsDown(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))
        ) {
          if (board[i + 1] != "f" && !arra[i + 1]) arra[i + 1] = "t";
        }
        if (
          /^[Ei]*[12KLMNOPQ][2-8]*/.test(whatsDown(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))
        ) {
          if (board[i - 1] != "f" && !arra[i - 1]) {
            arra[i - 1] = "t";
          }
        }
        break;
      case "1":
        //
        if (
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))
        ) {
          arra[i + wymiar] = "i";
          arra[i] = "K";
          break;
        } else if (
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))
        ) {
          arra[i - 1] = "t";
          arra[i] = "K";
          break;
        } else if (
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))
        ) {
          arra[i + 1] = "t";
          arra[i] = "K";
          break;
        } else if (
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))
        ) {
          arra[i - wymiar] = "i";
          arra[i] = "k";
          break;
        } //       /^[Ehi]*[hiK-R]+[1-8]*|^E*$/  - this way CAN NOT GO
        //  EEE K R  .... I II vertical wall on left
        if (
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))
        ) {
          if (/^[E]+[1]/.test(whatsLeft(i))) {
            arra[i + 1] = "t";
            arra[i] = "K";
            break;
          } else if (/^[E]+[1]/.test(whatsRight(i))) {
            arra[i - 1] = "t";
            arra[i] = "K";
            break;
          }
        } // LR
        if (
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) &&
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))
        ) {
          if (/^[E]+[1]/.test(whatsUp(i))) {
            arra[i + wymiar] = "i";
            arra[i] = "K";
            break;
          } else if (/^[E]+[1]/.test(whatsDown(i))) {
            arra[i - wymiar] = "i";
            arra[i] = "K";
            break;
          }
        } // LU

        if (
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))
        ) {
          if (/^[E]+[1]/.test(whatsRight(i))) {
            arra[i + wymiar] = "i";
            arra[i] = "K";
            break;
          } else if (/^[E]+[1]/.test(whatsDown(i))) {
            arra[i + 1] = "t";
            arra[i] = "K";
            break;
          }
        } // LD
        if (
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))
        ) {
          if (/^[E]+[1]/.test(whatsRight(i))) {
            arra[i - wymiar] = "i";
            arra[i] = "K";
            break;
          } else if (/^[E]+[1]/.test(whatsUp(i))) {
            arra[i + 1] = "t";
            arra[i] = "K";
            break;
          }
        } // UR
        if (
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))
        ) {
          if (/^[E]+[1]/.test(whatsLeft(i))) {
            arra[i + wymiar] = "i";
            arra[i] = "K";
            break;
          } else if (/^[E]+[1]/.test(whatsDown(i))) {
            arra[i - 1] = "t";
            arra[i] = "K";
            break;
          }
        } // DR
        if (
          /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i)) &&
          /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))
        ) {
          if (/^[E]+[1]/.test(whatsLeft(i))) {
            arra[i - wymiar] = "i";
            arra[i] = "K";
            break;
          } else if (/^[E]+[1]/.test(whatsUp(i))) {
            arra[i - 1] = "t";
            arra[i] = "K";
            break;
          }
        }
        break;
      default:
        break;
    }
  }

  board2 = "";
  for (i = 0; i < wymiar * wymiar; i++) {
    if (/[tfihK-R]/.test(arra[i])) {
      board2 += arra[i];
    } else {
      board2 += board[i];
    }
  }
  setAllOnBoard(board2);

  step();
  helpSolveBridges();
  step();
  helpSolveIslandsComplete();
  checkIfAllTicked();  
}
