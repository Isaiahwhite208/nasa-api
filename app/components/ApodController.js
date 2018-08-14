import ApodService from "./ApodService.js";

let aService = new ApodService()

function drawPhoto(photo) {
  console.log(photo)
  document.getElementById('photo').innerHTML = `
        <h1> ${photo.title} </h1> 
        <p> ${photo.date} </p> 
        <img src="${photo.imgUrl}" alt="">
        <p> ${photo.explanation} </p>
  `
}


export default class ApodController {
  constructor() {
    this.getPhoto()
  }
  getPhoto(e) {
    let date = ''
    if (e) {
      e.preventDefault();
      debugger
      date = e.target.date.value
    }
    date = date || new Date(Date.now()).toISOString().split('T')[0]
    aService.getPhoto(date, drawPhoto)
  }
}