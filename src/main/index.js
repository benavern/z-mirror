'use strict'

import { app, BrowserWindow } from 'electron'

const devEnv = process.env.NODE_ENV !== 'development'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (devEnv) {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  let windowConfig = {
    height: devEnv ? 1440 : 960,
    width: devEnv ? 900 : 600,
    x: 0,
    y: 0,
    darktheme: true,
    useContentSize: true,
    fullscreen: devEnv,
    autoHideMenuBar: devEnv
  }

  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow(windowConfig)

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
