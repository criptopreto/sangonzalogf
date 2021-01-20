require('electron-reload')(__dirname);
const path = require('path');
const process = require('process');
const {app, BrowserWindow, screen, nativeTheme, Menu} = require('electron');

nativeTheme.themeSource = 'dark';
let splash;
let passWin;
let mainWin;

const createWindow = ()=>{
    const {width, height} = screen.getPrimaryDisplay().workAreaSize;
    Menu.setApplicationMenu(false);

    mainWin = new BrowserWindow({
        width: width / 1.25,
        height: height / 1.25,
        webPreferences: {
            nodeIntegration: true
        },
        center: true,
        resizable: true,
        fullscreen: false
    });

    mainWin.loadFile(path.join(__dirname, 'public', 'index.html'));

    mainWin.webContents.openDevTools();
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });