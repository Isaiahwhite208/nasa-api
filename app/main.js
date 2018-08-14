import ApodController from "./components/ApodController.js";

class App {
  constructor() {
    this.controllers = {
      apodController: new ApodController()
    }
  }
}


// @ts-ignore
window.app = new App()