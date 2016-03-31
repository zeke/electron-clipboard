const path = require('path')
const menubar = require('menubar')

let mb = menubar({
  dir: path.join(__dirname, 'app'),
  width: 840,
  height: 540,
  transparent: true,
  hasShadow: false,
  preloadWindow: true,
  'window-position': 'center'
})

mb.on('ready', function ready () {
  console.log('app is ready')
  // console.log(mb.window)
  // console.log(mb.window.webContents)
  // mb.window.body.style.setProperty('--max-window-height', '100px')
  // mb.window.toggleDevTools()
})
