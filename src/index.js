const { app, BrowserWindow, ipcMain } = require('electron');
const path = require("path");
const robotjs = require('@hurdlegroup/robotjs');

const createWindow = () => {
    const window = new BrowserWindow({
        width: 400,
        minWidth: 400,
        maxWidth: 400,
        height: 300,
        minHeight: 300,
        maxHeight: 300,
        autoHideMenuBar: true,
        alwaysOnTop: true,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    });

    // window.loadFile("./src/html/index.html");
    window.loadURL("http://127.0.0.1:5500/src/html/index.html");
};

app.on('ready', () => {
    ipcMain.on('click-mouse', (_event, button) => {
        robotjs.mouseClick(button);
    });

    createWindow();
});