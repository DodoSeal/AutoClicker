const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const window = new BrowserWindow({
        width: 400,
        minWidth: 400,
        maxWidth: 400,
        height: 300,
        minHeight: 300,
        maxHeight: 300,
        autoHideMenuBar: true,
        alwaysOnTop: true
    });

    // window.loadFile("./src/html/index.html");
    window.loadURL("http://127.0.0.1:5500/src/html/index.html");
};

app.on('ready', () => {
    createWindow();
});