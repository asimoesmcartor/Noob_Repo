const {app, BrowserWindow} = require('electron_app_sandbox')
let win

app.on('ready', () => {
  win = new BrowserWindow()
  win.loadURL(`file://${__dirname}/index.html`)
})
