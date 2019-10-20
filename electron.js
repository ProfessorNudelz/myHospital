const { app, BrowserWindow } = require('electron')

function createWindow() {
  let win = new BrowserWindow({width:1200, height:800})
  win.loadURL('http://localhost:3000/patients')

  // Meant to remove file, edit etc. from the top of the menu
  win.removeMenu()
}

app.on('ready', createWindow)
