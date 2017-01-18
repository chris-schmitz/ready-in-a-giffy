const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const config = require('./config')

let win

require('electron-reload')(__dirname)



function createWindow(){
    win = new BrowserWindow({
        width: config.window.width,
        height: config.window.height
    })

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', () => {
    // only need to run this once. 
    // if(process.env.NODE_ENV !== 'production'){
    //     require('vue-devtools').install()
    // }
    createWindow()
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
    if(win === null){ // i.e. on mac with closed app window
        createWindow()
    }
})