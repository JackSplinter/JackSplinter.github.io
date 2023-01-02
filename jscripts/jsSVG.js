function loadStyles() {
  inClass = document.createElement("style");
  inClass.setAttribute("id", "inClass");
  inClass.innerHTML =
    ".in, .inge, .ing, .inc, .ingc {font-weight: bolder;padding: 0px;border: 0px;text-align: center;font-size: 23px;cursor: font-weight: bolder;padding: 0px;border: 0px;text-align: center;font-size: 23px;cursor: pointer;  }";

  inClassB = document.createElement("style");
  inClassB.setAttribute("id", "inClassB");
  inCircleSVG =
    '<svg width="280" height="280" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="140" r="130" stroke="' +
    colorCIRCLE +
    '" stroke-width="20" fill="transparent"/></svg>';
  inCircleSVG64 = window.btoa(inCircleSVG);
  inClassB.innerHTML =
    ".in {background: url('data:image/svg+xml;base64," +
    inCircleSVG64 +
    "'); color: " +
    colorDIG +
    ";  background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";
  
    ingeClassB = document.createElement("style");
    ingeClassB.setAttribute("id", "ingeClassB");
    ingeCircleSVG =
      '<svg width="280" height="280" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="140" r="130" stroke="' +
      colorCIRCLE +
      '" stroke-width="20" fill="' +
      colorINGE +
      '"/></svg>';
    ingeCircleSVG64 = window.btoa(ingeCircleSVG);
    ingeClassB.innerHTML =
      ".inge {background: url('data:image/svg+xml;base64," +
      ingeCircleSVG64 +
      "'); color: " +
      colorDIG +
      ";  background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";
  
    
  ingClassB = document.createElement("style");
  ingClassB.setAttribute("id", "ingClassB");
  ingCircleSVG =
    '<svg width="280" height="280" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="140" r="130" stroke="' +
    colorCIRCLE +
    '" stroke-width="20" fill="' +
    colorING +
    '"/></svg>';
  ingCircleSVG64 = window.btoa(ingCircleSVG);
  ingClassB.innerHTML =
    ".ing {background: url('data:image/svg+xml;base64," +
    ingCircleSVG64 +
    "'); color: " +
    colorINGDIGIT +
    ";  background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";

  incClassB = document.createElement("style");
  incClassB.setAttribute("id", "incClassB");
  incCircleSVG =
    '<svg width="280" height="280" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="140" r="130" stroke="' +
    colorCHECK +
    '" stroke-width="20" fill="transparent"/></svg>';
  incCircleSVG64 = window.btoa(incCircleSVG);
  incClassB.innerHTML =
    ".inc {background: url('data:image/svg+xml;base64," +
    incCircleSVG64 +
    "'); color: " +
    colorCHECKDIGIT +
    ";  background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";

  ingcClassB = document.createElement("style");
  ingcClassB.setAttribute("id", "ingcClassB");
  ingcCircleSVG =
    '<svg width="280" height="280" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="140" r="130" stroke="' +
    colorCHECK +
    '" stroke-width="20" fill="' +
    colorCHECKTICKED +
    '"/></svg>';
  ingcCircleSVG64 = window.btoa(ingcCircleSVG);
  ingcClassB.innerHTML =
    ".ingc {background: url('data:image/svg+xml;base64," +
    ingcCircleSVG64 +
    "'); color: " +
    colorCHECKTICKEDDIGIT +
    ";  background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";

  iClassB = document.createElement("style");
  iClassB.setAttribute("id", "iClassB");
  iSVG =
    '<svg width="280" height="280" version="1.1" xmlns="http://www.w3.org/2000/svg"> <rect x="125" y="0" width="30" height="280" style="fill: ' +
    colorBRIDGE +
    '"/> </svg>';
  iSVG64 = window.btoa(iSVG);
  iClassB.innerHTML =
    ".m1 {background: url('data:image/svg+xml;base64," +
    iSVG64 +
    "');  background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";

  hClassB = document.createElement("style");
  hClassB.setAttribute("id", "hClassB");
  hSVG =
    '<svg  width="280" height="280" version="1.1" xmlns="http://www.w3.org/2000/svg"> <rect x="100" y="0" width="30" height="280" style="fill: ' +
    colorBRIDGE +
    '"/>   <rect x="150" y="0" width="30" height="280" style="fill: ' +
    colorBRIDGE +
    '"/> </svg>  ';
  hSVG64 = window.btoa(hSVG);
  hClassB.innerHTML =
    ".m2 {background: url('data:image/svg+xml;base64," +
    hSVG64 +
    "');  background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";

  tClassB = document.createElement("style");
  tClassB.setAttribute("id", "tClassB");
  tSVG =
    '<svg  width="280" height="280" version="1.1" xmlns="http://www.w3.org/2000/svg"> <rect x="0" y="125" width="280" height="30" style="fill: ' +
    colorBRIDGE +
    '"/> </svg>  ';
  tSVG64 = window.btoa(tSVG);
  tClassB.innerHTML =
    ".m3 {background: url('data:image/svg+xml;base64," +
    tSVG64 +
    "');  background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";

  fClassB = document.createElement("style");
  fClassB.setAttribute("id", "fClassB");
  fSVG =
    '<svg  width="280"  height="280"  version="1.1"  xmlns="http://www.w3.org/2000/svg"> <rect x="0" y="100" width="280" height="30"  style="fill: ' +
    colorBRIDGE +
    '"/> <rect x="0" y="150" width="280" height="30"  style="fill: ' +
    colorBRIDGE +
    '"/>  </svg>  ';
  fSVG64 = window.btoa(fSVG);
  fClassB.innerHTML =
    ".m4 {background: url('data:image/svg+xml;base64," +
    fSVG64 +
    "'); background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";

  icClassB = document.createElement("style");
  icClassB.setAttribute("id", "icClassB");
  icSVG =
    '<svg width="280" height="280" version="1.1" xmlns="http://www.w3.org/2000/svg"> <rect x="125" y="0" width="30" height="280" style="fill: ' +
    colorBRIDGECHECKED +
    '"/> </svg>';
  icSVG64 = window.btoa(icSVG);
  icClassB.innerHTML =
    ".mc1 {background: url('data:image/svg+xml;base64," +
    icSVG64 +
    "');   background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";

  hcClassB = document.createElement("style");
  hcClassB.setAttribute("id", "hcClassB");
  hcSVG =
    '<svg  width="280" height="280" version="1.1" xmlns="http://www.w3.org/2000/svg"> <rect x="100" y="0" width="30" height="280" style="fill: ' +
    colorBRIDGECHECKED +
    '"/>   <rect x="150" y="0" width="30" height="280" style="fill: ' +
    colorBRIDGECHECKED +
    '"/> </svg>  ';
  hcSVG64 = window.btoa(hcSVG);
  hcClassB.innerHTML =
    ".mc2 {background: url('data:image/svg+xml;base64," +
    hcSVG64 +
    "'); background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";

  tcClassB = document.createElement("style");
  tcClassB.setAttribute("id", "tcClassB");
  tcSVG =
    '<svg  width="280" height="280" version="1.1" xmlns="http://www.w3.org/2000/svg"> <rect x="0" y="125" width="280" height="30" style="fill: ' +
    colorBRIDGECHECKED +
    '"/> </svg>  ';
  tcSVG64 = window.btoa(tcSVG);
  tcClassB.innerHTML =
    ".mc3 {background: url('data:image/svg+xml;base64," +
    tcSVG64 +
    "'); background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";

  fcClassB = document.createElement("style");
  fcClassB.setAttribute("id", "fcClassB");
  fcSVG =
    '<svg  width="280"  height="280"  version="1.1"  xmlns="http://www.w3.org/2000/svg"> <rect x="0" y="100" width="280" height="30"  style="fill: ' +
    colorBRIDGECHECKED +
    '"/> <rect x="0" y="150" width="280" height="30"  style="fill: ' +
    colorBRIDGECHECKED +
    '"/>  </svg>  ';
  fcSVG64 = window.btoa(fcSVG);
  fcClassB.innerHTML =
    ".mc4 {background: url('data:image/svg+xml;base64," +
    fcSVG64 +
    "'); background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";

  document.getElementsByTagName("head")[0].appendChild(inClass);
  document.getElementsByTagName("head")[0].appendChild(iClassB);
  document.getElementsByTagName("head")[0].appendChild(hClassB);
  document.getElementsByTagName("head")[0].appendChild(tClassB);
  document.getElementsByTagName("head")[0].appendChild(fClassB);
  document.getElementsByTagName("head")[0].appendChild(icClassB);
  document.getElementsByTagName("head")[0].appendChild(hcClassB);
  document.getElementsByTagName("head")[0].appendChild(tcClassB);
  document.getElementsByTagName("head")[0].appendChild(fcClassB);
  document.getElementsByTagName("head")[0].appendChild(inClassB);
  document.getElementsByTagName("head")[0].appendChild(ingeClassB);
  document.getElementsByTagName("head")[0].appendChild(ingClassB);
  document.getElementsByTagName("head")[0].appendChild(incClassB);
  document.getElementsByTagName("head")[0].appendChild(ingcClassB);
}

function colorBridge() {
  document.getElementsByTagName("head")[0].removeChild(iClassB);
  document.getElementsByTagName("head")[0].removeChild(hClassB);
  document.getElementsByTagName("head")[0].removeChild(tClassB);
  document.getElementsByTagName("head")[0].removeChild(fClassB);

  iClassB = document.createElement("style");
  iClassB.setAttribute("id", "iClassB");
  iSVG =
    '<svg width="280" height="280" version="1.1" xmlns="http://www.w3.org/2000/svg"> <rect x="125" y="0" width="30" height="280" style="fill: ' +
    colorBRIDGE +
    '"/> </svg>';
  iSVG64 = window.btoa(iSVG);
  iClassB.innerHTML =
    ".m1 {background: url('data:image/svg+xml;base64," +
    iSVG64 +
    "');  background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";

  hClassB = document.createElement("style");
  hClassB.setAttribute("id", "hClassB");
  hSVG =
    '<svg  width="280" height="280" version="1.1" xmlns="http://www.w3.org/2000/svg"> <rect x="100" y="0" width="30" height="280" style="fill: ' +
    colorBRIDGE +
    '"/>   <rect x="150" y="0" width="30" height="280" style="fill: ' +
    colorBRIDGE +
    '"/> </svg>  ';
  hSVG64 = window.btoa(hSVG);
  hClassB.innerHTML =
    ".m2 {background: url('data:image/svg+xml;base64," +
    hSVG64 +
    "');  background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";

  tClassB = document.createElement("style");
  tClassB.setAttribute("id", "tClassB");
  tSVG =
    '<svg  width="280" height="280" version="1.1" xmlns="http://www.w3.org/2000/svg"> <rect x="0" y="125" width="280" height="30" style="fill: ' +
    colorBRIDGE +
    '"/> </svg>  ';
  tSVG64 = window.btoa(tSVG);
  tClassB.innerHTML =
    ".m3 {background: url('data:image/svg+xml;base64," +
    tSVG64 +
    "');  background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";

  fClassB = document.createElement("style");
  fClassB.setAttribute("id", "fClassB");
  fSVG =
    '<svg  width="280"  height="280"  version="1.1"  xmlns="http://www.w3.org/2000/svg"> <rect x="0" y="100" width="280" height="30"  style="fill: ' +
    colorBRIDGE +
    '"/> <rect x="0" y="150" width="280" height="30"  style="fill: ' +
    colorBRIDGE +
    '"/>  </svg>  ';
  fSVG64 = window.btoa(fSVG);
  fClassB.innerHTML =
    ".m4 {background: url('data:image/svg+xml;base64," +
    fSVG64 +
    "');  background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";

  document.getElementsByTagName("head")[0].appendChild(iClassB);
  document.getElementsByTagName("head")[0].appendChild(hClassB);
  document.getElementsByTagName("head")[0].appendChild(tClassB);
  document.getElementsByTagName("head")[0].appendChild(fClassB);
}

function colorBridgeChecked() {
  document.getElementsByTagName("head")[0].removeChild(icClassB);
  document.getElementsByTagName("head")[0].removeChild(hcClassB);
  document.getElementsByTagName("head")[0].removeChild(tcClassB);
  document.getElementsByTagName("head")[0].removeChild(fcClassB);

  icClassB = document.createElement("style");
  icClassB.setAttribute("id", "icClassB");
  icSVG =
    '<svg width="280" height="280" version="1.1" xmlns="http://www.w3.org/2000/svg"> <rect x="125" y="0" width="30" height="280" style="fill: ' +
    colorBRIDGECHECKED +
    '"/> </svg>';
  icSVG64 = window.btoa(icSVG);
  icClassB.innerHTML =
    ".mc1 {background: url('data:image/svg+xml;base64," +
    icSVG64 +
    "');   background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";

  hcClassB = document.createElement("style");
  hcClassB.setAttribute("id", "hcClassB");
  hcSVG =
    '<svg  width="280" height="280" version="1.1" xmlns="http://www.w3.org/2000/svg"> <rect x="100" y="0" width="30" height="280" style="fill: ' +
    colorBRIDGECHECKED +
    '"/>   <rect x="150" y="0" width="30" height="280" style="fill: ' +
    colorBRIDGECHECKED +
    '"/> </svg>  ';
  hcSVG64 = window.btoa(hcSVG);
  hcClassB.innerHTML =
    ".mc2 {background: url('data:image/svg+xml;base64," +
    hcSVG64 +
    "');   background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";

  tcClassB = document.createElement("style");
  tcClassB.setAttribute("id", "tcClassB");
  tcSVG =
    '<svg  width="280" height="280" version="1.1" xmlns="http://www.w3.org/2000/svg"> <rect x="0" y="125" width="280" height="30" style="fill: ' +
    colorBRIDGECHECKED +
    '"/> </svg>  ';
  tcSVG64 = window.btoa(tcSVG);
  tcClassB.innerHTML =
    ".mc3 {background: url('data:image/svg+xml;base64," +
    tcSVG64 +
    "');background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";

  fcClassB = document.createElement("style");
  fcClassB.setAttribute("id", "fcClassB");
  fcSVG =
    '<svg  width="280"  height="280"  version="1.1"  xmlns="http://www.w3.org/2000/svg"> <rect x="0" y="100" width="280" height="30"  style="fill: ' +
    colorBRIDGECHECKED +
    '"/> <rect x="0" y="150" width="280" height="30"  style="fill: ' +
    colorBRIDGECHECKED +
    '"/>  </svg>  ';
  fcSVG64 = window.btoa(fcSVG);
  fcClassB.innerHTML =
    ".mc4 {background: url('data:image/svg+xml;base64," +
    fcSVG64 +
    "'); background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";

  document.getElementsByTagName("head")[0].appendChild(icClassB);
  document.getElementsByTagName("head")[0].appendChild(hcClassB);
  document.getElementsByTagName("head")[0].appendChild(tcClassB);
  document.getElementsByTagName("head")[0].appendChild(fcClassB);
}

function colorCircle() {
  document.getElementsByTagName("head")[0].removeChild(inClassB);
  inClassB = document.createElement("style");
  inClassB.setAttribute("id", "inClassB");

  inCircleSVG =
    '<svg width="280" height="280" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="140" r="130" stroke="' +
    colorCIRCLE +
    '" stroke-width="20" fill="transparent"/></svg>';
  inCircleSVG64 = window.btoa(inCircleSVG);
  inClassB.innerHTML =
    ".in {background: url('data:image/svg+xml;base64," +
    inCircleSVG64 +
    "'); color: " +
    colorDIG +
    "; background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";

  document.getElementsByTagName("head")[0].appendChild(inClassB);
}

function colorTicked() {
  document.getElementsByTagName("head")[0].removeChild(ingClassB);

  ingClassB = document.createElement("style");
  ingClassB.setAttribute("id", "ingClassB");
  ingCircleSVG =
    '<svg width="280" height="280" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="140" r="130" stroke="' +
    colorCIRCLE +
    '" stroke-width="20" fill="' +
    colorING +
    '"/></svg>';
  ingCircleSVG64 = window.btoa(ingCircleSVG);
  ingClassB.innerHTML =
    ".ing {background: url('data:image/svg+xml;base64," +
    ingCircleSVG64 +
    "'); color: " +
    colorINGDIGIT +
    "; background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";

  document.getElementsByTagName("head")[0].appendChild(ingClassB);
}


function colorTickedWrong() {
  document.getElementsByTagName("head")[0].removeChild(ingeClassB);

  ingeClassB = document.createElement("style");
  ingeClassB.setAttribute("id", "ingeClassB");
  ingeCircleSVG =
    '<svg width="280" height="280" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="140" r="130" stroke="' +
    colorCIRCLE +
    '" stroke-width="20" fill="' +
    colorINGE +
    '"/></svg>';
  ingeCircleSVG64 = window.btoa(ingeCircleSVG);
  ingeClassB.innerHTML =
    ".inge {background: url('data:image/svg+xml;base64," +
    ingeCircleSVG64 +
    "'); color: " +
    colorINGDIGIT +
    "; background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";

  document.getElementsByTagName("head")[0].appendChild(ingeClassB);
}

function colorChecked() {
  document.getElementsByTagName("head")[0].removeChild(incClassB);

  incClassB = document.createElement("style");
  incClassB.setAttribute("id", "incClassB");

  incCircleSVG =
    '<svg width="280" height="280" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="140" r="130" stroke="' +
    colorCHECK +
    '" stroke-width="20" fill="transparent"/></svg>';
  incCircleSVG64 = window.btoa(incCircleSVG);
  incClassB.innerHTML =
    ".inc {background: url('data:image/svg+xml;base64," +
    incCircleSVG64 +
    "'); color: " +
    colorCHECKDIGIT +
    "; background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";

  document.getElementsByTagName("head")[0].appendChild(incClassB);
}

function colorCheckedTicked() {
  document.getElementsByTagName("head")[0].removeChild(ingcClassB);

  ingcClassB = document.createElement("style");
  ingcClassB.setAttribute("id", "ingcClassB");
  ingcCircleSVG =
    '<svg width="280" height="280" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="140" r="130" stroke="' +
    colorCHECK +
    '" stroke-width="20" fill="' +
    colorCHECKTICKED +
    '"/></svg>';
  ingcCircleSVG64 = window.btoa(ingcCircleSVG);
  ingcClassB.innerHTML =
    ".ingc {background: url('data:image/svg+xml;base64," +
    ingcCircleSVG64 +
    "'); color: " +
    colorCHECKTICKEDDIGIT +
    "; background-size: 28px 28px;background-position: center;background-repeat: no-repeat;width: 105%;height: 105%;}";

  document.getElementsByTagName("head")[0].appendChild(ingcClassB);
}

function colorDigit() {
  colorCircle();
}
