const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld('api', {
    clickMouse: (button) => ipcRenderer.send("click-mouse", button)
});