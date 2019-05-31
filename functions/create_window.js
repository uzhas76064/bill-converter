const path = require('path');
const url = require('url');

const {BrowserWindow} = require('electron');

module.exports.createWindow = function() {
    let win = new BrowserWindow ({
        width: 700,
        height: 700,
        icon: __dirname + '/icons/icon.png'
    });

    win.loadURL(url.format({
        pathname: path.join('../index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}