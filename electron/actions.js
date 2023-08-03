const { Menu, MenuItem, app } = require('electron');
const { THEME } = require('./constants');

const initActions = (ipcMain, window, store) => {
  ipcMain.handle('SWITCH_THEME', (_event, theme) => {
    store.set(THEME, theme);
    return theme;
  });

  ipcMain.handle('GET_THEME', () => {
    return store.get(THEME);
  });

  ipcMain.handle('GET_USER_DATA_PATH', () => {
    return app.getPath('userData');
  });

  const contextMenu = new Menu();
  const deleteMenuItem = new MenuItem({
    label: 'Delete',
    click: () => {
      window.webContents.send('DELETE_SNIPPET');
    },
  });
  contextMenu.append(deleteMenuItem);

  ipcMain.handle('OPEN_CONTEXT_MENU', (_event) => {
    contextMenu.popup();
  });
};

module.exports = { initActions };
