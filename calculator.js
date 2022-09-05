function backSpace() {
    var resText = document.getElementById('results');
    resText.setAttribute('value','0');
}

function showResults() {
    var resText = document.getElementById('results');
    resText.setAttribute('value','1');
}
function cancelEntry() {
    var resText = document.getElementById('results');
    resText.setAttribute('value','0');
}
function addEntry(btn) {
    var res = document.getElementById('results');
    resValue = res.value;
    newValue = btn.value ;
    if (resValue == "0"){
        resValue = "";
    }
    value = resValue + newValue;
    res.setAttribute('value', value);
}
