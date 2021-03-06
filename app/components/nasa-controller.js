import NasaService from "./nasa-service.js"

const nasaService = new NasaService
let app = document.getElementById('app')

function draw(data) {
  console.log(data)
  app.innerHTML = `
  <div id="error"></div>
  <button onclick="app.controllers.nasa.getNasa()"> Get Nasa </button>
  </div>`
}

function drawNasa(nasa) {
  let nasaElem = document.getElementById('nasa')
  let template = ''
  nasa.results.forEach(nasa => {
    template +=
      `<div>
    ${nasa.name}
    </div>`
  })
  nasaElem.innerHTML = template
}

function drawError(error) {
  console.log(error)
  document.getElementById('error').innerHTML = error.message
}

export default class NasaController {
  constructor() {
    draw()
  }

  getNasa() {
    nasaService.getNasa(console.log, drawError)

  }
}