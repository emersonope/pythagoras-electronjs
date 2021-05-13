const electron = require('electron')
const app = electron.app
var path = require('path')
const { spawn } = require('child_process')
const { create } = require('domain')

const BrowserWindow = electron.BrowserWindow

app.on('ready', function(){
    //criando a janela
    let calculateWindow = new BrowserWindow({
        width: 400,
        height: 650,
        maxHeight: 650,
        maxWidth: 600,
        //for frameless window
        frame: false, 
        titleBarStyle: 'hidden',
        //our input don't want to resize
        resizable: false,
        //window default backgroud color
        backgroundColor: '#202121',
        //don't need maximize button
        maximizable: false,

        //web preferences
        webPreferences:{
            preload: path.join(__dirname, 'preload.js'),
            //this will prevent the require error
            nodeIntegration: true
        }
    })

    //load the html
    calculateWindow.loadURL('file://' + __dirname + '/html/calculator.html')

    //now that the html it's loaded the window is ready to show

    
    calculateWindow.once('ready-to-show', function(){
        spawn("python3", ["./python/maiin.py"]),
        calculateWindow.show()
    })
    //quit when all windows are closed
    app.on('window-all-closed', function() {
        if (process.platform != 'darwin') {
             app.quit()
        }
    })
})