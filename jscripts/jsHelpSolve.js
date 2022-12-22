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
var helpedAlready = [];
for (i = 0; i < wymiar * wymiar; i++) {
    helpedAlready.push(0);
}


function reverseString(str) {
    rts = '';
    for (z = str.length - 1; z >= 0; z--) {
        rts += str[z];
    }
    return rts;
}

function whatsLeft(id) {
    str = '';
    board = stepsy[stepsy.length - 1];
    if (id % wymiar == 0) {
        return str;
    } else {
        for (k = (id - id % wymiar); k < id; k++) {
            str += board[k]
        }
    }
    return reverseString(str);

}

function whatsRight(id) {
    str = '';
    board = stepsy[stepsy.length - 1];

    if ((id + 1) % wymiar == 0) {
        return str;
    } else {
        for (k = id + 1; k < id + (wymiar - id % wymiar); k++) {
            str += board[k];
        }
    }
    return str;

}

function whatsUp(id) {
    str = '';
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
    str = '';

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
        if (i % wymiar < wymiar - 1)
            right = board[i + 1];
        if (i < wymiar * (wymiar - 1))
            down = board[i + wymiar];
        if (i % wymiar > 0)
            left = board[i - 1];
        if (i >= wymiar)
            up = board[i - wymiar];

        switch (field) {
            case 'R':
                arrb[i - 1] = 'f';
                arrb[i + 1] = 'f';
                arrb[i - wymiar] = 'h';
                arrb[i + wymiar] = 'h';
                break;
            case 'P':
                if (/[Ehi]/.test(left)) {
                    arrb[i + 1] = 'f';
                    arrb[i - wymiar] = 'h';
                    arrb[i + wymiar] = 'h';
                } else if (/[Ehi]/.test(right)) {
                    arrb[i - 1] = 'f';
                    arrb[i - wymiar] = 'h';
                    arrb[i + wymiar] = 'h';
                } else if (/[Etf]/.test(up)) {
                    arrb[i + 1] = 'f';
                    arrb[i - 1] = 'f';
                    arrb[i + wymiar] = 'h';
                } else if (/[Etf]/.test(down)) {
                    arrb[i + 1] = 'f';
                    arrb[i - 1] = 'f';
                    arrb[i - wymiar] = 'h';
                } else if (!up) {
                    arrb[i + 1] = 'f';
                    arrb[i - 1] = 'f';
                    arrb[i - wymiar] = 'h';
                } else if (!down) {
                    arrb[i + 1] = 'f';
                    arrb[i - 1] = 'f';
                    arrb[i + wymiar] = 'h';
                }
                break;
            case 'N':
                if (/[Ehi]/.test(left) && /[Ehi]/.test(right)) {
                    arrb[i - wymiar] = 'h';
                    arrb[i + wymiar] = 'h';
                    board[i - wymiar] = 'h';
                    board[i + wymiar] = 'h';
                }
                if (/[Etf]/.test(up) && /[Etf]/.test(down)) {
                    arrb[i - 1] = 'f';
                    arrb[i + 1] = 'f';
                }
                if (/[Ehi]/.test(left) && /[Etf]/.test(up)) {
                    arrb[i + 1] = 'f';
                    arrb[i + wymiar] = 'h';
                }
                if (/[Ehi]/.test(left) && /[Etf]/.test(down)) {
                    arrb[i - wymiar] = 'h';
                    arrb[i + 1] = 'f';
                }
                if (/[Etf]/.test(up) && /[Ehi]/.test(right)) {
                    arrb[i - 1] = 'f';
                    arrb[i + wymiar] = 'h';
                }
                if (/[Etf]/.test(down) && /[Ehi]/.test(right)) {
                    arrb[i - 1] = 'f';
                    arrb[i - wymiar] = 'h';
                }
                if (!down && !right) {
                    arrb[i - 1] = 'f';
                    arrb[i - wymiar] = 'h';
                }
                if (!down && !left) {
                    arrb[i + 1] = 'f';
                    arrb[i - wymiar] = 'h';
                }
                if (!up && !right) {
                    arrb[i - 1] = 'f';
                    arrb[i + wymiar] = 'h';
                }
                if (!up && !left) {
                    arrb[i + 1] = 'f';
                    arrb[i + wymiar] = 'h';
                }
                break;
            case 'L':
                if (/[Ehi]/.test(left) && /[Ehi]/.test(right) && /[Etf]/.test(up)) {
                    arrb[i + wymiar] = 'h';
                }
                break;

            case '7':
                bridge7 = 0;
                if (left == 't') bridge7++;
                if (left == 'f') bridge7 += 2;
                if (right == 't') bridge7++;
                if (right == 'f') bridge7 += 2;
                if (up == 'i') bridge7++;
                if (up == 'h') bridge7 += 2;
                if (down == 'i') bridge7++;
                if (down == 'h') bridge7 += 2;
                if (bridge7 == 7) {
                    arrb[i] = 'Q';
                }
                break;
            case '6':
                if (countBridgesOfIsland(i) == 6) arrb[i] = 'P';
                break;
            case '5':
                bridge5 = 0;
                if (left == 't') bridge5++;
                if (left == 'f') bridge5 += 2;
                if (right == 't') bridge5++;
                if (right == 'f') bridge5 += 2;
                if (up == 'i') bridge5++;
                if (up == 'h') bridge5 += 2;
                if (down == 'i') bridge5++;
                if (down == 'h') bridge5 += 2;
                if (bridge5 == 5) {
                    arrb[i] = 'O';
                }

                break;
            case '4':
                bridge4 = 0;
                if (left == 't') bridge4++;
                if (left == 'f') bridge4 += 2;
                if (right == 't') bridge4++;
                if (right == 'f') bridge4 += 2;
                if (up == 'i') bridge4++;
                if (up == 'h') bridge4 += 2;
                if (down == 'i') bridge4++;
                if (down == 'h') bridge4 += 2;
                if (bridge4 == 4) {
                    arrb[i] = 'N';
                }

                break;

            case '3':
                bridge3 = 0;
                if (left == 't') bridge3++;
                if (left == 'f') bridge3 += 2;
                if (right == 't') bridge3++;
                if (right == 'f') bridge3 += 2;
                if (up == 'i') bridge3++;
                if (up == 'h') bridge3 += 2;
                if (down == 'i') bridge3++;
                if (down == 'h') bridge3 += 2;
                if (bridge3 == 3) {
                    arrb[i] = 'M';
                }

                break;
            case '2':
                bridge2 = 0;
                if (left == 't') bridge2++;
                if (left == 'f') bridge2 += 2;
                if (right == 't') bridge2++;
                if (right == 'f') bridge2 += 2;
                if (up == 'i') bridge2++;
                if (up == 'h') bridge2 += 2;
                if (down == 'i') bridge2++;
                if (down == 'h') bridge2 += 2;
                if (bridge2 == 2) {
                    arrb[i] = 'L';
                }

                break;
            case '1':
                bridge1 = 0;
                if (left == 't') bridge1++;
                if (right == 't') bridge1++;
                if (up == 'i') bridge1++;
                if (down == 'i') bridge1++;
                if (bridge1 == 1) {
                    arrb[i] = 'K';
                }

                break;
            default:
                break;
        }

    }
    board2 = '';
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
    field = board[id];
    if (id % wymiar < wymiar - 1)
        right = board[id + 1];
    if (id < wymiar * (wymiar - 1))
        down = board[id + wymiar];
    if (id % wymiar > 0)
        left = board[id - 1];
    if (id >= wymiar)
        up = board[id - wymiar];

    if (left == 't') sum++;
    if (left == 'f') sum += 2;
    if (right == 't') sum++;
    if (right == 'f') sum += 2;
    if (up == 'i') sum++;
    if (up == 'h') sum += 2;
    if (down == 'i') sum++;
    if (down == 'h') sum += 2;

    return sum;
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

            if (i < (wymiar * wymiar - 1))
                right = board[i + 1];
            if (i < wymiar * (wymiar - 1))
                down = board[i + wymiar];
            if (i > 0)
                left = board[i - 1];
            if (i >= wymiar)
                up = board[i - wymiar];
            //horizontal single
            if (i > 0 && i < wymiar * wymiar && i % wymiar != 0 && (i + 1) % wymiar != 0) {
                if (/[E]/.test(field) && /[t]/.test(right)) {
                    arra[i] = 't';
                }
            }
            if (i > 0 && i < wymiar * wymiar && i % wymiar != 0 && (i + 1) % wymiar != 0) {
                if (/[E]/.test(field) && /[t]/.test(left)) {
                    arra[i] = 't';
                }
            }
            //vertical single
            if (i >= wymiar && i < (wymiar - 1) * wymiar) {
                if (/[E]/.test(field) && /[i]/.test(up)) {
                    arra[i] = 'i';
                }
            }
            if (i >= wymiar && i < (wymiar - 1) * wymiar) {
                if (/[E]/.test(field) && /[i]/.test(down)) {
                    arra[i] = 'i';
                }
            }
            //
            //horizontal double
            if (i > 0 && i < wymiar * wymiar && i % wymiar != 0 && (i + 1) % wymiar != 0) {
                if (/[Et]/.test(field) && /[f]/.test(right)) {
                    arra[i] = 'f';
                    arra[i] = 'f';
                }
            }
            if (i > 0 && i < wymiar * wymiar && i % wymiar != 0 && (i + 1) % wymiar != 0) {
                if (/[Et]/.test(field) && /[f]/.test(left)) {
                    arra[i] = 'f';
                }
            }
            // vertical double 
            if (i >= wymiar && i < (wymiar - 1) * wymiar) {
                if (/[Ei]/.test(field) && /[h]/.test(up)) {
                    arra[i] = 'h';
                }
            }
            if (i >= wymiar && i < (wymiar - 1) * wymiar) {
                if (/[Ei]/.test(field) && /[h]/.test(down)) {
                    arra[i] = 'h';
                }
            }
        }
        board2 = '';
        for (i = 0; i < wymiar * wymiar; i++) {
            if (/[tfihK-R]/.test(arra[i])) {
                board2 += arra[i];
                isSomethingToDo = true;
            } else {
                board2 += board[i];
            }
        }
        setAllOnBoard(board2);
    }
    while (isSomethingToDo)


}


function helpSolve() {
    step0();
    step();

    board = stepsy[stepsy.length - 1];
    var arra = [];
    for (i = 0; i < wymiar * wymiar; i++) {
        arra.push(0);
    }


    for (i = 0; i < wymiar * wymiar; i++) {

        field = board[i];
        if (helpedAlready[i] == '1') {

        } else {}
        switch (field) {
            case 'E':
            case 'S':
            case '9':
            case 'h':
            case 'i':
            case 'f':
            case 't':
            case 'K':
            case 'L':
            case 'M':
            case 'N':
            case 'O':
            case 'P':
            case 'Q':
            case 'R':
                break;
            case '8':
                arra[i - 1] = 'f';
                arra[i + 1] = 'f';
                arra[i - wymiar] = 'h';
                arra[i + wymiar] = 'h';
                arra[i] = 'R';
                break;
            case '7':
                if (board[i - 1] != 'f' && arra[i - 1] != 'f') arra[i - 1] = 't';
                if (board[i + 1] != 'f' && arra[i + 1] != 'f') arra[i + 1] = 't';
                if (board[i - wymiar] != 'h' && arra[i - wymiar] != 'h') arra[i - wymiar] = 'i';
                if (board[i + wymiar] != 'h' && arra[i + wymiar] != 'h') arra[i + wymiar] = 'i';
                // if 2 sides are TICKED and they have 3 bridges, the others 2 will have 4

                //       /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/  
                // - on edge or EmptEE or "EE I II " or TICKED island with at least 1 bridge to actual island
                // LR
                if (/^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i))) {
                    if (board[i + 1] == 't' && board[i - 1] == 'f' || board[i + 1] == 'f' && board[i - 1] == 't') {
                        arra[i + wymiar] = 'h';
                        arra[i - wymiar] = 'h';
                        arra[i] = 'Q';
                        break;
                    }
                } //UD
                if (/^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) && /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i))) {
                    if (board[i + wymiar] == 'i' && board[i - wymiar] == 'h' || board[i + wymiar] == 'h' && board[i - wymiar] == 'i') {
                        arra[i + 1] = 'f';
                        arra[i - 1] = 'f';
                        arra[i] = 'Q';
                        break;
                    }
                } //LD
                if (/^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i))) {
                    if (board[i - 1] == 't' && board[i + wymiar] == 'h' || board[i - 1] == 'f' && board[i + wymiar] == 'h') {
                        arra[i + 1] = 'f';
                        arra[i - wymiar] = 'h';
                        arra[i] = 'Q';
                        break;
                    }
                } //DR
                if (/^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i))) {
                    if (board[i + wymiar] == 'i' && board[i + 1] == 'f' || board[i + wymiar] == 'h' && board[i + 1] == 't') {
                        arra[i - 1] = 'f';
                        arra[i - wymiar] = 'h';
                        arra[i] = 'Q';
                        break;
                    }
                } //RU
                if (/^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i))) {
                    if (board[i + 1] == 't' && board[i - wymiar] == 'h' || board[i + 1] == 'f' && board[i - wymiar] == 'i') {
                        arra[i - 1] = 'f';
                        arra[i + wymiar] = 'h';
                        arra[i] = 'Q';
                        break;
                    }
                } //LU
                if (/^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) && /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i))) {
                    if (board[i - 1] == 't' && board[i - wymiar] == 'h' || board[i - 1] == 'f' && board[i - wymiar] == 'i') {
                        arra[i + 1] = 'f';
                        arra[i + wymiar] = 'h';
                        arra[i] = 'Q';
                        break;
                    }
                }
                break;
            case '6':
                if (whatsUp(i) == '') {
                    arra[i - 1] = 'f';
                    arra[i + 1] = 'f';
                    arra[i + wymiar] = 'h';
                    arra[i] = 'P';
                    break;
                } else if (whatsDown(i) == '') {
                    arra[i - 1] = 'f';
                    arra[i + 1] = 'f';
                    arra[i - wymiar] = 'h';
                    arra[i] = 'P';
                    break;
                } else if (whatsRight(i) == '') {
                    arra[i - 1] = 'f';
                    arra[i - wymiar] = 'h';
                    arra[i + wymiar] = 'h';
                    arra[i] = 'P';
                    break;
                } else if (whatsLeft(i) == '') {
                    arra[i - wymiar] = 'h';
                    arra[i + 1] = 'f';
                    arra[i + wymiar] = 'h';
                    arra[i] = 'P';
                    break;
                } // now we are in the middle, so lets look for "II I K-R" on the left, right, top, bottom
                else if (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))) {
                    arra[i - wymiar] = 'h';
                    arra[i + 1] = 'f';
                    arra[i + wymiar] = 'h';
                    arra[i] = 'P';
                    break;
                } else if (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    arra[i - wymiar] = 'h';
                    arra[i - 1] = 'f';
                    arra[i + wymiar] = 'h';
                    arra[i] = 'P';
                    break;
                } else if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))) {
                    arra[i - 1] = 'f';
                    arra[i + 1] = 'f';
                    arra[i + wymiar] = 'h';
                    arra[i] = 'P';
                    break;
                } else if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) {
                    arra[i - wymiar] = 'h';
                    arra[i - 1] = 'f';
                    arra[i + 1] = 'f';
                    arra[i] = 'P';
                    break;
                } // if on one side is 1 then other sides will have got also 1 bridge at least //todo: if 2 sides had 1
                else if (/^[Et]*[1K][2-8]*/.test(whatsLeft(i))) {
                    if (board[i + wymiar] != 'h' && arra[i + wymiar] != 'h') arra[i + wymiar] = 'i';
                    if (board[i - wymiar] != 'h' && arra[i - wymiar] != 'h') arra[i - wymiar] = 'i';
                    if (board[i + 1] != 'f' && arra[i + 1] != 'f') arra[i + 1] = 't';
                    helpedAlready[i] = '1';
                    break;
                } else if (/^[Et]*[1K][2-8]*/.test(whatsRight(i))) {
                    if (board[i + wymiar] != 'h' && arra[i + wymiar] != 'h') arra[i + wymiar] = 'i';
                    if (board[i - wymiar] != 'h' && arra[i - wymiar] != 'h') arra[i - wymiar] = 'i';
                    if (board[i - 1] != 'f' && arra[i - 1] != 'f') arra[i - 1] = 't';
                    helpedAlready[i] = '1';
                    break;
                } else if (/^[Ei]*[1K][2-8]*/.test(whatsDown(i))) {
                    if (board[i - 1] != 'f' && arra[i - 1] != 'f') arra[i - 1] = 't';
                    if (board[i - wymiar] != 'h' && arra[i - wymiar] != 'h') arra[i - wymiar] = 'i';
                    if (board[i + 1] != 'f' && arra[i + 1] != 'f') arra[i + 1] = 't';
                    helpedAlready[i] = '1';
                    break;
                } else if (/^[Ei]*[1K][2-8]*/.test(whatsUp(i))) {
                    if (board[i + wymiar] != 'h' && arra[i + wymiar] != 'h') arra[i + wymiar] = 'i';
                    if (board[i - 1] != 'f' && arra[i - 1] != 'f') arra[i - 1] = 't';
                    if (board[i + 1] != 'f' && arra[i + 1] != 'f') arra[i + 1] = 't';
                    helpedAlready[i] = '1';
                    break;
                }
                break;
            case '5':
                // if 1. side is TICKED with 1 bridge /^[t]+[K-Q]+/ - 1 bridge connected with K-Q
                // and 2. side can not be accessed -    /^[Ehi]*[hiK-R]+[1-8]*|^E*$/  - this way CAN NOT GO
                // so side 3 and 4 will have got 4 bridges 
                //- /^[Eft]+[1-8]+|^[ft]+[K-R]+/ - side with bridge K-R to actual island or ready to connect 1-8

                //       /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/  
                // - on edge or EmptEE or "EE I II " or TICKED island with at least 1 bridge to actual island
                // LR 
                if (/^[t]+[K-Q]+/.test(whatsLeft(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    arra[i + wymiar] = 'h';
                    arra[i - wymiar] = 'h';
                    arra[i] = 'O';
                    break;

                } //UD
                if (/^[i]+[K-Q]+/.test(whatsUp(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) {
                    arra[i + 1] = 'f';
                    arra[i - 1] = 'f';
                    arra[i] = 'O';
                    break;

                } //LD
                if (/^[t]+[K-Q]+/.test(whatsLeft(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) {
                    arra[i + 1] = 'f';
                    arra[i - wymiar] = 'h';
                    arra[i] = 'O';
                    break;

                } //DR
                if (/^[i]+[K-Q]+/.test(whatsDown(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    arra[i - 1] = 'f';
                    arra[i - wymiar] = 'h';
                    arra[i] = 'O';
                    break;

                } //RU
                if (/^[i]+[K-Q]+/.test(whatsUp(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    arra[i - 1] = 'f';
                    arra[i + wymiar] = 'h';
                    arra[i] = 'O';
                    break;

                } //LU
                if (/^[t]+[K-Q]+/.test(whatsLeft(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))) {
                    arra[i + 1] = 'f';
                    arra[i + wymiar] = 'h';
                    arra[i] = 'O';
                    break;

                }


                //        /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/   - on edge or EmptEE or "EE I II " or TICKED island with at least 1 bridge to actual island
                if (/^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) && /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i))) {
                    if (board[i + 1] == 'E' && countBridgesOfIsland(i) == 3) {
                        arra[i + 1] = 'f';
                        arra[i] = 'O';
                        break;
                    }
                    if (board[i + 1] == 'E' && countBridgesOfIsland(i) == 4) {
                        arra[i + 1] = 't';
                        arra[i] = 'O';
                        break;
                    }
                    if (board[i + 1] == 't' && countBridgesOfIsland(i) == 4) {
                        arra[i + 1] = 'f';
                        arra[i] = 'O';
                        break;
                    }
                } else
                if (/^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i))) {
                    if (board[i - wymiar] == 'E' && countBridgesOfIsland(i) == 3) {
                        arra[i - wymiar] = 'h';
                        arra[i] = 'O';
                        break;
                    }
                    if (board[i - wymiar] == 'E' && countBridgesOfIsland(i) == 4) {
                        arra[i - wymiar] = 'i';
                        arra[i] = 'O';
                        break;
                    }
                    if (board[i - wymiar] == 'i' && countBridgesOfIsland(i) == 4) {
                        arra[i - wymiar] = 'h';
                        arra[i] = 'O';
                        break;
                    }
                } else
                if (/^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) && /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i))) {
                    if (board[i - 1] == 'E' && countBridgesOfIsland(i) == 3) {
                        arra[i - 1] = 'f';
                        arra[i] = 'O';
                        break;
                    }
                    if (board[i - 1] == 'E' && countBridgesOfIsland(i) == 4) {
                        arra[i - 1] = 't';
                        arra[i] = 'O';
                        break;
                    }
                    if (board[i - 1] == 't' && countBridgesOfIsland(i) == 4) {
                        arra[i - 1] = 'f';
                        arra[i] = 'O';
                        break;
                    }
                } else
                if (/^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) && /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i))) {
                    if (board[i + wymiar] == 'E' && countBridgesOfIsland(i) == 3) {
                        arra[i + wymiar] = 'h';
                        arra[i] = 'O';
                        break;
                    }
                    if (board[i + wymiar] == 'E' && countBridgesOfIsland(i) == 4) {
                        arra[i + wymiar] = 'i';
                        arra[i] = 'O';
                        break;
                    }
                    if (board[i + wymiar] == 'i' && countBridgesOfIsland(i) == 4) {
                        arra[i + wymiar] = 'h';
                        arra[i] = 'O';
                        break;
                    }
                } else
                if (whatsUp(i) == '') {
                    if (board[i - 1] != 'f' && arra[i - 1] != 'f') arra[i - 1] = 't';
                    if (board[i + 1] != 'f' && arra[i + 1] != 'f') arra[i + 1] = 't';
                    if (board[i + wymiar] != 'h' && arra[i + wymiar] != 'h') arra[i + wymiar] = 'i';
                    helpedAlready[i] = '1';
                    break;
                } else if (whatsDown(i) == '') {
                    if (board[i - 1] != 'f' && arra[i - 1] != 'f') arra[i - 1] = 't';
                    if (board[i + 1] != 'f' && arra[i + 1] != 'f') arra[i + 1] = 't';
                    if (board[i - wymiar] != 'h' && arra[i - wymiar] != 'h') arra[i - wymiar] = 'i';
                    helpedAlready[i] = '1';
                    break;
                } else if (whatsRight(i) == '') {
                    if (board[i - 1] != 'f' && arra[i - 1] != 'f') arra[i - 1] = 't';
                    if (board[i - wymiar] != 'h' && arra[i - wymiar] != 'h') arra[i - wymiar] = 'i';
                    if (board[i + wymiar] != 'h' && arra[i + wymiar] != 'h') arra[i + wymiar] = 'i';
                    helpedAlready[i] = '1';
                    break;
                } else if (whatsLeft(i) == '') {
                    if (board[i - wymiar] != 'h' && arra[i - wymiar] != 'h') arra[i - wymiar] = 'i';
                    if (board[i + 1] != 'f' && arra[i + 1] != 'f') arra[i + 1] = 't';
                    if (board[i + wymiar] != 'h' && arra[i + wymiar] != 'h') arra[i + wymiar] = 'i';
                    helpedAlready[i] = '1';
                    break;
                } else if (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))) {
                    if (board[i - wymiar] != 'h' && arra[i - wymiar] != 'h') arra[i - wymiar] = 'i';
                    if (board[i + 1] != 'f' && arra[i + 1] != 'f') arra[i + 1] = 't'
                    if (board[i + wymiar] != 'h' && arra[i + wymiar] != 'h') arra[i + wymiar] = 'i';
                    helpedAlready[i] = '1';
                    break;
                } else if (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    if (board[i - wymiar] != 'h' && arra[i - wymiar] != 'h') arra[i - wymiar] = 'i';
                    if (board[i - 1] != 'f' && arra[i - 1] != 'f') arra[i - 1] = 't';
                    if (board[i + wymiar] != 'h' && arra[i + wymiar] != 'h') arra[i + wymiar] = 'i';
                    helpedAlready[i] = '1';
                    break;
                } else if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))) {
                    if (board[i - 1] != 'f' && arra[i - 1] != 'f') arra[i - 1] = 't';
                    if (board[i + 1] != 'f' && arra[i + 1] != 'f') arra[i + 1] = 't';
                    if (board[i + wymiar] != 'h' && arra[i + wymiar] != 'h') arra[i + wymiar] = 'i';
                    helpedAlready[i] = '1';
                    break;
                } else if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) {
                    if (board[i - wymiar] != 'h' && arra[i - wymiar] != 'h') arra[i - wymiar] = 'i';
                    if (board[i - 1] != 'f' && arra[i - 1] != 'f') arra[i - 1] = 't';
                    if (board[i + 1] != 'f' && arra[i + 1] != 'f') arra[i + 1] = 't';
                    helpedAlready[i] = '1';
                    break;
                }
                break;
            case '4':
                // if 1. side is TICKED with 1 bridge /^[t]+[K-Q]+/ - 1 bridge connected with K-Q
                // and 2. side can not be accessed -    /^[Ehi]*[hiK-R]+[1-8]*|^E*$/  - this way CAN NOT GO
                // so side 3 and 4 will have got 4 bridges 
                //- /^[Eft]+[1-8]+|^[ft]+[K-R]+/ - side with bridge K-R to actual island or ready to connect 1-8

                //       /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/  
                // - on edge or EmptEE or "EE I II " or TICKED island with at least 1 bridge to actual island
                // LR 
                if (/^[t]+[K-Q]+/.test(whatsLeft(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    if (board[i + wymiar] != 'h' && arra[i + wymiar] != 'h') arra[i + wymiar] = 'i';
                    if (board[i - wymiar] != 'h' && arra[i - wymiar] != 'h') arra[i - wymiar] = 'i';


                } //UD
                if (/^[i]+[K-Q]+/.test(whatsUp(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) {
                    if (board[i + 1] != 'f' && arra[i + 1] != 'f') arra[i + 1] = 't';
                    if (board[i - 1] != 'f' && arra[i - 1] != 'f') arra[i - 1] = 't';


                } //LD
                if (/^[t]+[K-Q]+/.test(whatsLeft(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) {
                    if (board[i + 1] != 'f' && arra[i + 1] != 'f') arra[i + 1] = 't';
                    if (board[i - wymiar] != 'h' && arra[i - wymiar] != 'h') arra[i - wymiar] = 'i';


                } //DR
                if (/^[i]+[K-Q]+/.test(whatsDown(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    if (board[i - 1] != 'f' && arra[i - 1] != 'f') arra[i - 1] = 't';
                    if (board[i - wymiar] != 'h' && arra[i - wymiar] != 'h') arra[i - wymiar] = 'i';


                } //RU
                if (/^[i]+[K-Q]+/.test(whatsUp(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    if (board[i - 1] != 'f' && arra[i - 1] != 'f') arra[i - 1] = 't';
                    if (board[i + wymiar] != 'h' && arra[i + wymiar] != 'h') arra[i + wymiar] = 'i';


                } //LU
                if (/^[t]+[K-Q]+/.test(whatsLeft(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))) {
                    if (board[i + 1] != 'f' && arra[i + 1] != 'f') arra[i + 1] = 't';
                    if (board[i + wymiar] != 'h' && arra[i + wymiar] != 'h') arra[i + wymiar] = 'i';

                }
                //        /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/  
                // - on edge or EmptEE or "EE I II " or TICKED island with at least 1 bridge to actual island
                if (/^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) && /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i)) && board[i + 1] == 'E' && countBridgesOfIsland(i) == 3) {
                    arra[i + 1] = 't';
                    arra[i] = 'N';
                    break;
                } else
                if (/^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) && /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i)) && board[i + 1] == 't' && countBridgesOfIsland(i) == 3) {

                    arra[i + 1] = 'f';
                    arra[i] = 'N';
                    break;
                } else
                if (/^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) && /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i)) && board[i + 1] == 'E' && countBridgesOfIsland(i) == 2) {
                    arra[i + 1] = 'f';
                    arra[i] = 'N';
                    break;
                } else
                if (/^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) && board[i - wymiar] == 'E' && countBridgesOfIsland(i) == 3) {
                    arra[i - wymiar] = 'i';
                    arra[i] = 'N';
                    break;
                } else
                if (/^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) && board[i - wymiar] == 'i' && countBridgesOfIsland(i) == 3) {
                    arra[i - wymiar] = 'h';
                    arra[i] = 'N';
                    break;
                } else
                if (/^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) && board[i - wymiar] == 'E' && countBridgesOfIsland(i) == 2) {
                    arra[i - wymiar] = 'h';
                    arra[i] = 'N';
                    break;
                } else
                if (/^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) && /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i)) && board[i - 1] == 'E' && countBridgesOfIsland(i) == 3) {
                    arra[i - 1] = 't';
                    arra[i] = 'N';
                    break;
                } else
                if (/^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) && /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i)) && board[i - 1] == 't' && countBridgesOfIsland(i) == 3) {
                    arra[i - 1] = 'f';
                    arra[i] = 'N';
                    break;
                } else
                if (/^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) && /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i)) && board[i - 1] == 'E' && countBridgesOfIsland(i) == 2) {
                    arra[i - 1] = 'f';
                    arra[i] = 'N';
                    break;
                } else
                if (/^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) && /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i)) && board[i + wymiar] == 'E' && countBridgesOfIsland(i) == 3) {
                    arra[i + wymiar] = 'i';
                    arra[i] = 'N';
                    break;
                } else
                if (/^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) && /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i)) && board[i + wymiar] == 'i' && countBridgesOfIsland(i) == 3) {
                    arra[i + wymiar] = 'h';
                    arra[i] = 'N';
                    break;
                } else
                if (/^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) && /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i)) && board[i + wymiar] == 'E' && countBridgesOfIsland(i) == 2) {
                    arra[i + wymiar] = 'h';
                    arra[i] = 'N';
                    break;
                } else
                    // other method
                    if (whatsUp(i) == '' && whatsLeft(i) == '') { //left up corner
                        arra[i + 1] = 'f';
                        arra[i + wymiar] = 'h';
                        arra[i] = 'N';
                        break;
                    } else if (whatsUp(i) == '' && whatsRight(i) == '') { //righ up corner
                    arra[i - 1] = 'f';
                    arra[i + wymiar] = 'h';
                    arra[i] = 'N';
                    break;
                } else if (whatsDown(i) == '' && whatsLeft(i) == '') { //left down corner
                    arra[i + 1] = 'f';
                    arra[i - wymiar] = 'h';
                    arra[i] = 'N';
                    break;
                } else if (whatsUp(i) == '' && whatsLeft(i) == '') { //right down corner
                    arra[i - 1] = 'f';
                    arra[i - wymiar] = 'h';
                    arra[i] = 'N';
                    break;
                } // left and up side are taken by K-R or Empty or I II --
                else if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))) {
                    arra[i + 1] = 'f';
                    arra[i + wymiar] = 'h';
                    arra[i] = 'N';
                    break;
                } else if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    arra[i - 1] = 'f';
                    arra[i + wymiar] = 'h';
                    arra[i] = 'N';
                    break;
                } else if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))) {
                    arra[i + 1] = 'f';
                    arra[i - wymiar] = 'h';
                    arra[i] = 'N';
                    break;
                } else if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    arra[i - 1] = 'f';
                    arra[i - wymiar] = 'h';
                    arra[i] = 'N';
                    break;
                } // left and right taken
                else if (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    arra[i + wymiar] = 'h';
                    arra[i - wymiar] = 'h';
                    arra[i] = 'N';
                    break;
                } // down and up
                else if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) {
                    arra[i + 1] = 'f';
                    arra[i - 1] = 'f';
                    arra[i] = 'N';
                    break;
                }
                break;
            case '3':
                // the same as with '5' case 
                //       /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/  - there is only 1 way left .
                // - on edge or EmptEE or "EE I II " or TICKED island with at least 1 bridge to actual island
                if (/^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) && /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i))) {
                    if (board[i + 1] == 'E' && countBridgesOfIsland(i) == 2) {
                        arra[i + 1] = 't';
                        arra[i] = 'M';
                        break;
                    }
                    if (board[i + 1] == 'E' && countBridgesOfIsland(i) == 1) {
                        arra[i + 1] = 'f';
                        arra[i] = 'M';
                        break;
                    }
                    if (board[i + 1] == 't' && countBridgesOfIsland(i) == 2) {
                        arra[i + 1] = 'f';
                        arra[i] = 'M';
                        break;
                    }
                } else
                if (/^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i))) {
                    if (board[i - wymiar] == 'E' && countBridgesOfIsland(i) == 2) {
                        arra[i - wymiar] = 'i';
                        arra[i] = 'M';
                        break;
                    }
                    if (board[i - wymiar] == 'E' && countBridgesOfIsland(i) == 1) {
                        arra[i - wymiar] = 'h';
                        arra[i] = 'M';
                        break;
                    }
                    if (board[i - wymiar] == 'i' && countBridgesOfIsland(i) == 2) {
                        arra[i - wymiar] = 'h';
                        arra[i] = 'M';
                        break;
                    }
                } else
                if (/^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsDown(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) && /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i))) {
                    if (board[i - 1] == 'E' & countBridgesOfIsland(i) == 2) {
                        arra[i - 1] = 't';
                        arra[i] = 'M';
                        break;
                    }
                    if (board[i - 1] == 'E' && countBridgesOfIsland(i) == 1) {
                        arra[i - 1] = 'f';
                        arra[i] = 'M';
                        break;
                    }
                    if (board[i - 1] == 't' && countBridgesOfIsland(i) == 2) {
                        arra[i - 1] = 'f';
                        arra[i] = 'M';
                        break;
                    }
                } else
                if (/^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsRight(i)) && /^[Eft]+[K-R]+|^E*$|^[E]*[hiK-R]+/.test(whatsLeft(i)) && /^[Ehi]+[K-R]+|^E*$|^[E]*[ftK-R]+/.test(whatsUp(i))) {
                    if (board[i + wymiar] == 'E' && countBridgesOfIsland(i) == 2) {
                        arra[i + wymiar] = 'i';
                        arra[i] = 'M';
                        break;
                    }
                    if (board[i + wymiar] == 'E' && countBridgesOfIsland(i) == 1) {
                        arra[i + wymiar] = 'h';
                        arra[i] = 'M';
                        break;
                    }
                    if (board[i + wymiar] == 'i' && countBridgesOfIsland(i) == 2) {
                        arra[i + wymiar] = 'h';
                        arra[i] = 'M';
                        break;
                    }
                } // other
                else
                if (whatsUp(i) == '' && whatsLeft(i) == '') { //left up corner
                    if (board[i + 1] != 'f' && arra[i + 1] != 'f') arra[i + 1] = 't';
                    if (board[i + wymiar] != 'h' && arra[i + wymiar] != 'h') arra[i + wymiar] = 'i';

                }
                if (whatsUp(i) == '' && whatsRight(i) == '') { //righ up corner
                    if (board[i - 1] != 'f' && arra[i - 1] != 'f') arra[i - 1] = 't';
                    if (board[i + wymiar] != 'h' && arra[i + wymiar] != 'h') arra[i + wymiar] = 'i';

                }
                if (whatsDown(i) == '' && whatsLeft(i) == '') { //left down corner
                    if (board[i + 1] != 'f' && arra[i + 1] != 'f') arra[i + 1] = 't';
                    if (board[i - wymiar] != 'h' && arra[i - wymiar] != 'h') arra[i - wymiar] = 'i';

                }
                if (whatsUp(i) == '' && whatsLeft(i) == '') { //right down corner
                    if (board[i - 1] != 'f' && arra[i - 1] != 'f') arra[i - 1] = 't';
                    if (board[i - wymiar] != 'h' && arra[i - wymiar] != 'h') arra[i - wymiar] = 'i';

                } // left and up side are taken by K-R or Empty or I II --

                if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))) {
                    if (board[i + 1] != 'f' && arra[i + 1] != 'f') arra[i + 1] = 't';
                    if (board[i + wymiar] != 'h' && arra[i + wymiar] != 'h') arra[i + wymiar] = 'i';

                }
                if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    if (board[i - 1] != 'f' && arra[i - 1] != 'f') arra[i - 1] = 't';
                    if (board[i + wymiar] != 'h' && arra[i + wymiar] != 'h') arra[i + wymiar] = 'i';

                }
                if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))) {
                    if (board[i + 1] != 'f' && arra[i + 1] != 'f') arra[i + 1] = 't';
                    if (board[i - wymiar] != 'h' && arra[i - wymiar] != 'h') arra[i - wymiar] = 'i';

                }
                if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    if (board[i - 1] != 'f' && arra[i - 1] != 'f') arra[i - 1] = 't';
                    if (board[i - wymiar] != 'h' && arra[i - wymiar] != 'h') arra[i - wymiar] = 'i';

                } // left and right taken

                if (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    if (board[i + wymiar] != 'h' && arra[i + wymiar] != 'h') arra[i + wymiar] = 'i';
                    if (board[i - wymiar] != 'h' && arra[i - wymiar] != 'h') arra[i - wymiar] = 'i';

                } // down and up

                if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) {
                    if (board[i + 1] != 'f' && arra[i + 1] != 'f') arra[i + 1] = 't';
                    if (board[i - 1] != 'f' && arra[i - 1] != 'f') arra[i - 1] = 't';

                } //if 2 sides CAN'T BE  ... and 1 side is TICKED with 1 bridge, so II bridges on other side
                // - TICKED ISLAND  with 1 BRIDGE - /^[t]+[KLMNOPQ]+/.test(whatsRight(i)) 

                if (/^[i]+[KLMNOPQ]+/.test(whatsDown(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))) {
                    arra[i + 1] = 'f';
                    break;
                }

                if (/^[t]+[KLMNOPQ]+/.test(whatsRight(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))) {
                    arra[i + wymiar] = 'h';
                    break;
                }

                if (/^[i]+[KLMNOPQ]+/.test(whatsDown(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    arra[i - 1] = 'f';
                    break;
                }

                if (/^[t]+[KLMNOPQ]+/.test(whatsLeft(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    arra[i + wymiar] = 'h';
                    break;
                }
                if (/^[t]+[KLMNOPQ]+/.test(whatsLeft(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    arra[i - wymiar] = 'h';
                    break;
                }
                if (/^[i]+[KLMNOPQ]+/.test(whatsUp(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    arra[i - 1] = 'f';
                    break;
                }
                if (/^[i]+[KLMNOPQ]+/.test(whatsUp(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))) {
                    arra[i + 1] = 'f';
                    break;
                }
                if (/^[t]+[KLMNOPQ]+/.test(whatsRight(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))) {
                    arra[i - wymiar] = 'h';
                    break;
                }
                if (/^[i]+[KLMNOPQ]+/.test(whatsUp(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    arra[i + wymiar] = 'h';
                    break;
                }
                if (/^[i]+[KLMNOPQ]+/.test(whatsDown(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    arra[i - wymiar] = 'h';
                    break;
                }
                if (/^[t]+[KLMNOPQ]+/.test(whatsLeft(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) {
                    arra[i + 1] = 'f';
                    break;
                }
                if (/^[t]+[KLMNOPQ]+/.test(whatsRight(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) {
                    arra[i - 1] = 'f';
                    break;
                }
                break;
            case '2': //
                if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    arra[i + wymiar] = 'h';
                    arra[i] = 'L';
                    break;
                } else if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    arra[i - 1] = 'f';
                    arra[i] = 'L';
                    break;
                } else if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) {
                    arra[i + 1] = 'f';
                    arra[i] = 'L';
                    break;
                } else if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    arra[i - wymiar] = 'h';
                    arra[i] = 'L';
                    break;
                } // if 1 or 2 on one left side and nothing on 2 other sides - so on the other side there will be at least 1 bridge

                // maybe other letters LMNOPQ should check in arra if there is no II I - =
                // old version: // else if (/^[Et]*[12K][2-8]*/.test(whatsLeft(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))) {
                // have to eliminate ELSE and BREAK so it will check further down
                if (/^[Et]*[12KLMNOPQ][2-8]*/.test(whatsLeft(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))) {
                    if (board[i + 1] != 'f' && arra[i + 1] != 'f') arra[i + 1] = 't';

                }
                if (/^[Et]*[12KLMNOPQ][2-8]*/.test(whatsLeft(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))) {
                    if (board[i + wymiar] != 'h' && arra[i + wymiar] != 'h') arra[i + wymiar] = 'i';

                }
                if (/^[Et]*[12KLMNOPQ][2-8]*/.test(whatsLeft(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) {
                    if (board[i - wymiar] != 'h' && arra[i - wymiar] != 'h') arra[i - wymiar] = 'i';

                } // 1 on the upside
                if (/^[Ei]*[12KLMNOPQ][2-8]*/.test(whatsUp(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))) {
                    if (board[i + 1] != 'f' && arra[i + 1] != 'f') arra[i + 1] = 't';

                }
                if (/^[Ei]*[12KLMNOPQ][2-8]*/.test(whatsUp(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) {
                    if (board[i - 1] != 'f' && arra[i - 1] != 'f') arra[i - 1] = 't';

                }
                if (/^[Ei]*[12KLMNOPQ][2-8]*/.test(whatsUp(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))) {
                    if (board[i + wymiar] != 'h' && arra[i + wymiar] != 'h') arra[i + wymiar] = 'i';

                } // 1 on the right 
                if (/^[Et]*[12KLMNOPQ][2-8]*/.test(whatsRight(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))) {
                    if (board[i - 1] != 'f' && arra[i - 1] != 'f') arra[i - 1] = 't';

                }
                if (/^[Et]*[12KLMNOPQ][2-8]*/.test(whatsRight(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) {
                    if (board[i - wymiar] != 'h' && arra[i - wymiar] != 'h') arra[i - wymiar] = 'i';

                }
                if (/^[Et]*[12KLMNOPQ][2-8]*/.test(whatsRight(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i))) {
                    if (board[i + wymiar] != 'h' && arra[i + wymiar] != 'h') arra[i + wymiar] = 'i';

                } // 1 on the down 
                if (/^[Ei]*[12KLMNOPQ][2-8]*/.test(whatsDown(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    if (board[i - wymiar] != 'h' && arra[i - wymiar] != 'h') arra[i - wymiar] = 'i';

                }
                if (/^[Ei]*[12KLMNOPQ][2-8]*/.test(whatsDown(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))) {
                    if (board[i + 1] != 'f' && arra[i + 1] != 'f') arra[i + 1] = 't';

                }
                if (/^[Ei]*[12KLMNOPQ][2-8]*/.test(whatsDown(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    if (board[i - 1] != 'f' && arra[i - 1] != 'f') {
                        arra[i - 1] = 't';
                    }

                }
                break;
            case '1':
                //
                if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    arra[i + wymiar] = 'i';
                    arra[i] = 'K';
                    break;
                } else if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    arra[i - 1] = 't';
                    arra[i] = 'K';
                    break;
                } else if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) {
                    arra[i + 1] = 't';
                    arra[i] = 'K';
                    break;
                } else if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    arra[i - wymiar] = 'i';
                    arra[i] = 'k';
                    break;
                } //       /^[Ehi]*[hiK-R]+[1-8]*|^E*$/  - this way CAN NOT GO
                //  EEE K R  .... I II vertical wall on left
                if (/^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))) {
                    if (/^[E]+[1]/.test(whatsLeft(i))) {
                        arra[i + 1] = 't';
                        arra[i] = 'K';
                        break;
                    } else if (/^[E]+[1]/.test(whatsRight(i))) {
                        arra[i - 1] = 't';
                        arra[i] = 'K';
                        break;
                    }
                } // LR
                if (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && /^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i))) {
                    if (/^[E]+[1]/.test(whatsUp(i))) {
                        arra[i + wymiar] = 'i';
                        arra[i] = 'K';
                        break;
                    } else if (/^[E]+[1]/.test(whatsDown(i))) {
                        arra[i - wymiar] = 'i';
                        arra[i] = 'K';
                        break;
                    }
                } // LU

                if (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))) {
                    if (/^[E]+[1]/.test(whatsRight(i))) {
                        arra[i + wymiar] = 'i';
                        arra[i] = 'K';
                        break;
                    } else if (/^[E]+[1]/.test(whatsDown(i))) {
                        arra[i + 1] = 't';
                        arra[i] = 'K';
                        break;
                    }
                } // LD
                if (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsLeft(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) {
                    if (/^[E]+[1]/.test(whatsRight(i))) {
                        arra[i - wymiar] = 'i';
                        arra[i] = 'K';
                        break;
                    } else if (/^[E]+[1]/.test(whatsUp(i))) {
                        arra[i + 1] = 't';
                        arra[i] = 'K';
                        break;
                    }
                } // UR
                if (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsUp(i))) {
                    if (/^[E]+[1]/.test(whatsLeft(i))) {
                        arra[i + wymiar] = 'i';
                        arra[i] = 'K';
                        break;
                    } else if (/^[E]+[1]/.test(whatsDown(i))) {
                        arra[i - 1] = 't';
                        arra[i] = 'K';
                        break;
                    }
                } // DR
                if (/^[Ehi]*[hiK-R]+[1-8]*|^E*$/.test(whatsRight(i)) && /^[Etf]*[tfK-R]+[1-8]*|^E*$/.test(whatsDown(i))) {
                    if (/^[E]+[1]/.test(whatsLeft(i))) {
                        arra[i - wymiar] = 'i';
                        arra[i] = 'K';
                        break;
                    } else if (/^[E]+[1]/.test(whatsUp(i))) {
                        arra[i - 1] = 't';
                        arra[i] = 'K';
                        break;
                    }
                }
                break;
            default:
                break;

        }


    }



    board2 = '';
    for (i = 0; i < wymiar * wymiar; i++) {
        if (/[tfihK-R]/.test(arra[i])) {
            board2 += arra[i];
        } else {
            board2 += board[i]
        }
    }
    setAllOnBoard(board2);

    step();
    helpSolveBridges();
    step();
    helpSolveIslandsComplete();

}
