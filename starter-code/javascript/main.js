var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
let splitList = document.getElementById('splits');


function printTime() {
    printMinutes();
    printSeconds();
}

function printMinutes() {
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.classList.contains('start')) {
        btnLeft.classList.remove('start');
        btnLeft.classList.add('stop');
        btnLeft.innerHTML = 'STOP';
        btnRight.classList.remove('reset');
        btnRight.classList.add('split');
        btnRight.innerHTML = 'SPLIT';
        chronometer.startClick(printTime)
    }
    else if (btnLeft.classList.contains('stop')) {
        btnLeft.classList.remove('stop');
        btnLeft.classList.add('start');
        btnLeft.innerHTML = 'START';
        btnRight.classList.remove('split');
        btnRight.classList.add('reset');
        btnRight.innerHTML = 'RESET';
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.classList.contains('reset')) {
        chronometer.resetClick();
        printTime();
        while (splitList.firstChild) {
            splitList.removeChild(splitList.firstChild);
          }
    }
    else {
        let split = document.createElement('li');
        split.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()).join('') + ':' + chronometer.twoDigitsNumber(chronometer.getSeconds()).join('');

        splitList.appendChild(split);
    }
});
