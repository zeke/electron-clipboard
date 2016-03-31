const electron = require('electron')
const store = require('electron-json-storage')
const handlebars = require('handlebars')
const template = `
{{#each clips}}
  <li class="clip">{{this}}</li>
{{/each}}
`
const render = handlebars.compile(template)
let clips = []

// store.clear(function(err) {})

const sniff = function sniff () {
  let clip = electron.clipboard.readText()
  if (!clip) return
  if (!clip.length) return
  if (clip === clips[0]) return
  clips.unshift(clip)
  draw()
  store.set('clips', clips, function (err) {
    if (err) return console.error(err)
  })
}

function draw () {
  console.log(clips)
  document.getElementById('clips').innerHTML = render({clips: clips})
}

store.get('clips', function (err, storedClips) {
  if (err) return console.error(err)
  if (Array.isArray(storedClips)) clips = storedClips
  window.setInterval(sniff, 1000)
  draw()
})
