const createWin = require('./functions/create_window');

const {app} = require('electron');

app.on('ready', createWin.createWindow);
app.on('window-all-closed', () => {
    app.quit();
});