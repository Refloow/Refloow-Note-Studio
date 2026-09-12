const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    checkStatus: () => ipcRenderer.invoke('check-status'),
    loadUnencrypted: () => ipcRenderer.invoke('load-unencrypted'),
    authenticate: (password) => ipcRenderer.invoke('authenticate', password),
    saveData: (password, dataObj) => ipcRenderer.invoke('save-data', password, dataObj),
    windowMin: () => ipcRenderer.send('window-min'),
    windowMax: () => ipcRenderer.send('window-max'),
    windowClose: () => ipcRenderer.send('window-close'),
    openLink: (url) => ipcRenderer.send('open-link', url),
    encryptText: (text, pass) => ipcRenderer.invoke('encrypt-text', text, pass),
    decryptText: (data, pass) => ipcRenderer.invoke('decrypt-text', data, pass)
});