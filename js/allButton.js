const remote = require('electron'). remote

document.getElementById('calculator-minimize-btn').addEventListener("click", 
function(e) {  

    var window = remote.getCurrentWindow();
    window.minimize();

})

document.getElementById('calculator-close-btn').addEventListener("click", 
function(e) {  

    var window = remote.getCurrentWindow();
    window.close();

})



document.getElementById('clearButton').addEventListener("click", 
function clearData() { 
    document.getElementById('oppositeSideA').value = "";
    document.getElementById('oppositeSideB').value = "";
    document.getElementById('oppositeSideC').value = "";
    document.getElementById('alpha').value = "";
    document.getElementById('betha').value = "";
    document.getElementById('perimerer').value = "";
    document.getElementById('area').value = "";
    document.getElementById('errorMessage').innerHTML = "";
})

