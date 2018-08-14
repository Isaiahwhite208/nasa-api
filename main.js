import NasaController from './app/components/nasa-controller.js'

class App {
 constructor() {
  this.controllers = {
   swapi: new NasaController
  }
 }
}

const app = new App()
window.app = app